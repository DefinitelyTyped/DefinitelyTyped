// Type definitions for pouchdb-browser v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="../pouchdb-adapter-idb/pouchdb-adapter-idb.d.ts" />
/// <reference path="../pouchdb-adapter-http/pouchdb-adapter-http.d.ts" />
/// <reference path="../pouchdb-mapreduce/pouchdb-mapreduce.d.ts" />
/// <reference path="../pouchdb-replication/pouchdb-replication.d.ts" />

declare module 'pouchdb-browser' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
