// Type definitions for oracledb v1.11.0
// Project: https://github.com/oracle/node-oracledb
// Definitions by: Richard Natal <https://github.com/Bigous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';
import * as events from 'events';

declare namespace oracledb {

	type TRet<T> = T | IPromise<T>;
	type TFunc<T, R> = (value: T) => TRet<R>;

	interface IPromise<T> {
		catch<R>(onReject: TFunc<any, R>) : IPromise<R>;
		then<R>(onResolve?: TFunc<T, R>, onReject?: TFunc<any, R>) : IPromise<R>;
	}

	interface ILob {
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

	/* tslint:disable-next-line:interface-name */
	interface Lob extends stream.Duplex {
		iLob: ILob;
		/** This corresponds to the size used by the Oracle LOB layer when accessing or modifying the LOB value. */
		chunkSize: number;
		/** Length of a queried LOB in bytes (for BLOBs) or characters (for CLOBs). */
		length: number;
		/**
		 * he number of bytes (for BLOBs) or characters (for CLOBs) to read for each Stream 'data' event of a queried LOB.
		 * The default value is chunkSize.
		 * For efficiency, it is recommended that pieceSize be a multiple of chunkSize.
		 * The maximum value for pieceSize is limited to the value of UINT_MAX.
		 */
		pieceSize: number;
		/**
		 * This read-only attribute shows the type of Lob being used. It will have the value of one of the constants Oracledb.BLOB or Oracledb.CLOB. The value is derived from the bind type when using LOB bind variables, or from the column type when a LOB is returned by a query.
		 */
		type: number;

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

	interface IConnectionAttributes {
		user?: string;
		password?: string;
		connectString: string;
		stmtCacheSize?: number;
		externalAuth?: boolean;
		/** If not passed, "default" will be used. */
		poolAlias?: string;
	}

	interface IPoolAttributes extends IConnectionAttributes {
		poolMax?: number;
		poolMin?: number;
		poolIncrement?: number;
		poolTimeout?: number;
	}

	interface IExecuteOptions {
		/**
		 * Transaction should auto commit after each statement?
		 * Overrides Oracledb autoCommit.
		 */
		autoCommit?: boolean;
		/**
		 * Determines whether additional metadata is available for queries and for REF CURSORs returned from PL/SQL blocks.
		 * Overrides Oracledb extendedMetaData.
		 */
		extendedMetaData?: boolean;
		/**
		 * Object defining how query column data should be represented in JavaScript.
		 * The fetchInfo property can be used to indicate that number or date columns in a query should be returned as strings instead of their native format. The property can be used in conjunction with, or instead of, the global setting fetchAsString.
		 * For example:
		 *
		 * fetchInfo:
		 * {
		 *   "HIRE_DATE":      { type : oracledb.STRING },  // return the date as a string
		 *   "COMMISSION_PCT": { type : oracledb.DEFAULT }  // override Oracledb.fetchAsString
		 * }
		 *
		 * Each column is specified by name, using Oracle's standard naming convention.
		 * The valid values for type are STRING and DEFAULT. The former indicates that the given column should be returned as a string. The latter can be used to override any global mapping given by fetchAsString and allow the column data for this query to be returned in native format.
		 * The maximum length of a string created by type mapping is 200 bytes. However, if a database column that is already of type STRING is specified in fetchInfo, then the actual database metadata will be used to determine the maximum length.
		 * Columns fetched from REF CURSORS are not mapped by fetchInfo settings in the execute() call. Use the global fetchAsString instead.
		 */
		fetchInfo?: Object;
		/**
		 * Maximum number of rows that will be retrieved. Used when resultSet is false.
		 * Overrides Oracledb maxRows.
		 */
		maxRows?: number;
		/**
		 * Result format - ARRAY o OBJECT
		 * Overrides Oracledb outFormat.
		 */
		outFormat?: number;
		/**
		 * Number of rows to be fetched in advance.
		 * Overrides Oracledb prefetchRows.
		 */
		prefetchRows?: number;
		/**
		 * Determines whether query results should be returned as a ResultSet object or directly. The default is false.
		 */
		resultSet?: boolean;
	}

