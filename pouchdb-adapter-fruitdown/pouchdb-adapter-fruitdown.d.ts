// Type definitions for pouchdb-adapter-fruitdown v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

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
