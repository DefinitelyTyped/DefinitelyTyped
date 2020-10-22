// Type definitions for snowflake-sdk 1.5
// Project: https://github.com/snowflakedb/snowflake-connector-nodejs#readme
// Definitions by: Hunter Tunnicliff <https://github.com/htunnicliff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * ### Related Docs
 * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#required-connection-options Required Connection Options}
 */
export interface ConnectionOptions {
    /**
     * The full name of your account (provided by Snowflake). Note that your full account name might include additional segments
     * that identify the region and cloud platform where your account is hosted.
     */
    account: string;

    /**
     * Snowflake user login name to connect with.
     */
    username: string;

    /**
     * Password for the user.
     */
    password: string;

    /**
     * @deprecated
     * The ID for the region where your account is located.
     *
     * This parameter is no longer used because the region information, if required, is included as part of the full account name.
     * It is documented here only for backward compatibility
     */
    region?: string;

    /**
     * The default database to use for the session after connecting.
     */
    database?: string;

    /**
     * The default schema to use for the session after connecting.
     */
    schema?: string;

    /**
     * The default virtual warehouse to use for the session after connecting. Used for performing queries, loading data, etc.
     */
    warehouse?: string;

    /**
     * The default security role to use for the session after connecting.
     */
    role?: string;

    /**
     * By default, client connections typically time out approximately 3-4 hours after the most recent query was executed.
     *
     * If the parameter clientSessionKeepAlive is set to true, the client’s connection to the server will be kept alive
     * indefinitely, even if no queries are executed.
     *
     * The default setting of this parameter is false.
     *
     * If you set this parameter to true, make sure that your program explicitly disconnects from the server when your program
     * has finished. Do not exit without disconnecting.
     */
    clientSessionKeepAlive?: boolean;

    /**
     * (Applies only when `clientSessionKeepAlive` is true)
     *
     * This parameter sets the frequency (interval in seconds) between heartbeat messages.
     *
     * You can loosely think of a connection heartbeat message as substituting for a query and restarting the timeout countdown
     * for the connection. In other words, if the connection would time out after at least 4 hours of inactivity, the heartbeat
     * resets the timer so that the timeout will not occur until at least 4 hours after the most recent heartbeat (or query).
     *
     * The default value is 3600 seconds (one hour). The valid range of values is 900 - 3600. Because timeouts usually occur after
     * at least 4 hours, a heartbeat every 1 hour is normally sufficient to keep the connection alive. Heartbeat intervals of less
     * than 3600 seconds are rarely necessary or useful.
     */
    clientSessionKeepAliveHeartbeatFrequency?: number;

    jsTreatIntegerAsBigInt?: boolean;
}

export interface Statement {
    getSqlText(): string;
    cancel(fn: (err: Error, stmt: Statement) => void): void;
    streamRows(): NodeJS.ReadableStream;
}

export type Bind = string | number;

/**
 * Snowflake supports two variations of binding syntax.
 *
 * First variation
 * ```js
 *  connection.execute({
 *      sqlText: 'select c1 from (select :1 as c1 union all select :2 as c1) where c1 = :1;',
 *     binds: [1, 2]
 *  });
 * ```
 *
 * Second variation
 * ```js
 *  connection.execute({
 *      sqlText: 'select c1 from (select ? as c1 union all select ? as c1) where c1 = ?;',
 *     binds: [1, 2]
 *  });
 * ```
 *
 * ### Related Docs
 * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#binding-statement-parameters Binding Statement Parameters}
 */
export type Binds = Bind[] | InsertBinds;

/**
 * ```js
 *  connection.execute({
 *      sqlText: 'insert into t(c1, c2, c3) values(?, ?, ?)',
 *      binds: [[1, 'string1', 2.0], [2, 'string2', 4.0], [3, 'string3', 6.0]]
 *  });
 * ```
 *
 * ### Related Docs
 * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#binding-array-for-bulk-insert Binding Array For Bulk Insert}
 */
export type InsertBinds = Bind[][];

export type Connection = NodeJS.EventEmitter & {
    /**
     * Make session tokens available for testing
     */
    getTokens(): unknown;

    /**
     * Returns true if the connection is active otherwise false
     */
    isUp(): boolean;

    getServiceName(): string;
    getClientSessionKeepAlive(): boolean;
    getClientSessionKeepAliveHeartbeatFrequency(): number;
    getJsTreatIntegerAsBigInt(): boolean;

    /**
     * Returns the connection id.
     */
    getId(): string;

    heartbeat(): void;

    /**
     * Establishes a connection if not in a fatal state.
     */
    connect(fn: (err: Error, conn: Connection) => void): void;

    /**
     * ### Related Docs
     * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#executing-statements Executing Statements}
     */
    execute(options: {
        sqlText: string;
        /**
         * ### Related Docs
         * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#batch-processing-results Batch Processing Results}
         */
        streamResult?: boolean;
        binds?: Binds;

        /**
         * ### Related Docs
         * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#fetching-data-types-as-strings Fetching Data Types As Strings}
         */
        fetchAsString?: Array<'String' | 'Boolean' | 'Number' | 'Date' | 'JSON'>;
        complete: (err: Error, stmt: Statement, rows: any[] | undefined) => void;
    }): void;

    /**
     * Fetches the result of a previously issued statement.
     */
    fetchResult(): any;

    /**
     * Immediately terminates the connection without waiting for
     * currently executing statements to complete.
     */
    destroy(fn: (err: Error, conn: Connection) => void): void;

    /**
     * Returns a serialized version of this connection.
     */
    serialize(): string;
};

export const STRING = 'STRING';
export const BOOLEAN = 'BOOLEAN';
export const NUMBER = 'NUMBER';
export const DATE = 'DATE';
export const JSON = 'JSON';

export enum ocspModes {
    FAIL_CLOSED = 'FAIL_CLOSED',
    FAIL_OPEN = 'FAIL_OPEN',
    INSECURE = 'INSECURE',
}

export interface ConfigureOptions {
    logLevel?: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE';
    insecureConnect?: boolean;

    /**
     * ### Related Docs
     * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#choosing-fail-open-or-fail-close-mode Choosing `Fail-Open` or `Fail-Close` Mode}
     */
    ocspFailOpen?: boolean;
}

/**
 * Creates a new Connection instance.
 *
 * ### Related Docs
 * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#establishing-a-connection Establishing a Connection}
 */
export function createConnection(options: ConnectionOptions): Connection;

/**
 * Deserializes a serialized connection.
 */
export function deserializeConnection(options: ConnectionOptions, serializedConnection: string): Connection;

/**
 * Serializes a given connection.
 */
export function serializeConnection(connection: Connection): string;

/**
 * Configures this instance of the Snowflake core module.
 */
export function configure(options?: ConfigureOptions): void;
