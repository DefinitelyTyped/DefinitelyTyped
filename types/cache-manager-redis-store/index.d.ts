// Type definitions for cache-manager-redis-store 2.0
// Project: https://github.com/dabroek/node-cache-manager-redis-store
// Definitions by: Eduardo Cancino <https://github.com/ecancinoz-chwy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
