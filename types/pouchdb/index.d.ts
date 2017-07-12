// Type definitions for pouchdb 6.1
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types='pouchdb-adapter-fruitdown' />
/// <reference types='pouchdb-adapter-http' />
/// <reference types='pouchdb-adapter-idb' />
/// <reference types='pouchdb-adapter-leveldb' />
/// <reference types='pouchdb-adapter-localstorage' />
/// <reference types='pouchdb-adapter-memory' />
/// <reference types='pouchdb-adapter-node-websql' />
/// <reference types='pouchdb-adapter-websql' />
/// <reference types='pouchdb-browser' />
/// <reference types='pouchdb-core' />
/// <reference types='pouchdb-http' />
/// <reference types='pouchdb-mapreduce' />
/// <reference types='pouchdb-node' />
/// <reference types='pouchdb-replication' />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare module 'pouchdb' {
    const plugin: PouchDB.Static;
    export = plugin;
}
