import Cache = require('mem-cache');

const cache = new Cache(); // $ExpectType Cache

cache.set('foo', 'bar'); // $ExpectType void
cache.get('foo'); // $ExpectType any
cache.remove('foo'); // $ExpectType void
cache.clean(); // $ExpectType void
cache.length; // $ExpectType number
cache.keys; // $ExpectType string[]
