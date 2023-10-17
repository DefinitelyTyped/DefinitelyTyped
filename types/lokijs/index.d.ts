// NOTE: definition last updated (2021-09-08) based on the changes in v1.5.9 (https://github.com/techfort/LokiJS/tree/6a8f453d5075e8637970b71afeb46ee37c161909)
/**
 * LokiJS
 * A lightweight document oriented javascript database
 * @author Joe Minichino <joe.minichino@gmail.com>
 */

/** comparison operators
 * a is the value in the collection
 * b is the query value
 */
declare var LokiOps: {
    $eq(a: any, b: any): boolean;
    // abstract/loose equality
    $aeq(a: any, b: any): boolean;
    $ne(a: any, b: any): boolean;
    // date equality / loki abstract equality test
    $dteq(a: any, b: any): boolean;
    $gt(a: any, b: any): boolean;
    $gte(a: any, b: any): boolean;
    $lt(a: any, b: any): boolean;
    $lte(a: any, b: any): boolean;
    /** ex : coll.find({'orderCount': {$between: [10, 50]}}); */
    $between(a: any, vals: any /*[any, any]*/): boolean;
    $jgt(a: any, b: any): boolean;
    $jgte(a: any, b: any): boolean;
    $jlt(a: any, b: any): boolean;
    $jlte(a: any, b: any): boolean;
    $jbetween(a: any, vals: any /*[any, any]*/): boolean;
    $in(a: any, b: any): boolean;
    $nin(a: any, b: any): boolean;
    $keyin(a: any, b: any): boolean;
    $nkeyin(a: any, b: any): boolean;
    $definedin(a: any, b: any): boolean;
    $undefinedin(a: any, b: any): boolean;
    $regex(a: any, b: any): boolean;
    $containsString(a: any, b: any): boolean;
    $containsNone(a: any, b: any): boolean;
    $containsAny(a: any, b: any): boolean;
    $contains(a: any, b: any): boolean;
    $type(a: any, b: any): boolean;
    $finite(a: any, b: any): boolean;
    $size(a: any, b: any): boolean;
    $len(a: any, b: any): boolean;
    $where(a: any, b: any): boolean;
    // field-level logical operators
    // a is the value in the collection
    // b is the nested query operation (for '$not')
    //   or an array of nested query operations (for '$and' and '$or')
    $not(a: any, b: any): boolean;
    $and(a: any, b: any): boolean;
    $or(a: any, b: any): boolean;
};
declare type LokiOps = typeof LokiOps;

/** if an op is registered in this object, our 'calculateRange' can use it with our binary indices.
 * if the op is registered to a function, we will run that function/op as a 2nd pass filter on results.
 * those 2nd pass filter functions should be similar to LokiOps functions, accepting 2 vals to compare.
 */
declare var indexedOps: {
    $eq: LokiOps["$eq"];
    $aeq: true;
    $dteq: true;
    $gt: true;
    $gte: true;
    $lt: true;
    $lte: true;
    $in: true;
    $between: true;
};

type PartialModel<E, T> = { [P in keyof E]?: T | E[P] };

type LokiQuery<E> = PartialModel<E & { $and: any; $or: any }, { [Y in keyof LokiOps]?: any }>;

interface LokiObj {
    $loki: number;
    meta: {
        created: number; // Date().getTime()
        revision: number;
        updated: number; // Date().getTime()
        version: number;
    };
}

/**
 * LokiEventEmitter is a minimalist version of EventEmitter. It enables any
 * constructor that inherits EventEmitter to emit events and trigger
 * listeners that have been added to the event through the on(event, callback) method
 */
declare class LokiEventEmitter {
    /**
     * events - a hashmap, with each property being an array of callbacks
     */
    public events: { [eventName: string]: ((...args: any[]) => any)[] };

    /**
     * asyncListeners - boolean determines whether or not the callbacks associated with each event
     * should happen in an async fashion or not
     * Default is false, which means events are synchronous
     */
    public asyncListeners: boolean;

    /**
     * on(eventName, listener) - adds a listener to the queue of callbacks associated to an event
     * @param eventName - the name(s) of the event(s) to listen to
     * @param listener - callback function of listener to attach
     * @returns the index of the callback in the array of listeners for a particular event
     */
    on<F extends (...args: any[]) => any>(eventName: string | string[], listener: F): F;

    /**
     * emit(eventName, data) - emits a particular event
     * with the option of passing optional parameters which are going to be processed by the callback
     * provided signatures match (i.e. if passing emit(event, arg0, arg1) the listener should take two parameters)
     * @param eventName - the name of the event
     * @param data - optional object passed with the event
     */
    emit(eventName: string, data?: any, arg?: any): void;

    /**
     * Alias of LokiEventEmitter.prototype.on
     * addListener(eventName, listener) - adds a listener to the queue of callbacks associated to an event
     * @param eventName - the name(s) of the event(s) to listen to
     * @param listener - callback function of listener to attach
     * @returns the event listener added
     */
    public addListener: LokiEventEmitter["on"];

    /**
     * removeListener() - removes the listener at position 'index' from the event 'eventName'
     * @param eventName - the name(s) of the event(s) which the listener is attached to
     * @param listener - the listener callback function to remove from emitter
     */
    public removeListener(eventName: string | string[], listener: (...args: any[]) => any): void;
}

interface LokiConstructorOptions {
    verbose: boolean;
    env: "NATIVESCRIPT" | "NODEJS" | "CORDOVA" | "BROWSER" | "NA";
}

interface LokiConfigOptions {
    adapter: LokiPersistenceAdapter | null;
    autoload: boolean;
    autoloadCallback: (err: any) => void;
    autosave: boolean;
    autosaveCallback: (err?: any) => void;
    autosaveInterval: string | number;
    persistenceMethod: "fs" | "localStorage" | "memory" | null;
    destructureDelimiter: string;
    serializationMethod: "normal" | "pretty" | "destructured" | null;
    throttledSaves: boolean;
}

type DeserializeOptions = {
    partitioned?: boolean | undefined;
    delimited: false;
    delimiter?: string | undefined;
    partition?: number | undefined;
} | {
    partitioned?: boolean | undefined;
    delimited?: true | undefined;
    delimiter: string;
    partition?: number | undefined;
};

interface ThrottledSaveDrainOptions {
    recursiveWait: boolean;
    recursiveWaitLimit: boolean;
    recursiveWaitLimitDuration: number;
    started: number;
}

interface Transform {
    type:
        | "find"
        | "where"
        | "simplesort"
        | "compoundsort"
        | "sort"
        | "limit"
        | "offset"
        | "map"
        | "eqJoin"
        | "mapReduce"
        | "update"
        | "remove";
    value?: any;
    property?: string | undefined;
    desc?: boolean | undefined;
    dataOptions?: any;
    joinData?: any;
    leftJoinKey?: any;
    rightJoinKey?: any;
    mapFun?: any;
    mapFunction?: any;
    reduceFunction?: any;
}

/**
 * Loki: The main database class
 */
declare class Loki extends LokiEventEmitter {
    collections: Collection<any>[];
    options: Partial<LokiConstructorOptions> & LokiConfigOptions & Partial<ThrottledSaveDrainOptions>;
    filename: string;
    name?: string | undefined;
    databaseVersion: number;
    engineVersion: number;
    autosave: boolean;
    autosaveInterval: number;
    autosaveHandle: number | null;
    persistenceAdapter: LokiPersistenceAdapter | null | undefined;
    persistenceMethod: "fs" | "localStorage" | "memory" | "adapter" | null | undefined;
    throttledCallbacks: ((err?: any) => void)[];
    throttledSavePending: boolean;
    throttledSaves: boolean;
    verbose: boolean;
    ENV: "NATIVESCRIPT" | "NODEJS" | "CORDOVA" | "BROWSER" | "NA";

    /**
     * @param filename - name of the file to be saved to
     * @param options - (Optional) config options object
     * @param options.env - override environment detection as 'NODEJS', 'BROWSER', 'CORDOVA'
     * @param [options.verbose=false] - enable console output
     * @param [options.autosave=false] - enables autosave
     * @param [options.autosaveInterval=5000] - time interval (in milliseconds) between saves (if dirty)
     * @param [options.autoload=false] - enables autoload on loki instantiation
     * @param options.autoloadCallback - user callback called after database load
     * @param options.adapter - an instance of a loki persistence adapter
     * @param [options.serializationMethod='normal'] - ['normal', 'pretty', 'destructured']
     * @param options.destructureDelimiter - string delimiter used for destructured serialization
     * @param [options.throttledSaves=true] - debounces multiple calls to to saveDatabase reducing number of disk I/O operations
                                            and guaranteeing proper serialization of the calls.
     */
    constructor(
        filename: string,
        options?: Partial<LokiConstructorOptions> & Partial<LokiConfigOptions> & Partial<ThrottledSaveDrainOptions>,
    );

    // experimental support for browserify's abstract syntax scan to pick up dependency of indexed adapter.
    // Hopefully, once this hits npm a browserify require of lokijs should scan the main file and detect this indexed adapter reference.
    public getIndexedAdapter(): any;

