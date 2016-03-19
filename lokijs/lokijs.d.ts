// Type definitions for lokijs v1.2.5
// Project: https://github.com/techfort/LokiJS
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// NOTE: definition last updated (2016-3-13) based on latest code as of https://github.com/techfort/LokiJS/commit/3d2cf9546cd22556444deeabc4df314f227ecf5c

/** LokiJS
 * A lightweight document oriented javascript database
 * @author Joe Minichino <joe.minichino@gmail.com>
 */


/** Loki: The main database class
 * @constructor
 * @param {string} filename - name of the file to be saved to
 * @param {object} options - config object
 */
interface Loki extends LokiEventEmitter {
    // autosave support (disabled by default)
    autosave: boolean;
    autosaveInterval: number; // milliseconds between auto-saves
    autosaveHandle: number; // ID from setInterval(...)
    collections: LokiCollection<any>[];
    databaseVersion: number;
    engineVersion: number;
    ENV: string;/*NODEJS, CORDOVA, BROWSER*/
    events: { [id: string]: ((...args: any[]) => void)[] }; /*{
        'init': ((...args) => void)[];
        'loaded': ((...args) => void)[];
        'flushChanges': ((...args) => void)[];
        'close': ((...args) => void)[];
        'changes': ((...args) => void)[];
        'warning': ((...args) => void)[];
    };*/
    filename: string;
    options: LokiConfigureOptions;
    persistenceAdapter: LokiPersistenceInterface;
    // persistenceMethod could be 'fs', 'localStorage', or 'adapter'
    // this is optional option param, otherwise environment detection will be used
    // if user passes their own adapter we will force this method to 'adapter' later, so no need to pass method option.
    persistenceMethod: string; /*'fs', 'localStorage', 'adapter'*/
    verbose: boolean;

    new (filename: string, options: LokiConfigureOptions): Loki;

    // experimental support for browserify's abstract syntax scan to pick up dependency of indexed adapter.
    // Hopefully, once this hits npm a browserify require of lokijs should scan the main file and detect this indexed adapter reference.
    getIndexedAdapter(): LokiPersistenceInterface; // require("./loki-indexed-adapter.js")


    /** configureOptions - allows reconfiguring database options
     *
     * @param {object} options - configuration options to apply to loki db object
     * @param {boolean} initialConfig - (optional) if this is a reconfig, don't pass this
     */
    configureOptions(options: LokiConfigureOptions, initialConfig?: boolean): void;

    /** anonym() - shorthand method for quickly creating and populating an anonymous collection.
     *    This collection is not referenced internally so upon losing scope it will be garbage collected.
     *
     *    Example : var results = new loki().anonym(myDocArray).find({'age': {'$gt': 30} });
     *
     * @param {Array} docs - document array to initialize the anonymous collection with
     * @param {Array} indexesArray - (Optional) array of property names to index
     * @returns {Collection} New collection which you can query or chain
     */
    anonym<T>(docs: T | T[], indexesArray?: LokiCollectionOptions): LokiCollection<T>;

    addCollection<T>(name: string, options?: LokiCollectionOptions): LokiCollection<T>;

    loadCollection(collection: LokiCollection<any>): void;

    getCollection<T>(collectionName: string): LokiCollection<T>;

    listCollections(): { name: string; type: string; count: number }[];

    removeCollection(collectionName: string): void;

    getName(): string;

    /** serializeReplacer - used to prevent certain properties from being serialized
     */
    serializeReplacer<T>(key: "autosaveHandle", value: T): T;
    serializeReplacer<T>(key: "persistenceAdapter", value: T): T;
    serializeReplacer<T>(key: "constraints", value: T): T;
    serializeReplacer<T>(key: string, value: T): T;

    // toJson
    serialize(): string;

    // alias of serialize
    toJson(): string;

    /** loadJSON - inflates a loki database from a serialized JSON string
     *
     * @param {string} serializedDb - a serialized loki database string
     * @param {object} options - apply or override collection level settings
     */
    loadJSON(serializedDb: string, options?: { [collectionName: string]: { inflate?: (src: any, dst: any) => void; proto: any; } }): void;

    /** loadJSONObject - inflates a loki database from a JS object
     *
     * @param {object} dbObject - a serialized loki database string
     * @param {object} options - apply or override collection level settings
     */
    loadJSONObject(dbObject: Loki, options?: { [collectionName: string]: { inflate?: (src: any, dst: any) => void; proto: any; } }): void;

    /** close(callback) - emits the close event with an optional callback. Does not actually destroy the db
     * but useful from an API perspective
     */
    close(callback?: (...args: any[]) => void): void;

    /**-------------------------+
    | Changes API               |
    +--------------------------*/

    /** The Changes API enables the tracking the changes occurred in the collections since the beginning of the session,
     * so it's possible to create a differential dataset for synchronization purposes (possibly to a remote db)
     */

    /** generateChangesNotification() - takes all the changes stored in each
     * collection and creates a single array for the entire database. If an array of names
     * of collections is passed then only the included collections will be tracked.
     *
     * @param {array} optional array of collection names. No arg means all collections are processed.
     * @returns {array} array of changes
     * @see private method createChange() in Collection
     */
    generateChangesNotification(arrayOfCollectionNames?: string[]): LokiCollectionChange[];

    /** serializeChanges() - stringify changes for network transmission
     * @returns {string} string representation of the changes
     */
    serializeChanges(collectionNamesArray?: string[]): string;

    /** clearChanges() - clears all the changes in all collections.
     */
    clearChanges(): void;

    /** loadDatabase - Handles loading from file system, local storage, or adapter (indexeddb)
     *    This method utilizes loki configuration options (if provided) to determine which
     *    persistence method to use, or environment detection (if configuration was not provided).
     *
     * @param {object} options - not currently used (remove or allow overrides?)
     * @param {function} callback - (Optional) user supplied async callback / error handler
     */
    loadDatabase(options: { [collectionName: string]: { inflate?: (src: any, dst: any) => void; proto: any; } }, callback?: (err: any, data: any) => void): void;

    /** saveDatabase - Handles saving to file system, local storage, or adapter (indexeddb)
     *    This method utilizes loki configuration options (if provided) to determine which
     *    persistence method to use, or environment detection (if configuration was not provided).
     *
     * @param {object} options - not currently used (remove or allow overrides?)
     * @param {function} callback - (Optional) user supplied async callback / error handler
     */
    saveDatabase(callback?: (err: any) => void): void;

    // alias for saveDatabase
    save(callback ?: (err: any) => void): void;

    /** deleteDatabase - Handles deleting a database from file system, local
     *    storage, or adapter (indexeddb)
     *    This method utilizes loki configuration options (if provided) to determine which
     *    persistence method to use, or environment detection (if configuration was not provided).
     *
     * @param {object} options - not currently used (remove or allow overrides?)
     * @param {function} callback - user supplied async callback / error handler
     */
    deleteDatabase(options: any, callback: (err: any, data: any) => void): void;

