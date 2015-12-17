// Type definitions for MongoDB v2.1
// Project: https://github.com/mongodb/node-mongodb-native
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Documentation : http://mongodb.github.io/node-mongodb-native/

/// <reference path='../node/node.d.ts' />
/// <reference path='../es6-promise/es6-promise.d.ts' />

declare module "mongodb" {
  import {EventEmitter} from 'events';
  import {Promise} from 'es6-promise';

  // Class documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/MongoClient.html
  export class MongoClient {
    constructor();

    static connect(uri: string): Promise<Db>;
    static connect(uri: string, callback: MongoCallback<Db>): void;
    static connect(uri: string, options: any): Promise<Db>;
    static connect(uri: string, options: any, callback: MongoCallback<Db>): void;

    connect(uri: string): Promise<Db>;
    connect(uri: string, callback: MongoCallback<Db>): void;
    connect(uri: string, options: any): Promise<Db>;
    connect(uri: string, options: any, callback: MongoCallback<Db>): void;
  }

  // Deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/Server.html
  export class Server extends EventEmitter {
    constructor(host: string, port: number, options?: ServerOptions);

    public connections(): Array<any>;
  }
  
  // Deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/ReplSet.html
  export class ReplSet extends EventEmitter {
    constructor(servers: Array<Server>, options?: ReplSetOptions);

    public connections(): Array<any>;
  }
  
  // Deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/ReplSet.html
  export class Mongos extends EventEmitter {
    constructor(servers: Array<Server>, options?: MongosOptions);

    public connections(): Array<any>;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/db.html
  export class Db extends EventEmitter {
    constructor(databaseName: string, serverConfig: Server | ReplSet | Mongos, options?: DbCreateOptions);

