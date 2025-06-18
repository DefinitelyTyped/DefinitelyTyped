/**
 * Recursively moves from to to and resolves its promise when finished. If to already exists then the promise will be rejected with an EEXIST error.
 */
declare function move<T extends PromiseLike<void> = Promise<void>>(from: string, to: string, opts?: move.Options<T>): T;

declare namespace move {
    interface Options<T extends PromiseLike<void> = Promise<void>> {
        /**
         * (Default: 1) The maximum number of concurrent copies to do at once.
         */
        maxConcurrency?: number | undefined;
        /**
         * (Default: process.platform === 'win32') If true enables Windows symlink semantics.
         * This requires an extra stat to determine if the destination of a symlink is a file or directory.
         * If symlinking a directory fails then we'll try making a junction instead.
         */
        isWindows?: boolean | undefined;
        /**
         * (Default: global.Promise) The promise implementation to use, defaults to Node's.
         */
        Promise?: (new(...args: any[]) => T | undefined) | undefined;
        /**
         * (Default: require('fs')) The filesystem module to use. Can be used to use graceful-fs or to inject a mock.
         */
        fs?: any;
        /**
         * (Default: require('fs-write-stream-atomic')) The implementation of writeStreamAtomic to use. Used to inject a mock.
         */
        writeStreamAtomic?: any;
        /**
         * (Default: process.getuid) A function that returns the current UID. Used to inject a mock.
         */
        getuid?: any;
    }
}

export = move;
