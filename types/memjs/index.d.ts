/// <reference types="node" />

import EventEmitter = require("node:events");
import { Socket } from "node:net";

export interface ClientOptions<TIn = string | Buffer, TOut = Buffer | null> {
    /**
     * Whether to failover to next server.
     * @default false
     */
    failover?: boolean;
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
    logger?: Logger | undefined;
    /**
     * The object which will (de)serialize the data.
     * @default a passthrough function which will leave the parameters unchanged
     */
    serializer?: Serializer<TIn, TOut>;
}

export interface Logger {
    log(...args: any[]): void;
}

export interface Serializer<TIn, TOut> {
    serialize(opcode: number, value: TIn, extras: Buffer): { value: string | Buffer; extras: Buffer };
    deserialize(opcode: number, value: Buffer | null, extras: Buffer): { value: TOut; extras: Buffer };
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

export class Client<TIn = string | Buffer, TOut = Buffer | null> {
    /**
     * Creates a new client given an optional config string and optional hash of
     * options.
     *
     * @param serversStr The config string should be of the form:
     *
     *     "[user:pass@]server1[:11211],[user:pass@]server2[:11211],..."
     *
     * If the argument is not given, fallback on the `MEMCACHIER_SERVERS` environment
     * variable, `MEMCACHE_SERVERS` environment variable or `"localhost:11211"`.
     */
    static create<TIn = string | Buffer, TOut = Buffer | null>(
        serversStr?: string,
        options?: ClientOptions<TIn, TOut> & ServerOptions,
    ): Client<TIn, TOut>;

    readonly seq: number;
    readonly servers: readonly Server[];
    readonly options: ClientOptions<TIn, TOut>;
    readonly serializer: Serializer<TIn, TOut>;

    /**
     * Client initializer takes a list of Servers and an options dictionary. See Client.create for details.
     */
    constructor(servers: readonly Server[], options?: ClientOptions);

    /**
     * An overridable method you can use for determing
     * server selection. Should return the server index
     * in the list of servers on Client#servers.
     *
     * @example
     * // example using node-hashring
     * import * as memjs from 'memjs';
     * import HashRing = require('node-hashring');
     *
     * const servers = ['localhost:11211', 'localhost:11212'];
     * // build a map of server addresses to their index in the server list
     * const serverMap: { [key: string]: number } = {};
     * servers.forEach((server, index) => serverMap[server] = index);
     * const client = memjs.Client.create(servers.join(','));
     * // build the hashring
     * const hashRing = new HashRing(servers);
     * // override the getServer method
     * client.getServer = (key) => serverMap[hashRing.findNode(key)];
     */
    getServer(key: string): string;

    /**
     * Chooses the server to talk to by hashing the given key.
     *
     * @param key The key in memcache.
     */
    server(key: string): Server | undefined;

    /**
     * GET
     *
     * Retrieves the value at the given key in memcache.
     *
     * @param key The key in memcache.
     * @param callback The callback invoked when a response is received or the request fails.
     * If the key is not found, the callback is invoked with null for both arguments and no error.
     */
    get(key: string): Promise<{ value: TOut; flags: Buffer | null }>;
    get(key: string, callback: (err: Error | null, value: TOut, flags: Buffer | null) => void): void;

