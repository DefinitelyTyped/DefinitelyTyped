// Type definitions for oracledb v3.1.2
// Project: https://github.com/oracle/node-oracledb
// Definitions by: Richard Natal <https://github.com/Bigous>
//                 Connor Fitzgerald <https://github.com/CFitzgerald1995>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex, Readable } from 'stream';

declare namespace oracledb {
    /** Constant for the query result outFormat option. */
    const ARRAY  : number;
    /** Constant for the query result outFormat option. */
    const OBJECT : number;

    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const BLOB   : number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const BUFFER : number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const CLOB   : number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const CURSOR : number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const DATE   : number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const DEFAULT: number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const NUMBER : number;
    /** Constant for execute() bind parameter type property, for the createLob() type parameter, for the Lob type property, for fetchAsBuffer, for fetchAsString and fetchInfo, and for extended metadata. */
    const STRING : number;

    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_BINARY_DOUBLE: number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_BINARY_FLOAT : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_BLOB         : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_CHAR         : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_CLOB         : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_DATE         : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_LONG         : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_LONG_RAW     : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_NCHAR        : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_NCLOB        : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_NUMBER       : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_NVARCHAR     : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_RAW          : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_ROWID        : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_TIMESTAMP    : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_TIMESTAMP_LTZ: number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_TIMESTAMP_TZ : number;
    /** Constant which represents the Oracle Database type. */
    const DB_TYPE_VARCHAR      : number;

    /** Constant for the dir property of execute() bindParams, queryStream() and executeMany() bindDefs. */
    const BIND_IN   : number;
    /** Constant for the dir property of execute() bindParams, queryStream() and executeMany() bindDefs. */
    const BIND_INOUT: number;
    /** Constant for the dir property of execute() bindParams, queryStream() and executeMany() bindDefs. */
    const BIND_OUT  : number;

    /** Constant for getConnection() privilege properties. */
    const SYSDBA   : number;
    /** Constant for getConnection() privilege properties. */
    const SYSOPER  : number;
    /** Constant for getConnection() privilege properties. */
    const SYSASM   : number;
    /** Constant for getConnection() privilege properties. */
    const SYSBACKUP: number;
    /** Constant for getConnection() privilege properties. */
    const SYSDG    : number;
    /** Constant for getConnection() privilege properties. */
    const SYSKM    : number;
    /** Constant for getConnection() privilege properties. */
    const SYSRAC   : number;

    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_UNKNOWN     : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_SELECT      : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_UPDATE      : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_DELETE      : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_INSERT      : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_CREATE      : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_DROP        : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_ALTER       : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_BEGIN       : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_DECLARE     : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_CALL        : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_EXPLAIN_PLAN: number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_MERGE       : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_ROLLBACK    : number;
    /** Constant for connection.getStatementInfo() properties. */
    const STMT_TYPE_COMMIT      : number;

    /** Constant for the Continuous Query Notification message.type. */
    const SUBSCR_EVENT_TYPE_AQ          : number;
    /** Constant for the Continuous Query Notification message.type. */
    const SUBSCR_EVENT_TYPE_DEREG       : number;
    /** Constant for the Continuous Query Notification message.type. */
    const SUBSCR_EVENT_TYPE_OBJ_CHANGE  : number;
    /** Constant for the Continuous Query Notification message.type. */
    const SUBSCR_EVENT_TYPE_QUERY_CHANGE: number;

    /** Constant for the Continuous Query Notification groupingClass. */
    const SUBSCR_GROUPING_CLASS_TIME: number;

    /** Constant for the Continuous Query Notification groupingType. */
    const SUBSCR_GROUPING_TYPE_SUMMARY: number;
    /** Constant for the Continuous Query Notification groupingType. */
    const SUBSCR_GROUPING_TYPE_LAST   : number;

    /** Constant for the Continuous Query Notification qos Quality of Service. */
    const SUBSCR_QOS_BEST_EFFORT: number;
    /** Constant for the Continuous Query Notification qos Quality of Service. */
    const SUBSCR_QOS_DEREG_NFY  : number;
    /** Constant for the Continuous Query Notification qos Quality of Service. */
    const SUBSCR_QOS_QUERY      : number;
    /** Constant for the Continuous Query Notification qos Quality of Service. */
    const SUBSCR_QOS_RELIABLE   : number;
    /** Constant for the Continuous Query Notification qos Quality of Service. */
    const SUBSCR_QOS_ROWIDS     : number;

    /** Constant for the Continuous Query Notification namespace. */
    const SUBSCR_NAMESPACE_AQ      : number;
    /** Constant for the Continuous Query Notification namespace. */
    const SUBSCR_NAMESPACE_DBCHANGE: number;

    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_ALL_OPS : number;
    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_ALL_ROWS: number;
    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_ALTER   : number;
    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_DELETE  : number;
    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_DROP    : number;
    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_INSERT  : number;
    /** Constant for the Continuous Query Notification connection.subscribe() option operations, and for the notification message operation properties. */
    const CQN_OPCODE_UPDATE  : number;

    /** Constant for the connection pool.status readonly attribute. */
    const POOL_STATUS_OPEN    : number;
    /** Constant for the connection pool.status readonly attribute. */
    const POOL_STATUS_DRAINING: number;
    /** Constant for the connection pool.status readonly attribute. */
    const POOL_STATUS_CLOSED  : number;

    /** Constant for the sodaDatabase.createCollection() mode property. */
    const SODA_COLL_MAP_MODE: number;

