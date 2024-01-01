/// <reference types="node" />

import { EventEmitter } from "events";
import { type Socket } from "net";
import { type SecureContextOptions } from "tls";

export interface ColumnType {
    /**
     * The column's type, such as VarChar, Int or Binary.
     */
    name: string;
}

type Encoding =
    | "utf-8"
    | "CP437"
    | "CP850"
    | "CP874"
    | "CP932"
    | "CP936"
    | "CP949"
    | "CP950"
    | "CP1250"
    | "CP1251"
    | "CP1252"
    | "CP1253"
    | "CP1254"
    | "CP1255"
    | "CP1256"
    | "CP1257"
    | "CP1258";
declare class Collation {
    readonly lcid: number;
    readonly flags: number;
    readonly version: number;
    readonly sortId: number;
    readonly codepage: Encoding | undefined;
    private buffer;
    static fromBuffer(buffer: Buffer, offset?: number): Collation;
    constructor(lcid: number, flags: number, version: number, sortId: number);
    toBuffer(): Buffer;
}
interface Parameter {
    type: DataType;
    name: string;
    value: unknown;
    output: boolean;
    length?: number | undefined;
    precision?: number | undefined;
    scale?: number | undefined;
    nullable?: boolean | undefined;
}
interface ParameterData<T = any> {
    length?: number | undefined;
    scale?: number | undefined;
    precision?: number | undefined;
    collation?: Collation | undefined;
    value: T;
}
interface DataType {
    id: number;
    type: string;
    name: string;
    declaration(parameter: Parameter): string;
    generateTypeInfo(parameter: ParameterData, options: ConnectionOptions): Buffer;
    generateParameterLength(parameter: ParameterData, options: ConnectionOptions): Buffer;
    generateParameterData(parameter: ParameterData, options: ConnectionOptions): Generator<Buffer, void>;
    validate(value: any, collation: Collation | undefined): any;
    hasTableName?: boolean;
    resolveLength?: (parameter: Parameter) => number;
    resolvePrecision?: (parameter: Parameter) => number;
    resolveScale?: (parameter: Parameter) => number;
}

export interface ColumnMetaData {
    /**
     * The column's name
     */
    colName: string;

    /**
     * The column's type, such as VarChar, Int or Binary.
     */
    type: DataType;

    /**
     * The precision. Only applicable to numeric and decimal.
     */
    precision?: number | undefined;

    /**
     * The scale. Only applicable to numeric, decimal, time, datetime2 and datetimeoffset.
     */
    scale?: number | undefined;

    /**
     * The length, for char, varchar, nvarchar and varbinary.
     */
    dataLength?: number | undefined;
}

export interface DebugOptions {
    /**
     * A boolean, controlling whether debug events will be emitted with text describing packet details (default: false).
     */
    packet?: boolean | undefined;

    /**
     * A boolean, controlling whether debug events will be emitted with text describing packet data details (default: false).
     */
    data?: boolean | undefined;

    /**
     * A boolean, controlling whether debug events will be emitted with text describing packet payload details (default: false).
     */
    payload?: boolean | undefined;

    /**
     * A boolean, controlling whether debug events will be emitted with text describing token stream tokens (default: false).
     */
    token?: boolean | undefined;
}

export declare enum ISOLATION_LEVEL {
    NO_CHANGE = 0x00,
    READ_UNCOMMITTED = 0x01,
    READ_COMMITTED = 0x02,
    REPEATABLE_READ = 0x03,
    SERIALIZABLE = 0x04,
    SNAPSHOT = 0x05,
}

/**
 * Unfortunately these aren't valid JavaScript identifiers
 * so I cannot list the values here as enum values
 * 7_1 = 0x71000001
 * 7_2 = 0x72090002
 * 7_3_A = 0x730A0003
 * 7_3_B = 0x730B0003
 * 7_4 = 0x74000004
 * 8_0 = 0x08000000
 */
export declare var TDS_VERSION: { [index: string]: number };

export interface DataTypes {
    BigInt: DataType;
    Binary: DataType;
    Bit: DataType;
    Char: DataType;
    Date: DataType;
    DateTime2: DataType;
    DateTime: DataType;
    DateTimeOffset: DataType;
    Decimal: DataType;
    Float: DataType;
    Image: DataType;
    Int: DataType;
    Money: DataType;
    NChar: DataType;
    NText: DataType;
    NVarChar: DataType;
    Null: DataType;
    Numeric: DataType;
    Real: DataType;
    SmallDateTime: DataType;
    SmallInt: DataType;
    SmallMoney: DataType;
    TVP: DataType;
    Text: DataType;
    Time: DataType;
    TinyInt: DataType;
    UDT: DataType;
    UniqueIdentifier: DataType;
    VarBinary: DataType;
    VarChar: DataType;
    Variant: DataType;
    Xml: DataType;
}

export declare var TYPES: DataTypes;

