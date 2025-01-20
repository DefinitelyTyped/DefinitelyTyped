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
