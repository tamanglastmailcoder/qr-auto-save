self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qr-app-cache').then(cache => 
      cache.addAll([
        './',
        './index.html',
        './manifest.json',
        'https://unpkg.com/html5-qrcode'
      ])
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
