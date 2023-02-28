import NanoCache from 'nano-cache';

const cache = new NanoCache({
    ttl: 1000,
    limit: 5,
    bytes: 10 * NanoCache.SIZE.MB,
});

cache.set('some value', {
    hello: true
});

cache.set('some value to delete', {
    hello: true
});

cache.set('some other value', {
    val: false
}, {
    compress: true,
    bytes: NanoCache.SIZE.GB,
    limit: 9999,
    maxEvictBytes: 1000,
    minFreeMem: 100000,
    ttl: 6000
});

cache.get('some value');
cache.clear();
cache.del('some value to delete');
cache.get('some value');
cache.clearExpired();
cache.isTTLExpired('some value');
cache.isLimitReached('some value');
cache.info('some value');
cache.stats();
