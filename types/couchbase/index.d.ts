// Type definitions for Couchbase Node.js SDK 2.1.2
// Project: https://github.com/couchbase/couchnode
// Definitions by: Marwan Aouida <https://github.com/maouida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>




import events = require('events');

/**
 * Enumeration of all error codes. See libcouchbase documentation for more details on what these errors represent.
 */
declare enum errors {
    /** Operation was successful. **/
    success,

    /** Authentication should continue. **/
    authContinue,

    /** Error authenticating. **/
    authError,

    /** The passed incr/decr delta was invalid. **/
    deltaBadVal,

    /** Object is too large to be stored on the cluster. **/
    objectTooBig,

    /** Operation was successful. **/
    serverBusy,

    /** Server is too busy to handle your request right now. **/
    cLibInternal,

    /** An invalid arguement was passed. **/
    cLinInvalidArgument,

    /** The server is out of memory. **/
    cLibOutOfMemory,

    /** An invalid range was specified. **/
    invalidRange,

    /** An unknown error occured within libcouchbase. **/
    cLibGenericError,

    /** A temporary error occured. Try again. **/
    temporaryError,

    /** The key already exists on the server. **/
    keyAlreadyExists,

    /** The key does not exist on the server. **/
    keyNotFound,

    /** Failed to open library. **/
    failedToOpenLibrary,

    /** Failed to find expected symbol in library. **/
    failedToFindSymbol,

    /** A network error occured. **/
    networkError,

    /** Operations were performed on the incorrect server. **/
    wrongServer,

    /** Operations were performed on the incorrect server. **/
    notMyVBucket,

    /** The document was not stored. **/
    notSorted,

    /** An unsupported operation was sent to the server. **/
    notSupported,

    /** An unknown command was sent to the server. **/
    unknownCommand,

    /** An unknown host was specified. **/
    unknownHost,

    /** A protocol error occured. **/
    protocolError,

    /** The operation timed out. **/
    timedOut,

    /** Error connecting to the server. **/
    connectError,

    /** The bucket you request was not found. **/
    bukcketNotFound,

    /** libcouchbase is out of memory. **/
    clientOutOfMemory,

    /** A temporary error occured in libcouchbase. Try again. **/
    clientTemporaryError,

    /** A bad handle was passed. **/
    badHandle,

    /** A server bug caused the operation to fail. **/
    serverBug,

    /** The host format specified is invalid. **/
    invalidHostFormat,

    /**  Not enough nodes to meet the operations durability requirements. **/
    notEnoughNodes,

    /** Duplicate items. **/
    duplicateItems,

    /** Key mapping failed and could not match a server. **/
    noMatchingServerForKey,

    /** A bad environment variable was specified. **/
    badEnvironmentVariable,

    /** Couchnode is out of memory. **/
    outOfMemory,

    /** Invalid arguements were passed. **/
    invalidArguments,

    /** An error occured while trying to schedule the operation. **/
    schedulingError,

    /** Not all operations completed successfully. **/
    checkResults,

    /** A generic error occured in Couchnode. **/
    genericError,

    /** The specified durability requirements could not be satisfied. **/
    durabilityFailed,

    /** An error occured during a RESTful operation. **/
    restError
}

/**
 * Represents a singular cluster containing your buckets.
 */
declare class Cluster {
    /**
     * Create a new instance of the Cluster class.
     * @param cnstr The connection string for your cluster.
     * @param options The options object.
     */
    constructor(cnstr?: string, options?: ClusterConstructorOptions);

    /**
     * Creates a manager allowing the management of a Couchbase cluster.
     */
    manager(): ClusterManager;

    /**
     * Creates a manager allowing the management of a Couchbase cluster using credentials.
     * @param username The username for your cluster.
     * @param password The password for your cluster.
     */
    manager(username: string, password: string): ClusterManager;

    /**
     * Open a bucket to perform operations. This will begin the handshake process immediately and operations will complete later. Subscribe to the connect event to be alerted when the connection is ready, though be aware operations can be successfully queued before this.
     * @param name The name of the bucket to open.
     */
    openBucket(name?: string): Bucket;


