// Type definitions for MongoDB
// Project: https://github.com/mongodb/node-mongodb-native
// Definitions by: TheGreatCO <https://github.com/thegreatco/> based on work by Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Documentation : http://mongodb.github.io/node-mongodb-native/

/// <reference path='../node/node.d.ts' />

declare module "mongodb" {

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
  export class MongoClient{
    constructor(serverConfig: any, options: any);

    static connect(uri: string, callback: (err: Error, db: Db) => void): void;
    static connect(uri: string, options: any, callback: (err: Error, db: Db) => void): void;
    static connect(uri: string): Promise<Db>;
    static connect(uri: string, options: any): Promise<Db>;
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
    public open(): Promise<Db>;
    
    public close(forceClose: boolean, callback: (err: Error, result: any) => void ): void;
    public close(forceClose?: boolean): Promise<any>;
    
    public admin(callback: (err: Error, result: any) => void ): any;
    public admin(): Promise<any>;
    
    public collectionsInfo(collectionName: string, callback: (err: Error, result: any) => void ): void;
    public collectionsInfo(collectionName: string): Promise<any>;
    
    public collectionNames(collectionName: string, options: any, callback: (err: Error, result: any) => void ): void;
    public collectionNames(collectionName: string, options: any): Promise<any>;

    public collection(collectionName: string): Collection<any>;
    public collection(collectionName: string, callback: (err: Error, collection: Collection<any>) => void ): Collection<any>;
    public collection(collectionName: string, options: MongoCollectionOptions, callback: (err: Error, collection: Collection<any>) => void ): Collection<any>;
    
    public collection(collectionName: string): Promise<Collection<any>>;
    public collection(collectionName: string): Promise<Collection<any>>;
    public collection(collectionName: string, options: MongoCollectionOptions): Promise<Collection<any>>;
    
    public collection<T>(collectionName: string): Promise<Collection<T>>;
    public collection<T>(collectionName: string): Promise<Collection<T>>;
    public collection<T>(collectionName: string, options: MongoCollectionOptions): Promise<Collection<T>>;

    public collections(callback: (err: Error, collections: Collection<any>[]) => void ): void;
    public collections(): Promise<Collection<any>[]>;
    
    public eval(code: any, parameters: any[], options: any, callback: (err: Error, result: any) => void ): void;
    //public dereference(dbRef: DbRef, callback: (err: Error, result: any) => void): void;

    public logout(callback: (err: Error, result: any) => void ): void;
    public logout(options: any, callback: (err: Error, result: any) => void ): void;
    public logout(): Promise<any>;
    public logout(options: any): Promise<any>;

    public authenticate(userName: string, password: string, callback: (err: Error, result: any) => void ): void;
    public authenticate(userName: string, password: string, options: any, callback: (err: Error, result: any) => void ): void;
    public authenticate(userName: string, password: string): Promise<any>;
    public authenticate(userName: string, password: string, options: any): Promise<any>;

    public addUser(username: string, password: string, callback: (err: Error, result: any) => void ): void;
    public addUser(username: string, password: string, options: any, callback: (err: Error, result: any) => void ): void;
    public addUser(username: string, password: string): Promise<any>;
    public addUser(username: string, password: string, options: any): Promise<any>

    public removeUser(username: string, callback: (err: Error, result: any) => void ): void;
    public removeUser(username: string, options: any, callback: (err: Error, result: any) => void ): void;
    public removeUser(username: string): Promise<any>;
    public removeUser(username: string, options: any): Promise<any>;

    public createCollection(collectionName: string, callback: (err: Error, result: Collection<any>) => void ): void;
    public createCollection(collectionName: string, options: CollectionCreateOptions, callback: (err: Error, result: any) => void ): void;
    public createCollection(collectionName: string): Promise<Collection<any>>;
    public createCollection(collectionName: string, options: CollectionCreateOptions): Promise<Collection<any>>;
    public createCollection<T>(collectionName: string): Promise<Collection<T>>;
    public createCollection<T>(collectionName: string, options: CollectionCreateOptions): Promise<Collection<T>>;

    public command(selector: Object, callback: (err: Error, result: any) => void ): void;
    public command(selector: Object, options: any, callback: (err: Error, result: any) => void ): void;
    public command(selector: Object): Promise<any>;
    public command(selector: Object, options: any): Promise<any>;

