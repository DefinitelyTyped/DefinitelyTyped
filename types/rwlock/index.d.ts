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
        timeout?: number | undefined;
        timeoutCallback?(): void;
    }
}

declare class ReadWriteLock extends ReadWriteGeneric<ReadWriteLock.Callback> {
    constructor();
    async: ReadWriteGeneric<ReadWriteLock.AsyncCallback>;
}
export = ReadWriteLock;
