self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('myapp-static-v1').then(function(cache) {
          return cache.addAll([
            '/'
          ]);
        })
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(cachedResponse) {
        return cachedResponse || fetch(event.request);
      })
    );
});