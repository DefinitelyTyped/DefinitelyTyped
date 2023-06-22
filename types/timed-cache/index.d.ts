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

export type Key = string | object;

export default class Cache<T> {
    constructor(options?: CacheOptions);

    clear(): void;

    get(key: Key): T | undefined;

    put(key: Key, value: T, options?: PutOptions): void;

    remove(key: Key): void;

    size(): number;
}
