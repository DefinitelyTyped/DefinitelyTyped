// Type definitions for node-mysql
// Project: https://github.com/felixge/node-mysql
// Definitions by: William Johnston <https://github.com/wjohnsto>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../node/node.d.ts' />

declare module "mysql" {
	import stream = require("stream");

	function createConnection(connectionUri: string): IConnection;
	function createConnection(config: IConnectionConfig): IConnection;
	function createPool(config: IPoolConfig): IPool;
	function createPoolCluster(config?: IPoolClusterConfig): IPoolCluster;
	function escape(value: any): string;
	function format(sql: string): string;
	function format(sql: string, values: Array<any>): string;

	interface IMySql {
		createConnection(connectionUri: string): IConnection;
		createConnection(config: IConnectionConfig): IConnection;
		createPool(config: IPoolConfig): IPool;
		createPoolCluster(config?: IPoolClusterConfig): IPoolCluster;
		escape(value: any): string;
		format(sql: string): string;
		format(sql: string, values: Array<any>): string;
	}

    interface IConnectionStatic {
        createQuery(sql: string): IQuery;
        createQuery(sql: string, callback: (err: IError, ...args: any[]) => void): IQuery;
        createQuery(sql: string, values: Array<any>): IQuery;
        createQuery(sql: string, values: Array<any>, callback: (err: IError, ...args: any[]) => void): IQuery;
    }

    interface IConnection {
        config: IConnectionConfig;

        threadId: number;

        beginTransaction(callback: (err: IError) => void): void;

        connect(): void;
        connect(callback: (err: IError, ...args: any[]) => void): void;
        connect(options: any, callback?: (err: IError, ...args: any[]) => void): void;

        commit(callback: (err: IError) => void): void;

        changeUser(options: IConnectionOptions): void;
        changeUser(options: IConnectionOptions, callback: (err: IError) => void): void;

        query: IQueryFunction;

        end(): void;
        end(callback: (err: IError, ...args: any[]) => void): void;
        end(options: any, callback: (err: IError, ...args: any[]) => void): void;

        destroy(): void;

        pause(): void;

        release(): void;
        resume(): void;

        escape(value: any): string;

        escapeId(value: string): string;
        escapeId(values: Array<string>): string;

        format(sql: string): string;
        format(sql: string, values: Array<any>): string;

        on(ev: string, callback: (...args: any[]) => void): IConnection;
        on(ev: 'error', callback: (err: IError) => void): IConnection;

        rollback(callback: () => void): void;
    }

    interface IPool {
        config: IPoolConfig;

        getConnection(callback: (err: IError, connection: IConnection) => void): void;

        query: IQueryFunction;

        on(ev: string, callback: (...args: any[]) => void): IPool;
        on(ev: 'connection', callback: (connection: IConnection) => void): IPool;
        on(ev: 'error', callback: (err: IError) => void): IPool;
    }

    interface IPoolCluster {
        config: IPoolClusterConfig;

        add(config: IPoolConfig): void;
        add(group: string, config: IPoolConfig): void;

        end(): void;

        getConnection(callback: (err: IError, connection: IConnection) => void): void;
        getConnection(group: string, callback: (err: IError, connection: IConnection) => void): void;
        getConnection(group: string, selector: string, callback: (err: IError, connection: IConnection) => void): void;

        of(pattern: string): IPool;
        of(pattern: string, selector: string): IPool;

        on(ev: string, callback: (...args: any[]) => void): IPoolCluster;
        on(ev: 'remove', callback: (nodeId: number) => void): IPoolCluster;
        on(ev: 'connection', callback: (connection: IConnection) => void): IPoolCluster;
        on(ev: 'error', callback: (err: IError) => void): IPoolCluster;
    }

    interface IQuery {
        /**
         * The SQL for a constructed query
         */
        sql: string;

        /**
         * Emits a query packet to start the query
         */
        start(): void;

        /**
         * Determines the packet class to use given the first byte of the packet.
         * 
         * @param firstByte The first byte of the packet
         * @param parser The packet parser
         */
        determinePacket(firstByte: number, parser: any): any;

        /**
         * Creates a Readable stream with the given options
         * 
         * @param options The options for the stream.
         */
        stream(options: IStreamOptions): stream.Readable;

        /**
         * Pipes a stream downstream, providing automatic pause/resume based on the 
         * options sent to the stream.
         * 
         * @param options The options for the stream.
         */
        pipe(callback: (...args: any[]) => void): IQuery;

        on(ev: string, callback: (...args: any[]) => void): IQuery;
        on(ev: 'error', callback: (err: IError) => void): IQuery;
        on(ev: 'fields', callback: (fields: any, index: number) => void): IQuery;
        on(ev: 'result', callback: (row: any, index: number) => void): IQuery;
        on(ev: 'end', callback: () => void): IQuery;
    }

