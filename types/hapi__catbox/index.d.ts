/**
 * Client
 * The Client object provides a low-level cache abstraction. The object is constructed using new Client(engine, options) where:
 * engine - is an object or a prototype function implementing the cache strategy:
 *  * function - a prototype function with the signature function(options). catbox will call new func(options).
 *  * object - a pre instantiated client implementation object. Does not support passing options.
 * options - the strategy configuration object. Each strategy defines its own configuration options with the following common options:
 *  * partition - the partition name used to isolate the cached results across multiple clients. The partition name is used as the MongoDB database name,
 *    the Riak bucket, or as a key prefix in Redis and Memcached. To share the cache across multiple clients, use the same partition name.
 * @see {@link https://github.com/hapijs/catbox#client}
 */
export class Client<T> implements ClientApi<T> {
    constructor(engine: EnginePrototypeOrObject, options?: ClientOptions);

    /** start() - creates a connection to the cache server. Must be called before any other method is available. */
    start(): Promise<void>;
    /** stop() - terminates the connection to the cache server. */
    stop(): Promise<void>;
    /**
     * get(key, callback) - retrieve an item from the cache engine if found where:
     *  * key - a cache key object (see [ICacheKey]).
     */
    get(key: CacheKey): Promise<null | CachedObject<T>>;
    /**
     * set(key, value, ttl, callback) - store an item in the cache for a specified length of time, where:
     *  * key - a cache key object (see [ICacheKey]).
     *  * value - the string or object value to be stored.
     *  * ttl - a time-to-live value in milliseconds after which the item is automatically removed from the cache (or is marked invalid).
     */
    set(key: CacheKey, value: T, ttl: number): Promise<void>;
    /**
     * drop(key, callback) - remove an item from cache where:
     *  * key - a cache key object (see [ICacheKey]).
     */
    drop(key: CacheKey): Promise<void>;
    /** isReady() - returns true if cache engine determines itself as ready, false if it is not ready. */
    isReady(): boolean;
    /** validateSegmentName(segment) - returns null if the segment name is valid (see below), otherwise should return an instance of Error with an appropriate message. */
    validateSegmentName(segment: string): null | Error;
}

export type EnginePrototypeOrObject = EnginePrototype<any> | ClientApi<any>;

/**
 * A prototype CatBox engine function
 */
export interface EnginePrototype<T> {
    new(settings: ClientOptions): ClientApi<T>;
}

/**
 * Client API
 * The Client object provides the following methods:
 * @see {@link https://github.com/hapijs/catbox#api}
 */
export interface ClientApi<T> {
    /** start() - creates a connection to the cache server. Must be called before any other method is available. */
    start(): Promise<void>;
    /** stop() - terminates the connection to the cache server. */
    stop(): void;
    /**
     * get(key, callback) - retrieve an item from the cache engine if found where:
     *  * key - a cache key object (see [ICacheKey]).
     */
    get(key: CacheKey): Promise<null | CachedObject<T>>;
    /**
     * set(key, value, ttl) - store an item in the cache for a specified length of time, where:
     *  * key - a cache key object (see [ICacheKey]).
     *  * value - the string or object value to be stored.
     *  * ttl - a time-to-live value in milliseconds after which the item is automatically removed from the cache (or is marked invalid).
     */
    set(key: CacheKey, value: T, ttl: number): Promise<void>;
    /**
     * drop(key) - remove an item from cache where:
     *  * key - a cache key object (see [ICacheKey]).
     */
    drop(key: CacheKey): Promise<void>;
    /** isReady() - returns true if cache engine determines itself as ready, false if it is not ready. */
    isReady(): boolean;
    /** validateSegmentName(segment) - returns null if the segment name is valid (see below), otherwise should return an instance of Error with an appropriate message. */
    validateSegmentName(segment: string): null | Error;
}

/**
 * Any method with a key argument takes an object with the following required properties:
 */
export interface CacheKey {
    /** segment - a caching segment name string. Enables using a single cache server for storing different sets of items with overlapping ids. */
    segment: string;
    /** id - a unique item identifier string (per segment). Can be an empty string. */
    id: string;
}

/** Cached object contains the following: */
export interface CachedObject<T> {
    /** item - the value stored in the cache using set(). */
    item: T;
    /** stored - the timestamp when the item was stored in the cache (in milliseconds). */
    stored: number;
    /** ttl - the remaining time-to-live (not the original value used when storing the object). */
    ttl: number;
}

export interface ClientOptions {
    /**
     * this will store items under keys that start with this value.
     */
    partition?: string | undefined;
}

export type PolicyOptionVariants<T> = PolicyOptions<T> | DecoratedPolicyOptions<T>;

export type Id = string | { id: string };

/**
 * The Policy object provides a convenient cache interface by setting a
 * global policy which is automatically applied to every storage action.
 * The object is constructed using new Policy(options, [cache, segment]) where:
 *  * options - an object with the IPolicyOptions structure
 *  * cache - a Client instance (which has already been started).
 *  * segment - required when cache is provided. The segment name used to
 * isolate cached items within the cache partition.
 * @see {@link https://github.com/hapijs/catbox#policy}
 */
export class Policy<T, O extends PolicyOptionVariants<T>> {
    constructor(options: O, cache: Client<T>, segment: string);
    /**
     *  retrieve an item from the cache. If the item is not
     * found and the generateFunc method was provided,
     * a new value is generated, stored in the cache, and returned.
     * Multiple concurrent requests are queued and processed once. The method arguments are:
     * @param id the unique item identifier (within the policy segment).
     * Can be a string or an object with the required 'id' key.
     */
    get(id: Id): Promise<O extends DecoratedPolicyOptions<T> ? DecoratedResult<T> : T | null>;

