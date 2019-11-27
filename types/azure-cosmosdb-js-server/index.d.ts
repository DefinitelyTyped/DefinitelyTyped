// Type definitions for non-npm package azure-cosmosdb-js-server 1.0
// Project: https://github.com/Azure/azure-cosmosdb-js-server
// Definitions by: Erik Abi-Khattar <https://github.com/abiabsurd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * <p>Holds the <a href="-__object.html">__</a> object.</p>
 */
export const __: __object;

/**
 * <p>The __ object can be used as a shortcut to the <a href="Collection.html">Collection</a> and <a href="Context.html">Context</a> objects.
 * It derives from the <a href="Collection.html">Collection</a> object via prototype and defines request and response properties
 * which are shortcuts to <a href="Context.html#getRequest">getContext().getRequest()</a> and <a href="Context.html#getResponse">getContext().getResponse()</a>.</p>
 * #extends {Collection}
 * #property {Request}    request     Alias for getContext().getRequest()
 * #property {Response}   response    Alias for getContext().getResponse()
 * #example var result = __.filter(function(doc) { return doc.id == 1; });
 *     if(!result.isAccepted) throw new Error("the call was not accepted");
 */
export class __object extends Collection {
    /**
     * Alias for getContext().getRequest()
     */
    request: Request;
    /**
     * Alias for getContext().getResponse()
     */
    response: Response;
}

