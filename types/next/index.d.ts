// Type definitions for next 8.0
// Project: https://github.com/zeit/next.js/packages/next, https://nextjs.org
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
import * as url from "url";
import { Server as NextServer, ServerOptions as NextServerOptions, RenderOptions } from "next-server";
import { NextConfig as NextServerConfig } from "next-server/next-config";
import { Response as NodeResponse } from "node-fetch";
import { SingletonRouter, DefaultQuery, UrlLike } from "./router";

declare namespace next {
    // Moved to next-server
    type NextConfig = NextServerConfig;
    type Server = NextServer;
    type ServerOptions = NextServerOptions;
    // End Moved to next-server

    // Deprecated
    type QueryStringMapObject = DefaultQuery;
    type ServerConfig = NextConfig;
    // End Deprecated

    /**
     * HTTP request object (server only, non-export mode)
     */
    type NextReq<CustomReq = {}> = http.IncomingMessage & CustomReq;

    /**
     * HTTP request object (server only, `next export` mode)
     *
     * Note: We're using `Partial` here (instead of `{ url?: string }`)
     * in order to avoid TS raising typedef errors
     * when using it like `req && req.getHeaderNames ? req.getHeaderNames() : []`.
     */
    type NextExportReq<CustomReq = {}> = Partial<NextReq<CustomReq>>;

    /**
     * HTTP response object (server only, non-export mode)
     */
    type NextResponse = http.ServerResponse;

    /**
     * HTTP response object (server only, `next export` mode)
     *
     * Note: We're using `Partial` here (instead of `{}`)
     * in order to avoid TS raising typedef errors
     * when using it like `res && res.getHeaderNames ? res.getHeaderNames() : []`.
     */
    type NextExportResponse = Partial<NextResponse>;

    /**
     * Context object used in methods like `getInitialProps()`
     * https://github.com/zeit/next.js/blob/7.0.0/server/render.js#L97
     * https://github.com/zeit/next.js/blob/7.0.0/README.md#fetching-data-and-component-lifecycle
     *
     * @template Q Query object schema.
     */
    interface NextContext<
        Q extends DefaultQuery = DefaultQuery,
        CustomReq = {}
    > {
        /** path section of URL */
        pathname: string;
        /** query string section of URL parsed as an object */
        query: Q;
        /** String of the actual path (including the query) shows in the browser */
        asPath: string;
        /**
         * HTTP request object (server only)
         * Note: In `next export` mode, this will consist of only `{ url?: string }`.
         */
        req?: NextReq<CustomReq> | NextExportReq<CustomReq>;
        /**
         * HTTP response object (server only)
         * Note: In `next export` mode, this will be empty `{}` object.
         */
        res?: NextResponse | NextExportResponse;
        /** Fetch Response object (client only) - from https://developer.mozilla.org/en-US/docs/Web/API/Response */
        jsonPageRes?: NodeResponse;
        /** Error object if any error is encountered during the rendering */
        err?: Error & { statusCode?: number };
    }

    /**
     * Next.js dev server instance API.
     */
    interface DevServer extends Server {
        hotReloader: any;
        renderOpts: RenderOptions & {
            dev: true;
            hotReloader: any;
        };

        getHotReloader(
            dir: string,
            options: { quiet: boolean; config: NextConfig; buildId: string }
        ): any;

        addExportPathMapRoutes(): Promise<void>;
        getCompilationError(): Promise<any>;
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
     * @deprecated as of recent React versions, function components can no
     * longer be considered 'stateless'. Please use `NextFunctionComponent` instead.
     *
     * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
     */
    type NextSFC<P = {}, IP = P, C = NextContext> = NextFunctionComponent<P, IP, C>;

    /**
     * @deprecated as of recent React versions, function components can no
     * longer be considered 'stateless'. Please use `NextFunctionComponent` instead.
     *
     * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
     */
    type NextStatelessComponent<P = {}, IP = P, C = NextContext> = NextFunctionComponent<P, IP, C>;

    type NextFC<P = {}, IP = P, C = NextContext> = NextFunctionComponent<P, IP, C>;

    /**
     * Next.js counterpart of React.FC/React.FunctionComponent.
     *
     * @template P Component props.
     * @template IP Initial props returned from getInitialProps.
     * @template C Context passed to getInitialProps.
     */
    type NextFunctionComponent<P = {}, IP = P, C = NextContext> = React.FunctionComponent<P> &
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
        getInitialProps?: GetInitialProps<IP, C>;
    }

    /**
     * Next.js getInitialProps type.
     *
     * @template IP Initial props returned from getInitialProps and passed to the component.
     * @template C Context passed to getInitialProps.
     */
    type GetInitialProps<IP, C> = (ctx: C) => Promise<IP> | IP;
}

declare function next(options?: next.ServerOptions & { dev: true }): next.DevServer;
declare function next(options?: next.ServerOptions): next.Server;
export = next;
