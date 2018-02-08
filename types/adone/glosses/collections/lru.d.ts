declare namespace adone.collection {
    namespace I.LRU {
        type LengthCalculator<K, V> = (value: V, key: K) => number;
        interface ConstructorOptions<K, V> {
            /**
             * The maximum size of the cache, checked by applying the length function to all values in the cache.
             * Default is Infinity
             */
            max?: number;

            /**
             * Maximum age in ms. Items are not pro-actively pruned out as they age,
             * but if you try to get an item that is too old,
             * it'll drop it and return undefined instead of giving it to you
             */
            maxAge?: number;

            /**
             * Function that is used to calculate the length of stored items
             */
            length?: LengthCalculator<K, V>;

            /**
             * Function that is called on items when they are dropped from the cache
             */
            dispose?(key: K, value: V): void;

            /**
             * Whether to return the stale value before deleting it
             */
            stale?: boolean;

            /**
             * Dispose will only be called when a key falls out of the cache, not when it is overwritten
             */
            noDisposeOnSet?: boolean;
        }

        interface SerializedEntry<K, V> {
            /**
             * key
             */
            key: K;

            /**
             * value
             */
            value: V;

            /**
             * when it becomes expired
             */
            e: number;
        }

        interface Entry<K, V> {
            /**
             * key
             */
            key: K;

            /**
             * value
             */
            value: V;

            /**
             * entry length
             */
            length: number;

            /**
             * Timestamp when the entry was created
             */
            now: number;

            /**
             * Maximum live time
             */
            maxAge: number;
        }
    }

    /**
     * Represent an LRU cache
     */
    class LRU<K = any, V = any> {
        /**
         * Creates an LRU cache of the given size
         */
        constructor(max: number);

        /**
         * Creates an LRU cache with the given options
         */
        constructor(options?: I.LRU.ConstructorOptions<K, V>);

        /**
         * The length of the cache, setter resizes the cache
         */
        max: number;

        /**
         * stale setting
         */
        allowStale: boolean;

        /**
         * maxAge setting
         */
        maxAge: number;

        /**
         * length setting
         */
        lengthCalculator: I.LRU.LengthCalculator<K, V>;

        /**
         * Total length of objects in cache taking into account length options function
         */
        readonly length: number;

        /**
         * Total quantity of objects currently in cache.
         * Note, that stale items are returned as part of this item count.
         */
        readonly itemCount: number;

        /**
         * Iterates over all the keys in the cache, in reverse recent-ness order. (ie, less recently used items are iterated over first.)
         */
        rforEach<T = any>(fn: (this: T, value: V, key: K, cache: LRU<K, V>) => void, thisp?: T): void;

        /**
         * Iterates over all the keys in the cache, in order of recent-ness
         */
        forEach<T = any>(fn: (this: T, value: V, key: K, cache: LRU<K, V>) => void, thisp?: T): void;

        /**
         * Returns an array of the keys in the cache
         */
        keys(): K[];

        /**
         * Returns an array of the values in the cache
         */
        values(): V[];

        /**
         * Clears the cache entirely, throwing away all values
         */
        reset(): void;

        /**
         * Return an array of the cache entries ready for serialization and usage with 'destinationCache.load(arr)`
         */
        dump(): Array<I.LRU.SerializedEntry<K, V>>;

        /**
         * Returns an internal lru list of entries
         */
        dumpLru(): LinkedList<I.LRU.Entry<K, V>>;

        /**
         * @param opts std.util.inspect options
         */
        inspect(opts?: object): string;

        /**
         * Sets a new value for the given key. Updates the "recently used"-ness of the key
         *
         * @param maxAge maxAge option specific for this key
         * @returns Whether the key was set
         */
        set(key: K, value: V, maxAge?: number): boolean;

        /**
         * Check if a key is in the cache, without updating the recent-ness or deleting it for being stale
         */
        has(key: K): boolean;

        /**
         * Gets the value of the given key. Updates the "recently used"-ness of the key
         */
        get(key: K): V | undefined;

        /**
         * Returns the key value without updating the "recently used"-ness of the key
         */
        peek(key: K): V | undefined;

        /**
         * Deletes the less recently used element
         */
        pop(): I.LRU.Entry<K, V>;

        /**
         * Deletes a key out of the cache
         */
        del(key: K): void;

        /**
         * Loads another cache entries array, obtained with sourceCache.dump(), into the cache.
         * The destination cache is reset before loading new entries
         */
        load(arr: Array<I.LRU.SerializedEntry<K, V>>): void;

        /**
         * Manually iterates over the entire cache proactively pruning old entries
         */
        prune(): void;
    }
}
