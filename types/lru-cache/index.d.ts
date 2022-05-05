// Type definitions for lru-cache 7.6
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 BendingBender <https://github.com/BendingBender>
//                 isaacs <https://github.com/isaacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="DOM" />
// tslint:disable:member-access
declare class LRUCache<K, V> implements Iterable<[K, V]> {
    constructor(options: LRUCache.Options<K, V>);

    /**
     * Return total length of objects in cache taking into account `length` options function.
     *
     * @deprecated since 7.0 use `cache.size` instead
     */
    public readonly length: number;

    // values populated from the constructor options
    public readonly max: number;
    public readonly maxSize: number;
    public readonly sizeCalculation: LRUCache.SizeCalculator<K, V> | undefined;
    public readonly dispose: LRUCache.Disposer<K, V>;
    /**
     * @since 7.4.0
     */
    public readonly disposeAfter: LRUCache.Disposer<K, V> | null;
    public readonly noDisposeOnSet: boolean;
    public readonly ttl: number;
    public readonly ttlResolution: number;
    public readonly ttlAutopurge: boolean;
    public readonly allowStale: boolean;
    public readonly updateAgeOnGet: boolean;
    public readonly fetchMethod: LRUCache.Fetcher<K, V> | null;

    /**
     * The total number of items held in the cache at the current moment.
     */
    public readonly size: number;

    /**
     * The total size of items in cache when using size tracking.
     */
    public readonly calculatedSize: number;

    /**
     * Add a value to the cache.
     */
    public set(key: K, value: V, options?: LRUCache.SetOptions<K, V>): this;

    /**
     * Return a value from the cache.
     * Will update the recency of the cache entry found.
     * If the key is not found, `get()` will return `undefined`.
     * This can be confusing when setting values specifically to `undefined`,
     * as in `cache.set(key, undefined)`. Use `cache.has()` to determine
     * whether a key is present in the cache at all.
     */
    // tslint:disable-next-line:no-unnecessary-generics
    public get<T = V>(key: K, options?: LRUCache.GetOptions): T | undefined;

    /**
     * Like `get()` but doesn't update recency or delete stale items.
     * Returns `undefined` if the item is stale, unless `allowStale` is set either on the cache or in the options object.
     */
    // tslint:disable-next-line:no-unnecessary-generics
    public peek<T = V>(key: K, options?: LRUCache.PeekOptions): T | undefined;

    /**
     * Check if a key is in the cache, without updating the recency or age.
     * Will return false if the item is stale, even though it is technically in the cache.
     */
    public has(key: K): boolean;

    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */
    public delete(key: K): boolean;

    /**
     * Clear the cache entirely, throwing away all values.
     */
    public clear(): void;

    /**
     * Delete any stale entries. Returns true if anything was removed, false otherwise.
     */
    public purgeStale(): boolean;

    /**
     * Find a value for which the supplied fn method returns a truthy value, similar to Array.find().
     * fn is called as fn(value, key, cache).
     */
    // tslint:disable-next-line:no-unnecessary-generics
    public find<T = V>(callbackFn: (value: V, key: K, cache: this) => boolean | undefined | void, options?: LRUCache.GetOptions): T;

    /**
     * Same as cache.forEach(fn, thisp), but in order from least recently used to most recently used.
     */
    public forEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * The same as `cache.forEach(...)` but items are iterated over in reverse order.
     * (ie, less recently used items are iterated over first.)
     */
    public rforEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */
    public keys(): Generator<K>;

    /**
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */
    public rkeys(): Generator<K>;

    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */
    public values(): Generator<V>;

    /**
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */
    public rvalues(): Generator<V>;

    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */
    public entries(): Generator<[K, V]>;

    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */
    public rentries(): Generator<[K, V]>;

    public [Symbol.iterator](): Iterator<[K, V]>;

    /**
     * Return an array of [key, entry] objects which can be passed to cache.load()
     */
    public dump(): Array<[K, LRUCache.Entry<V>]>;

    /**
     * Reset the cache and load in the items in entries in the order listed.
     * Note that the shape of the resulting cache may be different if the
     * same options are not used in both caches.
     */
    public load(cacheEntries: ReadonlyArray<[K, LRUCache.Entry<V>]>): void;

    /**
     * Evict the least recently used item, returning its value or `undefined` if cache is empty.
     */
    public pop(): V | undefined;

    // ========================= Deprecated

    /**
     * Deletes a key out of the cache.
     *
     * @deprecated since 7.0 use delete() instead
     */
    public del(key: K): boolean;

    /**
     * Clear the cache entirely, throwing away all values.
     *
     * @deprecated since 7.0 use clear() instead
     */
    public reset(): void;

    /**
     * Manually iterates over the entire cache proactively pruning old entries.
     *
     * @deprecated since 7.0 use purgeStale() instead
     */
    public prune(): boolean;

    /**
     * since: 7.6.0
     */
    // tslint:disable-next-line:no-unnecessary-generics
    public fetch<ExpectedValue = V>(key: K, options?: LRUCache.FetchOptions): Promise<ExpectedValue | undefined>;
    /**
     * since: 7.6.0
     */
    public getRemainingTTL(key: K): number;
}

declare namespace LRUCache {
    type DisposeReason = 'evict' | 'set' | 'delete';

    type SizeCalculator<K, V> = (value: V, key: K) => number;

