// Project : https://github.com/mongodb/node-mongodb-native
// Documentation : http://mongodb.github.io/node-mongodb-native/


/// <reference path='../node/node.d.ts' />

declare module "mongodb" {

	// Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
	export class MongoClient{           
		constructor(serverConfig: any, options: any);

		static connect(uri: string, options: any, callback: (err: any, db: Db) => void);
		static connect(uri: string, callback: (err: any, db: Db) => void);
	}

	// Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/server.html
	export class Server {
		constructor (host: string, port: number, opts?: ServerOptions);

		public connect();
	}

	// Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/db.html
	export class Db {
		constructor (databaseName: string, serverConfig: Server, dbOptions?: DbCreateOptions);

		public db(dbName: string): Db;

		public open(callback: (err : Error, db : Db) => void );
		public close(forceClose?: boolean, callback?: (err: any, result: any) => void );
		public admin(callback: (err, result) => void ): any;
		public collectionsInfo(collectionName: string, callback?: (err, result) => void );
		public collectionNames(collectionName: string, options: any, callback?: (err, result) => void );

		public collection(collectionName: string): Collection;
		public collection(collectionName: string, callback: (err: any, collection: Collection) => void ): Collection;
		public collection(collectionName: string, options: MongoCollectionOptions, callback: (err: any, collection: Collection) => void ): Collection;

		public collections(callback: (err: any, collections: Collection[]) => void );
		public eval(code: any, parameters: any[], options?: any, callback?: (err, result) => void );
		//public dereference(dbRef: DbRef, callback: (err, result) => void);

		public logout(options: any, callback?: (err, result) => void );
		public logout(callback: (err, result) => void );

		public authenticate(userName: string, password: string, callback?: (err, result) => void );
		public authenticate(userName: string, password: string, options: any, callback?: (err, result) => void );

		public addUser(username: string, password: string, callback?: (err, result) => void );
		public addUser(username: string, password: string, options: any, callback?: (err, result) => void );

		public removeUser(username: string, callback?: (err, result) => void );
		public removeUser(username: string, options: any, callback?: (err, result) => void );

		public createCollection(collectionName: string, callback?: (err: Error, result: Collection) => void );
		public createCollection(collectionName: string, options: CollectionCreateOptions, callback?: (err, result) => void );

		public command(selector: any, callback?: (err, result) => void );
		public command(selector: any, options: any, callback?: (err, result) => void );

		public dropCollection(collectionName: string, callback?: (err, result) => void );
		public renameCollection(fromCollection: string, toCollection: string, callback?: (err, result) => void );

		public lastError(options, connectionOptions, callback: (err, result) => void );
		public previousError(options, callback: (err, result) => void );

		// error = lastError
		// lastStatus = lastError

		public executeDbCommand(command_hash, callback?: (err, result) => void );
		public executeDbCommand(command_hash, options, callback?: (err, result) => void );

		public executeDbAdminCommand(command_hash, callback?: (err, result) => void );
		public executeDbAdminCommand(command_hash, options, callback?: (err, result) => void );

		public resetErrorHistory(callback?: (err, result) => void );
		public resetErrorHistory(options, callback?: (err, result) => void );

		public createIndex(collectionName, fieldOrSpec, options, callback);
		public ensureIndex(collectionName, fieldOrSpec, options, callback);

		public cursorInfo(options, callback);

		public dropIndex(collectionName, indexName, callback);
		public reIndex(collectionName, callback);
		public indexInformation(collectionName, options, callback);
		public dropDatabase(callback: (err, result) => void );

		public stats(options, callback);
		public _registerHandler(db_command, raw, connection, exhaust, callback);
		public _reRegisterHandler(newId, object, callback);
		public _callHandler(id, document, err);
		public _hasHandler(id);
		public _removeHandler(id);
		public _findHandler(id): { id: string; callback: Function; };
		public __executeQueryCommand(self, db_command, options, callback);

		public DEFAULT_URL: string;

		public connect(url: string, options: { uri_decode_auth?: boolean; }, callback: (err, result) => void );
		
		public addListener(event: string, handler:(param: any) => any);
	}

	// Class documentation : http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
	// Last update: doc. version 1.3.13 (28.08.2013)
	export class ObjectID {
		constructor (s: string);

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
		w?: string;

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
		constructor (db: Db, collectionName: string, pkFactory?: Object, options?: CollectionCreateOptions);

		insert(query: any, callback: (err: any, result: any) => void): void;
		insert(query: any, options: { safe?: any; continueOnError?: boolean; keepGoing?: boolean; serializeFunctions?: boolean; }, callback: (err: any, result: any) => void): void;

		remove(selector, callback?: (err: any, result: any) => void);
		remove(selector, options: { safe?: any; single?: boolean; }, callback?: (err: any, result: any) => void);

		rename(newName: String, callback?: (err, result) => void);

		save(doc: any, callback : (err, result) => void);
		save(doc: any, options: { safe: any; }, callback : (err, result) => void);

		update(selector: any, document: any, callback?: (err: any, result: any) => void): void;
		update(selector: any, document: any, options: { safe?; upsert?; multi?; serializeFunctions?; }, callback: (err: any, result: any) => void): void;

		distinct(key: string, query: Object, callback: (err, result) => void);
		distinct(key: string, query: Object, options: { readPreferences; }, callback: (err, result) => void);

