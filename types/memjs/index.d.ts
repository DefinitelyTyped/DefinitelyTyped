// Type definitions for memjs 1.2
// Project: https://github.com/memcachier/memjs
// Definitions by: Zongmin Lei <https://github.com/leizongmin>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export interface ClientOptions {
    /**
     * How many seconds to wait until retrying a failed server.
     * @default 60
     */
    failoverTime?: number | undefined;
    /**
     * The number of times to retry an operation in lieu of failures.
     * @default 2
     */
    retries?: number | undefined;
    /**
     * @default 0.2
     */
    retry_delay?: number | undefined;
    /**
     * The default expiration in seconds to use. A `0` means never expire,
     * if it is greater than 30 days (60 x 60 x 24 x 30), it is
     * treated as a UNIX time (number of seconds since January 1, 1970).
     * @default 0
     */
    expires?: number | undefined;
    /**
     * A logger object that responds to `log(string)` method calls.
     * @default console
     */
    logger?: {
        log(...args: any[]): void;
    } | undefined;
}
export interface ServerOptions {
    /**
     * Server username for fallback SASL authentication credentials.
     */
    username?: string | undefined;
    /**
     * Server password for fallback SASL authentication credentials.
     */
    password?: string | undefined;
    /**
     * `timeout` in seconds to determine failure for operations.
     * @default 0.5
     */
    timeout?: number | undefined;
    /**
     * `conntimeout` in seconds to connection failure.
     * @default 2 * timeout
     */
    conntimeout?: number | undefined;
    /**
     * Whether to enable keep-alive functionality.
     * @default false
     */
    keepAlive?: boolean | undefined;
    /**
     * `keepAliveDelay` in seconds to the initial delay before the first keep-
     * alive probe is sent on an idle socket.
     * @default 30
     */
    keepAliveDelay?: number | undefined;
}
export class Client {
    /**
     * Creates a new client given an optional config string and optional hash of
     * options. The config string should be of the form:
     *
     *     "[user:pass@]server1[:11211],[user:pass@]server2[:11211],..."
     *
     * If the argument is not given, fallback on the `MEMCACHIER_SERVERS` environment
     * variable, `MEMCACHE_SERVERS` environment variable or `"localhost:11211"`.
     *
     * The options hash may contain the options:
     *
     * * `retries` - the number of times to retry an operation in lieu of failures
     * (default 2)
     * * `expires` - the default expiration in seconds to use (default 0 - never
     * expire). If `expires` is greater than 30 days (60 x 60 x 24 x 30), it is
     * treated as a UNIX time (number of seconds since January 1, 1970).
     * * `logger` - a logger object that responds to `log(string)` method calls.
     * * `failover` - whether to failover to next server. Defaults to false.
     * * `failoverTime` - how much to wait until retring a failed server. Default
     *                    is 60 seconds.
     *
     *   ~~~~
     *     log(msg1[, msg2[, msg3[...]]])
     *   ~~~~
     *
     *   Defaults to `console`.
     *
     * Or options for the servers including:
     * * `username` and `password` for fallback SASL authentication credentials.
     * * `timeout` in seconds to determine failure for operations. Default is 0.5
     *             seconds.
     * * 'conntimeout' in seconds to connection failure. Default is twice the value
     *                 of `timeout`.
     * * `keepAlive` whether to enable keep-alive functionality. Defaults to false.
     * * `keepAliveDelay` in seconds to the initial delay before the first keepalive
     *                    probe is sent on an idle socket. Defaults is 30 seconds.
     */
    static create(serversStr?: string, options?: ClientOptions | ServerOptions): Client;

    servers: string[];

    /**
     * Client initializer takes a list of Servers and an options dictionary. See Client.create for details.
     * @param servers
     * @param options
     */
    constructor(servers: string, options?: ClientOptions);

    /**
     * Chooses the server to talk to by hashing the given key.
     * @param key
     */
    server(key: string): string;

