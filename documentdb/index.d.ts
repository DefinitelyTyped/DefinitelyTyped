// Type definitions for DocumentDB
// Project: https://github.com/Azure/azure-documentdb-node
// Definitions by: Noel Abrahams <https://github.com/NoelAbrahams>, Brett Gutstein <https://github.com/brettferdosi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/documentdb



/** The feed options and query methods.*/
interface FeedOptions {

    /** Max number of items to be returned in the enumeration operation. */
    maxItemCount?: number;

    /** Opaque token for continuing the enumeration. */
    continuation?: string;

    /** Token for use with Session consistency. */
    sessionToken?: string;
}

/** Options that can be specified for a request issued to the DocumentDB servers. */
interface RequestOptions {

    /** Indicates what is the pre trigger to be invoked before the operation. */
    preTriggerInclude?: string;

    /** Indicates what is the post trigger to be invoked after the operation. */
    postTriggerInclude?: string;

    /** Conditions Associated with the request. */
    accessCondition?: {

        /** Conditional HTTP method header type.*/
        type: string;

        /** Conditional HTTP method header value.*/
        condition: string
    };

    /** Specifies indexing directives (index, do not index ..etc).*/
    indexingDirective?: string;

    /** Consistency level required by the client. */
    consistencyLevel?: string;

    /** Token for use with Session consistency.*/
    sessionToken?: string;

    /** Expiry time (in seconds) for resource token associated with permission (applicable only for requests on permissions).*/
    resourceTokenExpirySeconds?: number;

    /** Disables the automatic id generation. If id is missing in the body and this option is true, an error will be returned. */
    disableAutomaticIdGeneration?: boolean;
}

/** The Sql query parameter. */
interface SqlParameter {
    /** The name of the parameter. */
    name: string;

    /** The value of the parameter. */
    value: any;
}

/** The Sql query specification. */
interface SqlQuerySpec {
    /** The body of the query. */
    query: string;

    /** The array of SqlParameters. */
    parameters: SqlParameter[];
}

/** Represents the error object returned from a failed query. */
interface QueryError {

    /** The response code corresponding to the error. */
    code: number;

    /** A string representing the error information. */
    body: string; // { code: string; message: string; };
}

/**
* The callback to execute after the request execution.
* @param error            -       Will contain error information if an error occurs, undefined otherwise.
* @param resource         -       An object that represents the requested resource (Db, collection, document ... etc) if no error happens.
* @param responseHeaders  -       An object that contain the response headers.
*/
interface RequestCallback<TResult> {
    (error: QueryError, resource: TResult, responseHeaders: any): void;
}

/** Represents the result returned from a query. */
interface QueryIterator<TResultRow> {
    current(): TResultRow;
    executeNext(callback: (error: QueryError, result: TResultRow[], responseHeaders? : any) => void): void;
    forEach(iteratorFunction : (error: QueryError, element: TResultRow, responseHeaders? : any) => void): void;
    hasMoreResults(): boolean;
    nextItem(callback: (error: QueryError, item: TResultRow, responseHeaders? : any) => void): void;
    reset(): void;
    toArray(callback: (error: QueryError, result: TResultRow[], responseHeaders? : any) => void): void
}

/** Reprents an object with a unique identifier. */
interface UniqueId {

    /** The user-defined unique identifier for a document or other DocumentDB object (database, collection, procedure...) */
    id: string;
}

/** Represents the common meta data for all DocumentDB objects. */
interface AbstractMeta extends UniqueId {

    /** The self link.*/
    _self: string;

    /** The time the object was created.*/
    _ts: string;

    _rid?: string;
    _etag?: string;

    _attachments?: string;
}

/** Represents a custom document for storing in DocumentDB  */
interface NewDocument<TContent> extends UniqueId {

    /** A custom property for containing the actual JSON object representing the document. 
      * Define a custom property in order to disambiguate the JSON document from the metadata added by Azure.
      * This property is optional and the name is application-specific.
      */
    // doc: TContent;
}

/** Represents a document retrieved from storage. 
  * This differs from a new document by the properties in AbstractMeta, which are added by the system.
  */
