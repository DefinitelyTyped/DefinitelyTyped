declare namespace adone.collection {
    /**
     * Represents a queue
     */
    class Queue<S = any, T = S> {
        /**
         * Whether the queue is full
         */
        readonly full: boolean;

        /**
         * The length of the queue
         */
        readonly length: number;

        /**
         * Whether the queue is empty
         */
        readonly empty: boolean;

        /**
         * Inserts a new element at the end
         */
        push(x: S): this;

        /**
         * Removes and returns an element from the beginning
         */
        pop(): T | undefined;

        static from<T>(iterable: Iterable<T>, length?: number): Queue<T>;
    }
}
