/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace FruitDOWNAdapter {
        interface FruitDOWNAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: "fruitdown";
        }
    }

    interface Static {
        new<Content extends {}>(
            name: string | null,
            options: FruitDOWNAdapter.FruitDOWNAdapterConfiguration,
        ): Database<Content>;
    }
}

declare module "pouchdb-adapter-fruitdown" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
