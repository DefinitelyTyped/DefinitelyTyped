// Type definitions for koa-webpack 1.0
// Project: https://github.com/shellscape/koa-webpack#readme
// Definitions by: Luka Maljic <https://github.com/malj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import { NextHandleFunction } from 'connect';

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
        dev: NextHandleFunction & webpackDevMiddleware.WebpackDevMiddleware;
        hot: NextHandleFunction & webpackHotMiddleware.EventStream;
    }
}

export = koaWebpack;