    /**
     * Allows reconfiguring database options
     *
     * @param options - configuration options to apply to loki db object
     * @param options.env - override environment detection as 'NODEJS', 'BROWSER', 'CORDOVA'
     * @param options.verbose - enable console output (default is 'false')
     * @param options.autosave - enables autosave
     * @param options.autosaveInterval - time interval (in milliseconds) between saves (if dirty)
     * @param options.autoload - enables autoload on loki instantiation
     * @param options.autoloadCallback - user callback called after database load
     * @param options.adapter - an instance of a loki persistence adapter
     * @param options.serializationMethod - ['normal', 'pretty', 'destructured']
     * @param options.destructureDelimiter - string delimiter used for destructured serialization
     * @param initialConfig - (internal) true is passed when loki ctor is invoking
     */
    public configureOptions(
        options?: Partial<LokiConfigOptions> & Partial<ThrottledSaveDrainOptions>,
        initialConfig?: boolean,
    ): void;

    /**
     * Copies 'this' database into a new Loki instance. Object references are shared to make lightweight.
     *
     * @param options - apply or override collection level settings
     * @param options.removeNonSerializable - nulls properties not safe for serialization.
     */
    public copy(options?: { removeNonSerializable?: boolean | undefined }): Loki;

    /**
     * Adds a collection to the database.
     * @param name - name of collection to add
     * @param options - (optional) options to configure collection with.
     * @param [options.unique=[]] - array of property names to define unique constraints for
     * @param [options.exact=[]] - array of property names to define exact constraints for
     * @param [options.indices=[]] - array property names to define binary indexes for
     * @param [options.asyncListeners=false] - whether listeners are called asynchronously
     * @param [options.disableChangesApi=true] - set to false to enable Changes Api
     * @param [options.autoupdate=false] - use Object.observe to update objects automatically
     * @param [options.clone=false] - specify whether inserts and queries clone to/from user
     * @param [options.cloneMethod='parse-stringify'] - 'parse-stringify', 'jquery-extend-deep', 'shallow, 'shallow-assign'
     * @param options.ttlInterval - time interval for clearing out 'aged' documents; not set by default.
     * @returns a reference to the collection which was just added
     */
    public addCollection<F extends object = any>(name: string, options?: Partial<CollectionOptions<F>>): Collection<F>;

    public loadCollection(collection: Collection<any>): void;

    /**
     * Retrieves reference to a collection by name.
     * @param collectionName - name of collection to look up
     * @returns Reference to collection in database by that name, or null if not found
     */
    public getCollection<F extends object = any>(collectionName: string): Collection<F>;

    /**
     * Renames an existing loki collection
     * @param oldName - name of collection to rename
     * @param newName - new name of collection
     * @returns reference to the newly renamed collection
     */
    public renameCollection(oldName: string, newName: string): Collection<any>;

    public listCollections(): Collection<any>[];

    /**
     * Removes a collection from the database.
     * @param collectionName - name of collection to remove
     */
    public removeCollection(collectionName: string): void;

    public getName(): string;

    /**
     * serializeReplacer - used to prevent certain properties from being serialized
     */
    public serializeReplacer(
        key:
            | "autosaveHandle"
            | "persistenceAdapter"
            | "constraints"
            | "ttl"
            | "throttledSavePending"
            | "throttledCallbacks"
            | string,
        value: any,
    ): any;

    /**
     * Serialize database to a string which can be loaded via {@link Loki#loadJSON}
     *
     * @returns Stringified representation of the loki database.
     */
    public serialize(): string;
    public serialize(options: { serializationMethod?: "normal" | "pretty" | undefined }): string;
    public serialize(options: { serializationMethod: "destructured" }): string[];
    public serialize(options?: { serializationMethod?: string | null | undefined }): string | string[];
    public serialize(options?: { serializationMethod?: string | null | undefined }): string | string[];

    // alias of serialize
    public toJson: Loki["serialize"];

    /**
     * Database level destructured JSON serialization routine to allow alternate serialization methods.
     * Internally, Loki supports destructuring via loki "serializationMethod' option and
     * the optional LokiPartitioningAdapter class. It is also available if you wish to do
     * your own structured persistence or data exchange.
     *
     * @param options - output format options for use externally to loki
     * @param options.partitioned - (default: false) whether db and each collection are separate
     * @param options.partition - can be used to only output an individual collection or db (-1)
     * @param options.delimited - (default: true) whether subitems are delimited or subarrays
     * @param options.delimiter - override default delimiter
     *
     * @returns A custom, restructured aggregation of independent serializations.
     */
    public serializeDestructured(
        options?: {
            delimited?: boolean | undefined;
            delimiter?: string | undefined;
            partitioned?: boolean | undefined;
            partition?: number | undefined;
        },
    ): string | string[];

    /**
     * Collection level utility method to serialize a collection in a 'destructured' format
     *
     * @param [options] - used to determine output of method
     * @param [options.delimited] - whether to return single delimited string or an array
     * @param [options.delimiter] - (optional) if delimited, this is delimiter to use
     * @param [options.collectionIndex] - specify which collection to serialize data for
     *
     * @returns A custom, restructured aggregation of independent serializations for a single collection.
     */
    public serializeCollection(
        options?: {
            delimited?: boolean | undefined;
            collectionIndex?: number | undefined;
            delimiter?: string | undefined;
        },
    ): string | string[];

    /**
     * Database level destructured JSON deserialization routine to minimize memory overhead.
     * Internally, Loki supports destructuring via loki "serializationMethod' option and
     * the optional LokiPartitioningAdapter class. It is also available if you wish to do
     * your own structured persistence or data exchange.
     *
     * @param destructuredSource - destructured json or array to deserialize from
     * @param [options] - source format options
     * @param [options.partitioned=false] - whether db and each collection are separate
     * @param [options.partition] - can be used to deserialize only a single partition
     * @param [options.delimited=true] - whether subitems are delimited or subarrays
     * @param [options.delimiter] - override default delimiter
     *
     * @returns An object representation of the deserialized database, not yet applied to 'this' db or document array
     */
    public deserializeDestructured(destructuredSource: string | string[] | null, options?: DeserializeOptions): any;

    /**
     * Collection level utility function to deserializes a destructured collection.
     *
     * @param destructuredSource - destructured representation of collection to inflate
     * @param [options] - used to describe format of destructuredSource input
     * @param [options.delimited=false] - whether source is delimited string or an array
     * @param [options.delimiter] - if delimited, this is delimiter to use (if other than default)
     *
     * @returns an array of documents to attach to collection.data.
     */
    public deserializeCollection(
        destructuredSource: string | string[],
        options?: {
            partitioned?: boolean | undefined;
            delimited?: boolean | undefined;
            delimiter?: string | undefined;
        },
    ): any[];

    /**
     * Inflates a loki database from a serialized JSON string
     *
     * @param serializedDb - a serialized loki database string
     * @param [options] - apply or override collection level settings
     * @param [options.serializationMethod] - the serialization format to deserialize
     */
    public loadJSON(
        serializedDb: string,
        options?: { serializationMethod?: "normal" | "pretty" | "destructured" | null | undefined } & {
            retainDirtyFlags?: boolean | undefined;
            throttledSaves?: boolean | undefined;
            [collName: string]: any | { proto?: any; inflate?: ((src: object, dest?: object) => void) | undefined };
        },
    ): void;

    /**
     * Inflates a loki database from a JS object
     *
     * @param dbObject - a serialized loki database string
     * @param options - apply or override collection level settings
     * @param options.retainDirtyFlags - whether collection dirty flags will be preserved
     */
    public loadJSONObject(
        dbObject: {
            name?: string | undefined;
            throttledSaves: boolean;
            collections: Collection<any>[];
            databaseVersion: number;
        },
        options?: {
            retainDirtyFlags?: boolean | undefined;
            throttledSaves?: boolean | undefined;
            [collName: string]: any | { proto?: any; inflate?: ((src: object, dest?: object) => void) | undefined };
        },
    ): void;

    /**
     * Emits the close event. In autosave scenarios, if the database is dirty, this will save and disable timer.
     * Does not actually destroy the db.
     *
     * @param callback - (Optional) if supplied will be registered with close event before emitting.
     */
    public close(callback?: (err?: any) => void): void;

    /**-------------------------+
    | Changes API               |
    +--------------------------*/

    /**
     * The Changes API enables the tracking the changes occurred in the collections since the beginning of the session,
     * so it's possible to create a differential dataset for synchronization purposes (possibly to a remote db)
     */

    /**
     * (Changes API) : takes all the changes stored in each
     * collection and creates a single array for the entire database. If an array of names
     * of collections is passed then only the included collections will be tracked.
     *
     * @param optional array of collection names. No arg means all collections are processed.
     * @returns array of changes
     * @see private method createChange() in Collection
     */
    public generateChangesNotification(arrayOfCollectionNames?: string[] | null): CollectionChange[];

    /**
     * (Changes API) - stringify changes for network transmission
     * @returns string representation of the changes
     */
    public serializeChanges(collectionNamesArray?: string[]): string;

    /**
     * (Changes API) : clears all the changes in all collections.
     */
    public clearChanges(): void;

    /**
     * Wait for throttledSaves to complete and invoke your callback when drained or duration is met.
     *
     * @param callback - callback to fire when save queue is drained, it is passed a sucess parameter value
     * @param [options] - configuration options
     * @param [options.recursiveWait] - (default: true) if after queue is drained, another save was kicked off, wait for it
     * @param [options.recursiveWaitLimit] - (default: false) limit our recursive waiting to a duration
     * @param [options.recursiveWaitLimitDelay] - (default: 2000) cutoff in ms to stop recursively re-draining
     */
    public throttledSaveDrain(callback: (result?: boolean) => void, options?: Partial<ThrottledSaveDrainOptions>): void;

