import Cache from 'mem-cache';

const cache = new Cache(); // $ExpectType Cache
const cache2 = new Cache(100000); // $ExpectType Cache
const cache3 = new Cache({
    doesNotRenewTimeout: true,
    timeout: 100000,
    timeoutDisabled: false
}); // $ExpectType Cache

cache.set('foo', 'bar'); // $ExpectType void
cache.get('foo'); // $ExpectType any
cache.remove('foo'); // $ExpectType void
cache.clean(); // $ExpectType void
cache.length; // $ExpectType number
cache.keys; // $ExpectType string[]

