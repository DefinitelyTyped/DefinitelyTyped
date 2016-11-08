// Type definitions for pouchdb v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../pouchdb-adapter-fruitdown/pouchdb-adapter-fruitdown.d.ts' />
/// <reference path='../pouchdb-adapter-http/pouchdb-adapter-http.d.ts' />
/// <reference path='../pouchdb-adapter-idb/pouchdb-adapter-idb.d.ts' />
/// <reference path='../pouchdb-adapter-leveldb/pouchdb-adapter-leveldb.d.ts' />
/// <reference path='../pouchdb-adapter-localstorage/pouchdb-adapter-localstorage.d.ts' />
/// <reference path='../pouchdb-adapter-memory/pouchdb-adapter-memory.d.ts' />
/// <reference path='../pouchdb-adapter-node-websql/pouchdb-adapter-node-websql.d.ts' />
/// <reference path='../pouchdb-adapter-websql/pouchdb-adapter-websql.d.ts' />
/// <reference path='../pouchdb-browser/pouchdb-browser.d.ts' />
/// <reference path='../pouchdb-core/pouchdb-core.d.ts' />
/// <reference path='../pouchdb-http/pouchdb-http.d.ts' />
/// <reference path='../pouchdb-mapreduce/pouchdb-mapreduce.d.ts' />
/// <reference path='../pouchdb-node/pouchdb-node.d.ts' />
/// <reference path='../pouchdb-replication/pouchdb-replication.d.ts' />

declare module 'pouchdb' {
    const plugin: PouchDB.Static;
    export = plugin;
}
