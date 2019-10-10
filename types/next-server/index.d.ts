// Type definitions for next-server 8.1
// Project: https://github.com/zeit/next.js/packages/next-server
// Definitions by: Drew Hays <https://github.com/dru89>
//                 Brice BERNARD <https://github.com/brikou>
//                 James Hegedus <https://github.com/jthegedus>
//                 Resi Respati <https://github.com/resir014>
//                 Scott Jones <https://github.com/scottdj92>
//                 Joao Vieira <https://github.com/joaovieira>
//                 AJ Livingston <https://github.com/ajliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as http from "http";
import { NextConfig } from "./next-config";
import { UrlLike, DefaultQuery } from "./router";

declare namespace next {
    interface RenderOptions {
        staticMarkup: boolean;
        distDir: string;
        buildId: string;
        generateETags: boolean;
        runtimeConfig?: Record<any, any>;
    }

    /**
     * Options passed to the Server constructor in Node.js.
     */
    interface ServerOptions {
        dev?: boolean;
        dir?: string;
        staticMarkup?: boolean;
        quiet?: boolean;
        conf?: NextConfig;
    }

    interface ServerRoute<P = DefaultQuery> {
        match(pathname: string, params?: Partial<P>): P | false;
        fn(req: http.IncomingMessage, res: http.ServerResponse, params: P, parsedUrl: UrlLike): Promise<void>;
    }

    interface ServerRouter {
        routes: ServerRoute[];
        add(route: ServerRoute): void;
        match(req: http.IncomingMessage, res: http.ServerResponse, parsedUrl: UrlLike): (() => Promise<void>) | undefined;
    }

    /**
     * Next.js server instance API.
     */
    interface Server {
        dir: string;
        quiet: boolean;
        router: ServerRouter;
        nextConfig: NextConfig;
        distDir: string;
        buildId: string;
        renderOpts: RenderOptions;

        currentPhase(): string;
        handleRequest(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl?: UrlLike
        ): Promise<void>;
        getRequestHandler(): (
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl?: UrlLike
        ) => Promise<void>;

        setAssetPrefix(prefix: string): void;
        prepare(): Promise<void>;
        close(): Promise<void>;
        setImmutableAssetCacheControl(res: http.ServerResponse): void;
        generateRoutes(): ServerRoute[];
        run(req: http.IncomingMessage, res: http.ServerResponse, parsedUrl: UrlLike): Promise<void>;

        render(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: DefaultQuery,
            parsedUrl?: UrlLike
        ): Promise<void>;
        renderToHTML(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: DefaultQuery
        ): Promise<string>;
        renderError(
            err: any,
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: DefaultQuery
        ): Promise<void>;
        renderErrorToHTML(
            err: any,
            req: http.IncomingMessage,
            res: http.ServerResponse,
            pathname: string,
            query?: DefaultQuery
        ): Promise<string>;
        render404(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            parsedUrl?: UrlLike
        ): Promise<void>;

        serveStatic(
            req: http.IncomingMessage,
            res: http.ServerResponse,
            path: string
        ): Promise<void>;
        isServeableUrl(path: string): boolean;
        readBuildId(): string;
    }
}

declare function next(options?: next.ServerOptions): next.Server;
export = next;
