// Type definitions for MongoDB 3.5
// Project: https://github.com/mongodb/node-mongodb-native
//          https://github.com/mongodb/node-mongodb-native/tree/3.1
// Definitions by: Federico Caselli <https://github.com/CaselIT>
//                 Alan Marcell <https://github.com/alanmarcell>
//                 Gaurav Lahoti <https://github.com/dante-101>
//                 Mariano Cortesi <https://github.com/mcortesi>
//                 Enrico Picci <https://github.com/EnricoPicci>
//                 Alexander Christie <https://github.com/AJCStriker>
//                 Julien Chaumond <https://github.com/julien-c>
//                 Dan Aprahamian <https://github.com/daprahamian>
//                 Denys Bushulyak <https://github.com/denys-bushulyak>
//                 Bastien Arata <https://github.com/BastienAr>
//                 Wan Bachtiar <https://github.com/sindbach>
//                 Geraldine Lemeur <https://github.com/geraldinelemeur>
//                 Dominik Heigl <https://github.com/various89>
//                 Angela-1 <https://github.com/angela-1>
//                 Hector Ribes <https://github.com/hector7>
//                 Florian Richter <https://github.com/floric>
//                 Erik Christensen <https://github.com/erikc5000>
//                 Nick Zahn <https://github.com/Manc>
//                 Jarom Loveridge <https://github.com/jloveridge>
//                 Luis Pais <https://github.com/ranguna>
//                 Hossein Saniei <https://github.com/HosseinAgha>
//                 Alberto Silva <https://github.com/albertossilva>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Richard Bateman <https://github.com/taxilian>
//                 Igor Strebezhev <https://github.com/xamgore>
//                 Valentin Agachi <https://github.com/avaly>
//                 HitkoDev <https://github.com/HitkoDev>
//                 TJT <https://github.com/Celend>
//                 Julien TASSIN <https://github.com/jtassin>
//                 Anna Henningsen <https://github.com/addaleax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

// Documentation: https://mongodb.github.io/node-mongodb-native/3.1/api/

/// <reference types="node" />
/// <reference lib="esnext.asynciterable" />

import { Binary, Decimal128, Double, Int32, Long, ObjectId, Timestamp } from 'bson';
import { EventEmitter } from 'events';
import { Readable, Writable } from 'stream';
import { checkServerIdentity } from 'tls';

// We can use TypeScript Omit once minimum required TypeScript Version is above 3.5
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type FlattenIfArray<T> = T extends ReadonlyArray<infer R> ? R : T;

export function connect(uri: string, options?: MongoClientOptions): Promise<MongoClient>;
export function connect(uri: string, callback: MongoCallback<MongoClient>): void;
export function connect(uri: string, options: MongoClientOptions, callback: MongoCallback<MongoClient>): void;

export { Binary, DBRef, Decimal128, Double, Int32, Long, MaxKey, MinKey, ObjectID, ObjectId, Timestamp } from 'bson';

type NumericTypes = number | Decimal128 | Double | Int32 | Long;

