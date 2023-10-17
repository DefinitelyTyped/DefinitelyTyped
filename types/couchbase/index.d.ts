/// <reference types="node"/>

import events = require("events");

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
    restError,
}

/**
 * Virtual base for authenticators.
 */
declare interface Authenticator {
    username: string;
    password: string;
}

/**
 * Authenticator for using classic authentication.
 */
declare class ClassicAuthenticator implements Authenticator {
    /**
     * Create a new instance of the ClassicAuthenticator class.
     * @param buckets Map of bucket names to passwords.
     * @param username Cluster administration username.
     * @param password Cluster administration password.
     */
    constructor(buckets: { [key: string]: string }, username: string, password: string);

    username: string;
    password: string;
}

/**
 * Authenticator for using role-based authentication.
 */
declare class PasswordAuthenticator implements Authenticator {
    /**
     * Create a new instance of the PasswordAuthenticator class.
     * @param username RBAC username.
     * @param password RBAC password.
     */
    constructor(username: string, password: string);

    username: string;
    password: string;
}

/**
 * Authenticator for performing certificate-based authentication.
 */
declare class CertAuthenticator implements Authenticator {
    /**
     * Create a new instance of the CertAuthenticator class.
     */
    constructor();

    username: string;
    password: string;
}

/**
 * Represents a singular cluster containing your buckets.
 */
declare class Cluster {
    /**
     * Authenticate to the cluster using role-based authentication.
     * @param username RBAC username.
     * @param password RBAC password.
     */
    authenticate(username: string, password: string): void;

    /**
     * Authenticate to the cluster using a specific authentication type.
     * @param auther
     */
    authenticate(auther: Authenticator): void;

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
    name?: string | undefined;
    authType?: string | undefined;
    bucketType?: string | undefined;
    ramQuotaMB?: number | undefined;
    replicaNumber?: number | undefined;
}

/**
 * Class for performing management operations against a cluster.
 */
interface ClusterManager {
    /**
     * @param name
     * @param callback
     */
    createBucket(name: string, callback: Function): void;

    /**
     * @param name
     * @param opts
     * @param callback
     */
    createBucket(name: string, opts: any, callback: Function): void;

    /**
     * @param callback
     */
    listBuckets(callback: Function): void;

    /**
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
    code?: errors | undefined;

    /**
     * Possible response body included with the error.
     */
    responseBody?: any;

    /**
     * Possible inner error for this error.
     */
    innerError?: CouchbaseError | undefined;
}

interface AppendOptions {
    /**
     * The CAS value to check. If the item on the server contains a different CAS value, the operation will fail. Note that if this option is undefined, no comparison will be performed.
     */
    cas?: Bucket.CAS | undefined;

    /**
     * Ensures this operation is persisted to this many nodes.
     */
    persist_to?: number | undefined;

    /**
     *     Ensures this operation is replicated to this many nodes.
     */
    replicate_to?: number | undefined;
}

interface PrependOptions extends AppendOptions {}

interface RemoveOptions extends AppendOptions {}

interface ReplaceOptions extends AppendOptions {
    /**
     * Set the initial expiration time for the document. A value of 0 represents never expiring.
     */
    expiry?: number | undefined;
}

interface UpsertOptions extends ReplaceOptions {}

interface TouchOptions {
    /**
     *     Ensures this operation is persisted to this many nodes.
     */
    persist_to?: number | undefined;

    /**
     * Ensures this operation is replicated to this many nodes.
     */
    replicate_to?: number | undefined;
}

interface CounterOptions {
    /**
     * Sets the initial value for the document if it does not exist. Specifying a value of undefined will cause the operation to fail if the document does not exist, otherwise this value must be equal to or greater than 0.
     */
    initial?: number | undefined;

    /**
     * Set the initial expiration time for the document. A value of 0 represents never expiring.
     */
    expiry?: number | undefined;

    /**
     * Ensures this operation is persisted to this many nodes
     */
    persist_to?: number | undefined;

    /**
     * Ensures this operation is replicated to this many nodes
     */
    replicate_to?: number | undefined;
}

interface GetAndLockOptions {
    lockTime?: number | undefined;
}

interface GetReplicaOptions {
    /**
     * The index for which replica you wish to retrieve this value from, or if undefined, use the value from the first server that replies.
     */
    index?: number | undefined;
}

interface InsertOptions {
    /**
     * Set the initial expiration time for the document. A value of 0 represents never expiring.
     */
    expiry?: number | undefined;

    /**
     * Ensures this operation is persisted to this many nodes.
     */
    persist_to?: number | undefined;

    /**
     *     Ensures this operation is replicated to this many nodes.
     */
    replicate_to?: number | undefined;
}

interface CreateIndexOptions {
    /**
     * If a secondary index already exists, an error will be thrown unless this is set to true.
     */
    ignoreIfExists?: boolean | undefined;

    /**
     * True to defer building of the index until buildDeferredIndexes is called (or a direct call to the corresponding query service API).
     */
    deferred?: boolean | undefined;
}

interface CreatePrimaryIndexOptions {
    /**
     * The custom name for the primary index.
     */
    name?: string | undefined;

    /**
     * If a primary index already exists, an error will be thrown unless this is set to true.
     */
    ignoreIfExists?: boolean | undefined;

