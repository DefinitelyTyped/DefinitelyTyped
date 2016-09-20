/// <reference path="service_worker_api.d.ts" />

var OFFLINE_CACHE = "cache_test";
var OFFLINE_URL = "localhost";

self.addEventListener('fetch', function(event: FetchEvent) {
    if (event.request.method === 'GET' &&
        event.request.headers.get('accept').indexOf('text/html') !== -1) {
        console.log('Handling fetch event for', event.request.url);
        event.respondWith(
            self.fetch(event.request).catch(function(e) {
                console.error('Fetch failed; returning offline page instead.', e);
                return self.caches.open(OFFLINE_CACHE).then(function(cache: Cache) {
                    return cache.match(OFFLINE_URL);
                });
            })
        );
    }
});

self.caches.open('v1').then(function(cache: Cache) {
    cache.matchAll('/images/').then(function(response: Array<Response>) {
        response.forEach(function(element, index, array) {
            cache.delete(element.url);
        });
    });
});

self.addEventListener('install', function(event: InstallEvent) {
    event.waitUntil(
        self.caches.open('v1').then(function(cache: Cache) {
            return cache.add('/sw-test/index.html');
        })
    );
});

self.addEventListener('install', function(event: InstallEvent) {
    event.waitUntil(
        self.caches.open('v1').then(function(cache) {
            return cache.addAll(
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
            );
        })
    );
});

self.addEventListener('fetch', function(event: FetchEvent) {
    var cachedResponse = self.caches.match(event.request).then(function(response: Response) {
      if (response) {
          return response;
      }
    }).catch(function() {
        return self.fetch(event.request).then(function(response: Response) {
            return self.caches.open('v1').then(function(cache) {
                cache.put(event.request, response.clone());
                return response;
            });
        });
    }).catch(function() {
        return self.caches.match('/sw-test/gallery/myLittleVader.jpg');
    });

    event.respondWith(cachedResponse);
});

self.caches.open('v1').then(function(cache) {
    cache.match('/images/image.png').then(function(response: Response) {
        cache.delete(response.url);
    });
});

self.caches.open('v1').then(function(cache: Cache) {
    cache.keys().then(function(response) {
        response.forEach(function(element, index, array) {
            cache.delete(element);
        });
    });
});

self.caches.has('v1').then(function() {
    self.caches.delete('v1').then(function() {

    });
});

self.addEventListener('activate', function(event: ExtendableEvent) {
    var cacheWhitelist = ['v2'];

    event.waitUntil(
        self.caches.keys().then(function(keyList) {
            for(var i = 0; i < keyList.length; i++) {
                if (cacheWhitelist.indexOf(keyList[i]) === -1) {
                    return self.caches.delete(keyList[i]);
                }
            }
        })
    );
});

function sendMessage(message: string) {
    return new Promise(function(resolve, reject) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(event) {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };
        navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
}

self.clients.matchAll({type: "test"}).then(function(clients) {
    for(var i = 0 ; i < clients.length ; i++) {
        if(clients[i].url === 'index.html') {
            self.clients.openWindow(clients[i].url);
            // or do something else involving the matching client
        }
    }
});

self.addEventListener('activate', function(e: ExtendableEvent) {
    e.waitUntil(self.clients.claim());
});

navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(function(registration) {
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
        serviceWorker.addEventListener('statechange', function(e: any) {
            console.log(e.target.state);
        });
    }
}).catch(function(error) {
    // Something went wrong during registration. The service-worker.js file
    // might be unavailable or contain a syntax error.

});

navigator.serviceWorker.getRegistration('/app').then(function(registration: ServiceWorkerRegistration) {

});

navigator.serviceWorker.getRegistrations().then(function(registrations: Array<ServiceWorkerRegistration>) {

});

self.registration.unregister();

self.addEventListener('install', function(event: ExtendableEvent) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('notificationclick', function(event: NotificationEvent) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(self.clients.matchAll({
        type: "window"
    }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
        }
        if (self.clients.openWindow)
            return self.clients.openWindow('/');
    }));
});