export interface ConnectionOptions {
    /**
     * A boolean determining whether to rollback a transaction automatically if any error is encountered
     * during the given transaction's execution. This sets the value for `SET XACT_ABORT` during the
     * initial SQL phase of a connection [documentation](https://docs.microsoft.com/en-us/sql/t-sql/statements/set-xact-abort-transact-sql).
     */
    abortTransactionOnError?: boolean;
    /**
     * Application name used for identifying a specific application in profiling, logging or tracing tools of SQLServer.
     *
     * (default: `Tedious`)
     */
    appName?: string | undefined;
    /**
     * A boolean, controlling whether the column names returned will have the first letter converted to lower case
     * (`true`) or not. This value is ignored if you provide a {@link columnNameReplacer}.
     *
     * (default: `false`).
     */
    camelCaseColumns?: boolean;
    /**
     * The number of milliseconds before the {@link Request.cancel} (abort) of a request is considered failed
     *
     * (default: `5000`).
     */
    cancelTimeout?: number;
    /**
     * A function with parameters `(columnName, index, columnMetaData)` and returning a string. If provided,
     * this will be called once per column per result-set. The returned value will be used instead of the SQL-provided
     * column name on row and meta data objects. This allows you to dynamically convert between naming conventions.
     *
     * (default: `null`)
     */
    columnNameReplacer?: (colName: string, index: number, columnMetaData: ColumnMetaData) => string;
    /**
     * Number of milliseconds before retrying to establish connection, in case of transient failure.
     *
     * (default:`500`)
     */
    connectionRetryInterval?: number;
    /**
     * Custom connector factory method.
     *
     * (default: `undefined`)
     */
    connector?: () => Promise<Socket>;
    /**
     * The number of milliseconds before the attempt to connect is considered failed
     *
     * (default: `15000`).
     */
    connectTimeout?: number;
    /**
     * The default isolation level for new connections. All out-of-transaction queries are executed with this setting.
     *
     * The isolation levels are available from `require('tedious').ISOLATION_LEVEL`.
     * * `READ_UNCOMMITTED`
     * * `READ_COMMITTED`
     * * `REPEATABLE_READ`
     * * `SERIALIZABLE`
     * * `SNAPSHOT`
     *
     * (default: `READ_COMMITED`).
     */
    connectionIsolationLevel?: ISOLATION_LEVEL | number;
    /**
     * When encryption is used, an object may be supplied that will be used
     * for the first argument when calling [`tls.createSecurePair`](http://nodejs.org/docs/latest/api/tls.html#tls_tls_createsecurepair_credentials_isserver_requestcert_rejectunauthorized)
     *
     * (default: `{}`)
     */
    cryptoCredentialsDetails?: SecureContextOptions;
    /**
     * Database to connect to (default: dependent on server configuration).
     */
    database?: string | undefined;
    /**
     * Sets the first day of the week to a number from 1 through 7.
     */
    datefirst?: number;
    /**
     * A string representing position of month, day and year in temporal datatypes.
     *
     * (default: `mdy`)
     */
    dateFormat?: string;
    debug?: DebugOptions;
    /**
     * A boolean, controls the way null values should be used during comparison operation.
     *
     * (default: `true`)
     */
    enableAnsiNull?: boolean;
    /**
     * If true, `SET ANSI_NULL_DFLT_ON ON` will be set in the initial sql. This means new columns will be
     * nullable by default. See the [T-SQL documentation](https://msdn.microsoft.com/en-us/library/ms187375.aspx)
     *
     * (default: `true`).
     */
    enableAnsiNullDefault?: boolean;
    /**
     * A boolean, controls if padding should be applied for values shorter than the size of defined column.
     *
     * (default: `true`)
     */
    enableAnsiPadding?: boolean;
    /**
     * If true, SQL Server will follow ISO standard behavior during various error conditions. For details,
     * see [documentation](https://docs.microsoft.com/en-us/sql/t-sql/statements/set-ansi-warnings-transact-sql)
     *
     * (default: `true`)
     */
    enableAnsiWarnings?: boolean;
    /**
     * Ends a query when an overflow or divide-by-zero error occurs during query execution.
     * See [documentation](https://docs.microsoft.com/en-us/sql/t-sql/statements/set-arithabort-transact-sql?view=sql-server-2017)
     * for more details.
     *
     * (default: `true`)
     */
    enableArithAbort?: boolean;
    /**
     * A boolean, determines if concatenation with NULL should result in NULL or empty string value, more details in
     * [documentation](https://docs.microsoft.com/en-us/sql/t-sql/statements/set-concat-null-yields-null-transact-sql)
     *
     * (default: `true`)
     */
    enableConcatNullYieldsNull?: boolean;
    /**
     * A boolean, controls whether cursor should be closed, if the transaction opening it gets committed or rolled
     * back.
     *
     * (default: `null`)
     */
    enableCursorCloseOnCommit?: boolean | null;
    /**
     * A boolean, sets the connection to either implicit or autocommit transaction mode.
     *
     * (default: `false`)
     */
    enableImplicitTransactions?: boolean;
    /**
     * If false, error is not generated during loss of precession.
     *
     * (default: `false`)
     */
    enableNumericRoundabort?: boolean;
    /**
     * If true, characters enclosed in single quotes are treated as literals and those enclosed double quotes are treated as identifiers.
     *
     * (default: `true`)
     */
    enableQuotedIdentifier?: boolean;
    /**
     * A string value that can be only set to 'strict', which indicates the usage TDS 8.0 protocol. Otherwise,
     * a boolean determining whether or not the connection will be encrypted.
     *
     * (default: `true`)
     */
    encrypt?: string | boolean;
    /**
     * By default, if the database requested by {@link database} cannot be accessed,
     * the connection will fail with an error. However, if {@link fallbackToDefaultDb} is
     * set to `true`, then the user's default database will be used instead
     *
     * (default: `false`)
     */
    fallbackToDefaultDb?: boolean;
    /**
     * The instance name to connect to.
     * The SQL Server Browser service must be running on the database server,
     * and UDP port 1434 on the database server must be reachable.
     *
     * (no default)
     *
     * Mutually exclusive with {@link port}.
     */
    instanceName?: string | undefined;
    /**
     * The default isolation level that transactions will be run with.
     *
     * The isolation levels are available from `require('tedious').ISOLATION_LEVEL`.
     * * `READ_UNCOMMITTED`
     * * `READ_COMMITTED`
     * * `REPEATABLE_READ`
     * * `SERIALIZABLE`
     * * `SNAPSHOT`
     *
     * (default: `READ_COMMITED`).
     */
    isolationLevel?: ISOLATION_LEVEL | number;
    /**
     * Specifies the language environment for the session. The session language determines the datetime formats and system messages.
     *
     * (default: `us_english`).
     */
    language?: string;
    /**
     * A string indicating which network interface (ip address) to use when connecting to SQL Server.
     */
    localAddress?: string | undefined;
    /**
     * A boolean determining whether to parse unique identifier type with lowercase case characters.
     *
     * (default: `false`).
     */
    lowerCaseGuids?: boolean;
    /**
     * The maximum number of connection retries for transient errors.、
     *
     * (default: `3`).
     */
    maxRetriesOnTransientErrors?: number;
    /**
     * Sets the MultiSubnetFailover = True parameter, which can help minimize the client recovery latency when failovers occur.
     *
     * (default: `false`).
     */
    multiSubnetFailover?: boolean;
    /**
     * The size of TDS packets (subject to negotiation with the server).
     * Should be a power of 2.
     *
     * (default: `4096`).
     */
    packetSize?: number;
    /**
     * Port to connect to (default: `1433`).
     *
     * Mutually exclusive with {@link instanceName}
     */
    port?: number;
    /**
     * A boolean, determining whether the connection will request read only access from a SQL Server Availability
     * Group. For more information, see [here](http://msdn.microsoft.com/en-us/library/hh710054.aspx "Microsoft: Configure Read-Only Routing for an Availability Group (SQL Server)")
     *
     * (default: `false`).
     */
    readOnlyIntent?: boolean;
    /**
     * The number of milliseconds before a request is considered failed, or `0` for no timeout.
     *
     * As soon as a response is received, the timeout is cleared. This means that queries that immediately return a response have ability to run longer than this timeout.
     *
     * (default: `15000`).
     */
    requestTimeout?: number;
    /**
     * A boolean, that when true will expose received rows in Requests done related events:
     * * {@link Request.Event_doneInProc}
     * * {@link Request.Event_doneProc}
     * * {@link Request.Event_done}
     *
     * (default: `false`)
     *
     * Caution: If many row are received, enabling this option could result in
     * excessive memory usage.
     */
    rowCollectionOnDone?: boolean;
    /**
     * A boolean, that when true will expose received rows in Requests' completion callback.See {@link Request.constructor}.
     *
     * (default: `false`)
     *
     * Caution: If many row are received, enabling this option could result in
     * excessive memory usage.
     */
    rowCollectionOnRequestCompletion?: boolean;
    /**
     * The version of TDS to use. If server doesn't support specified version, negotiated version is used instead.
     *
     * The versions are available from `require('tedious').TDS_VERSION`.
     * * `7_1`
     * * `7_2`
     * * `7_3_A`
     * * `7_3_B`
     * * `7_4`
     *
     * (default: `7_4`)
     */
    tdsVersion?: string;
    /**
     * Specifies the size of varchar(max), nvarchar(max), varbinary(max), text, ntext, and image data returned by a SELECT statement.
     *
     * (default: `2147483647`)
     */
    textsize?: string;
    /**
     * If "true", the SQL Server SSL certificate is automatically trusted when the communication layer is encrypted using SSL.
     *
     * If "false", the SQL Server validates the server SSL certificate. If the server certificate validation fails,
     * the driver raises an error and terminates the connection. Make sure the value passed to serverName exactly
     * matches the Common Name (CN) or DNS name in the Subject Alternate Name in the server certificate for an SSL connection to succeed.
     *
     * (default: `true`)
     */
    trustServerCertificate?: boolean;
    /** */
    serverName?: string;
    /**
     * A boolean determining whether to return rows as arrays or key-value collections.
     *
     * (default: `false`).
     */
    useColumnNames?: boolean;
    /**
     * A boolean determining whether to pass time values in UTC or local time.
     *
     * (default: `true`).
     */
    useUTC?: boolean;
    /**
     * The workstation ID (WSID) of the client, default os.hostname().
     * Used for identifying a specific client in profiling, logging or
     * tracing client activity in SQLServer.
     *
     * The value is reported by the TSQL function HOST_NAME().
     */
    workstationId?: string | undefined;
}