    /**
     * True to defer building of the index until buildDeferredIndexes is called (or a direct call to the corresponding query service API).
     */
    deferred?: boolean | undefined;
}

interface DropIndexOptions {
    /**
     * If true, attempting to drop on a bucket without the specified index won't cause an error to be thrown.
     */
    ignoreIfNotExists?: boolean | undefined;
}

interface DropPrimaryIndexOptions {
    /**
     * The custom name for the primary index.
     */
    name?: string | undefined;

    /**
     * If true, attempting to drop on a bucket without the specified index won't cause an error to be thrown.
     */
    ignoreIfNotExists?: boolean | undefined;
}

interface CreatePrimaryIndexOptions {
    /**
     * The custom name for the primary index.
     */
    name?: string | undefined;

    /**
     * If a primary index already exists, an error will be thrown unless this is set to true.
     */
    ignoreIfExists?: boolean | undefined;

    /**
     * True to defer building of the index until buildDeferredIndexes is called (or a direct call to the corresponding query service API).
     */
    deferred?: boolean | undefined;
}

interface IndexInfo {
    /**
     * ID for the index.
     */
    id: string;

    /**
     * Name for the index.
     */
    name: string;

    /**
     * List of index keys.
     */
    index_key: string[];

    /**
     * True if this is a primary index.
     */
    is_primary: boolean;

    /**
     * ID for the keyspace to which the index belongs.
     */
    keyspace_id: string;

    /**
     * ID for the namespace to which the index belongs.
     */
    namespace_id: string;

    /**
     * ID for the datastore to which the index belongs.
     */
    store_id: string;

    /**
     * The current state of the index.
     *
     * Values include `online` and `pending`.
     */
    state: string;

    /**
     * The type of view, which will always be `gsi`.
     */
    using: "gsi";
}

interface WatchIndexesOptions {
    /**
     * Timeout for the operation in milliseconds.
     */
    timeout?: number | undefined;
}

/**
 * A class for performing management operations against a bucket. This class should not be instantiated directly, but instead through the use of the Bucket#manager method instead.
 */
interface BucketManager {
    /**
     * Builds any indexes that were previously created with the deferred attribute.
     * @param callback The callback function.
     */
    buildDeferredIndexes(callback: (err: CouchbaseError | null, deferredIndexes: string[]) => void): void;

    /**
     * Creates a non-primary GSI index with an optional name.
     * @param indexName The name of the index.
     * @param fields The JSON fields to index.
     * @param options
     * @param callback The callback function.
     */
    createIndex(indexName: string, fields: string[], callback: (err: CouchbaseError | null) => void): void;

    /**
     * Creates a non-primary GSI index with an optional name.
     * @param indexName The name of the index.
     * @param fields The JSON fields to index.
     * @param options
     * @param callback The callback function.
     */
    createIndex(
        indexName: string,
        fields: string[],
        options: CreateIndexOptions,
        callback: (err: CouchbaseError | null) => void,
    ): void;

    /**
     * Creates a primary GSI index with an optional name.
     * @param options
     * @param callback The callback function.
     */
    createPrimaryIndex(callback: (err: CouchbaseError | null) => void): void;

    /**
     * Creates a primary GSI index with an optional name.
     * @param options
     * @param callback The callback function.
     */
    createPrimaryIndex(options: CreateIndexOptions, callback: (err: CouchbaseError | null) => void): void;

    /**
     * Drops a specific GSI index by name.
     * @param indexName The name of the index.
     * @param options
     * @param callback The callback function.
     */
    dropIndex(indexName: string, callback: (err: CouchbaseError | null) => void): void;

    /**
     * Drops a specific GSI index by name.
     * @param indexName The name of the index.
     * @param options
     * @param callback The callback function.
     */
    dropIndex(indexName: string, options: DropIndexOptions, callback: (err: CouchbaseError | null) => void): void;

    /**
     * Drops a primary GSI index.
     * @param options
     * @param callback The callback function.
     */
    dropPrimaryIndex(callback: (err: CouchbaseError | null) => void): void;

    /**
     * Drops a primary GSI index.
     * @param options
     * @param callback The callback function.
     */
    dropPrimaryIndex(options: DropPrimaryIndexOptions, callback: (err: CouchbaseError | null) => void): void;

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
     * Retrieves a list of the indexes currently configured on the cluster.
     * @param callback The callback function.
     */
    getIndexes(callback: (err: CouchbaseError | null, indexes: IndexInfo[] | null) => void): void;

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

    /**
     * Watches a list of indexes, waiting for them to become available for use.
     * @param watchList List of indexes to watch.
     * @param callback The callback function.
     */
    watchIndexes(watchList: string[], callback: (err: Error | null) => void): void;

    /**
     * Watches a list of indexes, waiting for them to become available for use.
     * @param watchList List of indexes to watch.
     * @param options
     * @param callback The callback function.
     */
    watchIndexes(watchList: string[], options: WatchIndexesOptions, callback: (err: Error | null) => void): void;
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
        STOP,
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
        DESCENDING,
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
        AFTER,
    }
}

/**
 * Class for dynamically construction of N1QL queries. This class should never be constructed directly, instead you should use the N1qlQuery.fromString static method to instantiate a N1qlStringQuery.
 */
