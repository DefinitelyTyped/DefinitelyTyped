// Type definitions for node_modules.mysql-await 2.2.3
// Project: https://github.com/om-mani-padme-hum/mysql-await



import {Connection, ConnectionConfig, MysqlError, Pool, PoolConfig, QueryOptions} from "mysql";

export interface ConnectionAwait extends Connection{
	awaitBeginTransaction(): Promise<MysqlError | void>;

	awaitchangeUser(options: ConnectionOptions): Promise<MysqlError | void>;

	awaitCommit(): Promise<MysqlError | void>;

	awaitConnect(): Promise<MysqlError | void>;

	awaitDestroy(): Promise<MysqlError | void>;

	awaitEnd(): Promise<MysqlError | void>;

	awaitQuery(options: string | QueryOptions, values?: any): Promise<MysqlError | void | any>;

	awaitRollback(): Promise<void>
}

export interface PoolAwait extends Pool{

	awaitEnd(): Promise<MysqlError | void>;

	awaitGetConnection(): Promise<MysqlError | void>;

	awaitQuery(options: string | QueryOptions, values?: any): Promise<MysqlError | void | any>;

}

export function createConnection(connectionUri: string | ConnectionConfig): ConnectionAwait;

export function createPool(config: PoolConfig | string): PoolAwait;

export function format(sql: string, values?: any[], stringifyObjects?: boolean, timeZone?: string): string;

