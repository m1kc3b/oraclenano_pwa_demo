self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('oracle-nano-cache').then(cache => {
      return cache.addAll([
        '/', '/index.html', '/style.css', '/app.js', '/oraclenano.js', '../wasm/oraclenano.js', '../wasm/oraclenano_bg.wasm'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});