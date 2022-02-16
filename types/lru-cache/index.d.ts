// Type definitions for lru-cache 7.3
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 BendingBender <https://github.com/BendingBender>
//                 Michael Maurizi <https://github.com/maurizi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class LRUCache<K, V> {
    constructor(options?: LRUCache.Options<K, V>);

    /**
     * The total number of items held in the cache at the current moment.
     */
    readonly size: number;

    /**
     * The total size of items in cache when using size tracking.
     */
    readonly calculatedSize: number;

    /**
     * Same as Options.max
     */
    max: number;

    /**
     * Same as Options.maxSize
     */
    maxSize?: number | undefined;

    /**
     * Same as Options.sizeCalculation
     */
    sizeCalculation?(value: V, key?: K): number;

    /**
     * Same as Options.dispose
     */
    dispose?(value: V, key: K, reason: 'evict' | 'set' | 'delete'): void;

    /**
     * Same as Options.disposeAfter
     */
    disposeAfter?(value: V, key: K, reason: 'evict' | 'set' | 'delete'): void;

    /**
     * Same as Options.noDisposeOnSet
     */
    noDisposeOnSet?: boolean | undefined;

    /**
     * Same as Options.ttl
     */
    ttl?: number | undefined;

    /**
     * Same as Options.ttlResolution
     */
    ttlResolution?: number | undefined;

    /**
     * Same as Options.ttlAutopurge
     */
    ttlAutopurge?: boolean | undefined;

    /**
     * Same as Options.allowStale
     */
    allowStale?: boolean | undefined;

    /**
     * Same as Options.updateAgeOnGet
     */
    updateAgeOnGet?: boolean | undefined;

    /**
     * Will update the "recently used"-ness of the key. They do what you think.
     * `maxAge` is optional and overrides the cache `maxAge` option if provided.
     */
    set(
        key: K,
        value: V,
        options?: {
            size?: number;
            sizeCalculation?(value: V, key?: K): number;
            ttl?: number;
            noDisposeOnSet?: boolean;
        },
    ): LRUCache<K, V>;

    /**
     * Will update the "recently used"-ness of the key. They do what you think.
     * `maxAge` is optional and overrides the cache `maxAge` option if provided.
     *
     * If the key is not found, will return `undefined`.
     */
    get(key: K, options?: { updateAgeOnGet?: boolean; allowStale?: boolean }): V | undefined;

    /**
     * Returns the key value (or `undefined` if not found) without updating
     * the "recently used"-ness of the key.
     *
     * (If you find yourself using this a lot, you might be using the wrong
     * sort of data structure, but there are some use cases where it's handy.)
     */
    peek(key: K, options?: { allowStale?: boolean }): V | undefined;

    /**
     * Check if a key is in the cache, without updating the recent-ness
     * or deleting it for being stale.
     */
    has(key: K): boolean;

    /**
     * Deletes a key out of the cache.
     */
    delete(key: K): void;

    /**
     * Clear the cache entirely, throwing away all values.
     */
    clear(): void;

    /**
     * Return a generator of the keys in the cache.
     */
    keys(): Generator<K, void>;

    /**
     * Return a generator of the values in the cache.
     */
    values(): Generator<V, void>;

    /**
     * Return a generator yielding [key, value] pairs.
     */
    entries(): Generator<LRUCache.Entry<K, V>, void>;

    /**
     * Find a value for which the supplied fn method returns a truthy value, similar to Array.find().
     */
    find(
        callbackFn: (value: V, key: K, cache: this) => void,
        options?: { updateAgeOnGet?: boolean; allowStale?: boolean },
    ): void;

    /**
     * Return an array of the cache entries ready for serialization and usage with `destinationCache.load(arr)`.
     */
    dump(): Array<LRUCache.Entry<K, V>>;

    /**
     * Loads another cache entries array, obtained with `sourceCache.dump()`,
     * into the cache. The destination cache is reset before loading new entries
     *
     * @param cacheEntries Obtained from `sourceCache.dump()`
     */
    load(cacheEntries: ReadonlyArray<LRUCache.Entry<K, V>>): void;

    /**
     * Delete any stale entries. Returns true if anything was removed, false otherwise.
     */
    purgeStale(): boolean;

    /**
     * Just like `Array.prototype.forEach`. Iterates over all the keys in the cache,
     * in order of recent-ness. (Ie, more recently used items are iterated over first.)
     */
    forEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * The same as `cache.forEach(...)` but items are iterated over in reverse order.
     * (ie, less recently used items are iterated over first.)
     */
    rforEach<T = this>(callbackFn: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): void;

    /**
     * Evict the least recently used item, returning its value.
     * Returns `undefined` if cache is empty.
     */
    pop(): V | undefined;
}

