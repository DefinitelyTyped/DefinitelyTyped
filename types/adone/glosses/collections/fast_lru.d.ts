declare namespace adone.collection {
    /**
     * Represents a faster LRU cache but with less functionality
     */
    class FastLRU<K = any, V = any> {
        /**
         * @param size Cache size, unlimited by default
         */
        constructor(size?: number, options?: {
            /**
             * Function that is called when a value is deleted
             */
            dispose?(key: K, value: V): void
        });

        /**
         * The actual size of the cache
         */
        readonly size: number;

        /**
         * Gets the value by the given key
         */
        get(key: K): V | undefined;

        /**
         * Sets a new value for the given key
         */
        set(key: K, value: V): void;

        /**
         * Deletes the given key from the cache
         */
        delete(key: K): boolean;

        /**
         * Checks whether the cache has an element with the given key
         */
        has(key: K): boolean;

        /**
         * Returns the keys iterator
         */
        keys(): IterableIterator<K>;

        /**
         * Returns the values iterator
         */
        values(): IterableIterator<V>;

        /**
         * Returns the entries iterator
         */
        entries(): IterableIterator<[K, V]>;

        /**
         * Clears the cache
         */
        clear(): void;
    }
}
