var OFFLINE_CACHE = "cache_test";
var OFFLINE_URL = "localhost";

self.addEventListener('fetch', (event: FetchEvent) => {
    if (event.request.method === 'GET' &&
        event.request.headers.get('accept').indexOf('text/html') !== -1) {
        console.log('Handling fetch event for', event.request.url);
        event.respondWith(
            self.fetch(event.request).catch(e => {
                console.error('Fetch failed; returning offline page instead.', e);
                return self.caches.open(OFFLINE_CACHE).then((cache: Cache) => {
                    return cache.match(OFFLINE_URL);
                });
            })
        );
    }
});

self.caches.open('v1').then((cache: Cache) => {
    cache.matchAll('/images/').then((response: Response[]) => {
        response.forEach((element, index, array) => {
            cache.delete(element.url);
        });
    });
});

self.addEventListener('install', (event: InstallEvent) => {
    event.waitUntil(
        self.caches.open('v1').then((cache: Cache) => {
            return cache.add('/sw-test/index.html');
        })
    );
});

self.addEventListener('install', (event: InstallEvent) => {
    event.waitUntil(
        self.caches.open('v1').then(cache => {
            return cache.addAll([
                '/sw-test/',
                '/sw-test/index.html',
                '/sw-test/style.css',
                '/sw-test/app.js',
                '/sw-test/image-list.js',
                '/sw-test/star-wars-logo.jpg',
                '/sw-test/gallery/',
                '/sw-test/gallery/bountyHunters.jpg',
                '/sw-test/gallery/myLittleVader.jpg',
                '/sw-test/gallery/snowTroopers.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event: FetchEvent) => {
    var cachedResponse = self.caches.match(event.request).then(response => {
      if (response) {
          return response;
      }
    }).catch(() => {
        return self.fetch(event.request).then(response => {
            return self.caches.open('v1').then(cache => {
                cache.put(event.request, response.clone());
                return response;
            });
        });
    }).catch(() => {
        return self.caches.match('/sw-test/gallery/myLittleVader.jpg');
    });

    event.respondWith(cachedResponse);
});

self.caches.open('v1').then(cache => {
    cache.match('/images/image.png').then(response => {
        cache.delete(response.url);
    });
});

self.caches.open('v1').then(cache => {
    cache.keys().then(response => {
        response.forEach((element, index, array) => {
            cache.delete(element);
        });
    });
});

self.caches.has('v1').then(() => {
    self.caches.delete('v1').then(() => {
        console.log('done');
    });
});

self.addEventListener('activate', (event: ExtendableEvent) => {
    var cacheWhitelist = ['v2'];

    event.waitUntil(
        self.caches.keys().then(keyList => {
            for (var item of keyList) {
                if (cacheWhitelist.indexOf(item) === -1) {
                    return self.caches.delete(item);
                }
            }
        })
    );
});

function sendMessage(message: any) {
    return new Promise((resolve, reject) => {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = event => {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };
        navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
}

self.addEventListener('message', (evt: ExtendableMessageEvent) => {
    evt.ports[0].postMessage(evt.source.id);
});

sendMessage('test').then((clientId: string) => {
    console.log(clientId);
});

self.clients.matchAll({type: "test"}).then(clients => {
    for (var cli of clients) {
        if (cli.url === 'index.html') {
            self.clients.openWindow(cli.url);
            // or do something else involving the matching client
        }
    }
});

self.addEventListener('activate', (e: ExtendableEvent) => {
    e.waitUntil(self.clients.claim());
});

navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(registration => {
    // At this point, registration has taken place.
    // The service worker will not handle requests until this page and any
    // other instances of this page (in other tabs, etc.) have been
    // closed/reloaded.
    var serviceWorker: ServiceWorker;
    if (registration.installing) {
        serviceWorker = registration.installing;
    } else if (registration.waiting) {
        serviceWorker = registration.waiting;
    } else if (registration.active) {
        serviceWorker = registration.active;
    }
    if (serviceWorker) {
        console.log(serviceWorker.state);
        serviceWorker.addEventListener('statechange', (e: any) => {
            console.log(e.target.state);
        });
    }
}).catch(error => {
    // Something went wrong during registration. The service-worker.js file
    // might be unavailable or contain a syntax error.

});

navigator.serviceWorker.getRegistration('/app').then((registration: ServiceWorkerRegistration) => {
    console.log(registration);
});

navigator.serviceWorker.getRegistrations().then((registrations: ServiceWorkerRegistration[]) => {
    console.log(registrations);
});

self.registration.unregister();

self.addEventListener('install', (event: ExtendableEvent) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('notificationclick', (event: NotificationEvent) => {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(self.clients.matchAll({
        type: "window"
    }).then(clientList => {
        if (self.clients.openWindow)
            return self.clients.openWindow('/');
    }));
});