    /**
     * SET
     *
     * Sets the given _key_ and _value_ in memcache.
     *
     * @param key The key in memcache.
     * @param value The value to set in memcache.
     * @param options Additional request options.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    set(key: string, value: TIn, options?: InsertOptions): Promise<boolean>;
    set(key: string, value: TIn, callback: (err: Error | null, success: boolean | null) => void): void;
    set(
        key: string,
        value: TIn,
        options: InsertOptions,
        callback: (err: Error | null, success: boolean | null) => void,
    ): void;

    /**
     * ADD
     *
     * Adds the given _key_ and _value_ to memcache. The operation only succeeds
     * if the key is not already set.
     *
     * @param key The key in memcache.
     * @param value The value to set in memcache.
     * @param options Additional request options.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    add(key: string, value: TIn, options?: InsertOptions): Promise<boolean>;
    add(key: string, value: TIn, callback: (err: Error | null, success: boolean | null) => void): void;
    add(
        key: string,
        value: TIn,
        options: InsertOptions,
        callback: (err: Error | null, success: boolean | null) => void,
    ): void;

    /**
     * REPLACE
     *
     * Replaces the given _key_ and _value_ to memcache. The operation only succeeds
     * if the key is already present.
     *
     * @param key The key in memcache.
     * @param value The value with which to replace the value in memcache.
     * @param options Additional request options.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    replace(key: string, value: TIn, options?: InsertOptions): Promise<boolean>;
    replace(key: string, value: TIn, callback: (err: Error | null, success: boolean | null) => void): void;
    replace(
        key: string,
        value: TIn,
        options: InsertOptions,
        callback: (err: Error | null, success: boolean | null) => void,
    ): void;

    /**
     * DELETE
     *
     * Deletes the given _key_ from memcache. The operation only succeeds
     * if the key is already present.
     *
     * @param key The key in memcache.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    delete(key: string): Promise<boolean>;
    delete(key: string, callback: (err: Error | null, success: boolean | null) => void): void;

    /**
     * INCREMENT
     *
     * Increments the given _key_ in memcache.
     *
     * @param key The key in memcache.
     * @param amount The amount by which to increment the value.
     * @param options Additional request options.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    increment(
        key: string,
        amount: number,
        options?: IncrementDecrementOptions,
    ): Promise<{ success: boolean; value?: number | null | undefined }>;
    increment(
        key: string,
        amount: number,
        callback: (err: Error | null, success: boolean | null, value?: number | null) => void,
    ): void;
    increment(
        key: string,
        amount: number,
        options: IncrementDecrementOptions,
        callback: (err: Error | null, success: boolean | null, value?: number | null) => void,
    ): void;

    /**
     * DECREMENT
     *
     * Decrements the given _key_ in memcache.
     *
     * @param key The key in memcache.
     * @param amount The amount by which to decrement the value.
     * @param options Additional request options.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    decrement(
        key: string,
        amount: number,
        options?: IncrementDecrementOptions,
    ): Promise<{ success: boolean; value?: number | null | undefined }>;
    decrement(
        key: string,
        amount: number,
        callback: (err: Error | null, success: boolean | null, value?: number | null) => void,
    ): void;
    decrement(
        key: string,
        amount: number,
        options: IncrementDecrementOptions,
        callback: (err: Error | null, success: boolean | null, value?: number | null) => void,
    ): void;

    /**
     * APPEND
     *
     * Append the given _value_ to the value associated with the given _key_.
     * The operation only succeeds if the key is already present.
     *
     * @param key The key in memcache.
     * @param value The value to prepend.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    append(key: string, value: TIn): Promise<boolean>;
    append(key: string, value: TIn, callback: (err: Error | null, success: boolean | null) => void): void;

    /**
     * PREPEND
     *
     * Prepend the given _value_ to the value associated with the given _key_.
     * The operation only succeeds if the key is already present.
     *
     * @param key The key in memcache.
     * @param value The value to prepend.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    prepend(key: string, value: TIn): Promise<boolean>;
    prepend(key: string, value: TIn, callback: (err: Error | null, success: boolean | null) => void): void;

    /**
     * TOUCH
     *
     * Touch sets an expiration value. The operation only succeeds if the key is already present.
     *
     * @param key The key in memcache.
     * @param expires The expiration value to set.
     * @param callback The callback invoked when a response is received or the request fails.
     */
    touch(key: string, expires?: number): Promise<boolean>;
    touch(key: string, callback: (err: Error | null, success: boolean | null) => void): void;
    touch(key: string, expires: number, callback: (err: Error | null, success: boolean | null) => void): void;

    /**
     * FLUSH
     *
     * Flushes the cache on each connected server.
     *
     * @param callback The callback invoked when a response is received or the request fails.
     * Its _lastErr_ argument is the last error encountered (or null, in the common case
     * of no errors). _results_ is a dictionary mapping `"hostname:port"` to either
     * `true` (if the operation was successful), or an error.
     */
    flush(): Promise<Record<string, boolean>>;
    flush(callback: (lastErr: Error | null, results: Record<string, boolean | Error>) => void): void;

    /**
     * STATS_WITH_KEY
     *
     * Sends a memcache stats command with a key to each connected server.
     *
     * @param key The key to perform the operation on.
     * @param callback The callback invoked when a response is received or the request fails.
     * Its invoked **ONCE PER SERVER**, its _server_ parameter is the `"hostname:port"` of the server,
     * and _stats_ is a dictionary mapping the stat name to the value of the statistic as a string.
     */
    statsWithKey(
        key: string,
        callback?: (err: Error | null, server: string, stats: Record<string, string> | null) => void,
    ): void;

