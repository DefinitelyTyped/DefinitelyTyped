// Type definitions for NeDB 1.8
// Project: https://github.com/louischatriot/nedb
// Definitions by: Stefan Steinhart <https://github.com/reppners>
//                 Anthony Nichols <https://github.com/anthonynichols>
//                 Alejandro Fernandez Haro <https://github.com/afharo>
//                 cherryblossom000 <https://githuhb.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/// <reference types="node" />

import {EventEmitter} from 'events'

export = Datastore

/** Gets the keys of a type that extend a value. */

type KeysMatching<T, V> = {[K in keyof T]: T[K] extends V ? K : never}[keyof T]

/**
 * Get the type of the elements in an array.
 *
 * `T`does not extend `any[]` so that `Extract<T, any[]>` isn't needed in `_Query`.
 */
type ArrayType<T> = T extends Array<infer U> ? U : never

/**
 * Merge two types together, making same keys a union instead of an intersection of the values.
 *
 * @example
 * interface A {
 *     a: number;
 *     b: number;
 *     c: boolean;
 * }
 *
 * interface B {
 *     a: number;
 *     b: string;
 *     d: boolean;
 * }
 *
 * type Merged = Merge<A, B>
 * // Merged = { a: number; b: number | string; c: boolean; d: boolean; }
 */
type Merge<T, U> = Omit<T, keyof U> & Omit<U, keyof T> & {[K in keyof (T | U)]: T[K] | U[K]}

type Contains<T, U> = true extends (T extends U ? true : false) ? true : false

declare class Datastore<T = any> extends EventEmitter {
    constructor(pathOrOptions?: string | Datastore.DataStoreOptions)

    persistence: Datastore.Persistence

    /**
     * Fetches the data from the data file, prepares the database, and trigger the execution of
     * buffered commands, if any.
     *
     * If you use a persistent datastore without the {@link autoload|`autoload`} option, you need to
     * call this manually. **Don't forget it!** No command (e.g. {@link insert|`insert`},
     * {@link find|`find`}, {@link update|`update`}, {@link remove|`remove`}) will be executed
     * before this is called, so make sure the call it yourself or use the `autoload` option.
     */
    loadDatabase(cb?: (err: Error | null) => void): void

    /** Get an array of all the data in the database. */
    getAllData(): Array<WithId<T>>

    /**
     * Resets all currently defined indexes.
     * @param newData The new data to update the indexes with.
     */
    resetIndexes(newData: Array<WithId<T>>): void

    /**
     * Ensure an index is kept for this field.
     *
     * Note: the `_id` is automatically indexed with a unique constraint so there is no need to call `ensureIndex` on it.
     *
     * For now this function is synchronous; we need to test how much time it takes. We use an async
     * API for consistency with the rest of the code.
     * @param cb Optional callback.
     */
    ensureIndex<K extends Keys<T>>(options: Datastore.EnsureIndexOptions<T, K>, cb?: (err: Error | null) => void): void

    /**
     * Remove an index
     * @param cb Optional callback, signature: err
     */
    removeIndex(fieldName: string, cb?: (err: Error | null) => void): void

    /**
     * Add one or several document(s) to all indexes
     */
    addToIndexes(doc: T | T[]): void

    /**
     * Remove one or several document(s) from all indexes
     */
    removeFromIndexes(doc: T | T[]): void

    /**
     * Update one or several documents in all indexes
     * To update multiple documents, oldDoc must be an array of { oldDoc, newDoc } pairs
     * If one update violates a constraint, all changes are rolled back
     */
    updateIndexes(oldDoc: T, newDoc: T): void
    updateIndexes(updates: Array<{oldDoc: T; newDoc: T}>): void

    /**
     * Return the list of candidates for a given query
     * Crude implementation for now, we return the candidates given by the first usable index if any
     * We try the following query types, in this order: basic match, $in match, comparison match
     * One way to make it better would be to enable the use of multiple indexes if the first usable index
     * returns too much data. I may do it in the future.
     *
     * TODO: needs to be moved to the Cursor module
     */
    getCandidates(query: Datastore.GetCandidatesQuery<T>, dontExpireStaleDocs: boolean, callback: (err: Error | null, documents: T[]) => void): void
    getCandidates(query: Datastore.GetCandidatesQuery<T>, callback: (err: Error | null, documents: T[]) => void): void

