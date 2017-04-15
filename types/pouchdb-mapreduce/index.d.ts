// Type definitions for pouchdb-mapreduce v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {

    interface Filter {
        map: (doc: any) => void;
        reduce?: (key: string, value: any) => any;
    }

    namespace Query {
        interface Options {
            /** Reduce function, or the string name of a built-in function: '_sum', '_count', or '_stats'. */
            reduce?: ((...args: any[]) => void) | '_sum' | '_count' | '_stats' | boolean;
            /** Include the document in each row in the doc field. */
            include_docs?: boolean;
            /** Include conflicts in the _conflicts field of a doc. */
            conflicts?: boolean;
            /** Include attachment data. */
            attachments?: boolean;
            /** Return attachment data as Blobs/Buffers, instead of as base64-encoded strings. */
            binary?: boolean;
            /** Get rows with keys in a certain range (inclusive/inclusive). */
            startkey?: any;
            /** Get rows with keys in a certain range (inclusive/inclusive). */
            endkey?: any;
            /** Include rows having a key equal to the given options.endkey. */
            inclusive_end?: boolean;
            /** Maximum number of rows to return. */
            limit?: number;
            /** Number of rows to skip before returning (warning: poor performance on IndexedDB/LevelDB!). */
            skip?: number;
            /** Reverse the order of the output rows. */
            descending?: boolean;
            /** Only return rows matching this key. */
            key?: any;
            /** Array of keys to fetch in a single shot. */
            keys?: any[];
            /** True if you want the reduce function to group results by keys, rather than returning a single result. */
            group?: boolean;
            /**
             * Number of elements in a key to group by, assuming the keys are arrays.
             * Defaults to the full length of the array.
             */
            group_level?: number;
            /**
             * unspecified (default): Returns the latest results, waiting for the view to build if necessary.
             * 'ok': Returns results immediately, even if they’re out-of-date.
             * 'update_after': Returns results immediately, but kicks off a build afterwards.
             */
            stale?: 'ok' | 'update_after';
        }

        interface Response<Content extends Core.Encodable> {
            total_rows: number;
            offset: number;
            rows: {
                id: any;
                key: any;
                value: any;
                doc?: Core.ExistingDocument<Content & Core.AllDocsMeta>;
            }[]
        }
    }

    export interface Database<Content extends Core.Encodable> {
        /**
         * Cleans up any stale map/reduce indexes.
         *
         * As design docs are deleted or modified, their associated index
         * files(in CouchDB) or companion databases (in local PouchDBs) continue
         * to take up space on disk. viewCleanup() removes these unnecessary
         * index files.
         */
        viewCleanup(callback: PouchDB.Core.Callback<any,void>): void;
        /**
         * Cleans up any stale map/reduce indexes.
         *
         * As design docs are deleted or modified, their associated index
         * files(in CouchDB) or companion databases (in local PouchDBs) continue
         * to take up space on disk. viewCleanup() removes these unnecessary
         * index files.
         */
        viewCleanup(): Promise<void>;

        /**
         * Invoke a map/reduce function, which allows you to perform more complex queries
         * on PouchDB than what you get with allDocs().
         */
        query(fun: string | Filter | Function, opts: Query.Options, callback: (err: Core.Error, res: Query.Response<Content>) => void): void;
        /**
         * Invoke a map/reduce function, which allows you to perform more complex queries
         * on PouchDB than what you get with allDocs().
         */
        query(fun: string | Filter | Function, callback: (err: Core.Error, res: Query.Response<Content>) => void): void;
        /**
         * Invoke a map/reduce function, which allows you to perform more complex queries
         * on PouchDB than what you get with allDocs().
         */
        query(fun: string | Filter | Function, opts?: Query.Options): Promise<Query.Response<Content>>;
    }
}

declare module 'pouchdb-mapreduce' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
