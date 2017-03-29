// Type definitions for pouchdb-core v6.0.7
// Project: https://pouchdb.com/
// Definitions by: Jakub Navratil <https://github.com/trubit>, Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="debug" />

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
        type AttachmentId = string;
        type RevisionId = string;
        type Availability = 'available' | 'compacted' | 'not compacted' | 'missing';
        type Encodable = { [propertyName: string]: any };
        type Attachment = string | Blob | Buffer;

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
            /** Name of the database you gave when you called new PouchDB(), and also the unique identifier for the database. */
            db_name: string;

            /** Total number of non-deleted documents in the database. */
            doc_count: number;

            /** Sequence number of the database. It starts at 0 and gets incremented every time a document is added or modified */
            update_seq: number | string;
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

            /** Attachments where index is attachmentId */
            _attachments?: Attachments;
        }

        interface AttachmentResponse {
            content_type: string;

            /** MD5 hash, starts with "md5-" prefix */
            digest: string;

            /** Only present if `attachments` was `false`. */
            stub?: boolean;

            /** Only present if `attachments` was `false`. */
            length?: number;

            /**
             * Only present if `attachments` was `true`.
             * {string} if `binary` was `false`
             * {Blob|Buffer} if `binary` was `true`
             */
            data?: Attachment;
        }

        interface Attachments {
            [attachmentId: string]: AttachmentResponse;
        }

        type NewDocument<Content extends Encodable> = Content;
        type Document<Content extends Encodable> = Content & IdMeta;
        type ExistingDocument<Content extends Encodable> =
                Document<Content> & RevisionIdMeta;

        /** Existing doc or just object with `_id` and `_rev` */
        type RemoveDocument = Encodable & IdMeta & RevisionIdMeta;

        type PostDocument<Content extends Encodable> = NewDocument<Content> & {
            filters?: {[filterName: string]: string};
            views?: {[viewName: string]: string};

            /** You can update an existing doc using _rev */
            _rev?: RevisionId;

            _attachments?: {[attachmentId: string]: PutAttachment};
        };

        type PutDocument<Content extends Encodable> = PostDocument<Content> & ChangesMeta & {
            _id?: DocumentId;
        };

        interface PutAttachment {
            content_type: string;
            data: Attachment;
        }

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

            /** Only present if `conflicts` is `true` */
            _conflicts?: RevisionId[];

            _attachments?: Attachments;
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
                    deleted?: boolean;
                }
            }[];
        }

        interface BulkDocsOptions extends PutOptions {
            new_edits?: boolean;
        }

        interface ChangesMeta {
            _conflicts?: RevisionId[];
            _deleted?: boolean;
            _attachments?: Attachments;
        }

        interface ChangesOptions {
            /**
             * Does "live" changes.
             */
            live?: boolean;

            /**
             * Start the results from the change immediately after the given sequence number.
             * You can also pass `'now'` if you want only new changes (when `live` is `true`).
             *
             */
            since?: 'now' | number | string;

            /**
             * Request timeout (in milliseconds).
             */
            timeout?: number | false;

            /** Include contents for each document. */
            include_docs?: boolean;

            /** Maximum number of documents to return. */
            limit?: number | false;

            /** Include conflicts. */
            conflicts?: boolean;

            /** Include attachments. */
            attachments?: boolean;

            /** Return attachment data as Blobs/Buffers, instead of as base64-encoded strings. */
            binary?: boolean;

            /** Reverse the order of the output documents. */
            descending?: boolean;

            /**
             * For http adapter only, time in milliseconds for server to give a heartbeat to keep long connections open.
             * Defaults to 10000 (10 seconds), use false to disable the default.
             */
            heartbeat?: number | false;

            /**
             * Reference a filter function from a design document to selectively get updates.
             * To use a view function, pass '_view' here and provide a reference to the view function in options.view.
             * See filtered changes for details.
             */
            filter?: string | {(doc: any, params: any): any};

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
        }

        interface ChangesResponseChange<Content extends Core.Encodable> {
            id: string;
            seq: number;
            changes: { rev: string }[];
            deleted?: boolean;
            doc?: ExistingDocument<Content & ChangesMeta>;
        }

        interface ChangesResponse<Content extends Core.Encodable> {
            status: string;
            last_seq: number;
            results: ChangesResponseChange<Content>[];
        }

        interface Changes<Content extends Core.Encodable> extends EventEmitter, Promise<ChangesResponse<Content>> {
            on(event: 'change', listener: (value: ChangesResponseChange<Content>) => any): this;
            on(event: 'complete', listener: (value: ChangesResponse<Content>) => any): this;
            on(event: 'error', listener: (value: any) => any): this;

            cancel(): void;
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

            /** Include attachment data. */
            attachments?: boolean;

            /** Return attachment data as Blobs/Buffers, instead of as base64-encoded strings. */
            binary?: boolean;
        }

        interface GetOpenRevisions extends Options {
            /** Fetch all leaf revisions if open_revs="all" or fetch all leaf
             * revisions specified in open_revs array. Leaves will be returned
             * in the same order as specified in input array. */
            open_revs: 'all' | Core.RevisionId[];

            /** Include revision history of the document. */
            revs?: boolean;
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

        interface RemoveAttachmentResponse extends BasicResponse {
            rev: Core.RevisionId;
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

            /**
             * Enables transferring cookies and HTTP Authorization information.
             *
             * Defaults to true.
             */
            withCredentials?: boolean;
        }

        interface RemoteDatabaseConfiguration extends CommonDatabaseConfiguration {
            ajax?: RemoteRequesterConfiguration;

            auth?: {
                username?: string;
                password?: string;
            }
            /**
             * Disables automatic creation of databases.
             */
            skip_setup?: boolean;
        }

        type DatabaseConfiguration = LocalDatabaseConfiguration |
                RemoteDatabaseConfiguration;
    }

    /** @todo: remove nodejs dep. */
    interface EventEmitter extends NodeJS.EventEmitter {

    }

    interface Static extends EventEmitter {
        plugin(plugin: Plugin): Static;

        version: string;

        on(event: 'created', listener: (dbName: string) => any): this;
        on(event: 'destroyed', listener: (dbName: string) => any): this;

        debug: debug.IDebug;

        new<Content extends Core.Encodable>(name?: string,
            options?: Configuration.DatabaseConfiguration): Database<Content>;

        /**
         * The returned object is a constructor function that works the same as PouchDB,
         * except that whenever you invoke it (e.g. with new), the given options will be passed in by default.
         */
        defaults(options: Configuration.DatabaseConfiguration): {
            new<Content extends Core.Encodable>(name?: string,
                options?: Configuration.DatabaseConfiguration): Database<Content>;
        }
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

        /**
         * Create, update or delete multiple documents. The docs argument is an array of documents.
         * If you omit an _id parameter on a given document, the database will create a new document and assign the ID for you.
         * To update a document, you must include both an _id parameter and a _rev parameter,
         * which should match the ID and revision of the document on which to base your updates.
         * Finally, to delete a document, include a _deleted parameter with the value true.
         */
        bulkDocs(docs: Core.PutDocument<Content>[],
                 options: Core.BulkDocsOptions | null,
                 callback: Core.Callback<Core.Error, Core.Response[]>): void;

        /**
         * Create, update or delete multiple documents. The docs argument is an array of documents.
         * If you omit an _id parameter on a given document, the database will create a new document and assign the ID for you.
         * To update a document, you must include both an _id parameter and a _rev parameter,
         * which should match the ID and revision of the document on which to base your updates.
         * Finally, to delete a document, include a _deleted parameter with the value true.
         */
        bulkDocs(docs: Core.PutDocument<Content>[],
                 options?: Core.BulkDocsOptions): Promise<Core.Response[]>;

        /** Compact the database */
        compact(options?: Core.CompactOptions): Promise<Core.Response>;

        /** Compact the database */
        compact(options: Core.CompactOptions,
                callback: Core.Callback<Core.Error, Core.Response>): void;

        /** Destroy the database */
        destroy(options: Core.DestroyOptions | void,
            callback: Core.AnyCallback): void;

        /** Destroy the database */
        destroy(options?: Core.DestroyOptions | void): Promise<void>;

        /** Fetch a document */
        get(docId: Core.DocumentId,
            options: Core.GetOptions | null,
            callback: Core.Callback<any, Core.Document<Content> & Core.GetMeta>
            ): void;

        /** Fetch a document */
        get(docId: Core.DocumentId,
            options: Core.GetOptions
            ): Promise<Core.Document<Content> & Core.GetMeta>;

        /** Fetch a document */
        get(docId: Core.DocumentId): Promise<Core.Document<Content> & Core.GetMeta>;

        /** Fetch document open revs */
        get(docId: Core.DocumentId,
            options: Core.GetOpenRevisions,
            callback: Core.Callback<any, Core.Revision<Content>[]>): void;

        /** Fetch document open revs */
        get(docId: Core.DocumentId,
            options: Core.GetOpenRevisions): Promise<Core.Revision<Content>[]>;

        /** Create a new document without providing an id.
         *
         * You should prefer put() to post(), because when you post(), you are
         * missing an opportunity to use allDocs() to sort documents by _id
         * (because your _ids are random).
         *
         * @see {@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
         */
        post(doc: Core.PostDocument<Content>,
            options: Core.PostOptions | null,
            callback: Core.Callback<Core.Error, Core.Response>): void;

        /** Create a new document without providing an id.
         *
         * You should prefer put() to post(), because when you post(), you are
         * missing an opportunity to use allDocs() to sort documents by _id
         * (because your _ids are random).
         *
         * @see {@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
         */
        post(doc: Core.PostDocument<Content>,
            options?: Core.PostOptions): Promise<Core.Response>;

        /** Create a new document or update an existing document.
         *
         * If the document already exists, you must specify its revision _rev,
         * otherwise a conflict will occur.
         * There are some restrictions on valid property names of the documents.
         * If you try to store non-JSON data (for instance Date objects) you may
         * see inconsistent results.
         */
        put(doc: Core.PutDocument<Content>,
            id: Core.DocumentId | null,
            revision: Core.RevisionId | null,
            options: Core.PutOptions | null,
            callback: Core.Callback<Core.Error, Core.Response>): void;

        /** Create a new document or update an existing document.
         *
         * If the document already exists, you must specify its revision _rev,
         * otherwise a conflict will occur.
         * There are some restrictions on valid property names of the documents.
         * If you try to store non-JSON data (for instance Date objects) you may
         * see inconsistent results.
         */
        put(doc: Core.PutDocument<Content>,
            id?: Core.DocumentId,
            revision?: Core.RevisionId,
            options?: Core.PutOptions): Promise<Core.Response>;

        /** Remove a doc from the database */
        remove(doc: Core.RemoveDocument,
               options: Core.Options,
               callback: Core.Callback<Core.Error, Core.Response>): void;

        /** Remove a doc from the database */
        remove(docId: Core.DocumentId,
               revision: Core.RevisionId,
               options: Core.Options,
               callback: Core.Callback<Core.Error, Core.Response>): void;

        /** Remove a doc from the database */
        remove(doc: Core.RemoveDocument,
               options?: Core.Options): Promise<Core.Response>;

        /** Remove a doc from the database */
        remove(docId: Core.DocumentId,
               revision: Core.RevisionId,
               options?: Core.Options): Promise<Core.Response>;

        /** Get database information */
        info(options: Core.InfoOptions | null,
            callback: Core.Callback<any, Core.DatabaseInfo>): void;

        /** Get database information */
        info(options?: Core.InfoOptions): Promise<Core.DatabaseInfo>;

        /**
         * A list of changes made to documents in the database, in the order they were made.
         * It returns an object with the method cancel(), which you call if you don’t want to listen to new changes anymore.
         *
         * It is an event emitter and will emit a 'change' event on each document change,
         * a 'complete' event when all the changes have been processed, and an 'error' event when an error occurs.
         * Calling cancel() will unsubscribe all event listeners automatically.
         */
        changes(options: Core.ChangesOptions | null,
            callback: Core.Callback<any, Core.Changes<Content>>): void;

        /**
         * A list of changes made to documents in the database, in the order they were made.
         * It returns an object with the method cancel(), which you call if you don’t want to listen to new changes anymore.
         *
         * It is an event emitter and will emit a 'change' event on each document change,
         * a 'complete' event when all the changes have been processed, and an 'error' event when an error occurs.
         * Calling cancel() will unsubscribe all event listeners automatically.
         */
        changes(options?: Core.ChangesOptions): Core.Changes<Content>;

        /** Close the database */
        close(callback: Core.AnyCallback): void;

        /** Close the database */
        close(): Promise<void>;

        /**
         * Attaches a binary object to a document.
         * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
         * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
         */
        putAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            rev: Core.RevisionId,
            attachment: Core.Attachment,
            type: string,
            callback: Core.Callback<Core.Error, Core.Response>): void;

         /**
         * Attaches a binary object to a document.
         * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
         * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
         */
        putAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            rev: Core.RevisionId,
            attachment: Core.Attachment,
            type: string): Promise<Core.Response>;

         /**
         * Attaches a binary object to a document.
         * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
         * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
         */
        putAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            attachment: Core.Attachment,
            type: string,
            callback: Core.Callback<Core.Error, Core.Response>): void;

         /**
         * Attaches a binary object to a document.
         * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
         * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
         */
        putAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            attachment: Core.Attachment,
            type: string): Promise<Core.Response>;

        /** Get attachment data */
        getAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            options: { rev?: Core.RevisionId},
            callback: Core.Callback<Core.Error, Blob | Buffer>): void;

        /** Get attachment data */
        getAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            options: { rev?: Core.RevisionId}): Promise<Blob | Buffer>;

        /** Get attachment data */
        getAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            callback: Core.Callback<Core.Error, Blob | Buffer>): void;

        /** Get attachment data */
        getAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId): Promise<Blob | Buffer>;

        /** Delete an attachment from a doc. You must supply the rev of the existing doc. */
        removeAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            rev: Core.RevisionId,
            callback: Core.Callback<Core.Error, Core.RemoveAttachmentResponse>): void;

        /** Delete an attachment from a doc. You must supply the rev of the existing doc. */
        removeAttachment(docId: Core.DocumentId,
            attachmentId: Core.AttachmentId,
            rev: Core.RevisionId): Promise<Core.RemoveAttachmentResponse>;

        /** Given a set of document/revision IDs, returns the document bodies (and, optionally, attachment data) for each ID/revision pair specified. */
        bulkGet(options: any,
            callback: Core.Callback<any, any>): void;

        /** Given a set of document/revision IDs, returns the document bodies (and, optionally, attachment data) for each ID/revision pair specified. */
        bulkGet(options: any): Promise<any>;
    }
}

declare module 'pouchdb-core' {
  const PouchDb: PouchDB.Static;
  export = PouchDb;
}

declare var PouchDB: PouchDB.Static;
