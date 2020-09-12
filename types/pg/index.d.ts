// Type definitions for pg 7.14
// Project: http://github.com/brianc/node-postgres
// Definitions by: Phips Peter <https://github.com/pspeter3>, Ravi van Rooijen <https://github.com/HoldYourWaffle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import events = require('events');
import stream = require('stream');
import pgTypes = require('pg-types');

import { ConnectionOptions } from 'tls';

export interface ClientConfig {
    user?: string;
    database?: string;
    password?: string;
    port?: number;
    host?: string;
    connectionString?: string;
    keepAlive?: boolean;
    stream?: stream.Duplex;
    statement_timeout?: false | number;
    parseInputDatesAsUTC?: boolean;
    ssl?: boolean | ConnectionOptions;
    query_timeout?: number;
    keepAliveInitialDelayMillis?: number;
    idle_in_transaction_session_timeout?: number;
    application_name?: string;
}

export type ConnectionConfig = ClientConfig;

export interface Defaults extends ClientConfig {
    poolSize?: number;
    poolIdleTimeout?: number;
    reapIntervalMillis?: number;
    binary?: boolean;
    parseInt8?: boolean;
}

export interface PoolConfig extends ClientConfig {
    // properties from module 'node-pool'
    max?: number;
    min?: number;
    connectionTimeoutMillis?: number;
    idleTimeoutMillis?: number;
    log?: (...messages: any[]) => void;
    Promise?: PromiseConstructorLike;
}

export interface QueryConfig<I extends any[] = any[]> {
    name?: string;
    text: string;
    values?: I;
}

export interface Submittable {
    submit: (connection: Connection) => void;
}

export interface QueryArrayConfig<I extends any[] = any[]> extends QueryConfig<I> {
    rowMode: 'array';
}

export interface FieldDef {
    name: string;
    tableID: number;
    columnID: number;
    dataTypeID: number;
    dataTypeSize: number;
    dataTypeModifier: number;
    format: string;
}

export interface QueryResultBase {
    command: string;
    rowCount: number;
    oid: number;
    fields: FieldDef[];
}

export interface QueryResultRow {
    [column: string]: any;
}

export interface QueryResult<R extends QueryResultRow = any> extends QueryResultBase {
    rows: R[];
}

export interface QueryArrayResult<R extends any[] = any[]> extends QueryResultBase {
    rows: R[];
}

export interface Notification {
    processId: number;
    channel: string;
    payload?: string;
}

export interface ResultBuilder<R extends QueryResultRow = any> extends QueryResult<R> {
    addRow(row: R): void;
}

export interface QueryParse {
    name: string;
    text: string;
    types: string[];
}

export interface BindConfig {
    portal?: string;
    statement?: string;
    binary?: string;
    values?: Array<Buffer | null | undefined | string>;
}

export interface ExecuteConfig {
    portal?: string;
    rows?: string;
}

export interface MessageConfig {
    type: string;
    name?: string;
}

export class Connection extends events.EventEmitter {
    readonly stream: stream.Duplex;

    constructor(config?: ConnectionConfig);

    bind(config: BindConfig | null, more: boolean): void;
    execute(config: ExecuteConfig | null, more: boolean): void;
    parse(query: QueryParse, more: boolean): void;

    query(text: string): void;

    describe(msg: MessageConfig, more: boolean): void;
    close(msg: MessageConfig, more: boolean): void;

    flush(): void;
    sync(): void;
    end(): void;
}

/**
 * {@link https://node-postgres.com/api/pool}
 */
export class Pool extends events.EventEmitter {
    /**
     * Every field of the config object is entirely optional.
     * The config passed to the pool is also passed to every client
     * instance within the pool when the pool creates that client.
     */
    constructor(config?: PoolConfig);

    readonly totalCount: number;
    readonly idleCount: number;
    readonly waitingCount: number;

    connect(): Promise<PoolClient>;
    connect(callback: (err: Error, client: PoolClient, done: (release?: any) => void) => void): void;

