const CACHE = 'roadtrip-shell-20260903T040507.545104Z';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
const IMAGES = ["https://images.unsplash.com/photo-1548092304-e0205cb0031b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8QnJ1c3NlbHMlMkMlMjBCZWxnaXVtfGVufDB8MHx8fDE3ODc4Njc2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1581161424127-30b1f7eee75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8QnJ1c3NlbHMlMkMlMjBCZWxnaXVtfGVufDB8MHx8fDE3ODc4Njc2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1582124534218-f7bf8b908f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8QnJ1c3NlbHMlMkMlMjBCZWxnaXVtfGVufDB8MHx8fDE3ODc4Njc2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1701013694884-a278c7acea5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8QnJ1c3NlbHMlMkMlMjBCZWxnaXVtfGVufDB8MHx8fDE3ODc4Njc2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8QW1zdGVyZGFtJTJDJTIwTmV0aGVybGFuZHN8ZW58MHwwfHx8MTc4Nzg3NjgwNHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8QW1zdGVyZGFtJTJDJTIwTmV0aGVybGFuZHN8ZW58MHwwfHx8MTc4Nzg3NjgwNHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8QW1zdGVyZGFtJTJDJTIwTmV0aGVybGFuZHN8ZW58MHwwfHx8MTc4Nzg3NjgwNHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8QmVybGluJTJDJTIwR2VybWFueXxlbnwwfDB8fHwxNzg3ODc2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8QmVybGluJTJDJTIwR2VybWFueXxlbnwwfDB8fHwxNzg3ODc2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8UHJhZ3VlJTJDJTIwQ3plY2glMjBSZXB1YmxpY3xlbnwwfDB8fHwxNzg3ODc2ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8UHJhZ3VlJTJDJTIwQ3plY2glMjBSZXB1YmxpY3xlbnwwfDB8fHwxNzg3ODc2ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1619558846792-1fc47446bbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8UHJhZ3VlJTJDJTIwQ3plY2glMjBSZXB1YmxpY3xlbnwwfDB8fHwxNzg3ODc2ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1596811311317-c948dd4382dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8UHJhZ3VlJTJDJTIwQ3plY2glMjBSZXB1YmxpY3xlbnwwfDB8fHwxNzg3ODc2ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1605186620429-1ece911f171c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8RnJhbmtmdXJ0JTJDJTIwR2VybWFueXxlbnwwfDB8fHwxNzg3ODc2ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1607879344639-d5f8dec22a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8RnJhbmtmdXJ0JTJDJTIwR2VybWFueXxlbnwwfDB8fHwxNzg3ODc2ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1577185816322-21f2a92b1342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8RnJhbmtmdXJ0JTJDJTIwR2VybWFueXxlbnwwfDB8fHwxNzg3ODc2ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1642096633192-9290503a9a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8RnJhbmtmdXJ0JTJDJTIwR2VybWFueXxlbnwwfDB8fHwxNzg3ODc2ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) =>
            // addAll is atomic -- one 404 or CORS-opaque response would abort
            // the whole install and leave the app uncached. Images come from
            // third-party hosts we do not control, so each is added
            // individually and allowed to fail.
            cache.addAll(SHELL).then(() =>
                Promise.all(IMAGES.map((u) => cache.add(u).catch(() => null)))
            )
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }

    const reqUrl = new URL(event.request.url);
    const sameOrigin = reqUrl.origin === self.location.origin;
    const cacheableCdn =
        reqUrl.href.startsWith('https://cdn.tailwindcss.com') ||
        reqUrl.href.startsWith('https://unpkg.com/lucide@latest') ||
        reqUrl.href.startsWith('https://cdn.jsdelivr.net/npm/leaflet@1.9.4/');

    // Images are now loaded from their source hosts rather than a local
    // ./images copy, so a cross-origin image request is expected traffic, not
    // something to pass through uncached. Keyed on request.destination rather
    // than a host allowlist, since the providers (NPS, Wikimedia, Unsplash)
    // serve from several domains and CDNs.
    const isImage = event.request.destination === 'image';

    if (!sameOrigin && !cacheableCdn && !isImage) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) {
                return cached;
            }
            return fetch(event.request)
                .then((response) => {
                    // Cross-origin images fetched without CORS come back opaque:
                    // status 0 and ok === false. Testing response.ok alone would
                    // cache nothing at runtime while still looking fine online,
                    // so the failure would surface only offline.
                    const storable =
                        response && (response.ok || response.type === 'opaque');
                    if (storable) {
                        const clone = response.clone();
                        caches.open(CACHE).then((cache) => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => {
                    // Only a page navigation should fall back to the shell.
                    // Handing index.html to an <img> produces a broken image
                    // instead of letting its onerror handler hide the tile.
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                    return Response.error();
                });
        })
    );
});
