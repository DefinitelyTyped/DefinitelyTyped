// Type definitions for async-lock 1.1
// Project: https://github.com/rain1017/async-lock, https://github.com/rogierschouten/async-lock
// Definitions by: Elisée MAURER <https://github.com/elisee>
//                 Alejandro <https://github.com/afharo>
//                 Anatoly <https://github.com/rhymmor>
//                 Humulus <https://github.com/humulus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type AsyncLockDoneCallback<T> = (err?: Error, ret?: T) => void;

interface AsyncLockOptions {
    timeout?: number;
    maxPending?: number;
    domainReentrant?: boolean;
    Promise?: any;
    skipQueue?: boolean;
}

declare class AsyncLock {
    constructor(options?: AsyncLockOptions);

    acquire<T>(key: string | string[],
               fn: (() => T | PromiseLike<T>) | ((done: AsyncLockDoneCallback<T>) => any),
               opts?: AsyncLockOptions): Promise<T>;
    acquire<T>(key: string | string[],
               fn: (done: AsyncLockDoneCallback<T>) => any,
               cb: AsyncLockDoneCallback<T>,
               opts?: AsyncLockOptions): void;

    isBusy(key?: string): boolean;
}

declare namespace AsyncLock { }

export = AsyncLock;
