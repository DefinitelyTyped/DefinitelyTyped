import Memcached = require("memcached");

export = cached;

interface CacheOptions {
    defaults?: CacheDefaults;
    backend: BackendOptions;
}

interface NewCacheOptions extends CacheOptions {
    name?: string;
}

interface CacheDefaults {
    /**
     * expire is the time in seconds after which a value should be deleted from the cache (or whatever expiring natively means for the backend).
     * Usually you'd want this to be 0 (never expire).
     */
    expire?: number;
    /**
     * freshFor is the time in seconds after which a value should be replaced.
     * Replacing the value is done in the background and while the new value is generated (e.g. data is fetched from some service) the stale value is returned.
     * Think of freshFor as a smarter expire.
     */
    freshFor?: number;
    /**
     * timeout is the maximum time in milliseconds to wait for cache operations to complete.
     * Configuring a timeout ensures that all get, set, and unset operations fail fast.
     * Otherwise there will be situations where one of the cache hosts goes down and reads hang for minutes while the memcached client retries to establish a connection.
     * It's highly recommended to set a timeout. If timeout is left undefined, no timeout will be set and the operations will only fail once the underlying client, e.g. memcached, gave up.
     */
    timeout?: number;
}

interface BackendOptions {
    type: "memcached" | "memory" | "noop";
    client?: Memcached;
    hosts?: string;
    poolSize?: number;
}

/**
 * Function creates new cache store or returns existing - if same "name" is provided.
 * @param name - Name of the cache - should be unique per-cache. If you create two instances with the same name, you'll get the same instance.
 * @param options - CacheOptions
 */
declare function cached<T>(name: string, options: CacheOptions): Cache<T>;

declare namespace cached {
    /**
     * This allows you to circumvent the global named caches. The options are the same as above, just name is also part of the options object when using this function.
     * @param options
     */
    function createCache<T>(options: NewCacheOptions): Cache<T>;

    /**
     * Drop the given named cache.
     * @param name - name of the cache store to drop
     */
    function dropNamedCache(name: string): typeof cached;

    /**
     * Drop all named caches.
     */
    function dropNamedCaches(): typeof cached;

    function knownCaches(): string[];

    /**
     * Convert a node-style function that takes a callback as its first parameter into a parameterless function that generates a promise.
     * In other words: this is what you'd want to wrap your node-style functions in when using them as value arguments to set or getOrElse.
     */
    function deferred<T>(func: (callback: (err: any, result?: T) => void) => void): Promise<T>;
}

declare class Cache<T> {
    constructor(options: {
        name: string;
        defaults: CacheDefaults;
        backend: BackendOptions;
    });

    setDefaults(defaults: CacheDefaults): {
        freshFor: number;
        expire: number;
        timeout?: number;
    };

    /**
     * Cache store operation.
     * @param key - has to be a string
     * @param value - value can be any of the following:
     * a. Anything that can be converted to JSON
     * b. A Promise of (a)
     * c. A function returning (a) or (b)
     * @param options - optional cache options for this key only
     */
    set(key: string, value: T | (() => T) | Promise<T> | (() => Promise<T>), options?: CacheDefaults): Promise<void>;

    /**
     * Cache retrieve operation. key has to be a string.
     * Cache misses are generally treated the same as retrieving null, errors should only be caused by transport errors and connection problems.
     * If you want to cache null/undefined (e.g. 404 responses), you may want to wrap it or choose a different value, like false, to represent this condition.
     */
    get(key: string): Promise<T | null>;

    /**
     * This is the function you'd want to use most of the time.
     * It takes the same arguments as set but it will check the cache first.
     * If a value is already cached, it will return it directly (respond as fast as possible).
     * If the value is marked as stale (generated n seconds ago with n > freshFor), it will replace the value in the cache.
     * When multiple getOrElse calls concurrently encounter the same stale value, it will only replace the value once.
     * This is done on a per-instance level, so if you create many cache instances reading and writing the same keys, you are asking for trouble.
     * If you don't, the worst case is every process in your system fetching the value at once. Which should be a smaller number than the number of concurrent requests in most cases.
     */
    getOrElse(key: string, value: T | (() => T) | Promise<T> | (() => Promise<T>), options?: CacheDefaults): Promise<T>;

    /**
     * Cache delete operation. key has to be a string.
     */
    unset(key: string): Promise<void>;
}
