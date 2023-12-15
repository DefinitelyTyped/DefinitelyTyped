/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    type BuiltInReducers = "_sum" | "_count" | "_stats";
    /**
     * CouchDB-style Map function
     *
     * @param emit CouchDB does not support emit as an argument and maps defined this way will always run locally
     */
    type Map<Content extends {}, Result> = (doc: Content, emit?: (key: any, value: Content | Result) => void) => void;
    /**
     * CouchDB-style Reduction function
     *
     * @param keys From CouchDB documentation: Array of pairs of docid-key for related map function results;
     *             PouchDB may pass a simple array and also supports complex keys.
     */
    type Reducer<Content extends {}, Reduction> = (
        keys: any | null,
        values: Content[] | Reduction[],
        rereduce: boolean,
    ) => Reduction[] | Reduction;

    interface Filter<Content extends {}, Reduction> {
        // Assume that Content | Reduction is enough leverage in most cases to handle intermediate map emits
        map: Map<Content, Reduction>;
        reduce?: Reducer<Content, Reduction> | BuiltInReducers | string | undefined;
    }

    namespace Query {
        interface Options<Content extends {}, Reduction> {
            /** Reduce function, or the string name of a built-in function: '_sum', '_count', or '_stats'. */
            reduce?: Reducer<Content, Reduction> | BuiltInReducers | boolean | undefined;
            /** Include the document in each row in the doc field. */
            include_docs?: boolean | undefined;
            /** Include conflicts in the _conflicts field of a doc. */
            conflicts?: boolean | undefined;
            /** Include attachment data. */
            attachments?: boolean | undefined;
            /** Return attachment data as Blobs/Buffers, instead of as base64-encoded strings. */
            binary?: boolean | undefined;
            /** Get rows with keys in a certain range (inclusive/inclusive). */
            startkey?: any;
            /** Get rows with keys in a certain range (inclusive/inclusive). */
            endkey?: any;
            /** Include rows having a key equal to the given options.endkey. */
            inclusive_end?: boolean | undefined;
            /** Maximum number of rows to return. */
            limit?: number | undefined;
            /** Number of rows to skip before returning (warning: poor performance on IndexedDB/LevelDB!). */
            skip?: number | undefined;
            /** Reverse the order of the output rows. */
            descending?: boolean | undefined;
            /** Only return rows matching this key. */
            key?: any;
            /** Array of keys to fetch in a single shot. */
            keys?: any[] | undefined;
            /** True if you want the reduce function to group results by keys, rather than returning a single result. */
            group?: boolean | undefined;
            /**
             * Number of elements in a key to group by, assuming the keys are arrays.
             * Defaults to the full length of the array.
             */
            group_level?: number | undefined;
            /**
             * unspecified (default): Returns the latest results, waiting for the view to build if necessary.
             * 'ok': Returns results immediately, even if they’re out-of-date.
             * 'update_after': Returns results immediately, but kicks off a build afterwards.
             */
            stale?: "ok" | "update_after" | undefined;
            /**
             * Include an update_seq value indicating which sequence id
             * of the underlying database the view reflects.
             */
            update_seq?: boolean | undefined;
        }

        interface Response<Content extends {}> {
            total_rows: number;
            offset: number;
            rows: Array<{
                id: any;
                key: any;
                value: any;
                doc?: Core.ExistingDocument<Content & Core.AllDocsMeta> | undefined;
            }>;
        }
    }

    interface Database<Content extends {} = {}> {
        /**
         * Cleans up any stale map/reduce indexes.
         *
         * As design docs are deleted or modified, their associated index
         * files(in CouchDB) or companion databases (in local PouchDBs) continue
         * to take up space on disk. viewCleanup() removes these unnecessary
         * index files.
         */
        viewCleanup(callback: Core.Callback<Core.BasicResponse>): void;
        /**
         * Cleans up any stale map/reduce indexes.
         *
         * As design docs are deleted or modified, their associated index
         * files(in CouchDB) or companion databases (in local PouchDBs) continue
         * to take up space on disk. viewCleanup() removes these unnecessary
         * index files.
         */
        viewCleanup(): Promise<Core.BasicResponse>;

        /**
         * Invoke a map/reduce function, which allows you to perform more complex queries
         * on PouchDB than what you get with allDocs().
         */
        query<
            Result extends {},
            Model extends {} = Content,
        >(
            fun: string | Map<Model, Result> | Filter<Model, Result>,
            opts: Query.Options<Model, Result>,
            callback: Core.Callback<Query.Response<Result>>,
        ): void;
        /**
         * Invoke a map/reduce function, which allows you to perform more complex queries
         * on PouchDB than what you get with allDocs().
         */
        query<Result extends {}, Model extends {} = Content>(
            fun: string | Map<Model, Result> | Filter<Model, Result>,
            callback: Core.Callback<Query.Response<Result>>,
        ): void;
        /**
         * Invoke a map/reduce function, which allows you to perform more complex queries
         * on PouchDB than what you get with allDocs().
         */
        query<Result extends {}, Model extends {} = Content>(
            fun: string | Map<Model, Result> | Filter<Model, Result>,
            opts?: Query.Options<Model, Result>,
        ): Promise<Query.Response<Result>>;
    }
}

declare module "pouchdb-mapreduce" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
