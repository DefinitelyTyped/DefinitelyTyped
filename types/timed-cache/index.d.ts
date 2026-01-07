export interface CacheOptions {
    /**
     * Specify what default value you would like the TTL to have when creating the storage
     * @default 60 * 1000
     */
    defaultTtl?: number | undefined;
}

export interface PutOptions<T = any> {
    /**
     * You can customize the time-to-live value of a key/value pair at insertion time
     */
    ttl?: number | undefined;

    /**
     * Define a callback for each inserted key/value pair to be informed when it is actually evicted from the storage
     */
    callback?: ((key: Key, value: T) => void) | undefined;
}

export type Key = string | object;

export default class Cache<T> {
    constructor(options?: CacheOptions);
    /**
     * Clears the internal cache.
     */
    clear(): void;

    /**
     * Returns a cached value associated with the given key if it exists,
     * returns an undefined value otherwise.
     */
    get(key: Key): T | undefined;

    /**
     * Puts a key/value pair into the cache storage.
     */
    put(key: Key, value: T, options?: PutOptions<T>): void;

    /**
     * Clears the cache entry associated with the given `key`.
     */
    remove(key: Key): void;

    /**
     * Returns the size of the cache object in
     * terms of referenced elements.
     */
    size(): number;
}
