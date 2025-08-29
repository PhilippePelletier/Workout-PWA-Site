const CACHE_NAME = 'workout-pwa-compact-v3-1756493789';
const ASSETS = [
  './','./index.html','./manifest.webmanifest','./service-worker.js',
  './icons/icon-192.png','./icons/icon-512.png','./icons/maskable-192.png','./icons/maskable-512.png',
  './icons/apple-touch-icon.png','./icons/shortcut-log.png','./icons/shortcut-plan.png'
];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e=>e.waitUntil((async()=>{
  const keys = await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('workout-pwa-compact-v3-') && k!==CACHE_NAME).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET') return;
  if(e.request.mode==='navigate' || (e.request.headers.get('accept')||'').includes('text/html')){
    e.respondWith((async()=>{
      try{
        const net = await fetch(e.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put('./index.html', net.clone());
        return net;
      }catch(e){
        return (await caches.match('./index.html')) || new Response('<h1>Offline</h1>',{headers:{'Content-Type':'text/html'}});
      }
    })());
    return;
  }
  e.respondWith((async()=>{
    const cached = await caches.match(e.request);
    if(cached) return cached;
    const net = await fetch(e.request);
    (await caches.open(CACHE_NAME)).put(e.request, net.clone());
    return net;
  })());
});
