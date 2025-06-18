/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace AdapterCordovaSqlite {
        interface Configuration extends Configuration.LocalDatabaseConfiguration {
            /**
             * Location of database e.g. 'Default'.
             */
            location?: string | undefined;

            /**
             * Location of database e.g. 'Default'. Only use 'location' or 'iosDatabaseLocation' not both.
             */
            iosDatabaseLocation?: string | undefined;

            /**
             * Version of android database to use.
             */
            androidDatabaseImplementation?: number | undefined;

            /**
             * Enable autocompation of database.
             */
            auto_compaction?: boolean | undefined;

            adapter: "cordova-sqlite";
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null, options: AdapterCordovaSqlite.Configuration): Database<Content>;
    }
}

declare module "pouchdb-adapter-cordova-sqlite" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
