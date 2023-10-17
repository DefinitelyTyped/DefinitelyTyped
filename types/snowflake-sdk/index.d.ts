/// <reference types="node" />

import { Options as PoolOptions, Pool } from "generic-pool";
import { Readable } from "stream";

/**
 * ### Related Docs
 * - {@link  https://github.com/snowflakedb/snowflake-connector-nodejs/blob/master/lib/errors.js List of error codes and error factory createError()}
 */
export enum ErrorCode {
    // 400001
    ERR_INTERNAL_ASSERT_FAILED = 400001,
    ERR_UNSUPPORTED_NODE_JS_VERSION = 400002,

    // 401001
    ERR_SF_NETWORK_COULD_NOT_CONNECT = 401001,
    ERR_SF_RESPONSE_FAILURE = 401002,
    ERR_SF_RESPONSE_NOT_JSON = 401003,
    ERR_SF_RESPONSE_INVALID_TOKEN = 401004,

    // 402001
    ERR_LARGE_RESULT_SET_NETWORK_COULD_NOT_CONNECT = 402001,
    ERR_LARGE_RESULT_SET_RESPONSE_FAILURE = 402002,

    // 403001
    ERR_GLOBAL_CONFIGURE_INVALID_LOG_LEVEL = 403001,
    ERR_GLOBAL_CONFIGURE_INVALID_INSECURE_CONNECT = 403002,
    ERR_GLOBAL_CONFIGURE_INVALID_OCSP_MODE = 403003,

    // 404001
    ERR_CONN_CREATE_MISSING_OPTIONS = 404001,
    ERR_CONN_CREATE_INVALID_OPTIONS = 404002,
    ERR_CONN_CREATE_MISSING_USERNAME = 404003,
    ERR_CONN_CREATE_INVALID_USERNAME = 404004,
    ERR_CONN_CREATE_MISSING_PASSWORD = 404005,
    ERR_CONN_CREATE_INVALID_PASSWORD = 404006,
    ERR_CONN_CREATE_MISSING_ACCOUNT = 404007,
    ERR_CONN_CREATE_INVALID_ACCOUNT = 404008,
    ERR_CONN_CREATE_MISSING_ACCESS_URL = 404009,
    ERR_CONN_CREATE_INVALID_ACCESS_URL = 404010,
    ERR_CONN_CREATE_INVALID_WAREHOUSE = 404011,
    ERR_CONN_CREATE_INVALID_DATABASE = 404012,
    ERR_CONN_CREATE_INVALID_SCHEMA = 404013,
    ERR_CONN_CREATE_INVALID_ROLE = 404014,
    ERR_CONN_CREATE_MISSING_PROXY_HOST = 404015,
    ERR_CONN_CREATE_INVALID_PROXY_HOST = 404016,
    ERR_CONN_CREATE_MISSING_PROXY_PORT = 404017,
    ERR_CONN_CREATE_INVALID_PROXY_PORT = 404018,
    ERR_CONN_CREATE_INVALID_STREAM_RESULT = 404019,
    ERR_CONN_CREATE_INVALID_FETCH_AS_STRING = 404020,
    ERR_CONN_CREATE_INVALID_FETCH_AS_STRING_VALUES = 404021,
    ERR_CONN_CREATE_INVALID_REGION = 404022,
    ERR_CONN_CREATE_INVALID_KEEP_ALIVE = 404023,
    ERR_CONN_CREATE_INVALID_KEEP_ALIVE_HEARTBEAT_FREQ = 404024,
    ERR_CONN_CREATE_INVALID_TREAT_INTEGER_AS_BIGINT = 404025,
    ERR_CONN_CREATE_INVALID_PRIVATE_KEY = 404026,
    ERR_CONN_CREATE_INVALID_PRIVATE_KEY_PATH = 404027,
    ERR_CONN_CREATE_INVALID_PRIVATE_KEY_PASS = 404028,
    ERR_CONN_CREATE_INVALID_OAUTH_TOKEN = 404029,
    ERR_CONN_CREATE_INVALID_VALIDATE_DEFAULT_PARAMETERS = 404030,
    ERR_CONN_CREATE_INVALID_APPLICATION = 404031,

    // 405001
    ERR_CONN_CONNECT_INVALID_CALLBACK = 405001,

    // 405501
    ERR_CONN_CONNECT_STATUS_CONNECTING = 405501, // sql state: 08002
    ERR_CONN_CONNECT_STATUS_CONNECTED = 405502, // sql state: 08002
    ERR_CONN_CONNECT_STATUS_DISCONNECTED = 405503, // sql state: 08002

    // 406001
    ERR_CONN_DESTROY_INVALID_CALLBACK = 406001,

    // 406501
    ERR_CONN_DESTROY_STATUS_PRISTINE = 406501,
    ERR_CONN_DESTROY_STATUS_DISCONNECTED = 406502,

