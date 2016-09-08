// Type definitions for pouchdb-upsert v2.0.1
// Project: https://github.com/pouchdb/upsert
// Definitions by: Keith D. Moore <https://github.com/keithdmoore>, Andrew Mitchell <https://github.com/hotforfeature>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

declare namespace PouchDB {

  interface Database<Content extends Core.Encodable> {
    /**
     * Perform an upsert (update or insert) operation. Returns a Promise.
     *
     * @param docId - the _id of the document.
     * @param diffFun - function that takes the existing doc as input and returns an updated doc.
     * If this diffFunc returns falsey, then the update won't be performed (as an optimization).
     * If the document does not already exist, then {} will be the input to diffFunc.
     *
     */
    upsert(docId: Core.DocumentId, diffFun: UpsertDiffCallback<Content>): Promise<Core.Response>;

    /**
     * Perform an upsert (update or insert) operation. If a callback is not provided, the Promise based version
     * of this function will be called.
     *
     * @param docId - the _id of the document.
     * @param diffFun - function that takes the existing doc as input and returns an updated doc.
     * If this diffFunc returns falsey, then the update won't be performed (as an optimization).
     * If the document does not already exist, then {} will be the input to diffFunc.
     * @param callback - called with the results after operation is completed.
     */
    upsert(docId: Core.DocumentId, diffFun: UpsertDiffCallback<Content>,
           callback: Core.Callback<Core.Error, Core.Response>): void;

    /**
     * Put a new document with the given docId, if it doesn't already exist. Returns a Promise.
     *
     * @param doc - the document to insert. Should contain an _id if docId is not specified
     * If the document already exists, then the Promise will just resolve immediately.
     */
    putIfNotExists(doc: Core.Document<Content>): Promise<Core.Response>;

    //
    /**
     * Put a new document with the given docId, if it doesn't already exist.  If a callback is not provided,
     * the Promise based version of this function will be called.
     *
     * @param doc - the document to insert. Should contain an _id if docId is not specified
     * If the document already exists, then the Promise will just resolve immediately.
     * @param callback - called with the results after operation is completed.
     * If you don't specify a callback, then the Promise version of this function will be invoked and it
     * will return a Promise.
     */
    putIfNotExists(doc: Core.Document<Content>,
                   callback: Core.Callback<Core.Error, Core.Response>): void;
  }

  interface UpsertDiffCallback<Content extends Core.Encodable> {
    (doc: Core.Document<Content>): Core.Document<Content>|boolean;
  }
}

declare module 'pouchdb-upsert' {
  const plugin: PouchDB.Plugin;
  export = plugin;
}
