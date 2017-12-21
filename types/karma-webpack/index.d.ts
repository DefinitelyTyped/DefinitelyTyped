// Type definitions for karma-webpack 2.0
// Project: http://github.com/webpack/karma-webpack
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as m from 'karma';
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');

declare module 'karma' {
    // Note: karma-webpack will set publicPath for us, so it is optional here.
    // Unfortuantely, Typescript doesn't let you overload properties, so
    // the entire definition is duplicated here.
    interface KarmaWebpackMiddlewareOptions /** extends webpackDevMiddleware.Options */ {
        noInfo?: boolean;
        quiet?: boolean;
        lazy?: boolean;
        watchOptions?: webpack.Options.WatchOptions;
        publicPath?: string;
        index?: string;
        headers?: {
            [name: string]: string;
        };
        stats?: webpack.Options.Stats;
        reporter?: webpackDevMiddleware.Reporter | null;
        serverSideRender?: boolean;

        log?: webpackDevMiddleware.Logger;
        warn?: webpackDevMiddleware.Logger;
        error?: webpackDevMiddleware.Logger;
        filename?: string;
    }

    interface ConfigOptions {
        webpack: webpack.Configuration;
        webpackMiddlewareOptions: KarmaWebpackMiddlewareOptions;
    }
}
