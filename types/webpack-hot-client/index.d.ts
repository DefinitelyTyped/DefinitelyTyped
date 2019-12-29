// Type definitions for webpack-hot-client 4.0
// Project: https://github.com/webpack-contrib/webpack-hot-client
// Definitions by: Ryan Clark <https://github.com/rynclark>
//                 ZSkycat <https://github.com/ZSkycat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as webpack from 'webpack';
import * as net from 'net';

export = WebpackHotClient;

declare function WebpackHotClient(
  compiler: webpack.Compiler | webpack.MultiCompiler,
  options: WebpackHotClient.Options
): void;

declare namespace WebpackHotClient {
  interface WebpackHotHost {
    /** Client hostname that is used in the browser by WebSockets */
    client: string;
    /** Server hostname */
    server: string;
  }

  interface Options {
    /** Automatically configure every entry */
    allEntries?: boolean;
    /** Auto configure the given webpack config with the hot configuration */
    autoConfigure?: boolean;
    /** Level of information for webpack-hot-client to output */
    host?: WebpackHotHost | string;
    /** Enable hot module reloading */
    hmr?: boolean;
    /** Enable HTTPS */
    https?: boolean;
    /** Level of information for webpack-hot-client to output */
    logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent';
    /** Prepend timestamp to each log line */
    logTime?: boolean;
    /** Port that the WebSocket listens on */
    port?: number;
    /** Reload the page if a patch cannot be applied by webpack */
    reload?: boolean;
    /** Server instance for webpack-hot-client to connect to */
    server?: net.Server;
    /** Webpack stats configuration */
    stats?: webpack.Options.Stats;
    /** Webpack compile target */
    validTargets?: string[];
  }
}