interface AzureActiveDirectoryMsiAppServiceAuthentication {
    type: "azure-active-directory-msi-app-service";
    options: {
        /**
         * If you user want to connect to an Azure app service using a specific client account
         * they need to provide `clientId` associate to their created identity.
         *
         * This is optional for retrieve token from azure web app service
         */
        clientId?: string;
    };
}
interface AzureActiveDirectoryMsiVmAuthentication {
    type: "azure-active-directory-msi-vm";
    options: {
        /**
         * If you want to connect using a specific client account
         * they need to provide `clientId` associated to their created identity.
         *
         * This is optional for retrieve a token
         */
        clientId?: string;
    };
}
interface AzureActiveDirectoryDefaultAuthentication {
    type: "azure-active-directory-default";
    options: {
        /**
         * If you want to connect using a specific client account
         * they need to provide `clientId` associated to their created identity.
         *
         * This is optional for retrieving a token
         */
        clientId?: string;
    };
}
interface AzureActiveDirectoryAccessTokenAuthentication {
    type: "azure-active-directory-access-token";
    options: {
        /**
         * A user need to provide `token` which they retrieved else where
         * to forming the connection.
         */
        token: string;
    };
}
interface AzureActiveDirectoryPasswordAuthentication {
    type: "azure-active-directory-password";
    options: {
        /**
         * A user need to provide `userName` associate to their account.
         */
        userName: string;
        /**
         * A user need to provide `password` associate to their account.
         */
        password: string;
        /**
         * A client id to use.
         */
        clientId: string;
        /**
         * Optional parameter for specific Azure tenant ID
         */
        tenantId: string;
    };
}
interface AzureActiveDirectoryServicePrincipalSecret {
    type: "azure-active-directory-service-principal-secret";
    options: {
        /**
         * Application (`client`) ID from your registered Azure application
         */
        clientId: string;
        /**
         * The created `client secret` for this registered Azure application
         */
        clientSecret: string;
        /**
         * Directory (`tenant`) ID from your registered Azure application
         */
        tenantId: string;
    };
}
interface NtlmAuthentication {
    type: "ntlm";
    options: {
        /**
         * User name from your windows account.
         */
        userName: string;
        /**
         * Password from your windows account.
         */
        password: string;
        /**
         * Once you set domain for ntlm authentication type, driver will connect to SQL Server using domain login.
         *
         * This is necessary for forming a connection using ntlm type
         */
        domain: string;
    };
}
interface DefaultAuthentication {
    type: "default";
    options: {
        /**
         * User name to use for sql server login.
         */
        userName?: string | undefined;
        /**
         * Password to use for sql server login.
         */
        password?: string | undefined;
    };
}
type Authentication =
    | DefaultAuthentication
    | NtlmAuthentication
    | AzureActiveDirectoryPasswordAuthentication
    | AzureActiveDirectoryMsiAppServiceAuthentication
    | AzureActiveDirectoryMsiVmAuthentication
    | AzureActiveDirectoryAccessTokenAuthentication
    | AzureActiveDirectoryServicePrincipalSecret
    | AzureActiveDirectoryDefaultAuthentication;
