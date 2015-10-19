// Type definitions for lokijs v1.2.5
// Project: https://github.com/techfort/LokiJS
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// NOTE: definition last updated (2015-6-6) based on latest code as of https://github.com/techfort/LokiJS/commit/4ffdda188c59ac06b760575b4ca41ad591ca8b0d

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
    filename: string;
    collections: LokiCollection<any>[];
    databaseVersion: number;
    engineVersion: number;
    // autosave support (disabled by default)
    // pass autosave: true, autosaveInterval: 6000 in options to set 6 second autosave
    autosave: boolean;
    autosaveInterval: number;
    autosaveHandle: number; // from setInterval() call
    options: LokiConfigureOptions;
    // currently keeping persistenceMethod and persistenceAdapter as loki level properties that
    // will not or cannot be deserialized.  You are required to configure persistence every time
    // you instantiate a loki object (or use default environment detection) in order to load the database anyways.
    // persistenceMethod could be 'fs', 'localStorage', or 'adapter'
    // this is optional option param, otherwise environment detection will be used
    // if user passes their own adapter we will force this method to 'adapter' later, so no need to pass method option.
    persistenceMethod: string;
    // retain reference to optional (non-serializable) persistenceAdapter 'instance'
    persistenceAdapter: LokiPersistenceInterface;
    ENV: string;
    events: {
        'init': any[];
        'flushChanges': any[];
        'close': any[];
        'changes': any[];
        'warning': any[];
    };

    new (filename: string, options: LokiConfigureOptions): Loki;

    /** configureOptions - allows reconfiguring database options
     * @param {object} options - configuration options to apply to loki db object
     * @param {boolean} initialConfig - (optional) if this is a reconfig, don't pass this
     */
    configureOptions(options: LokiConfigureOptions, initialConfig?: boolean): void;

    /** anonym() - shorthand method for quickly creating and populating an anonymous collection.
     *     This collection is not referenced internally so upon losing scope it will be garbage collected.
     *   Example : var results = new loki().anonym(myDocArray).find({'age': {'$gt': 30} });
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

    /** serializeReplacer - used to prevent certain properties from being serialized, may return null */
    serializeReplacer<T>(key: "autosaveHandle", value: T): T;
    serializeReplacer<T>(key: "persistenceAdapter", value: T): T;
    serializeReplacer<T>(key: "constraints", value: T): T;
    serializeReplacer<T>(key: string, value: T): T;

    // toJson
    serialize(): string;

    // alias of serialize
    toJson(): string;

    /** loadJSON - inflates a loki database from a serialized JSON string
     * @param {string} serializedDb - a serialized loki database string
     * @param {object} options - apply or override collection level settings
     */
    loadJSON(serializedDb: string, options: { [id: string]: { inflate?: (a: any, b: any) => void; proto: any; } }): void;

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
     *   collection and creates a single array for the entire database. If an array of names
     *   of collections is passed then only the included collections will be tracked.
     * @param {array} optional array of collection names. No arg means all collections are processed.
     * @returns {array} array of changes
     * @see private method createChange() in Collection
     */
    generateChangesNotification(arrayOfCollectionNames?: string[]): LokiCollectionChange[];

    /** serializeChanges() - stringify changes for network transmission
     * @returns {string} string representation of the changes
     */
    serializeChanges(collectionNamesArray?: string[]): string;

    /** clearChanges() - clears all the changes in all collections. */
    clearChanges(): void;

    /** loadDatabase - Handles loading from file system, local storage, or adapter (indexeddb)
     *   This method utilizes loki configuration options (if provided) to determine which
     *   persistence method to use, or environment detection (if configuration was not provided).
     * @param {object} options - not currently used (remove or allow overrides?)
     * @param {function} callback - (Optional) user supplied async callback / error handler
     */
    loadDatabase(options: { [id: string]: { inflate?: (a: any, b: any) => void; proto: any; } }, callback: (err: Error | string, data: any) => void): void;

    /** saveDatabase - Handles saving to file system, local storage, or adapter (indexeddb)
     *   This method utilizes loki configuration options (if provided) to determine which
     *   persistence method to use, or environment detection (if configuration was not provided).
     * @param {object} options - not currently used (remove or allow overrides?)
     * @param {function} callback - (Optional) user supplied async callback / error handler
     */
    saveDatabase(callback: (err: Error) => void): void;

    // alias
    save(callback: (err: Error) => void): void;

    /** autosaveDirty - check whether any collections are 'dirty' meaning we need to save (entire) database
     * @returns {boolean} - true if database has changed since last autosave, false if not.
     */
    autosaveDirty(): boolean;

    /** autosaveClearFlags - resets dirty flags on all collections.
     *   Called from saveDatabase() after db is saved.
     */
    autosaveClearFlags(): void;

    /** autosaveEnable - begin a javascript interval to periodically save the database. */
    autosaveEnable(): void;

    /** autosaveDisable - stop the autosave interval timer. */
    autosaveDisable(): void;

}


