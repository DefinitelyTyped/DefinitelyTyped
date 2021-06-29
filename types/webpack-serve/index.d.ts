// Type definitions for webpack-serve 2.0
// Project: https://github.com/shellscape/webpack-serve
// Definitions by: Ryan Clark <https://github.com/rynclark>
//                 Jokcy <https://github.com/Jokcy>
//                 ZSkycat <https://github.com/ZSkycat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

import * as koa from 'koa';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotClient from 'webpack-hot-client';
import * as https from 'https';
import * as net from 'net';

declare module 'webpack' {
    interface Configuration {
        serve?: WebpackServe.Options;
    }
}

declare function WebpackServe(argv: object, options: WebpackServe.Options): Promise<WebpackServe.Result>;

declare namespace WebpackServe {
    interface Result {
        /** An instance of a Koa application, extended with a server property, and stop method, which is used to programatically stop the server */
        app: InitializedKoa;

        /** A function which binds a serve event-name to a function */
        on<K extends keyof EventMap>(type: K, callback: (args: EventMap[K]) => void): void;

        /** Access to a frozen copy of the internal options object used by the module. */
        options: InitializedOptions;
    }

    interface Options {
        /** Addon to webpack-serve that allows access to the Koa server instance */
        add?: (app: InitializedKoa, middleware: Middleware, options: Options) => void;

        /** Custom instance of a webpack compiler */
        compiler?: webpack.Compiler;

        /** Webpack configuration for creating a new webpack compiler instance */
        config?: webpack.Configuration;

        /** A path or array of paths where content will be served from */
        content?: string | string[];

        /** Copy the server URL to the clipboard when the server is started */
        clipboard?: boolean;

        /** Options for webpack-dev-middleware */
        devMiddleware?: webpackDevMiddleware.Options;

        /** The host the server will listen on */
        host?: string;

        /** Options for webpack-hot-client */
        hotClient?: webpackHotClient.Options | boolean;

        /** Enable HTTP2 support */
        http2?: boolean;

        /** Configuration object for the server to use HTTPS */
        https?: https.ServerOptions;

        /** Level of information for webpack-serve to output */
        logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent';

        /** Prepend timestamp to each log line */
        logTime?: boolean;

        /** Object of subscribers to webpack-serve bus events */
        on?: OnOptions;

        /** Open the browser when started */
        open?: OpenOptions | boolean;

        /** Port that the server listens on */
        port?: number;
    }

    interface OpenOptions {
        /** Name of the browser to open */
        app?: string;
        /** Path on the server to open */
        path?: string;
    }

    type OnOptions = { [K in keyof EventMap]?: (args: EventMap[K]) => void };

    interface InitializedKoa extends koa {
        server: net.Server;
        stop: () => void;
    }

    interface InitializedOptions extends Options {
        protocol: 'http' | 'https';
    }

    interface Middleware {
        /** Function to call to add koa-static */
        content: () => void;
        /** Function to call to add the webpack-dev-middleware */
        webpack: () => void;
    }

    interface EventMap {
        'build-started': { compiler: webpack.Compiler };
        'build-finished': { compiler: webpack.Compiler; stats: webpack.Stats };
        'compiler-error': { compiler: webpack.Compiler; stats: any };
        'compiler-warning': { compiler: webpack.Compiler; stats: any };
        listening: { server: net.Server; options: InitializedOptions };
    }
}

export = WebpackServe;