	interface IExecuteReturn {
		/** Metadata information - column names is always given. If the Oracledb extendedMetaData or execute() option extendedMetaData are true then additional information is included. */
		metaData?: Array<IMetaData>;
		/** This is either an array or an object containing OUT and IN OUT bind values. If bindParams is passed as an array, then outBinds is returned as an array. If bindParams is passed as an object, then outBinds is returned as an object. */
		outBinds?: Array<any> | Object;
		/** For SELECT statements when the resultSet option is true, use the resultSet object to fetch rows. See ResultSet Class. */
		resultSet?: IResultSet;
		/** For SELECT statements where the resultSet option is false or unspecified, rows contains an array of fetched rows. It will be NULL if there is an error or the SQL statement was not a SELECT statement. By default, the rows are in an array of column value arrays, but this can be changed to arrays of objects by setting outFormat to OBJECT. If a single row is fetched, then rows is an array that contains one single row. The number of rows returned is limited to the maxRows configuration property of the Oracledb object, although this may be overridden in any execute() call. */
		rows?: Array<Array<any>> | Array<any>;
		/** For DML statements (including SELECT FOR UPDATE) this contains the number of rows affected, for example the number of rows inserted. For non-DML statements such as queries, or if no rows are affected, then rowsAffected will be zero. */
		rowsAffected?: number;
	}

	interface IMetaData {
		/** The column name follows Oracle's standard name-casing rules. It will commonly be uppercase, since most applications create tables using unquoted, case-insensitive names. */
		name: string;
		/** one of the Node-oracledb Type Constant values. */
		fetchType?: number;
		/** one of the Node-oracledb Type Constant values. */
		dbType?: number;
		/** the database byte size. This is only set for DB_TYPE_VARCHAR, DB_TYPE_CHAR and DB_TYPE_RAW column types. */
		byteSize?: number;
		/** set only for DB_TYPE_NUMBER, DB_TYPE_TIMESTAMP, DB_TYPE_TIMESTAMP_TZ and DB_TYPE_TIMESTAMP_LTZ columns. */
		precision?: number;
		/** set only for DB_TYPE_NUMBER columns. */
		scale: number;
		/** indicates whether NULL values are permitted for this column. */
		nullable?: boolean;
	}

	interface IResultSet {
		/**
		 * Contains an array of objects with metadata about the query or REF CURSOR columns.
		 * Each column's name is always given. If the Oracledb extendedMetaData or execute() option extendedMetaData are true then additional information is included.
		 */
		metaData?: Array<IMetaData>;

		/**
		 * Closes a ResultSet. Applications should always call this at the end of fetch or when no more rows are needed.
		 * @param  {(err:any)=>void} callback Callback called on finish or when some error occurs.
		 * @returns void
		 * @remarks Applications should always call this at the end of fetch or when no more rows are needed.
		 */
		close(callback: (err: any) => void): void;

		/**
		 * Closes a ResultSet. Applications should always call this at the end of fetch or when no more rows are needed.
		 * @returns  A void Promise on finish or when some error occurs.
		 * @remarks Applications should always call this at the end of fetch or when no more rows are needed.
		 */
		close(): IPromise<void>;

		/**
		 * This call fetches one row of the result set as an object or an array of column values, depending on the value of outFormat.
		 * At the end of fetching, the ResultSet should be freed by calling close().
		 * @param  {(err:any,row:Array<any>|Object)=>void} callback Callback called when the row is available or when some error occurs.
		 * @returns void
		 */
		getRow(callback: (err: any, row: Array<any> | Object) => void): void;

		/**
		 * This call fetches one row of the result set as an object or an array of column values, depending on the value of outFormat.
		 * At the end of fetching, the ResultSet should be freed by calling close().
		 * @returns Promise when the row is available or when some error occurs.
		 */
		getRow(): IPromise<Array<any> | Object>;

