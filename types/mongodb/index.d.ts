// Type definitions for MongoDB 3.6
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
//                 Bastien Arata <https://github.com/b4nst>
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
//                 Emmanuel Gautier <https://github.com/emmanuelgautier>
//                 Wyatt Johnson <https://github.com/wyattjoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

// Documentation: https://mongodb.github.io/node-mongodb-native/3.6/api/

/// <reference types="node" />
/// <reference lib="esnext.asynciterable" />

import { Binary, Decimal128, Double, Int32, Long, ObjectId, Timestamp } from "bson";
import { EventEmitter } from "events";
import { Readable, Writable } from "stream";
import { checkServerIdentity } from "tls";

type FlattenIfArray<T> = T extends ReadonlyArray<infer R> ? R : T;
export type WithoutProjection<T> = T & { fields?: undefined; projection?: undefined };

export function connect(uri: string, options?: MongoClientOptions): Promise<MongoClient>;
export function connect(uri: string, callback: MongoCallback<MongoClient>): void;
export function connect(uri: string, options: MongoClientOptions, callback: MongoCallback<MongoClient>): void;

export { Binary, DBRef, Decimal128, Double, Int32, Long, MaxKey, MinKey, ObjectID, ObjectId, Timestamp } from "bson";

type NumericTypes = number | Decimal128 | Double | Int32 | Long;

/**
 * Creates a new MongoClient instance
 *
 * @param uri The connection URI string
 * @param options Optional settings
 * @param callback The optional command result callback
 * @returns MongoClient instance
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
 */
export class MongoClient extends EventEmitter {
    constructor(uri: string, options?: MongoClientOptions);
    /**
     * Connect to MongoDB using a url as documented at
     * https://docs.mongodb.org/manual/reference/connection-string/
     *
     * @param uri The connection URI string
     * @param options Optional settings
     * @param callback The optional command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#.connect
     */
    static connect(uri: string, callback: MongoCallback<MongoClient>): void;
    static connect(uri: string, options?: MongoClientOptions): Promise<MongoClient>;
    static connect(uri: string, options: MongoClientOptions, callback: MongoCallback<MongoClient>): void;
    /**
     * Connect to MongoDB using a url as documented at
     * https://docs.mongodb.org/manual/reference/connection-string/
     *
     * @param callback The optional command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#connect
     */
    connect(): Promise<MongoClient>;
    connect(callback: MongoCallback<MongoClient>): void;
    /**
     * Close the db and its underlying connections
     *
     * @param force Optional force close, emitting no events
     * @param callback The optional result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#close
     */
    close(callback: MongoCallback<void>): void;
    close(force?: boolean): Promise<void>;
    close(force: boolean, callback: MongoCallback<void>): void;
    /**
     * Create a new Db instance sharing the current socket connections.
     * Be aware that the new db instances are related in a parent-child relationship to the original instance so that events are correctly emitted on child db instances.
     * Child db instances are cached so performing db('db1') twice will return the same instance.
     * You can control these behaviors with the options noListener and returnNonCachedInstance.
     *
     * @param dbName The name of the database we want to use. If not provided, use database name from connection string
     * @param options Optional settings
     * @returns The Db object
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#db
     */
    db(dbName?: string, options?: MongoClientCommonOption): Db;
    /**
     * Check if MongoClient is connected
     *
     * @param options Optional settings
     * @returns Whether the MongoClient is connected or not
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#isConnected
     */
    isConnected(options?: MongoClientCommonOption): boolean;
    /**
     * Starts a new session on the server
     *
     * @param options Optional settings for a driver session~
     * @returns Newly established session
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#startSession
     */
    startSession(options?: SessionOptions): ClientSession;
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this cluster.
     * Will ignore all changes to system collections, as well as the local, admin, and config databases.
     *
     * @param pipeline An array of {@link https://docs.mongodb.com/v3.6/reference/operator/aggregation-pipeline/ aggregation pipeline stages} through which to pass change stream documents.
     * This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options Optional settings
     * @returns ChangeStream instance
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#watch
     */
    watch<TSchema extends object = { _id: ObjectId }>(
        pipeline?: object[],
        options?: ChangeStreamOptions & { session?: ClientSession },
    ): ChangeStream<TSchema>;
    /**
     * Runs a given operation with an implicitly created session. The lifetime of the session will be handled without the need for user interaction.
     * NOTE: presently the operation MUST return a Promise (either explicit or implicity as an async function)
     *
     * @param options Optional settings to be appled to implicitly created session
     * @param operation An operation to execute with an implicitly created session. The signature of this MUST be `(session) => {}`
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#withSession
     */
    withSession(operation: (session: ClientSession) => Promise<any>): Promise<void>;
    withSession(options: SessionOptions, operation: (session: ClientSession) => Promise<any>): Promise<void>;

    readPreference: ReadPreference;
    writeConcern: WriteConcern;
}

export type ClientSessionId = unknown;

/**
 * A class representing a client session on the server
 * WARNING: not meant to be instantiated directly.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html
 */
export interface ClientSession extends EventEmitter {
    /** The server id associated with this session */
    id: ClientSessionId;

    /**
     * Aborts the currently active transaction in this session.
     *
     * @param callback Optional callback for completion of this operation
     * @returns Promise if no callback is provided
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#abortTransaction
     */
    abortTransaction(): Promise<void>;
    abortTransaction(callback?: MongoCallback<void>): void;

    /**
     * Advances the operationTime for a {@link ClientSession}.
     *
     * @param operationTime The `BSON.Timestamp` of the operation type it is desired to advance to
     */
    advanceOperationTime(operationTime: Timestamp): void;

    /**
     * Commits the currently active transaction in this session.
     *
     * @param callback Optional callback for completion of this operation
     * @returns Promise if no callback is provided
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#commitTransaction
     */
    commitTransaction(): Promise<void>;
    commitTransaction(callback: MongoCallback<void>): void;

    /**
     * Ends this session on the server
     *
     * @param options Optional settings Currently reserved for future use
     * @param callback Optional callback for completion of this operation
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#endSession
     */
    endSession(callback?: MongoCallback<void>): void;
    endSession(options: Object, callback: MongoCallback<void>): void;
    endSession(options?: Object): Promise<void>;

    /**
     * Used to determine if this session equals another
     *
     * @param session - a class representing a client session on the server
     * @returns `true` if the sessions are equal
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#equals
     */
    equals(session: ClientSession): boolean;

    /**
     * Increment the transaction number on the internal `ServerSession`
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#incrementTransactionNumber
     */
    incrementTransactionNumber(): void;

    /**
     * @returns whether this session is currently in a transaction or not
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#inTransaction
     */
    inTransaction(): boolean;

    /**
     * Starts a new transaction with the given options.
     *
     * @param options Options for the transaction
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#startTransaction
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
     * @param fn A user provided function to be run within a transaction
     * @param options Optional settings for the transaction
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ClientSession.html#withTransaction
     */
    withTransaction(fn: WithTransactionCallback, options?: TransactionOptions): Promise<any>;
}

/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#ReadConcern
 */
type ReadConcernLevel = "local" | "available" | "majority" | "linearizable" | "snapshot";

/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#ReadConcern
 */
export interface ReadConcern {
    level: ReadConcernLevel;
}

/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 *
 * @param w requests acknowledgement that the write operation has propagated to a specified number of mongod hosts
 * @param j requests acknowledgement from MongoDB that the write operation has been written to the journal
 * @param timeout a time limit, in milliseconds, for the write concern
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#WriteConcern
 */
interface WriteConcern {
    /**
     * requests acknowledgement that the write operation has
     * propagated to a specified number of mongod hosts
     * @default 1
     */
    w?: number | "majority" | string;
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
 *
 * @param causalConsistency Whether causal consistency should be enabled on this session
 * @param defaultTransactionOptions The default TransactionOptions to use for transactions started on this session.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#SessionOptions
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
 *
 * @param readConcern A default read concern for commands in this transaction
 * @param writeConcern A default writeConcern for commands in this transaction
 * @param readPreference A default read preference for commands in this transaction
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#TransactionOptions
 */
export interface TransactionOptions {
    readConcern?: ReadConcern;
    writeConcern?: WriteConcern;
    readPreference?: ReadPreferenceOrMode;
}

/**
 * @param noListener Do not make the db an event listener to the original connection.
 * @param returnNonCachedInstance Control if you want to return a cached instance or have a new one created
 */
export interface MongoClientCommonOption {
    noListener?: boolean;
    returnNonCachedInstance?: boolean;
}

/**
 * The callback format for results
 *
 * @param error An error instance representing the error during the execution.
 * @param result The result object if the command was executed successfully.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#~resultCallback
 */
export interface MongoCallback<T> {
    (error: MongoError, result: T): void;
}

/**
 * A user provided function to be run within a transaction
 *
 * @param session The parent session of the transaction running the operation. This should be passed into each operation within the lambda.
 * @returns Resulting Promise of operations run within this transaction
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#WithTransactionCallback
 */
export type WithTransactionCallback = (session: ClientSession) => Promise<void>;

/**
 * Creates a new MongoError
 *
 * @param message The error message
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoError.html
 */
export class MongoError extends Error {
    constructor(message: string | Error | object);
    /**
     * Creates a new MongoError object
     *
     * @param options The options used to create the error
     * @returns A MongoError instance
     * @deprecated Use `new MongoError()` instead
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoError.html#.create
     */
    static create(options: string | Error | object): MongoError;
    /**
     * Checks the error to see if it has an error label
     *
     * @param options The options used to create the error
     * @returns `true` if the error has the provided error label
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoError.html#hasErrorLabel
     */
    hasErrorLabel(label: string): boolean;
    readonly errorLabels: string[];
    code?: number | string;
    /**
     * While not documented, the `errmsg` prop is AFAIK the only way to find out
     * which unique index caused a duplicate key error. When you have multiple
     * unique indexes on a collection, knowing which index caused a duplicate
     * key error enables you to send better (more precise) error messages to the
     * client/user (eg. "Email address must be unique" instead of "Both email
     * address and username must be unique") – which caters for a better (app)
     * user experience.
     *
     * Details:
     * {@link https://github.com/Automattic/mongoose/issues/2129 How to get index name on duplicate document 11000 error?}
     * (issue for mongoose, but the same applies for the native mongodb driver).
     *
     * Note that in mongoose (the link above) the prop in question is called
     * 'message' while in mongodb it is called 'errmsg'. This can be seen in
     * multiple places in the source code, for example
     * {@link https://github.com/mongodb/node-mongodb-native/blob/a12aa15ac3eaae3ad5c4166ea1423aec4560f155/test/functional/find_tests.js#L1111 here}.
     */
    errmsg?: string;
    name: string;
}

/**
 * An error indicating an issue with the network, including TCP errors and timeouts
 *
 * @param message The error message
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoNetworkError.html
 */
export class MongoNetworkError extends MongoError {}

/**
 * An error used when attempting to parse a value (like a connection string)
 *
 * @param message The error message
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoParseError.html
 */
export class MongoParseError extends MongoError {}

/**
 * An error signifying a client-side timeout event
 *
 * @param message The error message
 * @param reason The reason the timeout occured
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoTimeoutError.html
 */
export class MongoTimeoutError extends MongoError {
    /**
     * An optional reason context for the timeout, generally an error
     * saved during flow of monitoring and selecting servers
     */
    reason?: string | object;
}

/**
 * An error signifying a client-side server selection error
 *
 * @param message The error message
 * @param reason The reason the timeout occured
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoServerSelectionError.html
 */
export class MongoServerSelectionError extends MongoTimeoutError {}

/**
 * An error thrown when the server reports a writeConcernError
 *
 * @param message The error message
 * @param reason The reason the timeout occured
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoWriteConcernError.html
 */
export class MongoWriteConcernError extends MongoError {
    /**
     * The result document (provided if ok: 1)
     */
    result?: object;
}
/**
 * An error indicating an unsuccessful Bulk Write
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/BulkWriteError.html
 */
export class BulkWriteError extends MongoError {}
export { BulkWriteError as MongoBulkWriteError };

/**
 * Optional settings for MongoClient.connect()
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#.connect
 */
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
     * Validate MongoClient passed in options for correctness
     * @default false
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
     * @default true
     */
    useNewUrlParser?: boolean;

    /**
     * Number of retries for a tailable cursor
     * @default 5
     */
    numberOfRetries?: number;

    /**
     * An authentication mechanism to use for connection authentication,
     * see the {@link https://docs.mongodb.com/v3.6/reference/connection-string/#urioption.authMechanism authMechanism}
     * reference for supported options.
     */
    authMechanism?:
        | "DEFAULT"
        | "GSSAPI"
        | "PLAIN"
        | "MONGODB-X509"
        | "MONGODB-CR"
        | "MONGODB-AWS"
        | "SCRAM-SHA-1"
        | "SCRAM-SHA-256"
        | string;

    /** Type of compression to use */
    compression?: {
        /** The selected compressors in preference order */
        compressors?: Array<"snappy" | "zlib">;
    };

    /**
     * Enable directConnection
     * @default false
     */
    directConnection?: boolean;

    /*
     * Optionally enable client side auto encryption.
     */
    autoEncryption?: AutoEncryptionOptions;
}

/**
 * Extra options related to the mongocryptd process.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AutoEncrypter.html#~AutoEncryptionExtraOptions
 */
export interface AutoEncryptionExtraOptions {
    /**
     * A local process the driver communicates with to determine how to encrypt
     * values in a command. Defaults to "mongodb:///var/mongocryptd.sock" if
     * domain sockets are available or "mongodb://localhost:27020" otherwise.
     */
    mongocryptdURI?: string;

    /**
     * If true, autoEncryption will not attempt to spawn a mongocryptd before
     * connecting.
     */
    mongocryptdBypassSpawn?: boolean;

    /**
     * The path to the mongocryptd executable on the system.
     */
    mongocryptdSpawnPath?: string;