    /**
     * If true, the transaction in the current connection is automatically committed at the end of statement execution.
     * This property may be overridden in an execute() call.
     * 
     * @default false
     * @since 0.5
     */
    let autoCommit: boolean;
    /**
     * The user-chosen Connection class value defines a logical name for connections. 
     * Most single purpose applications should set connectionClass when using a connection pool or DRCP.
     * 
     * When a pooled session has a connection class, Oracle ensures that the session is not shared outside of that connection class.
     * 
     * The connection class value is similarly used by Database Resident Connection Pooling (DRCP) to allow or disallow sharing of sessions.
     * 
     * For example, where two different kinds of users share one pool, you might set connectionClass to ‘HRPOOL’ for connections that
     * access a Human Resources system, and it might be set to ‘OEPOOL’ for users of an Order Entry system.
     * Users will only be given sessions of the appropriate class, allowing maximal reuse of resources in each case,
     * and preventing any session information leaking between the two systems.
     * 
     * If connectionClass is set for a non-pooled connection, the driver name is not recorded in V$ views.
     */
    let connectionClass: string;
    /**
     * Sets the name used for Edition-Based Redefinition by connections.
     * 
     * @since 2.2
     */
    let edition: string;
    /**
     * Determines whether Oracle Client events mode should be enabled.
     * 
     * This property can be overridden in the oracledb.createPool() call and when getting a standalone connection from oracledb.getConnection().
     * 
     * Events mode is required for Continuous Query Notification, Fast Application Notification (FAN) and Runtime Load Balancing (RLB).
     * 
     * @default false
     * @since 2.2
     */
    let events: boolean;
    /**
     * Determines whether additional metadata is available for queries and for REF CURSORs returned from PL/SQL blocks.
     * 
     * With this value, the result.metaData result.resultSet.metaData objects only include column names.
     * 
     * If extendedMetaData is true then metaData will contain additional attributes.
     * 
     * This property may be overridden in an execute() call.
     * 
     * @default false
     * @since 1.10
     */
    let extendedMetaData: boolean;
    /**
     * If true, connections will be established using external authentication.
     * 
     * The user and password properties should not be set when externalAuth is true.
     * 
     * This property can be overridden in the oracledb.createPool() call and when getting a standalone connection from oracledb.getConnection().
     * 
     * @default false
     * @since 0.5
     */
    let externalAuth: boolean;
    /**
     * This property sets the size of an internal buffer used for fetching query rows from Oracle Database.
     * Changing it may affect query performance but does not affect how many rows are returned to the application.
     * 
     * The property is used during the default direct fetches, during ResultSet getRow() calls, and for queryStream(). It is not used for getRows().
     * 
     * Increasing this value reduces the number of round-trips to the database but increases memory usage for each data fetch.
     * For queries that return a large number of rows, higher values of fetchArraySize may give better performance.
     * For queries that only return a few rows, reduce the value of fetchArraySize to minimize the amount of memory management during data fetches.
     * JavaScript memory fragmentation may occur in some cases.
     * 
     * For direct fetches (those using execute() option resultSet: false), the internal buffer size will be based on the lesser of maxRows and fetchArraySize.
     * 
     * @default 100
     * @since 2.0
     */
    let fetchArraySize: number;
    /**
     * Configure data types to be returned as a Buffer instead of the default representation when queried with execute() or queryStream().
     * 
     * Currently the only valid type is oracledb.BLOB.
     * 
     * By default in node-oracledb, all columns are returned as native types or as Lob instances, in the case of CLOB and BLOB types.
     * 
     * Individual query columns in execute() or queryStream() calls can override the fetchAsBuffer global setting by using fetchInfo.
     * 
     * @since 1.13
     */
    let fetchAsBuffer: Array<number>;
    /**
     * An array of node-oracledb types. The valid types are oracledb.DATE, oracledb.NUMBER, oracledb.BUFFER, and oracledb.CLOB.
     * When any column having one of the specified types is queried with execute() or queryStream(), the column data is returned as a string instead of the default representation.
     * 
     * By default in node-oracledb, all columns are returned as native types or as Lob instances, in the case of CLOB and BLOB types.
     * 
     * This property helps avoid situations where using JavaScript types can lead to numeric precision loss, or where date conversion is unwanted.
     * 
     * For raw data returned as a string, Oracle returns the data as a hex-encoded string. 
     * For dates and numbers returned as a string, the maximum length of a string created by this mapping is 200 bytes. 
     * Strings created for CLOB columns will generally be limited by Node.js and V8 memory restrictions.
     * 
     * Individual query columns in execute() or queryStream() calls can override the fetchAsString global setting by using fetchInfo.
     * 
     * For non-CLOB types, the conversion to string is handled by Oracle client libraries and is often referred to as defining the fetch type.
     */
    let fetchAsString: Array<number>;
    /**
     * This attribute is temporarily disabled. Setting it has no effect.
     * 
     * Node-oracledb internally uses Oracle LOB Locators to manipulate long object (LOB) data.
     * LOB Prefetching allows LOB data to be returned early to node-oracledb when these locators are first returned.
     * This is similar to the way row prefetching allows for efficient use of resources and round-trips between
     * node-oracledb and the database.
     * 
     * Prefetching of LOBs is mostly useful for small LOBs.
     * 
     * @default 16384
     */
    let lobPrefetchSize: number;
    /**
     * The maximum number of rows that are fetched by a query with connection.execute() when not using a ResultSet.
     * Rows beyond this limit are not fetched from the database. A value of 0 means there is no limit.
     * 
     * This property may be overridden in an execute() call.
     * 
     * To improve database efficiency, SQL queries should use a row limiting clause like OFFSET / FETCH or equivalent.
     * The maxRows property can be used to stop badly coded queries from returning unexpectedly large numbers of rows.
     * 
     * When the number of query rows is relatively big, or can not be predicted, it is recommended to use
     * a ResultSet or queryStream(). This allows applications to process rows in smaller chunks or individually,
     * preventing the Node.js memory limit being exceeded or query results being unexpectedly truncated by a
     * maxRows limit.
     * 
     * @default 0 (unlimited)
     */
    let maxRows: number;
    /**
     * This readonly property gives a numeric representation of the Oracle client library version which
     * is useful in comparisons. For version a.b.c.d.e, this property
     * gives the number: (100000000 * a) + (1000000 * b) + (10000 * c) + (100 * d) + e
     * 
     * @since 1.3
     */
    const oracleClientVersion: number;
    /**
     * This readonly property gives a string representation of the Oracle client library version which is useful for display.
     * 
     * @since 2.2
     */
    const oracleClientVersionString: string;
    /**
     * The format of query rows fetched when using connection.execute() or connection.queryStream().
     * It affects both ResultSet and non-ResultSet queries. It can be used for top level queries and REF CURSOR output.
     * 
     * This can be either of the Oracledb constants oracledb.ARRAY or oracledb.OBJECT.
     * 
     * If specified as oracledb.ARRAY, each row is fetched as an array of column values.
     * 
     * If specified as oracledb.OBJECT, each row is fetched as a JavaScript object.
     * The object has a property for each column name, with the property value set to the respective column value.
     * The property name follows Oracle’s standard name-casing rules. It will commonly be uppercase,
     * since most applications create tables using unquoted, case-insensitive names.
     * 
     * This property may be overridden in an execute() or queryStream() call.
     * 
     * @default ARRAY
     */
    let outFormat: number;
    /**
     * The number of connections that are opened whenever a connection request exceeds the number of currently open connections.
     * 
     * This property may be overridden when creating a connection pool.
     * 
     * @default 1
     */
    let poolIncrement: number;
    /**
     * The maximum number of connections to which a connection pool can grow.
     * 
     * This property may be overridden when creating a connection pool.
     * 
     * Importantly, if you increase poolMax you should also increase the number of threads available to node-oracledb.
     * 
     * @default 4
     */
    let poolMax: number;
    /**
     * The minimum number of connections a connection pool maintains, even when there is no activity to the target database.
     * 
     * This property may be overridden when creating a connection pool.
     * 
     * For pools created with External Authentication or with homogeneous set to false, the number of
     * connections initially created is zero even if a larger value is specified for poolMin.
     * The pool increment is always 1, regardless of the value of poolIncrement.
     * Once the number of open connections exceeds poolMin and connections are idle for more than
     * the poolTimeout seconds, then the number of open connections does not fall below poolMin.
     * 
     * @default 0
     */
    let poolMin: number;
    /**
     * When a pool getConnection() is called and the connection has been idle in the pool for at least
     * poolPingInterval seconds, node-oracledb internally “pings” the database to check the connection is alive.
     * After a ping, an unusable connection is destroyed and a usable one is returned by getConnection().
     * Connection pinging improves the chance a pooled connection is valid when it is first used because
     * identified unusable connections will not be returned to the application.
     * 
     * This property may be overridden when creating a connection pool.
     * 
     * @default 60
     * @since 1.12
     */
    let poolPingInterval: number;
    /**
     * The number of seconds after which idle connections (unused in the pool) are terminated.
     * Idle connections are terminated only when the pool is accessed. If the poolTimeout is set to 0,
     * then idle connections are never terminated.
     * 
     * This property may be overridden when creating a connection pool.
     * 
     * @default 60
     */
    let poolTimeout: number;
    /**
     * Node-oracledb supports Promises on all methods. The standard Promise library is used.
     * 
     * This property can be set to override or disable the Promise implementation.
     * 
     * Promises can be disabled by setting this property to null.
     * 
     * Example:
     * 
     *      const myLib = require('myFavouritePromiseImplementation');
     *      oracledb.Promise = myLib;
     */
    let Promise: Promise<any>;
    /**
     * The number of milliseconds after which connection requests waiting in the connection request queue are terminated.
     * If queueTimeout is 0, then queued connection requests are never terminated.
     * 
     * This property may be overridden when creating a connection pool.
     * 
     * @default 60000
     * @since 1.7
     */
    let queueTimeout: number;
    /**
     * The number of statements that are cached in the statement cache of each connection.
     * 
     * This property may be overridden for specific Pool or Connection objects.
     * 
     * In general, set the statement cache to the size of the working set of statements being
     * executed by the application. Statement caching can be disabled by setting the size to 0.
     * 
     * @default 30
     */
    let stmtCacheSize: number;
    /**
     * This readonly property gives a numeric representation of the node-oracledb version.
     * For version x.y.z, this property gives the number: (10000 * x) + (100 * y) + z
     */
    const version: number;
    /**
     * This readonly property gives a string representation of the node-oracledb version, including the version suffix if one is present.
     * 
     * @since 2.1
     */
    const versionString: string;
    /**
     * This readonly property gives a string representing the version suffix (e.g. “-dev” or “-beta”) or an empty string if no version suffix is present.
     * 
     * @since 2.1
     */
    const versionSuffix: string;

