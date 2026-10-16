'use strict';

const CACHE_NAME = 'adarsh-maths-static-v1';
const BASE_URL = self.registration.scope;
const APP_URLS = {
  home: new URL('./', BASE_URL).href,
  index: new URL('index.html', BASE_URL).href,
  manifest: new URL('manifest.webmanifest', BASE_URL).href,
  icon192: new URL('icons/icon-192.png', BASE_URL).href,
  icon512: new URL('icons/icon-512.png', BASE_URL).href,
  maskable: new URL('icons/icon-maskable-512.png', BASE_URL).href
};
const APP_SHELL = Object.values(APP_URLS);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith('adarsh-maths-') && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(APP_URLS.index, copy));
          }
          return response;
        })
        .catch(() => caches.match(APP_URLS.index).then((cached) => cached || caches.match(APP_URLS.home)))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
