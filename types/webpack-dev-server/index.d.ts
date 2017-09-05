// Type definitions for webpack-dev-server 2.4
// Project: https://github.com/webpack/webpack-dev-server
// Definitions by: maestroh <https://github.com/maestroh>
//                 Dave Parslow <https://github.com/daveparslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as webpack from 'webpack';
import * as core from 'express-serve-static-core';
import * as serveStatic from 'serve-static';
import * as http from 'http';

declare namespace WebpackDevServer {
    interface Configuration {
        contentBase?: string;
        hot?: boolean;
        https?: boolean;
        historyApiFallback?: boolean;
        compress?: boolean;
        proxy?: any;
        staticOptions?: any;
        quiet?: boolean;
        noInfo?: boolean;
        lazy?: boolean;
        filename?: string| RegExp;
        watchOptions?: webpack.WatchOptions;
        publicPath: string;
        headers?: any;
        stats?: webpack.compiler.StatsOptions| webpack.compiler.StatsToStringOptions;
        public?: string;
        disableHostCheck?: boolean;

        setup?(app: core.Express): void;
    }
}

declare class WebpackDevServer {
    constructor(
        webpack: webpack.compiler.Compiler,
        config: WebpackDevServer.Configuration
    );

    listen(
        port: number,
        hostname: string,
        callback?: (...args: any[]) => any
    ): http.Server;

    listen(
        port: number,
        callback?: (...args: any[]) => any
    ): http.Server;
}

export = WebpackDevServer;
