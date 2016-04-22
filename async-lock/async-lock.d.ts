// Type definitions for async-lock
// Project: https://github.com/rain1017/async-lock
// Definitions by: Elisée MAURER <https://github.com/elisee/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface AsyncLockDoneCallback {
    (err?: Error, ret?: any): void;
}

interface AsyncLockOptions {
    timeout?: number;
    maxPending?: number;
    domainReentrant?: boolean;
    Promise?: any;
}

declare class AsyncLock {
    constructor(options?: AsyncLockOptions);

    acquire(key: string | string[], fn: (done: AsyncLockDoneCallback) => any, cb: AsyncLockDoneCallback, opts?: AsyncLockOptions): void;
    acquire(key: string | string[], fn: (done: AsyncLockDoneCallback) => any, opts?: AsyncLockOptions): PromiseLike<any>;

    isBusy(): boolean;
}

declare namespace AsyncLock { }

export = AsyncLock;