    /**
     * Insert one or more new documents
     * @param cb Optional callback, signature: err, insertedDoc
     */
    insert(newDoc: T, cb?: (err: Error | Datastore.UniqueViolationError | null, document: T) => void): void
    insert(newDocs: T[], cb?: (err: Error | Datastore.UniqueViolationError | null, documents: T[]) => void): void

    /**
     * Count all documents matching the query
     * @param query MongoDB-style query
     */
    count(query: any, callback: (err: Error | null, n: number) => void): void
    count(query: any): Datastore.CursorCount

    /**
     * Find all documents matching the query
     * If no callback is passed, we return the cursor so that user can limit, skip and finally exec
     * @param query MongoDB-style query
     * @param projection MongoDB-style projection
     */
    find(query: Datastore.Query<T>, projection: Datastore.Projection<T>, callback: (err: Error | null, documents: T[]) => void): void
    find(query: Datastore.Query<T>, projection?: Datastore.Projection<T>): Datastore.Cursor<T>

    /**
     * Find all documents matching the query
     * If no callback is passed, we return the cursor so that user can limit, skip and finally exec
     * * @param {any} query MongoDB-style query
     */
    find(query: Datastore.Query<T>, callback: (err: Error | null, documents: T[]) => void): void

    /**
     * Find one document matching the query
     * @param query MongoDB-style query
     * @param projection MongoDB-style projection
     */
    findOne(query: Datastore.Query<T>, projection: Datastore.Projection<T>, callback: (err: Error | null, document: T) => void): void

    /**
     * Find one document matching the query
     * @param query MongoDB-style query
     */
    findOne(query: Datastore.Query<T>, callback: (err: Error | null, document: T) => void): void

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
    update(
        query: Datastore.Query<T>,
        updateQuery: T | Datastore.UpdateQuery<T>,
        options?: Datastore.UpdateOptions,
        cb?: (err: Error | null, numberOfUpdated: number, affectedDocuments: any, upsert: boolean) => void
    ): void

    /**
     * Remove all docs matching the query
     * For now very naive implementation (similar to update)
     * @param options Optional options
     *                 options.multi If true, can update multiple documents (defaults to false)
     * @param cb Optional callback, signature: err, numRemoved
     *
     * @api private Use Datastore.remove which has the same signature
     */
    remove(query: Datastore.Query<T>, options: Datastore.RemoveOptions, cb?: (err: Error | null, n: number) => void): void
    remove(query: Datastore.Query<T>, cb?: (err: Error | null, n: number) => void): void

    addListener(event: 'compaction.done', listener: () => void): this
    on(event: 'compaction.done', listener: () => void): this
    once(event: 'compaction.done', listener: () => void): this
    prependListener(event: 'compaction.done', listener: () => void): this
    prependOnceListener(event: 'compaction.done', listener: () => void): this
    removeListener(event: 'compaction.done', listener: () => void): this
    off(event: 'compaction.done', listener: () => void): this
    listeners(event: 'compaction.done'): Array<() => void>
    rawListeners(event: 'compaction.done'): Array<() => void>
    listenerCount(type: 'compaction.done'): number
}

// This is to ensure that either both `afterSerialization` and `beforeDeserialization` are provided, or none at all.
interface DataStoreOptionsBase {
    /**
     * The path to the file where the data is persisted. If left blank, the  datastore is automatically considered in-memory
     * only. It cannot end with a `~` which is used in the temporary files NeDB uses to perform crash-safe writes.
     */
    filename?: string


    /**  @default false */
    inMemoryOnly?: boolean

    /**
     * Timestamp the insertion and last update of all documents, with the fields `createdAt` and `updatedAt`. User-specified
     * values override automatic generation, usually useful for testing.
     * @default false
     */
    timestampData?: boolean

    /**
     * If used, the database will automatically be loaded from the data file upon creation (you don't need to call
     * {@link loadDatabase|`loadDatabase`}). Any command issued before the load is finished is buffered and will be executed
     * when load is done.
     * @default false
     * @see onload
     */
    autoload?: boolean


    /**
     * Between 0 and 1. NeDB will refuse to start if more than this percentage of the data file is corrupt. `0` means you
     * don't tolerate ny corruption; `1` means you don't care.
     * @default 0.1
     */
    corruptAlertThreshold?: number