    /** autosaveDirty - check whether any collections are 'dirty' meaning we need to save (entire) database
     * @returns {boolean} - true if database has changed since last autosave, false if not.
     */
    autosaveDirty(): boolean;

    /** autosaveClearFlags - resets dirty flags on all collections.
     *    Called from saveDatabase() after db is saved.
     */
    autosaveClearFlags(): void;

    /** autosaveEnable - begin a javascript interval to periodically save the database.
     *
     * @param {object} options - not currently used (remove or allow overrides?)
     * @param {function} callback - (Optional) user supplied async callback
     */
    autosaveEnable(options?: LokiConfigureOptions, callback?: (err: any) => void): void;

    /** autosaveDisable - stop the autosave interval timer.
     */
    autosaveDisable(): void;
}




/**
 * LokiEventEmitter is a minimalist version of EventEmitter. It enables any
 * constructor that inherits EventEmitter to emit events and trigger
 * listeners that have been added to the event through the on(event, callback) method
 */
interface LokiEventEmitter {
    /**
     * @prop Events property is a hashmap, with each property being an array of callbacks
     */
    events: { [eventName: string]: ((...args: any[]) => void)[] };

    new (): LokiEventEmitter;

    /**
     * @prop asyncListeners - boolean determines whether or not the callbacks associated with each event
     * should happen in an async fashion or not
     * Default is false, which means events are synchronous
     */
    asyncListeners: boolean;

    /**
     * @prop on(eventName, listener) - adds a listener to the queue of callbacks associated to an event
     * @returns {int} the index of the callback in the array of listeners for a particular event
     */
    on<U extends (...args: any[]) => void>(eventName: string, listener: U): U;

    /**
     * @propt emit(eventName, data) - emits a particular event
     * with the option of passing optional parameters which are going to be processed by the callback
     * provided signatures match (i.e. if passing emit(event, arg0, arg1) the listener should take two parameters)
     * @param {string} eventName - the name of the event
     * @param {object} data - optional object passed with the event
     */
    emit(eventName: string, data?: any): void;

    /**
     * @prop remove() - removes the listener at position 'index' from the event 'eventName'
     */
    removeListener(eventName: string, listener: (...args: any[]) => void): void;
}




/*------------------+
| PERSISTENCE       |
-------------------*/

/** there are two build in persistence adapters for internal use
 * fs             for use in Nodejs type environments
 * localStorage   for use in browser environment
 * defined as helper classes here so its easy and clean to use
 */

interface LokiPersistenceInterface {
    loadDatabase(dbname: string, callback: (dataOrErr: string | Error) => void): void;
    saveDatabase(dbname: string, dbstring: string, callback: (resOrErr: void | Error) => void): void;
    deleteDatabase(dbname: string, callback?: (resOrErr: void | Error) => void): void;
    // optional
    mode?: string; // 'reference'
    // filename may seem redundant but loadDatabase will need to expect this same filename
    exportDatabase?(filename: string, param: any, callback?: (err: any) => void): void;
}


/** constructor for fs
 */
interface LokiFsAdapter extends LokiPersistenceInterface {
    fs: any; //require('fs');

    /** loadDatabase() - Load data from file, will throw an error if the file does not exist
     * @param {string} dbname - the filename of the database to load
     * @param {function} callback - the callback to handle the result
     */
    loadDatabase(dbname: string, callback: (err: Error, data: string) => void): void;

    /** saveDatabase() - save data to file, will throw an error if the file can't be saved
     * might want to expand this to avoid dataloss on partial save
     * @param {string} dbname - the filename of the database to load
     * @param {function} callback - the callback to handle the result
     */
    saveDatabase(dbname: string, dbstring: string, callback: (err: any) => void): void;

    /** deleteDatabase() - delete the database file, will throw an error if the
     * file can't be deleted
     * @param {string} dbname - the filename of the database to delete
     * @param {function} callback - the callback to handle the result
     */
    deleteDatabase(dbname: string, callback: (resOrErr: void | Error) => void): void;
}


/** constructor for local storage
 */
interface LokiLocalStorageAdapter extends LokiPersistenceInterface {

    /** loadDatabase() - Load data from localstorage
     * @param {string} dbname - the name of the database to load
     * @param {function} callback - the callback to handle the result
     */
    loadDatabase(dbname: string, callback: (dataOrErr: string | Error) => void): void;

    /** saveDatabase() - save data to localstorage, will throw an error if the file can't be saved
     * might want to expand this to avoid dataloss on partial save
     * @param {string} dbname - the filename of the database to load
     * @param {function} callback - the callback to handle the result
     */
    saveDatabase(dbname: string, dbstring: string, callback: (resOrErr: void | Error) => void): void;

    /** deleteDatabase() - delete the database from localstorage, will throw an error if it
     * can't be deleted
     * @param {string} dbname - the filename of the database to delete
     * @param {function} callback - the callback to handle the result
     */
    deleteDatabase(dbname: string, callback: (resOrErr: void | Error) => void): void;
}




/** Resultset class allowing chainable queries.  Intended to be instanced internally.
 *    Collection.find(), Collection.where(), and Collection.chain() instantiate this.
 *
 *    Example:
 *    mycollection.chain()
 *      .find({ 'doors' : 4 })
 *      .where(function(obj) { return obj.name === 'Toyota' })
 *      .data();
 */
interface LokiResultset<E> {
    // retain reference to collection we are querying against
    collection: LokiCollection<E>;
    filterInitialized: boolean;
    filteredrows: string[]; // technically number[] (e.g. = Object.keys(this.collection.data))
    options: LokiResultsetOptions<E>;
    searchIsChained: boolean;


    /**
     * @constructor
     * @param {Collection} collection - The collection which this Resultset will query against.
     * @param {Object} options - Object containing one or more options.
     * @param {string} options.queryObj - Optional mongo-style query object to initialize resultset with.
     * @param {function} options.queryFunc - Optional javascript filter function to initialize resultset with.
     * @param {bool} options.firstOnly - Optional boolean used by collection.findOne().
     */
    new <E>(collection: LokiCollection<E>, options: LokiResultsetOptions<E>): LokiResultset<E> | E[];

    /** reset() - Reset the resultset to its initial state.
     *
     * @returns {Resultset} Reference to this resultset, for future chain operations.
     */
    reset(): LokiResultset<E>;

    /** toJSON() - Override of toJSON to avoid circular references
     */
    toJSON(): LokiResultset<E>;

    /** limit() - Allows you to limit the number of documents passed to next chain operation.
     *    A resultset copy() is made to avoid altering original resultset.
     *
     * @param {int} qty - The number of documents to return.
     * @returns {Resultset} Returns a copy of the resultset, limited by qty, for subsequent chain ops.
     */
    limit(qty: number): LokiResultset<E>;

    /** offset() - Used for skipping 'pos' number of documents in the resultset.
     *
     * @param {int} pos - Number of documents to skip; all preceding documents are filtered out.
     * @returns {Resultset} Returns a copy of the resultset, containing docs starting at 'pos' for subsequent chain ops.
     */
    offset(pos: number): LokiResultset<E>;

