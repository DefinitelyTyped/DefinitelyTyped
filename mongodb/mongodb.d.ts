// Type definitions for MongoDB
// Project: https://github.com/mongodb/node-mongodb-native
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Documentation : http://mongodb.github.io/node-mongodb-native/

/// <reference path='../node/node.d.ts' />

declare module "mongodb" {

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
  export class MongoClient{
    constructor(serverConfig: any, options: any);

    static connect(uri: string, options: any, callback: (err: Error, db: Db) => void): void;
    static connect(uri: string, callback: (err: Error, db: Db) => void): void;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/server.html
  export class Server {
    constructor (host: string, port: number, opts?: ServerOptions);

    public connect(): any;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/db.html
  export class Db {
    constructor (databaseName: string, serverConfig: Server, dbOptions?: DbCreateOptions);

    public db(dbName: string): Db;

    public open(callback: (err : Error, db : Db) => void ): void;
    public close(forceClose?: boolean, callback?: (err: Error, result: any) => void ): void;
    public admin(callback: (err: Error, result: any) => void ): any;
    public collectionsInfo(collectionName: string, callback?: (err: Error, result: any) => void ): void;
    public collectionNames(collectionName: string, options: any, callback?: (err: Error, result: any) => void ): void;

    public collection(collectionName: string): Collection;
    public collection(collectionName: string, callback: (err: Error, collection: Collection) => void ): Collection;
    public collection(collectionName: string, options: MongoCollectionOptions, callback: (err: Error, collection: Collection) => void ): Collection;

    public collections(callback: (err: Error, collections: Collection[]) => void ): void;
    public eval(code: any, parameters: any[], options?: any, callback?: (err: Error, result: any) => void ): void;
    //public dereference(dbRef: DbRef, callback: (err: Error, result: any) => void): void;

    public logout(options: any, callback?: (err: Error, result: any) => void ): void;
    public logout(callback: (err: Error, result: any) => void ): void;

    public authenticate(userName: string, password: string, callback?: (err: Error, result: any) => void ): void;
    public authenticate(userName: string, password: string, options: any, callback?: (err: Error, result: any) => void ): void;

    public addUser(username: string, password: string, callback?: (err: Error, result: any) => void ): void;
    public addUser(username: string, password: string, options: any, callback?: (err: Error, result: any) => void ): void;

    public removeUser(username: string, callback?: (err: Error, result: any) => void ): void;
    public removeUser(username: string, options: any, callback?: (err: Error, result: any) => void ): void;

    public createCollection(collectionName: string, callback?: (err: Error, result: Collection) => void ): void;
    public createCollection(collectionName: string, options: CollectionCreateOptions, callback?: (err: Error, result: any) => void ): void;

    public command(selector: Object, callback?: (err: Error, result: any) => void ): void;
    public command(selector: Object, options: any, callback?: (err: Error, result: any) => void ): void;

    public dropCollection(collectionName: string, callback?: (err: Error, result: any) => void ): void;
    public renameCollection(fromCollection: string, toCollection: string, callback?: (err: Error, result: any) => void ): void;

    public lastError(options: Object, connectionOptions: any, callback: (err: Error, result: any) => void ): void;
    public previousError(options: Object, callback: (err: Error, result: any) => void ): void;

    // error = lastError
    // lastStatus = lastError

    public executeDbCommand(command_hash: any, callback?: (err: Error, result: any) => void ): void;
    public executeDbCommand(command_hash: any, options: any, callback?: (err: Error, result: any) => void ): void;

    public executeDbAdminCommand(command_hash: any, callback?: (err: Error, result: any) => void ): void;
    public executeDbAdminCommand(command_hash: any, options: any, callback?: (err: Error, result: any) => void ): void;

    public resetErrorHistory(callback?: (err: Error, result: any) => void ): void;
    public resetErrorHistory(options: any, callback?: (err: Error, result: any) => void ): void;

    public createIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions, callback: Function): void;
    public ensureIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions, callback: Function): void;

    public cursorInfo(options: any, callback: Function): void;

    public dropIndex(collectionName: string, indexName: string, callback: Function): void;
    public reIndex(collectionName: string, callback: Function): void;
    public indexInformation(collectionName: string, options: any, callback: Function): void;
    public dropDatabase(callback: (err: Error, result: any) => void ): void;