    /**
     * Internal load logic, decoupled from throttling/contention logic
     *
     * @param [options] - not currently used (remove or allow overrides?)
     * @param [callback] - (Optional) user supplied async callback / error handler
     */
    public loadDatabaseInternal(options?: any, callback?: (err?: any, data?: any) => void): void;

    /**
     * Handles manually loading from file system, local storage, or adapter (such as indexeddb)
     *    This method utilizes loki configuration options (if provided) to determine which
     *    persistence method to use, or environment detection (if configuration was not provided).
     *    To avoid contention with any throttledSaves, we will drain the save queue first.
     *
     * If you are configured with autosave, you do not need to call this method yourself.
     *
     * @param [options] - if throttling saves and loads, this controls how we drain save queue before loading
     * @param [options.recursiveWait] - (default: true) wait recursively until no saves are queued
     * @param [options.recursiveWaitLimit] - (default: false) limit our recursive waiting to a duration
     * @param [options.recursiveWaitLimitDelay] - (default: 2000) cutoff in ms to stop recursively re-draining
     * @param [callback] - (Optional) user supplied async callback / error handler
     * @example
     * db.loadDatabase({}, function(err) {
     *   if (err) {
     *     console.log("error : " + err);
     *   }
     *   else {
     *     console.log("database loaded.");
     *   }
     * });
     */
    public loadDatabase(options?: Partial<ThrottledSaveDrainOptions>, callback?: (err: any) => void): void;

    /**
     * Internal save logic, decoupled from save throttling logic
     */
    public saveDatabaseInternal(callback?: (err: any) => void): void;

    /**
     * Handles manually saving to file system, local storage, or adapter (such as indexeddb)
     *    This method utilizes loki configuration options (if provided) to determine which
     *    persistence method to use, or environment detection (if configuration was not provided).
     *
     * If you are configured with autosave, you do not need to call this method yourself.
     *
     * @param [callback] - (Optional) user supplied async callback / error handler
     * @example
     * db.saveDatabase(function(err) {
     *   if (err) {
     *     console.log("error : " + err);
     *   }
     *   else {
     *     console.log("database saved.");
     *   }
     * });
     */
    public saveDatabase(callback?: (err?: any) => void): void;

    // alias
    public save: Loki["saveDatabase"];

    /**
     * Handles deleting a database from file system, local
     *    storage, or adapter (indexeddb)
     *    This method utilizes loki configuration options (if provided) to determine which
     *    persistence method to use, or environment detection (if configuration was not provided).
     *
     * @param callback - (Optional) user supplied async callback / error handler
     */
    public deleteDatabase(callback: (err?: any, data?: any) => void): void;
    public deleteDatabase(options?: null, callback?: (err?: any, data?: any) => void): void;
    public deleteDatabase(
        options?: ((err?: any, data?: any) => void) | null,
        callback?: (err?: any, data?: any) => void,
    ): void;

    /**
     * autosaveDirty - check whether any collections are 'dirty' meaning we need to save (entire) database
     *
     * @returns true if database has changed since last autosave, false if not.
     */
    public autosaveDirty(): boolean;

    /**
     * autosaveClearFlags - resets dirty flags on all collections.
     *    Called from saveDatabase() after db is saved.
     */
    public autosaveClearFlags(): void;

    /**
     * autosaveEnable - begin a javascript interval to periodically save the database.
     *
     * @param [options] - not currently used (remove or allow overrides?)
     * @param [callback] - (Optional) user supplied async callback
     */
    public autosaveEnable(options?: any, callback?: (err?: any) => void): void;

    /**
     * autosaveDisable - stop the autosave interval timer.
     */
    public autosaveDisable(): void;
}

/*------------------+
| PERSISTENCE       |
-------------------*/

/** there are two build in persistence adapters for internal use
 * fs             for use in Nodejs type environments
 * localStorage   for use in browser environment
 * defined as helper classes here so its easy and clean to use
 */

interface LokiPersistenceAdapter {
    mode?: string | undefined;
    loadDatabase(dbname: string, callback: (value: any) => void): void;
    deleteDatabase?(dbnameOrOptions: any, callback: (err?: Error | null, data?: any) => void): void;
    exportDatabase?(dbname: string, dbref: Loki, callback: (err: Error | null) => void): void;
    saveDatabase?(dbname: string, dbstring: any, callback: (err?: Error | null) => void): void;
}

/**
 * In in-memory persistence adapter for an in-memory database.
 * This simple 'key/value' adapter is intended for unit testing and diagnostics.
 *
 * @param [options] - memory adapter options
 * @param [options.asyncResponses=false] - whether callbacks are invoked asynchronously
 * @param [options.asyncTimeout=50] - timeout in ms to queue callbacks
 */
declare class LokiMemoryAdapter implements LokiPersistenceAdapter {
    hashStore: { [name: string]: { savecount: number; lastsave: Date; value: string } };
    options: { asyncResponses?: boolean | undefined; asyncTimeout?: number | undefined };

    constructor(options?: { asyncResponses?: boolean | undefined; asyncTimeout?: number | undefined });

    /**
     * Loads a serialized database from its in-memory store.
     * (Loki persistence adapter interface function)
     *
     * @param dbname - name of the database (filename/keyname)
     * @param callback - adapter callback to return load result to caller
     */
    public loadDatabase(dbname: string, callback: (value: any) => void): void;

    /**
     * Saves a serialized database to its in-memory store.
     * (Loki persistence adapter interface function)
     *
     * @param dbname - name of the database (filename/keyname)
     * @param callback - adapter callback to return load result to caller
     */
    public saveDatabase(dbname: string, dbstring: any, callback: (err?: Error | null) => void): void;

    /**
     * Deletes a database from its in-memory store.
     *
     * @param dbname - name of the database (filename/keyname)
     * @param callback - function to call when done
     */
    public deleteDatabase(dbname: string, callback: (err?: Error | null) => void): void;
}

interface PageIterator {
    collection: number;
    pageIndex: number;
    docIndex: number;
}

/**
 * An adapter for adapters.  Converts a non reference mode adapter into a reference mode adapter
 * which can perform destructuring and partioning.  Each collection will be stored in its own key/save and
 * only dirty collections will be saved.  If you  turn on paging with default page size of 25megs and save
 * a 75 meg collection it should use up roughly 3 save slots (key/value pairs sent to inner adapter).
 * A dirty collection that spans three pages will save all three pages again
 * Paging mode was added mainly because Chrome has issues saving 'too large' of a string within a
 * single indexeddb row.  If a single document update causes the collection to be flagged as dirty, all
 * of that collection's pages will be written on next save.
 *
 * @param adapter - reference to a 'non-reference' mode loki adapter instance.
 * @param options - configuration options for partitioning and paging
 * @param [options.paging] - (default: false) set to true to enable paging collection data.
 * @param [options.pageSize] - (default : 25MB) you can use this to limit size of strings passed to inner adapter.
 * @param [options.delimiter] - allows you to override the default delimeter
 */
declare class LokiPartitioningAdapter implements LokiPersistenceAdapter {
    mode: string;
    dbref: Loki | null;
    dbname: string;
    adapter: LokiPersistenceAdapter | null;
    options: { paging?: boolean | undefined; pageSize?: number | undefined; delimiter?: string | undefined };
    pageIterator: PageIterator | {};
    dirtyPartitions: number[] | undefined;

    constructor(
        adapter: LokiPersistenceAdapter,
        options?: { paging?: boolean | undefined; pageSize?: number | undefined; delimiter?: string | undefined },
    );

    /**
     * Loads a database which was partitioned into several key/value saves.
     * (Loki persistence adapter interface function)
     *
     * @param dbname - name of the database (filename/keyname)
     * @param callback - adapter callback to return load result to caller
     */
    public loadDatabase(dbname: string, callback: (dbOrErr: Loki | null | Error) => void): void;

    /**
     * Used to sequentially load each collection partition, one at a time.
     *
     * @param partition - ordinal collection position to load next
     * @param callback - adapter callback to return load result to caller
     */
    public loadNextPartition(partition: number, callback: () => void): void;

    /**
     * Used to sequentially load the next page of collection partition, one at a time.
     *
     * @param callback - adapter callback to return load result to caller
     */
    public loadNextPage(callback: () => void): void;

    /**
     * Saves a database by partioning into separate key/value saves.
     * (Loki 'reference mode' persistence adapter interface function)
     *
     * @param dbname - name of the database (filename/keyname)
     * @param dbref - reference to database which we will partition and save.
     * @param callback - adapter callback to return load result to caller
     */
    public exportDatabase(dbname: string, dbref: Loki, callback: (err: Error | null) => void): void;

    /**
     * Helper method used internally to save each dirty collection, one at a time.
     *
     * @param callback - adapter callback to return load result to caller
     */
    public saveNextPartition(callback: (err: Error | null) => void): void;

    /**
     * Helper method used internally to generate and save the next page of the current (dirty) partition.
     *
     * @param callback - adapter callback to return load result to caller
     */
    public saveNextPage(callback: (err: Error | null) => void): void;
}

/**
 * A loki persistence adapter which persists using node fs module
 */
declare class LokiFsAdapter implements LokiPersistenceAdapter {
    constructor();

