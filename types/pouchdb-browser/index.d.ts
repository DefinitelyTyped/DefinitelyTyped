// Type definitions for pouchdb-browser v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-idb" />
/// <reference types="pouchdb-adapter-websql" />
/// <reference types="pouchdb-adapter-http" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />

declare module 'pouchdb-browser' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
