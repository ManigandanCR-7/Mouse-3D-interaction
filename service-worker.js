self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "landing page/Cursor.html"
        "landing page/bluerings.html"
        "landing page/feather.html"
        "landing page/fluid.html"
        "landing page/review.html"
        "Group 5.png",
        "Group 6.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
