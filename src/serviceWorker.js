export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    navigator.serviceWorker.register(`${baseUrl}service-worker.js`).catch(() => {
      // fail silently for now
    });
  });
}
