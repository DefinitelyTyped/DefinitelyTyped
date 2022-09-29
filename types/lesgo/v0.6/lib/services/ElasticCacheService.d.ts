import Memcached = require('memcached');
// We use memcahced-elasticcache which is just a drop-in replacement

export interface MemcachedElasticCache extends Memcached.options {
    autoDiscover?: boolean;
    autoDiscoverInterval?: number;
    autoDiscoverOverridesRemove?: boolean;
}

export interface ElasticCacheServiceParams {
    url: Memcached.Location;
    options: MemcachedElasticCache;
}

export default class ElasticCacheService {
    driver: Memcached;

    constructor(params: ElasticCacheServiceParams);

    setDriver(driver: Memcached): ElasticCacheService;
}