    interface BindParameter {
        /**
         * The direction of the bind. One of the Execute Bind Direction Constants.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#oracledbconstantsbinddir
         */
        dir?: number;
        /**
         * The number of array elements to be allocated for a PL/SQL Collection INDEX BY associative
         * array OUT or IN OUT array bind variable. For IN binds, the value of maxArraySize is ignored.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#plsqlindexbybinds
         */
        maxArraySize?: number;
        /**
         * The maximum number of bytes that an OUT or IN OUT bind variable of type STRING or BUFFER can use to get data.
         * 
         * The maximum limit depends on the database type, see below. When binding IN OUT, then maxSize refers to the
         * size of the returned value: the input value can be smaller or bigger. For IN binds, maxSize is ignored.
         * 
         * @default 200
         */
        maxSize?: number;
        /**
         * The node-oracledb or JavaScript data type to be bound. One of the Node-oracledb Type Constants.
         * 
         * With IN or IN OUT binds the type can be explicitly set with type or it will default to the type
         * of the input data value. With OUT binds, the type defaults to oracledb.STRING whenever type is not specified.
         */
        type?: number;
        /**
         * The input value or variable to be used for an IN or IN OUT bind variable.
         */
        val?: any;
    }

    /**
     * Used with connection.execute() to associate values or JavaScript variables to a statement’s bind variables by name.
     * 
     * @see https://oracle.github.io/node-oracledb/doc/api.html#executebindParams
     */
    interface BindParametersObject {
        [parameter: string]: BindParameter;
    }

    interface CloseConnectionOptions {
        /**
         * If drop is false, then the connection is returned to the pool for reuse.
         * 
         * If drop is true, the connection will be completely dropped from the connection pool
         * 
         * @default false
         */
        drop: boolean;
    }

    interface Connection {
        /**
         * The action attribute for end-to-end application tracing.
         * This is a write-only property. Displaying a Connection object will show a value of null for this attribute.
         */
        action?: string;
        /**
         * Sets the maximum number of milliseconds that each underlying round-trip between node-oracledb and Oracle Database may take.
         * Each node-oracledb method or operation may make zero or more round-trips. 
         * The callTimeout value applies to each round-trip individually, not to the sum of all round-trips.
         * Time spent processing in node-oracledb before or after the completion of each round-trip is not counted.
         */
        callTimeout?: number;
        /**
         * The client identifier for end-to-end application tracing, use with mid-tier authentication, and with Virtual Private Databases.
         * This is a write-only property. Displaying a Connection object will show a value of null for this attribute. 
         */
        clientId?: string;
        /**
         * The module attribute for end-to-end application tracing.
         * This is a write-only property. Displaying a Connection object will show a value of null for this attribute.
         */
        module?: string;
        /**
         * This readonly property gives a numeric representation of the Oracle database version which is useful in comparisons.
         * For version a.b.c.d.e, this property gives the number: (100000000 * a) + (1000000 * b) + (10000 * c) + (100 * d) + e.
         * Note if you connect to Oracle Database 18, the version will only be accurate if node-oracledb is also using Oracle Database 18 client libraries.
         * Otherwise it will show the base release such as 1800000000 instead of 1803000000.
         * 
         * @since 1.3
         */
        readonly oracleServerVersion: number;
        /**
         * This readonly property gives a string representation of the Oracle database version which is useful for display.
         * Note if you connect to Oracle Database 18, the version will only be accurate if node-oracledb is also using Oracle Database 18 client libraries.
         * Otherwise it will show the base release such as “18.0.0.0.0” instead of “18.3.0.0.0”.
         * 
         * @since 2.2
         */
        readonly oracleServerVersionString: string;
        /**
         * The number of statements to be cached in the statement cache of the connection.
         * The default value is the stmtCacheSize property in effect in the Pool object when the connection is created in the pool.
         */
        readonly stmtCacheSize: number;
        /**
         * Applications can set the tag property on pooled connections to indicate the ‘session state’ that a connection has.
         * The tag will be retained when the connection is released to the pool.
         * A subsequent pool.getConnection() can request a connection that has a given tag.
         * It is up to the application to set any desired session state and set connection.tag prior to closing the connection.
         * The tag property is not used for standalone connections.
         * When node-oracledb is using Oracle Client libraries 12.2 or later, the tag must be a multi-property tag with name=value pairs like “k1=v1;k2=v2”.
         * An empty string represents not having a tag set.
         * 
         * @since 3.1
         */
        tag?: string;

