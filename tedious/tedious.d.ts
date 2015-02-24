// Type definitions for tedious 1.8.0
// Project: https://pekim.github.io/tedious
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../node/node.d.ts' />

declare module 'tedious' {

	import events = require("events");

	export interface ColumnType {
		/**
		 * The column's type, such as VarChar, Int or Binary.
		 */
		name: string;
	}
	
	export interface ColumnMetaData {
		/**
		 * The column's name
		 */
		colName: string;
		
		/**
		 * The column type.
		 */
		type: ColumnType;

		/**
		 * The precision. Only applicable to numeric and decimal.
		 */
		precision?: number;
		
		/**
		 * The scale. Only applicable to numeric, decimal, time, datetime2 and datetimeoffset.
		 */
		scale?: number;

		/**
		 * The length, for char, varchar, nvarchar and varbinary.	
		 */
		dataLength?: number;
	}
	
	export interface DebugOptions {
		/**
		 * A boolean, controlling whether debug events will be emitted with text describing packet details (default: false).
		 */
		packet?: boolean;

		/**
		 * A boolean, controlling whether debug events will be emitted with text describing packet data details (default: false).
		 */
		data?: boolean;

		/**
		 * A boolean, controlling whether debug events will be emitted with text describing packet payload details (default: false).
		 */
		payload?: boolean;
	
		/**
		 * A boolean, controlling whether debug events will be emitted with text describing token stream tokens (default: false).
		 */
		token?: boolean;
	}
	
	export enum ISOLATION_LEVEL {
		NO_CHANGE = 0x00,
		READ_UNCOMMITTED = 0x01,
		READ_COMMITTED = 0x02,
		REPEATABLE_READ = 0x03,
		SERIALIZABLE = 0x04,
		SNAPSHOT = 0x05
	}
	
	/**
	 * Unfortunately these aren't valid JavaScript identifiers
	 * so I cannot list the values here as enum values
	 	7_1 = 0x71000001,
		7_2 = 0x72090002,
		7_3_A = 0x730A0003,
		7_3_B = 0x730B0003,
		7_4 = 0x74000004
	 */
	export var TDS_VERSION: { [index: string]: number };

	export interface TediousType {
		type: string;
		name: string;
	}
	
	export interface TediousTypes {
		BigInt: TediousType;
		Binary: TediousType;
		Bit: TediousType;
		BitN: TediousType;
		Char: TediousType;
		DateN: TediousType;
		DateTime2N: TediousType;
		DateTime: TediousType;
		DateTimeN: TediousType;
		DateTimeOffsetN: TediousType;
		Decimal: TediousType;
		DecimalN: TediousType;
		Float: TediousType;
		FloatN: TediousType;
		Image: TediousType;
		Int: TediousType;
		IntN: TediousType;
		Money: TediousType;
		MoneyN: TediousType;
		NChar: TediousType;
		NText: TediousType;
		NVarChar: TediousType;
		Null: TediousType;
		Numeric: TediousType;
		NumericN: TediousType;
		Real: TediousType;
		SmallDateTime: TediousType;
		SmallInt		: TediousType;
		SmallMoney: TediousType;
		TVP: TediousType;
		Text: TediousType;
		TimeN: TediousType;
		TinyInt: TediousType;
		UDT: TediousType;
		UniqueIdentifierN: TediousType;
		VarBinary: TediousType;
		VarChar: TediousType;
		Xml: TediousType;
	}
	
	export var TYPES: TediousTypes;
	
	export interface ConnectionOptions {
	
		/**
		 * Port to connect to (default: 1433). Mutually exclusive with options.instanceName.
		 */
		port?: number;
		
		/**
		 * The instance name to connect to. The SQL Server Browser service must be running on the database server,
		 * and UDP port 1444 on the database server must be reachable. (no default) Mutually exclusive with options.port.
		 */
		instanceName?: string;
		
		/**
		 * Database to connect to (default: dependent on server configuration).
		 */
		database?: string;
		
		/**
		 * By default, if the database requestion by options.database cannot be accessed, 
		 * the connection will fail with an error. However, if options.fallbackToDefaultDb is set to true, 
		 * then the user's default database will be  * used instead (Default: false).
		 */
		fallbackToDefaultDb?: boolean;
		
		/**
		 * The number of milliseconds before the attempt to connect is considered failed (default: 15000).
		 */
		connectTimeout?: number;
		
		/**
		 * The number of milliseconds before a request is considered failed, or 0 for no timeout (default: 15000).
		 */
		requestTimeout?: number;
		
		/**
		 * The number of milliseconds before the cancel (abort) of a request is considered failed (default: 5000).
		 */
		cancelTimeout?: number;
		