    /**
     * Open a bucket to perform operations. This will begin the handshake process immediately and operations will complete later. Subscribe to the connect event to be alerted when the connection is ready, though be aware operations can be successfully queued before this.
     * @param name The name of the bucket to open.
     * @param password Password for the bucket.
     */
    openBucket(name?: string, password?: string): Bucket;

    /**
     * Open a bucket to perform operations. This will begin the handshake process immediately and operations will complete later. Subscribe to the connect event to be alerted when the connection is ready, though be aware operations can be successfully queued before this.
     * @param name The name of the bucket to open.
     * @param callback Callback to invoke on connection success or failure.
     */
    openBucket(name?: string, callback?: Function): Bucket;

    /**
     * Open a bucket to perform operations. This will begin the handshake process immediately and operations will complete later. Subscribe to the connect event to be alerted when the connection is ready, though be aware operations can be successfully queued before this.
     * @param name The name of the bucket to open.
     * @param password Password for the bucket.
     * @param callback Callback to invoke on connection success or failure.
     */
    openBucket(name?: string, password?: string, callback?: Function): Bucket;
}

interface ClusterConstructorOptions {
    /**
     * The path to the certificate to use for SSL connections
     */
    certpath: string;
}

interface CreateBucketOptions {
    /**
     * The bucket name
     */
    name?: string;
    authType?: string,
    bucketType?: string;
    ramQuotaMB?: number;
    replicaNumber?: number;
}

/**
 * Class for performing management operations against a cluster.
 */
interface ClusterManager {
    /**
     *
     * @param name
     * @param callback
     */
    createBucket(name: string, callback: Function): void;

    /**
     *
     * @param name
     * @param opts
     * @param callback
     */
    createBucket(name: string, opts: any, callback: Function): void;

    /**
     *
     * @param callback
     */
    listBuckets(callback: Function): void;

    /**
     *
     * @param name
     * @param callback
     */
    removeBucket(name: string, callback: Function): void;
}

/**
 * The virtual class thrown for all Couchnode errors.
 */
interface CouchbaseError extends Error {
    /**
     * The error code for this error.
     */
    code: errors;
}

interface AppendOptions {
    /**
     * The CAS value to check. If the item on the server contains a different CAS value, the operation will fail. Note that if this option is undefined, no comparison will be performed.
     */
    cas?: Bucket.CAS;

    /**
     * Ensures this operation is persisted to this many nodes.
     */
    persist_to?: number;

    /**
     * 	Ensures this operation is replicated to this many nodes.
     */
    replicate_to?: number;
}

interface PrependOptions extends AppendOptions { }

interface RemoveOptions extends AppendOptions { }

interface ReplaceOptions extends AppendOptions {
    /**
     * Set the initial expiration time for the document. A value of 0 represents never expiring.
     */
    expiry?: number;
}

interface UpsertOptions extends ReplaceOptions { }

interface TouchOptions {
    /**
     * 	Ensures this operation is persisted to this many nodes.
     */
    persist_to?: number;

    /**
     * Ensures this operation is replicated to this many nodes.
     */
    replicate_to?: number;
}

interface CounterOptions {
    /**
     * Sets the initial value for the document if it does not exist. Specifying a value of undefined will cause the operation to fail if the document does not exist, otherwise this value must be equal to or greater than 0.
     */
    initial?: number;

    /**
     * Set the initial expiration time for the document. A value of 0 represents never expiring.
     */
    expiry?: number;

    /**
     * Ensures this operation is persisted to this many nodes
     */
    persist_to?: number;

    /**
     * Ensures this operation is replicated to this many nodes
     */
    replicate_to?: number;
}

interface GetAndLockOptions {
    lockTime?: number;
}

interface GetReplicaOptions {

    /**
     * The index for which replica you wish to retrieve this value from, or if undefined, use the value from the first server that replies.
     */
    index?: number;
}

interface InsertOptions {

    /**
     * Set the initial expiration time for the document. A value of 0 represents never expiring.
     */
    expiry?: number;

    /**
     * Ensures this operation is persisted to this many nodes.
     */
    persist_to?: number;

    /**
     * 	Ensures this operation is replicated to this many nodes.
     */
    replicate_to?: number;
}