        /**
         * Stops the currently running operation on the connection.
         * 
         * If there is no operation in progress or the operation has completed by the time the break is issued, the break() is effectively a no-op.
         * 
         * If the running asynchronous operation is interrupted, its callback will return an error.
         * 
         * In network configurations that drop (or in-line) out-of-band breaks, break() may hang unless you have DISABLE_OOB=ON in a sqlnet.ora file.
         * 
         * If you use use break() with DRCP connections, it is currently recommended to drop the connection when releasing it back to the pool: await connection.close({drop: true}).
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#tnsadmin
         */
        break(): Promise<void>;
        break(callback: (error: DBError) => void): void;

        /**
         * Changes the password of the specified user.
         * 
         * Only users with the ALTER USER privilege can change passwords of other users.
         * 
         * @param user The name of the user whose password is to be changed.
         * @param oldPassword The current password of the currently connected user. If changePassword() is being used by a DBA to change the password of another user, the value of oldPassword is ignored and can be an empty string.
         * @param newPassword The new password of the user whose password is to be changed.
         * 
         * @since 2.2
         * @see https://oracle.github.io/node-oracledb/doc/api.html#changingpassword
         */
        changePassword(user: string, oldPassword: string, newPassword: string): Promise<void>;
        changePassword(user: string, oldPassword: string, newPassword: string, callback: (error: DBError) => void): void;

        /**
         * Releases a connection.
         * 
         * Calling close() as soon as a connection is no longer required is strongly encouraged for system efficiency.
         * Calling close() for pooled connections is required to prevent the pool running out of connections.
         * 
         * When a connection is released, any ongoing transaction on the connection is rolled back.
         * 
         * If an error occurs on a pooled connection and that error is known to make the connection
         * unusable, then close() will drop that connection from the connection pool so a future
         * pooled getConnection() call that grows the pool will create a new, valid connection.
         * 
         * @param options Only affects pooled connections.
         * 
         * @since 1.9
         */
        close(options: CloseConnectionOptions): Promise<void>;
        close(): Promise<void>;
        close(options: CloseConnectionOptions, callback: (error: DBError) => void): void;
        close(callback: (error: DBError) => void): void;

        /**
         * This call commits the current transaction in progress on the connection.
         */
        commit(): Promise<void>;
        commit(callback: (error: DBError) => void): void;

        /**
         * Creates a Lob as an Oracle temporary LOB. The LOB is initially empty. Data can be streamed to the LOB,
         * which can then be passed into PL/SQL blocks, or inserted into the database.
         * 
         * When no longer required, Lobs created with createLob() should be closed with lob.close() because
         * Oracle Database resources are held open if temporary LOBs are not closed.
         * 
         * Open temporary LOB usage can be monitored using the view V$TEMPORARY_LOBS.
         * 
         * LOBs created with createLob() can be bound for IN, IN OUT and OUT binds.
         * 
         * @param type One of the constants CLOB or BLOB
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#lobhandling
         * @see https://oracle.github.io/node-oracledb/doc/api.html#lobbinds
         */
        createLob(type: number): Promise<Lob>;
        createLob(type: number, callback: (error: DBError, lob: Lob) => void): void;

        /**
         * This call executes a single SQL or PL/SQL statement.
         * 
         * @param sql The SQL statement that is executed. The statement may contain bind parameters.
         * @param bindParams This function parameter is needed if there are bind parameters in the SQL statement.
         * @param options This is an optional parameter to execute() that may be used to control statement execution.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#sqlexecution
         * @see https://oracle.github.io/node-oracledb/doc/api.html#querystream For an alternative
         */
        execute(sql: string, bindParams: BindParametersObject | Array<any>, options: ExecuteOptions): Promise<Result>;
        execute(sql: string, bindParams: BindParametersObject | Array<any>, options: ExecuteOptions, callback: (error: DBError, result: Result) => void): void;

        /**
         * This call executes a single SQL or PL/SQL statement.
         * 
         * @param sql The SQL statement that is executed. The statement may contain bind parameters.
         * @param bindParams This function parameter is needed if there are bind parameters in the SQL statement.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#sqlexecution
         * @see https://oracle.github.io/node-oracledb/doc/api.html#querystream For an alternative
         */
        execute(sql: string, bindParams: BindParametersObject | Array<any>): Promise<Result>;
        execute(sql: string, bindParams: BindParametersObject | Array<any>, callback: (error: DBError, result: Result) => void): void;

        /**
         * This call executes a single SQL or PL/SQL statement.
         * 
         * @param sql The SQL statement that is executed. The statement may contain bind parameters.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#sqlexecution
         * @see https://oracle.github.io/node-oracledb/doc/api.html#querystream For an alternative
         */
        execute(sql: string): Promise<Result>;
        execute(sql: string, callback: (error: DBError, result: Result) => void): void;
    }