    /** copy() - To support reuse of resultset in branched query situations.
     *
     * @returns {Resultset} Returns a copy of the resultset (set) but the underlying document references will be the same.
     */
    copy(): LokiResultset<E>;
    // alias of copy()
    branch(): LokiResultset<E>;

    /**
     * transform() - executes a named collection transform or raw array of transform steps against the resultset.
     *
     * @param transform {string|array} : (Optional) name of collection transform or raw transform array
     * @param parameters {object} : (Optional) object property hash of parameters, if the transform requires them.
     * @returns {Resultset} : either (this) resultset or a clone of of this resultset (depending on steps)
     */
    transform(transform?: string | any[], parameters?: any): LokiResultset<E>;

    /** sort() - User supplied compare function is provided two documents to compare. (chainable)
     *    Example:
     *    rslt.sort(function(obj1, obj2) {
     *      if (obj1.name === obj2.name) return 0;
     *      if (obj1.name > obj2.name) return 1;
     *      if (obj1.name < obj2.name) return -1;
     *    });
     *
     * @param {function} comparefun - A javascript compare function used for sorting.
     * @returns {Resultset} Reference to this resultset, sorted, for future chain operations.
     */
    sort(comparefun: (a: E, b: E) => number): LokiResultset<E>;

    /** simplesort() - Simpler, loose evaluation for user to sort based on a property name. (chainable)
     *
     * @param {string} propname - name of property to sort by.
     * @param {bool} isdesc - (Optional) If true, the property will be sorted in descending order
     * @returns {Resultset} Reference to this resultset, sorted, for future chain operations.
     */
    simplesort(propname: string, isdesc?: boolean): LokiResultset<E>;

    /** compoundsort() - Allows sorting a resultset based on multiple columns.
     *    Example : rs.compoundsort(['age', 'name']); to sort by age and then name (both ascending)
     *    Example : rs.compoundsort(['age', ['name', true]); to sort by age (ascending) and then by name (descending)
     *
     * @param {array} properties - array of property names or subarray of [propertyname, isdesc] used evaluate sort order
     * @returns {Resultset} Reference to this resultset, sorted, for future chain operations.
     */
    compoundsort(properties: ([string, boolean] | [string])[]): LokiResultset<E>;

    /** calculateRange() - Binary Search utility method to find range/segment of values matching criteria.
     *    this is used for collection.find() and first find filter of resultset/dynview
     *    slightly different than get() binary search in that get() hones in on 1 value,
     *    but we have to hone in on many (range)
     * @param {string} op - operation, such as $eq
     * @param {string} prop - name of property to calculate range for
     * @param {object} val - value to use for range calculation.
     * @returns {array} [start, end] index array positions
     */
    calculateRange(op: "$eq", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$dteq", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$gt", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$gte", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$lt", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$lte", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: string, prop: string, val: any): [number/*start*/, number/*end*/];

    /** findOr() - oversee the operation of OR'ed query expressions.
     *    OR'ed expression evaluation runs each expression individually against the full collection,
     *    and finally does a set OR on each expression's results.
     *    Each evaluation can utilize a binary index to prevent multiple linear array scans.
     *
     * @param {array} expressionArray - array of expressions
     * @returns {Resultset} this resultset for further chain ops.
     */
    findOr(expressionArray: LokiQuery[]): LokiResultset<E>;
    $or(expressionArray: LokiQuery[]): LokiResultset<E>;

    /** findAnd() - oversee the operation of AND'ed query expressions.
     *    AND'ed expression evaluation runs each expression progressively against the full collection,
     *    internally utilizing existing chained resultset functionality.
     *    Only the first filter can utilize a binary index.
     *
     * @param {array} expressionArray - array of expressions
     * @returns {Resultset} this resultset for further chain ops.
     */
    findAnd(expressionArray: LokiQuery[]): LokiResultset<E>;
    $and(expressionArray: LokiQuery[]): LokiResultset<E>;

    /** find() - Used for querying via a mongo-style query object.
     *
     * @param {object} query - A mongo-style query object used for filtering current results.
     * @param {boolean} firstOnly - (Optional) Used by collection.findOne()
     * @returns {Resultset} this resultset for further chain ops.
     */
    //find(query: LokiQuery, firstOnly: boolean): E;
    //find(query?: any, firstOnly?: boolean): E[];
    find(query: LokiQuery, firstOnly?: boolean): LokiResultset<E>;

    /** where() - Used for filtering via a javascript filter function.
     *
     * @param {function} fun - A javascript function used for filtering current results by.
     * @returns {Resultset} this resultset for further chain ops.
     */
    where(fun: (obj: E) => boolean): LokiResultset<E>;

    /** count() - returns the number of documents in the resultset.
     *
     * @returns {number} The number of documents in the resultset.
     */
    count(): number;

    /** data() - Terminates the chain and returns array of filtered documents
     *
     * @param options {object} : allows specifying 'forceClones' and 'forceCloneMethod' options.
     *    options :
     *      forceClones {boolean} : Allows forcing the return of cloned objects even when
     *        the collection is not configured for clone object.
     *      forceCloneMethod {string} : Allows overriding the default or collection specified cloning method.
     *        Possible values include 'parse-stringify', 'jquery-extend-deep', and 'shallow'
     *
     * @returns {array} Array of documents in the resultset
     */
    data(options?: { forceClones?: string; forceCloneMethod?: string; }): E[];

    /** update() - used to run an update operation on all documents currently in the resultset.
     *
     * @param {function} updateFunction - User supplied updateFunction(obj) will be executed for each document object.
     * @returns {Resultset} this resultset for further chain ops.
     */
    update(updateFunction: (obj: E) => void): LokiResultset<E>;

    /** remove() - removes all document objects which are currently in resultset from collection (as well as resultset)
     *
     * @returns {Resultset} this (empty) resultset for further chain ops.
     */
    remove(): LokiResultset<E>;

    /** mapReduce() - data transformation via user supplied functions
     *
     * @param {function} mapFunction - this function accepts a single document for you to transform and return
     * @param {function} reduceFunction - this function accepts many (array of map outputs) and returns single value
     * @returns The output of your reduceFunction
     */
    mapReduce<T, U>(mapFunction: (value: E, index: number, array: E[]) => T, reduceFunction: (array: T[]) => U): U;

    /** eqJoin() - Left joining two sets of data. Join keys can be defined or calculated properties
     * eqJoin expects the right join key values to be unique.  Otherwise left data will be joined on the last joinData object with that key
     * @param {Array} joinData - Data array to join to.
     * @param {String,function} leftJoinKey - Property name in this result set to join on or a function to produce a value to join on
     * @param {String,function} rightJoinKey - Property name in the joinData to join on or a function to produce a value to join on
     * @param {function} (optional) mapFun - A function that receives each matching pair and maps them into output objects - function(left,right){return joinedObject}
     * @returns {Resultset} A resultset with data in the format [{left: leftObj, right: rightObj}]
     */
    eqJoin<T>(joinData: T[] | LokiResultset<T>, leftJoinKey: string | ((obj: E) => string), rightJoinKey: string | ((obj: T) => string)): LokiResultset<{ left: E; right: T; }>;
    eqJoin<T, U>(joinData: T[] | LokiResultset<T>, leftJoinKey: string | ((obj: E) => string), rightJoinKey: string | ((obj: T) => string), mapFun?: (a: E, b: T) => U): LokiResultset<U>;

    map<T>(mapFun: (currentValue: E, index: number, array: E[]) => T): LokiResultset<T>;
}




/** DynamicView class is a versatile 'live' view class which can have filters and sorts applied.
 *    Collection.addDynamicView(name) instantiates this DynamicView object and notifies it
 *    whenever documents are add/updated/removed so it can remain up-to-date. (chainable)
 *
 *    Examples:
 *    var mydv = mycollection.addDynamicView('test');  // default is non-persistent
 *    mydv.applyWhere(function(obj) { return obj.name === 'Toyota'; });
 *    mydv.applyFind({ 'doors' : 4 });
 *    var results = mydv.data();
 *
 */
interface LokiDynamicView<E> extends LokiEventEmitter {
    cachedresultset: LokiResultset<E>;
    collection: LokiCollection<E>;
    events: { [id: string]: ((...args: any[]) => void)[] }; /*{
        'rebuild': ((...args) => void)[];
    };*/
    // keep ordered filter pipeline
    filterPipeline: LokiFilter<E>[];
    minRebuildInterval: number;
    name: string;
    options: LokiDynamicViewOptions;
    persistent: boolean;
    rebuildPending: boolean;
    resultset: LokiResultset<E>;
    resultdata: E[];
    resultsdirty: boolean;
    // sorting member variables, we only support one active search, applied using applySort() or applySimpleSort()
    sortFunction: (a: E, b: E) => number;
    sortCriteria: ([string, boolean] | [string])[];
    sortDirty: boolean;
    sortPriority: string; // 'persistentSortPriority', 'passive' (will defer the sort phase until they call data(). most efficient overall), 'active' (will sort async whenever next idle. prioritizes read speeds)

