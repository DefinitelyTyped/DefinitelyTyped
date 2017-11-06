// Type definitions for promise-mysql 3.1
// Project: https://github.com/lukeb-uk/node-promise-mysql#readme
// Definitions by: Dave Welsh <https://github.com/move-zig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as mysql from 'mysql';

export function createConnection(connectionUri: string | mysql.ConnectionConfig): Promise<Connection>;

export function createPool(config: mysql.PoolConfig | string): Pool;

export { Types, escape, escapeId, format } from 'mysql';

interface QueryFunction {
    (query: mysql.Query): Promise<any>;

    (options: string | mysql.QueryOptions): Promise<any>;

    (options: string, values: any): Promise<any>;
}

export interface Connection {
    query: QueryFunction;

    beginTransaction(options?: mysql.QueryOptions): Promise<void>;

    commit(options?: mysql.QueryOptions): Promise<void>;

    rollback(options?: mysql.QueryOptions): Promise<void>;

    changeUser(options?: mysql.QueryOptions): Promise<void>;

    ping(options?: mysql.QueryOptions): Promise<void>;

    statistics(options?: mysql.QueryOptions): Promise<void>;

    end(options?: mysql.QueryOptions): Promise<void>;

    destroy(): void;

    pause(): void;

    resume(): void;

    escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;

    escapeId(value: string, forbidQualified?: boolean): string;

    format(sql: string, values: any[], stringifyObjects?: boolean, timeZone?: string): string;
}

export interface PoolConnection extends Connection {
    release(): Promise<any>;
    
    destroy(): Promise<any>;
}

export interface Pool {
    getConnection(): Promise<PoolConnection>;

    releaseConnection(connection: PoolConnection): void;

    query: QueryFunction;

    end(options?: mysql.QueryOptions): Promise<void>

    release(options?: mysql.QueryOptions): Promise<void>

    escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
    
    escapeId(value: string, forbidQualified?: boolean): string;

    on(ev: 'connection' | 'acquire' | 'release', callback: (connection: mysql.PoolConnection) => void): mysql.Pool;
    
    on(ev: 'error', callback: (err: mysql.MysqlError) => void): mysql.Pool;
    
    on(ev: 'enqueue', callback: (err?: mysql.MysqlError) => void): mysql.Pool;
    
    on(ev: string, callback: (...args: any[]) => void): mysql.Pool;
}




