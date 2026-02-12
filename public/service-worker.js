const CACHE_NAME = 'workout-pwa-react-v2';
const CORE_ASSETS = [
  'index.html',
  'manifest.webmanifest',
  'service-worker.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-192.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/shortcut-log.png',
  'icons/shortcut-plan.png'
];

const toUrl = (path) => new URL(path, self.registration.scope).toString();
const CORE_URLS = CORE_ASSETS.map(toUrl);
const INDEX_URL = toUrl('index.html');
const scopeUrl = new URL(self.registration.scope);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key.startsWith('workout-pwa-') && key !== CACHE_NAME).map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === scopeUrl.origin;
  const isNavigate =
    event.request.mode === 'navigate' || (event.request.headers.get('accept') || '').includes('text/html');
  const isAsset =
    isSameOrigin &&
    (requestUrl.pathname.startsWith(`${scopeUrl.pathname}assets/`) ||
      requestUrl.pathname.endsWith('.js') ||
      requestUrl.pathname.endsWith('.css') ||
      requestUrl.pathname.endsWith('.svg') ||
      requestUrl.pathname.endsWith('.png') ||
      requestUrl.pathname.endsWith('.webp'));

  if (isNavigate) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(event.request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(INDEX_URL, response.clone());
          return response;
        } catch (error) {
          return (await caches.match(INDEX_URL)) || new Response('<h1>Offline</h1>', {
            headers: { 'Content-Type': 'text/html' }
          });
        }
      })()
    );
    return;
  }

  if (isAsset) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        const response = await fetch(event.request);
        (await caches.open(CACHE_NAME)).put(event.request, response.clone());
        return response;
      })()
    );
  }
});