    /**
     * @constructor
     * @param {Collection} collection - A reference to the collection to work against
     * @param {string} name - The name of this dynamic view
     * @param {object} options - (Optional) Pass in object with 'persistent' and/or 'sortPriority' options.
     */
    new <E>(collection: LokiCollection<E>, name: string, options?: LokiDynamicViewOptions): LokiDynamicView<E>;

    /** rematerialize() - intended for use immediately after deserialization (loading)
     *    This will clear out and reapply filterPipeline ops, recreating the view.
     *    Since where filters do not persist correctly, this method allows
     *    restoring the view to state where user can re-apply those where filters.
     *
     * @param {Object} options - (Optional) allows specification of 'removeWhereFilters' option
     * @returns {DynamicView} This dynamic view for further chained ops.
     */
    rematerialize(options?: { removeWhereFilters?: boolean; }): LokiDynamicView<E>;

    /** branchResultset() - Makes a copy of the internal resultset for branched queries.
     *    Unlike this dynamic view, the branched resultset will not be 'live' updated,
     *    so your branched query should be immediately resolved and not held for future evaluation.
     *
     * @param {string|array} transform: Optional name of collection transform, or an array of transform steps
     * @param {object} parameters: optional parameters (if optional transform requires them)
     * @returns {Resultset} A copy of the internal resultset for branched queries.
     */
    branchResultset(transform?: string | any[], parameters?: any): LokiResultset<E>;

    /** toJSON() - Override of toJSON to avoid circular references
     */
    toJSON(): LokiDynamicView<E>;

    /** removeFilters() - Used to clear pipeline and reset dynamic view to initial state.
     *     Existing options should be retained.
     */
    removeFilters(): void;

    /** applySort() - Used to apply a sort to the dynamic view
     *
     * @param {function} comparefun - a javascript compare function used for sorting
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applySort(comparefun: (a: E, b: E) => number): LokiDynamicView<E>;

    /** applySimpleSort() - Used to specify a property used for view translation.
     *
     * @param {string} propname - Name of property by which to sort.
     * @param {boolean} isdesc - (Optional) If true, the sort will be in descending order.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applySimpleSort(propname: string, isdesc?: boolean): LokiDynamicView<E>;

    /** applySortCriteria() - Allows sorting a resultset based on multiple columns.
     *    Example : dv.applySortCriteria(['age', 'name']); to sort by age and then name (both ascending)
     *    Example : dv.applySortCriteria(['age', ['name', true]); to sort by age (ascending) and then by name (descending)
     *    Example : dv.applySortCriteria(['age', true], ['name', true]); to sort by age (descending) and then by name (descending)
     *
     * @param {array} properties - array of property names or subarray of [propertyname, isdesc] used evaluate sort order
     * @returns {DynamicView} Reference to this DynamicView, sorted, for future chain operations.
     */
    applySortCriteria(criteria: ([string, boolean] | [string])[]): LokiDynamicView<E>;

    /** startTransaction() - marks the beginning of a transaction.
     *
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    startTransaction(): LokiDynamicView<E>;

    /** commit() - commits a transaction.
     *
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    commit(): LokiDynamicView<E>;

    /** rollback() - rolls back a transaction.
     *
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    rollback(): LokiDynamicView<E>;

    /** Implementation detail.
     * _indexOfFilterWithId() - Find the index of a filter in the pipeline, by that filter's ID.
     *
     * @param {string|number} uid - The unique ID of the filter.
     * @returns {number}: index of the referenced filter in the pipeline; -1 if not found.
     */
    _indexOfFilterWithId(uid: string | number): number;

    /** Implementation detail.
     * _addFilter() - Add the filter object to the end of view's filter pipeline and apply the filter to the resultset.
     *
     * @param {object} filter - The filter object. Refer to applyFilter() for extra details.
     */
    _addFilter(filter: LokiFilter<E>): void;

    /** reapplyFilters() - Reapply all the filters in the current pipeline.
     *
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    reapplyFilters(): LokiDynamicView<E>;

    /** applyFilter() - Adds or updates a filter in the DynamicView filter pipeline
     *
     * @param {object} filter - A filter object to add to the pipeline.
     *    The object is in the format { 'type': filter_type, 'val', filter_param, 'uid', optional_filter_id }
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applyFilter(filter: LokiFilter<E>): LokiDynamicView<E>;

    /** applyFind() - Adds or updates a mongo-style query option in the DynamicView filter pipeline
     *
     * @param {object} query - A mongo-style query object to apply to pipeline
     * @param {string|number} uid - Optional: The unique ID of this filter, to reference it in the future.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applyFind(query: LokiQuery, uid?: string | number): LokiDynamicView<E>;

    /** applyWhere() - Adds or updates a javascript filter function in the DynamicView filter pipeline
     *
     * @param {function} fun - A javascript filter function to apply to pipeline
     * @param {string|number} uid - Optional: The unique ID of this filter, to reference it in the future.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applyWhere(fun: (obj: E) => boolean, uid?: string | number): LokiDynamicView<E>;

    /** removeFilter() - Remove the specified filter from the DynamicView filter pipeline
     *
     * @param {string|number} uid - The unique ID of the filter to be removed.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    removeFilter(uid: string | number): LokiDynamicView<E>;

    /** count() - returns the number of documents representing the current DynamicView contents.
     *
     * @returns {number} The number of documents representing the current DynamicView contents.
     */
    count(): number;

