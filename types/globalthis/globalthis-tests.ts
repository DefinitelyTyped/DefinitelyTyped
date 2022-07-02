import getGlobal = require('globalthis');

getGlobal(); // $ExpectType typeof globalThis
getGlobal.implementation; // $ExpectType typeof globalThis
getGlobal.getPolyfill; // $ExpectType () => typeof globalThis
getGlobal.shim; // $ExpectType () => typeof globalThis
