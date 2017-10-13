// Type definitions for RWLock 5.0
// Project: https://github.com/71104/rwlock
// Definitions by: Federico Caselli <https://github.com/CaselIT/typings-rwlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class ReadWriteGeneric<T> {
  readLock(callback: T, options?: ReadWriteLock.Options): void;
  readLock(key: string, callback: T, options?: ReadWriteLock.Options): void;
  writeLock(callback: T, options?: ReadWriteLock.Options): void;
  writeLock(key: string, callback: T, options?: ReadWriteLock.Options): void;
}
declare namespace ReadWriteLock {
  type Release = () => void;

  type Callback = (release: Release) => void;

  type AsyncCallback = (err: Error, release: Release) => void;

  interface Options {
    scope?: any;
    timeout?: number;
    timeoutCallback?(): void;
  }
}

declare class ReadWriteLock extends ReadWriteGeneric<ReadWriteLock.Callback> {
  constructor();
  async: ReadWriteGeneric<ReadWriteLock.AsyncCallback>;
}
export = ReadWriteLock;
