declare namespace adone.collection {
    namespace I.PriorityQueue {
        interface ConstructorOptions<T> {
            /**
             * Function that compares objects.
             *
             * Must return a positive value if a > b, a negative if a < b, and zero for equal objects
             */
            compare?(a: T, b: T): number;

            /**
             * Function that evaluates the priority value by the given objects,
             * if the returned value > 0, then the first argument has higher priority,
             * = 0 same priority, < 0 lower priority.
             * By default the top element is an element that has the highest priority,
             * the default priority function is equal to the compare function
             */
            priority?(a: T, b: T): number;
        }
    }

    /**
     * Represents a priority queue
     */
    class PriorityQueue<T = any> {
        /**
         * Whether the queue is empty
         */
        readonly empty: boolean;

        /**
         * The length of the queue
         */
        readonly length: number;

        constructor(options?: I.PriorityQueue.ConstructorOptions<T>);

        /**
         * Clones the queue
         */
        clone(): PriorityQueue<T>;

        /**
         * Inserts a new element
         */
        push(x: T): this;

        /**
         * Removes the top element (that has the highest priority)
         */
        pop(): T | undefined;

        /**
         * Deletes the given element from the queue
         */
        delete(x: T): this;

        /**
         * Replaces the top element (pop + push)
         */
        replace(x: T): T;

        /**
         * Faster push + pop
         */
        pushpop(x: T): T;

        /**
         * Converts the queue to an array, it works with a clone of the queue, so the original queue is untouched
         */
        toArray(): T[];

        /**
         * Creates a queue object from the given iterable
         */
        static from<T>(iterable: Iterable<T>, options?: I.PriorityQueue.ConstructorOptions<T>): PriorityQueue<T>;
    }
}
