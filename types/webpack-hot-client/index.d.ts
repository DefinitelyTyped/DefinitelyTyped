// Type definitions for webpack-hot-client 4.1
// Project: https://github.com/webpack-contrib/webpack-hot-client
// Definitions by: ZSkycat <https://github.com/ZSkycat>
//                 Brian Armstrong <https://github.com/barm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

import * as net from 'net';
import * as webpack from 'webpack';
import { Server } from 'ws';

export = WebpackHotClient;

declare function WebpackHotClient(
    compiler: webpack.Compiler | webpack.MultiCompiler,
    options: WebpackHotClient.Options,
): WebpackHotClient.Client;

declare namespace WebpackHotClient {
    interface WebSocketServer extends Server {
        /** Forwards a message to each open client on the WebSocketServer */
        broadcast(data: any): void;
        /** Processes stats and sends messages through broadcast() */
        send(stats: webpack.Stats): void;
    }

    interface Client {
        /** Function that closes the WebSocketServer opened by the module. */
        close(callback?: () => void): void;
        /** WebSocketServer instance with some hot-client specific method overrides */
        server: WebSocketServer;
        /** Readonly version of the options after applying defaults */
        options: Readonly<Options>;
    }

    interface WebpackHotHost {
        /** Client hostname that is used in the browser by WebSockets */
        client: string;
        /** Server hostname */
        server: string;
    }

    interface Options {
        /** Automatically configure every entry */
        allEntries?: boolean | undefined;
        /** Auto configure the given webpack config with the hot configuration */
        autoConfigure?: boolean | undefined;
        /** Host that the WebSocket listens on */
        host?: WebpackHotHost | string | undefined;
        /** Enable hot module reloading */
        hmr?: boolean | undefined;
        /** Enable HTTPS */
        https?: boolean | undefined;
        /** Level of information for webpack-hot-client to output */
        logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent' | undefined;
        /** Prepend timestamp to each log line */
        logTime?: boolean | undefined;
        /** Port that the WebSocket listens on */
        port?: number | undefined;
        /** Reload the page if a patch cannot be applied by webpack */
        reload?: boolean | undefined;
        /** Server instance for webpack-hot-client to connect to */
        server?: net.Server | undefined;
        /** Webpack stats configuration */
        stats?: webpack.Options.Stats | undefined;
        /** Webpack compile target */
        validTargets?: string[] | undefined;
    }
}
