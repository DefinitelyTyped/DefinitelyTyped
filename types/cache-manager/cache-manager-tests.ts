import * as cacheManager from 'cache-manager'

const memoryCache = cacheManager.caching({ store: 'memory', max: 100, ttl: 10/*seconds*/ });
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

// Note: ttl is optional in wrap()
memoryCache.wrap<{ id: number, name: string }>(key, (cb) => {

    getUser(userId, cb);

}, { ttl: ttl }, (err, user) => {

    //console.log(user);

    // Second time fetches user from memoryCache
    memoryCache.wrap<{ id: number, name: string }>(key, (cb) => {

        getUser(userId, cb);

    }, (err, user) => {

        //console.log(user);

    });
});
