// Type definitions for better-sqlite3 3.1
// Project: http://github.com/JoshuaWise/better-sqlite3
// Definitions by: Ben Davies <https://github.com/Morfent>
//                 Mathew Rumsey <https://github.com/matrumz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Integer from 'integer';

interface RunResult {
	changes: number;
	lastInsertROWID: Integer.IntLike;
}

declare class Statement {
	database: Database;
	source: string;
	returnsData: boolean;
	constructor(db: Database, sources: string[]);

	run(...params: any[]): RunResult;
	get(...params: any[]): any;
	all(...params: any[]): any[];
	each(params: any, cb: (row: any) => void): void;
	each(cb: (row: any) => void): void;
	each(...params: any[]): void;
	pluck(toggleState?: boolean): this;
	bind(...params: any[]): this;
	safeIntegers(toggleState?: boolean): this;
}

declare class Transaction {
	database: Database;
	source: string;
	constructor(db: Database, sources: string[]);

	run(...params: any[]): RunResult;
	bind(...params: any[]): this;
	safeIntegers(toggleState?: boolean): this;
}

interface DatabaseOptions {
	memory?: boolean;
	readonly?: boolean;
	fileMustExist?: boolean;
}

interface RegistrationOptions {
	name?: string;
	varargs?: boolean;
	deterministic?: boolean;
	safeIntegers?: boolean;
}

interface Database {
	memory: boolean;
	readonly: boolean;
	name: string;
	open: boolean;
	inTransaction: boolean;

	prepare(source: string): Statement;
	transaction(sources: string[]): Transaction;
	exec(source: string): this;
	pragma(source: string, simplify?: boolean): any;
	checkpoint(databaseName?: string): this;
	register(cb: (...params: any[]) => any): this;
	register(options: RegistrationOptions, cb: (...params: any[]) => any): this;
	close(): this;
	defaultSafeIntegers(toggleState?: boolean): this;
}

declare class SqliteError implements Error {
	name: string;
	message: string;
	code: string;
	constructor(message: string, code: string);
}

interface DatabaseConstructor {
	new(filename: string, options?: DatabaseOptions): Database;
	(filename: string, options?: DatabaseOptions): Database;
	prototype: Database;

	Integer: typeof Integer;
	SqliteError: typeof SqliteError;
}

declare const Database: DatabaseConstructor;
export = Database;
