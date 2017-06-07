// Type definitions for rethinkdbdash 2.3.x
// Project: https://github.com/neumino/rethinkdbdash
// Definitions by: Bazyli Brzóska <https://github.com/niieani>
// Definitions by: Marshall Cottrell <https://github.com/marshall007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Reference: https://github.com/neumino/rethinkdbdash

/// <reference types="node" />

import * as Bluebird from 'bluebird';
import { EventEmitter } from 'events';
import { Readable, Transform, Writable } from 'stream';

import core from 'rethinkdb-core';

declare module 'rethinkdb-core' {
    export interface ConnectOptions {
        
        /**
         * The driver will regularly pull data from the table server_status to keep a list of updated hosts (default: `false`).
         */
        discovery: boolean;
        
        /**
         * Whether or not a connection pool should be used (default: `true`).
         */
        pool: boolean;
        
        /**
         * Minimum number of connections available in the pool (default: `50`).
         */
        buffer: number;
        
        /**
         * Maximum number of connections available in the pool (default: `1000`).
         */
        max: number;
        
        /**
         * The connection will be pinged every `pingInterval` seconds (default: `-1`).
         */
        pingInterval: number;
        
        /**
         * Wait time in milliseconds before reconnecting in case of an error (default: `1000`).
         */
        timeoutError: number;
        
        /**
         * Wait time in milliseconds before a connection that hasn't been used is removed from the pool (default: `60  * 60  * 1000`).
         */
        timeoutGb: number;
        
        /**
         * The maximum timeout before trying to reconnect is `2^maxExponent  * timeoutError` (default: `6`, aka ~60 seconds).
         */
        maxExponent: number;
        
        /**
         * Silence logging to `console.error` (default: `false`).
         */
        silent: boolean;
        
        /**
         * An array of hosts representing RethinkDB nodes to connect to.
         */
        servers: { host: string, port: number }[];
        
        /**
         * Whether queries should be run implicitly by calling `.then()` or using `yield` (default: `true`).
         */
        optionalRun: boolean;

        /**
         * When true, the driver will not automatically coerce cursor results to an array (default: `false`).
         */
        cursor: boolean;
        
    }

    export interface RunOptions {

        /**
         * When true, the driver will not automatically coerce cursor results to an array (default: `false`).
         */
        cursor: boolean;

    }

    namespace r {
        export interface Run<T> {

            /**
             * Run a query and return it as a `Readable` stream.
             */
            toStream(connection?: core.Connection, type?: { readable: true }): Readable;
            toStream(type?: { readable: true }): Readable;

            /**
             * Create a `Writable` stream for piping data into a table.
             */
            toStream(connection: core.Connection, type: { writable: true }): Writable;
            toStream(type: { writable: true }): Writable;

            toStream(connection: core.Connection, type: { transform: true }): Transform;
            toStream(type: { transform: true }): Transform;

            run(options?: core.RunOptions): Bluebird<T>;

        }
    }
}

declare function rethinkdbdash(options?: core.ConnectOptions): rethinkdbdash.ReqlClient;

declare namespace rethinkdbdash {

    export interface PoolMaster extends EventEmitter {

        drain(): void;

        getLength(): number;

        getAvailableLength(): number;

    }

    export interface ReqlClient extends core.ReqlClient {
        
        getPoolMaster(): PoolMaster;

    }

    export interface Connection extends core.Connection { }

    export interface CursorResult<T> extends core.CursorResult<T> { }
    export interface ArrayResult<T> extends core.ArrayResult<T> { }

}

export = rethinkdbdash;
