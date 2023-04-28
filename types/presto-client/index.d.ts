// Type definitions for presto-client 0.13
// Project: https://github.com/tagomoris/presto-client-node
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ClientOptions {
    /**
     * Presto coordinator hostname or address
     * @default "localhost"
     */
    host?: string;
    /**
     * Setting a Hash object enables SSL and verify server certificate with options
     */
    ssl?: {
        /**
         * An authority certificate or array of authority certificates to check
         * the remote host against
         */
        ca?: string;
        /**
         * Public x509 certificate to use
         */
        cert?: string;
        /**
         * Default cipher suite to use
         */
        ciphers?: string;
        /**
         * Private key to use for SSL
         */
        key?: string;
        /**
         * A string of passphrase for the private key or pfx
         */
        passphrase?: string;
        /**
         * Certificate, Private key and CA certificates to use for SSL
         */
        pfx?: string;
        /**
         * If not `false` the server will reject any connection which is not
         * authorized with the list of supplied CAs. This option only has an
         * effect if requestCert is `true`.
         * @default true
         */
        rejectUnauthorized?: boolean;
        /**
         * Optional SSL method to use. The possible values are listed as
         * SSL_METHODS, use the function names as strings. For example,
         * "SSLv3_method" to force SSL version 3.
         * @default "SSLv23_method"
         */
        secureProtocol?: string;
        /**
         * Server name for the SNI (Server Name Indication) TLS extension
         */
        servername?: string;
    };
    /**
     * Presto coordinator port
     * @default 8080
     */
    port?: number;
    /**
     * Username of query
     * @default process.env.USER
     */
    user?: string;
    /**
     * Source of query
     * @default "nodejs-client"
     */
    source?: string;
    /**
     * Pass in a user and password to enable Authorization Basic headers on all
     * requests
     */
    basic_auth?: {
        user: string;
        password: string;
    };
    /**
     * Sets HTTP `Authorization` header with the provided string.
     */
    custom_auth?: string;
    /**
     * Default catalog name
     */
    catalog?: string;
    /**
     * Default schema name
     */
    schema?: string;
    /**
     * Interval milliseconds of each RPC to check query status
     * @default 800
     */
    checkInterval?: number;
    /**
     * Enable more verbose callback for Presto query states. When set to true,
     * this flag modifies the condition of the state change callback to return
     * data every checkInterval(default: 800ms). Modify checkInterval if you
     * wish to change the frequency. The purpose of this variable is to enable
     * verbose update capability in state callbacks. This is such that
     * "percentage complete" and "processed rows" may be extracted despite the
     * state still remaining in a particular state eg. "RUNNING".
     * @default false
     */
    enableVerboseStateCallback?: boolean;
    /**
     * Custom json parser if required
     */
    jsonParser?: {
        parse: (data: any) => any;
    };
    /**
     * Change headers set. Added for compatibility with Trino. Available
     * options: presto, trino.
     * @default "presto"
     */
    engine?: string;
}

export interface Column {
    name: string;
    type:
        // boolean
        | 'boolean'
        // integer
        | 'tinyint'
        | 'smallint'
        | 'integer'
        | 'bigint'
        // floating point
        | 'real'
        | 'double'
        // fixed precision
        | 'decimal'
        // string
        | 'varchar'
        | 'char'
        | 'varbinary'
        | 'json'
        // date and time
        | 'date'
        | 'time'
        | 'time with time zone'
        | 'timestamp'
        | 'timestamp with time zone'
        | 'interval year to month'
        | 'interval day to second'
        // structural
        | 'array'
        | 'map'
        | 'row'
        // network address
        | 'ipaddress'
        // uuid
        | 'uuid'
        | 'ipprefix'
        // hyperloglog
        | 'hyperloglog'
        | 'p4hyperloglog'
        // KHyperLogLog
        | 'khyperloglog'
        // Quantile Digest
        | 'qdigest'
        // T-Digest
        | 'tdigest'
        | string;
}

export interface RuntimeStats {
    processedBytes: number;
    processedRows: number;
    wallTimeMillis: number;
    cpuTimeMillis: number;
    userTimeMillis: number;
    state: 'QUEUED' | 'PLANNING' | 'STARTING' | 'RUNNING' | 'FINISHED' | 'CANCELED' | 'FAILED';
    scheduled: boolean;
    nodes: number;
    totalSplits: number;
    queuedSplits: number;
    runningSplits: number;
    completedSplits: number;
}

export interface PrestoError extends Error {
    // This will be set in the case of recasting an error
    error?: Error;
    code?: number;
}

export interface QueryOptions {
    query: string;
    catalog?: string;
    schema?: string;
    source?: string;
    timezone?: string;
    user?: string;
    prepares?: string[];
    /**
     * Fetch query info (execution statistics) for success callback, or not
     * @default false
     */
    info?: boolean;
    /**
     * Aditional headers to be included in the request
     */
    headers?: Record<string, string>;
    /**
     * Client stops fetch of query results if this callback returns `true`
     */
    cancel?: () => boolean;
    /**
     * Called when query stats changed
     */
    state?: (
        error: PrestoError | null,
        query_id: string,
        stats: RuntimeStats
    ) => void;
    /**
     * Called once when columns and its types are found in results
     */
    columns?: (error: PrestoError | null, data: Column[]) => void;
    /**
     * Called per fetch of query results (may be called 2 or more)
     */
    data?: (error: PrestoError | null, data: any[][], columns: Column[], stats: RuntimeStats) => void;
    /**
     * Called once when all results are fetched
     */
    success?: (error: PrestoError | null, stats: RuntimeStats, info: any) => void;
    /**
     * Callback for errors of query execution
     */
    error?: (error: PrestoError) => void;
    /**
     * Callback for query completion (both of success and fail). One of
     * `callback` or `success` must be specified.
     */
    callback?: (error: PrestoError | null, stats: RuntimeStats) => void;
}

export class Client {
    constructor(options: ClientOptions);
    /**
     * This is an API to execute queries. (Using "/v1/statement" HTTP RPC.).
     * Execute query on Presto cluster, and fetch results.
     */
    execute(options: QueryOptions): void;
    /**
     * Get query current status.
     */
    query(query_id: string, callback: (error: PrestoError | null, data: any) => void): void;
    /**
     * Stop query immediately.
     */
    kill(query_id: string, callback: (error: PrestoError | null) => void): void;
    nodes(
        callback: (error: PrestoError | null, data: any[]) => void
    ): void;
    /**
     * Get node list of presto cluster and return it.
     */
    nodes(
        opts: null | Record<string, never>,
        callback: (error: PrestoError | null, data: any[]) => void
    ): void;
}
