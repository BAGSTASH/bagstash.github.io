const CACHE_NAME = "bagsphere-v1";

const FILES_TO_CACHE = [
  "index.html",
  "products.html",
  "product-suitcase.html",
  "product-backpack1.html",
  "contact.html",
  "style.css",
  "script.js",
  "manifest.json",
  "Images/logo.png",
  "Images/banner.jpg",
  "Images/suitcase.jpg",
  "Images/backpack1.jpg",
  "Images/backpack2.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