    // 407001
    ERR_CONN_REQUEST_STATUS_PRISTINE = 407001, // sql state: 08003
    ERR_CONN_REQUEST_STATUS_DISCONNECTED = 407002, // sql state: 08003

    // 408001
    ERR_CONN_DESERIALIZE_MISSING_CONFIG = 408001,
    ERR_CONN_DESERIALIZE_INVALID_CONFIG_TYPE = 408002,
    ERR_CONN_DESERIALIZE_INVALID_CONFIG_FORM = 408003,

    // 409001
    ERR_CONN_EXEC_STMT_MISSING_OPTIONS = 409001,
    ERR_CONN_EXEC_STMT_INVALID_OPTIONS = 409002,
    ERR_CONN_EXEC_STMT_MISSING_SQL_TEXT = 409003,
    ERR_CONN_EXEC_STMT_INVALID_SQL_TEXT = 409004,
    ERR_CONN_EXEC_STMT_INVALID_INTERNAL = 409005,
    ERR_CONN_EXEC_STMT_INVALID_PARAMETERS = 409006,
    ERR_CONN_EXEC_STMT_INVALID_BINDS = 409007,
    ERR_CONN_EXEC_STMT_INVALID_BIND_VALUES = 409008,
    ERR_CONN_EXEC_STMT_INVALID_COMPLETE = 409009,
    ERR_CONN_EXEC_STMT_INVALID_STREAM_RESULT = 409010,
    ERR_CONN_EXEC_STMT_INVALID_FETCH_AS_STRING = 409011,
    ERR_CONN_EXEC_STMT_INVALID_FETCH_AS_STRING_VALUES = 409012,

    // 410001
    ERR_CONN_FETCH_RESULT_MISSING_OPTIONS = 410001,
    ERR_CONN_FETCH_RESULT_INVALID_OPTIONS = 410002,
    ERR_CONN_FETCH_RESULT_MISSING_STATEMENT_ID = 410003,
    ERR_CONN_FETCH_RESULT_INVALID_STATEMENT_ID = 410004,
    ERR_CONN_FETCH_RESULT_INVALID_COMPLETE = 410005,
    ERR_CONN_FETCH_RESULT_INVALID_STREAM_RESULT = 410006,
    ERR_CONN_FETCH_RESULT_INVALID_FETCH_AS_STRING = 410007,
    ERR_CONN_FETCH_RESULT_INVALID_FETCH_AS_STRING_VALUES = 410008,

    // 411001
    ERR_STMT_STREAM_ROWS_INVALID_OPTIONS = 411001,
    ERR_STMT_STREAM_ROWS_INVALID_START = 411002,
    ERR_STMT_STREAM_ROWS_INVALID_END = 411003,
    ERR_STMT_STREAM_ROWS_INVALID_FETCH_AS_STRING = 411004,
    ERR_STMT_STREAM_ROWS_INVALID_FETCH_AS_STRING_VALUES = 411005,

    // 412001
    ERR_OCSP_REVOKED = 412001,
    ERR_OCSP_UNKNOWN = 412002,
    ERR_OCSP_NO_SIGNATURE_ALGORITHM = 412003,
    ERR_OCSP_INVALID_SIGNATURE = 412004,
    ERR_OCSP_NO_RESPONSE = 412005,
    ERR_OCSP_INVALID_VALIDITY = 412006,
    ERR_OCSP_UNKNOWN_STATE = 412007,
    ERR_OCSP_NOT_TWO_ELEMENTS = 412008,
    ERR_OCSP_CACHE_EXPIRED = 412009,
    ERR_OCSP_FAILED_PARSE_RESPONSE = 412010,
    ERR_OCSP_INVALID_CERTIFICATE_VALIDITY = 412011,
    ERR_OCSP_RESPONDER_TIMEOUT = 412012,
    ERR_OCSP_CACHE_SERVER_TIMEOUT = 412013,
    ERR_OCSP_FAILED_OBTAIN_OCSP_RESPONSE = 412014,

    // 450001
    ERR_STMT_FETCH_ROWS_MISSING_OPTIONS = 450001,
    ERR_STMT_FETCH_ROWS_INVALID_OPTIONS = 450002,
    ERR_STMT_FETCH_ROWS_MISSING_EACH = 450003,
    ERR_STMT_FETCH_ROWS_INVALID_EACH = 450004,
    ERR_STMT_FETCH_ROWS_MISSING_END = 450005,
    ERR_STMT_FETCH_ROWS_INVALID_END = 450006,
    ERR_STMT_FETCH_ROWS_FETCHING_RESULT = 450007,
}