interface RetrievedDocument<TContent> extends NewDocument<TContent>, AbstractMeta {

}

/** Represents the meta data for a database. */
interface DatabaseMeta extends AbstractMeta {
}

/** Represents the meta data for a collection. */
interface CollectionMeta extends AbstractMeta {
}

/** Represents the meta data for a stored procedure. */
interface ProcedureMeta extends AbstractMeta {
    body: string;
}

/** Represents the meta data for a user-defined function. */
interface UserDefinedFunctionMeta extends AbstractMeta {
}

/** Represents the meta data for a trigger. */
interface TriggerMeta extends AbstractMeta {
    body: string;
    triggerType: string;
    triggerOperation: string;
}

/** An object that is used for authenticating requests and must contains one of the options. */
export interface AuthOptions {

    /** The authorization master key to use to create the client. */
    masterKey?: string;

    /** An object that contains resources tokens. Keys for the object are resource Ids and values are the resource tokens.*/
    resourceTokens?: any;

    /** An array of {@link Permission} objects. */
    permissionFeed?: any[];
}

/** Represents a DocumentDB stored procecedure. */
export interface Procedure extends UniqueId {

    /** The function representing the stored procedure. */
    body(...params: any[]): void;
}

/** Represents a DocumentDB user-defined function. */
export interface UserDefinedFunction extends UniqueId {

    /** The function representing the user-defined function. */
    body(...params: any[]): void;
}

/** Represents a DocumentDB trigger. */
export interface Trigger extends UniqueId {
    /** The type of the trigger. Should be either 'pre' or 'post'. */
    triggerType: string;

    /** The trigger operation. Should be one of 'all', 'create', 'update', 'delete', or 'replace'. */
    triggerOperation: string;

    /** The function representing the trigger. */
    body(...params: any[]): void;
}

/** Represents DocumentDB collection. */
export interface Collection extends UniqueId {

    indexingPolicy?: IndexingPolicy;
}

/** The Indexing Path
* <p> Indexing paths hints to optimize indexing. <br>
*     Indexing paths allow tradeoff between indexing storage and query performance
* </p>
*/
interface IndexingPath {

    /** The indexing type(range or hash) {@link IndexType}.*/
    IndexType: string;

    /** Path to be indexed.*/
    Path: string;

    /** Precision for this particular Index type for numeric data. */
    NumericPrecision: number;

    /** Precision for this particular Index type for string data. */
    StringPrecision: number;
}

/**  The Indexing Policy represents the indexing policy configuration for a collection. */
interface IndexingPolicy {

    /** Specifies whether automatic indexing is enabled for a collection.
        <p>In automatic indexing, documents can be explicitly excluded from indexing using {@link RequestOptions}.
         In manual indexing, documents can be explicitly included. </p> */
    automatic: boolean;

    /** The indexing mode (consistent or lazy) {@link IndexingMode}. */
    indexingMode: string;

    /** An array of {@link IndexingPath} represents The paths to be incuded for indexing. */
    IncludedPaths: IndexingPath[];

    /** An array of strings representing the paths to be excluded from indexing. */
    ExcludedPaths: string[];
}

/** Provides a client-side logical representation of the Azure DocumentDB database account. This client is used to configure and execute requests against the service.
  */
export declare class DocumentClient {
    /**
     * Constructs a DocumentClient.
     * @param urlConnection           - The service endpoint to use to create the client.
     * @param auth                    - An object that is used for authenticating requests and must contains one of the options.
     * @param [connectionPolicy]      - An instance of {@link ConnectionPolicy} class. This parameter is optional and the default connectionPolicy will be used if omitted.
     * @param [consistencyLevel]      - An optional parameter that represents the consistency level. It can take any value from {@link ConsistencyLevel}.
    */
    constructor(urlConnection: string, auth: AuthOptions, connectionPolicy?: any, consistencyLevel?: string);