type AuthenticationType = Authentication["type"];

export interface AuthenticationOptions {
    /**
     * Type of the authentication method, valid types are `default`, `ntlm`,
     * `azure-active-directory-password`, `azure-active-directory-access-token`,
     * `azure-active-directory-msi-vm`, `azure-active-directory-msi-app-service`,
     * `azure-active-directory-default`
     * or `azure-active-directory-service-principal-secret`
     */
    type?: AuthenticationType;
    /**
     * Different options for authentication types:
     *
     * * `default`: {@link DefaultAuthentication.options}
     * * `ntlm` :{@link NtlmAuthentication}
     * * `azure-active-directory-password` : {@link AzureActiveDirectoryPasswordAuthentication.options}
     * * `azure-active-directory-access-token` : {@link AzureActiveDirectoryAccessTokenAuthentication.options}
     * * `azure-active-directory-msi-vm` : {@link AzureActiveDirectoryMsiVmAuthentication.options}
     * * `azure-active-directory-msi-app-service` : {@link AzureActiveDirectoryMsiAppServiceAuthentication.options}
     * * `azure-active-directory-service-principal-secret` : {@link AzureActiveDirectoryServicePrincipalSecret.options}
     * * `azure-active-directory-default` : {@link AzureActiveDirectoryDefaultAuthentication.options}
     */
    options?: any;
}

export interface ConnectionConfiguration {
    /**
     * Hostname to connect to.
     */
    server: string;
    /**
     * Configuration options for forming the connection.
     */
    options?: ConnectionOptions;
    /**
     * Authentication related options for connection.
     */
    authentication?: AuthenticationOptions;
}

export interface ParameterOptions {
    /**
     * For VarChar, NVarChar, VarBinary. Use length as `Infinity` for VarChar(max), NVarChar(max) and VarBinary(max).
     */
    length?: number;
    /**
     * For Numeric, Decimal.
     */
    precision?: number;
    /**
     * For Numeric, Decimal, Time, DateTime2, DateTimeOffset.
     */
    scale?: number;
}

/**
 * Type of each column in the Request#row event
 */
export interface ColumnValue {
    metadata: ColumnMetaData;
    value: any;
}

export interface Request {
    /**
     * This event, describing result set columns, will be emitted before row
     * events are emitted. This event may be emitted multiple times when more
     * than one recordset is produced by the statement.
     *
     * An array like object, where the columns can be accessed either by index
     * or name. Columns with a name that is an integer are not accessible by name,
     * as it would be interpreted as an array index.
     */
    on(event: "columnMetadata", listener: (columns: ColumnMetaData[]) => void): this;
    on(event: "columnMetadata", listener: (columns: Record<string, ColumnMetaData>) => void): this;

    /**
     * The request has been prepared and can be used in subsequent calls to execute and unprepare.
     */
    on(event: "prepared", listener: () => void): this;

    /**
     * The request encountered an error and has not been prepared.
     */
    on(event: "error", listener: (err: Error) => void): this;

    /**
     * This is the final event emitted by a request. This is emitted after the callback passed in a request is called.
     */
    on(event: "requestCompleted", listener: () => void): this;

    /**
     * A row resulting from execution of the SQL statement. * An array or object (depends on {@link ConnectionOptions.useColumnNames}), where the columns can be accessed by index/name.
     */
    on(event: "row", listener: (columns: ColumnValue[]) => void): this;
    on(event: "row", listener: (columns: Record<string, ColumnValue>) => void): this;

    /**
     * All rows from a result set have been provided (through `row` events).
     *
     * This token is used to indicate the completion of a SQL statement.
     * As multiple SQL statements can be sent to the server in a single SQL batch, multiple `done` can be generated.
     * An `done` event is emitted for each SQL statement in the SQL batch except variable declarations.
     * For execution of SQL statements within stored procedures, `doneProc` and `doneInProc` events are used in place of `done`.
     *
     * If you are using {@link Connection.execSql} then SQL server may treat the multiple calls with the same query as a stored procedure.
     * When this occurs, the `doneProc` and `doneInProc` events may be emitted instead. You must handle both events to ensure complete coverage.
     */
    on(
        event: "done",
        listener:
            /**
             * @param rowCount
             *   The number of result rows. May be `undefined` if not available.
             *
             * @param more
             *   If there are more results to come (probably because multiple statements are being executed), then `true`.
             *
             * @param rst
             *   Rows as a result of executing the SQL statement.
             *   Will only be available if Connection's {@link ConnectionOptions.rowCollectionOnDone} is `true`.
             */
            (rowCount: number | undefined, more: boolean, rst?: any[]) => void,
    ): this;