/** LokiEventEmitter is a minimalist version of EventEmitter. It enables any
 * constructor that inherits EventEmitter to emit events and trigger
 * listeners that have been added to the event through the on(event, callback) method
 */
interface LokiEventEmitter {
    /** @prop Events property is a hashmap, with each property being an array of callbacks */
    events: {} //{ [id: string]: ((...args) => void)[] };

    new (): LokiEventEmitter;

    /** @prop asyncListeners - boolean determines whether or not the callbacks associated with each event
     * should happen in an async fashion or not
     * Default is false, which means events are synchronous
     */
    asyncListeners: boolean;

    /** @prop on(eventName, listener) - adds a listener to the queue of callbacks associated to an event
     * @returns {int} the index of the callback in the array of listeners for a particular event
     */
    on(eventName: string, listener: (...args: any[]) => void): (...args: any[]) => void;

    /** @propt emit(eventName, data) - emits a particular event
     * with the option of passing optional parameters which are going to be processed by the callback
     * provided signatures match (i.e. if passing emit(event, arg0, arg1) the listener should take two parameters)
     * @param {string} eventName - the name of the event
     * @param {object} data - optional object passed with the event
     */
    emit(eventName: string, data: any): void;

    /** @prop remove() - removes the listener at position 'index' from the event 'eventName' */
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
interface LokiFsAdapter {
    //fs; // require('fs');

    /** loadDatabase() - Load data from file, will throw an error if the file does not exist
     * @param {string} dbname - the filename of the database to load
     * @param {function} callback - the callback to handle the result
     */
    loadDatabase(dbname: string, callback: (data: string | Error) => void): void;

    /** saveDatabase() - save data to file, will throw an error if the file can't be saved
     * might want to expand this to avoid dataloss on partial save
     * @param {string} dbname - the filename of the database to load
     * @param {function} callback - the callback to handle the result
     */
    saveDatabase(dbname: string, dbstring: string, callback: (error: any) => void): void;
}




/** constructor for local storage */
interface LokiLocalStorageAdapter {

    /** loadDatabase() - Load data from localstorage
     * @param {string} dbname - the name of the database to load
     * @param {function} callback - the callback to handle the result
     */
    loadDatabase(dbname: string, callback: (data: string | Error) => void): void;

    /** saveDatabase() - save data to localstorage, will throw an error if the file can't be saved
     * might want to expand this to avoid dataloss on partial save
     * @param {string} dbname - the filename of the database to load
     * @param {function} callback - the callback to handle the result
     */
    saveDatabase(dbname: string, dbstring: string, callback: (error: Error) => void): void;
}




/** Resultset class allowing chainable queries.  Intended to be instanced internally.
 *     Collection.find(), Collection.where(), and Collection.chain() instantiate this.
 *   Example:
 *     mycollection.chain()
 *       .find({ 'doors' : 4 })
 *       .where(function(obj) { return obj.name === 'Toyota' })
 *       .data();
 * @param {Collection} collection - The collection which this Resultset will query against.
 * @param {string} queryObj - Optional mongo-style query object to initialize resultset with.
 * @param {function} queryFunc - Optional javascript filter function to initialize resultset with.
 * @param {bool} firstOnly - Optional boolean used by collection.findOne().
 */
interface LokiResultset<E> {
    collection: LokiCollection<E>;
    searchIsChained: boolean;
    filteredrows: string[]; // technically number[] (e.g. = Object.keys(this.collection.data))
    filterInitialized: boolean;

    new (collection: LokiCollection<E>, queryObj: LokiQuery, queryFunc: (obj: E) => boolean, firstOnly?: boolean): LokiResultset<E>;

    /** toJSON() - Override of toJSON to avoid circular references */
    toJSON(): LokiResultset<E>;

    /** limit() - Allows you to limit the number of documents passed to next chain operation.
     *   A resultset copy() is made to avoid altering original resultset.
     * @param {int} qty - The number of documents to return.
     * @returns {Resultset} Returns a copy of the resultset, limited by qty, for subsequent chain ops.
     */
    limit(qty: number): LokiResultset<E>;

