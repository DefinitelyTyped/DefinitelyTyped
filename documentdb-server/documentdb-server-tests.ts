

// Samples taken from http://dl.windowsazure.com/documentDB/jsserverdocs/Collection.html
function chain() {
    var name: string = "John";
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.name == name; })
        .map(function (doc: any) { return { name: doc.name, age: doc.age }; })
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function filter() {
    // Example 1: get documents(people) with age < 30.
    var result: IQueryResponse = __.filter(function (doc: any) { return doc.age < 30; });
    if (!result.isAccepted) throw new Error("The call was not accepted");
    // Example 2: get documents (people) with age < 30 and select only name.
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.age < 30; })
        .pluck("name")
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
    // Example 3: get document (person) with id = 1 and delete it.
    var result: IQueryResponse = __.filter(function (doc: any) { return doc.id === 1; }, function (err: IFeedCallbackError, feed: Array<any>, options: IFeedCallbackOptions) {
        if (err) throw err;
        if (!__.deleteDocument(feed[0].getSelfLink())) throw new Error("deleteDocument was not accepted");
    });
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function flatten() {
    // Get documents (people) with age < 30, select tags (an array property)
    // and flatten the result into one array for all documents.
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.age < 30; })
        .map(function (doc: any) { return doc.tags; })
        .flatten()
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function map() {
    // Example 1: select only name and age for each document (person).
    var result: IQueryResponse = __.map(function (doc: any) { return { name: doc.name, age: doc.age }; });
    if (!result.isAccepted) throw new Error("The call was not accepted");
    // Example 2: select name and age for each document (person), and return only people with age < 30.
    var result: IQueryResponse = __.chain()
        .map(function (doc: any) { return { name: doc.name, age: doc.age }; })
        .filter(function (doc: any) { return doc.age < 30; })
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function pluck() {
    // Get documents (people) with age < 30 and select only name.
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.age < 30; })
        .pluck("name")
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function sortBy() {
    // Example 1: sort documents (people) by age
    var result: IQueryResponse = __.sortBy(function (doc: any) { return doc.age; })
    if (!result.isAccepted) throw new Error("The call was not accepted");
    // Example 2: sortBy in a chain by name
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.age < 30; })
        .sortBy(function (doc: any) { return doc.name; })
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function sortByDescending() {
    // Example 1: sort documents (people) by age in descending order
    var result: IQueryResponse = __.sortByDescending(function (doc: any) { return doc.age; })
    if (!result.isAccepted) throw new Error("The call was not accepted");
    // Example 2: sortBy in a chain by name in descending order
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.age < 30; })
        .sortByDescending(function (doc: any) { return doc.name; })
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
}
function value() {
    // Example 1: use defaults: the result goes to the response body.
    var result: IQueryResponse = __.chain()
        .filter(function (doc: any) { return doc.name == "John"; })
        .pluck("age")
        .value();
    if (!result.isAccepted) throw new Error("The call was not accepted");
    // Example 2: use options and callback.
    function usingOptionsAndCallback (continuationToken: string) {
        var result = __.chain()
            .filter(function (doc: any) { return doc.name == "John"; })
            .pluck("age")
            .value({ continuation: continuationToken }, function (err: IFeedCallbackError, feed: Array<any>, options: IFeedCallbackOptions) {
            if (err) throw err;
            __.response.setBody({
                result: feed,
                continuation: options.continuation
            });
        });
        if (!result.isAccepted) throw new Error("The call was not accepted");
    }
}

// Samples taken from https://github.com/Azure/azure-documentdb-js-server/tree/master/samples
/**
* This script called as stored procedure to import lots of documents in one batch.
* The script sets response body to the number of docs imported and is called multiple times 
* by the client until total number of docs desired by the client is imported.
* @param  {Object[]} docs - Array of documents to import.
*/
function bulkImport(docs: Array<Object>) {
    var collection: ICollection = getContext().getCollection();
    var collectionLink: string = collection.getSelfLink();

    // The count of imported docs, also used as current doc index.
    var count: number = 0;

    // Validate input.
    if (!docs) throw new Error("The array is undefined or null.");

    var docsLength: number = docs.length;
    if (docsLength == 0) {
        getContext().getResponse().setBody(0);
        return;
    }

    // Call the CRUD API to create a document.
    tryCreate(docs[count], callback);

    // Note that there are 2 exit conditions:
    // 1) The createDocument request was not accepted. 
    //    In this case the callback will not be called, we just call setBody and we are done.
    // 2) The callback was called docs.length times.
    //    In this case all documents were created and we don't need to call tryCreate anymore. Just call setBody and we are done.
    function tryCreate(doc: Object, callback: (err: IRequestCallbackError, doc: Object, options: IRequestCallbackOptions) => void): void {
        var isAccepted = collection.createDocument(collectionLink, doc, callback);

        // If the request was accepted, callback will be called.
        // Otherwise report current count back to the client, 
        // which will call the script again with remaining set of docs.
        // This condition will happen when this stored procedure has been running too long
        // and is about to get cancelled by the server. This will allow the calling client
        // to resume this batch from the point we got to before isAccepted was set to false
        if (!isAccepted) getContext().getResponse().setBody(count);
    }

    // This is called when collection.createDocument is done and the document has been persisted.
    function callback(err: IRequestCallbackError, doc: Object, options: IRequestCallbackOptions) {
        if (err) throw err;

        // One more document has been inserted, increment the count.
        count++;

        if (count >= docsLength) {
            // If we have created all documents, we are done. Just set the response.
            getContext().getResponse().setBody(count);
        } else {
            // Create next document.
            tryCreate(docs[count], callback);
        }
    }
}