		/**
		 * The size of TDS packets (subject to negotiation with the server). Should be a power of 2. (default: 4096).
		 */
		packetSize?: number;
		
		/**
		 * A boolean determining whether to pass time values in UTC or local time. (default: true).
		 */
		useUTC?: boolean;
		
		/**
		 * A boolean determining whether to rollback a transaction automatically if any error is encountered
		 * during the given transaction's execution. This sets the value for SET XACT_ABORT during the initial 
		 * SQL phase of a connection (documentation).
		 */
		abortTransactionOnError?: boolean;
		
		/**
		 * A string indicating which network interface (ip addres) to use when connecting to SQL Server.
		 */
		localAddress?: string;
		
		/**
		 * A boolean determining whether to return rows as arrays or key-value collections. (default: false).
		 */
		useColumnNames?: boolean;
		
		/**
		 * A boolean, controlling whether the column names returned will have the first letter converted
		 * to lower case (true) or not. This value is ignored if you provide a columnNameReplacer. (default: false).
		 */
		camelCaseColumns?: boolean;
		
		/**
		 * A function with parameters (columnName, index, columnMetaData) and returning a string. If provided,
		 * this will be called once per column per result-set. The returned value will be used instead of the
		 * SQL-provided column name on row and meta data objects. This allows you to dynamically convert between
		 * naming conventions. (default: null).
		 */
		columnNameReplacer?: (columnName: string, index: number, columnMetaData: ColumnMetaData) => string;
		
		/**
		 * Debug options
		 */
		debug?: DebugOptions;
		
		/**
		 * The default isolation level that transactions will be run with. (default: READ_COMMITED).
		 */
		isolationLevel?: ISOLATION_LEVEL;
		
		/**
		 * The default isolation level for new connections. All out-of-transaction queries are executed with this setting. (default: READ_COMMITED)
		 */
		connectionIsolationLevel?: ISOLATION_LEVEL;
		
		/**
		 * A boolean, determining whether the connection will request read only access from a SQL Server Availability Group. For more information, see here. (default: false).
		 */
		readOnlyIntent?: boolean;
		
		/**
		 * A boolean determining whether or not the connection will be encrypted. Set to true if you're on Windows Azure. (default: false).
		 */
		encrypt?: boolean;
		
		/**
		 * When encryption is used, an object may be supplied that will be used for the first argument when calling tls.createSecurePair (default: {}).
		 */
		cryptoCredentialsDetails?: Object;
		
		/**
		 * A boolean, that when true will expose received rows in Requests' done* events. See done, doneInProc and doneProc. (default: false)
		 * Caution: If many row are received, enabling this option could result in excessive memory usage.
		 */
		rowCollectionOnDone?: boolean;
		
		/**
		 * A boolean, that when true will expose received rows in Requests' completion callback. See new Request. (default: false)
		 * Caution: If many row are received, enabling this option could result in excessive memory usage.
		 */
		rowCollectionOnRequestCompletion?: boolean;
		
		/**
		 * The version of TDS to use. If server doesn't support specified version, negotiated version is used instead. (default: 7_4).
		 * Take this from tedious.TDS_VERSION.7_4 .
		 */
		tdsVersion?: number;
	}
	
	export interface ConnectionConfig {
		/**
		 * User name to use for authentication.
		 */
		userName?: string;

		/**
		 * Password to use for authentication.
		 */
		password?: string;

		/**
		 * Hostname to connect to.
		 */
		server?: string;

		/**
		 * Once you set domain, driver will connect to SQL Server using domain login.
		 */
		domain?: string;
				
		/**
		 * Further options
		 */
		options?: ConnectionOptions;
	}
	
	export interface ParameterOptions {
		//  for VarChar, NVarChar, VarBinary
		length?: number;
		// precision for Numeric, Decimal
		precision?: number;
		// scale for Numeric, Decimal, Time, DateTime2, DateTimeOffset
		scale?: number;
	}
	
	/**
	 * Type of each column in the Request#row event
	 */
	export interface ColumnValue {
		metadata: ColumnMetaData;
		value: any;
	}
	
	/**
	 * A Request instance represents a request that can be executed on a connection
	 * @event  'columnMetadata' This event, describing result set columns, will be emitted before row events are emitted. This event may be emited multiple times when more than one recordset is produced by the statement.
	 * @event  'row' A row resulting from execution of the SQL statement
	 * @event  'done' All rows from a result set have been provided (through row events). This token is used to indicate the completion of a SQL statement. As multiple SQL statements can be sent to the server in a single SQL batch, multiple done events can be generated. An done event is emited for each SQL statement in the SQL batch except variable declarations. For execution of SQL statements within stored procedures, doneProc and doneInProc events are used in place of done events.
	 * @event  'doneInProc' Indicates the completion status of a SQL statement within a stored procedure. All rows from a statement in a stored procedure have been provided (through row events).
	 * @event  'doneProc' Indicates the completion status of a stored procedure. This is also generated for stored procedures executed through SQL statements.
	 * @event  'returnValue' A value for an output parameter (that was added to the request with addOutputParameter(...)). See also Using Parameters.
	 */
	export class Request extends events.EventEmitter {
	
