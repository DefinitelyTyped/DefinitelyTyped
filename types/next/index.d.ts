// Type definitions for next 7.0
// Project: https://github.com/zeit/next.js/packages/next
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
import { Server as NextServer, ServerOptions as NextServerOptions, RenderOptions } from 'next-server';
import { NextConfig as NextServerConfig } from 'next-server/next-config';
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
     * Context object used in methods like `getInitialProps()`
     * https://github.com/zeit/next.js/blob/7.0.0/server/render.js#L97
     * https://github.com/zeit/next.js/blob/7.0.0/README.md#fetching-data-and-component-lifecycle
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

declare function next(options?: next.ServerOptions & { dev: true }): next.DevServer;
declare function next(options?: next.ServerOptions): next.Server;
export = next;
