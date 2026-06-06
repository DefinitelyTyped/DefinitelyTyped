declare namespace AsyncLock {
    type AsyncLockDoneCallback<T> = (err?: Error | null, ret?: T) => void;

    interface AsyncLockOptions {
        /**
         * Max amount of time an item can remain in the queue before acquiring the lock.
         *
         * @default 0 (Never)
         */
        timeout?: number | undefined;
        /**
         * Max number of tasks allowed in the queue at a time.
         *
         * @default 1000
         */
        maxPending?: number | undefined;
        /**
         * Max amount of time allowed between entering the queue and completing execution.
         *
         * @default 0 (Never)
         */
        maxOccupationTime?: number | undefined;
        /**
         * Max amount of time allowed between acquiring the lock and completing execution.
         *
         * @default 0 (Never)
         */
        maxExecutionTime?: number | undefined;
        /**
         * Make a lock reentrant in the same domain.
         *
         * @default false
         *
         * @example
         * import AsyncLock = require('async-lock');
         * import * as domain from 'domain';
         *
         * const lock = new AsyncLock({ domainReentrant: true });
         * const d = domain.create();
         * d.run(() => {
         *     lock.acquire('key', () => {
         *         // Enter lock
         *         return lock.acquire('key', () => {
         *             // Enter same lock twice
         *         });
         *     });
         * });
         */
        domainReentrant?: boolean | undefined;
        /**
         * Allows to enqueue a task in the front of the queue, skipping all enqueued tasks.
         *
         * @default false
         *
         * @example
         * import AsyncLock = require('async-lock');
         *
         * const lock = new AsyncLock();
         * // Add a task to the front of the queue waiting for a given lock
         * lock.acquire(key, fn1, cb); // runs immediately
         * lock.acquire(key, fn2, cb); // added to queue
         * lock.acquire(key, priorityFn, cb, { skipQueue: true }); // jumps queue and runs before fn2
         */
        skipQueue?: boolean | undefined;
        /**
         * Use your own promise library instead of the global `Promise` variable.
         *
         * @example
         * import AsyncLock = require('async-lock');
         * import Bluebird = require('bluebird');
         * import Q = require('q');
         *
         * new AsyncLock({ Promise: Bluebird }); // Bluebird
         * new AsyncLock({ Promise: Q });        // Q
         */
        Promise?: unknown;
    }
}

declare class AsyncLock {
    static readonly DEFAULT_TIMEOUT: 0;
    static readonly DEFAULT_MAX_OCCUPATION_TIME: 0;
    static readonly DEFAULT_MAX_EXECUTION_TIME: 0;
    static readonly DEFAULT_MAX_PENDING: 1000;

    constructor(options?: AsyncLock.AsyncLockOptions);

    /**
     * Lock on asynchronous code.
     *
     * @param key resource key or keys to lock
     * @param fn function to execute
     * @param opts options
     *
     * @example
     * import AsyncLock = require('async-lock');
     * const lock = new AsyncLock();
     *
     * lock.acquire(
     *     key,
     *     () => {
     *         // return value or promise
     *     },
     *     opts
     * ).then(() => {
     *     // lock released
     * });
     */
    acquire<T>(
        key: string | string[],
        fn: (() => T | PromiseLike<T>) | ((done: AsyncLock.AsyncLockDoneCallback<T>) => any),
        opts?: AsyncLock.AsyncLockOptions,
    ): Promise<T>;
    /**
     * Lock on asynchronous code.
     *
     * @param key resource key or keys to lock
     * @param fn function to execute
     * @param cb callback function
     * @param opts options
     *
     * @example
     * import AsyncLock = require('async-lock');
     * const lock = new AsyncLock();
     *
     * lock.acquire(
     *     key,
     *     (done) => {
     *         // async work
     *         done(err, ret);
     *     },
     *     (err, ret) => {
     *         // lock released
     *     },
     *     opts
     * );
     */
    acquire<T>(
        key: string | string[],
        fn: (done: AsyncLock.AsyncLockDoneCallback<T>) => any,
        cb: AsyncLock.AsyncLockDoneCallback<T>,
        opts?: AsyncLock.AsyncLockOptions,
    ): void;

    /**
     * Whether there is any running or pending async function.
     */
    isBusy(key?: string): boolean;
}

export = AsyncLock;
