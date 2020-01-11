import makeServiceWorkerEnv = require('service-worker-mock');

const mock = makeServiceWorkerEnv();

Object.assign(self, mock);

trigger('install');
mock.trigger('install');
trigger('fetch');
mock.trigger('fetch');
trigger('fetch', 'https://example.com');
mock.trigger('fetch', 'https://example.com');
trigger('fetch', new Request('https://example.com'));
mock.trigger('fetch', new Request('https://example.com'));
trigger('notificationclick', new Notification('Hello!'));
mock.trigger('notificationclick', new Notification('Hello!'));
trigger('notificationclose', new Notification('Hello!'));
mock.trigger('notificationclose', new Notification('Hello!'));
trigger('push', { data: null });
mock.trigger('push', { data: null });
trigger('message', { source: null });
mock.trigger('message', { source: null });

const emitFetch = listeners.get('fetch') as EventListener;
emitFetch(new Event('fetch'));

mock.caches.open('OLD_CACHE');
console.log(snapshot().caches.OLD_CACHE);
console.log(self.snapshot().clients[0].id);
console.log(mock.snapshot().notifications[0].body);
