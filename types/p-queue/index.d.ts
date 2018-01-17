// Type definitions for p-queue 2.3
// Project: https://github.com/sindresorhus/p-queue#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = PQueue;

declare class PQueue<O extends PQueue.QueueAddOptions = PQueue.DefaultAddOptions> {
    size: number;
    pending: number;
    isPaused: boolean;

    constructor(opts?: PQueue.Options<O>);

    add<T>(fn: PQueue.Task<T>, opts?: O): Promise<T>;

    addAll<TAll>(fns: Array<PQueue.Task<TAll>>, opts?: O): Promise<TAll[]>;

    pause(): void;

    start(): void;

    onEmpty(): Promise<undefined>;

    onIdle(): Promise<undefined>;

    clear(): void;
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
