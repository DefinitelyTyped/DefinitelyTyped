// Type definitions for pouchdb-adapter-memory v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace MemoryAdapter {
        interface MemoryAdapterConfiguration
                extends Configuration.LocalDatabaseConfiguration {
            adapter: 'memory';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: MemoryAdapter.MemoryAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-memory' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
