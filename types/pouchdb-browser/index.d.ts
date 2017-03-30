// Type definitions for pouchdb-browser v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-idb" />
/// <reference types="pouchdb-adapter-http" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />

declare module 'pouchdb-browser' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