    /**
     * STATS
     *
     * Fetches memcache stats from each connected server.
     *
     * @param callback The callback invoked when a response is received or the request fails.
     * Its invoked **ONCE PER SERVER**, its _server_ parameter is the `"hostname:port"` of the server,
     * and _stats_ is a dictionary mapping the stat name to the value of the statistic as a string.
     */
    stats(callback?: (err: Error | null, server: string, stats: Record<string, string> | null) => void): void;

    /**
     * RESET_STATS
     *
     * Reset the statistics each server is keeping back to zero. This doesn't clear
     * stats such as item count, but temporary stats such as total number of
     * connections over time.
     *
     * @param callback The callback invoked when a response is received or the request fails.
     * Its invoked **ONCE PER SERVER**, its _server_ parameter is the `"hostname:port"` of the server.
     */
    resetStats(callback?: (err: Error | null, server: string, stats: Record<string, string> | null) => void): void;

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
     * Perform a generic single response operation (get, set etc) on a server.
     *
     * @param key The key to perform the operation on.
     * @param request A buffer containing the request.
     * @param seq The sequence number of the operation. It is used to pin the callbacks
     * to a specific operation and should never change during a `perform`.
     * @param callback The callback invoked when a response is received or the request fails.
     * @param retries Number of times to retry request on failure.
     */
    perform(
        key: string,
        request: Buffer,
        seq: number,
        callback?: (err: Error | null, ...args: any[]) => void,
        retries?: number,
    ): void;

    /**
     * Increment the seq value.
     */
    incrSeq(): void;
}

export interface InsertOptions {
    /**
     * Overrides the default expiration (see `Client.create`) for this particular key-value pair.
     */
    expires?: number | undefined;
}

export interface IncrementDecrementOptions extends InsertOptions {
    /**
     * The value for the key if not already present.
     * @default 0
     */
    initial?: number | undefined;
}

export class Server extends EventEmitter {
    readonly responseBuffer: Buffer;
    readonly host: string;
    readonly port: number;
    readonly connected: boolean;
    readonly timeoutSet: boolean;
    readonly connectCallbacks: ReadonlyArray<(socket: Socket) => void>;
    readonly responseCallbacks: { [key: number]: (response: Response) => void };
    readonly requestTimeouts: readonly number[];
    readonly errorCallbacks: { [key: number]: (error: Error) => void };
    readonly options: ServerOptions;
    readonly username: string | undefined;
    readonly password: string | undefined;

    constructor(host: string, port: number, username?: string, password?: string, options?: ServerOptions);

    onConnect(fn: (socket: Socket) => void): void;
    onResponse(seq: number, fn: (response: Response) => void): void;
    onError(seq: number, fn: (error: Error) => void): void;
    error(error: Error): void;
    listSasl(): void;
    saslAuth(): void;
    appendToBuffer(dataBuf: Buffer): Buffer;
    responseHandler(dataBuf: Buffer): void;
    sock(sasl: boolean, go: (socket: Socket) => void): void;
    write(blob: Uint8Array | string): void;
    writeSASL(blob: Uint8Array | string): void;
    close(): void;
    toString(): string;
}

export const Utils: {
    makeRequestBuffer(
        opcode: number,
        key: string | Buffer,
        extras: string | Buffer,
        value: string | Buffer,
        opaque: number,
    ): Buffer;
    makeAmountInitialAndExpiration(amount: number, amountIfEmpty: number, expiration: number): Buffer;
    makeExpiration(expiration: number): Buffer;
    hashCode(str: string): number;
    parseMessage(dataBuf: Buffer): Response;
    merge<TOriginal extends object, TDefault extends object>(
        original: TOriginal,
        deflt: TDefault,
    ): TOriginal & TDefault;
    timestamp(): number;
};

export interface Response {
    header: Required<Header>;
    key: Buffer;
    extras: Buffer;
    val: Buffer;
}

export const Header: {
    fromBuffer(headerBuf: Buffer): Required<Header>;
    toBuffer(header: Header): Buffer;
};

export interface Header {
    magic: number;
    opcode: number;
    keyLength: number;
    extrasLength: number;
    dataType?: number;
    status?: number;
    totalBodyLength: number;
    opaque?: number;
    cas?: Buffer;
}
