// Type definitions for pouchdb-adapter-node-websql v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="../pouchdb-adapter-websql/pouchdb-adapter-websql.d.ts" />

declare module 'pouchdb-adapter-node-websql' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