		/**
		 * Constructor
		 * @param sql The SQL statement to be executed (or a procedure name, if the request is to be used with connection.callProcedure).
		 * @param callback	The callback is called when the request has completed, either successfully or with an error. If an error occurs during execution of the statement(s), then err will describe the error.
		 * 					As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
		 * 					rowCount: The number of rows emitted as result of executing the SQL statement.
		 * 					rows: Rows as a result of executing the SQL statement. Will only be avaiable if Connection's config.options.rowCollectionOnRequestCompletion is true.
		 */
		constructor(sql: string, callback: (error: Error, rowCount: number, rows: any[]) => void);
		
		/**
		 * Add an input parameter to the request.
		 * @param name The parameter name. This should correspond to a parameter in the SQL, or a parameter that a called procedure expects. The name should not start '@'.
		 * @param type One of the supported data types.
		 * @param value The value that the parameter is to be given. The Javascript type of the argument should match that documented for data types.
		 * @param options Additional type options. Optional.
		 */
		addParameter(name: string, type: TediousType, value: any, options?: ParameterOptions): void;
		
		/**
		 * Add an output parameter to the request. The parameter's value will be provide by an emitted returnValue event.		 
		 * @param name The parameter name. This should correspond to a parameter in the SQL, or a parameter that a called procedure expects.
		 * @param type One of the supported data types.
		 * @param value The value that the parameter is to be given. The Javascript type of the argument should match that documented for data types. Optional.
		 * @param options Additional type options. Optional.		 
		 */
		addOutputParameter(name: string, type: TediousType, value?: any, options?: ParameterOptions): void;
	}
	
	export interface BulkLoadColumnOpts extends ParameterOptions {
		//  indicates whether the column accepts NULL values.
		nullable: boolean; 
		//  If the name of the column is different from the name of the property found on rowObj arguments passed to , then you can use this option to specify the property name.
		objName?: string;
	}
	
	export interface BulkLoad {
		
		/**
		 * Adds a column to the bulk load. The column definitions should match the table you are trying to insert into. Attempting to call addColumn after the first row has been added will throw an exception.
		 * @param name	The name of the column.
		 * @param type	One of the supported data types.
		 * @param options	Additional column type information. At a minimum, nullable must be set to true or false.
		 */
		addColumn(name: string, type: TediousType, options: BulkLoadColumnOpts): void;
		
		/**
		 * Adds a row to the bulk insert. This method accepts arguments in three different formats:
		 * @param rowObj An object of key/value pairs representing column name (or objName) and value.
		 */
		addRow(row: Object): void;
		/**
		 * Adds a row to the bulk insert. This method accepts arguments in three different formats:
		 * @param columnArray	An array representing the values of each column in the same order which they were added to the bulkLoad object.
		 */
		addRow(columnArray: any[]): void;
		/**
		 * Adds a row to the bulk insert. This method accepts arguments in three different formats:
		 * @param args If there are at least two columns, values can be passed as multiple arguments instead of an array. They must be in the same order the columns were added in.
		 */
		addRow(...args: any[]): void;

		/**
		 * This is simply a helper utility function which returns a CREATE TABLE SQL statement based on the columns added to the bulkLoad object. This may be particularly handy when you want to insert into a temporary table (a table which starts with #). A side note on bulk inserting into temporary tables: if you want to access a local temporary table after executing the bulk load, you'll need to use the same connection and execute your requests using connection.execSqlBatch instead of .execSql.
		 */
		getTableCreationSql(): string;
	}

	/**
	 * message interface used by the infoMessage and errorMessage events of Connection
	 */
	export interface InfoObject {
		/**
		 * Error number
		 */		 
		number: number;
		/**
		 * The error state, used as a modifier to the error number.
		 */		 
		state: any;
		/**
		 * The class (severity) of the error. A class of less than 10 indicates an informational message.
		 */		 
		class: number;
		/**
		 * The message text.
		 */		 
		message: string;
		/**
		 * The stored procedure name (if a stored procedure generated the message).
		 */		 
		procName: string;
		/**
		 * The line number in the SQL batch or stored procedure that caused the error. Line numbers begin at 1; therefore, if the line number is not applicable to the message, the value of LineNumber will be 0.
		 */		 
		lineNumber: number;
	}
	
