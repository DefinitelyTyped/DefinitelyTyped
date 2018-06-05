// Type definitions for koa-webpack 5.x
// Project: https://github.com/shellscape/koa-webpack#readme
// Definitions by: Luka Maljic <https://github.com/malj>
//                 Lee Benson <https://github.com/leebenson>
//                 miZyind <https://github.com/miZyind>
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
        hotClient: {
            close: () => void;
            options: webpackHotClient.Options;
            server: any;
        };
    }
}

export = koaWebpack;