    interface IQueryFunction {
        (sql: string): IQuery;
        (sql: string, callback: (err: IError, ...args: any[]) => void): IQuery;
        (sql: string, values: Array<any>): IQuery;
        (sql: string, values: Array<any>, callback: (err: IError, ...args: any[]) => void): IQuery;
        (sql: string, values: any): IQuery;
        (sql: string, values: any, callback: (err: IError, ...args: any[]) => void): IQuery;
        (options: IQueryOptions): IQuery;
        (options: IQueryOptions, callback: (err: IError, ...args: any[]) => void): IQuery;
        (options: IQueryOptions, values: Array<any>): IQuery;
        (options: IQueryOptions, values: Array<any>, callback: (err: IError, ...args: any[]) => void): IQuery;
        (options: IQueryOptions, values: any): IQuery;
        (options: IQueryOptions, values: any, callback: (err: IError, ...args: any[]) => void): IQuery;
    }

    interface IQueryOptions {
        /**
         * The SQL for the query
         */
        sql: string;

        /**
         * Every operation takes an optional inactivity timeout option. This allows you to specify appropriate timeouts for 
         * operations. It is important to note that these timeouts are not part of the MySQL protocol, and rather timeout 
         * operations through the client. This means that when a timeout is reached, the connection it occurred on will be 
         * destroyed and no further operations can be performed.
         */
        timeout?: number;

        /**
         * Either a boolean or string. If true, tables will be nested objects. If string (e.g. '_'), tables will be 
         * nested as tableName_fieldName
         */
        nestTables?: any;

        /**
         * Determines if column values should be converted to native JavaScript types. It is not recommended (and may go away / change in the future) 
         * to disable type casting, but you can currently do so on either the connection or query level. (Default: true)
         * 
         * You can also specify a function (field: any, next: () => void) => {} to do the type casting yourself.
         * 
         * WARNING: YOU MUST INVOKE the parser using one of these three field functions in your custom typeCast callback. They can only be called once.
         * 
         * field.string()
         * field.buffer()
         * field.geometry()
         * 
         * are aliases for
         * 
         * parser.parseLengthCodedString()
         * parser.parseLengthCodedBuffer()
         * parser.parseGeometryValue()
         * 
         * You can find which field function you need to use by looking at: RowDataPacket.prototype._typeCast
         */
        typeCast?: any;
    }

    interface IStreamOptions {
        /**
         * Sets the max buffer size in objects of a stream
         */
        highWaterMark?: number;

        /**
         * The object mode of the stream (Default: true)
         */
        objectMode?: any;
    }

    interface IConnectionOptions {
        /**
         * The MySQL user to authenticate as
         */
        user?: string;

        /**
         * The password of that MySQL user
         */
        password?: string;

        /**
         * Name of the database to use for this connection
         */
        database?: string;

        /**
         * The charset for the connection. This is called "collation" in the SQL-level of MySQL (like utf8_general_ci). 
         * If a SQL-level charset is specified (like utf8mb4) then the default collation for that charset is used. 
         * (Default: 'UTF8_GENERAL_CI')
         */
        charset?: string;
    }

    interface IConnectionConfig extends IConnectionOptions {
        /**
         * The hostname of the database you are connecting to. (Default: localhost)
         */
        host?: string;

        /**
         * The port number to connect to. (Default: 3306)
         */
        port?: number;

        /**
         * The source IP address to use for TCP connection
         */
        localAddress?: string;

        /**
         * The path to a unix domain socket to connect to. When used host and port are ignored
         */
        socketPath?: string;

        /**
         * The timezone used to store local dates. (Default: 'local')
         */
        timezone?: string;

        /**
         * The milliseconds before a timeout occurs during the initial connection to the MySQL server. (Default: 10 seconds)
         */
        connectTimeout?: number;

        /**
         * Stringify objects instead of converting to values. (Default: 'false')
         */
        stringifyObjects?: boolean;

        /**
         * Allow connecting to MySQL instances that ask for the old (insecure) authentication method. (Default: false)
         */
        insecureAuth?: boolean;

        /**
         * Determines if column values should be converted to native JavaScript types. It is not recommended (and may go away / change in the future) 
         * to disable type casting, but you can currently do so on either the connection or query level. (Default: true)
         * 
         * You can also specify a function (field: any, next: () => void) => {} to do the type casting yourself.
         * 
         * WARNING: YOU MUST INVOKE the parser using one of these three field functions in your custom typeCast callback. They can only be called once.
         * 
         * field.string()
         * field.buffer()
         * field.geometry()
         * 
         * are aliases for
         * 
         * parser.parseLengthCodedString()
         * parser.parseLengthCodedBuffer()
         * parser.parseGeometryValue()
         * 
         * You can find which field function you need to use by looking at: RowDataPacket.prototype._typeCast
         */
        typeCast?: any;