    /** Send a request for creating a database. 
     * <p>
     *  A database manages users, permissions and a set of collections.  <br>
     *  Each Azure DocumentDB Database Account is able to support multiple independent named databases, with the database being the logical container for data. <br>
     *  Each Database consists of one or more collections, each of which in turn contain one or more documents. Since databases are an an administrative resource, the Service Master Key will be required in order to access and successfully complete any action using the User APIs. <br>
     * </p>
     * @param body      - A json object that represents The database to be created.
     * @param [options] - The request options.
     * @param callback  - The callback for the request.
    */
    public createDatabase(body: UniqueId, options: RequestOptions, callback: RequestCallback<DatabaseMeta>): void;

    /**
     * Creates a collection.
     * <p>
     * A collection is a named logical container for documents. <br>
     * A database may contain zero or more named collections and each collection consists of zero or more JSON documents. <br>
     * Being schema-free, the documents in a collection do not need to share the same structure or fields. <br>
     * Since collections are application resources, they can be authorized using either the master key or resource keys. <br>
     * </p>
     * @param databaseLink  - The self-link of the database.
     * @param body          - Represents the body of the collection.
     * @param [options]     - The request options.
     * @param callback      - The callback for the request.
     */
    public createCollection(databaseLink: string, body: Collection, options: RequestOptions, callback: RequestCallback<CollectionMeta>): void;

    /**
     * Create a StoredProcedure.
     * <p>
     * DocumentDB allows stored procedures to be executed in the storage tier, directly against a document collection. The script <br>
     * gets executed under ACID transactions on the primary storage partition of the specified collection. For additional details, <br>
     * refer to the server-side JavaScript API documentation. 
     * </p>
     * @param collectionLink    - The self-link of the collection.
     * @param procedure         - Represents the body of the stored procedure.
     * @param [options]         - The request options.
     * @param callback          - The callback for the request.
     */
    public createStoredProcedure(collectionLink: string, procedure: Procedure, options: RequestOptions, callback: RequestCallback<ProcedureMeta>): void;

    /**
     * Create a UserDefinedFunction.
     * <p>
     * DocumentDB supports JavaScript UDFs which can be used inside queries, stored procedures and triggers. <br>
     * For additional details, refer to the server-side JavaScript API documentation.
     * </p>
     * @param collectionLink    - The self-link of the collection.
     * @param udf               - Represents the body of the userDefinedFunction.
     * @param [options]         - The request options.
     * @param callback          - The callback for the request.
     */
    public createUserDefinedFunction(collectionLink: string, udf: UserDefinedFunction, options: RequestOptions, callback: RequestCallback<UserDefinedFunctionMeta>): void;

    /**
     * Create a trigger.
     * <p>
     * DocumentDB supports pre and post triggers defined in JavaScript to be executed on creates, updates and deletes. <br>
     * For additional details, refer to the server-side JavaScript API documentation.
     * </p>
     * @param collectionLink  - The self-link of the collection.
     * @param trigger         - Represents the body of the trigger.
     * @param [options]       - The request options.
     * @param callback        - The callback for the request.
     */
    public createTrigger(collectionLink: string, trigger: Trigger, options: RequestOptions, callback: RequestCallback<TriggerMeta>): void;

    /**
     * Create a document.
     * <p> 
     * There is no set schema for JSON documents. They may contain any number of custom properties as well as an optional list of attachments. <br>
     * A Document is an application resource and can be authorized using the master key or resource keys
     * </p>
     * @param collectionLink    - The self-link of the collection.
     * @param document          - Represents the body of the document. Can contain any number of user defined properties.
     * @param [options]         - The request options.
     * @param callback 			- The callback for the request.
     */
    public createDocument<TDocument>(collectionSelfLink: string, document: NewDocument<TDocument>, options: RequestOptions, callback: RequestCallback<RetrievedDocument<TDocument>>): void;

    /**
     * Execute the StoredProcedure represented by the object.
     * @param procedureLink - The self-link of the stored procedure.
     * @param [params]      - Represents the parameters of the stored procedure.
     * @param callback      - The callback for the request.
     */
    public executeStoredProcedure<TDocument>(procedureLink: string, params: any[], callback: RequestCallback<TDocument>): void;

