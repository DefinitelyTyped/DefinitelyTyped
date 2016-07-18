// Type definitions for pouchdb-adapter-memory v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

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