    /**
     * Provides connection credentials and connection-specific configuration properties.
     */
    interface ConnectionAttributes {
        /**
         * An alias of connectionString. Only one of the properties should be used.
         * The Oracle database instance to connect to. 
         * The string can be an Easy Connect string, or a Net Service Name from atnsnames.ora file, or the name of a local Oracle database instance.
         */
        connectString?: string;
        /**
         * An alias of connectString. Only one of the properties should be used.
         * The Oracle database instance to connect to. 
         * The string can be an Easy Connect string, or a Net Service Name from atnsnames.ora file, or the name of a local Oracle database instance.
         * 
         * @since 2.1
         */
        connectionString?: string;
        /**
         * Sets the name used for Edition-Based Redefinition by this connection.
         * This optional property overrides the oracledb.edition property.
         * 
         * @since 2.2
         */
        edition?: string;
        /**
         * Determines if the standalone connection is created using Oracle Call Interface events mode.
         * This optional property overrides the oracledb.events property.
         * 
         * @default false
         * @since 2.2
         */
        events?: boolean;
        /**
         * Determines if the connection should be established using External Authentication.
         * This optional property overrides the oracledb.externalAuth property.
         * The user and password properties should not be set when externalAuth is true.
         * 
         * @default false
         */
        externalAuth?: boolean;
        /**
         * Used in conjunction with tag when getting a connection from a connection pool.
         * Indicates that the tag in a connection returned from a connection pool may not match the requested tag.
         * 
         * @default false
         * @since 3.1
         */
        matchAny?: boolean;
        /**
         * The new password to use for the database user. When using newPassword, the password property should be set to the current password.
         * This allows passwords to be changed at the time of connection, in particular it can be used to connect when the old password has expired.
         * 
         * @since 2.2
         */
        newPassword?: string;
        /**
         * Specifies which previously created pool in the connection pool cache to obtain the connection from. See Pool Alias.
         */
        password?: string;
        /**
         * The password of the database user. A password is also necessary if a proxy user is specified.
         */
        poolAlias?: string;
        /**
         * The privilege to use when establishing connection to the database.
         * This optional property should be one of the privileged connection constants.
         * Note only non-pooled connections can be privileged.
         * 
         * @since 2.1
         */
        privilege?: number;
        /**
         * The number of statements to be cached in the statement cache of each connection.
         * This optional property may be used to override the oracledb.stmtCacheSize property.
         */
        stmtCacheSize?: number;
        /**
         * Used when getting a connection from a connection pool.
         * Indicates the tag that a connection returned from a connection pool should have.
         * Various heuristics determine the tag that is actually returned.
         * 
         * @since 3.1
         */
        tag?: string;
        /**
         * The database user name. Can be a simple user name or a proxy of the form alison[fred].
         */
        user?: string;
    }

    interface DBError {
        /**
         * The Oracle error number. This value is undefined for non-Oracle errors and for messages prefixed with NJS or DPI.
         */
        errorNum: number;
        /**
         * The text of the error message.
         * 
         * The error may be a standard Oracle message with a prefix like ORA or PLS.
         * 
         * Alternatively it may be a node-oracledb specific error prefixed with NJS or DPI.
         */
        message: string;
        /**
         * Generally offset is the character offset into the SQL text that resulted in the Oracle error.
         * 
         * The value may be 0 in non-SQL contexts. This value is undefined for non-Oracle errors and for messages prefixed with NJS or DPI.
         */
        offset: number;
    }

    /**
     * Used to control statement execution.
     */
    interface ExecuteOptions {
        /**
         * If true, the transaction in the current connection is automatically committed at the end of statement execution.
         * 
         * @default false
         */
        autoCommit?: boolean;
        /**
         * Determines whether additional metadata is available for queries and for REF CURSORs returned from PL/SQL blocks.
         * 
         * With this value, the result.metaData result.resultSet.metaData objects only include column names.
         * 
         * If extendedMetaData is true then metaData will contain additional attributes.
         * 
         * @default false
         */
        extendedMetaData?: boolean;
        /**
         * This property sets the size of an internal buffer used for fetching query rows from Oracle Database.
         * Changing it may affect query performance but does not affect how many rows are returned to the application.
         * 
         * The property is used during the default direct fetches, during ResultSet getRow() calls, and for queryStream(). It is not used for getRows().
         * 
         * Increasing this value reduces the number of round-trips to the database but increases memory usage for each data fetch.
         * For queries that return a large number of rows, higher values of fetchArraySize may give better performance.
         * For queries that only return a few rows, reduce the value of fetchArraySize to minimize the amount of memory management during data fetches.
         * JavaScript memory fragmentation may occur in some cases.
         * 
         * For direct fetches (those using execute() option resultSet: false), the internal buffer size will be based on the lesser of maxRows and fetchArraySize.
         * 
         * @default 100
         */
        fetchArraySize?: number;
        /**
         * Defines how query column data should be represented in JavaScript. It can be used in conjunction with,
         * or instead of, the global settings fetchAsString and fetchAsBuffer.
         * 
         * Example:
         * 
         *      fetchInfo: {
         *          "HIRE_DATE":    { type: oracledb.STRING },  // return the date as a string
         *          "HIRE_DETAILS": { type: oracledb.DEFAULT }  // override fetchAsString or fetchAsBuffer
         *      }
         */
        fetchInfo?: {
            [columnName: string]: {
                type: number;
            }
        };
        /**
         * The maximum number of rows that are fetched by a query with connection.execute() when not using a ResultSet.
         * Rows beyond this limit are not fetched from the database. A value of 0 means there is no limit.
         * 
         * To improve database efficiency, SQL queries should use a row limiting clause like OFFSET / FETCH or equivalent.
         * The maxRows property can be used to stop badly coded queries from returning unexpectedly large numbers of rows.
         * 
         * When the number of query rows is relatively big, or can not be predicted, it is recommended to use
         * a ResultSet or queryStream(). This allows applications to process rows in smaller chunks or individually,
         * preventing the Node.js memory limit being exceeded or query results being unexpectedly truncated by a
         * maxRows limit.
         * 
         * @default 0 (unlimited)
         */
        maxRows?: number;
        /**
         * The format of query rows fetched when using connection.execute() or connection.queryStream().
         * It affects both ResultSet and non-ResultSet queries. It can be used for top level queries and REF CURSOR output.
         * 
         * This can be either of the Oracledb constants oracledb.ARRAY or oracledb.OBJECT.
         * 
         * If specified as oracledb.ARRAY, each row is fetched as an array of column values.
         * 
         * If specified as oracledb.OBJECT, each row is fetched as a JavaScript object.
         * The object has a property for each column name, with the property value set to the respective column value.
         * The property name follows Oracle’s standard name-casing rules. It will commonly be uppercase,
         * since most applications create tables using unquoted, case-insensitive names.
         * 
         * @default ARRAY
         */
        outFormat?: number;
        /**
         * Determines whether query results should be returned as a ResultSet object or directly.
         * 
         * @default false
         */
        resultSet?: boolean;
    }

