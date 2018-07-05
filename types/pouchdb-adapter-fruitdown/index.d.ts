// Type definitions for pouchdb-adapter-fruitdown 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace FruitDOWNAdapter {
        interface FruitDOWNAdapterConfiguration
                extends Configuration.LocalDatabaseConfiguration {
            adapter: 'fruitdown';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: FruitDOWNAdapter.FruitDOWNAdapterConfiguration
                               ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-fruitdown' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
