// Type definitions for pg 6.1.0
// Project: https://github.com/brianc/node-postgres
// Definitions by: Phips Peter <http://pspeter3.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../pg-types/pg-types.d.ts" />

declare module "pg" {
    import events = require("events");
    import stream = require("stream");
    import pgTypes = require("pg-types");

    export function connect(connection: string, callback: (err: Error, client: Client, done: (err?: any) => void) => void): void;
    export function connect(config: ClientConfig, callback: (err: Error, client: Client, done: (err?: any) => void) => void): void;
    export function end(): void;

    export interface ConnectionConfig {
        user?: string;
        database?: string;
        password?: string;
        port?: number;
        host?: string;
    }

    export interface Defaults extends ConnectionConfig {
        poolSize?: number;
        poolIdleTimeout?: number;
        reapIntervalMillis?: number;
        binary?: boolean;
        parseInt8?: boolean;
    }

    export interface ClientConfig extends ConnectionConfig {
        ssl?: boolean;
    }

    export interface PoolConfig extends ClientConfig {
        // properties from module 'node-pool'
        max?: number;
        min?: number;
        refreshIdle?: boolean;
        idleTimeoutMillis?: number;
        reapIntervalMillis?: number;
        returnToHead?: boolean;
    }

    export interface QueryConfig {
        name?: string;
        text: string;
        values?: any[];
    }

    export interface QueryResult {
        command: string;
        rowCount: number;
        oid: number;
        rows: any[];
    }

    export interface ResultBuilder extends QueryResult {
        addRow(row: any): void;
    }

    export class Pool extends events.EventEmitter {

        constructor();

        // `new Pool('pg://user@localhost/mydb')` is not allowed.
        // But it passes type check because of issue:
        // https://github.com/Microsoft/TypeScript/issues/7485
        constructor(config: PoolConfig);

        connect(): Promise<Client>;
        connect(callback: (err: Error, client: Client, done: () => void) => void): void;

        end(): Promise<void>;

        query(queryText: string): Promise<QueryResult>;
        query(queryText: string, values: any[]): Promise<QueryResult>;

        query(queryText: string, callback: (err: Error, result: QueryResult) => void): void;
        query(queryText: string, values: any[], callback: (err: Error, result: QueryResult) => void): void;

        public on(event: "error", listener: (err: Error, client: Client) => void): this;
        public on(event: "connect", listener: (client: Client) => void): this;
        public on(event: "acquire", listener: (client: Client) => void): this;
        public on(event: string, listener: Function): this;
    }

    export class Client extends events.EventEmitter {
        constructor(connection: string);
        constructor(config: ClientConfig);

        connect(callback?: (err: Error) => void): void;
        end(): void;
        release(): void;

        query(queryText: string): Promise<QueryResult>;
        query(queryText: string, values: any[]): Promise<QueryResult>;

        query(queryText: string, callback?: (err: Error, result: QueryResult) => void): Query;
        query(config: QueryConfig, callback?: (err: Error, result: QueryResult) => void): Query;
        query(queryText: string, values: any[], callback?: (err: Error, result: QueryResult) => void): Query;

        copyFrom(queryText: string): stream.Writable;
        copyTo(queryText: string): stream.Readable;

        pauseDrain(): void;
        resumeDrain(): void;

        public on(event: "drain", listener: () => void): this;
        public on(event: "error", listener: (err: Error) => void): this;
        public on(event: "notification", listener: (message: any) => void): this;
        public on(event: "notice", listener: (message: any) => void): this;
        public on(event: string, listener: Function): this;
    }

    export class Query extends events.EventEmitter {
        public on(event: "row", listener: (row: any, result?: ResultBuilder) => void): this;
        public on(event: "error", listener: (err: Error) => void): this;
        public on(event: "end", listener: (result: ResultBuilder) => void): this;
        public on(event: string, listener: Function): this;
    }

    export class Events extends events.EventEmitter {
        public on(event: "error", listener: (err: Error, client: Client) => void): this;
        public on(event: string, listener: Function): this;
    }

    export const types: typeof pgTypes;

}
