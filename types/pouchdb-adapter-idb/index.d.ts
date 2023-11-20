/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            idb_attachment_format?: "base64" | "binary" | undefined;
        }
    }

    namespace IdbAdapter {
        interface IdbAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            /**
             * Configures storage persistence.
             *
             * Only works in Firefox 26+.
             */
            storage?: "persistent" | "temporary" | undefined;
            adapter: "idb";
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null, options: IdbAdapter.IdbAdapterConfiguration): Database<Content>;
    }
}

declare module "pouchdb-adapter-idb" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
