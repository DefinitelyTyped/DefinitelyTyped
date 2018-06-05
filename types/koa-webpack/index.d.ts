// Type definitions for koa-webpack 5.0
// Project: https://github.com/shellscape/koa-webpack
// Definitions by: Luka Maljic <https://github.com/malj>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require('koa');
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotMiddleware = require('webpack-hot-middleware');
import connect = require('connect');

declare function koaWebpack(
    options?: koaWebpack.Options
): Promise<Koa.Middleware & koaWebpack.CombinedWebpackMiddleware>;

declare namespace koaWebpack {
    interface Options {
        compiler?: webpack.Compiler;
        config?: webpack.Configuration;
        devMiddleware?: webpackDevMiddleware.Options;
        hotClient?: webpackHotMiddleware.Options | boolean;
    }

    interface CombinedWebpackMiddleware {
        devMiddleware: connect.NextHandleFunction & webpackDevMiddleware.WebpackDevMiddleware;
        hotClient: connect.NextHandleFunction & webpackHotMiddleware.EventStream;
        close(callback?: () => any): void;
    }
}

export = koaWebpack;
