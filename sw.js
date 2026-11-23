// Service worker minimal : permet l'installation sur l'écran d'accueil, sans mise en cache (données toujours en direct).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
