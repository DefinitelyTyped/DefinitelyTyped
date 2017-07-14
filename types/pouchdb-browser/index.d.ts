// Type definitions for pouchdb-browser 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-idb" />
/// <reference types="pouchdb-adapter-websql" />
/// <reference types="pouchdb-adapter-http" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare module 'pouchdb-browser' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
