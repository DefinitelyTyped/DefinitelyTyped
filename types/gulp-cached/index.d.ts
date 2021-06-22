// Type definitions for gulp-cached
// Project: https://github.com/wearefractal/gulp-cached
// Definitions by: Thomas Corbière <https://github.com/tomc974>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface ICacheStore {
    [name: string]: {};
}

interface IOptions {
    /**
     * Uses md5 instead of storing the whole file contents.
     * @default false
     */
    optimizeMemory?: boolean;
}

interface IGulpCached {
    /**
     * Creates a new cache hash or uses an existing one.
     */
    (name: string, options?: IOptions): NodeJS.ReadWriteStream;

    /**
     * Cache store.
     */
    caches: ICacheStore;
}

declare const cached: IGulpCached;
export = cached;
