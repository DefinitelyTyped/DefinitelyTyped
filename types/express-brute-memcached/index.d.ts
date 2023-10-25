/**
 * @summary Memcached options.
 * @interface
 */
export interface MemcachedStoreOptions {
    prefix: string;

    /**
     * @summary Maximum key size allowed.
     */
    maxKeySize: number;

    /**
     * @summary Maximum expiration time of keys (in seconds).
     */
    maxExpiration: number;

    /**
     * @summary Maximum size of a value.
     */
    maxValue: number;

    /**
     * @summary Maximum size of the connection pool.
     */
    poolSize: number;

    /**
     * @summary Hashing algorithm used to generate the  hashRing  values
     */
    algorithm: string;

    /**
     * @summary Time between reconnection attempts (in milliseconds).
     */
    reconnect: number;

    /**
     * @summary Time after which Memcached sends a connection timeout (in milliseconds).
     */
    timeout: number;

    /**
     * @summary Number of socket allocation retries per request.
     */
    retries: number;

    /**
     * @summary Number of failed-attempts to a server before it is regarded as 'dead'.
     */
    failures: number;

    /**
     * @summary Time between a server failure and an attempt to set it up back in service.
     */
    retry: number;

    /**
     * @summary If true, authorizes the automatic removal of dead servers from the pool.
     */
    remove: boolean;

    /**
     * @summary An array of  server_locations  to replace servers that fail and that are removed from the consistent hashing scheme.
     */
    failOverServers: Array<any>;

    /**
     * @summary True, whether to use  md5  as hashing scheme when keys exceed  maxKeySize .
     */
    keyCompression: boolean;

    /**
     * @summary Idle timeout for the connections.
     */
    idle: number;
}

/**
 * @summary A memcached store adapter.
 */
export default class MemcachedStore {
    /**
     * @summary Constructor.
     * @param {string|Array}    hosts   The collection.
     * @param {Object}          options The otpions.
     */
    constructor(hosts: string | Array<string>, options?: MemcachedStoreOptions);
}