    end(): Promise<void>;
    end(callback: () => void): void;

    query<T extends Submittable>(queryStream: T): T;
    // tslint:disable:no-unnecessary-generics
    query<R extends any[] = any[], I extends any[] = any[]>(
        queryConfig: QueryArrayConfig<I>,
        values?: I,
    ): Promise<QueryArrayResult<R>>;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryConfig: QueryConfig<I>,
    ): Promise<QueryResult<R>>;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryTextOrConfig: string | QueryConfig<I>,
        values?: I,
    ): Promise<QueryResult<R>>;
    query<R extends any[] = any[], I extends any[] = any[]>(
        queryConfig: QueryArrayConfig<I>,
        callback: (err: Error, result: QueryArrayResult<R>) => void,
    ): void;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryTextOrConfig: string | QueryConfig<I>,
        callback: (err: Error, result: QueryResult<R>) => void,
    ): void;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryText: string,
        values: I,
        callback: (err: Error, result: QueryResult<R>) => void,
    ): void;
    // tslint:enable:no-unnecessary-generics

    on(event: 'error', listener: (err: Error, client: PoolClient) => void): this;
    on(event: 'connect' | 'acquire' | 'remove', listener: (client: PoolClient) => void): this;
}

export class ClientBase extends events.EventEmitter {
    constructor(config?: string | ClientConfig);

    connect(): Promise<void>;
    connect(callback: (err: Error) => void): void;

    query<T extends Submittable>(queryStream: T): T;
    // tslint:disable:no-unnecessary-generics
    query<R extends any[] = any[], I extends any[] = any[]>(
        queryConfig: QueryArrayConfig<I>,
        values?: I,
    ): Promise<QueryArrayResult<R>>;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryConfig: QueryConfig<I>,
    ): Promise<QueryResult<R>>;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryTextOrConfig: string | QueryConfig<I>,
        values?: I,
    ): Promise<QueryResult<R>>;
    query<R extends any[] = any[], I extends any[] = any[]>(
        queryConfig: QueryArrayConfig<I>,
        callback: (err: Error, result: QueryArrayResult<R>) => void,
    ): void;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryTextOrConfig: string | QueryConfig<I>,
        callback: (err: Error, result: QueryResult<R>) => void,
    ): void;
    query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryText: string,
        values: any[],
        callback: (err: Error, result: QueryResult<R>) => void,
    ): void;
    // tslint:enable:no-unnecessary-generics

    copyFrom(queryText: string): stream.Writable;
    copyTo(queryText: string): stream.Readable;

    pauseDrain(): void;
    resumeDrain(): void;

    escapeIdentifier(str: string): string;
    escapeLiteral(str: string): string;

    on(event: 'drain', listener: () => void): this;
    on(event: 'error' | 'notice', listener: (err: Error) => void): this;
    on(event: 'notification', listener: (message: Notification) => void): this;
    // tslint:disable-next-line unified-signatures
    on(event: 'end', listener: () => void): this;
}

export class Client extends ClientBase {
    constructor(config?: string | ClientConfig);

    end(): Promise<void>;
    end(callback: (err: Error) => void): void;
}

export interface PoolClient extends ClientBase {
    release(err?: Error | boolean): void;
}

export class Query<R extends QueryResultRow = any, I extends any[] = any> extends events.EventEmitter
    implements Submittable {
    constructor(queryTextOrConfig?: string | QueryConfig<I>, values?: I);
    submit: (connection: Connection) => void;
    on(event: 'row', listener: (row: R, result?: ResultBuilder<R>) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'end', listener: (result: ResultBuilder<R>) => void): this;
}

export class Events extends events.EventEmitter {
    on(event: 'error', listener: (err: Error, client: Client) => void): this;
}

export const types: typeof pgTypes;

export const defaults: Defaults & ClientConfig;

import * as Pg from '.';

export const native: typeof Pg | null;
