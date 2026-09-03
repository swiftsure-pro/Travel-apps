const CACHE = 'roadtrip-shell-20260903T022037.377857Z';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
const IMAGES = ["https://upload.wikimedia.org/wikipedia/commons/d/d2/Cornerstone%2C_Old_Hickory_United_Methodist_Church.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://upload.wikimedia.org/wikipedia/commons/1/16/Front_of_church%2C_Old_Hickory_United_Methodist_Church.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Old-hickory-lake-bledsoe-tn1.jpg/960px-Old-hickory-lake-bledsoe-tn1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Old_Hickory_Dam_powerplant.jpg/960px-Old_Hickory_Dam_powerplant.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1556033681-83abea291a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8TmFzaHZpbGxlJTJDJTIwVGVubmVzc2VlfGVufDB8MHx8fDE3ODc4NzgwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1620785692226-cdcc1810a38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8TmFzaHZpbGxlJTJDJTIwVGVubmVzc2VlfGVufDB8MHx8fDE3ODc4NzgwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1606762903097-713bf356b8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8TmFzaHZpbGxlJTJDJTIwVGVubmVzc2VlfGVufDB8MHx8fDE3ODc4NzgwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1545419913-775e3e82c7db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8TmFzaHZpbGxlJTJDJTIwVGVubmVzc2VlfGVufDB8MHx8fDE3ODc4NzgwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Aerial_view_of_Gallatin%2C_Tennessee%2C_October_2020.JPG/960px-Aerial_view_of_Gallatin%2C_Tennessee%2C_October_2020.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Gallatin_Tennessee_City_Hall.jpg/960px-Gallatin_Tennessee_City_Hall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gallatin_Tennessee_Town_Square.jpg/960px-Gallatin_Tennessee_Town_Square.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Former_Lebanon_High_School%2C_Lebanon%2C_Tennessee_6-3-2012.JPG/960px-Former_Lebanon_High_School%2C_Lebanon%2C_Tennessee_6-3-2012.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Friendship_Christian_School_Lebanon_Tennessee_8-29-2014.jpg/960px-Friendship_Christian_School_Lebanon_Tennessee_8-29-2014.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Battle_of_Lebanon_P9240430.jpg/960px-Battle_of_Lebanon_P9240430.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Battle_of_Lebanon_P9240431.jpg/960px-Battle_of_Lebanon_P9240431.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1672268623852-35b0d1ed6850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8MXx8RnJhbmtsaW4lMkMlMjBUZW5uZXNzZWV8ZW58MHwwfHx8MTc4Nzg4OTYzMHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1750809411751-5b65ef430485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8RnJhbmtsaW4lMkMlMjBUZW5uZXNzZWV8ZW58MHwwfHx8MTc4Nzg4OTYzMHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1672268623833-8d51b75fe233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8M3x8RnJhbmtsaW4lMkMlMjBUZW5uZXNzZWV8ZW58MHwwfHx8MTc4Nzg4OTYzMHww&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1672268623844-6f7ff8a57c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8NHx8RnJhbmtsaW4lMkMlMjBUZW5uZXNzZWV8ZW58MHwwfHx8MTc4Nzg4OTYzMHww&ixlib=rb-4.1.0&q=80&w=1080", "https://upload.wikimedia.org/wikipedia/commons/c/cb/Cunningham_Bridge_near_Leiper%27s_Fork_Tennessee_photographed_circa_1938.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Hillsboro_united_methodist_church_leipers_fork_tennessee_2010.jpg/960px-Hillsboro_united_methodist_church_leipers_fork_tennessee_2010.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Leipers_fork_art_boutique_2010.jpg/960px-Leipers_fork_art_boutique_2010.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/1940_Census_Enumeration_District_Descriptions_-_Tennessee_-_Williamson_County_-_ED_94-1%2C_ED_94-2%2C_ED_94-3%2C_ED_94-4%2C_ED_94-5%2C_ED_94-6%2C_ED_94-7%2C_ED_94-8%2C_ED_94-9_-_NARA_-_5881850.jpg/960px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://upload.wikimedia.org/wikipedia/commons/1/1e/1993_Storm_of_the_Century_Asheville%2C_North_Carolina_snowfall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asheville%2C_N.C._from_Beaucatcher_Mountain_LCCN95501589.jpg/960px-Asheville%2C_N.C._from_Beaucatcher_Mountain_LCCN95501589.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", "https://images.unsplash.com/photo-1678073236214-76c5fbaf315d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDAxOTE3fDB8MXxzZWFyY2h8Mnx8QXNoZXZpbGxlJTJDJTIwTm9ydGglMjBDYXJvbGluYXxlbnwwfDB8fHwxNzg3ODczNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"];

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