    /** data() - resolves and pending filtering and sorting, then returns document array as result.
     *
     * @returns {array} An array of documents representing the current DynamicView contents.
     */
    data(): E[];

    /** queueRebuildEvent() - When the view is not sorted we may still wish to be notified of rebuild events.
     *     This event will throttle and queue a single rebuild event when batches of updates affect the view.
     */
    queueRebuildEvent(): void;

    /** queueSortPhase : If the view is sorted we will throttle sorting to either :
     *    (1) passive - when the user calls data(), or
     *    (2) active - once they stop updating and yield js thread control
     */
    queueSortPhase(): void;

    /** performSortPhase() - invoked synchronously or asynchronously to perform final sort phase (if needed)
     */
    performSortPhase(options?: { suppressRebuildEvent?: boolean; }): void;

    /** evaluateDocument() - internal method for (re)evaluating document inclusion.
     *    Called by : collection.insert() and collection.update().
     *
     * @param {int} objIndex - index of document to (re)run through filter pipeline.
     * @param {bool} isNew - true if the document was just added to the collection.
     */
    evaluateDocument(objIndex: number, isNew?: boolean): void;

    /** removeDocument() - internal function called on collection.delete()
     */
    removeDocument(objIndex: number): void;

    /** mapReduce() - data transformation via user supplied functions
     *
     * @param {function} mapFunction - this function accepts a single document for you to transform and return
     * @param {function} reduceFunction - this function accepts many (array of map outputs) and returns single value
     * @returns The output of your reduceFunction
     */
    mapReduce<T, U>(mapFunction: (item: E, index: number, array: E[]) => T, reduceFunction: (array: T[]) => U): U;
}




/** Collection class that handles documents of same type
 */
interface LokiCollection<E> extends LokiEventEmitter {
    // option to observe objects and update them automatically, ignored if Object.observe is not supported
    autoupdate: boolean;
    // option to make event listeners async, default is sync
    asyncListeners: boolean;
    binaryIndices: { [id: string]: { name: string; dirty: boolean; values: number[] } };

    cachedIndex: number[];
    cachedBinaryIndex: { [id: string]: { name: string; dirty: boolean; values: number[] } };
    cachedData: E[];
    // changes are tracked by collection and aggregated by the db
    changes: LokiCollectionChange[];
    // default clone method (if enabled) is parse-stringify
    cloneMethod: string; // 'parse-stringify'
    // options to clone objects when inserting them
    cloneObjects: boolean;
    console: {
        log: () => void;
        warn: () => void;
        error: () => void;
    };
    constraints: {
        unique: { [id: string]: LokiUniqueIndex<E> };
        exact: { [id: string]: LokiExactIndex<E> };
    };
    data: E[];
    // in autosave scenarios we will use collection level dirty flags to determine whether save is needed.
    // currently, if any collection is dirty we will autosave the whole database if autosave is configured.
    // defaulting to true since this is called from addCollection and adding a collection should trigger save
    dirty: boolean;
    // disable track changes
    disableChangesApi: boolean;
    DynamicViews: LokiDynamicView<E>[];
    events: { [id: string]: ((...args: any[]) => void)[] }; /*{
        'insert': ((...args) => void)[];
        'update': ((...args) => void)[];
        'pre-insert': ((...args) => void)[];
        'pre-update': ((...args) => void)[];
        'close': ((...args) => void)[];
        'flushbuffer': ((...args) => void)[];
        'error': ((...args) => void)[];
        'delete': ((...args) => void)[];
        'warning': ((...args) => void)[];
    };*/
    idIndex: number[];
    maxId: number; // currentMaxId - change manually at your own peril!
    name: string;
    // is collection transactional
    transactional: boolean;
    objType: string;
    // transforms will be used to store frequently used query chains as a series of steps
    // which itself can be stored along with the database.
    transforms: { [id: string]: any };
    // unique contraints contain duplicate object references, so they are not persisted.
    // we will keep track of properties which have unique contraint applied here, and regenerate on load
    uniqueNames: string[];

    options: LokiCollectionOptions;

    // option to activate a cleaner daemon - clears "aged" documents at set intervals.
    ttl: {
        age: number;
        ttlInterval: number;
        daemon: number;
    };

    /** Collection class that handles documents of same type
     * @constructor
     * @param {string} collection name
     * @param {array} array of property names to be indicized
     * @param {object} configuration object
     */
    new <E>(name: string, options?: LokiCollectionOptions): LokiCollection<E>;

    getChanges(): LokiCollectionChange[];

    setChangesApi(enabled: boolean): void;

    flushChanges(): void;

    observerCallback: (changes: { object: any }[]) => void;

    addAutoUpdateObserver(object: any): void;

    removeAutoUpdateObserver(object: any): void;

    addTransform(name: string, transform: any): void;

    setTransform(name: string, transform: any): void;

    removeTransform(name: string): void;

    byExample(template: any): { '$and': any[] };

    findObject(template: any): E;

    findObjects(template: any): E[];

    /*----------------------------+
    | TTL daemon                  |
    +----------------------------*/
    ttlDaemonFuncGen(): () => void;

    setTTL(age: number, interval: number): void;

    /*----------------------------+
    | INDEXING                    |
    +----------------------------*/

    /**
     * create a row filter that covers all documents in the collection
     */
    prepareFullDocIndex(): number[];

    /** Ensure binary index on a certain field
     */
    ensureIndex(property: string, force?: boolean): void;

    ensureUniqueIndex(field: string): LokiUniqueIndex<E>;

    /** Ensure all binary indices
     */
    ensureAllIndexes(force?: boolean): void;

    flagBinaryIndexesDirty(): void;

    flagBinaryIndexDirty(index: string): void;

    count(query?: LokiQuery): number;

    /** Rebuild idIndex
     */
    ensureId(): void;

    /** Rebuild idIndex async with callback - useful for background syncing with a remote server
     */
    ensureIdAsync(callback: () => void): void;

    /** Each collection maintains a list of DynamicViews associated with it
     **/
    addDynamicView(name: string, options?: LokiDynamicViewOptions): LokiDynamicView<E>;

    removeDynamicView(name: string): void;

    getDynamicView(name: string): LokiDynamicView<E>;

    /** find and update: pass a filtering function to select elements to be updated
     * and apply the updatefunctino to those elements iteratively
     */
    findAndUpdate(filterFunction: (obj: E) => boolean, updateFunction: (obj: E) => E): void;

    /** generate document method - ensure object(s) have meta properties, clone it if necessary, etc.
     * @param {object} doc: the document to be inserted (or an array of objects)
     * @returns document or documents (if passed an array of objects)
     */
    insert(doc: E): E;
    insert(doc: E[]): E[];

