// Type definitions for urlrouter
// Project: https://github.com/fengmk2/urlrouter
// Definitions by: soywiz <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "_UrlRouterInternal" {
    import http = require("http");

    export interface ServerRequest extends http.ServerRequest {
        params: any;
    }

    export interface ServerResponse extends http.ServerResponse {

    }

    export interface App {
        // https://github.com/visionmedia/node-methods/blob/master/index.js
        get(urlpattern: string, handler: HttpHandler): void;
        post(urlpattern: string, handler: HttpHandler): void;
        put(urlpattern: string, handler: HttpHandler): void;
        head(urlpattern: string, handler: HttpHandler): void;
        delete(urlpattern: string, handler: HttpHandler): void;
        options(urlpattern: string, handler: HttpHandler): void;
        trace(urlpattern: string, handler: HttpHandler): void;
        copy(urlpattern: string, handler: HttpHandler): void;
        lock(urlpattern: string, handler: HttpHandler): void;
        mkcol(urlpattern: string, handler: HttpHandler): void;
        move(urlpattern: string, handler: HttpHandler): void;
        propfind(urlpattern: string, handler: HttpHandler): void;
        proppatch(urlpattern: string, handler: HttpHandler): void;
        unlock(urlpattern: string, handler: HttpHandler): void;
        report(urlpattern: string, handler: HttpHandler): void;
        mkactivity(urlpattern: string, handler: HttpHandler): void;
        checkout(urlpattern: string, handler: HttpHandler): void;
        merge(urlpattern: string, handler: HttpHandler): void;
        "m-search"(urlpattern: string, handler: HttpHandler): void;
        notify(urlpattern: string, handler: HttpHandler): void;
        subscribe(urlpattern: string, handler: HttpHandler): void;
        unsubscribe(urlpattern: string, handler: HttpHandler): void;
        patch(urlpattern: string, handler: HttpHandler): void;
        search(urlpattern: string, handler: HttpHandler): void;

        all(urlpattern: string, handler: HttpHandler): void;
        redirect(urlpattern: string, to: string): void;
    }

    export interface Options {
        paramsName?: string;
        pageNotFound?: (req: ServerRequest, res: ServerResponse) => void;
        errorHandler?: (err:Error, req: ServerRequest, res: ServerResponse) => void;
    }

    export function _UrlRouterfunc(handler: (app: App) => void, options?: any): void;

    export interface HttpHandler {
        (req: ServerRequest, res: ServerResponse, next?: () => void): void;
    }

}

declare module "urlrouter" {
    import _UrlRouterInternal = require("_UrlRouterInternal");

    function _UrlRouterInternal(handler: (app: _UrlRouterInternal.App) => void): _UrlRouterInternal.HttpHandler;
    export = _UrlRouterInternal;
}