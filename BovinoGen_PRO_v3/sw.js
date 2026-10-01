const CACHE_NAME = 'bovinogen-v3';
const ASSETS = [ './', './index.html', './styles.css', './app.js', './manifest.json', './icon.svg' ];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))));