		/**
		 * This synchronous method converts a ResultSet into a stream.
		 * It can be used to make ResultSets from top-level queries or from REF CURSOR bind variables streamable. To make top-level queries streamable, the alternative connection.queryStream() method may be easier to use.
		 * @returns synchronous stream of result set.
		 */
		toQueryStream(): stream.Readable;
	}

	/** Emits "_after_close" event */
	interface IConnection extends events.EventEmitter {
		/**
		 * The action attribute for end-to-end application tracing.
		 * This is a write-only property. Displaying a Connection object will show a value of null for this attribute. See End-to-end Tracing, Mid-tier Authentication, and Auditing.
		 */
		action: string;
		/**
		 * The client identifier for end-to-end application tracing, use with mid-tier authentication, and with Virtual Private Databases.
		 * This is a write-only property. Displaying a Connection object will show a value of null for this attribute. See End-to-end Tracing, Mid-tier Authentication, and Auditing.
		 */
		clientId: string;
		/**
		 * The module attribute for end-to-end application tracing.
		 * This is a write-only property. Displaying a Connection object will show a value of null for this attribute. See End-to-end Tracing, Mid-tier Authentication, and Auditing.
		 */
		module: string;
		/**
		 * This readonly property gives a numeric representation of the Oracle database version. For version a.b.c.d.e, this property gives the number: (100000000 * a) + (1000000 * b) + (10000 * c) + (100 * d) + e
		 */
		oracleServerVersion: number;
		/**
		 * The number of statements to be cached in the statement cache of the connection. The default value is the stmtCacheSize property in effect in the Pool object when the connection is created in the pool.
		 */
		stmtCacheSize: number;

		/**
		 * This call stops the currently running operation on the connection.
		 * If there is no operation in progress or the operation has completed by the time the break is issued, the break() is effectively a no-op.
		 * If the running asynchronous operation is interrupted, its callback will return an error.
		 * @param	{(err: any) => void} callback Callback on break done.
		 */
		break(callback: (err: any) => void): void;

		/**
		 * This call stops the currently running operation on the connection.
		 * If there is no operation in progress or the operation has completed by the time the break is issued, the break() is effectively a no-op.
		 * If the running asynchronous operation is interrupted, its callback will return an error.
		 * @returns	A void promise when break is done.
		 */
		break(): IPromise<void>;

		/**
		 * Releases a connection. If the connection was obtained from the pool, the connection is returned to the pool and is available for reuse.
		 * Note: calling close() when connections are no longer required is strongly encouraged. Releasing helps avoid resource leakage and can improve system efficiency.
		 * When a connection is released, any ongoing transaction on the connection is rolled back.
		 * After releasing a connection to a pool, there is no guarantee a subsequent getConnection() call gets back the same database connection. The application must redo any ALTER SESSION statements on the new connection object, as required.
		 * @param	{(err: any) => void} callback Callback on close done.
		 */
		close(callback: (err: any) => void): void;

		/**
		 * Releases a connection. If the connection was obtained from the pool, the connection is returned to the pool and is available for reuse.
		 * Note: calling close() when connections are no longer required is strongly encouraged. Releasing helps avoid resource leakage and can improve system efficiency.
		 * When a connection is released, any ongoing transaction on the connection is rolled back.
		 * After releasing a connection to a pool, there is no guarantee a subsequent getConnection() call gets back the same database connection. The application must redo any ALTER SESSION statements on the new connection object, as required.
		 * @returns	A void Promise on close done.
		 */
		close(): IPromise<void>;

		/**
		 * Send a commit requisition to the database.
		 * @param	{(err: any) => void} callback Callback on commit done.
		 */
		commit(callback: (err: any) => void): void;

		/**
		 * Send a commit requisition to the database.
		 * @returns	A void Promise on commit done.
		 */
		commit(): IPromise<void>;