/**
 * A class for performing management operations against a bucket. This class should not be instantiated directly, but instead through the use of the Bucket#manager method instead.
 */
interface BucketManager {

    /**
     * Flushes the cluster, deleting all data stored within this bucket. Note that this method requires the Flush permission to be enabled on the bucket from the management console before it will work.
     * @param callback The callback function.
     */
    flush(callback: Function): void;

    /**
     * Retrieves a specific design document from this bucket.
     * @param name
     * @param callback The callback function.
     */
    getDesignDocument(name: string, callback: Function): void;

    /**
     * Retrieves a list of all design documents registered to a bucket.
     * @param callback The callback function.
     */
    getDesignDocuments(callback: Function): void;

    /**
     * Registers a design document to this bucket, failing if it already exists.
     * @param name
     * @param data
     * @param callback The callback function.
     * @returns {}
     */
    insertDesignDocument(name: string, data: any, callback: Function): void;

    /**
     * Unregisters a design document from this bucket.
     * @param name
     * @param callback The callback function.
     * @returns {}
     */
    removeDesignDocument(name: string, callback: Function): void;

    /**
     * Registers a design document to this bucket, overwriting any existing design document that was previously registered.
     * @param name
     * @param data
     * @param callback The callback function.
     * @returns {}
     */
    upsertDesignDocument(name: string, data: any, callback: Function): void;
}

/**
 * Class for dynamically construction of view queries. This class should never be constructed directly, instead you should use ViewQuery.from to construct this object.
 */
declare class ViewQuery {
    /**
     * Instantiates a ViewQuery object for the specified design document and view name.
     * @param ddoc The design document to use.
     * @param name The view to use.
     */
    static from(ddoc: string, name: string): ViewQuery;

    /**
     * Specifies the design document and view name to use for this query.
     * @param ddoc The design document to use.
     * @param name The view to use.
     */
    from(ddoc: string, name: string): ViewQuery;

    /**
     * Allows you to specify custom view options that may not be available though the fluent interface defined by this class.
     * @param opts
     */
    custom(opts: any): ViewQuery;

    /**
     * Flag to request a view request accross all nodes in the case of a development view.
     * @param full_set
     */
    full_set(full_set: boolean): ViewQuery;

    /**
     * Specifies whether to preform grouping during view execution.
     * @param group
     */
    group(group: boolean): ViewQuery;

    /**
     * Specifies the level at which to perform view grouping.
     * @param group_level
     */
    group_level(group_level: number): ViewQuery;

    /**
     * Specifies a range of document id's to retrieve from the index.
     * @param start
     * @param end
     */
    id_range(start: any, end: any): ViewQuery;

    /**
     * Flag to request a view request include the full document value.
     * @param include_docs
     */
    include_docs(include_docs: boolean): ViewQuery;

    /**
     * Specifies a specified key to retrieve from the index.
     * @param key
     */
    key(key: any): ViewQuery;

    /**
     * Specifies a list of keys you wish to retrieve from the index.
     * @param keys
     */
    keys(key: any[]): ViewQuery;

    /**
     * Specifies the maximum number of results to return.
     * @param limit
     */
    limit(limit: number): ViewQuery;

    /**
     * Sets the error handling mode for this query.
     * @param mode
     */
    on_error(mode: ViewQuery.ErrorMode): ViewQuery;

    /**
     * Specifies the desired ordering for the results.
     * @param order
     */
    order(order: ViewQuery.Order): ViewQuery;

    /**
     * Specifies a range of keys to retrieve from the index. You may specify both a start and an end point and additionally specify whether or not the end value is inclusive or exclusive.
     * @param start
     * @param end
     * @param inclusive_end
     */
    range(start: any | any[], end: any | any[], inclusive_end?: boolean): ViewQuery;

    /**
     * Specifies whether to execute the map-reduce reduce step.
     * @param reduce
     */
    reduce(reduce: boolean): ViewQuery;

    /**
     * Specifies how many results to skip from the beginning of the result set.
     * @param skip
     */
    skip(skip: number): ViewQuery;

    /**
     * Specifies how this query will affect view indexing, both before and after the query is executed.
     * @param stale
     */
    stale(stale: ViewQuery.Update): ViewQuery;
}

