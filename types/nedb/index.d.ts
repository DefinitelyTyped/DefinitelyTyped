// Type definitions for NeDB 1.8
// Project: https://github.com/louischatriot/nedb
// Definitions by: Stefan Steinhart <https://github.com/reppners>
//                 Anthony Nichols <https://github.com/anthonynichols>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Nedb;
export as namespace Nedb;

declare class Nedb {
    constructor(pathOrOptions?: string | Nedb.DataStoreOptions);

    persistence: Nedb.Persistence;

    /**
     * Load the database from the datafile, and trigger the execution of buffered commands if any
     */
    loadDatabase(cb?: (err: Error) => void): void;

    /**
     * Get an array of all the data in the database
     */
    getAllData(): any[];

    /**
     * Reset all currently defined indexes
     */
    resetIndexes(newData: any): void;

    /**
     * Ensure an index is kept for this field. Same parameters as lib/indexes
     * For now this function is synchronous, we need to test how much time it takes
     * We use an async API for consistency with the rest of the code
     * @param cb Optional callback, signature: err
     */
    ensureIndex(options: Nedb.EnsureIndexOptions, cb?: (err: Error) => void): void;

    /**
     * Remove an index
     * @param cb Optional callback, signature: err
     */
    removeIndex(fieldName: string, cb?: (err: Error) => void): void;

    /**
     * Add one or several document(s) to all indexes
     */
    addToIndexes<T>(doc: T | T[]): void;

    /**
     * Remove one or several document(s) from all indexes
     */
    removeFromIndexes<T>(doc: T | T[]): void;

    /**
     * Update one or several documents in all indexes
     * To update multiple documents, oldDoc must be an array of { oldDoc, newDoc } pairs
     * If one update violates a constraint, all changes are rolled back
     */
    updateIndexes<T>(oldDoc: T, newDoc: T): void;
    updateIndexes<T>(updates: Array<{ oldDoc: T; newDoc: T }>): void;

    /**
     * Return the list of candidates for a given query
     * Crude implementation for now, we return the candidates given by the first usable index if any
     * We try the following query types, in this order: basic match, $in match, comparison match
     * One way to make it better would be to enable the use of multiple indexes if the first usable index
     * returns too much data. I may do it in the future.
     *
     * TODO: needs to be moved to the Cursor module
     */
    getCandidates(query: any): void;

    /**
     * Insert a new document
     * @param cb Optional callback, signature: err, insertedDoc
     */
    insert<T>(newDoc: T, cb?: (err: Error, document: T) => void): void;

    /**
     * Count all documents matching the query
     * @param query MongoDB-style query
     */
    count(query: any, callback: (err: Error, n: number) => void): void;
    count(query: any): Nedb.CursorCount;

    /**
     * Find all documents matching the query
     * If no callback is passed, we return the cursor so that user can limit, skip and finally exec
     * @param query MongoDB-style query
     * @param projection MongoDB-style projection
     */
    find<T>(query: any, projection: T, callback: (err: Error, documents: T[]) => void): void;
    find<T>(query: any, projection?: T): Nedb.Cursor<T>;

    /**
     * Find all documents matching the query
     * If no callback is passed, we return the cursor so that user can limit, skip and finally exec
     * * @param {any} query MongoDB-style query
     */
    find<T>(query: any, callback: (err: Error, documents: T[]) => void): void;

    /**
     * Find one document matching the query
     * @param query MongoDB-style query
     * @param projection MongoDB-style projection
     */
    findOne<T>(query: any, projection: T, callback: (err: Error, document: T) => void): void;

    /**
     * Find one document matching the query
     * @param query MongoDB-style query
     */
    findOne<T>(query: any, callback: (err: Error, document: T) => void): void;

    /**
     * Update all docs matching query v1.7.4 and prior signature.
     * For now, very naive implementation (recalculating the whole database)
     * @param options Optional options
     *                 options.multi If true, can update multiple documents (defaults to false)
     *                 options.upsert If true, document is inserted if the query doesn't match anything
     * @param cb Optional callback, signature: err,
     *                                                    numReplaced,
     *                                                    upsert (set to true if the update was in fact an upsert)
     *
     * @api private Use Datastore.update which has the same signature
     */
    update(query: any, updateQuery: any, options?: Nedb.UpdateOptions, cb?: (err: Error, numberOfUpdated: number, upsert: boolean) => void): void;

