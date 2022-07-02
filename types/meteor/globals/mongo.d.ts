// Based on https://github.com/microsoft/TypeScript/issues/28791#issuecomment-443520161
declare type UnionOmit<T, K extends keyof any> = T extends T ? Pick<T, Exclude<keyof T, K>> : never;

declare namespace Mongo {
    // prettier-ignore
    type BsonType = 1 | "double" |
        2 | "string" |
        3 | "object" |
        4 | "array" |
        5 | "binData" |
        6 | "undefined" |
        7 | "objectId" |
        8 | "bool" |
        9 | "date" |
        10 | "null" |
        11 | "regex" |
        12 | "dbPointer" |
        13 | "javascript" |
        14 | "symbol" |
        15 | "javascriptWithScope" |
        16 | "int" |
        17 | "timestamp" |
        18 | "long" |
        19 | "decimal" |
        -1 | "minKey" |
        127 | "maxKey" | "number";

    type FieldExpression<T> = {
        $eq?: T | undefined;
        $gt?: T | undefined;
        $gte?: T | undefined;
        $lt?: T | undefined;
        $lte?: T | undefined;
        $in?: T[] | undefined;
        $nin?: T[] | undefined;
        $ne?: T | undefined;
        $exists?: boolean | undefined;
        $type?: BsonType[] | BsonType | undefined;
        $not?: FieldExpression<T> | undefined;
        $expr?: FieldExpression<T> | undefined;
        $jsonSchema?: any;
        $mod?: number[] | undefined;
        $regex?: RegExp | string | undefined;
        $options?: string | undefined;
        $text?:
            | {
                  $search: string;
                  $language?: string | undefined;
                  $caseSensitive?: boolean | undefined;
                  $diacriticSensitive?: boolean | undefined;
              }
            | undefined;
        $where?: string | Function | undefined;
        $geoIntersects?: any;
        $geoWithin?: any;
        $near?: any;
        $nearSphere?: any;
        $all?: T[] | undefined;
        $elemMatch?: T extends {} ? Query<T> : FieldExpression<T> | undefined;
        $size?: number | undefined;
        $bitsAllClear?: any;
        $bitsAllSet?: any;
        $bitsAnyClear?: any;
        $bitsAnySet?: any;
        $comment?: string | undefined;
    };

    type Flatten<T> = T extends any[] ? T[0] : T;

    type Query<T> = { [P in keyof T]?: Flatten<T[P]> | RegExp | FieldExpression<Flatten<T[P]>> } & {
        $or?: Query<T>[] | undefined;
        $and?: Query<T>[] | undefined;
        $nor?: Query<T>[] | undefined;
    } & Dictionary<any>;

    type QueryWithModifiers<T> = {
        $query: Query<T>;
        $comment?: string | undefined;
        $explain?: any;
        $hint?: unknown;
        $maxScan?: any;
        $max?: any;
        $maxTimeMS?: any;
        $min?: any;
        $orderby?: any;
        $returnKey?: any;
        $showDiskLoc?: any;
        $natural?: any;
    };

    type Selector<T> = Query<T> | QueryWithModifiers<T>;