declare namespace ViewQuery {
    /**
     * Enumeration for specifying on_error behaviour.
     */
    enum ErrorMode {
        /**
         * Continues querying when an error occurs.
         */
        CONTINUE,

        /**
         * Stops and errors query when an error occurs.
         */
        STOP
    }

    /**
     * Enumeration for specifying view result ordering.
     */
    enum Order {
        /**
         * Orders with lower values first and higher values last.
         */
        ASCENDING,

        /**
         * Orders with higher values first and lower values last.
         */
        DESCENDING
    }

    /**
     * Enumeration for specifying view update semantics.
     */
    enum Update {
        /**
         * Causes the view to be fully indexed before results are retrieved.
         */
        BEFORE,

        /**
         * Allows the index to stay in whatever state it is already in prior retrieval of the query results.
         */
        NONE,

        /**
         * Forces the view to be indexed after the results of this query has been fetched.
         */
        AFTER
    }
}

/**
 * Class for dynamically construction of N1QL queries. This class should never be constructed directly, instead you should use the N1qlQuery.fromString static method to instantiate a N1qlStringQuery.
 */
declare class N1qlQuery {
    /**
     * Creates a query object directly from the passed query string.
     * @param str
     */
    static fromString(str: string): N1qlStringQuery;

    /**
     * Returns the fully prepared string representation of this query.
     */
    toString(): string;
}

declare namespace N1qlQuery {
    /**
     * Enumeration for specifying N1QL consistency semantics.
     */
    enum Consistency {
        /**
         * 	This is the default (for single-statement requests).
         */
        NOT_BOUND,

        /**
         * This implements strong consistency per request.
         */
        REQUEST_PLUS,

        /**
         * This implements strong consistency per statement.
         */
        STATEMENT_PLUS
    }
}

/**
 * Class for holding a explicitly defined N1QL query string.
 */
declare class N1qlStringQuery extends N1qlQuery {
    /**
     * Specifies whether this query is adhoc or should be prepared.
     * @param adhoc
     */
    adhoc(adhoc: boolean): N1qlStringQuery;

    /**
     * Specify the consistency level for this query.
     * @param val
     */
    consistency(val: N1qlQuery.Consistency): N1qlStringQuery;

    /**
     * Returns the fully prepared object representation of this query.
     */
    toObject(): any;

    /**
     * Returns the fully prepared string representation of this query.
     */
    toString(): string;
}

/**
 * Class for dynamically construction of spatial queries. This class should never be constructed directly, instead you should use SpatialQuery.from to construct this object.
 */
declare class SpatialQuery {
    /**
     * Instantiates a SpatialQuery object for the specified design document and view name.
     * @param ddoc The design document to use.
     * @param name 	The view to use.
     */
    static from(ddoc: string, name: string): SpatialQuery;

    /**
     * Specifies the design document and view name to use for this query.
     * @param ddoc
     * @param name
     */
    from(ddoc: string, name: string): SpatialQuery;

    /**
     * Specifies a bounding box to query the index for. This value must be an array of exactly 4 numbers which represents the left, top, right and bottom edges of the bounding box (in that order).
     * @param bbox
     */
    bbox(bbox: number[]): SpatialQuery;

    /**
     * Allows you to specify custom view options that may not be available though the fluent interface defined by this class.
     * @param opts
     */
    custom(opts: any): SpatialQuery;

    /**
     * Specifies the maximum number of results to return.
     * @param limit
     */
    limit(limit: number): SpatialQuery;

    /**
     * Specifies how many results to skip from the beginning of the result set.
     * @param skip
     */
    skip(skip: number): SpatialQuery;

    /**
     * Specifies how this query will affect view indexing, both before and after the query is executed.
     * @param stale
     */
    stale(stale: SpatialQuery.Update): SpatialQuery;
}

declare namespace SpatialQuery {
    /**
     * Enumeration for specifying view update semantics.
     */
    enum Update {
        /**
         * Causes the view to be fully indexed before results are retrieved.
         */
        BEFORE,

        /**
         * Allows the index to stay in whatever state it is already in prior retrieval of the query results.
         */
        NONE,

