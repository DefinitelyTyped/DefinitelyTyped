// Type definitions for pouchdb-adapter-idb 6.1
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
            idb_attachment_format?: 'base64' | 'binary';
        }
    }

    namespace IdbAdapter {
        interface IdbAdapterConfiguration
                extends Configuration.LocalDatabaseConfiguration {
            /**
             * Configures storage persistence.
             *
             * Only works in Firefox 26+.
             */
            storage?: 'persistent' | 'temporary';
            adapter: 'idb';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: IdbAdapter.IdbAdapterConfiguration
                               ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-idb' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
