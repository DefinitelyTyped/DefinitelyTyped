// Type definitions for ibm_db 2.0
// Project: https://github.com/ibmdb/node-ibm_db
// Definitions by: Adam Voga <https://github.com/agov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface ConnStr {
    DATABASE: string;
    HOSTNAME: string;
    PORT: number | string;
    PROTOCOL: string;
    UID: string;
    PWD: string;
}

export interface Options {
    odbc?: ODBC;
    queue?: SimpleQueue | any[];
    fetchMode?: number | null;
    connected?: boolean;
    connectTimeout?: number | null;
    systemNaming?: boolean;
}

export interface DescribeObject {
    database: string;
    schema?: string;
    type?: string;
    table?: string;
    column?: string;
}

export interface PoolOptions {
    idleTimeout?: number;
    autoCleanIdle?: boolean;
    maxPoolSize?: number;
    connectTimeout?: number;
    systemNaming?: any;
}

export class SimpleQueue {
    fifo: any[];
    executing: boolean;
    push(fn: (foo: any, bar: any) => void): void;
    maybeNext(): void;
    next(): void;
} // Class SimpleQueue

export default function(options?: Options): Database;

export class Database implements Options {
    odbc: ODBC;
    queue: SimpleQueue | any[];
    fetchMode: number | null;
    connected: boolean;
    connectTimeout: number | null;
    conn?: ODBCConnection;

    constructor(options?: Options);

    open(connStr: string | ConnStr): Promise<ODBCConnection>;
    open(connStr: string | ConnStr, cb: (err: Error, conn?: ODBCConnection) => void): void;

    openSync(connStr: string | ConnStr): boolean;

    close(cb?: (err: Error, db: Database) => any): void;
    close(): Promise<void>;

    closeSync(): boolean;

    query(query: string, params: any[], cb: (err: Error, res: any[]) => void): void;
    query(query: string | {sql: string, params: any[]}, cb: (err: Error, res: any[]) => void): void;
    query(query: string | {sql: string, params: any[]}, params?: any[]): Promise<any[]>;

    queryResult(query: string, params: any[], cb: (err: Error, res: ODBCResult) => void): void;
    queryResult(query: string | {sql: string, params: any[]}, cb: (err: Error, res: ODBCResult) => void): void;
    queryResult(query: string, params?: any[]): Promise<ODBCResult>;

    queryResultSync(query: string | {sql: string, params: any[]}, params?: any[]): ODBCResult;

    querySync(query: string | {sql: string, params: any[]}, params?: any[]): any[];

    queryStream(sql: string, params: any[]): any; // TODO: add types from stream

    fetchStreamingResults(results: any, stream: any): any; // TODO: add types from stream

    beginTransaction(cb: (err: Error, res: any) => void): void;
    beginTransaction(): Promise<void>;

    endTransaction(rollback: boolean, cb: (foo: any, bar: any) => any): any;
    endTransaction(): Promise<void>;

    commitTransaction(cb: (err: Error, res: any) => void): void;
    commitTransaction(): Promise<void>;

    rollbackTransaction(cb: (err: Error, res: any) => void): void;
    rollbackTransaction(): Promise<void>;

    beginTransactionSync(): Database;

    endTransactionSync(rollback: boolean): Database;

    commitTransactionSync(): Database;

    rollbackTransactionSync(): Database;

    columns(catalog: string | null, schema: string | null, table: string | null, column: string | null, cb: (error: Error, res: any[]) => void): void;

    tables(catalog: string | null, schema: string | null, table: string | null, type: string | null, cb: (error: Error, res: any[]) => void): void;

    describe(obj: DescribeObject,  cb: (error: Error, res: any[]) => void): void;

    prepare(sql: string, cb: (err: Error, stmt: ODBCStatement) => void): void;
    prepare(sql: string): Promise<ODBCStatement>;

    prepareSync(sql: string): ODBCStatement;