        /**
         * 	Forces the view to be indexed after the results of this query has been fetched.
         */
        AFTER
    }
}

/**
 * The Bucket class represents a connection to a Couchbase bucket. Never instantiate this class directly. Instead use the Cluster#openBucket method instead.
 */
interface Bucket {
    /**
     * Returns the version of the Node.js library as a string.
     */
    clientVersion: string;

    /**
     * Gets or sets the config throttling in milliseconds. The config throttling is the time that Bucket will wait before forcing a configuration refresh. If no refresh occurs before this period while a configuration is marked invalid, an update will be triggered.
     */
    configThrottle: number;

    /**
     * Sets or gets the connection timeout in milliseconds. This is the timeout value used when connecting to the configuration port during the initial connection (in this case, use this as a key in the 'options' parameter in the constructor) and/or when Bucket attempts to reconnect in-situ (if the current connection has failed).
     */
    connectionTimeout: number;

    /**
     * Gets or sets the durability interval in milliseconds. The durability interval is the time that Bucket will wait between requesting new durability information during a durability poll.
     */
    durabilityInterval: number;

    /**
     * Gets or sets the durability timeout in milliseconds. The durability timeout is the time that Bucket will wait for a response from the server in regards to a durability request. If there are no responses received within this time frame, the request fails with an error.
     */
    durabilityTimeout: number;

    /**
     * Returns the libcouchbase version as a string. This information will usually be in the format of 2.4.0-fffffff representing the major, minor, patch and git-commit that the built libcouchbase is based upon.
     */
    lcbVersion: string;

    /**
     * Gets or sets the management timeout in milliseconds. The management timeout is the time that Bucket will wait for a response from the server for a management request. If the response is not received within this time frame, the request is failed out with an error.
     */
    managementTimeout: number;

    /**
     * Sets or gets the node connection timeout in msecs. This value is similar to Bucket#connectionTimeout, but defines the time to wait for a particular node to respond before trying the next one.
     */
    nodeConnectionTimeout: number;

    /**
     * Gets or sets the operation timeout in milliseconds. The operation timeout is the time that Bucket will wait for a response from the server for a CRUD operation. If the response is not received within this time frame, the operation is failed with an error.
     */
    operationTimeout: number;

    /**
     * Gets or sets the view timeout in milliseconds. The view timeout is the time that Bucket will wait for a response from the server for a view request. If the response is not received within this time frame, the request fails with an error.
     */
    viewTimeout: number;

    /**
     * Similar to Bucket#upsert, but instead of setting a new key, it appends data to the existing key. Note that this function only makes sense when the stored data is a string; 'appending' to a JSON document may result in parse errors when the document is later retrieved.
     * @param key The target document key.
     * @param fragment The document's contents to append.
     * @param callback The callback function.
     */
    append(key: any | Buffer, fragment: any, callback: Bucket.OpCallback): void;

    /**
     *
     * @param key The target document key.
     * @param fragment The document's contents to append.
     * @param options The options object.
     * @param callback The callback function.
     */
    append(key: any | Buffer, fragment: any, options: AppendOptions, callback: Bucket.OpCallback): void;

    /**
     * Increments or decrements a key's numeric value.
     * Note that JavaScript does not support 64-bit integers (while libcouchbase and the server do). You might receive an inaccurate value if the number is greater than 53-bits (JavaScript's maximum integer precision).
     * @param key The target document key.
     * @param delta The amount to add or subtract from the counter value. This value may be any non-zero integer.
     * @param callback The callback function.
     */
    counter(key: any | Buffer, delta: number, callback: Bucket.OpCallback): void;

    /**
     *
     * @param key The target document key.
     * @param delta The amount to add or subtract from the counter value. This value may be any non-zero integer.
     * @param options The options object.
     * @param callback The callback function.
     */
    counter(key: any | Buffer, delta: number, options: CounterOptions, callback: Bucket.OpCallback): void;

    /**
     * Shuts down this connection.
     */
    disconnect(): void;