    /**
     * store an item in the cache where:
     * @param id - the unique item identifier (within the policy segment).
     * @param value - the string or object value to be stored.
     * @param ttl - a time-to-live override value in milliseconds after which the item is automatically
     * removed from the cache (or is marked invalid).
     *    This should be set to 0 in order to use the caching rules configured when creating the Policy object.
     */
    set(id: Id, value: T, ttl?: number): Promise<void>;
    /**
     * remove the item from cache where:
     * @param id the unique item identifier (within the policy segment).
     */
    drop(id: Id): Promise<void>;
    /**
     * given a created timestamp in milliseconds, returns the time-to-live left
     * based on the configured rules.
     */
    ttl(created: number): number;
    /** changes the policy rules after construction (note that items already stored will not be affected) */
    rules(options: PolicyOptions<T>): void;
    /**
     * returns true if cache engine determines itself as ready, false if it is not ready or if
     * here is no cache engine set.
     */
    isReady(): boolean;
    /** an object with cache statistics */
    stats(): CacheStatisticsObject;
}

export interface DecoratedResult<T> {
    value: T;
    cached: PolicyGetCachedOptions<T>;
    report: PolicyGetReportLog;
}

export interface PolicyGetCachedOptions<T> {
    /** item - the cached value. */
    item: T;
    /** stored - the timestamp when the item was stored in the cache. */
    stored: number;
    /** ttl - the cache ttl value for the record. */
    ttl: number;
    /** isStale - true if the item is stale. */
    isStale: boolean;
}

/**
 * @see {@link https://github.com/hapijs/catbox#policy}
 */
export interface PolicyOptions<T> {
    /** expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt. */
    expiresIn?: number | undefined;
    /** expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Uses local time. Cannot be used together with expiresIn. */
    expiresAt?: string | undefined;
    /** generateFunc - a function used to generate a new cache item if one is not found in the cache when calling get(). The method's signature is function(id, next) where: */
    generateFunc?: GenerateFunc<T> | undefined;
    /**
     * staleIn - number of milliseconds to mark an item stored in cache as stale and attempt to regenerate it when generateFunc is provided.
     * Must be less than expiresIn. Alternatively function that returns staleIn value in milliseconds. The function signature is function(stored, ttl) where:
     *  * stored - the timestamp when the item was stored in the cache (in milliseconds).
     *  * ttl - the remaining time-to-live (not the original value used when storing the object).
     */
    staleIn?: number | ((stored: number, ttl: number) => number) | undefined;
    /** staleTimeout - number of milliseconds to wait before returning a stale value while generateFunc is generating a fresh value. */
    staleTimeout?: number | undefined;
    /**
     * generateTimeout - number of milliseconds to wait before returning a timeout error when the generateFunc function takes too long to return a value.
     * When the value is eventually returned, it is stored in the cache for future requests. Required if generateFunc is present.
     * Set to false to disable timeouts which may cause all get() requests to get stuck forever.
     */
    generateTimeout?: number | false | undefined;
    /** dropOnError - if true, an error or timeout in the generateFunc causes the stale value to be evicted from the cache. Defaults to true. */
    dropOnError?: boolean | undefined;
    /** generateOnReadError - if false, an upstream cache read error will stop the get() method from calling the generate function and will instead pass back the cache error. Defaults to true. */
    generateOnReadError?: boolean | undefined;
    /** generateIgnoreWriteError - if false, an upstream cache write error will be passed back with the generated value when calling the get() method. Defaults to true. */
    generateIgnoreWriteError?: boolean | undefined;
    /**
     * pendingGenerateTimeout - number of milliseconds while generateFunc call is in progress for a given id, before a subsequent generateFunc call is allowed.
     * @default 0, no blocking of concurrent generateFunc calls beyond staleTimeout.
     */
    pendingGenerateTimeout?: number | undefined;
}

export interface DecoratedPolicyOptions<T> extends PolicyOptions<T> {
    /**
     * @default false
     */
    getDecoratedValue: boolean | undefined;
}

export interface GenerateFuncFlags {
    ttl: number;
}

/**
 * generateFunc
 * Is used in PolicyOptions
 * A function used to generate a new cache item if one is not found in the cache when calling get(). The method's signature is function(id)
 * @param id - the id string or object provided to the get() method.
 * @param next - the method called when the new item is returned with the signature function(err, value, ttl) where:
 *      * err - an error condition.
 *      * value - the new value generated.
 *      * ttl - the cache ttl value in milliseconds. Set to 0 to skip storing in the cache. Defaults to the cache global policy.
 * @see {@link https://github.com/hapijs/catbox#policy}
 */
export type GenerateFunc<T> = (id: Id, flags: GenerateFuncFlags) => Promise<T>;

/**
 * An object with logging information about the generation operation containing the following keys (as relevant):
 */
export interface PolicyGetReportLog {
    /** msec - the cache lookup time in milliseconds. */
    msec: number;
    /** stored - the timestamp when the item was stored in the cache. */
    stored: number;
    /** isStale - true if the item is stale. */
    isStale: boolean;
    /** ttl - the cache ttl value for the record. */
    ttl: number;
    /** error - lookup error. */
    error?: Error | undefined;
}

/**
 * an object with cache statistics where:
 */
export interface CacheStatisticsObject {
    /** sets - number of cache writes. */
    sets: number;
    /** gets - number of cache get() requests. */
    gets: number;
    /** hits - number of cache get() requests in which the requested id was found in the cache (can be stale). */
    hits: number;
    /** stales - number of cache reads with stale requests (only counts the first request in a queued get() operation). */
    stales: number;
    /** generates - number of calls to the generate function. */
    generates: number;
    /** errors - cache operations errors. TODO check this */
    errors: number;
}