/**
* This is executed as stored procedure to count the number of docs in the collection.
* To avoid script timeout on the server when there are lots of documents (100K+), the script executed in batches,
* each batch counts docs to some number and returns continuation token.
* The script is run multiple times, starting from empty continuation, 
* then using continuation returned by last invocation script until continuation returned by the script is null/empty string.
*
* @param {String} filterQuery - Optional filter for query (e.g. "SELECT * FROM docs WHERE docs.category = 'food'").
* @param {String} continuationToken - The continuation token passed by request, continue counting from this token.
*/
function count(filterQuery: string, continuationToken: string) {
    var collection: ICollection = getContext().getCollection();
    var maxResult: number = 25; // MAX number of docs to process in one batch, when reached, return to client/request continuation. 
    // intentionally set low to demonstrate the concept. This can be much higher. Try experimenting.
    // We've had it in to the high thousands before seeing the stored proceudre timing out.

    // The number of documents counted.
    var result: number = 0;

    tryQuery(continuationToken);

    // Helper method to check for max result and call query.
    function tryQuery(nextContinuationToken: string) {
        var responseOptions: Object = { continuation: nextContinuationToken, pageSize: maxResult };

        // In case the server is running this script for long time/near timeout, it would return false,
        // in this case we set the response to current continuation token, 
        // and the client will run this script again starting from this continuation.
        // When the client calls this script 1st time, is passes empty continuation token.
        if (result >= maxResult || !query(responseOptions)) {
            setBody(nextContinuationToken);
        }
    }

    function query(responseOptions: IFeedOptions) {
        // For empty query string, use readDocuments rather than queryDocuments -- it's faster as doesn't need to process the query.
        return (filterQuery && filterQuery.length) ?
            collection.queryDocuments(collection.getSelfLink(), filterQuery, responseOptions, onReadDocuments) :
            collection.readDocuments(collection.getSelfLink(), responseOptions, onReadDocuments);
    }

    // This is callback is called from collection.queryDocuments/readDocuments.
    function onReadDocuments(err: IFeedCallbackError, docFeed: Array<any>, responseOptions: IFeedCallbackOptions) {
        if (err) {
            throw 'Error while reading document: ' + err;
        }

        // Increament the number of documents counted so far.
        result += docFeed.length;

        // If there is continuation, call query again with it, 
        // otherwise we are done, in which case set continuation to null.
        if (responseOptions.continuation) {
            tryQuery(responseOptions.continuation);
        } else {
            setBody(null);
        }
    }

    // Set response body: use an object the client is expecting (2 properties: result and continuationToken).
    function setBody(continuationToken: string) {
        var body: Object = { count: result, continuationToken: continuationToken };
        getContext().getResponse().setBody(body);
    }
}