    type Dictionary<T> = { [key: string]: T };
    type PartialMapTo<T, M> = Partial<Record<keyof T, M>>;
    type OnlyArrays<T> = T extends any[] ? T : never;
    type OnlyElementsOfArrays<T> = T extends any[] ? Partial<T[0]> : never;
    type ElementsOf<T> = {
        [P in keyof T]?: OnlyElementsOfArrays<T[P]>;
    };
    type PushModifier<T> = {
        [P in keyof T]?:
            | OnlyElementsOfArrays<T[P]>
            | {
                  $each?: T[P] | undefined;
                  $position?: number | undefined;
                  $slice?: number | undefined;
                  $sort?: 1 | -1 | Dictionary<number> | undefined;
              };
    };
    type ArraysOrEach<T> = {
        [P in keyof T]?: OnlyElementsOfArrays<T[P]> | { $each: T[P] };
    };
    type CurrentDateModifier = { $type: 'timestamp' | 'date' } | true;
    type Modifier<T> =
        | T
        | {
              $currentDate?:
                  | (Partial<Record<keyof T, CurrentDateModifier>> & Dictionary<CurrentDateModifier>)
                  | undefined;
              $inc?: (PartialMapTo<T, number> & Dictionary<number>) | undefined;
              $min?: (PartialMapTo<T, Date | number> & Dictionary<Date | number>) | undefined;
              $max?: (PartialMapTo<T, Date | number> & Dictionary<Date | number>) | undefined;
              $mul?: (PartialMapTo<T, number> & Dictionary<number>) | undefined;
              $rename?: (PartialMapTo<T, string> & Dictionary<string>) | undefined;
              $set?: (Partial<T> & Dictionary<any>) | undefined;
              $setOnInsert?: (Partial<T> & Dictionary<any>) | undefined;
              $unset?: (PartialMapTo<T, string | boolean | 1 | 0> & Dictionary<any>) | undefined;
              $addToSet?: (ArraysOrEach<T> & Dictionary<any>) | undefined;
              $push?: (PushModifier<T> & Dictionary<any>) | undefined;
              $pull?: (ElementsOf<T> & Dictionary<any>) | undefined;
              $pullAll?: (Partial<T> & Dictionary<any>) | undefined;
              $pop?: (PartialMapTo<T, 1 | -1> & Dictionary<1 | -1>) | undefined;
          };

    type OptionalId<TSchema> = UnionOmit<TSchema, '_id'> & { _id?: any };

    interface SortSpecifier {}
    interface FieldSpecifier {
        [id: string]: Number;
    }

    type Transform<T> = ((doc: T) => any) | null | undefined;

    type Options<T> = {
        /** Sort order (default: natural order) */
        sort?: SortSpecifier | undefined;
        /** Number of results to skip at the beginning */
        skip?: number | undefined;
        /** Maximum number of results to return */
        limit?: number | undefined;
        /** Dictionary of fields to return or exclude. */
        fields?: FieldSpecifier | undefined;
        /** (Server only) Overrides MongoDB's default index selection and query optimization process. Specify an index to force its use, either by its name or index specification. */
        hint?: unknown | undefined;
        /** (Client only) Default `true`; pass `false` to disable reactivity */
        reactive?: boolean | undefined;
        /**  Overrides `transform` on the  [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation. */
        transform?: Transform<T> | undefined;
    };

    type DispatchTransform<Transform, T, U> = Transform extends (...args: any) => any
        ? ReturnType<Transform>
        : Transform extends null
        ? T
        : U;

