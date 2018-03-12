// Type definitions for next 2.4
// Project: https://github.com/zeit/next.js
// Definitions by: Drew Hays <https://github.com/dru89>
//                 Brice BERNARD <https://github.com/brikou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="node" />
/// <reference types="isomorphic-unfetch" />

import * as http from "http";
import * as url from "url";
import * as fetch from "isomorphic-unfetch";

declare namespace next {
    interface NextContext {
        pathname?: string;                      //path section of URL
        query?: any;                            // meant to be an object - // query string section of URL parsed as an object
        asPath?: string;                        // String of the actual path (including the query) shows in the browser
        req?: http.IncomingMessage;             //HTTP request object (server only)
        res?: http.ServerResponse;              //HTTP response object (server only)
        jsonPageRes?: fetch.IsomorphicResponse; //Fetch Response object (client only) - from https://developer.mozilla.org/en-US/docs/Web/API/Response
        err?: Error;                            //Error object if any error is encountered during the rendering
    }

    type UrlLike = url.UrlObject | url.Url;

    interface ServerConfig {
        // known keys
        webpack?: any;
        webpackDevMiddleware?: any;
        poweredByHeader?: boolean;
        distDir?: string;
        assetPrefix?: string;
        configOrigin?: string;
        useFileSystemPublicRoutes?: boolean;

        // and since this is a config, it can take anything else, too.
        [key: string]: any;
    }

    interface ServerOptions {
        dir?: string;
        dev?: boolean;
        staticMarkup?: boolean;
        quiet?: boolean;
        conf?: ServerConfig;
    }

    interface Server {
        handleRequest(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl?: UrlLike,
        ): Promise<void>;
        getRequestHandler(): (
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl?: UrlLike,
        ) => Promise<void>;
        prepare(): Promise<void>;
        close(): Promise<void>;
        defineRoutes(): Promise<void>;
        start(): Promise<void>;
        run(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl: UrlLike,
        ): Promise<void>;

        render(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: {
                [key: string]:
                    | boolean
                    | boolean[]
                    | number
                    | number[]
                    | string
                    | string[];
            },
            parsedUrl?: UrlLike,
        ): Promise<void>;
        renderError(
            err: any,
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: {
                [key: string]:
                    | boolean
                    | boolean[]
                    | number
                    | number[]
                    | string
                    | string[];
            },
        ): Promise<void>;
        render404(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl: UrlLike,
        ): Promise<void>;
        renderToHTML(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: {
                [key: string]:
                    | boolean
                    | boolean[]
                    | number
                    | number[]
                    | string
                    | string[];
            },
        ): Promise<string>;
        renderErrorToHTML(
            err: any,
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: {
                [key: string]:
                    | boolean
                    | boolean[]
                    | number
                    | number[]
                    | string
                    | string[];
            },
        ): Promise<string>;

        serveStatic(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            path: string,
        ): Promise<void>;
        isServeableUrl(path: string): boolean;
        isInternalUrl(req: http.IncomingMessage): boolean;
        readBuildId(): string;
        handleBuildId(buildId: string, res: http.ServerResponse): boolean;
        getCompilationError(
            page: string,
            req: http.IncomingMessage,
            res: http.ServerResponse,
        ): Promise<any>;
        handleBuildHash(
            filename: string,
            hash: string,
            res: http.ServerResponse,
        ): void;
        send404(res: http.ServerResponse): void;
    }
}

declare function next(options?: next.ServerOptions): next.Server;
export = next;