    public dropCollection(collectionName: string, callback: (err: Error, result: any) => void ): void;
    public dropCollection(collectionName: string): Promise<any>;
    
    public renameCollection(fromCollection: string, toCollection: string, callback: (err: Error, result: any) => void ): void;
    public renameCollection(fromCollection: string, toCollection: string): Promise<any>;

    public lastError(options: Object, connectionOptions: any, callback: (err: Error, result: any) => void ): void;
    public lastError(options: Object, connectionOptions: any): Promise<any>;
    
    public previousError(options: Object, callback: (err: Error, result: any) => void ): void;
    public previousError(options: Object): Promise<any>;

    // error = lastError
    // lastStatus = lastError

    public executeDbCommand(command_hash: any, callback: (err: Error, result: any) => void ): void;
    public executeDbCommand(command_hash: any, options: any, callback: (err: Error, result: any) => void ): void;
    public executeDbCommand(command_hash: any): Promise<any>;
    public executeDbCommand(command_hash: any, options: any): Promise<any>;

    public executeDbAdminCommand(command_hash: any, callback: (err: Error, result: any) => void ): void;
    public executeDbAdminCommand(command_hash: any, options: any, callback: (err: Error, result: any) => void ): void;
    public executeDbAdminCommand(command_hash: any): Promise<any>;
    public executeDbAdminCommand(command_hash: any, options: any): Promise<any>;

    public resetErrorHistory(callback: (err: Error, result: any) => void ): void;
    public resetErrorHistory(options: any, callback: (err: Error, result: any) => void ): void;
    public resetErrorHistory(): Promise<any>;
    public resetErrorHistory(options: any): Promise<any>;

