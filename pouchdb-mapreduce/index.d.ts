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
            reduce?: ((...args: any[]) => void) | '_sum' | '_count' | '_stats' | boolean;
            include_docs?: boolean;
            conflicts?: boolean;
            attachments?: boolean;
            binary?: boolean;
            startkey?: any;
            endkey?: any;
            inclusive_end?: boolean;
            limit?: number;
            skip?: number;
            descending?: boolean;
            key?: any;
            keys?: any[];
            group?: boolean;
            group_level?: number;
            stale?: 'ok' | 'update_after';
        }

        interface Response {
            total_rows: number;
            offset: number;
            rows: {
                id: any;
                key: any;
                value: any;
                doc?: any;
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
        viewCleanup(): Promise<void>;

        query(fun: string, opts: Query.Options, callback: (err: Core.Error, res: Query.Response) => void): void;
        query(fun: string, callback: (err: Core.Error, res: Query.Response) => void): void;
        query(fun: Filter, opts: Query.Options, callback: (err: Core.Error, res: Query.Response) => void): void;
        query(fun: Filter, callback: (err: Core.Error, res: Query.Response) => void): void;
        query(fun: string | Filter | Function, opts?: Query.Options): Promise<Query.Response>;
    }
}

declare module 'pouchdb-mapreduce' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