    /**
     * Command line arguments to use when auto-spawning a mongocryptd.
     */
    mongocryptdSpawnArgs?: string[];
}

/**
 * Configuration options that are used by specific KMS providers during key
 * generation, encryption, and decryption.
 *
 * @see http://mongodb.github.io/node-mongodb-native/3.6/api/global.html#KMSProviders
 */
export interface KMSProviders {
    /**
     * Configuration options for using 'aws' as your KMS provider.
     */
    aws?: {
        /**
         * The access key used for the AWS KMS provider.
         */
        accessKeyId?: string;

        /**
         * The secret access key used for the AWS KMS provider.
         */
        secretAccessKey?: string;
    };

    /**
     * Configuration options for using `gcp` as your KMS provider.
     */
    gcp?: {
        /**
         * The service account email to authenticate.
         */
        email?: string;

        /**
         * A PKCS#8 encrypted key. This can either be a base64 string or a
         * binary representation.
         */
        privateKey?: string | Buffer;

        /**
         * If present, a host with optional port. E.g. "example.com" or
         * "example.com:443". Defaults to "oauth2.googleapis.com".
         */
        endpoint?: string;
    };

    /**
     * Configuration options for using 'local' as your KMS provider.
     */
    local?: {
        /**
         * The master key used to encrypt/decrypt data keys. A 96-byte long
         * Buffer.
         */
        key?: Buffer;
    };
}

/**
 * Configuration options for a automatic client encryption.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AutoEncrypter.html#~AutoEncryptionOptions
 */
export interface AutoEncryptionOptions {
    /**
     * A MongoClient used to fetch keys from a key vault
     */
    keyVaultClient?: MongoClient;

    /**
     * The namespace where keys are stored in the key vault.
     */
    keyVaultNamespace?: string;

    /**
     * Configuration options that are used by specific KMS providers during key
     * generation, encryption, and decryption.
     */
    kmsProviders?: KMSProviders;

    /**
     * A map of namespaces to a local JSON schema for encryption.
     */
    schemaMap?: object;

    /**
     * Allows the user to bypass auto encryption, maintaining implicit
     * decryption.
     */
    bypassAutoEncryption?: boolean;

    /**
     * Extra options related to the mongocryptd process.
     */
    extraOptions?: AutoEncryptionExtraOptions;
}

export interface SSLOptions {
    /**
     * Passed directly through to tls.createSecureContext.
     *
     * @see https://nodejs.org/dist/latest/docs/api/tls.html#tls_tls_createsecurecontext_options
     */
    ciphers?: string;
    /**
     * Passed directly through to tls.createSecureContext.
     *
     * @see https://nodejs.org/dist/latest/docs/api/tls.html#tls_tls_createsecurecontext_options
     */
    ecdhCurve?: string;
    /**
     * Number of connections for each server instance; set to 5 as default for legacy reasons
     * @default 5
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
     * Validate mongod server certificate against ca (mongod server >=2.4 with ssl support required)
     * @default true
     */
    sslValidate?: boolean;
    /**
     * Server identity checking during SSL
     * @default true
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
     * Path to file with either a single or bundle of certificate authorities
     * to be considered trusted when making a TLS connection
     */
    tlsCAFile?: string;
    /**
     * Path to the client certificate file or the client private key file;
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
     * Turn on high availability monitoring
     * @default true
     */
    ha?: boolean;
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
     * The ReadPreference mode as listed
     * {@link https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html here}
     */
    readPreference?: ReadPreferenceOrMode;
    /**
     * An object representing read preference tags
     * @see https://docs.mongodb.com/v3.6/core/read-preference-tags/
     */
    readPreferenceTags?: ReadPreferenceTags;
}

export type ReadPreferenceTags = ReadonlyArray<Record<string, string>>;
export type ReadPreferenceMode = "primary" | "primaryPreferred" | "secondary" | "secondaryPreferred" | "nearest";
export type ReadPreferenceOrMode = ReadPreference | ReadPreferenceMode;
export type ReadPreferenceOptions = {
    /** Server mode in which the same query is dispatched in parallel to multiple replica set members. */
    hedge?: {
        /** Explicitly enable or disable hedged reads. */
        enabled?: boolean;
    };
    /**
     * Max secondary read staleness in seconds, Minimum value is 90 seconds.
     */
    maxStalenessSeconds?: number;
};

/**
 * The **ReadPreference** class represents a MongoDB ReadPreference and is used to construct connections.
 * @see https://docs.mongodb.com/v3.6/core/read-preference/
 */
export class ReadPreference {
    constructor(mode: ReadPreferenceMode, tags: object, options?: ReadPreferenceOptions);
    mode: ReadPreferenceMode;
    tags: ReadPreferenceTags;
    static PRIMARY: "primary";
    static PRIMARY_PREFERRED: "primaryPreferred";
    static SECONDARY: "secondary";
    static SECONDARY_PREFERRED: "secondaryPreferred";
    static NEAREST: "nearest";
    isValid(mode: ReadPreferenceMode | string): boolean;
    static isValid(mode: string): boolean;
    /**
     * Indicates that this readPreference needs the "slaveOk" bit when sent over the wire
     * @see https://docs.mongodb.com/v3.6/reference/mongodb-wire-protocol/#op-query
     */
    slaveOk(): boolean;
    /**
     * Are the two read preference equal
     * @param readPreference - the read preference with which to check equality
     * @returns `true` if the two ReadPreferences are equivalent
     */
    equals(readPreference: ReadPreference): boolean;
}

/**
 * Optional settings for creating a new Db instance
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html
 */
export interface DbCreateOptions extends CommonOptions {
    /**
     * If the database authentication is dependent on another databaseName.
     */
    authSource?: string;
    /**
     * Force server to assign `_id` fields instead of driver
     * @default false
     */
    forceServerObjectId?: boolean;
    /**
     * Use c++ bson parser
     * @default false
     */
    native_parser?: boolean;
    /**
     * Serialize functions on any object
     * @default false
     */
    serializeFunctions?: boolean;
    /**
     * Specify if the BSON serializer should ignore undefined fields
     * @default false
     */
    ignoreUndefined?: boolean;
    /**
     * Return document results as raw BSON buffers
     * @default false
     */
    raw?: boolean;
    /**
     * Promotes Long values to number if they fit inside the 53 bits resolution
     * @default true
     */
    promoteLongs?: boolean;
    /**
     * Promotes Binary BSON values to native Node Buffers
     * @default false
     */
    promoteBuffers?: boolean;
    /**
     * Promotes BSON values to native types where possible, set to false to only receive wrapper types
     * @default true
     */
    promoteValues?: boolean;
    /**
     * The preferred read preference. Use {@link ReadPreference} class.
     */
    readPreference?: ReadPreferenceOrMode;
    /**
     * A primary key factory object for generation of custom `_id` keys.
     */
    pkFactory?: object;
    /**
     * A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
     */
    promiseLibrary?: PromiseConstructor;
    /**
     * @see https://docs.mongodb.com/v3.6/reference/read-concern/#read-concern
     * @since MongoDB 3.2
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
     * @default 30000
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
     * The maximum number of connections that may be associated with a pool at a given time
     * This includes in use and available connections
     * @default 10
     */
    maxPoolSize?: number;

    /**
     * **Only applies to the unified topology**
     * The minimum number of connections that MUST exist at any moment in a single connection pool
     * @default 0
     */
    minPoolSize?: number;

    /**
     * **Only applies to the unified topology**
     * The maximum amount of time a connection should remain idle in the connection pool before being marked idle
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

/**
 * Optional socket options
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Server.html
 */
export interface SocketOptions {
    /**
     * Reconnect on error
     * @default true
     */
    autoReconnect?: boolean;
    /**
     * TCP Socket NoDelay option
     * @default true
     */
    noDelay?: boolean;
    /**
     * TCP KeepAlive enabled on the socket
     * @default true
     */
    keepAlive?: boolean;
    /**
     * TCP KeepAlive initial delay before sending first keep-alive packet when idle
     * @default 30000
     */
    keepAliveInitialDelay?: number;
    /**
     * TCP Connection timeout setting
     * @default 10000
     */
    connectTimeoutMS?: number;
    /**
     * Version of IP stack. Can be 4, 6 or null
     * @default null
     *
     * If null, will attempt to connect with IPv6, and will fall back to IPv4 on failure
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
     */
    family?: 4 | 6 | null;
    /**
     * TCP Socket timeout setting
     * @default 360000
     */
    socketTimeoutMS?: number;
}

/**
 * Optional settings for creating a new Server instance
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Server.html
 */
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

/**
 * Optional settings for creating a new Mongos instance
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Mongos.html
 */
export interface MongosOptions extends SSLOptions, HighAvailabilityOptions {
    /**
     * Cutoff latency point in MS for MongoS proxy selection
     * @default 15
     */
    acceptableLatencyMS?: number;

    /**
     * Socket Options
     */
    socketOptions?: SocketOptions;
}

/**
 * Optional settings for creating a new ReplSet instance
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ReplSet.html
 */
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
     * Range of servers to pick when using NEAREST (lowest ping ms + the latency fence, ex: range of 1 to (1 + 15) ms)
     * @default 15
     */
    secondaryAcceptableLatencyMS?: number;
    /**
     * If the driver should connect even if no primary is available
     * @default false
     */
    connectWithNoPrimary?: boolean;
    /**
     * Optional socket options
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Server.html
     */
    socketOptions?: SocketOptions;
}

export type ProfilingLevel = "off" | "slow_only" | "all";

/**
 * Creates a new Db instance
 *
 * @param databaseName The name of the database this instance represents.
 * @param topology The server topology for the database.
 * @param options Optional settings
 * @returns Db instance
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html
 */
export class Db extends EventEmitter {
    constructor(databaseName: string, serverConfig: Server | ReplSet | Mongos, options?: DbCreateOptions);

    serverConfig: Server | ReplSet | Mongos;
    bufferMaxEntries: number;
    databaseName: string;
    options: any;
    native_parser: boolean;
    slaveOk: boolean;
    writeConcern: WriteConcern;

    /**
     * Add a user to the database
     *
     * @param username The username
     * @param password The password
     * @param options Optional settings
     * @param callback The command result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#addUser
     */
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: DbAddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: DbAddUserOptions, callback: MongoCallback<any>): void;
    /**
     * Return the Admin db instance
     *
     * @returns the new Admin db instance
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#admin
     */
    admin(): Admin;
    /**
     * Fetch a specific collection (containing the actual collection information).
     * If the application does not use strict mode you can use it without a callback in the following way: `const collection = db.collection('mycollection');`
     *
     * @param name The collection name you wish to access
     * @param options Optional settings
     * @param callback The collection result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#collection
     */
    collection<TSchema = DefaultSchema>(
        name: string,
        callback?: MongoCallback<Collection<TSchema>>,
    ): Collection<TSchema>;
    collection<TSchema = DefaultSchema>(
        name: string,
        options: DbCollectionOptions,
        callback?: MongoCallback<Collection<TSchema>>,
    ): Collection<TSchema>;
    /**
     * Fetch all collections for the current db.
     *
     * @param options Optional settings
     * @param callback The collection result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#collections
     */
    collections(): Promise<Array<Collection<Default>>>;
    collections(callback: MongoCallback<Array<Collection<Default>>>): void;
    /**
     * Execute a command
     *
     * @param command The command hash
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#command
     */
    command(command: object, callback: MongoCallback<any>): void;
    command(
        command: object,
        options?: { readPreference?: ReadPreferenceOrMode; session?: ClientSession },
    ): Promise<any>;
    command(
        command: object,
        options: { readPreference: ReadPreferenceOrMode; session?: ClientSession },
        callback: MongoCallback<any>,
    ): void;
    /**
     * Create a new collection on a server with the specified options. Use this to create capped collections.
     * More information about command options available at {@link https://docs.mongodb.com/v3.6/reference/command/create/}
     *
     * @param name The collection name we wish to access
     * @param options Optional settings
     * @param callback The results callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#createCollection
     */
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
    /**
     * Creates an index on the db and collection.
     *
     * @param name Name of the collection to create the index on
     * @param fieldOrSpec Defines the index
     * @param options Optional settings
     * @param callback The results callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#createIndex
     */
    createIndex(name: string, fieldOrSpec: string | object, callback: MongoCallback<any>): void;
    createIndex(name: string, fieldOrSpec: string | object, options?: IndexOptions): Promise<any>;
    createIndex(name: string, fieldOrSpec: string | object, options: IndexOptions, callback: MongoCallback<any>): void;
    /**
     * Drop a collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param name Name of collection to drop
     * @param options Optional settings
     * @param callback The results callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#dropCollection
     */
    dropCollection(name: string): Promise<boolean>;
    dropCollection(name: string, callback: MongoCallback<boolean>): void;
    /**
     * Drop a database, removing it permanently from the server.
     *
     * @param options Optional settings
     * @param callback The results callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#dropDatabase
     */
    dropDatabase(): Promise<any>;
    dropDatabase(callback: MongoCallback<any>): void;
    /**
     * Runs a command on the database as admin.
     *
     * @param command The command hash
     * @param options Optional Settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#executeDbAdminCommand
     */
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
    /**
     * Retrieves this collections index info.
     *
     * @param name The name of the collection
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#indexInformation
     */
    indexInformation(name: string, callback: MongoCallback<any>): void;
    indexInformation(name: string, options?: { full?: boolean; readPreference?: ReadPreferenceOrMode }): Promise<any>;
    indexInformation(
        name: string,
        options: { full?: boolean; readPreference?: ReadPreferenceOrMode },
        callback: MongoCallback<any>,
    ): void;
    /**
     * Get the list of all collection information for the specified db.
     *
     * @param filter Query to filter collections by
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#listCollections
     */
    listCollections(
        filter?: object,
        options?: {
            nameOnly?: boolean;
            batchSize?: number;
            readPreference?: ReadPreferenceOrMode;
            session?: ClientSession;
        },
    ): CommandCursor;
    /**
     * Retrieve the current profiling information for MongoDB
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#profilingInfo
     * @deprecated Query the system.profile collection directly.
     */
    profilingInfo(callback: MongoCallback<any>): void;
    profilingInfo(options?: { session?: ClientSession }): Promise<void>;
    profilingInfo(options: { session?: ClientSession }, callback: MongoCallback<void>): void;
    /**
     * Retrieve the current profiling Level for MongoDB
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#profilingLevel
     */
    profilingLevel(callback: MongoCallback<ProfilingLevel>): void;
    profilingLevel(options?: { session?: ClientSession }): Promise<ProfilingLevel>;
    profilingLevel(options: { session?: ClientSession }, callback: MongoCallback<ProfilingLevel>): void;
    /**
     * Remove a user from a database
     *
     * @param username The username
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#removeUser
     */
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: CommonOptions): Promise<any>;
    removeUser(username: string, options: CommonOptions, callback: MongoCallback<any>): void;
    /**
     * Rename a collection
     *
     * @param fromCollection Name of current collection to rename
     * @param toCollection New name of of the collection
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#renameCollection
     */
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
    /**
     * Set the current profiling level of MongoDB
     *
     * @param level The new profiling level (off, slow_only, all)
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#setProfilingLevel
     */
    setProfilingLevel(level: ProfilingLevel, callback: MongoCallback<ProfilingLevel>): void;
    setProfilingLevel(level: ProfilingLevel, options?: { session?: ClientSession }): Promise<ProfilingLevel>;
    setProfilingLevel(
        level: ProfilingLevel,
        options: { session?: ClientSession },
        callback: MongoCallback<ProfilingLevel>,
    ): void;
    /**
     * Get all the db statistics.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#stats
     */
    stats(callback: MongoCallback<any>): void;
    stats(options?: { scale?: number }): Promise<any>;
    stats(options: { scale?: number }, callback: MongoCallback<any>): void;
    /**
     * Unref all sockets
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#unref
     */
    unref(): void;
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this database.
     * Will ignore all changes to system collections.
     *
     * @param pipeline An array of {@link https://docs.mongodb.com/v3.6/reference/operator/aggregation-pipeline/ aggregation pipeline stages} through which to pass change stream documents.
     * This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options Optional settings
     * @returns ChangeStream instance
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#watch
     */
    watch<TSchema extends object = { _id: ObjectId }>(
        pipeline?: object[],
        options?: ChangeStreamOptions & { session?: ClientSession },
    ): ChangeStream<TSchema>;
}

