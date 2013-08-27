/// <reference path='../node/node.d.ts' />

declare module "mongodb" {

    export function connect(uri: string, options: any, callback: (err: any, db: Db) => void);
    export function connect(uri: string, callback: (err: any, db: Db) => void);

	export class Server {
		constructor (host: string, port: number, opts?: ServerOptions);
	}
	export class Db {
		constructor (databaseName: string, serverConfig: Server, db_options?: DBOptions);

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

	export class ObjectID {
		constructor (s: string);
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

	export interface DBOptions {
		//- if true, use native BSON parser
		native_parser?: boolean;
		//- sets strict mode , if true then existing collections can’t be “recreated” etc.
		strict?: boolean;
		//- custom primary key factory to generate _id values (see Custom primary keys).
		pk?: PKFactory;
		//- generation of objectid is delegated to the mongodb server instead of the driver. default is false
		forceServerObjectId?: boolean;
		//- specify the number of milliseconds between connection attempts default:5000
		retryMiliSeconds?: number;
		//- specify the number of retries for connection attempts default:3
		numberOfRetries?: number;
		//- enable/disable reaper (true/false) default:false
		reaper?: boolean;
		//- specify the number of milliseconds between each reaper attempt default:10000
		reaperInterval?: number;
		//- specify the number of milliseconds for timing out callbacks that don’t return default:30000
		reaperTimeout?: number;
		//- driver expects Buffer raw bson document, default:false
		raw?: boolean;
	}

	export interface CollectionCreateOptions {
		// {true | {w:n, wtimeout:n} | {fsync:true}, default:false}, executes with a getLastError command returning the results of the command on MongoDB.
		safe?: boolean;
		// {Boolean, default:false}, serialize functions on the document.
		serializeFunctions?: boolean;
		// {Boolean, default:false}, perform all operations using raw bson objects.
		raw?: boolean; 
		// object overriding the basic ObjectID primary key generation.
		pkFactory?: PKFactory;
		// {Boolean, default:false}, create a capped collection.
		capped?: boolean;
		// {Number}, the size of the capped collection in bytes. 
		size?: number;
		// {Number}, the maximum number of documents in the capped collection.
		max?: number;
		// {Boolean, default:false}, create an index on the _id field of the document, not created automatically on capped collections.
		autoIndexId?: boolean;
		// {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
		readPreference?: string; 
	}

	export interface Collection {
		//constructor (db: Db, collectionName: string, pkFactory, options);
		
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

	export class Cursor {
		constructor (db, collection, selector, fields, skip, limit, sort, hint, explain, snapshot, timeout, tailable, batchSize, slaveOk, raw, read, returnKey, maxScan, min, max, showDiskLoc, comment, awaitdata, numberOfRetries, dbName, tailableRetryInterval, exhaust, partial);

		rewind() : Cursor;
		toArray(callback: (err: any, results: any[]) => any) : void;
		each(callback: (err: Error, item: any) => void) : void;
		count(callback: (err: any, count: number) => void) : void;

		sort(keyOrList : any, callback? : (err, result) => void): Cursor;
		sort(keyOrList : String, direction : any, callback? : (err, result) => void): Cursor;

		limit(limit: number, callback?: (err, result) => void): Cursor;
		setReadPreference(readPreferences, tags, callback?): Cursor;
		skip(skip: number, callback?: (err, result) => void): Cursor;
		batchSize(batchSize, callback: (err, result) => void): Cursor;

		nextObject(callback: (err:any, doc: any) => void);
		explain(callback: (err, result) => void);
		//stream(): CursorStream;

		close(callback?: (err, result) => void);
		isClosed(): Boolean;

		static INIT;
		static OPEN;
		static CLOSED;
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
