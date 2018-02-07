// Type definitions for webpack-dev-server 2.9
// Project: https://github.com/webpack/webpack-dev-server
// Definitions by: maestroh <https://github.com/maestroh>
//                 Dave Parslow <https://github.com/daveparslow>
//                 Zheyang Song <https://github.com/ZheyangSong>
//                 Alan Agius <https://github.com/alan-agius4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as webpack from 'webpack';
import * as core from 'express-serve-static-core';
import * as serveStatic from 'serve-static';
import * as http from 'http';
import * as spdy from 'spdy';
import * as httpProxyMiddleware from 'http-proxy-middleware';

declare namespace WebpackDevServer {
    type ListeningApp = { address(): { port?: number } };

    function addDevServerEntrypoints(webpack: webpack.Compiler | webpack.MultiCompiler, config: WebpackDevServer.Configuration, listeningApp?: ListeningApp): void

    interface proxyConfigMap {
        [url: string]: string | httpProxyMiddleware.Config;
    }

    type proxyConfigArrayItem = {
        path?: string | string[];
        context?: string | string[]
    } & httpProxyMiddleware.Config;

    type proxyConfigArray = proxyConfigArrayItem[];

    type expressAppHook = (app: core.Express) => void;

    interface Configuration {
        after?: expressAppHook;
        allowedHosts?: string[];
        before?: expressAppHook;
        bonjour?: boolean;
        clientLogLevel?: string;
        compress?: boolean;
        contentBase?: string;
        disableHostCheck?: boolean;
        filename?: string;
        headers?: {};
        historyApiFallback?: boolean | {};
        host?: string;
        hot?: boolean;
        hotOnly?: boolean;
        https?: boolean | spdy.ServerOptions;
        inline?: boolean;
        lazy?: boolean;
        noInfo?: boolean;
        open?: boolean;
        openPage?: string;
        overlay?: boolean | {
            warnings: boolean;
            errors: boolean;
        };
        pfx?: string;
        pfxPassphrase?: string;
        port?: number;
        proxy?: proxyConfigMap | proxyConfigArray;
        public?: string;
        publicPath?: string;
        quiet?: boolean;
        setup?: expressAppHook; // will be depreacted in v3.0.0 and replaced by before
        socket?: string;
        staticOptions?: serveStatic.ServeStaticOptions;
        stats?: webpack.compiler.StatsOptions | webpack.compiler.StatsToStringOptions;
        useLocalIp?: boolean;
        watchContentBase?: boolean;
        watchOptions?: webpack.WatchOptions;
    }
}

declare class WebpackDevServer {
    constructor(
        webpack: webpack.Compiler | webpack.MultiCompiler,
        config: WebpackDevServer.Configuration
    );

    listen(port: number, hostname: string, callback?: (error?: Error) => void): http.Server;

    listen(port: number, callback?: (error?: Error) => void): http.Server;

    close(callback?: () => void): void;
}

export = WebpackDevServer;