// Class documentation : http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html
export class MongoClient extends EventEmitter {
    constructor(uri: string, options?: MongoClientOptions);
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#.connect */
    static connect(uri: string, callback: MongoCallback<MongoClient>): void;
    static connect(uri: string, options?: MongoClientOptions): Promise<MongoClient>;
    static connect(uri: string, options: MongoClientOptions, callback: MongoCallback<MongoClient>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#connect */
    connect(): Promise<MongoClient>;
    connect(callback: MongoCallback<MongoClient>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#close */
    close(callback: MongoCallback<void>): void;
    close(force?: boolean): Promise<void>;
    close(force: boolean, callback: MongoCallback<void>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#db */
    db(dbName?: string, options?: MongoClientCommonOption): Db;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#isConnected */
    isConnected(options?: MongoClientCommonOption): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#logout */
    logout(callback: MongoCallback<any>): void;
    logout(options?: { dbName?: string }): Promise<any>;
    logout(options: { dbName?: string }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#startSession */
    startSession(options?: SessionOptions): ClientSession;
    /** http://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html#watch */
    watch<TSchema extends object = { _id: ObjectId }>(
        pipeline?: object[],
        options?: ChangeStreamOptions & { session?: ClientSession },
    ): ChangeStream<TSchema>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#withSession */
    withSession(operation: (session: ClientSession) => Promise<any>): Promise<void>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#withSession */
    withSession(options: SessionOptions, operation: (session: ClientSession) => Promise<any>): Promise<void>;

    readPreference: ReadPreference;
    writeConcern: WriteConcern;
}

/**
 * http://mongodb.github.io/node-mongodb-native/3.1/api/ClientSession.html
 */
export interface ClientSession extends EventEmitter {
    /** The server id associated with this session */
    id: any;
    /**
     * Aborts the currently active transaction in this session.
     * @param cb Optional callback for completion of this operation
     */
    abortTransaction(cb?: MongoCallback<void>): Promise<void>;
    /**
     * Advances the operationTime for a ClientSession.
     */
    advanceOperationTime(operamtionTime: Timestamp): void;
    /**
     * Commits the currently active transaction in this session.
     * @param cb Optional callback for completion of this operation
     */
    commitTransaction(cb?: MongoCallback<void>): Promise<void>;

    /**
     * Ends this session on the server
     * @param cb Optional callback for completion of this operation
     */
    endSession(cb?: MongoCallback<void>): void;
    /**
     * Ends this session on the server
     * @param options Optional settings. Currently reserved for future use
     * @param cb Optional callback for completion of this operation
     */
    endSession(options: any, cb?: MongoCallback<void>): void;

    /**
     * Used to determine if this session equals another
     *
     * @param session A class representing a client session on the server
     * @returns Whether the sessions are equal
     */
    equals(session: ClientSession): boolean;

    /** Increment the transaction number on the internal ServerSession */
    incrementTransactionNumber(): void;

    /**
     * @returns Whether this session is currently in a transaction or not
     */
    inTransaction(): boolean;

    /**
     * Starts a new transaction with the given options.
     */
    startTransaction(options?: TransactionOptions): void;

    /**
     * Runs a provided lambda within a transaction, retrying either the commit operation
     * or entire transaction as needed (and when the error permits) to better ensure that
     * the transaction can complete successfully.
     *
     * IMPORTANT: This method requires the user to return a Promise, all lambdas that do not
     * return a Promise will result in undefined behavior.
     *
     * @param fn Function to execute with the new session.
     * @param options Optional settings for the transaction
     */
    withTransaction<T>(fn: WithTransactionCallback<T>, options?: TransactionOptions): Promise<void>;
}

// http://mongodb.github.io/node-mongodb-native/3.1/api/global.html#ReadConcern
type ReadConcernLevel = 'local' | 'available' | 'majority' | 'linearizable' | 'snapshot';

/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * http://mongodb.github.io/node-mongodb-native/3.1/api/global.html#ReadConcern
 */
export interface ReadConcern {
    level: ReadConcernLevel;
}

/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 * http://mongodb.github.io/node-mongodb-native/3.1/api/global.html#WriteConcern
 */
interface WriteConcern {
    /**
     * requests acknowledgement that the write operation has
     * propagated to a specified number of mongod hosts
     * @default 1
     */
    w?: number | 'majority' | string;
    /**
     * requests acknowledgement from MongoDB that the write operation has
     * been written to the journal
     * @default false
     */
    j?: boolean;
    /**
     * a time limit, in milliseconds, for the write concern
     */
    wtimeout?: number;
}

/**
 * Options to pass when creating a Client Session
 * http://mongodb.github.io/node-mongodb-native/3.1/api/global.html#SessionOptions
 */
export interface SessionOptions {
    /**
     * Whether causal consistency should be enabled on this session
     * @default true
     */
    causalConsistency?: boolean;
    /**
     * The default TransactionOptions to use for transactions started on this session.
     */
    defaultTransactionOptions?: TransactionOptions;
}

/**
 * Configuration options for a transaction.
 * http://mongodb.github.io/node-mongodb-native/3.1/api/global.html#TransactionOptions
 */
export interface TransactionOptions {
    readConcern?: ReadConcern;
    writeConcern?: WriteConcern;
    readPreference?: ReadPreferenceOrMode;
}

export interface MongoClientCommonOption {
    /** Do not make the db an event listener to the original connection. */
    noListener?: boolean;
    /** Control if you want to return a cached instance or have a new one created */
    returnNonCachedInstance?: boolean;
}

export interface MongoCallback<T> {
    (error: MongoError, result: T): void;
}

export type WithTransactionCallback<T> = (session: ClientSession) => Promise<T>;

/**
 * Creates a new MongoError
 * see {@link http://mongodb.github.io/node-mongodb-native/3.5/api/MongoError.html}
 */
export class MongoError extends Error {
    constructor(message: string | Error | object);
    /**
     * @deprecated
     */
    static create(options: string | Error | object): MongoError;
    /**
     * Checks the error to see if it has an error label
     */
    hasErrorLabel(label: string): boolean;
    code?: number;
    /**
     * While not documented, the 'errmsg' prop is AFAIK the only way to find out
     * which unique index caused a duplicate key error. When you have multiple
     * unique indexes on a collection, knowing which index caused a duplicate
     * key error enables you to send better (more precise) error messages to the
     * client/user (eg. "Email address must be unique" instead of "Both email
     * address and username must be unique") - which caters for a better (app)
     * user experience.
     *
     * Details: https://github.com/Automattic/mongoose/issues/2129 (issue for
     * mongoose, but the same applies for the native mongodb driver)
     *
     * Note that in mongoose (the link above) the prop in question is called
     * 'message' while in mongodb it is called 'errmsg'. This can be seen in
     * multiple places in the source code, for example here:
     * https://github.com/mongodb/node-mongodb-native/blob/a12aa15ac3eaae3ad5c4166ea1423aec4560f155/test/functional/find_tests.js#L1111
     */
    errmsg?: string;
    name: string;
}

/**
 * An error indicating an issue with the network, including TCP errors and timeouts
 * see {@link https://mongodb.github.io/node-mongodb-native/3.5/api/MongoNetworkError.html}
 */
export class MongoNetworkError extends MongoError {
    constructor(message: string);
    errorLabels: string[];
}

/**
 * An error used when attempting to parse a value (like a connection string)
 * see {@link https://mongodb.github.io/node-mongodb-native/3.5/api/MongoParseError.html}
 */
export class MongoParseError extends MongoError {
    constructor(message: string);
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#.connect */
export interface MongoClientOptions
    extends DbCreateOptions,
        ServerOptions,
        MongosOptions,
        ReplSetOptions,
        SocketOptions,
        SSLOptions,
        TLSOptions,
        HighAvailabilityOptions,
        WriteConcern,
        UnifiedTopologyOptions {
    /**
     * The logging level (error/warn/info/debug)
     */
    loggerLevel?: string;

    /**
     * Custom logger object
     */
    logger?: object | log;

    /**
     * Validate MongoClient passed in options for correctness.
     * Default: false
     */
    validateOptions?: object | boolean;

    /**
     * The name of the application that created this MongoClient instance.
     */
    appname?: string;

    /**
     * Authentication credentials
     */
    auth?: {
        /**
         * The username for auth
         */
        user: string;
        /**
         * The password for auth
         */
        password: string;
    };

    /**
     * Determines whether or not to use the new url parser. Enables the new, spec-compliant
     * url parser shipped in the core driver. This url parser fixes a number of problems with
     * the original parser, and aims to outright replace that parser in the near future.
     */
    useNewUrlParser?: boolean;

    /**
     * number of retries for a tailable cursor
     * @default 5
     */
    numberOfRetries?: number;

    /**
     * Mechanism for authentication: DEFAULT, GSSAPI, PLAIN, MONGODB-X509, 'MONGODB-CR', SCRAM-SHA-1 or SCRAM-SHA-256
     */
    authMechanism?:
        | 'DEFAULT'
        | 'GSSAPI'
        | 'PLAIN'
        | 'MONGODB-X509'
        | 'MONGODB-CR'
        | 'SCRAM-SHA-1'
        | 'SCRAM-SHA-256'
        | string;

    /** Type of compression to use */
    compression?: {
        /** The selected compressors in preference order */
        compressors?: Array<'snappy' | 'zlib'>;
    };
}

export interface SSLOptions {
    /**
     * Passed directly through to tls.createSecureContext. See https://nodejs.org/dist/latest-v9.x/docs/api/tls.html#tls_tls_createsecurecontext_options for more info.
     */
    ciphers?: string;
    /**
     * Passed directly through to tls.createSecureContext. See https://nodejs.org/dist/latest-v9.x/docs/api/tls.html#tls_tls_createsecurecontext_options for more info.
     */
    ecdhCurve?: string;
    /**
     * Default:5; Number of connections for each server instance; set to 5 as default for legacy reasons.
     */
    poolSize?: number;
    /**
     * If present, the connection pool will be initialized with minSize connections, and will never dip below minSize connections
     */
    minSize?: number;
    /**
     * Use ssl connection (needs to have a mongod server with ssl support)
     */
    ssl?: boolean;
    /**
     * Default: true; Validate mongod server certificate against ca (mongod server >=2.4 with ssl support required)
     */
    sslValidate?: boolean;
    /**
     * Default: true; Server identity checking during SSL
     */
    checkServerIdentity?: boolean | typeof checkServerIdentity;
    /**
     * Array of valid certificates either as Buffers or Strings
     */
    sslCA?: ReadonlyArray<Buffer | string>;
    /**
     * SSL Certificate revocation list binary buffer
     */
    sslCRL?: ReadonlyArray<Buffer | string>;
    /**
     * SSL Certificate binary buffer
     */
    sslCert?: Buffer | string;
    /**
     * SSL Key file binary buffer
     */
    sslKey?: Buffer | string;
    /**
     * SSL Certificate pass phrase
     */
    sslPass?: Buffer | string;
    /**
     * String containing the server name requested via TLS SNI.
     */
    servername?: string;
}

export interface TLSOptions {
    /**
     * Enable TLS connections
     * @default false
     */
    tls?: boolean;
    /**
     * Relax TLS constraints, disabling validation
     * @default false
     */
    tlsInsecure?: boolean;
    /**
     * path to file with either a single or bundle of certificate authorities
     * to be considered trusted when making a TLS connection
     */
    tlsCAFile?: string;
    /**
     * path to the client certificate file or the client private key file;
     * in the case that they both are needed, the files should be concatenated
     */
    tlsCertificateKeyFile?: string;
    /**
     * The password to decrypt the client private key to be used for TLS connections
     */
    tlsCertificateKeyFilePassword?: string;
    /**
     * Specifies whether or not the driver should error when the server’s TLS certificate is invalid
     */
    tlsAllowInvalidCertificates?: boolean;
    /**
     * Specifies whether or not the driver should error when there is a mismatch between the server’s hostname
     * and the hostname specified by the TLS certificate
     */
    tlsAllowInvalidHostnames?: boolean;
}

export interface HighAvailabilityOptions {
    /**
     * Default: true; Turn on high availability monitoring.
     */
    ha?: boolean;
    /**
     * Default: 10000; The High availability period for replicaset inquiry
     */
    haInterval?: number;
    /**
     * Default: false;
     */
    domainsEnabled?: boolean;

    /** The ReadPreference mode as listed here: http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html */
    readPreference?: ReadPreferenceOrMode;
    /** An object representing read preference tags, see: http://mongodb.github.io/node-mongodb-native/3.1/api/ReadPreference.html */
    readPreferenceTags?: string[];
}

export type ReadPreferenceMode = 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest';
export type ReadPreferenceOrMode = ReadPreference | ReadPreferenceMode;
export type ReadPreferenceOptions = {
    hedge?: { enabled?: boolean };
    /**
     * Max Secondary Read Staleness in Seconds
     */
    maxStalenessSeconds?: number;
};

// See http://mongodb.github.io/node-mongodb-native/3.1/api/ReadPreference.html
export class ReadPreference {
    constructor(mode: ReadPreferenceMode, tags: object, options?: ReadPreferenceOptions);
    mode: ReadPreferenceMode;
    tags: any;
    static PRIMARY: 'primary';
    static PRIMARY_PREFERRED: 'primaryPreferred';
    static SECONDARY: 'secondary';
    static SECONDARY_PREFERRED: 'secondaryPreferred';
    static NEAREST: 'nearest';
    isValid(mode: string): boolean;
    static isValid(mode: string): boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html */
export interface DbCreateOptions extends CommonOptions {
    /**
     * If the database authentication is dependent on another databaseName.
     */
    authSource?: string;
    /**
     * Default: false; Force server to create _id fields instead of client.
     */
    forceServerObjectId?: boolean;
    /**
     * Default: false; Use c++ bson parser.
     */
    native_parser?: boolean;
    /**
     * Serialize functions on any object.
     */
    serializeFunctions?: boolean;
    /**
     * Specify if the BSON serializer should ignore undefined fields.
     */
    ignoreUndefined?: boolean;
    /**
     * Return document results as raw BSON buffers.
     */
    raw?: boolean;
    /**
     * Default: true; Promotes Long values to number if they fit inside the 53 bits resolution.
     */
    promoteLongs?: boolean;
    /**
     * Default: false; Promotes Binary BSON values to native Node Buffers
     */
    promoteBuffers?: boolean;
    /**
     * the prefered read preference. use 'ReadPreference' class.
     */
    readPreference?: ReadPreferenceOrMode;
    /**
     * Default: true; Promotes BSON values to native types where possible, set to false to only receive wrapper types.
     */
    promoteValues?: boolean;
    /**
     * Custom primary key factory to generate _id values (see Custom primary keys).
     */
    pkFactory?: object;
    /**
     * ES6 compatible promise constructor
     */
    promiseLibrary?: PromiseConstructor;
    /**
     * https://docs.mongodb.com/manual/reference/read-concern/#read-concern
     */
    readConcern?: ReadConcern | string;
    /**
     * Sets a cap on how many operations the driver will buffer up before giving up on getting a
     * working connection, default is -1 which is unlimited.
     */
    bufferMaxEntries?: number;
}

export interface UnifiedTopologyOptions {
    /**
     * Enables the new unified topology layer
     */
    useUnifiedTopology?: boolean;

    /**
     * **Only applies to the unified topology**
     * The size of the latency window for selecting among multiple suitable servers
     * @default 15
     */
    localThresholdMS?: number;

    /**
     * With `useUnifiedTopology`, the MongoDB driver will try to find a server to send any given operation to
     * and keep retrying for `serverSelectionTimeoutMS` milliseconds.
     * Default: 30000
     */
    serverSelectionTimeoutMS?: number;

    /**
     * **Only applies to the unified topology**
     * The frequency with which topology updates are scheduled
     * @default 10000
     */
    heartbeatFrequencyMS?: number;

    /**
     *  **Only applies to the unified topology**
     * The maximum number of connections that may be associated with a pool at a given time.
     * This includes in use and available connections
     * @default 10
     */
    maxPoolSize?: number;

    /**
     * **Only applies to the unified topology**
     * The minimum number of connections that MUST exist at any moment in a single connection pool.
     * @default 0
     */
    minPoolSize?: number;

    /**
     * **Only applies to the unified topology**
     * The maximum amount of time a connection should remain idle in the connection pool before being marked idle.
     * @default Infinity
     */
    maxIdleTimeMS?: number;

    /**
     * **Only applies to the unified topology**
     * The maximum amount of time operation execution should wait for a connection to become available.
     * The default is 0 which means there is no limit.
     * @default 0
     */
    waitQueueTimeoutMS?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.6/api/Server.html */
export interface SocketOptions {
    /**
     * Reconnect on error.
     * @default true
     */
    autoReconnect?: boolean;
    /**
     * TCP Socket NoDelay option.
     * @default true
     */
    noDelay?: boolean;
    /**
     * TCP KeepAlive enabled on the socket.
     * @default true
     */
    keepAlive?: boolean;
    /**
     * TCP KeepAlive initial delay before sending first keep-alive packet when idle.
     * @default 30000
     */
    keepAliveInitialDelay?: number;
    /**
     * TCP Connection timeout setting.
     * @default 10000
     */
    connectTimeoutMS?: number;
    /**
     * Version of IP stack. Can be 4, 6 or null.
     * @default null
     *
     * If null, will attempt to connect with IPv6, and will fall back to IPv4 on failure
     * refer to http://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
     */
    family?: 4 | 6 | null;
    /**
     * TCP Socket timeout setting.
     * @default 360000
     */
    socketTimeoutMS?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Server.html */
export interface ServerOptions extends SSLOptions {
    /**
     * If you're connected to a single server or mongos proxy (as opposed to a replica set),
     * the MongoDB driver will try to reconnect every reconnectInterval milliseconds for reconnectTries
     * times, and give up afterward. When the driver gives up, the mongoose connection emits a
     * reconnectFailed event.
     * @default 30
     */
    reconnectTries?: number;
    /**
     * Will wait # milliseconds between retries
     * @default 1000
     */
    reconnectInterval?: number;
    /**
     * @default true
     */
    monitoring?: boolean;

    /**
     * Enable command monitoring for this client
     * @default false
     */
    monitorCommands?: boolean;

    /**
     * Socket Options
     */
    socketOptions?: SocketOptions;

    /**
     * The High availability period for replicaset inquiry
     * @default 10000
     */
    haInterval?: number;
    /**
     * @default false
     */
    domainsEnabled?: boolean;

    /**
     * Specify a file sync write concern
     * @default false
     */
    fsync?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Mongos.html */
export interface MongosOptions extends SSLOptions, HighAvailabilityOptions {
    /**
     * Default: 15; Cutoff latency point in MS for MongoS proxy selection
     */
    acceptableLatencyMS?: number;

    /**
     * Socket Options
     */
    socketOptions?: SocketOptions;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/ReplSet.html */
export interface ReplSetOptions extends SSLOptions, HighAvailabilityOptions {
    /**
     * The max staleness to secondary reads (values under 10 seconds cannot be guaranteed);
     */
    maxStalenessSeconds?: number;
    /**
     * The name of the replicaset to connect to.
     */
    replicaSet?: string;
    /**
     * Default: 15 ; Range of servers to pick when using NEAREST (lowest ping ms + the latency fence, ex: range of 1 to (1 + 15) ms)
     */
    secondaryAcceptableLatencyMS?: number;
    connectWithNoPrimary?: boolean;
    socketOptions?: SocketOptions;
}

export type ProfilingLevel = 'off' | 'slow_only' | 'all';

// Class documentation : http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html
export class Db extends EventEmitter {
    constructor(databaseName: string, serverConfig: Server | ReplSet | Mongos, options?: DbCreateOptions);

    serverConfig: Server | ReplSet | Mongos;
    bufferMaxEntries: number;
    databaseName: string;
    options: any;
    native_parser: boolean;
    slaveOk: boolean;
    writeConcern: WriteConcern;

    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#addUser */
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: DbAddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: DbAddUserOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#admin */
    admin(): Admin;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#collection */
    collection<TSchema = DefaultSchema>(
        name: string,
        callback?: MongoCallback<Collection<TSchema>>,
    ): Collection<TSchema>;
    collection<TSchema = DefaultSchema>(
        name: string,
        options: DbCollectionOptions,
        callback?: MongoCallback<Collection<TSchema>>,
    ): Collection<TSchema>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#collections */
    collections(): Promise<Array<Collection<Default>>>;
    collections(callback: MongoCallback<Array<Collection<Default>>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#command */
    command(command: object, callback: MongoCallback<any>): void;
    command(command: object, options?: { readPreference?: ReadPreferenceOrMode; session?: ClientSession }): Promise<any>;
    command(
        command: object,
        options: { readPreference: ReadPreferenceOrMode; session?: ClientSession },
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#createCollection */
    createCollection<TSchema = DefaultSchema>(name: string, callback: MongoCallback<Collection<TSchema>>): void;
    createCollection<TSchema = DefaultSchema>(
        name: string,
        options?: CollectionCreateOptions,
    ): Promise<Collection<TSchema>>;
    createCollection<TSchema = DefaultSchema>(
        name: string,
        options: CollectionCreateOptions,
        callback: MongoCallback<Collection<TSchema>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#createIndex */
    createIndex(name: string, fieldOrSpec: string | object, callback: MongoCallback<any>): void;
    createIndex(name: string, fieldOrSpec: string | object, options?: IndexOptions): Promise<any>;
    createIndex(name: string, fieldOrSpec: string | object, options: IndexOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#dropCollection */
    dropCollection(name: string): Promise<boolean>;
    dropCollection(name: string, callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#dropDatabase */
    dropDatabase(): Promise<any>;
    dropDatabase(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#executeDbAdminCommand */
    executeDbAdminCommand(command: object, callback: MongoCallback<any>): void;
    executeDbAdminCommand(
        command: object,
        options?: { readPreference?: ReadPreferenceOrMode; session?: ClientSession },
    ): Promise<any>;
    executeDbAdminCommand(
        command: object,
        options: { readPreference?: ReadPreferenceOrMode; session?: ClientSession },
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#indexInformation */
    indexInformation(name: string, callback: MongoCallback<any>): void;
    indexInformation(name: string, options?: { full?: boolean; readPreference?: ReadPreferenceOrMode }): Promise<any>;
    indexInformation(
        name: string,
        options: { full?: boolean; readPreference?: ReadPreferenceOrMode },
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#listCollections */
    listCollections(
        filter?: object,
        options?: {
            nameOnly?: boolean;
            batchSize?: number;
            readPreference?: ReadPreferenceOrMode;
            session?: ClientSession;
        },
    ): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#profilingInfo */
    /** @deprecated Query the system.profile collection directly. */
    profilingInfo(callback: MongoCallback<any>): void;
    profilingInfo(options?: { session?: ClientSession }): Promise<void>;
    profilingInfo(options: { session?: ClientSession }, callback: MongoCallback<void>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#profilingLevel */
    profilingLevel(callback: MongoCallback<ProfilingLevel>): void;
    profilingLevel(options?: { session?: ClientSession }): Promise<ProfilingLevel>;
    profilingLevel(options: { session?: ClientSession }, callback: MongoCallback<ProfilingLevel>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#removeUser */
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: CommonOptions): Promise<any>;
    removeUser(username: string, options: CommonOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#renameCollection */
    renameCollection<TSchema = DefaultSchema>(
        fromCollection: string,
        toCollection: string,
        callback: MongoCallback<Collection<TSchema>>,
    ): void;
    renameCollection<TSchema = DefaultSchema>(
        fromCollection: string,
        toCollection: string,
        options?: { dropTarget?: boolean },
    ): Promise<Collection<TSchema>>;
    renameCollection<TSchema = DefaultSchema>(
        fromCollection: string,
        toCollection: string,
        options: { dropTarget?: boolean },
        callback: MongoCallback<Collection<TSchema>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#setProfilingLevel */
    setProfilingLevel(level: ProfilingLevel, callback: MongoCallback<ProfilingLevel>): void;
    setProfilingLevel(level: ProfilingLevel, options?: { session?: ClientSession }): Promise<ProfilingLevel>;
    setProfilingLevel(
        level: ProfilingLevel,
        options: { session?: ClientSession },
        callback: MongoCallback<ProfilingLevel>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#stats */
    stats(callback: MongoCallback<any>): void;
    stats(options?: { scale?: number }): Promise<any>;
    stats(options: { scale?: number }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.3/api/Db.html#watch */
    watch<TSchema extends object = { _id: ObjectId }>(
        pipeline?: object[],
        options?: ChangeStreamOptions & { session?: ClientSession },
    ): ChangeStream<TSchema>;
}

export interface CommonOptions extends WriteConcern {
    session?: ClientSession;
}

/**
 * @deprecated
 * @see http://mongodb.github.io/node-mongodb-native/3.1/api/Server.html
 */
export class Server extends EventEmitter {
    constructor(host: string, port: number, options?: ServerOptions);

    connections(): any[];
}

/**
 * @deprecated
 * @see http://mongodb.github.io/node-mongodb-native/3.1/api/ReplSet.html
 */
export class ReplSet extends EventEmitter {
    constructor(servers: Server[], options?: ReplSetOptions);

    connections(): any[];
}

/**
 * @deprecated
 * @see http://mongodb.github.io/node-mongodb-native/3.1/api/Mongos.html
 */
export class Mongos extends EventEmitter {
    constructor(servers: Server[], options?: MongosOptions);

    connections(): any[];
}

/**
 * @deprecated
 * @see http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#addUser
 */
export interface DbAddUserOptions extends CommonOptions {
    customData?: object;
    roles?: object[];
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#createCollection */
export interface CollectionCreateOptions extends CommonOptions {
    raw?: boolean;
    pkFactory?: object;
    readPreference?: ReadPreferenceOrMode;
    serializeFunctions?: boolean;
    strict?: boolean;
    capped?: boolean;
    autoIndexId?: boolean;
    size?: number;
    max?: number;
    flags?: number;
    storageEngine?: object;
    validator?: object;
    validationLevel?: 'off' | 'strict' | 'moderate';
    validationAction?: 'error' | 'warn';
    indexOptionDefaults?: object;
    viewOn?: string;
    pipeline?: any[];
    collation?: CollationDocument;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#collection */
export interface DbCollectionOptions extends CommonOptions {
    raw?: boolean;
    pkFactory?: object;
    readPreference?: ReadPreferenceOrMode;
    serializeFunctions?: boolean;
    strict?: boolean;
    readConcern?: ReadConcern;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#createIndex */
export interface IndexOptions extends CommonOptions {
    /**
     * Creates an unique index.
     */
    unique?: boolean;
    /**
     * Creates a sparse index.
     */
    sparse?: boolean;
    /**
     * Creates the index in the background, yielding whenever possible.
     */
    background?: boolean;
    /**
     * A unique index cannot be created on a key that has pre-existing duplicate values.
     *
     * If you would like to create the index anyway, keeping the first document the database indexes and
     * deleting all subsequent documents that have duplicate value
     */
    dropDups?: boolean;
    /**
     * For geo spatial indexes set the lower bound for the co-ordinates.
     */
    min?: number;
    /**
     * For geo spatial indexes set the high bound for the co-ordinates.
     */
    max?: number;
    /**
     * Specify the format version of the indexes.
     */
    v?: number;
    /**
     * Allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)
     */
    expireAfterSeconds?: number;
    /**
     * Override the auto generated index name (useful if the resulting name is larger than 128 bytes)
     */
    name?: string;
    /**
     * Creates a partial index based on the given filter object (MongoDB 3.2 or higher)
     */
    partialFilterExpression?: any;
    collation?: CollationDocument;
    default_language?: string;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html */
export interface Admin {
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#addUser */
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: AddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: AddUserOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#buildInfo */
    buildInfo(options?: { session?: ClientSession }): Promise<any>;
    buildInfo(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    buildInfo(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#command */
    command(command: object, callback: MongoCallback<any>): void;
    command(command: object, options?: { readPreference?: ReadPreferenceOrMode; maxTimeMS?: number }): Promise<any>;
    command(
        command: object,
        options: { readPreference?: ReadPreferenceOrMode; maxTimeMS?: number },
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#listDatabases */
    listDatabases(options?: { nameOnly?: boolean; session?: ClientSession }): Promise<any>;
    listDatabases(options: { nameOnly?: boolean; session?: ClientSession }, callback: MongoCallback<any>): void;
    listDatabases(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#ping */
    ping(options?: { session?: ClientSession }): Promise<any>;
    ping(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    ping(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#removeUser */
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: FSyncOptions): Promise<any>;
    removeUser(username: string, options: FSyncOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#replSetGetStatus */
    replSetGetStatus(options?: { session?: ClientSession }): Promise<any>;
    replSetGetStatus(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    replSetGetStatus(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#serverInfo */
    serverInfo(): Promise<any>;
    serverInfo(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#serverStatus */
    serverStatus(options?: { session?: ClientSession }): Promise<any>;
    serverStatus(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    serverStatus(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#validateCollection */
    validateCollection(collectionNme: string, callback: MongoCallback<any>): void;
    validateCollection(collectionNme: string, options?: object): Promise<any>;
    validateCollection(collectionNme: string, options: object, callback: MongoCallback<any>): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#addUser */
export interface AddUserOptions extends CommonOptions {
    fsync: boolean;
    customData?: object;
    roles?: object[];
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Admin.html#removeUser */
export interface FSyncOptions extends CommonOptions {
    fsync?: boolean;
}

// TypeScript Omit (Exclude to be specific) does not work for objects with an "any" indexed type
type EnhancedOmit<T, K> = string | number extends keyof T
    ? T // T has indexed type e.g. { _id: string; [k: string]: any; } or it is "any"
    : Omit<T, K>;

type ExtractIdType<TSchema> = TSchema extends { _id: infer U } // user has defined a type for _id
    ? {} extends U
        ? Exclude<U, {}>
        : unknown extends U
        ? ObjectId
        : U
    : ObjectId; // user has not defined _id on schema

// this makes _id optional
export type OptionalId<TSchema extends { _id?: any }> = ObjectId extends TSchema['_id']
    ? // a Schema with ObjectId _id type or "any" or "indexed type" provided
      EnhancedOmit<TSchema, '_id'> & { _id?: ExtractIdType<TSchema> }
    : // a Schema provided but _id type is not ObjectId
      WithId<TSchema>;

// this adds _id as a required property
export type WithId<TSchema> = EnhancedOmit<TSchema, '_id'> & { _id: ExtractIdType<TSchema> };

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html */
export interface Collection<TSchema extends { [key: string]: any } = DefaultSchema> {
    /**
     * Get the collection name.
     */
    collectionName: string;
    /**
     * Get the full collection namespace.
     */
    namespace: string;
    /**
     * The current write concern values.
     */
    writeConcern: WriteConcern;
    /**
     * The current read concern values.
     */
    readConcern: ReadConcern;
    /**
     * Get current index hint for collection.
     */
    hint: any;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#aggregate */
    aggregate<T = TSchema>(callback: MongoCallback<AggregationCursor<T>>): AggregationCursor<T>;
    aggregate<T = TSchema>(pipeline: object[], callback: MongoCallback<AggregationCursor<T>>): AggregationCursor<T>;
    aggregate<T = TSchema>(
        pipeline?: object[],
        options?: CollectionAggregationOptions,
        callback?: MongoCallback<AggregationCursor<T>>,
    ): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#bulkWrite */
    bulkWrite(operations: Array<BulkWriteOperation<TSchema>>, callback: MongoCallback<BulkWriteOpResultObject>): void;
    bulkWrite(
        operations: Array<BulkWriteOperation<TSchema>>,
        options?: CollectionBulkWriteOptions,
    ): Promise<BulkWriteOpResultObject>;
    bulkWrite(
        operations: Array<BulkWriteOperation<TSchema>>,
        options: CollectionBulkWriteOptions,
        callback: MongoCallback<BulkWriteOpResultObject>,
    ): void;
    /**
     * http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#count
     * @deprecated Use countDocuments or estimatedDocumentCount
     */
    count(callback: MongoCallback<number>): void;
    count(query: FilterQuery<TSchema>, callback: MongoCallback<number>): void;
    count(query?: FilterQuery<TSchema>, options?: MongoCountPreferences): Promise<number>;
    count(query: FilterQuery<TSchema>, options: MongoCountPreferences, callback: MongoCallback<number>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#countDocuments */
    countDocuments(callback: MongoCallback<number>): void;
    countDocuments(query: FilterQuery<TSchema>, callback: MongoCallback<number>): void;
    countDocuments(query?: FilterQuery<TSchema>, options?: MongoCountPreferences): Promise<number>;
    countDocuments(query: FilterQuery<TSchema>, options: MongoCountPreferences, callback: MongoCallback<number>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#createIndex */
    createIndex(fieldOrSpec: string | any, callback: MongoCallback<string>): void;
    createIndex(fieldOrSpec: string | any, options?: IndexOptions): Promise<string>;
    createIndex(fieldOrSpec: string | any, options: IndexOptions, callback: MongoCallback<string>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#createIndexes and  http://docs.mongodb.org/manual/reference/command/createIndexes/ */
    createIndexes(indexSpecs: IndexSpecification[], callback: MongoCallback<any>): void;
    createIndexes(indexSpecs: IndexSpecification[], options?: { session?: ClientSession }): Promise<any>;
    createIndexes(
        indexSpecs: IndexSpecification[],
        options: { session?: ClientSession },
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#deleteMany */
    deleteMany(filter: FilterQuery<TSchema>, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteMany(filter: FilterQuery<TSchema>, options?: CommonOptions): Promise<DeleteWriteOpResultObject>;
    deleteMany(
        filter: FilterQuery<TSchema>,
        options: CommonOptions,
        callback: MongoCallback<DeleteWriteOpResultObject>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#deleteOne */
    deleteOne(filter: FilterQuery<TSchema>, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteOne(
        filter: FilterQuery<TSchema>,
        options?: CommonOptions & { bypassDocumentValidation?: boolean },
    ): Promise<DeleteWriteOpResultObject>;
    deleteOne(
        filter: FilterQuery<TSchema>,
        options: CommonOptions & { bypassDocumentValidation?: boolean },
        callback: MongoCallback<DeleteWriteOpResultObject>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#distinct */
    distinct<Key extends keyof WithId<TSchema>>(
        key: Key,
        callback: MongoCallback<Array<FlattenIfArray<WithId<TSchema>[Key]>>>,
    ): void;
    distinct<Key extends keyof WithId<TSchema>>(
        key: Key,
        query: FilterQuery<TSchema>,
        callback: MongoCallback<Array<FlattenIfArray<WithId<TSchema>[Key]>>>,
    ): void;
    distinct<Key extends keyof WithId<TSchema>>(
        key: Key,
        query?: FilterQuery<TSchema>,
        options?: MongoDistinctPreferences,
    ): Promise<Array<FlattenIfArray<WithId<TSchema>[Key]>>>;
    distinct<Key extends keyof WithId<TSchema>>(
        key: Key,
        query: FilterQuery<TSchema>,
        options: MongoDistinctPreferences,
        callback: MongoCallback<Array<FlattenIfArray<WithId<TSchema>[Key]>>>,
    ): void;
    distinct(key: string, callback: MongoCallback<any[]>): void;
    distinct(key: string, query: FilterQuery<TSchema>, callback: MongoCallback<any[]>): void;
    distinct(key: string, query?: FilterQuery<TSchema>, options?: MongoDistinctPreferences): Promise<any[]>;
    distinct(
        key: string,
        query: FilterQuery<TSchema>,
        options: MongoDistinctPreferences,
        callback: MongoCallback<any[]>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#drop */
    drop(options?: { session: ClientSession }): Promise<any>;
    drop(callback: MongoCallback<any>): void;
    drop(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#dropIndex */
    dropIndex(indexName: string, callback: MongoCallback<any>): void;
    dropIndex(indexName: string, options?: CommonOptions & { maxTimeMS?: number }): Promise<any>;
    dropIndex(indexName: string, options: CommonOptions & { maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#dropIndexes */
    dropIndexes(options?: { session?: ClientSession; maxTimeMS?: number }): Promise<any>;
    dropIndexes(callback?: MongoCallback<any>): void;
    dropIndexes(options: { session?: ClientSession; maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#estimatedDocumentCount */
    estimatedDocumentCount(callback: MongoCallback<number>): void;
    estimatedDocumentCount(query: FilterQuery<TSchema>, callback: MongoCallback<number>): void;
    estimatedDocumentCount(query?: FilterQuery<TSchema>, options?: MongoCountPreferences): Promise<number>;
    estimatedDocumentCount(
        query: FilterQuery<TSchema>,
        options: MongoCountPreferences,
        callback: MongoCallback<number>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find */
    find<T = TSchema>(query?: FilterQuery<TSchema>): Cursor<T>;
    find<T = TSchema>(
        query: FilterQuery<TSchema>,
        options?: FindOneOptions<T extends TSchema ? TSchema : T>,
    ): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne */
    findOne<T = TSchema>(
        filter: FilterQuery<TSchema>,
        callback: MongoCallback<T extends TSchema ? TSchema : T | null>,
    ): void;
    findOne<T = TSchema>(
        filter: FilterQuery<TSchema>,
        options?: FindOneOptions<T extends TSchema ? TSchema : T>,
    ): Promise<T | null>;
    findOne<T = TSchema>(
        filter: FilterQuery<TSchema>,
        options: FindOneOptions<T extends TSchema ? TSchema : T>,
        callback: MongoCallback<T extends TSchema ? TSchema : T | null>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndDelete */
    findOneAndDelete(
        filter: FilterQuery<TSchema>,
        callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>,
    ): void;
    findOneAndDelete(
        filter: FilterQuery<TSchema>,
        options?: FindOneAndDeleteOption<TSchema>,
    ): Promise<FindAndModifyWriteOpResultObject<TSchema>>;
    findOneAndDelete(
        filter: FilterQuery<TSchema>,
        options: FindOneAndDeleteOption<TSchema>,
        callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndReplace */
    findOneAndReplace(
        filter: FilterQuery<TSchema>,
        replacement: object,
        callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>,
    ): void;
    findOneAndReplace(
        filter: FilterQuery<TSchema>,
        replacement: object,
        options?: FindOneAndReplaceOption<TSchema>,
    ): Promise<FindAndModifyWriteOpResultObject<TSchema>>;
    findOneAndReplace(
        filter: FilterQuery<TSchema>,
        replacement: object,
        options: FindOneAndReplaceOption<TSchema>,
        callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndUpdate */
    findOneAndUpdate(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | TSchema,
        callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>,
    ): void;
    findOneAndUpdate(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | TSchema,
        options?: FindOneAndUpdateOption<TSchema>,
    ): Promise<FindAndModifyWriteOpResultObject<TSchema>>;
    findOneAndUpdate(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | TSchema,
        options: FindOneAndUpdateOption<TSchema>,
        callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#geoHaystackSearch */
    geoHaystackSearch(x: number, y: number, callback: MongoCallback<any>): void;
    geoHaystackSearch(x: number, y: number, options?: GeoHaystackSearchOptions): Promise<any>;
    geoHaystackSearch(x: number, y: number, options: GeoHaystackSearchOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#group */
    /** @deprecated MongoDB 3.6 or higher no longer supports the group command. We recommend rewriting using the aggregation framework. */
    group(
        keys: object | any[] | Function | Code,
        condition: object,
        initial: object,
        reduce: Function | Code,
        finalize: Function | Code,
        command: boolean,
        callback: MongoCallback<any>,
    ): void;
    /** @deprecated MongoDB 3.6 or higher no longer supports the group command. We recommend rewriting using the aggregation framework. */
    group(
        keys: object | any[] | Function | Code,
        condition: object,
        initial: object,
        reduce: Function | Code,
        finalize: Function | Code,
        command: boolean,
        options?: { readPreference?: ReadPreferenceOrMode; session?: ClientSession },
    ): Promise<any>;
    /** @deprecated MongoDB 3.6 or higher no longer supports the group command. We recommend rewriting using the aggregation framework. */
    group(
        keys: object | any[] | Function | Code,
        condition: object,
        initial: object,
        reduce: Function | Code,
        finalize: Function | Code,
        command: boolean,
        options: {
            readPreference?: ReadPreferenceOrMode;
            session?: ClientSession;
        },
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#indexes */
    indexes(options?: { session: ClientSession }): Promise<any>;
    indexes(callback: MongoCallback<any>): void;
    indexes(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#indexExists */
    indexExists(indexes: string | string[], callback: MongoCallback<boolean>): void;
    indexExists(indexes: string | string[], options?: { session: ClientSession }): Promise<boolean>;
    indexExists(
        indexes: string | string[],
        options: { session: ClientSession },
        callback: MongoCallback<boolean>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#indexInformation */
    indexInformation(callback: MongoCallback<any>): void;
    indexInformation(options?: { full: boolean; session: ClientSession }): Promise<any>;
    indexInformation(options: { full: boolean; session: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#initializeOrderedBulkOp */
    initializeOrderedBulkOp(options?: CommonOptions): OrderedBulkOperation;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#initializeUnorderedBulkOp */
    initializeUnorderedBulkOp(options?: CommonOptions): UnorderedBulkOperation;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertOne */
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: OptionalId<TSchema>, callback: MongoCallback<InsertWriteOpResult<WithId<TSchema>>>): void;
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(
        docs: OptionalId<TSchema>,
        options?: CollectionInsertOneOptions,
    ): Promise<InsertWriteOpResult<WithId<TSchema>>>;
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(
        docs: OptionalId<TSchema>,
        options: CollectionInsertOneOptions,
        callback: MongoCallback<InsertWriteOpResult<WithId<TSchema>>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertMany */
    insertMany(docs: Array<OptionalId<TSchema>>, callback: MongoCallback<InsertWriteOpResult<WithId<TSchema>>>): void;
    insertMany(
        docs: Array<OptionalId<TSchema>>,
        options?: CollectionInsertManyOptions,
    ): Promise<InsertWriteOpResult<WithId<TSchema>>>;
    insertMany(
        docs: Array<OptionalId<TSchema>>,
        options: CollectionInsertManyOptions,
        callback: MongoCallback<InsertWriteOpResult<WithId<TSchema>>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertOne */
    insertOne(docs: OptionalId<TSchema>, callback: MongoCallback<InsertOneWriteOpResult<WithId<TSchema>>>): void;
    insertOne(
        docs: OptionalId<TSchema>,
        options?: CollectionInsertOneOptions,
    ): Promise<InsertOneWriteOpResult<WithId<TSchema>>>;
    insertOne(
        docs: OptionalId<TSchema>,
        options: CollectionInsertOneOptions,
        callback: MongoCallback<InsertOneWriteOpResult<WithId<TSchema>>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#isCapped */
    isCapped(options?: { session: ClientSession }): Promise<any>;
    isCapped(callback: MongoCallback<any>): void;
    isCapped(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#listIndexes */
    listIndexes(options?: {
        batchSize?: number;
        readPreference?: ReadPreferenceOrMode;
        session?: ClientSession;
    }): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#mapReduce */
    mapReduce<TKey, TValue>(
        map: CollectionMapFunction<TSchema> | string,
        reduce: CollectionReduceFunction<TKey, TValue> | string,
        callback: MongoCallback<any>,
    ): void;
    mapReduce<TKey, TValue>(
        map: CollectionMapFunction<TSchema> | string,
        reduce: CollectionReduceFunction<TKey, TValue> | string,
        options?: MapReduceOptions,
    ): Promise<any>;
    mapReduce<TKey, TValue>(
        map: CollectionMapFunction<TSchema> | string,
        reduce: CollectionReduceFunction<TKey, TValue> | string,
        options: MapReduceOptions,
        callback: MongoCallback<any>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#options */
    options(options?: { session: ClientSession }): Promise<any>;
    options(callback: MongoCallback<any>): void;
    options(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#parallelCollectionScan */
    parallelCollectionScan(callback: MongoCallback<Array<Cursor<any>>>): void;
    parallelCollectionScan(options?: ParallelCollectionScanOptions): Promise<Array<Cursor<any>>>;
    parallelCollectionScan(options: ParallelCollectionScanOptions, callback: MongoCallback<Array<Cursor<any>>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#reIndex */
    reIndex(options?: { session: ClientSession }): Promise<any>;
    reIndex(callback: MongoCallback<any>): void;
    reIndex(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#remove */
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: object, options?: CommonOptions & { single?: boolean }): Promise<WriteOpResult>;
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(
        selector: object,
        options?: CommonOptions & { single?: boolean },
        callback?: MongoCallback<WriteOpResult>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#rename */
    rename(newName: string, callback: MongoCallback<Collection<TSchema>>): void;
    rename(newName: string, options?: { dropTarget?: boolean; session?: ClientSession }): Promise<Collection<TSchema>>;
    rename(
        newName: string,
        options: { dropTarget?: boolean; session?: ClientSession },
        callback: MongoCallback<Collection<TSchema>>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#replaceOne */
    replaceOne(filter: FilterQuery<TSchema>, doc: TSchema, callback: MongoCallback<ReplaceWriteOpResult>): void;
    replaceOne(filter: FilterQuery<TSchema>, doc: TSchema, options?: ReplaceOneOptions): Promise<ReplaceWriteOpResult>;
    replaceOne(
        filter: FilterQuery<TSchema>,
        doc: TSchema,
        options: ReplaceOneOptions,
        callback: MongoCallback<ReplaceWriteOpResult>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#save */
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: TSchema, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: TSchema, options?: CommonOptions): Promise<WriteOpResult>;
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: TSchema, options: CommonOptions, callback: MongoCallback<WriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#stats */
    stats(callback: MongoCallback<CollStats>): void;
    stats(options?: { scale: number; session?: ClientSession }): Promise<CollStats>;
    stats(options: { scale: number; session?: ClientSession }, callback: MongoCallback<CollStats>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#update */
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        callback: MongoCallback<WriteOpResult>,
    ): void;
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options?: UpdateOneOptions & { multi?: boolean },
    ): Promise<WriteOpResult>;
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options: UpdateOneOptions & { multi?: boolean },
        callback: MongoCallback<WriteOpResult>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateMany */
    updateMany(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        callback: MongoCallback<UpdateWriteOpResult>,
    ): void;
    updateMany(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options?: UpdateManyOptions,
    ): Promise<UpdateWriteOpResult>;
    updateMany(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options: UpdateManyOptions,
        callback: MongoCallback<UpdateWriteOpResult>,
    ): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateOne */
    updateOne(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        callback: MongoCallback<UpdateWriteOpResult>,
    ): void;
    updateOne(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options?: UpdateOneOptions,
    ): Promise<UpdateWriteOpResult>;
    updateOne(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options: UpdateOneOptions,
        callback: MongoCallback<UpdateWriteOpResult>,
    ): void;
    /**
     * @param pipeline - an array of
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/ aggregation pipeline stages}
     * through which to pass change stream documents. This allows for filtering (using `$match`) and manipulating
     * the change stream documents.
     *
     * @param options - optional settings
     * @see http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#watch
     */
    watch<T = TSchema>(
        pipeline?: object[],
        options?: ChangeStreamOptions & { session?: ClientSession },
    ): ChangeStream<T>;
    /**
     * @param options - optional settings
     * @see http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#watch
     */
    watch<T = TSchema>(options?: ChangeStreamOptions & { session?: ClientSession }): ChangeStream<T>;
}

/** Update Query */
type KeysOfAType<TSchema, Type> = {
    [key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? key : never;
}[keyof TSchema];
type KeysOfOtherType<TSchema, Type> = {
    [key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? never : key;
}[keyof TSchema];

type AcceptedFields<TSchema, FieldType, AssignableType> = {
    readonly [key in KeysOfAType<TSchema, FieldType>]?: AssignableType;
};

/** It avoid uses fields of non Type */
type NotAcceptedFields<TSchema, FieldType> = {
    readonly [key in KeysOfOtherType<TSchema, FieldType>]?: never;
};

type DotAndArrayNotation<AssignableType> = {
    readonly [key: string]: AssignableType;
};

type ReadonlyPartial<TSchema> = {
    readonly [key in keyof TSchema]?: TSchema[key];
};

export type OnlyFieldsOfType<TSchema, FieldType = any, AssignableType = FieldType> = AcceptedFields<
    TSchema,
    FieldType,
    AssignableType
> &
    NotAcceptedFields<TSchema, FieldType> &
    DotAndArrayNotation<AssignableType>;

export type MatchKeysAndValues<TSchema> = ReadonlyPartial<TSchema> & DotAndArrayNotation<any>;

type Unpacked<Type> = Type extends ReadonlyArray<infer Element> ? Element : Type;

type UpdateOptionalId<T> = T extends { _id?: any } ? OptionalId<T> : T;

export type SortValues = -1 | 1;

/** https://docs.mongodb.com/manual/reference/operator/aggregation/meta/#proj._S_meta */
export type MetaSortOperators = 'textScore' | 'indexKey';

export type MetaProjectionOperators =
    | MetaSortOperators
    /** Only for Atlas Search https://docs.atlas.mongodb.com/reference/atlas-search/scoring/ */
    | 'searchScore'
    /** Only for Atlas Search https://docs.atlas.mongodb.com/reference/atlas-search/highlighting/ */
    | 'searchHighlights';

export type SchemaMember<T, V> = { [P in keyof T]?: V } | { [key: string]: V };

export type SortOptionObject<T> = SchemaMember<T, number | { $meta?: MetaSortOperators }>;

export type AddToSetOperators<Type> = {
    $each: Type;
};

export type ArrayOperator<Type> = {
    $each: Type;
    $slice?: number;
    $position?: number;
    $sort?: SortValues | Record<string, SortValues>;
};

export type SetFields<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any> | undefined>]?:
        | UpdateOptionalId<Unpacked<TSchema[key]>>
        | AddToSetOperators<Array<UpdateOptionalId<Unpacked<TSchema[key]>>>>;
} &
    NotAcceptedFields<TSchema, ReadonlyArray<any> | undefined>) & {
    readonly [key: string]: AddToSetOperators<any> | any;
};

export type PushOperator<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?:
        | UpdateOptionalId<Unpacked<TSchema[key]>>
        | ArrayOperator<Array<UpdateOptionalId<Unpacked<TSchema[key]>>>>;
} &
    NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
    readonly [key: string]: ArrayOperator<any> | any;
};

export type PullOperator<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?:
        | Partial<Unpacked<TSchema[key]>>
        | ObjectQuerySelector<Unpacked<TSchema[key]>>;
} &
    NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
    readonly [key: string]: QuerySelector<any> | any;
};

export type PullAllOperator<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: TSchema[key];
} &
    NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
    readonly [key: string]: any[];
};

/** https://docs.mongodb.com/manual/reference/operator/update */
export type UpdateQuery<TSchema> = {
    /** https://docs.mongodb.com/manual/reference/operator/update-field/ */
    $currentDate?: OnlyFieldsOfType<TSchema, Date, true | { $type: 'date' | 'timestamp' }>;
    $inc?: OnlyFieldsOfType<TSchema, NumericTypes | undefined>;
    $min?: MatchKeysAndValues<TSchema>;
    $max?: MatchKeysAndValues<TSchema>;
    $mul?: OnlyFieldsOfType<TSchema, NumericTypes | undefined>;
    $rename?: { [key: string]: string };
    $set?: MatchKeysAndValues<TSchema>;
    $setOnInsert?: MatchKeysAndValues<TSchema>;
    $unset?: OnlyFieldsOfType<TSchema, any, '' | 1 | true>;

    /** https://docs.mongodb.com/manual/reference/operator/update-array/ */
    $addToSet?: SetFields<TSchema>;
    $pop?: OnlyFieldsOfType<TSchema, ReadonlyArray<any>, 1 | -1>;
    $pull?: PullOperator<TSchema>;
    $push?: PushOperator<TSchema>;
    $pullAll?: PullAllOperator<TSchema>;

    /** https://docs.mongodb.com/manual/reference/operator/update-bitwise/ */
    $bit?: {
        [key: string]: { [key in 'and' | 'or' | 'xor']?: number };
    };
};

/** https://docs.mongodb.com/manual/reference/operator/query/type/#available-types */
export enum BSONType {
    Double = 1,
    String,
    Object,
    Array,
    BinData,
    /** @deprecated */
    Undefined,
    ObjectId,
    Boolean,
    Date,
    Null,
    Regex,
    /** @deprecated */
    DBPointer,
    JavaScript,
    /** @deprecated */
    Symbol,
    JavaScriptWithScope,
    Int,
    Timestamp,
    Long,
    Decimal,
    MinKey = -1,
    MaxKey = 127,
}

type BSONTypeAlias =
    | 'number'
    | 'double'
    | 'string'
    | 'object'
    | 'array'
    | 'binData'
    | 'undefined'
    | 'objectId'
    | 'bool'
    | 'date'
    | 'null'
    | 'regex'
    | 'dbPointer'
    | 'javascript'
    | 'symbol'
    | 'javascriptWithScope'
    | 'int'
    | 'timestamp'
    | 'long'
    | 'decimal'
    | 'minKey'
    | 'maxKey';

/** https://docs.mongodb.com/manual/reference/operator/query-bitwise */
type BitwiseQuery =
    | number /** <numeric bitmask> */
    | Binary /** <BinData bitmask> */
    | number[]; /** [ <position1>, <position2>, ... ] */

// we can search using alternative types in mongodb e.g.
// string types can be searched using a regex in mongo
// array types can be searched using their element type
type RegExpForString<T> = T extends string ? RegExp | T : T;
type MongoAltQuery<T> = T extends ReadonlyArray<infer U> ? T | RegExpForString<U> : RegExpForString<T>;

/** https://docs.mongodb.com/manual/reference/operator/query/#query-selectors */
export type QuerySelector<T> = {
    // Comparison
    $eq?: T;
    $gt?: T;
    $gte?: T;
    $in?: T[];
    $lt?: T;
    $lte?: T;
    $ne?: T;
    $nin?: T[];
    // Logical
    $not?: T extends string ? QuerySelector<T> | RegExp : QuerySelector<T>;
    // Element
    /**
     * When `true`, `$exists` matches the documents that contain the field,
     * including documents where the field value is null.
     */
    $exists?: boolean;
    $type?: BSONType | BSONTypeAlias;
    // Evaluation
    $expr?: any;
    $jsonSchema?: any;
    $mod?: T extends number ? [number, number] : never;
    $regex?: T extends string ? RegExp | string : never;
    $options?: T extends string ? string : never;
    // Geospatial
    // TODO: define better types for geo queries
    $geoIntersects?: { $geometry: object };
    $geoWithin?: object;
    $near?: object;
    $nearSphere?: object;
    $maxDistance?: number;
    // Array
    // TODO: define better types for $all and $elemMatch
    $all?: T extends ReadonlyArray<infer U> ? any[] : never;
    $elemMatch?: T extends ReadonlyArray<infer U> ? object : never;
    $size?: T extends ReadonlyArray<infer U> ? number : never;
    // Bitwise
    $bitsAllClear?: BitwiseQuery;
    $bitsAllSet?: BitwiseQuery;
    $bitsAnyClear?: BitwiseQuery;
    $bitsAnySet?: BitwiseQuery;
};

export type RootQuerySelector<T> = {
    /** https://docs.mongodb.com/manual/reference/operator/query/and/#op._S_and */
    $and?: Array<FilterQuery<T>>;
    /** https://docs.mongodb.com/manual/reference/operator/query/nor/#op._S_nor */
    $nor?: Array<FilterQuery<T>>;
    /** https://docs.mongodb.com/manual/reference/operator/query/or/#op._S_or */
    $or?: Array<FilterQuery<T>>;
    /** https://docs.mongodb.com/manual/reference/operator/query/text */
    $text?: {
        $search: string;
        $language?: string;
        $caseSensitive?: boolean;
        $diacraticSensitive?: boolean;
    };
    /** https://docs.mongodb.com/manual/reference/operator/query/where/#op._S_where */
    $where?: string | Function;
    /** https://docs.mongodb.com/manual/reference/operator/query/comment/#op._S_comment */
    $comment?: string;
    // we could not find a proper TypeScript generic to support nested queries e.g. 'user.friends.name'
    // this will mark all unrecognized properties as any (including nested queries)
    [key: string]: any;
};

export type ObjectQuerySelector<T> = T extends object ? { [key in keyof T]?: QuerySelector<T[key]> } : QuerySelector<T>;

export type Condition<T> = MongoAltQuery<T> | QuerySelector<MongoAltQuery<T>>;

export type FilterQuery<T> = {
    [P in keyof T]?: Condition<T[P]>;
} &
    RootQuerySelector<T>;

/** https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/#insertone */
export type BulkWriteInsertOneOperation<TSchema> = {
    insertOne: {
        document: OptionalId<TSchema>;
    };
};

/** https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/#updateone-and-updatemany */
export type BulkWriteUpdateOperation<TSchema> = {
    arrayFilters?: object[];
    collation?: object;
    hint?: string | object;
    filter: FilterQuery<TSchema>;
    update: UpdateQuery<TSchema>;
    upsert?: boolean;
};
export type BulkWriteUpdateOneOperation<TSchema> = {
    updateOne: BulkWriteUpdateOperation<TSchema>;
};
export type BulkWriteUpdateManyOperation<TSchema> = {
    updateMany: BulkWriteUpdateOperation<TSchema>;
};

/** https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/#replaceone */
export type BulkWriteReplaceOneOperation<TSchema> = {
    replaceOne: {
        collation?: object;
        hint?: string | object;
        filter: FilterQuery<TSchema>;
        replacement: TSchema;
        upsert?: boolean;
    };
};

/** https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/#deleteone-and-deletemany */
export type BulkWriteDeleteOperation<TSchema> = {
    collation?: object;
    filter: FilterQuery<TSchema>;
};
export type BulkWriteDeleteOneOperation<TSchema> = {
    deleteOne: BulkWriteDeleteOperation<TSchema>;
};
export type BulkWriteDeleteManyOperation<TSchema> = {
    deleteMany: BulkWriteDeleteOperation<TSchema>;
};

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#bulkWrite */
export type BulkWriteOperation<TSchema> =
    | BulkWriteInsertOneOperation<TSchema>
    | BulkWriteUpdateOneOperation<TSchema>
    | BulkWriteUpdateManyOperation<TSchema>
    | BulkWriteReplaceOneOperation<TSchema>
    | BulkWriteDeleteOneOperation<TSchema>
    | BulkWriteDeleteManyOperation<TSchema>;

/** http://docs.mongodb.org/manual/reference/command/collStats/ */
export interface CollStats {
    /**
     * Namespace.
     */
    ns: string;
    /**
     * Number of documents.
     */
    count: number;
    /**
     * Collection size in bytes.
     */
    size: number;
    /**
     * Average object size in bytes.
     */
    avgObjSize: number;
    /**
     * (Pre)allocated space for the collection in bytes.
     */
    storageSize: number;
    /**
     * Number of extents (contiguously allocated chunks of datafile space).
     */
    numExtents: number;
    /**
     * Number of indexes.
     */
    nindexes: number;
    /**
     * Size of the most recently created extent in bytes.
     */
    lastExtentSize: number;
    /**
     * Padding can speed up updates if documents grow.
     */
    paddingFactor: number;
    /**
     * A number that indicates the user-set flags on the collection. userFlags only appears when using the mmapv1 storage engine.
     */
    userFlags?: number;
    /**
     * Total index size in bytes.
     */
    totalIndexSize: number;
    /**
     * Size of specific indexes in bytes.
     */
    indexSizes: {
        _id_: number;
        [index: string]: number;
    };
    /**
     * `true` if the collection is capped.
     */
    capped: boolean;
    /**
     * The maximum number of documents that may be present in a capped collection.
     */
    max: number;
    /**
     * The maximum size of a capped collection.
     */
    maxSize: number;
    wiredTiger?: WiredTigerData;
    indexDetails?: any;
    ok: number;
}

export interface WiredTigerData {
    LSM: {
        'bloom filter false positives': number;
        'bloom filter hits': number;
        'bloom filter misses': number;
        'bloom filter pages evicted from cache': number;
        'bloom filter pages read into cache': number;
        'bloom filters in the LSM tree': number;
        'chunks in the LSM tree': number;
        'highest merge generation in the LSM tree': number;
        'queries that could have benefited from a Bloom filter that did not exist': number;
        'sleep for LSM checkpoint throttle': number;
        'sleep for LSM merge throttle': number;
        'total size of bloom filters': number;
    };
    'block-manager': {
        'allocations requiring file extension': number;
        'blocks allocated': number;
        'blocks freed': number;
        'checkpoint size': number;
        'file allocation unit size': number;
        'file bytes available for reuse': number;
        'file magic number': number;
        'file major version number': number;
        'file size in bytes': number;
        'minor version number': number;
    };
    btree: {
        'btree checkpoint generation': number;
        'column-store fixed-size leaf pages': number;
        'column-store internal pages': number;
        'column-store variable-size RLE encoded values': number;
        'column-store variable-size deleted values': number;
        'column-store variable-size leaf pages': number;
        'fixed-record size': number;
        'maximum internal page key size': number;
        'maximum internal page size': number;
        'maximum leaf page key size': number;
        'maximum leaf page size': number;
        'maximum leaf page value size': number;
        'maximum tree depth': number;
        'number of key/value pairs': number;
        'overflow pages': number;
        'pages rewritten by compaction': number;
        'row-store internal pages': number;
        'row-store leaf pages': number;
    };
    cache: {
        'bytes currently in the cache': number;
        'bytes read into cache': number;
        'bytes written from cache': number;
        'checkpoint blocked page eviction': number;
        'data source pages selected for eviction unable to be evicted': number;
        'hazard pointer blocked page eviction': number;
        'in-memory page passed criteria to be split': number;
        'in-memory page splits': number;
        'internal pages evicted': number;
        'internal pages split during eviction': number;
        'leaf pages split during eviction': number;
        'modified pages evicted': number;
        'overflow pages read into cache': number;
        'overflow values cached in memory': number;
        'page split during eviction deepened the tree': number;
        'page written requiring lookaside records': number;
        'pages read into cache': number;
        'pages read into cache requiring lookaside entries': number;
        'pages requested from the cache': number;
        'pages written from cache': number;
        'pages written requiring in-memory restoration': number;
        'tracked dirty bytes in the cache': number;
        'unmodified pages evicted': number;
    };
    cache_walk: {
        'Average difference between current eviction generation when the page was last considered': number;
        'Average on-disk page image size seen': number;
        'Clean pages currently in cache': number;
        'Current eviction generation': number;
        'Dirty pages currently in cache': number;
        'Entries in the root page': number;
        'Internal pages currently in cache': number;
        'Leaf pages currently in cache': number;
        'Maximum difference between current eviction generation when the page was last considered': number;
        'Maximum page size seen': number;
        'Minimum on-disk page image size seen': number;
        'On-disk page image sizes smaller than a single allocation unit': number;
        'Pages created in memory and never written': number;
        'Pages currently queued for eviction': number;
        'Pages that could not be queued for eviction': number;
        'Refs skipped during cache traversal': number;
        'Size of the root page': number;
        'Total number of pages currently in cache': number;
    };
    compression: {
        'compressed pages read': number;
        'compressed pages written': number;
        'page written failed to compress': number;
        'page written was too small to compress': number;
        'raw compression call failed, additional data available': number;
        'raw compression call failed, no additional data available': number;
        'raw compression call succeeded': number;
    };
    cursor: {
        'bulk-loaded cursor-insert calls': number;
        'create calls': number;
        'cursor-insert key and value bytes inserted': number;
        'cursor-remove key bytes removed': number;
        'cursor-update value bytes updated': number;
        'insert calls': number;
        'next calls': number;
        'prev calls': number;
        'remove calls': number;
        'reset calls': number;
        'restarted searches': number;
        'search calls': number;
        'search near calls': number;
        'truncate calls': number;
        'update calls': number;
    };
    reconciliation: {
        'dictionary matches': number;
        'fast-path pages deleted': number;
        'internal page key bytes discarded using suffix compression': number;
        'internal page multi-block writes': number;
        'internal-page overflow keys': number;
        'leaf page key bytes discarded using prefix compression': number;
        'leaf page multi-block writes': number;
        'leaf-page overflow keys': number;
        'maximum blocks required for a page': number;
        'overflow values written': number;
        'page checksum matches': number;
        'page reconciliation calls': number;
        'page reconciliation calls for eviction': number;
        'pages deleted': number;
    };
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#aggregate */
export interface CollectionAggregationOptions {
    readPreference?: ReadPreferenceOrMode;
    /**
     * Return the query as cursor, on 2.6 > it returns as a real cursor
     * on pre 2.6 it returns as an emulated cursor.
     */
    cursor?: { batchSize?: number };
    /**
     * Explain returns the aggregation execution plan (requires mongodb 2.6 >).
     */
    explain?: boolean;
    /**
     * Lets the server know if it can use disk to store
     * temporary results for the aggregation (requires mongodb 2.6 >).
     */
    allowDiskUse?: boolean;
    /**
     * specifies a cumulative time limit in milliseconds for processing operations
     * on the cursor. MongoDB interrupts the operation at the earliest following interrupt point.
     */
    maxTimeMS?: number;
    /**
     * Allow driver to bypass schema validation in MongoDB 3.2 or higher.
     */
    bypassDocumentValidation?: boolean;
    hint?: string | object;
    raw?: boolean;
    promoteLongs?: boolean;
    promoteValues?: boolean;
    promoteBuffers?: boolean;
    collation?: CollationDocument;
    comment?: string;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertMany */
export interface CollectionInsertManyOptions extends CommonOptions {
    /**
     * Serialize functions on any object.
     */
    serializeFunctions?: boolean;
    /**
     * Force server to assign _id values instead of driver.
     */
    forceServerObjectId?: boolean;
    /**
     * Allow driver to bypass schema validation in MongoDB 3.2 or higher.
     */
    bypassDocumentValidation?: boolean;
    /**
     * If true, when an insert fails, don't execute the remaining writes. If false, continue with remaining inserts when one fails.
     */
    ordered?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#bulkWrite */
export interface CollectionBulkWriteOptions extends CommonOptions {
    /**
     * Serialize functions on any object.
     */
    serializeFunctions?: boolean;
    /**
     * Execute write operation in ordered or unordered fashion.
     */
    ordered?: boolean;
    /**
     * Allow driver to bypass schema validation in MongoDB 3.2 or higher.
     */
    bypassDocumentValidation?: boolean;
    //Force server to assign _id values instead of driver.
    forceServerObjectId?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~BulkWriteOpResult */
export interface BulkWriteOpResultObject {
    insertedCount?: number;
    matchedCount?: number;
    modifiedCount?: number;
    deletedCount?: number;
    upsertedCount?: number;
    insertedIds?: {[index: number]: any};
    upsertedIds?: {[index: number]: any};
    result?: any;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#count */
export interface MongoCountPreferences {
    /**
     * The limit of documents to count.
     */
    limit?: number;
    /**
     * The number of documents to skip for the count.
     */
    skip?: number;
    /**
     * An index name hint for the query.
     */
    hint?: string;
    /**
     * The preferred read preference
     */
    readPreference?: ReadPreferenceOrMode;
    /**
     * Number of miliseconds to wait before aborting the query.
     */
    maxTimeMS?: number;
    /**
     * Optional session to use for this operation
     */
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#distinct */
export interface MongoDistinctPreferences {
    /**
     * The preferred read preference
     */
    readPreference?: ReadPreferenceOrMode;
    /**
     * Number of miliseconds to wait before aborting the query.
     */
    maxTimeMS?: number;
    /**
     * Optional session to use for this operation
     */
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~deleteWriteOpResult */
export interface DeleteWriteOpResultObject {
    //The raw result returned from MongoDB, field will vary depending on server version.
    result: {
        //Is 1 if the command executed correctly.
        ok?: number;
        //The total count of documents deleted.
        n?: number;
    };
    //The connection object used for the operation.
    connection?: any;
    //The number of documents deleted.
    deletedCount?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~findAndModifyWriteOpResult */
export interface FindAndModifyWriteOpResultObject<TSchema> {
    //Document returned from findAndModify command.
    value?: TSchema;
    //The raw lastErrorObject returned from the command.
    lastErrorObject?: any;
    //Is 1 if the command executed correctly.
    ok?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndReplace */
export interface FindOneAndReplaceOption<T> extends CommonOptions {
    projection?: SchemaMember<T, ProjectionOperators | number | boolean | any>;
    sort?: SortOptionObject<T>;
    maxTimeMS?: number;
    upsert?: boolean;
    returnOriginal?: boolean;
    collation?: CollationDocument;
}

/** https://docs.mongodb.com/manual/reference/operator/projection/ */
export interface ProjectionOperators {
    /** https://docs.mongodb.com/manual/reference/operator/projection/elemMatch/#proj._S_elemMatch */
    $elemMatch?: object;
    /** https://docs.mongodb.com/manual/reference/operator/projection/slice/#proj._S_slice */
    $slice?: number | [number, number];
    $meta?: MetaProjectionOperators;
}

/** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndUpdate */
export interface FindOneAndUpdateOption<T> extends FindOneAndReplaceOption<T> {
    arrayFilters?: object[];
}

/** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndDelete */
export interface FindOneAndDeleteOption<T> {
    projection?: SchemaMember<T, ProjectionOperators | number | boolean | any>;
    sort?: SortOptionObject<T>;
    maxTimeMS?: number;
    session?: ClientSession;
    collation?: CollationDocument;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#geoHaystackSearch */
export interface GeoHaystackSearchOptions {
    readPreference?: ReadPreferenceOrMode;
    maxDistance?: number;
    search?: object;
    limit?: number;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Code.html */
export class Code {
    constructor(code: string | Function, scope?: object);
    code: string | Function;
    scope: any;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/OrderedBulkOperation.html */
export interface OrderedBulkOperation {
    length: number;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/OrderedBulkOperation.html#execute */
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/OrderedBulkOperation.html#find */
    find(selector: object): FindOperatorsOrdered;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/OrderedBulkOperation.html#insert */
    insert(doc: object): OrderedBulkOperation;
}

/** https://docs.mongodb.com/manual/reference/method/BulkWriteResult/index.html#BulkWriteResult.upserted */
export interface BulkWriteResultUpsertedIdObject {
    index: number;
    _id: ObjectId;
}

/** http://mongodb.github.io/node-mongodb-native/3.5/api/BulkWriteResult.html */
export interface BulkWriteResult {
    /**
     * Evaluates to `true` if the bulk operation correctly executes
     */
    ok: boolean;

    /**
     * The number of documents inserted, excluding upserted documents.
     *
     * @see {@link nUpserted} for the number of documents inserted through an upsert.
     */
    nInserted: number;

    /**
     * The number of documents selected for update.
     *
     * If the update operation results in no change to the document,
     * e.g. `$set` expression updates the value to the current value,
     * {@link nMatched} can be greater than {@link nModified}.
     */
    nMatched: number;

    /**
     * The number of existing documents updated.
     *
     * If the update/replacement operation results in no change to the document,
     * such as setting the value of the field to its current value,
     * {@link nModified} can be less than {@link nMatched}
     */
    nModified: number;

    /**
     * The number of documents inserted by an
     * [upsert]{@link https://docs.mongodb.com/manual/reference/method/db.collection.update/#upsert-parameter}.
     */
    nUpserted: number;

    /**
     * The number of documents removed.
     */
    nRemoved: number;

    // Returns an array of all inserted ids
    getInsertedIds(): object[];
    // Retrieve lastOp if available
    getLastOp(): object;
    // Returns raw internal result
    getRawResponse(): object;

    /**
     * Returns the upserted id at the given index
     * @param index the number of the upserted id to return, returns `undefined` if no result for passed in index
     */
    getUpsertedIdAt(index: number): BulkWriteResultUpsertedIdObject;

    // Returns an array of all upserted ids
    getUpsertedIds(): BulkWriteResultUpsertedIdObject[];
    // Retrieve the write concern error if any
    getWriteConcernError(): WriteConcernError;

    /**
     * Returns a specific write error object
     * @param index of the write error to return, returns `null` if there is no result for passed in index
     */
    getWriteErrorAt(index: number): WriteError;

    // Returns the number of write errors off the bulk operation
    getWriteErrorCount(): number;
    // Retrieve all write errors
    getWriteErrors(): object[];
    // Returns `true` if the bulk operation contains a write error
    hasWriteErrors(): boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/WriteError.html */
export interface WriteError {
    //Write concern error code.
    code: number;
    //Write concern error original bulk operation index.
    index: number;
    //Write concern error message.
    errmsg: string;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/WriteConcernError.html */
export interface WriteConcernError {
    //Write concern error code.
    code: number;
    //Write concern error message.
    errmsg: string;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/FindOperatorsOrdered.html */
export interface FindOperatorsOrdered {
    delete(): OrderedBulkOperation;
    deleteOne(): OrderedBulkOperation;
    replaceOne(doc: object): OrderedBulkOperation;
    update(doc: object): OrderedBulkOperation;
    updateOne(doc: object): OrderedBulkOperation;
    upsert(): FindOperatorsOrdered;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/UnorderedBulkOperation.html */
export interface UnorderedBulkOperation {
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/lib_bulk_unordered.js.html line 339 */
    length: number;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/UnorderedBulkOperation.html#execute */
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/UnorderedBulkOperation.html#find */
    find(selector: object): FindOperatorsUnordered;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/UnorderedBulkOperation.html#insert */
    insert(doc: object): UnorderedBulkOperation;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/FindOperatorsUnordered.html */
export interface FindOperatorsUnordered {
    length: number;
    remove(): UnorderedBulkOperation;
    removeOne(): UnorderedBulkOperation;
    replaceOne(doc: object): UnorderedBulkOperation;
    update(doc: object): UnorderedBulkOperation;
    updateOne(doc: object): UnorderedBulkOperation;
    upsert(): FindOperatorsUnordered;
}

/** http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne */
export interface FindOneOptions<T> {
    limit?: number;
    sort?: Array<[string, number]> | SortOptionObject<T>;
    projection?: SchemaMember<T, ProjectionOperators | number | boolean | any>;
    /**
     * @deprecated Use options.projection instead
     */
    fields?: { [P in keyof T]: boolean | number };
    skip?: number;
    hint?: object;
    explain?: boolean;
    snapshot?: boolean;
    timeout?: boolean;
    tailable?: boolean;
    awaitData?: boolean;
    batchSize?: number;
    returnKey?: boolean;
    maxScan?: number;
    min?: number;
    max?: number;
    showDiskLoc?: boolean;
    comment?: string;
    raw?: boolean;
    promoteLongs?: boolean;
    promoteValues?: boolean;
    promoteBuffers?: boolean;
    readPreference?: ReadPreferenceOrMode;
    partial?: boolean;
    maxTimeMS?: number;
    collation?: CollationDocument;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertOne */
export interface CollectionInsertOneOptions extends CommonOptions {
    /**
     * Serialize functions on any object.
     */
    serializeFunctions?: boolean;
    //Force server to assign _id values instead of driver.
    forceServerObjectId?: boolean;
    //Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~insertWriteOpResult */
export interface InsertWriteOpResult<TSchema extends { _id: any }> {
    insertedCount: number;
    ops: TSchema[];
    insertedIds: { [key: number]: TSchema['_id'] };
    connection: any;
    result: { ok: number; n: number };
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~insertOneWriteOpResult */
export interface InsertOneWriteOpResult<TSchema extends { _id: any }> {
    insertedCount: number;
    ops: TSchema[];
    insertedId: TSchema['_id'];
    connection: any;
    result: { ok: number; n: number };
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#parallelCollectionScan */
export interface ParallelCollectionScanOptions {
    readPreference?: ReadPreferenceOrMode;
    batchSize?: number;
    numCursors?: number;
    raw?: boolean;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#replaceOne */
export interface ReplaceOneOptions extends CommonOptions {
    upsert?: boolean;
    bypassDocumentValidation?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateOne */
export interface UpdateOneOptions extends ReplaceOneOptions {
    arrayFilters?: object[];
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateMany */
export interface UpdateManyOptions extends CommonOptions {
    upsert?: boolean;
    arrayFilters?: object[];
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~updateWriteOpResult */
export interface UpdateWriteOpResult {
    result: { ok: number; n: number; nModified: number };
    connection: any;
    matchedCount: number;
    modifiedCount: number;
    upsertedCount: number;
    upsertedId: { _id: ObjectId };
}

/** https://github.com/mongodb/node-mongodb-native/blob/2.2/lib/collection.js#L957 */
export interface ReplaceWriteOpResult extends UpdateWriteOpResult {
    ops: any[];
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#mapReduce */
export interface MapReduceOptions {
    readPreference?: ReadPreferenceOrMode;
    out?: object;
    query?: object;
    sort?: object;
    limit?: number;
    keeptemp?: boolean;
    finalize?: Function | string;
    scope?: object;
    jsMode?: boolean;
    verbose?: boolean;
    bypassDocumentValidation?: boolean;
    session?: ClientSession;
}

export type CollectionMapFunction<TSchema> = (this: TSchema) => void;

export type CollectionReduceFunction<TKey, TValue> = (key: TKey, values: TValue[]) => TValue;

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~WriteOpResult */
export interface WriteOpResult {
    ops: any[];
    connection: any;
    result: any;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#~resultCallback */
export type CursorResult = object | null | boolean;

type Default = any;
type DefaultSchema = any;

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html */
export class Cursor<T = Default> extends Readable {
    [Symbol.asyncIterator](): AsyncIterableIterator<T>;
    sortValue: string;
    timeout: boolean;
    readPreference: ReadPreference;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#addCursorFlag */
    addCursorFlag(flag: string, value: boolean): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#addQueryModifier */
    addQueryModifier(name: string, value: boolean): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#batchSize */
    batchSize(value: number): Cursor<T>;
    bufferedCount(): number;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#clone */
    clone(): Cursor<T>; // still returns the same type
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#close */
    close(): Promise<CursorResult>;
    close(callback: MongoCallback<CursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#collation */
    collation(value: CollationDocument): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#comment */
    comment(value: string): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#count */
    count(callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, callback: MongoCallback<number>): void;
    count(options: CursorCommentOptions, callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback<number>): void;
    count(applySkipLimit?: boolean, options?: CursorCommentOptions): Promise<number>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#explain */
    explain(): Promise<CursorResult>;
    explain(callback: MongoCallback<CursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#filter */
    filter(filter: object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#forEach */
    forEach(iterator: IteratorCallback<T>, callback: EndCallback): void;
    forEach(iterator: IteratorCallback<T>): Promise<void>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#hasNext */
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#hint */
    hint(hint: string | object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#isClosed */
    isClosed(): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#limit */
    limit(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#map */
    map<U>(transform: (document: T) => U): Cursor<U>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#max */
    max(max: object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#maxAwaitTimeMS */
    maxAwaitTimeMS(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#maxScan */
    maxScan(maxScan: object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#maxTimeMS */
    maxTimeMS(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#min */
    min(min: object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#next */
    next(): Promise<T | null>;
    next(callback: MongoCallback<T | null>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#project */
    project(value: SchemaMember<T, ProjectionOperators | number | boolean | any>): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#read */
    read(size: number): string | Buffer | void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#returnKey */
    returnKey(returnKey: boolean): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#rewind */
    rewind(): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#setCursorOption */
    setCursorOption(field: string, value: object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#setReadPreference */
    setReadPreference(readPreference: ReadPreferenceOrMode): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#showRecordId */
    showRecordId(showRecordId: boolean): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#skip */
    skip(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#snapshot */
    snapshot(snapshot: object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#sort */
    sort(keyOrList: string | Array<[string, number]> | SortOptionObject<T>, direction?: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#stream */
    stream(options?: { transform?: (document: T) => any }): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#toArray */
    toArray(): Promise<T[]>;
    toArray(callback: MongoCallback<T[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#unshift */
    unshift(stream: Buffer | string): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#count */
export interface CursorCommentOptions {
    skip?: number;
    limit?: number;
    maxTimeMS?: number;
    hint?: string;
    readPreference?: ReadPreferenceOrMode;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#~iteratorCallback */
export interface IteratorCallback<T> {
    (doc: T): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#~endCallback */
export interface EndCallback {
    (error: MongoError): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#~resultCallback */
export type AggregationCursorResult = object | null;
/** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html */
export class AggregationCursor<T = Default> extends Cursor<T> {
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#batchSize */
    batchSize(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#clone */
    clone(): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#close */
    close(): Promise<AggregationCursorResult>;
    close(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#each */
    each(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#explain */
    explain(): Promise<AggregationCursorResult>;
    explain(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#geoNear */
    geoNear(document: object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#group */
    group<U = T>(document: object): AggregationCursor<U>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#hasNext */
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#isClosed */
    isClosed(): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#limit */
    limit(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#lookup */
    lookup(document: object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#match */
    match(document: object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#maxTimeMS */
    maxTimeMS(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#next */
    next(): Promise<T | null>;
    next(callback: MongoCallback<T | null>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#out */
    out(destination: string): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#project */
    project<U = T>(document: object): AggregationCursor<U>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#read */
    read(size: number): string | Buffer | void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#redact */
    redact(document: object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#rewind */
    rewind(): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#setEncoding */
    skip(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#sort */
    sort(document: object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#toArray */
    toArray(): Promise<T[]>;
    toArray(callback: MongoCallback<T[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#unshift */
    unshift(stream: Buffer | string): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/AggregationCursor.html#unwind */
    unwind<U = T>(field: string): AggregationCursor<U>;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#~resultCallback */
export type CommandCursorResult = object | null;
/** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html */
export class CommandCursor extends Readable {
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#hasNext */
    hasNext(): Promise<boolean>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#hasNext */
    hasNext(callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#batchSize */
    batchSize(value: number): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#clone */
    clone(): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#close */
    close(): Promise<CommandCursorResult>;
    close(callback: MongoCallback<CommandCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#each */
    each(callback: MongoCallback<CommandCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#isClosed */
    isClosed(): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#maxTimeMS */
    maxTimeMS(value: number): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#next */
    next(): Promise<CommandCursorResult>;
    next(callback: MongoCallback<CommandCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#read */
    read(size: number): string | Buffer | void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#rewind */
    rewind(): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#setReadPreference */
    setReadPreference(readPreference: ReadPreferenceOrMode): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#toArray */
    toArray(): Promise<any[]>;
    toArray(callback: MongoCallback<any[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/CommandCursor.html#unshift */
    unshift(stream: Buffer | string): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html */
export class GridFSBucket {
    constructor(db: Db, options?: GridFSBucketOptions);
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#delete */
    delete(id: ObjectId, callback?: GridFSBucketErrorCallback): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#drop */
    drop(callback?: GridFSBucketErrorCallback): void;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#find */
    find(filter?: object, options?: GridFSBucketFindOptions): Cursor<any>;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#openDownloadStream */
    openDownloadStream(id: ObjectId, options?: { start: number; end: number }): GridFSBucketReadStream;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#openDownloadStreamByName */
    openDownloadStreamByName(
        filename: string,
        options?: { revision: number; start: number; end: number },
    ): GridFSBucketReadStream;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#openUploadStream */
    openUploadStream(filename: string, options?: GridFSBucketOpenUploadStreamOptions): GridFSBucketWriteStream;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#openUploadStreamWithId */
    openUploadStreamWithId(
        id: GridFSBucketWriteStreamId,
        filename: string,
        options?: GridFSBucketOpenUploadStreamOptions,
    ): GridFSBucketWriteStream;
    /** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#rename */
    rename(id: ObjectId, filename: string, callback?: GridFSBucketErrorCallback): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html */
export interface GridFSBucketOptions {
    bucketName?: string;
    chunkSizeBytes?: number;
    writeConcern?: WriteConcern;
    readPreference?: ReadPreferenceOrMode;
}

/** http://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#~errorCallback */
export interface GridFSBucketErrorCallback extends MongoCallback<void> {}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#find */
export interface GridFSBucketFindOptions {
    batchSize?: number;
    limit?: number;
    maxTimeMS?: number;
    noCursorTimeout?: boolean;
    skip?: number;
    sort?: object;
}

/** https://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucket.html#openUploadStream */
export interface GridFSBucketOpenUploadStreamOptions {
    chunkSizeBytes?: number;
    metadata?: object;
    contentType?: string;
    aliases?: string[];
}

/** https://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucketReadStream.html */
export class GridFSBucketReadStream extends Readable {
    id: ObjectId;
    constructor(
        chunks: Collection<any>,
        files: Collection<any>,
        readPreference: object,
        filter: object,
        options?: GridFSBucketReadStreamOptions,
    );
}

/** https://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucketReadStream.html */
export interface GridFSBucketReadStreamOptions {
    sort?: number;
    skip?: number;
    start?: number;
    end?: number;
}

/** https://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucketWriteStream.html */
export class GridFSBucketWriteStream extends Writable {
    id: GridFSBucketWriteStreamId;
    constructor(bucket: GridFSBucket, filename: string, options?: GridFSBucketWriteStreamOptions);

    /**
     * Places this write stream into an aborted state (all future writes fail)
     * and deletes all chunks that have already been written.
     * @param [callback] called when chunks are successfully removed or error occurred
     * @see {@link https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketWriteStream.html#abort}
     */
    abort(callback?: GridFSBucketErrorCallback): void;
}

/** https://mongodb.github.io/node-mongodb-native/3.1/api/GridFSBucketWriteStream.html */
export interface GridFSBucketWriteStreamOptions extends WriteConcern {
    /**
     * Custom file id for the GridFS file.
     */
    id?: GridFSBucketWriteStreamId;
    /**
     * The chunk size to use, in bytes
     */
    chunkSizeBytes?: number;
    /**
     * Default false; If true, disables adding an md5 field to file data
     */
    disableMD5?: boolean;
}

/**
 * This is similar to Parameters but will work with a type which is
 * a function or with a tuple specifying arguments, which are both
 * common ways to define eventemitter events
 */
type EventArguments<T> = [T] extends [(...args: infer U) => any] ? U : [T] extends [undefined] ? [] : [T];

/**
 * Type-safe event emitter from https://github.com/andywer/typed-emitter.
 *
 * Use it like this:
 *
 * interface MyEvents {
 *   error: (error: Error) => void
 *   message: (from: string, content: string) => void
 * }
 *
 * const myEmitter = new EventEmitter() as TypedEmitter<MyEvents>
 *
 * myEmitter.on("message", (from, content) => {
 *   // ...
 * })
 *
 * myEmitter.emit("error", "x")  // <- Will catch this type error
 */
declare class TypedEventEmitter<Events> {
    addListener<E extends keyof Events>(event: E, listener: Events[E]): this;
    on<E extends keyof Events>(event: E, listener: Events[E]): this;
    once<E extends keyof Events>(event: E, listener: Events[E]): this;
    prependListener<E extends keyof Events>(event: E, listener: Events[E]): this;
    prependOnceListener<E extends keyof Events>(event: E, listener: Events[E]): this;

    off<E extends keyof Events>(event: E, listener: Events[E]): this;
    removeAllListeners<E extends keyof Events>(event?: E): this;
    removeListener<E extends keyof Events>(event: E, listener: Events[E]): this;

    emit<E extends keyof Events>(event: E, ...args: EventArguments<Events[E]>): boolean;
    eventNames(): Array<keyof Events>;
    rawListeners<E extends keyof Events>(event: E): Function[];
    listeners<E extends keyof Events>(event: E): Function[];
    listenerCount<E extends keyof Events>(event: E): number;

    getMaxListeners(): number;
    setMaxListeners(maxListeners: number): this;
}

interface ChangeStreamEvents<TSchema extends { [key: string]: any } = DefaultSchema> {
    change: (doc: ChangeEvent<TSchema>) => void;
    close: () => void;
    end: () => void;
    error: (err: MongoError) => void;
    resumeTokenChanged: (newToken: ResumeToken) => void;
}

/** http://mongodb.github.io/node-mongodb-native/3.3/api/ChangeStream.html */
export class ChangeStream<TSchema extends { [key: string]: any } = DefaultSchema> extends TypedEventEmitter<
    ChangeStreamEvents<TSchema>
> {
    resumeToken: ResumeToken;

    constructor(parent: MongoClient | Db | Collection, pipeline: object[], options?: ChangeStreamOptions);

    /** http://mongodb.github.io/node-mongodb-native/3.1/api/ChangeStream.html#close */
    close(): Promise<any>;
    close(callback: MongoCallback<any>): void;

    /** http://mongodb.github.io/node-mongodb-native/3.1/api/ChangeStream.html#hasNext */
    hasNext(): Promise<any>;
    hasNext(callback: MongoCallback<any>): void;

    /** http://mongodb.github.io/node-mongodb-native/3.1/api/ChangeStream.html#isClosed */
    isClosed(): boolean;

    /** http://mongodb.github.io/node-mongodb-native/3.1/api/ChangeStream.html#next */
    next(): Promise<any>;
    next(callback: MongoCallback<any>): void;

    /** http://mongodb.github.io/node-mongodb-native/3.1/api/ChangeStream.html#stream */
    stream(options?: { transform?: Function }): Cursor;
}

export class ResumeToken {}

export type ChangeEventTypes =
    | 'insert'
    | 'delete'
    | 'replace'
    | 'update'
    | 'drop'
    | 'rename'
    | 'dropDatabase'
    | 'invalidate';
export interface ChangeEventBase<TSchema extends { [key: string]: any } = DefaultSchema> {
    _id: ResumeToken;
    /**
     * We leave this off the base type so that we can differentiate
     * by checking its value and get intelligent types on the other fields
     */
    // operationType: ChangeEventTypes;
    ns: {
        db: string;
        coll: string;
    };
    clusterTime: Timestamp;
    txnNumber?: number;
    lsid?: {
        id: any;
        uid: any;
    };
}
export interface ChangeEventCR<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: 'insert' | 'replace';
    fullDocument?: TSchema;
    documentKey: {
        _id: ExtractIdType<TSchema>;
    };
}
type FieldUpdates<TSchema> = Partial<TSchema> & { [key: string]: any };
export interface ChangeEventUpdate<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: 'update';
    updateDescription: {
        /**
         * This is an object with all changed fields; if they are nested,
         * the keys will be paths, e.g. 'question.answer.0.text': 'new text'
         */
        updatedFields: FieldUpdates<TSchema>;
        removedFields: Array<keyof TSchema | string>;
    };
    fullDocument?: TSchema;
    documentKey: {
        _id: ExtractIdType<TSchema>;
    };
}
export interface ChangeEventDelete<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: 'delete';
    documentKey: {
        _id: ExtractIdType<TSchema>;
    };
}
export interface ChangeEventRename<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: 'rename';
    to: {
        db: string;
        coll: string;
    };
}

export interface ChangeEventOther<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: 'drop' | 'dropDatabase';
}

export interface ChangeEventInvalidate<TSchema extends { [key: string]: any } = DefaultSchema> {
    _id: ResumeToken;
    operationType: 'invalidate';
    clusterTime: Timestamp;
}

export type ChangeEvent<TSchema extends object = { _id: ObjectId }> =
    | ChangeEventCR<TSchema>
    | ChangeEventUpdate<TSchema>
    | ChangeEventDelete<TSchema>
    | ChangeEventRename<TSchema>
    | ChangeEventOther<TSchema>
    | ChangeEventInvalidate<TSchema>;

/** https://mongodb.github.io/node-mongodb-native/3.3/api/global.html#ChangeStreamOptions */
export interface ChangeStreamOptions {
    fullDocument?: 'default' | 'updateLookup';
    maxAwaitTimeMS?: number;
    resumeAfter?: ResumeToken;
    startAfter?: ResumeToken;
    startAtOperationTime?: Timestamp;
    batchSize?: number;
    collation?: CollationDocument;
    readPreference?: ReadPreferenceOrMode;
}

type GridFSBucketWriteStreamId = string | number | object | ObjectId;

export interface LoggerOptions {
    /**
     * Custom logger function
     */
    loggerLevel?: string;
    /**
     * Override default global log level.
     */
    logger?: log;
}

export type log = (message?: string, state?: LoggerState) => void;

export interface LoggerState {
    type: string;
    message: string;
    className: string;
    pid: number;
    date: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Logger.html */
export class Logger {
    constructor(className: string, options?: LoggerOptions);
    /**
     * Log a message at the debug level
     */
    debug(message: string, state: LoggerState): void;
    /**
     * Log a message at the warn level
     */
    warn(message: string, state: LoggerState): void;
    /**
     * Log a message at the info level
     */
    info(message: string, state: LoggerState): void;
    /**
     * Log a message at the error level
     */
    error(message: string, state: LoggerState): void;
    /**
     * Is the logger set at info level
     */
    isInfo(): boolean;
    /**
     * Is the logger set at error level
     */
    isError(): boolean;
    /**
     * Is the logger set at error level
     */
    isWarn(): boolean;
    /**
     * Is the logger set at debug level
     */
    isDebug(): boolean;
    /**
     * Resets the logger to default settings, error and no filtered classes
     */
    static reset(): void;
    /**
     * Get the current logger function
     */
    static currentLogger(): log;
    //Set the current logger function
    static setCurrentLogger(log: log): void;
    /**
     * Set what classes to log.
     */
    static filter(type: string, values: string[]): void;
    /**
     * Set the current log level
     */
    static setLevel(level: string): void;
}

/** https://docs.mongodb.com/manual/reference/collation/#collation-document-fields */
export interface CollationDocument {
    locale: string;
    strength?: number;
    caseLevel?: boolean;
    caseFirst?: string;
    numericOrdering?: boolean;
    alternate?: string;
    maxVariable?: string;
    backwards?: boolean;
    normalization?: boolean;
}

/** https://docs.mongodb.com/manual/reference/command/createIndexes/ */
export interface IndexSpecification {
    key: object;
    name?: string;
    background?: boolean;
    unique?: boolean;
    partialFilterExpression?: object;
    sparse?: boolean;
    expireAfterSeconds?: number;
    storageEngine?: object;
    weights?: object;
    default_language?: string;
    language_override?: string;
    textIndexVersion?: number;
    '2dsphereIndexVersion'?: number;
    bits?: number;
    min?: number;
    max?: number;
    bucketSize?: number;
    collation?: CollationDocument;
}
