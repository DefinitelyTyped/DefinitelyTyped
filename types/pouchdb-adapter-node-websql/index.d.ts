// Type definitions for pouchdb-adapter-node-websql 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-websql" />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare module 'pouchdb-adapter-node-websql' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
