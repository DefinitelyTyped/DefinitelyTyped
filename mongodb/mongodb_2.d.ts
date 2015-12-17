// Type definitions for MongoDB
// Project: https://github.com/mongodb/node-mongodb-native
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Documentation : http://mongodb.github.io/node-mongodb-native/

declare module "mongodb" {

    export var ReadPreference: {
        PRIMARY: string;
        PRIMARY_PREFERRED: string;
        SECONDARY: string;
        SECONDARY_PREFERRED: string;
        NEAREST: string;
    };

    // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
    export class MongoClient{
        constructor(serverConfig: any, options: any);

        public static connect(uri: string, options: any, callback: (err: Error, db: Db) => void): void;
        public static connect(uri: string, callback: (err: Error, db: Db) => void): void;
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
        public close(forceClose?: boolean, callback?: MongoCallback ): void;
        public admin(callback: MongoCallback ): any;
        public collectionsInfo(collectionName: string, callback?: MongoCallback ): void;
        public collectionNames(collectionName: string, options: any, callback?: MongoCallback ): void;

        public collection(collectionName: string): Collection;
        public collection(collectionName: string, callback: (err: Error, collection: Collection) => void ): Collection;
        public collection(collectionName: string, options: MongoCollectionOptions, callback: (err: Error, collection: Collection) => void ): Collection;

        public collections(callback: (err: Error, collections: Collection[]) => void ): void;
        public eval(code: any, parameters: any[], options?: any, callback?: MongoCallback ): void;
        //public dereference(dbRef: DbRef, callback: MongoCallback): void;

        public logout(options: any, callback?: MongoCallback ): void;
        public logout(callback: MongoCallback ): void;

        public authenticate(userName: string, password: string, callback?: MongoCallback ): void;
        public authenticate(userName: string, password: string, options: any, callback?: MongoCallback ): void;

        public addUser(username: string, password: string, callback?: MongoCallback ): void;
        public addUser(username: string, password: string, options: any, callback?: MongoCallback ): void;

        public removeUser(username: string, callback?: MongoCallback ): void;
        public removeUser(username: string, options: any, callback?: MongoCallback ): void;

        public createCollection(collectionName: string, callback?: (err: Error, result: Collection) => void ): void;
        public createCollection(collectionName: string, options: CollectionCreateOptions, callback?: MongoCallback ): void;

        public command(selector: Object, callback?: MongoCallback ): void;
        public command(selector: Object, options: any, callback?: MongoCallback ): void;

        public dropCollection(collectionName: string, callback?: MongoCallback ): void;
        public renameCollection(fromCollection: string, toCollection: string, callback?: MongoCallback ): void;

        public lastError(options: Object, connectionOptions: any, callback: MongoCallback ): void;
        public previousError(options: Object, callback: MongoCallback ): void;

        // error = lastError
        // lastStatus = lastError

        public executeDbCommand(command_hash: any, callback?: MongoCallback ): void;
        public executeDbCommand(command_hash: any, options: any, callback?: MongoCallback ): void;

        public executeDbAdminCommand(command_hash: any, callback?: MongoCallback ): void;
        public executeDbAdminCommand(command_hash: any, options: any, callback?: MongoCallback ): void;

        public resetErrorHistory(callback?: MongoCallback ): void;
        public resetErrorHistory(options: any, callback?: MongoCallback ): void;

        public createIndex(collectionName: any, fieldOrSpec: any, options: MongoIndexOptions, callback: Function): void;
        public ensureIndex(collectionName: any, fieldOrSpec: any, options: MongoIndexOptions, callback: Function): void;

        public cursorInfo(options: any, callback: Function): void;

        public dropIndex(collectionName: string, indexName: string, callback: Function): void;
        public reIndex(collectionName: string, callback: Function): void;
        public indexInformation(collectionName: string, options: any, callback: Function): void;
        public dropDatabase(callback: MongoCallback ): void;

        public stats(options: any, callback: Function): void;
        public _registerHandler(db_command: any, raw: any, connection: any, exhaust: any, callback: Function): void;
        public _reRegisterHandler(newId: any, object: any, callback: Function): void;
        public _callHandler(id: any, document: any, err: any): any;
        public _hasHandler(id: any): any;
        public _removeHandler(id: any): any;
        public _findHandler(id: any): { id: string; callback: Function; };
        public __executeQueryCommand(self: any, db_command: any, options: any, callback: any): void;