    /**
     * The name of the Node Webkit app.
     *
     * If you are using NeDB from within a Node Webkit app, specify its name (the same one you use in the `package.json`) in
     * this field and the filename` will be relative to the directory Node Webkit uses to store the rest of the application's
     * data (local storage etc.) It works on Linux, OS X and Windows. Now that you can use `require('nw.gui').App.dataPath`
     * in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and
     * it will be removed.
     * @deprecated
     */
    nodeWebkitAppName?: boolean

    /**
     * If you use auto-loading, this is the handler called after the
     * {@link loadDatabase|`loadDatabase`}. If you use auto-loading without specifying this handler and an error happens
     * during load, an error will be thrown.
     * @see autoload
     */
    onload?(error: Error | null): void
}

interface EnsureIndexOptionsDate {

    /**
     * If set, the created index is a TTL (time to live) index that will automatically remove documents when the system
     * date becomes larger than the date on the indexed field plus `expireAfterSeconds`. Documents where the indexed
     * field is not specified or not a `Date` object are ignored.
     */
    expireAfterSeconds?: number
}

/**
 * Obtain the keys of `T` with `_id`.
 *
 * This is distributive, so it will obtain the keys of all types in a union.
 */
type Keys<T> = (T extends any ? keyof T : never) | '_id'

/** Adds the `_id` property to a type. */
type WithId<T> = T & {_id: string}

/** Gets the value of `K` in `T` with the `_id` property. */
type Val<T, K extends Keys<T>> = T extends any ? WithId<T>[Extract<K, keyof T | '_id'>] : never

interface GetCandidatesBaseQuery<T> {
    $in?: T | T[]
}

interface GetCandidatesComparisonQuery<T> extends GetCandidatesBaseQuery<T> {
    $lt?: T
    $lte?: T
    $gt?: T
    $gte?: T
}

interface BaseQuery<T> {
    /** member of */
    $in?: T[]
    /** not equal to */
    $ne?: T
    /** not a member of */
    $nin?: T[]
    /** Checks whether the document possesses the property. */
    $exists?: boolean
}

interface ComparisonQuery<T> extends BaseQuery<T> {
    /** less than */
    $lt?: T
    /** less than or equal to */
    $lte?: T
    /** greater than */
    $gt?: T
    /** greater than or equal to */
    $gte?: T
}

interface StringQuery<T> extends ComparisonQuery<T> {
    /** Checks whether a string is matched by the regular expression. */
    $regex?: RegExp
}

interface ArrayQuery<T> extends BaseQuery<T> {
    /** Matches the size of the array. */
    $size?: number
    /** Matches if at least one array element matches the query entirely. */
    $elemMatch?: ArrayType<T>
}

// Supports arrays with a depth of up to 15
type _Query<T, N extends number = 15> = 0 extends N ? BaseQuery<T> : {
    string: StringQuery<T>
    number: ComparisonQuery<T>
    array: ArrayType<T> | Merge<ArrayQuery<T>, _Query<ArrayType<T>, [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14][N]>>
    other: BaseQuery<T>
}[T extends string ? 'string' : T extends number ? 'number' : T extends any[] ? 'array' : 'other']

declare namespace Datastore {
    interface Cursor<T> {
        sort(query: any): Cursor<T>
        skip(n: number): Cursor<T>
        limit(n: number): Cursor<T>
        projection(query: any): Cursor<T>
        exec(callback: (err: Error | null, documents: T[]) => void): void
    }

    interface CursorCount {
        exec(callback: (err: Error | null, count: number) => void): void
    }

    type DataStoreOptions = DataStoreOptionsBase | DataStoreOptionsBase & {
        /**
         * A hook you can use to transform data after it was serialized and before it is written to disk. Can be used, for
         * example, to encrypt data before writing the database to disk.
         * @param line One line of a NeDB data file.
         * @returns The transformed string, **which must absolutely not contain a `\n` character** (or data will be lost).
         * @see beforeDeserialization
         */
        afterSerialization(line: string): string

        /**
         * The inverse of {@link afterSerialization|`afterSerialization`}.
         *
         * Make sure to include both and not just one or you risk data loss. For the same reason, make sure both functions
         * are inverses of one another. Some failsafe mechanisms are in place to prevent data loss if you misuse the
         * serialization hooks: NeDB checks that never one is declared without the other, and checks that they are reverse
         * of one another by testing on random strings of various lengths. In addition, if too much data is detected as
         * corrupt, NeDB will refuse to start as t could mean you're not using the deserialization hook corresponding to the
         * serialization hook used before (see {@link corruptAlertThreshold|`corruptAlertThreshold`}).
         * @param line
         */
        beforeDeserialization(line: string): string
    }

