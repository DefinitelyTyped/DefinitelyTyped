// Type definitions for pouchdb-adapter-localstorage v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace LocalStorageAdapter {
        interface LocalStorageAdapterConfiguration
                extends Configuration.LocalDatabaseConfiguration {
            adapter: 'localstorage';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: LocalStorageAdapter.LocalStorageAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-localstorage' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
