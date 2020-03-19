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
