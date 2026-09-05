const CACHE = 'roadtrip-shell-20260905T072521.706106Z';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
const IMAGES = ["https://images.unsplash.com/photo-1655044511902-cbe627c8a3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4ODU4OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1602516029536-77f808c3db4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4ODU4OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1614987553187-e2a68730cde6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4ODU4OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1655044441238-2f3839cd1358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8S2VubmVidW5rJTJDJTIwTWFpbmV8ZW58MHwwfHx8MTc4ODU4OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1635531135008-b53d954e3e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1669565277483-04ce274248ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1649423810201-e3bd3d6e84fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1512910857525-7826b462c0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8UG9ydHNtb3V0aCUyQyUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1586975562124-a0e57553da49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODg1ODkxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1559686697-df1572f62ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODg1ODkxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1656171371995-4f9aec4e4fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODg1ODkxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1585939417924-7918fad84cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TmV3YnVyeXBvcnQlMkMlMjBNYXNzYWNodXNldHRzfGVufDB8MHx8fDE3ODg1ODkxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1565127803082-69dd82351360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1606373664971-bf9b25eb508d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1572128023846-8cf5791a1299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1611839234426-21de3ee58176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8Qm9zdG9uJTJDJTIwTWFzc2FjaHVzZXR0c3xlbnwwfDB8fHwxNzg4NTg5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1585694813849-abaabaa01ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODg1ODkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1690610266753-726bbe36f3eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODg1ODkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1670530898662-92dde9e3f64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODg1ODkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1656095176667-fa75558b4ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8UHJvdmlkZW5jZSUyQyUyMFJob2RlJTIwSXNsYW5kfGVufDB8MHx8fDE3ODg1ODkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/%22Armsea_Hall%2C%22_Charles_Frederick_Hoffman_Jr._house%2C_Narragansett_Bay%2C_Newport%2C_Rhode_Island._LOC_7221364694.jpg/960px-%22Armsea_Hall%2C%22_Charles_Frederick_Hoffman_Jr._house%2C_Narragansett_Bay%2C_Newport%2C_Rhode_Island._LOC_7221364694.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/%22Armsea_Hall%2C%22_Charles_Frederick_Hoffman_Jr._house%2C_Narragansett_Bay%2C_Newport%2C_Rhode_Island._LOC_7221385050.jpg/960px-%22Armsea_Hall%2C%22_Charles_Frederick_Hoffman_Jr._house%2C_Narragansett_Bay%2C_Newport%2C_Rhode_Island._LOC_7221385050.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/%22Armsea_Hall%2C%22_Charles_Frederick_Hoffman_Jr._house%2C_Narragansett_Bay%2C_Newport%2C_Rhode_Island._LOC_7221387288.jpg/960px-%22Armsea_Hall%2C%22_Charles_Frederick_Hoffman_Jr._house%2C_Narragansett_Bay%2C_Newport%2C_Rhode_Island._LOC_7221387288.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1596906519517-7868d76fd92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TmFycmFnYW5zZXR0JTJDJTIwUmhvZGUlMjBJc2xhbmR8ZW58MHwwfHx8MTc4ODU4OTE0OHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1668010093667-0929ac8eeacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8V2VzdGVybHklMkMlMjBSaG9kZSUyMElzbGFuZHxlbnwwfDB8fHwxNzg4NTg5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Detail_interior_view_of_ticket_booth%2C_facing_northwest._-_Westerly_Station%2C_14_Railroad_Street%2C_Westerly%2C_Washington_County%2C_RI_HABS_RI%2C5-WEST%2C3-12.tif/lossy-page1-960px-Detail_interior_view_of_ticket_booth%2C_facing_northwest._-_Westerly_Station%2C_14_Railroad_Street%2C_Westerly%2C_Washington_County%2C_RI_HABS_RI%2C5-WEST%2C3-12.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Detail_of_interior_of_ticket_booth%2C_facing_southwest._-_Westerly_Station%2C_14_Railroad_Street%2C_Westerly%2C_Washington_County%2C_RI_HABS_RI%2C5-WEST%2C3-13.tif/lossy-page1-960px-Detail_of_interior_of_ticket_booth%2C_facing_southwest._-_Westerly_Station%2C_14_Railroad_Street%2C_Westerly%2C_Washington_County%2C_RI_HABS_RI%2C5-WEST%2C3-13.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Firth_River-Joe_Creek_confluence_westerly_view.jpg/960px-Firth_River-Joe_Creek_confluence_westerly_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Hubble_Captures_View_of_%27Mystic_Mountain%27_%282010-13-2707%29.tiff/lossy-page1-960px-Hubble_Captures_View_of_%27Mystic_Mountain%27_%282010-13-2707%29.tiff.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Hubble_captures_view_of_%E2%80%9CMystic_Mountain%E2%80%9D_%28heic1007a%29.jpg/960px-Hubble_captures_view_of_%E2%80%9CMystic_Mountain%E2%80%9D_%28heic1007a%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/KOEN_MYSTIC_LANDSCAPE_36.jpg/960px-KOEN_MYSTIC_LANDSCAPE_36.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1706043903343-8f3765f0fc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TXlzdGljJTJDJTIwQ29ubmVjdGljdXR8ZW58MHwwfHx8MTc4ODU4OTE0OXww&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/O%27Reilly_Auto_Parts_%28Old_Saybrook%2C_Connecticut%29_%2843134666254%29.jpg/960px-O%27Reilly_Auto_Parts_%28Old_Saybrook%2C_Connecticut%29_%2843134666254%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Former_theatre%2C_Old_Saybrook_CT.jpg/960px-Former_theatre%2C_Old_Saybrook_CT.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/MMDA-Photos_-_2024-01-08_-_First_Congregational_Church%2C_Old_Saybrook_-3.jpg/960px-MMDA-Photos_-_2024-01-08_-_First_Congregational_Church%2C_Old_Saybrook_-3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Old_Saybrook%2C_CT.jpg/960px-Old_Saybrook%2C_CT.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/3/33/Brooklyn_Museum_-_Summer_Landscape_Near_New_Haven_-_George_H._Durrie_-_overall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://images.unsplash.com/photo-1610212112844-de4500134200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8TmV3JTIwSGF2ZW4lMkMlMjBDb25uZWN0aWN1dHxlbnwwfDB8fHwxNzg4NTg5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_10_of_12%29.tif/lossy-page1-960px-New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_10_of_12%29.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_11_of_12%29.tif/lossy-page1-960px-New_Haven_City_Hall_and_Courthouse%2C_Church_Street%2C_between_Court_and_Elm_Streets%2C_New_Haven%2C_New_Haven_County%2C_CT_HABS_CONN%2C5-NEWHA%2C30-_%28sheet_11_of_12%29.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"];

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