/**
* This is run as stored procedure and does the following:
* - create ordered result set (result) which is an array sorted by orderByFieldName parameter.
* - call collection.queryDocuments.
* - in the callback for each document, insert into an array (result)
* - in the end, sort the resulting array and return it to the client
*
* Important notes:
* - The resulting record set could be too large to fit into one response
*   - To walk around that, we setBody by one element and catch the REQUEST_ENTITY_TOO_LARGE exception.
*     When we get the exception, return resulting set to the client with continuation token
*     to continue from item index specified by this token.
*   - Note that when continuation is called, it will be different transaction
*
* @param {String} filterQuery - Optional filter for query.
* @param {String} orderByFieldName - The name of the field to order by resulting set.
* @param {String} continuationToken - The continuation token passed by request, continue counting from this token.
*/
function orderBy(filterQuery: string, orderByFieldName: string, continuationToken: number) {
    // HTTP error codes sent to our callback funciton by DocDB server.
    var ErrorCode: any = {
        REQUEST_ENTITY_TOO_LARGE: 413,
    }

    var collection: ICollection = getContext().getCollection();
    var collectionLink: string = collection.getSelfLink();
    var result: Array<any> = new Array();

    tryQuery({});

    function tryQuery(options: IFeedOptions) {
        var isAccepted: boolean = (filterQuery && filterQuery.length) ?
            collection.queryDocuments(collectionLink, filterQuery, options, callback) :
            collection.readDocuments(collectionLink, options, callback)

        if (!isAccepted) throw new Error("Source dataset is too large to complete the operation.");
    }

    /**
    * queryDocuments callback.
    * @param {Error} err - Error object in case of error/exception.
    * @param {Array} queryFeed - array containing results of the query.
    * @param {ResponseOptions} responseOptions.
    */
    function callback(err: IFeedCallbackError, queryFeed: Array<any>, responseOptions: IFeedCallbackOptions) {
        if (err) {
            throw err;
        }

        // Iterate over document feed and store documents into the result array.
        queryFeed.forEach(function (element: any, index: number, array: Array<any>) {
            result[result.length] = element;
        });

        if (responseOptions.continuation) {
            // If there is continuation, call query again providing continuation token.
            tryQuery({ continuation: responseOptions.continuation });
        } else {
            // We are done with querying/got all results. Sort the results and return from the script.
            result.sort(compare);

            fillResponse();
        }
    }

    // Compare two objects(documents) using field specified by the orderByFieldName parameter.
    // Return 0 if equal, -1 if less, 1 if greater.
    function compare(x: any, y: any) {
        if (x[orderByFieldName] == y[orderByFieldName]) return 0;
        else if (x[orderByFieldName] < y[orderByFieldName]) return -1;
        return 1;
    }

    // This is called in the very end on an already sorted array.
    // Sort the results and set the response body.
    function fillResponse() {
        // Main script is called with continuationToken which is the index of 1st item to start result batch from.
        // Slice the result array and discard the beginning. From now on use the 'continuationResult' var.
        var continuationResult: Array<any> = result;
        if (continuationToken) continuationResult = result.slice(continuationToken);
        else continuationToken = 0;

        // Get/initialize the response.
        var response: IResponse = getContext().getResponse();
        response.setBody(null);

        // Take care of response body getting too large:
        // Set Response iterating by one element. When we fail due to MAX response size, return to the client requesting continuation.
        var i = 0;
        for (; i < continuationResult.length; ++i) {
            try {
                // Note: setBody is very expensive vs appendBody, use appendBody with simple approximation JSON.stringify(element).
                response.appendBody(JSON.stringify(continuationResult[i]));
            } catch (ex) {
                if (!ex.number == ErrorCode.REQUEST_ENTITY_TOO_LARGE) throw ex;
                break;
            }
        }
        
        // Now next batch to return to client has i elements.
        // Slice the continuationResult if needed and discard the end.
        var partialResult: Array<any> = continuationResult;
        var newContinuation: string = null;
        if (i < continuationResult.length) {
            partialResult = continuationResult.slice(0, i);
        }

        // Finally, set response body.
        response.setBody({ result: result, continuation: newContinuation });
    }
}


/**
* This is run as stored procedure and does the following:
* - get 1st document in the collection, convert to JSON, prepend string specified by the prefix parameter 
*   and set response to the result of that.
*
* @param {String} prefix - The string to prepend to the 1st document in collection.
*/
function simple(prefix: string) {
    var collection: ICollection = getContext().getCollection();

    // Query documents and take 1st item.
    var isAccepted: boolean = collection.queryDocuments(
        collection.getSelfLink(),
        'SELECT * FROM root r',
        function (err: IFeedCallbackError, feed: Array<any>, options: IFeedCallbackOptions) {
            if (err) throw err;

            // Check the feed and if it's empty, set the body to 'no docs found',
            // Otherwise just take 1st element from the feed.
            if (!feed || !feed.length) getContext().getResponse().setBody("no docs found");
            else getContext().getResponse().setBody(prefix + JSON.stringify(feed[0]));
        });

    if (!isAccepted) throw new Error("The query wasn't accepted by the server. Try again/use continuation token between API and script.");
}

/**
 * A DocumentDB stored procedure that bulk deletes documents for a given query.<br/>
 * Note: You may need to execute this sproc multiple times (depending whether the sproc is able to delete every document within the execution timeout limit).
 *
 * @function
 * @param {string} query - A query that provides the documents to be deleted (e.g. "SELECT * FROM c WHERE c.founded_year = 2008")
 * @returns {Object.<number, boolean>} Returns an object with the two properties:<br/>
 *   deleted - contains a count of documents deleted<br/>
 *   continuation - a boolean whether you should execute the sproc again (true if there are more documents to delete; false otherwise).
 */