declare class N1qlQuery {
    // Private declaration to avoid other queries being misstaken for N1qlQuery
    private __nominal: void;

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
         *     This is the default (for single-statement requests).
         */
        NOT_BOUNDED,

        /**
         * This implements strong consistency per request.
         */
        REQUEST_PLUS,

        /**
         * This implements strong consistency per statement.
         */
        STATEMENT_PLUS,
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
     * @param name     The view to use.
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
         *     Forces the view to be indexed after the results of this query has been fetched.
         */
        AFTER,
    }
}

declare abstract class SearchQuery {
    /**
     * Creates a new search query from an index name and search query definition.
     * @param indexName The FTS index to search in.
     * @param query The body of the FTS query.
     */
    static new(indexName: string, query: SearchQuery.Query): SearchQuery;

    /**
     * Creates a compound BooleanQuery composed of several other query objects.
     */
    static boolean(): SearchQuery.BooleanQuery;

    /**
     * Creates a BooleanFieldQuery for searching boolean fields in an index.
     */
    static booleanField(val: boolean): SearchQuery.BooleanFieldQuery;

    /**
     * Creates a query for matches all of a list of subqueries in an index.
     */
    static conjuncts(queries: ReadonlyArray<SearchQuery.Query>): SearchQuery.ConjunctionQuery;

    /**
     * Creates a query for matches all of a list of subqueries in an index.
     */
    static conjuncts(...queries: SearchQuery.Query[]): SearchQuery.ConjunctionQuery;

    /**
     * Creates a search query for matching date ranges in an index.
     */
    static dateRange(): SearchQuery.DateRangeQuery;

    /**
     * Creates a query for matches any of a list of subqueries in an index.
     */
    static disjuncts(queries: ReadonlyArray<SearchQuery.Query>): SearchQuery.DisjunctionQuery;

    /**
     * Creates a query for matches any of a list of subqueries in an index.
     */
    static disjuncts(...queries: SearchQuery.Query[]): SearchQuery.DisjunctionQuery;

    /**
     * Creates a query which allows you to match a list of document IDs in an index.
     */
    static docIds(ids: ReadonlyArray<string>): SearchQuery.DocIdQuery;

    /**
     * Creates a query which allows you to match a list of document IDs in an index.
     */
    static docIds(...ids: string[]): SearchQuery.DocIdQuery;

    /**
     * Creates a geographical bounding-box based query.
     * @param tl_lat Top-left latitude.
     * @param tl_lon Top-left longitude.
     * @param br_lat Bottom-right latitude.
     * @param br_lon Bottom-right longitude.
     */
    static geoBoundingBoxQuery(
        tl_lat: number,
        tl_lon: number,
        br_lat: number,
        br_lon: number,
    ): SearchQuery.GeoBoundingBoxQuery;

    /**
     * Creates a geographical distance based query.
     */
    static geoDistanceQuery(): SearchQuery.GeoDistanceQuery;

    /**
     * Creates a search query for matching text.
     */
    static match(match: string): SearchQuery.MatchQuery;

    /**
     * Creates a search query which matches anything.
     */
    static matchAll(): SearchQuery.MatchAllQuery;

    /**
     * Creates a search query which matches nothing.
     */
    static matchNone(): SearchQuery.MatchAllQuery;

    /**
     * Creates a search query for matching phrases in an index.
     */
    static matchPhrase(phrase: string): SearchQuery.MatchPhraseQuery;

    /**
     * Creates a search query for matching numeric ranges in an index.
     */
    static numericRange(): SearchQuery.NumericRangeQuery;

    /**
     * Creates a search query for a prefix in an index.
     */
    static phrase(terms: ReadonlyArray<string>): SearchQuery.PhraseQuery;

    /**
     * Creates a search query for a prefix in an index.
     */
    static prefix(prefix: string): SearchQuery.PrefixQuery;
    /**
     * Creates a query for matches any of a list of subqueries in an index.
     */

    /**
     * Creates a search query for matching string.
     */
    static queryString(query: string): SearchQuery.QueryStringQuery;

    /**
     * Creates a search query for matching against a regexp query in an index.
     */
    static regexp(regexp: string): SearchQuery.RegexpQuery;

    /**
     * Creates a search query for searching terms in an index.
     */
    static term(term: string): SearchQuery.TermQuery;

    /**
     * Creates a search query for matching term ranges in the index.
     */
    static termRange(): SearchQuery.TermRangeQuery;

    /**
     * Creates a search query for matching a string with wildcards in an index.
     */
    static wildcard(wildcard: string): SearchQuery.WildcardQuery;

    /**
     * Adds a SearchFacet object to return information about as part of the execution of this query.
     */
    addFacet(name: string, facet: SearchFacet): this;

    /**
     * Specify the consistency level for this query.
     */
    consistency(val: SearchQuery.Consistency): this;

    /**
     * Includes information about the internal search semantics used to execute your query.
     */
    explain(explain: boolean): this;

    /**
     * Specifies the fields you wish to receive in the result set.
     */
    fields(fields: ReadonlyArray<string>): this;

    /**
     * Specifies the fields you wish to receive in the result set.
     */
    fields(...fields: string[]): this;