    /**
     * loadDatabase() - Load data from file, will throw an error if the file does not exist
     * @param dbname - the filename of the database to load
     * @param callback - the callback to handle the result
     */
    public loadDatabase(dbname: string, callback: (data: any | Error) => void): void;

    /**
     * saveDatabase() - save data to file, will throw an error if the file can't be saved
     * might want to expand this to avoid dataloss on partial save
     * @param dbname - the filename of the database to load
     * @param callback - the callback to handle the result
     */
    public saveDatabase(dbname: string, dbstring: string | Uint8Array, callback: (err?: Error | null) => void): void;

    /**
     * deleteDatabase() - delete the database file, will throw an error if the
     * file can't be deleted
     * @param dbname - the filename of the database to delete
     * @param callback - the callback to handle the result
     */
    public deleteDatabase(dbname: string, callback: (err?: Error | null) => void): void;
}

/**
 * A loki persistence adapter which persists to web browser's local storage object
 */
declare class LokiLocalStorageAdapter {
    /**
     * loadDatabase() - Load data from localstorage
     * @param dbname - the name of the database to load
     * @param callback - the callback to handle the result
     */
    public loadDatabase(dbname: string, callback: (dataOrError: any | Error) => void): void;

    /**
     * saveDatabase() - save data to localstorage, will throw an error if the file can't be saved
     * might want to expand this to avoid dataloss on partial save
     * @param dbname - the filename of the database to load
     * @param callback - the callback to handle the result
     */
    public saveDatabase(dbname: string, dbstring: string, callback: (err?: Error | null) => void): void;

    /**
     * deleteDatabase() - delete the database from localstorage, will throw an error if it
     * can't be deleted
     * @param dbname - the filename of the database to delete
     * @param callback - the callback to handle the result
     */
    public deleteDatabase(dbname: string, callback: (err?: Error | null) => void): void;
}

interface GetDataOptions {
    forceClones: boolean;
    forceCloneMethod:
        | ("parse-stringify" | "jquery-extend-deep" | "shallow" | "shallow-assign" | "shallow-recurse-objects")
        | null;
    removeMeta: boolean;
}

interface SimplesortOptions {
    desc: boolean;
    disableIndexIntersect: boolean;
    forceIndexIntersect: boolean;
    useJavascriptSorting: boolean;
}

/**
 * Resultset class allowing chainable queries.  Intended to be instanced internally.
 *    Collection.find(), Collection.where(), and Collection.chain() instantiate this.
 *
 * @example
 *    mycollection.chain()
 *      .find({ 'doors' : 4 })
 *      .where(function(obj) { return obj.name === 'Toyota' })
 *      .data();
 */
declare class Resultset<E extends object> {
    collection: Collection<E>;
    filteredrows: number[];
    filterInitialized: boolean;

    /**
     * @param collection - The collection which this Resultset will query against.
     * @param options
     */
    constructor(collection: Collection<E>, options?: any);

    /**
     * reset() - Reset the resultset to its initial state.
     *
     * @returns Reference to this resultset, for future chain operations.
     */
    public reset(): this;

    /**
     * toJSON() - Override of toJSON to avoid circular references
     */
    public toJSON(): Resultset<E>;

    /**
     * Allows you to limit the number of documents passed to next chain operation.
     *    A resultset copy() is made to avoid altering original resultset.
     *
     * @param qty - The number of documents to return.
     * @returns Returns a copy of the resultset, limited by qty, for subsequent chain ops.
     */
    public limit(qty: number): Resultset<E>;

    /**
     * Used for skipping 'pos' number of documents in the resultset.
     *
     * @param pos - Number of documents to skip; all preceding documents are filtered out.
     * @returns Returns a copy of the resultset, containing docs starting at 'pos' for subsequent chain ops.
     */
    public offset(pos: number): Resultset<E>;

    /**
     * copy() - To support reuse of resultset in branched query situations.
     *
     * @returns Returns a copy of the resultset (set) but the underlying document references will be the same.
     */
    public copy(): Resultset<E>;

    /**
     * Alias of copy()
     */
    public branch: Resultset<E>["copy"];

    /**
     * transform() - executes a named collection transform or raw array of transform steps against the resultset.
     *
     * @param transform - name of collection transform or raw transform array
     * @param parameters - (Optional) object property hash of parameters, if the transform requires them.
     * @returns either (this) resultset or a clone of of this resultset (depending on steps)
     */
    public transform(transform: string | string[] | Transform[], parameters?: object): Resultset<any>;

    /**
     * User supplied compare function is provided two documents to compare. (chainable)
     * @example
     *    rslt.sort(function(obj1, obj2) {
     *      if (obj1.name === obj2.name) return 0;
     *      if (obj1.name > obj2.name) return 1;
     *      if (obj1.name < obj2.name) return -1;
     *    });
     *
     * @param comparefun - A javascript compare function used for sorting.
     * @returns Reference to this resultset, sorted, for future chain operations.
     */
    public sort(comparefun: (a: E & LokiObj, b: E & LokiObj) => number): this;

    /**
     * Simpler, loose evaluation for user to sort based on a property name. (chainable).
     *    Sorting based on the same lt/gt helper functions used for binary indices.
     *
     * @param propname - name of property to sort by.
     * @param options - boolean to specify if sort is descending, or options object
     * @param [options.desc] - whether to sort descending
     * @param [options.disableIndexIntersect] - whether we should explicity not use array intersection.
     * @param [options.forceIndexIntersect] - force array intersection (if binary index exists).
     * @param [options.useJavascriptSorting] - whether results are sorted via basic javascript sort.
     * @returns Reference to this resultset, sorted, for future chain operations.
     */
    public simplesort(propname: keyof E, options?: boolean | Partial<SimplesortOptions>): this;

    /**
     * Allows sorting a resultset based on multiple columns.
     * @example
     * // to sort by age and then name (both ascending)
     * rs.compoundsort(['age', 'name']);
     * // to sort by age (ascending) and then by name (descending)
     * rs.compoundsort(['age', ['name', true]);
     *
     * @param properties - array of property names or subarray of [propertyname, isdesc] used evaluate sort order
     * @returns Reference to this resultset, sorted, for future chain operations.
     */
    public compoundsort(properties: [keyof E, boolean][]): this;

    /**
     * findOr() - oversee the operation of OR'ed query expressions.
     *    OR'ed expression evaluation runs each expression individually against the full collection,
     *    and finally does a set OR on each expression's results.
     *    Each evaluation can utilize a binary index to prevent multiple linear array scans.
     *
     * @param expressionArray - array of expressions
     * @returns this resultset for further chain ops.
     */
    public findOr(expressionArray: LokiQuery<E>[]): this;

    public $or: Resultset<E>["findOr"];

    /**
     * findAnd() - oversee the operation of AND'ed query expressions.
     *    AND'ed expression evaluation runs each expression progressively against the full collection,
     *    internally utilizing existing chained resultset functionality.
     *    Only the first filter can utilize a binary index.
     *
     * @param expressionArray - array of expressions
     * @returns this resultset for further chain ops.
     */
    public findAnd(expressionArray: LokiQuery<E>[]): this;

    public $and: Resultset<E>["findAnd"];

    /**
     * Used for querying via a mongo-style query object.
     *
     * @param query - A mongo-style query object used for filtering current results.
     * @param firstOnly - (Optional) Used by collection.findOne()
     * @returns this resultset for further chain ops.
     */
    public find(query?: LokiQuery<E>, firstOnly?: boolean): this;

    /**
     * where() - Used for filtering via a javascript filter function.
     *
     * @param fun - A javascript function used for filtering current results by.
     * @returns this resultset for further chain ops.
     */
    public where(fun: (data: E & LokiObj) => boolean): this;

    /**
     * count() - returns the number of documents in the resultset.
     *
     * @returns The number of documents in the resultset.
     */
    public count(): number;

    /**
     * Terminates the chain and returns array of filtered documents
     *
     * @param [options] - allows specifying 'forceClones' and 'forceCloneMethod' options.
     * @param [options.forceClones] - Allows forcing the return of cloned objects even when
     *        the collection is not configured for clone object.
     * @param [options.forceCloneMethod] - Allows overriding the default or collection specified cloning method.
     *        Possible values include 'parse-stringify', 'jquery-extend-deep', 'shallow', 'shallow-assign'
     * @param [options.removeMeta] - Will force clones and strip $loki and meta properties from documents
     *
     * @returns Array of documents in the resultset
     */
    public data(options?: Partial<GetDataOptions>): (E & LokiObj)[];

    /**
     * Used to run an update operation on all documents currently in the resultset.
     *
     * @param updateFunction - User supplied updateFunction(obj) will be executed for each document object.
     * @returns this resultset for further chain ops.
     */
    public update(updateFunction: (obj: E) => void): this;

    /**
     * Removes all document objects which are currently in resultset from collection (as well as resultset)
     *
     * @returns this (empty) resultset for further chain ops.
     */
    public remove(): this;

    /**
     * data transformation via user supplied functions
     *
     * @param mapFunction - this function accepts a single document for you to transform and return
     * @param reduceFunction - this function accepts many (array of map outputs) and returns single value
     * @returns The output of your reduceFunction
     */
    public mapReduce<U, R>(mapFunction: (value: E, index: number, array: E[]) => U, reduceFunction: (ary: U[]) => R): R;