function bulkDeleteSproc(query: string) {
    var collection: ICollection = getContext().getCollection();
    var collectionLink: string = collection.getSelfLink();
    var response: IResponse = getContext().getResponse();
    var responseBody: any = {
        deleted: 0,
        continuation: true
    };

    // Validate input.
    if (!query) throw new Error("The query is undefined or null.");

    tryQueryAndDelete();

    // Recursively runs the query w/ support for continuation tokens.
    // Calls tryDelete(documents) as soon as the query returns documents.
    function tryQueryAndDelete(continuation?: string) {
        var requestOptions: IFeedOptions = { continuation: continuation };

        var isAccepted: boolean = collection.queryDocuments(collectionLink, query, requestOptions, function (err: IFeedCallbackError, retrievedDocs: Array<any>, responseOptions: IFeedCallbackOptions) {
            if (err) throw err;

            if (retrievedDocs.length > 0) {
                // Begin deleting documents as soon as documents are returned form the query results.
                // tryDelete() resumes querying after deleting; no need to page through continuation tokens.
                //  - this is to prioritize writes over reads given timeout constraints.
                tryDelete(retrievedDocs);
            } else if (responseOptions.continuation) {
                // Else if the query came back empty, but with a continuation token; repeat the query w/ the token.
                tryQueryAndDelete(responseOptions.continuation);
            } else {
                // Else if there are no more documents and no continuation token - we are finished deleting documents.
                responseBody.continuation = false;
                response.setBody(responseBody);
            }
        });

        // If we hit execution bounds - return continuation: true.
        if (!isAccepted) {
            response.setBody(responseBody);
        }
    }

    // Recursively deletes documents passed in as an array argument.
    // Attempts to query for more on empty array.
    function tryDelete(documents: Array<IDocumentMeta>) {
        if (documents.length > 0) {
            // Delete the first document in the array.
            var isAccepted: boolean = collection.deleteDocument(documents[0]._self, {}, function (err, responseOptions) {
                if (err) throw err;

                responseBody.deleted++;
                documents.shift();
                // Delete the next document in the array.
                tryDelete(documents);
            });

            // If we hit execution bounds - return continuation: true.
            if (!isAccepted) {
                response.setBody(responseBody);
            }
        } else {
            // If the document array is empty, query for more documents.
            tryQueryAndDelete();
        }
    }
}

/**
 * A DocumentDB stored procedure that updates a document by id, using a similar syntax to MongoDB's update operator.<br/>
 * <br/>
 * The following operations are supported:<br/>
 * <br/>
 * Field Operators:<br/>
 * <ul>
 *   <li>$inc - Increments the value of the field by the specified amount.</li>
 *   <li>$mul - Multiplies the value of the field by the specified amount.</li>
 *   <li>$rename - Renames a field.</li>
 *   <li>$set - Sets the value of a field in a document.</li>
 *   <li>$unset - Removes the specified field from a document.</li>
 *   <li>$min - Only updates the field if the specified value is less than the existing field value.</li>
 *   <li>$max - Only updates the field if the specified value is greater than the existing field value.</li>
 *   <li>$currentDate - Sets the value of a field to current date as a Unix Epoch.</li>
 * </ul>
 * <br/>
 * Array Operators:<br/>
 * <ul>
 *   <li>$addToSet - Adds elements to an array only if they do not already exist in the set.</li>
 *   <li>$pop - Removes the first or last item of an array.</li>
 *   <li>$push - Adds an item to an array.</li>
 * </ul>
 * <br/>
 * Note: Performing multiple operations on the same field may yield unexpected results.<br/>
 *
 * @example <caption>Increment the property "counter" by 1 in the document where id = "foo".</caption>
 * updateSproc("foo", {$inc: {counter: 1}});
 *
 * @example <caption>Set the property "message" to "Hello World" and the "messageDate" to the current date in the document where id = "bar".</caption>
 * updateSproc("bar", {$set: {message: "Hello World"}, $currentDate: {messageDate: ""}});
 *
 * @function
 * @param {string} id - The id for your document.
 * @param {object} update - the modifications to apply.
 * @returns {object} the updated document.
 */
