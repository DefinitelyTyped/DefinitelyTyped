/// <reference types="node"/>

interface ICacheStore {
    [name: string]: {};
}

interface IOptions {
    /**
     * Uses md5 instead of storing the whole file contents.
     * @default false
     */
    optimizeMemory?: boolean | undefined;
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
