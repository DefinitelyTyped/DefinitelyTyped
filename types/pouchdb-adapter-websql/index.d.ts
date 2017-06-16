// Type definitions for pouchdb-adapter-websql 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            sqlite_plugin?: boolean;
            websql_encoding?: 'UTF-8' | 'UTF-16';
        }
    }

    namespace AdapterWebSql {
        interface Configuration
                extends Configuration.LocalDatabaseConfiguration {
            /**
             * Amount in MB to request for storage.
             */
            size?: number;
            adapter: 'websql';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: AdapterWebSql.Configuration): Database<Content>;
    }
}

declare module 'pouchdb-adapter-websql' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
