// Type definitions for promise-queue 2.2
// Project: https://github.com/azproduction/promise-queue
// Definitions by: Lachlan Stuart <https://github.com/LachlanStuart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PromiseQueue;

declare class PromiseQueue {
    /**
     *
     * @param maxPendingPromises [Infinity] Number of promises that can run at once.
     * @param maxQueuedPromises [Infinity] Number of promises generators that can be in the queue at once.
     *                                     `add()` will return a rejected promise if this limit would be exceeded.
     * @param options [{}] See QueueOptions
     */
    constructor(maxPendingPromises?: number, maxQueuedPromises?: number, options?: PromiseQueue.QueueOptions);

    /**
     * Enqueue a promise generator. When the number of running promises is less than `maxPendingPromises`,
     * this function will be called and the returned promise will be held as a running promise until it
     * rejects or resolves.
     *
     * @throws If the global `Promise` is undefined and `Queue.configure` hasn't been called.
     * @param promiseGenerator A function that returns a promise when called.
     * @returns A promise that forwards the resolution/rejection of the promise returned by `promiseGenerator`,
     *          or immediately rejects if `maxQueuedPromise` is exceeded.
     */
    add<T>(promiseGenerator: () => Promise<T>): Promise<T>;

    /**
     * Returns the number of promiseGenerators waiting in queue.
     */
    getPendingLength(): number;

    /**
     * Returns the number of in-flight promises
     */
    getQueueLength(): number;

    /**
     * Set which promise constructor to use for the value returned by PromiseQueue#add.
     * If this isn't called, the global `Promise` constructor is used.
     * @param GlobalPromise A constructor for Promises
     */
    static configure(GlobalPromise: PromiseConstructor): void;
}

declare namespace PromiseQueue {
    interface QueueOptions {
        /**
         * Callback that is called when the queue is empty and all pending promises have resolved
         */
        onEmpty(): void;
    }
}