    /**
     * Request a particular highlight style and field list for this query.
     */
    highlight(style: SearchQuery.HighlightStyle, fields: ReadonlyArray<string>): this;

    /**
     * Request a particular highlight style and field list for this query.
     */
    highlight(style: SearchQuery.HighlightStyle, ...fields: string[]): this;

    /**
     * Specifies the maximum number of results to return.
     * @param limit Maximum number of results to return.
     */
    limit(limit: number): this;

    /**
     * Specifies how many results to skip from the beginning of the result set.
     * @param skip How many results to skip from the beginning of the result set.
     */
    skip(skip: number): this;

    /**
     * Specifies the fields you wish to sort by in your result set.
     */
    sort(fields: ReadonlyArray<string | SearchSort>): this;

    /**
     * Specifies the fields you wish to sort by in your result set.
     */
    sort(...fields: (string | SearchSort)[]): this;

    /**
     * Specifies the maximum time to wait for this query to complete.
     * @param timeout Maximum time to wait (in milliseconds) for this query to complete.
     */
    timeout(timeout: number): this;
}

declare namespace SearchQuery {
    abstract class Query {
    }

    abstract class BooleanQuery extends Query {
        /**
         * Specifies a predicate query which must match.
         * @param query
         */
        must(query: Query): this;

        /**
         * Specifies a predicate query which must not match.
         * @param query
         */
        mustNot(query: Query): this;

        /**
         * Specifies a predicate query which should match.
         * @param query
         */
        should(query: Query): this;

        /**
         * Specifies the minimum score for should predicate matches.
         * @param shouldMin
         */
        shouldMin(shouldMin: number): this;

        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;
    }

    abstract class BooleanFieldQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param boost The field to query.
         */
        field(field: string): this;
    }

    abstract class ConjunctionQuery extends Query {
        /**
         * Specifies additional predicate queries.
         * @param queries Additional predicate queries.
         */
        and(queries: ReadonlyArray<SearchQuery.Query>): this;

        /**
         * Specifies additional predicate queries.
         * @param queries Additional predicate queries.
         */
        and(...queries: SearchQuery.Query[]): this;

        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;
    }

    abstract class DateRangeQuery extends Query {
        /**
         * Defines the lower bound of the date range query.
         * @param start The lower bound of the query.
         * @param inclusive True to set an inclusive bound. Defaults to true.
         */
        start(start: Date | string, inclusive?: boolean): this;

        /**
         * Defines the upper bound of the date range query.
         * @param end The upper bound of the query.
         * @param inclusive True to set an inclusive bound. Defaults to false.
         */
        end(end: Date | string, inclusive?: boolean): this;

        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class DisjunctionQuery extends Query {
        /**
         * Specifies additional predicate queries.
         * @param queries Additional predicate queries.
         */
        or(queries: ReadonlyArray<SearchQuery.Query>): this;

        /**
         * Specifies additional predicate queries.
         * @param queries Additional predicate queries.
         */
        or(...queries: SearchQuery.Query[]): this;

        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;
    }

    abstract class DocIdQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class GeoBoundingBoxQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class GeoDistanceQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class MatchAllQuery extends Query {
    }

    abstract class MatchNoneQuery extends Query {
    }

    abstract class MatchPhraseQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;

        /**
         * Specifies the analyzer to use for the query.
         * @param analyzer Analyzer to use for the query.
         */
        analyzer(analyzer: string): this;
    }

    abstract class MatchQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;

        /**
         * Defines the level of fuzziness for the query.
         * @param fuzziness Level of fuzziness for the query.
         */
        fuzziness(fuzziness: number): this;

        /**
         * Specifies the prefix length to consider for the query.
         * @param prefixLength Prefix length to consider for the query.
         */
        prefixLength(prefixLength: number): this;

        /**
         * Specifies the analyzer to use for the query.
         * @param analyzer Analyzer to use for the query.
         */
        analyzer(analyzer: string): this;
    }

    abstract class NumericRangeQuery extends Query {
        /**
         * Defines the lower bound of the numeric range query.
         * @param min The lower bound of the query.
         * @param inclusive True to set an inclusive bound. Defaults to true.
         */
        min(min: number, inclusive?: boolean): this;

        /**
         * Defines the upper bound of the numeric range query.
         * @param max The upper bound of the query.
         * @param inclusive True to set an inclusive bound. Defaults to false.
         */
        max(max: number, inclusive?: boolean): this;

        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class PhraseQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class PrefixQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class QueryStringQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;
    }

    abstract class RegexpQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class TermQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;

        /**
         * Defines the level of fuzziness for the query.
         * @param fuzziness Level of fuzziness for the query.
         */
        fuzziness(fuzziness: number): this;

        /**
         * Specifies the prefix length to consider for the query.
         * @param prefixLength Prefix length to consider for the query.
         */
        prefixLength(prefixLength: number): this;
    }

    abstract class TermRangeQuery extends Query {
        /**
         * Defines the lower bound of the term range query.
         * @param min The lower bound of the query.
         * @param inclusive True to set an inclusive bound. Defaults to true.
         */
        min(min: string, inclusive?: boolean): this;

        /**
         * Defines the upper bound of the term range query.
         * @param max The upper bound of the query.
         * @param inclusive True to set an inclusive bound. Defaults to false.
         */
        max(max: string, inclusive?: boolean): this;

        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param field The field to query.
         */
        field(field: string): this;
    }

    abstract class WildcardQuery extends Query {
        /**
         * Defines the amount to boost the query.
         * @param boost Amount to boost the query.
         */
        boost(boost: number): this;

        /**
         * Specifies the field to query.
         * @param boost The field to query.
         */
        field(field: string): this;
    }

    /**
     * Enumeration for specifying FTS consistency semantics.
     */
    enum Consistency {
        /**
         * This is the default (for single-statement requests).
         */
        NOT_BOUNDED,
    }

    /**
     * Enumeration for specifying FTS highlight styling.
     */
    enum HighlightStyle {
        /**
         * This causes hits to be highlighted using the default style.
         */
        DEFAULT,

        /**
         * This causes hits to be highlighted using HTML tags.
         */
        HTML,

        /**
         * This causes hits to be highlighted with ANSI character codes.
         */
        ANSI,
    }
}

