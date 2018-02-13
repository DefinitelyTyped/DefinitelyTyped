// Type definitions for pouchdb-adapter-localstorage 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace LocalStorageAdapter {
        interface LocalStorageAdapterConfiguration
                extends Configuration.LocalDatabaseConfiguration {
            adapter: 'localstorage';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: LocalStorageAdapter.LocalStorageAdapterConfiguration
                               ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-localstorage' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