    /**
     * Enables N1QL support on the client. A cbq-server URI must be passed. This method will be deprecated in the future in favor of automatic configuration through the connected cluster.
     * @param hosts An array of host/port combinations which are N1QL servers attached to this cluster.
     */
    enableN1ql(hosts: string | string[]): void;

    /**
     * Retrieves a document.
     * @param key The target document key.
     * @param callback The callback function.
     */
    get(key: any | Buffer, callback: Bucket.OpCallback): void;

    /**
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     */
    get(key: any | Buffer, options: any, callback: Bucket.OpCallback): void;

    /**
     * Lock the document on the server and retrieve it. When an document is locked, its CAS changes and subsequent operations on the document (without providing the current CAS) will fail until the lock is no longer held.
     * This function behaves identically to Bucket#get in that it will return the value. It differs in that the document is also locked. This ensures that attempts by other client instances to access this document while the lock is held will fail.
     * Once locked, a document can be unlocked either by explicitly calling Bucket#unlock or by performing a storage operation (e.g. Bucket#upsert, Bucket#replace, Bucket::append) with the current CAS value. Note that any other lock operations on this key will fail while a document is locked.
     * @param key The target document key.
     * @param callback The callback function.
     */
    getAndLock(key: any, callback: Bucket.OpCallback): void;

    /**
     * Lock the document on the server and retrieve it. When an document is locked, its CAS changes and subsequent operations on the document (without providing the current CAS) will fail until the lock is no longer held.
     * This function behaves identically to Bucket#get in that it will return the value. It differs in that the document is also locked. This ensures that attempts by other client instances to access this document while the lock is held will fail.
     * Once locked, a document can be unlocked either by explicitly calling Bucket#unlock or by performing a storage operation (e.g. Bucket#upsert, Bucket#replace, Bucket::append) with the current CAS value. Note that any other lock operations on this key will fail while a document is locked.
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     * @returns {}
     */
    getAndLock(key: any, options: GetAndLockOptions, callback: Bucket.OpCallback): void;

    /**
     * Retrieves a document and updates the expiry of the item at the same time.
     * @param key The target document key.
     * @param expiry The expiration time to use. If a value of 0 is provided, then the current expiration time is cleared and the key is set to never expire. Otherwise, the key is updated to expire in the time provided (in seconds).
     * @param options The options object.
     * @param callback The callback function.
     */
    getAndTouch(key: any | Buffer, expiry: number, options: any, callback: Bucket.OpCallback): void;

    /**
     * Retrieves a document and updates the expiry of the item at the same time.
     * @param key The target document key.
     * @param expiry The expiration time to use. If a value of 0 is provided, then the current expiration time is cleared and the key is set to never expire. Otherwise, the key is updated to expire in the time provided (in seconds).
     * @param callback The callback function.
     */
    getAndTouch(key: any | Buffer, expiry: number, callback: Bucket.OpCallback): void;

    /**
     * Retrieves a list of keys
     * @param keys The target document keys.
     * @param callback The callback function.
     */
    getMulti(key: any[] | Buffer[], callback: Bucket.MultiGetCallback): void;

    /**
     * Get a document from a replica server in your cluster.
     * @param key The target document key.
     * @param callback The callback function.
     */
    getReplica(key: any | Buffer, callback: Bucket.OpCallback): void;