    public serverConfig: Server | ReplSet | Mongos;
    public bufferMaxEntries: number;
    public databaseName: string;
    public options: Object;
    public native_parser: boolean;
    public slaveOk: boolean;
    public writeConcern: Object;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#addUser
    public addUser(username: string, password: string): Promise<Object>;
    public addUser(username: string, password: string, callback: MongoCallback<Object>): void;
    public addUser(username: string, password: string, options: { w?: number | string, wtimeout?: number, j?: boolean, customData?: Object, roles?: Object[] }): Promise<Object>;
    public addUser(username: string, password: string, options: { w?: number | string, wtimeout?: number, j?: boolean, customData?: Object, roles?: Object[] }, callback: MongoCallback<Object>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#admin
    public admin(): Admin;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#authenticate
    public authenticate(userName: string, password: string): Promise<Object>;
    public authenticate(userName: string, password: string, callback: MongoCallback<Object>): void;
    public authenticate(userName: string, password: string, options: { authMechanism: string }): Promise<Object>;
    public authenticate(userName: string, password: string, options: { authMechanism: string }, callback: MongoCallback<Object>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#close
    public close(): Promise<void>;
    public close(callback: MongoCallback<void>): void;
    public close(forceClose: boolean): Promise<void>;
    public close(forceClose: boolean, callback: MongoCallback<void>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collection
    public collection(name: string): Collection;
    public collection(name: string, callback: MongoCallback<Collection>): Collection;
    public collection(name: string, options: MongoCollectionOptions, callback: MongoCallback<Collection>): Collection;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collections
    public collections(): Promise<Collection[]>;
    public collections(callback: MongoCallback<Collection[]>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#command
    public command(command: Object): Promise<Object>;
    public command(command: Object, callback?: MongoCallback<Object>): void;
    public command(command: Object, options: { readPreference: ReadPreference | string }): Promise<Object>;
    public command(command: Object, options: { readPreference: ReadPreference | string }, callback: MongoCallback<Object>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createCollection
    public createCollection(name: string): Promise<Collection>;
    public createCollection(name: string, callback: MongoCallback<Collection>): void;
    public createCollection(name: string, options: CollectionCreateOptions): Promise<Collection>;
    public createCollection(name: string, options: CollectionCreateOptions, callback: MongoCallback<Collection>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createIndex
    public createIndex(name: string, fieldOrSpec: string | Object): Promise<Object>;
    public createIndex(name: string, fieldOrSpec: string | Object, callback: MongoCallback<Object>): void;
    public createIndex(name: string, fieldOrSpec: string | Object, options: IndexOptions): Promise<Object>;
    public createIndex(name: string, fieldOrSpec: string | Object, options: IndexOptions, callback: MongoCallback<Object>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#db
    public db(dbName: string): Db;
    public db(dbName: string, options: { noListener?: boolean, returnNonCachedInstance?: boolean }): Db;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#dropCollection
    public dropCollection(name: string): Promise<Object>;
    public dropCollection(name: string, callback: MongoCallback<Object>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#dropDatabase
    public dropDatabase(): Promise<Object>;
    public dropDatabase(callback: MongoCallback<Object>): void;
    
    //deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#ensureIndex
    //public ensureIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions, callback: Function): void;
    //deprecated http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#eval
    //public eval(code: any, parameters: any[], options?: any, callback?: MongoCallback<Object>): void;
    
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#executeDbAdminCommand
    public executeDbAdminCommand(command: Object): Promise<Object>;
    public executeDbAdminCommand(command: Object, callback: MongoCallback<Object>): void;
    public executeDbAdminCommand(command: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number }): Promise<Object>;
    public executeDbAdminCommand(command: Object, options: { readPreference?: ReadPreference | string, maxTimeMS?: number }, callback: MongoCallback<Object>): void;
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#indexInformation
    public indexInformation(name: string): Promise<Object>;
    public indexInformation(name: string, callback: MongoCallback<Object>): void;
    public indexInformation(name: string, options: { full?: boolean, readPreference?: ReadPreference | string }): Promise<Object>;
    public indexInformation(name: string, options: { full?: boolean, readPreference?: ReadPreference | string }, callback: MongoCallback<Object>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#listCollections
    public listCollections(filter: Object, options?: { batchSize?: number, readPreference?: ReadPreference | string }): CommandCursor;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#logout
    public logout(): Promise<Object>;
    public logout(callback: MongoCallback<Object>): void;
    public logout(options: { dbName?: string }): Promise<Object>;
    public logout(options: { dbName?: string }, callback: MongoCallback<Object>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#open
    public open(): Promise<Db>;
    public open(callback: MongoCallback<Db>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#removeUser
    public removeUser(username: string): Promise<Object>;
    public removeUser(username: string, callback: MongoCallback<Object>): void;
    public removeUser(username: string, options: { w?: number | string, wtimeout?: number, j?: boolean }): Promise<Object>;
    public removeUser(username: string, options: { w?: number | string, wtimeout?: number, j?: boolean }, callback: MongoCallback<Object>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#renameCollection
    public renameCollection(fromCollection: string, toCollection: string): Promise<Collection>;
    public renameCollection(fromCollection: string, toCollection: string, callback: MongoCallback<Collection>): void;
    public renameCollection(fromCollection: string, toCollection: string, options: { dropTarget?: boolean }): Promise<Collection>;
    public renameCollection(fromCollection: string, toCollection: string, options: { dropTarget?: boolean }, callback: MongoCallback<Collection>): void;
    //http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#stats
    public stats(): Promise<Object>;;
    public stats(callback: MongoCallback<Object>): void;
    public stats(options: { scale?: number }): Promise<Object>;;
    public stats(options: { scale?: number }, callback: MongoCallback<Object>): void;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
  // Last update: doc. version 1.3.13 (28.08.2013)
  export class ObjectID {
    constructor(s?: string);

    // Returns the ObjectID id as a 24 byte hex string representation
    public toHexString(): string;

    // Compares the equality of this ObjectID with otherID.
    public equals(otherID: ObjectID): boolean;

    // Returns the generation date (accurate up to the second) that this ID was generated.
    public getTimestamp(): Date;

    // Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
    // time – an integer number representing a number of seconds.
    public static createFromTime(time: number): ObjectID;

    // Creates an ObjectID from a hex string representation of an ObjectID.
    // hexString – create a ObjectID from a passed in 24 byte hexstring.
    public static createFromHexString(hexString: string): ObjectID;
    
    // Checks if a value is a valid bson ObjectId
    // id - Value to be checked
    public static isValid(id: string): Boolean;
    
    // Generate a 12 byte id string used in ObjectID's
    // time - optional parameter allowing to pass in a second based timestamp
    public generate(time?: number): string;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-bson-generated/binary.html
  export class Binary {
    constructor(buffer: Buffer, subType?: number);

    // Updates this binary with byte_value
    put(byte_value: any): void;

    // Writes a buffer or string to the binary
    write(buffer: any, offset: number): void;

    // Reads length bytes starting at position.
    read(position: number, length: number): Buffer;

    // Returns the value of this binary as a string.
    value(): string;

    // The length of the binary.
    length(): number;
  }

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

  export interface PKFactory {
    counter: number;
    createPk: () => number;
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
    pkFactory?: PKFactory;
    promiseLibrary?: Object;
    readConcern?: Object;
  }
  
  // See http://mongodb.github.io/node-mongodb-native/2.1/api/ReadPreference.html
  export class ReadPreference {
    constructor(mode: string, tags: Object);
    public static PRIMARY: string;
    public static PRIMARY_PREFERRED: string;
    public static SECONDARY: string;
    public static SECONDARY_PREFERRED: string;
    public static NEAREST: string;
    public isValid(mode: string): boolean;
    public static isValid(mode: string): boolean;
  }

  // See : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
  // Current definition by documentation version 1.3.13 (28.08.2013)
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
    flags: number;

    // Total index size in bytes.
    totalIndexSize: number;

    // Size of specific indexes in bytes.
    indexSizes: {
      _id_: number;
      username: number;
    };
  }

  // Documentation : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
  export interface Collection {
    new (db: Db, collectionName: string, pkFactory?: Object, options?: CollectionCreateOptions): Collection; // is this right?
    /**
     * @deprecated use insertOne or insertMany
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insert
     */
    insert(query: any, callback: (err: Error, result: any) => void): void;
    insert(query: any, options: { safe?: any; continueOnError?: boolean; keepGoing?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertOne
    insertOne(doc: any, callback: (err: Error, result: any) => void): void;
    insertOne(doc: any, options: { w?: any; wtimeout?: number; j?: boolean; serializeFunctions?: boolean; forceServerObjectId?: boolean }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertMany
    insertMany(docs: any, callback: (err: Error, result: any) => void): void;
    insertMany(docs: any, options: { w?: any; wtimeout?: number; j?: boolean; serializeFunctions?: boolean; forceServerObjectId?: boolean }, callback: (err: Error, result: any) => void): void;
    /**
     * @deprecated use deleteOne or deleteMany
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#remove
     */
    remove(selector: Object, callback?: (err: Error, result: any) => void): void;
    remove(selector: Object, options: { safe?: any; single?: boolean; }, callback?: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteOne
    deleteOne(filter: any, callback: (err: Error, result: any) => void): void;
    deleteOne(filter: any, options: { w?: any; wtimeout?: number; j?: boolean; }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteMany
    deleteMany(filter: any, callback: (err: Error, result: any) => void): void;
    deleteMany(filter: any, options: { w?: any; wtimeout?: number; j?: boolean; }, callback: (err: Error, result: any) => void): void;

    rename(newName: String, callback?: (err: Error, result: any) => void): void;

    save(doc: any, callback: (err: Error, result: any) => void): void;
    save(doc: any, options: { w?: any; wtimeout?: number; j?: boolean; }, callback: (err: Error, result: any) => void): void;
    /**
     * @deprecated use updateOne or updateMany
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#update
     */
    update(selector: Object, document: any, callback?: (err: Error, result: any) => void): void;
    update(selector: Object, document: any, options: { safe?: boolean; upsert?: any; multi?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateOne
    updateOne(filter: Object, update: any, callback: (err: Error, result: any) => void): void;
    updateOne(filter: Object, update: any, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean; }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateMany
    updateMany(filter: Object, update: any, callback: (err: Error, result: any) => void): void;
    updateMany(filter: Object, update: any, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean; }, callback: (err: Error, result: any) => void): void;

    distinct(key: string, query: Object, callback: (err: Error, result: any) => void): void;
    distinct(key: string, query: Object, options: { readPreference: string; }, callback: (err: Error, result: any) => void): void;

    count(callback: (err: Error, result: any) => void): void;
    count(query: Object, callback: (err: Error, result: any) => void): void;
    count(query: Object, options: { readPreference: string; }, callback: (err: Error, result: any) => void): void;

    drop(callback?: (err: Error, result: any) => void): void;
    /**
     * @deprecated use findOneAndUpdate, findOneAndReplace or findOneAndDelete
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findAndModify
     */
    findAndModify(query: Object, sort: any[], doc: Object, callback: (err: Error, result: any) => void): void;
    findAndModify(query: Object, sort: any[], doc: Object, options: { safe?: any; remove?: boolean; upsert?: boolean; new?: boolean; }, callback: (err: Error, result: any) => void): void;
    /**
     * @deprecated use findOneAndDelete
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findAndRemove
     */
    findAndRemove(query: Object, sort?: any[], callback?: (err: Error, result: any) => void): void;
    findAndRemove(query: Object, sort?: any[], options?: { safe: any; }, callback?: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndDelete
    findOneAndDelete(filter: any, callback: (err: Error, result: any) => void): void;
    findOneAndDelete(filter: any, options: { projection?: any; sort?: any; maxTimeMS?: number; }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndReplace
    findOneAndReplace(filter: any, replacement: any, callback: (err: Error, result: any) => void): void;
    findOneAndReplace(filter: any, replacement: any, options: { projection?: any; sort?: any; maxTimeMS?: number; upsert?: boolean; returnOriginal?: boolean }, callback: (err: Error, result: any) => void): void;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndUpdate
    findOneAndUpdate(filter: any, update: any, callback: (err: Error, result: any) => void): void;
    findOneAndUpdate(filter: any, update: any, options: { projection?: any; sort?: any; maxTimeMS?: number; upsert?: boolean; returnOriginal?: boolean }, callback: (err: Error, result: any) => void): void;

    find(callback?: (err: Error, result: Cursor) => void): Cursor;
    find(selector: Object, callback?: (err: Error, result: Cursor) => void): Cursor;
    find(selector: Object, fields: any, callback?: (err: Error, result: Cursor) => void): Cursor;
    find(selector: Object, options: CollectionFindOptions, callback?: (err: Error, result: Cursor) => void): Cursor;
    find(selector: Object, fields: any, options: CollectionFindOptions, callback?: (err: Error, result: Cursor) => void): Cursor;
    find(selector: Object, fields: any, skip: number, limit: number, callback?: (err: Error, result: Cursor) => void): Cursor;
    find(selector: Object, fields: any, skip: number, limit: number, timeout: number, callback?: (err: Error, result: Cursor) => void): Cursor;

    findOne(callback?: (err: Error, result: any) => void): Cursor;
    findOne(selector: Object, callback?: (err: Error, result: any) => void): Cursor;
    findOne(selector: Object, fields: any, callback?: (err: Error, result: any) => void): Cursor;
    findOne(selector: Object, options: CollectionFindOptions, callback?: (err: Error, result: any) => void): Cursor;
    findOne(selector: Object, fields: any, options: CollectionFindOptions, callback?: (err: Error, result: any) => void): Cursor;
    findOne(selector: Object, fields: any, skip: number, limit: number, callback?: (err: Error, result: any) => void): Cursor;
    findOne(selector: Object, fields: any, skip: number, limit: number, timeout: number, callback?: (err: Error, result: any) => void): Cursor;

    createIndex(fieldOrSpec: any, callback: (err: Error, indexName: string) => void): void;
    createIndex(fieldOrSpec: any, options: IndexOptions, callback: (err: Error, indexName: string) => void): void;

    ensureIndex(fieldOrSpec: any, callback: (err: Error, indexName: string) => void): void;
    ensureIndex(fieldOrSpec: any, options: IndexOptions, callback: (err: Error, indexName: string) => void): void;

    indexInformation(options: any, callback: Function): void;
    dropIndex(name: string, callback: Function): void;
    dropAllIndexes(callback: Function): void;
    // dropIndexes = dropAllIndexes

    reIndex(callback: Function): void;
    mapReduce(map: Function, reduce: Function, options: MapReduceOptions, callback: Function): void;
    group(keys: Object, condition: Object, initial: Object, reduce: Function, finalize: Function, command: boolean, options: { readPreference: string }, callback: Function): void;
    options(callback: Function): void;
    isCapped(callback: Function): void;
    indexExists(indexes: string, callback: Function): void;
    geoNear(x: number, y: number, callback: Function): void;
    geoNear(x: number, y: number, options: Object, callback: Function): void;
    geoHaystackSearch(x: number, y: number, callback: Function): void;
    geoHaystackSearch(x: number, y: number, options: Object, callback: Function): void;
    indexes(callback: Function): void;
    aggregate(pipeline: any[], callback: (err: Error, results: any) => void): void;
    aggregate(pipeline: any[], options: { readPreference: string }, callback: (err: Error, results: any) => void): void;
    stats(options: { readPreference: string; scale: number }, callback: (err: Error, results: CollStats) => void): void;
    stats(callback: (err: Error, results: CollStats) => void): void;

    hint: any;
  }

  export interface MapReduceOptions {
    out?: Object;
    query?: Object;
    sort?: Object;
    limit?: number;
    keeptemp?: boolean;
    finalize?: any;
    scope?: Object;
    jsMode?: boolean;
    verbose?: boolean;
    readPreference?: string;
  }

  export interface IndexOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    unique?: boolean;
    sparse?: boolean;
    background?: boolean;
    dropDups?: boolean;
    min?: number;
    max?: number;
    v?: number;
    expireAfterSeconds?: number;
    name?: string;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html
  // Last update: doc. version 1.3.13 (29.08.2013)
  export class Cursor {
    // INTERNAL TYPE
    // constructor (db: Db, collection: Collection, selector, fields, skip, limit, sort, hint, explain, snapshot, timeout, tailable, batchSize, slaveOk, raw, read, returnKey, maxScan, min, max, showDiskLoc, comment, awaitdata, numberOfRetries, dbName, tailableRetryInterval, exhaust, partial);
    // constructor(db: Db, collection: Collection, selector, fields, options);

    rewind(): Cursor;
    toArray(callback: (err: Error, results: any[]) => any): void;
    each(callback: (err: Error, item: any) => void): void;
    count(applySkipLimit: boolean, callback: (err: Error, count: number) => void): void;

    sort(keyOrList: any, callback?: (err: Error, result: any) => void): Cursor;

    // this determines how the results are sorted. "asc", "ascending" or 1 for asceding order while "desc", "desceding or -1 for descending order. Note that the strings are case insensitive.
    sort(keyOrList: String, direction: string, callback: (err: Error, result: any) => void): Cursor;
    limit(limit: number, callback?: (err: Error, result: any) => void): Cursor;
    setReadPreference(preference: string, callback?: Function): Cursor;
    skip(skip: number, callback?: (err: Error, result: any) => void): Cursor;
    batchSize(batchSize: number, callback?: (err: Error, result: any) => void): Cursor;

    nextObject(callback: (err: Error, doc: any) => void): void;
    explain(callback: (err: Error, result: any) => void): void;

    stream(): CursorStream;

    close(callback: (err: Error, result: any) => void): void;
    isClosed(): boolean;

    public static INIT: number;
    public static OPEN: number;
    public static CLOSED: number;
    public static GET_MORE: number;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/cursorstream.html
  // Last update: doc. version 1.3.13 (29.08.2013)
  export class CursorStream {
    constructor(cursor: Cursor);

    public pause(): any;
    public resume(): any;
    public destroy(): any;
  }

  export interface CollectionFindOptions {
    limit?: number;
    sort?: any;
    fields?: Object;
    skip?: number;
    hint?: Object;
    explain?: boolean;
    snapshot?: boolean;
    timeout?: boolean;
    tailtable?: boolean;
    tailableRetryInterval?: number;
    numberOfRetries?: number;
    awaitdata?: boolean;
    oplogReplay?: boolean;
    exhaust?: boolean;
    batchSize?: number;
    returnKey?: boolean;
    maxScan?: number;
    min?: number;
    max?: number;
    showDiskLoc?: boolean;
    comment?: String;
    raw?: boolean;
    readPreference?: String;
    partial?: boolean;
  }

  export interface MongoCollectionOptions {
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

  export interface MongoCallback<T> {
    (error: MongoError, result: T): void;
  }
  
  // http://mongodb.github.io/node-mongodb-native/2.1/api/MongoError.html
  export class MongoError extends Error {
    constructor(message: string);
    static create(options: Object): MongoError;
  }
  // http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html
  export class Admin {
    // http://mongodb.github.io/node-mongodb-native/2.1/api/Admin.html#addUser
    public addUser(username: string, password: string): Promise<Object>;
    public addUser(username: string, password: string, callback: MongoCallback<Object>): void;
    public addUser(username: string, password: string, options: { w?: number | string, wtimeout?: number, j?: boolean, fsync: boolean, customData?: Object, roles?: Array<Object> }): Promise<Object>;
    public addUser(username: string, password: string, options: { w?: number | string, wtimeout?: number, j?: boolean, fsync: boolean, customData?: Object, roles?: Array<Object> }, callback: MongoCallback<Object>): void;
  }
  
  //http://mongodb.github.io/node-mongodb-native/2.1/api/CommandCursor.html
  export class CommandCursor {

  }
}
