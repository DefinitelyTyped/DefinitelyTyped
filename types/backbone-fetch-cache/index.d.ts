// Type definitions for backbone-fetch-cache 1.4.0
// Project: https://github.com/madglory/backbone-fetch-cache
// Definitions by: delphinus <https://github.com/delphinus35>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Backbone from "backbone";

interface SuperMethods {

    modelFetch(options?: Backbone.ModelFetchOptions): JQueryXHR;
    modelSync(...arg: any[]): JQueryXHR;
    collectionFetch(options?: Backbone.CollectionFetchOptions): JQueryXHR;
}

interface GetCacheOptions {

    data?: any;
    url?:  string;
}

interface SetCacheOptions extends GetCacheOptions {

    cache:          boolean;
    expires:        boolean | number;
    prefill:        boolean;
    prefillExpires: boolean | number;
}

interface Cache {

    expires:        number;
    lastSync:       number;
    prefillExpires: number;
    value:          any;
}

interface GetCacheKeyObject {

    getCacheKey?: (opts?: GetCacheOptions) => string;
    url?:         () => string;
}

type GetCacheKeyOptions = string | {url: string} | GetCacheKeyObject;

interface Static {

    /**
     * Global flag to enable/disable caching
     */
    enabled: boolean;

    /**
     * By default the cache is persisted in localStorage (if available).
     * Set Backbone.fetchCache.localStorage = false to disable this.
     */
    localStorage: boolean;

    /**
     * Sometimes you just need to clear a cached item manually.
     * Backbone.fetchCache.clearItem() can be called safely from anywhere
     * in your application. It will take your backbone Model or Collection,
     * a function that returns the key String, or the key String itself. If
     * you pass in a Model or Collection, the .getCacheKey() method will be
     * checked before the url property.
     */
    clearItem(...args: any[]): any;

    /**
     * You can explicitly fetch a cached item, without having to call the
     * models/collection fetch. This might be useful for debugging and
     * testing.
     */
    getCache(key: () => string, opts?: GetCacheOptions): Cache;
    getCache(key: GetCacheKeyOptions, opts?: GetCacheOptions): Cache;

    getCacheKey(key: () => string, opts?: GetCacheOptions): string;
    getCacheKey(key: GetCacheKeyOptions, opts?: GetCacheOptions): string;

    /**
     * If you want to know when was the last (server) sync of a given key, you can use.
     */
    getLastSync(key: () => string, opts?: GetCacheOptions): number;
    getLastSync(key: GetCacheKeyOptions, opts?: GetCacheOptions): number;

    getLocalStorage(): void;
    getLocalStorageKey(): string;

    /**
     * When setting items in localStorage, the browser may throw a
     * QUOTA_EXCEEDED_ERR, meaning the store is full. Backbone.fetchCache
     * tries to work around this problem by deleting what it considers the
     * most stale item to make space for the new data. The staleness of
     * data is determined by the sorting function priorityFn, which by
     * default returns the oldest item.
     */
    priorityFn(a: Cache, b: Cache): number;

    reset(): void;

    setCache(instance: () => string, opts?: SetCacheOptions, attrs?: any): void;
    setCache(instance: GetCacheKeyOptions, opts?: SetCacheOptions, attrs?: any): void;

    setLocalStorage(...args: any[]): any;

    _superMethods: SuperMethods;
}

declare module "backbone" {

    var fetchCache: Static;

    /**
     * The most used API hook for Backbone Fetch Cache is the Model and
     * Collection #.fetch() method. Here are the options you can pass into that
     * method to get behaviour particular to Backbone Fetch Cache.
     */
    interface ModelFetchWithCacheOptions extends ModelFetchOptions {

        /**
         * Calls to modelInstance.fetch or collectionInstance.fetch will be
         * fulfilled from the cache (if possible) when cache: true is set in
         * the options hash.
         */
        cache?:          boolean;

        context?:        any;

        /**
         * Cache values expire after 5 minutes by default. You can adjust this
         * by passing expires: <seconds> to the fetch call. Set to false to
         * never expire.
         */
        expires?:        number;

        /**
         * This option allows the model/collection to be populated from the
         * cache immediately and then be updated once the call to fetch has
         * completed. The initial cache hit calls the prefillSuccess callback
         * and then the AJAX success/error callbacks are called as normal when
         * the request is complete. This allows the page to render something
         * immediately and then update it after the request completes. (Note:
         * the prefillSuccess callback will not fire if the data is not found
         * in the cache.)
         *
         * prefill and prefillExpires options can be used with the promises
         * interface like so (note: the progress event will not fire if the
         * data is not found in the cache.).
         *
         * prefillExpires affects prefill in the following ways:
         *
         * 1. If the cache doesn't hold the requested data, just fetch it
         *  (usual behaviour)
         * 2. If the cache holds an expired version of the requested data, just
         *  fetch it (usual behaviour)
         * 3. If the cache holds requested data that is neither expired nor
         *  prefill expired, just return it and don't do a fetch / prefill
         *  callback (usual cache behavior, unusual prefill behaviour)
         * 4. If the cache holds requested data that isn't expired but is
         *  prefill expired, use the prefill callback and do a fetch (usual
         *  prefill behaviour)
         */
        prefill?:        boolean;
        prefillExpires?: number;
        prefillSuccess?: (self: any, attributes: any, opts: ModelFetchWithCacheOptions) => void;
    }

    interface CollectionFetchWithCacheOptions extends ModelFetchWithCacheOptions {

        prefillSuccess?: (self: any) => void;
    }

    interface ModelWithCache extends Model {

        fetch(options?: ModelFetchWithCacheOptions): JQueryXHR;
    }

    interface CollectionWithCache extends Collection<Model> {

        fetch(options?: CollectionFetchWithCacheOptions): JQueryXHR;
    }
}

export as namespace BackboneFetchCache;
