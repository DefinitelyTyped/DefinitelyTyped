// Type definitions for express-brute-memcached
// Project: https://github.com/AdamPflug/express-brute-memcached
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * @summary Memcached options.
 * @interface
 */
export interface MemcachedStoreOptions {
    prefix: string;

    /**
     * @summary Maximum key size allowed.
     * @type {number}
     */
    maxKeySize: number;

    /**
     * @summary Maximum expiration time of keys (in seconds).
     * @type {number}
     */
    maxExpiration: number;

    /**
     * @summary Maximum size of a value.
     * @type {number}
     */
    maxValue: number;

    /**
     * @summary Maximum size of the connection pool.
     * @type {number}
     */
    poolSize: number;

    /**
     * @summary Hashing algorithm used to generate the  hashRing  values
     * @type {string}
     */
    algorithm: string;

    /**
     * @summary Time between reconnection attempts (in milliseconds).
     * @type {number}
     */
    reconnect: number;

    /**
     * @summary Time after which Memcached sends a connection timeout (in milliseconds).
     * @type {number}
     */
    timeout: number;

    /**
     * @summary Number of socket allocation retries per request.
     * @type {number}
     */
    retries: number;

    /**
     * @summary Number of failed-attempts to a server before it is regarded as 'dead'.
     * @type {number}
     */
    failures: number;

    /**
     * @summary Time between a server failure and an attempt to set it up back in service.
     * @type {number}
     */
    retry: number;

    /**
     * @summary If true, authorizes the automatic removal of dead servers from the pool.
     * @type {boolean}
     */
    remove: boolean;

    /**
     * @summary An array of  server_locations  to replace servers that fail and that are removed from the consistent hashing scheme.
     * @type {Array}
     */
    failOverServers: Array<any>;

    /**
     * @summary True, whether to use  md5  as hashing scheme when keys exceed  maxKeySize .
     * @type
     */
    keyCompression: boolean;

    /**
     * @summary Idle timeout for the connections.
     * @type {number}
     */
    idle: number;
}

/**
 * @summary A memcached store adapter.
 * @class
 */
export default class MemcachedStore {
    /**
     * @summary Constructor.
     * @constructor
     * @param {string|Array}    hosts   The collection.
     * @param {Object}          options The otpions.
     */
    constructor(hosts: string | Array<string>, options?: MemcachedStoreOptions);
}
