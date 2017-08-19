// Type definitions for pouchdb-http v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace HttpAdapter {
        interface HttpAdapterConfiguration
                extends Configuration.RemoteDatabaseConfiguration {
            adapter: 'http';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: HttpAdapter.HttpAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-http' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
