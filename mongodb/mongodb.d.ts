// Type definitions for MongoDB v2.1
// Project: https://github.com/mongodb/node-mongodb-native/tree/2.1
// Definitions by: Federico Caselli <https://github.com/CaselIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/

/// <reference path='../node/node.d.ts' />

declare module "mongodb" {
  import {EventEmitter} from 'events';


  // Class documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/MongoClient.html
  export class MongoClient {
    constructor();

    static connect(uri: string, callback: MongoCallback<Db>): void;
    static connect(uri: string, options?: MongoClientOptions): Promise<Db>;
    static connect(uri: string, options: MongoClientOptions, callback: MongoCallback<Db>): void;

    connect(uri: string, callback: MongoCallback<Db>): void;
    connect(uri: string, options?: MongoClientOptions): Promise<Db>;
    connect(uri: string, options: MongoClientOptions, callback: MongoCallback<Db>): void;
  }

  export interface MongoCallback<T> {
    (error: MongoError, result: T): void;
  }

  // http://mongodb.github.io/node-mongodb-native/2.1/api/MongoError.html
  export class MongoError extends Error {
    constructor(message: string);
    static create(options: Object): MongoError;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/MongoClient.html#.connect
  export interface MongoClientOptions {
    uri_decode_auth?: boolean;
    db?: DbCreateOptions;
    server?: ServerOptions;
    replSet?: ReplSetOptions;
    mongos?: MongosOptions;
    promiseLibrary?: Object;
  }

  // See : http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html
  export interface DbCreateOptions {
    authSource?: string;
    //  the write concern for the operation where < 1 is no acknowlegement of write and w >= 1, w = ‘majority’ or tag acknowledges the write.
    w?: number | string;
    // set the timeout for waiting for write concern to finish (combines with w option).
    wtimeout?: number;
    j?: boolean;
    // use c++ bson parser. default:false.
    native_parser?: boolean;
    // force server to create _id fields instead of client. default:false.
    forceServerObjectId?: boolean;
    serializeFunctions?: boolean;
    ignoreUndefined?: boolean;
    // peform operations using raw bson buffers. default:false.
    raw?: boolean;
    // when deserializing a Long will fit it into a Number if it’s smaller than 53 bits. default:true.
    promoteLongs?: boolean;
    bufferMaxEntries?: number;
    // the prefered read preference. use 'ReadPreference' class.
    readPreference?: ReadPreference | string;
    // custom primary key factory to generate _id values (see Custom primary keys).
    pkFactory?: Object;
    promiseLibrary?: Object;
    readConcern?: { level?: Object };
  }

  // See http://mongodb.github.io/node-mongodb-native/2.1/api/ReadPreference.html
  export class ReadPreference {
    constructor(mode: string, tags: Object);
    mode: string;
    tags: any;
    static PRIMARY: string;
    static PRIMARY_PREFERRED: string;
    static SECONDARY: string;
    static SECONDARY_PREFERRED: string;
    static NEAREST: string;
    isValid(mode: string): boolean;
    static isValid(mode: string): boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Server.html
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

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Server.html
  export interface ServerOptions {
    // - specify the number of connections in the pool default:5
    poolSize?: number;
    ssl?: boolean;
    sslValidate?: Object;
    checkServerIdentity?: boolean | Function;
    sslCA?: Array<Buffer | string>;
    sslCert?: Buffer | string;
    sslKey?: Buffer | string;
    sslPass?: Buffer | string;
    socketOptions?: SocketOptions;
    reconnectTries?: number;
    reconnectInterval?: number;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/ReplSet.html
  export interface ReplSetOptions {
    ha?: boolean;
    haInterval?: number;
    replicaSet?: string;
    secondaryAcceptableLatencyMS?: number;
    connectWithNoPrimary?: boolean;
    // - specify the number of connections in the pool default:5
    poolSize?: number;
    ssl?: boolean;
    sslValidate?: Object;
    checkServerIdentity?: boolean | Function;
    sslCA?: Array<Buffer | string>;
    sslCert?: Buffer | string;
    sslKey?: Buffer | string;
    sslPass?: Buffer | string;
    socketOptions?: SocketOptions;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Mongos.html
  export interface MongosOptions {
    ha?: boolean;
    haInterval?: number;
    // - specify the number of connections in the pool default:5
    poolSize?: number;
    ssl?: boolean;
    sslValidate?: Object;
    checkServerIdentity?: boolean | Function;
    sslCA?: Array<Buffer | string>;
    sslCert?: Buffer | string;
    sslKey?: Buffer | string;
    sslPass?: Buffer | string;
    socketOptions?: SocketOptions;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html
  export class Db extends EventEmitter {
    constructor(databaseName: string, serverConfig: Server | ReplSet | Mongos, options?: DbCreateOptions);

