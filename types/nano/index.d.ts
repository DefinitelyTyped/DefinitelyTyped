// Type definitions for nano 6.2
// Project: https://github.com/apache/couchdb-nano
// Definitions by: Tim Jacobi <https://github.com/timjacobi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";
import { Request, CoreOptions } from "request";

declare function nano(
  config: nano.Configuration | string
): nano.ServerScope | nano.DocumentScope<any>;

declare namespace nano {
  interface Configuration {
    url: string;
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
    auth(username: string, userpass: string, callback?: Callback<any>): Request;
    session(callback?: Callback<any>): Request;
    updates(callback?: Callback<any>): Request;
    updates(params: UpdatesParams, callback?: Callback<any>): Request;
    followUpdates(callback?: Callback<any>): EventEmitter;
    followUpdates(params: any, callback?: Callback<any>): EventEmitter;
    uuids(num: number, callback: Callback<any>): Request;
  }

  interface DatabaseScope {
    create(name: string, callback?: Callback<any>): Request;
    get(name: string, callback?: Callback<any>): Request;
    destroy(name: string, callback?: Callback<any>): Request;
    list(callback?: Callback<any>): Request;
    use<D>(db: string): DocumentScope<D>;
    compact(name: string, callback?: Callback<any>): Request;
    compact(name: string, designname: string, callback?: Callback<any>): Request;
    replicate<D>(
      source: string | DocumentScope<D>,
      target: string | DocumentScope<D>,
      callback?: Callback<any>
    ): Request
    replicate<D>(
      source: string | DocumentScope<D>,
      target: string | DocumentScope<D>,
      options?: any,
      callback?: Callback<any>
    ): Request;
    changes(name: string, callback?: Callback<any>): Request;
    changes(name: string, params: any, callback?: Callback<any>): Request;
    follow(source: string, callback?: Callback<any>): EventEmitter;
    follow(source: string, params: DatabaseScopeFollowUpdatesParams, callback?: Callback<any>): EventEmitter;
    followUpdates(callback?: Callback<any>): EventEmitter;
    followUpdates(params: any, callback?: Callback<any>): EventEmitter;
    updates(callback?: Callback<any>): Request;
    updates(params: UpdatesParams, callback?: Callback<any>): Request;
  }

  interface DocumentScope<D> {
    readonly config: ServerConfig;
    info(callback?: Callback<any>): Request;
    replicate<D>(
      target: string | DocumentScope<D>,
      callback?: Callback<any>
    ): Request
    replicate(
      target: string | DocumentScope<D>,
      options: any,
      callback?: Callback<any>
    ): Request;
    compact(callback?: Callback<any>): Request;
    changes(callback?: Callback<any>): Request;
    changes(params: any, callback?: Callback<any>): Request;
    follow(callback?: Callback<any>): EventEmitter;
    follow(params: DocumentScopeFollowUpdatesParams, callback?: Callback<any>): EventEmitter;
    auth(username: string, userpass: string, callback?: Callback<any>): Request;
    session(callback?: Callback<any>): Request;
    insert(document: any, callback?: Callback<any>): Request;
    insert(document: any, params: any, callback?: Callback<any>): Request;
    get(docname: string, callback?: Callback<any>): Request;
    get(docname: string, params: any, callback?: Callback<any>): Request;
    head(docname: string, callback: Callback<any>): Request;
    copy(src_document: string, dst_document: string, callback?: Callback<any>): Request;
    copy(src_document: string, dst_document: string, options: any, callback?: Callback<any>): Request;
    destroy(docname: string, rev: string, callback?: Callback<any>): Request;
    bulk(docs: BulkModifyDocsWrapper, callback?: Callback<any>): Request;
    bulk(docs: BulkModifyDocsWrapper, params?: any, callback?: Callback<any>): Request;
    list(callback?: Callback<any>): Request;
    list(params: any, callback?: Callback<any>): Request;
    fetch(docnames: BulkFetchDocsWrapper, callback?: Callback<any>): Request;
    fetch(docnames: BulkFetchDocsWrapper, params: any, callback?: Callback<any>): Request;
    fetchRevs(docnames: BulkFetchDocsWrapper, callback?: Callback<any>): Request;
    fetchRevs(docnames: BulkFetchDocsWrapper, params?: any, callback?: Callback<any>): Request;
    multipart: Multipart;
    attachment: Attachment;
    show(
      designname: string,
      showname: string,
      doc_id: string,
      callback?: Callback<any>
    ): Request;
    show(
      designname: string,
      showname: string,
      doc_id: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    atomic(
      designname: string,
      updatename: string,
      docname: string,
      callback?: Callback<any>
    ): Request;
    atomic(
      designname: string,
      updatename: string,
      docname: string,
      body: any,
      callback?: Callback<any>
    ): Request;
    updateWithHandler(
      designname: string,
      updatename: string,
      docname: string,
      callback?: Callback<any>
    ): Request;
    updateWithHandler(
      designname: string,
      updatename: string,
      docname: string,
      body: any,
      callback?: Callback<any>
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
    view(
      designname: string,
      viewname: string,
      callback?: Callback<any>
    ): Request;
    view(
      designname: string,
      viewname: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    viewWithList(
      designname: string,
      viewname: string,
      listname: string,
      callback?: Callback<any>
    ): Request;
    viewWithList(
      designname: string,
      viewname: string,
      listname: string,
      params: any,
      callback?: Callback<any>
    ): Request;
    server: ServerScope;
  }

  interface Multipart {
    insert(doc: any, attachments: any[], callback?: Callback<any>): Request;
    insert(doc: any, attachments: any[], params: string | any, callback?: Callback<any>): Request;
    get(docname: string, callback?: Callback<any>): Request;
    get(docname: string, params: string | any, callback?: Callback<any>): Request;
  }

  interface Attachment {
    insert(docname: string, attname: string, att: any, contenttype: string, callback?: Callback<any>): Request;
    insert(
      docname: string,
      attname: string,
      att: any,
      contenttype: string,
      params: any,
      callback?: Callback<any>
    ): Request;
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

  interface UpdatesParams {
    feed: "longpoll" | "continuous" | "eventsource";
    timeout: number;
    heartbeat: boolean;
  }

  interface DocumentScopeFollowUpdatesParams {
    inlucde_docs?: boolean;
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
}

export = nano;