    /** Lists all databases that satisfy a query. 
     * @param query     - A SQL query string.
     * @param [options] - The feed options.
     * @returns         - An instance of QueryIterator to handle reading feed.
     */
    public queryDatabases(query: string | SqlQuerySpec): QueryIterator<DatabaseMeta>;

    /**
     * Query the collections for the database.
     * @param databaseLink  - The self-link of the database.
     * @param query         - A SQL query string.
     * @param [options]     - Represents the feed options.
     * @returns             - An instance of queryIterator to handle reading feed.
     */
    public queryCollections(databaseLink: string, query: string | SqlQuerySpec): QueryIterator<CollectionMeta>;

    /**
     * Query the storedProcedures for the collection.
     * @param collectionLink    - The self-link of the collection.
     * @param query             - A SQL query string.
     * @param [options]         - Represents the feed options.
     * @returns                 - An instance of queryIterator to handle reading feed.
     */
    public queryStoredProcedures(collectionLink: string, query: string | SqlQuerySpec): QueryIterator<ProcedureMeta>;

    /**
     * Query the user-defined functions for the collection.
     * @param collectionLink    - The self-link of the collection.
     * @param query             - A SQL query string.
     * @param [options]         - Represents the feed options.
     * @returns                 - An instance of queryIterator to handle reading feed.
     */
    public queryUserDefinedFunctions(collectionLink: string, query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<UserDefinedFunctionMeta>;

    /**
    * Query the documents for the collection.
    * @param collectionLink - The self-link of the collection.
    * @param query          - A SQL query string.
    * @param [options]      - Represents the feed options.
    * @returns              - An instance of queryIterator to handle reading feed.
    */
    public queryDocuments<TDocument>(collectionLink: string, query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<RetrievedDocument<TDocument>>;

    /**
     * Query the triggers for the collection.
     * @param {string} collectionLink         - The self-link of the collection.
     * @param {SqlQuerySpec | string} query   - A SQL query.
     * @param {FeedOptions} [options]         - Represents the feed options.
     * @returns {QueryIterator}               - An instance of queryIterator to handle reading feed.
     */
    public queryTriggers(collectionLink: string, query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<TriggerMeta>;

    /**
     * Delete the document object.
     * @param documentLink  - The self-link of the document.
     * @param [options]     - The request options.
     * @param callback      - The callback for the request. 
    */
    public deleteDocument(documentLink: string, options: RequestOptions, callback: RequestCallback<void>): void;

    /**
     * Delete the database object.
     * @param databaseLink  - The self-link of the database.
     * @param [options]     - The request options.
     * @param callback      - The callback for the request. 
    */
    public deleteDatabase(databaseLink: string, options: RequestOptions, callback: RequestCallback<void>): void;

    /**
     * Delete the collection object.
     * @param collectionLink    - The self-link of the collection.
     * @param [options]         - The request options.
     * @param callback          - The callback for the request. 
    */
    public deleteCollection(collectionLink: string, options: RequestOptions, callback: RequestCallback<void>): void;

    /**
     * Delete the StoredProcedure object.
     * @param procedureLink - The self-link of the stored procedure.
     * @param [options]     - The request options.
     * @param callback      - The callback for the request.
    */
    public deleteStoredProcedure(procedureLink: string, options: RequestOptions, callback: RequestCallback<void>): void;

    /**
     * Replace the document object.
     * @param {string} documentLink      - The self-link of the document.
     * @param {object} document          - Represent the new document body.
     * @param {RequestOptions} [options] - The request options.
     * @param {RequestCallback} callback - The callback for the request.
     */
    public replaceDocument<TDocument>(documentLink: string, document: NewDocument<TDocument>, options: RequestOptions, callback: RequestCallback<RetrievedDocument<TDocument>>): void;

    /**
     * Replace the StoredProcedure object.
     * @param procedureLink - The self-link of the stored procedure.
     * @param procedure     - Represent the new procedure body.
     * @param [options]     - The request options.
     * @param callback      - The callback for the request.
     */
    public replaceStoredProcedure(procedureLink: string, procedure: Procedure, options: RequestOptions, callback: RequestCallback<ProcedureMeta>): void;
}
