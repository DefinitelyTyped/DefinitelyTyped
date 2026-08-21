import Koa = require("koa");
import webpack = require("webpack");
import webpackDevMiddleware = require("webpack-dev-middleware");
import webpackHotClient = require("webpack-hot-client");

declare module "koa" {
    interface DefaultState {
        fs: webpackDevMiddleware.Options["fs"];
        stats: webpack.Stats;
    }
}

declare function koaWebpack(
    options?: koaWebpack.Options,
): Promise<Koa.Middleware & koaWebpack.CombinedWebpackMiddleware>;

declare namespace koaWebpack {
    interface Options {
        compiler?: webpack.Compiler | webpack.MultiCompiler | undefined;
        config?: webpack.Configuration | undefined;
        devMiddleware?: webpackDevMiddleware.Options | undefined;
        hotClient?: webpackHotClient.Options | boolean | undefined;
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
