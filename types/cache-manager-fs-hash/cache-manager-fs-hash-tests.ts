import cacheManager = require("cache-manager");
import fsHashStore = require("cache-manager-fs-hash");

const fsHashCache = cacheManager.caching({
    store: fsHashStore,
    options: {
        path: "diskcache",
        ttl: 60 * 60,
        subdirs: true,
        zip: true,
    },
});

const memoryCache = cacheManager.caching({ store: "memory", max: 100, ttl: 60 });

cacheManager.multiCaching([fsHashCache, memoryCache]);