        public DEFAULT_URL: string;

        public connect(url: string, options: { uri_decode_auth?: boolean; }, callback: MongoCallback ): void;

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

        // Checks if a value is a valid bson ObjectId
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

    export interface MongoCallback {
        (error: MongoError, result: any): void;
    }

    type AnyArray = Array<any>;
    type DocumentArray = Array<Object>;
    type StringArray = Array<string>;

    interface ToArrayResultCallback {
        (error: MongoError, documents: DocumentArray): void;
    }

    export interface CollectionInsertOptions {
        // The write concern.
        w?: number | string;
        // The write concern timeout.
        wtimeout?: number;
        // Specify a journal write concern.
        j?: boolean;
        // Serialize functions on any object.
        serializeFunctions?: boolean;
        // Execute write operation in ordered or unordered fashion.
        forceServerObjectId?: boolean;
        // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
        bypassDocumentValidation?: boolean;
    }

    export interface CollectionSaveDeleteOptions {
        // The write concern.
        w?: number | string;

        // The write concern timeout.
        wtimeout?: number;

        // Specify a journal write concern.
        j?: boolean;
    }

    export interface CollectionRenameOptions {
        // Drop the target name collection if it previously exists.
        dropTarget?: boolean;
    }

    export interface CollectionUpdateOptions {
        // Update operation is an upsert.
        upsert?: boolean;

        // The write concern.
        w?: number | string;

        // The write concern timeout.
        wtimeout?: number;

        // Specify a journal write concern.
        j?: boolean;

        // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
        bypassDocumentValidation?: boolean;
    }

    export interface CollectionReadPreference {
        new (mode: string, tags: Object): CollectionReadPreference;
        mode: string;
        tags: Object;
        isValid: (mode: string) => boolean;
    }

    export interface CollectionDistinctOptions {
        readPreference: CollectionReadPreference | string;
    }

    export interface MongoCountPreferences {
        // The limit of documents to count.
        limit?: number;
        // The number of documents to skip for the count.
        skip?: boolean;
        // An index name hint for the query.
        hint?: string;
        // The preferred read preference
        // (ReadPreference.PRIMARY,
        // ReadPreference.PRIMARY_PREFERRED,
        // ReadPreference.SECONDARY,
        // ReadPreference.SECONDARY_PREFERRED,
        // ReadPreference.NEAREST).
        readPreference?: CollectionReadPreference | string;
    }

    export interface MongoDeleteOptions {
        // Limits the fields to return for all matching documents.
        projection?: Object;
        // Determines which document the operation modifies if the query selects multiple documents.
        sort?: Object;
        // The maximum amount of time to allow the query to run.
        maxTimeMS?: number;
    }

    export interface MongoFindUpdateReplaceOptions {
        // Limits the fields to return for all matching documents.
        projection?: Object;
        // Determines which document the operation modifies if the query selects multiple documents.
        sort?: Object;
        // The maximum amount of time to allow the query to run.
        maxTimeMS?: number;
        // Upsert the document if it does not exist.
        upsert?: boolean;
        // When false, returns the updated document rather than the original. The default is true.
        returnOriginal?: boolean;
    }

    export interface MongoIndexOptions {
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
        name?: number;
    }

    export interface CollectionGeoNearOptions {
        readPreference?: CollectionReadPreference | string;
        num?: number;
        minDistance?: number;
        maxDistance?: number;
        distanceMultiplier?: number;
        query?: Object;
        spherical?: boolean;
        uniqueDocs?: boolean;
        includeLocs?: boolean;
    }

    export interface CollectionGeoHaystackSearchOptions {
        readPreference?: CollectionReadPreference | string;
        maxDistance?: number;
        search?: Object;
        limit?: number;
    }

    export interface CollectionAggrigationOptions {
        readPreference?: CollectionReadPreference | string;
        // Return the query as cursor, on 2.6 > it returns as a real cursor
        // on pre 2.6 it returns as an emulated cursor.
        cursor?: {batchSize: number};
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

