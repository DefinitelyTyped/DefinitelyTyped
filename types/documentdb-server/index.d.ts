// Type definitions for DocumentDB server side JavaScript SDK
// Project: http://dl.windowsazure.com/documentDB/jsserverdocs
// Definitions by: François Nguyen <https://github.com/lith-light-g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** The Context object provides access to all operations that can be performed on DocumentDB data, as well as access to the request and response objects. */
interface IContext {
    /** Gets the collection object. */
    getCollection(): ICollection;
    /** Gets the request object. */
    getRequest(): IRequest;
    /**
     * Gets the response object.
     * Note: this is not available in pre-triggers.
     */
    getResponse(): IResponse;
}

/**
 * The __ object can be used as a shortcut to the Collection and Context objects.
 * It derives from the ICollection object via prototype and defines request and response properties
 * which are shortcuts to getContext().getRequest() and getContext().getResponse().
 */
interface I__Object extends ICollection {
    /** Alias for getContext().getRequest() */
    request: IRequest;
    /** Alias for getContext().getResponse() */
    response: IResponse;
}

interface IQueryAPI {
    /**
     * Execute a filter on the input stream of documents, resulting in a subset of the input stream that matches the given filter.
     * When filter is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
     * @param predicate The predicate function for a filter query, which acts as a truth test of whether a document should be filtered or not.
     * @param options Optional query options. Should not be used in a chained call.
     * @param callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
     */
    filter(predicate: (document: Object) => boolean,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    filter<T>(predicate: (document: Object) => boolean,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    /**
     * Produce a new set of documents by mapping/projecting the properties of the documents in the input document stream through the given mapping predicate.
     * When map is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
     * @param predicate The predicate function for a map/projection, which maps the input document's properties into a new document object.
     * @param options Optional query options. Should not be used in a chained call.
     * @param callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
     */
    map(predicate: (document: Object) => Object,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    map<T>(predicate: (document: Object) => Object,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    /**
     * Produce a new set of documents by extracting a single property from each document in the input document stream. This is equivalent to a map call that projects only propertyName.
     * When pluck is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
     * @param propertyName Name of the property to pluck from all documents in the current collection
     * @param options Optional query options. Should not be used in a chained call.
     * @param callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
     */
    pluck(propertyName: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    pluck<T>(propertyName: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    /**
     * Flatten nested arrays from each document in the input document stream.
     * When flatten is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
     * @param isShallow If true, flattens only the first level of nested arrays (false by default)
     * @param options Optional query options. Should not be used in a chained call.
     * @param callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
     */
    flatten(isShallow?: boolean,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    flatten<T>(isShallow?: boolean,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    /**
     * Produce a new set of documents by sorting the documents in the input document stream in ascending order using the given predicate.
     * When sortBy is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
     * @param predicate Predicate function defining the property to sort by.
     * @param options Optional query options. Should not be used in a chained call.
     * @param Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
     */
    sortBy(predicate: (document: Object) => string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    sortBy(predicate: (document: Object) => number,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    sortBy<T>(predicate: (document: Object) => string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    sortBy<T>(predicate: (document: Object) => number,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    /**
     * Produce a new set of documents by sorting the documents in the input document stream in descending order using the given predicate.
     * When sortByDescending is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
     * @param predicate Predicate function defining the property to sort by.
     * @param options Optional query options. Should not be used in a chained call.
     * @param callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
     */
    sortByDescending(predicate: (document: Object) => string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    sortByDescending(predicate: (document: Object) => number,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    sortByDescending<T>(predicate: (document: Object) => string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    sortByDescending<T>(predicate: (document: Object) => number,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
    /**
     * Terminating call for a chained query. Should be used in conjunction with the opening chain call to perform chained queries.
     * When value is called, the query is queued for execution with the given options and callback.
     * @param options Optional query options for the entire chained call.
     * @param callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body.
     */
    value(options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): IQueryResponse;
    value<T>(options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): IQueryResponse;
}
	
/**
 * Stored procedures and triggers are registered for a particular collection. The Collection object supports create, read, update and delete (CRUD) and query operations on documents and attachments in the current collection.
 * All collection operations are completed asynchronously. You can provide a callback to handle the result of the operation, and to perform error handling if necessary.
 * Stored procedures and triggers are executed in a time-limited manner. Long-running stored procedures and triggers are defensively timed out and all transactions performed are rolled back.
 * We stop queuing collection operations if the stored procedure is close to timing out. You can inspect the boolean return value of all collection operations to see if an operation was not queued and handle this situation gracefully.
 */
interface ICollection extends IQueryAPI {		
    /** Opening call to start a chained query. Should be used in conjunction with the closing value call to perform chained queries. */
    chain(): IQueryResponse;

    /**
     * Create an attachment for the document.
     * @param documentLink resource link of the collection under which the document will be created
     * @param body metadata that defines the attachment media like media, contentType. It can include any other properties as part of the metedata.
     * @param options optional create options
     * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
     */
    createAttachment(documentLink: string,
        body: IAttachment,
        options?: ICreateOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
			
	/**
	 * Create a document under the collection.
	 * @param collectionLink resource link of the collection under which the document will be created
	 * @param body of the document. The "id" property is required and will be generated automatically if not provided (this behaviour can be overriden using the CreateOptions). Any other properties can be added.
	 * @param optional create options
	 * @param optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    createDocument(collectionLink: string,
        body: Object,
        options?: ICreateOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
		
	/**
	 * Delete an attachment.
	 * @param attachmentLink resource link of the attachment to be deleted
	 * @param options optional delete options.
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    deleteAttachment(attachmentLink: string,
        options?: IDeleteOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
		
	/**
	 * Delete a document.
	 * @param documentLink resource link of the document to delete
	 * @param options optional delete options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    deleteDocument(documentLink: string,
        options?: IDeleteOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
		
    /** Get alt link (name-based link) of current collection. */
    getAltLink(): string;

    /** Get self link of current collection. */
    getSelfLink(): string;
		
	/**
	 * Execute a SQL query on the attachments for the document.
	 * @param documentLink resource link of the document whose attachments are being queried
	 * @param query SQL query string. This can also be a JSON object to pass in a parameterized query along with the values.
	 * @param options optional query options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    queryAttachments(documentLink: string,
        query: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): boolean;
    queryAttachments(documentLink: string,
        query: IParameterizedQuery,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): boolean;
		
	/**
	 * Execute a SQL query on the documents of the collection.
	 * @param collectionLink resource link of the collection whose documents are being queried
	 * @param filterQuery SQL query string. This can also be a JSON object to pass in a parameterized query along with the values.
	 * @param options optional query options.
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    queryDocuments(collectionLink: string,
        filterQuery: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): boolean;
    queryDocuments<T>(collectionLink: string,
        filterQuery: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): boolean;
    queryDocuments(collectionLink: string,
        filterQuery: IParameterizedQuery,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): boolean;
    queryDocuments<T>(collectionLink: string,
        filterQuery: IParameterizedQuery,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): boolean;
			
	/**
	 * Read an Attachment.
	 * @param attachmenLink resource link of the attachment to read
	 * @param options optional read options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    readAttachment(attachmenLink: string,
        options?: IReadOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
			
	/**
	 * Get all attachments for the document.
	 * @param documentLink resource link of the document whose attachments are being read
	 * @param options optional read feed options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    readAttachments(documentLink: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): boolean;
		
	/**
	 * Read a document.
	 * @param documentLink resource link of the document to read
	 * @param options optional read options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    readDocument(documentLink: string,
        options?: IReadOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
    readDocument<T>(documentLink: string,
        options?: IReadOptions,
        callback?: (error: IRequestCallbackError, resources: T, options: IRequestCallbackOptions) => void): boolean;
		
	/**
	 * Get all documents for the collection.
	 * @param collectionLink resource link of the collection whose documents are being read
	 * @param options optional read feed options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    readDocuments(collectionLink: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions) => void): boolean;
    readDocuments<T>(collectionLink: string,
        options?: IFeedOptions,
        callback?: (error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions) => void): boolean;
			
	/**
	 * Replace an attachment.
	 * @param attachmentLink resource link of the attachment to be replaced
	 * @param attachment new attachment body
	 * @param options optional replace options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    replaceAttachment(attachmentLink: string,
        attachment: Object,
        options?: IReplaceOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
			
	/**
	 * Replace a document.
	 * @param documentLink resource link of the document
	 * @param document new document body
	 * @param options optional replace options
	 * @param callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
	 */
    replaceDocument(documentLink: string,
        document: Object,
        options?: IReplaceOptions,
        callback?: (error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions) => void): boolean;
}
	
/** Options associated with a create operation. */
interface ICreateOptions {
    /** Specifies indexing directives. */
    indexAction?: string;
    /** Disables automatic generation of "id" field of the document to be created (if it is not provided) */
    disableAutomaticIdGeneration?: string;
}
	
/** Options associated with a delete operation. */
interface IDeleteOptions {
	/**
	 * The entity tag associated with the resource.
	 * This is matched with the persisted resource before deletion.
	 */
    etag?: string;
}
	
/** Will contain error information if an error occurs, undefined otherwise. */
interface IFeedCallbackError {
    /** The HTTP response code corresponding to the error. */
    number: number;
    /** A string containing the error information. */
    body: string;
}
	
/** Information associated with the response to the operation. */
interface IFeedCallbackOptions {
    /** Opaque token for continuing the read feed or query. */
    continuation: string;
    /** Comma delimited string containing the collection's current quota metrics (storage, number of stored procedure, triggers and UDFs) after completion of the operation. */
    currentCollectionSizeInMB: string;
    /** Comma delimited string containing the collection's maximum quota metrics (storage, number of stored procedure, triggers and UDFs). */
    maxCollectionSizeInMB: string;
}
	
/** Options associated with a read feed or query operation. */
interface IFeedOptions {
	/**
	 * Max number of items to be returned in the enumeration operation.
	 * Value is 100 by default
	 */
    pageSize?: number;
    /** Opaque token for continuing the enumeration. */
    continuation?: string;
    /** Allow scan on the queries which couldn't be served as indexing was opted out on the requested paths (only for queryDocuments() and queryAttachments()) */
    enableScan?: boolean;
    /** Allow order by with low precision (only for queryDocuments(), sortBy() and sortByDescending()) */
    enableLowPrecisionOrderBy?: boolean;
}

/**
 * Object returned from a query function, namely chain, filter, map, pluck, flatten, or value.
 * If the query is part of a chained call, then this object can be used to chain further queries until the final terminating value call.
 */
interface IQueryResponse extends IQueryAPI {
    /** True if the query has been queued, false if it is not queued because of a pending timeout. */
    isAccepted: boolean;
}
	
/** Options associated with a read operation. */
interface IReadOptions {
    /** The conditional HTTP method ifNoneMatch value. */
    ifNoneMatch?: string;
}
	
/** Options associated with a replace operation. */
interface IReplaceOptions {
    /** Specifies indexing directives. */
    indexAction?: string;
	/**
	 * The entity tag associated with the resource.
	 * This is matched with the persisted resource before deletion.
	 */
    etag?: string;
}
	
/** Will contain error information if an error occurs, undefined otherwise. */
interface IRequestCallbackError {
    /** The HTTP response code corresponding to the error. */
    number: number;
    /** A string containing the error information. */
    body: string;
}
	
/** Information associated with the response to the operation. */
interface IRequestCallbackOptions {
    /** Comma delimited string containing the collection's current quota metrics (storage, number of stored procedure, triggers and UDFs) after completion of the operation. */
    currentCollectionSizeInMB: string;
    /** Comma delimited string containing the collection's maximum quota metrics (storage, number of stored procedure, triggers and UDFs). */
    maxCollectionSizeInMB: string;
    /** Set to true if the requested resource has not been modified compared to the provided ETag in the ifNoneMatch parameter for a read request. */
    notModified: boolean;
}

interface IAttachment extends Object {
    /** MIME contentType of the attachment */
    contentType: string;
    /** media link associated with the attachment content */
    media: string;
}

interface IDocumentMeta extends Object {
    id: string;
    _self: string;
    _ts: string;
    _rid?: string;
    _etag?: string;
    _attachments?: string;
}
	
/**
 * The Request object represents the request message that was sent to the server. This includes information about HTTP headers and the body of the HTTP request sent to the server.
 * For triggers, the request represents the operation that is executing when the trigger is run. For example, if the trigger is being run ("triggered") on the creation of a document, then
 * the request body contains the JSON body of the document to be created. This can be accessed through the request object and (as JSON) can be natively consumed in JavaScript.
 * For stored procedures, the request contains information about the request sent to execute the stored procedure.
 */
interface IRequest {
	/**
	 * Gets the request body.
	 */
    getBody(): Object;
    getBody<T>(): T;
	/**
	 * Gets a specified request header value.
	 * @param key the name of the header to retrieve
	 */
    getValue(key: string): string;
	/**
	 * Sets the request body.
	 * Note: this can be only used in a pre-trigger to overwrite the existing request body.
	 * The overwritten request body will then be used in the operation associated with this pre-trigger.
	 * @param value the value to set in the request body
	 */
    setBody(value: string): void;
    setBody(value: Object): void;
	/**
	 * Sets a specified request header value.
	 * Note: this method cannot be used to create new headers.
	 * @param key the name of the header
	 * @param value the value of the header
	 */
    setValue(key: string, value: string): void;
}
	
/**
 * The Response object represents the response message that will be sent from the server in response to the requested operation. This includes information about the HTTP headers and body of the response from the server.
 * The Response object is not present in pre-triggers because they are run before the response is generated.
 * For post-triggers, the response represents the operation that was executed before the trigger. For example, if the post-trigger is being run ("triggered") after the creation of a document, then
 * the response body contains the JSON body of the document that was created. This can be accessed through the response object and (as JSON) can be natively consumed in JavaScript.
 * For stored procedures, the response can be manipulated to send output back to the client-side.
 * Note: this object not available in pre-triggers
 */
interface IResponse {
	/**
	 * Gets the response body.
	 */
    getBody(): Object;
    getBody<T>(): T;
	/**
	 * Gets a maximum quota allowed for the resource associated with a post-trigger
	 * Note: this method is only available in post-triggers
	 */
    getMaxResourceQuota(): string;
	/**
	 * Gets a current quota usage for the resource associated with a post-trigger
	 * Note: this method is only available in post-triggers
	 */
    getResourceQuotaCurrentUsage(): string;
	/**
	 * Gets a specified response header value.
	 * @param key the name of the header to retrieve
	 */
    getValue(key: string): string;
	/**
	 * Sets the response body.
	 * Note: This cannot be done in pre-triggers.
	 * In post-triggers, the response body is already set with the requested resource and will be overwritten with this call.
	 * In stored procedures, this call can be used to set the response message body as output to the calling client.
	 */
    setBody(value: string): void;
    setBody(value: Object): void;
	/**
	 * Sets a specified response header value.
	 * Note: this method cannot be used to create new headers.
	 * @param key the name of the header
	 * @param value the value of the header
	 */
    getValue(key: string, value: string): void;

    appendBody(value: string): void;
    appendBody(value: Object): void;
}

/** Can be used as the query parameter in queryAttachments and queryDocuments. */
interface IParameterizedQuery {
    /** SQL query string. */
    query: string;
    /** Parameters */
    parameters: Array<IQueryParam>;
}

/** Parameter interface for parameterized queries */
interface IQueryParam {
    /** Name to use in the query */
    name: string;
    /** Value of the parameter */
    value: any;
}

/** List of error codes returned by database operations in the RequestCallback and FeedCallback. See the corresponding error message for more details. */
interface IErrorCodes {
    // Client error
    /** (400) Request failed due to bad inputs **/
    BadRequest: number;
    /** (403) Request was denied access to the resource **/
    Forbidden: number;
    /** (404) Request tried to access a resource which doesn't exist **/
    NotFound: number;
    /** (409) Resource with the specified id already exists **/
    Conflict: number;
    /** (412) Conditions specified in the request options were not met **/
    PreconditionFailed: number;
    /** (413) Request failed because it was too large **/
    RequestEntityTooLarge: number;
    /** (449) Request conflicted with the current state of a resource and must be retried from a new transaction from the client side **/
    RetryWith: number;
    // Server error
    /** (500) Server encountered an unexpected error in processing the request **/
    InternalServerError: number;
}

declare function getContext(): IContext;
declare var __: I__Object;
declare var ErrorCodes: IErrorCodes;