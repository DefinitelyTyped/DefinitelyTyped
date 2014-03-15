// Type definitions for urlrouter
// Project: https://github.com/fengmk2/urlrouter
// Definitions by: soywiz <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "_UrlRouterInternal" {
    import http = require("http");

    export interface ServerRequestExt extends http.ServerRequest {
        params: any;
    }

    export interface ServerResponseExt extends http.ServerResponse {

    }

    export interface App {
        // https://github.com/visionmedia/node-methods/blob/master/index.js
        get(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        post(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        put(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        head(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        delete(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        options(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        trace(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        copy(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        lock(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        mkcol(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        move(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        propfind(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        proppatch(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        unlock(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        report(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        mkactivity(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        checkout(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        merge(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        "m-search"(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        notify(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        subscribe(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        unsubscribe(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        patch(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        search(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;

        all(urlpattern: string, handler: (req: ServerRequestExt, res: ServerResponseExt) => void): void;
        redirect(urlpattern: string, to: string): void;
    }

    export interface Options {
        paramsName?: string;
        pageNotFound?: (req: ServerRequestExt, res: ServerResponseExt) => void;
        errorHandler?: (err:Error, req: ServerRequestExt, res: ServerResponseExt) => void;
    }

    export function _UrlRouterfunc(handler: (app: App) => void, options?: any): void;
}

declare module "urlrouter" {
    import _UrlRouterInternal = require("_UrlRouterInternal");
    function _call(handler: (app: _UrlRouterInternal.App) => void): void;
    export = _call;
}