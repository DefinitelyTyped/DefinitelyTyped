import keshi from 'keshi';

const cache = keshi();

async function asyncScope() {
    const testValue = await cache.resolve('testKey', { data: 'someData' }, '30 mins');

    const value = testValue.data;
}

function promiseScope() {
    cache.resolve('testKey', { data: 'someData' }, '30 mins')
        .then((testValue) => {
            const value = testValue.data;
        });
}

cache.del('testKey');

cache.clear();

cache.stopCleanupTask();

const cacheHighInterval = keshi('1 hour');
