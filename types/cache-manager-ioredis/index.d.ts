import { Cache, CacheOptions, CachingConfig, Store } from "cache-manager";
import * as IORedis from "ioredis";

declare const methods: CacheManagerIORedis.RedisStoreConstructor;
export = methods;
export {};

declare module "cache-manager" {
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
        create:
            | ((...options: RedisStoreSingleNodeConfig[]) => RedisSingleNodeStore)
            | ((...options: RedisStoreClusterConfig[]) => RedisClusterStore);
    }

    type RedisStoreSingleNodeConfig = CachingConfig & IORedis.RedisOptions & {
        store: RedisStoreConstructor;
        max?: number | undefined;
    } & CacheOptions;

    type RedisStoreClusterConfig = CachingConfig & {
        store: RedisStoreConstructor;
        max?: number | undefined;
        clusterConfig: ClusterOptions;
    } & CacheOptions;

    interface RedisStore extends Store {
        getClient(): IORedis.Redis | IORedis.Cluster;
        name: "redis";
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