export interface SnowflakeErrorExternal extends Error {
    code?: ErrorCode;
    sqlState?: string;
    data?: Record<string, any>;
    response?: Record<string, any>;
    responseBody?: string;
    cause?: Error;
    isFatal?: boolean;
}

export interface SnowflakeError extends SnowflakeErrorExternal {
    externalize?: () => SnowflakeErrorExternal;
}

export interface StreamOptions {
    start?: number;
    end?: number;
    fetchAsString?: Array<"String" | "Boolean" | "Number" | "Date" | "JSON" | "Buffer"> | undefined;
}

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
     * Password for the user. Set this option if you set the authenticator option to SNOWFLAKE or the Okta URL endpoint for your
     * Okta account (e.g. https://<okta_account_name>.okta.com) or if you left the authenticator option unset.
     */
    password?: string;

    /**
     * @deprecated
     * The ID for the region where your account is located.
     *
     * This parameter is no longer used because the region information, if required, is included as part of the full account name.
     * It is documented here only for backward compatibility
     */
    region?: string | undefined;

    /**
     * The default database to use for the session after connecting.
     */
    database?: string | undefined;

    /**
     * The default schema to use for the session after connecting.
     */
    schema?: string | undefined;

    /**
     * The default virtual warehouse to use for the session after connecting. Used for performing queries, loading data, etc.
     */
    warehouse?: string | undefined;

    /**
     * The default security role to use for the session after connecting.
     */
    role?: string | undefined;

    /**
     * Number of milliseconds to keep the connection alive with no response. Default: 60000 (1 minute).
     */
    timeout?: number | undefined;

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
    clientSessionKeepAlive?: boolean | undefined;

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
    clientSessionKeepAliveHeartbeatFrequency?: number | undefined;

    jsTreatIntegerAsBigInt?: boolean | undefined;

    /**
     * Specifies the name of the client application connecting to Snowflake.
     */
    application?: string;

    /**
     * Specifies the authenticator to use for verifying user login credentials. You can set this to one of the following values:
     *  - SNOWFLAKE: Use the internal Snowflake authenticator. You must also set the password option.
     *  - EXTERNALBROWSER: Use your web browser to authenticate with Okta, ADFS, or any other SAML 2.0-compliant identity provider
     *    (IdP) that has been defined for your account.
     *  - https://<okta_account_name>.okta.com: Use Native SSO through Okta.
     *  - OAUTH: Use OAuth for authentication. You must also set the token option to the OAuth token (see below).
     *  - SNOWFLAKE_JWT: Use key pair authentication. See Using Key Pair Authentication & Key Pair Rotation.
     * The default value is SNOWFLAKE.
     * For more information on authentication, see {@link https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html Managing/Using Federated Authentication}
     *  and {@link https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html OAuth with Clients, Drivers, and Connectors}.
     */
    authenticator?: string;

    /**
     * Specifies the OAuth token to use for authentication. Set this option if you set the authenticator option to OAUTH.
     */
    token?: string;

    /**
     * Specifies the private key (in PEM format) for key pair authentication.
     * For details, see {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#label-nodejs-key-pair-authentication Using Key Pair Authentication & Key Pair Rotation}.
     */
    privateKey?: string | Buffer;

    /**
     * Specifies the local path to the private key file (e.g. rsa_key.p8).
     * For details, see {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#label-nodejs-key-pair-authentication Using Key Pair Authentication & Key Pair Rotation}.
     */
    privateKeyPath?: string;

    /**
     * Specifies the passcode to decrypt the private key file, if the file is encrypted.
     * For details, see {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#label-nodejs-key-pair-authentication Using Key Pair Authentication & Key Pair Rotation}.
     */
    privateKeyPass?: string;
}

export interface Column {
    /**
     * Returns the name of this column.
     */
    getName(): string;

    /**
     * Returns the index of this column.
     */
    getIndex(): number;

    /**
     * Returns the id of this column.
     */
    getId(): number;

    /**
     * Determines if this column is nullable.
     */
    isNullable(): boolean;

    /**
     * Returns the scale associated with this column.
     */
    getScale(): number;

    /**
     * Returns the type associated with this column.
     */
    getType(): string;

    /**
     * Returns true if this column is type STRING.
     */
    isString(): boolean;

    /**
     * Returns true if this column is type BINARY.
     */
    isBinary(): boolean;

    /**
     * Returns true if this column is type NUMBER.
     */
    isNumber(): boolean;

    /**
     * Returns true if this column is type BOOLEAN.
     */
    isBoolean(): boolean;

    /**
     * Returns true if this column is type DATE.
     */
    isDate(): boolean;

    /**
     * Returns true if this column is type TIME.
     */
    isTime(): boolean;

    /**
     * Returns true if this column is type TIMESTAMP.
     */
    isTimestamp(): boolean;

    /**
     * Returns true if this column is type TIMESTAMP_LTZ.
     */
    isTimestampLtz(): boolean;

