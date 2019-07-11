import makeServiceWorkerEnv = require('service-worker-mock');

const mock = makeServiceWorkerEnv();

Object.assign(self, mock);

trigger('install');
mock.trigger('install');
trigger('fetch');
mock.trigger('fetch');

const emitFetch = listeners.get('fetch') as EventListener;
emitFetch(new Event('fetch'));

mock.caches.open('OLD_CACHE');
console.log(snapshot().caches.OLD_CACHE);
console.log(self.snapshot().clients[0].id);
console.log(mock.snapshot().notifications[0].body);
