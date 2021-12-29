// Type definitions for webpack-serve 1.0
// Project: https://github.com/webpack-contrib/webpack-serve
// Definitions by: Jokcy <https://github.com/Jokcy>
//                 ZSkycat <https://github.com/ZSkycat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

import * as koa from 'koa';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotClient from 'webpack-hot-client';
import * as https from 'https';

export = WebpackServe;

declare module 'webpack' {
  interface Configuration {
    serve?: WebpackServe.Options | undefined;
  }
}

declare function WebpackServe(options: WebpackServe.Options): Promise<WebpackServe.Instance>;

declare namespace WebpackServe {
  interface WebpackServeOpen {
    /** Name of the browser to open */
    app?: string | undefined;
    /** Path on the server to open */
    path?: string | undefined;
  }

  interface WebpackServeMiddleware {
    /** Function to call to add koa-static */
    content: () => koa.Middleware;
    /** Function to call to add the webpack-dev-middleware */
    webpack: () => webpackDevMiddleware.WebpackDevMiddleware;
  }

  interface Instance {
    /** Subscriber function for events */
    on(event: 'build-started', listener: (args: { compiler: webpack.Compiler }) => void): this;
    on(event: 'build-finished', listener: (args: { compiler: webpack.Compiler, stats: webpack.Stats }) => void): this;
    on(event: 'compiler-error' | 'compiler-warning', listener: (args: { compiler: webpack.Compiler, stats: any }) => void): this;
    on(event: 'listening', listener: (args: { server: koa, options: NormalisedOptions }) => void): this;

    /** Close webpack-serve */
    close: () => void;
  }

  interface ListenersObject {
    'build-started': (args: { compiler: webpack.Compiler }) => void;
    'build-finished': (args: { compiler: webpack.Compiler, stats: webpack.Stats }) => void;
    'compiler-error': (args: { compiler: webpack.Compiler, stats: any }) => void;
    'compiler-warning': (args: { compiler: webpack.Compiler, stats: any }) => void;
    'listening': (args: { server: koa, options: NormalisedOptions }) => void;
  }

  interface Options {
    /** Addon to webpack-serve that allows access to the Koa server instance */
    add?: ((app: koa, middleware: WebpackServeMiddleware, options: Options) => void) | undefined;
    /** Copy the server URL to the clipboard when the server is started */
    clipboard?: boolean | undefined;
    /** Custom instance of a webpack compiler */
    compiler?: webpack.Compiler | undefined;
    /** Webpack configuration for creating a new webpack compiler instance */
    config?: webpack.Configuration | undefined;
    /** A path or array of paths where content will be served from */
    content?: string | string[] | undefined;
    /** Options for webpack-dev-middleware */
    dev?: webpackDevMiddleware.Options | undefined;
    /** The host the server will listen on */
    host?: string | undefined;
    /** Options for webpack-hot-client */
    hot?: webpackHotClient.Options | boolean | undefined;
    /** Enable HTTP2 support */
    http2?: boolean | undefined;
    /** Configuration object for the server to use HTTPS */
    https?: https.ServerOptions | undefined;
    /** Level of information for webpack-serve to output */
    logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent' | undefined;
    /** Prepend timestamp to each log line */
    logTime?: boolean | undefined;
    /** Object of subscribers to webpack-serve bus events */
    on?: ListenersObject | undefined;
    /** Open the browser when started */
    open?: WebpackServeOpen | boolean | undefined;
    /** Port that the server listens on */
    port?: number | undefined;
  }

  interface NormalisedOptions extends Options {
    protocol: 'http' | 'https';
  }
}