    /**
     * GET
     *
     * Retrieves the value at the given key in memcache.
     *
     * The callback signature is:
     *
     *     callback(err, value, flags)
     *
     * _value_ and _flags_ are both `Buffer`s. If the key is not found, the
     * callback is invoked with null for both arguments and no error
     * @param key
     * @param callback
     */
    get(key: string): Promise<{ value: Buffer; flags: Buffer }>;
    get(
        key: string,
        callback: (err: Error | null, value: Buffer | null, flags: Buffer | null) => void
    ): void;

    /**
     * SET
     *
     * Sets the given _key_ and _value_ in memcache.
     *
     * The options dictionary takes:
     * * _expires_: overrides the default expiration (see `Client.create`) for this
     *              particular key-value pair.
     *
     * The callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param value
     * @param options
     * @param callback
     */
    set(key: string, value: string | Buffer, options: { expires?: number | undefined }): Promise<boolean>;
    set(
        key: string,
        value: string | Buffer,
        options: { expires?: number | undefined },
        callback: (err: Error | null, success: boolean | null) => void
    ): void;

    /**
     * ADD
     *
     * Adds the given _key_ and _value_ to memcache. The operation only succeeds
     * if the key is not already set.
     *
     * The options dictionary takes:
     * * _expires_: overrides the default expiration (see `Client.create`) for this
     *              particular key-value pair.
     *
     * The callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param value
     * @param options
     * @param callback
     */
    add(key: string, value: string | Buffer, options: { expires?: number | undefined }): Promise<boolean>;
    add(
        key: string,
        value: string | Buffer,
        options: { expires?: number | undefined },
        callback: (err: Error | null, success: boolean | null) => void
    ): void;

    /**
     * REPLACE
     *
     * Replaces the given _key_ and _value_ to memcache. The operation only succeeds
     * if the key is already present.
     *
     * The options dictionary takes:
     * * _expires_: overrides the default expiration (see `Client.create`) for this
     *              particular key-value pair.
     *
     * The callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param value
     * @param options
     * @param callback
     */
    replace(key: string, value: string | Buffer, options: { expires?: number | undefined }): Promise<boolean>;
    replace(
        key: string,
        value: string | Buffer,
        options: { expires?: number | undefined },
        callback: (err: Error | null, success: boolean | null) => void
    ): void;

    /**
     * DELETE
     *
     * Deletes the given _key_ from memcache. The operation only succeeds
     * if the key is already present.
     *
     * The callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param callback
     */
    delete(key: string): Promise<boolean>;
    delete(key: string, callback: (err: Error | null, success: boolean | null) => void): void;

    /**
     * INCREMENT
     *
     * Increments the given _key_ in memcache.
     *
     * The options dictionary takes:
     * * _initial_: the value for the key if not already present, defaults to 0.
     * * _expires_: overrides the default expiration (see `Client.create`) for this
     *              particular key-value pair.
     *
     * The callback signature is:
     *
     *     callback(err, success, value)
     * @param key
     * @param amount
     * @param options
     * @param callback
     */
    increment(
        key: string,
        amount: number,
        options: { initial?: number | undefined; expires?: number | undefined }
    ): Promise<{ success: boolean; value?: number | null | undefined }>;
    increment(
        key: string,
        amount: number,
        options: { initial?: number | undefined; expires?: number | undefined },
        callback: (err: Error | null, success: boolean | null, value?: number | null) => void
    ): void;

    /**
     * DECREMENT
     *
     * Decrements the given _key_ in memcache.
     *
     * The options dictionary takes:
     * * _initial_: the value for the key if not already present, defaults to 0.
     * * _expires_: overrides the default expiration (see `Client.create`) for this
     *              particular key-value pair.
     *
     * The callback signature is:
     *
     *     callback(err, success, value)
     * @param key
     * @param amount
     * @param options
     * @param callback
     */
    decrement(
        key: string,
        amount: number,
        options: { initial?: number | undefined; expires?: number | undefined }
    ): Promise<{ success: boolean; value?: number | null | undefined }>;
    decrement(
        key: string,
        amount: number,
        options: { initial?: number | undefined; expires?: number | undefined },
        callback: (err: Error | null, success: boolean | null, value?: number | null) => void
    ): void;

