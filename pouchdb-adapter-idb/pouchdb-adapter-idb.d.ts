// Type definitions for pouchdb-adapter-idb v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

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
        new<Content extends Core.Encodable>(name: string | void,
            options: IdbAdapter.IdbAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-idb' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