    /**
     * Returns true if this column is type TIMESTAMP_NTZ.
     */
    isTimestampNtz(): boolean;

    /**
     * Returns true if this column is type TIMESTAMP_TZ.
     */
    isTimestampTz(): boolean;

    /**
     * Returns true if this column is type VARIANT.
     */
    isVariant(): boolean;

    /**
     * Returns true if this column is type OBJECT.
     */
    isObject(): boolean;

    /**
     * Returns true if this column is type ARRAY.
     */
    isArray(): boolean;
}

export enum StatementStatus {
    Fetching = "fetching",
    Complete = "complete",
}

export interface Statement {
    /**
     * Returns this statement's SQL text.
     */
    getSqlText(): string;

    /**
     * Returns the current status of this statement.
     */
    getStatus(): StatementStatus;

    /**
     * Returns the columns produced by this statement.
     */
    getColumns(): Column[];

    /**
     * Given a column identifier, returns the corresponding column. The column
     * identifier can be either the column name (String) or the column index
     * (Number). If a column is specified and there is more than one column with
     * that name, the first column with the specified name will be returned.
     */
    getColumn(columnIdentifier: string | number): Column;

    /**
     * Returns the number of rows returned by this statement.
     */
    getNumRows(): number;

    /**
     * Returns an object that contains information about the values of the
     * current warehouse, current database, etc., when this statement finished
     * executing.
     */
    getSessionState(): any;

    /**
     * Returns the request id that was used when the statement was issued.
     */
    getRequestId(): string;

    /**
     * Returns the statement id generated by the server for this statement.
     * If the statement is still executing and we don't know the statement id
     * yet, this method will return undefined.
     */
    getStatementId(): string;

    /**
     * Returns the number of rows updated by this statement.
     */
    getNumUpdatedRows(): number;

    /**
     * Cancels this statement if possible.
     * @param fn The callback to use.
     */
    cancel(fn: (err: SnowflakeError | undefined, stmt: Statement) => void): void;

    /**
     * Streams the rows in this statement's result. If start and end values are
     * specified, only rows in the specified range are streamed.
     *
     * @param StreamOptions options
     */
    streamRows(options?: StreamOptions): Readable;
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

    /**
     * Returns true if the connection is good to send a query otherwise false
     */
    isValidAsync(): Promise<boolean>;

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
     *
     * If you set the authenticator option to `EXTERNALBROWSER` (in order to use browser-based SSO) or
     * `https://<okta_account_name>.okta.com` (in order to use native SSO through Okta), call the {@link connectAsync}
     * method.
     */
    connect(fn: (err: SnowflakeError | undefined, conn: Connection) => void): void;

    /**
     * Establishes a connection if not in a fatal state.
     *
     * If you do not set the authenticator option to `EXTERNALBROWSER` (in order to use browser-based SSO) or
     * `https://<okta_account_name>.okta.com` (in order to use native SSO through Okta), call the {@link connect}
     * method.
     */
    connectAsync(fn: (err: SnowflakeError | undefined, conn: Connection) => void): Promise<void>;

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
        streamResult?: boolean | undefined;
        binds?: Binds | undefined;

        /**
         * ### Related Docs
         * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#fetching-data-types-as-strings Fetching Data Types As Strings}
         */
        fetchAsString?: Array<"String" | "Boolean" | "Number" | "Date" | "JSON" | "Buffer"> | undefined;
        complete?: (err: SnowflakeError | undefined, stmt: Statement, rows: any[] | undefined) => void;
    }): Statement;

    /**
     * Fetches the result of a previously issued statement.
     */
    fetchResult(): any;

    /**
     * Immediately terminates the connection without waiting for
     * currently executing statements to complete.
     */
    destroy(fn: (err: SnowflakeError | undefined, conn: Connection) => void): void;

    /**
     * Returns a serialized version of this connection.
     */
    serialize(): string;
};

export const STRING = "STRING";
export const BOOLEAN = "BOOLEAN";
export const NUMBER = "NUMBER";
export const DATE = "DATE";
export const JSON = "JSON";

export enum ocspModes {
    FAIL_CLOSED = "FAIL_CLOSED",
    FAIL_OPEN = "FAIL_OPEN",
    INSECURE = "INSECURE",
}

export interface ConfigureOptions {
    logLevel?: "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE" | undefined;
    insecureConnect?: boolean | undefined;

    /**
     * ### Related Docs
     * - {@link https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#choosing-fail-open-or-fail-close-mode Choosing `Fail-Open` or `Fail-Close` Mode}
     */
    ocspFailOpen?: boolean | undefined;
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

/**
 * Creates a connection pool for Snowflake connections.
 */
export function createPool(options: ConnectionOptions, poolOptions?: PoolOptions): Pool<Connection>;
