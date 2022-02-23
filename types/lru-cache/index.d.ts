// Type definitions for lru-cache 7.3.0
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Brian-McBride <https://github.com/Brian-McBride>
//                 eugene1g <https://github.com/eugene1g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5.5

declare class LRUCache<K, V> {
    constructor(options: LRUCache.Options<K, V>);

    /**
     * The total number of items held in the cache at the current moment.
     */
    public readonly size: number;
    /**
     * The total size of items in cache when using size tracking.
     */
    public readonly calculatedSize: number;

    // All option names are exposed as public members on the cache object
    public readonly max: LRUCache.Options<K, V>['max'];
    public readonly maxSize: LRUCache.Options<K, V>['maxSize'];
    public readonly allowStale: LRUCache.Options<K, V>['allowStale'];
    public readonly noDisposeOnSet: LRUCache.Options<K, V>['noDisposeOnSet'];
    public readonly sizeCalculation: LRUCache.Options<K, V>['sizeCalculation'];
    public readonly dispose: LRUCache.Options<K, V>['dispose'];
    public readonly ttl: LRUCache.Options<K, V>['ttl'];
    public readonly updateAgeOnGet: LRUCache.Options<K, V>['updateAgeOnGet'];

    /**
     * Add a value to the cache. Will update the recency of the entry.
     * Optional options object may contain -
     *  - `ttl`: override ttl time for this entry
     *  - `size`: prevent calling the `sizeCalculation` function and just use the specified number if it is a positive integer.
     *  - `sizeCalculation`
     *  - `noDisposeOnSet`: prevent calling a dispose function in the case of overwrites.
     */
    public set(key: K, value: V, options?: LRUCache.SetOptions<V> | undefined): this;

    /**
     * Return a value from the cache. Will update the recency of the cache entry found.
     * If the key is not found, get() will return undefined. This can be confusing when setting values specifically to undefined, as in cache.set(key, undefined).
     * Use cache.has() to determine whether a key is present in the cache at all.
     */
    public get(key: K): V | undefined;

    /**
     * Like get() but doesn't update recency or delete stale items.
     * Returns undefined if the item is stale, unless allowStale is set either on the cache or in the options object.
     *
     * (If you find yourself using this a lot, you might be using the wrong sort of data structure, but there are some use cases where it's handy.)
     */
    public peek(key: K): V | undefined;

    /**
     * Check if a key is in the cache, without updating the recent-ness
     * or deleting it for being stale.
     */
    public has(key: K): boolean;

    /**
     * Deletes a key out of the cache.
     */
    public delete(key: K): boolean;

    /**
     * Clear the cache entirely, throwing away all values.
     */
    public clear(): void;

    /**
     * Return an array of the keys in the cache.
     */
    public keys(): Iterable<K>;

    /**
     * Return a generator yielding the values in the cache.
     */
    public values(): Iterable<V>;

    /**
     * Return a generator yielding [key, value] pairs.
     */
    public entries(): Iterable<[K, V]>;

    /**
     * Find a value for which the supplied fn method returns a truthy value, similar to Array.find().
     */
    public find(fn: (value: V, key: K, cache: this) => void, getOptions: LRUCache.Options<K, V>): V | undefined;

    /**
     * Return an array of the cache entries ready for serialization and usage with `destinationCache.load(arr)`.
     */
    public dump(): Array<LRUCache.Entry<K, V>>;

    /**
     * Loads another cache entries array, obtained with `sourceCache.dump()`,
     * into the cache. The destination cache is reset before loading new entries
     *
     * @param cacheEntries Obtained from `sourceCache.dump()`
     */
    public load(cacheEntries: ReadonlyArray<LRUCache.Entry<K, V>>): void;

    /**
     * Delete any stale entries. Returns true if anything was removed, false otherwise.
     */
    public purgeStale(): boolean;

    /**
     * Just like `Array.prototype.forEach`. Iterates over all the keys in the cache,
     * in order of recent-ness. (Ie, more recently used items are iterated over first.)
     */
    public forEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * Same as cache.forEach(fn, thisp), but in order from least recently used to most recently used.
     */
    public rforEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * Evict the least recently used item, returning its value. Returns undefined if cache is empty.
     */
    public pop(): V | void;

    /**
     * @deprecated
     * @see this.clear()
     */
    public reset(): void;

    /**
     * @deprecated
     * @see this.purgeStale()
     */
    public prune(): boolean;
}

declare namespace LRUCache {
    interface Options<K, V> {
        /**
         * The maximum number (or size) of items that remain in the cache (assuming no TTL pruning or explicit deletions).
         * Note that fewer items may be stored if size calculation is used, and maxSize is exceeded. This must be a positive finite intger.
         * This option is required, and must be a positive integer.
         */
        max: number;

        /**
         * Set to a positive integer to track the sizes of items added to the cache, and automatically evict items in order to stay below this size.
         * Note that this may result in fewer than max items being stored.
         * Optional, must be a positive integer if provided.
         * Required if other size tracking features are used.
         */
        maxSize?: number;