function updateSproc(id: string, update: Object) {
    var collection: ICollection = getContext().getCollection();
    var collectionLink: string = collection.getSelfLink();
    var response: IResponse = getContext().getResponse();

    // Validate input.
    if (!id) throw new Error("The id is undefined or null.");
    if (!update) throw new Error("The update is undefined or null.");

    tryQueryAndUpdate();

    // Recursively queries for a document by id w/ support for continuation tokens.
    // Calls tryUpdate(document) as soon as the query returns a document.
    function tryQueryAndUpdate(continuation?: string) {
        var query: IParameterizedQuery = { query: "select * from root r where r.id = @id", parameters: [{ name: "@id", value: id }] };
        var requestOptions: IFeedOptions = { continuation: continuation };

        var isAccepted: boolean = collection.queryDocuments(collectionLink, query, requestOptions, function (err: IFeedCallbackError, documents: Array<any>, responseOptions: IFeedCallbackOptions) {
            if (err) throw err;

            if (documents.length > 0) {
                // If the document is found, update it.
                // There is no need to check for a continuation token since we are querying for a single document.
                tryUpdate(documents[0]);
            } else if (responseOptions.continuation) {
                // Else if the query came back empty, but with a continuation token; repeat the query w/ the token.
                // It is highly unlikely for this to happen when performing a query by id; but is included to serve as an example for larger queries.
                tryQueryAndUpdate(responseOptions.continuation);
            } else {
                // Else a document with the given id does not exist..
                throw new Error("Document not found.");
            }
        });

        // If we hit execution bounds - throw an exception.
        // This is highly unlikely given that this is a query by id; but is included to serve as an example for larger queries.
        if (!isAccepted) {
            throw new Error("The stored procedure timed out.");
        }
    }

    // Updates the supplied document according to the update object passed in to the sproc.
    function tryUpdate(document: IDocumentMeta) {

        // DocumentDB supports optimistic concurrency control via HTTP ETag.
        var requestOptions: IReplaceOptions = { etag: document._etag };

        // Update operators.
        inc(document, update);
        mul(document, update);
        rename(document, update);
        set(document, update);
        unset(document, update);
        min(document, update);
        max(document, update);
        currentDate(document, update);
        addToSet(document, update);
        pop(document, update);
        push(document, update);

        // Update the document.
        var isAccepted: boolean = collection.replaceDocument(document._self, document, requestOptions, function (err, updatedDocument, responseOptions) {
            if (err) throw err;

            // If we have successfully updated the document - return it in the response body.
            response.setBody(updatedDocument);
        });

        // If we hit execution bounds - throw an exception.
        if (!isAccepted) {
            throw new Error("The stored procedure timed out.");
        }
    }

    // Operator implementations.
    // The $inc operator increments the value of a field by a specified amount.
    function inc(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$inc) {
            fields = Object.keys(update.$inc);
            for (i = 0; i < fields.length; i++) {
                if (isNaN(update.$inc[fields[i]])) {
                    // Validate the field; throw an exception if it is not a number (can't increment by NaN).
                    throw new Error("Bad $inc parameter - value must be a number")
                } else if (document[fields[i]]) {
                    // If the field exists, increment it by the given amount.
                    document[fields[i]] += update.$inc[fields[i]];
                } else {
                    // Otherwise set the field to the given amount.
                    document[fields[i]] = update.$inc[fields[i]];
                }
            }
        }
    }

    // The $mul operator multiplies the value of the field by the specified amount.
    function mul(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$mul) {
            fields = Object.keys(update.$mul);
            for (i = 0; i < fields.length; i++) {
                if (isNaN(update.$mul[fields[i]])) {
                    // Validate the field; throw an exception if it is not a number (can't multiply by NaN).
                    throw new Error("Bad $mul parameter - value must be a number")
                } else if (document[fields[i]]) {
                    // If the field exists, multiply it by the given amount.
                    document[fields[i]] *= update.$mul[fields[i]];
                } else {
                    // Otherwise set the field to 0.
                    document[fields[i]] = 0;
                }
            }
        }
    }

    // The $rename operator renames a field.
    function rename(document: any, update: any) {
        var fields: Array<string>, i: number, existingFieldName: string, newFieldName: string;

        if (update.$rename) {
            fields = Object.keys(update.$rename);
            for (i = 0; i < fields.length; i++) {
                existingFieldName = fields[i];
                newFieldName = update.$rename[fields[i]];

                if (existingFieldName == newFieldName) {
                    throw new Error("Bad $rename parameter: The new field name must differ from the existing field name.")
                } else if (document[existingFieldName]) {
                    // If the field exists, set/overwrite the new field name and unset the existing field name.
                    document[newFieldName] = document[existingFieldName];
                    delete document[existingFieldName];
                } else {
                    // Otherwise this is a noop.
                }
            }
        }
    }

    // The $set operator sets the value of a field.
    function set(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$set) {
            fields = Object.keys(update.$set);
            for (i = 0; i < fields.length; i++) {
                document[fields[i]] = update.$set[fields[i]];
            }
        }
    }

    // The $unset operator removes the specified field.
    function unset(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$unset) {
            fields = Object.keys(update.$unset);
            for (i = 0; i < fields.length; i++) {
                delete document[fields[i]];
            }
        }
    }

    // The $min operator only updates the field if the specified value is less than the existing field value.
    function min(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$min) {
            fields = Object.keys(update.$min);
            for (i = 0; i < fields.length; i++) {
                if (update.$min[fields[i]] < document[fields[i]]) {
                    document[fields[i]] = update.$min[fields[i]];
                }
            }
        }
    }

    // The $max operator only updates the field if the specified value is greater than the existing field value.
    function max(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$max) {
            fields = Object.keys(update.$max);
            for (i = 0; i < fields.length; i++) {
                if (update.$max[fields[i]] > document[fields[i]]) {
                    document[fields[i]] = update.$max[fields[i]];
                }
            }
        }
    }

    // The $currentDate operator sets the value of a field to current date as a POSIX epoch.
    function currentDate(document: any, update: any) {
        var currentDate: Date = new Date();
        var fields: Array<string>, i: number;

        if (update.$currentDate) {
            fields = Object.keys(update.$currentDate);
            for (i = 0; i < fields.length; i++) {
                // ECMAScript's Date.getTime() returns milliseconds, where as POSIX epoch are in seconds.
                document[fields[i]] = Math.round(currentDate.getTime() / 1000);
            }
        }
    }

    // The $addToSet operator adds elements to an array only if they do not already exist in the set.
    function addToSet(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$addToSet) {
            fields = Object.keys(update.$addToSet);

            for (i = 0; i < fields.length; i++) {
                if (!Array.isArray(document[fields[i]])) {
                    // Validate the document field; throw an exception if it is not an array.
                    throw new Error("Bad $addToSet parameter - field in document must be an array.")
                } else if (document[fields[i]].indexOf(update.$addToSet[fields[i]]) === -1) {
                    // Add the element if it doesn't already exist in the array.
                    document[fields[i]].push(update.$addToSet[fields[i]]);
                }
            }
        }
    }

    // The $pop operator removes the first or last item of an array.
    // Pass $pop a value of -1 to remove the first element of an array and 1 to remove the last element in an array.
    function pop(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$pop) {
            fields = Object.keys(update.$pop);

            for (i = 0; i < fields.length; i++) {
                if (!Array.isArray(document[fields[i]])) {
                    // Validate the document field; throw an exception if it is not an array.
                    throw new Error("Bad $pop parameter - field in document must be an array.")
                } else if (update.$pop[fields[i]] < 0) {
                    // Remove the first element from the array if it's less than 0 (be flexible).
                    document[fields[i]].shift();
                } else {
                    // Otherwise, remove the last element from the array (have 0 default to javascript's pop()).
                    document[fields[i]].pop();
                }
            }
        }
    }

    // The $push operator adds an item to an array.
    function push(document: any, update: any) {
        var fields: Array<string>, i: number;

        if (update.$push) {
            fields = Object.keys(update.$push);

            for (i = 0; i < fields.length; i++) {
                if (!Array.isArray(document[fields[i]])) {
                    // Validate the document field; throw an exception if it is not an array.
                    throw new Error("Bad $push parameter - field in document must be an array.")
                } else {
                    // Push the element in to the array.
                    document[fields[i]].push(update.$push[fields[i]]);
                }
            }
        }
    }
}

