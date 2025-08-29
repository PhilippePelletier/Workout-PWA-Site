
const CACHE_NAME = 'workout-pwa-compact-v2-v1756490544';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./service-worker.js'];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate', e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('workout-pwa-compact-v2-')&&k!==CACHE_NAME).map(k=>caches.delete(k))))));
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET') return;
  e.respondWith((async()=>{
    try{ const net=await fetch(e.request); const c=await caches.open(CACHE_NAME); c.put(e.request, net.clone()); return net; }
    catch{ const cached=await caches.match(e.request); return cached || caches.match('./index.html'); }
  })());
});
