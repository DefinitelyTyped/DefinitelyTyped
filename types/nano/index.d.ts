// Type definitions for nano 6.4
// Project: https://github.com/apache/couchdb-nano
// Definitions by: Tim Jacobi <https://github.com/timjacobi>
//                 Kovács Vince <https://github.com/vincekovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { EventEmitter } from "events";
import { CoreOptions, Request } from "request";

declare function nano(
  config: nano.Configuration | string
): nano.ServerScope | nano.DocumentScope<any>;

declare namespace nano {
  interface Configuration {
    url: string;
    cookie?: string;
    requestDefaults?: CoreOptions;
    log?(id: string, args: any): void;
    parseUrl?: boolean;
    request?(params: any): void;
  }

  type Callback<R> = (error: any, response: R, headers?: any) => void;

  interface ServerScope {
    readonly config: ServerConfig;
    db: DatabaseScope;
    use<D>(db: string): DocumentScope<D>;
    scope<D>(db: string): DocumentScope<D>;
    request: RequestFunction;
    relax: RequestFunction;
    dinosaur: RequestFunction;
    // http://docs.couchdb.org/en/latest/api/server/authn.html#cookie-authentication
    auth(username: string, userpass: string, callback?: Callback<DatabaseAuthResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/authn.html#get--_session
    session(callback?: Callback<DatabaseSessionResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
    updates(callback?: Callback<DatabaseUpdatesResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
    updates(params: UpdatesParams, callback?: Callback<DatabaseUpdatesResponse>): Request;
    followUpdates(callback?: Callback<any>): EventEmitter;
    followUpdates(params: any, callback?: Callback<any>): EventEmitter;
    uuids(num: number, callback: Callback<any>): Request;
  }

  interface DatabaseScope {
    // http://docs.couchdb.org/en/latest/api/database/common.html#put--db
    create(name: string, callback?: Callback<DatabaseCreateResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/common.html#get--db
    get(name: string, callback?: Callback<DatabaseGetResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/common.html#delete--db
    destroy(name: string, callback?: Callback<OkResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#get--_all_dbs
    list(callback?: Callback<string[]>): Request;
    use<D>(db: string): DocumentScope<D>;
    compact(name: string, callback?: Callback<OkResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/compact.html#post--db-_compact
    compact(name: string, designname: string, callback?: Callback<OkResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
    replicate<D>(
      source: string | DocumentScope<D>,
      target: string | DocumentScope<D>,
      callback?: Callback<DatabaseReplicateResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
    replicate<D>(
      source: string | DocumentScope<D>,
      target: string | DocumentScope<D>,
      options: DatabaseReplicateOptions,
      callback?: Callback<DatabaseReplicateResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/database/changes.html#get--db-_changes
    changes(name: string, callback?: Callback<DatabaseChangesResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/compact.html#post--db-_compact
    changes(name: string, params: DatabaseChangesParams, callback?: Callback<DatabaseChangesResponse>): Request;
    follow(source: string, callback?: Callback<any>): EventEmitter;
    follow(source: string, params: DatabaseScopeFollowUpdatesParams, callback?: Callback<any>): EventEmitter;
    followUpdates(params?: any, callback?: Callback<any>): EventEmitter;
    // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
    updates(callback?: Callback<DatabaseUpdatesResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
    updates(params: UpdatesParams, callback?: Callback<DatabaseUpdatesResponse>): Request;
  }

  interface DocumentScope<D> {
    readonly config: ServerConfig;
    // http://docs.couchdb.org/en/latest/api/database/common.html#get--db
    info(callback?: Callback<DatabaseGetResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
    replicate<D>(
      target: string | DocumentScope<D>,
      callback?: Callback<DatabaseReplicateResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
    replicate(
      target: string | DocumentScope<D>,
      options: any,
      callback?: Callback<DatabaseReplicateResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/database/compact.html#post--db-_compact
    compact(callback?: Callback<any>): Request;
    // http://docs.couchdb.org/en/latest/api/database/changes.html#get--db-_changes
    changes(callback?: Callback<DatabaseChangesResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/changes.html#get--db-_changes
    changes(params: DatabaseChangesParams, callback?: Callback<DatabaseChangesResponse>): Request;
    follow(callback?: Callback<any>): EventEmitter;
    follow(params: DocumentScopeFollowUpdatesParams, callback?: Callback<any>): EventEmitter;
    // http://docs.couchdb.org/en/latest/api/server/authn.html#cookie-authentication
    auth(username: string, userpass: string, callback?: Callback<DatabaseAuthResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/server/authn.html#get--_session
    session(callback?: Callback<any>): Request;
    // http://docs.couchdb.org/en/latest/api/database/common.html#post--db
    // http://docs.couchdb.org/en/latest/api/document/common.html#put--db-docid
    insert(document: ViewDocument<D> | D & MaybeDocument, callback?: Callback<DocumentInsertResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/common.html#post--db
    // http://docs.couchdb.org/en/latest/api/document/common.html#put--db-docid
    insert(
      document: ViewDocument<D> | D & MaybeDocument,
      params: DocumentInsertParams | string | null,
      callback?: Callback<DocumentInsertResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#get--db-docid
    get(docname: string, callback?: Callback<DocumentGetResponse & D>): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#get--db-docid
    get(docname: string, params?: DocumentGetParams, callback?: Callback<DocumentGetResponse & D>): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#head--db-docid
    head(docname: string, callback: Callback<any>): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#copy--db-docid
    copy(src_document: string, dst_document: string, callback?: Callback<DocumentCopyResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#copy--db-docid
    copy(
      src_document: string,
      dst_document: string,
      options: DocumentCopyOptions,
      callback?: Callback<DocumentCopyResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#delete--db-docid
    destroy(docname: string, rev: string, callback?: Callback<DocumentDestroyResponse>): Request;
    bulk(docs: BulkModifyDocsWrapper, callback?: Callback<any>): Request;
    bulk(docs: BulkModifyDocsWrapper, params: any, callback?: Callback<any>): Request;
    // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#get--db-_all_docs
    list(callback?: Callback<DocumentListResponse<D>>): Request;
    // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#get--db-_all_docs
    list(params: DocumentListParams, callback?: Callback<DocumentListResponse<D>>): Request;
    // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#post--db-_all_docs
    fetch(docnames: BulkFetchDocsWrapper, callback?: Callback<DocumentFetchResponse<D>>): Request;
    // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#post--db-_all_docs
    fetch(
      docnames: BulkFetchDocsWrapper,
      params: DocumentFetchParams,
      callback?: Callback<DocumentFetchResponse<D>>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#post--db-_all_docs
    fetchRevs(docnames: BulkFetchDocsWrapper, callback?: Callback<DocumentFetchRevsResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#post--db-_all_docs
    fetchRevs(
      docnames: BulkFetchDocsWrapper,
      params: DocumentFetchParams,
      callback?: Callback<DocumentFetchRevsResponse>
    ): Request;
    multipart: Multipart<D>;
    attachment: Attachment;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#get--db-_design-ddoc-_show-func
    show(
      designname: string,
      showname: string,
      doc_id: string,
      callback?: Callback<any>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#get--db-_design-ddoc-_show-func
    show(
      designname: string,
      showname: string,
      doc_id: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#put--db-_design-ddoc-_update-func-docid
    atomic(
      designname: string,
      updatename: string,
      docname: string,
      callback?: Callback<OkResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#put--db-_design-ddoc-_update-func-docid
    atomic(
      designname: string,
      updatename: string,
      docname: string,
      body: any,
      callback?: Callback<OkResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#put--db-_design-ddoc-_update-func-docid
    updateWithHandler(
      designname: string,
      updatename: string,
      docname: string,
      callback?: Callback<OkResponse>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#put--db-_design-ddoc-_update-func-docid
    updateWithHandler(
      designname: string,
      updatename: string,
      docname: string,
      body: any,
      callback?: Callback<OkResponse>
    ): Request;
    search(
      designname: string,
      searchname: string,
      callback?: Callback<any>
    ): Request;
    search(
      designname: string,
      searchname: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    spatial(
      ddoc: string,
      viewname: string,
      callback?: Callback<any>
    ): Request;
    spatial(
      ddoc: string,
      viewname: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/views.html#get--db-_design-ddoc-_view-view
    // http://docs.couchdb.org/en/latest/api/ddoc/views.html#post--db-_design-ddoc-_view-view
    view<V>(
      designname: string,
      viewname: string,
      callback?: Callback<DocumentViewResponse<V>>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/views.html#get--db-_design-ddoc-_view-view
    // http://docs.couchdb.org/en/latest/api/ddoc/views.html#post--db-_design-ddoc-_view-view
    view<V>(
      designname: string,
      viewname: string,
      params: DocumentViewParams,
      callback?: Callback<DocumentViewResponse<V>>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#db-design-design-doc-list-list-name-view-name
    viewWithList(
      designname: string,
      viewname: string,
      listname: string,
      callback?: Callback<any>
    ): Request;
    // http://docs.couchdb.org/en/latest/api/ddoc/render.html#db-design-design-doc-list-list-name-view-name
    viewWithList(
      designname: string,
      viewname: string,
      listname: string,
      params: DocumentViewParams,
      callback?: Callback<any>
    ): Request;
    server: ServerScope;
  }

  interface AttachmentData {
      name: string;
      data: any;
      content_type: any;
  }

  interface Multipart<D> {
    // http://docs.couchdb.org/en/latest/api/document/common.html#creating-multiple-attachments
    insert(doc: D, attachments: AttachmentData[], callback?: Callback<DocumentInsertResponse>): Request;
    // http://docs.couchdb.org/en/latest/api/document/common.html#creating-multiple-attachments
    insert(doc: D, attachments: AttachmentData[], params: any, callback?: Callback<DocumentInsertResponse>): Request;
    get(docname: string, callback?: Callback<any>): Request;
    get(docname: string, params: any, callback?: Callback<any>): Request;
  }

  interface Attachment {
    insert(docname: string, attname: string, att: null, contenttype: string, params?: any): NodeJS.WritableStream;
    insert(
      docname: string,
      attname: string,
      att: any,
      contenttype: string,
      callback?: Callback<DocumentInsertResponse>
    ): Request;
    insert(
      docname: string,
      attname: string,
      att: any,
      contenttype: string,
      params: any,
      callback?: Callback<DocumentInsertResponse>
    ): Request;
    get(docname: string, attname: string): NodeJS.ReadableStream;
    get(docname: string, attname: string, callback?: Callback<any>): Request;
    get(
      docname: string,
      attname: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    destroy(docname: string, attname: string, callback?: Callback<any>): Request;
    destroy(
      docname: string,
      attname: string,
      params: any,
      callback?: Callback<any>
    ): Request;
  }

  interface ServerConfig {
    url: string;
    db: string;
  }

  type RequestFunction = (
    options?: RequestOptions | string,
    callback?: Callback<any>
  ) => void;

  interface RequestOptions {
    db?: string;
    method?: string;
    path?: string;
    doc?: string;
    att?: string;
    qs?: any;
    content_type?: string;
    headers?: any;
    body?: any;
    encoding?: string;
    multipart?: any[];
  }

  // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
  interface UpdatesParams {
    feed: "longpoll" | "continuous" | "eventsource";
    timeout: number;
    heartbeat: boolean;
    since: string;
  }

  interface DocumentScopeFollowUpdatesParams {
    include_docs?: boolean;
    since?: string;
    heartbeat?: number;
    feed?: "continuous";
    filter?: string | FollowUpdatesParamsFilterFunction;
    query_params?: any;
    headers?: any;
    inactivity_ms?: number;
    max_retry_seconds?: number;
    initial_retry_delay?: number;
    response_grace_time?: number;
  }

  interface DatabaseScopeFollowUpdatesParams
    extends DocumentScopeFollowUpdatesParams {
    db: string;
  }

  type FollowUpdatesParamsFilterFunction = (doc: any, req: any) => boolean;

  interface BulkModifyDocsWrapper {
    docs: any[];
  }

  interface BulkFetchDocsWrapper {
    keys: string[];
  }

  // -------------------------------------
  // Document
  // -------------------------------------

  interface MaybeIdentifiedDocument {
    _id?: string;
  }

  interface IdentifiedDocument {
    _id: string;
  }

  interface MaybeRevisionedDocument {
    _rev?: string;
  }

  interface RevisionedDocument {
    _rev: string;
  }

  interface MaybeDocument extends MaybeIdentifiedDocument, MaybeRevisionedDocument {
  }

  interface Document extends IdentifiedDocument, RevisionedDocument {
  }

  // -------------------------------------
  // View
  // -------------------------------------

  interface View<D> {
    map?(doc: D & Document): void;
    reduce?(doc: D & Document): void;
  }

  interface ViewDocument<D> extends IdentifiedDocument {
    views: {
      [name: string]: View<D>
    };
  }

  // -------------------------------------
  // Database scope request and response
  // -------------------------------------

  // http://docs.couchdb.org/en/latest/api/database/common.html#put--db
  interface DatabaseCreateResponse {
    // Operation status. Available in case of success
    ok?: boolean;

    // Error type. Available if response code is 4xx
    error?: string;

    // Error description. Available if response code is 4xx
    reason?: string;
  }

  // http://docs.couchdb.org/en/latest/api/database/common.html#get--db
  interface DatabaseGetResponse {
    // Set to true if the database compaction routine is operating on this database.
    compact_running: boolean;

    // The name of the database.
    db_name: string;

    // The version of the physical format used for the data when it is stored on disk.
    disk_format_version: number;

    // The number of bytes of live data inside the database file.
    data_size: number;

    // The length of the database file on disk. Views indexes are not included in the calculation.
    disk_size: number;

    // A count of the documents in the specified database.
    doc_count: number;

    // Number of deleted documents
    doc_del_count: number;

    // Timestamp of when the database was opened, expressed in microseconds since the epoch.
    instance_start_time: string;

    // The number of purge operations on the database.
    purge_seq: number;

    sizes: {
      // The size of live data inside the database, in bytes.
      active: number;

      // The uncompressed size of database contents in bytes.
      external: number;

      // The size of the database file on disk in bytes. Views indexes
      file: number;
    };

    // The current number of updates to the database.
    update_seq: number;
  }

  // http://docs.couchdb.org/en/latest/api/database/common.html#delete--db
  // http://docs.couchdb.org/en/latest/api/database/compact.html#post--db-_compact
  interface OkResponse {
    // Operation status
    ok: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
  interface DatabaseReplicateOptions {
    // Cancels the replication
    cancel?: boolean;

    // Configure the replication to be continuous
    continuous?: boolean;

    // Creates the target database. Required administrator’s privileges on target server.
    create_target?: boolean;

    // Array of document IDs to be synchronized
    doc_ids?: string[];

    // The name of a filter function.
    filter ?: string;

    // Address of a proxy server through which replication should occur (protocol can be “http” or “socks5”)
    proxy ?: string;

    // Source database name or URL
    source?: string;

    // Target database name or URL
    target?: string;
  }

  // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
  interface DatabaseReplicationHistoryItem {
    // Number of document write failures
    doc_write_failures: number;

    // Number of documents read
    docs_read: number;

    // Number of documents written to target
    docs_written: number;

    // Last sequence number in changes stream
    end_last_seq: number;

    // Date/Time replication operation completed in RFC 2822 format
    end_time: string;

    // Number of missing documents checked
    missing_checked: number;

    // Number of missing documents found
    missing_found: number;

    // Last recorded sequence number
    recorded_seq: number;

    // Session ID for this replication operation
    session_id: string;

    // First sequence number in changes stream
    start_last_seq: number;

    // Date/Time replication operation started in RFC 2822 format
    start_time: string;
  }

  // http://docs.couchdb.org/en/latest/api/server/common.html#post--_replicate
  interface DatabaseReplicateResponse {
    // Replication history
    history: DatabaseReplicationHistoryItem[];

    // Replication status
    ok: boolean;

    // Replication protocol version
    replication_id_version: number;

    // Unique session ID
    session_id: string;

    // Last sequence number read from source database
    source_last_seq: number;
  }

  // http://docs.couchdb.org/en/latest/api/database/changes.html#get--db-_changes
  interface DatabaseChangesParams {
    // List of document IDs to filter the changes feed as valid JSON array. Used with _doc_ids filter. Since length of
    // URL is limited, it is better to use POST /{db}/_changes instead.
    doc_ids?: string[];

    // Includes conflicts information in response. Ignored if include_docs isn’t true. Default is false.
    conflicts?: boolean;

    // Return the change results in descending sequence order (most recent change first). Default is false.
    descending?: boolean;

    // - normal Specifies Normal Polling Mode. All past changes are returned immediately. Default.
    // - longpoll Specifies Long Polling Mode. Waits until at least one change has occurred, sends the change, then
    // closes the connection. Most commonly used in conjunction with since=now, to wait for the next change.
    // - continuous Sets Continuous Mode. Sends a line of JSON per event. Keeps the socket open until timeout.
    // - eventsource Sets Event Source Mode. Works the same as Continuous Mode, but sends the events in EventSource
    // format.
    feed?: "normal" | "longpoll" | "continuous" | "eventsource";

    // Reference to a filter function from a design document that will filter whole stream emitting only filtered
    // events. See the section Change Notifications in the book CouchDB The Definitive Guide for more information.
    filter?: string;

    // Period in milliseconds after which an empty line is sent in the results. Only applicable for longpoll,
    // continuous, and eventsource feeds. Overrides any timeout to keep the feed alive indefinitely. Default is 60000.
    // May be true to use default value.
    heartbeat?: number;

    // Include the associated document with each result. If there are conflicts, only the winning revision is returned.
    // Default is false.
    include_docs?: boolean;

    // Include the Base64-encoded content of attachments in the documents that are included if include_docs is true.
    // Ignored if include_docs isn’t true. Default is false.
    attachments?: boolean;

    // Include encoding information in attachment stubs if include_docs is true and the particular attachment is
    // compressed. Ignored if include_docs isn’t true. Default is false.
    att_encoding_info?: boolean;

    // Limit number of result rows to the specified value (note that using 0 here has the same effect as 1).
    limit?: number;

    // Start the results from the change immediately after the given update sequence. Can be valid update sequence or
    // now value. Default is 0.
    since?: number;

    // Specifies how many revisions are returned in the changes array. The default, main_only, will only return the
    // current “winning” revision; all_docs will return all leaf revisions (including conflicts and deleted former
    // conflicts).
    style?: string;

    // Maximum period in milliseconds to wait for a change before the response is sent, even if there are no results.
    // Only applicable for longpoll or continuous feeds. Default value is specified by httpd/changes_timeout
    // configuration option. Note that 60000 value is also the default maximum timeout to prevent undetected dead
    // connections.
    timeout?: number;

    // Allows to use view functions as filters. Documents counted as “passed” for view filter in case if map function
    // emits at least one record for them. See _view for more info.
    view?: string;
  }

  // http://docs.couchdb.org/en/latest/api/database/changes.html#get--db-_changes
  interface DatabaseChangesResultItem {
    // List of document’s leaves with single field rev.
    changes: Array<{ rev: string }>;

    // Document ID.
    id: string;

    // Update sequence.
    seq: any;

    // true if the document is deleted.
    deleted: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/database/changes.html#get--db-_changes
  interface DatabaseChangesResponse {
    // Last change update sequence
    last_seq: any;

    // Count of remaining items in the feed
    pending: number;

    // Changes made to a database
    results: DatabaseChangesResultItem[];
  }

  // http://docs.couchdb.org/en/latest/api/server/authn.html#cookie-authentication
  interface DatabaseAuthResponse {
    // Operation status
    ok: boolean;

    // Username
    name: string;

    // List of user roles
    roles: string[];
  }

  // http://docs.couchdb.org/en/latest/api/server/authn.html#get--_session
  interface DatabaseSessionResponse {
    // Operation status
    ok: boolean;

    // User context for the current user
    userCtx: any;

    // Server authentication configuration
    info: any;
  }

  // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
  interface DatabaseUpdatesResultItem {
    // Database name.
    db_name: string;

    // A database event is one of created, updated, deleted.
    type: string;

    // Update sequence of the event.
    seq: any;
  }

  // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
  interface DatabaseUpdatesResponse {
    // An array of database events. For longpoll and continuous modes, the entire response is the contents of the
    // results array.
    results: DatabaseUpdatesResultItem[];

    // The last sequence ID reported.
    last_seq: string;
  }

  // -------------------------------------
  // Document scope request and response
  // -------------------------------------

  interface DocumentResponseRowMeta {
    id: string;
    key: string;
    value: {
      rev: string;
    };
  }

  interface DocumentResponseRow<D> extends DocumentResponseRowMeta {
    doc?: D & Document;
  }

  // http://docs.couchdb.org/en/latest/api/database/common.html#post--db
  // http://docs.couchdb.org/en/latest/api/document/common.html#put--db-docid
  interface DocumentInsertParams {
    // Document’s revision if updating an existing document. Alternative to If-Match header or document key.
    rev?: string;

    // Stores document in batch mode.
    batch?: "ok";

    // Prevents insertion of a conflicting document. Possible values: true (default) and false. If false, a
    // well-formed _rev must be included in the document. new_edits=false is used by the replicator to insert
    // documents into the target database even if that leads to the creation of conflicts.
    new_edits?: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/database/common.html#post--db
  // http://docs.couchdb.org/en/latest/api/document/common.html#put--db-docid
  interface DocumentInsertResponse {
    // Document ID
    id: string;

    // Operation status
    ok: boolean;

    // Revision MVCC token
    rev: string;
  }

  // http://docs.couchdb.org/en/latest/api/document/common.html#delete--db-docid
  interface DocumentDestroyResponse {
    // Document ID
    id: string;

    // Operation status
    ok: boolean;

    // Revision MVCC token
    rev: string;
  }

  // http://docs.couchdb.org/en/latest/api/document/common.html#get--db-docid
  interface DocumentGetParams {
    // Includes attachments bodies in response. Default is false.
    attachments?: boolean;

    // Includes encoding information in attachment stubs if the particular attachment is compressed. Default is
    // false.
    att_encoding_info?: boolean;

    // Includes attachments only since specified revisions. Doesn’t includes attachments for specified revisions.
    atts_since?: any[];

    // Includes information about conflicts in document. Default is false.
    conflicts?: boolean;

    // Includes information about deleted conflicted revisions. Default is false.
    deleted_conflicts?: boolean;

    // Forces retrieving latest “leaf” revision, no matter what rev was requested. Default is false.
    latest?: boolean;

    // Includes last update sequence for the document. Default is false.
    local_seq?: boolean;

    // Acts same as specifying all conflicts, deleted_conflicts and revs_info query parameters. Default is false.
    meta?: boolean;

    // Retrieves documents of specified leaf revisions. Additionally, it accepts value as all to return all leaf
    // revisions.
    open_revs?: any[];

    // Retrieves document of specified revision.
    rev?: string;

    // Includes list of all known document revisions.
    revs?: boolean;

    // Includes detailed information for all known document revisions. Default is false.
    revs_info?: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/document/common.html#get--db-docid
  interface DocumentGetResponse {
    // Document ID.
    _id: string;

    // Revision MVCC token.
    _rev: string;

    // Deletion flag. Available if document was removed.
    _deleted?: boolean;

    // Attachment’s stubs. Available if document has any attachments.
    _attachments?: any;

    // List of conflicted revisions. Available if requested with conflicts=true query parameter.
    _conflicts?: any[];

    // List of deleted conflicted revisions. Available if requested with deleted_conflicts=true query parameter.
    _deleted_conflicts?: any[];

    // Document’s update sequence in current database. Available if requested with local_seq=true query parameter.
    _local_seq?: string;

    // List of objects with information about local revisions and their status. Available if requested with
    // open_revs query parameter.
    _revs_info?: any[];

    // List of local revision tokens without. Available if requested with revs=true query parameter.
    _revisions?: any;
  }

  interface DocumentCopyOptions {
    overwrite?: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/document/common.html#copy--db-docid
  interface DocumentCopyResponse {
    // Document ID
    id: string;

    // Operation status
    ok: boolean;

    // Revision MVCC token
    rev: string;
  }

  // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#get--db-_all_docs
  interface DocumentListParams {
    // Includes conflicts information in response. Ignored if include_docs isn’t true. Default is false.
    conflicts?: boolean;

    // Return the documents in descending by key order. Default is false.
    descending?: boolean;

    // Stop returning records when the specified key is reached.
    end_key?: string;

    // Stop returning records when the specified document ID is reached.
    end_key_doc_id?: string;

    // Include the full content of the documents in the return. Default is false.
    include_docs?: boolean;

    // Specifies whether the specified end key should be included in the result. Default is true.
    inclusive_end?: boolean;

    // Return only documents that match the specified key.
    key?: string;

    // Return only documents that match the specified keys.
    keys?: string; // This can be string[] too ???

    // Limit the number of the returned documents to the specified number.
    limit?: number;

    // Skip this number of records before starting to return the results. Default is 0.
    skip?: number;

    // Allow the results from a stale view to be used, without triggering a rebuild of all views within the
    // encompassing design doc. Supported values: ok and update_after.
    stale?: string;

    // Return records starting with the specified key.
    start_key?: string;

    // Return records starting with the specified document ID.
    start_key_doc_id?: string;

    // Response includes an update_seq value indicating which sequence id of the underlying database the view
    // reflects. Default is false.
    update_seq?: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/database/bulk-api.html#get--db-_all_docs
  interface DocumentListResponse<D> {
    // Offset where the document list started.
    offset: number;

    // Array of view row objects. By default the information returned contains only the document ID and revision.
    rows: Array<DocumentResponseRow<D>>;

    // Number of documents in the database/view. Note that this is not the number of rows returned in the actual
    // query.
    total_rows: number;

    // Current update sequence for the database.
    update_seq?: number;
  }

  interface DocumentFetchParams {
    conflicts?: boolean;
    descending?: boolean;
    end_key?: string;
    end_key_doc_id?: string;
    inclusive_end?: boolean;
    key?: string;
    keys?: string; // This can be string[] too ???
    limit?: number;
    skip?: number;
    stale?: string;
    start_key?: string;
    start_key_doc_id?: string;
    update_seq?: boolean;
  }

  interface DocumentFetchResponse<D> {
    offset: number;
    rows: Array<DocumentResponseRow<D>>;
    total_rows: number;
    update_seq?: number;
  }

  interface DocumentFetchRevsResponse {
    offset: number;
    rows: DocumentResponseRowMeta[];
    total_rows: number;
    update_seq?: number;
  }

  // http://docs.couchdb.org/en/latest/api/ddoc/views.html#get--db-_design-ddoc-_view-view
  interface DocumentViewParams {
    // Includes conflicts information in response. Ignored if include_docs isn’t true. Default is false.
    conflicts?: boolean;

    // Return the documents in descending by key order. Default is false.
    descending?: boolean;

    // Stop returning records when the specified key is reached.
    endkey?: any;

    // Alias for endkey param.
    end_key?: any;

    // Stop returning records when the specified document ID is reached. Requires endkey to be specified for this
    // to have any effect.
    endkey_docid?: string;

    // Alias for endkey_docid param.
    end_key_doc_id?: string;

    // Group the results using the reduce function to a group or single row. Default is false.
    group?: boolean;

    // Specify the group level to be used.
    group_level?: number;

    // Include the associated document with each row. Default is false.
    include_docs?: boolean;

    // Include the Base64-encoded content of attachments in the documents that are included if include_docs is
    // true. Ignored if include_docs isn’t true. Default is false.
    attachments?: boolean;

    // Include encoding information in attachment stubs if include_docs is true and the particular attachment is
    // compressed. Ignored if include_docs isn’t true. Default is false.
    att_encoding_info?: boolean;

    // Specifies whether the specified end key should be included in the result. Default is true.
    inclusive_end?: boolean;

    // Return only documents that match the specified key.
    key?: any;

    // Return only documents where the key matches one of the keys specified in the array.
    keys?: any[];

    // Limit the number of the returned documents to the specified number.
    limit?: number;

    // Use the reduction function. Default is true.
    reduce?: boolean;

    // Skip this number of records before starting to return the results. Default is 0.
    skip?: number;

    // Sort returned rows. Setting this to false offers a performance boost. The total_rows and offset fields are
    // not available when this is set to false. Default is true.
    sorted?: boolean;

    // Whether or not the view results should be returned from a stable set of shards. Default is false.
    stable?: boolean;
    // Allow the results from a stale view to be used. Supported values: ok, update_after and false. ok is
    // equivalent to stable=true&update=false. update_after is equivalent to stable=true&update=lazy. false is
    // equivalent to stable=false&update=true.
    stale?: string;

    // Return records starting with the specified key.
    startkey?: any;

    // Alias for startkey param
    start_key?: any;

    // Return records starting with the specified document ID. Requires startkey to be specified for this to have
    // any effect.
    startkey_docid?: string;

    // Alias for startkey_docid param
    start_key_doc_id?: string;

    //  Whether or not the view in question should be updated prior to responding to the user. Supported values:
    // true, false, lazy. Default is true.
    update?: string;

    // Response includes an update_seq value indicating which sequence id of the database the view reflects.
    // Default is false.
    update_seq?: boolean;
  }

  // http://docs.couchdb.org/en/latest/api/ddoc/views.html#get--db-_design-ddoc-_view-view
  interface DocumentViewResponse<V> {
    // Offset where the document list started.
    offset: number;

    //  Array of view row objects. By default the information returned contains only the document ID and revision.
    rows: Array<{
      id: string;
      key: string;
      value: V;
    }>;

    // Number of documents in the database/view.
    total_rows: number;

    // Current update sequence for the database
    update_seq: any;
  }
}

export = nano;
