// Type definitions for cache-manager-fs-hash 0.0
// Project: https://github.com/rolandstarke/node-cache-manager-fs-hash#readme
// Definitions by: René Schapka <https://github.com/schapka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Store, StoreConfig, CacheOptions, Cache } from "cache-manager";

interface FsHashStoreOptions {
    path?: string;
    ttl?: number;
    maxsize?: number;
    subdirs?: boolean;
    zip?: boolean;
}

interface FsHashStoreConfig {
    store: FsHashStoreConstructor;
    options?: FsHashStoreOptions;
}

interface FsHashStoreConstructor {
    create: (config: FsHashStoreConfig) => Store;
}

declare module "cache-manager" {
    function caching(IConfig: FsHashStoreConfig | (StoreConfig & CacheOptions)): Cache;
}

declare const methods: FsHashStoreConstructor;
export = methods;
export {};
