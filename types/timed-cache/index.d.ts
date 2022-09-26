// Type definitions for timed-cache 2.0
// Project: https://github.com/HQarroum/timed-cache#readme
// Definitions by: Dillon Sellars <https://github.com/dsellarsnr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Cache;

export = Cache;

declare namespace TimedCache {
    interface CacheOptions {
        defaultTtl: number;
    }

    interface PutOptions {
        ttl: number;
    }
}

declare class Cache<T> {
    constructor(options?: TimedCache.CacheOptions);

    clear(): void;

    get(key: string | object): T | undefined;

    put(key: string, value: T, options?: TimedCache.PutOptions): void;

    remove(key: string): void;

    size(): number;
}