    /** offset() - Used for skipping 'pos' number of documents in the resultset.
     * @param {int} pos - Number of documents to skip; all preceding documents are filtered out.
     * @returns {Resultset} Returns a copy of the resultset, containing docs starting at 'pos' for subsequent chain ops.
     */
    offset(pos: number): LokiResultset<E>;

    /** copy() - To support reuse of resultset in branched query situations.
     * @returns {Resultset} Returns a copy of the resultset (set) but the underlying document references will be the same.
     */
    copy(): LokiResultset<E>;

    // add branch() as alias of copy()
    branch(): LokiResultset<E>;

    /** sort() - User supplied compare function is provided two documents to compare. (chainable)
     *   Example:
     *     rslt.sort(function(obj1, obj2) {
     *       if (obj1.name === obj2.name) return 0;
     *       if (obj1.name > obj2.name) return 1;
     *       if (obj1.name < obj2.name) return -1;
     *     });
     * @param {function} comparefun - A javascript compare function used for sorting.
     * @returns {Resultset} Reference to this resultset, sorted, for future chain operations.
     */
    sort(comparefun: (a: E, b: E) => number): LokiResultset<E>;

    /** simplesort() - Simpler, loose evaluation for user to sort based on a property name. (chainable)
     * @param {string} propname - name of property to sort by.
     * @param {bool} isdesc - (Optional) If true, the property will be sorted in descending order
     * @returns {Resultset} Reference to this resultset, sorted, for future chain operations.
     */
    simplesort(propname: string, isdesc?: boolean): LokiResultset<E>;

    /** compoundeval() - helper method for compoundsort(), performing individual object comparisons
     * @param {array} properties - array of property names, in order, by which to evaluate sort order
     * @param {object} obj1 - first object to compare
     * @param {object} obj2 - second object to compare
     * @returns {integer} 0, -1, or 1 to designate if identical (sortwise) or which should be first
     */
    compoundeval(properties: any[], obj1: any, obj2: any): number;

    /** compoundsort() - Allows sorting a resultset based on multiple columns.
     *   Example : rs.compoundsort(['age', 'name']); to sort by age and then name (both ascending)
     *   Example : rs.compoundsort(['age', ['name', true]); to sort by age (ascending) and then by name (descending)
     * @param {array} properties - array of property names or subarray of [propertyname, isdesc] used evaluate sort order
     * @returns {Resultset} Reference to this resultset, sorted, for future chain operations.
     */
    compoundsort(properties: any[]): LokiResultset<E>;