    /**
     * eqJoin() - Left joining two sets of data. Join keys can be defined or calculated properties
     * eqJoin expects the right join key values to be unique.  Otherwise left data will be joined on the last joinData object with that key
     * @param joinData - Data array to join to.
     * @param leftJoinKey - Property name in this result set to join on or a function to produce a value to join on
     * @param rightJoinKey - Property name in the joinData to join on or a function to produce a value to join on
     * @param [mapFun] - (Optional) A function that receives each matching pair and maps them into output objects - function(left,right){return joinedObject}
     * @param [dataOptions] - options to data() before input to your map function
     * @param [dataOptions.removeMeta] - allows removing meta before calling mapFun
     * @param [dataOptions.forceClones] - forcing the return of cloned objects to your map object
     * @param [dataOptions.forceCloneMethod] - Allows overriding the default or collection specified cloning method.
     * @returns A resultset with data in the format [{left: leftObj, right: rightObj}]
     */
    public eqJoin(
        joinData: Collection<any> | Resultset<any> | any[],
        leftJoinKey: string | ((obj: any) => string),
        rightJoinKey: string | ((obj: any) => string),
        mapFun?: (left: any, right: any) => any,
        dataOptions?: Partial<GetDataOptions>,
    ): Resultset<any>;

    /**
     * Applies a map function into a new collection for further chaining.
     * @param mapFun - javascript map function
     * @param [dataOptions] - options to data() before input to your map function
     * @param [dataOptions.removeMeta] - allows removing meta before calling mapFun
     * @param [dataOptions.forceClones] - forcing the return of cloned objects to your map object
     * @param [dataOptions.forceCloneMethod] - Allows overriding the default or collection specified cloning method.
     */
    public map<U extends object>(
        mapFun: (value: E, index: number, array: E[]) => U,
        dataOptions?: Partial<GetDataOptions>,
    ): Resultset<U>;
}

interface DynamicViewOptions {
    persistent: boolean;
    sortPriority: "active" | "passive";
    minRebuildInterval: number;
}

/**
 * DynamicView class is a versatile 'live' view class which can have filters and sorts applied.
 *    Collection.addDynamicView(name) instantiates this DynamicView object and notifies it
 *    whenever documents are add/updated/removed so it can remain up-to-date. (chainable)
 *
 * @example
 * var mydv = mycollection.addDynamicView('test');  // default is non-persistent
 * mydv.applyFind({ 'doors' : 4 });
 * mydv.applyWhere(function(obj) { return obj.name === 'Toyota'; });
 * var results = mydv.data();
 */
declare class DynamicView<E extends object> extends LokiEventEmitter {
    name: string;
    collection: Collection<E>;
    rebuildPending: boolean;
    resultset: Resultset<E>;
    resultdata: (E & LokiObj)[];
    resultsdirty: boolean;
    cachedresultset: Resultset<E> | null;
    filterPipeline: { type: "find" | "where"; val: any; uid?: string | number | undefined }[];
    sortFunction: ((a: E & LokiObj, b: E & LokiObj) => number) | null;
    sortCriteria: [keyof E, boolean][] | null;
    sortDirty: boolean;
    options: Partial<DynamicViewOptions>;

    /**
     * @param collection - A reference to the collection to work against
     * @param name - The name of this dynamic view
     * @param [options] - (Optional) Pass in object with 'persistent' and/or 'sortPriority' options.
     * @param [options.persistent=false] - indicates if view is to main internal results array in 'resultdata'
     * @param [options.sortPriority='passive'] - 'passive' (sorts performed on call to data) or 'active' (after updates)
     * @param [options.minRebuildInterval] - minimum rebuild interval (need clarification to docs here)
     * @see {@link Collection#addDynamicView} to construct instances of DynamicView
     */
    constructor(collection: Collection<E>, name: string, options?: Partial<DynamicViewOptions>);

    /**
     * rematerialize() - internally used immediately after deserialization (loading)
     *    This will clear out and reapply filterPipeline ops, recreating the view.
     *    Since where filters do not persist correctly, this method allows
     *    restoring the view to state where user can re-apply those where filters.
     *
     * @param [options] - (Optional) allows specification of 'removeWhereFilters' option
     * @returns This dynamic view for further chained ops.
     * @fires DynamicView.rebuild
     */
    public rematerialize(options?: { removeWhereFilters?: boolean | undefined }): this;

    /**
     * branchResultset() - Makes a copy of the internal resultset for branched queries.
     *    Unlike this dynamic view, the branched resultset will not be 'live' updated,
     *    so your branched query should be immediately resolved and not held for future evaluation.
     *
     * @param transform - Optional name of collection transform, or an array of transform steps
     * @param [parameters] - optional parameters (if optional transform requires them)
     * @returns A copy of the internal resultset for branched queries.
     */
    public branchResultset(transform?: string | string[] | Transform[], parameters?: object): Resultset<any>;

    /**
     * toJSON() - Override of toJSON to avoid circular references
     */
    public toJSON(): DynamicView<E>;

    /**
     * removeFilters() - Used to clear pipeline and reset dynamic view to initial state.
     *     Existing options should be retained.
     * @param [options] - configure removeFilter behavior
     * @param [options.queueSortPhase] - (default: false) if true we will async rebuild view (maybe set default to true in future?)
     */
    public removeFilters(options?: { queueSortPhase?: boolean | undefined }): void;

    /**
     * applySort() - Used to apply a sort to the dynamic view
     * @example
     * dv.applySort(function(obj1, obj2) {
     *   if (obj1.name === obj2.name) return 0;
     *   if (obj1.name > obj2.name) return 1;
     *   if (obj1.name < obj2.name) return -1;
     * });
     *
     * @param comparefun - a javascript compare function used for sorting
     * @returns this DynamicView object, for further chain ops.
     */
    public applySort(comparefun: (a: E & LokiObj, b: E & LokiObj) => number): this;

    /**
     * applySimpleSort() - Used to specify a property used for view translation.
     * @example
     * dv.applySimpleSort("name");
     *
     * @param propname - Name of property by which to sort.
     * @param [options] - boolean for sort descending or options object
     * @param [options.desc] - whether we should sort descending.
     * @param [options.disableIndexIntersect] - whether we should explicity not use array intersection.
     * @param [options.forceIndexIntersect] - force array intersection (if binary index exists).
     * @param [options.useJavascriptSorting] - whether results are sorted via basic javascript sort.
     * @returns this DynamicView object, for further chain ops.
     */
    public applySimpleSort(propname: keyof E, options?: boolean | Partial<SimplesortOptions>): this;

    /**
     * applySortCriteria() - Allows sorting a resultset based on multiple columns.
     * @example
     * // to sort by age and then name (both ascending)
     * dv.applySortCriteria(['age', 'name']);
     * // to sort by age (ascending) and then by name (descending)
     * dv.applySortCriteria(['age', ['name', true]);
     * // to sort by age (descending) and then by name (descending)
     * dv.applySortCriteria(['age', true], ['name', true]);
     *
     * @param criteria - array of property names or subarray of [propertyname, isdesc] used evaluate sort order
     * @returns Reference to this DynamicView, sorted, for future chain operations.
     */
    public applySortCriteria(criteria: [keyof E, boolean][]): this;

    /**
     * startTransaction() - marks the beginning of a transaction.
     *
     * @returns this DynamicView object, for further chain ops.
     */
    public startTransaction(): this;

    /**
     * commit() - commits a transaction.
     *
     * @returns this DynamicView object, for further chain ops.
     */
    public commit(): this;

    /**
     * rollback() - rolls back a transaction.
     *
     * @returns this DynamicView object, for further chain ops.
     */
    public rollback(): this;

    /**
     * Implementation detail.
     * _indexOfFilterWithId() - Find the index of a filter in the pipeline, by that filter's ID.
     *
     * @param [uid] - The unique ID of the filter.
     * @returns index of the referenced filter in the pipeline; -1 if not found.
     */
    public _indexOfFilterWithId(uid?: string | number): number;

    /**
     * Implementation detail.
     * _addFilter() - Add the filter object to the end of view's filter pipeline and apply the filter to the resultset.
     *
     * @param filter - The filter object. Refer to applyFilter() for extra details.
     */
    public _addFilter(filter: { type: "find" | "where"; val: any; uid?: string | number | undefined }): void;

    /**
     * reapplyFilters() - Reapply all the filters in the current pipeline.
     *
     * @returns this DynamicView object, for further chain ops.
     */
    public reapplyFilters(): this;

    /**
     * applyFilter() - Adds or updates a filter in the DynamicView filter pipeline
     *
     * @param filter - A filter object to add to the pipeline.
     *    The object is in the format { 'type': filter_type, 'val', filter_param, 'uid', optional_filter_id }
     * @returns this DynamicView object, for further chain ops.
     */
    public applyFilter(filter: { type: "find" | "where"; val: any; uid?: string | number | undefined }): this;

    /**
     * applyFind() - Adds or updates a mongo-style query option in the DynamicView filter pipeline
     *
     * @param query - A mongo-style query object to apply to pipeline
     * @param [uid] - Optional: The unique ID of this filter, to reference it in the future.
     * @returns this DynamicView object, for further chain ops.
     */
    public applyFind(query: any, uid?: string | number): this;

    /**
     * applyWhere() - Adds or updates a javascript filter function in the DynamicView filter pipeline
     *
     * @param fun - A javascript filter function to apply to pipeline
     * @param [uid] - Optional: The unique ID of this filter, to reference it in the future.
     * @returns this DynamicView object, for further chain ops.
     */
    public applyWhere(fun: (obj: any) => boolean, uid?: string | number): this;