		/**
		 * This call executes a SQL or PL/SQL statement. See SQL Execution for examples.
		 * The statement to be executed may contain IN binds, OUT or IN OUT bind values or variables, which are bound using either an object or an array.
		 * A callback function returns a result object, containing any fetched rows, the values of any OUT and IN OUT bind variables, and the number of rows affected by the execution of DML statements.
		 * @param	{string} sql SQL Statement.
		 * @param	{Object|Array<any>} bindParams Binds Object/Array
		 * @param	{IExecuteOptions} options Options object
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			bindParams: Object | Array<any>,
			options: IExecuteOptions,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * This call executes a SQL or PL/SQL statement. See SQL Execution for examples.
		 * The statement to be executed may contain IN binds, OUT or IN OUT bind values or variables, which are bound using either an object or an array.
		 * A callback function returns a result object, containing any fetched rows, the values of any OUT and IN OUT bind variables, and the number of rows affected by the execution of DML statements.
		 * @param	{string} sql SQL Statement.
		 * @param	{Object|Array<any>} bindParams Binds Object/Array
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			bindParams: Object | Array<any>,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * This call executes a SQL or PL/SQL statement. See SQL Execution for examples.
		 * The statement to be executed may contain IN binds, OUT or IN OUT bind values or variables, which are bound using either an object or an array.
		 * A callback function returns a result object, containing any fetched rows, the values of any OUT and IN OUT bind variables, and the number of rows affected by the execution of DML statements.
		 * @param	{string} sql SQL Statement.
		 * @param	{IExecuteOptions} options Options object
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			options: IExecuteOptions,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * This call executes a SQL or PL/SQL statement. See SQL Execution for examples.
		 * The statement to be executed may contain IN binds, OUT or IN OUT bind values or variables, which are bound using either an object or an array.
		 * A callback function returns a result object, containing any fetched rows, the values of any OUT and IN OUT bind variables, and the number of rows affected by the execution of DML statements.
		 * @param	{string} sql SQL Statement.
		 * @param	{(err: any, value: IExecuteReturn) => void} callback Callback function to receive the result.
		 */
		execute(sql: string,
			callback: (err: any, value: IExecuteReturn) => void): void;

		/**
		 * This call executes a SQL or PL/SQL statement. See SQL Execution for examples.
		 * The statement to be executed may contain IN binds, OUT or IN OUT bind values or variables, which are bound using either an object or an array.
		 * @param	{string} sql SQL Statement.
		 * @param	{Object|Array<any>} bindParams Binds Object/Array
		 * @param	{IExecuteOptions} options Options object
		 * @returns	A Promise of a result object, containing any fetched rows, the values of any OUT and IN OUT bind variables, and the number of rows affected by the execution of DML statements.
		 */
		execute(sql: string,
			bindParams?: Object | Array<any>,
			options?: IExecuteOptions): IPromise<IExecuteReturn>;

		/**
		 * This function provides query streaming support. The parameters are the same as execute() except a callback is not used. Instead this function returns a stream used to fetch data.
		 * Each row is returned as a data event. Query metadata is available via a metadata event. The end event indicates the end of the query results.
		 * Query results must be fetched to completion to avoid resource leaks.
		 * The connection must remain open until the stream is completely read.
		 * For tuning purposes the oracledb.maxRows property can be used to size an internal buffer used by queryStream(). Note it does not limit the number of rows returned by the stream. The oracledb.prefetchRows value will also affect performance.
		 * @param	{string} sql SQL Statement.
		 * @param	{Object|Array<any>} bindParams Binds Object/Array
		 * @param	{IExecuteOptions} options Options object
		 * @returns Readable Stream for queries.
		 */
		queryStream(sql: string,
			bindParams?: Object | Array<any>,
			options?: IExecuteOptions): stream.Readable;

		/**
		 * An alias for Connection.close().
		 * @param	{(err: any) => void} callback Callback on close done.
		 */
		release(callback: (err: any) => void): void;

		/**
		 * An alias for Connection.close().
		 * @returns	A void Promise on close done.
		 */
		release(): IPromise<void>;

		/**
		 * Send a rollback requisition to database.
		 * @param	{(err: any) => void} callback Callback on rollback done.
		 */
		rollback(callback: (err: any) => void): void;

