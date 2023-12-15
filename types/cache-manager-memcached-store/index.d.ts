import { Cache, CacheOptions, Store, StoreConfig } from "cache-manager";

interface CacheManagerMemcachedStoreOptions {
    autodiscover?: boolean;
    bufferBeforeError?: number;
    disabled?: boolean;
    hosts?: string[] | null;
    reconnect?: boolean;
    onNetError?: (error: Error) => void;
    queue?: boolean;
    netTimeout?: number;
    backoffLimit?: number;
    maxValueSizes?: number;
}

interface CacheManagerMemcachedStoreConfig {
    store: CacheManagerMemcachedStoreConstructor;
    options?: CacheManagerMemcachedStoreOptions | undefined;
}

interface CacheManagerMemcachedStoreConstructor {
    create: (config: CacheManagerMemcachedStoreConfig) => Store;
}

declare module "cache-manager" {
    function caching(IConfig: CacheManagerMemcachedStoreConfig | (StoreConfig & CacheOptions)): Cache;
}

declare const methods: CacheManagerMemcachedStoreConstructor;
export = methods;
export {};
