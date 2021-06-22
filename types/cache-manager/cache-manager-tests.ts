import * as cacheManager from 'cache-manager'

const memoryCache: cacheManager.Cache = cacheManager.caching({ store: 'memory', max: 100, ttl: 10/*seconds*/ });
const ttl = 5;

memoryCache.set('foo', 'bar', { ttl: ttl }, (err) => {

    if (err) {
        throw err;
    }

    memoryCache.get('foo', (err, result) => {

        // console.log(result);

        memoryCache.del('foo', (err) => {
        });

    });
});

function getUser(id: number, cb: Function) {

    cb(null, { id: id, name: 'Bob' });
}

const userId = 123;
const key = 'user_' + userId;
const key2 = 'user_' + userId + '4';

// Note: ttl is optional in wrap()
memoryCache.wrap<{ id: number, name: string }>(key, (cb: any) => {

    getUser(userId, cb);

}, { ttl: ttl }, (err: any, user: { id: number, name: string }) => {

    //console.log(user);

    // Second time fetches user from memoryCache
    memoryCache.wrap<{ id: number, name: string }>(key, key2, (cb: any) => {

        getUser(userId, cb);

    }, (err: any, user: { id: number, name: string }) => {

        //console.log(user);

    });
});

if (memoryCache.store.keys) {
    memoryCache.store.keys().then((result) => {
        //console.log(result);
    });
}

memoryCache.reset().then(() => {
    // console.log('reset with promise');
});
memoryCache.reset(() => {
    // console.log('reset with callback');
});

async function promiseMemoryCache(cache: cacheManager.Cache) {
    const KEY = 'Key';
    const VALUE = 'string';

    const numberWrap: number = await cache.wrap<number>(KEY, () => 1);
    const stringWrap: string = await cache.wrap<string>(KEY, () => VALUE);
    const stringWrapWithCacheConfig: string = await cache.wrap<string>(KEY, () => VALUE, { ttl: 10 });

    const setWithoutOptional = await cache.set(KEY, VALUE);
    const setWitOptional = await cache.set(KEY, VALUE, { ttl: 10 });

    const stringTypeSet: string = await cache.set(KEY, VALUE);
    const stringTypeGet: string | undefined = await cache.get<string>(KEY);

    const numberTypeSet: number = await cache.set(KEY, 1);
    const numberTypeGet: number | undefined = await cache.get<number>(KEY);

    interface Custom {
        test: string;
    };

    const CustomValue: Custom = { test: VALUE };

    const customTypeSet: Custom = await cache.set(KEY, CustomValue);
    const customTypeGet: Custom | undefined = await cache.get<Custom>(KEY);
}

const multiCache = cacheManager.multiCaching([memoryCache]);

multiCache.set('foo', 'bar', { ttl: ttl }, (err) => {

    if (err) {
        throw err;
    }

    multiCache.get('foo', (err, result) => {

        // console.log(result);

        multiCache.del('foo', (err) => {
        });

    });
});

multiCache.reset(() => {
    // console.log('multiCache reset');
});
