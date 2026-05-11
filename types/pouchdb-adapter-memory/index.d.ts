/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace MemoryAdapter {
        interface MemoryAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: "memory";
        }
    }

    interface Static {
        new<Content extends {}>(
            name: string | null,
            options: MemoryAdapter.MemoryAdapterConfiguration,
        ): Database<Content>;
    }
}

declare module "pouchdb-adapter-memory" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
