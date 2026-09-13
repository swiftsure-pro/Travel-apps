const CACHE = 'roadtrip-shell-20260913T193733.820347Z';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
const IMAGES = ["https://images.unsplash.com/photo-1655044511902-cbe627c8a3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4OTMyMjAzMXww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1614987553187-e2a68730cde6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4OTMyMjAzMXww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1655044441238-2f3839cd1358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4OTMyMjAzMXww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1602516029536-77f808c3db4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4OTMyMjAzMXww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1635531135008-b53d954e3e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1669565277483-04ce274248ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1649423810201-e3bd3d6e84fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1512910857525-7826b462c0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1586975562124-a0e57553da49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODkzMjIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1559686697-df1572f62ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODkzMjIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1656171371995-4f9aec4e4fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODkzMjIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1585939417924-7918fad84cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODkzMjIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1565127803082-69dd82351360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1606373664971-bf9b25eb508d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1572128023846-8cf5791a1299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1611839234426-21de3ee58176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg5MzIyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1711660302379-e6f66375a3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8TWlsZm9yZCUyQyUyME1hc3NhY2h1c2V0dHN8ZW58MHwwfHx8MTc4OTMyODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1681746192963-2d199a42f8ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8TWlsZm9yZCUyQyUyME1hc3NhY2h1c2V0dHN8ZW58MHwwfHx8MTc4OTMyODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1723930880073-30db9996e2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8TWlsZm9yZCUyQyUyME1hc3NhY2h1c2V0dHN8ZW58MHwwfHx8MTc4OTMyODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1709096681950-0bb67420aadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TWlsZm9yZCUyQyUyME1hc3NhY2h1c2V0dHN8ZW58MHwwfHx8MTc4OTMyODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1585694813849-abaabaa01ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODkzMjIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1690610266753-726bbe36f3eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODkzMjIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1670530898662-92dde9e3f64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODkzMjIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1656095176667-fa75558b4ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODkzMjIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Danielson_Airport_-_Connecticut.jpg/960px-Danielson_Airport_-_Connecticut.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Danielson_Methodist_Church%2C_Killingly%2C_Connecticut.jpg/960px-Danielson_Methodist_Church%2C_Killingly%2C_Connecticut.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Five_Mile_River_%28Danielson%2C_Connecticut%29.jpg/960px-Five_Mile_River_%28Danielson%2C_Connecticut%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Danielson%2C_CT.jpg/960px-Danielson%2C_CT.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Family_Dollar_%28Willimantic_Plaza%2C_Willimantic%2C_Connecticut%29_%2847208445772%29.jpg/960px-Family_Dollar_%28Willimantic_Plaza%2C_Willimantic%2C_Connecticut%29_%2847208445772%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Former_Willimantic_Movieplex_%28Willimantic%2C_Connecticut%29_%2826679339277%29.jpg/960px-Former_Willimantic_Movieplex_%28Willimantic%2C_Connecticut%29_%2826679339277%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Greetings_from_Willimantic%2C_Connecticut_-_Large_Letter_Postcard_%287850206954%29.jpg/960px-Greetings_from_Willimantic%2C_Connecticut_-_Large_Letter_Postcard_%287850206954%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/O%27Reilly_Auto_Parts_%28Willimantic%2C_Connecticut%29_%2826679341187%29.jpg/960px-O%27Reilly_Auto_Parts_%28Willimantic%2C_Connecticut%29_%2826679341187%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1611008715987-60499f61074c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8SGFydGZvcmQlMkMlMjBDb25uZWN0aWN1dHxlbnwwfDB8fHwxNzg5MzI4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1611008715758-e56c60b9476d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8SGFydGZvcmQlMkMlMjBDb25uZWN0aWN1dHxlbnwwfDB8fHwxNzg5MzI4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1694276308868-001f56408ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8SGFydGZvcmQlMkMlMjBDb25uZWN0aWN1dHxlbnwwfDB8fHwxNzg5MzI4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1611008715369-f8037c6fed08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8SGFydGZvcmQlMkMlMjBDb25uZWN0aWN1dHxlbnwwfDB8fHwxNzg5MzI4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1576343900792-4b504d7310ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8RmFybWluZ3RvbiUyQyUyMENvbm5lY3RpY3V0fGVufDB8MHx8fDE3ODkzMjg0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1593793143462-366c259d82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8RmFybWluZ3RvbiUyQyUyMENvbm5lY3RpY3V0fGVufDB8MHx8fDE3ODkzMjg0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1593741576681-39e7520f2264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8RmFybWluZ3RvbiUyQyUyMENvbm5lY3RpY3V0fGVufDB8MHx8fDE3ODkzMjg0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1593792954028-d9e3c606b640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8RmFybWluZ3RvbiUyQyUyMENvbm5lY3RpY3V0fGVufDB8MHx8fDE3ODkzMjg0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://upload.wikimedia.org/wikipedia/commons/3/33/Brooklyn_Museum_-_Summer_Landscape_Near_New_Haven_-_George_H._Durrie_-_overall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://images.unsplash.com/photo-1610212112844-de4500134200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8TmV3JTIwSGF2ZW4lMkMlMjBDb25uZWN0aWN1dHxlbnwwfDB8fHwxNzg5MzIyMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_11_of_12%29.tif/lossy-page1-960px-New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_11_of_12%29.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_12_of_12%29.png/960px-New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_12_of_12%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"];

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

    // A page navigation goes to the network FIRST, and falls back to the
    // cache only when the network cannot answer.
    //
    // Cache-first is right for images and pinned CDN assets -- those are
    // immutable, and their URLs change when their content does. It is wrong
    // for the itinerary itself. index.html is precached in SHELL, so
    // cache-first served the copy from whenever the reader first opened the
    // page and kept serving it: a republished guide was invisible for at
    // least one load, and indefinitely to a reader who never happened to
    // reload twice. That is exactly backwards for the one file that is
    // expected to be republished, and it shipped three corrected trail links
    // that nobody could see.
    //
    // The offline guarantee is unchanged. Whatever is cached is still
    // returned whenever fetch rejects, which is what being offline looks
    // like from here.
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response && response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE).then((cache) => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() =>
                    caches
                        .match(event.request)
                        .then((cached) => cached || caches.match('./index.html'))
                )
        );
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
