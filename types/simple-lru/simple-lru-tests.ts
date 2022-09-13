import SimpleLRU = require('simple-lru');

const cache = new SimpleLRU(3);
cache.set('a', 'A');
cache.set('b', 'B');
cache.set('c', 'C');
cache.set('d', 'D');
const a = cache.get('a'); // a = undefined;
const b = cache.get('b'); // b = 'B'
const c = cache.get('c'); // c = 'C'
const d = cache.get('d'); // d = 'D'
const e = cache.peek('d'); // e = 'D'
const f = cache.del('d');
const keys = cache.keys(); // keys = ['b', 'c', 'd']
cache.max(10);
const m = cache.max();
const l = cache.length();
cache.reset();