declare class SearchFacet {
}

declare namespace SearchFacet {
    class TermFacet extends SearchFacet {
    }

    function term(field: string, size: number): TermFacet;

    class NumericFacet extends SearchFacet {
        addRange(name: string, min: number, max: number): this;
    }

    function numeric(field: string, size: number): NumericFacet;

    class DateFacet extends SearchFacet {
        addRange(name: string, start: string, end: string): this;
    }

    function date(field: string, size: number): DateFacet;
}

declare class SearchSort {
    /**
     * Specifies whether to sort descending or not.
     */
    descending(descending: boolean): this;
}

declare namespace SearchSort {
    class ScoreSort extends SearchSort {
    }

    function score(): ScoreSort;

    class IdSort extends SearchSort {
    }

    function id(): IdSort;

    class FieldSort extends SearchSort {
        type(type: string): this;
        mode(mode: string): this;
        missing(missing: string): this;
    }

    function field(field: string): FieldSort;

    class GeoDistanceSort extends SearchSort {
        unit(unit: string): this;
    }

    function geoDistance(field: string, lat: number, lon: number): GeoDistanceSort;
}

/**
 * The Bucket class represents a connection to a Couchbase bucket. Never instantiate this class directly. Instead use the Cluster#openBucket method instead.
 */
interface Bucket extends events.EventEmitter {
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
    append(key: string | Buffer, fragment: any, callback: Bucket.OpCallback): void;

    /**
     * @param key The target document key.
     * @param fragment The document's contents to append.
     * @param options The options object.
     * @param callback The callback function.
     */
    append(key: string | Buffer, fragment: any, options: AppendOptions, callback: Bucket.OpCallback): void;

    /**
     * Increments or decrements a key's numeric value.
     * Note that JavaScript does not support 64-bit integers (while libcouchbase and the server do). You might receive an inaccurate value if the number is greater than 53-bits (JavaScript's maximum integer precision).
     * @param key The target document key.
     * @param delta The amount to add or subtract from the counter value. This value may be any non-zero integer.
     * @param callback The callback function.
     */
    counter(key: string | Buffer, delta: number, callback: Bucket.OpCallback): void;

    /**
     * @param key The target document key.
     * @param delta The amount to add or subtract from the counter value. This value may be any non-zero integer.
     * @param options The options object.
     * @param callback The callback function.
     */
    counter(key: string | Buffer, delta: number, options: CounterOptions, callback: Bucket.OpCallback): void;

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
    get(key: string | Buffer, callback: Bucket.OpCallback): void;

    /**
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     */
    get(key: string | Buffer, options: any, callback: Bucket.OpCallback): void;

    /**
     * Lock the document on the server and retrieve it. When an document is locked, its CAS changes and subsequent operations on the document (without providing the current CAS) will fail until the lock is no longer held.
     * This function behaves identically to Bucket#get in that it will return the value. It differs in that the document is also locked. This ensures that attempts by other client instances to access this document while the lock is held will fail.
     * Once locked, a document can be unlocked either by explicitly calling Bucket#unlock or by performing a storage operation (e.g. Bucket#upsert, Bucket#replace, Bucket::append) with the current CAS value. Note that any other lock operations on this key will fail while a document is locked.
     * @param key The target document key.
     * @param callback The callback function.
     */
    getAndLock(key: string, callback: Bucket.OpCallback): void;

    /**
     * Lock the document on the server and retrieve it. When an document is locked, its CAS changes and subsequent operations on the document (without providing the current CAS) will fail until the lock is no longer held.
     * This function behaves identically to Bucket#get in that it will return the value. It differs in that the document is also locked. This ensures that attempts by other client instances to access this document while the lock is held will fail.
     * Once locked, a document can be unlocked either by explicitly calling Bucket#unlock or by performing a storage operation (e.g. Bucket#upsert, Bucket#replace, Bucket::append) with the current CAS value. Note that any other lock operations on this key will fail while a document is locked.
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     * @returns {}
     */
    getAndLock(key: string, options: GetAndLockOptions, callback: Bucket.OpCallback): void;

