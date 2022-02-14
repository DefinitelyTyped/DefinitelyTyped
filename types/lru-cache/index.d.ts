/**
 * author: liuqiaoru
 * Type definitions for lru-cache 7.3.1
 * Project: https://github.com/isaacs/node-lru-cache
 */

 declare class LRUCache<K, V, R> {
    constructor(options?: LRUCache.Options<K, V, R>);

    /**
     * Return a value from the cache.
     * Will update the recency of the cache entry found.
     */
    get(k: K, {allowStale, updateAgeOnGet}?: {allowStale?: boolean, updateAgeOnGet?: boolean}): V | undefined;

    /**
     * Add a value to the cache. Will update the recency of the entry. Returns the cache object.
     */
    set(k: K, v: V, {size, sizeCalculation, ttl, noDisposeOnSet}?: {size: number, sizeCalculation: (value: V, key: K) => number, ttl: number, noDisposeOnSet: boolean}): void;

    /**
     * Like get() but doesn't update recency or delete stale items.
     * Returns undefined if the item is stale, unless allowStale is set either on the cache or in the options object.
     */
    peek(k: K, {allowStale}?: {allowStale: boolean}): V | undefined;

    /**
     * Check if a key is in the cache, without updating the recency or age.
     * Will return false if the item is stale, even though it is technically in the cache.
     */
    has(k: K): boolean;

    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */
    delete(k: K): void;

    /**
     * Clear the cache entirely, throwing away all values.
     * Deprecated alias: reset()
     */
    clear(): void;

    /**
     * Return a generator yielding the keys in the cache.
     */
    keys(): Generator<K>;

    /**
     * Return a generator yielding the values in the cache.
     */
    values(): Generator<V>;

    /**
     * Return a generator yielding [key, value] pairs.
     */
    entries(): Generator<[K,V]>;

    /**
     * Find a value for which the supplied fn method returns a truthy value, similar to Array.find().
     */
    find(fn: (value: V, key: K, cache: LRUCache<V, K, R>) => void, getOptions?: {allowStale?: boolean, updateAgeOnGet?: boolean}): number | undefined;

    /**
     * Return an array of [key, entry] objects which can be passed to cache.load()
     * Note: this returns an actual array, not a generator, so it can be more easily passed around.
     */
    dump(): Array<[K, V]>;

    /**
     * Reset the cache and load in the items in entries in the order listed. 
     * Note that the shape of the resulting cache may be different if the same options are not used in both caches.
     */
    load(arr: Array<[K, V]>): void;

    /**
     * Delete any stale entries. Returns true if anything was removed, false otherwise.
     */
    purgeStale(): boolean;

    /**
     * Call the fn function with each set of fn(value, key, cache) in the LRU cache, 
     * from most recent to least recently used. Does not affect recency of use.
     * If thisp is provided, function will be called in the this-context of the provided object.
     */
    forEach(fn: (value: V, key: K, cache: LRUCache<V, K, R>) => void, thisp?: LRUCache<V, K, R>): void;

    /**
     * Same as cache.forEach(fn, thisp), but in order from least recently used to most recently used.
     */
    rforEach(fn: (value: V, key: K, cache: LRUCache<V, K, R>) => void, thisp?: LRUCache<V, K, R>): void;

    /**
     * Evict the least recently used item, returning its value.
     * Returns undefined if cache is empty.
     */
    pop(): V | undefined;

}

declare namespace LRUCache {
    interface Options<K, V, R> {

        // The maximum number (or size) of items that remain in the cache (
        // assuming no TTL pruning or explicit deletions). 
        // Note that fewer items may be stored if size calculation is used, 
        // and maxSize is exceeded. This must be a positive finite intger.
        max?: number | undefined,


        // Set to a positive integer to track the sizes of items added to the cache, 
        // and automatically evict items in order to stay below this size. 
        // Note that this may result in fewer than max items being stored.
        maxSize?: number | undefined,

        // function to calculate size of items.  useful if storing strings or
        // buffers or other items where memory size depends on the object itself.
        // also note that oversized items do NOT immediately get dropped from
        // the cache, though they will cause faster turnover in the storage.
        sizeCalculation?(value: V, key: K): number,

        /**
         * function to call when the item is removed from the cache
         * Note that using this can negatively impact performance.
         */
        dispose?(value: V, key: K, reason: R): void,

        /**
         * The same as dispose, but called after the entry is completely removed 
         * and the cache is once again in a clean state.
         */
        disposeAfter?(value: V, key: K, reason: R): void,

        // Set to true to suppress calling the dispose() function 
        // if the entry key is still accessible within the cache.
        noDisposeOnSet?: boolean | undefined,

        // max time to live for items before they are considered stale
        // note that stale items are NOT preemptively removed by default,
        // and MAY live in the cache, contributing to its LRU max, long after
        // they have expired.
        // Also, as this cache is optimized for LRU/MRU operations, some of
        // the staleness/TTL checks will reduce performance, as they will incur
        // overhead by deleting items.
        // Must be a positive integer in ms, defaults to 0, which means "no TTL"
        ttl?: number | undefined,

        // Minimum amount of time in ms in which to check for staleness. 
        // Defaults to 1, which means that the current time is checked at most once 
        // per millisecond.
        ttlResolution?: number,

        //Preemptively remove stale items from the cache.
        ttlAutopurge?: boolean | undefined,

        // return stale items from cache.get() before disposing of them
        // boolean, default false 
        allowStale?: boolean | undefined,



        // When using time-expiring entries with ttl, setting this to true 
        // will make each item's age reset to 0 whenever it is retrieved from cache with get(), 
        // causing it to not expire. (It can still fall out of cache based on recency of use, of course.)
        updateAgeOnGet?: boolean | undefined,

    }

    interface Entry<K, V, R> {
        k: K,
        v: V,
        r: R,
    }
}

export = LRUCache;