    /** generate document method - ensure object has meta properties, clone it if necessary, etc.
     * @param {object} the document to be inserted
     * @returns document or 'undefined' if there was a problem inserting it
     */
    insertOne(doc: E): E;

    clear(): void;

    /** Update method
     */
    update(doc: E): E;
    update(doc: E[]): void;

    /** Add object to collection
     */
    add(obj: E): E;

    removeWhere(query: ((obj: E) => boolean) | LokiQuery): void;

    removeDataOnly(): void;

    /** delete wrapped
     */
    remove(doc: E): E;
    remove(doc: number): E;
    remove(doc: number[]): void;
    remove(doc: E[]): void;

    /*---------------------+
    | Finding methods     |
    +----------------------*/

    /** Get by Id - faster than other methods because of the searching algorithm
     */
    get(id: number | string): E;
    get(id: number | string, returnPosition?: boolean): E | [E, number];

    by(field: string): (value: any) => E;
    by(field: string, value: string): E;

    /** Find one object by index property, by property equal to value
     */
    findOne(query: LokiQuery): E;

    /** Chain method, used for beginning a series of chained find() and/or view() operations
     * on a collection.
     *
     * @param {array} transform : Ordered array of transform step objects similar to chain
     * @param {object} parameters: Object containing properties representing parameters to substitute
     * @returns {Resultset} : (or data array if any map or join functions where called)
     */
    chain(transform?: string | any[], parameters?: any): LokiResultset<E>;

    /**
     * Find method, api is similar to mongodb except for now it only supports one search parameter.
     * for more complex queries use view() and storeView()
     */
    find(): E[];
    find(query: LokiQuery): LokiResultset<E>;

    /** Find object by unindexed field by property equal to value,
     * simply iterates and returns the first element matching the query
     */
    findOneUnindexed(prop: string, value: any): E;

    /** Transaction methods */

    /** start the transation */
    startTransaction(): void;

    /** commit the transation */
    commit(): void;

    /** roll back the transation */
    rollback(): void;

    // async executor. This is only to enable callbacks at the end of the execution.
    async(fun: () => void, callback: () => void): void;

    /** Create view function - filter
     */
    where(fun: (obj: E) => boolean): LokiResultset<E>;

    /** Map Reduce
     */
    mapReduce<U, V>(mapFunction: (item: E, index: number, array: E[]) => U, reduceFunction: (array: U[]) => V): V;

    /** eqJoin - Join two collections on specified properties
     */
    eqJoin<T>(joinData: T[] | LokiResultset<T>, leftJoinProp: string | ((obj: E) => string), rightJoinProp: string | ((obj: T) => string)): LokiResultset<{ left: E; right: T; }>;
    eqJoin<T, U>(joinData: T[] | LokiResultset<T>, leftJoinProp: string | ((obj: E) => string), rightJoinProp: string | ((obj: T) => string), mapFun?: (a: E, b: T) => U): LokiResultset<U>;

    /* ------ STAGING API -------- */
    /** stages: a map of uniquely identified 'stages', which hold copies of objects to be
     * manipulated without affecting the data in the original collection
     */
    stages: { [id: string]: any };

    /** create a stage and/or retrieve it
     */
    getStage(name: string): E[];

    /** a collection of objects recording the changes applied through a commmitStage
     */
    commitLog: {
        timestamp: number; // timestamp (i.e. new Date().getTime())
        message: any;
        data: E;
    }[];

    /** create a copy of an object and insert it into a stage
     */
    stage(stageName: string, obj: E): E;

    /** re-attach all objects to the original collection, so indexes and views can be rebuilt
     * then create a message to be inserted in the commitlog
     */
    commitStage(stageName: string, message: any): void;

    no_op(): void;

    extract(field: string): any[];

    max(field: string): number;

    min(field: string): number;

    maxRecord(field: string): { index: number; value: any; };

    minRecord(field: string): { index: number; value: any; };

    extractNumerical(field: string): number[];

    avg(field: string): number;

    stdDev(field: string): number;

    mode(field: string): string | number;

    median(field: string): number;
}




/** comparison operators
 * a is the value in the collection
 * b is the query value
 */
interface LokiOps {
    $eq(a: any, b: any): boolean;
    $ne(a: any, b: any): boolean;
    $dteq(a: any, b: any): boolean;
    $gt(a: any, b: any): boolean;
    $gte(a: any, b: any): boolean;
    $lt(a: any, b: any): boolean;
    $lte(a: any, b: any): boolean;
    $in(a: any, b: { indexOf: (value: any) => boolean }): boolean;
    $nin(a: any, b: { indexOf: (value: any) => boolean }): boolean;
    $keyin(a: string, b: any): boolean;
    $nkeyin(a: string, b: any): boolean;
    $definedin(a: any, b: any): boolean;
    $undefinedin(a: any, b: any): boolean;
    $regex(a: any, b: RegExp | { test: (str: string) => boolean }): boolean;
    $containsString(a: string | any, b: string): boolean;
    $containsNone(a: any, b: any): boolean;
    $containsAny(a: any, b: any | any[]): boolean;
    $contains(a: any, b: any | any[]): boolean;
    $type(a: any, b: any): boolean;
    $size(a: any, b: any): boolean;
    $len(a: any, b: any): boolean;
    // field-level logical operators
    // a is the value in the collection
    // b is the nested query operation (for '$not')
    //   or an array of nested query operations (for '$and' and '$or')
    $not(a: any, b: any): boolean;
    $and(a: any, b: any[]): boolean;
    $or(a: any, b: any[]): boolean;
}


interface LokiKeyValueStore<K, V> {
    keys: K[];
    values: V[];

    sort(a: any, b: any): number;
    setSort(fun: (a: K, b: K) => number): void;
    bs(): LokiBSonSort<K>;
    set(key: K, value: V): void;
    get(key: K): V;
}


interface LokiUniqueIndex<E> {
    field: string;
    keyMap: { [id: string]: E };
    lokiMap: { [id: number]: any };

    new <E>(uniqueField: string): LokiUniqueIndex<E>;

    set(obj: E): void;
    get(key: string): E;
    byId(id: number): E;
    update(obj: E): void;
    remove(key: string): void;
    clear(): void;
}


interface LokiExactIndex<E> {
    index: { [id: string]: E[] };
    field: string;

    new <E>(exactField: string): LokiExactIndex<E>

    /** add the value you want returned to the key in the index */
    set(key: string, val: E): void;
    /** remove the value from the index, if the value was the last one, remove the key */
    remove(key: string, val: E): void;
    /** get the values related to the key, could be more than one */
    get(key: string): E[];
    /** clear will zap the index */
    clear(key?: any): void;
}


interface LokiSortedIndex<K, V> {
    field: string;
    keys: K[];
    values: V[][];

    new <K, V>(sortedField: string): LokiSortedIndex<K, V>;

