// Type definitions for pouchdb-node v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="../pouchdb-adapter-leveldb/pouchdb-adapter-leveldb.d.ts" />
/// <reference path="../pouchdb-adapter-http/pouchdb-adapter-http.d.ts" />
/// <reference path="../pouchdb-mapreduce/pouchdb-mapreduce.d.ts" />
/// <reference path="../pouchdb-replication/pouchdb-replication.d.ts" />

declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            /** The backend *DOWN adapter being used (MemDOWN, RiakDOWN, …). */
            backend_adapter?: string;
        }
    }
}

declare module 'pouchdb-node' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