    /**
     * Retrieves a document and updates the expiry of the item at the same time.
     * @param key The target document key.
     * @param expiry The expiration time to use. If a value of 0 is provided, then the current expiration time is cleared and the key is set to never expire. Otherwise, the key is updated to expire in the time provided (in seconds).
     * @param options The options object.
     * @param callback The callback function.
     */
    getAndTouch(key: string | Buffer, expiry: number, options: any, callback: Bucket.OpCallback): void;

    /**
     * Retrieves a document and updates the expiry of the item at the same time.
     * @param key The target document key.
     * @param expiry The expiration time to use. If a value of 0 is provided, then the current expiration time is cleared and the key is set to never expire. Otherwise, the key is updated to expire in the time provided (in seconds).
     * @param callback The callback function.
     */
    getAndTouch(key: string | Buffer, expiry: number, callback: Bucket.OpCallback): void;

    /**
     * Retrieves a list of keys
     * @param keys The target document keys.
     * @param callback The callback function.
     */
    getMulti(key: ReadonlyArray<string | Buffer>, callback: Bucket.MultiGetCallback): void;

    /**
     * Get a document from a replica server in your cluster.
     * @param key The target document key.
     * @param callback The callback function.
     */
    getReplica(key: string | Buffer, callback: Bucket.OpCallback): void;

