// Type definitions for pouchdb-adapter-leveldb 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare namespace PouchDB {
    namespace LevelDbAdapter {
        interface LevelDbAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: 'leveldb';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: LevelDbAdapter.LevelDbAdapterConfiguration
                               ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-leveldb' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
