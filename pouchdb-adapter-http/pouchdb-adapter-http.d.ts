// Type definitions for pouchdb-http v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

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