    type Disposer<K, V> = (value: V, key: K, reason: DisposeReason) => void;
    type Fetcher<K, V> = (key: K, staleKey?: K, options?: FetcherOptions<K, V>) => Promise<V>;

    interface DeprecatedOptions<K, V> {
        /**
         * Maximum age in ms. Items are not pro-actively pruned out as they age,
         * but if you try to get an item that is too old, it'll drop it and return
         * undefined instead of giving it to you.
         *
         * @deprecated since 7.0 use options.ttl instead
         */
        maxAge?: number;

        /**
         * Function that is used to calculate the length of stored items.
         * If you're storing strings or buffers, then you probably want to do
         * something like `function(n, key){return n.length}`. The default
         * is `function(){return 1}`, which is fine if you want to store
         * `max` like-sized things. The item is passed as the first argument,
         * and the key is passed as the second argument.
         *
         * @deprecated since 7.0 use options.sizeCalculation instead
         */
        length?(value: V, key?: K): number;

        /**
         * By default, if you set a `maxAge`, it'll only actually pull stale items
         * out of the cache when you `get(key)`. (That is, it's not pre-emptively
         * doing a `setTimeout` or anything.) If you set `stale:true`, it'll return
         * the stale value before deleting it. If you don't set this, then it'll
         * return `undefined` when you try to get a stale entry,
         * as if it had already been deleted.
         *
         * @deprecated since 7.0 use options.allowStale instead
         */
        stale?: boolean;
    }

    interface LimitedByCount {
        /**
         * The number of most recently used items to keep.
         * Note that we may store fewer items than this if maxSize is hit.
         */
        max: number;
    }

    interface LimitedBySize<K, V> {
        /**
         * If you wish to track item size, you must provide a maxSize
         * note that we still will only keep up to max *actual items*,
         * so size tracking may cause fewer than max items to be stored.
         * At the extreme, a single item of maxSize size will cause everything
         * else in the cache to be dropped when it is added.  Use with caution!
         * Note also that size tracking can negatively impact performance,
         * though for most cases, only minimally.
         */
        maxSize: number;

        /**
         * Function to calculate size of items.  Useful if storing strings or
         * buffers or other items where memory size depends on the object itself.
         * Also note that oversized items do NOT immediately get dropped from
         * the cache, though they will cause faster turnover in the storage.
         */
        sizeCalculation?: SizeCalculator<K, V>;
    }

    interface LimitedByTTL {
        /**
         * Max time to live for items before they are considered stale.
         * Note that stale items are NOT preemptively removed by default,
         * and MAY live in the cache, contributing to its LRU max, long after
         * they have expired.
         *
         * Also, as this cache is optimized for LRU/MRU operations, some of
         * the staleness/TTL checks will reduce performance, as they will incur
         * overhead by deleting items.
         *
         * Must be a positive integer in ms, defaults to 0, which means "no TTL"
         */
        ttl: number;

        /**
         * Boolean flag to tell the cache to not update the TTL when
         * setting a new value for an existing key (ie, when updating a value rather
         * than inserting a new value).  Note that the TTL value is _always_ set
         * (if provided) when adding a new entry into the cache.
         *
         * @default false
         * @since 7.4.0
         */
        noUpdateTTL?: boolean;

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
         *
         * @default 1
         * @since 7.1.0
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
         *
         * @default false
         * @since 7.1.0
         */
        ttlAutopurge?: boolean;

        /**
         * Return stale items from cache.get() before disposing of them
         *
         * @default false
         */
        allowStale?: boolean;

        /**
         * Update the age of items on cache.get(), renewing their TTL
         *
         * @default false
         */
        updateAgeOnGet?: boolean;
    }
    type SafetyBounds<K, V> = LimitedByCount | LimitedBySize<K, V> | LimitedByTTL;

    interface SharedOptions<K, V> {
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
         * @since 7.3.0
         */
        disposeAfter?: Disposer<K, V>;

        /**
         * Set to true to suppress calling the dispose() function if the entry
         * key is still accessible within the cache.
         * This may be overridden by passing an options object to cache.set().
         *
         * @default false
         */
        noDisposeOnSet?: boolean;

        /**
         * Since 7.6.0
         * `fetchMethod` Function that is used to make background asynchronous
         *   fetches.  Called with `fetchMethod(key, staleValue)`.  May return a
         *   Promise.
         *
         *     If `fetchMethod` is not provided, then `cache.fetch(key)` is equivalent
         *     to `Promise.resolve(cache.get(key))`.
         */
        fetchMethod?: Fetcher<K, V> | null;
    }

    type Options<K, V> = SharedOptions<K, V> & DeprecatedOptions<K, V> & SafetyBounds<K, V>;

    interface SetOptions<K, V> {
        /**
         * A value for the size of the entry, prevents calls to `sizeCalculation` function
         */
        size?: number;
        sizeCalculation?: SizeCalculator<K, V>;
        ttl?: number;
        noDisposeOnSet?: boolean;
        noUpdateTTL?: boolean;
    }

    interface GetOptions {
        allowStale?: boolean;
        updateAgeOnGet?: boolean;
    }

    interface PeekOptions {
        allowStale?: boolean;
    }
    interface FetchOptions {
        allowStale?: boolean;
        updateAgeOnGet?: boolean;
    }

    interface FetcherOptions<K, V> {
        signal?: AbortSignal;
        options?: SetOptions<K, V> & GetOptions;
    }

    interface Entry<V> {
        value: V;
        ttl?: number;
        size?: number;
    }
}

export = LRUCache;