    /**
     * Indicates the completion status of a SQL statement within a stored procedure. All rows from a statement
     * in a stored procedure have been provided (through `row` events).
     *
     * This event may also occur when executing multiple calls with the same query using {@link execSql}.
     */
    on(
        event: "doneInProc",
        listener:
            /**
             * @param rowCount
             *   The number of result rows. May be `undefined` if not available.
             *
             * @param more
             *   If there are more results to come (probably because multiple statements are being executed), then `true`.
             *
             * @param rst
             *   Rows as a result of executing the SQL statement.
             *   Will only be available if Connection's {@link ConnectionOptions.rowCollectionOnDone} is `true`.
             */
            (rowCount: number | undefined, more: boolean, rst?: any[]) => void,
    ): this;

    /**
     * Indicates the completion status of a stored procedure. This is also generated for stored procedures
     * executed through SQL statements.\
     * This event may also occur when executing multiple calls with the same query using {@link execSql}.
     */
    on(
        event: "doneProc",
        listener:
            /**
             * @param rowCount
             *   The number of result rows. May be `undefined` if not available.
             *
             * @param more
             *   If there are more results to come (probably because multiple statements are being executed), then `true`.
             *
             * @param rst
             *   Rows as a result of executing the SQL statement.
             *   Will only be available if Connection's {@link ConnectionOptions.rowCollectionOnDone} is `true`.
             */
            (rowCount: number | undefined, more: boolean, procReturnStatusValue: number, rst?: any[]) => void,
    ): this;

    /**
     * A value for an output parameter (that was added to the request with {@link addOutputParameter}).
     * See also `Using Parameters`.
     */
    on(
        event: "returnValue",
        listener:
            /**
             * @param parameterName
             *   The parameter name. (Does not start with '@'.)
             *
             * @param value
             *   The parameter's output value.
             *
             * @param metadata
             *   The same data that is exposed in the `columnMetaData` event.
             */
            (parameterName: string, value: unknown, columnMetaData: ColumnMetaData) => void,
    ): this;
}

/**
 * The callback is called when the request has completed, either successfully or with an error.
 * If an error occurs during execution of the statement(s), then `err` will describe the error.
 *
 * As only one request at a time may be executed on a connection, another request should not
 * be initiated until this callback is called.
 *
 * This callback is called before `requestCompleted` is emitted.
 */
type CompletionCallback =
    /**
     * @param error
     *   If an error occurred, an error object.
     *
     * @param rowCount
     *   The number of rows emitted as result of executing the SQL statement.
     *
     * @param rows
     *   Rows as a result of executing the SQL statement.
     *   Will only be available if {@link ConnectionOptions.rowCollectionOnRequestCompletion} is `true`.
     */
    (error: Error | null | undefined, rowCount?: number, rows?: any) => void;

/**
 * A Request instance represents a request that can be executed on a connection
 * @event  'columnMetadata' This event, describing result set columns, will be emitted before row events are emitted. This event may be emited multiple times when more than one recordset is produced by the statement.
 * @event  'prepared' The request has been prepared and can be used in subsequent calls to execute and unprepare.
 * @event  'error' The request encountered an error and has not been prepared.
 * @event  'requestCompleted' This is the final event emitted by a request. This is emitted after the callback passed in a request is called.
 * @event  'row' A row resulting from execution of the SQL statement
 * @event  'done' All rows from a result set have been provided (through row events). This token is used to indicate the completion of a SQL statement. As multiple SQL statements can be sent to the server in a single SQL batch, multiple done events can be generated. An done event is emited for each SQL statement in the SQL batch except variable declarations. For execution of SQL statements within stored procedures, doneProc and doneInProc events are used in place of done events.
 * @event  'doneInProc' Indicates the completion status of a SQL statement within a stored procedure. All rows from a statement in a stored procedure have been provided (through row events).
 * @event  'doneProc' Indicates the completion status of a stored procedure. This is also generated for stored procedures executed through SQL statements.
 * @event  'returnValue' A value for an output parameter (that was added to the request with addOutputParameter(...)). See also Using Parameters.
 */
export class Request extends EventEmitter {
    /**
     * Constructor
     * @param sqlTextOrProcedure The SQL statement to be executed
     *
     * @param callback The callback to execute once the request has been fully completed.
     */
    constructor(sqlTextOrProcedure: string, callback: CompletionCallback);

    /**
     * Add an input parameter to the request.
     * @param name The parameter name. This should correspond to a parameter in the SQL, or a parameter that a called procedure expects. The name should not start with `@`.
     * @param type One of the supported data types.
     * @param value The value that the parameter is to be given. The Javascript type of the argument should match that documented for data types.
     * @param options Additional type options. Optional.
     */
    addParameter(name: string, type: DataType, value?: unknown, options?: Readonly<ParameterOptions> | null): void;

    /**
     * Add an output parameter to the request. The parameter's value will be provide by an emitted returnValue event.
     * @param name The parameter name. This should correspond to a parameter in the SQL, or a parameter that a called procedure expects.
     * @param type One of the supported data types.
     * @param value The value that the parameter is to be given. The Javascript type of the argument should match that documented for data types
     * @param options Additional type options. Optional.
     */
    addOutputParameter(
        name: string,
        type: DataType,
        value?: unknown,
        options?: Readonly<ParameterOptions> | null,
    ): void;

    /**
     * Temporarily suspends the flow of data from the database. No more 'row' events will be emitted until request.resume() is called.
     */
    pause(): void;