		/**
		 * Send a rollback requisition to database.
		 * @returns	A void Promise on rollback done.
		 */
		rollback(): IPromise<void>;
	}

	/** Emits "_after_close" event */
	interface IConnectionPool extends events.EventEmitter {
		/**
		 * The number of currently active connections in the connection pool i.e. the number of connections currently checked-out using getConnection().
		 */
		connectionsInUse: number;
		/**
		 * The number of currently open connections in the underlying connection pool.
		 */
		connectionsOpen: number;
		/**
		 * The readonly alias of this pool in the connection pool cache. An alias cannot be changed once the pool has been created.
		 */
		poolAlias: string;
		/**
		 * The number of connections that are opened whenever a connection request exceeds the number of currently open connections.
		 */
		poolIncrement: number;
		/**
		 * The maximum number of connections that can be open in the connection pool.
		 */
		poolMax: number;
		/**
		 * The minimum number of connections a connection pool maintains, even when there is no activity to the target database.
		 */
		poolMin: number;
		/**
		 * The time (in seconds) after which the pool terminates idle connections (unused in the pool). The number of connections does not drop below poolMin.
		 */
		poolTimeout: number;
		/**
		 * Determines whether requests for connections from the pool are queued when the number of connections "checked out" from the pool has reached the maximum number specified by poolMax.
		 */
		queueRequests: number;
		/**
		 * The time (in milliseconds) that a connection request should wait in the queue before the request is terminated.
		 */
		queueTimeout: number;
		/**
		 * The number of statements to be cached in the statement cache of each connection.
		 */
		stmtCacheSize: number;

		/**
		 * Finalizes the connection pool.
		 * @param  {(err:any)=>void} callback Callback called when the pool is terminated or when some error occurs
		 * @returns void
		 */
		close(callback: (err: any) => void): void;

		/**
		 * Finalizes the connection pool.
		 * @returns Promise to when the close finishes.
		 */
		close(): IPromise<void>;

		/**
		 * This method obtains a connection from the connection pool.
		 * If a previously opened connection is available in the pool, that connection is returned. If all connections in the pool are in use, a new connection is created and returned to the caller, as long as the number of connections does not exceed the specified maximum for the pool. If the pool is at its maximum limit, the getConnection() call results in an error, such as ORA-24418: Cannot open further sessions.
		 * @param  {(err:any,connection:IConnection)=>void} callback Callback called when the connection is available or when some error occurs.
		 * @returns void
		 * @see {@link https://jsao.io/2015/03/making-a-wrapper-module-for-the-node-js-driver-for-oracle-database/}
		 * @see {@link https://github.com/OraOpenSource/orawrap}
		 */
		getConnection(callback: (err: any, connection: IConnection) => void): void;

		/**
		 * This method obtains a connection from the connection pool.
		 * If a previously opened connection is available in the pool, that connection is returned. If all connections in the pool are in use, a new connection is created and returned to the caller, as long as the number of connections does not exceed the specified maximum for the pool. If the pool is at its maximum limit, the getConnection() call results in an error, such as ORA-24418: Cannot open further sessions.
		 * @returns  An IConnection Promise to when the connection is available or when some error occurs.
		 * @see {@link https://jsao.io/2015/03/making-a-wrapper-module-for-the-node-js-driver-for-oracle-database/}
		 * @see {@link https://github.com/OraOpenSource/orawrap}
		 */
		getConnection(): IPromise<IConnection>;

		/**
		 * An alias for IConnectionPool.close().
		 * @param  {(err:any)=>void} callback Callback called when the pool is terminated or when some error occurs
		 * @returns void
		 */
		terminate(callback: (err: any) => void): void;

		/**
		 * An alias for IConnectionPool.close().
		 * @returns Promise to when the close finishes.
		 */
		terminate(): IPromise<void>;
	}