    /**
     * removeFilter() - Remove the specified filter from the DynamicView filter pipeline
     *
     * @param uid - The unique ID of the filter to be removed.
     * @returns this DynamicView object, for further chain ops.
     */
    public removeFilter(uid: string | number): this;

    /**
     * count() - returns the number of documents representing the current DynamicView contents.
     *
     * @returns The number of documents representing the current DynamicView contents.
     */
    public count(): number;

    /**
     * data() - resolves and pending filtering and sorting, then returns document array as result.
     *
     * @param [options] - optional parameters to pass to resultset.data() if non-persistent
     * @param [options.forceClones] - Allows forcing the return of cloned objects even when
     *        the collection is not configured for clone object.
     * @param [options.forceCloneMethod] - Allows overriding the default or collection specified cloning method.
     *        Possible values include 'parse-stringify', 'jquery-extend-deep', 'shallow', 'shallow-assign'
     * @param [options.removeMeta] - Will force clones and strip $loki and meta properties from documents
     * @returns An array of documents representing the current DynamicView contents.
     */
    public data(options?: Partial<GetDataOptions>): (E & LokiObj)[];

    /**
     * queueRebuildEvent() - When the view is not sorted we may still wish to be notified of rebuild events.
     *     This event will throttle and queue a single rebuild event when batches of updates affect the view.
     */
    public queueRebuildEvent(): void;

    /**
     * queueSortPhase : If the view is sorted we will throttle sorting to either :
     *    (1) passive - when the user calls data(), or
     *    (2) active - once they stop updating and yield js thread control
     */
    public queueSortPhase(): void;

    /**
     * performSortPhase() - invoked synchronously or asynchronously to perform final sort phase (if needed)
     */
    public performSortPhase(
        options?: { persistent?: boolean | undefined; suppressRebuildEvent?: boolean | undefined },
    ): void;

    /**
     * evaluateDocument() - internal method for (re)evaluating document inclusion.
     *    Called by : collection.insert() and collection.update().
     *
     * @param objIndex - index of document to (re)run through filter pipeline.
     * @param [isNew] - true if the document was just added to the collection.
     */
    public evaluateDocument(objIndex: number | string, isNew?: boolean): void;

    /**
     * removeDocument() - internal function called on collection.delete()
     */
    public removeDocument(objIndex: number | string): void;

    /**
     * mapReduce() - data transformation via user supplied functions
     *
     * @param mapFunction - this function accepts a single document for you to transform and return
     * @param reduceFunction - this function accepts many (array of map outputs) and returns single value
     * @returns The output of your reduceFunction
     */
    public mapReduce<U, R>(mapFunction: (value: E, index: number, array: E[]) => U, reduceFunction: (ary: U[]) => R): R;
}

interface BinaryIndex {
    name: string;
    dirty: boolean;
    values: number[];
}

interface CollectionOptions<E> {
    disableMeta: boolean;
    disableChangesApi: boolean;
    disableDeltaChangesApi: boolean;
    disableFreeze: boolean;
    adaptiveBinaryIndices: boolean;
    asyncListeners: boolean;
    autoupdate: boolean;
    clone: boolean;
    cloneMethod: "parse-stringify" | "jquery-extend-deep" | "shallow" | "shallow-assign" | "shallow-recurse-objects";
    serializableIndices: boolean;
    transactional: boolean;
    ttl: number;
    ttlInterval: number;
    exact: (keyof E)[];
    unique: (keyof E)[];
    indices: (keyof E) | (keyof E)[];
}

interface CollectionChange {
    name: string;
    operation: string;
    obj: any;
}

interface CheckIndexOptions {
    randomSampling: boolean;
    randomSamplingFactor: number;
    repair: boolean;
}

/**
 * Collection class that handles documents of same type
 * @see {@link Loki#addCollection} for normal creation of collections
 */
declare class Collection<E extends object> extends LokiEventEmitter {
    name: string;
    objType: string;
    data: E[];
    adaptiveBinaryIndices: boolean;
    asyncListeners: boolean;
    autoupdate: boolean;
    dirty: boolean;
    binaryIndices: { [P in keyof E]: BinaryIndex };
    cachedIndex: number[] | null;
    cachedBinaryIndex: { [P in keyof E]: BinaryIndex } | null;
    cachedData: E[] | null;
    changes: CollectionChange[];
    cloneMethod:
        | ("parse-stringify" | "jquery-extend-deep" | "shallow" | "shallow-assign" | "shallow-recurse-objects")
        | null;
    cloneObjects: boolean;
    constraints: {
        unique: { [P in keyof E]: UniqueIndex<E> };
        exact: { [P in keyof E]: ExactIndex<E> };
    };
    disableChangesApi: boolean;
    disableDeltaChangesApi: boolean;
    disableFreeze: boolean;
    DynamicViews: DynamicView<object>[];
    idIndex: number[];
    ttl: { age: any; ttlInterval: any; daemon: any };
    maxId: number;
    uniqueNames: (keyof E)[];
    transforms: { [name: string]: Transform[] };
    serializableIndices: boolean;
    transactional: boolean;
    observerCallback: (changes: { object: any }[]) => void;
    getChanges: () => CollectionChange[];
    flushChanges: () => void;
    getChangeDelta: (obj: any, old?: any) => any;
    getObjectDelta: (oldObject: any, newObject?: any) => any;
    setChangesApi: (enabled?: boolean) => void;

    /**
     * @param name - collection name
     * @param [options] - (optional) configuration object
     * @param [options.unique=[]] - array of property names to define unique constraints for
     * @param [options.exact=[]] - array of property names to define exact constraints for
     * @param [options.indices=[]] - array property names to define binary indexes for
     * @param [options.adaptiveBinaryIndices=true] - collection indices will be actively rebuilt rather than lazily
     * @param [options.asyncListeners=false] - whether listeners are invoked asynchronously
     * @param [options.disableChangesApi=true] - set to false to enable Changes API
     * @param [options.disableDeltaChangesApi=true] - set to false to enable Delta Changes API (requires Changes API, forces cloning)
     * @param [options.autoupdate=false] - use Object.observe to update objects automatically
     * @param [options.clone=false] - specify whether inserts and queries clone to/from user
     * @param [options.serializableIndices=true[]] - converts date values on binary indexed properties to epoch time
     * @param [options.cloneMethod='parse-stringify'] - 'parse-stringify', 'jquery-extend-deep', 'shallow', 'shallow-assign'
     * @param options.ttlInterval - time interval for clearing out 'aged' documents; not set by default.
     * @see {@link Loki#addCollection} for normal creation of collections
     */
    constructor(name: string, options?: Partial<CollectionOptions<E>>);

    public console: {
        log(...args: any[]): void;
        warn(...args: any[]): void;
        error(...args: any[]): void;
    };

    public addAutoUpdateObserver(obj: any): void;

    public removeAutoUpdateObserver(obj: any): void;

    /**
     * Adds a named collection transform to the collection
     * @param name - name to associate with transform
     * @param transform - an array of transformation 'step' objects to save into the collection
     * @example
     * users.addTransform('progeny', [
     *   {
     *     type: 'find',
     *     value: {
     *       'age': {'$lte': 40}
     *     }
     *   }
     * ]);
     *
     * var results = users.chain('progeny').data();
     */
    public addTransform(name: string, transform: Transform[]): void;

    /**
     * Retrieves a named transform from the collection.
     * @param name - name of the transform to lookup.
     */
    public getTransform(name: string): Transform[];

    /**
     * Updates a named collection transform to the collection
     * @param name - name to associate with transform
     * @param transform - a transformation object to save into collection
     */
    public setTransform(name: string, transform: Transform[]): void;

    /**
     * Removes a named collection transform from the collection
     * @param name - name of collection transform to remove
     */
    public removeTransform(name: string): void;

    public byExample(template: object): { $and: any[] };

    public findObject(template: object): E | null;

    public findObjects(template: object): E[];

    /*----------------------------+
    | TTL daemon                  |
    +----------------------------*/
    public ttlDaemonFuncGen(): () => void;

    /**
     * Updates or applies collection TTL settings.
     * @param age - age (in ms) to expire document from collection
     * @param interval - time (in ms) to clear collection of aged documents.
     */
    public setTTL(age: number, interval: number): void;

    /*----------------------------+
    | INDEXING                    |
    +----------------------------*/

    /**
     * create a row filter that covers all documents in the collection
     */
    public prepareFullDocIndex(): number[];

    /**
     * Will allow reconfiguring certain collection options.
     * @param [options.adaptiveBinaryIndices] - collection indices will be actively rebuilt rather than lazily
     */
    public configureOptions(options?: { adaptiveBinaryIndices?: boolean | undefined }): void;

    /**
     * Ensure binary index on a certain field
     * @param property - name of property to create binary index on
     * @param [force] - (Optional) flag indicating whether to construct index immediately
     */
    public ensureIndex(property: keyof E, force?: boolean): void;

    /**
     * Perform checks to determine validity/consistency of all binary indices
     * @param [options] - optional configuration object
     * @param [options.randomSampling] - whether (faster) random sampling should be used
     * @param [options.randomSamplingFactor] - percentage of total rows to randomly sample
     * @param [options.repair] - whether to fix problems if they are encountered
     */
    public checkAllIndexes(options?: Partial<CheckIndexOptions>): string[];

