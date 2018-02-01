// Type definitions for async-lock
// Project: https://github.com/rain1017/async-lock
// Definitions by: Elisée MAURER <https://github.com/elisee>, Alejandro <https://github.com/afharo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1


interface AsyncLockDoneCallback<T> {
    (err?: Error, ret?: T): void;
}

interface AsyncLockOptions {
    timeout?: number;
    maxPending?: number;
    domainReentrant?: boolean;
    Promise?: any;
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
