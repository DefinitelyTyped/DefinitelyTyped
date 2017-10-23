// Type definitions for pouchdb-http 6.1
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare namespace PouchDB {
    namespace HttpAdapter {
        interface HttpAdapterConfiguration
                extends Configuration.RemoteDatabaseConfiguration {
            adapter: 'http';
        }
    }

    interface Static {
        new<Content extends {}>(name: string | null,
                                options: HttpAdapter.HttpAdapterConfiguration
                               ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-http' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