    serverConfig: Server | ReplSet | Mongos;
    bufferMaxEntries: number;
    databaseName: string;
    options: any;
    native_parser: boolean;
    slaveOk: boolean;
    writeConcern: any;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#addUser
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: DbAddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: DbAddUserOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#admin
    admin(): Admin;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#authenticate
    authenticate(userName: string, password: string, callback: MongoCallback<any>): void;
    authenticate(userName: string, password: string, options?: { authMechanism: string }): Promise<any>;
    authenticate(userName: string, password: string, options: { authMechanism: string }, callback: MongoCallback<any>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#close
    close(callback: MongoCallback<void>): void;
    close(forceClose?: boolean): Promise<void>;
    close(forceClose: boolean, callback: MongoCallback<void>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collection
    collection(name: string): Collection;
    collection(name: string, callback: MongoCallback<Collection>): Collection;
    collection(name: string, options: DbCollectionOptions, callback: MongoCallback<Collection>): Collection;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collections
    collections(): Promise<Collection[]>;
    collections(callback: MongoCallback<Collection[]>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#command
    command(command: Object, callback: MongoCallback<any>): void;
    command(command: Object, options?: { readPreference: ReadPreference | string }): Promise<any>;
    command(command: Object, options: { readPreference: ReadPreference | string }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createCollection
    createCollection(name: string, callback: MongoCallback<Collection>): void;
    createCollection(name: string, options?: CollectionCreateOptions): Promise<Collection>;
    createCollection(name: string, options: CollectionCreateOptions, callback: MongoCallback<Collection>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createIndex
    createIndex(name: string, fieldOrSpec: string | Object, callback: MongoCallback<any>): void;
    createIndex(name: string, fieldOrSpec: string | Object, options?: IndexOptions): Promise<any>;
    createIndex(name: string, fieldOrSpec: string | Object, options: IndexOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#db
    db(dbName: string): Db;
    db(dbName: string, options: { noListener?: boolean, returnNonCachedInstance?: boolean }): Db;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#dropCollection
    dropCollection(name: string): Promise<boolean>;
    dropCollection(name: string, callback: MongoCallback<boolean>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#dropDatabase
    dropDatabase(): Promise<any>;
    dropDatabase(callback: MongoCallback<any>): void;

    //deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#ensureIndex
    // ensureIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions, callback: Function): void;
    //deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#eval
    // eval(code: any, parameters: any[], options?: any, callback?: MongoCallback<any>): void;

    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#executeDbAdminCommand
    executeDbAdminCommand(command: Object, callback: MongoCallback<any>): void;
    executeDbAdminCommand(command: Object, options?: { readPreference?: ReadPreference | string, maxTimeMS?: number }): Promise<any>;
    executeDbAdminCommand(command: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number }, callback: MongoCallback<any>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#indexInformation
    indexInformation(name: string, callback: MongoCallback<any>): void;
    indexInformation(name: string, options?: { full?: boolean, readPreference?: ReadPreference | string }): Promise<any>;
    indexInformation(name: string, options: { full?: boolean, readPreference?: ReadPreference | string }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#listCollections
    listCollections(filter: Object, options?: { batchSize?: number, readPreference?: ReadPreference | string }): CommandCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#logout
    logout(callback: MongoCallback<any>): void;
    logout(options?: { dbName?: string }): Promise<any>;
    logout(options: { dbName?: string }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#open
    open(): Promise<Db>;
    open(callback: MongoCallback<Db>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#removeUser
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: { w?: number | string, wtimeout?: number, j?: boolean }): Promise<any>;
    removeUser(username: string, options: { w?: number | string, wtimeout?: number, j?: boolean }, callback: MongoCallback<any>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#renameCollection
    renameCollection(fromCollection: string, toCollection: string, callback: MongoCallback<Collection>): void;
    renameCollection(fromCollection: string, toCollection: string, options?: { dropTarget?: boolean }): Promise<Collection>;
    renameCollection(fromCollection: string, toCollection: string, options: { dropTarget?: boolean }, callback: MongoCallback<Collection>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#stats
    stats(callback: MongoCallback<any>): void;
    stats(options?: { scale?: number }): Promise<any>;
    stats(options: { scale?: number }, callback: MongoCallback<any>): void;
  }



  // Deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/Server.html
  export class Server extends EventEmitter {
    constructor(host: string, port: number, options?: ServerOptions);

    connections(): Array<any>;
  }

  // Deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/ReplSet.html
  export class ReplSet extends EventEmitter {
    constructor(servers: Array<Server>, options?: ReplSetOptions);

    connections(): Array<any>;
  }
  
  // Deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/ReplSet.html
  export class Mongos extends EventEmitter {
    constructor(servers: Array<Server>, options?: MongosOptions);

    connections(): Array<any>;
  }
  
  // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#addUser
  export interface DbAddUserOptions {
    w?: string | number;
    wtimeout?: number;
    j?: boolean;
    customData?: Object;
    roles?: Object[];
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createCollection
  export interface CollectionCreateOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    raw?: boolean;
    pkFactory?: Object;
    readPreference?: ReadPreference | string;
    serializeFunctions?: boolean;
    strict?: boolean;
    capped?: boolean;
    size?: number;
    max?: number;
    autoIndexId?: boolean;
  }

  // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collection
  export interface DbCollectionOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    raw?: boolean;
    pkFactory?: Object;
    readPreference?: ReadPreference | string;
    serializeFunctions?: boolean;
    strict?: boolean;
    readConcern?: { level: Object };
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createIndex
  export interface IndexOptions {
    // The write concern.
    w?: number | string;
    // The write concern timeout.
    wtimeout?: number;
    // Specify a journal write concern.
    j?: boolean;
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
  }

  // http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html
  export interface Admin {
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#addUser
    addUser(username: string, password: string, callback: MongoCallback<any>): void;
    addUser(username: string, password: string, options?: AddUserOptions): Promise<any>;
    addUser(username: string, password: string, options: AddUserOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#authenticate
    authenticate(username: string, callback: MongoCallback<any>): void;
    authenticate(username: string, password?: string): Promise<any>;
    authenticate(username: string, password: string, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#buildInfo
    buildInfo(): Promise<any>;
    buildInfo(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#command
    command(command: Object, callback: MongoCallback<any>): void;
    command(command: Object, options?: { readPreference?: ReadPreference | string, maxTimeMS?: number }): Promise<any>;
    command(command: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#listDatabases
    listDatabases(): Promise<any>;
    listDatabases(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#logout
    logout(): Promise<any>;
    logout(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#ping
    ping(): Promise<any>;
    ping(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#profilingInfo
    profilingInfo(): Promise<any>;
    profilingInfo(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#profilingLevel
    profilingLevel(): Promise<any>;
    profilingLevel(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#removeUser
    removeUser(username: string, callback: MongoCallback<any>): void;
    removeUser(username: string, options?: FSyncOptions): Promise<any>;
    removeUser(username: string, options: FSyncOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#replSetGetStatus
    replSetGetStatus(): Promise<any>;
    replSetGetStatus(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#serverInfo
    serverInfo(): Promise<any>;
    serverInfo(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#serverStatus
    serverStatus(): Promise<any>;
    serverStatus(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#setProfilingLevel
    setProfilingLevel(level: string): Promise<any>;
    setProfilingLevel(level: string, callback: MongoCallback<any>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#validateCollection
    validateCollection(collectionNme: string, callback: MongoCallback<any>): void;
    validateCollection(collectionNme: string, options?: Object): Promise<any>;
    validateCollection(collectionNme: string, options: Object, callback: MongoCallback<any>): void;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#addUser
  export interface AddUserOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    fsync: boolean;
    customData?: Object;
    roles?: Object[]
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#removeUser
  export interface FSyncOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    fsync?: boolean
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/ObjectID.html
  export class ObjectID {
    constructor(s?: string | number);

    generationTime: number;

    // Creates an ObjectID from a hex string representation of an ObjectID.
    // hexString – create a ObjectID from a passed in 24 byte hexstring.
    static createFromHexString(hexString: string): ObjectID;
    // Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
    // time – an integer number representing a number of seconds.
    static createFromTime(time: number): ObjectID;
    // Checks if a value is a valid bson ObjectId
    // id - Value to be checked
    static isValid(id: string | number): boolean;
    //Compares the equality of this ObjectID with otherID.
    equals(otherID: ObjectID): boolean;
    // Generate a 12 byte id string used in ObjectID's
    // time - optional parameter allowing to pass in a second based timestamp
    generate(time?: number): string;
    // Returns the generation date (accurate up to the second) that this ID was generated.
    getTimestamp(): Date;
    // Returns the ObjectID id as a 24 byte hex string representation
    toHexString(): string;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/Binary.html
  export class Binary {
    constructor(buffer: Buffer, subType?: number);

    static SUBTYPE_BYTE_ARRAY: number;
    static SUBTYPE_DEFAULT: number;
    static SUBTYPE_FUNCTION: number;
    static SUBTYPE_MD5: number;
    static SUBTYPE_USER_DEFINED: number;
    static SUBTYPE_UUID: number;
    static SUBTYPE_UUID_OLD: number;

    // The length of the binary.
    length(): number;
    // Updates this binary with byte_value
    put(byte_value: number | string): void;
    // Reads length bytes starting at position.
    read(position: number, length: number): Buffer;
    // Returns the value of this binary as a string.
    value(): string;
    // Writes a buffer or string to the binary
    write(buffer: Buffer | string, offset: number): void;
  }
  //http://mongodb.github.io/node-mongodb-native/2.1/api/Double.html
  export class Double {
    constructor(value: number);

    valueOf(): number;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Long.html
  export class Long {
    constructor(low: number, high: number);

    static MAX_VALUE: Long;
    static MIN_VALUE: Long;
    static NEG_ONE: Long;
    static ONE: Long;
    static ZERO: Long;

    static fromBits(lowBits: number, highBits: number): Long;
    static fromInt(value: number): Long;
    static fromNumber(value: number): Long;
    static fromString(str: string, radix?: number): Long;

    add(other: Long): Long;
    and(other: Long): Long;
    compare(other: Long): number;
    div(other: Long): Long;
    equals(other: Long): boolean;
    getHighBits(): number;
    getLowBits(): number;
    getLowBitsUnsigned(): number;
    getNumBitsAbs(): number;
    greaterThan(other: Long): number;
    greaterThanOrEqual(other: Long): number;
    isNegative(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    lessThan(other: Long): boolean;
    lessThanOrEqual(other: Long): boolean;
    modulo(other: Long): Long;
    multiply(other: Long): Long;
    negate(): Long;
    not(): Long;
    notEquals(other: Long): boolean;
    or(other: Long): Long;
    shiftLeft(other: number): Long;
    shiftRight(other: number): Long;
    shiftRightUnsigned(other: number): Long;
    subtract(other: Long): Long;
    toInt(): number;
    toJSON(): string;
    toNumber(): number;
    toString(radix?: number): string;
    xor(other: Long): Long;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/MaxKey.html
  export class MaxKey { }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/MinKey.html
  export class MinKey { }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Timestamp.html
  export class Timestamp {
    constructor(low: number, high: number);

    static MAX_VALUE: Timestamp;
    static MIN_VALUE: Timestamp;
    static NEG_ONE: Timestamp;
    static ONE: Timestamp;
    static ZERO: Timestamp;

    static fromBits(lowBits: number, highBits: number): Timestamp;
    static fromInt(value: number): Timestamp;
    static fromNumber(value: number): Timestamp;
    static fromString(str: string, radix?: number): Timestamp;

    add(other: Timestamp): Timestamp;
    and(other: Timestamp): Timestamp;
    compare(other: Timestamp): number;
    div(other: Timestamp): Timestamp;
    equals(other: Timestamp): boolean;
    getHighBits(): number;
    getLowBits(): number;
    getLowBitsUnsigned(): number;
    getNumBitsAbs(): number;
    greaterThan(other: Timestamp): number;
    greaterThanOrEqual(other: Timestamp): number;
    isNegative(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    lessThan(other: Timestamp): boolean;
    lessThanOrEqual(other: Timestamp): boolean;
    modulo(other: Timestamp): Timestamp;
    multiply(other: Timestamp): Timestamp;
    negate(): Timestamp;
    not(): Timestamp;
    notEquals(other: Timestamp): boolean;
    or(other: Timestamp): Timestamp;
    shiftLeft(other: number): Timestamp;
    shiftRight(other: number): Timestamp;
    shiftRightUnsigned(other: number): Timestamp;
    subtract(other: Timestamp): Timestamp;
    toInt(): number;
    toJSON(): string;
    toNumber(): number;
    toString(radix?: number): string;
    xor(other: Timestamp): Timestamp;
  }

  // Documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html
  export interface Collection {
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
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#aggregate
    aggregate(pipeline: Object[], callback: MongoCallback<any>): AggregationCursor;
    aggregate(pipeline: Object[], options?: CollectionAggregationOptions, callback?: MongoCallback<any>): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#bulkWrite
    bulkWrite(operations: Object[], callback: MongoCallback<BulkWriteOpResultObject>): void;
    bulkWrite(operations: Object[], options?: CollectionBluckWriteOptions): Promise<BulkWriteOpResultObject>;
    bulkWrite(operations: Object[], options: CollectionBluckWriteOptions, callback: MongoCallback<BulkWriteOpResultObject>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#count
    count(query: Object, callback: MongoCallback<number>): void;
    count(query: Object, options?: MongoCountPreferences): Promise<number>;
    count(query: Object, options: MongoCountPreferences, callback: MongoCallback<number>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#createIndex
    createIndex(fieldOrSpec: string | any, callback: MongoCallback<string>): void;
    createIndex(fieldOrSpec: string | any, options?: IndexOptions): Promise<string>;
    createIndex(fieldOrSpec: string | any, options: IndexOptions, callback: MongoCallback<string>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#createIndexes and http://docs.mongodb.org/manual/reference/command/createIndexes/
    createIndexes(indexSpecs: Object[]): Promise<any>;
    createIndexes(indexSpecs: Object[], callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#deleteMany
    deleteMany(filter: Object, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteMany(filter: Object, options?: CollectionOptions): Promise<DeleteWriteOpResultObject>;
    deleteMany(filter: Object, options: CollectionOptions, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#deleteOne
    deleteOne(filter: Object, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    deleteOne(filter: Object, options?: { w?: number | string, wtimmeout?: number, j?: boolean, bypassDocumentValidation?: boolean }): Promise<DeleteWriteOpResultObject>;
    deleteOne(filter: Object, options: { w?: number | string, wtimmeout?: number, j?: boolean, bypassDocumentValidation?: boolean }, callback: MongoCallback<DeleteWriteOpResultObject>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#distinct
    distinct(key: string, query: Object, callback: MongoCallback<any>): void;
    distinct(key: string, query: Object, options?: { readPreference?: ReadPreference | string }): Promise<any>;
    distinct(key: string, query: Object, options: { readPreference?: ReadPreference | string }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#drop
    drop(): Promise<any>;
    drop(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#dropIndex
    dropIndex(indexName: string, callback: MongoCallback<any>): void;
    dropIndex(indexName: string, options?: CollectionOptions): Promise<any>;
    dropIndex(indexName: string, options: CollectionOptions, callback: MongoCallback<any>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#dropIndexes
    dropIndexes(): Promise<any>;
    dropIndexes(callback?: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#find
    find(query?: Object): Cursor;
    /** @deprecated */
    find(query: Object, fields?: Object, skip?: number, limit?: number, timeout?: number): Cursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#findOne
    /** @deprecated use find().limit(1).next(function(err, doc){}) */
    findOne(filter: Object, callback: MongoCallback<any>): void;
    /** @deprecated use find().limit(1).next(function(err, doc){}) */
    findOne(filter: Object, options?: FindOneOptions): Promise<any>;
    /** @deprecated use find().limit(1).next(function(err, doc){}) */
    findOne(filter: Object, options: FindOneOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#findOneAndDelete
    findOneAndDelete(filter: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject>): void;
    findOneAndDelete(filter: Object, options?: { projection?: Object, sort?: Object, maxTimeMS?: number }): Promise<FindAndModifyWriteOpResultObject>;
    findOneAndDelete(filter: Object, options: { projection?: Object, sort?: Object, maxTimeMS?: number }, callback: MongoCallback<FindAndModifyWriteOpResultObject>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#findOneAndReplace
    findOneAndReplace(filter: Object, replacement: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject>): void;
    findOneAndReplace(filter: Object, replacement: Object, options?: FindOneAndReplaceOption): Promise<FindAndModifyWriteOpResultObject>;
    findOneAndReplace(filter: Object, replacement: Object, options: FindOneAndReplaceOption, callback: MongoCallback<FindAndModifyWriteOpResultObject>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#findOneAndUpdate
    findOneAndUpdate(filter: Object, update: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject>): void;
    findOneAndUpdate(filter: Object, update: Object, options?: FindOneAndReplaceOption): Promise<FindAndModifyWriteOpResultObject>;
    findOneAndUpdate(filter: Object, update: Object, options: FindOneAndReplaceOption, callback: MongoCallback<FindAndModifyWriteOpResultObject>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#geoHaystackSearch
    geoHaystackSearch(x: number, y: number, callback: MongoCallback<any>): void;
    geoHaystackSearch(x: number, y: number, options?: GeoHaystackSearchOptions): Promise<any>;
    geoHaystackSearch(x: number, y: number, options: GeoHaystackSearchOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#geoNear
    geoNear(x: number, y: number, callback: MongoCallback<any>): void;
    geoNear(x: number, y: number, options?: GeoNearOptions): Promise<any>;
    geoNear(x: number, y: number, options: GeoNearOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#group
    group(keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, callback: MongoCallback<any>): void;
    group(keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, options?: { readPreference?: ReadPreference | string }): Promise<any>;
    group(keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, options: { readPreference?: ReadPreference | string }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#indexes
    indexes(): Promise<any>;
    indexes(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#indexExists
    indexExists(indexes: string | string[]): Promise<boolean>;
    indexExists(indexes: string | string[], callback: MongoCallback<boolean>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#indexInformation
    indexInformation(callback: MongoCallback<any>): void;
    indexInformation(options?: { full: boolean }): Promise<any>;
    indexInformation(options: { full: boolean }, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#initializeOrderedBulkOp
    initializeOrderedBulkOp(options?: CollectionOptions): OrderedBulkOperation;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#initializeUnorderedBulkOp
    initializeUnorderedBulkOp(options?: CollectionOptions): UnorderedBulkOperation;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#insertOne
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: Object, callback: MongoCallback<InsertOneWriteOpResult>): void;
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: Object, options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult>;
    /** @deprecated Use insertOne, insertMany or bulkWrite */
    insert(docs: Object, options: CollectionInsertOneOptions, callback: MongoCallback<InsertOneWriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#insertMany
    insertMany(docs: Object[], callback: MongoCallback<InsertWriteOpResult>): void;
    insertMany(docs: Object[], options?: CollectionInsertManyOptions): Promise<InsertWriteOpResult>;
    insertMany(docs: Object[], options: CollectionInsertManyOptions, callback: MongoCallback<InsertWriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#insertOne
    insertOne(docs: Object, callback: MongoCallback<InsertOneWriteOpResult>): void;
    insertOne(docs: Object, options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult>;
    insertOne(docs: Object, options: CollectionInsertOneOptions, callback: MongoCallback<InsertOneWriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#isCapped
    isCapped(): Promise<any>;
    isCapped(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#listIndexes
    listIndexes(options?: { batchSize?: number, readPreference?: ReadPreference | string }): CommandCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#mapReduce
    mapReduce(map: Function | string, reduce: Function | string, callback: MongoCallback<any>): void;
    mapReduce(map: Function | string, reduce: Function | string, options?: MapReduceOptions): Promise<any>;
    mapReduce(map: Function | string, reduce: Function | string, options: MapReduceOptions, callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#options
    options(): Promise<any>;
    options(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#parallelCollectionScan
    parallelCollectionScan(callback: MongoCallback<Cursor[]>): void;
    parallelCollectionScan(options?: ParallelCollectionScanOptions): Promise<Cursor[]>;
    parallelCollectionScan(options: ParallelCollectionScanOptions, callback: MongoCallback<Cursor[]>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#reIndex
    reIndex(): Promise<any>;
    reIndex(callback: MongoCallback<any>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#remove
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: Object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: Object, options?: CollectionOptions & { single?: boolean }): Promise<WriteOpResult>;
    /** @deprecated Use use deleteOne, deleteMany or bulkWrite */
    remove(selector: Object, options?: CollectionOptions & { single?: boolean }, callback?: MongoCallback<WriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#rename
    rename(newName: string, callback: MongoCallback<Collection>): void;
    rename(newName: string, options?: { dropTarget?: boolean }): Promise<Collection>;
    rename(newName: string, options: { dropTarget?: boolean }, callback: MongoCallback<Collection>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#replaceOne
    replaceOne(filter: Object, doc: Object, callback: MongoCallback<UpdateWriteOpResult>): void;
    replaceOne(filter: Object, doc: Object, options?: ReplaceOneOptions): Promise<UpdateWriteOpResult>;
    replaceOne(filter: Object, doc: Object, options: ReplaceOneOptions, callback: MongoCallback<UpdateWriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#save
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: Object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: Object, options?: CollectionOptions): Promise<WriteOpResult>;
    /** @deprecated Use insertOne, insertMany, updateOne or updateMany */
    save(doc: Object, options: CollectionOptions, callback: MongoCallback<WriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#stats
    stats(callback: MongoCallback<CollStats>): void;
    stats(options?: { scale: number }): Promise<CollStats>;
    stats(options: { scale: number }, callback: MongoCallback<CollStats>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#update
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(filter: Object, update: Object, callback: MongoCallback<WriteOpResult>): void;
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(filter: Object, update: Object, options?: ReplaceOneOptions & { multi?: boolean }): Promise<WriteOpResult>;
    /** @deprecated use updateOne, updateMany or bulkWrite */
    update(filter: Object, update: Object, options: ReplaceOneOptions & { multi?: boolean }, callback: MongoCallback<WriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#updateMany
    updateMany(filter: Object, update: Object, callback: MongoCallback<UpdateWriteOpResult>): void;
    updateMany(filter: Object, update: Object, options?: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean; }): Promise<UpdateWriteOpResult>;
    updateMany(filter: Object, update: Object, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean; }, callback: MongoCallback<UpdateWriteOpResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#updateOne
    updateOne(filter: Object, update: Object, callback: MongoCallback<UpdateWriteOpResult>): void;
    updateOne(filter: Object, update: Object, options?: ReplaceOneOptions): Promise<UpdateWriteOpResult>;
    updateOne(filter: Object, update: Object, options: ReplaceOneOptions, callback: MongoCallback<UpdateWriteOpResult>): void;
  }

  // Documentation: http://docs.mongodb.org/manual/reference/command/collStats/
  //TODO complete this
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
    userFlags: number;
    // Total index size in bytes.
    totalIndexSize: number;
    // Size of specific indexes in bytes.
    indexSizes: {
      _id_: number;
      username: number;
    };
    capped: boolean;
    maxSize: boolean;
    wiredTiger: any;
    indexDetails: any;
    ok: number;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#aggregate
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
    maxTimeMS?: boolean;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#insertMany
  export interface CollectionInsertManyOptions {
    // The write concern.
    w?: number | string;
    // The write concern timeout.
    wtimeout?: number;
    // Specify a journal write concern.
    j?: boolean;
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    //Force server to assign _id values instead of driver.
    forceServerObjectId?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#bulkWrite
  export interface CollectionBluckWriteOptions {
    // The write concern.
    w?: number | string;
    // The write concern timeout.
    wtimeout?: number;
    // Specify a journal write concern.
    j?: boolean;
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    // Execute write operation in ordered or unordered fashion.
    ordered?: boolean;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~BulkWriteOpResult
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

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#count
  export interface MongoCountPreferences {
    // The limit of documents to count.
    limit?: number;
    // The number of documents to skip for the count.
    skip?: boolean;
    // An index name hint for the query.
    hint?: string;
    // The preferred read preference
    readPreference?: ReadPreference | string;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~deleteWriteOpResult
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

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~findAndModifyWriteOpResult
  export interface FindAndModifyWriteOpResultObject {
    //Document returned from findAndModify command.
    value?: any;
    //The raw lastErrorObject returned from the command.
    lastErrorObject?: any;
    //Is 1 if the command executed correctly.
    ok?: number;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#findOneAndReplace
  export interface FindOneAndReplaceOption {
    projection?: Object;
    sort?: Object;
    maxTimeMS?: number;
    upsert?: boolean;
    returnOriginal?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#geoHaystackSearch
  export interface GeoHaystackSearchOptions {
    readPreference?: ReadPreference | string;
    maxDistance?: number;
    search?: Object;
    limit?: number;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#geoNear
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

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Code.html
  export class Code {
    constructor(code: string | Function, scope?: Object)
    code: string | Function;
    scope: any;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#deleteMany
  export interface CollectionOptions {
    //The write concern.
    w?: number | string;
    //The write concern timeout.
    wtimeout?: number;
    //Specify a journal write concern.
    j?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html
  export interface OrderedBulkOperation {
    length: number;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html#execute
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html#find
    find(selector: Object): FindOperatorsOrdered;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html#insert
    insert(doc: Object): OrderedBulkOperation;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/BulkWriteResult.html
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

  //http://mongodb.github.io/node-mongodb-native/2.1/api/WriteError.html
  export interface WriteError {
    //Write concern error code.
    code: number;
    //Write concern error original bulk operation index.
    index: number;
    //Write concern error message.
    errmsg: string;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/WriteConcernError.html
  export interface WriteConcernError {
    //Write concern error code.
    code: number;
    //Write concern error message.
    errmsg: string;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/FindOperatorsOrdered.html
  export interface FindOperatorsOrdered {
    delete(): OrderedBulkOperation;
    deleteOne(): OrderedBulkOperation;
    replaceOne(doc: Object): OrderedBulkOperation;
    update(doc: Object): OrderedBulkOperation;
    updateOne(doc: Object): OrderedBulkOperation;
    upsert(): FindOperatorsOrdered;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html
  export interface UnorderedBulkOperation {
    //http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html#execute
    execute(callback: MongoCallback<BulkWriteResult>): void;
    execute(options?: FSyncOptions): Promise<BulkWriteResult>;
    execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html#find
    find(selector: Object): FindOperatorsUnordered;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html#insert
    insert(doc: Object): UnorderedBulkOperation;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/FindOperatorsUnordered.html
  export interface FindOperatorsUnordered {
    length: number;
    remove(): UnorderedBulkOperation;
    removeOne(): UnorderedBulkOperation;
    replaceOne(doc: Object): UnorderedBulkOperation;
    update(doc: Object): UnorderedBulkOperation;
    updateOne(doc: Object): UnorderedBulkOperation;
    upsert(): FindOperatorsUnordered;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#findOne
  export interface FindOneOptions {
    limit?: number,
    sort?: Array<any> | Object,
    fields?: Object,
    skip?: number,
    hint?: Object,
    explain?: boolean,
    snapshot?: boolean,
    timeout?: boolean,
    tailable?: boolean,
    batchSize?: number,
    returnKey?: boolean,
    maxScan?: number,
    min?: number,
    max?: number,
    showDiskLoc?: boolean,
    comment?: string,
    raw?: boolean,
    readPreference?: ReadPreference | string,
    partial?: boolean,
    maxTimeMs?: number
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~insertWriteOpResult
  export interface InsertWriteOpResult {
    insertedCount: number;
    ops: Array<any>;
    insertedIds: Array<ObjectID>;
    connection: any;
    result: { ok: number, n: number }
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#insertOne
  export interface CollectionInsertOneOptions {
    // The write concern.
    w?: number | string;
    // The write concern timeout.
    wtimeout?: number;
    // Specify a journal write concern.
    j?: boolean;
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    //Force server to assign _id values instead of driver.
    forceServerObjectId?: boolean;
    //Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~insertOneWriteOpResult
  export interface InsertOneWriteOpResult {
    insertedCount: number;
    ops: Array<any>;
    insertedId: ObjectID;
    connection: any;
    result: { ok: number, n: number }
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#parallelCollectionScan
  export interface ParallelCollectionScanOptions {
    readPreference?: ReadPreference | string;
    batchSize?: number;
    numCursors?: number;
    raw?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#replaceOne
  export interface ReplaceOneOptions {
    upsert?: boolean;
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    bypassDocumentValidation?: boolean;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~updateWriteOpResult
  export interface UpdateWriteOpResult {
    result: { ok: number, n: number, nModified: number };
    connection: any;
    matchedCount: number;
    modifiedCount: number;
    upsertedCount: number;
    upsertedId: { _id: ObjectID };
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#mapReduce
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
    bypassDocumentValidation?: boolean
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~WriteOpResult
  export interface WriteOpResult {
    ops: Array<any>;
    connection: any;
    result: any;
  }
  
  //http://mongodb.github.io/node-mongodb-native/2.1/api/external-Readable.html
  export interface Readable {
    pause(): void;
    pipe(destination: Writable, options?: Object): void;
    read(size: number): string | Buffer | void;
    resume(): void;
    setEncoding(encoding: string): void;
    unpipe(destination?: Writable): void;
    unshift(stream: Buffer | string): void;
    wrap(stream: Stream): void;
  }

  export interface Writable { }
  export interface Stream { }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#~resultCallback
  export type CursorResult = any | void | boolean;

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html
  export interface Cursor extends Readable, NodeJS.EventEmitter {

    sortValue: string;
    timeout: boolean;
    readPreference: ReadPreference;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html
    addCursorFlag(flag: string, value: boolean): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#addQueryModifier
    addQueryModifier(name: string, value: boolean): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#batchSize
    batchSize(value: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#clone
    clone(): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#close
    close(): Promise<CursorResult>;
    close(callback: MongoCallback<CursorResult>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#comment
    comment(value: string): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#count
    count(applySkipLimit: boolean, callback: MongoCallback<number>): void;
    count(applySkipLimit: boolean, options?: CursorCommentOptions): Promise<number>;
    count(applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback<number>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#explain
    explain(): Promise<CursorResult>;
    explain(callback: MongoCallback<CursorResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#filter
    filter(filter: Object): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#forEach
    forEach(iterator: IteratorCallback, callback: EndCallback): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#hasNext
    hasNext(): Promise<boolean>;
    hasNext(callback: MongoCallback<boolean>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#hint
    hint(hint: Object): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#isClosed
    isClosed(): boolean;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#limit
    limit(value: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#map
    map(transform: Function): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#max
    max(max: number): Cursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#maxAwaitTimeMS
    maxAwaitTimeMS(value: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#maxScan
    maxScan(maxScan: Object): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#maxTimeMS
    maxTimeMS(value: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#min
    min(min: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#next
    next(): Promise<CursorResult>;
    next(callback: MongoCallback<CursorResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#pause
    pause(): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#pipe
    pipe(destination: Writable, options?: Object): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#project
    project(value: Object): Cursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#read
    read(size: number): string | Buffer | void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#resume
    resume(): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#next
    returnKey(returnKey: Object): Cursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#rewind
    rewind(): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#setCursorOption
    setCursorOption(field: string, value: Object): Cursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#setEncoding
    setEncoding(encoding: string): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#setReadPreference
    setReadPreference(readPreference: string | ReadPreference): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#showRecordId
    showRecordId(showRecordId: Object): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#skip
    skip(value: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#snapshot
    snapshot(snapshot: Object): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#sort
    sort(keyOrList: string | Object[] | Object | Object, direction?: number): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#stream
    stream(options?: { transform?: Function }): Cursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#toArray
    toArray(): Promise<any[]>;
    toArray(callback: MongoCallback<any[]>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#unpipe
    unpipe(destination?: Writable): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#unshift
    unshift(stream: Buffer | string): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#wrap
    wrap(stream: Stream): void;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#count
  export interface CursorCommentOptions {
    skip?: number;
    limit?: number;
    maxTimeMS?: number;
    hint?: string;
    readPreference?: ReadPreference | string;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#~iteratorCallback
  export interface IteratorCallback {
    (doc: any): void;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#~endCallback
  export interface EndCallback {
    (error: MongoError): void;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#~resultCallback
  export type AggregationCursorResult = any | void;

  //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html
  export interface AggregationCursor extends Readable, NodeJS.EventEmitter {
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#batchSize
    batchSize(value: number): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#clone
    clone(): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#close
    close(): Promise<AggregationCursorResult>;
    close(callback: MongoCallback<AggregationCursorResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#each
    each(callback: MongoCallback<AggregationCursorResult>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#explain
    explain(): Promise<AggregationCursorResult>;
    explain(callback: MongoCallback<AggregationCursorResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#geoNear
    geoNear(document: Object): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#group
    group(document: Object): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#isClosed
    isClosed(): boolean;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#limit
    limit(value: number): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#match
    match(document: Object): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#maxTimeMS
    maxTimeMS(value: number): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#next
    next(): Promise<AggregationCursorResult>;
    next(callback: MongoCallback<AggregationCursorResult>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#out
    out(destination: string): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#pause
    pause(): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#pipe
    pipe(destination: Writable, options?: Object): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#project
    project(document: Object): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#read
    read(size: number): string | Buffer | void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#redact
    redact(document: Object): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#resume
    resume(): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#rewind
    rewind(): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#setEncoding
    setEncoding(encoding: string): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#skip
    skip(value: number): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#sort
    sort(document: Object): AggregationCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#toArray
    toArray(): Promise<any[]>;
    toArray(callback: MongoCallback<any[]>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#unpipe
    unpipe(destination?: Writable): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#unshift
    unshift(stream: Buffer | string): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#unwind
    unwind(field: string): AggregationCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/AggregationCursor.html#wrap
    wrap(stream: Stream): void;
  }

  //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html
  export interface CommandCursor extends Readable, NodeJS.EventEmitter {
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#batchSize
    batchSize(value: number): CommandCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#clone
    clone(): CommandCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#close
    close(): Promise<AggregationCursorResult>;
    close(callback: MongoCallback<AggregationCursorResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#each
    each(callback: MongoCallback<AggregationCursorResult>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#isClosed
    isClosed(): boolean;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#maxTimeMS
    maxTimeMS(value: number): CommandCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#next
    next(): Promise<AggregationCursorResult>;
    next(callback: MongoCallback<AggregationCursorResult>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#pause
    pause(): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#pipe
    pipe(destination: Writable, options?: Object): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#read
    read(size: number): string | Buffer | void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#resume
    resume(): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#rewind
    rewind(): CommandCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#setEncoding
    setEncoding(encoding: string): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#setReadPreference
    setReadPreference(readPreference: string | ReadPreference): CommandCursor;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#toArray
    toArray(): Promise<any[]>;
    toArray(callback: MongoCallback<any[]>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#unpipe
    unpipe(destination?: Writable): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#unshift
    unshift(stream: Buffer | string): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html#wrap
    wrap(stream: Stream): void;
  }
}
