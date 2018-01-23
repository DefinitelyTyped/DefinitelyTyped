// Type definitions for MongoDB v3.0
// Project: https://github.com/mongodb/node-mongodb-native/tree/3.0.0
// Definitions by: Federico Caselli <https://github.com/CaselIT>
//                 Alan Marcell <https://github.com/alanmarcell>
//                 Gady Piazza <https://github.com/kikar>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Gaurav Lahoti <https://github.com/dante-101>
//                 Mariano Cortesi <https://github.com/mcortesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Documentation : http://mongodb.github.io/node-mongodb-native/3.0/api/

/// <reference types="node" />
/// <reference types="bson" />

import { ObjectID } from 'bson';
import { EventEmitter } from 'events';
import { Readable, Writable } from "stream";

export function connect(uri: string, options?: MongoClientOptions): Promise<Db>;
export function connect(uri: string, callback: MongoCallback<Db>): void;
export function connect(uri: string, options: MongoClientOptions, callback: MongoCallback<Db>): void;

export { Binary, Double, Long, Decimal128, MaxKey, MinKey, ObjectID, ObjectId, Timestamp, DBRef } from 'bson';

// Class documentation : http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html
export class MongoClient extends EventEmitter {
    constructor();
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#.connect */
    static connect(uri: string, callback: MongoCallback<MongoClient>): void;
    static connect(uri: string, options?: MongoClientOptions): Promise<MongoClient>;
    static connect(uri: string, options: MongoClientOptions, callback: MongoCallback<MongoClient>): void;
    /**
     * @deprecated
     * http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#connect
     */
    connect(): Promise<MongoClient>;
    connect(callback: MongoCallback<MongoClient>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#close */
    close(callback: MongoCallback<void>): void;
    close(force?: boolean): Promise<void>;
    close(force: boolean, callback: MongoCallback<void>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#db */
    db(name: string, options?: MongoClientCommonOption): Db
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#isConnected */
    isConnected(name: string, options?: MongoClientCommonOption): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#logout */
    logout(callback: MongoCallback<any>): void;
    logout(options?: { dbName?: string }): Promise<any>;
    logout(options: { dbName?: string }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#startSession */
    startSession(options?: any): ClientSession;
}

declare class ClientSession extends EventEmitter {
    endSession(callback?: MongoCallback<void>): void;
    endSession(options: any, callback?: MongoCallback<void>): void;
    equals(session: ClientSession): boolean;
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

/** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoError.html */
export class MongoError extends Error {
    constructor(message: string);
    static create(options: Object): MongoError;
    code?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#.connect */
export interface MongoClientOptions extends
    DbCreateOptions,
    ServerOptions,
    MongosOptions,
    ReplSetOptions,
    SocketOptions,
    SSLOptions,
    HighAvailabilityOptions {
    // The logging level (error/warn/info/debug)
    loggerLevel?: string;
    // Custom logger object
    logger?: Object;
    // Default: false;
    validateOptions?: Object;
    // The name of the application that created this MongoClient instance. 
    appname?: string;
}

export interface SSLOptions {
    // Default:5; Number of connections for each server instance
    poolSize?: number;
    // Use ssl connection (needs to have a mongod server with ssl support)
    ssl?: boolean;
    // Default: true; Validate mongod server certificate against ca (mongod server >=2.4 with ssl support required)
    sslValidate?: Object;
    // Default: true; Server identity checking during SSL
    checkServerIdentity?: boolean | Function;
    // Array of valid certificates either as Buffers or Strings
    sslCA?: Array<Buffer | string>;
    // SSL Certificate revocation list binary buffer
    sslCRL?: Buffer;
    // SSL Certificate binary buffer
    sslCert?: Buffer | string;
    // SSL Key file binary buffer
    sslKey?: Buffer | string;
    // SSL Certificate pass phrase
    sslPass?: Buffer | string;
    // String containing the server name requested via TLS SNI.
    servername?: string;
}

export interface HighAvailabilityOptions {
    // Default: true; Turn on high availability monitoring.
    ha?: boolean;
    // Default: 10000; The High availability period for replicaset inquiry
    haInterval?: number;
    // Default: false;
    domainsEnabled?: boolean;
}

// See http://mongodb.github.io/node-mongodb-native/3.0/api/ReadPreference.html
export class ReadPreference {
    constructor(mode: string, tags: Object);
    mode: string;
    tags: any;
    options: { maxStalenessSeconds?: number }; // Max Secondary Read Stalleness in Seconds
    static PRIMARY: string;
    static PRIMARY_PREFERRED: string;
    static SECONDARY: string;
    static SECONDARY_PREFERRED: string;
    static NEAREST: string;
    isValid(mode: string): boolean;
    static isValid(mode: string): boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html */
export interface DbCreateOptions extends CommonOptions {
    // If the database authentication is dependent on another databaseName.
    authSource?: string;
    // Default: false; Force server to create _id fields instead of client.
    forceServerObjectId?: boolean;
    // Default: false; Use c++ bson parser.
    native_parser?: boolean;
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    // Specify if the BSON serializer should ignore undefined fields.
    ignoreUndefined?: boolean;
    // Return document results as raw BSON buffers.
    raw?: boolean;
    // Default: true; Promotes Long values to number if they fit inside the 53 bits resolution.
    promoteLongs?: boolean;
    // Default: -1 (unlimited); Amount of operations the driver buffers up untill discard any new ones
    promoteBuffers?: number;
    // the prefered read preference. use 'ReadPreference' class.
    readPreference?: ReadPreference | string;
    // Default: true; Promotes BSON values to native types where possible, set to false to only receive wrapper types.
    promoteValues?: Object;
    // Custom primary key factory to generate _id values (see Custom primary keys).
    pkFactory?: Object;
    // ES6 compatible promise constructor
    promiseLibrary?: Object;
    /** https://docs.mongodb.com/manual/reference/read-concern/#read-concern */
    readConcern?: { level?: Object };
    // Sets a cap on how many operations the driver will buffer up before giving up on getting a
    // working connection, default is -1 which is unlimited.
    bufferMaxEntries?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Server.html */
export interface SocketOptions {
    // Reconnect on error. default:false
    autoReconnect?: boolean;
    // TCP Socket NoDelay option. default:true
    noDelay?: boolean;
    // TCP KeepAlive on the socket with a X ms delay before start. default:0
    keepAlive?: number;
    // TCP Connection timeout setting. default 0
    connectTimeoutMS?: number;
    // TCP Socket timeout setting. default 0
    socketTimeoutMS?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Server.html */
export interface ServerOptions extends SSLOptions {
    // Default: 30;
    reconnectTries?: number;
    // Default: 1000;
    reconnectInterval?: number;
    // Default: true;
    monitoring?: boolean
    socketOptions?: SocketOptions;
    // Default: 10000; The High availability period for replicaset inquiry
    haInterval?: number;
    // Default: false;
    domainsEnabled?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Mongos.html */
export interface MongosOptions extends SSLOptions, HighAvailabilityOptions {
    // Default: 15; Cutoff latency point in MS for MongoS proxy selection
    acceptableLatencyMS?: number;
    socketOptions?: SocketOptions;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/ReplSet.html */
export interface ReplSetOptions extends SSLOptions, HighAvailabilityOptions {
    // The max staleness to secondary reads (values under 10 seconds cannot be guaranteed);
    maxStalenessSeconds?: number;
    // The name of the replicaset to connect to.
    replicaSet?: string;
    // Default: 15 ; Range of servers to pick when using NEAREST (lowest ping ms + the latency fence, ex: range of 1 to (1 + 15) ms)
    secondaryAcceptableLatencyMS?: number;
    connectWithNoPrimary?: boolean;
    socketOptions?: SocketOptions;
}

// Class documentation : http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html
export class Db extends EventEmitter {
    constructor(databaseName: string, serverConfig: Server | ReplSet | Mongos, options?: DbCreateOptions);

    serverConfig: Server | ReplSet | Mongos;
    bufferMaxEntries: number;
    databaseName: string;
    options: any;
    native_parser: boolean;
    slaveOk: boolean;
    writeConcern: any;

    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#addUser */
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: DbAddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: DbAddUserOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#admin */
    admin(): Admin;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#collection */
    collection<TSchema = Default>(name: string): Collection<TSchema>;
    collection<TSchema = Default>(name: string, callback: MongoCallback<Collection<TSchema>>): Collection<TSchema>;
    collection<TSchema = Default>(name: string, options: DbCollectionOptions, callback: MongoCallback<Collection<TSchema>>): Collection<TSchema>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#collections */
    collections(): Promise<Collection<Default>[]>;
    collections(callback: MongoCallback<Collection<Default>[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#command */
    command(command: Object, callback: MongoCallback<any>): void;
    command(command: Object, options?: { readPreference: ReadPreference | string }): Promise<any>;
    command(command: Object, options: { readPreference: ReadPreference | string }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#createCollection */
    createCollection<TSchema = Default>(name: string, callback: MongoCallback<Collection<TSchema>>): void;
    createCollection<TSchema = Default>(name: string, options?: CollectionCreateOptions): Promise<Collection<TSchema>>;
    createCollection<TSchema = Default>(name: string, options: CollectionCreateOptions, callback: MongoCallback<Collection<TSchema>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#createIndex */
    createIndex(name: string, fieldOrSpec: string | Object, callback: MongoCallback<any>): void;
    createIndex(name: string, fieldOrSpec: string | Object, options?: IndexOptions): Promise<any>;
    createIndex(name: string, fieldOrSpec: string | Object, options: IndexOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#dropCollection */
    dropCollection(name: string): Promise<boolean>;
    dropCollection(name: string, callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#dropDatabase */
    dropDatabase(): Promise<any>;
    dropDatabase(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#executeDbAdminCommand */
    executeDbAdminCommand(command: Object, callback: MongoCallback<any>): void;
    executeDbAdminCommand(command: Object, options?: { readPreference?: ReadPreference | string, maxTimeMS?: number }): Promise<any>;
    executeDbAdminCommand(command: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#indexInformation */
    indexInformation(name: string, callback: MongoCallback<any>): void;
    indexInformation(name: string, options?: { full?: boolean, readPreference?: ReadPreference | string }): Promise<any>;
    indexInformation(name: string, options: { full?: boolean, readPreference?: ReadPreference | string }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#listCollections */
    listCollections(filter?: Object, options?: { batchSize?: number, readPreference?: ReadPreference | string }): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#profilingInfo */
    profilingInfo(callback: MongoCallback<any>): void;
    profilingInfo(options?: { session?: ClientSession }): Promise<void>;
    profilingInfo(options: { session?: ClientSession }, callback: MongoCallback<void>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#profilingLevel */
    profilingLevel(callback: MongoCallback<any>): void;
    profilingLevel(options?: { session?: ClientSession }): Promise<void>;
    profilingLevel(options: { session?: ClientSession }, callback: MongoCallback<void>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#removeUser */
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: CommonOptions): Promise<any>;
    removeUser(username: string, options: CommonOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#renameCollection */
    renameCollection<TSchema = Default>(fromCollection: string, toCollection: string, callback: MongoCallback<Collection<TSchema>>): void;
    renameCollection<TSchema = Default>(fromCollection: string, toCollection: string, options?: { dropTarget?: boolean }): Promise<Collection<TSchema>>;
    renameCollection<TSchema = Default>(fromCollection: string, toCollection: string, options: { dropTarget?: boolean }, callback: MongoCallback<Collection<TSchema>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#setProfilingLevel */
    profilingLevel(level: string, callback: MongoCallback<any>): void;
    profilingLevel(level: string, options?: { session?: ClientSession }): Promise<void>;
    profilingLevel(level: string, options: { session?: ClientSession }, callback: MongoCallback<void>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#stats */
    stats(callback: MongoCallback<any>): void;
    stats(options?: { scale?: number }): Promise<any>;
    stats(options: { scale?: number }, callback: MongoCallback<any>): void;
}

export interface CommonOptions {
    /** The write concern. */
    w?: string | number;
    /** The write concern timeout. */
    wtimeout?: number;
    /** Specify a journal write concern. */
    j?: boolean;
    /** Session to use for this operation */
    session?: ClientSession;
}

// Deprecated http://mongodb.github.io/node-mongodb-native/3.0/api/Server.html
export class Server extends EventEmitter {
    constructor(host: string, port: number, options?: ServerOptions);

    connections(): Array<any>;
}

// Deprecated http://mongodb.github.io/node-mongodb-native/3.0/api/ReplSet.html
export class ReplSet extends EventEmitter {
    constructor(servers: Array<Server>, options?: ReplSetOptions);

    connections(): Array<any>;
}

// Deprecated http://mongodb.github.io/node-mongodb-native/3.0/api/ReplSet.html
export class Mongos extends EventEmitter {
    constructor(servers: Array<Server>, options?: MongosOptions);

    connections(): Array<any>;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#addUser */
export interface DbAddUserOptions extends CommonOptions {
    customData?: Object;
    roles?: Object[];
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#createCollection */
export interface CollectionCreateOptions extends CommonOptions {
    raw?: boolean;
    pkFactory?: Object;
    readPreference?: ReadPreference | string;
    serializeFunctions?: boolean;
    strict?: boolean;
    capped?: boolean;
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
    collation?: object;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#collection */
export interface DbCollectionOptions extends CommonOptions {
    raw?: boolean;
    pkFactory?: Object;
    readPreference?: ReadPreference | string;
    serializeFunctions?: boolean;
    strict?: boolean;
    readConcern?: { level: Object };
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html#createIndex */
export interface IndexOptions extends CommonOptions {
    // Creates an unique index.
    unique?: boolean;
    // Creates a sparse index.
    sparse?: boolean;
    // Creates the index in the background, yielding whenever possible.
    background?: boolean;
    // A unique index cannot be created on a key that has pre-existing duplicate values.
    // If you would like to create the index anyway, keeping the first document the database indexes and
    // deleting all subsequent documents that have duplicate value
    dropDups?: boolean;
    // For geo spatial indexes set the lower bound for the co-ordinates.
    min?: number;
    // For geo spatial indexes set the high bound for the co-ordinates.
    max?: number;
    // Specify the format version of the indexes.
    v?: number;
    // Allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)
    expireAfterSeconds?: number;
    // Override the auto generated index name (useful if the resulting name is larger than 128 bytes)
    name?: string;
    // Creates a partial index based on the given filter object (MongoDB 3.2 or higher)
    partialFilterExpression?: any;
    collation?: Object;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html */
export interface Admin {
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#addUser */
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: AddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: AddUserOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#buildInfo */
    buildInfo(): Promise<any>;
    buildInfo(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#command */
    command(command: Object, callback: MongoCallback<any>): void;
    command(command: Object, options?: { readPreference?: ReadPreference | string, maxTimeMS?: number }): Promise<any>;
    command(command: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#listDatabases */
    listDatabases(): Promise<any>;
    listDatabases(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#ping */
    ping(): Promise<any>;
    ping(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#removeUser */
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: FSyncOptions): Promise<any>;
    removeUser(username: string, options: FSyncOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#replSetGetStatus */
    replSetGetStatus(): Promise<any>;
    replSetGetStatus(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#serverInfo */
    serverInfo(): Promise<any>;
    serverInfo(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#serverStatus */
    serverStatus(): Promise<any>;
    serverStatus(callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#validateCollection */
    validateCollection(collectionNme: string, callback: MongoCallback<any>): void;
    validateCollection(collectionNme: string, options?: Object): Promise<any>;
    validateCollection(collectionNme: string, options: Object, callback: MongoCallback<any>): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#addUser */
export interface AddUserOptions extends CommonOptions {
    fsync: boolean;
    customData?: Object;
    roles?: Object[]
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Admin.html#removeUser */
export interface FSyncOptions extends CommonOptions {
    fsync?: boolean
}

// Documentation : http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html
export interface Collection<TSchema = Default> {
    // Get the collection name.
    collectionName: string;
    // Get the full collection namespace.
    namespace: string;
    // The current write concern values.
    writeConcern: any;
    // The current read concern values.
    readConcern: any;
    // Get current index hint for collection.
    hint: any;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#aggregate */
    aggregate<T = TSchema>(pipeline: Object[], callback: MongoCallback<T[]>): AggregationCursor<T>;
    aggregate<T = TSchema>(pipeline: Object[], options?: CollectionAggregationOptions, callback?: MongoCallback<T[]>): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#bulkWrite */
    bulkWrite(operations: Object[], callback: MongoCallback<BulkWriteOpResultObject>): void;
    bulkWrite(operations: Object[], options?: CollectionBluckWriteOptions): Promise<BulkWriteOpResultObject>;
    bulkWrite(operations: Object[], options: CollectionBluckWriteOptions, callback: MongoCallback<BulkWriteOpResultObject>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#count */
    count(query: Object, callback: MongoCallback<number>): void;
    count(query: Object, options?: MongoCountPreferences): Promise<number>;
    count(query: Object, options: MongoCountPreferences, callback: MongoCallback<number>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#createIndex */
    createIndex(fieldOrSpec: string | any, callback: MongoCallback<string>): void;
    createIndex(fieldOrSpec: string | any, options?: IndexOptions): Promise<string>;
    createIndex(fieldOrSpec: string | any, options: IndexOptions, callback: MongoCallback<string>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#createIndexes and  http://docs.mongodb.org/manual/reference/command/createIndexes/ */
    createIndexes(indexSpecs: Object[], callback: MongoCallback<any>): void;
    createIndexes(indexSpecs: Object[], options?: {session?: ClientSession}): Promise<any>;
    createIndexes(indexSpecs: Object[], options: {session?: ClientSession}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#deleteMany */
    deleteMany(filter: Object, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteMany(filter: Object, options?: CommonOptions): Promise<DeleteWriteOpResultObject>;
    deleteMany(filter: Object, options: CommonOptions, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#deleteOne */
    deleteOne(filter: Object, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteOne(filter: Object, options?: CommonOptions & { bypassDocumentValidation?: boolean }): Promise<DeleteWriteOpResultObject>;
    deleteOne(filter: Object, options: CommonOptions & { bypassDocumentValidation?: boolean }, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#distinct */
    distinct(key: string, query: Object, callback: MongoCallback<any>): void;
    distinct(key: string, query: Object, options?: { readPreference?: ReadPreference | string, maxTimeMS?: number, session?: ClientSession }): Promise<any>;
    distinct(key: string, query: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number, session?: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#drop */
    drop(options?: {session: ClientSession}): Promise<any>;
    drop(callback: MongoCallback<any>): void;
    drop(options: {session: ClientSession}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#dropIndex */
    dropIndex(indexName: string, callback: MongoCallback<any>): void;
    dropIndex(indexName: string, options?: CommonOptions & { maxTimeMS?: number }): Promise<any>;
    dropIndex(indexName: string, options: CommonOptions & { maxTimeMS?: number }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#dropIndexes */
    dropIndexes(options?: {session?: ClientSession, maxTimeMS?: number}): Promise<any>;
    dropIndexes(callback?: MongoCallback<any>): void;
    dropIndexes(options: {session?: ClientSession, maxTimeMS?: number}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#find */
    find<T = TSchema>(query?: Object): Cursor<T>;
    /** @deprecated */
    find<T = TSchema>(query: Object, options?: FindOneOptions): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOne */
    findOne<T = TSchema>(filter: Object, callback: MongoCallback<T | null>): void;
    findOne<T = TSchema>(filter: Object, options?: FindOneOptions): Promise<T | null>;
    findOne<T = TSchema>(filter: Object, options: FindOneOptions, callback: MongoCallback<T | null>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndDelete */
    findOneAndDelete(filter: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>): void;
    findOneAndDelete(filter: Object, options?: { projection?: Object, sort?: Object, maxTimeMS?: number, session?: ClientSession }): Promise<FindAndModifyWriteOpResultObject<TSchema>>;
    findOneAndDelete(filter: Object, options: { projection?: Object, sort?: Object, maxTimeMS?: number, session?: ClientSession }, callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndReplace */
    findOneAndReplace(filter: Object, replacement: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>): void;
    findOneAndReplace(filter: Object, replacement: Object, options?: FindOneAndReplaceOption): Promise<FindAndModifyWriteOpResultObject<TSchema>>;
    findOneAndReplace(filter: Object, replacement: Object, options: FindOneAndReplaceOption, callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndUpdate */
    findOneAndUpdate(filter: Object, update: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>): void;
    findOneAndUpdate(filter: Object, update: Object, options?: FindOneAndReplaceOption): Promise<FindAndModifyWriteOpResultObject<TSchema>>;
    findOneAndUpdate(filter: Object, update: Object, options: FindOneAndReplaceOption, callback: MongoCallback<FindAndModifyWriteOpResultObject<TSchema>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#geoHaystackSearch */
    geoHaystackSearch(x: number, y: number, callback: MongoCallback<any>): void;
    geoHaystackSearch(x: number, y: number, options?: GeoHaystackSearchOptions): Promise<any>;
    geoHaystackSearch(x: number, y: number, options: GeoHaystackSearchOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#geoNear */
    geoNear(x: number, y: number, callback: MongoCallback<any>): void;
    geoNear(x: number, y: number, options?: GeoNearOptions): Promise<any>;
    geoNear(x: number, y: number, options: GeoNearOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#group */
    group(keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, callback: MongoCallback<any>): void;
    group(keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, options?: { readPreference?: ReadPreference | string }): Promise<any>;
    group(keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, options: { readPreference?: ReadPreference | string }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#indexes */
    indexes(options?: {session: ClientSession}): Promise<any>;
    indexes(callback: MongoCallback<any>): void;
    indexes(options: {session?: ClientSession}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#indexExists */
    indexExists(indexes: string | string[], callback: MongoCallback<boolean>): void;
    indexExists(indexes: string | string[], options?: {session: ClientSession}): Promise<boolean>;
    indexExists(indexes: string | string[], options: {session: ClientSession}, callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#indexInformation */
    indexInformation(callback: MongoCallback<any>): void;
    indexInformation(options?: { full: boolean, session: ClientSession }): Promise<any>;
    indexInformation(options: { full: boolean, session: ClientSession }, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#initializeOrderedBulkOp */
    initializeOrderedBulkOp(options?: CommonOptions): OrderedBulkOperation;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#initializeUnorderedBulkOp */
    initializeUnorderedBulkOp(options?: CommonOptions): UnorderedBulkOperation;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertOne */
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: Object, callback: MongoCallback<InsertOneWriteOpResult>): void;
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: Object, options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult>;
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: Object, options: CollectionInsertOneOptions, callback: MongoCallback<InsertOneWriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertMany */
    insertMany(docs: Object[], callback: MongoCallback<InsertWriteOpResult>): void;
    insertMany(docs: Object[], options?: CollectionInsertManyOptions): Promise<InsertWriteOpResult>;
    insertMany(docs: Object[], options: CollectionInsertManyOptions, callback: MongoCallback<InsertWriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertOne */
    insertOne(docs: Object, callback: MongoCallback<InsertOneWriteOpResult>): void;
    insertOne(docs: Object, options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult>;
    insertOne(docs: Object, options: CollectionInsertOneOptions, callback: MongoCallback<InsertOneWriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#isCapped */
    isCapped(options?: {session: ClientSession}): Promise<any>;
    isCapped(callback: MongoCallback<any>): void;
    isCapped(options: {session: ClientSession}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#listIndexes */
    listIndexes(options?: { batchSize?: number, readPreference?: ReadPreference | string, session?: ClientSession }): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#mapReduce */
    mapReduce(map: Function | string, reduce: Function | string, callback: MongoCallback<any>): void;
    mapReduce(map: Function | string, reduce: Function | string, options?: MapReduceOptions): Promise<any>;
    mapReduce(map: Function | string, reduce: Function | string, options: MapReduceOptions, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#options */
    options(options?: {session: ClientSession}): Promise<any>;
    options(callback: MongoCallback<any>): void;
    options(options: {session: ClientSession}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#parallelCollectionScan */
    parallelCollectionScan(callback: MongoCallback<Cursor<any>[]>): void;
    parallelCollectionScan(options?: ParallelCollectionScanOptions): Promise<Cursor<any>[]>;
    parallelCollectionScan(options: ParallelCollectionScanOptions, callback: MongoCallback<Cursor<any>[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#reIndex */
    reIndex(options?: {session: ClientSession}): Promise<any>;
    reIndex(callback: MongoCallback<any>): void;
    reIndex(options: {session: ClientSession}, callback: MongoCallback<any>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#remove */
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: Object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: Object, options?: CommonOptions & { single?: boolean }): Promise<WriteOpResult>;
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: Object, options?: CommonOptions & { single?: boolean }, callback?: MongoCallback<WriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#rename */
    rename(newName: string, callback: MongoCallback<Collection<TSchema>>): void;
    rename(newName: string, options?: { dropTarget?: boolean, session?: ClientSession }): Promise<Collection<TSchema>>;
    rename(newName: string, options: { dropTarget?: boolean, session?: ClientSession }, callback: MongoCallback<Collection<TSchema>>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#replaceOne */
    replaceOne(filter: Object, doc: Object, callback: MongoCallback<ReplaceWriteOpResult>): void;
    replaceOne(filter: Object, doc: Object, options?: ReplaceOneOptions): Promise<ReplaceWriteOpResult>;
    replaceOne(filter: Object, doc: Object, options: ReplaceOneOptions, callback: MongoCallback<ReplaceWriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#save */
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: Object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: Object, options?: CommonOptions): Promise<WriteOpResult>;
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: Object, options: CommonOptions, callback: MongoCallback<WriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#stats */
    stats(callback: MongoCallback<CollStats>): void;
    stats(options?: { scale: number, session?: ClientSession }): Promise<CollStats>;
    stats(options: { scale: number, session?: ClientSession }, callback: MongoCallback<CollStats>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#update */
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(filter: Object, update: Object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(filter: Object, update: Object, options?: ReplaceOneOptions & { multi?: boolean }): Promise<WriteOpResult>;
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(filter: Object, update: Object, options: ReplaceOneOptions & { multi?: boolean }, callback: MongoCallback<WriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#updateMany */
    updateMany(filter: Object, update: Object, callback: MongoCallback<UpdateWriteOpResult>): void;
    updateMany(filter: Object, update: Object, options?: CommonOptions & { upsert?: boolean }): Promise<UpdateWriteOpResult>;
    updateMany(filter: Object, update: Object, options: CommonOptions & { upsert?: boolean }, callback: MongoCallback<UpdateWriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#updateOne */
    updateOne(filter: Object, update: Object, callback: MongoCallback<UpdateWriteOpResult>): void;
    updateOne(filter: Object, update: Object, options?: ReplaceOneOptions): Promise<UpdateWriteOpResult>;
    updateOne(filter: Object, update: Object, options: ReplaceOneOptions, callback: MongoCallback<UpdateWriteOpResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#watch */
    watch(pipeline?: Object[], options?: ChangeStreamOptions & { session?: ClientSession }): ChangeStream;
}

// Documentation: http://docs.mongodb.org/manual/reference/command/collStats/
export interface CollStats {
    // Namespace.
    ns: string;
    // Number of documents.
    count: number;
    // Collection size in bytes.
    size: number;
    // Average object size in bytes.
    avgObjSize: number;
    // (Pre)allocated space for the collection in bytes.
    storageSize: number;
    // Number of extents (contiguously allocated chunks of datafile space).
    numExtents: number;
    // Number of indexes.
    nindexes: number;
    // Size of the most recently created extent in bytes.
    lastExtentSize: number;
    // Padding can speed up updates if documents grow.
    paddingFactor: number;
    // A number that indicates the user-set flags on the collection. userFlags only appears when using the mmapv1 storage engine.
    userFlags?: number;
    // Total index size in bytes.
    totalIndexSize: number;
    // Size of specific indexes in bytes.
    indexSizes: {
        _id_: number;
        [index: string]: number;
    };
    // `true` if the collection is capped.
    capped: boolean;
    // The maximum number of documents that may be present in a capped collection.
    max: number;
    // The maximum size of a capped collection.
    maxSize: number;
    wiredTiger?: WiredTigerData;
    indexDetails?: any;
    ok: number;
}

export interface WiredTigerData {
    LSM: {
        'bloom filter false positives': number,
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

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#aggregate */
export interface CollectionAggregationOptions {
    readPreference?: ReadPreference | string;
    // Return the query as cursor, on 2.6 > it returns as a real cursor
    // on pre 2.6 it returns as an emulated cursor.
    cursor?: { batchSize: number };
    // Explain returns the aggregation execution plan (requires mongodb 2.6 >).
    explain?: boolean;
    // lets the server know if it can use disk to store
    // temporary results for the aggregation (requires mongodb 2.6 >).
    allowDiskUse?: boolean;
    // specifies a cumulative time limit in milliseconds for processing operations
    // on the cursor. MongoDB interrupts the operation at the earliest following interrupt point.
    maxTimeMS?: number;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
    raw?: boolean;
    promoteLongs?: boolean;
    promoteValues?: boolean;
    promoteBuffers?: boolean;
    collation?: Object;
    comment?: string
    session?: ClientSession;

}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertMany */
export interface CollectionInsertManyOptions extends CommonOptions {
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    //Force server to assign _id values instead of driver.
    forceServerObjectId?: boolean;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
    // If true, when an insert fails, don't execute the remaining writes. If false, continue with remaining inserts when one fails.
    ordered?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#bulkWrite */
export interface CollectionBluckWriteOptions extends CommonOptions {
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    // Execute write operation in ordered or unordered fashion.
    ordered?: boolean;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~BulkWriteOpResult */
export interface BulkWriteOpResultObject {
    insertedCount?: number;
    matchedCount?: number;
    modifiedCount?: number;
    deletedCount?: number;
    upsertedCount?: number;
    insertedIds?: any;
    upsertedIds?: any;
    result?: any;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#count */
export interface MongoCountPreferences {
    // The limit of documents to count.
    limit?: number;
    // The number of documents to skip for the count.
    skip?: boolean;
    // An index name hint for the query.
    hint?: string;
    // The preferred read preference
    readPreference?: ReadPreference | string;
    maxTimeMS?: number;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~deleteWriteOpResult */
export interface DeleteWriteOpResultObject {
    //The raw result returned from MongoDB, field will vary depending on server version.
    result: {
        //Is 1 if the command executed correctly.
        ok?: number;
        //The total count of documents deleted.
        n?: number;
    }
    //The connection object used for the operation.
    connection?: any;
    //The number of documents deleted.
    deletedCount?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~findAndModifyWriteOpResult */
export interface FindAndModifyWriteOpResultObject<TSchema = Default> {
    //Document returned from findAndModify command.
    value?: TSchema;
    //The raw lastErrorObject returned from the command.
    lastErrorObject?: any;
    //Is 1 if the command executed correctly.
    ok?: number;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndReplace */
export interface FindOneAndReplaceOption {
    projection?: Object;
    sort?: Object;
    maxTimeMS?: number;
    upsert?: boolean;
    returnOriginal?: boolean;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#geoHaystackSearch */
export interface GeoHaystackSearchOptions {
    readPreference?: ReadPreference | string;
    maxDistance?: number;
    search?: Object;
    limit?: number;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#geoNear */
export interface GeoNearOptions {
    readPreference?: ReadPreference | string;
    num?: number;
    minDistance?: number;
    maxDistance?: number;
    distanceMultiplier?: number;
    query?: Object;
    spherical?: boolean;
    uniqueDocs?: boolean;
    includeLocs?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Code.html */
export class Code {
    constructor(code: string | Function, scope?: Object)
    code: string | Function;
    scope: any;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/OrderedBulkOperation.html */
export interface OrderedBulkOperation {
    length: number;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/OrderedBulkOperation.html#execute */
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/OrderedBulkOperation.html#find */
    find(selector: Object): FindOperatorsOrdered;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/OrderedBulkOperation.html#insert */
    insert(doc: Object): OrderedBulkOperation;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/BulkWriteResult.html */
export interface BulkWriteResult {
    ok: number;
    nInserted: number;
    nUpdated: number;
    nUpserted: number;
    nModified: number;
    nRemoved: number;

    getInsertedIds(): Array<Object>;
    getLastOp(): Object;
    getRawResponse(): Object;
    getUpsertedIdAt(index: number): Object;
    getUpsertedIds(): Array<Object>;
    getWriteConcernError(): WriteConcernError;
    getWriteErrorAt(index: number): WriteError;
    getWriteErrorCount(): number;
    getWriteErrors(): Array<Object>;
    hasWriteErrors(): boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/WriteError.html */
export interface WriteError {
    //Write concern error code.
    code: number;
    //Write concern error original bulk operation index.
    index: number;
    //Write concern error message.
    errmsg: string;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/WriteConcernError.html */
export interface WriteConcernError {
    //Write concern error code.
    code: number;
    //Write concern error message.
    errmsg: string;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/FindOperatorsOrdered.html */
export interface FindOperatorsOrdered {
    delete(): OrderedBulkOperation;
    deleteOne(): OrderedBulkOperation;
    replaceOne(doc: Object): OrderedBulkOperation;
    update(doc: Object): OrderedBulkOperation;
    updateOne(doc: Object): OrderedBulkOperation;
    upsert(): FindOperatorsOrdered;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/UnorderedBulkOperation.html */
export interface UnorderedBulkOperation {
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/lib_bulk_unordered.js.html line 339 */
    length: number;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/UnorderedBulkOperation.html#execute */
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/UnorderedBulkOperation.html#find */
    find(selector: Object): FindOperatorsUnordered;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/UnorderedBulkOperation.html#insert */
    insert(doc: Object): UnorderedBulkOperation;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/FindOperatorsUnordered.html */
export interface FindOperatorsUnordered {
    length: number;
    remove(): UnorderedBulkOperation;
    removeOne(): UnorderedBulkOperation;
    replaceOne(doc: Object): UnorderedBulkOperation;
    update(doc: Object): UnorderedBulkOperation;
    updateOne(doc: Object): UnorderedBulkOperation;
    upsert(): FindOperatorsUnordered;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOne */
export interface FindOneOptions {
    limit?: number;
    sort?: Array<any> | Object;
    projection?: Object;
    fields?: Object; // Deprecated Use options.projection instead
    skip?: number;
    hint?: Object;
    explain?: boolean;
    snapshot?: boolean;
    timeout?: boolean;
    tailable?: boolean;
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
    readPreference?: ReadPreference | string;
    partial?: boolean;
    maxTimeMs?: number;
    collation?: Object;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~insertWriteOpResult */
export interface InsertWriteOpResult {
    insertedCount: number;
    ops: Array<any>;
    insertedIds: Array<ObjectID>;
    connection: any;
    result: { ok: number, n: number }
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertOne */
export interface CollectionInsertOneOptions extends CommonOptions {
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    //Force server to assign _id values instead of driver.
    forceServerObjectId?: boolean;
    //Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~insertOneWriteOpResult */
export interface InsertOneWriteOpResult {
    insertedCount: number;
    ops: Array<any>;
    insertedId: ObjectID;
    connection: any;
    result: { ok: number, n: number }
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#parallelCollectionScan */
export interface ParallelCollectionScanOptions {
    readPreference?: ReadPreference | string;
    batchSize?: number;
    numCursors?: number;
    raw?: boolean;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#replaceOne */
export interface ReplaceOneOptions extends CommonOptions {
    upsert?: boolean;
    bypassDocumentValidation?: boolean;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~updateWriteOpResult */
export interface UpdateWriteOpResult {
    result: { ok: number, n: number, nModified: number };
    connection: any;
    matchedCount: number;
    modifiedCount: number;
    upsertedCount: number;
    upsertedId: { _id: ObjectID };
}

/** https://github.com/mongodb/node-mongodb-native/blob/2.2/lib/collection.js#L957 */
export interface ReplaceWriteOpResult extends UpdateWriteOpResult {
    ops: Array<any>
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#mapReduce */
export interface MapReduceOptions {
    readPreference?: ReadPreference | string;
    out?: Object;
    query?: Object;
    sort?: Object;
    limit?: number;
    keeptemp?: boolean;
    finalize?: Function | string;
    scope?: Object;
    jsMode?: boolean;
    verbose?: boolean;
    bypassDocumentValidation?: boolean;
    session?: ClientSession;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#~WriteOpResult */
export interface WriteOpResult {
    ops: Array<any>;
    connection: any;
    result: any;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#~resultCallback */
export type CursorResult = any | void | boolean;

type Default = any;

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html */
export class Cursor<T = Default> extends Readable {

    sortValue: string;
    timeout: boolean;
    readPreference: ReadPreference;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#addCursorFlag */
    addCursorFlag(flag: string, value: boolean): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#addQueryModifier */
    addQueryModifier(name: string, value: boolean): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#batchSize */
    batchSize(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#clone */
    clone(): Cursor<T>; // still returns the same type
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#close */
    close(): Promise<CursorResult>;
    close(callback: MongoCallback<CursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#comment */
    comment(value: string): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#count */
    count(callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, callback: MongoCallback<number>): void;
    count(options: CursorCommentOptions, callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback<number>): void;
    count(applySkipLimit?: boolean, options?: CursorCommentOptions): Promise<number>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#explain */
    explain(): Promise<CursorResult>;
    explain(callback: MongoCallback<CursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#filter */
    filter(filter: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#forEach */
    forEach(iterator: IteratorCallback<T>, callback: EndCallback): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#hasNext */
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#hint */
    hint(hint: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#isClosed */
    isClosed(): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#limit */
    limit(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#map */
    map(transform: Function): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#max */
    max(max: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#maxAwaitTimeMS */
    maxAwaitTimeMS(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#maxScan */
    maxScan(maxScan: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#maxTimeMS */
    maxTimeMS(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#min */
    min(min: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#next */
    next(): Promise<T>;
    next(callback: MongoCallback<T>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#project */
    project(value: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#read */
    read(size: number): string | Buffer | void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#next */
    returnKey(returnKey: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#rewind */
    rewind(): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#setCursorOption */
    setCursorOption(field: string, value: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#setReadPreference */
    setReadPreference(readPreference: string | ReadPreference): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#showRecordId */
    showRecordId(showRecordId: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#skip */
    skip(value: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#snapshot */
    snapshot(snapshot: Object): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#sort */
    sort(keyOrList: string | Object[] | Object, direction?: number): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#stream */
    stream(options?: { transform?: Function }): Cursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#toArray */
    toArray(): Promise<T[]>;
    toArray(callback: MongoCallback<T[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#unshift */
    unshift(stream: Buffer | string): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#count */
export interface CursorCommentOptions {
    skip?: number;
    limit?: number;
    maxTimeMS?: number;
    hint?: string;
    readPreference?: ReadPreference | string;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#~iteratorCallback */
export interface IteratorCallback<T> {
    (doc: T): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#~endCallback */
export interface EndCallback {
    (error: MongoError): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#~resultCallback */
export type AggregationCursorResult = any | void;
/** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html */
export class AggregationCursor<T = Default> extends Readable {
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#batchSize */
    batchSize(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#clone */
    clone(): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#close */
    close(): Promise<AggregationCursorResult>;
    close(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#each */
    each(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#explain */
    explain(): Promise<AggregationCursorResult>;
    explain(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#geoNear */
    geoNear(document: Object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#group */
    group(document: Object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#isClosed */
    isClosed(): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#limit */
    limit(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#match */
    match(document: Object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#maxTimeMS */
    maxTimeMS(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#next */
    next(): Promise<T>;
    next(callback: MongoCallback<T>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#out */
    out(destination: string): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#project */
    project(document: Object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#read */
    read(size: number): string | Buffer | void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#redact */
    redact(document: Object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#rewind */
    rewind(): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#setEncoding */
    skip(value: number): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#sort */
    sort(document: Object): AggregationCursor<T>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#toArray */
    toArray(): Promise<T[]>;
    toArray(callback: MongoCallback<T[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#unshift */
    unshift(stream: Buffer | string): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/AggregationCursor.html#unwind */
    unwind(field: string): AggregationCursor<T>;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html */
export class CommandCursor extends Readable {
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#batchSize */
    batchSize(value: number): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#clone */
    clone(): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#close */
    close(): Promise<AggregationCursorResult>;
    close(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#each */
    each(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#isClosed */
    isClosed(): boolean;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#maxTimeMS */
    maxTimeMS(value: number): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#next */
    next(): Promise<AggregationCursorResult>;
    next(callback: MongoCallback<AggregationCursorResult>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#read */
    read(size: number): string | Buffer | void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#rewind */
    rewind(): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#setReadPreference */
    setReadPreference(readPreference: string | ReadPreference): CommandCursor;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#toArray */
    toArray(): Promise<any[]>;
    toArray(callback: MongoCallback<any[]>): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/CommandCursor.html#unshift */
    unshift(stream: Buffer | string): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html */
export class GridFSBucket {
    constructor(db: Db, options?: GridFSBucketOptions);
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#delete */
    delete(id: ObjectID, callback?: GridFSBucketErrorCallback): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#drop */
    drop(callback?: GridFSBucketErrorCallback): void;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#find */
    find(filter?: Object, options?: GridFSBucketFindOptions): Cursor<any>;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openDownloadStream */
    openDownloadStream(id: ObjectID, options?: { start: number, end: number }): GridFSBucketReadStream;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openDownloadStreamByName */
    openDownloadStreamByName(filename: string, options?: { revision: number, start: number, end: number }): GridFSBucketReadStream;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openUploadStream */
    openUploadStream(filename: string, options?: GridFSBucketOpenUploadStreamOptions): GridFSBucketWriteStream;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openUploadStreamWithId */
    openUploadStreamWithId(id: GridFSBucketWriteStreamId, filename: string, options?: GridFSBucketOpenUploadStreamOptions): GridFSBucketWriteStream;
    /** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#rename */
    rename(id: ObjectID, filename: string, callback?: GridFSBucketErrorCallback): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html */
export interface GridFSBucketOptions {
    bucketName?: string;
    chunkSizeBytes?: number;
    writeConcern?: Object;
    ReadPreference?: Object;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#~errorCallback */
export interface GridFSBucketErrorCallback {
    (err?: MongoError): void;
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#find */
export interface GridFSBucketFindOptions {
    batchSize?: number;
    limit?: number;
    maxTimeMS?: number;
    noCursorTimeout?: boolean;
    skip?: number;
    sort?: Object;
}

/** https://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openUploadStream */
export interface GridFSBucketOpenUploadStreamOptions {
    chunkSizeBytes?: number,
    metadata?: Object,
    contentType?: string,
    aliases?: Array<string>
}

/** https://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucketReadStream.html */
export class GridFSBucketReadStream extends Readable {
    id: ObjectID;
    constructor(chunks: Collection<any>, files: Collection<any>, readPreference: Object, filter: Object, options?: GridFSBucketReadStreamOptions);
}

/** https://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucketReadStream.html */
export interface GridFSBucketReadStreamOptions {
    sort?: number,
    skip?: number,
    start?: number,
    end?: number
}

/** https://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucketWriteStream.html */
export class GridFSBucketWriteStream extends Writable {
    id: GridFSBucketWriteStreamId;
    constructor(bucket: GridFSBucket, filename: string, options?: GridFSBucketWriteStreamOptions);
}

/** https://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucketWriteStream.html */
export interface GridFSBucketWriteStreamOptions {
    id?: GridFSBucketWriteStreamId,
    chunkSizeBytes?: number,
    w?: number,
    wtimeout?: number,
    j?: number
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/ChangeStream.html */
export class ChangeStream extends Readable {
    constructor(changeDomain: Db | Collection, pipeline: Object[], options?: ChangeStreamOptions);

    /** http://mongodb.github.io/node-mongodb-native/3.0/api/ChangeStream.html#close */
    close(): Promise<any>;
    close(callback: MongoCallback<any>): void;

    /** http://mongodb.github.io/node-mongodb-native/3.0/api/ChangeStream.html#hasNext */
    hasNext(): Promise<any>;
    hasNext(callback: MongoCallback<any>): void;

    /** http://mongodb.github.io/node-mongodb-native/3.0/api/ChangeStream.html#isClosed */
    isClosed(): boolean;

    /** http://mongodb.github.io/node-mongodb-native/3.0/api/ChangeStream.html#next */
    next(): Promise<any>;
    next(callback: MongoCallback<any>): void;

    /** http://mongodb.github.io/node-mongodb-native/3.0/api/ChangeStream.html#stream */
    stream(options?: { transform: Function }): Cursor;
}

export interface ChangeStreamOptions {
    fullDocument?: string;
    maxAwaitTimeMS?: number;
    resumeAfter?: Object;
    batchSize?: number;
    collation?: Object;
    readPreference?: ReadPreference;
}

type GridFSBucketWriteStreamId = string | number | Object | ObjectID;
               
export interface LoggerOptions {
    loggerLevel: string // Custom logger function
    logger: log // Override default global log level.
}

export type log = (message?: string, state?: LoggerState) => void

export interface LoggerState {
    type: string
    message: string
    className: string
    pid: number
    date: number
}

/** http://mongodb.github.io/node-mongodb-native/3.0/api/Logger.html */
export class Logger{
    constructor(className: string,options: LoggerOptions)
    // Log a message at the debug level
    debug(message: string, state: LoggerState):void
    // Log a message at the warn level
    warn(message: string, state: LoggerState):void
    // Log a message at the info level
    info(message: string, state: LoggerState):void
    // Log a message at the error level
    error(message: string, state: LoggerState):void
    // Is the logger set at info level
    isInfo():boolean
    // Is the logger set at error level
    isError():boolean
    // Is the logger set at error level
    isWarn():boolean
    // Is the logger set at debug level
    isDebug():boolean
    // Resets the logger to default settings, error and no filtered classes
    static reset():void
    // Get the current logger function
    static currentLogger():log
    //Set the current logger function
    static setCurrentLogger(log: log):void
    // Set what classes to log.
    static filter(type: string,values: string[]):void
    // Set the current log level
    static setLevel(level: string):void
}
