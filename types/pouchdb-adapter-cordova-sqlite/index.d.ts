// Type definitions for pouchdb-adapter-sqlite 1.0
// Project: https://pouchdb.com/, https://github.com/pouchdb/pouchdb, https://github.com/pouchdb-community/pouchdb-adapter-cordova-sqlite
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>, Matthew Paul <https://github.com/coffeymatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace AdapterCordovaSqlite {
        interface Configuration extends Configuration.LocalDatabaseConfiguration {
            /**
             * Location of database e.g. 'Default'.
             */
            location?: string;

            /**
             * Location of database e.g. 'Default'. Only use 'location' or 'iosDatabaseLocation' not both.
             */
            iosDatabaseLocation?: string;

            /**
             * Version of android database to use.
             */
            androidDatabaseImplementation?: number;

            /**
             * Enable autocompation of database.
             */
            auto_compaction?: boolean;

            adapter: 'cordova-sqlite';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: AdapterCordovaSqlite.Configuration): Database<Content>;
    }
}

declare module 'pouchdb-adapter-cordova-sqlite' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
