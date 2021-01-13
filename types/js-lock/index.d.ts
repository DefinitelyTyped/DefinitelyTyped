// Type definitions for js-lock 0.1
// Project: https://github.com/jurca/js-lock#readme
// Definitions by: kemphack <https://github.com/kemphack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export class TimeoutError extends Error {
  constructor(message: string);
}

export class Lock {
  constructor(lockName?: string);
  get isLocked(): boolean;
  lock<R>(task: () => R|Promise<R>, timeout: number): Promise<R>;
  static all<R>(locks: Lock[], task: () => R|Promise<R>, timeout: number): void;
}