export namespace Collection {
    /**
     * Options associated with a read operation.
     * #property {string} [ifNoneMatch]                          -         The conditional HTTP method ifNoneMatch value.
     * #memberof Collection
     *
     */
    interface ReadOptions {
        ifNoneMatch?: string;
    }
    /**
     * Options associated with a create operation.
     * #property {string} [indexAction]                          -         Specifies indexing directives.
     * #property {string} indexAction.default                    -         use the default indexing policy specified for this collection
     * #property {string} indexAction.include                    -         include this document in the index
     * #property {string} indexAction.exclude                    -         exclude this document from the index
     * #property {string} [disableAutomaticIdGeneration]         -         Disables automatic generation of "id" field of the document to be created (if it is not provided)
     * #memberof Collection
     *
     */
    interface CreateOptions {
        indexAction?: {
            default: string;
            include: string;
            exclude: string;
        };
        disableAutomaticIdGeneration?: string;
    }
    /**
     * Options associated with a upsert operation.
     * #property {string} [indexAction]                          -         Specifies indexing directives.
     * #property {string} indexAction.default                    -         use the default indexing policy specified for this collection
     * #property {string} indexAction.include                    -         include this document in the index
     * #property {string} indexAction.exclude                    -         exclude this document from the index
     * #property {string} [disableAutomaticIdGeneration]         -         Disables automatic generation of "id" field of the document to be upserted (if it is not provided)
     * #memberof Collection
     *
     */
    interface UpsertOptions {
        indexAction?: {
            default: string;
            include: string;
            exclude: string;
        };
        disableAutomaticIdGeneration?: string;
    }
    /**
     * Options associated with a replace operation.
     * #property {string} [indexAction]                          -         Specifies indexing directives.
     * #property {string} indexAction.default                    -         use the default indexing policy specified for this collection
     * #property {string} indexAction.include                    -         include this document in the index
     * #property {string} indexAction.exclude                    -         exclude this document from the index
     * #property {string} [etag]                                 -         <p>The entity tag associated with the resource.<br/>This is matched with the persisted resource before deletion.</p>
     * #memberof Collection
     *
     */
    interface ReplaceOptions {
        indexAction?: {
            default: string;
            include: string;
            exclude: string;
        };
        etag?: string;
    }
    /**
     * Options associated with a delete operation.
     * #property {string} [etag]                                 -         <p>The entity tag associated with the resource.<br/>This is matched with the persisted resource before deletion.</p>
     * #memberof Collection
     *
     */
    interface DeleteOptions {
        etag?: string;
    }
    /**
     * Options associated with a read feed or query operation.
     * #property {Number} [pageSize]                             -         <p>Max number of items to be returned in the enumeration operation.<br/>Value is 100 by default</p>
     * #property {string} [continuation]                         -         Opaque token for continuing the enumeration.
     * #property {Boolean} [enableScan]                          -         Allow scan on the queries which couldn't be served as indexing was opted out on the requested paths (only for <a
     *                                                                         href="#queryDocuments">queryDocuments()</a> and <a href="#queryAttachments">queryAttachments()</a>)
     * #property {Boolean} [enableLowPrecisionOrderBy]           -         Allow order by with low precision (only for <a href="#queryDocuments">queryDocuments()</a>, <a href="#sortBy">sortBy()</a>
     *                                                                         and <a href="#sortByDescending">sortByDescending</a>)
     * #memberof Collection
     *
     */
    interface FeedOptions {
        pageSize?: number;
        continuation?: string;
        enableScan?: boolean;
        enableLowPrecisionOrderBy?: boolean;
    }
    /**
     * Callback to execute after completion of a request.
     * #param {Object} error                                     -         Will contain error information if an error occurs, undefined otherwise.
     * #param {ErrorCodes} error.number                          -         The HTTP response code corresponding to the error.
     * #param {string} error.body                                -         A string containing the error information.
     * #param {Object} resource                                  -         <p>An object that represents the requested resource (document or attachment).<br/>This is undefined if an error occurs in the
     *                                                                         operation.</p>
     * #param {Object} options                                   -         Information associated with the response to the operation.
     * #param {string} options.currentCollectionSizeInMB         -         Comma delimited string containing the collection's current quota metrics (storage, number of stored procedure, triggers and
     *                                                                         UDFs) after completion of the operation.
     * #param {string} options.maxCollectionSizeInMB             -         Comma delimited string containing the collection's maximum quota metrics (storage, number of stored procedure, triggers and
     *                                                                         UDFs).
     * #param {Boolean} options.notModified                      -         Set to true if the requested resource has not been modified compared to the provided ETag in the ifNoneMatch parameter for a
     *                                                                         read request.
     * #param {Object}
     * #memberof Collection
     */
    type RequestCallback = (error: {
        number: ErrorCodes;
        body: string;
    }, resource: any, options: {
        currentCollectionSizeInMB: string;
        maxCollectionSizeInMB: string;
        notModified: boolean;
    }) => void;
    /**
     * The callback to execute after completion of read feed or query request.
     * #param {Object} error                                     -         Will contain error information if an error occurs, undefined otherwise.
     * #param {ErrorCodes} error.number                          -         The HTTP response code corresponding to the error.
     * #param {string} error.body                                -         A string containing the error information.
     * #param {Array} resources                                  -         <p>An array or resources (documents or attachments) that was read.<br/>This is undefined if an error occurs in the
     *                                                                         operation.</p>
     * #param {Object} options                                   -         Information associated with the response to the operation.
     * #param {string} options.continuation                      -         Opaque token for continuing the read feed or query.
     * #param {string} options.currentCollectionSizeInMB         -         Comma delimited string containing the collection's current quota metrics (storage, number of stored procedure, triggers and
     *                                                                         UDFs) after completion of the operation.
     * #param {string} options.maxCollectionSizeInMB             -         Comma delimited string containing the collection's maximum quota metrics (storage, number of stored procedure, triggers and
     *                                                                         UDFs).
     * #memberof Collection
     */
    type FeedCallback = (error: {
        number: ErrorCodes;
        body: string;
    }, resources: any[], options: {
        continuation: string;
        currentCollectionSizeInMB: string;
        maxCollectionSizeInMB: string;
    }) => void;
    /**
     * The predicate function for a <a href="#filter">filter</a> query, which acts as a truth test of whether a document should be filtered or not.
     * #typedef {function} FilterPredicate
     * #param {Object} document                                  -         Input document.
     * #return {Boolean}                                         -         True if this document matches the filter, false otherwise. If true, this document will be added to the output result of the
     *                                                                         filter call.
     * #memberof Collection
     * #see The <a href="#filter">filter</a> call.
     * #example function(doc) { return doc.age < 30; }
     */
    type FilterPredicate = (document: any) => boolean;
    /**
     * The predicate function for a <a href="#map">map/projection</a>, <a href="#unwind">unwind/innerCollectionSelector</a>, which maps the input document's properties into a new document object.
     * #typedef {function} ProjectionPredicate
     * #param {Object} document                                  -         Input document.
     * #return {Object}                                          -         Output document, containing only the mapped properties. This output document will be added to the output result of the map
     *                                                                         call.
     * #memberof Collection
     * #see The <a href="#map">map</a> call.
     * #example function(doc) { return { name: doc.name, age: doc.age }; }
     */
    type ProjectionPredicate = (document: any) => any;
    /**
     * The predicate function for a <a href="#unwind">unwind/resultSelector</a>, which maps the input document's properties into a new document object.
     * #typedef {function} ResultSelectorPredicate
     * #param {Object} documentItem                           -         Input document or top level item from previous projection.
     * #param {Object} innerCollectionItem                    -         The item selected from inner collection.
     * #return {Object}                                       -         Output document, containing only the mapped properties. This output document will be added to the output result of the map call.
     * #memberof Collection
     * #see The <a href="#unwind">unwind</a> call.
     * #example function(customer, child) { return { customerName: customer.name, childName: child.name }; }
     */
    type ResultSelectorPredicate = (documentItem: any, innerCollectionItem: any) => any;
    /**
     * The predicate function for a <a href="#sortBy">sortBy</a> or a <a href="#sortByDescending">sortByDescending</a> query, which defines the property of the document to be used for sorting.
     * #typedef {function} SortByPredicate
     * #param {Object} document                                  -         Input document.
     * #return {string | number}                                   -         A property of the document to use for sorting.
     * #memberof Collection
     * #see The <a href="#sortBy">sortBy</a> and <a href="#sortByDescending">sortByDescending</a> calls.
     * #example // Sort the documents by the 'name' property.
     *     function(doc){ return doc.name; }
     */
    type SortByPredicate = (document: any) => string | number;
    /**
     * <p>Object returned from a query function, namely <a href="#chain">chain</a>, <a href="#filter">filter</a>, <a href="#map">map</a>, <a href="#pluck">pluck</a>, <a href="#flatten">flatten</a>,
     *     or <a href="#value">value</a>.<br/>
     * If the query is part of a <a href="#chain">chained call</a>, then this object can be used to chain further queries until the final terminating <a href="#value">value</a> call.</p>
     * #property {Boolean} isAccepted                            -         True if the query has been queued, false if it is not queued because of a pending timeout.
     * #memberof Collection
     *
     */
    interface QueryResponse {
        isAccepted: boolean;
    }
    /**
     * List of error codes returned by database operations in the <a href="#.RequestCallback">RequestCallback</a>
     * and <a href="#.FeedCallback">FeedCallback</a>. See the corresponding error message for more details.
     * #memberof Collection
     */
    enum ErrorCodes {
        BadRequest = 400,
        Forbidden = 403,
        NotFound = 404,
        Conflict = 409,
        PreconditionFailed = 412,
        RequestEntityTooLarge = 413,
        RetryWith = 449,
        InternalServerError = 500
    }