    /**
     * Perform checks to determine validity/consistency of a binary index
     * @param property - name of the binary-indexed property to check
     * @param [options] optional configuration object
     * @param [options.randomSampling] - whether (faster) random sampling should be used
     * @param [options.randomSamplingFactor] - percentage of total rows to randomly sample
     * @param [options.repair] - whether to fix problems if they are encountered
     */
    public checkIndex(property: keyof E, options?: Partial<CheckIndexOptions>): boolean;

    public getSequencedIndexValues(property: string): string;

    public ensureUniqueIndex(field: keyof E): UniqueIndex<E>;

    /**
     * Ensure all binary indices
     */
    public ensureAllIndexes(force?: boolean): void;

    public flagBinaryIndexesDirty(): void;

    public flagBinaryIndexDirty(index: string): void;

    /**
     * Quickly determine number of documents in collection (or query)
     * @param [query] - (optional) query object to count results of
     * @returns number of documents in the collection
     */
    public count(query?: LokiQuery<E & LokiObj>): number;

    /**
     * Rebuild idIndex
     */
    public ensureId(): void;

    /**
     * Rebuild idIndex async with callback - useful for background syncing with a remote server
     */
    public ensureIdAsync(callback: () => void): void;

    /**
     * Add a dynamic view to the collection
     * @param name - name of dynamic view to add
     * @param [options] - options to configure dynamic view with
     * @param [options.persistent=false] - indicates if view is to main internal results array in 'resultdata'
     * @param [options.sortPriority='passive'] - 'passive' (sorts performed on call to data) or 'active' (after updates)
     * @param options.minRebuildInterval - minimum rebuild interval (need clarification to docs here)
     * @returns reference to the dynamic view added
     * @example
     * var pview = users.addDynamicView('progeny');
     * pview.applyFind({'age': {'$lte': 40}});
     * pview.applySimpleSort('name');
     *
     * var results = pview.data();
     */
    public addDynamicView(name: string, options?: Partial<DynamicViewOptions>): DynamicView<E>;

    /**
     * Remove a dynamic view from the collection
     * @param name - name of dynamic view to remove
     */
    public removeDynamicView(name: string): void;

    /**
     * Look up dynamic view reference from within the collection
     * @param name - name of dynamic view to retrieve reference of
     * @returns A reference to the dynamic view with that name
     */
    public getDynamicView(name: string): DynamicView<any> | null;

    /**
     * Applies a 'mongo-like' find query object and passes all results to an update function.
     * For filter function querying you should migrate to [updateWhere()]{@link Collection#updateWhere}.
     *
     * @param filterObject - 'mongo-like' query object (or deprecated filterFunction mode)
     * @param updateFunction - update function to run against filtered documents
     */
    public findAndUpdate(
        filterObject: ((data: E) => boolean) | LokiQuery<E & LokiObj>,
        updateFunction: (obj: E & LokiObj) => any,
    ): void;

    /**
     * Applies a 'mongo-like' find query object removes all documents which match that filter.
     *
     * @param filterObject - 'mongo-like' query object
     */
    public findAndRemove(filterObject?: LokiQuery<E & LokiObj>): void;

    /**
     * Adds object(s) to collection, ensure object(s) have meta properties, clone it if necessary, etc.
     * @param doc - the document (or array of documents) to be inserted
     * @returns document or documents inserted
     * @example
     * users.insert({
     *     name: 'Odin',
     *     age: 50,
     *     address: 'Asgard'
     * });
     *
     * // alternatively, insert array of documents
     * users.insert([{ name: 'Thor', age: 35}, { name: 'Loki', age: 30}]);
     */
    public insert(doc: E): E | undefined;
    public insert(doc: E[]): E[] | undefined;
    public insert(doc: E | E[]): E | E[] | undefined;
    public insert(doc: E | E[]): E | E[] | undefined;

    /**
     * Adds a single object, ensures it has meta properties, clone it if necessary, etc.
     * @param doc - the document to be inserted
     * @param [bulkInsert] - quiet pre-insert and insert event emits
     * @returns document or 'undefined' if there was a problem inserting it
     */
    public insertOne(doc: E, bulkInsert?: boolean): (E & LokiObj) | undefined;

    /**
     * Empties the collection.
     * @param [options] - configure clear behavior
     * @param [options.removeIndices] - (default: false)
     */
    public clear(options?: { removeIndices?: boolean | undefined }): void;

    /**
     * Updates an object and notifies collection that the document has changed.
     * @param doc - document to update within the collection
     */
    public update(doc: E): E;
    public update(doc: E[]): void;
    public update(doc: E | E[]): E | void;
    public update(doc: E | E[]): E | void;

    /**
     * Add object to collection
     */
    public add(obj: E): E & LokiObj;
    public add(obj: E & LokiObj): E & LokiObj;

    /**
     * Applies a filter function and passes all results to an update function.
     *
     * @param filterFunction - filter function whose results will execute update
     * @param updateFunction - update function to run against filtered documents
     */
    public updateWhere(filterFunction: (data: E) => boolean, updateFunction: (obj: E & LokiObj) => any): void;

    /**
     * Remove all documents matching supplied filter function.
     * For 'mongo-like' querying you should migrate to [findAndRemove()]{@link Collection#findAndRemove}.
     * @param query - query object to filter on
     */
    public removeWhere(query: ((value: E, index: number, array: E[]) => boolean) | LokiQuery<E & LokiObj>): void;

    public removeDataOnly(): void;

    /**
     * Remove a document from the collection
     * @param doc - document to remove from collection
     */
    public remove(doc: number | E): E | null;
    public remove(doc: number[] | E[]): void;
    public remove(doc: number | E | number[] | E[]): E | null | void;
    public remove(doc: number | E | number[] | E[]): E | null | void;

    /*---------------------+
    | Finding methods     |
    +----------------------*/

    /**
     * Get by Id - faster than other methods because of the searching algorithm
     * @param id - $loki id of document you want to retrieve
     * @param returnPosition - if 'true' we will return [object, position]
     * @returns Object reference if document was found, null if not,
     *     or an array if 'returnPosition' was passed.
     */
    public get(id: number): E & LokiObj;
    public get(id: number, returnPosition: true): [E & LokiObj, number];
    public get(id: number, returnPosition?: boolean): (E & LokiObj) | [E & LokiObj, number] | null;

    /**
     * Perform binary range lookup for the data[dataPosition][binaryIndexName] property value
     *    Since multiple documents may contain the same value (which the index is sorted on),
     *    we hone in on range and then linear scan range to find exact index array position.
     * @param dataPosition : coll.data array index/position
     * @param binaryIndexName : index to search for dataPosition in
     */
    public getBinaryIndexPosition(dataPosition: number, binaryIndexName: keyof E): number | null;

    /**
     * Adaptively insert a selected item to the index.
     * @param dataPosition : coll.data array index/position
     * @param binaryIndexName : index to search for dataPosition in
     */
    public adaptiveBinaryIndexInsert(dataPosition: number, binaryIndexName: keyof E): void;

    /**
     * Adaptively update a selected item within an index.
     * @param dataPosition : coll.data array index/position
     * @param binaryIndexName : index to search for dataPosition in
     */
    public adaptiveBinaryIndexUpdate(dataPosition: number, binaryIndexName: keyof E): void;

    /**
     * Adaptively remove a selected item from the index.
     * @param dataPosition : coll.data array index/position
     * @param binaryIndexName : index to search for dataPosition in
     */
    public adaptiveBinaryIndexRemove(
        dataPosition: number,
        binaryIndexName: keyof E,
        removedFromIndexOnly?: boolean,
    ): void;

    /**
     * Internal method used for index maintenance and indexed searching.
     * Calculates the beginning of an index range for a given value.
     * For index maintainance (adaptive:true), we will return a valid index position to insert to.
     * For querying (adaptive:false/undefined), we will :
     *    return lower bound/index of range of that value (if found)
     *    return next lower index position if not found (hole)
     * If index is empty it is assumed to be handled at higher level, so
     * this method assumes there is at least 1 document in index.
     *
     * @param prop - name of property which has binary index
     * @param val - value to find within index
     * @param [adaptive] - if true, we will return insert position
     */
    public calculateRangeStart(prop: keyof E, val: any, adaptive?: boolean): number;

    /**
     * Internal method used for indexed $between.  Given a prop (index name), and a value
     * (which may or may not yet exist) this will find the final position of that upper range value.
     */
    public calculateRangeEnd(prop: keyof E, val: any): number;

    /**
     * calculateRange() - Binary Search utility method to find range/segment of values matching criteria.
     *    this is used for collection.find() and first find filter of resultset/dynview
     *    slightly different than get() binary search in that get() hones in on 1 value,
     *    but we have to hone in on many (range)
     * @param op - operation, such as $eq
     * @param prop - name of property to calculate range for
     * @param val - value to use for range calculation.
     * @returns [start, end] index array positions
     */
    public calculateRange(
        op: "$eq" | "$aeq" | "$dteq" | "$gt" | "$gte" | "$lt" | "$lte" | "$between" | "$in",
        prop: keyof E,
        val: any,
    ): number[];

