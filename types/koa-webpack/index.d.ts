// Type definitions for koa-webpack 5.0
// Project: https://github.com/shellscape/koa-webpack
// Definitions by: Luka Maljic <https://github.com/malj>
//                 Lee Benson <https://github.com/leebenson>
//                 miZyind <https://github.com/miZyind>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require('koa');
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotClient = require('webpack-hot-client');

declare function koaWebpack(
    options?: koaWebpack.Options
): Promise<Koa.Middleware & koaWebpack.CombinedWebpackMiddleware>;

declare namespace koaWebpack {
    interface Options {
        compiler?: webpack.Compiler;
        config?: webpack.Configuration;
        devMiddleware?: webpackDevMiddleware.Options;
        hotClient?: webpackHotClient.Options | boolean;
    }

    interface CombinedWebpackMiddleware {
        devMiddleware: webpackDevMiddleware.WebpackDevMiddleware;
        /**
         * @todo make this a `webpack-hot-client@^4.0.0` instance, no typings for v4 available yet
         */
        hotClient: {
            close: () => void;
            options: webpackHotClient.Options;
            server: any;
        };
        close(callback?: () => any): void;
    }
}

export = koaWebpack;