/**
 * A DocumentDB stored procedure that upserts a given document (insert new or update if present) using its id property.<br/>
 * This implementation tries to create, and if the create fails then query for the document with the specified document's id, then replace it. 
 * Use this sproc if creates are more common than replaces, otherwise use "upsertOptimizedForReplace" 
 *
 * @function
 * @param {Object} document - A document that should be upserted into this collection.
 * @returns {Object.<string>} Returns an object with the property:<br/>
 *   op - created (or) replaced.
 */
function upsert(document: IDocumentMeta) {
    var context: IContext = getContext();
    var collection: ICollection = context.getCollection();
    var collectionLink: string = collection.getSelfLink();
    var response: IResponse = context.getResponse();
    var errorCodes: any = { CONFLICT: 409 };

    // Not checking for existence of document.id for compatibility with createDocument.
    if (!document) throw new Error("The document is undefined or null.");

    tryCreate(document, callback);

    function tryCreate(doc: IDocumentMeta, callback: (err: IRequestCallbackError, obj: any, options: IRequestCallbackOptions) => void) {
        var isAccepted: boolean = collection.createDocument(collectionLink, doc, callback);
        if (!isAccepted) throw new Error("Unable to schedule create document");
        response.setBody({ "op": "created" });
    }

    // To replace the document, first issue a query to find it and then call replace.
    function tryReplace(doc: IDocumentMeta, callback: (err: IRequestCallbackError, obj: any, options: IRequestCallbackOptions) => void) {
        retrieveDoc(doc, null, function (retrievedDocs: Array<IDocumentMeta>) {
            var isAccepted: boolean = collection.replaceDocument(retrievedDocs[0]._self, doc, callback);
            if (!isAccepted) throw new Error("Unable to schedule replace document");
            response.setBody({ "op": "replaced" });
        });
    }

    function retrieveDoc(doc: IDocumentMeta, continuation: string, callback: Function) {
        var query: IParameterizedQuery = { query: "select * from root r where r.id = @id", parameters: [{ name: "@id", value: doc.id }] };
        var requestOptions: IFeedOptions = { continuation: continuation };
        var isAccepted: boolean = collection.queryDocuments(collectionLink, query, requestOptions, function (err: IFeedCallbackError, retrievedDocs: Array<any>, responseOptions: IFeedCallbackOptions) {
            if (err) throw err;

            if (retrievedDocs.length > 0) {
                callback(retrievedDocs);
            } else if (responseOptions.continuation) {
                // Conservative check for continuation. Not expected to hit in practice for the "id query"
                retrieveDoc(doc, responseOptions.continuation, callback);
            } else {
                throw new Error("Error in retrieving document: " + doc.id);
            }
        });
        if (!isAccepted) throw new Error("Unable to query documents");
    }

    // This is called when collection.createDocument is done in order to
    // process the result.
    function callback(err: IRequestCallbackError, doc: any, options: IRequestCallbackOptions) {
        if (err) {
            // Replace the document if status code is 409 and upsert is enabled
            if (err.number == errorCodes.CONFLICT) {
                return tryReplace(document, callback);
            } else {
                throw err;
            }
        }
    }
}

