self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // PWA onayı için gerekli temel fetch dinleyicisi
});