		count(callback: (err, result) => void);
		count(query: Object, callback: (err, result) => void);
		count(query: Object, options: { readPreferences; }, callback: (err, result) => void);

		drop(callback?: (err, result) => void);

		findAndModify(query: Object, sort: any[], doc: Object, callback: (err, result) => void);
		findAndModify(query: Object, sort: any[], doc: Object, options: { safe?: any; remove?: boolean; upsert?: boolean; new?: boolean; }, callback: (err, result) => void);

		findAndRemove(query : Object, sort? : any[], callback?: (err, result) => void);
		findAndRemove(query : Object, sort? : any[], options?: { safe; }, callback?: (err, result) => void);

		find(callback?: (err: any, result: Cursor) => void): Cursor;
		find(selector: any, callback?: (err: any, result: Cursor) => void): Cursor;
		find(selector: any, fields: any, callback?: (err: any, result: Cursor) => void): Cursor;
		find(selector: any, options: CollectionFindOptions, callback?: (err: any, result: Cursor) => void): Cursor;
		find(selector: any, fields: any, options: CollectionFindOptions, callback?: (err: any, result: Cursor) => void): Cursor;
		find(selector: any, fields: any, skip: number, limit: number, callback?: (err: any, result: Cursor) => void): Cursor;
		find(selector: any, fields: any, skip: number, limit: number, timeout: number, callback?: (err: any, result: Cursor) => void): Cursor;

		findOne(callback?: (err: any, result: any) => void): Cursor;
		findOne(selector: any, callback?: (err: any, result: any) => void): Cursor;
		findOne(selector: any, fields: any, callback?: (err: any, result: any) => void): Cursor;
		findOne(selector: any, options: CollectionFindOptions, callback?: (err: any, result: any) => void): Cursor;
		findOne(selector: any, fields: any, options: CollectionFindOptions, callback?: (err: any, result: any) => void): Cursor;
		findOne(selector: any, fields: any, skip: number, limit: number, callback?: (err: any, result: any) => void): Cursor;
		findOne(selector: any, fields: any, skip: number, limit: number, timeout: number, callback?: (err: any, result: any) => void): Cursor;

		createIndex(fieldOrSpec, options: IndexOptions, callback: (err: Error, indexName: string) => void);
		ensureIndex(fieldOrSpec, options: IndexOptions, callback: (err: Error, indexName: string) => void);
		indexInformation(options, callback);
		dropIndex(name, callback);
		dropAllIndexes(callback);
		// dropIndexes = dropAllIndexes

		reIndex(callback);
		mapReduce(map, reduce, options, callback);
		group(keys, condition, initial, reduce, finalize, command, options, callback);
		options(callback);
		isCapped(callback);
		indexExists(indexes, callback);
		geoNear(x, y, options, callback);
		geoHaystackSearch(x, y, options, callback);
		indexes(callback);
		aggregate(pipeline: any[], callback: (err: Error, results: any) => void);
		aggregate(pipeline: any[], options, callback: (err: Error, results: any) => void);
		stats(options, callback);

		hint;
	}

	export interface IndexOptions {
		background?: boolean;
		dropDups?: boolean;
		sparse?: boolean;
		unique?: boolean;
		v?: number;
	}

	// Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html
	// Last update: doc. version 1.3.13 (29.08.2013)
	export class Cursor {
		// INTERNAL TYPE
		// constructor (db: Db, collection: Collection, selector, fields, skip, limit, sort, hint, explain, snapshot, timeout, tailable, batchSize, slaveOk, raw, read, returnKey, maxScan, min, max, showDiskLoc, comment, awaitdata, numberOfRetries, dbName, tailableRetryInterval, exhaust, partial);
		// constructor(db: Db, collection: Collection, selector, fields, options);

		rewind() : Cursor;
		toArray(callback: (err: any, results: any[]) => any) : void;
		each(callback: (err: Error, item: any) => void) : void;
		count(applySkipLimit: boolean, callback: (err: any, count: number) => void) : void;

		sort(keyOrList: any, callback? : (err, result) => void): Cursor;

		// this determines how the results are sorted. "asc", "ascending" or 1 for asceding order while "desc", "desceding or -1 for descending order. Note that the strings are case insensitive.
		sort(keyOrList: String, direction : string, callback : (err, result) => void): Cursor;
		limit(limit: number, callback?: (err, result) => void): Cursor;
		setReadPreference(preference: string, callback?): Cursor;
		skip(skip: number, callback?: (err, result) => void): Cursor;
		batchSize(batchSize, callback?: (err, result) => void): Cursor;

		nextObject(callback: (err: any, doc: any) => void) : void;
		explain(callback: (err, result) => void) : void;

		stream(): CursorStream;

		close(callback: (err, result) => void) : void;
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

		public pause();
		public resume();
		public destroy();
	}

	export interface CollectionFindOptions {
		limit?;
		sort?;
		fields?;
		skip?;
		hint?;
		explain?;
		snapshot?;
		timeout?;
		tailtable?;
		tailableRetryInterval?;
		numberOfRetries?;
		awaitdata?;
		exhaust?;
		batchSize?;
		returnKey?;
		maxScan?;
		min?;
		max?;
		showDiskLoc?;
		comment?;
		raw?;
		readPreferences?;
		partial?;
	}

	export interface MongoCollectionOptions {
		safe?: any;
		serializeFunctions?: any;
		raw?: boolean;
		pkFactory?: any;
		readPreferences?: string;
	}
}