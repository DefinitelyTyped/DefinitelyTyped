declare module goog {
    function require(name: 'goog.structs.Queue'): typeof goog.structs.Queue;
}

declare module goog.structs {

    /**
     * Class for FIFO Queue data structure.
     *
     * @constructor
     * @template T
     */
    class Queue<T> {
        constructor();
        
        /**
         * Puts the specified element on this queue.
         * @param {T} element The element to be added to the queue.
         */
        enqueue(element: T): void;
        
        /**
         * Retrieves and removes the head of this queue.
         * @return {T} The element at the head of this queue. Returns undefined if the
         *     queue is empty.
         */
        dequeue(): T;
        
        /**
         * Retrieves but does not remove the head of this queue.
         * @return {T} The element at the head of this queue. Returns undefined if the
         *     queue is empty.
         */
        peek(): T;
        
        /**
         * Returns the number of elements in this queue.
         * @return {number} The number of elements in this queue.
         */
        getCount(): number;
        
        /**
         * Returns true if this queue contains no elements.
         * @return {boolean} true if this queue contains no elements.
         */
        isEmpty(): boolean;
        
        /**
         * Removes all elements from the queue.
         */
        clear(): void;
        
        /**
         * Returns true if the given value is in the queue.
         * @param {T} obj The value to look for.
         * @return {boolean} Whether the object is in the queue.
         */
        contains(obj: T): boolean;
        
        /**
         * Removes the first occurrence of a particular value from the queue.
         * @param {T} obj Object to remove.
         * @return {boolean} True if an element was removed.
         */
        remove(obj: T): boolean;
        
        /**
         * Returns all the values in the queue.
         * @return {!Array<T>} An array of the values in the queue.
         */
        getValues(): Array<T>;
    }
}
