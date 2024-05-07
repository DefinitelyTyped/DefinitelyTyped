/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace LocalStorageAdapter {
        interface LocalStorageAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: "localstorage";
        }
    }

    interface Static {
        new<Content extends {}>(
            name: string | null,
            options: LocalStorageAdapter.LocalStorageAdapterConfiguration,
        ): Database<Content>;
    }
}

declare module "pouchdb-adapter-localstorage" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
