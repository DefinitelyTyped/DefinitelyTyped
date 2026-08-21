/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace LevelDbAdapter {
        interface LevelDbAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: "leveldb";
        }
    }

    interface Static {
        new<Content extends {}>(
            name: string | null,
            options: LevelDbAdapter.LevelDbAdapterConfiguration,
        ): Database<Content>;
    }
}

declare module "pouchdb-adapter-leveldb" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
