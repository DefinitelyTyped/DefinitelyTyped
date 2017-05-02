// Type definitions for memjs 0.10
// Project: https://github.com/alevy/memjs
// Definitions by: Kacper Polak <https://github.com/kacepe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace MemJS {
    export let Client: { create(serversStr: string, options?: ClientOptions): Client; };

    /**
     * Client Instance
     */
    interface Client {
        /**
         * Creates a new client given an optional config string and optional hash of options
         * @param servers
         * @param options
         */
        (servers: string, options: ClientOptions): Client;

        /**
         * Retrieves the value at the given key in memcache.
         * @param key
         * @param callback
         */
        get(key: string, callback: (err: Error, value: any, extras: any) => any): void;

        /**
         * Sets the given key_ and _value_ in memcache.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        set(key: string, value: any, options: any, callback: (err: Error, success: boolean) => any): void;

        /**
         * Adds the given _key_ and _value_ to memcache.
         * The operation only succeeds if the key is not already set.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        add(key: string, value: any, options?: any, callback?: (err: Error, success: boolean) => any): void;

        /**
         * Replaces the given _key_ and _value_ to memcache.
         * The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        replace(key: string, value: any, options: any, callback: (err: Error, success: boolean) => any): void;

        /**
         * Deletes the given _key_ from memcache.
         * The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param options
         * @param callback
         */
        delete(key: string, value: any, options: any, callback: (err: Error, success: boolean) => any): void;

        /**
         * Increments the given _key_ in memcache.
         * @param key
         * @param amount
         * @param options
         * @param callback
         */
        increment(key: string, amount: number, options: any, callback: (err: Error, success: boolean, value: any) => any): void;

        /**
         * Decrements the given _key_ in memcache.
         * @param key
         * @param amount
         * @param options
         * @param callback
         */
        decrement(key: string, amount: number, options: any, callback: (err: Error, success: boolean, value: any) => any): void;

        /**
         * Append the given _value_ to the value associated with the given _key_ in memcache.
         * The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param callback
         */
        append(key: string, value: any, callback: (err: Error, success: boolean) => any): void;

        /**
         * Prepend the given _value_ to the value associated with the given _key_ in memcache.
         * The operation only succeeds if the key is already present.
         * @param key
         * @param value
         * @param callback
         */
        prepend(key: string, value: any, callback: (err: Error, success: boolean) => any): void;

        /**
         * Touch sets an expiration value, given by _expires_, on the given _key_ in memcache.
         * The operation only succeeds if the key is already present
         * @param key
         * @param expires
         * @param callback
         */
        touch(key: string, expires: number, callback: (err: Error, success: boolean) => any): void;

        /**
         * Flushes the cache on each connected server.
         * @param callback
         */
        flush(callback: (lastErr: Error, results: any) => any): void;

        /**
         * Sends a memcache stats command with a key to each connected server.
         * @param key
         * @param callback
         */
        statsWithKey(key: string, callback: (err: Error, server: any, stats: any) => any): void;

        /**
         * Fetches memcache stats from each connected server.
         * @param callback
         */
        stats(callback: (err: Error, server: any, stats: any) => any): void;

        /**
         *
         * @param callback
         */
        resetStats(callback: (err: Error, server: string) => any): void;

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

    interface ClientOptions {
        retries?: number;
        expires?: number;
        logger?: any;
        failover?: boolean;
        failoverTime?: number;
    }
}
