import { Cache, CacheOptions, Store, StoreConfig } from "cache-manager";

interface FsHashStoreOptions {
    path?: string | undefined;
    ttl?: number | undefined;
    maxsize?: number | undefined;
    subdirs?: boolean | undefined;
    zip?: boolean | undefined;
}

interface FsHashStoreConfig {
    store: FsHashStoreConstructor;
    options?: FsHashStoreOptions | undefined;
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