/**
 * A DocumentDB stored procedure that upserts a given document (insert new or update if present) using its id property.<br/>
 * This implementation queries for the document's id, and creates if absent and replaces if found.
 * Use this sproc if replaces are more common than creates, otherwise use "upsert" 
 *
 * @function
 * @param {Object} document - A document that should be upserted into this collection.
 * @returns {Object.<string>} Returns an object with the property:<br/>
 *   op - created (or) replaced.
 */
function upsertOptimizedForReplace(document: any) {
    var context: IContext = getContext();
    var collection: ICollection = context.getCollection();
    var collectionLink: string = collection.getSelfLink();
    var response: IResponse = context.getResponse();

    // Not checking for existence of document.id for compatibility with createDocument.
    if (!document) throw new Error("The document is undefined or null.");

    retrieveDoc(document, null, callback);

    function retrieveDoc(doc: IDocumentMeta, continuation: string, callback: (err: IRequestCallbackError, obj: any, options: IRequestCallbackOptions) => void) {
        var query: IParameterizedQuery = { query: "select * from root r where r.id = @id", parameters: [{ name: "@id", value: doc.id }] };
        var requestOptions: IFeedOptions = { continuation: continuation };
        var isAccepted: boolean = collection.queryDocuments(collectionLink, query, requestOptions, function (err: IFeedCallbackError, retrievedDocs: Array<any>, responseOptions: IFeedCallbackOptions) {
            if (err) throw err;
            if (retrievedDocs.length > 0) {
                tryReplace(retrievedDocs[0], doc, callback);
            } else if (responseOptions.continuation) {
                // Conservative check for continuation. Not expected to hit in practice for the "id query".
                retrieveDoc(doc, responseOptions.continuation, callback);
            } else {
                tryCreate(doc, callback);
            }
        });
        if (!isAccepted) throw new Error("Unable to query documents");
    }

    function tryCreate(doc: any, callback: (err: IRequestCallbackError, obj: any, options: IRequestCallbackOptions) => void) {
        var isAccepted = collection.createDocument(collectionLink, doc, callback);
        if (!isAccepted) throw new Error("Unable to schedule create document");
        response.setBody({ "op": "created" });
    }

    function tryReplace(docToReplace: IDocumentMeta, docContent: any, callback: (err: IRequestCallbackError, obj: any, options: IRequestCallbackOptions) => void) {
        var isAccepted = collection.replaceDocument(docToReplace._self, docContent, callback);
        if (!isAccepted) throw new Error("Unable to schedule replace document");
        response.setBody({ "op": "replaced" });
    }

    function callback(err: IRequestCallbackError, obj: any, options: IRequestCallbackOptions): void {
        if (err) throw err;
    }
}

/**
* This script runs as a pre-trigger when a document is inserted:
* for each inserted document, validate/canonicalize document.weekday and create field document.createdTime.
*/
function validateClass() {
    var collection: ICollection = getContext().getCollection();
    var collectionLink: string = collection.getSelfLink();
    var doc: any = getContext().getRequest().getBody();

    // Validate/canonicalize the data.
    doc.weekday = canonicalizeWeekDay(doc.weekday);

    // Insert auto-created field 'createdTime'.
    doc.createdTime = new Date();

    // Update the request -- this is what is going to be inserted.
    getContext().getRequest().setBody(doc);

    function canonicalizeWeekDay(day: string) {
        // Simple input validation.
        if (!day || !day.length || day.length < 3) throw new Error("Bad input: " + day);

        // Try to see if we can canonicalize the day.
        var days: Array<string> = ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];
        var fullDay: string;
        days.forEach(function (x: string) {
            if (day.substring(0, 3).toLowerCase() == x.substring(0, 3).toLowerCase()) fullDay = x;
        });
        if (fullDay) return fullDay;

        // Couldn't get the weekday from input. Throw.
        throw new Error("Bad weekday: " + day);
    }
}

