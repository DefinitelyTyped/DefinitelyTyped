/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace HttpAdapter {
        interface HttpAdapterConfiguration extends Configuration.RemoteDatabaseConfiguration {
            adapter: "http";
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null, options: HttpAdapter.HttpAdapterConfiguration): Database<Content>;
    }
}

declare module "pouchdb-adapter-http" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