    type FilterQuery = string | {
        query: string,
        parameters: Array<{
            name: string,
            value: string
        }>
    };
}

/**
 * Gets the context object that can be used for executing operations on DocumentDB storage.
 * #function
 * #returns {Context} Object that is used for executing operations on DocumentDB storage inside the JavaScript function.
 */
export function getContext(): Context;

/**
 * The Context object provides access to all operations that can be performed on DocumentDB data, as well as access to the request and response objects.
 * #class
 */
export class Context {
    /**
     * Gets the request object.
     * #function
     * #instance
     * #memberof Context
     * #returns {Request} Object that provides access to the request message that was sent to the server.
     */
    getRequest(): Request;
    /**
     * <p>Gets the response object.<br/>
     * <b>Note</b>: this is not available in pre-triggers.</p>
     * #function
     * #instance
     * #memberof Context
     * #returns {Response} Object that provides access to output through the response message to be sent from the server.
     */
    getResponse(): Response;
    /**
     * Gets the collection object.
     * #function
     * #instance
     * #memberof Context
     * #returns {Collection} Object that provides server-side access to DocumentDB database. It supports operations on documents and attachments in the collection.
     */
    getCollection(): Collection;
    /**
     * Terminates the script and rolls back the transaction. The script is executed in the context of a transaction, which can be rolled back by using this method. This method is the only way to
     *     prevent script transaction from committing in promise callback. For non-promise scenarios, to abort the transaction, using unhandled exception is more recommemded than this.
     * #function
     * #instance
     * #memberof Context
     * #param {Object} err                                  -         The exception object to serve as the reason of the abort.
     * #example getContext().abort(new Error('abort'));
     */
    abort(err: any): void;
}

