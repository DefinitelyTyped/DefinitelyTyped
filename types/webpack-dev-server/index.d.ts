// Type definitions for webpack-dev-server 3.1
// Project: https://github.com/webpack/webpack-dev-server
// Definitions by: maestroh <https://github.com/maestroh>
//                 Dave Parslow <https://github.com/daveparslow>
//                 Zheyang Song <https://github.com/ZheyangSong>
//                 Alan Agius <https://github.com/alan-agius4>
//                 Artur Androsovych <https://github.com/arturovt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';
import * as httpProxyMiddleware from 'http-proxy-middleware';
import * as express from 'express';
import * as serveStatic from 'serve-static';
import * as https from 'https';
import * as http from 'http';
import { Url } from "url";

declare namespace WebpackDevServer {
    interface ListeningApp {
        address(): { port?: number };
    }

    interface ProxyConfigMap {
        [url: string]: string | httpProxyMiddleware.Config;
    }

    type ProxyConfigArrayItem = {
        path?: string | string[];
        context?: string | string[]
    } & httpProxyMiddleware.Config;

    type ProxyConfigArray = ProxyConfigArrayItem[];

    interface Context {
        match: RegExpMatchArray;
        parsedUrl: Url;
    }

    type RewriteTo = (context: Context) => string;

    interface Rewrite {
        from: RegExp;
        to: string | RegExp | RewriteTo;
    }

    interface HistoryApiFallbackConfig {
        disableDotRule?: boolean;
        rewrites?: Rewrite[];
    }

    interface Configuration {
        /** Provides the ability to execute custom middleware after all other middleware internally within the server. */
        after?: (app: express.Application) => void;
        /** This option allows you to whitelist services that are allowed to access the dev server. */
        allowedHosts?: string[];
        /** Provides the ability to execute custom middleware prior to all other middleware internally within the server. */
        before?: (app: express.Application) => void;
        /** This option broadcasts the server via ZeroConf networking on start. */
        bonjour?: boolean;
        /**
         * When using inline mode, the console in your DevTools will show you messages e.g. before reloading,
         * before an error or when Hot Module Replacement is enabled. This may be too verbose.
         */
        clientLogLevel?: 'none' | 'error' | 'warning' | 'info';
        /** Enable gzip compression for everything served. */
        compress?: boolean;
        /**
         * Tell the server where to serve content from. This is only necessary if you want to serve static files.
         * devServer.publicPath will be used to determine where the bundles should be served from, and takes precedence.
         */
        contentBase?: boolean | string | string[];
        /**
         * When set to true this option bypasses host checking.
         * THIS IS NOT RECOMMENDED as apps that do not check the host are vulnerable to DNS rebinding attacks.
         */
        disableHostCheck?: boolean;
        /**
         * This option lets you reduce the compilations in lazy mode.
         * By default in lazy mode, every request results in a new compilation.
         * With filename, it's possible to only compile when a certain file is requested.
         */
        filename?: string;
        /** Adds headers to all responses. */
        headers?: {
            [key: string]: string;
        };
        /** When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. */
        historyApiFallback?: boolean | HistoryApiFallbackConfig;
        /** Specify a host to use. By default this is localhost. */
        host?: string;
        /** Enable webpack's Hot Module Replacement feature. */
        hot?: boolean;
        /** Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures. */
        hotOnly?: boolean;
        /** By default dev-server will be served over HTTP. It can optionally be served over HTTP/2 with HTTPS. */
        https?: boolean | https.ServerOptions;
        /** The filename that is considered the index file. */
        index?: string;
        /**
         * Toggle between the dev-server's two different modes.
         * By default the application will be served with inline mode enabled.
         * This means that a script will be inserted in your bundle to take care of live reloading,
         * and build messages will appear in the browser console.
         */
        inline?: boolean;
        /**
         * When lazy is enabled, the dev-server will only compile the bundle when it gets requested.
         * This means that webpack will not watch any file changes.
         */
        lazy?: boolean;
        /**
         * With noInfo enabled, messages like the webpack bundle information that is shown
         * when starting up and after each save,will be hidden.
         * Errors and warnings will still be shown.
         */
        noInfo?: boolean;
        /** When open is enabled, the dev server will open the browser. */
        open?: boolean;
        /** Specify a page to navigate to when opening the browser. */
        openPage?: string;
        /** Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. */
        overlay?: boolean | {
            warnings?: boolean;
            errors?: boolean;
        };
        /** When used via the CLI, a path to an SSL .pfx file. If used in options, it should be the bytestream of the .pfx file. */
        pfx?: string;
        /** The passphrase to a SSL PFX file. */
        pfxPassphrase?: string;
        /** Specify a port number to listen for requests on. */
        port?: number;
        /**
         * Proxying some URLs can be useful when you have a separate API backend development server
         * and you want to send API requests on the same domain.
         */
        proxy?: ProxyConfigMap | ProxyConfigArray;
        /**
         * When using inline mode and you're proxying dev-server,
         * the inline client script does not always know where to connect to.
         * It will try to guess the URL of the server based on window.location, but if that fails you'll need to use this.
         */
        public?: string;
        /** The bundled files will be available in the browser under this path. */
        publicPath?: string;
        /**
         * With quiet enabled, nothing except the initial startup information will be written to the console.
         * This also means that errors or warnings from webpack are not visible.
         */
        quiet?: boolean;
        /** @deprecated Here you can access the Express app object and add your own custom middleware to it. */
        setup?: (app: express.Application) => void;
        /** The Unix socket to listen to (instead of a host). */
        socket?: string;
        /** It is possible to configure advanced options for serving static files from contentBase. */
        staticOptions?: serveStatic.ServeStaticOptions;
        /**
         * This option lets you precisely control what bundle information gets displayed.
         * This can be a nice middle ground if you want some bundle information, but not all of it.
         */
        stats?: webpack.Options.Stats;
        /** This option lets the browser open with your local IP. */
        useLocalIp?: boolean;
        /** Tell the server to watch the files served by the devServer.contentBase option. File changes will trigger a full page reload. */
        watchContentBase?: boolean;
        /** Control options related to watching the files. */
        watchOptions?: webpack.WatchOptions;
    }
}

declare module 'webpack' {
    interface Configuration {
        /** Can be used to configure the behaviour of webpack-dev-server when the webpack config is passed to webpack-dev-server CLI. */
        devServer?: WebpackDevServer.Configuration;
    }
}

declare class WebpackDevServer {
    constructor(
        webpack: webpack.Compiler | webpack.MultiCompiler,
        config: WebpackDevServer.Configuration
    );

    static addDevServerEntrypoints(
        webpackOptions: webpack.Configuration | webpack.Configuration[],
        config: WebpackDevServer.Configuration,
        listeningApp?: WebpackDevServer.ListeningApp
    ): void;

    listen(port: number, hostname: string, callback?: (error?: Error) => void): http.Server;

    listen(port: number, callback?: (error?: Error) => void): http.Server;

    close(callback?: () => void): void;
}

export = WebpackDevServer;
