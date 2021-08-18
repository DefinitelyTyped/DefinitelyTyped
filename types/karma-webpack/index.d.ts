// Type definitions for karma-webpack 2.0
// Project: https://github.com/webpack-contrib/karma-webpack
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import 'karma';
import * as Webpack from 'webpack';
import { Reporter, Logger } from 'webpack-dev-middleware';

declare module 'karma' {
    type Logger = (message?: any, ...optionalParams: any[]) => void;

    // Note: karma-webpack will set publicPath for us, so it is optional here.
    // Unfortuantely, Typescript doesn't let you overload properties, so
    // the entire definition is duplicated here.
    interface KarmaWebpackMiddlewareOptions /** extends webpackDevMiddleware.Options */ {
        noInfo?: boolean | undefined;
        quiet?: boolean | undefined;
        lazy?: boolean | undefined;
        watchOptions?: Webpack.Options.WatchOptions | undefined;
        publicPath?: string | undefined;
        index?: string | undefined;
        headers?: {
            [name: string]: string;
        } | undefined;
        stats?: Webpack.Options.Stats | undefined;
        reporter?: Reporter | null | undefined;
        serverSideRender?: boolean | undefined;

        log?: Logger | undefined;
        warn?: Logger | undefined;
        error?: Logger | undefined;
        filename?: string | undefined;
    }

    interface ConfigOptions {
        webpack: Webpack.Configuration;
        webpackMiddleware: KarmaWebpackMiddlewareOptions;
    }
}
