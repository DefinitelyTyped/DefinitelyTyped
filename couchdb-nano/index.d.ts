// Type definitions for abs 1.3
// Project: https://github.com/IonicaBizau/node-abs
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Request, CoreOptions } from 'request';

declare function nano(config: nano.Config | string): nano.Client;

declare namespace nano {
    interface UpdatesParams {
        feed: "longpoll" | "continuous" | "eventsource"
        timeout: number
        heartbeat: boolean
    }

    interface ServerConfig {
        url: string
        db: string
    }

    interface RequestFunction {
        (options: RequestOptions, callback?: Callback): void
    }

    interface Callback {
        (error: any, result: any): void
    }

    interface RequestOptions {
        db: string
        method: string
        path: string
        doc: string
        att: string
        qs: any
        content_type: string
        headers: any
        body: any
        encoding: string
        multipart: any[]
    }

    interface DatabaseAccessor {
        create(name: string, callback?: Callback): Request
        get(name: string, callback?: Callback): Request
        destroy(name: string, callback?: Callback): Request
        list(callback?: Callback): Request
        compact(name: string, designname?: string, callback?: Callback): Request
        replicate(source: string, target: string, options?: object, callback?: Callback): Request
        changes(source: string, params?: object, callback?: Callback): Request
        follow(source: string, params?: FollowUpdatesParams, callback?: Callback): any
        info(callback?: Callback): Request
    }

    interface MultipartAccessor {
        insert(doc: object, attachments: object[], params: string | object, callback?: Callback): Request
        get(docname: string, params?: string | object, callback?: Callback): Request
    }

    interface AttachmentAccessor {
        insert(docname: string, attname: string, att: any, contenttype: string, params?: object, callback?: Callback): Request
        get(docname: string, attname: string, params?: object, callback?: Callback): Request
        destroy(docname: string, attname: string, params?: object, callback?: Callback): Request
    }

    interface DocumentAccessor {
        insert(document: object, params?: string | object, callback?: Callback): Request
        destroy(docname: string, rev: string, callback?: Callback): Request
        get(docname: string, params?: object, callback?: Callback): Request
        head(docname: string, callback: Callback): Request
        copy(src_document: object, dst_document: object, options: object, callback?: Callback): Request
        bulk(docs: BulkModifyDocsWrapper, params?: object, callback?: Callback): Request
        fetch(docnames: BulkFetchDocsWrapper, params?: object, callback?: Callback): Request
        fetchRevs(docnames: BulkFetchDocsWrapper, params?: object, callback?: Callback): Request
        view(designname: string, viewname: string, params?: object, callback?: Callback): Request
        viewWithList(designname: string, viewname: string, listname: string, params?: object, callback?: Callback): Request
        show(designname: string, showname: string, doc_id: string, params?: object, callback?: Callback): Request
        atomic(designname: string, updatename: string, docname: string, body?: object, callback?: Callback): Request
        search(designname: string, searchname: string, params?: object, callback?: Callback): Request
        multipart: MultipartAccessor
        attachment: AttachmentAccessor
    }

    interface BulkModifyDocsWrapper {
        docs: object[]
    }

    interface BulkFetchDocsWrapper {
        keys: string[]
    }

    interface Config {
        url: string
        requestDefaults?: request.CoreOptions
        log?(id: string, args: any): void
        parseUrl?: boolean
    }

    interface FollowUpdatesParamsFilterFunction {
        (doc: any, req: any): boolean
    }

    interface FollowUpdatesParams {
        db: string
        inlucde_docs?: boolean
        since?: number | "now"
        heartbeat?: number
        feed?: "continuous"
        filter?: string | FollowUpdatesParamsFilterFunction
        query_params?: object
        headers?: object
        inactivity_ms?: number
        max_retry_seconds?: number
        initial_retry_delay?: number
        response_grace_time?: number
    }

    interface Client {
        db: DatabaseAccessor
        use(db: string): DocumentAccessor
        auth(username: string, userpass: string, callback?: Function): Request
        session(callback?: Callback): Request
        uuids(num: number, callback: Function): Request
        request: RequestFunction
        relax: RequestFunction
        dinosaur: RequestFunction
        readonly config: ServerConfig
        updates(params?: UpdatesParams, callback?: Callback): Request
        followUpdates(params?: object, callback?: Callback): EventEmitter
    }
}

export = nano
