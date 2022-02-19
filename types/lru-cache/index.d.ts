// Type definitions for lru-cache 7.3
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class LRUCache<K, V> implements Iterable<[K, V]> {
    constructor(options?: LRUCache.Options<K, V>);

    // values populated from the constructor options
    readonly max: number;
    readonly maxSize: number;
    readonly sizeCalculation: LRUCache.SizeCalculator<K, V> | undefined;
    readonly dispose: LRUCache.Disposer<K, V>;
    readonly disposeAfter: LRUCache.Disposer<K, V> | null;
    readonly noDisposeOnSet: boolean;
    readonly ttl: number;
    readonly ttlResolution: number;
    readonly ttlAutopurge: boolean;
    readonly allowStale: boolean;
    readonly updateAgeOnGet: boolean;

    /**
     * The total number of items held in the cache at the current moment.
     */
    readonly size: number;

    /**
     * The total size of items in cache when using size tracking.
     */
    readonly calculatedSize: number;

    /**
     * Add a value to the cache.
     */
    set(key: K, value: V, options?: LRUCache.SetOptions<K, V>): this;

    /**
     * Return a value from the cache.
     * Will update the recency of the cache entry found.
     * If the key is not found, `get()` will return `undefined`.
     * This can be confusing when setting values specifically to `undefined`,
     * as in `cache.set(key, undefined)`. Use `cache.has()` to determine
     * whether a key is present in the cache at all.
     */
    get(key: K, options?: LRUCache.GetOptions): V | undefined;

    /**
     * Like `get()` but doesn't update recency or delete stale items.
     * Returns `undefined` if the item is stale, unless `allowStale` is set either on the cache or in the options object.
     */
    peek(key: K, options?: LRUCache.PeekOptions): V | undefined;

    /**
     * Check if a key is in the cache, without updating the recency or age.
     * Will return false if the item is stale, even though it is technically in the cache.
     */
    has(key: K): boolean;

    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */
    delete(key: K): boolean;

    /**
     * Clear the cache entirely, throwing away all values.
     */
    clear(): void;

    /**
     * Delete any stale entries. Returns true if anything was removed, false otherwise.
     */
    purgeStale(): boolean;

    /**
     * Find a value for which the supplied fn method returns a truthy value, similar to Array.find().
     * fn is called as fn(value, key, cache).
     */
    find(callbackFn: (value: V, key: K, cache: this) => boolean, options?: LRUCache.GetOptions): V;

    /**
     * Same as cache.forEach(fn, thisp), but in order from least recently used to most recently used.
     */
    forEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * The same as `cache.forEach(...)` but items are iterated over in reverse order.
     * (ie, less recently used items are iterated over first.)
     */
    rforEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * Return a generator yielding the keys in the cache.
     */
    keys(): Generator<K>;

    /**
     * Return a generator yielding [key, value] pairs.
     */
    values(): Generator<V>;

    /**
     * Return an array of the entries in the cache.
     */
    entries(): Generator<[K, V]>;

    [Symbol.iterator](): Iterator<[K, V]>;

    /**
     * Return an array of [key, entry] objects which can be passed to cache.load()
     */
    dump(): Array<[K, LRUCache.Entry<V>]>;

    /**
     * Reset the cache and load in the items in entries in the order listed.
     * Note that the shape of the resulting cache may be different if the
     * same options are not used in both caches.
     */
    load(cacheEntries: ReadonlyArray<[K, LRUCache.Entry<V>]>): void;

    /**
     * Evict the least recently used item, returning its value or `undefined` if cache is empty.
     */
    pop(): V | undefined;
}

declare namespace LRUCache {
    type DisposeReason = "evict" | "set" | "delete";

    type SizeCalculator<K, V> = (value: V, key: K) => number;

    type Disposer<K, V> = (value: V, key: K, reason: DisposeReason) => void;

    interface Options<K, V> {
        /** @deprecated */
        length?: SizeCalculator<K, V>;
        /** @deprecated */
        maxAge?: number;
        /** @deprecated */
        stale?: boolean;

