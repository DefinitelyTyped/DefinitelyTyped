// Type definitions for webpack-dev-server 2.4.5
// Project: https://github.com/webpack/webpack-dev-server
// Definitions by: maestroh <https://github.com/maestroh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "webpack-dev-server" {
    import * as webpack from 'webpack';
    import * as core from 'express-serve-static-core';
    import * as serveStatic from 'serve-static';
    import * as http from 'http';

    namespace WebpackDevServer {
        export interface Configuration {
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

        export interface WebpackDevServer {
            new (
                webpack: webpack.compiler.Compiler,
                config: Configuration
            ):WebpackDevServer;

            listen(port: number,
                hostname: string,
                callback?: Function
            ): http.Server;

            listen(port: number,
                callback?: Function
            ): http.Server;
        }
    }
    var wds: WebpackDevServer.WebpackDevServer;

    export = wds;
}