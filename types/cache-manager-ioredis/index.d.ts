// Type definitions for cache-manager-ioredis 2.0
// Project: https://github.com/dabroek/node-cache-manager-ioredis
// Definitions by: Yi Hong <https://github.com/hongyiweiwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as IORedis from "ioredis";
import { Store, CachingConfig, CacheOptions, Cache } from 'cache-manager';

declare const methods: CacheManagerIORedis.RedisStoreConstructor;
export = methods;
export { };

declare module 'cache-manager' {
    function caching(IConfig: CacheManagerIORedis.RedisStoreClusterConfig): CacheManagerIORedis.ClusterCache;
    function caching(IConfig: CacheManagerIORedis.RedisStoreSingleNodeConfig): CacheManagerIORedis.SingleNodeCache;
    function caching(IConfig: StoreConfig & CacheOptions): Cache;
}

declare namespace CacheManagerIORedis {
    interface SingleNodeCache extends Cache {
        store: RedisSingleNodeStore;
    }

    interface ClusterCache extends Cache {
        store: RedisClusterStore;
    }

    interface RedisStoreConstructor {
        create: ((...options: RedisStoreSingleNodeConfig[]) => RedisSingleNodeStore) | ((...options: RedisStoreClusterConfig[]) => RedisClusterStore);
    }

    type RedisStoreSingleNodeConfig = (CachingConfig & IORedis.RedisOptions & {
        store: RedisStoreConstructor;
        max?: number;
    } & CacheOptions);

    type RedisStoreClusterConfig = (CachingConfig & {
        store: RedisStoreConstructor;
        max?: number;
        clusterConfig: ClusterOptions;
    } & CacheOptions);

    interface RedisStore extends Store {
        getClient(): IORedis.Redis | IORedis.Cluster;
        name: 'redis';
        isCacheableValue(value: any): boolean;
        del(...args: any[]): Promise<any>;
        reset(...args: any[]): Promise<any>;
        keys(...args: any[]): Promise<any>;
        ttl(...args: any[]): Promise<any>;
    }

    interface RedisSingleNodeStore extends RedisStore {
        getClient(): IORedis.Redis;
    }

    interface RedisClusterStore extends RedisStore {
        getClient(): IORedis.Cluster;
    }

    interface ClusterOptions {
        nodes: IORedis.ClusterNode[];
        options: IORedis.ClusterOptions;
    }
}
