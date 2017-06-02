// Type definitions for firebird
// Project: https://github.com/xdenser/node-firebird-libfbclient
// Definitions by: Yasushi Kato<http://github.com//karak/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @module firebird
 * 
 * This is a type declaration file for 'firebird' package.
 * 
 * Original document is [here](https://www.npmjs.com/package/firebird).
 */
declare module 'firebird' {

    /**
     * @see createConnection() method will create Firebird Connection object for you
     */
    function createConnection(): Connection;

    /**
     * Handles database connection and queries. Supports Synchronous and Asynchronous operation.
     */
    class Connection {
        constructor();

        /**
         * Connects you to database,
         * 
         * @param database a database name in Firebird notation, i.e. <hostname>:<path to database file | alias>
         * @param username user name
         * @param pasword
         * @param role
         * 
         * @throws raises exception on error (try to catch it).
         */
        connectSync(db: string, user: string, pass: string, role: string): void;

        /**
         * Asynchronously connects you to Database.
         * 
         * @param database a database name in Firebird notation, i.e. <hostname>:<path to database file | alias>
         * @param username user name
         * @param pasword
         * @param role
         * @param callback
         */
        connect(db: string, user: string, pass: string, role: string, callback: Callback): void;

        /**
         * A boolean readonly property indicating if Connection object is connected to database
         */
        connected: boolean;
        
        /**
         * Executes SQL query.
         * @param sql an SQL query to execute.
         * @return object in case of success. 
         * @throws Raises error otherwise.
         */
        querySync(sql: string): FBResult;

        /**
         * Asynchronously executes query.
         * 
         * @param sql an SQL query to execute.
         * @param callback
         */
        query(sql: string, callback: QueryCallback): void;

        /**
         * Registers connection to listen for firebird event name, called from PL\SQL (in stored procedures or triggers) with post_event 'name'.
         * 
         * @desc
         * You may set callback for event with
         * @code connection.on('fbevent', function(name, count){ <your code>));.
         * Where name is event name, and count is number of times event were posted.
         * 
         * @param name Firebird Event Name.
         */
        addFBevent(name: string): void;

        /**
         * Unsubscribes connection from getting events for name.
         * 
         * @param name Firebird Event Name.
         */
        deleteFBevent(name: string): void;

        /**
         * @summary
         * Synchronously commits current transaction.
         *
         * @desc
         * Notes:
         * There is only one transaction associated with connection.
         * Transacation is automatically started before any query if connection does not have active transaction (check @see inTransaction property).
         * You also should note that DDL statements (altering database structure) are commited automatically.
         * To run quieries in context of other transaction use @see Transaction object.
         */
        commitSync(): void;

        /**
         * Asynchronous commit transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         * 
         * @param callback
         */
        commit(callback: Callback): void;

        /**
         * Synchronously rollbacks current transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         */
        rollbackSync(): void;

        /**
         * Asynchronously rollbacks current transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         * 
         * @param callback 
         */
        rollback(callback: Callback): void;

        /**
         * Synchronously starts new default transaction.
         * 
         * @desc
         * The default transaction should be not in started state before call to this method.
         * Read notes in @see commitSync() .
         * 
         * @param callback 
         */
        startSync(): void;

        /**
         * Asynchronously starts new default transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         * 
         * @param callback 
         */
        start(callback: Callback): void;

        /**Synchronously prepares SQL statement and returns FBStatement object.
         * 
         * @param sql an SQL query to prepare.
         */
        prepareSync(sql: string): FBStatement;

        /**
         * A boolean readonly property indicating if connection is in started transaction state.
         */
        inTransaction: boolean;

        /**
         * Creates new FBblob object and opens it for write.
         * After finishing write operation and closing blob one may insert it in database passing as parameter to exec,
         * execSync methods of @see FBStatement object.
         */
        newBlobSync(): FBBlob;

        /**
         * Creates new Transaction object and starts new transaction.
         * @returns created object.
         */
        startNewTransactionSync(): Transaction;

        /**
         * Creates new Transaction object and starts new transaction. 
         * 
         * @param callback
         */
        startNewTransaction(callback: StartNewTransactionCallback): void;
    }

    type Callback = {
        /**
         * @param err err is error object in case of error.
         */
        (err: Error | null): void;
    };

    type QueryCallback = {
        /**
         * @param err error object or null
         * @param res @see FBReslt object
         */
        (err: Error | null, res: FBResult): void;
    };

    type StartNewTransactionCallback = {
        /**
         * @param err error object in case of error
         * @param transaction newly created transaction
         */
        (err: Error | null, transaction: Transaction): void;
    };

    /**
     * @desc
     * Here is Firebird to Node data type accordance:
     * 
     * | Firebird  | Node      |
     * | :-------  | :-------- |
     * | DATE	   |	Date   |
     * | TIME	   |	Date   |
     * | TIMESTAMP | 	Date   |
     * | CHAR      | 	String |
     * | VARCHAR   | 	String |
     * | SMALLINT  | 	Integer|
     * | INTEGER   | 	Integer|
     * | NUMERIC   | 	Number |
     * | DECIMAL   | 	Number |
     * | FLOAT     | 	Number |
     * | DOUBLE    | 	Number |
     * | BLOB      | 	FBblob |
     */
    type DataType = Date | string /*| Integer*/ | number | FBBlob;

    /**
     * Represents results of SQL query if any.
     * You should use this object to fetch rows from database.
     * Each row may be represented as array of field values or as object with named fields.
     * 
     * @see DataType
     */
    class FBResult {
        /**
         * @summary
         * Synchronously fetches result rows.
         * 
         * @desc
         * If you pass "all" as rowCount - it will fetch all result rows.
         * If you pass less rowCount than are actually in result, it will return specified number of rows.
         * You may call fetchSync multiple times until all rows will be fetched.
         * If you specify more rowCount than available it will return only actual number of rows.
         * 
         * @param rowCount number of rows to fetch from results;
         * @param asObject format of returned rows. When false - methods returns array of array, when true - array of objects.
         */
        fetchSync(rowCount: number | "all", asObject: boolean): Array<Array<DataType>> | Array<{[column: string]: DataType}>;
        fetchSync(rowCount: number | "all", asObject: false): Array<Array<DataType>>;
        fetchSync(rowCount: number | "all", asObject: true): Array<{[column: string]: DataType}>;
        fetchSync<T>(rowCount: number | "all", asObject: true): Array<T>;

        /**
         * Asynchronously fetches rows one by one.
         * 
         * @param rowCount number of rows to fetch from results
         * @param asObject format of returned rows. When false - methods returns array of array, when true - array of objects
         * @param rowCallback called for each fetched row.
         * @param eofCallback called when whole operation is complete.
         */
        fetch(rowCount: number | "all", asObject: boolean, rowCallback: ArrayRowCallback| ObjectRowCallback, eofCallback: EofCallback): void;
        fetch(rowCount: number | "all", asObject: false, rowCallback: ArrayRowCallback, eofCallback: EofCallback): void;
        fetch(rowCount: number | "all", asObject: true, rowCallback: ObjectRowCallback, eofCallback: EofCallback): void;
        fetch<T extends Object>(rowCount: number | "all", asObject: true, rowCallback: TypedObjectRowCallback<T>, eofCallback: EofCallback): void;
    }

    type ArrayRowCallback = {
        /**
         * @param row representing single row from result
         */
        (row: DataType[]): void;
    }

    type ObjectRowCallback = {
        /**
         * @param row representing single row from result
         */
        (row: {[column: string]: DataType}): void;
    }

    type TypedObjectRowCallback<T extends Object> = {
        /**
         * @param row representing single row from result
         */
        (row: T): void;
    }

    type EofCallback = {
        /**
         * @param err
         * @param eof indicates if end of result set was met.
         */
        (err: Error | null, eof: boolean): void;
    }

    /**
     * Represents SQL transaction.
     * 
     * @desc
     * To get instance of this object call @see startNewTransactionSync or @see startNewTransaction methods of @see Connection object.
     * Transaction objects may be reused after commit or rollback.
     */
    interface Transaction {
        /**
         * Executes SQL query in context of this transaction. Returns FBResult object in case of success. Raises error otherwise.
         * 
         * @param sql  an SQL query to execute.
         */
        querySync(sql: string): void;

        /**
         * Asynchronously executes query in context of this transaction.
         */
        query(sql: string, callback: QueryCallback): void;

        /**
         * Synchronously commits this transaction.
         * 
         * @desc
         * Notes:
         * Transacation is automatically started before any query in context of this object
         * if this object does not have active transaction (check inTransaction property).
         * You also should note that DDL statements (altering database structure) are commited automatically.
         */
        commitSync(): void;

        /**
         * Asynchronous commit transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         * 
         * @param callback
         */
        commit(callback: Callback): void;

         /**
          * Synchronously rollbacks transaction.
          * 
          * @desc
          * Read notes in @see commitSync() .
          */
        rollbackSync(): void;

        /**
         * Asynchronously rollbacks transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         * 
         * @param callback
         */
        rollback(callback: Callback): void;

        /**
         * Synchronously starts transaction.
         * 
         * @desc
         * The transaction should be not in started state before call to this method.
         * Read notes in @see commitSync() .
         * See @see inTransaction property.
         */
        startSync(): void;

        /**
         * Asynchronously starts new transaction.
         * 
         * @desc
         * Read notes in @see commitSync() .
         * 
         * @param callback
         */
        start(callback: Callback): void;
        
        /**
         * Synchronously prepares SQL statement
         * 
         * @param sql an SQL query to prepare.
         * @returns @see FBStatement object in context of this transaction.
         */
        prepareSync(sql: string): FBStatement;

        /*
         * A boolean readonly property indicating if this transaction is in started state.
         */
        inTransaction: boolean
    }

    /**
     * Represents prepared SQL query (returned by @see Connection.prepare() and @see Connection.prepareSync()).
     * 
     * @see FBStatement is derived form @see FBResult class.
     * So it can fetch rows just like @see FBresult object after call to @see execSync, exec methods.
     */
    class FBStatement extends FBResult {
        /**
         * Synchronously executes prepared statement with given parameters.
         * 
         * @desc
         * You may fetch rows with methods inherited from @see FBResult.
         * @see Statement is executed in context of default connection transaction.
         * 
         * @param params parameters of prepared statement in the same order as in SQL and with appropriate types.
         */
        execSync(...params: DataType[]): void;

        /**
         * Same as @see execSync but executes statement in context of given @see Transaction obejct.
         *
         * @param transaction 
         * @param params 
         */
        execInTransSync(transaction: Transaction, ...params: DataType[]): void;

        /**
         * Asynchronously executes prepared statement with given parameters.
         * 
         * @desc
         * @see FBStatement emits 'result' or 'error' event.
         * You may fetch rows with methods inherited from @see FBResult after 'result' event emitted.
         * Statement is executed in context of default connection transaction.
         * 
         * @param params parameters of prepared statement in the same order as in SQL and with appropriate types.
         */
         exec(...params: DataType[]): void;

         /**
          * Same as @see exec but executes statement in context of given @see Transaction obejct.
          *
          * @param transaction 
          * @param params 
          */
         execInTrans(transaction: Transaction, ...params: DataType[]): void;    
    }

    /**
     * Represents BLOB data type.
     */
    interface FBBlob {
        /**
         * Synchronously opens blob for reading.
         */
        _openSync(): void;

        /**
         * Synchronously closes previously opened blob.
         */
        _closeSync(): void;

        /**
         * Synchronously reads BLOB segment (chunk) into buffer. Tries to fill whole buffer with data. 
         * 
         * @param buffer Node buffer to fill with data.
         * @returns actual number of bytes read.
         */
         _readSync(buffer: Buffer): number;

         /**
          * Asynchronously reads BLOB segment (chunk) into buffer. Tries to fill whole buffer with data.
          *
          * @param buffer Node buffer to fill with data.
          * @param callback
          */
         _read(buffer: Buffer, callback: FBBlobReadCallback): void;

         /**
          * Asynchronously reads all data from BLOB field.
          * Object emits events while reading data error, drain',end`.

          * @param initialSize - optional, initial result buffer to allocate, default = 0
          * @param chunkSize - optional, size of chunk used to read data, default = 1024
          * @param callback - optional
          */
          _readAll(): void;
          _readAll(initialSize: number): void;
          _readAll(initialSize: number, chunkSize: number,): void;
          _readAll(initialSize: number, callback: FBBlobReadAllCallback): void;
          _readAll(initialSize: number, chunkSize: number, callback: FBBlobReadAllCallback): void;
          _readAll(callback: FBBlobReadAllCallback): void;

          /**
           * Synchronously writes BLOB segment (chunk) from buffer.
           * 
           * @param buffer Node buffer to write from to blob;
           * @param len optional length parameter, if specified only len bytes from buffer will be writen.
           * @returns number of bytes actually writen.
           */
          _writeSync(buffer: Buffer, len?: number): number;

          /**
           * Asynchronously writes BLOB segment (chunk) from buffer and calls callback function if any.
           * 
           * @param buffer Node buffer to write from to blob;
           * @param len optional length parameter, if specified only len bytes from buffer will be writen.
           * @param callback
           */
          _write(buffer: Buffer, len?: number, callback?: Callback): void;
    }

    type FBBlobReadCallback = {
        /**
         * @param err @see Error object in case of error, or null
         * @param buffer buffer filled with data
         * @param len actual data length.
         */
        (err: Error | null, buffer: Buffer, len: number): void;
    };

    type FBBlobReadAllCallback = {
        /**
         * @param err @see Error object in case of error, or null
         * @param buffer  buffer filled with data
         * @param len - actual data length.
         */
        (err: Error | null, buffer: Buffer, len: number): void;
    };

    /**
     * Represents BLOB stream.
     * 
     * @desc
     * Create BLOB stream using 
     * @code var strm = new fb.Stream(FBblob);.
     * 
     * You may pipe strm to/from NodeJS Stream objects (fs or socket).
     * You may also look at [NodeJS Streams reference](https://nodejs.org/api/stream.html).
     */
    class Stream implements NodeJS.ReadWriteStream {
        constructor (blob: FBBlob);

        /* NodeJS.ReadStream */
        readable: boolean;
        read(size?: number): string | Buffer;
        setEncoding(encoding: string | null): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): this;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;

        /* NodeJS.WriteStream */
        writable: boolean;
        write(buffer: Buffer | string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;

        /* EventEmitter */
        addListener(event: string | symbol, listener: Function): this;
        on(event: string | symbol, listener: Function): this;
        once(event: string | symbol, listener: Function): this;
        removeListener(event: string | symbol, listener: Function): this;
        removeAllListeners(event?: string | symbol): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        emit(event: string | symbol, ...args: any[]): boolean;
        listenerCount(type: string | symbol): number;
        prependListener(event: string | symbol, listener: Function): this;
        prependOnceListener(event: string | symbol, listener: Function): this;
        eventNames(): (string | symbol)[];
    }
}