    /** calculateRange() - Binary Search utility method to find range/segment of values matching criteria.
    *   this is used for collection.find() and first find filter of resultset/dynview
    *   slightly different than get() binary search in that get() hones in on 1 value,
    *   but we have to hone in on many (range)
    * @param {string} op - operation, such as $eq
    * @param {string} prop - name of property to calculate range for
    * @param {object} val - value to use for range calculation.
    * @returns {array} [start, end] index array positions
    */
    calculateRange(op: "$eq", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$gt", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$gte", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$lt", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: "$lte", prop: string, val: any): [number/*start*/, number/*end*/];
    calculateRange(op: string, prop: string, val: any): [number/*start*/, number/*end*/];

    /** findOr() - oversee the operation of OR'ed query expressions.
     *   OR'ed expression evaluation runs each expression individually against the full collection,
     *   and finally does a set OR on each expression's results.
     *   Each evaluation can utilize a binary index to prevent multiple linear array scans.
     * @param {array} expressionArray - array of expressions
     * @returns {Resultset} this resultset for further chain ops.
     */
    findOr(expressionArray: LokiQuery[]): LokiResultset<E>;

    /** findAnd() - oversee the operation of AND'ed query expressions.
     *   AND'ed expression evaluation runs each expression progressively against the full collection,
     *   internally utilizing existing chained resultset functionality.
     *   Only the first filter can utilize a binary index.
     * @param {array} expressionArray - array of expressions
     * @returns {Resultset} this resultset for further chain ops.
     */
    findAnd(expressionArray: LokiQuery[]): LokiResultset<E>;

    /** dotSubScan - helper function used for dot notation queries. */
    dotSubScan(root: any, property: string, fun: (a: any, b: any) => boolean, value: any): boolean;

    /** find() - Used for querying via a mongo-style query object.
     * @param {object} query - A mongo-style query object used for filtering current results.
     * @param {boolean} firstOnly - (Optional) Used by collection.findOne()
     * @returns {Resultset} this resultset for further chain ops.
     */
    //find(query?: any, firstOnly?: boolean): E[];
    find(query: LokiQuery, firstOnly?: boolean): LokiResultset<E>;

    /** where() - Used for filtering via a javascript filter function.
     * @param {function} fun - A javascript function used for filtering current results by.
     * @returns {Resultset} this resultset for further chain ops.
     */
    where(fun: (obj: E) => boolean): LokiResultset<E>;

    /** data() - Terminates the chain and returns array of filtered documents
     * @returns {array} Array of documents in the resultset
     */
    data(): E[];

    /** update() - used to run an update operation on all documents currently in the resultset.
    * @param {function} updateFunction - User supplied updateFunction(obj) will be executed for each document object.
    * @returns {Resultset} this resultset for further chain ops.
    */
    update<U>(updateFunction: (obj: E) => U): LokiResultset<U>;

    /** remove() - removes all document objects which are currently in resultset from collection (as well as resultset)
     * @returns {Resultset} this (empty) resultset for further chain ops.
     */
    remove(): LokiResultset<E>;

    /** mapReduce() - data transformation via user supplied functions
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
    eqJoin<T, U>(joinData: T[]| LokiResultset<T>, leftJoinKey: string | ((obj: T) => string), rightJoinKey: string | ((obj: E) => string)): LokiResultset<{ left: E; right: T; }>;
    eqJoin<T, U>(joinData: T[]| LokiResultset<T>, leftJoinKey: string | ((obj: T) => string), rightJoinKey: string | ((obj: E) => string), mapFun?: (a: E, b: T) => U): LokiResultset<U>;

    map<U>(mapFun: (currentValue: E, index: number, array: E[]) => U): LokiResultset<U>;

}




/** DynamicView class is a versatile 'live' view class which can have filters and sorts applied.
 *     Collection.addDynamicView(name) instantiates this DynamicView object and notifies it
 *     whenever documents are add/updated/removed so it can remain up-to-date. (chainable)
 *   Examples:
 *     var mydv = mycollection.addDynamicView('test');  // default is non-persistent
 *     mydv.applyWhere(function(obj) { return obj.name === 'Toyota'; });
 *     mydv.applyFind({ 'doors' : 4 });
 *     var results = mydv.data();
 * @param {Collection} collection - A reference to the collection to work against
 * @param {string} name - The name of this dynamic view
 * @param {boolean} persistent - (Optional) If true, the results will be copied into an internal array for read efficiency or binding to.
 */
interface LokiDynamicView<E> extends LokiEventEmitter {
    name: string;
    collection: LokiCollection<E>;
    persistent: boolean;
    resultset: LokiResultset<E>;
    resultdata: E[];
    resultsdirty: boolean;
    cachedresultset: LokiResultset<E>; // TODO type
    // keep ordered filter pipeline
    filterPipeline: { type: string/*'find', 'where'*/; value: LokiQuery | ((element: E, index: number, array: E[]) => boolean) }[]; // TODO type
    // sorting member variables - we only support one active search, applied using applySort() or applySimpleSort()
    sortFunction: (a: E, b: E) => number;
    sortCriteria: [string, boolean][]; // TODO type
    sortDirty: boolean;
    // for now just have 1 event for when we finally rebuilt lazy view
    // once we refactor transactions, i will tie in certain transactional events
    events: {
        "rebuild": any[]; // TODO type
    };

    new (collection: LokiCollection<E>, name: string, persistent?: boolean): LokiDynamicView<E>;

    /** rematerialize() - intended for use immediately after deserialization (loading)
     *   This will clear out and reapply filterPipeline ops, recreating the view.
     *   Since where filters do not persist correctly, this method allows
     *   restoring the view to state where user can re-apply those where filters.
     * @param {Object} options - (Optional) allows specification of 'removeWhereFilters' option
     * @returns {DynamicView} This dynamic view for further chained ops.
     */
    rematerialize(options: { removeWhereFilters?: any/*boolean - if prop exists, action occurs*/; }): LokiDynamicView<E>;

    /** branchResultset() - Makes a copy of the internal resultset for branched queries.
     *   Unlike this dynamic view, the branched resultset will not be 'live' updated,
     *   so your branched query should be immediately resolved and not held for future evaluation.
     * @returns {Resultset} A copy of the internal resultset for branched queries.
     */
    branchResultset(): LokiResultset<E>;

    /** toJSON() - Override of toJSON to avoid circular references */
    toJSON(): LokiDynamicView<E>;

    /** applySort() - Used to apply a sort to the dynamic view
     * @param {function} comparefun - a javascript compare function used for sorting
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applySort(comparefun: (a: E, b: E) => number): LokiDynamicView<E>;

    /** applySimpleSort() - Used to specify a property used for view translation.
     * @param {string} propname - Name of property by which to sort.
     * @param {boolean} isdesc - (Optional) If true, the sort will be in descending order.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applySimpleSort(propname: string, isdesc?: boolean): LokiDynamicView<E>;

    /** applySortCriteria() - Allows sorting a resultset based on multiple columns.
     *   Example : dv.applySortCriteria(['age', 'name']); to sort by age and then name (both ascending)
     *   Example : dv.applySortCriteria(['age', ['name', true]); to sort by age (ascending) and then by name (descending)
     *   Example : dv.applySortCriteria(['age', true], ['name', true]); to sort by age (descending) and then by name (descending)
     * @param {array} properties - array of property names or subarray of [propertyname, isdesc] used evaluate sort order
     * @returns {DynamicView} Reference to this DynamicView, sorted, for future chain operations.
     */
    applySortCriteria(criteria: string | any[]): LokiDynamicView<E>;

    /** startTransaction() - marks the beginning of a transaction.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    startTransaction(): LokiDynamicView<E>;

    /** commit() - commits a transaction.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    commit(): LokiDynamicView<E>;

    /** rollback() - rolls back a transaction.
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    rollback(): LokiDynamicView<E>;

    /** applyFind() - Adds a mongo-style query option to the DynamicView filter pipeline
     * @param {object} query - A mongo-style query object to apply to pipeline
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applyFind(query: LokiQuery): LokiDynamicView<E>;

    /** applyWhere() - Adds a javascript filter function to the DynamicView filter pipeline
     * @param {function} fun - A javascript filter function to apply to pipeline
     * @returns {DynamicView} this DynamicView object, for further chain ops.
     */
    applyWhere(fun: (obj: E) => boolean): LokiDynamicView<E>;

    /** data() - resolves and pending filtering and sorting, then returns document array as result.
     * @returns {array} An array of documents representing the current DynamicView contents.
     */
    data(): E[];

    /** */
    queueSortPhase(): void;

    /** performSortPhase() - invoked synchronously or asynchronously to perform final sort phase (if needed) */
    performSortPhase(): void;

    /** evaluateDocument() - internal method for (re)evaluating document inclusion.
     *   Called by : collection.insert() and collection.update().
     * @param {int} objIndex - index of document to (re)run through filter pipeline.
     */
    evaluateDocument(objIndex: number): void;

    /** removeDocument() - internal function called on collection.delete() */
    removeDocument(objIndex: number): void;

    /** mapReduce() - data transformation via user supplied functions
     * @param {function} mapFunction - this function accepts a single document for you to transform and return
     * @param {function} reduceFunction - this function accepts many (array of map outputs) and returns single value
     * @returns The output of your reduceFunction
     */
    mapReduce<T, U>(mapFunction: (value: E, index: number, array: E[]) => T, reduceFunction: (array: T[]) => U): U;

}




/** Collection class that handles documents of same type
 * @param {stirng} collection name
 * @param {array} array of property names to be indicized
 * @param {object} configuration object
 */
interface LokiCollection<E> extends LokiEventEmitter {
    // the name of the collection
    name: string;
    // the data held by the collection
    data: E[];
    idIndex: number[]; // index of id
    binaryIndices: { [id: string]: { name: string; dirty: boolean; values: number[] } }; // user defined indexes
    constraints: { unique: { [id: string]: LokiUniqueIndex<E> }; exact: { [id: string]: LokiExactIndex<E> }; }
    // the object type of the collection
    objType: string;
    // currentMaxId - change manually at your own peril!
    maxId: number;
    DynamicViews: LokiDynamicView<E>[]; // TODO type
    events: {
        'insert': any[];
        'update': any[];
        'pre-insert': any[];
        'pre-update': any[];
        'close': any[];
        'flushbuffer': any[];
        'error': any[];
        'delete': any[];
        'warning': any[];
    };
    // in autosave scenarios we will use collection level dirty flags to determine whether save is needed.
    // currently, if any collection is dirty we will autosave the whole database if autosave is configured.
    // defaulting to true since this is called from addCollection and adding a collection should trigger save
    dirty: boolean;
    // changes are tracked by collection and aggregated by the db
    changes: { name: string; operation: string/*'I', 'U', 'R'*/; obj: any }[];
    // private holders for cached data
    cachedIndex: any; // TODO type
    cachedBinaryIndex: any; // TODO type
    cachedData: any; // TODO type
    // options
    transactional: boolean;
    cloneObjects: boolean;
    asyncListeners: boolean;
    disableChangesApi: boolean;
    setChangesApi: (enabled: boolean) => void;

    new (name: string, options?: LokiCollectionOptions): LokiCollection<E>;

    getChanges(): LokiCollectionChange[];

    flushChanges(): void;

    byExample(template: any): { $and: any[] };

    findObject(template: any): E;

    findObjects(template: any): E[];


    /*----------------------------+
    | INDEXING                    |
    +----------------------------*/

    /** Ensure binary index on a certain field */
    ensureIndex(property: string, force?: boolean): void;

    ensureUniqueIndex(field: string): void;

    /** Ensure all binary indices */
    ensureAllIndexes(force?: boolean): void;

    flagBinaryIndexesDirty(): void;

    count(): number;

    /** Rebuild idIndex */
    ensureId(): void;

    /** Rebuild idIndex async with callback - useful for background syncing with a remote server */
    ensureIdAsync(callback: () => void): void;

    /** Each collection maintains a list of DynamicViews associated with it */
    addDynamicView(name: string, persistent?: boolean): LokiDynamicView<E>;

    removeDynamicView(name: string): void;

    getDynamicView(name: string): LokiDynamicView<E>;

    /** find and update: pass a filtering function to select elements to be updated
     * and apply the updatefunctino to those elements iteratively
     */
    findAndUpdate(filterFunction: (obj: E) => boolean, updateFunction: (obj: E) => E): void;

    /** generate document method - ensure objects have id and objType properties
     * @param {object} the document to be inserted (or an array of objects)
     * @returns document or documents (if passed an array of objects)
     */
    insert(doc: E): E;
    insert(doc: E[]): E[];

    clear(): void;

    /** Update method */
    update(doc: E): void;

    /** Add object to collection */
    add(obj: E): E;

    removeWhere(query: ((obj: E) => boolean) | LokiQuery): void;

    removeDataOnly(): void;

    /** delete wrapped */
    remove(doc: E | E[]| number | number[]): E;


    /*---------------------+
    | Finding methods     |
    +----------------------*/

    /** Get by Id - faster than other methods because of the searching algorithm */
    get(id: number | string): E;
    //get(id: number | string, returnPosition: true): [E, number];
    get(id: number | string, returnPosition: boolean): E |[E, number];

    by(field: string): (value: any) => E;
    by(field: string, value?: string): E;

    /** Find one object by index property, by property equal to value */
    findOne(query: LokiQuery): E;

    /** Chain method, used for beginning a series of chained find() and/or view() operations
     * on a collection.
     */
    chain(): LokiResultset<E>;

    /** Find method, api is similar to mongodb except for now it only supports one search parameter.
     * for more complex queries use view() and storeView()
     */
    find(): LokiResultset<E>;
    find(query: LokiQuery): E[];

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

    /** Create view function - filter */
    where(fun: (obj: E) => boolean): LokiResultset<E>;

    /** Map Reduce */
    mapReduce<T, U>(mapFunction: (value: E, index: number, array: E[]) => T, reduceFunction: (previousValue: U, currentValue: T, index: number, array: T[]) => U): U;

    /** eqJoin - Join two collections on specified properties */
    eqJoin<T, U>(joinData: T[]| LokiResultset<T>, leftJoinProp: string | ((obj: T) => string), rightJoinProp: string | ((obj: E) => string)): LokiResultset<{ left: E; right: T; }>;
    eqJoin<T, U>(joinData: T[]| LokiResultset<T>, leftJoinProp: string | ((obj: T) => string), rightJoinProp: string | ((obj: E) => string), mapFun?: (a: E, b: T) => U): LokiResultset<U>;


    /* ------ STAGING API -------- */
    /** stages: a map of uniquely identified 'stages', which hold copies of objects to be
     * manipulated without affecting the data in the original collection
     */
    stages: { [id: string]: any };

    /** create a stage and/or retrieve it */
    getStage(name: string): any;

    /** a collection of objects recording the changes applied through a commmitStage */
    commitLog: { timestamp: number; message: any; data: any }[];

    /** create a copy of an object and insert it into a stage */
    stage<T>(stageName: string, obj: T): T;

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

    mode(field: string): number;

    median(field: string): number;
}


/*
interface Utils {
    copyProperties(src, dest): void;
}
    
// Sort helper that support null and undefined
function ltHelper(prop1, prop2, equal?: boolean): boolean;
    
function gtHelper(prop1, prop2, equal?: boolean): boolean;
    
function sortHelper(prop1, prop2, desc?: boolean): number;
    
function containsCheckFn<T>(a: T[], b): (curr: T) => boolean;
    
function containsCheckFn(a: string, b): (curr: string) => boolean;
    
function containsCheckFn<T>(a: T, b): (curr: string) => boolean;
    
function clone<T>(data: T, method?: string): T;
    
function localStorageAvailable(): boolean;
*/


/** General utils, including statistical functions */
/*
function isDeepProperty(field: string): boolean;
    
function parseBase10(num: number | string): number;
    
function isNotUndefined(obj: any): boolean;
    
function add(a: number, b: number): number;
    
function sub(a: number, b: number): number;
    
function median(values: number[]): number;
    
function average(array: number[]): number;
    
function standardDeviation(values: number[]): number;
*/


interface LokiOps {
    // comparison operators
    $eq: (a: any, b: any) => boolean;
    $gt: (a: any, b: any) => boolean;
    $gte: (a: any, b: any) => boolean;
    $lt: (a: any, b: any) => boolean;
    $lte: (a: any, b: any) => boolean;
    $ne: (a: any, b: any) => boolean;
    $regex: (a: string, b: RegExp) => boolean;
    $in: (a: any, b: { indexOf: (value: any) => number }) => boolean;
    $containsAny: (a: any, b: any[]| any) => boolean;
    $contains: (a: any, b: any[]| any) => boolean;
}

//declare var operators: LokiOps;


interface LokiDeepProperty {
    (obj: any, property: string, isDeep?: boolean): any;
}


interface LokiBinarySearch<T> {
    (array: T[], item: T, fun: (a: T, b: T) => number): { found: boolean; index: number; };
}


interface LokiBSonSort<T> {
    (fun: (a: T, b: T) => number): (array: T[], item: T) => { found: boolean; index: number; };
}




interface LokiKeyValueStore<K, V> {
    keys: K[];
    values: V[];

    sort(a: K, b: K): number;
    setSort(fun: (a: K, b: K) => number): void;
    bs(): LokiBSonSort<K>;
    set(key: K, value: V): void;
    get(key: K): V;
}




interface LokiUniqueIndex<E> {
    field: string;
    keyMap: { [id: string]: E };
    lokiMap: { [id: number]: any }; // 'field' map

    new (uniqueField: string): LokiUniqueIndex<E>;

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

    new <E>(exactField: string): LokiExactIndex<E>;

    // add the value you want returned to the key in the index 
    set(key: string, val: E): void;

    // remove the value from the index, if the value was the last one, remove the key
    remove(key: string, val: E): void;

    // get the values related to the key, could be more than one
    get(key: string): E[];

    // clear will zap the index
    clear(key?: any): void;
}



interface LokiSortedIndex<K, V> {
    keys: K[];
    values: V[];

    new (sortedField: string): LokiSortedIndex<K, V>;

    // set the default sort
    sort(a: K, b: K): number;
    bs(): LokiBSonSort<K>;
    // and allow override of the default sort
    setSort(fun: (a: K, b: K) => number): void;
    // add the value you want returned  to the key in the index  
    set(key: K, value: V): void;
    // get all values which have a key == the given key
    get(key: K): V | V[];
    // get all values which have a key < the given key
    getLt(key: K): V[];
    // get all values which have a key > the given key
    getGt(key: K): V[];

    // get all vals from start to end
    getAll(key: K, start: number, end: number): V[];
    // just in case someone wants to do something smart with ranges
    getPos(key: K): boolean;
    // remove the value from the index, if the value was the last one, remove the key
    remove(key: K, value: V): void;
    // clear will zap the index
    clear(key?: any): void;
}


interface LokiPersistenceInterface {
    loadDatabase: (fileName: string, func: (dbString: string) => void) => void;
    saveDatabase: (fileName: string, content: string, func: () => void) => void;
}


interface LokiConfigureOptions {
    env?: string/*'NODEJS', 'BROWSER', 'CORDOVA'*/;
    persistenceMethod?: string/*'fs', 'localStorage'*/;
    adapter?: LokiPersistenceInterface;
    autoload?: any;
    autoloadCallback?: (err: Error | string, data: any) => void;
    autosave?: boolean;
    autosaveInterval?: number;
}


interface LokiQuery {
}


interface LokiCollectionChange {
    name: string;
    operation: string/*'I', 'U', 'R'*/;
    obj: any
}


interface LokiCollectionOptions {
    transactional?: boolean;
    clone?: boolean;
    asyncListeners?: boolean;
    disableChangesApi?: boolean;
    indices?: string | string[];
}




/* ==== loki-indexed-adapter.js ==== */
interface LokiIndexedAdapter {
    app: string;
    catalog: LokiCatalog; // TODO type

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
    saveDatabase(dbname: string, dbstring: string, callback?: (res: { success: boolean }) => void): void;

    // alias for saveDatabase
    saveKey(dbname: string, dbstring: string, callback?: (res: { success: boolean }) => void): void;

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
/* ==== END loki-indexed-adapter.js ==== */



/* ==== loki-crypted-file-adapter.js ==== */
interface LokiCryptedFileAdapterEncryptResult {
    cipher: string;
    keyDerivation: string;
    keyLength: number;
    iterations: number;
    iv: string;
    salt: string;
    value: string;
}


interface LokiCryptedFileAdapter {
    secret: string;

    /** The constructor is automatically called on `require` , see examples below
     * @constructor
     */
    new (): LokiCryptedFileAdapter;

    /** setSecret() - set the secret to be used during encryption and decryption
     * @param {string} secret - the secret to be used
     */
    setSecret(secret: string): void;

    /** loadDatabase() - Retrieves a serialized db string from the catalog.
     *  @example
     // LOAD
     var cryptedFileAdapter = require('./lokiCryptedFileAdapter');
     ptedFileAdapter.setSecret('mySecret'); // you should change 'mySecret' to something supplied by the user
     var db = new loki('test.crypted', { adapter: cryptedFileAdapter }); //you can use any name, not just '*.crypted'
     db.loadDatabase(function(result) {
         e.log('done');
         
     *
     * @param {string} dbname - the name of the database to retrieve.
     * @param {function} callback - callback should accept string param containing serialized db string.
     */
    loadDatabase(dbname: string, callback?: (res: string | Error) => void): void;

    /**
     @example
     // SAVE : will save database in 'test.crypted'
         cryptedFileAdapter = require('./lokiCryptedFileAdapter');
     ptedFileAdapter.setSecret('mySecret'); // you should change 'mySecret' to something supplied by the user
         loki=require('lokijs');
         db = new loki('test.crypted',{ adapter: cryptedFileAdapter }); //you can use any name, not just '*.crypted'
         coll = db.addCollection('testColl');
     l.insert({test: 'val'});
     saveDatabase();  // could pass callback if needed for async complete
 	
         ample
     // if you have the krypt module installed you can use:
     pt --decrypt test.crypted --secret mySecret
     to view the contents of the database
 	
     * saveDatabase() - Saves a serialized db to the catalog.
     *
     * @param {string} dbname - the name to give the serialized database within the catalog.
     * @param {string} dbstring - the serialized db string to save.
     * @param {function} callback - (Optional) callback passed obj.success with true or false
     */
    saveDatabase(dbname: string, dbstring: string, callback?: (err?: any | LokiCryptedFileAdapterEncryptResult) => void): void;

}
/* ==== END loki-crypted-file-adapter.js ==== */




/* ==== loki-angular.js ==== */
/* introduces a angular module named lokijs that returns the 'lokijs' module
    var module = angular.module('lokijs', [])
        .factory('Loki', function Loki() {
            return lokijs;
        });
    return module;
*/
/* ==== END loki-angular.js ==== */




/* ==== jquery-sync-adapter.js ==== */
/** this adapter assumes an object options is passed,
 * containing the following properties:
 * ajaxLib: jquery or compatible ajax library
 * save: { url: the url to save to, dataType [optional]: json|xml|etc., type [optional]: POST|GET|PUT}
 * load: { url: the url to load from, dataType [optional]: json|xml| etc., type [optional]: POST|GET|PUT }
 */
interface JquerySyncAdapter {
    options: {
        ajaxLib: {
            ajax(options: any): any;
        };
        save: {
            type?: string/*'GET', 'POST, 'DELETE', etc.*/;
            dataType?: string/*'json', 'xml', etc.*/
            url?: string
        };
    }; // TODO type

    new (options: any): JquerySyncAdapter;

    saveDatabase(name: any, data: any, callback?: (data: any, textStatus: string, jqXHR: XMLHttpRequest/*JQueryXHR*/) => any): void;

    loadDatabase(name: any, callback?: (data: any, textStatus: string, jqXHR: XMLHttpRequest/*JQueryXHR*/) => any): void;

}
/* ==== END jquery-sync-adapter.js ==== */




declare var LokiConstructor: {
    new (filename: string, options?: LokiConfigureOptions): Loki;
    Collection: LokiCollection<any>;
    KeyValueStore: LokiKeyValueStore<any, any>;
}


declare module "lokijs" {
    export = LokiConstructor;
}