/**
* This script runs as a trigger:
* for each inserted document, look at document.size and update aggregate properties of metadata document: minSize, maxSize, totalSize.
*/
function updateMetadata() {
    // HTTP error codes sent to our callback funciton by DocDB server.
    var ErrorCode: any = {
        RETRY_WITH: 449,
    }

    var collection: ICollection = getContext().getCollection();
    var collectionLink: string = collection.getSelfLink();

    // Get the document from request (the script runs as trigger, thus the input comes in request).
    var doc: any = getContext().getRequest().getBody();

    // Check the doc (ignore docs with invalid/zero size and metaDoc itself) and call updateMetadata.
    if (!doc.isMetadata && doc.size != undefined && doc.size > 0) {
        getAndUpdateMetadata();
    }

    function getAndUpdateMetadata() {
        // Get the meta document. We keep it in the same collection. it's the only doc that has .isMetadata = true.
        var isAccepted: boolean = collection.queryDocuments(collectionLink, 'SELECT * FROM root r WHERE r.isMetadata = true', function (err: IFeedCallbackError, feed: Array<any>, options: IFeedCallbackOptions) {
            if (err) throw err;
            if (!feed || !feed.length) throw new Error("Failed to find the metadata document.");

            // The metadata document.
            var metaDoc: any = feed[0];

            // Update metaDoc.minSize:
            // for 1st document use doc.Size, for all the rest see if it's less than last min.
            if (metaDoc.minSize == 0) metaDoc.minSize = doc.size;
            else metaDoc.minSize = Math.min(metaDoc.minSize, doc.size);
            
            // Update metaDoc.maxSize.
            metaDoc.maxSize = Math.max(metaDoc.maxSize, doc.size);

            // Update metaDoc.totalSize.
            metaDoc.totalSize += doc.size;
            
            // Update/replace the metadata document in the store.
            var isAccepted: boolean = collection.replaceDocument(metaDoc._self, metaDoc, function (err: IRequestCallbackError) {
                if (err) throw err;
                // Note: in case concurrent updates causes conflict with ErrorCode.RETRY_WITH, we can't read the meta again 
                //       and update again because due to Snapshot isolation we will read same exact version (we are in same transaction).
                //       We have to take care of that on the client side.
            });
            if (!isAccepted) throw new Error("The call replaceDocument(metaDoc) returned false.");
        });
        if (!isAccepted) throw new Error("The call queryDocuments for metaDoc returned false.");
    }
}

/**
 * This script is meant to run as a pre-trigger to enforce the uniqueness of the "name" property.
 */

function validateName() {
    var collection: ICollection = getContext().getCollection();
    var request: IRequest = getContext().getRequest();
    var docToCreate: any = request.getBody();

    // Reject documents that do not have a name property by throwing an exception.
    if (!docToCreate.name) {
        throw new Error('Document must include a "name" property.');
    }

    lookForDuplicates();

    function lookForDuplicates(continuation?: string) {
        var query: IParameterizedQuery = {
            query: 'SELECT * FROM myCollection c WHERE c.name = @name',
            parameters: [{
                name: '@name',
                value: docToCreate.name
            }]
        };
        var requestOptions: IFeedOptions = {
            continuation: continuation
        };

        var isAccepted: boolean = collection.queryDocuments(collection.getSelfLink(), query, requestOptions,
            function (err: IFeedCallbackError, results: Array<any>, responseOptions: IFeedCallbackOptions) {
                if (err) {
                    throw new Error('Error querying for documents with duplicate names: ' + err.body);
                }
                if (results.length > 0) {
                    // At least one document with name exists.
                    throw new Error('Document with the name, ' + docToCreate.name + ', already exists: ' + JSON.stringify(results[0]));
                } else if (responseOptions.continuation) {
                    // Else if the query came back empty, but with a continuation token; repeat the query w/ the token.
                    // This is highly unlikely; but is included to serve as an example for larger queries.
                    lookForDuplicates(responseOptions.continuation);
                } else {
                    // Success, no duplicates found! Do nothing.
                }
            }
        );

        // If we hit execution bounds - throw an exception.
        // This is highly unlikely; but is included to serve as an example for more complex operations.
        if (!isAccepted) {
            throw new Error('Timeout querying for document with duplicate name.');
        }
    }
}
