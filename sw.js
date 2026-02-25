self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("qr-app-cache-v2").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "https://unpkg.com/html5-qrcode"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