    // set the default sort
    sort(a: any, b: any): number;
    bs(): LokiBSonSort<any>;
    // and allow override of the default sort
    setSort(fun: (a: any, b: any) => number): void;
    // add the value you want returned  to the key in the index
    set(key: K, value: V): void;
    // get all values which have a key == the given key
    get(key: K): V[];
    // get all values which have a key < the given key
    getLt(key: K): V[];
    // get all values which have a key > the given key
    getGt(key: K): V[];
    // get all vals from start to end
    getAll(key: K, start: number, end: number): V[];
    // just in case someone wants to do something smart with ranges
    getPos(key: K): { found: boolean; index: number; };
    // remove the value from the index, if the value was the last one, remove the key
    remove(key: K, value: V): void;
    // clear will zap the index
    clear(): void;
}


interface LokiConfigureOptions {
    adapter?: LokiPersistenceInterface;
    autoload?: boolean;
    autoloadCallback?: (dataOrErr: any | Error) => void;
    autosave?: boolean;
    autosaveCallback?: (err: any) => void;
    autosaveInterval?: number; // milliseconds between auto-saves
    env?: string; /*'NODEJS', 'BROWSER', 'CORDOVA'*/
    persistenceMethod?: string; /*'fs', 'localStorage', 'adapter'*/
    verbose?: boolean;
}


interface LokiCollectionOptions {
    asyncListeners?: boolean;
    autoupdate?: boolean;
    clone?: boolean;
    cloneMethod?: string;
    disableChangesApi?: boolean;
    exact?: string[];
    indices?: string | string[];
    transactional?: boolean;
    unique?: string | string[];
}


interface LokiDynamicViewOptions {
    minRebuildInterval?: number;
    persistent?: boolean;
    sortPriority: string; /*'active', 'passive'*/
}


interface LokiResultsetOptions<E> {
    firstOnly?: boolean;
    queryObj?: LokiQuery;
    queryFunc?: (item: E) => boolean;
}


interface LokiQuery {
}


interface LokiFilter<E> {
    type: string; /*'find', 'where'*/
    val: LokiQuery | ((obj: E, index: number, array: E[]) => boolean);
    uid: number | string;
}


interface LokiElementMetaData {
    created: number; // unix style timestamp (i.e. new Date().getTime())
    revision: number;
}


interface LokiCollectionChange {
    name: string;
    operation: string;/*'I', 'R', 'U'*/
    obj: any;
}


interface LokiBSonSort<T> {
    (fun: (a: T, b: T) => number): (array: T[], item: T) => { found: boolean; index: number; };
}


/*
interface LokiUtils {
    copyProperties(src: any, dest: any): void;

    // used to recursively scan hierarchical transform step object for param substitution
    resolveTransformObject<U>(subObj: U, params: any, depth?: number): U;

    // top level utility to resolve an entire (single) transform (array of steps) for parameter substitution
    resolveTransformParams<U>(transform: U[], params: any): U[];
}

// Sort helper that support null and undefined
declare function ltHelper(prop1: any, prop2: any, equal?: boolean): boolean;

declare function gtHelper(prop1: any, prop2: any, equal?: boolean): boolean;

declare function sortHelper(prop1: any, prop2: any, desc?: boolean): number;

declare function doQueryOp(val: any, op: any): boolean;

declare function containsCheckFn<T>(a: T[], b): (curr: T) => boolean;
declare function containsCheckFn(a: string, b): (curr: string) => boolean;
declare function containsCheckFn<T>(a: T, b): (curr: string) => boolean;
*/

/** General utils, including statistical functions
 */
/*
declare function isDeepProperty(field: string): boolean;

declare function parseBase10(num: string | number): number;

declare function isNotUndefined(obj: any): boolean;

declare function add(a: string | number, b: string | number): number;

declare function sub(a: string | number, b: string | number): number;

declare function median(values: number[]): number;

declare function average(array: (string | number)[]);

declare function standardDeviation(values: (string | number)[]): number;

declare function deepProperty(obj: any, property: string, isDeep?: boolean): any;

declare function binarySearch<U>(array: U[], item: U, fun: (a: U, b: U) => number): { found: boolean; index: number; };

// compoundeval() - helper function for compoundsort(), performing individual object comparisons
//
// @param {array} properties - array of property names, in order, by which to evaluate sort order
// @param {object} obj1 - first object to compare
// @param {object} obj2 - second object to compare
// @returns {integer} 0, -1, or 1 to designate if identical (sortwise) or which should be first
declare function compoundeval(properties: ([string, boolean] | [string])[], obj1: any, obj2: any): number;

// dotSubScan - helper function used for dot notation queries.
declare function dotSubScan<V>(root: any | any[], propPath: string[], fun: (root, value: V) => boolean, value: V): boolean;

// making indexing opt-in... our range function knows how to deal with these ops :
//var indexedOpsList = ['$eq', '$dteq', '$gt', '$gte', '$lt', '$lte'];

declare function clone<U>(data: U, method?: string): U; // stage: 'parse-stringify', 'jquery-extend-deep', 'shallow'

declare function cloneObjectArray<U>(objarray: U[], method?: string): U; // stage: 'parse-stringify', 'jquery-extend-deep', 'shallow'

declare function localStorageAvailable(): boolean;
*/




/* ======== loki-indexed-adapter.js ======== */
interface LokiIndexedAdapter {
    app: string;
    catalog: LokiCatalog;

    /** IndexedAdapter - Loki persistence adapter class for indexedDb.
     *     This class fulfills abstract adapter interface which can be applied to other storage methods
     *     Utilizes the included LokiCatalog app/key/value database for actual database persistence.
     * @param {string} appname - Application name context can be used to distinguish subdomains or just 'loki'
     */
    new (appname: string): LokiIndexedAdapter;

    /** checkAvailability - used to check if adapter is available
     * @returns {boolean} true if indexeddb is available, false if not.
     */
    checkAvailability(): boolean;

    /** loadDatabase() - Retrieves a serialized db string from the catalog.
     * @param {string} dbname - the name of the database to retrieve.
     * @param {function} callback - callback should accept string param containing serialized db string.
     */
    loadDatabase(dbname: string, callback?: (data: any) => void): void;

    // alias for loadDatabase
    loadKey(dbname: string, callback?: (data: any) => void): void;

    /** saveDatabase() - Saves a serialized db to the catalog.
     * @param {string} dbname - the name to give the serialized database within the catalog.
     * @param {string} dbstring - the serialized db string to save.
     * @param {function} callback - (Optional) callback passed obj.success with true or false
     */
    saveDatabase(dbname: string, dbstring: string, callback?: (err: Error | void) => void): void;

    // alias for saveDatabase
    saveKey(dbname: string, dbstring: string, callback?: (err: Error | void) => void): void;

    /** deleteDatabase() - Deletes a serialized db from the catalog.
     * @param {string} dbname - the name of the database to delete from the catalog.
     */
    deleteDatabase(dbname: string): void;

    // alias for deleteDatabase
    deleteKey(dbname: string): void;

    /** getDatabaseList() - Retrieves object array of catalog entries for current app.
     * @param {function} callback - should accept array of database names in the catalog for current app.
     */
    getDatabaseList(callback: (names: string[]) => void): void;

    // alias for getDatabaseList
    getKeyList(callback: (names: string[]) => void): void;

