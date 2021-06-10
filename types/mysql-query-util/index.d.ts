// Type definitions for mysql-query-util 0.2
// Project: https://github.com/uchennaemeruche/mysql-util#readme
// Definitions by: Uchenna Emeruche <https://github.com/uchennaemeruche>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function _delete(options: IterableOptions): Promise<any>;
declare function _delete(tableName: string, params?: Array<Array<string | number>>): Promise<any>;

export function setConnection(options: connectionString): any;

export function select(options: IterableOptions): Promise<any>;
export function select(tableName: string, fields?: string[], params?: Array<Array<string | number>>): Promise<any>;

export function insert(options: IterableOptions): Promise<any>;
export function insert(tableName: string, data: object): Promise<any>;

export function update(option: IterableOptions): Promise<any>;
export function update(tableName: string, data: object, params: Array<Array<string | number>>): Promise<any>;

export { _delete as delete };

export function query(queryType: string, tableName: string, fields?: any, data?: any, params?: any): Promise<any>;

export interface IterableOptions {
    tableName: string;
    fields?: string[];
    params?: Array<Array<string | number>>;
    data?: object;
}

export interface connectionString {
    /**
     * The hostname of the database you are connecting to. (Default: localhost)
     */
    host: string;
    /**
     * The MySQL user to authenticate as
     */
    user: string;
    /**
     * The password of that MySQL user
     */
    password: string;
    /**
     * Name of the database to use for this connection
     */
    database: string;
    /**
     * The maximum number of connections to create at once. (Default: 10)
     */
    connectionLimit?: number;
}
