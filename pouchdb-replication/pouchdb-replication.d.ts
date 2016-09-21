// Type definitions for pouchdb-replication v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

declare namespace PouchDB {
    namespace Replication {
        /** @todo When is this present? */
        interface ReplicationMeta {
            _replication_id: string;
            _replication_state: string;
            _replication_state_time: number;
            _replication_stats: {};
        }
    }
}

declare module 'pouchdb-replication' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
