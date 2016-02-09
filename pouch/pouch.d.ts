// Type definitions for Pouch 0.1
// Project: http://pouchdb.com
// Definitions by: Viktor Zhakhalov <https://github.com/zhakhalov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Based on https://github.com/MrBigDog2U/DefinitelyTyped/blob/master/pouchDB/


declare var PouchDB: pouchdb.PouchDB;

declare module 'pouchdb' {
  export = PouchDB;
}

declare module pouchdb {

  export interface IPromise<T> {
    then<TResult>(successCallback: (promiseValue: T) => IPromise<TResult>|TResult, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any): IPromise<TResult>;
    catch<TResult>(onRejected: (reason: any) => IPromise<TResult>|TResult): IPromise<TResult>;
    finally(finallyCallback: () => any): IPromise<T>;
  }

  export interface PouchError {
    status: number;
    error: string;
    reason: string;
  }

  export interface PouchInfoResponse {
    db_name: string;
    doc_count: number;
    update_seq: string;
  }

  export interface PouchGetOptions {
    rev?: string;
    revs?: boolean;
    revs_info?: boolean;
    conflicts?: boolean;
    attachments?: boolean;
  }

  export interface PouchDoc {
    _id: string;
    _rev?: string;
    _attachments?: any;
  }

  export interface PouchAllDocsOptions {
    startkey?: string;
    endKey?: string;
    descending?: boolean;
    include_docs?: boolean;
    conflicts?: boolean;
    skip?: number;
    limit?: number;
    key?: string;
    keys?: string[];
  }

  export interface PouchAllDocsItem<T extends PouchDoc> {
    id: string;
    key: string;
    value: any;
    doc: T;
  }

  export interface PouchAllDocsResponse<T extends PouchDoc> {
    total_rows: number;
    rows: PouchAllDocsItem<T>[];
  }

  export interface PouchBulkDocsRequest<T extends PouchDoc> {
    docs: T[];
  }

  export interface PouchUpdateOptions {
    new_edits?: boolean;
  }

  export interface PouchUpdateResponse {
    ok: boolean;
    id: string;
    rev: string;
  }

  export interface PouchApi<T extends PouchDoc> {
    replicate: PouchReplicate<T>;
    info(callback: (err: PouchError, res: PouchInfoResponse) => void): void;
    info(): IPromise<PouchInfoResponse>;

    type(): string;
    id(): string;
    close(callback: () => void): void;
    close(): IPromise<void>;
    compact(): IPromise<void>;

    //
    // get == select by id
    //
    get(id: string, opts: PouchGetOptions, callback: (err: PouchError, res: T ) => void): void;
    get(id: string, opts: PouchGetOptions): IPromise<T>;
    get(id: string, callback: (err: PouchError, res: T) => void): void;
    get(id: string): IPromise<T>;

    allDocs(opts: PouchAllDocsOptions, callback: (err: PouchError, res: PouchAllDocsResponse<T>) => void): void;
    allDocs(opts: PouchAllDocsOptions): IPromise< PouchAllDocsResponse<T>>;
    allDocs(callback: (err: PouchError, res: PouchAllDocsResponse<T>) => void): void;
    allDocs(): IPromise< PouchAllDocsResponse<T>>;

    query(fun: string, opts: PouchQueryOptions, callback: (err: PouchError, res: PouchQueryResponse<T>) => void): void;
    query(fun: string, opts: PouchQueryOptions): IPromise<PouchQueryResponse<T>>;
    query(fun: string, callback: (err: PouchError, res: PouchQueryResponse<T>) => void): void;
    query(fun: string): IPromise<PouchQueryResponse<T>>;
    query(fun: PouchFilter<T>, opts: PouchQueryOptions, callback: (err: PouchError, res: PouchQueryResponse<T>) => void): void;
    query(fun: PouchFilter<T>, opts: PouchQueryOptions): IPromise<PouchQueryResponse<T>>;
    query(fun: PouchFilter<T>, callback: (err: PouchError, res: PouchQueryResponse<T>) => void): void;
    query(fun: PouchFilter<T>): IPromise<PouchQueryResponse<T>>;

    bulkDocs(req: PouchBulkDocsRequest<T>, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse[]) => void): void;
    bulkDocs(req: PouchBulkDocsRequest<T>, opts: PouchUpdateOptions): IPromise<PouchUpdateResponse[]>;
    bulkDocs(req: PouchBulkDocsRequest<T>, callback: (err: PouchError, res: PouchUpdateResponse[]) => void): void;
    bulkDocs(req: PouchBulkDocsRequest<T>): IPromise<PouchUpdateResponse[]>;