    setIsolationLevel(isolationLevel: number): boolean;
} // Class Database

export class ODBC {
    SQSQL_CLOSE?: string;
    SQL_DROP?: string;
    SQL_UNBIND?: string;
    SQL_RESET_PARAMS?: string;
    SQL_DESTROY?: string;
    FETCH_ARRAY?: string;
    FETCH_OBJECT?: string;
} // Class ODBC

export let SQSQL_CLOSE: string;
export let SQL_DROP: string;
export let SQL_UNBIND: string;
export let SQL_RESET_PARAMS: string;
export let SQL_DESTROY: string;
export let FETCH_ARRAY: string;
export let FETCH_OBJECT: string;

export class ODBCConnection {
    loginTimeout: number;
    connectTimeout: number;
    connected: boolean;
    systemNaming: boolean;
} // Class ODBCConnection

export class ODBCStatement {
    queue: SimpleQueue;
    bindQueue: SimpleQueue;

    // TODO: type of outparams is unknown
    _execute(cb: (err: Error, result: any[]) => void): void;

    _executeSync(params?: any[]): ODBCResult;

    _executeDirect(sql: string, cb: (err: Error, result: any[]) => void): void;

    // _executeDirectSync // TODO: Add missing piece

    _executeNonQuery(cb: (err: Error, res: any[]) => void): void;

    // _executeNonQuerySync // TODO: Add missing piece

     _prepare(sql: string, cb: (err: Error) => void): void;

     _bind(params: any[], cb: (err: Error) => void): void;

     _bindSync(ary: any[]): void;

    execute(params: any[], cb: (err: Error, result: any[], outparams: any) => void): void; // TODO: type of outparams is unknown
    execute(cb: (err: Error, result: any[], outparams: any) => void): void;
    execute(params: any[]): Promise<{result: any[], outparams: any}>;

    executeSync(params?: any[]): ODBCResult;

    executeDirect(sql: string, cb: (err: Error, result: any[]) => void): void;

    executeNonQuery(params: any[], cb: (err: Error, res: any[]) => void): void;
    executeNonQuery(cb: (err: Error, res: any[]) => void): void;
    executeNonQuery(params?: any[]): Promise<void>;

    prepare(sql: string, cb: (err: Error, result: any[]) => void): void;

    bind(ary: any[], cb: (err: Error) => void): void;

    bindSync(ary: any[]): void;
} // Class ODBCStatement

export class ODBCResult {
    fetchMode: number;
    fetchSync(): any[];
    fetchAllSync(): any[];
    moreResultsSync(): any[];
    closeSync(): void;
    getColumnMetadataSync(): any[];
    fetchAll(option: object, cb: (err: Error, data: any[], noOfColumns?: number) => void): void;
} // Class ODBCResult

export function getElapsedTime(): string;

export function debug(x: boolean): void;

export function open(connStr: string | ConnStr, options: Options, cb: (err: Error, db: Database) => void): void;
export function open(connStr: string | ConnStr, cb: (err: Error, db: Database) => void): void;
export function open(connStr: string | ConnStr, options?: Options): Promise<Database>;

export function openSync(connStr: string | ConnStr, options?: Options): Database;

export function close(db: Database): void;

export class Pool implements PoolOptions {
  idleTimeout?: number;
  autoCleanIdle?: boolean;
  maxPoolSize?: number;
  connectTimeout?: number;
  systemNaming?: any;

  options: PoolOptions;
  index: number;
  availablePool: object;
  usedPool: object;
  poolsize: number;
  odbc: ODBC;
  constructor(options?: PoolOptions)
    open(connStr: string, cb: (err: Error, db: Database) => void): void;
    init(count: number, connStr: string): boolean;
    setMaxPoolSize(count: number): boolean;
    setConnectTimeout(timeout: number): boolean;
    cleanup(connStr: string): boolean;
    close(cb: (foo: any, bar: any) => any): void;
} // Class Pool
