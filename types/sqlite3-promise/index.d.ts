// Type definitions for node-sqlite3-promise 1.0
// Project: https://github.com/Aminadav/node-sqlite3-promise
// Definitions by: Jonathan Bredin <https://github.com/jonathanlb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import sqlite3 = require('sqlite3');

export class Database extends sqlite3.Database {
	allAsync(sql: string): Promise<any[]>;
	closeAsync(): Promise<void>;
	eachAsync(sql: string, cb?: (this: sqlite3.Statement, err: Error | null, row: any) => void): Promise<number>;
	eachAsync(sql: string, params: any, cb?: (this: sqlite3.Statement, err: Error | null, row: any) => void): Promise<number>;
	execAsync(sql: string): Promise<sqlite3.Statement>;
	getAsync(sql: string): Promise<any>;
	runAsync(sql: string): Promise<void>;
}

export interface Sqlite3Promise {
	Database: typeof Database;

	OPEN_READWRITE: number;
	OPEN_READONLY: number;
	OPEN_CREATE: number;
	OPEN_SHAREDCACHE: number;
	OPEN_PRIVATECACHE: number;
	OPEN_URI: number;

	verbose: () => { type: Sqlite3Promise };
}

export const OPEN_READWRITE: number;
export const OPEN_READONLY: number;
export const OPEN_CREATE: number;
export const OPEN_SHAREDCACHE: number;
export const OPEN_PRIVATECACHE: number;
export const OPEN_URI: number;

export function verbose(): Sqlite3Promise;