    post(doc: T, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    post(doc: T, opts: PouchUpdateOptions): IPromise<PouchUpdateResponse>;
    post(doc: T, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    post(doc: T): IPromise<PouchUpdateResponse>;

    put(doc: T, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    put(doc: T, opts: PouchUpdateOptions): IPromise<PouchUpdateResponse>;
    put(doc: T, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    put(doc: T): IPromise<PouchUpdateResponse>;

    remove(doc: T, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    remove(doc: T, opts: PouchUpdateOptions): IPromise<PouchUpdateResponse>;
    remove(doc: T, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    remove(doc: T): IPromise<PouchUpdateResponse>;

    getAttachment(id: string, opts: PouchAttachmentOptions, callback: (err: PouchError, res: any) => void): void;
    getAttachment(id: string, opts: PouchAttachmentOptions): IPromise<any>;
    getAttachment(id: string, callback: (err: PouchError, res: any) => void): void;
    getAttachment(id: string): IPromise<any>;

    putAttachment(id: string, rev: string, doc: any, type: string, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    putAttachment(id: string, rev: string, doc: any, type: string): IPromise<PouchUpdateResponse>;

    removeAttachment(id: string, rev: string, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
    removeAttachment(id: string, rev: string): IPromise<PouchUpdateResponse>;

    changes(opts: PouchChangesOptions<T>, callback: (err: PouchError, res: PouchChanges<T>) => void): PouchCancellable;
    changes(callback: (err: PouchError, res: PouchChanges<T>) => void): PouchCancellable;

    revsDiff(req: any, opts: PouchRevsDiffOptions, callback: (missing: any) => void): void;
    revsDiff(req: any, callback: (missing: any) => void): void;
  }

  export interface PouchFilter<T extends PouchDoc> {
    map: (doc: any) => void;
    reduce?: (key: string, value: T) => any;
  }

  export interface PouchQueryOptions {
    complete?: any;
    include_docs?: boolean;
    error?: (err: PouchError) => void;
    descending?: boolean;
    reduce?: boolean;
  }

  export interface PouchQueryResponse<T extends PouchDoc> {
    rows: T[];
  }

  export interface PouchAttachmentOptions {
    decode?: boolean;
  }

  export interface PouchCancellable {
    cancel: () => void;
  }

  export interface PouchChangesOptions<T extends PouchDoc> {
    onChange: (change: PouchChange<T>) => void;
    complete?: (err: PouchError, res: PouchChanges<T>) => void;
    seq?: number;
    since?: number;
    descending?: boolean;
    filter?: PouchFilter<T>;
    continuous?: boolean;
    include_docs?: boolean;
    conflicts?: boolean;
  }

  export interface PouchChange<T extends PouchDoc> {
    changes: any;
    doc: T;
    id: string;
    seq: number;
  }

  export interface PouchChanges<T extends PouchDoc> {
    results: PouchChange<T>[];
  }

  export interface PouchRevsDiffOptions {
  }

  export interface PouchReplicateOptions<T extends PouchDoc> {
    continuous?: boolean;
    onChange?: (any: any) => void;
    filter?: any;
    complete?: (err: PouchError, res: PouchChanges<T>) => void;
  }

  export interface PouchReplicateResponse {
    ok: boolean;
    start_time: Date;
    end_time: Date;
    docs_read: number;
    docs_written: number;
  }

  export interface PouchReplicate<T extends PouchDoc> {
    from(url: string, opts: PouchReplicateOptions<T>, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
    from(url: string, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;

    to(dbName: string, opts: PouchReplicateOptions<T>, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
    to(dbName: string, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
  }

  export interface PouchOptions {
    /**
     * You can omit the name argument and specify it via options instead. Note that the name is required.
     */
    name?: string;
    /**
     * One of 'idb', 'leveldb', 'websql', or 'http'.
     * If unspecified, PouchDB will infer this automatically, preferring IndexedDB to WebSQL in browsers that support both (i.e. Chrome, Opera and Android 4.4+).
     */
    adapter?: string;
    /**
     * This turns on auto compaction, which means compact() is called after every change to the database. Defaults to false.
     */
    auto_compaction?: boolean;
    /**
     * Amount in MB to request for storage, which you will need if you are storing >5MB in order to avoid storage limit errors on iOS/Safari.
     */
    size?: number;
    /**
     * Specify how many old revisions we keep track (not a copy) of.
     */
    revs_limit?: number;
  }

  export interface PouchDB {
    prefix: string;
    version: string;
    new<T extends PouchDoc> (name: string, opts: PouchOptions, callback: (err: PouchError, res: PouchApi<T>) => void): PouchApi<T>;
    new<T extends PouchDoc> (opts: PouchOptions, callback: (err: PouchError, res: PouchApi<T>) => void): PouchApi<T>;
    new<T extends PouchDoc> (opts: PouchOptions): PouchApi<T>;
    new<T extends PouchDoc> (name: string, opts: PouchOptions): PouchApi<T>;
    new<T extends PouchDoc> (name: string, callback: (err: PouchError, res: PouchApi<T>) => void): PouchApi<T>;
    new<T extends PouchDoc> (name: string): PouchApi<T>;
    destroy(name: string, callback: (err: PouchError) => void): void;
  }
}
//
// emit is the function that the PouchFilter.map function should call in order to add a particular item to
// a filter view.
//
declare function emit<T extends {}>(key: any, value: T): void;
declare function emit(key: any, value: any): void;
declare function emit(any: any): void;
