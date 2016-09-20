// Type definitions for pouchdb-adapter-leveldb v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

declare namespace PouchDB {
    namespace LevelDbAdapter {
        interface LevelDbAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: 'leveldb';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: LevelDbAdapter.LevelDbAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-leveldb' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
