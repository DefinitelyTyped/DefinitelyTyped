// Type definitions for oracledb v1.5.0
// Project: https://github.com/oracle/node-oracledb
// Definitions by: Richard Natal <https://github.com/Bigous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'oracledb' {
	import * as stream from "stream";

	export interface ILob {
		chunkSize: number;
		length: number;
		pieceSize: number;
		offset?: number;
		type: string;
		/**
		 * Release method on ILob class.
		 * @remarks The cleanup() called by Release() only frees OCI error handle and Lob
		 *          locator.  These calls acquire mutex on OCI environment handle very briefly.
		 */
		release?(): void;
		/**
		 * Read method on ILob class.
		 * @param {(err : any, chunk: string | Buffer) => void} callback Callback to recive the data from lob.
		 * @remarks CLobs send strings while BLobs send Buffer object.
		 */
		read?(callback: (err: any, chunk: string | Buffer) => void): void;
		/**
		 * Read method on ILob class.
		 * @param {Buffer} data Data write into Lob.
		 * @param {(err: any) => void} callback Callback executed when writ is finished or when some error occured.
		 * @remarks CLobs send strings while BLobs send Buffer object.
		 */
		write?(data: Buffer, callback: (err: any) => void): void;
	}

	export interface Lob extends stream.Duplex {
		iLob: ILob;
		chunkSize: number;
		length: number;
		pieceSize: number;
		type: string;

		/**
		 * Do not call this... used internally by node-oracledb
		 */
		constructor(iLob: ILob, opts: stream.DuplexOptions): Lob;
		constructor(iLob: ILob): Lob;

		/**
		 * Closes the current LOB.
		 * @param  {(err: any) => void} callback? When passed, is called after the release.
		 * @returns void
		 */
		close(callback: (err: any) => void): void;
		close(): void;
	}

	export interface IConnectionAttributes {
		user?: string;
		password?: string;
		connectString: string;
		stmtCacheSize?: number;
		externalAuth?: boolean;
	}

	export interface IPoolAttributes extends IConnectionAttributes {
		poolMax?: number;
		poolMin?: number;
		poolIncrement?: number;
		poolTimeout?: number;
	}

	export interface IExecuteOptions {
		/** Maximum number of rows that will be retrieved. Used when resultSet is false. */
		maxRows?: number;
		/** Number of rows to be fetched in advance. */
		prefetchRows?: number;
		/** Result format - ARRAY o OBJECT */
		outFormat?: number;
		/** Should use ResultSet or not. */
		resultSet?: boolean;
		/** Transaction should auto commit after each statement? */
		autoCommit?: boolean;
	}

	export interface IExecuteReturn {
		/** Number o rows affected by the statement (used for inserts / updates)*/
		rowsAffected?: number;
		/** When the statement has out parameters, it comes here. */
		outBinds?: Array<any> | Object;
		/** Metadata information - just columns names for now. */
		metaData?: Array<IMetaData>;
		/** When not using ResultSet, query results comes here. */
		rows?: Array<Array<any>> | Array<any>;
		/** When using ResultSet, query results comes here. */
		resultSet?: IResultSet;
	}

	export interface IMetaData {
		/** Column name */
		name: string;
	}

	export interface IResultSet {
		/** Metadata information - just columns names for now. */
		metaData?: Array<IMetaData>;
		/**
		 * Closes the ResultSet.
		 * @param  {(err:any)=>void} callback Callback called on finish or when some error occurs
		 * @returns void
		 * @remarks After using a resultSet, it must be closed to free the resources used by the driver.
		 */
		close(callback: (err: any) => void): void;
		/**
		 * Fetch one row from ResultSet.
		 * @param  {(err:any,row:Array<any>|Object)=>void} callback Callback called when the row is available or when some error occurs.
		 * @returns void
		 */
		getRow(callback: (err: any, row: Array<any> | Object) => void): void;
		/**
		 * Fetch some rows from ResultSet.
		 * @param  {number} rowCount Number of rows to be fetched.
		 * @param  {(err:any,rows:Array<Array<any>>|Array<Object>)=>void} callback Callback called when the rows are available, or when some error occurs.
		 * @returns void
		 * @remarks When the number of rows passed to the callback is less than the rowCount, no more rows are available to be fetched.
		 */
		getRows(rowCount: number, callback: (err: any, rows: Array<Array<any>> | Array<Object>) => void): void;
	}

	export interface IConnection {
		/** Statement cache size in bytes (read-only)*/
		stmtCacheSize: number;
		/** Client id (to be sent to database) (write-only)*/
		clientId: string;
		/** Module (write-only) */
		module: string;
		/** Action */
		action: string;
		/** Oracle server version */
		oracleServerVersion: number;

		/**
		 * Execute method on Connection class.
		 * @param	{string} sql SQL Statement.
		 * @param	{Object|Array<any>} Binds Binds Object/Array
		 * @param	{IExecuteOptions} options Options object
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			binds: Object | Array<any>,
			options: IExecuteOptions,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * Execute method on Connection class.
		 * @param	{string} sql SQL Statement.
		 * @param	{Object|Array<any>} Binds Binds Object/Array
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			binds: Object | Array<any>,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * Execute method on Connection class.
		 * @param	{string} sql SQL Statement.
		 * @param	{IExecuteOptions} options Options object
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			options: IExecuteOptions,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * Execute method on Connection class.
		 * @param	{string} sql SQL Statement.
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * Release method on Connection class.
		 * @param	{(err: any) => void} callback Callback function to be called when the connection has been released.
		 */
		release(callback: (err: any) => void): void;

		/**
		 * Send a commit requisition to the database.
		 * @param	{(err: any) => void} callback Callback on commit done.
		 */
		commit(callback: (err: any) => void): void;

		/**
		 * Send a rollback requisition to database.
		 * @param	{(err: any) => void} callback Callback on rollback done.
		 */
		rollback(callback: (err: any) => void): void;

		/**
		 * Send a break to the database.
		 * @param	{(err: any) => void} callback Callback on break done.
		 */
		break(callback: (err: any) => void): void;
	}

	export interface IConnectionPool {
		poolMax: number;
		poolMin: number;
		poolIncrement: number;
		poolTimeout: number;
		connectionsOpen: number;
		connectionsInUse: number;
		stmtCacheSize: number;
		/**
		 * Finalizes the connection pool.
		 * @param  {(err:any)=>void} callback Callback called when the pool is terminated or when some error occurs
		 * @returns void
		 */
		terminate(callback: (err: any) => void): void;
		/**
		 * Retrieve a connection from the pool.
		 * @param  {(err:any,connection:IConnection)=>void} callback Callback called when the connection is available or when some error occurs.
		 * @returns void
		 * @see {@link https://jsao.io/2015/03/making-a-wrapper-module-for-the-node-js-driver-for-oracle-database/}
		 * @see {@link https://github.com/OraOpenSource/orawrap}
		 */
		getConnection(callback: (err: any, connection: IConnection) => void): void;
	}

	export const DEFAULT: number;
	/** Data type */
	export const STRING: number;
	/** Data type */
	export const NUMBER: number;
	/** Data type */
	export const DATE: number;
	/** Data type */
	export const CURSOR: number;
	/** Data type */
	export const BUFFER: number;
	/** Data type */
	export const CLOB: number;
	/** Data type */
	export const BLOB: number;
	/** Bind direction */
	export const BIND_IN: number;
	/** Bind direction */
	export const BIND_INOUT: number;
	/** Bind direction */
	export const BIND_OUT: number;
	/** outFormat */
	export const ARRAY: number;
	/** outFormat */
	export const OBJECT: number;

	/**
	 * Do not use this method - used internally by node-oracledb.
	 */
	export function newLob(iLob: ILob): Lob;

	/**
	 * Creates a connection with the database.
	 * @param  {IConnectionAttributes} connectionAttributes Parameters to stablish the connection.
	 * @param  {(err:any,connection:IConnection)=>void} callback Callback to run when the connection gets stablished or when some error occurs.
	 * @returns void
	 */
	export function getConnection(connectionAttributes: IConnectionAttributes, callback: (err: any, connection: IConnection) => void): void;

	/**
	 * Creates a database managed connection pool.
	 * @param  {IPoolAttributes} poolAttributes Parameters to stablish the connection pool.
	 * @param  {(err:any,connection:IConnectionPool)=>void} callback Callback to run when the connection pool gets created or when some error occurs.
	 * @returns void
	 */
	export function createPool(poolAttributes: IPoolAttributes, callback: (err: any, connection: IConnectionPool) => void): void;

	/** Default maximum connections in created pools */
	export var poolMax: number;
	/** Default minimum connections in created pools */
	export var poolMin: number;
	/** Default number of connections to increment when available connections reach 0 in created pools. poolMax will be respected.*/
	export var poolIncrement: number;
	/** Default timeout for unused connections in pool to be released. poolMin will be respected.*/
	export var poolTimeout: number;
	/** Default size of statements cache. Used to speed up creating queries.*/
	export var stmtCacheSize: number;
	/** Default number of rows that the driver will fetch in each query.*/
	export var prefetchRows: number;
	/** Default transaction behaviour of auto commit for each statement. */
	export var autoCommit: boolean;
	/** Default maximum number of rows to be fetched in statements not using ResultSets */
	export var maxRows: number;
	/** Default format for returning rows. When ARRAY, it will return Array<Array<any>>. When OBJECT, it will return Array<Object>. */
	export var outFormat: number;
	/** node-oracledb driver version. */
	export var version: number;
	export var connectionClass: string;
	/** Default authentication/authorization method. When true, the SO trusted user will be used. */
	export var externalAuth: boolean;
	export var fetchAsString: any;
	/** Default size in bytes that the driver will fetch from LOBs in advance. */
	export var lobPrefetchSize: number;
	/** Version of OCI that is used. */
	export var oracleClientVersion: number;
}