	/**
	 * Connection
	 * @event  'connect' The attempt to connect and validate has completed.
	 * @event  'end' The connection has ended. This may be as a result of the client calling close(), the server closing the connection, or a network error.
	 * @event  'error' Internal error occurs.
	 * @event  'debug' A debug message is available. It may be logged or ignored.
	 * @event  'infoMessage' The server has issued an information message.
	 * @event  'errorMessage' The server has issued an error message.
	 * @event  'databaseChange' The server has reported that the active database has changed. This may be as a result of a sucessful login, or a use statement.
	 * @event  'languageChange' The server has reported that the language has changed.
	 * @event  'charsetChange' The server has reported that the charset has changed.
	 * @event  'secure' A secure connection has been established.
	 */
	export class Connection extends events.EventEmitter {
		
		constructor(config: ConnectionConfig);

		/**
		 * Start a transaction. As only one request at a time may be executed on 
		 * a connection, another request should not be initiated until this callback is called.
		 * @param callback The callback is called when the request to start the transaction has completed, either successfully or with an error. If an error occured then err will describe the error.
		 * @param name A string representing a name to associate with the transaction. Optional, and defaults to an empty string. Required when isolationLevel is present.
		 * @param isolationLevel	The isolation level that the transaction is to be run with.
		 */
		beginTransaction(callback: (error?: Error) => void, name?: string, isolationLevel?: ISOLATION_LEVEL): void;
		
		/**
		 * Commit a transaction. 
		 * There should be an active transaction. That is, beginTransaction should have been previously called.
		 * @param callback The callback is called when the request to commit the transaction has completed, either successfully or with an error. If an error occured then err will describe the error.
		 * 					As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
		 */
		commitTransaction(callback: (error: Error) => void): void;
		
		/**
		 * Rollback a transaction.	There should be an active transaction. That is, beginTransaction should have been previously called.
		 * @param callback	The callback is called when the request to rollback the transaction has completed, either successfully or with an error. If an error occured then err will describe the error.
		 * 						As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
		 */
		rollbackTransaction(callback: (error: Error) => void): void;

		/**
		 * Prepare the SQL represented by the request. The request can then be used in subsequent calls to execute and unprepare
		 * @param request A Request object representing the request. Parameters only require a name and type. Parameter values are ignored.
		 */
		prepare(request: Request): void;
		
		/**
		 * Release the SQL Server resources associated with a previously prepared request.
		 */
		unprepare(request: Request): void;

		/**
		 * Call a stored procedure represented by request.
		 */
		callProcedure(request: Request): void;
		
		/**
		 * Execute the SQL represented by request.
		 * As sp_executesql is used to execute the SQL, if the same SQL is executed multiples times using this function, the SQL Server query optimizer is likely to reuse the execution plan it generates for the first execution.
		 * Beware of the way that scoping rules apply, and how they may affect local temp tables. If you're running in to scoping issues, then execSqlBatch may be a better choice. See also issue #24.
		 */
		execSql(request: Request): void;
		
		/**
		 * Execute the SQL batch represented by request. There is no param support, and unlike execSql, it is not likely that SQL Server will reuse the execution plan it generates for the SQL.
		 * In almost all cases, execSql will be a better choice.
		 */
		execSqlBatch(request: Request): void;
		
		/**
		 * Execute previously prepared SQL, using the supplied parameters.
		 * @param request A previously prepared Request.
		 * @param parameters An object whose names correspond to the names of parameters that were added to the request before it was prepared. The object's values are passed as the parameters' values when the request is executed.
		 */
		execute(request: Request, parameters: {}): void;

		/**
		 * Creates a new BulkLoad instance.
		 * @param tableName The name of the table to bulk-insert into.
		 * @param callback A function which will be called after the BulkLoad finishes executing. rowCount will equal the number of rows inserted.
		 */
		newBulkLoad(tableName: string, callback: (error: Error, rowCount: number) => void): BulkLoad;
		
		/**
		 * Executes a BulkLoad.
		 */
		execBulkLoad(bulkLoad: BulkLoad): void;

		/**
		 * Reset the connection to its initial state. Can be useful for connection pool implementations.
		 * @param callback The callback is called when the connection reset has completed, either successfully or with an error. If an error occured then err will describe the error.
		 * 					As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.		
		 */
		reset(callback: (error: Error) => void): void;
		
		/**
		 * Cancel currently executed request.
		 */
		cancel(): void;
		
		/**
		 * Closes the connection to the database. The end will be emmited once the connection has been closed.
		 */
		close(): void;
		
	}
}
