const CACHE = 'roadtrip-shell-20260830T213847.510712Z';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
const IMAGES = ["https://images.unsplash.com/photo-1627750739839-f8b352c30f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8U3QuJTIwR2VvcmdlJTJDJTIwVXRhaHxlbnwwfDB8fHwxNzg3NTMyMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1628979103519-37521115c11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8U3QuJTIwR2VvcmdlJTJDJTIwVXRhaHxlbnwwfDB8fHwxNzg3NTMyMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1582058308470-4901b62c7550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8U3QuJTIwR2VvcmdlJTJDJTIwVXRhaHxlbnwwfDB8fHwxNzg3NTMyMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1674338558363-9480c8428609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8U3QuJTIwR2VvcmdlJTJDJTIwVXRhaHxlbnwwfDB8fHwxNzg3NTMyMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://www.nps.gov/npgallery/GetAsset/0F8CDFEB-D32E-46DC-87B7-72CA59AF0ADA", "https://www.nps.gov/npgallery/GetAsset/FCEA172A-E9BA-4EED-AB3A-5A9F842D16EE", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bryce_Canyon_National_Park_%287490763964%29.jpg/960px-Bryce_Canyon_National_Park_%287490763964%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bryce_Canyon%2C_Rim_Trail_06.jpg/960px-Bryce_Canyon%2C_Rim_Trail_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bryce_Canyon_National_Park_%284890011826%29.jpg/960px-Bryce_Canyon_National_Park_%284890011826%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bryce_Canyon_%28lever_de_soleil%29.jpg/960px-Bryce_Canyon_%28lever_de_soleil%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Landscape_Near_Western_Entrance_to_Capitol_Reef_National_Park%2C_Utah_%28118901281%29.jpg/960px-Landscape_Near_Western_Entrance_to_Capitol_Reef_National_Park%2C_Utah_%28118901281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Landscape_Near_Western_Entrance_to_Capitol_Reef_National_Park%2C_Utah_%28118901359%29.jpg/960px-Landscape_Near_Western_Entrance_to_Capitol_Reef_National_Park%2C_Utah_%28118901359%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1783884482148-4aff9e4435f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8Q2FwaXRvbCUyMFJlZWYlMjBOYXRpb25hbCUyMFBhcmslMjBVdGFoJTIwbmF0aW9uYWwlMjBwYXJrJTIwZGVzZXJ0JTIwY2FueW9uJTIwbGFuZHNjYXBlfGVufDB8MHx8fDE3ODc5ODE5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1783884481526-e757a4d3d7f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8Q2FwaXRvbCUyMFJlZWYlMjBOYXRpb25hbCUyMFBhcmslMjBVdGFoJTIwbmF0aW9uYWwlMjBwYXJrJTIwZGVzZXJ0JTIwY2FueW9uJTIwbGFuZHNjYXBlfGVufDB8MHx8fDE3ODc5ODE5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1504281490492-090c5c169650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TW9hYnxlbnwwfDB8fHwxNzg3NTMyMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1548641135-471b884d289d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8TW9hYnxlbnwwfDB8fHwxNzg3NTMyMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1504282706065-f5866e9cbeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8TW9hYnxlbnwwfDB8fHwxNzg3NTMyMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://www.nps.gov/npgallery/GetAsset/140A4253-155D-451F-6712-153EF8BBE324", "https://www.nps.gov/npgallery/GetAsset/14193C2C-155D-451F-675A-32FB6FB680D8", "https://www.nps.gov/npgallery/GetAsset/141FA75D-155D-451F-67D1-B6631A6C8F49", "https://www.nps.gov/npgallery/GetAsset/142220D2-155D-451F-67CF-A760D9A303B2", "https://www.nps.gov/npgallery/GetAsset/5A820DAC-155D-451F-6799-1FCEE9C5BCBB", "https://www.nps.gov/npgallery/GetAsset/4F75F098-0F7D-45ED-9550-5F71BE0DAAFE", "https://www.nps.gov/npgallery/GetAsset/5A85A011-155D-451F-67EB-E26B436ABE32", "https://www.nps.gov/npgallery/GetAsset/5A65C05D-155D-451F-67A2-D4B36F6E866E", "https://images.unsplash.com/photo-1541169477997-6ed649539ec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8VGVsbHVyaWRlfGVufDB8MHx8fDE3ODc1MzIzODh8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1608945065409-52e4a1b99438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8VGVsbHVyaWRlfGVufDB8MHx8fDE3ODc1MzIzODh8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1617561861889-4ba6f15898e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8UGFnb3NhJTIwU3ByaW5nc3xlbnwwfDB8fHwxNzg3NTMyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1626233919350-dd9a883dcfb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8UGFnb3NhJTIwU3ByaW5nc3xlbnwwfDB8fHwxNzg3NTMyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1733871207272-1a969b9de82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8UGFnb3NhJTIwU3ByaW5nc3xlbnwwfDB8fHwxNzg3NTMyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1731699579486-98fc30cbfb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8U2FudGElMjBGZXxlbnwwfDB8fHwxNzg3NTMyMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1595651492943-829bfff09210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8U2FudGElMjBGZXxlbnwwfDB8fHwxNzg3NTMyMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1508496869408-df596454df1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8U2FudGElMjBGZXxlbnwwfDB8fHwxNzg3NTMyMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1727813581394-82b59b93cd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8U2FudGElMjBGZXxlbnwwfDB8fHwxNzg3NTMyMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"];

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