    /** getCatalogSummary - allows retrieval of list of all keys in catalog along with size
     * @param {function} callback - (Optional) callback to accept result array.
     */
    getCatalogSummary(callback: (entries: { app: string; key: string; size: number; }) => void): void;
}


/** LokiCatalog - underlying App/Key/Value catalog persistence
 *   This non-interface class implements the actual persistence.
 *   Used by the IndexedAdapter class.
 */
interface LokiCatalog {
    db: IDBDatabase;

    new (callback: (cat: LokiCatalog) => void): LokiCatalog;

    initializeLokiCatalog(callback: (cat: LokiCatalog) => void): void;

    getAppKey(app: string, key: string, callback: (resObj: any) => void): void;

    getAppKeyById<T>(id: any, callback: (result: any, data: T) => void, data: T): void;

    setAppKey(app: string, key: string, val: any, callback: (res: { success: boolean }) => void): void;

    deleteAppKey(id: any, callback: (res: { success: boolean; }) => void): void;

    getAppKeys(app: string, callback: (data: any[]) => void): void;

    // Hide 'cursoring' and return array of { id: id, key: key }
    getAllKeys(callback: (data: any[]) => void): void;
}
/* ======== END loki-indexed-adapter.js ======== */



/* ======== loki-crypted-file-adapter.js ======== */
/**
 * @file lokiCryptedFileAdapter.js
 * @author Hans Klunder <Hans.Klunder@bigfoot.com>
 */

/** require libs */
//var fs = require('fs');
//var cryptoLib = require('crypto');
//var isError = require('util').isError;

/* The default Loki File adapter uses plain text JSON files. This adapter crypts the database string and wraps the result
* in a JSON including enough info to be able to decrypt it (except for the 'secret' of course !)
*
* The idea is that the 'secret' does not reside in your source code but is supplied by some other source (e.g. the user in node-webkit)
*
* The idea + encrypt/decrypt routines are borrowed from  https://github.com/mmoulton/krypt/blob/develop/lib/krypt.js
* not using the krypt module to avoid third party dependencies
*/
interface LokiCryptedFileAdapter {
    secret: string;

    /** The constructor is automatically called on `require` , see examples below
     * @constructor
     */
    new (): LokiCryptedFileAdapter;

    /** setSecret() - set the secret to be used during encryption and decryption
     *
     * @param {string} secret - the secret to be used
     */
    setSecret(secret: string): void;

    /** loadDatabase() - Retrieves a serialized db string from the catalog.
     *
     *  @example
      // LOAD
        var cryptedFileAdapter = require('./lokiCryptedFileAdapter');
        cryptedFileAdapter.setSecret('mySecret'); // you should change 'mySecret' to something supplied by the user
        var db = new loki('test.crypted', { adapter: cryptedFileAdapter }); //you can use any name, not just '*.crypted'
        db.loadDatabase(function(result) {
            console.log('done');
        });
     *
     * @param {string} dbname - the name of the database to retrieve.
     * @param {function} callback - callback should accept string param containing serialized db string.
     */
    loadDatabase(dbname: string, callback: (decryptedDataOrErr: string | any) => void): void;

    /**
     *
     @example
      // SAVE : will save database in 'test.crypted'
        var cryptedFileAdapter = require('./lokiCryptedFileAdapter');
        cryptedFileAdapter.setSecret('mySecret'); // you should change 'mySecret' to something supplied by the user
        var loki=require('lokijs');
        var db = new loki('test.crypted',{ adapter: cryptedFileAdapter }); //you can use any name, not just '*.crypted'
        var coll = db.addCollection('testColl');
        coll.insert({test: 'val'});
        db.saveDatabase();  // could pass callback if needed for async complete

     @example
      // if you have the krypt module installed you can use:
        krypt --decrypt test.crypted --secret mySecret
      to view the contents of the database

     * saveDatabase() - Saves a serialized db to the catalog.
     *
     * @param {string} dbname - the name to give the serialized database within the catalog.
     * @param {string} dbstring - the serialized db string to save.
     * @param {function} callback - (Optional) callback passed obj.success with true or false
     */
    saveDatabase(dbname: string, dbstring: string, callback: (err: any) => void): void;
}


interface LokiCryptedFileAdapterEncryptResult {
    cipher: string;
    keyDerivation: string;
    keyLength: number;
    iterations: number;
    iv: string;
    salt: string;
    value: string;
}
/* ======== END loki-crypted-file-adapter.js ======== */




/* ======== loki-angular.js ======== */
/* introduces a angular module named lokijs that returns the 'lokijs' module
    var module = angular.module('lokijs', [])
        .factory('Loki', function Loki() {
            return lokijs;
        });
    return module;
*/
/* ======== END loki-angular.js ======== */




/* ======== jquery-sync-adapter.js ======== */

/** LokiJS JquerySyncAdapter
 * A remote sync adapter example for LokiJS
 * @author Joe Minichino <joe.minichino@gmail.com>
 */

/** this adapter assumes an object options is passed,
 * containing the following properties:
 * ajaxLib: jquery or compatible ajax library
 * save: { url: the url to save to, dataType [optional]: json|xml|etc., type [optional]: POST|GET|PUT}
 * load: { url: the url to load from, dataType [optional]: json|xml| etc., type [optional]: POST|GET|PUT }
 */
interface LokiJquerySyncAdapter {
    options: LokiJquerySyncAdapterOptions

    new (options: LokiJquerySyncAdapterOptions): LokiJquerySyncAdapter;

    saveDatabase(name: string, data: any, callback?: (data: any, textStatus: string, xhr: XMLHttpRequest) => any): void;

    loadDatabase(name: string, callback?: (data: any, textStatus: string, xhr: XMLHttpRequest) => any): void;
}


interface LokiJquerySyncAdapterOptions {
    ajaxLib: { ajax(options: any): any; };
    save: {
        url: any;
        type?: string; /*'GET', 'POST, 'DELETE', etc.*/
        dataType?: string; /*'json', 'xml', etc.*/
    };
    load: {
        url: any;
        type?: string; /*'GET', 'POST, 'DELETE', etc.*/
        dataType?: string; /*'json', 'xml', etc.*/
    };
}


interface LokiJquerySyncAdapterError extends Error {
    name: string; // "JquerySyncAdapterError"
    message: any;

    new (message: any): LokiJquerySyncAdapterError;
}
/* ======== END jquery-sync-adapter.js ======== */


declare var LokiCryptedFileAdapterConstructor: {
    new (): LokiCryptedFileAdapter;
}

declare module "lokiCryptedFileAdapter" {
    export = LokiCryptedFileAdapterConstructor;
}


declare var LokiIndexedAdapterConstructor: {
    new (filename: string): LokiIndexedAdapter;
}

declare module "loki-indexed-adapter" {
    export = LokiIndexedAdapterConstructor;
}


declare var LokiConstructor: {
    new (filename: string, options?: LokiConfigureOptions): Loki;
    LokiOps: LokiOps;
    Collection: LokiCollection<any>;
    KeyValueStore: LokiKeyValueStore<any, any>;
}

declare module "lokijs" {
    export = LokiConstructor;
}
