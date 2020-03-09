// Type definitions for pouchdb-node 6.1
// Project: https://pouchdb.com/, https://github.com/pouchdb/pouchdb
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-leveldb" />
/// <reference types="pouchdb-adapter-http" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />

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