    public stats(options: any, callback: Function): void;
    public _registerHandler(db_command: any, raw: any, connection: any, exhaust: any, callback: Function): void;
    public _reRegisterHandler(newId: any, object: any, callback: Function): void;
    public _callHandler(id: any, document: any, err: any): any;
    public _hasHandler(id: any): any;
    public _removeHandler(id: any): any;
    public _findHandler(id: any): { id: string; callback: Function; };
    public __executeQueryCommand(self: any, db_command: any, options: any, callback: any): void;

    public DEFAULT_URL: string;

    public connect(url: string, options: { uri_decode_auth?: boolean; }, callback: (err: Error, result: any) => void ): void;

    public addListener(event: string, handler:(param: any) => any): any;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
  // Last update: doc. version 1.3.13 (28.08.2013)
  export class ObjectID {
    constructor (s?: string);

    // Returns the ObjectID id as a 24 byte hex string representation
    public toHexString() : string;

    // Compares the equality of this ObjectID with otherID.
    public equals(otherID: ObjectID) : boolean;

    // Returns the generation date (accurate up to the second) that this ID was generated.
    public getTimestamp(): Date;

    // Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
    // time – an integer number representing a number of seconds.
    public static createFromTime(time: number): ObjectID;

    // Creates an ObjectID from a hex string representation of an ObjectID.
    // hexString – create a ObjectID from a passed in 24 byte hexstring.
    public static createFromHexString(hexString: string): ObjectID;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-bson-generated/binary.html
  export class Binary {
    constructor (buffer: Buffer, subType?: number);

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
    //= set seconds before connection times out default:0
    timeout?: number;
    //= Disables the Nagle algorithm default:true
    noDelay?: boolean;
    //= Set if keepAlive is used default:0 , which means no keepAlive, set higher than 0 for keepAlive
    keepAlive?: number;
    //= ‘ascii’|’utf8’|’base64’ default:null
    encoding?: string;
  }

  export interface ServerOptions {
    // - to reconnect automatically, default:false
    auto_reconnect?: boolean;
    // - specify the number of connections in the pool default:1
    poolSize?: number;
    // - a collection of pr socket settings
    socketOptions?: any;
  }

  export interface PKFactory {
    counter: number;
    createPk: () => number;
  }

  // See : http://mongodb.github.io/node-mongodb-native/api-generated/db.html
  // Current definition by documentation version 1.3.13 (28.08.2013)
  export interface DbCreateOptions {
    //  the write concern for the operation where < 1 is no acknowlegement of write and w >= 1, w = ‘majority’ or tag acknowledges the write.
    w?: any;

    // set the timeout for waiting for write concern to finish (combines with w option).
    wtimeout?: number;

    //  write waits for fsync before returning. default:false.
    fsync?: boolean;

    // write waits for journal sync before returning. default:false.
    journal?: boolean;

    // the prefered read preference. use 'ReadPreference' class.
    readPreference?: string;

    // use c++ bson parser. default:false.
    native_parser?: boolean;

    // force server to create _id fields instead of client. default:false.
    forceServerObjectId?: boolean;

    // custom primary key factory to generate _id values (see Custom primary keys).
    pkFactory?: PKFactory;

    // serialize functions. default:false.
    serializeFunctions?: boolean;

    // peform operations using raw bson buffers. default:false.
    raw?: boolean;

    // record query statistics during execution. default:false.
    recordQueryStats?: boolean;

    // number of miliseconds between retries. default:5000.
    retryMiliSeconds?: number;

    // number of retries off connection. default:5.
    numberOfRetries?: number;

    // an object representing a logger that you want to use, needs to support functions debug, log, error. default:null.
    logger?: Object

    // force setting of SlaveOk flag on queries (only use when explicitly connecting to a secondary server). default:null.
    slaveOk?: number;

    // when deserializing a Long will fit it into a Number if it’s smaller than 53 bits. default:true.
    promoteLongs?: boolean;
  }

  export class ReadPreference {
    public static PRIMARY: string;
    public static PRIMARY_PREFERRED: string;
    public static SECONDARY: string;
    public static SECONDARY_PREFERRED: string;
    public static NEAREST: string;
  }

  // See : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
  // Current definition by documentation version 1.3.13 (28.08.2013)
  export interface CollectionCreateOptions {
    // the prefered read preference. use 'ReadPreference' class.
    readPreference?: string;

    // Allow reads from secondaries. default:false.
    slaveOk?: boolean;

    // serialize functions on the document. default:false.
    serializeFunctions?: boolean;

