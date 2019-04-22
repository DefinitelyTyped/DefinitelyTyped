// Type definitions for pouchdb-replication 6.4
// Project: https://pouchdb.com/, https://github.com/pouchdb/pouchdb
// Definitions by: Jakub Navratil <https://github.com/trubit>, Sebastián Ramírez <https://github.com/tiangolo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-find" />

declare namespace PouchDB {
    namespace Replication {
        interface ReplicateOptions {
            /** If true, starts subscribing to future changes in the source database and continue replicating them. */
            live?: boolean;

            /**
             * If true will attempt to retry replications in the case of failure (due to being offline),
             * using a backoff algorithm that retries at longer and longer intervals until a connection is re-established,
             * with a maximum delay of 10 minutes. Only applicable if options.live is also true.
             */
            retry?: boolean;

            /**
             * Reference a filter function from a design document to selectively get updates.
             * To use a view function, pass '_view' here and provide a reference to the view function in options.view.
             * See filtered changes for details.
             */
            filter?: string | ((doc: any, params: any) => any);

            /** Only show changes for docs with these ids (array of strings). */
            doc_ids?: string[];

            /**
             * Object containing properties that are passed to the filter function, e.g. {"foo:"bar"},
             * where "bar" will be available in the filter function as params.query.foo.
             * To access the params, define your filter function like function (doc, params).
             */
            query_params?: {[paramName: string]: any};

            /**
             * Specify a view function (e.g. 'design_doc_name/view_name' or 'view_name' as shorthand for 'view_name/view_name') to act as a filter.
             * Documents counted as “passed” for a view filter if a map function emits at least one record for them.
             * Note: options.filter must be set to '_view' for this option to work.
             */
            view?: string;

            /**
             * Filter using a query/pouchdb-find selector. Note: Selectors are not supported in CouchDB 1.x.
             */
            selector?: Find.Selector;

            /** Replicate changes after the given sequence number. */
            since?: any;

            /** Configure the heartbeat supported by CouchDB which keeps the change connection alive. */
            heartbeat?: any;

            /** Request timeout (in milliseconds). */
            timeout?: number | false;

            /**
             * Number of change feed items to process at a time. Defaults to 100.
             * This affects the number of docs and attachments held in memory and the number sent at a time to the target server.
             * You may need to adjust downward if targeting devices with low amounts of memory
             * e.g. or if the documents and/or attachments are large in size or if there are many conflicted revisions.
             * If your documents are small in size, then increasing this number will probably speed replication up.
             */
            batch_size?: number;

            /**
             * Number of batches to process at a time. Defaults to 10.
             * This (along wtih batch_size) controls how many docs are kept in memory at a time,
             * so the maximum docs in memory at once would equal batch_size × batches_limit.
             */
            batches_limit?: number;

            /**
             * Backoff function to be used in retry replication. This is a function that takes the current
             * backoff as input (or 0 the first time) and returns a new backoff in milliseconds.
             * You can use this to tweak when and how replication will try to reconnect to a remote database when the user goes offline.
             * Defaults to a function that chooses a random backoff between 0 and 2 seconds and doubles every time it fails to connect.
             * The default delay will never exceed 10 minutes.
             */
            back_off_function?(delay: number): number;

            /**
             * Can be used if you want to disable checkpoints on the source, target, or both.
             * Setting this option to false will prevent writing checkpoints on both source and target.
             * Setting it to source will only write checkpoints on the source.
             * Setting it to target will only write checkpoints on the target.
             */
            checkpoint?: boolean | 'target' | 'source';
        }

        interface ReplicationEventEmitter<Content extends {}, C, F> extends EventEmitter {
            on(event: 'change', listener: (info: C) => any): this;
            on(event: 'paused' | 'denied' | 'error', listener: (err: {}) => any): this;
            on(event: 'active', listener: () => any): this;
            on(event: 'complete', listener: (info: F) => any): this;

            cancel(): void;
        }

        interface Replication<Content extends {}>
            extends ReplicationEventEmitter<Content, ReplicationResult<Content>, ReplicationResultComplete<Content>>,
                    Promise<ReplicationResultComplete<Content>> {
        }