    /**
     * Lob objects can be used to access Oracle Database CLOB and BLOB data.
     * 
     * @see https://oracle.github.io/node-oracledb/doc/api.html#lobhandling
     */
    interface Lob extends Duplex {
        /**
         * This corresponds to the size used by the Oracle LOB layer when accessing or modifying the LOB value.
         */
        readonly chunkSize: number;
        /**
         * Length of a queried LOB in bytes (for BLOBs) or characters (for CLOBs).
         */
        readonly length: number;
        /**
         * The number of bytes (for BLOBs) or characters (for CLOBs) to read for each Stream ‘data’ event of a queried LOB.
         * 
         * For efficiency, it is recommended that pieceSize be a multiple of chunkSize.
         * 
         * The property should not be reset in the middle of streaming since data will be lost when 
         * internal buffers are resized.
         * 
         * The maximum value for pieceSize is limited to the value of UINT_MAX.
         * 
         * @default chunkSize
         */
        pieceSize: number;
        /**
         * The type of Lob being used. It will have the value of one of the constants BLOB or CLOB.
         * 
         * The value is derived from the bind type when using LOB bind variables, or from the column 
         * type when a LOB is returned by a query.
         */
        readonly type: number;

        /**
         * Explicitly closes a Lob.
         * 
         * Lobs created with createLob() should be explicitly closed with lob.close() when no longer needed.
         * This frees resources in node-oracledb and in Oracle Database.
         * 
         * Persistent or temporary Lobs returned from the database may also be closed with lob.close() as
         * long as streaming is not currently happening. Note these Lobs are automatically closed when
         * streamed to completion or used as the source for an IN OUT bind.
         * If you try to close a Lob being used for streaming you will get the error NJS-023: concurrent
         * operations on a Lob are not allowed.
         * 
         * The lob.close() method emits the Node.js Stream ‘close’ event unless the Lob has already been
         * explicitly or automatically closed.
         * 
         * The connection must be open when calling lob.close() on a temporary LOB, such as those created
         * by createLob().
         * 
         * Once a Lob is closed, it cannot be bound.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#closinglobs
         */
        close(): Promise<void>;
        close(callback: (error: DBError) => void): void;
    }

    interface Metadata {
        /**
         * The column name follows Oracle’s standard name-casing rules. It will commonly be uppercase,
         * since most applications create tables using unquoted, case-insensitive names.
         */
        name: string;
        /**
         * One of the Node-oracledb Type Constant values.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#oracledbconstantsnodbtype
         */
        fetchType: number;
        /**
         * One of the Node-oracledb Type Constant values.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#oracledbconstantsdbtype
         */
        dbType: number;
        /**
         * Database byte size. This is only set for DB_TYPE_VARCHAR, DB_TYPE_CHAR and DB_TYPE_RAW column types.
         */
        byteSize: number;
        /**
         * Set only for DB_TYPE_NUMBER, DB_TYPE_TIMESTAMP, DB_TYPE_TIMESTAMP_TZ and DB_TYPE_TIMESTAMP_LTZ columns.
         */
        precision: number;
        /**
         * Set only for DB_TYPE_NUMBER columns.
         */
        scale: number;
        /**
         * Indicates whether NULL values are permitted for this column.
         */
        nullable: boolean;
    }

    interface Pool {
        /**
         * The number of currently active connections in the connection pool i.e. the number of connections currently “checked out” using getConnection().
         */
        readonly connectionsInUse: number;
        /**
         * The number of currently open connections in the underlying connection pool.
         */
        readonly connectionsOpen: number;
        /**
         * The alias of this pool in the connection pool cache. An alias cannot be changed once the pool has been created.
         */
        readonly poolAlias: number;
        /**
         * The number of connections that are opened whenever a connection request exceeds the number of currently open connections.
         */
        readonly poolIncrement: number;
        /**
         * The maximum number of connections that can be open in the connection pool.
         */
        readonly poolMax: number;
        /**
         * The minimum number of connections a connection pool maintains, even when there is no activity to the target database.
         */
        readonly poolMin: number;
        /**
         * The maximum number of seconds that a connection can remain idle in a connection pool (not “checked out” to the application by getConnection())
         * before node-oracledb pings the database prior to returning that connection to the application.
         */
        readonly poolPingInterval: number;
        /**
         * The time (in seconds) after which the pool terminates idle connections (unused in the pool).
         * The number of connections does not drop below poolMin.
         */
        readonly poolTimeout: number;
        /**
         * The time (in milliseconds) that a connection request should wait in the queue before the request is terminated.
         */
        readonly queueTimeout: number;
        /**
         * One of the POOL_STATUS_* constants indicating whether the pool is open, being drained of in-use connections, or has been closed.
         */
        readonly status: number;
        /**
         * The number of statements to be cached in the statement cache of each connection.
         */
        readonly stmtCacheSize: number;

        close(drainTime?: number): Promise<void>;
        close(drainTime: number, callback: (error: DBError) => void): void;
        close(callback: (error: DBError) => void): void;
    }

