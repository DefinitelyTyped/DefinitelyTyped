// Type definitions for koa-webpack 1.0
// Project: https://github.com/shellscape/koa-webpack#readme
// Definitions by: Luka Maljic <https://github.com/malj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require('koa');
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotMiddleware = require('webpack-hot-middleware');
import connect = require('connect');

declare function koaWebpack(
    options?: koaWebpack.Options
): Koa.Middleware & koaWebpack.CombinedWebpackMiddleware;

declare namespace koaWebpack {
    interface Options {
        compiler?: webpack.Compiler;
        config?: webpack.Configuration;
        dev?: webpackDevMiddleware.Options;
        hot?: webpackHotMiddleware.Options;
    }

    interface CombinedWebpackMiddleware {
        dev: connect.NextHandleFunction & webpackDevMiddleware.WebpackDevMiddleware;
        hot: connect.NextHandleFunction & webpackHotMiddleware.EventStream;
    }
}

export = koaWebpack;
