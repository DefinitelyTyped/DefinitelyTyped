declare namespace adone.collection {
    /**
     * Represents an asynchronous queue, each pop is a promise
     * that is resolved with an existing element or an element that will be pushed in the future
     */
    class AsyncQueue<T = any> extends Queue<T, Promise<T>> {
        /**
         * Returns a promise that will be resolved with an existing element or an element that will be pushed in the future
         */
        pop(): Promise<T>;
    }
}
