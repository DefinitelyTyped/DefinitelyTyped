import cacheManager = require("cache-manager");
import redisStore = require("cache-manager-ioredis");

const redisCache = cacheManager.caching({
    store: redisStore,
    host: 'localhost', // default value
    port: 6379, // default value
    password: 'XXXXX',
    db: 0,
    ttl: 600,
});

const clusterCache = cacheManager.caching({
    store: redisStore,
    clusterConfig: {
        nodes: [
            {
                port: 6380,
                host: '127.0.0.1'
            },
            {
              port: 6381,
              host: '127.0.0.1'
            },
        ],
        options: {
            maxRedirections: 16,
        },
    },
    ttl: 600,
});

redisCache.store.getClient();
clusterCache.store.getClient();

const memoryCache = cacheManager.caching({ store: 'memory', max: 100, ttl: 60 });

cacheManager.multiCaching([redisCache, memoryCache]);