export interface CommonOptions extends WriteConcern {
    session?: ClientSession;
}

/**
 * Creates a new Server instance
 *
 * @param host The host for the server, can be either an IP4, IP6 or domain socket style host.
 * @param port The server port if IP4.
 * @param options Optional settings
 * @returns Server instance
 * @deprecated
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Server.html
 */
export class Server extends EventEmitter {
    constructor(host: string, port: number, options?: ServerOptions);

    connections(): any[];
}

/**
 * Creates a new ReplSet instance
 *
 * @param servers A seedlist of servers participating in the replicaset.
 * @param options Optional settings
 * @deprecated
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ReplSet.html
 */
export class ReplSet extends EventEmitter {
    constructor(servers: Server[], options?: ReplSetOptions);

    connections(): any[];
}

/**
 * Creates a new Mongos instance
 *
 * @param servers A seedlist of servers participating in the replicaset.
 * @param options Optional settings
 * @deprecated
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Mongos.html
 */
export class Mongos extends EventEmitter {
    constructor(servers: Server[], options?: MongosOptions);

    connections(): any[];
}

/**
 * Optional settings for adding a user to the database
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#addUser
 */
export interface DbAddUserOptions extends CommonOptions {
    customData?: object;
    roles?: object[];
}

/**
 * Options for creating a new collection on a server
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#createCollection
 */
export interface CollectionCreateOptions extends CommonOptions {
    raw?: boolean;
    pkFactory?: object;
    readPreference?: ReadPreferenceOrMode;
    serializeFunctions?: boolean;
    /**
     * @deprecated
     * @see https://jira.mongodb.org/browse/NODE-2746
     */
    strict?: boolean;
    capped?: boolean;
    /**
     * @deprecated
     */
    autoIndexId?: boolean;
    size?: number;
    max?: number;
    flags?: number;
    storageEngine?: object;
    validator?: object;
    validationLevel?: "off" | "strict" | "moderate";
    validationAction?: "error" | "warn";
    indexOptionDefaults?: object;
    viewOn?: string;
    pipeline?: any[];
    collation?: CollationDocument;
}

/**
 * Options for fetching a specific collection.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#collection
 */
export interface DbCollectionOptions extends CommonOptions {
    raw?: boolean;
    pkFactory?: object;
    readPreference?: ReadPreferenceOrMode;
    serializeFunctions?: boolean;
    strict?: boolean;
    readConcern?: ReadConcern;
}

/**
 * Options for creating an index on the db and collection.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#createIndex
 */
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

/**
 * Create a new Admin instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @returns Collection instance
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html
 */
