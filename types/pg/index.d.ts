// Type definitions for pg 7.1
// Project: https://github.com/brianc/node-postgres
// Definitions by: Phips Peter <https://github.com/pspeter3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import events = require("events");
import stream = require("stream");
import pgTypes = require("pg-types");

export interface ConnectionConfig {
    user?: string;
    database?: string;
    password?: string;
    port?: number;
    host?: string;
    connectionString?: string;
}

export interface Defaults extends ConnectionConfig {
    poolSize?: number;
    poolIdleTimeout?: number;
    reapIntervalMillis?: number;
    binary?: boolean;
    parseInt8?: boolean;
}

import { TlsOptions } from "tls";

export interface ClientConfig extends ConnectionConfig {
    ssl?: boolean | TlsOptions;
}

export interface PoolConfig extends ClientConfig {
      // properties from module 'node-pool'
      max?: number;
      min?: number;
      connectionTimeoutMillis?: number;
      idleTimeoutMillis?: number;

      application_name?: string;
      Promise?: PromiseConstructorLike;
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

export interface Notification {
    processId: number;
    channel: string;
    payload?: string;
}

export interface ResultBuilder extends QueryResult {
    addRow(row: any): void;
}

export class Pool extends events.EventEmitter {
    // `new Pool('pg://user@localhost/mydb')` is not allowed.
    // But it passes type check because of issue:
    // https://github.com/Microsoft/TypeScript/issues/7485
    constructor(config?: PoolConfig);

    readonly totalCount: number;
    readonly idleCount: number;
    readonly waitingCount: number;

    connect(): Promise<Client>;
    connect(callback: (err: Error, client: Client, done: () => void) => void): void;

    end(): Promise<void>;
    end(callback: () => void): void;

    query(queryStream: QueryConfig & stream.Readable): stream.Readable;
    query(queryConfig: QueryConfig): Promise<QueryResult>;
    query(queryText: string, values?: any[]): Promise<QueryResult>;
    query(queryTextOrConfig: string | QueryConfig, callback: (err: Error, result: QueryResult) => void): Query;
    query(queryText: string, values: any[], callback: (err: Error, result: QueryResult) => void): Query;

    on(event: "error", listener: (err: Error, client: Client) => void): this;
    on(event: "connect" | "acquire", listener: (client: Client) => void): this;
}

export class Client extends events.EventEmitter {
    constructor(config: ClientConfig);

    connect(): Promise<Client>;
    connect(callback: (err: Error) => void): void;

    end(): Promise<void>;
    end(callback: (err: Error) => void): void;

    release(err?: Error): void;

    query(queryStream: QueryConfig & stream.Readable): stream.Readable;
    query(queryConfig: QueryConfig): Promise<QueryResult>;
    query(queryText: string, values?: any[]): Promise<QueryResult>;
    query(queryTextOrConfig: string | QueryConfig, callback: (err: Error, result: QueryResult) => void): Query;
    query(queryText: string, values: any[], callback: (err: Error, result: QueryResult) => void): Query;

    copyFrom(queryText: string): stream.Writable;
    copyTo(queryText: string): stream.Readable;

    pauseDrain(): void;
    resumeDrain(): void;

    on(event: "drain", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "notification" | "notice", listener: (message: Notification) => void): this;
    // tslint:disable-next-line unified-signatures
    on(event: "end", listener: () => void): this;
}

export class Query extends events.EventEmitter {
    on(event: "row", listener: (row: any, result?: ResultBuilder) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "end", listener: (result: ResultBuilder) => void): this;
}

export class Events extends events.EventEmitter {
    on(event: "error", listener: (err: Error, client: Client) => void): this;
}

export const types: typeof pgTypes;

export const defaults: Defaults & ClientConfig;

import * as Pg from 'pg';

export const native: typeof Pg | null;