	/* tslint:disable no-unused-variable */
	const DEFAULT: number;
	/** Metadata return type */
	const DB_TYPE_VARCHAR: number;
	/** Metadata return type */
	const DB_TYPE_NUMBER: number;
	/** Metadata return type */
	const DB_TYPE_DATE: number;
	/** Metadata return type */
	const DB_TYPE_RAW: number;
	/** Metadata return type */
	const DB_TYPE_CHAR: number;
	/** Metadata return type */
	const DB_TYPE_BINARY_FLOAT: number;
	/** Metadata return type */
	const DB_TYPE_BINARY_DOUBLE: number;
	/** Metadata return type */
	const DB_TYPE_ROWID: number;
	/** Metadata return type */
	const DB_TYPE_CLOB: number;
	/** Metadata return type */
	const DB_TYPE_BLOB: number;
	/** Metadata return type */
	const DB_TYPE_TIMESTAMP: number;
	/** Metadata return type */
	const DB_TYPE_TIMESTAMP_TZ: number;
	/** Metadata return type */
	const DB_TYPE_TIMESTAMP_LTZ: number;
	/** Data type */
	const STRING: number;
	/** Data type */
	const NUMBER: number;
	/** Data type */
	const DATE: number;
	/** Data type */
	const CURSOR: number;
	/** Data type */
	const BUFFER: number;
	/** Data type */
	const CLOB: number;
	/** Data type */
	const BLOB: number;
	/** Bind direction */
	const BIND_IN: number;
	/** Bind direction */
	const BIND_INOUT: number;
	/** Bind direction */
	const BIND_OUT: number;
	/** outFormat */
	const ARRAY: number;
	/** outFormat */
	const OBJECT: number;

	/**
	 * Do not use this method - used internally by node-oracledb.
	 */
	function newLob(iLob: ILob): Lob;

	/* tslint:disable no-var-keyword */
	/** Default transaction behaviour of auto commit for each statement. */
	var autoCommit: boolean;
	/**
	 * The user-chosen Connection class value defines a logical name for connections. Most single purpose applications should set connectionClass when using a connection pool or DRCP.
	 * When a pooled session has a connection class, Oracle ensures that the session is not shared outside of that connection class.
	 */
	var connectionClass: string;
	/**
	 * Determines whether additional metadata is available for queries and for REF CURSORs returned from PL/SQL blocks.
	 * The default value for extendedMetaData is false. With this value, the result.metaData result.resultSet.metaData objects only include column names.
	 */
	var extendedMetaData: boolean;
	/** Default authentication/authorization method. When true, the SO trusted user will be used. */
	var externalAuth: boolean;
	/**
	 * An array of node-oracledb types. When any column having the specified type is queried with execute(), the column data is returned as a string instead of the native representation. For column types not specified in fetchAsString, native types will be returned.
	 * By default all columns are returned as native types.
	 */
	var fetchAsString: Array<number>;
	/** Default size in bytes that the driver will fetch from LOBs in advance. */
	var lobPrefetchSize: number;
	/** Default maximum number of rows to be fetched in statements not using ResultSets */
	var maxRows: number;
	/** Version of OCI that is used. */
	var oracleClientVersion: number;
	/** Default format for returning rows. When ARRAY, it will return Array<Array<any>>. When OBJECT, it will return Array<Object>. */
	var outFormat: number;
	/** Default number of connections to increment when available connections reach 0 in created pools. poolMax will be respected. */
	var poolIncrement: number;
	/** Default maximum connections in created pools */
	var poolMax: number;
	/** Default minimum connections in created pools */
	var poolMin: number;
	/** Default timeout for unused connections in pool to be released. poolMin will be respected. */
	var poolTimeout: number;
	/** Default number of rows that the driver will fetch in each query. */
	var prefetchRows: number;
	/**
	 * Readonly reference to the native oracledb.
	 */
	var Oracledb: any;
	/**
	 * Readonly reference to the native connection object.
	 */
	var Connection: any;
	/**
	 * Readonly reference to the native Lob object.
	 */
	var Lob: any;
	/**
	 * Reference to the native ResultSet object.
	 */
	var ResultSet: any;
	/**
	 * Node-oracledb supports Promises on all methods. The standard Promise library is used in Node 0.12 and greater.
	 * Promise support is not enabled by default in Node 0.10.
	 * You can change the Promisse library to any default ES6 compatible library (like bluebird).
	 */
	var Promise: any;
	/**
	 * If this property is true and the number of connections "checked out" from the pool has reached the number specified by poolMax, then new requests for connections are queued until in-use connections are released.
	 * If this property is false and a request for a connection is made from a pool where the number of "checked out" connections has reached poolMax, then an ORA-24418 error indicating that further sessions cannot be opened will be returned.
	 * The default value is true.
	 */
	var queueRequests: boolean;
	/**
	 * The number of milliseconds after which connection requests waiting in the connection request queue are terminated. If queueTimeout is 0, then queued connection requests are never terminated.
	 * The default value is 60000.
	 */
	var queueTimeout: number;
	/** Default size of statements cache. Used to speed up creating queries. */
	var stmtCacheSize: number;
	/** node-oracledb driver version. */
	var version: number;