    /**
    * Get a document from a replica server in your cluster.
    * @param key The target document key.
    * @param options The options object.
    * @param callback The callback function.
    */
    getReplica(key: any | Buffer, options: GetReplicaOptions, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert but will fail if the document already exists.
     * @param key The target document key.
     * @param value The document's contents.
     * @param callback The callback function.
     */
    insert(key: any | Buffer, value: any, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert but will fail if the document already exists.
     * @param key The target document key.
     * @param value The document's contents.
     * @param options The options object.
     * @param callback The callback function.
     */
    insert(key: any | Buffer, value: any, options: InsertOptions, callback: Bucket.OpCallback): void;

    /**
     * Returns an instance of a BuckerManager for performing management operations against a bucket.
     */
    manager(): BucketManager;

    /**
     * Like Bucket#append, but prepends data to the existing value.
     * @param key The target document key.
     * @param fragment The document's contents to prepend.
     * @param callback The callback function.
     */
    prepend(key: any, fragment: any, callback: Bucket.OpCallback): void;

    /**
     * Like Bucket#append, but prepends data to the existing value.
     * @param key The target document key.
     * @param fragment The document's contents to prepend.
     * @param options The options object.
     * @param callback The callback function.
     */
    prepend(key: any, fragment: any, options: PrependOptions, callback: Bucket.OpCallback): void;

    /**
     * Executes a previously prepared query object. This could be a ViewQuery or a N1qlQuery.
     * Note: N1qlQuery queries are currently an uncommitted interface and may be subject to change in 2.0.0's final release.
     * @param query The query to execute.
     * @param callback The callback function.
     */
    query(query: ViewQuery | N1qlQuery, callback: Bucket.QueryCallback): Bucket.ViewQueryResponse | Bucket.N1qlQueryResponse;

    /**
     * Executes a previously prepared query object. This could be a ViewQuery or a N1qlQuery.
     * Note: N1qlQuery queries are currently an uncommitted interface and may be subject to change in 2.0.0's final release.
     * @param query The query to execute.
     * @param params A list or map to do replacements on a N1QL query.
     * @param callback The callback function.
     */
    query(query: ViewQuery | N1qlQuery, params: Object | Array<any>, callback: Bucket.QueryCallback): Bucket.ViewQueryResponse | Bucket.N1qlQueryResponse;

    /**
     * Deletes a document on the server.
     * @param key The target document key.
     * @param callback The callback function.
     */
    remove(key: any | Buffer, callback: Bucket.OpCallback): void;

    /**
     * Deletes a document on the server.
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     */
    remove(key: any | Buffer, options: RemoveOptions, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert, but will only succeed if the document exists already (i.e. the inverse of Bucket#insert).
     * @param key The target document key.
     * @param value The document's contents.
     * @param callback The callback function.
     */
    replace(key: any | Buffer, value: any, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert, but will only succeed if the document exists already (i.e. the inverse of Bucket#insert).
     * @param key The target document key.
     * @param value The document's contents.
     * @param options The options object.
     * @param callback The callback function.
     */
    replace(key: any | Buffer, value: any, options: ReplaceOptions, callback: Bucket.OpCallback): void;

    /**
     * Configures a custom set of transcoder functions for encoding and decoding values that are being stored or retreived from the server.
     * @param encoder The function for encoding.
     * @param decoder The function for decoding.
     */
    setTranscoder(encoder: Bucket.EncoderFunction, decoder: Bucket.DecoderFunction): void;

    /**
     * Update the document expiration time.
     * @param key The target document key.
     * @param expiry The expiration time to use. If a value of 0 is provided, then the current expiration time is cleared and the key is set to never expire. Otherwise, the key is updated to expire in the time provided (in seconds). Values larger than 302460*60 seconds (30 days) are interpreted as absolute times (from the epoch).
     * @param options The options object.
     * @param callback The callback function.
     */
    touch(key: any | Buffer, expiry: number, options: TouchOptions, callback: Bucket.OpCallback): void;

    /**
     * Unlock a previously locked document on the server. See the Bucket#lock method for more details on locking.
     * @param key The target document key.
     * @param cas The CAS value returned when the key was locked. This operation will fail if the CAS value provided does not match that which was the result of the original lock operation.
     * @param callback The callback function.
     */
    unlock(key: any | Buffer, cas: Bucket.CAS, callback: Bucket.OpCallback): void;

    /**
     * Unlock a previously locked document on the server. See the Bucket#lock method for more details on locking.
     * @param key The target document key.
     * @param cas The CAS value returned when the key was locked. This operation will fail if the CAS value provided does not match that which was the result of the original lock operation.
     * @param options The options object.
     * @param callback The callback function.
     */
    unlock(key: any | Buffer, cas: Bucket.CAS, options: any, callback: Bucket.OpCallback): void;

    /**
     * Stores a document to the bucket.
     * @param key The target document key.
     * @param value The document's contents.
     * @param callback The callback function.
     */
    upsert(key: any | Buffer, value: any, callback: Bucket.OpCallback): void;

    /**
     * Stores a document to the bucket.
     * @param key The target document key.
     * @param value The document's contents.
     * @param options The options object.
     * @param callback The callback function.
     */
    upsert(key: any | Buffer, value: any, options: UpsertOptions, callback: Bucket.OpCallback): void;
}

declare namespace Bucket {

    /**
     * his is used as a callback from executed queries. It is a shortcut method that automatically subscribes to the rows and error events of the Bucket.ViewQueryResponse.
     */
    interface QueryCallback {
        /**
         * @param error The error for the operation. This can either be an Error object or a falsy value.
         * @param rows The rows returned from the query.
         * @param meta The metadata returned by the query.
         */
        (error: CouchbaseError, rows: any[], meta: Bucket.ViewQueryResponse.Meta): void;
    }

    /**
     * Single-Key callbacks.
     * This callback is passed to all of the single key functions.
     * It returns a result objcet containing a combination of a CAS and a value, depending on which operation was invoked.
     */
    interface OpCallback {
        /**
         * @param error The error for the operation. This can either be an Error object or a value which evaluates to false (null, undefined, 0 or false).
         * @param result The result of the operation that was executed. This usually contains at least a cas property, and on some operations will contain a value property as well.
         */
        (error: CouchbaseError | number, result: any): void;
    }

    /**
     * Multi-Get Callback.
     * This callback is used to return results from a getMulti operation.
     */
    interface MultiGetCallback {
        /**
         * @param error The number of keys that failed to be retrieved. The precise errors are available by checking the error property of the individual documents.
         * @param results This is a map of keys to results. The result for each key will optionally contain an error if one occured, or if no error occured will contain the CAS and value of the document.
         */
        (error: number, results: any[]): void;
    }

    /**
     * Transcoder Encoding Function.
     * This function will receive a value when a storage operation is invoked that needs to encode user-provided data for storage into Couchbase. It expects to be returned a Buffer object to store along with an integer representing any flag metadata relating to how to decode the key later using the matching DecoderFunction.
     */
    interface EncoderFunction {
        /**
         * Transcoder Encoding Function.
         * This function will receive a value when a storage operation is invoked that needs to encode user-provided data for storage into Couchbase. It expects to be returned a Buffer object to store along with an integer representing any flag metadata relating to how to decode the key later using the matching DecoderFunction.
         * @param value The value needing encoding.
         */
        (value: any): Bucket.TranscoderDoc;
    }

    /**
     * Transcoder Decoding Function.
     * This function will receive an object containing a Buffer value and an integer value representing any flags metadata whenever a retrieval operation is executed. It is expected that this function will return a value representing the original value stored and encoded with its matching EncoderFunction.
     */
    interface DecoderFunction {
        /**
         *
         * @param doc The data from Couchbase to decode.
         */
        (doc: Bucket.TranscoderDoc): any
    }

    /**
     * The CAS value is a special object that indicates the current state of the item on the server. Each time an object is mutated on the server, the value is changed. CAS objects can be used in conjunction with mutation operations to ensure that the value on the server matches the local value retrieved by the client. This is useful when doing document updates on the server as you can ensure no changes were applied by other clients while you were in the process of mutating the document locally.
     * In the Node.js SDK, the CAS is represented as an opaque value. As such,y ou cannot generate CAS objects, but should rather use the values returned from a Bucket.OpCallback.
     */
    interface CAS {

    }

    /**
     * An event emitter allowing you to bind to various query result set events.
     */
    interface N1qlQueryResponse extends events.EventEmitter {

    }

    namespace N1qlQueryResponse {
        /**
         * The meta-information available from a view query response.
         */
        interface Meta {
            /**
             * The identifier for this query request.
             */
            requestID: number;
        }
    }

    /**
     * A class used in relation to transcoders.
     */
    class TranscoderDoc {
        value: Buffer;
        flags: number;
    }

    /**
     * An event emitter allowing you to bind to various query result set events.
     */
    interface ViewQueryResponse extends events.EventEmitter {

    }

    namespace ViewQueryResponse {
        /**
         * The meta-information available from a view query response.
         */
        interface Meta {
            /**
             * The total number of rows available in the index of the view that was queried.
             */
            total_rows: number;
        }
    }
}
