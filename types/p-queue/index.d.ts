// Type definitions for p-queue 3.1
// Project: https://github.com/sindresorhus/p-queue#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { EventEmitter } from 'events';

export = PQueue;

/**
 * Promise queue with concurrency control.
 */
declare class PQueue<
    TEnqueueOptions extends PQueue.QueueAddOptions = PQueue.DefaultAddOptions
> extends EventEmitter {
    /**
     * Size of the queue.
     */
    readonly size: number;

    /**
     * Number of pending promises.
     */
    readonly pending: number;

    /**
     * Whether the queue is currently paused.
     */
    readonly isPaused: boolean;

    constructor(opts?: PQueue.Options<TEnqueueOptions>);

    /**
     * Adds a sync or async task to the queue. Always returns a promise.
     * @param fn Promise-returning/async function.
     * @param opts
     */
    add<T>(fn: PQueue.Task<T>, opts?: TEnqueueOptions): Promise<T>;

    /**
     * Same as `.add()`, but accepts an array of sync or async functions
     * and returns a promise that resolves when all functions are resolved.
     * @param fn Array of Promise-returning/async functions.
     */
    addAll<TAll>(fns: Array<PQueue.Task<TAll>>, opts?: TEnqueueOptions): Promise<TAll[]>;

    /**
     * Returns a promise that settles when the queue becomes empty.
     *
     * Can be called multiple times. Useful if you for example add
     * additional items at a later time.
     */
    onEmpty(): Promise<void>;

    /**
     * Returns a promise that settles when the queue becomes empty, and all
     * promises have completed; `queue.size === 0 && queue.pending === 0`.
     *
     * The difference with `.onEmpty` is that `.onIdle` guarantees that all work
     * from the queue has finished. `.onEmpty` merely signals that the queue is
     * empty, but it could mean that some promises haven't completed yet.
     */
    onIdle(): Promise<void>;

    /**
     * Start (or resume) executing enqueued tasks within concurrency limit.
     * No need to call this if queue is not paused
     * (via `options.autoStart = false` or by `.pause()` method.)
     */
    start(): void;

    /**
     * Clear the queue.
     */
    clear(): void;

    /**
     * Put queue execution on hold.
     */
    pause(): void;

    addListener(event: 'active', listener: () => void): this;
    on(event: 'active', listener: () => void): this;
    once(event: 'active', listener: () => void): this;
    prependListener(event: 'active', listener: () => void): this;
    prependOnceListener(event: 'active', listener: () => void): this;
    removeListener(event: 'active', listener: () => void): this;
    off(event: 'active', listener: () => void): this;
    removeAllListeners(event?: 'active'): this;
    listeners(event: 'active'): Array<() => void>;
    rawListeners(event: 'active'): Array<() => void>;
    emit(event: 'active'): boolean;
    eventNames(): Array<'active'>;
    listenerCount(type: 'active'): number;
}

declare namespace PQueue {
    interface QueueAddOptions {
        [key: string]: any;
    }

    interface QueueClassConstructor<TEnqueueOptions extends QueueAddOptions> {
        new (): QueueClass<TEnqueueOptions>;
    }

    interface QueueClass<TEnqueueOptions extends QueueAddOptions> {
        size: number;

        enqueue(run: () => void, options?: TEnqueueOptions): void;

        dequeue(): (() => void) | undefined;
    }

    interface Options<TEnqueueOptions extends QueueAddOptions> {
        /**
         * Concurrency limit. Minimum: `1`.
         * @default Infinity
         */
        concurrency?: number;
        /**
         * Whether queue tasks within concurrency limit, are auto-executed as soon as they're added.
         * @default true
         */
        autoStart?: boolean;
        /**
         * Class with a `enqueue` and `dequeue` method, and a `size` getter. See the
         * [Custom QueueClass](https://github.com/sindresorhus/p-queue#custom-queueclass) section.
         */
        queueClass?: QueueClassConstructor<TEnqueueOptions>;
        /**
         * The max number of runs in the given interval of time. Minimum: `1`.
         * @default Infinity
         */
        intervalCap?: number;
        /**
         * The length of time in milliseconds before the interval count resets. Must be finite. Minimum: `0`.
         * @default 0
         */
        interval?: number;
        /**
         * Whether the task must finish in the given interval or will be carried over into the next interval count.
         * @default false
         */
        carryoverConcurrencyCount?: boolean;
    }

    interface DefaultAddOptions {
        /**
         * Priority of operation. Operations with greater priority will be scheduled first.
         * @default 0
         */
        priority?: number;
    }

    type Task<T> = (() => PromiseLike<T>) | (() => T);
}
