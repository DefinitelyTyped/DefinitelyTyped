// Type definitions for pouchdb-core v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PouchDB {
    namespace Core {
        interface Error {
        }
        interface Callback<E, R> {
            (error: E | void, result: R | void): void;
        }
        type AnyCallback = Callback<any, any>;
        type DocumentId = string;
        type DocumentKey = string;
        type RevisionId = string;
        type Availability = 'available' | 'compacted' | 'not compacted' | 'missing';
        type Attachment = string | ArrayBuffer;
        type Encodable = { [propertyName: string]: any };

        interface Options {
          ajax?: Configuration.RemoteRequesterConfiguration;
        }

        interface BasicResponse {
            /** `true` if the operation was successful; `false` otherwise */
            ok: boolean;
        }
        interface Response extends BasicResponse {
            /** id of the targeted document */
            id: DocumentId;
            /** resulting revision of the targeted document */
            rev: RevisionId;
        }

        interface DatabaseInfo {
        }

        interface Revision<Content> {
            ok: Document<Content> & RevisionIdMeta;
        }
        interface RevisionInfo {
            rev: RevisionId;
            status: Availability;
        }

        interface IdMeta {
            _id: DocumentId;
        }
        interface RevisionIdMeta {
            _rev: RevisionId;
        }
        interface GetMeta {
            /** Conflicting leaf revisions.
             *
             * Only present if `GetOptions.conflicts` is `true`
             */
            _conflicts?: RevisionId[];
            _rev?: RevisionId;
            /** Only present if `GetOptions.revs` is `true` */
            _revs_info?: RevisionInfo[];
            /** Only present if `GetOptions.revs_info` is `true` */
            _revisions?: {
                ids: RevisionId[];
                start: number;
            }
        }
        type NewDocument<Content extends Encodable> = Content;
        type Document<Content extends Encodable> = Content & IdMeta;
        type ExistingDocument<Content extends Encodable> =
                Document<Content> & RevisionIdMeta;

        interface AllDocsOptions extends Options {
            /** Include attachment data for each document.
             *
             * Requires `include_docs` to be `true`.
             *
             * By default, attachments are Base64-encoded.
             * @see binary
             */
            attachments?: boolean;
            /** Return attachments as Buffers.
             *
             * Requires `include_docs` to be `true`.
             * Requires `attachments` to be `true`. */
            binary?: boolean;
            /** Include conflict information for each document.
             *
             * Requires `include_docs` to be `true`. */
            conflicts?: boolean;
            /** Reverse ordering of results. */
            descending?: boolean;
            /** Include contents for each document. */
            include_docs?: boolean;
            /** Maximum number of documents to return. */
            limit?: number;
            /** Number of documents to skip before returning.
             *
             * Causes poor performance on IndexedDB and LevelDB. */
            skip?: number;
        }
        interface AllDocsWithKeyOptions extends AllDocsOptions {
            /** Constrain results to documents matching this key. */
            key: DocumentKey;
        }
        interface AllDocsWithKeysOptions extends AllDocsOptions {
            /** Constrains results to documents matching any of these keys. */
            keys: DocumentId[];
        }
        interface AllDocsWithinRangeOptions extends AllDocsOptions {
            /** Low end of range, or high end if `descending` is `true`. */
            startkey: DocumentKey;
            /** High end of range, or low end if `descending` is `true`. */
            endkey: DocumentKey;
            /** Include any documents identified by `endkey`.
             *
             * Defaults to `true`. */
            inclusive_end?: boolean;
        }
        interface AllDocsMeta {
            _attachments?: {
                [attachmentId: string]: Attachment;
            };
        }
        interface AllDocsResponse<Content extends Core.Encodable> {
            /** The `skip` if provided, or in CouchDB the actual offset */
            offset: number;
            total_rows: number;
            rows: {
                /** Only present if `include_docs` was `true`. */
                doc?: Document<Content & AllDocsMeta>;
                id: DocumentId;
                key: DocumentKey;
                value: {
                    rev: RevisionId;
                }
            }[];
        }

        interface DestroyOptions extends Options {
        }

        interface GetOptions extends Options {
            /** Include list of conflicting leaf revisions. */
            conflicts?: boolean;
            /** Specific revision to fetch */
            rev?: RevisionId;
            /** Include revision history of the document. */
            revs?: boolean;
            /** Include a list of revisions of the document, and their
             * availability. */
            revs_info?: boolean;
        }
        interface GetOpenRevisions extends Options {
            /** Fetch all leaf revisions if open_revs="all" or fetch all leaf
             * revisions specified in open_revs array. Leaves will be returned
             * in the same order as specified in input array. */
            open_revs: 'all' | Core.RevisionId[];
        }

        /** @todo does this have any other properties? */
        interface PutOptions extends Options {
        }
        interface PostOptions extends PutOptions {
        }

        interface CompactOptions extends Core.Options {
          interval?: number;
        }

        interface InfoOptions extends Options {
        }
    }

    /**
     * Pass this to `PouchDB.plugin()`.
     */
    export type Plugin = 'This should be passed to PouchDB.plugin()';

    namespace Configuration {
        interface CommonDatabaseConfiguration {
            /**
             * Database name.
             */
            name?: string;
            /**
             * Database adapter to use.
             *
             * If unspecified, PouchDB will infer this automatically, preferring
             * IndexedDB to WebSQL in browsers that support both (i.e. Chrome,
             * Opera and Android 4.4+).
             */
            adapter?: string;
        }

        interface LocalDatabaseConfiguration extends CommonDatabaseConfiguration {
            /**
             * Enables auto compaction, which means compact() is called after
             * every change to the database.
             *
             * Defaults to false.
             */
            auto_compaction?: boolean;
            /**
             * How many old revisions we keep track (not a copy) of.
             */
            revs_limit?: number;
        }

        interface RemoteRequesterConfiguration {
            /**
             * Time before HTTP requests time out (in ms).
             */
            timeout?: number;
            /**
             * Appends a random string to the end of all HTTP GET requests to avoid
             * them being cached on IE. Set this to true to prevent this happening.
             */
            cache?: boolean;
            /**
             * HTTP headers to add to requests.
             */
            headers?: {
                [name: string]: string;
            }
            username?: string;
            password?: string;
            /**
             * Enables transferring cookies and HTTP Authorization information.
             *
             * Defaults to true.
             */
            withCredentials?: boolean;
            /**
             * Disables automatic creation of databases.
             */
            skip_setup?: boolean;
        }

        interface RemoteDatabaseConfiguration extends CommonDatabaseConfiguration {
            ajax?: RemoteRequesterConfiguration;
        }

        type DatabaseConfiguration = LocalDatabaseConfiguration |
                RemoteDatabaseConfiguration;
    }



    interface Static {
        plugin(plugin: Plugin): Static;

        new<Content extends Core.Encodable>(name?: string,
            options?: Configuration.DatabaseConfiguration): Database<Content>;
    }

    interface Database<Content extends Core.Encodable>  {
        /** Fetch all documents matching the given key. */
        allDocs(options: Core.AllDocsWithKeyOptions):
            Promise<Core.AllDocsResponse<Content>>;
        /** Fetch all documents matching any of the given keys. */
        allDocs(options: Core.AllDocsWithKeysOptions):
            Promise<Core.AllDocsResponse<Content>>;
        /** Fetch all documents matching the given key range. */
        allDocs(options: Core.AllDocsWithinRangeOptions):
            Promise<Core.AllDocsResponse<Content>>;
        /** Fetch all documents. */
        allDocs(options?: Core.AllDocsOptions):
            Promise<Core.AllDocsResponse<Content>>;

        bulkDocs(docs: Core.Document<Content>[],
                 options: Core.PutOptions | void,
                 callback: Core.Callback<Core.Error, Core.Response[]>): void;
        bulkDocs(docs: Core.Document<Content>[],
                 options?: Core.PutOptions): Promise<Core.Response[]>;

        /** Compact the database */
        compact(options?: Core.CompactOptions): Promise<Core.Response>;
        compact(options: Core.CompactOptions,
                callback: Core.Callback<Core.Error, Core.Response>): void;

        /** Destroy the database */
        destroy(options: Core.DestroyOptions | void,
            callback: Core.AnyCallback): void;
        destroy(options?: Core.DestroyOptions | void): Promise<void>;

        /** Fetch a document */
        get(docId: Core.DocumentId,
            options: Core.GetOpenRevisions): Promise<Core.Revision<Content>[]>;
        get(docId: Core.DocumentId,
            options: Core.GetOpenRevisions,
            callback: Core.Callback<any,
            Core.Revision<Content>[]>): void;
        get(docId: Core.DocumentId,
            options: Core.GetOptions
            ): Promise<Core.Document<Content> & Core.GetMeta>;
        get(docId: Core.DocumentId,
            options: Core.GetOptions,
            callback: Core.Callback<any, Core.Document<Content> & Core.GetMeta>
            ): void;
        get(docId: Core.DocumentId,
            options: void,
            callback: Core.Callback<any, Core.Document<Content>>): void;
        get(docId: Core.DocumentId): Promise<Core.Document<Content>>;

        /** Create a new document without providing an id.
         *
         * You should prefer put() to post(), because when you post(), you are
         * missing an opportunity to use allDocs() to sort documents by _id
         * (because your _ids are random).
         *
         * @see {@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
         * */
        post(doc: Core.NewDocument<Content>,
            options: Core.PostOptions | void,
            callback: Core.Callback<Core.Error, Core.Response>): void;
        post(doc: Core.NewDocument<Content>,
            options?: Core.PostOptions): Promise<Core.Response>;

        /** Create a new document or update an existing document.
         *
         * If the document already exists, you must specify its revision _rev,
         * otherwise a conflict will occur.
         * There are some restrictions on valid property names of the documents.
         * If you try to store non-JSON data (for instance Date objects) you may
         * see inconsistent results. */
        put(doc: Core.Document<Content>,
            id: Core.DocumentId | void,
            revision: Core.RevisionId | void,
            options: Core.PutOptions | void,
            callback: Core.Callback<Core.Error, Core.Response>): void;
        put(doc: Core.Document<Content>,
            id?: Core.DocumentId,
            revision?: Core.RevisionId,
            options?: Core.PutOptions): Promise<Core.Response>;

        /** Remove a doc from the database */
        remove(doc: Core.Document<Content>,
               options: Core.Options,
               callback: Core.Callback<Core.Error, Core.Response>): void;
        remove(docId: Core.DocumentId,
               revision: Core.RevisionId,
               options: Core.Options,
               callback: Core.Callback<Core.Error, Core.Response>): void;
        remove(doc: Core.Document<Content>,
               options?: Core.Options): Promise<Core.Response>;
        remove(docId: Core.DocumentId,
               revision: Core.RevisionId,
               options?: Core.Options): Promise<Core.Response>;

        /** Get database information */
        info(options: Core.InfoOptions | void,
            callback: Core.Callback<any, Core.DatabaseInfo>): void;
        info(options?: Core.InfoOptions): Promise<Core.DatabaseInfo>;
    }
}

declare module 'pouchdb-core' {
  const PouchDb: PouchDB.Static;
  export = PouchDb;
}

declare var PouchDB: PouchDB.Static;