        /**
         * The number of most recently used items to keep.
         * Note that we may store fewer items than this if maxSize is hit.
         */
        max: number;

        /**
         * If you wish to track item size, you must provide a maxSize
         * note that we still will only keep up to max *actual items*,
         * so size tracking may cause fewer than max items to be stored.
         * At the extreme, a single item of maxSize size will cause everything
         * else in the cache to be dropped when it is added.  Use with caution!
         * Note also that size tracking can negatively impact performance,
         * though for most cases, only minimally.
         */
        maxSize?: number;

        /**
         * Function to calculate size of items.  Useful if storing strings or
         * buffers or other items where memory size depends on the object itself.
         * Also note that oversized items do NOT immediately get dropped from
         * the cache, though they will cause faster turnover in the storage.
         */
        sizeCalculation?: SizeCalculator<K, V>;

        /**
         * Function that is called on items when they are dropped from the cache.
         * This can be handy if you want to close file descriptors or do other
         * cleanup tasks when items are no longer accessible. Called with `key, value`.
         * It's called before actually removing the item from the internal cache,
         * so if you want to immediately put it back in, you'll have to do that in
         * a `nextTick` or `setTimeout` callback or it won't do anything.
         */
        dispose?: Disposer<K, V>;

        /**
         * The same as dispose, but called *after* the entry is completely removed
         * and the cache is once again in a clean state
         * It is safe to add an item right back into the cache at this point.
         * However, note that it is *very* easy to inadvertently create infinite
         * recursion this way.
         */
        disposeAfter?: Disposer<K, V>;

        /**
         * Set to true to suppress calling the dispose() function if the entry
         * key is still accessible within the cache.
         * This may be overridden by passing an options object to cache.set().
         */
        noDisposeOnSet?: boolean;

        /**
         * Max time to live for items before they are considered stale.
         * Note that stale items are NOT preemptively removed by default,
         * and MAY live in the cache, contributing to its LRU max, long after
         * they have expired.
         * Also, as this cache is optimized for LRU/MRU operations, some of
         * the staleness/TTL checks will reduce performance, as they will incur
         * overhead by deleting items.
         * Must be a positive integer in ms, defaults to 0, which means "no TTL"
         */
        ttl?: number;

        /**
         * Minimum amount of time in ms in which to check for staleness.
         * Defaults to 1, which means that the current time is checked
         * at most once per millisecond.
         *
         * Set to 0 to check the current time every time staleness is tested.
         *
         * Note that setting this to a higher value will improve performance
         * somewhat while using ttl tracking, albeit at the expense of keeping
         * stale items around a bit longer than intended.
         */
        ttlResolution?: number;

        /**
         * Preemptively remove stale items from the cache.
         * Note that this may significantly degrade performance,
         * especially if the cache is storing a large number of items.
         * It is almost always best to just leave the stale items in
         * the cache, and let them fall out as new items are added.
         *
         * Note that this means that allowStale is a bit pointless,
         * as stale items will be deleted almost as soon as they expire.
         *
         * Use with caution!
         */
        ttlAutopurge?: boolean;

        /**
         * Return stale items from cache.get() before disposing of them
         */
        allowStale?: boolean;

        /**
         * Update the age of items on cache.get(), renewing their TTL
         */
        updateAgeOnGet?: boolean;
    }

    interface SetOptions<K, V> {
        /**
         * A value for the size of the entry, prevents calls to `sizeCalculation` function
         */
        size?: number;
        sizeCalculation?: SizeCalculator<K, V>;
        ttl?: number;
        noDisposeOnSet?: boolean;
    }

    interface GetOptions {
        allowStale?: boolean;
        updateAgeOnGet?: boolean;
    }

    interface PeekOptions {
        allowStale?: boolean;
    }

    interface Entry<V> {
        value: V;
        ttl?: number;
        size?: number;
    }
}

export = LRUCache;
