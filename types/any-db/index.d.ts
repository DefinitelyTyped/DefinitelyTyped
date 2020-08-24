// Type definitions for any-db 2.1.0
// Project: https://github.com/grncdr/node-any-db
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import events = require("events");
import stream = require("stream");

export interface ConnectOpts {
    adapter: string;
}

export interface Adapter {
    name: string;
    /**
     * Create a new connection object. In common usage, config will be created by parse-db-url and passed to the adapter by any-db.
     * If a continuation is given, it must be called, either with an error or the established connection.
     */
    createConnection(opts: ConnectOpts, callback?: (error: Error, result: Connection) => void): Connection;

    /**
     * Create a Query that may eventually be executed later on by a Connection. While this function is rarely needed by user code,
     * it makes it possible for ConnectionPool.query and Transaction.query to fulfill the Queryable.query contract
     * by synchronously returning a Query stream
     */
    createQuery(text: string, params?: any[], callback?: (error: Error, result: ResultSet) => void): Query;
    createQuery(query: Query): Query;
}
/**
 * Other properties are driver specific
 */
export interface Field {
    name: string;
}

/**
 * ResultSet objects are just plain data that collect results of a query when a continuation
 * is provided to Queryable.query. The lastInsertId is optional, and currently supported by
 * sqlite3 and mysql but not postgres, because it is not supported by Postgres itself.
 */
export interface ResultSet {
    /**
     * Affected rows. Note e.g. for INSERT queries the rows property is not filled even
     * though rowCount is non-zero.
     */
    rowCount: number;
    /**
     * Result rows
     */
    rows: any[];
    /**
     * Result field descriptions
     */
    fields: Field[];

    /**
     * Not supported by all drivers.
     */
    fieldCount?: number;
    /**
     * Not supported by all drivers.
     */
    lastInsertId?: any;
    /**
     * Not supported by all drivers.
     */
    affectedRows?: number;
    /**
     * Not supported by all drivers.
     */
    changedRows?: number;
}

/**
 * Query objects are returned by the Queryable.query method, available on connections,
 * pools, and transactions. Queries are instances of Readable, and as such can be piped
 * through transforms and support backpressure for more efficient memory-usage on very
 * large results sets. (Note: at this time the sqlite3 driver does not support backpressure)
 *
 * Internally, Query instances are created by a database Adapter and may have more methods,
 * properties, and events than are described here. Consult the documentation for your
 * specific adapter to find out about any extensions.
 *
 * Events:
 *
 * Error event
 * The 'error' event is emitted at most once per query. Note that this event will be
 * emitted for errors even if a callback was provided, the callback will
 * simply be subscribed to the 'error' event.
 * One argument is passed to event listeners:
 * error - the error object.
 *
 * Fields event
 * A 'fields' event is emmitted before any 'data' events.
 * One argument is passed to event listeners:
 * fields - an array of [Field][ResultSet] objects.
 *
 * The following events are part of the stream.Readable interface which is implemented by Query:
 *
 * Data event
 * A 'data' event is emitted for each row in the query result set.
 * One argument is passed to event listeners:
 * row contains the contents of a single row in the query result
 *
 * Close event
 * A 'close' event is emitted when the query completes.
 * No arguments are passed to event listeners.
 *
 * End event
 * An 'end' event is emitted after all query results have been consumed.
 * No arguments are passed to event listeners.
 */
export interface Query extends stream.Readable {
    /**
     * The SQL query as a string. If you are using MySQL this will contain
     * interpolated values after the query has been enqueued by a connection.
     */
    text: string;

    /**
     * The array of parameter values.
     */
    values: any[];

    /**
     * The callback (if any) that was provided to Queryable.query. Note that
     * Query objects must not use a closed over reference to their callback,
     * as other any-db libraries may rely on modifying the callback property
     * of a Query they did not create.
     */
    callback: (error: Error, results: ResultSet) => void;
}

/**
 * Events:
 * The 'query' event is emitted immediately before a query is executed. One argument is passed to event handlers:
 * - query:    a Query object
 */
export interface Queryable extends events.EventEmitter {
    /**
     * The Adapter instance that will be used by this Queryable for creating Query instances and/or connections.
     */
    adapter: Adapter;

    /**
     * Execute a SQL statement using bound parameters (if they are provided) and return a Query object
     * that is a Readable stream of the resulting rows. If a Continuation<ResultSet> is provided the rows
     * returned by the database will be aggregated into a [ResultSet][] which will be passed to the
     * continuation after the query has completed.
     * The second form is not needed for normal use, but must be implemented by adapters to work correctly
     * with ConnectionPool and Transaction. See Adapter.createQuery for more details.
     */
    query(text: string, params?: any[], callback?: (error: Error, results: ResultSet) => void): Query