    /**
     * multi (defaults to false) which allows the modification of several documents if set to true
     * upsert (defaults to false) if you want to insert a new document corresponding to the update rules if your query doesn't match anything
     */
    interface UpdateOptions {
        multi?: boolean
        upsert?: boolean
        returnUpdatedDocs?: boolean
    }

    /**
     * options only one option for now: multi which allows the removal of multiple documents if set to true. Default is false
     */
    interface RemoveOptions {
        multi?: boolean
    }

    type EnsureIndexOptions<T, K extends Keys<T>> = {
        /** The name of the field to index. Use the dot notation to index a field in a nested document. */
        fieldName: K

        /**
         * Whether to enforce field uniqueness. Note that a unique index will raise an error if you try to index two
         * documents for which the field is not defined.
         * @default false
         * @see sparse
         */
        unique?: boolean

        /**
         * Don't index documents for which the field is not defined. Use this option along with {@link unique|`unique`} if
         * you want to accept multiple documents for which it is not defined.
         * @default false
         */
        sparse?: boolean
    } & (Val<T, K> extends Date ? EnsureIndexOptionsDate : Date extends Val<T, K> ? EnsureIndexOptionsDate : unknown)

    interface Persistence {
        compactDatafile(): void
        setAutocompactionInterval(interval: number): void
        stopAutocompaction(): void
    }

    type GetCandidatesQuery<T = unknown> = {
        [K in Keys<T>]?: Val<T, K> |
        (Val<T, K> extends number | string
            ? GetCandidatesComparisonQuery<Val<T, K>>
            : GetCandidatesBaseQuery<Val<T, K>>)
    }

    type Query<T = unknown> = {
        [K in Keys<T>]?: Val<T, K> | (Val<T, K> extends string ? RegExp : never) | _Query<Val<T, K>> & {
            $not?: _Query<Val<T, K>>
            $or?: Array<_Query<Val<T, K>>>
            $and?: Array<_Query<Val<T, K>>>
            $where?(this: WithId<T>): boolean
        }
    } & {[index: string]: any}

    type Projection<T = unknown> = ({[K in keyof T]?: 1} | {[K in keyof T]?: 0}) & {_id?: 0 | 1}

    interface UpdateQuery<T> {
        /** Set an existing field's value. */
        $set?: {[K in keyof T]?: T[K]} & {[index: string]: any}

        /** Delete a field. */
        $unset?: {[K in keyof T]?: true} & {[index: string]: any}

        /** Increments a field. */
        $inc?: {[K in KeysMatching<T, number>]?: number}

        /** Update if the provided value is less than the current value. */
        $min?: {[K in KeysMatching<T, number>]?: number}

        /** Update if the provided value is greater than the current value. */
        $max?: {[K in KeysMatching<T, number>]?: number}

        /** Insert a new element at the end of an array. */
        $push?: {[K in KeysMatching<T, any[]>]?: ArrayType<T[K]> | {
            /** Used to add multiple values at once. */
            $each?: ArrayType<T[K]>
            /**
             * Used to limit the size of the resulting array.
             *
             * A value of 0 will update the array to an empty array.
             * A positive value n will keep only the n first elements.
             * A negative value -n will keep only the last n elements,
             */
            $slice?: number
        }}

        /** Removes elements from the end (if used with `1`) or front (if used with `-1`) of an array. */
        $pop?: {[K in KeysMatching<T, any[]>]?: 1 | -1}

        /**
         * Adds an element to an array only if it isn't already in it.
         *
         * Equality is deep-checked ((i.e. $addToSet will not insert an object in an array already containing the same object)).
         * Note that it doesn't check whether the array contained duplicates before or not.
         */
        $addToSet?: {[K in KeysMatching<T, any[]>]?: ArrayType<T[K]> | {
            /** Used to add multiple values at once. */
            $each: ArrayType<T[K]>
        }}

        /** Removes all values matching a value or even any NeDB query from the array. */
        $pull?: {[K in KeysMatching<T, any[]>]?: _Query<ArrayType<T[K]>>}
    }

    interface UniqueViolationError extends Error {
        errorType: 'uniqueViolated';
        key: string;
    }
}
