// Type definitions for timed-cache 2.0
// Project: https://github.com/HQarroum/timed-cache#readme
// Definitions by: Dillon Sellars <https://github.com/dsellarsnr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CacheOptions {
    defaultTtl: number;
}

export interface PutOptions {
    ttl: number;
}

export default class Cache<T> {
    constructor(options?: CacheOptions);

    clear(): void;

    get(key: string | object): T | undefined;

    put(key: string, value: T, options?: PutOptions): void;

    remove(key: string): void;

    size(): number;
}