    // perform all operations using raw bson objects. default:false.
    raw?: boolean;

    // object overriding the basic ObjectID primary key generation.
    pkFactory?: PKFactory;
  }

  // Documentation : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
  export interface Collection {
    new (db: Db, collectionName: string, pkFactory?: Object, options?: CollectionCreateOptions): Collection; // is this right?

    insert(query: any, callback: (err: Error, result: any) => void): void;
    insert(query: any, options: { safe?: any; continueOnError?: boolean; keepGoing?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void;

    remove(selector: Object, callback?: (err: Error, result: any) => void): void;
    remove(selector: Object, options: { safe?: any; single?: boolean; }, callback?: (err: Error, result: any) => void): void;

    rename(newName: String, callback?: (err: Error, result: any) => void): void;

    save(doc: any, callback : (err: Error, result: any) => void): void;
    save(doc: any, options: { safe: any; }, callback : (err: Error, result: any) => void): void;

    update(selector: Object, document: any, callback?: (err: Error, result: any) => void): void;
    update(selector: Object, document: any, options: { safe?: boolean; upsert?: any; multi?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void;

    distinct(key: string, query: Object, callback: (err: Error, result: any) => void): void;
    distinct(key: string, query: Object, options: { readPreference: string; }, callback: (err: Error, result: any) => void): void;

    count(callback: (err: Error, result: any) => void): void;
    count(query: Object, callback: (err: Error, result: any) => void): void;
    count(query: Object, options: { readPreference: string; }, callback: (err: Error, result: any) => void): void;

    drop(callback?: (err: Error, result: any) => void): void;

    findAndModify(query: Object, sort: any[], doc: Object, callback: (err: Error, result: any) => void): void;
    findAndModify(query: Object, sort: any[], doc: Object, options: { safe?: any; remove?: boolean; upsert?: boolean; new?: boolean; }, callback: (err: Error, result: any) => void): void;

    findAndRemove(query : Object, sort? : any[], callback?: (err: Error, result: any) => void): void;
    findAndRemove(query : Object, sort? : any[], options?: { safe: any; }, callback?: (err: Error, result: any) => void): void;

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
    group(keys: Object, condition: Object, initial: Object, reduce: Function, finalize: Function, command: boolean, options: {readPreference: string}, callback: Function): void;
    options(callback: Function): void;
    isCapped(callback: Function): void;
    indexExists(indexes: string, callback: Function): void;
    geoNear(x: number, y: number, callback: Function): void;
    geoNear(x: number, y: number, options: Object, callback: Function): void;
    geoHaystackSearch(x: number, y: number, callback: Function): void;
    geoHaystackSearch(x: number, y: number, options: Object, callback: Function): void;
    indexes(callback: Function): void;
    aggregate(pipeline: any[], callback: (err: Error, results: any) => void): void;
    aggregate(pipeline: any[], options: {readPreference: string}, callback: (err: Error, results: any) => void): void;
    stats(options: {readPreference: string; scale: number}, callback: Function): void;
    stats(callback: (err: Error, results: any) => void): void;

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
    w?: any;
    wtimeout?: number;
    fsync?: boolean;
    journal?: boolean;
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

    rewind() : Cursor;
    toArray(callback: (err: Error, results: any[]) => any) : void;
    each(callback: (err: Error, item: any) => void) : void;
    count(applySkipLimit: boolean, callback: (err: Error, count: number) => void) : void;

    sort(keyOrList: any, callback? : (err: Error, result: any) => void): Cursor;

    // this determines how the results are sorted. "asc", "ascending" or 1 for asceding order while "desc", "desceding or -1 for descending order. Note that the strings are case insensitive.
    sort(keyOrList: String, direction : string, callback : (err: Error, result: any) => void): Cursor;
    limit(limit: number, callback?: (err: Error, result: any) => void): Cursor;
    setReadPreference(preference: string, callback?: Function): Cursor;
    skip(skip: number, callback?: (err: Error, result: any) => void): Cursor;
    batchSize(batchSize: number, callback?: (err: Error, result: any) => void): Cursor;

    nextObject(callback: (err: Error, doc: any) => void) : void;
    explain(callback: (err: Error, result: any) => void) : void;

    stream(): CursorStream;

    close(callback: (err: Error, result: any) => void) : void;
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
    safe?: any;
    serializeFunctions?: any;
    raw?: boolean;
    pkFactory?: any;
    readPreference?: string;
  }
}