    var Collection: CollectionStatic;
    interface CollectionStatic {
        /**
         * Constructor for a Collection
         * @param name The name of the collection. If null, creates an unmanaged (unsynchronized) local collection.
         */
        new <T, U = T>(
            name: string | null,
            options?: {
                /**
                 * The server connection that will manage this collection. Uses the default connection if not specified. Pass the return value of calling `DDP.connect` to specify a different
                 * server. Pass `null` to specify no connection. Unmanaged (`name` is null) collections cannot specify a connection.
                 */
                connection?: Object | null | undefined;
                /** The method of generating the `_id` fields of new documents in this collection.  Possible values:
                 * - **`'STRING'`**: random strings
                 * - **`'MONGO'`**:  random [`Mongo.ObjectID`](#mongo_object_id) values
                 *
                 * The default id generation technique is `'STRING'`.
                 */
                idGeneration?: string | undefined;
                /**
                 * An optional transformation function. Documents will be passed through this function before being returned from `fetch` or `findOne`, and before being passed to callbacks of
                 * `observe`, `map`, `forEach`, `allow`, and `deny`. Transforms are *not* applied for the callbacks of `observeChanges` or to cursors returned from publish functions.
                 */
                transform?: (doc: T) => U;
                /** Set to `false` to skip setting up the mutation methods that enable insert/update/remove from client code. Default `true`. */
                defineMutationMethods?: boolean | undefined;
            },
        ): Collection<T, U>;
    }
    interface Collection<T, U = T> {
        allow<Fn extends Transform<T> = undefined>(options: {
            insert?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
            update?:
                | ((
                      userId: string,
                      doc: DispatchTransform<Fn, T, U>,
                      fieldNames: string[],
                      modifier: any,
                  ) => boolean)
                | undefined;
            remove?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
            fetch?: string[] | undefined;
            transform?: Fn | undefined;
        }): boolean;
        createCappedCollectionAsync(byteSize?: number, maxDocuments?: number): Promise<void>;
        createIndex(indexSpec: { [key: string]: number | string } | string, options?: any): void;
        createIndexAsync(indexSpec: { [key: string]: number | string } | string, options?: any): Promise<void>;
        deny<Fn extends Transform<T> = undefined>(options: {
            insert?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
            update?:
                | ((
                      userId: string,
                      doc: DispatchTransform<Fn, T, U>,
                      fieldNames: string[],
                      modifier: any,
                  ) => boolean)
                | undefined;
            remove?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
            fetch?: string[] | undefined;
            transform?: Fn | undefined;
        }): boolean;
        dropCollectionAsync(): Promise<void>;
        dropIndexAsync(indexName: string): void;
        /**
         * Find the documents in a collection that match the selector.
         * @param selector A query describing the documents to find
         */
        find(selector?: Selector<T> | ObjectID | string): Cursor<T, U>;
        /**
         * Find the documents in a collection that match the selector.
         * @param selector A query describing the documents to find
         */
        find<O extends Options<T>>(
            selector?: Selector<T> | ObjectID | string,
            options?: O,
        ): Cursor<T, DispatchTransform<O['transform'], T, U>>;
        /**
         * Finds the first document that matches the selector, as ordered by sort and skip options. Returns `undefined` if no matching document is found.
         * @param selector A query describing the documents to find
         */
        findOne(selector?: Selector<T> | ObjectID | string): U | undefined;
        /**
         * Finds the first document that matches the selector, as ordered by sort and skip options. Returns `undefined` if no matching document is found.
         * @param selector A query describing the documents to find
         */
        findOne<O extends Omit<Options<T>, 'limit'>>(
            selector?: Selector<T> | ObjectID | string,
            options?: O,
        ): DispatchTransform<O['transform'], T, U> | undefined;
        /**
         * Finds the first document that matches the selector, as ordered by sort and skip options. Returns `undefined` if no matching document is found.
         * @param selector A query describing the documents to find
         */
        findOneAsync(selector?: Selector<T> | ObjectID | string): Promise<U | undefined>;
        /**
         * Finds the first document that matches the selector, as ordered by sort and skip options. Returns `undefined` if no matching document is found.
         * @param selector A query describing the documents to find
         */
        findOneAsync<O extends Omit<Options<T>, 'limit'>>(
            selector?: Selector<T> | ObjectID | string,
            options?: O,
        ): Promise<DispatchTransform<O['transform'], T, U> | undefined>;
        /**
         * Insert a document in the collection.  Returns its unique _id.
         * @param doc The document to insert. May not yet have an _id attribute, in which case Meteor will generate one for you.
         * @param callback If present, called with an error object as the first argument and, if no error, the _id as the second.
         */
        insert(doc: OptionalId<T>, callback?: Function): string;
        /**
         * Insert a document in the collection.  Returns its unique _id.
         * @param doc The document to insert. May not yet have an _id attribute, in which case Meteor will generate one for you.
         * @param callback If present, called with an error object as the first argument and, if no error, the _id as the second.
         */
        insertAsync(doc: OptionalId<T>, callback?: Function): Promise<string>;
        /**
         * Returns the [`Collection`](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html) object corresponding to this collection from the
         * [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
         */
        rawCollection(): any;
        /**
         * Returns the [`Db`](http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html) object corresponding to this collection's database connection from the
         * [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
         */
        rawDatabase(): any;
        /**
         * Remove documents from the collection
         * @param selector Specifies which documents to remove
         * @param callback If present, called with an error object as its argument.
         */
        remove(selector: Selector<T> | ObjectID | string, callback?: Function): number;
        /**
         * Remove documents from the collection
         * @param selector Specifies which documents to remove
         * @param callback If present, called with an error object as its argument.
         */
        removeAsync(selector: Selector<T> | ObjectID | string, callback?: Function): Promise<number>;
        /**
         * Modify one or more documents in the collection. Returns the number of matched documents.
         * @param selector Specifies which documents to modify
         * @param modifier Specifies how to modify the documents
         * @param callback If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
         */
        update(
            selector: Selector<T> | ObjectID | string,
            modifier: Modifier<T>,
            options?: {
                /** True to modify all matching documents; false to only modify one of the matching documents (the default). */
                multi?: boolean | undefined;
                /** True to insert a document if no matching documents are found. */
                upsert?: boolean | undefined;
                /**
                 * Used in combination with MongoDB [filtered positional operator](https://docs.mongodb.com/manual/reference/operator/update/positional-filtered/) to specify which elements to
                 * modify in an array field.
                 */
                arrayFilters?: { [identifier: string]: any }[] | undefined;
            },
            callback?: Function,
        ): number;
        /**
         * Modify one or more documents in the collection. Returns the number of matched documents.
         * @param selector Specifies which documents to modify
         * @param modifier Specifies how to modify the documents
         * @param callback If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
         */
        updateAsync(
            selector: Selector<T> | ObjectID | string,
            modifier: Modifier<T>,
            options?: {
                /** True to modify all matching documents; false to only modify one of the matching documents (the default). */
                multi?: boolean | undefined;
                /** True to insert a document if no matching documents are found. */
                upsert?: boolean | undefined;
                /**
                 * Used in combination with MongoDB [filtered positional operator](https://docs.mongodb.com/manual/reference/operator/update/positional-filtered/) to specify which elements to
                 * modify in an array field.
                 */
                arrayFilters?: { [identifier: string]: any }[] | undefined;
            },
            callback?: Function,
        ): Promise<number>;
        /**
         * Modify one or more documents in the collection, or insert one if no matching documents were found. Returns an object with keys `numberAffected` (the number of documents modified) and
         * `insertedId` (the unique _id of the document that was inserted, if any).
         * @param selector Specifies which documents to modify
         * @param modifier Specifies how to modify the documents
         * @param callback If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
         */
        upsert(
            selector: Selector<T> | ObjectID | string,
            modifier: Modifier<T>,
            options?: {
                /** True to modify all matching documents; false to only modify one of the matching documents (the default). */
                multi?: boolean | undefined;
            },
            callback?: Function,
        ): {
            numberAffected?: number | undefined;
            insertedId?: string | undefined;
        };
        /**
         * Modify one or more documents in the collection, or insert one if no matching documents were found. Returns an object with keys `numberAffected` (the number of documents modified) and
         * `insertedId` (the unique _id of the document that was inserted, if any).
         * @param selector Specifies which documents to modify
         * @param modifier Specifies how to modify the documents
         * @param callback If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
         */
        upsertAsync(
            selector: Selector<T> | ObjectID | string,
            modifier: Modifier<T>,
            options?: {
                /** True to modify all matching documents; false to only modify one of the matching documents (the default). */
                multi?: boolean | undefined;
            },
            callback?: Function,
        ): Promise<{
            numberAffected?: number | undefined;
            insertedId?: string | undefined;
        }>;
        _createCappedCollection(byteSize?: number, maxDocuments?: number): void;
        /** @deprecated */
        _ensureIndex(indexSpec: { [key: string]: number | string } | string, options?: any): void;
        _dropCollection(): Promise<void>;
        _dropIndex(indexName: string): void;
    }

