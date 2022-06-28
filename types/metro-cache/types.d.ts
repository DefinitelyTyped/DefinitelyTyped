export interface CacheStore<T> {
    get(key: Buffer): T | undefined | Promise<T> | Promise<undefined>;
    set(key: Buffer, value: T): void | Promise<void>;
    clear(): void | Promise<void>;
}
