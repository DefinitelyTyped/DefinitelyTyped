// Type definitions for p-queue 2.3
// Project: https://github.com/sindresorhus/p-queue#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = PQueue;

declare class PQueue<O extends PQueue.QueueAddOptions = PQueue.DefaultAddOptions> {
    /**
     * Size of the queue.
     */
    size: number;

    /**
     * Number of pending promises.
     */
    pending: number;

    /**
     * Whether the queue is currently paused.
     */
    isPaused: boolean;

    constructor(opts?: PQueue.Options<O>);

    /**
     * Returns the promise returned by calling fn.
     * @param fn Promise-returning/async function.
     */
    add<T>(fn: PQueue.Task<T>, opts?: O): Promise<T>;

    /**
     * Same as .add(), but accepts an array of async functions and
     * returns a promise that resolves when all async functions are resolved.
     * @param fn Array of Promise-returning/async functions.
     */
    addAll<TAll>(fns: Array<PQueue.Task<TAll>>, opts?: O): Promise<TAll[]>;

    /**
     * Returns a promise that settles when the queue becomes empty.
     * Can be called multiple times. Useful if you for example add
     * additional items at a later time.
     */
    onEmpty(): Promise<void>;

    /**
     * Returns a promise that settles when the queue becomes empty, and all
     * promises have completed; queue.size === 0 && queue.pending === 0.
     * The difference with .onEmpty is that .onIdle guarantees that all work
     * from the queue has finished. .onEmpty merely signals that the queue is
     * empty, but it could mean that some promises haven't completed yet.
     */
    onIdle(): Promise<void>;

    /**
     * Start (or resume) executing enqueued tasks within concurrency limit.
     * No need to call this if queue is not paused (via options.autoStart = false
     * or by .pause() method.)
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
}

declare namespace PQueue {
    interface QueueAddOptions {
        [key: string]: any;
    }

    interface QueueClassConstructor<O extends QueueAddOptions> {
        new(): QueueClass<O>;
    }

    interface QueueClass<O extends QueueAddOptions> {
        size: number;

        enqueue(run: () => void, options?: O): void;

        dequeue(): (() => void) | undefined;
    }

    interface Options<O extends QueueAddOptions> {
        concurrency?: number;
        autoStart?: boolean;
        queueClass?: QueueClassConstructor<O>;
    }

    interface DefaultAddOptions {
        priority?: number;
    }

    type Task<T> = () => Promise<T>;
}
