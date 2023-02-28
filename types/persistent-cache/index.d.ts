// Type definitions for persistent-cache 1.1
// Project: https://github.com/LionC/persistent-cache#readme
// Definitions by: Cesar Daniel B Gomez <https://github.com/DanielBGomez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace PersistentCache {
    interface CacheOptions {
        /**
         * The base directory where `persistent-cache` will save its caches.
         *
         * Defaults to the main modules directory
         */
        base?: string;
        /**
         * The name of the cache. Determines the name of the created folder where the data is stored, which is just `base + name`.
         *
         * Defaults to `cache`
         */
        name?: string;
        /**
         * The amount of milliseconds a cache entry should be valid for. If not set, cache entries are not invalidated (stay until deleted).
         *
         * Defaults to `undefined` (infinite)
         */
        duration?: number;
        /**
         * Whether the cache should use memory caching or not (mirrors all cache data in the ram, saving disk I/O and increasing performance).
         *
         * Defaults to `true`
         */
        memory?: boolean;
        /**
         * Whether the cache should be persistent, aka if it should write its data to the disk for later use or not. Set this to `false` to create a memory-only cache.
         *
         * Defaults to `true`
         */
        persist?: boolean;
    }
    interface CacheEntry {
        cacheUntil?: number;
        data: any;
    }
    type Callback = (err: NodeJS.ErrnoException | null, data?: any) => any;
}

/**
 * A simple Node module to persistently store/cache arbitrary data.
 */
declare function cache(options?: PersistentCache.CacheOptions): {
    /**
     * Store any arbitrary `data` in the cache under the provided key and call the provided callback when done (passing err as the first argument, following node convention).
     *
     * If there is already an entry for the provided key it will be overwriten.
     */
    put(name: string, data: any, cb: PersistentCache.Callback): any;
    /**
     * Get the data saved under `key` from the cache and call the provided callback when done, passing the retrieved data as the second argument (again, passing error first following node convention).
     *
     * If there is no (valid) cache entry for the provided `key`, `undefined` will be returned/passed.
     */
    get(name: string, cb: PersistentCache.Callback): any;
    /**
     * Remove the provided `key` from the cache and call the provided callback when done.
     */
    delete(name: string, cb: PersistentCache.Callback): void;
    /**
     * Store any arbitrary `data` in the cache under the provided key.
     *
     * If there is already an entry for the provided key it will be overwriten.
     */
    putSync(name: string, data: any): void;
    /**
     * Get the data saved under `key` from the cache.
     *
     * If there is no (valid) cache entry for the provided `key`, `undefined` will be returned/passed.
     */
    getSync(name: string): any;
    /**
     * Remove the provided `key` from the cache.
     */
    deleteSync(name: string): undefined | void;
    /**
     * Finds all available keys in a cache.
     */
    keys(cb: PersistentCache.Callback): any;
    /**
     * Finds all available keys in a cache.
     */
    keysSync(): string[];
    /**
     * Delete the folder and files of a persistent cache.
     */
    unlink(cb: (err: NodeJS.ErrnoException | null) => void): void;
};

export = cache;
