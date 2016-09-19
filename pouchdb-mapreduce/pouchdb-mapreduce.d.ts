// Type definitions for pouchdb-mapreduce v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

declare namespace PouchDB {
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
    }
}

declare module 'pouchdb-adapter-mapreduce' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
