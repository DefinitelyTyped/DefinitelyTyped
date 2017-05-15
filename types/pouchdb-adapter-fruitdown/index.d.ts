// Type definitions for pouchdb-adapter-fruitdown v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace FruitDOWNAdapter {
        interface FruitDOWNAdapterConfiguration
                extends Configuration.LocalDatabaseConfiguration {
            adapter: 'fruitdown';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: FruitDOWNAdapter.FruitDOWNAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-fruitdown' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