    var Cursor: CursorStatic;
    interface CursorStatic {
        /**
         * To create a cursor, use find. To access the documents in a cursor, use forEach, map, or fetch.
         */
        new <T, U = T>(): Cursor<T, U>;
    }
    interface ObserveCallbacks<T> {
        added?(document: T): void;
        addedAt?(document: T, atIndex: number, before: T | null): void;
        changed?(newDocument: T, oldDocument: T): void;
        changedAt?(newDocument: T, oldDocument: T, indexAt: number): void;
        removed?(oldDocument: T): void;
        removedAt?(oldDocument: T, atIndex: number): void;
        movedTo?(document: T, fromIndex: number, toIndex: number, before: T | null): void;
    }
    interface ObserveChangesCallbacks<T> {
        added?(id: string, fields: Partial<T>): void;
        addedBefore?(id: string, fields: Partial<T>, before: T | null): void;
        changed?(id: string, fields: Partial<T>): void;
        movedBefore?(id: string, before: T | null): void;
        removed?(id: string): void;
    }
    interface Cursor<T, U = T> {
        /**
         * Returns the number of documents that match a query.
         * @param applySkipLimit If set to `false`, the value returned will reflect the total number of matching documents, ignoring any value supplied for limit. (Default: true)
         */
        count(applySkipLimit?: boolean): number;
        /**
         * Returns the number of documents that match a query.
         * @param applySkipLimit If set to `false`, the value returned will reflect the total number of matching documents, ignoring any value supplied for limit. (Default: true)
         */
        countAsync(applySkipLimit?: boolean): Promise<number>;
        /**
         * Return all matching documents as an Array.
         */
        fetch(): Array<U>;
        /**
         * Return all matching documents as an Array.
         */
        fetchAsync(): Promise<Array<U>>;
        /**
         * Call `callback` once for each matching document, sequentially and
         *          synchronously.
         * @param callback Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself.
         * @param thisArg An object which will be the value of `this` inside `callback`.
         */
        forEach(callback: (doc: U, index: number, cursor: Cursor<T, U>) => void, thisArg?: any): void;
        /**
         * Call `callback` once for each matching document, sequentially and
         *          synchronously.
         * @param callback Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself.
         * @param thisArg An object which will be the value of `this` inside `callback`.
         */
        forEachAsync(callback: (doc: U, index: number, cursor: Cursor<T, U>) => void, thisArg?: any): Promise<void>;
        /**
         * Map callback over all matching documents. Returns an Array.
         * @param callback Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself.
         * @param thisArg An object which will be the value of `this` inside `callback`.
         */
        map<M>(callback: (doc: U, index: number, cursor: Cursor<T, U>) => M, thisArg?: any): Array<M>;
        /**
         * Map callback over all matching documents. Returns an Array.
         * @param callback Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself.
         * @param thisArg An object which will be the value of `this` inside `callback`.
         */
        mapAsync<M>(callback: (doc: U, index: number, cursor: Cursor<T, U>) => M, thisArg?: any): Promise<Array<M>>;
        /**
         * Watch a query. Receive callbacks as the result set changes.
         * @param callbacks Functions to call to deliver the result set as it changes
         */
        observe(callbacks: ObserveCallbacks<U>): Meteor.LiveQueryHandle;
        /**
         * Watch a query. Receive callbacks as the result set changes. Only the differences between the old and new documents are passed to the callbacks.
         * @param callbacks Functions to call to deliver the result set as it changes
         */
        observeChanges(
            callbacks: ObserveChangesCallbacks<T>,
            options?: { nonMutatingCallbacks?: boolean | undefined },
        ): Meteor.LiveQueryHandle;
        [Symbol.iterator](): Iterator<T, never, never>;
        [Symbol.asyncIterator](): AsyncIterator<T, never, never>;
    }

    var ObjectID: ObjectIDStatic;
    interface ObjectIDStatic {
        /**
         * Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will generated randomly (not using MongoDB's ID construction rules).

         * @param hexString The 24-character hexadecimal contents of the ObjectID to create
         */
        new (hexString?: string): ObjectID;
    }
    interface ObjectID {
        toHexString(): string;
        equals(otherID: ObjectID): boolean;
    }

    function setConnectionOptions(options: any): void;
}

declare namespace Mongo {
    interface AllowDenyOptions {
        insert?: ((userId: string, doc: any) => boolean) | undefined;
        update?: ((userId: string, doc: any, fieldNames: string[], modifier: any) => boolean) | undefined;
        remove?: ((userId: string, doc: any) => boolean) | undefined;
        fetch?: string[] | undefined;
        transform?: Function | null | undefined;
    }
}

declare interface MongoConnection {
    db: any;
    client: any;
}

declare function defaultRemoteCollectionDriver(): {
    mongo: MongoConnection;
};

declare var NpmModules: {
    mongodb: {
        version: string,
        module: any
    }
};