    /**
     * Provides connection credentials and pool-specific configuration properties.
     * The properties provided override the default pooling properties of the Oracledb object.
     * If an attribute is not set, or is null, the value of the related Oracledb property will be used.
     */
    interface PoolAttributes {
        /**
         * An alias of connectionString. Only one of the properties should be used.
         * The Oracle database instance used by connections in the pool.
         * The string can be an Easy Connect string, or a Net Service Name from a tnsnames.ora file, or the name of a local Oracle database instance.
         */
        connectString?: string;
        /**
         * An alias of connectString. Only one of the properties should be used.
         * The Oracle database instance used by connections in the pool.
         * The string can be an Easy Connect string, or a Net Service Name from a tnsnames.ora file, or the name of a local Oracle database instance.
         * 
         * @since 2.1
         */
        connectionString?: string;
        /**
         * Sets the name used for Edition-Based Redefinition by connections in the pool.
         * This optional property overrides the oracledb.edition property.
         * 
         * @since 2.2
         */
        edition?: string;
        /**
         * Indicate whether Oracle Call Interface events mode should be enabled for this pool.
         * This optional property overrides the oracledb.events property.
         * 
         * @default false
         * @since 2.2
         */
        events?: boolean;
        /**
         * Indicate whether pooled connections should be established using External Authentication.
         * This optional property overrides the oracledb.externalAuth property.
         * The user and password properties should not be set when externalAuth is true.
         * 
         * @default false
         * @since 0.5
         */
        externalAuth?: boolean;
        /**
         * Indicate whether connections in the pool all have the same credentials (a ‘homogeneous’ pool), or whether different credentials can be used (a ‘heterogeneous’ pool).
         * When set to false, the user name and password can be omitted from the connection.createPool() call, but will need to be given for subsequent pool.getConnection() calls.
         * Different pool.getConnection() calls can provide different user credentials.
         * Alternatively, when homogeneous is false, the user name (the ‘proxy’ user name) and password can be given, but subsequent pool.getConnection() calls can specify a different user name to access that user’s schema.
         * Heterogeneous pools cannot be used with the connection pool cache. Applications should ensure the pool object is explicitly passed between code modules, or use a homogeneous pool and make use of connection.clientId.
         * 
         * @default true
         * @since 2.3
         */
        homogenous?: boolean;
        /**
         * The password of the database user used by connections in the pool. A password is also necessary if a proxy user is specified at pool creation.
         * If homogeneous is false, then the password may be omitted at pool creation but given in subsequent pool.getConnection() calls.
         */
        password?: string;
        /**
         * The poolAlias is an optional property that is used to explicitly add pools to the connection pool cache.
         * If a pool alias is provided, then the new pool will be added to the connection pool cache and the poolAlias value can then be used with methods that utilize the connection pool cache, such as oracledb.getPool() and oracledb.getConnection().
         * 
         * @since 1.11
         */
        poolAlias?: string;
        /**
         * The number of connections that are opened whenever a connection request exceeds the number of currently open connections.
         * This optional property overrides the oracledb.poolIncrement property.
         * 
         * @default 1
         */
        poolIncrement?: number;
        /**
         * The maximum number of connections to which a connection pool can grow.
         * This optional property overrides the oracledb.poolMax property.
         * Importantly, if you increase poolMax you should also increase the number of threads available to node-oracledb.
         * 
         * @default 4
         */
        poolMax?: number;
        /**
         * The minimum number of connections a connection pool maintains, even when there is no activity to the target database.
         * This optional property overrides the oracledb.poolMin property.
         * 
         * @default 0
         */
        poolMin?: number;
        /**
         * When a pool getConnection() is called and the connection has been idle in the pool for
         * at least poolPingInterval seconds, an internal “ping” will be performed first to check the aliveness of the connection.
         * This optional property overrides the oracledb.poolPingInterval property.
         * 
         * @default 60
         */
        poolPingInterval?: number;
        /**
         * The number of seconds after which idle connections (unused in the pool) may be terminated.
         * Idle connections are terminated only when the pool is accessed.
         * This optional property overrides the oracledb.poolTimeout property.
         * 
         * @default 60
         */
        poolTimeout?: number;
        /**
         * The number of milliseconds after which connection requests waiting in the connection request queue are terminated.
         * If queueTimeout is set to 0, then queued connection requests are never terminated.
         * This optional property overrides the oracledb.queueTimeout property.
         * 
         * @default 60000
         */
        queueTimeout?: number;
        /**
         * When sessionCallback is a Node.js function, it will be invoked for each pool.getConnection() call that will return a newly created connection in the pool.
         * It will also be called if pool.getConnection() requests a connection from the pool with a given tag, and that tag value does not match the connection’s current actual tag.
         * It will not be invoked for other getConnection() calls. The tag requested by pool.getConnection() is passed as the requestedTag parameter and the actual tag is available in connection.tag.
         * 
         * The session callback is called before getConnection() returns so it can be used to do logging or efficiently set session state such as with ALTER SESSION statements.
         * Make sure any session state is set and connection.tag is updated in the sessionCallback function prior to it calling its own callback function otherwise the session will not be correctly set when getConnection() returns.
         * 
         * When node-oracledb is using Oracle Client libraries 12.2 or later, the tag must be a multi-property tag with name=value pairs like “k1=v1;k2=v2”.
         * When using Oracle Client libraries 12.2 or later, sessionCallback can be a string containing the name of a PL/SQL procedure to be called when pool.getConnection() requests a tag, and that tag does not match the connection’s actual tag.
         * When the application uses DRCP connections, a PL/SQL callback can avoid the round-trip calls that a Node.js function would require to set session state. For non-DRCP connections, the PL/SQL callback will require a round-trip from the application.
         * 
         * The PL/SQL procedure declaration is:
         * 
         *      PROCEDURE mycallback (
         *         desired_props IN  VARCHAR2,
         *         actual_props  IN  VARCHAR2
         *      );
         * 
         * @since 3.1
         */
        sessionCallback?:
            | string
            | ((connection: Connection, requestedTag: string, callback: (error: DBError) => void) => string);
        /**
         * The number of statements to be cached in the statement cache of each connection in the pool.
         * This optional property overrides the oracledb.stmtCacheSize property.
         */
        stmtCacheSize?: number;
        /**
         * The database user name for connections in the pool. Can be a simple user name or a proxy of the form alison[fred].
         * If homogeneous is false, then the pool user name and password need to be specified only if the application wants that user to proxy the users supplied in subsequent pool.getConnection() calls.
         */
        user?: string;
    }

    /**
     * Contains information regarding the outcome of a successful connection.execute().
     */
    interface Result {
        /**
         * For SELECT statements, this contains an array of objects describing details of columns for the select list.
         * For non queries, this property is undefined.
         * 
         * Each column’s name is always given. If the oracledb.extendedMetaData or execute() option extendedMetaData
         * are true then additional information is included.
         */
        metaData: Array<Metadata>;
        /**
         * This contains the output values of OUT and IN OUT binds. If bindParams is passed as an array,
         * then outBinds is returned as an array. If bindParams is passed as an object,
         * then outBinds is returned as an object. If there are no OUT or IN OUT binds, the value is undefined.
         */
        outBinds: {
            [column: string]: any;
        } | Array<any>;
        /**
         * For SELECT statements when the resultSet option is true, use the resultSet object to fetch rows.
         * 
         * When using this option, resultSet.close() must be called when the ResultSet is no longer needed.
         * This is true whether or not rows have been fetched from the ResultSet.
         * 
         * @see https://oracle.github.io/node-oracledb/doc/api.html#resultsetclass
         * @see https://oracle.github.io/node-oracledb/doc/api.html#resultsethandling
         */
        resultSet: ResultSet;
        /**
         * For SELECT statements using direct fetches, rows contains an array of fetched rows.
         * It will be NULL if there is an error or the SQL statement was not a SELECT statement.
         * By default, the rows are in an array of column value arrays, but this can be changed to arrays
         * of objects by setting outFormat to oracledb.OBJECT. If a single row is fetched,
         * then rows is an array that contains one single row.
         * 
         * The number of rows returned is limited by oracledb.maxRows or the maxRows option in an execute() call.
         * If maxRows is 0, then the number of rows is limited by Node.js memory constraints.
         */
        rows: Array<Array<any> | {
            [column: string]: any;
        }>;
        /**
         * For DML statements (including SELECT FOR UPDATE) this contains the number of rows affected,
         * for example the number of rows inserted. For non-DML statements such as queries and PL/SQL statements,
         * rowsAffected is undefined.
         */
        rowsAffected: number;
    }

