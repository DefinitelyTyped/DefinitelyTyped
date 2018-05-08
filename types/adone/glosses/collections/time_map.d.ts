declare namespace adone.collection {
    /**
     * Represents a Map that keeps keys only for a specified interval of time
     */
    class TimeMap<K = any, V = any> extends Map<K, V> {
        /**
         * @param timeout maximum age of the keys, 1000 by default
         * @param callback callback that is called with each key when the timeout is passed
         */
        constructor(timeout?: number, callback?: (key: K) => void);

        /**
         * Gets the timeout
         */
        getTimeout(): number;

        /**
         * Sets the timeout
         */
        setTimeout(ms: number): void;

        /**
         * Iterates over the map and calls the callback for each element
         */
        forEach<T = any>(callback: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): this;

        /**
         * Deletes the given key
         */
        delete(key: K): boolean;
    }
}
