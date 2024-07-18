import { Cache, CacheOptions, Store, StoreConfig } from "cache-manager";
import * as Redis from "redis";

declare const methods: CacheManagerRedisStore.RedisStoreConstructor;
export = methods;
export {};

declare module "cache-manager" {
    function caching(IConfig: StoreConfig & CacheOptions): CacheManagerRedisStore.RedisCache;
}

declare namespace CacheManagerRedisStore {
    interface RedisCache extends Cache {
        store: RedisStore;
    }

    interface RedisStore extends Store {
        name: "redis";
        getClient: () => Redis.RedisClient;
        isCacheableValue: (value: any) => boolean;
    }

    interface RedisStoreConstructor {
        create: (options?: Redis.ClientOpts) => RedisStore;
    }
}
