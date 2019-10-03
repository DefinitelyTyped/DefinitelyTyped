import MemoryCache = require('fast-memory-cache');

const cache = new MemoryCache();

cache.get('something'); // $ExpectType any
cache.set('something', 123); // $ExpectType void
cache.delete('something'); // $ExpectType void
cache.clear(); // $ExpectType void