    /**
     * Update all docs matching query v1.8 signature.
     * For now, very naive implementation (recalculating the whole database)
     * @param options Optional options
     *                 options.multi If true, can update multiple documents (defaults to false)
     *                 options.upsert If true, document is inserted if the query doesn't match anything
     * @param cb Optional callback, signature: err,
     *                                                    numAffected,
     *                                                    affectedDocuments (when returnUpdatedDocs is set to true), obj or array
     *                                                    upsert (set to true if the update was in fact an upsert)
     *
     * @api private Use Datastore.update which has the same signature
     */
    update<T>(query: any, updateQuery: any, options?: Nedb.UpdateOptions, cb?: (err: Error, numberOfUpdated: number, affectedDocuments: any, upsert: boolean) => void): void;

    /**
     * Remove all docs matching the query
     * For now very naive implementation (similar to update)
     * @param options Optional options
     *                 options.multi If true, can update multiple documents (defaults to false)
     * @param cb Optional callback, signature: err, numRemoved
     *
     * @api private Use Datastore.remove which has the same signature
     */
    remove(query: any, options: Nedb.RemoveOptions, cb?: (err: Error, n: number) => void): void;
    remove(query: any, cb?: (err: Error, n: number) => void): void;
}

declare namespace Nedb {
    interface Cursor<T> {
        sort(query: any): Cursor<T>;
        skip(n: number): Cursor<T>;
        limit(n: number): Cursor<T>;
        projection(query: any): Cursor<T>;
        exec(callback: (err: Error, documents: T[]) => void): void;
    }

    interface CursorCount {
        exec(callback: (err: Error, count: number) => void): void;
    }

    interface DataStoreOptions {
        filename?: string; // Optional, datastore will be in-memory only if not provided
        inMemoryOnly?: boolean; // Optional, default to false
        nodeWebkitAppName?: boolean; // Optional, specify the name of your NW app if you want options.filename to be relative to the directory where
        autoload?: boolean; // Optional, defaults to false
        // Optional, if autoload is used this will be called after the load database with the error object as parameter. If you don't pass it the error will be thrown
        onload?(error: Error): any;
        // (optional): hook you can use to transform data after it was serialized and before it is written to disk.
        // Can be used for example to encrypt data before writing database to disk.
        // This function takes a string as parameter (one line of an NeDB data file) and outputs the transformed string, which must absolutely not contain a \n character (or data will be lost)
        afterSerialization?(line: string): string;
        // (optional): reverse of afterSerialization.
        // Make sure to include both and not just one or you risk data loss.
        // For the same reason, make sure both functions are inverses of one another.
        // Some failsafe mechanisms are in place to prevent data loss if you misuse the serialization hooks:
        // NeDB checks that never one is declared without the other, and checks that they are reverse of one another by testing on random strings of various lengths.
        // In addition, if too much data is detected as corrupt,
        // NeDB will refuse to start as it could mean you're not using the deserialization hook corresponding to the serialization hook used before (see below)
        beforeDeserialization?(line: string): string;
        // (optional): between 0 and 1, defaults to 10%. NeDB will refuse to start if more than this percentage of the datafile is corrupt.
        // 0 means you don't tolerate any corruption, 1 means you don't care
        corruptAlertThreshold?: number;
        // (optional, defaults to false)
        // timestamp the insertion and last update of all documents, with the fields createdAt and updatedAt. User-specified values override automatic generation, usually useful for testing.
        timestampData?: boolean;
    }

    /**
     * multi (defaults to false) which allows the modification of several documents if set to true
     * upsert (defaults to false) if you want to insert a new document corresponding to the update rules if your query doesn't match anything
     */
    interface UpdateOptions {
        multi?: boolean;
        upsert?: boolean;
        returnUpdatedDocs?: boolean;
    }

    /**
     * options only one option for now: multi which allows the removal of multiple documents if set to true. Default is false
     */
    interface RemoveOptions {
        multi?: boolean;
    }

    interface EnsureIndexOptions {
        fieldName: string;
        unique?: boolean;
        sparse?: boolean;
    }

    interface Persistence {
        compactDatafile(): void;
        setAutocompactionInterval(interval: number): void;
        stopAutocompaction(): void;
    }
}
