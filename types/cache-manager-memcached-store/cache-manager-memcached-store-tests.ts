import cacheManager = require("cache-manager");
import memcachedStore = require("cache-manager-memcached-store");

const memcachedCache = cacheManager.caching({
    store: memcachedStore,
    options: {
        autodiscover: false,
        bufferBeforeError: 1000,
        disabled: false,
        hosts: null,
        reconnect: true,
        onNetError: (error: Error) => {},
        queue: true,
        netTimeout: 500,
        backoffLimit: 1000,
        maxValueSizes: 1048576,
    },
    ttl: 3600,
});

const memoryCache = cacheManager.caching({ store: "memory", max: 100, ttl: 60 });

cacheManager.multiCaching([memcachedCache, memoryCache]);