    // Documentation : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
    export interface Collection {
        new (db: Db, collectionName: string, pkFactory?: Object, options?: CollectionCreateOptions): Collection; // is this right?

        // Get the collection name.
        collectionName: string;
        // Get the full collection namespace.
        namespace: string;
        // The current write concern values.
        writeConcern: Object;
        // The current read concern values.
        readConcern: Object;
        // Get current index hint for collection.
        hint: Object;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertOne
        insertOne(doc: Object, options?: CollectionInsertOptions): Promise<any>;
        insertOne(doc: Object, options: CollectionInsertOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertMany
        insertMany(docs: DocumentArray, options?: CollectionInsertOptions): Promise<any>;
        insertMany(docs: DocumentArray, options: CollectionInsertOptions, callback: MongoCallback): void

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteOne
        deleteOne(filter: Object, options?: CollectionSaveDeleteOptions): Promise<any>;
        deleteOne(filter: Object, options: CollectionSaveDeleteOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteMany
        deleteMany(filter: Object, options?: CollectionSaveDeleteOptions): Promise<any>;
        deleteMany(filter: Object, options: CollectionSaveDeleteOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#rename
        rename(newName: string, options?: CollectionRenameOptions): Promise<any>;
        rename(newName: string, options: CollectionRenameOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateOne
        updateOne(filter: Object, update: Object): Promise<any>;
        updateOne(filter: Object, update: Object, options: CollectionUpdateOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateMany
        updateMany(filter: Object, update: Object): Promise<any>;
        updateMany(filter: Object, update: Object, options: CollectionUpdateOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#distinct
        distinct(key: string, query: Object, options?: CollectionDistinctOptions): Promise<any>;
        distinct(key: string, query: Object, options: CollectionDistinctOptions, callback: MongoCallback): void

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#count
        count(query: Object, options?: MongoCountPreferences): Promise<any>;
        count(query: Object, options: MongoCountPreferences, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#drop
        drop(): Promise<any>;
        drop(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndDelete
        findOneAndDelete(filter: Object, options?: MongoDeleteOptions): Promise<any>;
        findOneAndDelete(filter: Object, options: MongoDeleteOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndReplace
        findOneAndReplace(filter: Object, replacement: Object, options?: MongoFindUpdateReplaceOptions): Promise<any>;
        findOneAndReplace(filter: Object, replacement: Object, options: MongoFindUpdateReplaceOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndUpdate
        findOneAndUpdate(filter: Object, update: Object, options?: MongoFindUpdateReplaceOptions): Promise<any>;
        findOneAndUpdate(filter: Object, update: Object, options: MongoFindUpdateReplaceOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#find
        find(query: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#createIndex
        createIndex(fieldOrSpec: string | Object, options?: MongoIndexOptions): Promise<any>;
        createIndex(fieldOrSpec: string | Object, options: MongoIndexOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#ensureIndex
        ensureIndex(fieldOrSpec: string | Object, options?: MongoIndexOptions): Promise<any>;
        ensureIndex(fieldOrSpec: string | Object, options: MongoIndexOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#indexInformation
        indexInformation(options?: {full: boolean}): Promise<any>;
        indexInformation(options: {full: boolean}, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#dropIndex
        dropIndex(indexName: string, options?: CollectionSaveDeleteOptions): Promise<any>;
        dropIndex(indexName: string, options: CollectionSaveDeleteOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#dropIndexes
        dropIndexes(): Promise<any>;
        dropIndexes(callback?: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#reIndex
        reIndex(): Promise<any>;
        reIndex(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#mapReduce
        mapReduce(map: Function | string, reduce: Function | string, options?: MapReduceOptions): Promise<any>;
        mapReduce(map: Function | string, reduce: Function | string, options: MapReduceOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#group
        group(keys: Object | Array<any> | Function | Code,
              condition: Object, initial: Object,
              reduce: Function | Code, finalize: Function | Code,
              command: boolean,
              options: CollectionReadPreference,
              callback: MongoCallback): void;

        group(keys: Object | Array<any> | Function | Code,
              condition: Object, initial: Object,
              reduce: Function | Code, finalize: Function | Code,
              command: boolean,
              options?: CollectionReadPreference): Promise<any>;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#options
        options(): Promise<any>;
        options(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#isCapped
        isCapped(): Promise<any>;
        isCapped(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#indexExists
        indexExists(indexes: string | StringArray): Promise<any>;
        indexExists(indexes: string | StringArray, callback: Function): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#geoNear
        geoNear(x: number, y: number, options?: CollectionGeoNearOptions): Promise<any>;
        geoNear(x: number, y: number, options: CollectionGeoNearOptions, callback: Function): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#geoHaystackSearch
        geoHaystackSearch(x: number, y: number, options?: CollectionGeoHaystackSearchOptions): Promise<any>;
        geoHaystackSearch(x: number, y: number, options: CollectionGeoHaystackSearchOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#indexes
        indexes(): Promise<any>;
        indexes(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#aggregate
        aggregate(pipeline: Array<any>, options?: CollectionAggrigationOptions): Promise<any>;
        aggregate(pipeline: Array<any>, options: CollectionAggrigationOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#stats
        stats(options: {scale: number}): Promise<any>;
        stats(options: {scale: number}, callback: MongoCallback): void;
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

    export interface Code {
        code: string | Function;
        scope?: Object;
    }

     export interface CursorCommentOptions {
        skip?: number;
        limit?: number;
        maxTimeMS?: number;
        hint?: CollectionReadPreference | string;
    }

    export interface MongoError {
        message: string;
        create(options: Object): MongoError;
    }

    export interface MongoIteratorCallback {
        (doc: Object): void;
    }

    export interface MongoEndCallback {
        (error: MongoError): void;
    }

    export interface Writable {}
    export interface Stream {}

    export interface Readable {
        destination: Writable;
        options?: Object;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#pause
        pause(): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#pipe
        pipe(): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#project
        project(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#read
        read(size: number): string | Buffer | void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#resume
        resume(): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#setEncoding
        setEncoding(encoding: string): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#unpipe
        unpipe(destination?: Writable): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#unshift
        unshift(stream: Buffer | string): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#unshift
        wrap(stream: Stream): void;
    }

    export var CursorEvent: {
        close: void;
        data: Object;
        end: void;
        readable: void;
    };

    export interface Cursor extends Readable {
        sortValue: string;
        timeout: boolean;
        readPreference: CollectionReadPreference;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#addCursorFlag
        addCursorFlag(flag: string, value: boolean): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#addQueryModifier
        addQueryModifier(name: string, value: boolean): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#batchSize
        batchSize(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#clone
        clone(): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#close
        close(): Promise<any>;
        close(callback: MongoCallback): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#comment
        comment(): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#count
        count(applySkipLimit: boolean, options?: CursorCommentOptions): Promise<any>;
        count(applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#explain
        explain(): Promise<any>;
        explain(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#forEach
        // NOTE:
        // The return value specified in the docs as {null}.
        // Not sure what this is, So for now it's void.
        forEach(iterator: MongoIteratorCallback, callback: MongoEndCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#hasNext
        hasNext(): Promise<any>;
        hasNext(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#hint
        hint(hint: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#isClosed
        isClosed(): boolean;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#limit
        limit(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#map
        // NOTE:
        // The return value specified in the docs as {null}.
        // Not sure what this is, So for now it's void.
        map(transform: Function): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#max
        max(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#maxScan
        maxScan(maxScan: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#maxTimeMS
        maxTimeMS(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#min
        min(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#next
        next(): Promise<any>;
        next(callback: MongoCallback): void;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#next
        returnKey(returnKey: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#setCursorOption
        setCursorOption(field: string, value: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#setReadPreference
        setReadPreference(readPreference: string | CollectionReadPreference): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#showRecordId
        showRecordId(showRecordId: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#skip
        skip(value: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#snapshot
        snapshot(snapshot: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
        sort(keyOrList: string | Array<any> | Object, direction: number): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#stream
        stream(options: Object): Cursor;

        // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#toArray
        toArray(): Promise<any>;
        toArray(callback: ToArrayResultCallback): void;

        // This method is in the docs but the link is broken.
        rewind() : Cursor;

    }

    // Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/cursorstream.html
    // Last update: doc. version 1.3.13 (29.08.2013)
    export interface CursorStream {
        new (cursor: Cursor): CursorStream;

        pause(): any;
        resume(): any;
        destroy(): any;
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
}