	/**
	 * Creates a database managed connection pool.
	 * @param  {IPoolAttributes} poolAttributes Parameters to stablish the connection pool.
	 * @param  {(err:any,connection:IConnectionPool)=>void} callback Callback to run when the connection pool gets created or when some error occurs.
	 * @returns void
	 */
	function createPool(poolAttributes: IPoolAttributes, callback: (err: any, connection: IConnectionPool) => void): void;

	/**
	 * Creates a database managed connection pool.
	 * @param  {IPoolAttributes} poolAttributes Parameters to stablish the connection pool.
	 * @returns Promise {(connection:IConnectionPool)=>any} Promise with the connection pool.
	 */
	function createPool(poolAttributes: IPoolAttributes): IPromise< IConnectionPool >;

	/**
	 * Retrieves a connection pool from cache. If it does not exists, an error will be thrown.
	 * @param {string} alias The index of the cache for the pool. If none is passed, it will use the default one.
	 * @returns The connection pool or throws an error if it was not found.
	 */
	function getPool(poolAlias?: string): IConnectionPool;

	/**
	 * Creates a connection with the database - the pool alias will be "default".
	 * @param  {(err:any,connection:IConnection)=>void} callback Callback to run when the connection gets stablished or when some error occurs.
	 * @returns void
	 */
	function getConnection(callback: (err: any, connection: IConnection) => void): void;

	/**
	 * Creates a connection with the database.
	 * @param  {string} poolAlias Poll from which the connection should be retrieved.
	 * @param  {(err:any,connection:IConnection)=>void} callback Callback to run when the connection gets stablished or when some error occurs.
	 * @returns void
	 */
	function getConnection(poolAlias: string, callback: (err: any, connection: IConnection) => void): void;

	/**
	 * Creates a connection with the database.
	 * @param  {IConnectionAttributes} connectionAttributes Parameters to stablish the connection.
	 * @param  {(err:any,connection:IConnection)=>void} callback Callback to run when the connection gets stablished or when some error occurs.
	 * @returns void
	 */
	function getConnection(connectionAttributes: IConnectionAttributes, callback: (err: any, connection: IConnection) => void): void;

	/**
	 * Creates a connection with the database. The pool name will be "default".
	 * @returns  {(connection:IConnection)=>any} Promise with the connection.
	 */
	function getConnection(): IPromise< IConnection >;

	/**
	 * Creates a connection with the database.
	 * @param  {string} poolAlias Poll from which the connection should be retrieved.
	 * @returns  {(connection:IConnection)=>any} Promise with the connection.
	 */
	function getConnection(poolAlias: string): IPromise< IConnection >;

	/**
	 * Creates a connection with the database.
	 * @param  {IConnectionAttributes} connectionAttributes Parameters to stablish the connection.
	 * @returns  {(connection:IConnection)=>any} Promise with the connection.
	 */
	function getConnection(connectionAttributes: IConnectionAttributes): IPromise< IConnection >;
}

export = oracledb;