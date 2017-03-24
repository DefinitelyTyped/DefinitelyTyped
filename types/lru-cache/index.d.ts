// Type definitions for lru-cache v4.0
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function LRU<T>(opts: LRU.Options<T>): LRU.Cache<T>;
declare function LRU<T>(max: number): LRU.Cache<T>;

declare namespace LRU {
    interface Options<T> {
        /**
         * The maximum size of the cache, checked by applying the length
         * function to all values in the cache. Not setting this is kind of silly,
         * since that's the whole purpose of this lib, but it defaults to `Infinity`.
         */
        max?: number;

        /**
         * Maximum age in ms. Items are not pro-actively pruned out as they age,
         * but if you try to get an item that is too old, it'll drop it and return
         * undefined instead of giving it to you.
         */
        maxAge?: number;

        /**
         * Function that is used to calculate the length of stored items.
         * If you're storing strings or buffers, then you probably want to do
         * something like `function(n, key){return n.length}`. The default
         * is `function(){return 1}`, which is fine if you want to store
         * `max` like-sized things. The item is passed as the first argument,
         * and the key is passed as the second argumnet.
         */
        length?: (value: T) => number;

        /**
         * Function that is called on items when they are dropped from the cache.
         * This can be handy if you want to close file descriptors or do other
         * cleanup tasks when items are no longer accessible. Called with `key, value`.
         * It's called before actually removing the item from the internal cache,
         * so if you want to immediately put it back in, you'll have to do that in
         * a `nextTick` or `setTimeout` callback or it won't do anything.
         */
        dispose?: (key: any, value: T) => void;

        /**
         * By default, if you set a `maxAge`, it'll only actually pull stale items
         * out of the cache when you `get(key)`. (That is, it's not pre-emptively
         * doing a `setTimeout` or anything.) If you set `stale:true`, it'll return
         * the stale value before deleting it. If you don't set this, then it'll
         * return `undefined` when you try to get a stale entry,
         * as if it had already been deleted.
         */
        stale?: boolean;
    }

    interface Cache<T> {
        /**
         * Will update the "recently used"-ness of the key. They do what you think.
         * `maxAge` is optional and overrides the cache `maxAge` option if provided.
         */
        set(key: any, value: T, maxAge?: number): void;

        /**
         * Will update the "recently used"-ness of the key. They do what you think.
         * `maxAge` is optional and overrides the cache `maxAge` option if provided.
         * 
         * If the key is not found, will return `undefined`.
         */
        get(key: any): T;

        /**
         * Returns the key value (or `undefined` if not found) without updating
         * the "recently used"-ness of the key.
         * 
         * (If you find yourself using this a lot, you might be using the wrong
         * sort of data structure, but there are some use cases where it's handy.)
         */
        peek(key: any): T;

        /**
         * Check if a key is in the cache, without updating the recent-ness
         * or deleting it for being stale.
         */
        has(key: any): boolean

        /**
         * Deletes a key out of the cache.
         */
        del(key: any): void;

        /**
         * Clear the cache entirely, throwing away all values.
         */
        reset(): void;

        /**
         * Manually iterates over the entire cache proactively pruning old entries.
         */
        prune(): void;

        /**
         * Just like `Array.prototype.forEach`. Iterates over all the keys in the cache,
         * in order of recent-ness. (Ie, more recently used items are iterated over first.)
         */
        forEach(iter: (value: T, key: any, cache: Cache<T>) => void, thisp?: any): void;

        /**
         * The same as `cache.forEach(...)` but items are iterated over in reverse order.
         * (ie, less recently used items are iterated over first.)
         */
        rforEach(iter: (value: T, key: any, cache: Cache<T>) => void, thisp?: any): void;

        /**
         * Return total quantity of objects currently in cache. Note,
         * that `stale` (see options) items are returned as part of this item count.
         */
        itemCount: number;

        /**
         * Return total length of objects in cache taking into account `length` options function.
         */
        length: number;

        /**
         * Return an array of the keys in the cache.
         */
        keys(): any[];

        /**
         * Return an array of the values in the cache.
         */
        values(): T[];

        /**
         * Return an array of the cache entries ready for serialization and usage with `destinationCache.load(arr)`.
         */
        dump(): T[];

        /**
         * Loads another cache entries array, obtained with `sourceCache.dump()`,
         * into the cache. The destination cache is reset before loading new entries
         * 
         * @param cacheEntries Obtained from `sourceCache.dump()`
         */
        load(cacheEntries: T[]): void;
    }
}

export = LRU;