export interface Admin {
    /**
     * Add a user to the database.
     *
     * @param username The username
     * @param password The password
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#addUser
     */
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: AddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: AddUserOptions, callback: MongoCallback<any>): void;
    /**
     * Retrieve the server information for the current instance of the db client
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#buildInfo
     */
    buildInfo(options?: { session?: ClientSession }): Promise<any>;
    buildInfo(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    buildInfo(callback: MongoCallback<any>): void;
    /**
     * Execute a command
     *
     * @param command The command hash
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#command
     */
    command(command: object, callback: MongoCallback<any>): void;
    command(command: object, options?: { readPreference?: ReadPreferenceOrMode; maxTimeMS?: number }): Promise<any>;
    command(
        command: object,
        options: { readPreference?: ReadPreferenceOrMode; maxTimeMS?: number },
        callback: MongoCallback<any>,
    ): void;
    /**
     * List the available databases
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#listDatabases
     */
    listDatabases(options?: { nameOnly?: boolean; session?: ClientSession }): Promise<any>;
    listDatabases(options: { nameOnly?: boolean; session?: ClientSession }, callback: MongoCallback<any>): void;
    listDatabases(callback: MongoCallback<any>): void;
    /**
     * Ping the MongoDB server and retrieve results
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#ping
     */
    ping(options?: { session?: ClientSession }): Promise<any>;
    ping(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    ping(callback: MongoCallback<any>): void;
    /**
     * Remove a user from a database
     *
     * @param username The username
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#removeUser
     */
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: FSyncOptions): Promise<any>;
    removeUser(username: string, options: FSyncOptions, callback: MongoCallback<any>): void;
    /**
     * Get ReplicaSet status
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#replSetGetStatus
     */
    replSetGetStatus(options?: { session?: ClientSession }): Promise<any>;
    replSetGetStatus(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    replSetGetStatus(callback: MongoCallback<any>): void;
    /**
     * Retrieve the server information for the current instance of the db client
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#serverInfo
     */
    serverInfo(): Promise<any>;
    serverInfo(callback: MongoCallback<any>): void;
    /**
     * Retrieve this db's server status.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#serverStatus
     */
    serverStatus(options?: { session?: ClientSession }): Promise<any>;
    serverStatus(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    serverStatus(callback: MongoCallback<any>): void;
    /**
     * Validate an existing collection
     *
     * @param collectionNme The name of the collection to validate
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#validateCollection
     */
    validateCollection(collectionNme: string, callback: MongoCallback<any>): void;
    validateCollection(collectionNme: string, options?: object): Promise<any>;
    validateCollection(collectionNme: string, options: object, callback: MongoCallback<any>): void;
}

/**
 * Options for adding a user to the database
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#addUser
 */
export interface AddUserOptions extends CommonOptions {
    fsync: boolean;
    customData?: object;
    roles?: object[];
}

/**
 * Options for removing a user from the database
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Admin.html#removeUser
 */
export interface FSyncOptions extends CommonOptions {
    fsync?: boolean;
}

// TypeScript Omit (Exclude to be specific) does not work for objects with an "any" indexed type, and breaks discriminated unions
type EnhancedOmit<T, K> = string | number extends keyof T
    ? T // T has indexed type e.g. { _id: string; [k: string]: any; } or it is "any"
    : T extends any
    ? Pick<T, Exclude<keyof T, K>> // discriminated unions
    : never;

type ExtractIdType<TSchema> = TSchema extends { _id: infer U } // user has defined a type for _id
    ? {} extends U
        ? Exclude<U, {}>
        : unknown extends U
        ? ObjectId
        : U
    : ObjectId; // user has not defined _id on schema

// this makes _id optional
export type OptionalId<TSchema extends { _id?: any }> = ObjectId extends TSchema["_id"]
    ? // a Schema with ObjectId _id type or "any" or "indexed type" provided
      EnhancedOmit<TSchema, "_id"> & { _id?: ExtractIdType<TSchema> }
    : // a Schema provided but _id type is not ObjectId
      WithId<TSchema>;

// this adds _id as a required property
export type WithId<TSchema> = EnhancedOmit<TSchema, "_id"> & { _id: ExtractIdType<TSchema> };

/**
 * Create a new Collection instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html
 */
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
    /**
     * Execute an aggregation framework pipeline against the collection, needs MongoDB >= 2.2
     *
     * @param pipeline Array containing all the aggregation framework commands for the execution
     * @param options Optional settings
     * @param callback The command result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#aggregate
     */
    aggregate<T = TSchema>(callback: MongoCallback<AggregationCursor<T>>): AggregationCursor<T>;
    aggregate<T = TSchema>(pipeline: object[], callback: MongoCallback<AggregationCursor<T>>): AggregationCursor<T>;
    aggregate<T = TSchema>(
        pipeline?: object[],
        options?: CollectionAggregationOptions,
        callback?: MongoCallback<AggregationCursor<T>>,
    ): AggregationCursor<T>;
    /**
     * Perform a bulkWrite operation without a fluent API
     * If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param operations Bulk operations to perform
     * @param options Optional settings
     * @param callback The command result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#bulkWrite
     */
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
     * An estimated count of matching documents in the db to a query.
     *
     * @param query The query for the count
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#count
     * @deprecated Use `countDocuments` or `estimatedDocumentCount`
     */
    count(callback: MongoCallback<number>): void;
    count(query: FilterQuery<TSchema>, callback: MongoCallback<number>): void;
    count(query?: FilterQuery<TSchema>, options?: MongoCountPreferences): Promise<number>;
    count(query: FilterQuery<TSchema>, options: MongoCountPreferences, callback: MongoCallback<number>): void;
    /**
     * Gets the number of documents matching the filter
     * For a fast count of the total documents in a collection see `estimatedDocumentCount`.
     *
     * @param query The query for the count
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#countDocuments
     */
    countDocuments(callback: MongoCallback<number>): void;
    countDocuments(query: FilterQuery<TSchema>, callback: MongoCallback<number>): void;
    countDocuments(query?: FilterQuery<TSchema>, options?: MongoCountPreferences): Promise<number>;
    countDocuments(query: FilterQuery<TSchema>, options: MongoCountPreferences, callback: MongoCallback<number>): void;
    /**
     * Creates an index on the db and collection collection.
     *
     * @param fieldOrSpec Defines the index
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#createIndex
     */
    createIndex(fieldOrSpec: string | any, callback: MongoCallback<string>): void;
    createIndex(fieldOrSpec: string | any, options?: IndexOptions): Promise<string>;
    createIndex(fieldOrSpec: string | any, options: IndexOptions, callback: MongoCallback<string>): void;
    /**
     * Creates multiple indexes in the collection, this method is only supported for MongoDB 2.6 or higher.
     * Earlier version of MongoDB will throw a command not supported error.
     * **Note:** Unlike `createIndex`, this function takes in raw index specifications.
     * Index specifications are defined {@link http://docs.mongodb.org/manual/reference/command/createIndexes/ here}.
     *
     * @param indexSpecs An array of index specifications to be created
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#createIndexes
     */
    createIndexes(indexSpecs: IndexSpecification[], callback: MongoCallback<any>): void;
    createIndexes(indexSpecs: IndexSpecification[], options?: { session?: ClientSession }): Promise<any>;
    createIndexes(
        indexSpecs: IndexSpecification[],
        options: { session?: ClientSession },
        callback: MongoCallback<any>,
    ): void;
    /**
     * Delete multiple documents from a collection
     *
     * @param filter The Filter used to select the documents to remove
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteMany
     */
    deleteMany(filter: FilterQuery<TSchema>, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteMany(filter: FilterQuery<TSchema>, options?: CommonOptions): Promise<DeleteWriteOpResultObject>;
    deleteMany(
        filter: FilterQuery<TSchema>,
        options: CommonOptions,
        callback: MongoCallback<DeleteWriteOpResultObject>,
    ): void;
    /**
     * Delete a document from a collection
     *
     * @param filter The Filter used to select the document to remove
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteOne
     */
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
    /**
     * The distinct command returns a list of distinct values for the given key across a collection.
     *
     * @param key Field of the document to find distinct values for.
     * @param query The optional query for filtering the set of documents to which we apply the distinct filter.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#distinct
     */
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
    /**
     * Drop the collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#drop
     */
    drop(options?: { session: ClientSession }): Promise<any>;
    drop(callback: MongoCallback<any>): void;
    drop(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /**
     * Drops an index from this collection.
     *
     * @param indexName Name of the index to drop.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#dropIndex
     */
    dropIndex(indexName: string, callback: MongoCallback<any>): void;
    dropIndex(indexName: string, options?: CommonOptions & { maxTimeMS?: number }): Promise<any>;
    dropIndex(indexName: string, options: CommonOptions & { maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /**
     * Drops all indexes from this collection.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#dropIndexes
     */
    dropIndexes(options?: { session?: ClientSession; maxTimeMS?: number }): Promise<any>;
    dropIndexes(callback?: MongoCallback<any>): void;
    dropIndexes(options: { session?: ClientSession; maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /**
     * Gets an estimate of the count of documents in a collection using collection metadata.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#estimatedDocumentCount
     */
    estimatedDocumentCount(callback: MongoCallback<number>): void;
    estimatedDocumentCount(query: FilterQuery<TSchema>, callback: MongoCallback<number>): void;
    estimatedDocumentCount(query?: FilterQuery<TSchema>, options?: MongoCountPreferences): Promise<number>;
    estimatedDocumentCount(
        query: FilterQuery<TSchema>,
        options: MongoCountPreferences,
        callback: MongoCallback<number>,
    ): void;
    /**
     * Creates a cursor for a query that can be used to iterate over results from MongoDB
     *
     * @param query The cursor query object
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
     */
    find(query?: FilterQuery<TSchema>): Cursor<TSchema>;
    find(query: FilterQuery<TSchema>, options?: WithoutProjection<FindOneOptions<TSchema>>): Cursor<TSchema>;
    find<T = TSchema>(query: FilterQuery<TSchema>, options: FindOneOptions<T extends TSchema ? TSchema : T>): Cursor<T>;
    /**
     * Fetches the first document that matches the query
     *
     * @param query Query for find Operation
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne
     */
    findOne(filter: FilterQuery<TSchema>, callback: MongoCallback<TSchema>): void;
    findOne(
        filter: FilterQuery<TSchema>,
        options?: WithoutProjection<FindOneOptions<TSchema>>,
    ): Promise<TSchema | null>;
    findOne<T = TSchema>(
        filter: FilterQuery<TSchema>,
        options?: FindOneOptions<T extends TSchema ? TSchema : T>,
    ): Promise<T | null>;
    findOne(
        filter: FilterQuery<TSchema>,
        options: WithoutProjection<FindOneOptions<TSchema>>,
        callback: MongoCallback<TSchema | null>,
    ): void;
    findOne<T = TSchema>(
        filter: FilterQuery<TSchema>,
        options: FindOneOptions<T extends TSchema ? TSchema : T>,
        callback: MongoCallback<T extends TSchema ? TSchema : T | null>,
    ): void;
    /**
     * Find a document and delete it in one atomic operation. Requires a write lock for the duration of the operation.
     *
     * @param filter The Filter used to select the document to remove
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndDelete
     */
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
    /**
     * Find a document and replace it in one atomic operation. Requires a write lock for the duration of the operation.
     *
     * @param filter The Filter used to select the document to replace
     * @param replacement The Document that replaces the matching document
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndReplace
     */
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
    /**
     * Find a document and update it in one atomic operation. Requires a write lock for the duration of the operation.
     *
     * @param filter The Filter used to select the document to update
     * @param update Update operations to be performed on the document
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndUpdate
     */
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
    /**
     * Execute a geo search using a geo haystack index on a collection.
     *
     * @param x Point to search on the x axis, ensure the indexes are ordered in the same order.
     * @param y Point to search on the y axis, ensure the indexes are ordered in the same order.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#geoHaystackSearch
     * @deprecated See {@link https://docs.mongodb.com/v3.6/geospatial-queries/ geospatial queries docs} for current geospatial support
     */
    geoHaystackSearch(x: number, y: number, callback: MongoCallback<any>): void;
    geoHaystackSearch(x: number, y: number, options?: GeoHaystackSearchOptions): Promise<any>;
    geoHaystackSearch(x: number, y: number, options: GeoHaystackSearchOptions, callback: MongoCallback<any>): void;
    /**
     * Run a group command across a collection
     *
     * @param keys An object, array or function expressing the keys to group by.
     * @param condition An optional condition that must be true for a row to be considered.
     * @param initial Initial value of the aggregation counter object.
     * @param reduce The reduce function aggregates (reduces) the objects iterated.
     * @param finalize An optional function to be run on each item in the result set just before the item is returned.
     * @param command Specify if you wish to run using the internal group command or using eval, default is true.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#group
     * @deprecated MongoDB 3.6 or higher no longer supports the group command. We recommend rewriting using the aggregation framework.
     */
    group(
        keys: object | any[] | Function | Code,
        condition: object,
        initial: object,
        reduce: Function | Code,
        finalize: Function | Code,
        command: boolean,
        callback: MongoCallback<any>,
    ): void;
    group(
        keys: object | any[] | Function | Code,
        condition: object,
        initial: object,
        reduce: Function | Code,
        finalize: Function | Code,
        command: boolean,
        options?: { readPreference?: ReadPreferenceOrMode; session?: ClientSession },
    ): Promise<any>;
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
    /**
     * Retrieve all the indexes on the collection.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#indexes
     */
    indexes(options?: { session: ClientSession }): Promise<any>;
    indexes(callback: MongoCallback<any>): void;
    indexes(options: { session?: ClientSession }, callback: MongoCallback<any>): void;
    /**
     * Checks if one or more indexes exist on the collection, fails on first non-existing index
     *
     * @param indexes One or more index names to check.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#indexExists
     */
    indexExists(indexes: string | string[], callback: MongoCallback<boolean>): void;
    indexExists(indexes: string | string[], options?: { session: ClientSession }): Promise<boolean>;
    indexExists(
        indexes: string | string[],
        options: { session: ClientSession },
        callback: MongoCallback<boolean>,
    ): void;
    /**
     * Retrieves this collections index info.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#indexInformation
     */
    indexInformation(callback: MongoCallback<any>): void;
    indexInformation(options?: { full: boolean; session: ClientSession }): Promise<any>;
    indexInformation(options: { full: boolean; session: ClientSession }, callback: MongoCallback<any>): void;
    /**
     * Initiate an In order bulk write operation. Operations will be serially executed in the order they are added, creating a new operation for each switch in types.
     *
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#initializeOrderedBulkOp
     */
    initializeOrderedBulkOp(options?: CommonOptions): OrderedBulkOperation;
    /**
     * Initiate an Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.
     *
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#initializeUnorderedBulkOp
     */
    initializeUnorderedBulkOp(options?: CommonOptions): UnorderedBulkOperation;
    /**
     * Inserts a single document or a an array of documents into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param docs Documents to insert.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insert
     * @deprecated Use insertOne, insertMany or bulkWrite
     */
    insert(docs: OptionalId<TSchema>, callback: MongoCallback<InsertWriteOpResult<WithId<TSchema>>>): void;
    insert(
        docs: OptionalId<TSchema>,
        options?: CollectionInsertOneOptions,
    ): Promise<InsertWriteOpResult<WithId<TSchema>>>;
    insert(
        docs: OptionalId<TSchema>,
        options: CollectionInsertOneOptions,
        callback: MongoCallback<InsertWriteOpResult<WithId<TSchema>>>,
    ): void;
    /**
     * Inserts an array of documents into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param docs Documents to insert.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertMany
     */
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
    /**
     * Inserts a single document into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param doc Document to insert.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne
     */
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
    /**
     * Returns if the collection is a capped collection
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#isCapped
     */
    isCapped(options?: { session: ClientSession }): Promise<any>;
    isCapped(callback: MongoCallback<any>): void;
    isCapped(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /**
     * Get the list of all indexes information for the collection.
     *
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#listIndexes
     */
    listIndexes(options?: {
        batchSize?: number;
        readPreference?: ReadPreferenceOrMode;
        session?: ClientSession;
    }): CommandCursor;
    /**
     * Run Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection.
     *
     * @param map The mapping function.
     * @param reduce The reduce function.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#mapReduce
     */
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
    /**
     * Returns the options of the collection.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#options
     */
    options(options?: { session: ClientSession }): Promise<any>;
    options(callback: MongoCallback<any>): void;
    options(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /**
     * Return N number of parallel cursors for a collection allowing parallel reading of entire collection. There are
     * no ordering guarantees for returned results.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#parallelCollectionScan
     */
    parallelCollectionScan(callback: MongoCallback<Array<Cursor<any>>>): void;
    parallelCollectionScan(options?: ParallelCollectionScanOptions): Promise<Array<Cursor<any>>>;
    parallelCollectionScan(options: ParallelCollectionScanOptions, callback: MongoCallback<Array<Cursor<any>>>): void;
    /**
     * Reindex all indexes on the collection
     * Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#reIndex
     * @deprecated use db.command instead
     */
    reIndex(options?: { session: ClientSession }): Promise<any>;
    reIndex(callback: MongoCallback<any>): void;
    reIndex(options: { session: ClientSession }, callback: MongoCallback<any>): void;
    /**
     * Remove documents.
     *
     * @param selector The selector for the update operation.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#remove
     * @deprecated Use use deleteOne, deleteMany or bulkWrite
     */
    remove(selector: object, callback: MongoCallback<WriteOpResult>): void;
    remove(selector: object, options?: CommonOptions & { single?: boolean }): Promise<WriteOpResult>;
    remove(
        selector: object,
        options?: CommonOptions & { single?: boolean },
        callback?: MongoCallback<WriteOpResult>,
    ): void;
    /**
     * Rename the collection
     *
     * @param newName New name of of the collection.
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#rename
     */
    rename(newName: string, callback: MongoCallback<Collection<TSchema>>): void;
    rename(newName: string, options?: { dropTarget?: boolean; session?: ClientSession }): Promise<Collection<TSchema>>;
    rename(
        newName: string,
        options: { dropTarget?: boolean; session?: ClientSession },
        callback: MongoCallback<Collection<TSchema>>,
    ): void;
    /**
     * Replace a document in a collection with another document
     *
     * @param filter The Filter used to select the document to replace
     * @param doc The Document that replaces the matching document
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#replaceOne
     */
    replaceOne(filter: FilterQuery<TSchema>, doc: TSchema, callback: MongoCallback<ReplaceWriteOpResult>): void;
    replaceOne(filter: FilterQuery<TSchema>, doc: TSchema, options?: ReplaceOneOptions): Promise<ReplaceWriteOpResult>;
    replaceOne(
        filter: FilterQuery<TSchema>,
        doc: TSchema,
        options: ReplaceOneOptions,
        callback: MongoCallback<ReplaceWriteOpResult>,
    ): void;
    /**
     * Save a document. Simple full document replacement function. Not recommended for efficiency, use atomic
     * operators and update instead for more efficient operations.
     *
     * @param doc Document to save
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#save
     * @deprecated Use insertOne, insertMany, updateOne or updateMany
     */
    save(doc: TSchema, callback: MongoCallback<WriteOpResult>): void;
    save(doc: TSchema, options?: CommonOptions): Promise<WriteOpResult>;
    save(doc: TSchema, options: CommonOptions, callback: MongoCallback<WriteOpResult>): void;
    /**
     * Get all the collection statistics.
     *
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#stats
     */
    stats(callback: MongoCallback<CollStats>): void;
    stats(options?: { scale: number; session?: ClientSession }): Promise<CollStats>;
    stats(options: { scale: number; session?: ClientSession }, callback: MongoCallback<CollStats>): void;
    /**
     * Updates documents
     *
     * @param selector The selector for the update operation.
     * @param update The update operations to be applied to the documents
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#update
     * @deprecated use updateOne, updateMany or bulkWrite
     */
    update(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        callback: MongoCallback<WriteOpResult>,
    ): void;
    update(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options?: UpdateOneOptions & { multi?: boolean },
    ): Promise<WriteOpResult>;
    update(
        filter: FilterQuery<TSchema>,
        update: UpdateQuery<TSchema> | Partial<TSchema>,
        options: UpdateOneOptions & { multi?: boolean },
        callback: MongoCallback<WriteOpResult>,
    ): void;
    /**
     * Update multiple documents in a collection
     *
     * @param filter The Filter used to select the documents to update
     * @param update The update operations to be applied to the documents
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany
     */
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
    /**
     * Update a single document in a collection
     *
     * @param filter The Filter used to select the document to update
     * @param update The update operations to be applied to the document
     * @param options Optional settings
     * @param callback The command result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne
     */
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
     * Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this collection.
     *
     * @param pipeline An array of {@link https://docs.mongodb.com/v3.6/reference/operator/aggregation-pipeline/ aggregation pipeline stages}
     * through which to pass change stream documents. This allows for filtering (using `$match`) and manipulating the change stream documents.
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#watch
     */
    watch<T = TSchema>(
        pipeline?: object[],
        options?: ChangeStreamOptions & { session?: ClientSession },
    ): ChangeStream<T>;
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

/** It avoids using fields with not acceptable types */
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

/**
 * Values for the $meta aggregation pipeline operator
 *
 * @see https://docs.mongodb.com/v3.6/reference/operator/aggregation/meta/#proj._S_meta
 */
export type MetaSortOperators = "textScore" | "indexKey";

export type MetaProjectionOperators =
    | MetaSortOperators
    /** Only for Atlas Search https://docs.atlas.mongodb.com/reference/atlas-search/scoring/ */
    | "searchScore"
    /** Only for Atlas Search https://docs.atlas.mongodb.com/reference/atlas-search/highlighting/ */
    | "searchHighlights";

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
        | Unpacked<TSchema[key]>
        | ArrayOperator<Array<Unpacked<TSchema[key]>>>;
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

/**
 * Modifiers to use in update operations
 * @see https://docs.mongodb.com/v3.6/reference/operator/update
 *
 * @see https://docs.mongodb.com/v3.6/reference/operator/update-field/
 * @param $currentDate Sets the value of a field to current date, either as a Date or a Timestamp.
 * @param $inc Increments the value of the field by the specified amount.
 * @param $min Only updates the field if the specified value is less than the existing field value.
 * @param $max Only updates the field if the specified value is greater than the existing field value.
 * @param $mul Multiplies the value of the field by the specified amount.
 * @param $rename Renames a field.
 * @param $set Sets the value of a field in a document.
 * @param $setOnInsert Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
 * @param $unset Removes the specified field from a document.
 *
 * @see https://docs.mongodb.com/v3.6/reference/operator/update-array/
 * @param $addToSet Adds elements to an array only if they do not already exist in the set.
 * @param $pop Removes the first or last item of an array.
 * @param $pull Removes all array elements that match a specified query.
 * @param $push Adds an item to an array.
 * @param $pullAll Removes all matching values from an array.
 * @param $bit Performs bitwise `AND`, `OR`, and `XOR` updates of integer values.
 * @see https://docs.mongodb.com/v3.6/reference/operator/update-bitwise/
 *
 */
export type UpdateQuery<TSchema> = {
    $currentDate?: OnlyFieldsOfType<TSchema, Date | Timestamp, true | { $type: "date" | "timestamp" }>;
    $inc?: OnlyFieldsOfType<TSchema, NumericTypes | undefined>;
    $min?: MatchKeysAndValues<TSchema>;
    $max?: MatchKeysAndValues<TSchema>;
    $mul?: OnlyFieldsOfType<TSchema, NumericTypes | undefined>;
    $rename?: { [key: string]: string };
    $set?: MatchKeysAndValues<TSchema>;
    $setOnInsert?: MatchKeysAndValues<TSchema>;
    $unset?: OnlyFieldsOfType<TSchema, any, "" | 1 | true>;

    $addToSet?: SetFields<TSchema>;
    $pop?: OnlyFieldsOfType<TSchema, ReadonlyArray<any>, 1 | -1>;
    $pull?: PullOperator<TSchema>;
    $push?: PushOperator<TSchema>;
    $pullAll?: PullAllOperator<TSchema>;

    $bit?: {
        [key: string]: { [key in "and" | "or" | "xor"]?: number };
    };
};

/**
 * Available BSON types
 *
 * @see https://docs.mongodb.com/v3.6/reference/operator/query/type/#available-types
 */
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
    | "number"
    | "double"
    | "string"
    | "object"
    | "array"
    | "binData"
    | "undefined"
    | "objectId"
    | "bool"
    | "date"
    | "null"
    | "regex"
    | "dbPointer"
    | "javascript"
    | "symbol"
    | "javascriptWithScope"
    | "int"
    | "timestamp"
    | "long"
    | "decimal"
    | "minKey"
    | "maxKey";

/** @see https://docs.mongodb.com/v3.6/reference/operator/query-bitwise */
type BitwiseQuery =
    | number /** <numeric bitmask> */
    | Binary /** <BinData bitmask> */
    | number[]; /** [ <position1>, <position2>, ... ] */

// we can search using alternative types in mongodb e.g.
// string types can be searched using a regex in mongo
// array types can be searched using their element type
type RegExpForString<T> = T extends string ? RegExp | T : T;
type MongoAltQuery<T> = T extends ReadonlyArray<infer U> ? T | RegExpForString<U> : RegExpForString<T>;

/**
 * Available query selector types
 *
 * @param $eq Matches values that are equal to a specified value.
 * @param $gt Matches values that are greater than a specified value.
 * @param $gte Matches values that are greater than or equal to a specified value.
 * @param $in Matches values that are greater than or equal to a specified value.
 * @param $lt Matches values that are less than a specified value.
 * @param $lte Matches values that are less than or equal to a specified value.
 * @param $ne Matches all values that are not equal to a specified value.
 * @param $nin Matches none of the values specified in an array.
 *
 * @param $and Joins query clauses with a logical `AND` returns all documents that match the conditions of both clauses.
 * @param $not Inverts the effect of a query expression and returns documents that do not match the query expression.
 * @param $nor Joins query clauses with a logical `NOR` returns all documents that fail to match both clauses.
 * @param $or Joins query clauses with a logical `OR` returns all documents that match the conditions of either clause.
 *
 * @param $exists Matches documents that have the specified field.
 * @param $type Selects documents if a field is of the specified type.
 *
 * @param $expr Allows use of aggregation expressions within the query language.
 * @param $jsonSchema Validate documents against the given JSON Schema.
 * @param $mod Performs a modulo operation on the value of a field and selects documents with a specified result.
 * @param $regex Selects documents where values match a specified regular expression.
 * @param $text Performs text search.
 * @param $where Matches documents that satisfy a JavaScript expression.
 *
 * @param $geoIntersects Selects geometries that intersect with a {@link https://docs.mongodb.com/v3.6/reference/glossary/#term-geojson GeoJSON} geometry.
 * The {@link https://docs.mongodb.com/v3.6/core/2dsphere/ 2dsphere} index supports {@link https://docs.mongodb.com/v3.6/reference/operator/query/geoIntersects/#op._S_geoIntersects $geoIntersects}.
 * @param $geoWithin Selects geometries within a bounding {@link https://docs.mongodb.com/v3.6/reference/geojson/#geospatial-indexes-store-geojson GeoJSON geometry}.
 * The {@link https://docs.mongodb.com/v3.6/core/2dsphere/ 2dsphere} and {@link https://docs.mongodb.com/v3.6/core/2d/ 2d} indexes
 * support {@link https://docs.mongodb.com/v3.6/reference/operator/query/geoWithin/#op._S_geoWithin $geoWithin}.
 * @param $near Returns geospatial objects in proximity to a point. Requires a geospatial index. The {@link https://docs.mongodb.com/v3.6/core/2dsphere/ 2dsphere}
 * and {@link https://docs.mongodb.com/v3.6/core/2d/ 2d} indexes support {@link https://docs.mongodb.com/v3.6/reference/operator/query/near/#op._S_near $near}.
 * @param $nearSphere Returns geospatial objects in proximity to a point on a sphere. Requires a geospatial index. The {@link https://docs.mongodb.com/v3.6/core/2dsphere/ 2dsphere} and
 * {@link https://docs.mongodb.com/v3.6/reference/operator/query/nearSphere/#op._S_nearSphere 2d} indexes support
 * {@link https://docs.mongodb.com/v3.6/reference/operator/query/nearSphere/#op._S_nearSphere $nearSphere}.
 *
 * @param $all Matches arrays that contain all elements specified in the query.
 * @param $elemMatch Selects documents if element in the array field matches all the specified
 * {@link https://docs.mongodb.com/v3.6/reference/operator/query/elemMatch/#op._S_elemMatch $elemMatch} conditions.
 * @param $size Selects documents if the array field is a specified size.
 *
 * @param $bitsAllClear Matches numeric or binary values in which a set of bit positions all have a value of `0`.
 * @param $bitsAllSet Matches numeric or binary values in which a set of bit positions all have a value of `1`.
 * @param $bitsAnyClear Matches numeric or binary values in which any bit from a set of bit positions has a value of `0`.
 * @param $bitsAnySet Matches numeric or binary values in which any bit from a set of bit positions has a value of `1`.
 *
 * @see https://docs.mongodb.com/v3.6/reference/operator/query/#query-selectors
 */
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
    /** @see https://docs.mongodb.com/v3.6/reference/operator/query/and/#op._S_and */
    $and?: Array<FilterQuery<T>>;
    /** @see https://docs.mongodb.com/v3.6/reference/operator/query/nor/#op._S_nor */
    $nor?: Array<FilterQuery<T>>;
    /** @see https://docs.mongodb.com/v3.6/reference/operator/query/or/#op._S_or */
    $or?: Array<FilterQuery<T>>;
    /** @see https://docs.mongodb.com/v3.6/reference/operator/query/text */
    $text?: {
        $search: string;
        $language?: string;
        $caseSensitive?: boolean;
        $diacriticSensitive?: boolean;
    };
    /** @see https://docs.mongodb.com/v3.6/reference/operator/query/where/#op._S_where */
    $where?: string | Function;
    /** @see https://docs.mongodb.com/v3.6/reference/operator/query/comment/#op._S_comment */
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

/** @see https://docs.mongodb.com/v3.6/reference/method/db.collection.bulkWrite/#insertone */
export type BulkWriteInsertOneOperation<TSchema> = {
    insertOne: {
        document: OptionalId<TSchema>;
    };
};

/**
 * Options for the updateOne and updateMany operations
 *
 * @param arrayFilters Optional. An array of filter documents that determines which array elements to modify for an update operation on an array field.
 * @param collaction Optional. Specifies the collation to use for the operation.
 * @param filter The selection criteria for the update. The same {@link https://docs.mongodb.com/v3.6/reference/operator/query/#query-selectors query selectors}
 * as in the {@link https://docs.mongodb.com/v3.6/reference/method/db.collection.find/#db.collection.find find()} method are available.
 * @param update The modifications to apply.
 * @param upsert When true, the operation either creates a new document if no documents match the `filter` or updates the document(s) that match the `filter`.
 * For more details see {@link https://docs.mongodb.com/v3.6/reference/method/db.collection.update/#upsert-behavior upsert behavior}
 * @see https://docs.mongodb.com/v3.6/reference/method/db.collection.bulkWrite/#updateone-and-updatemany
 */
export type BulkWriteUpdateOperation<TSchema> = {
    arrayFilters?: object[];
    collation?: object;
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

/**
 * Options for the replaceOne operation
 *
 * @param collation Optional. Specifies the {@link https://docs.mongodb.com/v3.6/reference/bson-type-comparison-order/#collation collation} to use for the operation.
 * @param filter The selection criteria for the update. The same {@link https://docs.mongodb.com/v3.6/reference/operator/query/#query-selectors query selectors}
 * as in the {@link https://docs.mongodb.com/v3.6/reference/method/db.collection.find/#db.collection.find find()} method are available.
 * @param replacement The replacement document.
 * @param upsert When true, replaceOne either inserts the document from the `replacement` parameter if no document matches the `filter`
 * or replaces the document that matches the `filter` with the `replacement` document.
 * For more details see {@link https://docs.mongodb.com/v3.6/reference/method/db.collection.update/#upsert-behavior upsert behavior}
 * @see https://docs.mongodb.com/v3.6/reference/method/db.collection.bulkWrite/#replaceone
 */
export type BulkWriteReplaceOneOperation<TSchema> = {
    replaceOne: {
        collation?: object;
        filter: FilterQuery<TSchema>;
        replacement: TSchema;
        upsert?: boolean;
    };
};

/**
 * Options for the deleteOne and deleteMany operations
 *
 * @param collation Optional. Specifies the collation to use for the operation.
 * @param filter Specifies deletion criteria using {@link https://docs.mongodb.com/v3.6/reference/operator/ query operators}.
 * @see https://docs.mongodb.com/v3.6/reference/method/db.collection.bulkWrite/#deleteone-and-deletemany
 */
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

/**
 * Possible operations with the Collection.bulkWrite method
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#bulkWrite
 */
export type BulkWriteOperation<TSchema> =
    | BulkWriteInsertOneOperation<TSchema>
    | BulkWriteUpdateOneOperation<TSchema>
    | BulkWriteUpdateManyOperation<TSchema>
    | BulkWriteReplaceOneOperation<TSchema>
    | BulkWriteDeleteOneOperation<TSchema>
    | BulkWriteDeleteManyOperation<TSchema>;

/**
 * Returned object for the CollStats command in db.runCommand
 *
 * @see https://docs.mongodb.org/manual/reference/command/collStats/
 */
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
        "bloom filter false positives": number;
        "bloom filter hits": number;
        "bloom filter misses": number;
        "bloom filter pages evicted from cache": number;
        "bloom filter pages read into cache": number;
        "bloom filters in the LSM tree": number;
        "chunks in the LSM tree": number;
        "highest merge generation in the LSM tree": number;
        "queries that could have benefited from a Bloom filter that did not exist": number;
        "sleep for LSM checkpoint throttle": number;
        "sleep for LSM merge throttle": number;
        "total size of bloom filters": number;
    };
    "block-manager": {
        "allocations requiring file extension": number;
        "blocks allocated": number;
        "blocks freed": number;
        "checkpoint size": number;
        "file allocation unit size": number;
        "file bytes available for reuse": number;
        "file magic number": number;
        "file major version number": number;
        "file size in bytes": number;
        "minor version number": number;
    };
    btree: {
        "btree checkpoint generation": number;
        "column-store fixed-size leaf pages": number;
        "column-store internal pages": number;
        "column-store variable-size RLE encoded values": number;
        "column-store variable-size deleted values": number;
        "column-store variable-size leaf pages": number;
        "fixed-record size": number;
        "maximum internal page key size": number;
        "maximum internal page size": number;
        "maximum leaf page key size": number;
        "maximum leaf page size": number;
        "maximum leaf page value size": number;
        "maximum tree depth": number;
        "number of key/value pairs": number;
        "overflow pages": number;
        "pages rewritten by compaction": number;
        "row-store internal pages": number;
        "row-store leaf pages": number;
    };
    cache: {
        "bytes currently in the cache": number;
        "bytes read into cache": number;
        "bytes written from cache": number;
        "checkpoint blocked page eviction": number;
        "data source pages selected for eviction unable to be evicted": number;
        "hazard pointer blocked page eviction": number;
        "in-memory page passed criteria to be split": number;
        "in-memory page splits": number;
        "internal pages evicted": number;
        "internal pages split during eviction": number;
        "leaf pages split during eviction": number;
        "modified pages evicted": number;
        "overflow pages read into cache": number;
        "overflow values cached in memory": number;
        "page split during eviction deepened the tree": number;
        "page written requiring lookaside records": number;
        "pages read into cache": number;
        "pages read into cache requiring lookaside entries": number;
        "pages requested from the cache": number;
        "pages written from cache": number;
        "pages written requiring in-memory restoration": number;
        "tracked dirty bytes in the cache": number;
        "unmodified pages evicted": number;
    };
    cache_walk: {
        "Average difference between current eviction generation when the page was last considered": number;
        "Average on-disk page image size seen": number;
        "Clean pages currently in cache": number;
        "Current eviction generation": number;
        "Dirty pages currently in cache": number;
        "Entries in the root page": number;
        "Internal pages currently in cache": number;
        "Leaf pages currently in cache": number;
        "Maximum difference between current eviction generation when the page was last considered": number;
        "Maximum page size seen": number;
        "Minimum on-disk page image size seen": number;
        "On-disk page image sizes smaller than a single allocation unit": number;
        "Pages created in memory and never written": number;
        "Pages currently queued for eviction": number;
        "Pages that could not be queued for eviction": number;
        "Refs skipped during cache traversal": number;
        "Size of the root page": number;
        "Total number of pages currently in cache": number;
    };
    compression: {
        "compressed pages read": number;
        "compressed pages written": number;
        "page written failed to compress": number;
        "page written was too small to compress": number;
        "raw compression call failed, additional data available": number;
        "raw compression call failed, no additional data available": number;
        "raw compression call succeeded": number;
    };
    cursor: {
        "bulk-loaded cursor-insert calls": number;
        "create calls": number;
        "cursor-insert key and value bytes inserted": number;
        "cursor-remove key bytes removed": number;
        "cursor-update value bytes updated": number;
        "insert calls": number;
        "next calls": number;
        "prev calls": number;
        "remove calls": number;
        "reset calls": number;
        "restarted searches": number;
        "search calls": number;
        "search near calls": number;
        "truncate calls": number;
        "update calls": number;
    };
    reconciliation: {
        "dictionary matches": number;
        "fast-path pages deleted": number;
        "internal page key bytes discarded using suffix compression": number;
        "internal page multi-block writes": number;
        "internal-page overflow keys": number;
        "leaf page key bytes discarded using prefix compression": number;
        "leaf page multi-block writes": number;
        "leaf-page overflow keys": number;
        "maximum blocks required for a page": number;
        "overflow values written": number;
        "page checksum matches": number;
        "page reconciliation calls": number;
        "page reconciliation calls for eviction": number;
        "pages deleted": number;
    };
}

/**
 * Options for Collection.aggregate
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#aggregate
 */
export interface CollectionAggregationOptions {
    /**
     * The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
     */
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

/**
 * Options for Collection.insertMany
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertMany
 */
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

/**
 * Options for Collection.bulkWrite
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#bulkWrite
 */
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

/**
 * Returning object for Collection.bulkWrite operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~BulkWriteOpResult
 */
export interface BulkWriteOpResultObject {
    insertedCount?: number;
    matchedCount?: number;
    modifiedCount?: number;
    deletedCount?: number;
    upsertedCount?: number;
    insertedIds?: { [index: number]: any };
    upsertedIds?: { [index: number]: any };
    result?: any;
}

/**
 * Options for Collection.count
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#count
 */
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

/**
 * Options for Collection.distinct
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#distinct
 */
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

/**
 * Returning object from delete write operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~deleteWriteOpResult
 */
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

/**
 * Returning object from findAndModify operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~findAndModifyWriteOpResult
 */
export interface FindAndModifyWriteOpResultObject<TSchema> {
    //Document returned from findAndModify command.
    value?: TSchema;
    //The raw lastErrorObject returned from the command.
    lastErrorObject?: any;
    //Is 1 if the command executed correctly.
    ok?: number;
}

/**
 * Returning object from findAndReplace operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndReplace
 */
export interface FindOneAndReplaceOption<T> extends CommonOptions {
    projection?: SchemaMember<T, ProjectionOperators | number | boolean | any>;
    sort?: SortOptionObject<T>;
    maxTimeMS?: number;
    upsert?: boolean;
    returnDocument?: 'after' | 'before';
    /** @deprecated Use returnDocument */
    returnOriginal?: boolean;
    collation?: CollationDocument;
}

/**
 * Possible projection operators
 *
 * @see https://docs.mongodb.com/v3.6/reference/operator/projection/
 */
export interface ProjectionOperators {
    /** @see https://docs.mongodb.com/v3.6/reference/operator/projection/elemMatch/#proj._S_elemMatch */
    $elemMatch?: object;
    /** @see https://docs.mongodb.com/v3.6/reference/operator/projection/slice/#proj._S_slice */
    $slice?: number | [number, number];
    $meta?: MetaProjectionOperators;
}

/**
 * Returning object from findOneAndUpdate operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndUpdate
 */
export interface FindOneAndUpdateOption<T> extends FindOneAndReplaceOption<T> {
    arrayFilters?: object[];
}

/**
 * Returning object from findOneAndDelete operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndDelete
 */
export interface FindOneAndDeleteOption<T> {
    projection?: SchemaMember<T, ProjectionOperators | number | boolean | any>;
    sort?: SortOptionObject<T>;
    maxTimeMS?: number;
    session?: ClientSession;
    collation?: CollationDocument;
}

/**
 * Options for Collection.geoHaystackSearch
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#geoHaystackSearch
 */
export interface GeoHaystackSearchOptions {
    readPreference?: ReadPreferenceOrMode;
    maxDistance?: number;
    search?: object;
    limit?: number;
    session?: ClientSession;
}

/**
 * A class representation of the BSON Code type.
 *
 * @param name a string or function.
 * @param scope an optional scope for the function.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Code.html
 */
export class Code {
    constructor(code: string | Function, scope?: object);
    code: string | Function;
    scope: any;
}

/**
 * Create a new OrderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/OrderedBulkOperation.html
 */
export interface OrderedBulkOperation {
    length: number;
    /**
     * Execute the bulk operation
     *
     * @param _writeConcern Optional write concern. Can also be specified through options
     * @param options Optional settings
     * @param callback A callback that will be invoked when bulkWrite finishes/errors
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/OrderedBulkOperation.html#execute
     */
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    /**
     * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
     * Returns a builder object used to complete the definition of the operation.
     *
     * @param selector The selector for the bulk operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-q q documentation}
     * @returns helper object with which the write operation can be defined.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/OrderedBulkOperation.html#find
     */
    find(selector: object): FindOperators;
    /**
     * Add a single insert document to the bulk operation
     *
     * @param document the document to insert
     * @returns reference to self
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/OrderedBulkOperation.html#insert
     */
    insert(document: object): OrderedBulkOperation;
}

/**
 * Returning upserted object from bulkWrite operations
 *
 * @see https://docs.mongodb.com/v3.6/reference/method/BulkWriteResult/index.html#BulkWriteResult.upserted
 */
export interface BulkWriteResultUpsertedIdObject {
    index: number;
    _id: ObjectId;
}

/**
 * Returning object from bulkWrite operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/BulkWriteResult.html
 */
export interface BulkWriteResult {
    /**
     * Evaluates to `true` if the bulk operation correctly executes
     */
    ok: boolean;

    /**
     * The number of documents inserted, excluding upserted documents.
     */
    nInserted: number;

    /**
     * The number of documents selected for update.
     *
     * If the update operation results in no change to the document,
     * e.g. `$set` expression updates the value to the current value,
     * nMatched can be greater than nModified.
     */
    nMatched: number;

    /**
     * The number of existing documents updated.
     *
     * If the update/replacement operation results in no change to the document,
     * such as setting the value of the field to its current value,
     * nModified can be less than nMatched
     */
    nModified: number;

    /**
     * The number of documents inserted by an {@link https://docs.mongodb.com/v3.6/reference/method/db.collection.update/#upsert-parameter upsert}.
     */
    nUpserted: number;

    /**
     * The number of documents removed.
     */
    nRemoved: number;

    /**
     * Returns an array of all inserted ids
     */
    getInsertedIds(): object[];
    /**
     * Retrieve lastOp if available
     */
    getLastOp(): object;
    /**
     * Returns raw internal result
     */
    getRawResponse(): object;

    /**
     * Returns the upserted id at the given index
     *
     * @param index the number of the upserted id to return, returns `undefined` if no result for passed in index
     */
    getUpsertedIdAt(index: number): BulkWriteResultUpsertedIdObject;

    /**
     * Returns an array of all upserted ids
     */
    getUpsertedIds(): BulkWriteResultUpsertedIdObject[];
    /**
     * Retrieve the write concern error if any
     */
    getWriteConcernError(): WriteConcernError;

    /**
     * Returns a specific write error object
     *
     * @param index of the write error to return, returns `null` if there is no result for passed in index
     */
    getWriteErrorAt(index: number): WriteError;

    /**
     * Returns the number of write errors off the bulk operation
     */
    getWriteErrorCount(): number;
    /**
     * Retrieve all write errors
     */
    getWriteErrors(): object[];
    /**
     * Returns `true` if the bulk operation contains a write error
     */
    hasWriteErrors(): boolean;
}

/**
 * An error that occurred during a BulkWrite on the server.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/WriteError.html
 */
export interface WriteError {
    /**
     * Write concern error code.
     */
    code: number;
    /**
     * Write concern error original bulk operation index.
     */
    index: number;
    /**
     * Write concern error message.
     */
    errmsg: string;
}

/**
 * An error representing a failure by the server to apply the requested write concern to the bulk operation.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/WriteConcernError.html
 */
export interface WriteConcernError {
    /**
     * Write concern error code.
     */
    code: number;
    /**
     * Write concern error message.
     */
    errmsg: string;
}

/**
 * A builder object that is returned from {@link https://mongodb.github.io/node-mongodb-native/3.6/api/BulkOperationBase.html#find BulkOperationBase#find}.
 * Is used to build a write operation that involves a query filter.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html
 */
export interface FindOperators {
    /**
     * Add a delete many operation to the bulk operation
     *
     * @returns reference to the parent BulkOperation
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#delete
     */
    delete(): OrderedBulkOperation;
    /**
     * Add a delete one operation to the bulk operation
     *
     * @returns reference to the parent BulkOperation
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#deleteOne
     */
    deleteOne(): OrderedBulkOperation;
    /**
     * Backwards compatibility for {@link https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#delete delete()}
     * @deprecated As of version 3.6.7
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#remove
     */
    remove(): OrderedBulkOperation;
    /**
     * Backwards compatibility for {@link https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#deleteOne deleteOne()}
     * @deprecated As of version 3.6.7
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#removeOne
     */
    removeOne(): OrderedBulkOperation;
    /**
     * Add a replace one operation to the bulk operation
     *
     * @param replacement the new document to replace the existing one with
     * @returns reference to the parent BulkOperation
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#replaceOne
     */
    replaceOne(replacement: object): OrderedBulkOperation;
    /**
     * Add a multiple update operation to the bulk operation
     *
     * @param updateDocument An update field for an update operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-u u documentation}
     * @param options Optional settings
     * @returns reference to the parent BulkOperation
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#update
     */
    update(updateDocument: object, options?: { hint: object }): OrderedBulkOperation;
    /**
     * Add a single update operation to the bulk operation
     *
     * @param updateDocument An update field for an update operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-u u documentation}
     * @param options Optional settings
     * @returns reference to the parent BulkOperation
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#updateOne
     */
    updateOne(updateDocument: object, options?: { hint: object }): OrderedBulkOperation;
    /**
     * Upsert modifier for update bulk operation, noting that this operation is an upsert.
     *
     * @returns reference to self
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/FindOperators.html#upsert
     */
    upsert(): FindOperators;
}

/**
 * Create a new UnorderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/UnorderedBulkOperation.html
 */
export interface UnorderedBulkOperation {
    /**
     * Get the number of operations in the bulk.
     */
    length: number;
    /**
     * Execute the bulk operation
     *
     * @param _writeConcern Optional write concern. Can also be specified through options.
     * @param options Optional settings
     * @param callback A callback that will be invoked when bulkWrite finishes/errors
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/UnorderedBulkOperation.html#execute
     */
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    /**
     * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
     * Returns a builder object used to complete the definition of the operation.
     *
     * @param selector The selector for the bulk operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-q q documentation}
     * @returns helper object with which the write operation can be defined.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/UnorderedBulkOperation.html#find
     */
    find(selector: object): FindOperators;
    /**
     * Add a single insert document to the bulk operation
     *
     * @param document the document to insert
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/UnorderedBulkOperation.html#insert
     */
    insert(document: object): UnorderedBulkOperation;
}

/**
 * Options for Collection.findOne operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne
 */
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

/**
 * Options for Collection.insertOne operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne
 */
export interface CollectionInsertOneOptions extends CommonOptions {
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
}

/**
 * Returning object from insert write operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertWriteOpResult
 */
export interface InsertWriteOpResult<TSchema extends { _id: any }> {
    insertedCount: number;
    ops: TSchema[];
    insertedIds: { [key: number]: TSchema["_id"] };
    connection: any;
    result: { ok: number; n: number };
}

/**
 * Returning object from insertOne write operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpResult
 */
export interface InsertOneWriteOpResult<TSchema extends { _id: any }> {
    insertedCount: number;
    ops: TSchema[];
    insertedId: TSchema["_id"];
    connection: any;
    result: { ok: number; n: number };
}

/**
 *  Options for Collection.parallelCollectionScan operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#parallelCollectionScan
 */
export interface ParallelCollectionScanOptions {
    readPreference?: ReadPreferenceOrMode;
    batchSize?: number;
    numCursors?: number;
    raw?: boolean;
    session?: ClientSession;
}

/**
 * Options for Collection.replaceOne operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#replaceOne
 */
export interface ReplaceOneOptions extends CommonOptions {
    upsert?: boolean;
    bypassDocumentValidation?: boolean;
}

/**
 * Options for Collection.updateOne operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne
 */
export interface UpdateOneOptions extends ReplaceOneOptions {
    arrayFilters?: object[];
}

/**
 * Options for Collection.updateMany operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany
 */
export interface UpdateManyOptions extends CommonOptions {
    upsert?: boolean;
    arrayFilters?: object[];
}

/**
 * Returning object from update write operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~updateWriteOpResult
 */
export interface UpdateWriteOpResult {
    result: { ok: number; n: number; nModified: number };
    connection: any;
    matchedCount: number;
    modifiedCount: number;
    upsertedCount: number;
    upsertedId: { _id: ObjectId };
}

/**
 * Returning object from replace write operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~updateWriteOpResult
 */
export interface ReplaceWriteOpResult extends UpdateWriteOpResult {
    ops: any[];
}

/**
 * Options for Collection.mapReduce operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#mapReduce
 */
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

/**
 * Returning object from write operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~WriteOpResult
 */
export interface WriteOpResult {
    ops: any[];
    connection: any;
    result: any;
}

/**
 * Callback for cursor operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#~resultCallback
 */
export type CursorResult = object | null | boolean;

type Default = any;
type DefaultSchema = any;

/**
 * Creates a new Cursor instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html
 */
export class Cursor<T = Default> extends Readable {
    [Symbol.asyncIterator](): AsyncIterableIterator<T>;
    sortValue: string;
    timeout: boolean;
    readPreference: ReadPreference;
    /**
     * Add a cursor flag to the cursor
     *
     * @param flag The flag to set, must be one of following ['`tailable`', '`oplogReplay`', '`noCursorTimeout`', '`awaitData`', '`partial`'].
     * @param value The flag boolean value.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#addCursorFlag
     */
    addCursorFlag(flag: string, value: boolean): Cursor<T>;
    /**
     * Add a query modifier to the cursor query
     *
     * @param name The query modifier (must start with $, such as `$orderby` etc)
     * @param value The modifier value.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#addQueryModifier
     */
    addQueryModifier(name: string, value: boolean | string | number): Cursor<T>;
    /**
     * Set the batch size for the cursor.
     * The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/find/ find command documentation}.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#batchSize
     */
    batchSize(value: number): Cursor<T>;
    /**
     * Clone the cursor
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#clone
     */
    clone(): Cursor<T>; // still returns the same type
    /**
     * Close the cursor, sending a KillCursor command and emitting close.
     *
     * @param options Optional settings
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#close
     */
    close(options?: { skipKillCursors: boolean }): Promise<CursorResult>;
    close(options: { skipKillCursors: boolean }, callback: MongoCallback<CursorResult>): void;
    close(callback: MongoCallback<CursorResult>): void;
    /**
     * Set the collation options for the cursor.
     *
     * @param value The cursor collation options (MongoDB 3.4 or higher) settings for update operation (see 3.4 documentation for available fields).
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#collation
     */
    collation(value: CollationDocument): Cursor<T>;
    /**
     * Add a comment to the cursor query allowing for tracking the comment in the log.
     *
     * @param value The comment attached to this query.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#comment
     */
    comment(value: string): Cursor<T>;
    /**
     * Get the count of documents for this cursor
     *
     * @param applySkipLimit Should the count command apply limit and skip settings on the cursor or in the passed in options.
     * @param options Optional settings
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#count
     */
    count(callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, callback: MongoCallback<number>): void;
    count(options: CursorCommentOptions, callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback<number>): void;
    count(applySkipLimit?: boolean, options?: CursorCommentOptions): Promise<number>;
    /**
     * Execute the explain for the cursor
     * For backwards compatibility, a verbosity of true is interpreted as `allPlansExecution`
     * and false as `queryPlanner`. Prior to server version 3.6, `aggregate()`
     * ignores the verbosity parameter and executes in `queryPlanner`.
     *
     * @param verbosity An optional mode in which to run the explain.
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#explain
     */
    explain(verbosity?: string | boolean, callback?: MongoCallback<CursorResult>): Promise<CursorResult>;
    explain(callback?: MongoCallback<CursorResult>): void;
    /**
     * Set the cursor query
     *
     * @param filter The filter object used for the cursor
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#filter
     */
    filter(filter: object): Cursor<T>;
    /**
     * Iterates over all the documents for this cursor using the iterator, callback pattern.
     *
     * @param iterator The iteration callback
     * @param callback The end callback
     * @returns no callback supplied
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#forEach
     */
    forEach(iterator: IteratorCallback<T>, callback: EndCallback): void;
    forEach(iterator: IteratorCallback<T>): Promise<void>;
    /**
     * Check if there is any document still available in the cursor
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#hasNext
     */
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    /**
     * Set the cursor hint
     *
     * @param hint If specified, then the query system will only consider plans using the hinted index.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#hint
     */
    hint(hint: string | object): Cursor<T>;
    /**
     * Is the cursor closed
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#isClosed
     */
    isClosed(): boolean;
    /**
     * Set the limit for the cursor
     *
     * @param value The limit for the cursor query
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#limit
     */
    limit(value: number): Cursor<T>;
    /**
     * Map all documents using the provided function
     *
     * @param transform The mapping transformation method
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#map
     */
    map<U>(transform: (document: T) => U): Cursor<U>;
    /**
     * Set the cursor max
     *
     * @param max Specify a $max value to specify the exclusive upper bound for a specific index in order to constrain the results of find().
     * The $max specifies the upper bound for all keys of a specific index in order.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#max
     */
    max(max: object): Cursor<T>;
    /**
     * Set a maxAwaitTimeMS on a tailing cursor query to allow to customize the timeout value for the option awaitData (Only supported on MongoDB 3.2 or higher, ignored otherwise)
     *
     * @param value Number of milliseconds to wait before aborting the tailed query
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#maxAwaitTimeMS
     */
    maxAwaitTimeMS(value: number): Cursor<T>;
    /**
     * Set the cursor maxScan
     *
     * @param maxScan Constrains the query to only scan the specified number of documents when fulfilling the query
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#maxScan
     */
    maxScan(maxScan: object): Cursor<T>;
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value Number of milliseconds to wait before aborting the query.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#maxTimeMS
     */
    maxTimeMS(value: number): Cursor<T>;
    /**
     * Set the cursor min
     *
     * @param min Specify a $min value to specify the inclusive lower bound for a specific index in order to constrain the results of find().
     * The $min specifies the lower bound for all keys of a specific index in order.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#min
     */
    min(min: object): Cursor<T>;
    /**
     * Get the next available document from the cursor, returns null if no more documents are available.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#next
     */
    next(): Promise<T | null>;
    next(callback: MongoCallback<T | null>): void;
    /**
     * Sets a field projection for the query
     *
     * @param value The field projection object
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#project
     */
    project<U = T>(value: SchemaMember<T, ProjectionOperators | number | boolean | any>): Cursor<U>;
    /**
     * The read() method pulls some data out of the internal buffer and returns it. If there is no data available, then it will return null.
     *
     * @param size Optional argument to specify how much data to read.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#read
     */
    read(size?: number): string | Buffer | void;
    /**
     * Set the cursor returnKey. If set to true, modifies the cursor to only return the index field or fields for the results of the query, rather than documents.
     * If set to true and the query does not use an index to perform the read operation, the returned documents will not contain any fields.
     *
     * @param returnKey the returnKey value.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#returnKey
     */
    returnKey(returnKey: boolean): Cursor<T>;
    /**
     * Resets the cursor
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#rewind
     */
    rewind(): void;
    /**
     * Set a node.js specific cursor option
     *
     * @param field The cursor option to set ['numberOfRetries', 'tailableRetryInterval'].
     * @param value The field value
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#setCursorOption
     */
    setCursorOption(field: string, value: object): Cursor<T>;
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference The new read preference for the cursor
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#setReadPreference
     */
    setReadPreference(readPreference: ReadPreferenceOrMode): Cursor<T>;
    /**
     * Set the cursor showRecordId
     *
     * @param showRecordId The $showDiskLoc option has now been deprecated and replaced with the showRecordId field. $showDiskLoc will still be accepted for OP_QUERY stye find.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#showRecordId
     */
    showRecordId(showRecordId: boolean): Cursor<T>;
    /**
     * Set the skip for the cursor
     *
     * @param value The skip for the cursor query.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#skip
     */
    skip(value: number): Cursor<T>;
    /**
     * Set the cursor snapshot
     *
     * @param snapshot The $snapshot operator prevents the cursor from returning a document more than once because an intervening write operation results in a move of the document.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#snapshot
     */
    snapshot(snapshot: object): Cursor<T>;
    /**
     * Sets the sort order of the cursor query
     *
     * @param keyOrList The key or keys set for the sort
     * @param direction The direction of the sorting (1 or -1).
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#sort
     */
    sort(keyOrList: string | Array<[string, number]> | SortOptionObject<T>, direction?: number): Cursor<T>;
    /**
     * Return a modified Readable stream including a possible transform method
     *
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#stream
     */
    stream(options?: { transform?: (document: T) => any }): Cursor<T>;
    /**
     * Returns an array of documents. The caller is responsible for making sure that there
     * is enough memory to store the results. Note that the array only contains partial
     * results when this cursor had been previously accessed. In that case,
     * `cursor.rewind()` can be used to reset the cursor.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#toArray
     */
    toArray(): Promise<T[]>;
    toArray(callback: MongoCallback<T[]>): void;
    /**
     * Return a modified Readable stream that applies a given transform function, if supplied. If none supplied,
     * returns a stream of unmodified docs.
     *
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#transformStream
     */
    transformStream(options?: { transform?: (document: T) => any }): Cursor<T>;
    /**
     * This is useful in certain cases where a stream is being consumed by a parser,
     * which needs to "un-consume" some data that it has optimistically pulled out of the source, so that the stream can be passed on to some other party.
     *
     * @param chunk Chunk of data to unshift onto the read queue.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#unshift
     */
    unshift(chunk: Buffer | string): void;
}

/**
 * Options for Cursor.count() operations.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#count
 */
export interface CursorCommentOptions {
    skip?: number;
    limit?: number;
    maxTimeMS?: number;
    hint?: string;
    readPreference?: ReadPreferenceOrMode;
}

/**
 * The callback format for the forEach iterator method
 *
 * @param doc An emitted document for the iterator
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#~iteratorCallback
 */
export interface IteratorCallback<T> {
    (doc: T): void;
}

/**
 * The callback error format for the forEach iterator method
 *
 * @param error An error instance representing the error during the execution.
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#~endCallback
 */
export interface EndCallback {
    (error: MongoError): void;
}

/**
 * Returning object for the AggregationCursor result callback
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#~resultCallback
 */
export type AggregationCursorResult = object | null;
/**
 * Creates a new Aggregation Cursor instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html
 */
export class AggregationCursor<T = Default> extends Cursor<T> {
    /**
     * Set the batch size for the cursor
     *
     * @param value The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/aggregate aggregation documentation}.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#batchSize
     */
    batchSize(value: number): AggregationCursor<T>;
    /**
     * Clone the cursor
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#clone
     */
    clone(): AggregationCursor<T>;
    /**
     * Close the cursor, sending a AggregationCursor command and emitting close.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#close
     */
    close(): Promise<AggregationCursorResult>;
    close(callback: MongoCallback<AggregationCursorResult>): void;
    /**
     * Iterates over all the documents for this cursor. As with `cursor.toArray()`,
     * not all of the elements will be iterated if this cursor had been previously accessed.
     * In that case, `cursor.rewind()` can be used to reset the cursor. However, unlike
     * `cursor.toArray()`, the cursor will only hold a maximum of batch size elements
     * at any given time if batch size is specified. Otherwise, the caller is responsible
     * for making sure that the entire result can fit the memory.
     *
     * @param callback The result callback
     * @deprecated use AggregationCursor.forEach() instead
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#each
     */
    each(callback: MongoCallback<AggregationCursorResult>): void;
    /**
     * Execute the explain for the cursor.
     * For backwards compatibility, a verbosity of true is interpreted as `allPlansExecution`
     * and false as `queryPlanner`. Prior to server version 3.6, `aggregate()`
     * ignores the verbosity parameter and executes in `queryPlanner`.
     *
     * @param verbosity An optional mode in which to run the explain
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#explain
     */
    explain(
        verbosity?: string | boolean,
        callback?: MongoCallback<AggregationCursorResult>,
    ): Promise<AggregationCursorResult>;
    explain(callback?: MongoCallback<AggregationCursorResult>): void;
    /**
     * Add a geoNear stage to the aggregation pipeline
     *
     * @param document The geoNear stage document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#geoNear
     */
    geoNear(document: object): AggregationCursor<T>;
    /**
     * Add a group stage to the aggregation pipeline
     *
     * @param document The group stage document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#group
     */
    group<U = T>(document: object): AggregationCursor<U>;
    /**
     * Check if there is any document still available in the cursor
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#hasNext
     */
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    /**
     * Is the cursor closed
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#isClosed
     */
    isClosed(): boolean;
    /**
     * Add a limit stage to the aggregation pipeline
     *
     * @param limit The state limit value
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#limit
     */
    limit(value: number): AggregationCursor<T>;
    /**
     * Add a lookup stage to the aggregation pipeline
     *
     * @param document The lookup stage document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#lookup
     */
    lookup(document: object): AggregationCursor<T>;
    /**
     * Add a match stage to the aggregation pipeline
     *
     * @param document The match stage document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#match
     */
    match(document: object): AggregationCursor<T>;
    /**
     * Add a maxTimeMS stage to the aggregation pipeline
     *
     * @param value The state maxTimeMS value
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#maxTimeMS
     */
    maxTimeMS(value: number): AggregationCursor<T>;
    /**
     * Get the next available document from the cursor, returns null if no more documents are available
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#next
     */
    next(): Promise<T | null>;
    next(callback: MongoCallback<T | null>): void;
    /**
     * Add a out stage to the aggregation pipeline
     *
     * @param destination The destination name
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#out
     */
    out(destination: string): AggregationCursor<T>;
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @param document The project stage document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#project
     */
    project<U = T>(document: object): AggregationCursor<U>;
    /**
     * The `read()` method pulls some data out of the internal buffer and returns it. If there is no data available, then it will return null.
     *
     * @param size Optional argument to specify how much data to read
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#read
     */
    read(size: number): string | Buffer | void;
    /**
     * Add a redact stage to the aggregation pipeline
     *
     * @param document The redact stage document.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#redact
     */
    redact(document: object): AggregationCursor<T>;
    /**
     * Resets the cursor
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#rewind
     */
    rewind(): AggregationCursor<T>;
    /**
     * Add a skip stage to the aggregation pipeline
     *
     * @param value The state skip value
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#setEncoding
     */
    skip(value: number): AggregationCursor<T>;
    /**
     * Add a sort stage to the aggregation pipeline
     *
     * @param document The sort stage document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#sort
     */
    sort(document: object): AggregationCursor<T>;
    /**
     * Returns an array of documents. The caller is responsible for making sure that there
     * is enough memory to store the results. Note that the array only contain partial
     * results when this cursor had been previously accessed. In that case,
     * `cursor.rewind()` can be used to reset the cursor.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#toArray
     */
    toArray(): Promise<T[]>;
    toArray(callback: MongoCallback<T[]>): void;
    /**
     * This is useful in certain cases where a stream is being consumed by a parser, which needs to "un-consume" some data that it has optimistically
     * pulled out of the source, so that the stream can be passed on to some other party.
     *
     * @param chunk Chunk of data to unshift onto the read queue
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#unshift
     */
    unshift(chunk: Buffer | string): void;
    /**
     * Add a unwind stage to the aggregation pipeline
     *
     * @param field The unwind field name or stage document.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/AggregationCursor.html#unwind
     */
    unwind<U = T>(
        field: string | { path: string; includeArrayIndex?: string; preserveNullAndEmptyArrays?: boolean },
    ): AggregationCursor<U>;
}

/**
 * Result object from CommandCursor.resultCallback
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#~resultCallback
 */
export type CommandCursorResult = object | null;
/**
 * Creates a new Command Cursor instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html
 */
export class CommandCursor extends Readable {
    /**
     * Set the batch size for the cursor.
     *
     * @param value The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/find/ find command documentation}.
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#batchSize
     */
    batchSize(value: number): CommandCursor;
    /**
     * Clone the cursor
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#clone
     */
    clone(): CommandCursor;
    /**
     * Close the cursor, sending a KillCursor command and emitting close.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#close
     */
    close(): Promise<CommandCursorResult>;
    close(callback: MongoCallback<CommandCursorResult>): void;
    /**
     * Iterates over all the documents for this cursor. As with `cursor.toArray()`,
     * not all of the elements will be iterated if this cursor had been previously accessed.
     * In that case, `cursor.rewind()` can be used to reset the cursor. However, unlike
     * `cursor.toArray()`, the cursor will only hold a maximum of batch size elements
     * at any given time if batch size is specified. Otherwise, the caller is responsible
     * for making sure that the entire result can fit the memory.
     *
     * @param callback The result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#each
     */
    each(callback: MongoCallback<CommandCursorResult>): void;
    /**
     * Check if there is any document still available in the cursor
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#hasNext
     */
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    /**
     * Is the cursor closed
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#isClosed
     */
    isClosed(): boolean;
    /**
     * Add a maxTimeMS stage to the aggregation pipeline
     *
     * @param value The state maxTimeMS value
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#maxTimeMS
     */
    maxTimeMS(value: number): CommandCursor;
    /**
     * Get the next available document from the cursor, returns null if no more documents are available.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#next
     */
    next(): Promise<CommandCursorResult>;
    next(callback: MongoCallback<CommandCursorResult>): void;
    /**
     * The `read()` method pulls some data out of the internal buffer and returns it. If there is no data available, then it will return null.
     *
     * @param size Optional argument to specify how much data to read
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#read
     */
    read(size: number): string | Buffer | void;
    /**
     * Resets the cursor
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#rewind
     */
    rewind(): CommandCursor;
    /**
     * Set the ReadPreference for the cursor
     *
     * @param readPreference The new read preference for the cursor
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#setReadPreference
     */
    setReadPreference(readPreference: ReadPreferenceOrMode): CommandCursor;
    /**
     * Returns an array of documents. The caller is responsible for making sure that there
     * is enough memory to store the results. Note that the array only contain partial
     * results when this cursor had been previously accessed.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#toArray
     */
    toArray(): Promise<any[]>;
    toArray(callback: MongoCallback<any[]>): void;
    /**
     * This is useful in certain cases where a stream is being consumed by a parser, which needs to "un-consume" some data that it has
     * optimistically pulled out of the source, so that the stream can be passed on to some other party.
     *
     * @param chunk Chunk of data to unshift onto the read queue
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/CommandCursor.html#unshift
     */
    unshift(chunk: Buffer | string): void;
}

/**
 * Constructor for a streaming GridFS interface
 *
 * @param db A db handle
 * @param options Optional settings
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html
 */
export class GridFSBucket extends EventEmitter {
    constructor(db: Db, options?: GridFSBucketOptions);
    /**
     * Deletes a file with the given id
     *
     * @param id The id of the file doc
     * @param callback The result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#delete
     */
    delete(id: ObjectId, callback?: GridFSBucketErrorCallback): void;
    /**
     * Removes this bucket's files collection, followed by its chunks collection
     *
     * @param callback The result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#drop
     */
    drop(callback?: GridFSBucketErrorCallback): void;
    /**
     * Convenience wrapper around find on the files collection
     *
     * @param filter The filter object used to find items inside the bucket
     * @param options Optional settings for cursor
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#find
     */
    find(filter: object, options?: GridFSBucketFindOptions): Cursor<any>;
    /**
     * Returns a readable stream (GridFSBucketReadStream) for streaming file data from GridFS.
     *
     * @param id The id of the file doc
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openDownloadStream
     */
    openDownloadStream(id: ObjectId, options?: { start: number; end: number }): GridFSBucketReadStream;
    /**
     * Returns a readable stream ({@link https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketReadStream.html GridFSBucketReadStream}) for streaming the
     * file with the given name from GridFS. If there are multiple files with
     * the same name, this will stream the most recent file with the given name
     * (as determined by the `uploadDate` field). You can set the `revision`
     * option to change this behavior.
     *
     * @param filename The name of the file to stream
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openDownloadStreamByName
     */
    openDownloadStreamByName(
        filename: string,
        options?: { revision: number; start: number; end: number },
    ): GridFSBucketReadStream;
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS. The stream's `id` property contains the resulting
     * file's id.
     *
     * @param filename The value of the `filename` key in the files doc
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openUploadStream
     */
    openUploadStream(filename: string, options?: GridFSBucketOpenUploadStreamOptions): GridFSBucketWriteStream;
    /**
     * Returns a writable stream ({@link https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketWriteStream.html GridFSBucketWriteStream}) for writing
     * buffers to GridFS for a custom file id. The stream's `id` property contains the resulting
     * file's id.
     *
     * @param id A custom id used to identify the file
     * @param filename The value of the `filename` key in the files doc
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openUploadStreamWithId
     */
    openUploadStreamWithId(
        id: GridFSBucketWriteStreamId,
        filename: string,
        options?: GridFSBucketOpenUploadStreamOptions,
    ): GridFSBucketWriteStream;
    /**
     * Renames the file with the given _id to the given string
     *
     * @param id The id of the file to rename
     * @param filename New name for the file
     * @param callback The result callback
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#rename
     */
    rename(id: ObjectId, filename: string, callback?: GridFSBucketErrorCallback): void;
}

/**
 * Options for creating a new GridFSBucket
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html
 */
export interface GridFSBucketOptions {
    bucketName?: string;
    chunkSizeBytes?: number;
    writeConcern?: WriteConcern;
    readPreference?: ReadPreferenceOrMode;
}

/**
 * Callback format for all GridFSBucket methods that can accept a callback.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#~errorCallback
 */
export interface GridFSBucketErrorCallback extends MongoCallback<void> {}

/**
 * Options for GridFSBucket.find() operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#find
 */
export interface GridFSBucketFindOptions {
    batchSize?: number;
    limit?: number;
    maxTimeMS?: number;
    noCursorTimeout?: boolean;
    skip?: number;
    sort?: object;
}

/**
 * Options for GridFSBucket.openUploadStream() operations
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openUploadStream
 */
export interface GridFSBucketOpenUploadStreamOptions {
    chunkSizeBytes?: number;
    metadata?: object;
    contentType?: string;
    aliases?: string[];
}

/**
 * A readable stream that enables you to read buffers from GridFS.
 * Do not instantiate this class directly. Use {@link https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openDownloadStream openDownloadStream()} instead.
 *
 * @param chunks Handle for chunks collection
 * @param files Handle for files collection
 * @param readPreference The read preference to use
 * @param filter The query to use to find the file document
 * @param options Optional settings
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketReadStream.html
 */
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

/**
 * Options for creating a new GridFSBucketReadStream
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketReadStream.html
 */
export interface GridFSBucketReadStreamOptions {
    sort?: number;
    skip?: number;
    start?: number;
    end?: number;
}

/**
 * A writable stream that enables you to write buffers to GridFS.
 * Do not instantiate this class directly. Use {@link https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucket.html#openUploadStream openUploadStream()} instead.
 *
 * @param bucket Handle for this stream's corresponding bucket
 * @param filename The value of the `filename` key in the files doc
 * @param options Optional settings
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketWriteStream.html
 */
export class GridFSBucketWriteStream extends Writable {
    id: GridFSBucketWriteStreamId;
    constructor(bucket: GridFSBucket, filename: string, options?: GridFSBucketWriteStreamOptions);

    /**
     * Places this write stream into an aborted state (all future writes fail)
     * and deletes all chunks that have already been written.
     *
     * @param callback called when chunks are successfully removed or error occurred
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketWriteStream.html#abort
     */
    abort(callback?: GridFSBucketErrorCallback): void;
}

/**
 * Options for creating a new GridFSBucketWriteStream
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/GridFSBucketWriteStream.html
 */
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
     * If true, disables adding an md5 field to file data
     * @default false
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
 * Type-safe event emitter from {@link https://github.com/andywer/typed-emitter}.
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

/**
 * Events emitted by ChangeStream instances
 */
interface ChangeStreamEvents<TSchema extends { [key: string]: any } = DefaultSchema> {
    /**
     * Fired for each new matching change in the specified namespace. Attaching a `change`
     * event listener to a Change Stream will switch the stream into flowing mode. Data will
     * then be passed as soon as it is available.
     *
     * @param doc The changed document
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#event:change
     */
    change: (doc: ChangeEvent<TSchema>) => void;
    /**
     * Change stream close event
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#event:close
     */
    close: () => void;
    /**
     * Change stream end event
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#event:end
     */
    end: () => void;
    /**
     * Fired when the stream encounters an error
     *
     * @param error The error encountered
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#event:error
     */
    error: (err: MongoError) => void;
    /**
     * Emitted each time the change stream stores a new resume token.
     *
     * @param newToken The new resume token
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#event:resumeTokenChanged
     */
    resumeTokenChanged: (newToken: ResumeToken) => void;
}

/**
 * Creates a new Change Stream instance. Normally created using `Collection.watch()`.
 *
 * @param parent The parent object that created this change stream
 * @param pipeline An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/ aggregation pipeline stages} through which to pass change stream documents
 * @param options Optional settings
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html
 */
export class ChangeStream<TSchema extends { [key: string]: any } = DefaultSchema> extends TypedEventEmitter<
    ChangeStreamEvents<TSchema>
> {
    resumeToken: ResumeToken;

    constructor(parent: MongoClient | Db | Collection, pipeline: object[], options?: ChangeStreamOptions);

    /**
     * Close the Change Stream
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#close
     */
    close(): Promise<any>;
    close(callback: MongoCallback<any>): void;

    /**
     * Check if there is any document still available in the Change Stream
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#hasNext
     */
    hasNext(): Promise<any>;
    hasNext(callback: MongoCallback<any>): void;

    /**
     * Is the change stream closed
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#isClosed
     */
    isClosed(): boolean;

    /**
     * Get the next available document from the Change Stream, returns null if no more documents are available.
     *
     * @param callback The result callback
     * @returns Promise if no callback is passed
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#next
     */
    next(): Promise<any>;
    next(callback: MongoCallback<any>): void;

    /**
     * Return a modified Readable stream including a possible transform method
     *
     * @param options Optional settings
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/ChangeStream.html#stream
     */
    stream(options?: { transform?: Function }): Cursor;
}

export class ResumeToken {}

export type ChangeEventTypes =
    | "insert"
    | "delete"
    | "replace"
    | "update"
    | "drop"
    | "rename"
    | "dropDatabase"
    | "invalidate";
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
    operationType: "insert" | "replace";
    fullDocument?: TSchema;
    documentKey: {
        _id: ExtractIdType<TSchema>;
    };
}
type FieldUpdates<TSchema> = Partial<TSchema> & { [key: string]: any };
export interface ChangeEventUpdate<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: "update";
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
    operationType: "delete";
    documentKey: {
        _id: ExtractIdType<TSchema>;
    };
}
export interface ChangeEventRename<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: "rename";
    to: {
        db: string;
        coll: string;
    };
}

export interface ChangeEventOther<TSchema extends { [key: string]: any } = DefaultSchema>
    extends ChangeEventBase<TSchema> {
    operationType: "drop" | "dropDatabase";
}

export interface ChangeEventInvalidate<TSchema extends { [key: string]: any } = DefaultSchema> {
    _id: ResumeToken;
    operationType: "invalidate";
    clusterTime: Timestamp;
}

export type ChangeEvent<TSchema extends object = { _id: ObjectId }> =
    | ChangeEventCR<TSchema>
    | ChangeEventUpdate<TSchema>
    | ChangeEventDelete<TSchema>
    | ChangeEventRename<TSchema>
    | ChangeEventOther<TSchema>
    | ChangeEventInvalidate<TSchema>;

/**
 * Options that can be passed to a `ChangeStream`.
 * Note that `startAfter`, `resumeAfter`, and `startAtOperationTime` are all mutually exclusive, and the server will error if more than one is specified.
 *
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/global.html#ChangeStreamOptions
 */
export interface ChangeStreamOptions {
    fullDocument?: "default" | "updateLookup";
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

/**
 * Creates a new Logger instance
 *
 * @param className The Class name associated with the logging instance
 * @param options Optional settings
 * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html
 */
export class Logger {
    constructor(className: string, options?: LoggerOptions);
    /**
     * Log a message at the debug level
     *
     * @param message The message to log
     * @param object Additional meta data to log
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#debug
     */
    debug(message: string, object: LoggerState): void;
    /**
     * Log a message at the error level
     *
     * @param message The message to log
     * @param object Additional meta data to log
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#error
     */
    error(message: string, object: LoggerState): void;
    /**
     * Log a message at the info level
     *
     * @param message The message to log
     * @param object Additional meta data to log
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#info
     */
    info(message: string, object: LoggerState): void;
    /**
     * Is the logger set at debug level
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#isDebug
     */
    isDebug(): boolean;
    /**
     * Is the logger set at error level
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#isError
     */
    isError(): boolean;
    /**
     * Is the logger set at info level
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#isInfo
     */
    isInfo(): boolean;
    /**
     * Is the logger set at error level
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#isWarn
     */
    isWarn(): boolean;
    /**
     * Resets the logger to default settings, error and no filtered classes
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#.reset
     */
    static reset(): void;
    /**
     * Get the current logger function
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#.currentLogger
     */
    static currentLogger(): log;
    /**
     * Set the current logger function
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#.setCurrentLogger
     */
    static setCurrentLogger(log: log): void;
    /**
     * Set what classes to log.
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#.filter
     */
    static filter(type: string, values: string[]): void;
    /**
     * Set the current log level
     *
     * @see https://mongodb.github.io/node-mongodb-native/3.6/api/Logger.html#.setLevel
     */
    static setLevel(level: string): void;
}

/**
 * Possible fields for a collation document
 *
 * @see https://docs.mongodb.com/v3.6/reference/collation/#collation-document-fields
 */
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

/**
 * Possible indexes to create inside a collection
 *
 * @see https://docs.mongodb.com/v3.6/reference/command/createIndexes/
 */
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
    "2dsphereIndexVersion"?: number;
    bits?: number;
    min?: number;
    max?: number;
    bucketSize?: number;
    collation?: CollationDocument;
}
