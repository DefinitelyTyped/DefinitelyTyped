/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-leveldb" />
/// <reference types="pouchdb-adapter-http" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />

declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            /** The backend *DOWN adapter being used (MemDOWN, RiakDOWN, …). */
            backend_adapter?: string | undefined;
        }
    }
}

declare module "pouchdb-node" {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