    public createIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions, callback: Function): void;
    public createIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions): Promise<any>;
    
    public ensureIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions, callback: Function): void;
    public ensureIndex(collectionName: any, fieldOrSpec: any, options: IndexOptions): Promise<any>;

    public cursorInfo(options: any, callback: Function): void;
    public cursorInfo(options: any): Promise<any>;

    public dropIndex(collectionName: string, indexName: string, callback: Function): void;
    public dropIndex(collectionName: string, indexName: string): Promise<any>;
    
    public reIndex(collectionName: string, callback: Function): void;
    public reIndex(collectionName: string): Promise<any>;
    
    public indexInformation(collectionName: string, options: any, callback: Function): void;
    public indexInformation(collectionName: string, options: any): Promise<any>;
    
    public dropDatabase(callback: (err: Error, result: any) => void ): void;
    public dropDatabase(): Promise<any>;

    public stats(options: any, callback: Function): void;
    public stats(options: any): Promise<any>;
    
    public _registerHandler(db_command: any, raw: any, connection: any, exhaust: any, callback: Function): void;
    public _reRegisterHandler(newId: any, object: any, callback: Function): void;
    public _callHandler(id: any, document: any, err: any): any;
    public _hasHandler(id: any): any;
    public _removeHandler(id: any): any;
    public _findHandler(id: any): { id: string; callback: Function; };
    public __executeQueryCommand(self: any, db_command: any, options: any, callback: any): void;

    public DEFAULT_URL: string;

    public connect(url: string, options: { uri_decode_auth?: boolean; }, callback: (err: Error, result: any) => void ): void;
    public connect(url: string, options: { uri_decode_auth?: boolean; }): Promise<any>;

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
    
    // Checks if a value is a valid bson ObjectID
    // id - Value to be checked
    public static isValid(id: string): Boolean;
    
    // Generate a 12 byte id string used in ObjectID's
    // time - optional parameter allowing to pass in a second based timestamp
    public generate(time?: number): string;
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
  export interface Collection<T> {
    new (db: Db, collectionName: string, pkFactory?: Object, options?: CollectionCreateOptions): Collection<T>; // is this right?
    /**
     * @deprecated use insertOne or insertMany
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insert
     */
    insert(query: any, callback: (err: Error, result: BulkWriteResult) => void): void;
    insert(query: any, options: { safe?: any; continueOnError?: boolean; keepGoing?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: BulkWriteResult) => void): void;
    insert(query: any): Promise<BulkWriteResult>;
    insert(query: any, options: { safe?: any; continueOnError?: boolean; keepGoing?: boolean; serializeFunctions?: boolean; }): Promise<BulkWriteResult>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertOne
    insertOne(doc:any, callback: (err: Error, result: BulkWriteResult) => void) :void;
    insertOne(doc: any, options: { w?: any; wtimeout?: number; j?: boolean; serializeFunctions?: boolean; forceServerObjectId?: boolean }, callback: (err: Error, result: BulkWriteResult) => void): void;
    insertOne(doc:any): Promise<BulkWriteResult>;
    insertOne(doc: any, options: { w?: any; wtimeout?: number; j?: boolean; serializeFunctions?: boolean; forceServerObjectId?: boolean }): Promise<BulkWriteResult>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertMany
    insertMany(docs: any, callback: (err: Error, result: BulkWriteResult) => void): void;
    insertMany(docs: any, options: { w?: any; wtimeout?: number; j?: boolean; serializeFunctions?: boolean; forceServerObjectId?: boolean }, callback: (err: Error, result: BulkWriteResult) => void): void;
    insertMany(docs: any): Promise<BulkWriteResult>;
    insertMany(docs: any, options: { w?: any; wtimeout?: number; j?: boolean; serializeFunctions?: boolean; forceServerObjectId?: boolean }): Promise<BulkWriteResult>;
    /**
     * @deprecated use deleteOne or deleteMany
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#remove
     */
    remove(selector: Object, callback: (err: Error, result: any) => void): void;
    remove(selector: Object, options: { safe?: any; single?: boolean; }, callback: (err: Error, result: any) => void): void;
    remove(selector: Object): Promise<any>;
    remove(selector: Object, options: { safe?: any; single?: boolean; }): Promise<any>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteOne
    deleteOne(filter: any, callback: (err: Error, result: any) => void): void;
    deleteOne(filter: any, options: { w?: any; wtimeout?: number; j?: boolean;}, callback: (err: Error, result: any) => void): void;
    deleteOne(filter: any): Promise<BulkWriteResult>;
    deleteOne(filter: any, options: { w?: any; wtimeout?: number; j?: boolean;}): Promise<BulkWriteResult>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteMany
    deleteMany(filter: any, callback: (err: Error, result: BulkWriteResult) => void): void;
    deleteMany(filter: any, options: { w?: any; wtimeout?: number; j?: boolean;}, callback: (err: Error, result: BulkWriteResult) => void): void;
    deleteMany(filter: any): Promise<BulkWriteResult>;
    deleteMany(filter: any, options: { w?: any; wtimeout?: number; j?: boolean;}): Promise<BulkWriteResult>;

    rename(newName: String, callback: (err: Error, result: any) => void): void;
    rename(newName: String): Promise<any>;

    save(doc: any, callback : (err: Error, result: any) => void): void;
    save(doc: any, options: { w?: any; wtimeout?: number; j?: boolean;}, callback : (err: Error, result: any) => void): void;
    save(doc: any): Promise<any>;
    save(doc: any, options: { w?: any; wtimeout?: number; j?: boolean;}): Promise<any>;
    /**
     * @deprecated use updateOne or updateMany
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#update
     */
    update(selector: Object, document: any, callback: (err: Error, result: any) => void): void;
    update(selector: Object, document: any, options: { safe?: boolean; upsert?: any; multi?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void;
    update(selector: Object, document: any): Promise<any>;
    update(selector: Object, document: any, options: { safe?: boolean; upsert?: any; multi?: boolean; serializeFunctions?: boolean; }): Promise<any>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateOne
    updateOne(filter: Object, update: any, callback: (err: Error, result: any) => void): void;
    updateOne(filter: Object, update: any, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean;}, callback: (err: Error, result: any) => void): void;
    updateOne(filter: Object, update: any): Promise<any>;
    updateOne(filter: Object, update: any, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean;}): Promise<any>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateMany
    updateMany(filter: Object, update: any, callback: (err: Error, result: any) => void): void;
    updateMany(filter: Object, update: any, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean;}, callback: (err: Error, result: any) => void): void;
    updateMany(filter: Object, update: any): Promise<any>;
    updateMany(filter: Object, update: any, options: { upsert?: boolean; w?: any; wtimeout?: number; j?: boolean;}): Promise<any>;

    distinct(key: string, query: Object, callback: (err: Error, result: any) => void): void;
    distinct(key: string, query: Object, options: { readPreference: string; }, callback: (err: Error, result: any) => void): void;
    distinct(key: string, query: Object): Promise<any>;
    distinct(key: string, query: Object, options: { readPreference: string; }): Promise<any>;

    count(callback: (err: Error, result: any) => void): void;
    count(query: Object, callback: (err: Error, result: any) => void): void;
    count(query: Object, options: { readPreference: string; }, callback: (err: Error, result: any) => void): void;
    count(): Promise<number>;
    count(query: Object): Promise<number>;
    count(query: Object, options: { readPreference: string; }): Promise<number>;

    drop(callback: (err: Error, result: any) => void): void;
    drop(): Promise<any>;
    /**
     * @deprecated use findOneAndUpdate, findOneAndReplace or findOneAndDelete
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findAndModify
     */
    findAndModify(query: Object, sort: any[], doc: Object, callback: (err: Error, result: any) => void): void;
    findAndModify(query: Object, sort: any[], doc: Object, options: { safe?: any; remove?: boolean; upsert?: boolean; new?: boolean; }, callback: (err: Error, result: any) => void): void;
    
    findAndModify(query: Object, sort: any[], doc: Object): Promise<FindAndModifyResult<T>>;
    findAndModify(query: Object, sort: any[], doc: Object, options: { safe?: any; remove?: boolean; upsert?: boolean; new?: boolean; }): Promise<FindAndModifyResult<T>>;
    /**
     * @deprecated use findOneAndDelete
     * Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findAndRemove
     */
    findAndRemove(query : Object, sort : any[], callback: (err: Error, result: any) => void): void;
    findAndRemove(query : Object, sort : any[], options: { safe: any; }, callback: (err: Error, result: any) => void): void;
    
    findAndRemove(query : Object, sort? : any[]): Promise<FindAndModifyResult<T>>;
    findAndRemove(query : Object, sort? : any[], options?: { safe: any; }): Promise<FindAndModifyResult<T>>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndDelete
    findOneAndDelete(filter: any, callback: (err: Error, result: any) => void): void;
    findOneAndDelete(filter: any, options: { projection?: any; sort?: any; maxTimeMS?: number; }, callback: (err: Error, result: any) => void): void;
    
    findOneAndDelete(filter: any): Promise<FindAndModifyResult<T>>;
    findOneAndDelete(filter: any, options: { projection?: any; sort?: any; maxTimeMS?: number; }): Promise<FindAndModifyResult<T>>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndReplace
    findOneAndReplace(filter: any, replacement: any, callback: (err: Error, result: any) => void): void;
    findOneAndReplace(filter: any, replacement: any, options: { projection?: any; sort?: any; maxTimeMS?: number; upsert?: boolean; returnOriginal?: boolean }, callback: (err: Error, result: any) => void): void;
    
    findOneAndReplace(filter: any, replacement: any): Promise<FindAndModifyResult<T>>;
    findOneAndReplace(filter: any, replacement: any, options: { projection?: any; sort?: any; maxTimeMS?: number; upsert?: boolean; returnOriginal?: boolean }): Promise<FindAndModifyResult<T>>;

    // Documentation : http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndUpdate
    findOneAndUpdate(filter: any, update: any, callback: (err: Error, result: any) => void): void;
    findOneAndUpdate(filter: any, update: any, options: { projection?: any; sort?: any; maxTimeMS?: number; upsert?: boolean; returnOriginal?: boolean }, callback: (err: Error, result: any) => void): void;
    
    findOneAndUpdate(filter: any, update: any): Promise<FindAndModifyResult<T>>;
    findOneAndUpdate(filter: any, update: any, options: { projection?: any; sort?: any; maxTimeMS?: number; upsert?: boolean; returnOriginal?: boolean }): Promise<FindAndModifyResult<T>>;

    find(callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    find(selector: Object, callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    find(selector: Object, fields: any, callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    find(selector: Object, options: CollectionFindOptions, callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    find(selector: Object, fields: any, options: CollectionFindOptions, callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    find(selector: Object, fields: any, skip: number, limit: number, callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    find(selector: Object, fields: any, skip: number, limit: number, timeout: number, callback: (err: Error, result: Cursor<any>) => void): Cursor<T>;
    
    find(): Promise<Cursor<T>>;
    find(selector: Object): Promise<Cursor<T>>;
    find(selector: Object, fields: any): Promise<Cursor<T>>;
    find(selector: Object, options: CollectionFindOptions): Promise<Cursor<T>>;
    find(selector: Object, fields: any, options: CollectionFindOptions): Promise<Cursor<T>>;
    find(selector: Object, fields: any, skip: number, limit: number): Promise<Cursor<T>>;
    find(selector: Object, fields: any, skip: number, limit: number): Promise<Cursor<T>>;

    findOne(callback: (err: Error, result: any) => void): T;
    findOne(selector: Object, callback: (err: Error, result: any) => void): T;
    findOne(selector: Object, fields: any, callback: (err: Error, result: any) => void): T;
    findOne(selector: Object, options: CollectionFindOptions, callback: (err: Error, result: any) => void): T;
    findOne(selector: Object, fields: any, options: CollectionFindOptions, callback: (err: Error, result: any) => void): T;
    findOne(selector: Object, fields: any, skip: number, limit: number, callback: (err: Error, result: any) => void): T;
    findOne(selector: Object, fields: any, skip: number, limit: number, timeout: number, callback: (err: Error, result: any) => void): T;
    
    findOne(): Promise<T>;
    findOne(selector: Object): Promise<T>;
    findOne(selector: Object, fields: any): Promise<T>;
    findOne(selector: Object, options: CollectionFindOptions): Promise<T>;
    findOne(selector: Object, fields: any, options: CollectionFindOptions): Promise<T>;
    findOne(selector: Object, fields: any, skip: number, limit: number): Promise<T>;
    findOne(selector: Object, fields: any, skip: number, limit: number, timeout: number): Promise<T>;

    createIndex(fieldOrSpec: any, callback: (err: Error, indexName: string) => void): void;
    createIndex(fieldOrSpec: any, options: IndexOptions, callback: (err: Error, indexName: string) => void): void;
    createIndex(fieldOrSpec: any): Promise<string>;
    createIndex(fieldOrSpec: any, options: IndexOptions): Promise<string>;

    ensureIndex(fieldOrSpec: any, callback: (err: Error, indexName: string) => void): void;
    ensureIndex(fieldOrSpec: any, options: IndexOptions, callback: (err: Error, indexName: string) => void): void;
    ensureIndex(fieldOrSpec: any): Promise<string>;
    ensureIndex(fieldOrSpec: any, options: IndexOptions): Promise<string>;

    indexInformation(options: any, callback: Function): void;
    indexInformation(options: any): Promise<any>;
    
    dropIndex(name: string, callback: Function): void;
    dropIndex(name: string): Promise<any>;

    dropAllIndexes(callback: Function): void;
    dropAllIndexes(): Promise<any>;
    // dropIndexes = dropAllIndexes

    reIndex(callback: Function): void;
    reIndex(): Promise<any>;
    
    mapReduce(map: Function, reduce: Function, options: MapReduceOptions, callback: Function): void;
    mapReduce(map: Function, reduce: Function, options: MapReduceOptions): Promise<any>; // I think this might be a cursor.
    
    group(keys: Object, condition: Object, initial: Object, reduce: Function, finalize: Function, command: boolean, options: {readPreference: string}, callback: Function): void;
    group(keys: Object, condition: Object, initial: Object, reduce: Function, finalize: Function, command: boolean, options: {readPreference: string}): Promise<any>;
    
    options(callback: Function): void;
    options(): Promise<any>;
    
    isCapped(callback: Function): void;
    isCapped(): Promise<any>;
    
    indexExists(indexes: string, callback: Function): void;
    indexExists(indexes: string): Promise<any>;
    
    geoNear(x: number, y: number, callback: Function): void;
    geoNear(x: number, y: number, options: Object, callback: Function): void;
    geoNear(x: number, y: number): Promise<any>;
    geoNear(x: number, y: number, options: Object): Promise<any>;
    
    geoHaystackSearch(x: number, y: number, callback: Function): void;
    geoHaystackSearch(x: number, y: number, options: Object, callback: Function): void;
    geoHaystackSearch(x: number, y: number): Promise<any>;
    geoHaystackSearch(x: number, y: number, options: Object): Promise<any>;
    
    indexes(callback: Function): void;
    indexes(): Promise<any>;
    
    aggregate(pipeline: any[], callback: (err: Error, results: any) => void): void;
    aggregate(pipeline: any[], options: {readPreference: string}, callback: (err: Error, results: any) => void): void;
    aggregate(pipeline: any[]): Promise<any>;
    aggregate(pipeline: any[], options: {readPreference: string}): Promise<any>;
    
    stats(callback: (err: Error, results: CollStats) => void): void;
    stats(options: {readPreference: string; scale: number}, callback: (err: Error, results: CollStats) => void): void;
    
    stats(): Promise<CollStats>;
    stats(options: {readPreference: string; scale: number}): Promise<CollStats>;

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
  export class Cursor<T> {
    // INTERNAL TYPE
    // constructor (db: Db, collection: Collection, selector, fields, skip, limit, sort, hint, explain, snapshot, timeout, tailable, batchSize, slaveOk, raw, read, returnKey, maxScan, min, max, showDiskLoc, comment, awaitdata, numberOfRetries, dbName, tailableRetryInterval, exhaust, partial);
    // constructor(db: Db, collection: Collection, selector, fields, options);

    rewind() : Cursor<T>;
    
    toArray(callback: (err: Error, results: any[]) => any) : void;
    toArray() : Promise<T[]>;
    
    each(callback: (err: Error, item: any) => void) : void;
    each() : Promise<T>;
    
    count(applySkipLimit: boolean, callback: (err: Error, count: number) => void) : void;
    count(applySkipLimit: boolean): Promise<number>;

    sort(keyOrList: any, callback : (err: Error, result: any) => void): Cursor<T>;
    sort(keyOrList: any): Promise<Cursor<T>>;

    // this determines how the results are sorted. "asc", "ascending" or 1 for asceding order while "desc", "desceding or -1 for descending order. Note that the strings are case insensitive.
    sort(keyOrList: String, direction : string, callback : (err: Error, result: any) => void): Cursor<T>;
    sort(keyOrList: String, direction : string): Promise<Cursor<T>>;
    
    limit(limit: number, callback: (err: Error, result: any) => void): Cursor<T>;
    limit(limit: number): Promise<Cursor<T>>;
    
    setReadPreference(preference: string, callback: Function): Cursor<T>;
    setReadPreference(preference: string): Promise<Cursor<T>>;
    
    skip(skip: number, callback: (err: Error, result: any) => void): Cursor<T>;
    skip(skip: number): Promise<Cursor<T>>;
    
    batchSize(batchSize: number, callback: (err: Error, result: any) => void): Cursor<T>;
    batchSize(batchSize: number): Promise<Cursor<T>>;

    nextObject(callback: (err: Error, doc: any) => void) : void;
    nextObject(): Promise<Cursor<T>>;
    
    explain(callback: (err: Error, result: any) => void) : void;
    explain(): Promise<any>;

    stream(): CursorStream<T>;

    close(callback: (err: Error, result: any) => void) : void;
    close(): Promise<any>;
    
    isClosed(): boolean;

    public static INIT: number;
    public static OPEN: number;
    public static CLOSED: number;
    public static GET_MORE: number;
  }

  // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/cursorstream.html
  // Last update: doc. version 1.3.13 (29.08.2013)
  export class CursorStream<T> {
    constructor(cursor: Cursor<T>);

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
    strict?: boolean;
    raw?: boolean;
    pkFactory?: any;
    readPreference?: string;
  }
  
    export class FindAndModifyResult<T>{
        lastErrorObject: LastErrorObject;
        value: T;
        ok: number;   
    }
    
    export class LastErrorObject {
        connectionId: number;
        updatedExisting: boolean;
        n: number;
        syncMillis: number;
        writtenTo: any;
        err: any;
        ok: number;
        upserted: ObjectID
    }
    
    export class BulkWriteResult {
        nInserted: number;
        nMatched: number;
        nModified: number;
        nRemoved: number;
        nUpserted: number;
        upserted: BulkWriteUpsertedResult[];
        writeErrors: BulkerWriteWriteError[];
        writeConcernError: BulkWriteConcernError;
    }
    
    export class BulkWriteConcernError {
        code: number;
        errInfo: any;
        errmsg: string;
    }
    
    export class BulkerWriteWriteError {
        index: number;
        code: number;
        errmsg: string;
        op: any;
    }
    
    export class BulkWriteUpsertedResult {
        index: number;
        _id: ObjectID;
    }
}
