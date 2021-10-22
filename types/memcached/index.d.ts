// Type definitions for memcached 2.2
// Project: https://github.com/3rd-Eden/memcached, https://github.com/3rd-eden/node-memcached
// Definitions by: KentarouTakeda <https://github.com/KentarouTakeda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import events = require("events");
export = Memcached;

declare class Memcached extends events.EventEmitter {
    static config: Memcached.options;

    /**
     * Connect to a single Memcached server or cluster
     * @param location Server locations
     * @param options options
     */
    constructor(location: Memcached.Location, options?: Memcached.options);

    /**
     * Touches the given key.
     * @param key The key
     * @param lifetime After how long should the key expire measured in seconds
     */
    touch(key: string, lifetime: number, cb: (this: Memcached.CommandData, err: any) => void): void;

    /**
     * Get the value for the given key.
     * @param key The key
     */
    get(key: string, cb: (this: Memcached.CommandData, err: any, data: any) => void): void;

    /**
     * Get the value and the CAS id.
     * @param key The key
     */
    gets(key: string, cb: (this: Memcached.CommandData, err: any, data: {[key: string]: any, cas: string}) => void): void;

    /**
     * Retrieves a bunch of values from multiple keys.
     * @param keys all the keys that needs to be fetched
     */
    getMulti(keys: string[], cb: (this: undefined, err: any, data: {[key: string]: any}) => void): void;

    /**
     * Stores a new value in Memcached.
     *
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    set(key: string, value: any, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Replaces the value in memcached.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    replace(key: string, value: any, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Add the value, only if it's not in memcached already.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    add(key: string, value: any, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Add the value, only if it matches the given CAS value.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    cas(key: string, value: any, cas: string, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Add the given value string to the value of an existing item.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    append(key: string, value: any, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Add the given value string to the value of an existing item.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    prepend(key: string, value: any, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Increment a given key.
     * @param key The key
     * @param amount The increment
     */
    incr(key: string, amount: number, cb: (this: Memcached.CommandData, err: any, result: boolean|number) => void): void;

    /**
     * Decrement a given key.
     * @param key The key
     * @param amount The decrement
     */
    decr(key: string, amount: number, cb: (this: Memcached.CommandData, err: any, result: boolean|number) => void): void;

    /**
     * Remove the key from memcached.
     * @param key The key
     */
    del(key: string, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    /**
     * Retrieves the version number of your server.
     */
    version(cb: (err: any, version: Memcached.VersionData[]) => void): void;

    /**
     * Retrieves your stats settings.
     */
    settings(cb: (err: any, settings: Memcached.StatusData[]) => void): void;

    /**
     * Retrieves stats from your memcached server.
     */
    stats(cb: (err: any, stats: Memcached.StatusData[]) => void): void;

    /**
     * Retrieves stats slabs information.
     */
    slabs(cb: (err: any, stats: Memcached.StatusData[]) => void): void;

    /**
     * Retrieves stats items information.
     */
    items(cb: (err: any, stats: Memcached.StatusData[]) => void): void;

    /**
     * Inspect cache, see examples for a detailed explanation.
     */
    cachedump(server: string, slabid: number, number: number, cb: (err: any, cachedump: Memcached.CacheDumpData|Memcached.CacheDumpData[]) => void): void;

    /**
     * Flushes the memcached server.
     */
    flush(cb: (this: undefined, err: any, results: boolean[]) => void): void;

    /**
     * Register event listener
     */
    on(event: Memcached.EventNames, cb: (err: Memcached.IssueData) => void): this;

    /**
     * Closes all active memcached connections.
     */
    end(): void;
}

declare namespace Memcached {
    interface IssueData {
        server: string;
        tokens: [string, string];
        messages: string[];
        failures ?: number | undefined;
        totalFailures ?: number | undefined;
        totalReconnectsAttempted ?: number | undefined;
        totalReconnectsSuccess ?: number | undefined;
        totalReconnectsFailed ?: number | undefined;
        totalDownTime ?: number | undefined;
    }

    interface CommandData {
        start: number;
        execution: number;
        callback(...args: any[]): any;
        type: string;
        command: string;
        validate: Array<[string, (...args: any[]) => any]>;
        cas ?: string | undefined;
        redundancyEnabled ?: boolean | undefined;
        key ?: string | undefined;
        value ?: any;
        lifetime ?: number | undefined;
    }

    interface StatusData {
        server ?: string | undefined;
        [key: string]: string|boolean|number|undefined;
    }

    interface VersionData extends StatusData {
        version: string;
        major: string;
        minor: string;
        bugfix: string;
    }

    interface CacheDumpData {
        key: string;
        b: number;
        s: number;
    }

    /**
     * <ul>
     *     <li><b>issue</b> a issue occurred on a server, we are going to attempt a retry next.</li>
     *     <li><b>failure</b> a server has been marked as failure or dead.</li>
     *     <li><b>reconnecting</b> we are going to attempt to reconnect the to the failed server.</li>
     *     <li><b>reconnect</b> successfully reconnected to the memcached server.</li>
     *     <li><b>remove</b> removing the server from our consistent hashing.</li>
     * </ul>
     */
    type EventNames = "issue" | "failure" | "reconnecting" | "reconnect" | "remove";

    /**
     * Declaration for single server or Memcached cluster location
     *
     * to connect to a single server use
     * "127.0.0.1:11211"
     *
     * to connect to a cluster of Memcached servers use
     * ["127.0.0.1:11211","127.0.0.1:11212"]
     *
     * to connect to servers with weight use
     * {"127.0.0.1:11211": 1,"127.0.0.1:11212": 2}
     */
    type Location = string | string[] | {[server: string]: number};

    interface options {
        /**
         * 250, the maximum key size allowed.
         */
        maxKeySize ?: number | undefined;
        /**
         * 2592000, the maximum expiration time of keys (in seconds).
         */
        maxExpiration ?: number | undefined;
        /**
         * 1048576, the maximum size of a value.
         */
        maxValue ?: number | undefined;
        /**
         * 10, the maximum size of the connection pool.
         */
        poolSize ?: number | undefined;
        /**
         * md5, the hashing algorithm used to generate the hashRing values.
         */
        algorithm ?: string | undefined;
        /**
         * 18000000, the time between reconnection attempts (in milliseconds).
         */
        reconnect ?: number | undefined;
        /**
         * 5000, the time after which Memcached sends a connection timeout (in milliseconds).
         */
        timeout ?: number | undefined;
        /**
         * 5, the number of socket allocation retries per request.
         */
        retries ?: number | undefined;
        /**
         * 5, the number of failed-attempts to a server before it is regarded as 'dead'.
         */
        failures ?: number | undefined;
        /**
         * 30000, the time between a server failure and an attempt to set it up back in service.
         */
        retry ?: number | undefined;
        /**
         * false, if true, authorizes the automatic removal of dead servers from the pool.
         */
        remove ?: boolean | undefined;
        /**
         * undefined, an array of server_locations to replace servers that fail and that are removed from the consistent hashing scheme.
         */
        failOverServers ?: string|string[] | undefined;
        /**
         * true, whether to use md5 as hashing scheme when keys exceed maxKeySize.
         */
        keyCompression ?: boolean | undefined;
        /**
         * 5000, the idle timeout for the connections.
         */
        idle ?: number | undefined;
        /**
         * '', sentinel to prepend to all memcache keys for namespacing the entries.
         */
        namespace ?: string | undefined;
    }
}