    /**
     * The second form is not needed for normal use, but must be implemented by adapters to work correctly
     * with ConnectionPool and Transaction. See Adapter.createQuery for more details.
     */
    // query(query: Query): Query;
}

/**
 * Connection objects are obtained using createConnection from Any-DB or ConnectionPool.acquire,
 * both of which delegate to the createConnection implementation of the specified adapter.
 * While all Connection objects implement the Queryable interface, the implementations in
 * each adapter may add additional methods or emit additional events. If you need to access a
 * feature of your database that is not  described here (such as Postgres' server-side prepared
 * statements), consult the documentation for your adapter.
 *
 * Events:
 * Error event
 * The 'error' event is emitted when there is a connection-level error.
 * No arguments are passed to event listeners.
 *
 * Open event
 * The 'open' event is emitted when the connection has been established and is ready to query.
 * No arguments are passed to event listeners.
 *
 * Close event
 * The 'close' event is emitted when the connection has been closed.
 * No arguments are passed to event listeners.
 */
export interface Connection extends Queryable {
    /**
     * Close the database connection. If a continuation is provided it
     * will be called after the connection has closed.
     */
    end(callback?: (error: Error) => void): void;
}

export interface ConnectionStatic {
    new (): Connection;

    name: string;
    createConnection(): void;
    createPool(): void;
}

/**
 * ConnectionPool events
 * 'acquire' - emitted whenever pool.acquire is called
 * 'release' - emitted whenever pool.release is called
 * 'query', query - emitted immediately after .query is called on a
 *         connection via pool.query. The argument is a Query object.
 * 'close' - emitted when the connection pool has closed all of it
 *         connections after a call to close().
 */
export interface ConnectionPool extends Queryable {
    /**
     * Implements Queryable.query by automatically acquiring a connection
     * and releasing it when the query completes.
     */
    query(text: string, params?: any[], callback?: (error: Error, results: ResultSet) => void): Query;

    /**
     * Remove a connection from the pool. If you use this method you must
     * return the connection back to the pool using ConnectionPool.release
     */
    acquire(callback: (error: Error, result: Connection) => void): void;

    /**
     * Return a connection to the pool. This should only be called with connections
     * you've manually acquired. You must not continue to use the connection after releasing it.
     */
    release(connection: Connection): void;

    /**
     * Stop giving out new connections, and close all existing database connections as they
     * are returned to the pool.
     */
    close(callback?: (error: Error) => void): void;
}

/**
 * A PoolConfig is generally a plain object with any of the following properties (they are all optional):
 */
export interface PoolConfig {
    /**
     * min (default 0) The minimum number of connections to keep open in the pool.
     */
    min?: number;
    /**
     * max (default 10) The maximum number of connections to keep open in the pool.
     * When this limit is reached further requests for connections will queue waiting
     * for an existing connection to be released back into the pool.
     */
    max?: number;
    /**
     * (default 30000) The maximum amount of time a connection can sit idle in the pool before being reaped
     */
    idleTimeout?: number;
    /**
     *  (default 1000) How frequently the pool should check for connections that are old enough to be reaped.
     */
    reapInterval?: number;
    /**
     * (default true) When this is true, the pool will reap connections that
     * have been idle for more than idleTimeout milliseconds.
     */
    refreshIdle?: boolean;
    /**
     * Called immediately after a connection is first established. Use this to do one-time setup of new connections.
     * The supplied Connection will not be added to the pool until you pass it to the done continuation.
     */
    onConnect?: (connection: Connection, ready: (error: Error, result: Connection) => void) => void;
    /**
     * Called each time a connection is returned to the pool. Use this to restore a connection to
     * it's original state (e.g. rollback transactions, set the database session vars). If reset
     * fails to call the done continuation the connection will be lost in limbo.
     */
    reset?: (connection: Connection, done: (error: Error) => void) => void;
    /**
     * (default function (err) { return true }) - Called when an error is encountered
     * by pool.query or emitted by an idle connection. If shouldDestroyConnection(error)
     * is truthy the connection will be destroyed, otherwise it will be reset.
     */
    shouldDestroyConnection?: (error: Error) => boolean;
}

/**
 * Create a database connection.
 * @param url    String of the form adapter://user:password@host/database
 * @param callback
 * @returns    Connection object.
 */
export declare function createConnection(url: string, callback?: (error: Error, connection: Connection) => void): Connection;

/**
 * Create a database connection.
 * @param opts    Object with adapter name and any properties that the given adapter requires
 * @param callback
 * @returns    Connection object.
 */
export declare function createConnection(opts: ConnectOpts, callback?: (error: Error, connection: Connection) => void): Connection;


export declare function createPool(url: string, config: PoolConfig): ConnectionPool;
export declare function createPool(opts: ConnectOpts, config: PoolConfig): ConnectionPool;