        /**
         * Function used to calculate the size of stored items.
         * If you're storing strings or buffers, then you probably want to do something like `n => n.length`.
         * The item is passed as the first argument, and the key is passed as the second argument.
         */
        sizeCalculation?(value: V, key: K): number;

        /**
         * function to call when the item is removed from the cache
         * Note that using this can negatively impact performance.
         */
        dispose?(value: V, key: K, reason: 'evict' | 'set' | 'delete'): void;

        /**
         * The same as dispose, but called after the entry is completely removed and the cache is once again in a clean state.
         * It is safe to add an item right back into the cache at this point. However, note that it is very easy to inadvertently create infinite recursion in this way.
         * @since 7.3.0
         */
        disposeAfter?(value: V, key: K, reason: 'evict' | 'set' | 'delete'): void;

        /**
         * By default, if you set a `dispose()` method, then it'll be called whenever
         * a `set()` operation overwrites an existing key. If you set this option,
         * `dispose()` will only be called when a key falls out of the cache, not when it is overwritten.
         * Only relevant if `dispose` or `disposeAfter` options are set.
         * @since 7.3.0
         * @default false
         */
        noDisposeOnSet?: boolean | undefined;

        /**
         * max time to live (in milliseconds) for items before they are considered stale note that stale items are NOT preemptively removed by default, and MAY live in the cache, contributing to its LRU max, long after they have expired.
         * Also, as this cache is optimized for LRU/MRU operations, some of the staleness/TTL checks will reduce performance, as they will incur
         * overhead by deleting items.
         * Must be a positive integer in ms, defaults to 0, which means "no TTL"
         * @default 0
         */
        ttl?: number;

        /**
         * Minimum amount of time in ms in which to check for staleness. Defaults to 1, which means that the current time is checked at most once per millisecond.
         * Set to 0 to check the current time every time staleness is tested.
         * Note that setting this to a higher value will improve performance somewhat while using ttl tracking, albeit at the expense of keeping stale items around a bit longer than intended.
         * @since 7.1.0
         * @default 1
         */
        ttlResolution?: number;

        /**
         * Preemptively remove stale items from the cache.
         * Note that this may significantly degrade performance, especially if the cache is storing a large number of items. It is almost always best to just leave the stale items in the cache, and let them fall out as new items are added.
         * Note that this means that allowStale is a bit pointless, as stale items will be deleted almost as soon as they expire.
         * Use with caution!
         * @since 7.1.0
         * @default false
         */
        ttlAutopurge?: boolean;

        /**
         * By default, if you set ttl, it'll only delete stale items from the cache when you get(key).
         * That is, it's not preemptively pruning items.
         * If you set allowStale:true, it'll return the stale value as well as deleting it. If you don't set this, then it'll return undefined when you try to get a stale entry.
         * Note that when a stale entry is fetched, even if it is returned due to allowStale being set, it is removed from the cache immediately.
         * You can immediately put it back in the cache if you wish, thus resetting the TTL.
         * This may be overridden by passing an options object to cache.get().
         * The cache.has() method will always return false for stale items.
         * Only relevant if `ttl` is set.
         * @default false
         */
        allowStale?: boolean;

        /**
         * When using time-expiring entries with ttl, setting this to true will make each item's age reset to 0 whenever it is retrieved from cache with get(), causing it to not expire.
         * (It can still fall out of cache based on recency of use, of course.)
         * This may be overridden by passing an options object to cache.get().
         * @default false
         */
        updateAgeOnGet?: boolean;

        /**
         * update the age of items on cache.has(), renewing their TTL
         * @default false
         */
        updateAgeOnHas?: boolean;

        /**
         * update the "recently-used"-ness of items on cache.has()
         * @default false
         */
        updateRecencyOnHas?: boolean;

        /**
         * Function that is used to calculate the length of stored items.
         * If you're storing strings or buffers, then you probably want to do
         * something like `function(n, key){return n.length}`. The default
         * is `function(){return 1}`, which is fine if you want to store
         * `max` like-sized things. The item is passed as the first argument,
         * and the key is passed as the second argument.
         */
        length?(value: V, key?: K): number;

        /**
         * By default, if you set a `maxAge`, it'll only actually pull stale items
         * out of the cache when you `get(key)`. (That is, it's not pre-emptively
         * doing a `setTimeout` or anything.) If you set `stale:true`, it'll return
         * the stale value before deleting it. If you don't set this, then it'll
         * return `undefined` when you try to get a stale entry,
         * as if it had already been deleted.
         * @deprecated
         * @see this.allowStale()
         */
        stale?: boolean | undefined;
    }

    interface SetOptions<V> {
        ttl?: number;
        // Will prevent calling the sizeCalculation function
        // and just use the specified number if it is a positive integer
        size?: number;
        sizeCalculation?(value: V): number;
        // Will prevent calling a dispose function in the case of overwrites
        noDisposeOnSet?: boolean;
    }

    interface Entry<K, V> {
        k: K;
        v: V;
        e: number;
    }
}
export = LRUCache;