    /**
     * Resumes the flow of data from the database.
     */
    resume(): void;

    /**
     * Sets a timeout for this request.
     *
     * @param timeout The number of milliseconds before the request is considered failed, or `0` for no timeout. When no timeout is set for the request, the {@link ConnectionOptions.requestTimeout} of the {@link Connection} is used.
     */
    setTimeout(timeout?: number): void;
}

type BulkLoadCallback =
    /**
     * A function which will be called after the {@link BulkLoad} finishes executing.
     *
     * @param rowCount the number of rows inserted
     */
    (err: Error | undefined | null, rowCount?: number) => void;

export interface BulkLoadColumnOpts extends ParameterOptions {
    /**
     * If the name of the column is different from the name of the property found on `rowObj` arguments passed to {@link addRow}, then you can use this option to specify the property name.
     */
    objName?: string;
    /**
     * Indicates whether the column accepts NULL values.
     */
    nullable?: boolean;
}

/**
 * A BulkLoad instance is used to perform a bulk insert.
 *
 * Use {@link Connection.newBulkLoad} to create a new instance, and {@link Connection.execBulkLoad} to execute it.
 *
 * Example of BulkLoad Usages:
 *
 * ```js
 * // optional BulkLoad options
 * const options = { keepNulls: true };
 *
 * // instantiate - provide the table where you'll be inserting to, options and a callback
 * const bulkLoad = connection.newBulkLoad('MyTable', options, (error, rowCount) => {
 *   console.log('inserted %d rows', rowCount);
 * });
 *
 * // setup your columns - always indicate whether the column is nullable
 * bulkLoad.addColumn('myInt', TYPES.Int, { nullable: false });
 * bulkLoad.addColumn('myString', TYPES.NVarChar, { length: 50, nullable: true });
 *
 * // execute
 * connection.execBulkLoad(bulkLoad, [
 *   { myInt: 7, myString: 'hello' },
 *   { myInt: 23, myString: 'world' }
 * ]);
 * ```
 */
export interface BulkLoad {
    /**
     * Adds a column to the bulk load.
     *
     * The column definitions should match the table you are trying to insert into.
     * Attempting to call addColumn after the first row has been added will throw an exception.
     *
     * ```js
     * bulkLoad.addColumn('MyIntColumn', TYPES.Int, { nullable: false });
     * ```
     *
     * @param name The name of the column.
     * @param type One of the supported `data types`.
     * @param options Additional column type information. At a minimum, `nullable` must be set to true or false.
     */
    addColumn(name: string, type: DataType, options: BulkLoadColumnOpts): void;

    /**
     * This is simply a helper utility function which returns a `CREATE TABLE SQL` statement based on the columns added to the bulkLoad object.
     * This may be particularly handy when you want to insert into a temporary table (a table which starts with `#`).
     *
     * ```js
     * var sql = bulkLoad.getTableCreationSql();
     * ```
     *
     * A side note on bulk inserting into temporary tables: if you want to access a local temporary table after executing the bulk load,
     * you'll need to use the same connection and execute your requests using {@link Connection.execSqlBatch} instead of {@link Connection.execSql}
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

export interface Connection {
    /**
     * The attempt to connect and validate has completed.
     */
    on(
        event: "connect",
        /**
         * @param err If successfully connected, will be falsey. If there was a
         *   problem (with either connecting or validation), will be an {@link Error} object.
         */
        listener: (err: Error | undefined) => void,
    ): this;

    /**
     * The connection has ended. This may be as a result of the client calling {@link close}, the server closing the connection, or a network error.
     */
    on(event: "end", listener: () => void): this;

    /**
     * Internal error occurs.
     */
    on(event: "error", listener: (err: Error) => void): this;

    /**
     * A debug message is available. It may be logged or ignored.
     */
    on(event: "debug", listener: (messageText: string) => void): this;

    /**
     * The server has issued an information message.
     */
    on(event: "infoMessage", listener: (message: InfoMessageToken) => void): this;

    /**
     * The server has issued an error message.
     */
    on(event: "errorMessage", listener: (message: ErrorMessageToken) => void): this;

    /**
     * The server has reported that the active database has changed. This may be as a result of a successful login, or a `use` statement.
     */
    on(event: "databaseChange", listener: (databaseName: string) => void): this;

    /**
     * The server has reported that the language has changed.
     */
    on(event: "languageChange", listener: (languageName: string) => void): this;

    /**
     * The server has reported that the charset has changed.
     */
    on(event: "charsetChange", listener: (charset: string) => void): this;
}

export type BeginTransactionCallback =
    /**
     * The callback is called when the request to start the transaction has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     *
     * @param err If an error occurred, an {@link Error} object with details of the error.
     * @param transactionDescriptor A Buffer that describe the transaction
     */
    (err: Error | null | undefined, transactionDescriptor?: Buffer) => void;
export type CommitTransactionCallback =
    /**
     * The callback is called when the request to commit the transaction has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     *
     * @param err If an error occurred, an {@link Error} object with details of the error.
     */
    (err: Error | null | undefined) => void;
export type ResetCallback =
    /**
     * The callback is called when the connection reset has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     *
     * @param err If an error occurred, an {@link Error} object with details of the error.
     */
    (err: Error | null | undefined) => void;
export type RollbackTransactionCallback =
    /**
     * The callback is called when the request to rollback the transaction has completed, either successfully or with an error.
     * If an error occurred then err will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     *
     * @param err If an error occurred, an {@link Error} object with details of the error.
     */
    (err: Error | null | undefined) => void;
export type SaveTransactionCallback =
    /**
     * The callback is called when the request to set a savepoint within the transaction has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     *
     * @param err If an error occurred, an {@link Error} object with details of the error.
     */
    (err: Error | null | undefined) => void;