    /**
     * Retrieve doc by Unique index
     * @param field - name of uniquely indexed property to use when doing lookup
     * @param value - unique value to search for
     * @returns document matching the value passed
     */
    public by(field: keyof E): (value: any) => E | undefined;
    public by(field: keyof E, value: any): E | undefined;
    public by(field: keyof E, value?: any): E | ((value: any) => E | undefined) | undefined;
    public by(field: keyof E, value?: any): E | ((value: any) => E | undefined) | undefined;

    /**
     * Find one object by index property, by property equal to value
     * @param query - query object used to perform search with
     * @returns First matching document, or null if none
     */
    public findOne(query?: LokiQuery<E & LokiObj>): (E & LokiObj) | null;

    /**
     * Chain method, used for beginning a series of chained find() and/or view() operations
     * on a collection.
     *
     * @param [transform] - Ordered array of transform step objects similar to chain
     * @param [parameters] - Object containing properties representing parameters to substitute
     * @returns (this) resultset, or data array if any map or join functions where called
     */
    public chain(): Resultset<E & LokiObj>;
    public chain(transform?: string | string[] | Transform[], parameters?: object): Resultset<any>;

    /**
     * Find method, api is similar to mongodb.
     * for more complex queries use [chain()]{@link Collection#chain} or [where()]{@link Collection#where}.
     * @example {@tutorial Query Examples}
     * @param query - 'mongo-like' query object
     * @returns Array of matching documents
     */
    public find(query?: LokiQuery<E & LokiObj>): (E & LokiObj)[];

    /**
     * Find object by unindexed field by property equal to value,
     * simply iterates and returns the first element matching the query
     */
    public findOneUnindexed(prop: keyof E, value: any): (E & LokiObj) | null;

    /**
     * Transaction methods
     */

    /** start the transation */
    public startTransaction(): void;

    /** commit the transation */
    public commit(): void;

    /** roll back the transation */
    public rollback(): void;

    // async executor. This is only to enable callbacks at the end of the execution.
    public async(fun: () => void, callback: () => void): void;

    /**
     * Query the collection by supplying a javascript filter function.
     * @example
     * var results = coll.where(function(obj) {
     *   return obj.legs === 8;
     * });
     *
     * @param fun - filter function to run against all collection docs
     * @returns all documents which pass your filter function
     */
    public where(fun: (data: E) => boolean): (E & LokiObj)[];

    /**
     * Map Reduce operation
     *
     * @param mapFunction - function to use as map function
     * @param reduceFunction - function to use as reduce function
     * @returns The result of your mapReduce operation
     */
    public mapReduce<U, R>(mapFunction: (value: E, index: number, array: E[]) => U, reduceFunction: (ary: U[]) => R): R;

    /**
     * Join two collections on specified properties
     *
     * @param joinData - array of documents to 'join' to this collection
     * @param leftJoinProp - property name in collection
     * @param rightJoinProp - property name in joinData
     * @param mapFun - (Optional) map function to use
     * @param dataOptions - options to data() before input to your map function
     * @param [dataOptions.removeMeta] - allows removing meta before calling mapFun
     * @param [dataOptions.forceClones] - forcing the return of cloned objects to your map object
     * @param [dataOptions.forceCloneMethod] - Allows overriding the default or collection specified cloning method.
     * @returns Result of the mapping operation
     */
    public eqJoin(
        joinData: Collection<any> | Resultset<any> | any[],
        leftJoinProp: string | ((obj: any) => string),
        rightJoinProp: string | ((obj: any) => string),
        mapFun?: (left: any, right: any) => any,
        dataOptions?: Partial<GetDataOptions>,
    ): Resultset<any>;

    /* ------ STAGING API -------- */
    /**
     * stages: a map of uniquely identified 'stages', which hold copies of objects to be
     * manipulated without affecting the data in the original collection
     */
    public stages: { [name: string]: any };

    /**
     * (Staging API) create a stage and/or retrieve it
     */
    public getStage(name: string): any;

    /**
     * a collection of objects recording the changes applied through a commmitStage
     */
    public commitLog: { timestamp: number; message: string; data: any }[];

    /**
     * (Staging API) create a copy of an object and insert it into a stage
     */
    public stage<F extends E>(stageName: string, obj: F): F;

    /**
     * (Staging API) re-attach all objects to the original collection, so indexes and views can be rebuilt
     * then create a message to be inserted in the commitlog
     * @param stageName - name of stage
     * @param message
     */
    public commitStage(stageName: string, message: string): void;

    public no_op: () => void;

    public extract(field: string): any[];

    public max(field: string): number;

    public min(field: string): number;

    public maxRecord(field: string): { index: number; value: any };

    public minRecord(field: string): { index: number; value: any };

    public extractNumerical(field: string): number[];

    /**
     * Calculates the average numerical value of a property
     *
     * @param field - name of property in docs to average
     * @returns average of property in all docs in the collection
     */
    public avg(field: string): number;

    /**
     * Calculate standard deviation of a field
     * @param field
     */
    public stdDev(field: string): number;

    /**
     * @param field
     */
    public mode(field: string): string | undefined;

    /**
     * @param field - property name
     */
    public median(field: string): number;
}

declare class KeyValueStore {
    keys: any[];
    values: any[];

    constructor();

    public sort(a: any, b: any): -1 | 0 | 1;

    public setSort(fun: (target: any, test: any) => any): void;

    public bs(): (array: any[], item: any) => { found: boolean; index: number };

    public set(key: any, value: any): void;

    public get(key: any): any[];
}

declare class UniqueIndex<E extends object> {
    field: keyof E;
    keyMap: { [fieldValue: string]: E /*{ $loki: number }*/ | undefined };
    lokiMap: { [$loki: number]: string | number | undefined };

    constructor(uniqueField: keyof E);

    public set(obj: E /*{ $loki: number }*/): void;

    public get(key: string | number): E | undefined;

    public byId(id: number): E | undefined;

    /**
     * Updates a document's unique index given an updated object.
     * @param obj Original document object
     * @param doc New document object (likely the same as obj)
     */
    public update(obj: E, /*{ $loki: number }*/ doc: any): void;

    public remove(key: string): void;

    public clear(): void;
}

declare class ExactIndex<E extends object> {
    field: keyof E;
    index: { [key: string]: E[] | undefined };

    constructor(exactField: keyof E);

    // add the value you want returned to the key in the index
    public set(key: string | number, val: E): void;

    // remove the value from the index, if the value was the last one, remove the key
    public remove(key: string | number, val: E): void;

    // get the values related to the key, could be more than one
    public get(key: string | number): E[] | undefined;

    // clear will zap the index
    public clear(key?: null): void;
}

declare class SortedIndex {
    field: string;
    keys: any[];
    values: any[];

    constructor(sortedField: string);

    // set the default sort
    public sort(a: any, b: any): -1 | 0 | 1;

    public bs(): (array: any[], item: any) => { found: boolean; index: number };

    // and allow override of the default sort
    public setSort(fun: (target: any, test: any) => number): void;

    // add the value you want returned  to the key in the index
    public set(key: any, value: any): void;

    // get all values which have a key == the given key
    public get(key: any): any[];

    // get all values which have a key < the given key
    public getLt(key: any): any[];

    // get all values which have a key > the given key
    public getGt(key: any): any[];

    // get all vals from start to end
    public getAll(key: any, start: number, end: number): any[];

    // just in case someone wants to do something smart with ranges
    public getPos(key: any): { found: boolean; index: number };

    // remove the value from the index, if the value was the last one, remove the key
    public remove(key: any, value: any): void;

    // clear will zap the index
    public clear(): void;
}

// type aliases to allow the nested classes inside LokiConstructor to extend classes sharing them same name(s) as themselves
declare class _Collection<E extends object> extends Collection<E> {}
declare class _DynamicView<E extends object> extends DynamicView<E> {}
declare class _KeyValueStore extends KeyValueStore {}
declare class _LokiMemoryAdapter extends LokiMemoryAdapter {}
declare class _LokiPartitioningAdapter extends LokiPartitioningAdapter {}
declare class _LokiLocalStorageAdapter extends LokiLocalStorageAdapter {}
declare class _LokiFsAdapter extends LokiFsAdapter {}

/**
 * LokiJS
 * A lightweight document oriented javascript database
 * @author Joe Minichino <joe.minichino@gmail.com>
 */
declare class LokiConstructor extends Loki {
    constructor(
        filename: string,
        options?: Partial<LokiConstructorOptions> & Partial<LokiConfigOptions> & Partial<ThrottledSaveDrainOptions>,
    );
}
declare namespace LokiConstructor {
    export var persistenceAdapters: {
        fs: _LokiFsAdapter;
        localStorage: _LokiLocalStorageAdapter;
    };

    export function aeq(prop1: any, prop2: any): boolean;

    function lt(prop1: any, prop2: any, equal?: boolean): boolean;

    function gt(prop1: any, prop2: any, equal?: boolean): boolean;

    export var LokiOps: LokiOps;

    export class Collection<E extends object = any> extends _Collection<E> {}

    export class DynamicView<E extends object = any> extends _DynamicView<E> {}

    export class KeyValueStore extends _KeyValueStore {}

    export class LokiMemoryAdapter extends _LokiMemoryAdapter {}

    export class LokiPartitioningAdapter extends _LokiPartitioningAdapter {}

    export class LokiLocalStorageAdapter extends _LokiLocalStorageAdapter {}

    export class LokiFsAdapter extends _LokiFsAdapter {}
}

declare module "lokijs" {
    export = LokiConstructor;
}