    /**
     * ResultSets allow query results to fetched from the database one at a time, or in groups of rows.
     * They can also be converted to Readable Streams. ResultSets enable applications to process very large data sets.
     * 
     * ResultSets should also be used where the number of query rows cannot be predicted and may be larger than
     * Node.js can handle in a single array.
     * 
     * A ResultSet object is obtained by setting resultSet: true in the options parameter of the
     * Connection execute() method when executing a query. A ResultSet is also returned to node-oracledb when
     * binding as type oracledb.CURSOR to a PL/SQL REF CURSOR bind parameter.
     * 
     * @see https://oracle.github.io/node-oracledb/doc/api.html#resultsethandling
     */
    interface ResultSet {
        /**
         * Contains an array of objects with metadata about the query or REF CURSOR columns.
         * 
         * Each column’s name is always given. If the oracledb.extendedMetaData or execute() option
         * extendedMetaData are true then additional information is included.
         */
        readonly metaData: Array<Metadata>;

        /**
         * Closes a ResultSet. Applications should always call this at the end of fetch or when no more rows are needed.
         * It should also be called if no rows are ever going to be fetched from the ResultSet.
         */
        close(): Promise<void>;
        close(callback: (error: DBError) => void): void;

        /**
         * This call fetches one row of the ResultSet as an object or an array of column values,
         * depending on the value of outFormat.
         * 
         * At the end of fetching, the ResultSet should be freed by calling close().
         * 
         * Performance of getRow() can be tuned by adjusting the value of oracledb.fetchArraySize or
         * the execute() option fetchArraySize.
         */
        getRow(): Promise<{
            [column: string]: any;
        } | Array<any>>;
        getRow(callback: (error: DBError, row: {
            [column: string]: any;
        } | Array<any>) => void): void;

        /**
         * This call fetches numRows rows of the ResultSet as an object or an array of column values,
         * depending on the value of outFormat.
         * 
         * At the end of fetching, the ResultSet should be freed by calling close().
         * 
         * Different values of numRows may alter the time needed for fetching data from Oracle Database.
         * The value of fetchArraySize has no effect on getRows() performance or internal buffering.
         */
        getRows(): Promise<number>;
        getRows(callback: (error: DBError, numRows: number) => void): void;

        /**
         * This synchronous method converts a ResultSet into a stream.
         * 
         * It can be used to make ResultSets from top-level queries or from REF CURSOR bind variables streamable.
         * To make top-level queries streamable, the alternative connection.queryStream() method may be easier to use.
         * 
         * To change the behavior of toQueryStream(), such as setting the query output Format or the internal
         * buffer size for performance, adjust global attributes such as oracledb.outFormat and oracledb.fetchArraySize
         * before calling execute().
         * 
         * @since 1.9
         * @see https://oracle.github.io/node-oracledb/doc/api.html#streamingresults
         */
        toQueryStream(): Readable;
    }

    /**
     * This method creates a pool of connections with the specified user name, password and connection string.
     * A pool is typically created once during application initialization.
     * 
     * Internally, createPool() creates an Oracle Call Interface Session Pool for each Pool object.
     * 
     * The default properties may be overridden by specifying new properties in the poolAttrs parameter.
     * 
     * It is possible to add pools to the pool cache when calling createPool().
     * This allows pools to later be accessed by name, removing the need to pass the pool object through code.
     * 
     * A pool should be terminated with the pool.close() call.
     * 
     * From node-oracledb 3.1.0, the createPool() error callback will return a DPI-1047 error if node-oracledb cannot load Oracle Client libraries.
     * Previous versions threw this error from require('oracledb').
     * 
     * @param poolAttributes Provides connection credentials and pool-specific configuration properties, overriding the defualt pooling properties of the Oracledb object.
     */
    function createPool(poolAttributes: PoolAttributes): Promise<Pool>;
    function createPool(poolAttributes: PoolAttributes, callback: (error: DBError, pool: Pool) => void): void;

    /**
     * Obtains a connection from a pool in the connection pool cache.
     * 
     * For situations where connections are used infrequently, creating a standalone connection may be more efficient than creating and managing a connection pool.
     * However, in most cases, Oracle recommends getting connections from a connection pool.
     * 
     * @param poolAlias Specifies which previously created pool in the connection pool cache to use to obtain the connection.
     */
    function getConnection(poolAlias: string): Promise<Connection>;
    function getConnection(poolAlias: string, callback: (error: DBError, connection: Connection) => void): void;

    /**
     * Obtains a connection from the default pool.
     * 
     * For situations where connections are used infrequently, creating a standalone connection may be more efficient than creating and managing a connection pool.
     * However, in most cases, Oracle recommends getting connections from a connection pool.
     */
    function getConnection(): Promise<Connection>;
    function getConnection(callback: (error: DBError, connection: Connection) => void): void;

    /**
     * Creates a new, standalone, non-pooled connection.
     * 
     * For situations where connections are used infrequently, creating a standalone connection may be more efficient than creating and managing a connection pool.
     * However, in most cases, Oracle recommends getting connections from a connection pool.
     * 
     * @param connectionAttributes Connection credentials and connection-specific configuration properties.
     */
    function getConnection(connectionAttributes: ConnectionAttributes): Promise<Connection>;
    function getConnection(
        connectionAttributes: ConnectionAttributes,
        callback: (error: DBError, connection: Connection) => void,
    ): void;

    /**
     * Retrieves a previously created pool from the connection pool cache. Note that this is a synchronous method.
     * 
     * @param poolAlias 
     * 
     * The pool alias of the pool to retrieve from the connection pool cache.
     * 
     * @default default
     */
    function getPool(poolAlias?: string): Pool;
}

export = oracledb;