    /**
     * Get a document from a replica server in your cluster.
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     */
    getReplica(key: string | Buffer, options: GetReplicaOptions, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert but will fail if the document already exists.
     * @param key The target document key.
     * @param value The document's contents.
     * @param callback The callback function.
     */
    insert(key: string | Buffer, value: any, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert but will fail if the document already exists.
     * @param key The target document key.
     * @param value The document's contents.
     * @param options The options object.
     * @param callback The callback function.
     */
    insert(key: string | Buffer, value: any, options: InsertOptions, callback: Bucket.OpCallback): void;

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
    prepend(key: string, fragment: any, callback: Bucket.OpCallback): void;

    /**
     * Like Bucket#append, but prepends data to the existing value.
     * @param key The target document key.
     * @param fragment The document's contents to prepend.
     * @param options The options object.
     * @param callback The callback function.
     */
    prepend(key: string, fragment: any, options: PrependOptions, callback: Bucket.OpCallback): void;

    /**
     * Executes a previously prepared query object.
     * @param query The query to execute.
     * @param callback The callback function.
     */
    query(query: ViewQuery | SpatialQuery, callback?: Bucket.QueryCallback): Bucket.ViewQueryResponse;

    /**
     * Executes a previously prepared query object.
     * @param query The query to execute.
     * @param callback The callback function.
     */
    query(query: N1qlQuery, callback?: Bucket.N1qlQueryCallback): Bucket.N1qlQueryResponse;

    /**
     * Executes a previously prepared query object.
     * @param query The query to execute.
     * @param callback The callback function.
     */
    query(query: SearchQuery, callback?: Bucket.FtsQueryCallback): Bucket.FtsQueryResponse;

    /**
     * Executes a previously prepared query object.
     * @param query The query to execute.
     * @param params A list or map to do replacements on a N1QL query.
     * @param callback The callback function.
     */
    query(
        query: N1qlQuery,
        params: { [param: string]: any } | any[],
        callback?: Bucket.N1qlQueryCallback,
    ): Bucket.N1qlQueryResponse;

    /**
     * Deletes a document on the server.
     * @param key The target document key.
     * @param callback The callback function.
     */
    remove(key: string | Buffer, callback: Bucket.OpCallback): void;

    /**
     * Deletes a document on the server.
     * @param key The target document key.
     * @param options The options object.
     * @param callback The callback function.
     */
    remove(key: string | Buffer, options: RemoveOptions, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert, but will only succeed if the document exists already (i.e. the inverse of Bucket#insert).
     * @param key The target document key.
     * @param value The document's contents.
     * @param callback The callback function.
     */
    replace(key: string | Buffer, value: any, callback: Bucket.OpCallback): void;

    /**
     * Identical to Bucket#upsert, but will only succeed if the document exists already (i.e. the inverse of Bucket#insert).
     * @param key The target document key.
     * @param value The document's contents.
     * @param options The options object.
     * @param callback The callback function.
     */
    replace(key: string | Buffer, value: any, options: ReplaceOptions, callback: Bucket.OpCallback): void;

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
    touch(key: string | Buffer, expiry: number, options: TouchOptions, callback: Bucket.OpCallback): void;

    /**
     * Unlock a previously locked document on the server. See the Bucket#lock method for more details on locking.
     * @param key The target document key.
     * @param cas The CAS value returned when the key was locked. This operation will fail if the CAS value provided does not match that which was the result of the original lock operation.
     * @param callback The callback function.
     */
    unlock(key: string | Buffer, cas: Bucket.CAS, callback: Bucket.OpCallback): void;

    /**
     * Unlock a previously locked document on the server. See the Bucket#lock method for more details on locking.
     * @param key The target document key.
     * @param cas The CAS value returned when the key was locked. This operation will fail if the CAS value provided does not match that which was the result of the original lock operation.
     * @param options The options object.
     * @param callback The callback function.
     */
    unlock(key: string | Buffer, cas: Bucket.CAS, options: any, callback: Bucket.OpCallback): void;

    /**
     * Stores a document to the bucket.
     * @param key The target document key.
     * @param value The document's contents.
     * @param callback The callback function.
     */
    upsert(key: string | Buffer, value: any, callback: Bucket.OpCallback): void;

    /**
     * Stores a document to the bucket.
     * @param key The target document key.
     * @param value The document's contents.
     * @param options The options object.
     * @param callback The callback function.
     */
    upsert(key: string | Buffer, value: any, options: UpsertOptions, callback: Bucket.OpCallback): void;

    addListener(event: "connect", listener: () => void): this;
    addListener(event: "error", listener: (error: CouchbaseError) => void): this;

    on(event: "connect", listener: () => void): this;
    on(event: "error", listener: (error: CouchbaseError) => void): this;

    once(event: "connect", listener: () => void): this;
    once(event: "error", listener: (error: CouchbaseError) => void): this;

    prependListener(event: "connect", listener: () => void): this;
    prependListener(event: "error", listener: (error: CouchbaseError) => void): this;

    prependOnceListener(event: "connect", listener: () => void): this;
    prependOnceListener(event: "error", listener: (error: CouchbaseError) => void): this;
}

declare namespace Bucket {
    /**
     * This is used as a callback from executed queries. It is a shortcut method that automatically subscribes to the rows and error events of the Bucket.ViewQueryResponse.
     */
    interface QueryCallback {
        /**
         * @param error The error for the operation. This can either be an Error object or a falsy value.
         * @param rows The rows returned from the query.
         * @param meta The metadata returned by the query.
         */
        (error: CouchbaseError | null, rows: any[] | null, meta: Bucket.ViewQueryResponse.Meta): void;
    }

    /**
     * This is used as a callback from executed queries. It is a shortcut method that automatically subscribes to the rows and error events of the Bucket.ViewQueryResponse.
     */
    interface N1qlQueryCallback {
        /**
         * @param error The error for the operation. This can either be an Error object or a falsy value.
         * @param rows The rows returned from the query.
         * @param meta The metadata returned by the query.
         */
        (error: CouchbaseError | null, rows: any[] | null, meta: Bucket.N1qlQueryResponse.Meta): void;
    }

    /**
     * This is used as a callback from executed queries. It is a shortcut method that automatically subscribes to the rows and error events of the Bucket.ViewQueryResponse.
     */
    interface FtsQueryCallback {
        /**
         * @param error The error for the operation. This can either be an Error object or a falsy value.
         * @param rows The rows returned from the query.
         * @param meta The metadata returned by the query.
         */
        (error: CouchbaseError | null, rows: any[] | null, meta: Bucket.FtsQueryResponse.Meta): void;
    }

    /**
     * Single-Key callbacks.
     * This callback is passed to all of the single key functions.
     * It returns a result objcet containing a combination of a CAS and a value, depending on which operation was invoked.
     */
    interface OpCallback {
        /**
         * @param error The error for the operation. This can either be an Error object or a value which evaluates to false.
         * @param result The result of the operation that was executed. This usually contains at least a cas property, and on some operations will contain a value property as well.
         */
        (error: CouchbaseError | null, result: any): void;
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
         * @param doc The data from Couchbase to decode.
         */
        (doc: Bucket.TranscoderDoc): any;
    }

    /**
     * The CAS value is a special object that indicates the current state of the item on the server. Each time an object is mutated on the server, the value is changed. CAS objects can be used in conjunction with mutation operations to ensure that the value on the server matches the local value retrieved by the client. This is useful when doing document updates on the server as you can ensure no changes were applied by other clients while you were in the process of mutating the document locally.
     * In the Node.js SDK, the CAS is represented as an opaque value. As such, you cannot generate CAS objects, but should rather use the values returned from a Bucket.OpCallback.
     */
    interface CAS {
    }

    /**
     * An event emitter allowing you to bind to various query result set events.
     */
    interface N1qlQueryResponse extends events.EventEmitter {
        addListener(event: "end", listener: (meta: N1qlQueryResponse.Meta) => void): this;
        addListener(event: "error", listener: (error: CouchbaseError) => void): this;
        addListener(event: "row", listener: (row: any, meta: N1qlQueryResponse.Meta) => void): this;
        addListener(event: "rows", listener: (rows: any[], meta: N1qlQueryResponse.Meta) => void): this;

        on(event: "end", listener: (meta: N1qlQueryResponse.Meta) => void): this;
        on(event: "error", listener: (error: CouchbaseError) => void): this;
        on(event: "row", listener: (row: any, meta: N1qlQueryResponse.Meta) => void): this;
        on(event: "rows", listener: (rows: any[], meta: N1qlQueryResponse.Meta) => void): this;

        once(event: "end", listener: (meta: N1qlQueryResponse.Meta) => void): this;
        once(event: "error", listener: (error: CouchbaseError) => void): this;
        once(event: "row", listener: (row: any, meta: N1qlQueryResponse.Meta) => void): this;
        once(event: "rows", listener: (rows: any[], meta: N1qlQueryResponse.Meta) => void): this;

        prependListener(event: "end", listener: (meta: N1qlQueryResponse.Meta) => void): this;
        prependListener(event: "error", listener: (error: CouchbaseError) => void): this;
        prependListener(event: "row", listener: (row: any, meta: N1qlQueryResponse.Meta) => void): this;
        prependListener(event: "rows", listener: (rows: any[], meta: N1qlQueryResponse.Meta) => void): this;

        prependOnceListener(event: "end", listener: (meta: N1qlQueryResponse.Meta) => void): this;
        prependOnceListener(event: "error", listener: (error: CouchbaseError) => void): this;
        prependOnceListener(event: "row", listener: (row: any, meta: N1qlQueryResponse.Meta) => void): this;
        prependOnceListener(event: "rows", listener: (rows: any[], meta: N1qlQueryResponse.Meta) => void): this;
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
        addListener(event: "end", listener: (meta: ViewQueryResponse.Meta) => void): this;
        addListener(event: "error", listener: (error: CouchbaseError) => void): this;
        addListener(event: "row", listener: (row: any, meta: ViewQueryResponse.Meta) => void): this;
        addListener(event: "rows", listener: (rows: any[], meta: ViewQueryResponse.Meta) => void): this;

        on(event: "end", listener: (meta: ViewQueryResponse.Meta) => void): this;
        on(event: "error", listener: (error: CouchbaseError) => void): this;
        on(event: "row", listener: (row: any, meta: ViewQueryResponse.Meta) => void): this;
        on(event: "rows", listener: (rows: any[], meta: ViewQueryResponse.Meta) => void): this;

        once(event: "end", listener: (meta: ViewQueryResponse.Meta) => void): this;
        once(event: "error", listener: (error: CouchbaseError) => void): this;
        once(event: "row", listener: (row: any, meta: ViewQueryResponse.Meta) => void): this;
        once(event: "rows", listener: (rows: any[], meta: ViewQueryResponse.Meta) => void): this;

        prependListener(event: "end", listener: (meta: ViewQueryResponse.Meta) => void): this;
        prependListener(event: "error", listener: (error: CouchbaseError) => void): this;
        prependListener(event: "row", listener: (row: any, meta: ViewQueryResponse.Meta) => void): this;
        prependListener(event: "rows", listener: (rows: any[], meta: ViewQueryResponse.Meta) => void): this;

        prependOnceListener(event: "end", listener: (meta: ViewQueryResponse.Meta) => void): this;
        prependOnceListener(event: "error", listener: (error: CouchbaseError) => void): this;
        prependOnceListener(event: "row", listener: (row: any, meta: ViewQueryResponse.Meta) => void): this;
        prependOnceListener(event: "rows", listener: (rows: any[], meta: ViewQueryResponse.Meta) => void): this;
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

    /**
     * An event emitter allowing you to bind to various query result set events.
     */
    interface FtsQueryResponse extends events.EventEmitter {
        addListener(event: "end", listener: (meta: FtsQueryResponse.Meta) => void): this;
        addListener(event: "error", listener: (error: CouchbaseError) => void): this;
        addListener(event: "row", listener: (row: any, meta: FtsQueryResponse.Meta) => void): this;
        addListener(event: "rows", listener: (rows: any[], meta: FtsQueryResponse.Meta) => void): this;

        on(event: "end", listener: (meta: FtsQueryResponse.Meta) => void): this;
        on(event: "error", listener: (error: CouchbaseError) => void): this;
        on(event: "row", listener: (row: any, meta: FtsQueryResponse.Meta) => void): this;
        on(event: "rows", listener: (rows: any[], meta: FtsQueryResponse.Meta) => void): this;

        once(event: "end", listener: (meta: FtsQueryResponse.Meta) => void): this;
        once(event: "error", listener: (error: CouchbaseError) => void): this;
        once(event: "row", listener: (row: any, meta: FtsQueryResponse.Meta) => void): this;
        once(event: "rows", listener: (rows: any[], meta: FtsQueryResponse.Meta) => void): this;

        prependListener(event: "end", listener: (meta: FtsQueryResponse.Meta) => void): this;
        prependListener(event: "error", listener: (error: CouchbaseError) => void): this;
        prependListener(event: "row", listener: (row: any, meta: FtsQueryResponse.Meta) => void): this;
        prependListener(event: "rows", listener: (rows: any[], meta: FtsQueryResponse.Meta) => void): this;

        prependOnceListener(event: "end", listener: (meta: FtsQueryResponse.Meta) => void): this;
        prependOnceListener(event: "error", listener: (error: CouchbaseError) => void): this;
        prependOnceListener(event: "row", listener: (row: any, meta: FtsQueryResponse.Meta) => void): this;
        prependOnceListener(event: "rows", listener: (rows: any[], meta: FtsQueryResponse.Meta) => void): this;
    }

    namespace FtsQueryResponse {
        /**
         * The meta-information available from a search query response.
         */
        interface Meta {
            /**
             * The status information for this query, includes properties
             * such as total, failed, and successful.
             */
            status: any;

            /**
             * Any non-fatal errors that occurred during query processing.
             */
            errors: any;

            /**
             * The total number of hits that were available for this search query.
             */
            totalHits: number;

            /**
             * The resulting facet information for any facets that were specified
             * in the search query.
             */
            facets: any;

            /**
             * The time spent processing this query.
             */
            took: number;

            /**
             * The maximum score out of all the results in this query.
             */
            maxScore: number;
        }
    }
}
