// Type definitions for nano 6.2.0
// Project: https://github.com/apache/couchdb-nano
// Definitions by: Tim Jacobi <https://github.com/timjacobi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module "nano" {
    import { EventEmitter } from "events";
    import { Request, CoreOptions } from "request";

    function nano(config: nano.Configuration | string): nano.ServerScope | nano.DocumentScope;

    namespace nano {
        interface Configuration {
            url: string
            requestDefaults?: CoreOptions
            log?(id: string, args: any): void
            parseUrl?: boolean
        }

        interface Callback {
            (error: any, result: any, headers?: any): void
        }

        interface ServerScope {
            readonly config: ServerConfig
            db: DatabaseScope
            use(db: string): DocumentScope
            scope(db: string): DocumentScope
            request: RequestFunction
            relax: RequestFunction
            dinosaur: RequestFunction
            auth(username: string, userpass: string, callback?: Callback): Request
            session(callback?: Callback): Request
            updates(params?: UpdatesParams, callback?: Callback): Request
            followUpdates(params?: object, callback?: Callback): EventEmitter
            uuids(num: number, callback: Callback): Request
        }

        interface DatabaseScope {
            create(name: string, callback?: Callback): Request
            get(name: string, callback?: Callback): Request
            destroy(name: string, callback?: Callback): Request
            list(callback?: Callback): Request
            use(db: string): DocumentScope
            compact(name: string, designname?: string, callback?: Callback): Request
            replicate(source: string | DocumentScope, target: string | DocumentScope, options?: object, callback?: Callback): Request
            changes(name: string, params?: object, callback?: Callback): Request
            follow(source: string, params?: DatabaseScopeFollowUpdatesParams, callback?: Callback): void
            followUpdates(params?: object, callback?: Callback): EventEmitter
            updates(params?: UpdatesParams, callback?: Callback): Request
        }

        interface DocumentScope {
            readonly config: ServerConfig
            info(callback?: Callback): Request
            replicate(target: string | DocumentScope, options?: object, callback?: Callback): Request
            compact(callback?: Callback): Request
            changes(params?: object, callback?: Callback): Request
            follow(params?: DocumentScopeFollowUpdatesParams, callback?: Callback): void
            auth(username: string, userpass: string, callback?: Callback): Request
            session(callback?: Callback): Request
            insert(document: object, params?: string | object, callback?: Callback): Request
            get(docname: string, params?: object, callback?: Callback): Request
            head(docname: string, callback: Callback): Request
            copy(src_document: string, dst_document: string, options: object, callback?: Callback): Request
            destroy(docname: string, rev: string, callback?: Callback): Request
            bulk(docs: BulkModifyDocsWrapper, params?: object, callback?: Callback): Request
            list(params?: object, callback?: Callback): Request
            fetch(docnames: BulkFetchDocsWrapper, params?: object, callback?: Callback): Request
            fetchRevs(docnames: BulkFetchDocsWrapper, params?: object, callback?: Callback): Request
            multipart: Multipart
            attachment: Attachment
            show(designname: string, showname: string, doc_id: string, params?: object, callback?: Callback): Request
            atomic(designname: string, updatename: string, docname: string, body?: object, callback?: Callback): Request
            updateWithHandler(designname: string, updatename: string, docname: string, body?: object, callback?: Callback): Request
            search(designname: string, searchname: string, params?: object, callback?: Callback): Request
            spatial(ddoc: string, viewname: string, params?: object, callback?: Callback): Request
            view(designname: string, viewname: string, params?: object, callback?: Callback): Request
            viewWithList(designname: string, viewname: string, listname: string, params?: object, callback?: Callback): Request
            server: ServerScope
        }

        interface Multipart {
            insert(doc: object, attachments: object[], params: string | object, callback?: Callback): Request
            get(docname: string, params?: string | object, callback?: Callback): Request
        }

        interface Attachment {
            insert(docname: string, attname: string, att: any, contenttype: string, params?: object, callback?: Callback): Request
            get(docname: string, attname: string, params?: object, callback?: Callback): Request
            destroy(docname: string, attname: string, params?: object, callback?: Callback): Request
        }

        interface ServerConfig {
            url: string
            db: string
        }

        interface RequestFunction {
            (options?: RequestOptions | string, callback?: Callback): void
        }

        interface RequestOptions {
            db?: string
            method?: string
            path?: string
            doc?: string
            att?: string
            qs?: any
            content_type?: string
            headers?: any
            body?: any
            encoding?: string
            multipart?: any[]
        }

        interface UpdatesParams {
            feed: "longpoll" | "continuous" | "eventsource"
            timeout: number
            heartbeat: boolean
        }

        interface DocumentScopeFollowUpdatesParams {
            inlucde_docs?: boolean
            since?: string
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

        interface DatabaseScopeFollowUpdatesParams extends DocumentScopeFollowUpdatesParams {
            db: string
        }

        interface FollowUpdatesParamsFilterFunction {
            (doc: any, req: any): boolean
        }

        interface BulkModifyDocsWrapper {
            docs: object[]
        }

        interface BulkFetchDocsWrapper {
            keys: string[]
        }
    }

    export = nano
}