declare namespace LRUCache {
    interface Options<K, V> {
        /**
         *  The maximum number (or size) of items that remain in the cache (assuming no TTL pruning or
         * explicit deletions). Note that fewer items may be stored if size calculation is used,
         * and `maxSize` is exceeded. This must be a positive finite intger.
         */
        max: number;

        /**
         * Set to a positive integer to track the sizes of items added to the cache, and
         * automatically evict items in order to stay below this size.
         * Note that this may result in fewer than max items being stored.
         */
        maxSize?: number | undefined;

        /**
         * Function used to calculate the size of stored items. If you're storing
         * strings or buffers, then you probably want to do something like `n => n.length`.
         * The item is passed as the first argument, and the key is passed as the second argument.
         * This may be overridden by passing an options object to `cache.set()`.
         * Requires `maxSize` to be set.
         */
        sizeCalculation?(value: V, key?: K): number;

        /**
         * Function that is called on items when they are dropped from the cache.
         * This can be handy if you want to close file descriptors or do other
         * cleanup tasks when items are no longer accessible. Called with `key, value`.
         * It's called before actually removing the item from the internal cache,
         * so if you want to immediately put it back in, you'll have to do that in
         * a `nextTick` or `setTimeout` callback or it won't do anything.
         */
        dispose?(value: V, key: K, reason: 'evict' | 'set' | 'delete'): void;

        /**
         * The same as `dispose`, but called after the entry is completely removed and
         * the cache is once again in a clean state. It is safe to add an item right
         * back into the cache at this point. However, note that it is very easy to
         * inadvertently create infinite recursion in this way.
         */
        disposeAfter?(value: V, key: K, reason: 'evict' | 'set' | 'delete'): void;

        /**
         * By default, if you set a `dispose()` method, then it'll be called whenever
         * a `set()` operation overwrites an existing key. If you set this option,
         * `dispose()` will only be called when a key falls out of the cache,
         * not when it is overwritten.
         */
        noDisposeOnSet?: boolean | undefined;

        /**
         * Max time to live for items before they are considered stale. Note that
         * stale items are NOT preemptively removed by default, and MAY live in the
         * cache, contributing to its LRU max, long after they have expired.
         *
         * Optional, but must be a positive integer in ms if specified.
         */
        ttl?: number | undefined;

        /**
         * Minimum amount of time in ms in which to check for staleness. Defaults
         * to `1`, which means that the current time is checked at most once per millisecond.
         * Set to `0` to check the current time every time staleness is tested. Note that
         * setting this to a higher value will improve performance somewhat while using ttl
         * tracking, albeit at the expense of keeping stale items around a bit longer than intended.
         */
        ttlResolution?: number | undefined;

        /**
         * Preemptively remove stale items from the cache. Note that this may significantly degrade
         * performance, especially if the cache is storing a large number of items. It is almost
         * always best to just leave the stale items in the cache, and let them fall out as new items are added.
         * Note that this means that allowStale is a bit pointless, as stale items will be deleted almost as soon
         * as they expire. Use with caution!
         */
        ttlAutopurge?: boolean | undefined;

        /**
         * By default, if you set a `ttl`, it'll only actually pull stale items
         * out of the cache when you `get(key)`. (That is, it's not pre-emptively
         * doing a `setTimeout` or anything.) If you set `allowStale:true`, it'll return
         * the stale value before deleting it. If you don't set this, then it'll
         * return `undefined` when you try to get a stale entry,
         * as if it had already been deleted.
         */
        allowStale?: boolean | undefined;

        /**
         * When using time-expiring entries with `ttl`, setting this to true will make
         * each item's age reset to `0` whenever it is retrieved from cache with `get()`,
         * causing it to not expire. (It can still fall out of cache based on recency of use,
         * of course.)
         */
        updateAgeOnGet?: boolean | undefined;
    }

    interface Entry<K, V> {
        k: K;
        v: V;
        e: number;
    }
}

export = LRUCache;
