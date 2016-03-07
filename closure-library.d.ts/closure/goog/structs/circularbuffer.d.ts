declare module goog {
    function require(name: 'goog.structs.CircularBuffer'): typeof goog.structs.CircularBuffer;
}

declare module goog.structs {

    /**
     * Class for CircularBuffer.
     * @param {number=} opt_maxSize The maximum size of the buffer.
     * @constructor
     * @template T
     */
    class CircularBuffer<T> {
        constructor(opt_maxSize?: number);
        
        /**
         * Adds an item to the buffer. May remove the oldest item if the buffer is at
         * max size.
         * @param {T} item The item to add.
         * @return {T|undefined} The removed old item, if the buffer is at max size.
         *     Return undefined, otherwise.
         */
        add(item: T): T|void;
        
        /**
         * Returns the item at the specified index.
         * @param {number} index The index of the item. The index of an item can change
         *     after calls to {@code add()} if the buffer is at maximum size.
         * @return {T} The item at the specified index.
         */
        get(index: number): T;
        
        /**
         * Sets the item at the specified index.
         * @param {number} index The index of the item. The index of an item can change
         *     after calls to {@code add()} if the buffer is at maximum size.
         * @param {T} item The item to add.
         */
        set(index: number, item: T): void;
        
        /**
         * Returns the current number of items in the buffer.
         * @return {number} The current number of items in the buffer.
         */
        getCount(): number;
        
        /**
         * @return {boolean} Whether the buffer is empty.
         */
        isEmpty(): boolean;
        
        /**
         * Empties the current buffer.
         */
        clear(): void;
        
        /** @return {!Array<T>} The values in the buffer. */
        getValues(): Array<T>;
        
        /**
         * Returns the newest values in the buffer up to {@code count}.
         * @param {number} maxCount The maximum number of values to get. Should be a
         *     positive number.
         * @return {!Array<T>} The newest values in the buffer up to {@code count}.
         */
        getNewestValues(maxCount: number): Array<T>;
        
        /** @return {!Array<number>} The indexes in the buffer. */
        getKeys(): Array<number>;
        
        /**
         * Whether the buffer contains the key/index.
         * @param {number} key The key/index to check for.
         * @return {boolean} Whether the buffer contains the key/index.
         */
        containsKey(key: number): boolean;
        
        /**
         * Whether the buffer contains the given value.
         * @param {T} value The value to check for.
         * @return {boolean} Whether the buffer contains the given value.
         */
        containsValue(value: T): boolean;
        
        /**
         * Returns the last item inserted into the buffer.
         * @return {T|null} The last item inserted into the buffer,
         *     or null if the buffer is empty.
         */
        getLast(): T|void;
    }
}