        interface ReplicationResult<Content extends {}> {
            doc_write_failures: number;
            docs_read: number;
            docs_written: number;
            last_seq: number;
            start_time: Date;
            ok: boolean;
            errors: any[];
            docs: Array<Core.ExistingDocument<Content>>;
        }

        interface ReplicationResultComplete<Content extends {}> extends ReplicationResult<Content> {
            end_time: Date;
            status: string;
        }

        interface SyncOptions extends ReplicateOptions {
            push?: ReplicateOptions;
            pull?: ReplicateOptions;
        }

        interface Sync<Content extends {}>
            extends ReplicationEventEmitter<Content, SyncResult<Content>, SyncResultComplete<Content>>,
                    Promise<SyncResultComplete<Content>> {
        }

        interface SyncResult<Content extends {}> {
            direction: 'push' | 'pull';
            change: ReplicationResult<Content>;
        }

        interface SyncResultComplete<Content extends {}> {
            push?: ReplicationResultComplete<Content>;
            pull?: ReplicationResultComplete<Content>;
        }
    }

    interface Static {
        /**
         * Replicate data from source to target. Both the source and target can be a PouchDB instance or a string
         * representing a CouchDB database URL or the name of a local PouchDB database. If options.live is true,
         * then this will track future changes and also replicate them automatically.
         * This method returns an object with the method cancel(), which you call if you want to cancel live replication.
         */
        replicate<Content>(
            source: string | Database<Content>,
            target: string | Database<Content>,
            options?: Replication.ReplicateOptions,
            callback?: Core.Callback<Replication.ReplicationResultComplete<Content>>
        ): Replication.Replication<Content>;

        /**
         * Sync data from src to target and target to src. This is a convenience method for bidirectional data replication.
         *
         * In other words, this code:
         * `PouchDB.replicate('mydb', 'http://localhost:5984/mydb')`;
         * `PouchDB.replicate('http://localhost:5984/mydb', 'mydb')`;
         * is equivalent to this code:
         * `PouchDB.sync('mydb', 'http://localhost:5984/mydb')`;
         */
        sync<Content>(
            source: string | Database<Content>,
            target: string | Database<Content>,
            options?: Replication.SyncOptions,
            callback?: Core.Callback<Replication.SyncResultComplete<Content>>
        ): Replication.Sync<Content>;
    }

    interface Database<Content extends {} = {}> {
        replicate: {
            /**
             * Replicate data to `target`. Both the source and target can be a PouchDB instance
             * or a string representing a CouchDB database URL or the name of a local PouchDB database.
             * If options.live is true, then this will track future changes and also replicate them automatically.
             * This method returns an object with the method cancel(), which you call if you want to cancel live replication.
             */
            to<Content>(
                target: string | Database<Content>,
                options?: Replication.ReplicateOptions,
                callback?: Core.Callback<Replication.ReplicationResultComplete<Content>>
            ): Replication.Replication<Content>;

            /**
             * Replicate data from `source`. Both the source and target can be a PouchDB instance
             * or a string representing a CouchDB database URL or the name of a local PouchDB database.
             * If options.live is true, then this will track future changes and also replicate them automatically.
             * This method returns an object with the method cancel(), which you call if you want to cancel live replication.
             */
            from<Content>(
                source: string | Database<Content>,
                options?: Replication.ReplicateOptions,
                callback?: Core.Callback<Replication.ReplicationResultComplete<Content>>
            ): Replication.Replication<Content>;
        };

        /**
         * Sync data from src to target and target to src. This is a convenience method for bidirectional data replication.
         *
         * In other words, this code:
         * `PouchDB.replicate('mydb', 'http://localhost:5984/mydb')`;
         * `PouchDB.replicate('http://localhost:5984/mydb', 'mydb')`;
         * is equivalent to this code:
         * `PouchDB.sync('mydb', 'http://localhost:5984/mydb')`;
         */
        sync<Content>(
            remote: string | Database<Content>,
            options?: Replication.SyncOptions,
            callback?: Core.Callback<Replication.SyncResultComplete<Content>>
        ): Replication.Sync<Content>;
    }
}

declare module 'pouchdb-replication' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