        /**
         * A custom query format function
         */
        queryFormat?: (query: string, values: any) => void;

        /**
         * When dealing with big numbers (BIGINT and DECIMAL columns) in the database, you should enable this option 
         * (Default: false)
         */
        supportBigNumbers?: boolean;

        /**
         * Enabling both supportBigNumbers and bigNumberStrings forces big numbers (BIGINT and DECIMAL columns) to be 
         * always returned as JavaScript String objects (Default: false). Enabling supportBigNumbers but leaving 
         * bigNumberStrings disabled will return big numbers as String objects only when they cannot be accurately 
         * represented with [JavaScript Number objects] (http://ecma262-5.com/ELS5_HTML.htm#Section_8.5) 
         * (which happens when they exceed the [-2^53, +2^53] range), otherwise they will be returned as Number objects. 
         * This option is ignored if supportBigNumbers is disabled.
         */
        bigNumberStrings?: boolean;

        /**
         * Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather then inflated into JavaScript Date 
         * objects. (Default: false)
         */
        dateStrings?: boolean;

        /**
         * This will print all incoming and outgoing packets on stdout. 
         * You can also restrict debugging to packet types by passing an array of types (strings) to debug;
         * 
         * (Default: false)
         */
        debug?: any;

        /**
         * Generates stack traces on Error to include call site of library entrance ("long stack traces"). Slight 
         * performance penalty for most calls. (Default: true)
         */
        trace?: boolean;

        /**
         * Allow multiple mysql statements per query. Be careful with this, it exposes you to SQL injection attacks. (Default: false)
         */
        multipleStatements?: boolean;

        /**
         * List of connection flags to use other than the default ones. It is also possible to blacklist default ones
         */
        flags?: Array<string>;

        /**
         * object with ssl parameters or a string containing name of ssl profile
         */
        ssl?: any;
    }

    interface IPoolConfig extends IConnectionConfig {
        /**
         * The milliseconds before a timeout occurs during the connection acquisition. This is slightly different from connectTimeout, 
         * because acquiring a pool connection does not always involve making a connection. (Default: 10 seconds)
         */
        acquireTimeout?: number;

        /**
         * Determines the pool's action when no connections are available and the limit has been reached. If true, the pool will queue 
         * the connection request and call it when one becomes available. If false, the pool will immediately call back with an error. 
         * (Default: true)
         */
        waitForConnections?: boolean;

        /**
         * The maximum number of connections to create at once. (Default: 10)
         */
        connectionLimit?: number;

        /**
         * The maximum number of connection requests the pool will queue before returning an error from getConnection. If set to 0, there 
         * is no limit to the number of queued connection requests. (Default: 0)
         */
        queueLimit?: number;
    }

    interface IPoolClusterConfig {
        /**
         * If true, PoolCluster will attempt to reconnect when connection fails. (Default: true)
         */
        canRetry?: boolean;

        /**
         * If connection fails, node's errorCount increases. When errorCount is greater than removeNodeErrorCount, 
         * remove a node in the PoolCluster. (Default: 5)
         */
        removeNodeErrorCount?: number;

        /**
         * The default selector. (Default: RR)
         * RR: Select one alternately. (Round-Robin)
         * RANDOM: Select the node by random function.
         * ORDER: Select the first node available unconditionally.
         */
        defaultSelector?: string;
    }

    interface ISslCredentials {
        /**
         * A string or buffer holding the PFX or PKCS12 encoded private key, certificate and CA certificates
         */
        pfx?: string;

        /**
         * A string holding the PEM encoded private key
         */
        key?: string;
        
        /**
         * A string of passphrase for the private key or pfx
         */
        passphrase?: string;
        
        /**
         * A string holding the PEM encoded certificate
         */
        cert?: string;
        
        /**
         * Either a string or list of strings of PEM encoded CA certificates to trust.
         */
        ca?: Array<string>;
        
        /**
         * Either a string or list of strings of PEM encoded CRLs (Certificate Revocation List)
         */
        crl?: Array<string>;
        
        /**
         * A string describing the ciphers to use or exclude
         */
        ciphers?: string;
    }

    interface IError extends Error {
        /**
         * Either a MySQL server error (e.g. 'ER_ACCESS_DENIED_ERROR'), 
         * a node.js error (e.g. 'ECONNREFUSED') or an internal error 
         * (e.g. 'PROTOCOL_CONNECTION_LOST').
         */
        code: string;

        /**
         * The error number for the error code
         */
        errno: number;

        /**
         * The sql state marker
         */
        sqlStateMarker?: string;

        /**
         * The sql state
         */
        sqlState?: string;

        /**
         * The field count
         */
        fieldCount?: number;

        /**
         * The stack trace for the error
         */
        stack?: string;

        /**
         * Boolean, indicating if this error is terminal to the connection object.
         */
        fatal: boolean;
    }
}