/**
 * <p>The Request object represents the request message that was sent to the server. This includes information about HTTP headers and the body of the HTTP request sent to the server.<br/>
 * For triggers, the request represents the operation that is executing when the trigger is run. For example, if the trigger is being run ("triggered") on the creation of a document, then<br/>
 * the request body contains the JSON body of the document to be created. This can be accessed through the request object and (as JSON) can be natively consumed in JavaScript.<br/>
 * For stored procedures, the request contains information about the request sent to execute the stored procedure.</p>
 * #class
 */
export class Request {
    /**
     * Gets the request body.
     * #function
     * #instance
     * #memberof Request
     * #returns {string} The request body.
     */
    getBody(): string;
    /**
     * <p>Sets the request body.<br>
     * Note: this can be only used in a pre-trigger to overwrite the existing request body.<br />
     * The overwritten request body will then be used in the operation associated with this pre-trigger.</p>
     * #function
     * #instance
     * #memberof Request
     * #param {string} value - the value to set in the request body
     */
    setBody(value: string): void;
    /**
     * Gets a specified request header value.
     * #function
     * #instance
     * #memberof Request
     * #param {string} key - the name of the header to retrieve
     * #returns {string} The value of the requested header.
     */
    getValue(key: string): string;
    /**
     * <p>Sets a specified request header value.<br>
     * Note: this method cannot be used to create new headers.</p>
     * #function
     * #instance
     * #memberof Request
     * #param {string} key    - the name of the header
     * #param {string} value  - the value of the header
     */
    setValue(key: string, value: string): void;
    /**
     * <p>Gets the OperationType for the request with a pre-trigger or post-trigger<br />
     * #function
     * #instance
     * #memberof Request
     * #returns {'Create' | 'Replace' | 'Upsert' | 'Delete'} The value of the operation type corresponding to the current request.
     */
    getOperationType(): 'Create' | 'Replace' | 'Upsert' | 'Delete';
}

/**
 * <p>The Response object represents the response message that will be sent from the server in response to the requested operation. This includes information about the HTTP headers and body of the
 *     response from the server.<br/>
 * The Response object is not present in pre-triggers because they are run before the response is generated.<br/>
 * For post-triggers, the response represents the operation that was executed before the trigger. For example, if the post-trigger is being run ("triggered") after the creation of a document, then<br/
 *     >
 * the response body contains the JSON body of the document that was created. This can be accessed through the response object and (as JSON) can be natively consumed in JavaScript.<br/>
 * For stored procedures, the response can be manipulated to send output back to the client-side.<br/><br/>
 * <b>Note</b>: this object not available in pre-triggers</p>
 * #class
 */
export class Response {
    /**
     * Gets the response body.
     * #function
     * #instance
     * #memberof Response
     * #returns {string} The response body.
     */
    getBody(): string;
    /**
     * <p>Sets the response body.<br />
     * Note: This cannot be done in pre-triggers.<br />
     * In post-triggers, the response body is already set with the requested resource and will be overwritten with this call.<br />
     * In stored procedures, this call can be used to set the response message body as output to the calling client.</p>
     * #function
     * #instance
     * #memberof Response
     * #param {string} value - the value to set in the response body
     */
    setBody(value: string): void;
    /**
     * Gets a specified response header value.
     * #function
     * #instance
     * #memberof Response
     * #param {string} key - the name of the header to retrieve
     * #returns {string} The value of the response header.
     */
    getValue(key: string): string;
    /**
     * <p>Sets a specified response header value.<br />
     * Note: this method cannot be used to create new headers.</p>
     * #function
     * #instance
     * #memberof Response
     * #param {string} key    - the name of the header
     * #param {string} value  - the value of the header
     */
    setValue(key: string, value: string): void;
    /**
     * <p>Gets a current quota usage for the resource associated with a post-trigger<br />
     * Note: this method is only available in post-triggers</p>
     * #function
     * #instance
     * #memberof Response
     * #returns {string} The value of the current quota usage.
     */
    getResourceQuotaCurrentUsage(): string;
    /**
     * <p>Gets a maximum quota allowed for the resource associated with a post-trigger<br />
     * Note: this method is only available in post-triggers</p>
     * #function
     * #instance
     * #memberof Response
     * #returns {string} The value of the maximum allowed quota usage.
     */
    getMaxResourceQuota(): string;
}

