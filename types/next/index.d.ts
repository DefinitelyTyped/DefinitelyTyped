// Type definitions for next 6.1
// Project: https://github.com/zeit/next.js
// Definitions by: Drew Hays <https://github.com/dru89>
//                 Brice BERNARD <https://github.com/brikou>
//                 James Hegedus <https://github.com/jthegedus>
//                 Resi Respati <https://github.com/resir014>
//                 Scott Jones <https://github.com/scottdj92>
//                 Joao Vieira <https://github.com/joaovieira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as http from "http";
import * as url from "url";

import { Response as NodeResponse } from "node-fetch";

import { SingletonRouter, DefaultQuery } from "./router";

declare namespace next {
    // Deprecated
    type QueryStringMapObject = DefaultQuery;
    type ServerConfig = NextConfig;
    // End Deprecated

    type UrlLike = url.UrlObject | url.Url;

    /**
     * Context object used in methods like `getInitialProps()`
     * https://github.com/zeit/next.js/blob/6.1.1/server/render.js#L77
     * https://github.com/zeit/next.js/blob/6.1.1/readme.md#fetching-data-and-component-lifecycle
     *
     * @template Q Query object schema.
     */
    interface NextContext<Q extends DefaultQuery = DefaultQuery> {
        /** path section of URL */
        pathname: string;
        /** query string section of URL parsed as an object */
        query: Q;
        /** String of the actual path (including the query) shows in the browser */
        asPath: string;
        /** HTTP request object (server only) */
        req?: http.IncomingMessage;
        /** HTTP response object (server only) */
        res?: http.ServerResponse;
        /** Fetch Response object (client only) - from https://developer.mozilla.org/en-US/docs/Web/API/Response */
        jsonPageRes?: NodeResponse;
        /** Error object if any error is encountered during the rendering */
        err?: Error;
    }

    /**
     * Next.js config schema.
     * https://github.com/zeit/next.js/blob/6.1.1/server/config.js#L10
     */
    interface NextConfig {
        webpack?: any;
        webpackDevMiddleware?: any;
        poweredByHeader?: boolean;
        distDir?: string;
        assetPrefix?: string;
        configOrigin?: string;
        useFileSystemPublicRoutes?: boolean;
        generateBuildId?: () => string;
        generateEtags?: boolean;
        pageExtensions?: string[];
        publicRuntimeConfig?: object;
        serverRuntimeConfig?: object;

        // Plugin can define their own keys.
        [key: string]: any;
    }

    /**
     * Options passed to the Server constructor in Node.js.
     * https://github.com/zeit/next.js/blob/6.1.1/server/index.js#L30
     */
    interface ServerOptions {
        dir?: string;
        dev?: boolean;
        staticMarkup?: boolean;
        quiet?: boolean;
        conf?: NextConfig;
    }

    /**
     * Next.js server instance API.
     */
    interface Server {
        // From constructor
        // https://github.com/zeit/next.js/blob/6.1.1/server/index.js#L30
        dir: string;
        dev: boolean;
        quiet: boolean;
        router: SingletonRouter;
        http: null | http.Server;
        nextConfig: NextConfig;
        distDir: string;
        buildId: string;
        hotReloader: any;
        renderOpts: {
            dev: string;
            staticMarkup: boolean;
            distDir: string;
            hotReloader: any;
            buildId: string;
            availableChunks: object;
            generateETags: boolean;
            runtimeConfig?: object;
        };

        getHotReloader(
            dir: string,
            options: { quiet: boolean; config: NextConfig; buildId: string }
        ): any;
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
        defineRoutes(): Promise<void>;
        start(): Promise<void>;
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
        handleBuildId(buildId: string, res: http.ServerResponse): boolean;
        getCompilationError(): Promise<any>;
        send404(res: http.ServerResponse): void;
    }

    /**
     * Next.js counterpart of React.ComponentType.
     * Specially useful in HOCs that receive Next.js components.
     *
     * @template P Component props.
     * @template IP Initial props returned from getInitialProps.
     * @template C Context passed to getInitialProps.
     */
    type NextComponentType<P = {}, IP = P, C = NextContext> =
        | NextComponentClass<P, IP, C>
        | NextStatelessComponent<P, IP, C>;

    /**
     * Next.js counterpart of React.SFC/React.StatelessComponent.
     *
     * @template P Component props.
     * @template IP Initial props returned from getInitialProps.
     * @template C Context passed to getInitialProps.
     */
    type NextSFC<P = {}, IP = P, C = NextContext> = NextStatelessComponent<P, IP, C>;
    type NextStatelessComponent<P = {}, IP = P, C = NextContext> = React.StatelessComponent<P> &
        NextStaticLifecycle<IP, C>;

    /**
     * Next.js counterpart of React.ComponentClass.
     *
     * @template P Component props.
     * @template IP Initial props returned from getInitialProps.
     * @template C Context passed to getInitialProps.
     */
    type NextComponentClass<P = {}, IP = P, C = NextContext> = React.ComponentClass<P> &
        NextStaticLifecycle<IP, C>;

    /**
     * Next.js specific lifecycle methods.
     *
     * @template IP Initial props returned from getInitialProps and passed to the component.
     * @template C Context passed to getInitialProps.
     */
    interface NextStaticLifecycle<IP, C> {
        getInitialProps?: (ctx: C) => Promise<IP> | IP;
    }
}

declare function next(options?: next.ServerOptions): next.Server;
export = next;