export type TransactionDoneCallback = (err: Error | null | undefined, ...args: any[]) => void;
export type CallbackParameters<T extends (err: Error | null | undefined, ...args: any[]) => any> = T extends
    (err: Error | null | undefined, ...args: infer P) => any ? P : never;

/**
 * A {@link Connection} instance represents a single connection to a database server.
 *
 * ```js
 * var Connection = require('tedious').Connection;
 * var config = {
 *  "authentication": {
 *    ...,
 *    "options": {...}
 *  },
 *  "options": {...}
 * };
 * var connection = new Connection(config);
 * ```
 *
 * Only one request at a time may be executed on a connection. Once a {@link Request}
 * has been initiated (with {@link Connection.callProcedure}, {@link Connection.execSql},
 * or {@link Connection.execSqlBatch}), another should not be initiated until the
 * {@link Request}'s completion callback is called.
 */
export class Connection extends EventEmitter {
    /**
     * Note: be aware of the different options field:
     * 1. config.authentication.options
     * 2. config.options
     *
     * ```js
     * const { Connection } = require('tedious');
     *
     * const config = {
     *  "authentication": {
     *    ...,
     *    "options": {...}
     *  },
     *  "options": {...}
     * };
     *
     * const connection = new Connection(config);
     * ```
     *
     * @param config
     */
    constructor(config: ConnectionConfiguration);

    /**
     * Initialize a connection.
     * @param callback The callback is called when the connection is either successfully created (on a connect event) or has an error (on a error event). If an error occurs, then err will describe the error.
     */
    connect(callback?: (err?: Error) => void): void;

    /**
     * Start a transaction.
     *
     * @param callback The callback is called when the request to start the transaction has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     * @param name A string representing a name to associate with the transaction. Optional, and defaults to an empty string. Required when `isolationLevel` is present.
     * @param isolationLevel The isolation level that the transaction is to be run with.
     *
     *   The isolation levels are available from `require('tedious').ISOLATION_LEVEL`.
     *   * `READ_UNCOMMITTED`
     *   * `READ_COMMITTED`
     *   * `REPEATABLE_READ`
     *   * `SERIALIZABLE`
     *   * `SNAPSHOT`
     *
     *   Optional, and defaults to the Connection's isolation level.
     */
    beginTransaction(
        callback: BeginTransactionCallback,
        name?: string,
        isolationLevel?: ISOLATION_LEVEL | number,
    ): void;

    /**
     * Commit a transaction.
     *
     * There should be an active transaction - that is, {@link beginTransaction} should have been previously called.
     *
     * @param callback The callback is called when the request to commit the transaction has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     * @param name A string representing a name to associate with the transaction. Optional, and defaults to an empty string. Required when `isolationLevel`is present.
     */
    commitTransaction(callback: CommitTransactionCallback, name?: string): void;

    /**
     * Rollback a transaction.
     *
     * There should be an active transaction - that is, {@link beginTransaction} should have been previously called.
     *
     * @param callback The callback is called when the request to rollback the transaction has completed, either successfully or with an error.
     * If an error occurred then err will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     * @param name A string representing a name to associate with the transaction. Optional, and defaults to an empty string. Required when `isolationLevel` is present.
     */
    rollbackTransaction(callback: RollbackTransactionCallback, name?: string): void;

    /**
     * Set a savepoint within a transaction.
     *
     * There should be an active transaction - that is, {@link beginTransaction} should have been previously called.
     *
     * @param callback The callback is called when the request to set a savepoint within the transaction has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     * @param name A string representing a name to associate with the transaction. Optional, and defaults to an empty string. Required when `isolationLevel` is present.
     */
    saveTransaction(callback: SaveTransactionCallback, name: string): void;

    /**
     * Run the given callback after starting a transaction, and commit or
     * rollback the transaction afterwards.
     *
     * This is a helper that employs {@link beginTransaction}, {@link commitTransaction}, {@link rollbackTransaction}, and {@link saveTransaction} to greatly simplify the use of database transactions and automatically handle transaction nesting.
     *
     * @param callback The callback is called when the request to start a transaction (or create a savepoint, in the case of a nested transaction) has completed, either successfully or with an error.
     * @param isolationLevel The isolation level that the transaction is to be run with.
     *
     *   The isolation levels are available from `require('tedious').ISOLATION_LEVEL`.
     *   * `READ_UNCOMMITTED`
     *   * `READ_COMMITTED`
     *   * `REPEATABLE_READ`
     *   * `SERIALIZABLE`
     *   * `SNAPSHOT`
     *
     *   Optional, and defaults to the Connection's isolation level.
     */
    transaction(
        callback: (
            err: Error | null | undefined,
            txDone?: <T extends TransactionDoneCallback>(
                err: Error | null | undefined,
                done: T,
                ...args: CallbackParameters<T>
            ) => void,
        ) => void,
        isolationLevel?: ISOLATION_LEVEL | number,
    ): void;

    /**
     * Prepare the SQL represented by the request.
     *
     * The request can then be used in subsequent calls to {@link execute} and {@link unprepare}
     *
     * @param request A {@link Request} object representing the request. Parameters only require a name and type. Parameter values are ignored.
     */
    prepare(request: Request): void;

    /**
     * Release the SQL Server resources associated with a previously prepared request.
     *
     * @param request A {@link Request} object representing the request. Parameters only require a name and type. Parameter values are ignored.
     */
    unprepare(request: Request): void;

    /**
     * Call a stored procedure represented by {@link Request}.
     *
     * @param request A {@link Request} object representing the request.
     */
    callProcedure(request: Request): void;

