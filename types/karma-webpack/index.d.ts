// Type definitions for karma-webpack 2.0
// Project: https://github.com/webpack-contrib/karma-webpack
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';
import * as Webpack from 'webpack';
import { Reporter, Logger } from 'webpack-dev-middleware';

declare module 'karma' {
    type Logger = (message?: any, ...optionalParams: any[]) => void;

    // Note: karma-webpack will set publicPath for us, so it is optional here.
    // Unfortuantely, Typescript doesn't let you overload properties, so
    // the entire definition is duplicated here.
    interface KarmaWebpackMiddlewareOptions /** extends webpackDevMiddleware.Options */ {
        noInfo?: boolean;
        quiet?: boolean;
        lazy?: boolean;
        watchOptions?: Webpack.Options.WatchOptions;
        publicPath?: string;
        index?: string;
        headers?: {
            [name: string]: string;
        };
        stats?: Webpack.Options.Stats;
        reporter?: Reporter | null;
        serverSideRender?: boolean;

        log?: Logger;
        warn?: Logger;
        error?: Logger;
        filename?: string;
    }

    interface ConfigOptions {
        webpack: Webpack.Configuration;
        webpackMiddleware: KarmaWebpackMiddlewareOptions;
    }
}
