// Type definitions for pouchdb-adapter-websql 6.1
// Project: https://pouchdb.com/, https://github.com/pouchdb/pouchdb
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>, Matthew Paul <https://github.com/coffeymatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            sqlite_plugin?: boolean;
            websql_encoding?: 'UTF-8' | 'UTF-16';
        }
    }

    namespace AdapterCordovaSqlite {
        interface Configuration
                extends Configuration.LocalDatabaseConfiguration {

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
            androidDatabaseImplementation?: string;

            /**
             * Enable autocompation of database.
             */
            auto_compaction?: boolean

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