    /**
     *  Execute the SQL represented by {@link Request}.
     *
     * As `sp_executesql` is used to execute the SQL, if the same SQL is executed multiples times
     * using this function, the SQL Server query optimizer is likely to reuse the execution plan it generates
     * for the first execution. This may also result in SQL server treating the request like a stored procedure
     * which can result in the {@link Event_doneInProc} or {@link Event_doneProc} events being emitted instead of the
     * {@link Event_done} event you might expect. Using {@link execSqlBatch} will prevent this from occurring but may have a negative performance impact.
     *
     * Beware of the way that scoping rules apply, and how they may [affect local temp tables](http://weblogs.sqlteam.com/mladenp/archive/2006/11/03/17197.aspx)
     * If you're running in to scoping issues, then {@link execSqlBatch} may be a better choice.
     * See also [issue #24](https://github.com/pekim/tedious/issues/24)
     *
     * @param request A {@link Request} object representing the request.
     */
    execSql(request: Request): void;

    /**
     * Execute the SQL batch represented by {@link Request}.
     * There is no param support, and unlike {@link Request.execSql}, it is not likely that SQL Server will reuse the execution plan it generates for the SQL.
     *
     * In almost all cases, {@link Request.execSql} will be a better choice.
     *
     * @param request A {@link Request} object representing the request.
     */
    execSqlBatch(request: Request): void;

    /**
     * Execute previously prepared SQL, using the supplied parameters.
     *
     * @param request A previously prepared {@link Request}.
     * @param parameters  An object whose names correspond to the names of parameters that were added to the {@link Request} before it was prepared. The object's values are passed as the parameters' values when the request is executed.
     */
    execute(request: Request, parameters?: Record<string, unknown>): void;

    /**
     * Creates a new BulkLoad instance.
     *
     * @param table The name of the table to bulk-insert into.
     * @param options A set of bulk load options.
     */
    newBulkLoad(table: string, callback: BulkLoadCallback): BulkLoad;
    newBulkLoad(table: string, options: BulkLoadColumnOpts, callback: BulkLoadCallback): BulkLoad;

    /**
     * Execute a {@link BulkLoad}.
     *
     * ```js
     * // We want to perform a bulk load into a table with the following format:
     * // CREATE TABLE employees (first_name nvarchar(255), last_name nvarchar(255), day_of_birth date);
     *
     * const bulkLoad = connection.newBulkLoad('employees', (err, rowCount) => {
     *   // ...
     * });
     *
     * // First, we need to specify the columns that we want to write to,
     * // and their definitions. These definitions must match the actual table,
     * // otherwise the bulk load will fail.
     * bulkLoad.addColumn('first_name', TYPES.NVarchar, { nullable: false });
     * bulkLoad.addColumn('last_name', TYPES.NVarchar, { nullable: false });
     * bulkLoad.addColumn('date_of_birth', TYPES.Date, { nullable: false });
     *
     * // Execute a bulk load with a predefined list of rows.
     * //
     * // Note that these rows are held in memory until the
     * // bulk load was performed, so if you need to write a large
     * // number of rows (e.g. by reading from a CSV file),
     * // passing an `AsyncIterable` is advisable to keep memory usage low.
     * connection.execBulkLoad(bulkLoad, [
     *   { 'first_name': 'Steve', 'last_name': 'Jobs', 'day_of_birth': new Date('02-24-1955') },
     *   { 'first_name': 'Bill', 'last_name': 'Gates', 'day_of_birth': new Date('10-28-1955') }
     * ]);
     * ```
     *
     * @param bulkLoad A previously created {@link BulkLoad}.
     * @param rows A {@link Iterable} or {@link AsyncIterable} that contains the rows that should be bulk loaded.
     */
    execBulkLoad(
        bulkLoad: BulkLoad,
        rows: AsyncIterable<unknown[] | Record<string, unknown>> | Iterable<unknown[] | Record<string, unknown>>,
    ): void;

    /**
     * Reset the connection to its initial state.
     * Can be useful for connection pool implementations.
     *
     * @param callback The callback is called when the connection reset has completed, either successfully or with an error.
     * If an error occurred then `err` will describe the error.
     *
     * As only one request at a time may be executed on a connection, another request should not be initiated until this callback is called.
     */
    reset(callback: ResetCallback): void;

    /**
     * Cancel currently executed request.
     */
    cancel(): boolean;

    /**
     * Closes the connection to the database.
     *
     * The {@link Event_end} will be emitted once the connection has been closed.
     */
    close(): void;
}

/**
 * Error emitted by Connection class 'error' event
 */
export declare class ConnectionError extends Error {
    code: string | undefined;
    isTransient: boolean | undefined;
    constructor(message: string, code?: string);
}

/**
 * Error emitted by Request class
 */
export declare class RequestError extends Error {
    code: string | undefined;
    number: number | undefined;
    state: number | undefined;
    class: number | undefined;
    serverName: string | undefined;
    procName: string | undefined;
    lineNumber: number | undefined;
    constructor(message: string, code?: string);
}

declare class InfoMessageToken {
    name: "INFO";
    handlerName: "onInfoMessage";
    number: number;
    state: number;
    class: number;
    message: string;
    serverName: string;
    procName: string;
    lineNumber: number;
    constructor({ number, state, class: clazz, message, serverName, procName, lineNumber }: {
        number: number;
        state: number;
        class: number;
        message: string;
        serverName: string;
        procName: string;
        lineNumber: number;
    });
}

declare class ErrorMessageToken {
    name: "ERROR";
    handlerName: "onErrorMessage";
    number: number;
    state: number;
    class: number;
    message: string;
    serverName: string;
    procName: string;
    lineNumber: number;
    constructor({ number, state, class: clazz, message, serverName, procName, lineNumber }: {
        number: number;
        state: number;
        class: number;
        message: string;
        serverName: string;
        procName: string;
        lineNumber: number;
    });
}