/**
 * <p>Stored procedures and triggers are registered for a particular collection. The Collection object supports create, read, update and delete (CRUD) and query operations on documents and
 *     attachments in the current collection.<br/>
 * All collection operations are completed asynchronously. You can provide a callback to handle the result of the operation, and to perform error handling if necessary.<br/>
 * Stored procedures and triggers are executed in a time-limited manner. Long-running stored procedures and triggers are defensively timed out and all transactions performed are rolled back.<br/>
 * We stop queuing collection operations if the stored procedure is close to timing out. You can inspect the boolean return value of all collection operations to see if an operation was not queued
 *     and handle this situation gracefully.</p>
 * #class
 */
export class Collection {
    /**
     * <p>Execute a filter on the input stream of documents, resulting in a subset of the input stream that matches the given filter.<br/>
     * When filter is called by itself, the input document stream is the set of all documents in the current document collection.
     * When used in a <a href="#chain">chained call</a>, the input document stream is the set of documents returned from the previous query function.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {Collection.FilterPredicate} predicate - Predicate function defining the filter
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #example // Example 1: get documents(people) with age < 30.
     *     var result = __.filter(function(doc) { return doc.age < 30; });
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     *     // Example 2: get documents (people) with age < 30 and select only name.
     *     var result = __.chain()
     *         .filter(function(doc) { return doc.age < 30; })
     *         .pluck("name")
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     *     // Example 3: get document (person) with id = 1 and delete it.
     *     var result = __.filter(function(doc) { return doc.id === 1; }, function(err, feed, options) {
     *         if(err) throw err;
     *         if(!__.deleteDocument(feed[0].getSelfLink())) throw new Error("deleteDocument was not accepted");
     *     });
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    filter(predicate: Collection.FilterPredicate, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * <p>Produce a new set of documents by mapping/projecting the properties of the documents in the input document stream through the given mapping predicate.<br/>
     * When map is called by itself, the input document stream is the set of all documents in the current document collection.
     * When used in a <a href="#chain">chained call</a>, the input document stream is the set of documents returned from the previous query function.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {Collection.ProjectionPredicate} predicate - Predicate function defining the projection
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #example // Example 1: select only name and age for each document (person).
     *     var result = __.map(function(doc){ return { name: doc.name, age: doc.age}; });
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     *     // Example 2: select name and age for each document (person), and return only people with age < 30.
     *     var result = __.chain()
     *         .map(function(doc) { return { name: doc.name, age: doc.age}; })
     *         .filter(function(doc) { return doc.age < 30; })
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    map(predicate: Collection.ProjectionPredicate, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * <p>Produce a new set of documents by extracting a single property from each document in the input document stream. This is equivalent to a <a href="#map">map</a> call that projects only
     *     propertyName.<br/>
     * When pluck is called by itself, the input document stream is the set of all documents in the current document collection.
     * When used in a <a href="#chain">chained call</a>, the input document stream is the set of documents returned from the previous query function.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {string} propertyName - Name of the property to pluck from all documents in the current collection
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #example // Get documents (people) with age < 30 and select only name.
     *     var result = __.chain()
     *         .filter(function(doc) { return doc.age < 30; })
     *         .pluck("name")
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    pluck(propertyName: string, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * <p>Flatten nested arrays from each document in the input document stream.<br/>
     * When flatten is called by itself, the input document stream is the set of all documents in the current document collection.
     * When used in a <a href="#chain">chained call</a>, the input document stream is the set of documents returned from the previous query function.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {Boolean} [isShallow] - If true, flattens only the first level of nested arrays (false by default)
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #example // Get documents (people) with age < 30, select tags (an array property)
     *     // and flatten the result into one array for all documents.
     *     var result = __.chain()
     *         .filter(function(doc) { return doc.age < 30; })
     *         .map(function(doc) { return doc.tags; })
     *         .flatten()
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    flatten(isShallow?: boolean, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * <p>Perfoms a join with inner collection with both top level document item and inner collection item added to the result projection.<br/>
     * When resultSelector is provided, resultSelector is called for each pair of &lt;current document, inner collection item&gt;.</p>
     * When resultSelector is not provided, __.unwind() just adds inner collection to the result projection. In this case unwind() is equivalent to map(innerCollectionSelector).flatten().
     * Calls to unwind can be chained to perform multiple joins.
     * #function
     * #instance
     * #memberof Collection
     * #param {Collection.ProjectionPredicate} innerCollectionSelector - Predicate function defining the projection for inner collection.
     * #param {Collection.ResultSelectorPredicate} [resultSelector] - Optional predicate> function defining result projection.
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #example
     *     // Get <customer, kids, pet> tuples from customer collection:
     *     //
     *     var result = __.chain()
     *           .unwind(c => c.kids, (c, k) => { return { customer: c, kid: k } })
     *           .unwind(ck => ck.kid.pets, (ck, p) => { return { customer: ck.customer.name, kid: ck.kid.name, pet: p.name }})
     *           .value();
     *     if(!result.isAccepted) throw new Error("one of the calls was not accepted");
     *     //
     *     // With the following input data:
     *     // [{
     *     //         "id": "1",
     *     //         "name": "Alex",
     *     //         "kids": [{
     *     //                 "name": "Bob",
     *     //                 "pets": [
     *     //                     { "name": "Chucky" },
     *     //                     { "name": "Chauncey" },
     *     //                 ]
     *     //             },
     *     //             {
     *     //                 "name": "Bill",
     *     //                 "pets": [
     *     //                     { "name": "Charcoral" },
     *     //                     { "name": "Cookie" }
     *     //                 ]
     *     //             }
     *     //         ]
     *     //     },
     *     //     {
     *     //         "id": "2",
     *     //         "name": "Alice",
     *     //         "kids": [{
     *     //                 "name": "Barbara",
     *     //                 "pets": [
     *     //                     { "name": "Copper" },
     *     //                     { "name": "Curly" }
     *     //                 ]
     *     //             },
     *     //             {
     *     //                 "name": "Beth",
     *     //                 "pets": [
     *     //                     { "name": "Cutie" }
     *     //                 ]
     *     //             }
     *     //         ]
     *     //     }
     *     // ]
     *     //
     *     // The result would be:
     *     //
     *     // [
     *     //     { "customer": "Alex", "kid": "Bob", "pet": "Chucky" },
     *     //     { "customer": "Alex", "kid": "Bob", "pet": "Chauncey" },
     *     //     { "customer": "Alex", "kid": "Bill", "pet": "Charcoral" },
     *     //     { "customer": "Alex", "kid": "Bill", "pet": "Cookie" },
     *     //     { "customer": "Alice", "kid": "Barbara", "pet": "Copper" },
     *     //     { "customer": "Alice", "kid": "Barbara", "pet": "Curly" },
     *     //     { "customer": "Alice", "kid": "Beth", "pet": "Cutie" }
     *     // ]
     *     //
     *     // This is equivalent to:
     *     // SELECT
     *     //   c.name as customer,
     *     //   k.name as kid,
     *     //   p.name as pet
     *     // FROM customer c
     *     // JOIN k in c.kids
     *     // JOIN p in k.pets
     */
    unwind(innerCollectionSelector: Collection.ProjectionPredicate, resultSelector?: Collection.ResultSelectorPredicate,
           options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * <p>Produce a new set of documents by sorting the documents in the input document stream in ascending order using the given predicate.<br/>
     * When sortBy is called by itself, the input document stream is the set of all documents in the current document collection.
     * When used in a <a href="#chain">chained call</a>, the input document stream is the set of documents returned from the previous query function.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {Collection.SortByPredicate} predicate - Predicate function defining the property to sort by.
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #see <a href="#sortByDescending">sortByDescending</a> to sort in descending order.
     * #example // Example 1: sort documents (people) by age
     *     var result = __.sortBy(function(doc){ return doc.age; })
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     *     // Example 2: sortBy in a chain by name
     *     var result = __.chain()
     *         .filter(function(doc) { return doc.age < 30; })
     *         .sortBy(function(doc) { return doc.name; })
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    sortBy(predicate: Collection.SortByPredicate, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * <p>Produce a new set of documents by sorting the documents in the input document stream in descending order using the given predicate.<br/>
     * When sortByDescending is called by itself, the input document stream is the set of all documents in the current document collection.
     * When used in a <a href="#chain">chained call</a>, the input document stream is the set of documents returned from the previous query function.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {Collection.SortByPredicate} predicate - Predicate function defining the property to sort by.
     * #param {Collection.FeedOptions} [options] - Optional query options. Should not be used in a <a href="#chain">chained call</a>.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation.<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.<br/>Should not be used in a <a href="#chain">chained call</a>.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #see <a href="#sortBy">sortBy</a> to sort in ascending order.
     * #example // Example 1: sort documents (people) by age in descending order
     *     var result = __.sortByDescending(function(doc) { return doc.age; })
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     *     // Example 2: sortBy in a chain by name in descending order
     *     var result = __.chain()
     *         .filter(function(doc) { return doc.age < 30; })
     *         .sortByDescending(function(doc) { return doc.name; })
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    sortByDescending(predicate: Collection.SortByPredicate, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * Opening call to start a chained query. Should be used in conjunction with the closing <a href="#value">value</a> call to perform chained queries.
     * #function
     * #instance
     * #memberof Collection
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted. Can be used in a <a href="#chain">chained call</a> to call further queries.
     * #see The <a href="#value">value</a> call.
     * #example var name = "John";
     *     var result = __.chain()
     *         .filter(function(doc) { return doc.name == name; })
     *         .map(function(doc) { return { name: doc.name, age: doc.age }; })
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     */
    chain(): Collection.QueryResponse;
    /**
     * <p>Terminating call for a chained query. Should be used in conjunction with the opening <a href="#chain">chain</a> call to perform chained queries.<br/>
     * When value is called, the query is queued for execution with the given options and callback.</p>
     * #function
     * #instance
     * #memberof Collection
     * #param {Collection.FeedOptions} [options] - Optional query options for the entire chained call.
     * #param {Collection.FeedCallback} [callback] - <p>Optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown<br/>and the result document set
     *     will be written to the <a href="Response.html">Response</a> body.</p>
     * #return {Collection.QueryResponse} - Response which contains whether or not the query was accepted.
     * #see The <a href="#chain">chain</a> call.
     * #example // Example 1: use defaults: the result goes to the response body.
     *     __.chain()
     *         .filter(function(doc) { return doc.name == "John"; })
     *         .pluck("age"))
     *         .value();
     *     if(!result.isAccepted) throw new Error("The call was not accepted");
     *     // Example 2: use options and callback.
     *     function(continuationToken) {
     *         var result = __.chain()
     *             .filter(function(doc) { return doc.name == "John"; })
     *             .pluck("age"))
     *             .value({continuation: continuationToken}, function(err, feed, options) {
     *                 if(err) throw err;
     *                 __response.setBody({
     *                     result: feed,
     *                     continuation: options.continuation
     *                 });
     *             });
     *         if(!result.isAccepted) throw new Error("The call was not accepted");
     *     }
     */
    value(options?: Collection.FeedOptions, callback?: Collection.FeedCallback): Collection.QueryResponse;
    /**
     * Get self link of current collection.
     * #function
     * #instance
     * #memberof Collection
     * #return {string} Self link of current collection.
     */
    getSelfLink(): string;
    /**
     * Get alt link (name-based link) of current collection.
     * #function
     * #instance
     * #memberof Collection
     * #return {string} Alt link of current collection.
     */
    getAltLink(): string;
    /**
     * Read a document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document to read
     * #param {Collection.ReadOptions} [options] - optional read options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the read has been queued, false if it is not queued because of a pending timeout.
     */
    readDocument(documentLink: string, options?: Collection.ReadOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Get all documents for the collection.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} collectionLink - resource link of the collection whose documents are being read
     * #param {Collection.FeedOptions} [options] - optional read feed options
     * #param {Collection.FeedCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the read has been queued, false if it is not queued because of a pending timeout.
     */
    readDocuments(collectionLink: string, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): boolean;
    /**
     * Execute a SQL query on the documents of the collection.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} collectionLink - resource link of the collection whose documents are being queried
     * #param {Collection.FilterQuery} filterQuery - SQL query string. This can also be a JSON object to pass in a parameterized query along with the values.
     * #param {Collection.FeedOptions} [options] - optional query options.
     * #param {Collection.FeedCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the query has been queued, false if it is not queued because of a pending timeout.
     */
    queryDocuments(collectionLink: string, filterQuery: Collection.FilterQuery, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): boolean;
    /**
     * Create a document under the collection.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} collectionLink - resource link of the collection under which the document will be created
     * #param {Object} body - <p>body of the document<br />The "id" property is required and will be generated automatically if not provided (this behaviour can be overriden using the CreateOptions).
     *     Any other properties can be added.</p>
     * #param {Collection.CreateOptions} [options] - optional create options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the create has been queued, false if it is not queued because of a pending timeout.
     */
    createDocument(collectionLink: string, body: any, options?: Collection.CreateOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Upsert a document under the collection.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} collectionLink - resource link of the collection under which the document will be upserted
     * #param {Object} body - <p>body of the document<br />The "id" property is required and will be generated automatically if not provided (this behaviour can be overriden using the UpsertOptions).
     *     Any other properties can be added.</p>
     * #param {Collection.UpsertOptions} [options] - optional upsert options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the upsert has been queued, false if it is not queued because of a pending timeout.
     */
    upsertDocument(collectionLink: string, body: any, options?: Collection.UpsertOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Replace a document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document
     * #param {Object} document - new document body
     * #param {Colleciton.ReplaceOptions} [options] - optional replace options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the replace has been queued, false if it is not queued because of a pending timeout.
     */
    replaceDocument(documentLink: string, document: any, options?: Collection.ReplaceOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Delete a document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document to delete
     * #param {Collection.DeleteOptions} [options] - optional delete options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the delete has been queued, false if it is not queued because of a pending timeout.
     */
    deleteDocument(documentLink: string, options?: Collection.DeleteOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Read an Attachment.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} attachmentLink - resource link of the attachment to read
     * #param {Collection.ReadOptions} [options] - optional read options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the read has been queued, false if it is not queued because of a pending timeout.
     */
    readAttachment(attachmentLink: string, options?: Collection.ReadOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Get all attachments for the document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document whose attachments are being read
     * #param {Collection.FeedOptions} [options] - optional read feed options
     * #param {Collection.FeedCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the read has been queued, false if it is not queued because of a pending timeout.
     */
    readAttachments(documentLink: string, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): boolean;
    /**
     * Execute a SQL query on the attachments for the document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document whose attachments are being queried
     * #param {string} query - SQL query string. This can also be a JSON object to pass in a parameterized query along with the values.
     * #param {Collection.FeedOptions} [options] - optional query options
     * #param {Collection.FeedCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the query has been queued, false if it is not queued because of a pending timeout.
     */
    queryAttachments(documentLink: string, query: string, options?: Collection.FeedOptions, callback?: Collection.FeedCallback): boolean;
    /**
     * Create an attachment for the document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document under which the attachment will be created
     * #param {Object} body - <p>metadata that defines the attachment media like media, contentType<br />It can include any other properties as part of the metedata.</p>
     * #param {string} body.contentType - MIME contentType of the attachment
     * #param {string} body.media - media link associated with the attachment content
     * #param {Collection.CreateOptions} [options] - optional create options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the create has been queued, false if it is not queued because of a pending timeout.
     */
    createAttachment(documentLink: string, body: {
        contentType: string;
        media: string;
    }, options?: Collection.CreateOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Upsert an attachment for the document.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} documentLink - resource link of the document under which the attachment will be upserted
     * #param {Object} body - <p>metadata that defines the attachment media like media, contentType<br />It can include any other properties as part of the metedata.</p>
     * #param {string} body.contentType - MIME contentType of the attachment
     * #param {string} body.media - media link associated with the attachment content
     * #param {Collection.UpsertOptions} [options] - optional upsert options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the upsert has been queued, false if it is not queued because of a pending timeout.
     */
    upsertAttachment(documentLink: string, body: {
        contentType: string;
        media: string;
    }, options?: Collection.UpsertOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Replace an attachment.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} attachmentLink - resource link of the attachment to be replaced
     * #param {Object} attachment - new attachment body
     * #param {Colleciton.ReplaceOptions} [options] - optional replace options
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the replace has been queued, false if it is not queued because of a pending timeout.
     */
    replaceAttachment(attachmentLink: string, attachment: any, options?: Collection.ReplaceOptions, callback?: Collection.RequestCallback): boolean;
    /**
     * Delete an attachment.
     * #function
     * #instance
     * #memberof Collection
     * #param {string} attachmentLink - resource link of the attachment to be deleted
     * #param {Collection.DeleteOptions} [options] - optional delete options.
     * #param {Collection.RequestCallback} [callback] - <p>optional callback for the operation<br/>If no callback is provided, any error in the operation will be thrown.</p>
     * #return {Boolean} True if the delete has been queued, false if it is not queued because of a pending timeout.
     */
    deleteAttachment(attachmentLink: string, options?: Collection.DeleteOptions, callback?: Collection.RequestCallback): boolean;
}
