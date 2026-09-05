const CACHE = 'roadtrip-shell-20260905T075327.643206Z';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
const IMAGES = ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Cost_of_rent_by_County.webp/960px-Cost_of_rent_by_County.webp?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Property_taxes_by_county.webp/960px-Property_taxes_by_county.webp?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/SNAP_recipients_by_County.png/960px-SNAP_recipients_by_County.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Sales_tax_by_county.webp/960px-Sales_tax_by_county.webp?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1621268386527-e83ae4b9a337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8RmlzaCUyMExha2UlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU3NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1728579771898-97467161e487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8RmlzaCUyMExha2UlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU3NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%280771cc31-b155-423c-89de-29effe8006ef%29.jpg/960px-Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%280771cc31-b155-423c-89de-29effe8006ef%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%280dcd3656-1487-48c6-abdb-7d0fce040d07%29.jpg/960px-Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%280dcd3656-1487-48c6-abdb-7d0fce040d07%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%28439b3214-d7ec-44ef-a4e6-64fb6dd55e5c%29.jpg/960px-Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%28439b3214-d7ec-44ef-a4e6-64fb6dd55e5c%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%28459ce403-4694-41e0-8aa7-2919863d25a6%29.jpg/960px-Landscape_Views_at_Crater_Lake_National_Park%2C_Oregon_%28459ce403-4694-41e0-8aa7-2919863d25a6%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1692986134127-f906b1a02599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8U2hlbHRlciUyMENvdmUlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU3NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1559872204-3ba018836d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8U2hlbHRlciUyMENvdmUlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU3NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1704227141124-ed73fc253e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8U2hlbHRlciUyMENvdmUlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU3NHww&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Elk_Lake_Resort_-_DPLA_-_2d543ec1ba174b3e644439ed2452e2dd.jpg/960px-Elk_Lake_Resort_-_DPLA_-_2d543ec1ba174b3e644439ed2452e2dd.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Elk_Lake_Resort_-_DPLA_-_354ee148bb151c3203370bae4c264481.jpg/960px-Elk_Lake_Resort_-_DPLA_-_354ee148bb151c3203370bae4c264481.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Elk_Lake_Resort_-_DPLA_-_71e2804c8c80a2a73d2b2ffd87706702.jpg/960px-Elk_Lake_Resort_-_DPLA_-_71e2804c8c80a2a73d2b2ffd87706702.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Elk_Lake_Resort_-_DPLA_-_a09387648107fabd56b3acb1e03fe083.jpg/960px-Elk_Lake_Resort_-_DPLA_-_a09387648107fabd56b3acb1e03fe083.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1621268386527-e83ae4b9a337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8QmlnJTIwTGFrZSUyMFlvdXRoJTIwQ2FtcCUyQyUyME9yZWdvbnxlbnwwfDB8fHwxNzg4NTc3NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1731707485070-dbf45803f3b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8QmlnJTIwTGFrZSUyMFlvdXRoJTIwQ2FtcCUyQyUyME9yZWdvbnxlbnwwfDB8fHwxNzg4NTc3NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1607320438914-8095e641c3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8QmlnJTIwTGFrZSUyMFlvdXRoJTIwQ2FtcCUyQyUyME9yZWdvbnxlbnwwfDB8fHwxNzg4NTc3NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1728579771951-d6c8e66e317a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8T2xhbGxpZSUyMExha2UlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU4MHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1621268386527-e83ae4b9a337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8T2xhbGxpZSUyMExha2UlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU4MHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1626806425336-0369972c3d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8T2xhbGxpZSUyMExha2UlMjBSZXNvcnQlMkMlMjBPcmVnb258ZW58MHwwfHx8MTc4ODU3NzU4MHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1680989124539-9529eca879cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8VGltYmVybGluZSUyMExvZGdlJTJDJTIwT3JlZ29ufGVufDB8MHx8fDE3ODg1Nzc1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1769383429252-dc7ad1b5c876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8VGltYmVybGluZSUyMExvZGdlJTJDJTIwT3JlZ29ufGVufDB8MHx8fDE3ODg1Nzc1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1650839826549-6f628bbaf2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8Q2FzY2FkZSUyMExvY2tzJTJDJTIwT3JlZ29ufGVufDB8MHx8fDE3ODg1Nzc1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1638167169088-8a5001cd5f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8Q2FzY2FkZSUyMExvY2tzJTIwbGFuZHNjYXBlfGVufDB8MHx8fDE3ODg1Nzc1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1651402497615-781717757146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8Q2FzY2FkZSUyMExvY2tzJTIwbGFuZHNjYXBlfGVufDB8MHx8fDE3ODg1Nzc1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1728061857445-95169fb4a27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8VHJvdXQlMjBMYWtlJTJDJTIwV2FzaGluZ3RvbnxlbnwwfDB8fHwxNzg4NTc3NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1711211270780-92f01453a42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8VHJvdXQlMjBMYWtlJTJDJTIwV2FzaGluZ3RvbnxlbnwwfDB8fHwxNzg4NTc3NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1658635775676-aac19268f8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8VHJvdXQlMjBMYWtlJTJDJTIwV2FzaGluZ3RvbnxlbnwwfDB8fHwxNzg4NTc3NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1721584980499-daacf771155b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8VHJvdXQlMjBMYWtlJTJDJTIwV2FzaGluZ3RvbnxlbnwwfDB8fHwxNzg4NTc3NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://upload.wikimedia.org/wikipedia/commons/a/a5/National_Scenic_Byway_-_White_Pass_%28Washington%29_-_NARA_-_68886749.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Proserpinus_clarkiae_MHNT_CUT_2010_0_11_White_Pass_%28Washington%29_male_dorsal.jpg/960px-Proserpinus_clarkiae_MHNT_CUT_2010_0_11_White_Pass_%28Washington%29_male_dorsal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Proserpinus_clarkiae_MHNT_CUT_2010_0_11_White_Pass_%28Washington%29_male_ventral.jpg/960px-Proserpinus_clarkiae_MHNT_CUT_2010_0_11_White_Pass_%28Washington%29_male_ventral.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1736140456064-e889a1dd410a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8V2hpdGUlMjBQYXNzJTJDJTIwV2FzaGluZ3RvbnxlbnwwfDB8fHwxNzg4NTc3NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1607225317743-2112c2eecc7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8U25vcXVhbG1pZSUyMFBhc3MlMkMlMjBXYXNoaW5ndG9ufGVufDB8MHx8fDE3ODg1Nzc1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1631551566669-4738a6a7e64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8U25vcXVhbG1pZSUyMFBhc3MlMkMlMjBXYXNoaW5ndG9ufGVufDB8MHx8fDE3ODg1Nzc1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1622484175993-8e5dfa0305a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8U3RldmVucyUyMFBhc3MlMkMlMjBXYXNoaW5ndG9ufGVufDB8MHx8fDE3ODg1Nzc1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1662419149804-9386aea097af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8U3RldmVucyUyMFBhc3MlMkMlMjBXYXNoaW5ndG9ufGVufDB8MHx8fDE3ODg1Nzc1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1628606346609-b6201955f490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8U3RlaGVraW4lMkMlMjBXYXNoaW5ndG9ufGVufDB8MHx8fDE3ODg1Nzc1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Field_Hotel_on_Lake_Chelan%2C_Stehekin%2C_Washington_%28WASTATE_36%29.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Caf%C3%A9_at_Stehekin_Landing_%28379a5ccc-a9f4-4ead-ab5b-4049a141c1c8%29.tif/lossy-page1-500px-Caf%C3%A9_at_Stehekin_Landing_%28379a5ccc-a9f4-4ead-ab5b-4049a141c1c8%29.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Ferry_time_in_Stehekin_%28c53396aee480476fa19ee31529fbc185%29.JPG/960px-Ferry_time_in_Stehekin_%28c53396aee480476fa19ee31529fbc185%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1693549990709-5d97b36a1d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8TWFubmluZyUyMFBhcmslMkMlMjBCcml0aXNoJTIwQ29sdW1iaWF8ZW58MHwwfHx8MTc4ODU3NzU4OHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1568176983381-3e59d437d95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8TWFubmluZyUyMFBhcmslMkMlMjBCcml0aXNoJTIwQ29sdW1iaWF8ZW58MHwwfHx8MTc4ODU3NzU4OHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1704648231315-df4c34b64c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TWFubmluZyUyMFBhcmslMkMlMjBCcml0aXNoJTIwQ29sdW1iaWF8ZW58MHwwfHx8MTc4ODU3NzU4OHww&ixlib=rb-4.1.0&q=80&w=1080"];

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
