// Type definitions for cache-manager-memcached-store 3.0
// Project: https://github.com/theogravity/node-cache-manager-memcached-store
// Definitions by: James Wigley <https://github.com/jwigley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Cache, Store, StoreConfig, CacheOptions } from 'cache-manager';

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

declare module 'cache-manager' {
    function caching(IConfig: CacheManagerMemcachedStoreConfig | (StoreConfig & CacheOptions)): Cache;
}

declare const methods: CacheManagerMemcachedStoreConstructor;
export = methods;
export {};
