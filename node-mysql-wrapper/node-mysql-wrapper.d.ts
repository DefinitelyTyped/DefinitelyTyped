// Type definitions for node-mysql-wrapper
// Project: https://github.com/kataras/node-mysql-wrapper
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='./..//mysql/mysql.d.ts' />
///<reference path='./../bluebird/bluebird.d.ts' />

declare module "node-mysql-wrapper" {
	import * as Mysql from 'mysql';
	import * as Promise from 'bluebird';

	var EQUAL_TO_PROPERTY_SYMBOL: string;

	interface Map<T> {
		[index: string]: T;
	}

	class MysqlUtil {
		constructor();
		static copyObject<T>(object: T): T;
		static toObjectProperty(columnKey: any): string;
		static toRowProperty(objectKey: string): string;
		static forEachValue<T, U>(map: Map<T>, callback: (value: T) => U): U;
		static forEachKey<T, U>(map: Map<T>, callback: (key: string) => U): U;
	}

	interface ICriteria {
		rawCriteriaObject: any;
		tables: string[];
		noDatabaseProperties: string[];
		whereClause: string;
	}
	class Criteria implements ICriteria {
		rawCriteriaObject: any;
		tables: string[];
		noDatabaseProperties: string[];
		whereClause: string;
		constructor(rawCriteriaObject: any, tables: string[], noDatabaseProperties: string[], whereClause: string);
	}
	class CriteriaBuilder {
		private _table;
		constructor(table: MysqlTable);
		build(rawCriteriaObject: any): Criteria;
	}

	class MysqlConnection {
		connection: Mysql.IConnection;
		eventTypes: string[];
		tableNamesToUseOnly: any[];
		tables: MysqlTable[];
		constructor(connection: string | Mysql.IConnection);
		create(connection: string | Mysql.IConnection): void;
		attach(connection: Mysql.IConnection): void;
		end(callback?: (error: any) => void): void;
		destroy(): void;
		link(readyCallback?: () => void): Promise<void>;
		useOnly(...tables: any[]): void;
		fetchDatabaseInfornation(): Promise<void>;
		escape(val: string): string;
		notice(tableWhichCalled: string, queryStr: string, parsedResults: any[]): void;
		watch(tableName: string, evtType: any, callback: (parsedResults: any[]) => void): void;
		unwatch(tableName: string, evtType: string, callbackToRemove: (parsedResults: any[]) => void): void;
		query(queryStr: string, callback: (err: Mysql.IError, results: any) => any, queryArguments?: any[]): void;
		table(tableName: string): MysqlTable;
	}

	class MysqlTable {
		private _name;
		private _connection;
		private _columns;
		private _primaryKey;
		private _criteriaBuilder;
		constructor(tableName: string, connection: MysqlConnection);
		columns: string[];
		primaryKey: string;
		connection: MysqlConnection;
		name: string;
		on(evtType: string, callback: (parsedResults: any[]) => void): void;
		off(evtType: string, callbackToRemove: (parsedResults: any[]) => void): void;
		has(extendedFunctionName: string): boolean;
		extend(functionName: string, theFunction: (...args: any[]) => any): void;
		objectFromRow(row: any): any;
		rowFromObject(obj: any): any;
		getRowAsArray(jsObject: any): Array<any>;
		getPrimaryKeyValue(jsObject: any): number | string;
		parseQueryResult(result: any, criteria: ICriteria): Promise<any>;
		find(criteriaRawJsObject: any, callback?: (_results: any[]) => any): Promise<any[]>;
		findById(id: number | string, callback?: (result: Object) => any): Promise<Object>;
		findAll(callback?: (_results: any[]) => any): Promise<any[]>;
		save(criteriaRawJsObject: any, callback?: (_result: any) => any): Promise<any>;
		safeRemove(id: number | string, callback?: (_result: {
			affectedRows;
			table;
		}) => any): Promise<{
			affectedRows;
			table;
		}>;
		remove(criteriaRawJsObject: any, callback?: (_result: {
			affectedRows;
			table;
		}) => any): Promise<{
			affectedRows;
			table;
		}>;
	}

	class MysqlWrapper {
		connection: MysqlConnection;
		readyListenerCallbacks: Function[];
		constructor(connection?: MysqlConnection);
		static when(..._promises: Promise<any>[]): Promise<any>;
		setConnection(connection: MysqlConnection): void;
		useOnly(...useTables: any[]): void;
		has(tableName: string, functionName?: string): boolean;
		ready(callback: () => void): void;
		table(tableName: string): MysqlTable;
		noticeReady(): void;
		removeReadyListener(callback: () => void): void;
		query(queryStr: string, callback: (err: Mysql.IError, results: any) => any, queryArguments?: any[]): void;
		destroy(): void;
		end(maybeAcallbackError: (err: any) => void): void;
	}

    function wrap(mysqlUrlOrObjectOrMysqlAlreadyConnection: Mysql.IConnection | string, ...useTables: any[]): MysqlWrapper;

}
