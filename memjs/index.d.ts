// Type definitions for memjs v0.10.0
// Project: https://github.com/alevy/memjs
// Definitions by: Kacper Polak <https://github.com/kacepe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface Memjs {
    Client: {
        create(serversStr: string, options?: MemjsClient.Options): MemjsClient.Instance;
    }
}
/**
 * Client Namespace
 */
declare namespace MemjsClient {

    interface Instance {
        /**
         * Creates a new client given an optional config string and optional hash of options
         * @param servers
         * @param options
         */
        (servers: string, options: Options): Instance;

        /**
         * Retrieves the value at the given key in memcache.
         * @param key
         * @param callback
         */
        get(key: string, callback: GetCallback): void;

        /**
         * Sets the given key_ and _value_ in memcache.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        set(key: string, value: any, options: any, callback: Callback): void;

        /**
         * Adds the given _key_ and _value_ to memcache. The operation only succeeds if the key is not already set.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        add(key: string, value: any, options: any, callback: Callback): void;

        /**
         * Replaces the given _key_ and _value_ to memcache. The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        replace(key: string, value: any, options: any, callback: Callback): void;

        /**
         * Deletes the given _key_ from memcache. The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        delete(key: string, value: any, options: any, callback: Callback): void;

        /**
         * Increments the given _key_ in memcache.
         * @param key
         * @param amount
         * @param options
         * @param callback
         */
        increment(key: string, amount: number, options: any, callback: CrementCallback): void;

        /**
         * Decrements the given _key_ in memcache.
         * @param key
         * @param amount
         * @param options
         * @param callback
         */
        decrement(key: string, amount: number, options: any, callback: CrementCallback): void;

        /**
         * Append the given _value_ to the value associated with the given _key_ in memcache.
         * The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param callback
         */
        append(key: string, value: any, callback: Callback): void;

        /**
         * Prepend the given _value_ to the value associated with the given _key_ in memcache.
         * The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param callback
         */
        prepend(key: string, value: any, callback: Callback): void;

        /**
         * Touch sets an expiration value, given by _expires_, on the given _key_ in memcache.
         * The operation only succeeds if the key is already present
         * @param key
         * @param expires
         * @param callback
         */
        touch(key: string, expires: number, callback: Callback): void;

        /**
         * Flushes the cache on each connected server.
         * @param callback
         */
        flush(callback: CallbackWithResults): void;

        /**
         * Sends a memcache stats command with a key to each connected server.
         * @param key
         * @param callback
         */
        statsWithKey(key: string, callback: StatsCallback): void;

        /**
         * Fetches memcache stats from each connected server.
         * @param callback
         */
        stats(callback: StatsCallback): void;

        /**
         *
         * @param callback
         */
        resetStats(callback: ServerCallback): void;

        /**
         * Closes the connection to each server, notifying them of this intention.
         * Note that quit can race against already outstanding requests when those requests fail and are retried,
         * leading to the quit command winning and closing the connection before the retries complete.
         */
        quit(): void;

        /**
         * Closes (abruptly) connections to all the servers.
         */
        close(): void;
    }

    /**
     * @param err
     * @param value
     * @param extras
     */
    interface GetCallback {
        (err: Error, value: any, extras: any): void;
    }

    /**
     * @param err
     * @param success
     */
    interface Callback { (err: Error, success: boolean): void; }

    /**
     * @param err
     * @param success
     * @param value
     */
    interface CrementCallback { (err: Error, success: boolean, value: any): void; }

    /**
     * @param lastErr
     * @param results
     */
    interface CallbackWithResults { (lastErr: Error, results: any): void; }

    /**
     * @param err
     * @param server
     * @param stats
     */
    interface StatsCallback { (err: Error, server: any, stats: any): void; }

    /**
     * @param err
     * @param server
     */
    interface ServerCallback { (err: Error, server: string): void; }

    interface Options {
        retries?: number,
        expires?: number,
        logger?: any,
        failover?: boolean,
        failoverTime?: number
    }
}
declare module 'memjs' {
    let memjs = Memjs;
    export = memjs;
}