    /**
     * APPEND
     *
     * Append the given _value_ to the value associated with the given _key_ in
     * memcache. The operation only succeeds if the key is already present. The
     * callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param value
     * @param callback
     */
    append(key: string, value: string | Buffer): Promise<boolean>;
    append(
        key: string,
        value: string | Buffer,
        callback: (err: Error | null, success: boolean | null) => void
    ): void;

    /**
     * PREPEND
     *
     * Prepend the given _value_ to the value associated with the given _key_ in
     * memcache. The operation only succeeds if the key is already present. The
     * callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param value
     * @param callback
     */
    prepend(key: string, value: string | Buffer): Promise<boolean>;
    prepend(
        key: string,
        value: string | Buffer,
        callback: (err: Error | null, success: boolean | null) => void
    ): void;

    /**
     * TOUCH
     *
     * Touch sets an expiration value, given by _expires_, on the given _key_ in
     * memcache. The operation only succeeds if the key is already present. The
     * callback signature is:
     *
     *     callback(err, success)
     * @param key
     * @param expires
     * @param callback
     */
    touch(key: string, expires: number): Promise<boolean>;
    touch(
        key: string,
        expires: number,
        callback: (err: Error | null, success: boolean | null) => void
    ): void;

    /**
     * FLUSH
     *
     * Flushes the cache on each connected server. The callback signature is:
     *
     *     callback(lastErr, results)
     *
     * where _lastErr_ is the last error encountered (or null, in the common case
     * of no errors). _results_ is a dictionary mapping `"hostname:port"` to either
     * `true` (if the operation was successful), or an error.
     * @param callback
     */
    flush(): Promise<Record<string, boolean>>;
    flush(callback: (err: Error | null, results: Record<string, boolean>) => void): void;

    /**
     * STATS_WITH_KEY
     *
     * Sends a memcache stats command with a key to each connected server. The
     * callback is invoked **ONCE PER SERVER** and has the signature:
     *
     *     callback(err, server, stats)
     *
     * _server_ is the `"hostname:port"` of the server, and _stats_ is a dictionary
     * mapping the stat name to the value of the statistic as a string.
     * @param key
     * @param callback
     */
    statsWithKey(
        key: string,
        callback?: (err: Error | null, server: string, stats: Record<string, string> | null) => void
    ): void;

    /**
     * STATS
     *
     * Fetches memcache stats from each connected server. The callback is invoked
     * **ONCE PER SERVER** and has the signature:
     *
     *     callback(err, server, stats)
     *
     * _server_ is the `"hostname:port"` of the server, and _stats_ is a
     * dictionary mapping the stat name to the value of the statistic as a string.
     * @param callback
     */
    stats(
        callback?: (err: Error | null, server: string, stats: Record<string, string> | null) => void
    ): void;

    /**
     * RESET_STATS
     *
     * Reset the statistics each server is keeping back to zero. This doesn't clear
     * stats such as item count, but temporary stats such as total number of
     * connections over time.
     *
     * The callback is invoked **ONCE PER SERVER** and has the signature:
     *
     *     callback(err, server)
     *
     * _server_ is the `"hostname:port"` of the server.
     * @param callback
     */
    resetStats(
        callback?: (err: Error | null, server: string, stats: Record<string, string> | null) => void
    ): void;

    /**
     * QUIT
     *
     * Closes the connection to each server, notifying them of this intention. Note
     * that quit can race against already outstanding requests when those requests
     * fail and are retried, leading to the quit command winning and closing the
     * connection before the retries complete.
     */
    quit(): void;

    /**
     * CLOSE
     *
     * Closes (abruptly) connections to all the servers.
     */
    close(): void;

    /**
     * Perform a generic single response operation (get, set etc) on a server
     * serv: the server to perform the operation on
     * request: a buffer containing the request
     * seq: the sequence number of the operation. It is used to pin the callbacks
     *      to a specific operation and should never change during a `perform`.
     * callback: a callback invoked when a response is received or the request
     *           fails
     * retries: number of times to retry request on failure
     * @param key
     * @param request
     * @param seq
     * @param callback
     * @param retries
     */
    perform(
        key: string,
        request: Buffer,
        seq: number,
        callback?: (err: Error | null, ...args: any[]) => void,
        retries?: number
    ): void;
}
