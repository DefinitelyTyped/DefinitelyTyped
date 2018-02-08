declare namespace adone.collection {
    /**
     * Represents a stack
     */
    class Stack<T = any> {
        /**
         * Whether the stack is empty
         */
        readonly empty: boolean;

        /**
         * The top element of the stack
         */
        readonly top: T;

        /**
         * Inserts a new element
         */
        push(x: T): this;

        /**
         * Removes the top element
         */
        pop(): T | undefined;

        /**
         * Returns an iterator over the values
         */
        [Symbol.iterator](): IterableIterator<T>;

        /**
         * Creates a stack and pushed all the values from the given iterable object
         */
        static from<T>(iterable: Iterable<T>): Stack<T>;
    }
}
