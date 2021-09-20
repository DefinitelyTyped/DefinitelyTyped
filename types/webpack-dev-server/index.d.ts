// Type definitions for webpack-dev-server 4.1
// Project: https://github.com/webpack/webpack-dev-server
// Definitions by: maestroh <https://github.com/maestroh>
//                 Dave Parslow <https://github.com/daveparslow>
//                 Zheyang Song <https://github.com/ZheyangSong>
//                 Alan Agius <https://github.com/alan-agius4>
//                 Artur Androsovych <https://github.com/arturovt>
//                 Dave Cardwell <https://github.com/davecardwell>
//                 Katsuya Hino <https://github.com/dobogo>
//                 Billy Le <https://github.com/billy-le>
//                 Chris Paterson <https://github.com/chrispaterson>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 William Artero <https://github.com/wwmoraes>
//                 Alexey Pyltsyn <https://github.com/lex111>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import * as webpack from 'webpack';
import * as httpProxyMiddleware from 'http-proxy-middleware';
import * as express from 'express';
import * as serveStatic from 'serve-static';
import * as https from 'https';
import * as http from 'http';
import * as connectHistoryApiFallback from 'connect-history-api-fallback';
import * as bonjour from 'bonjour';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as serveIndex from 'serve-index';
import * as chokidar from 'chokidar';

declare namespace WebpackDevServer {
    interface Client {
        /**
         * Allows to set log level in the browser, e.g. before reloading,
         * before an error or when Hot Module Replacement is enabled.
         */
        logging?: 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose' | undefined;
        /**
         * Shows a full-screen overlay in the browser when there are compiler
         * errors or warnings. Disabled by default.
         */
        overlay?:
            | boolean
            | {
                  warnings?: boolean | undefined;
                  errors?: boolean | undefined;
              }
            | undefined;
        /**
         *  Prints compilation progress in percentage in the browser.
         */
        progress?: boolean | undefined;
        /**
         * This option allows us either to choose the current web-socket server
         * or to provide custom web-socket server implementation.
         */
        webSocketTransport?: 'ws' | 'sockjs' | string | undefined;
        /**
         * This option allows to specify URL to web socket server (useful when
         * you're proxying dev server and client script does not always know
         * where to connect to).
         */
        webSocketURL?: string | WebSocketURL | undefined;
    }

    interface Open {
        /**
         * Open specified browser.
         */
        app?: string | string[] | OpenApp | undefined;
        /**
         * Opens specified page in browser.
         */
        target?: string | string[] | undefined;
    }

    interface OpenApp {
        arguments?: string[] | undefined;
        name?: string | undefined;
    }

    interface ProxyConfigMap {
        [url: string]: string | httpProxyMiddleware.Options;
    }

    type ProxyConfigArrayItem = {
        path?: string | string[] | undefined;
        context?: string | string[] | httpProxyMiddleware.Filter | undefined;
    } & httpProxyMiddleware.Options;

    type ProxyConfigArray = ProxyConfigArrayItem[];

    interface Static {
        /**
         * Tell the server where to serve content from. This is only necessary
         * if you want to serve static files. devServer.publicPath will be used
         * to determine where the bundles should be served from, and takes
         * precedence.
         */
        directory?: string | undefined;
        /**
         * Tell the server at which URL to serve static.directory content. For example to
         * serve a file assets/manifest.json at /serve-public-path-url/manifest.json, your
         * configurations should be as following:
         */
        publicPath?: string | string[] | undefined;
        /**
         * Tell dev-server to use serveIndex middleware when enabled.
         *
         * serveIndex middleware generates directory listings on viewing
         * directories that don't have an index.html file.
         */
        serveIndex?: boolean | serveIndex.Options | undefined;
        /**
         * It is possible to configure advanced options for serving static files
         * from static.directory. See the Express documentation for the possible
         * options.
         */
        staticOptions?: serveStatic.ServeStaticOptions | undefined;
        /**
         * Tell dev-server to watch the files served by the static.directory
         * option. It is disabled by default. When enabled, file changes will
         * trigger a full page reload.
         */
        watch?: boolean | chokidar.WatchOptions | undefined;
    }

    interface WatchFiles {
        options?: chokidar.WatchOptions | undefined;
        paths?: string[] | string | undefined;
    }

    interface WebSocketURL {
        /**
         * Tells clients connected to devServer to use the provided hostname.
         */
        hostname?: string | undefined;
        /**
         * Tells clients connected to devServer to use the provided password to authenticate.
         */
        password?: string | undefined;
        /**
         * Tells clients connected to devServer to use the provided path to connect.
         */
        pathname?: string | undefined;
        /**
         * Tells clients connected to devServer to use the provided port.
         */
        port?: number | string | undefined;
        /**
         * Tells clients connected to devServer to use the provided protocol.
         */
        protocol?: string | undefined;
        /**
         * Tells clients connected to devServer to use the provided username to authenticate.
         */
        username?: string | undefined;
    }

    interface Configuration {
        /**
         * This option allows you to whitelist services that are allowed to
         * access the dev server.
         */
        allowedHosts?: 'all' | string | string[] | undefined;
        /**
         * This option broadcasts the server via ZeroConf networking on start.
         */
        bonjour?: boolean | bonjour.BonjourOptions | undefined;
        client?: Client | undefined;
        /**
         * Enable gzip compression for everything served.
         */
        compress?: boolean | undefined;
        devMiddleware?: webpackDevMiddleware.Options;
        /** Adds headers to all responses. */
        headers?: (() => void) | Record<string, string> | undefined;
        /**
         * When using the HTML5 History API, the index.html page will likely
         * have to be served in place of any 404 responses.
         */
        historyApiFallback?: boolean | connectHistoryApiFallback.Options | undefined;
        /**
         * Specify a host to use. By default this is localhost.
         */
        host?: 'local-ip' | 'local-ipv4' | 'local-ipv6' | string | undefined;
        /**
         * Enable webpack's Hot Module Replacement feature.
         */
        hot?: 'only' | boolean | undefined;
        /**
         * Serve over HTTP/2 using spdy. This option is ignored for Node 10.0.0
         * and above, as spdy is broken for those versions. The dev server will
         * migrate over to Node's built-in HTTP/2 once Express supports it.
         */
        http2?: boolean | undefined;
        /**
         * By default dev-server will be served over HTTP. It can optionally be
         * served over HTTP/2 with HTTPS.
         */
        https?: boolean | https.ServerOptions | undefined;
        /* The Unix socket to listen to (instead of a host). */
        ipc?: boolean | string | undefined;
        /**
         * Enables/Disables magic HTML routes (enabled by default).
         * @default true
         */
        magicHtml?: boolean | undefined;
        /**
         * By default, the dev-server will reload/refresh the page when file
         * changes are detected. devServer.hot option must be disabled or
         * devServer.watchContentBase option must be enabled in order for
         * liveReload to take effect. Disable devServer.liveReload by setting it
         * to false
         */
        liveReload?: boolean | undefined;
        /**
         * Provides the ability to execute custom middleware after all other
         * middleware internally within the server.
         */
        onAfterSetupMiddleware?: ((devServer: WebpackDevServer) => void) | undefined;
        /**
         * Provides the ability to execute custom middleware prior to all other
         * middleware internally within the server.
         */
        onBeforeSetupMiddleware?: ((devServer: WebpackDevServer) => void) | undefined;
        /**
         * Provides an option to execute a custom function when
         * webpack-dev-server starts listening for connections on a port.
         */
        onListening?: ((devServer: WebpackDevServer) => void) | undefined;
        /** When open is enabled, the dev server will open the browser. */
        open?: boolean | string | string[] | Open | Open[] | undefined;
        /** Specify a port number to listen for requests on. */
        port?: 'auto' | string | number | undefined;
        /**
         * Proxying some URLs can be useful when you have a separate API
         * backend development server and you want to send API requests on the
         * same domain.
         *
         * The dev-server makes use of the powerful http-proxy-middleware
         * package. Check out its
         * [documentation](https://github.com/chimurai/http-proxy-middleware#options)
         * for more advanced usages. Note that some of http-proxy-middleware's
         * features do not require a target key, e.g. its router feature, but
         * you will still need to include a target key in your config here,
         * otherwise webpack-dev-server won't pass it along to
         * http-proxy-middleware).
         */
        proxy?: ProxyConfigMap | ProxyConfigArray | undefined;
        /**
         * Allows to close dev server and exit the process on SIGINT and SIGTERM
         * signals.
         */
        setupExitSignals?: boolean | undefined;
        /**
         * This options allows to configure options for serving static files
         * from directory (by default 'public' directory).
         */
        static?: boolean | string | Static | Array<string | Static> | undefined;
        /**
         * This option allows you to configure list of globs/directories/files
         * to watch for file changes.
         */
        watchFiles?: string | string[] | WatchFiles | Array<WatchFiles | string> | undefined;
        /**
         * This option allows us either to choose the current web-socket server
         * or to provide custom web-socket server implementation.
         */
        webSocketServer?: boolean | 'sockjs' | 'ws' | string | (() => void) | Record<string, any>;
    }
}

declare module 'webpack' {
    interface Configuration {
        /**
         * Can be used to configure the behaviour of webpack-dev-server when
         * the webpack config is passed to webpack-dev-server CLI.
         */
        devServer?: WebpackDevServer.Configuration | undefined;
    }
}

declare class WebpackDevServer {
    app: express.Application;
    server: http.Server;
    sockets: NodeJS.EventEmitter[];

    constructor(config: WebpackDevServer.Configuration, webpack?: webpack.Compiler | webpack.MultiCompiler);

    /**
     * @deprecated - use `options` as the first argument and `compiler` as the second argument.
     */
    constructor(webpack: webpack.Compiler | webpack.MultiCompiler, config?: WebpackDevServer.Configuration);

    /**
     * @deprecated - use `startCallback` or `start` instead
     */
    listen(port: number, hostname: string, callback?: (error?: Error) => void): http.Server;

    /**
     * @deprecated - use `startCallback` or `start` instead
     */
    listen(port: number, callback?: (error?: Error) => void): http.Server;

    /**
     *  @deprecated - use `stopCallback` or `stop` instead
     */
    close(callback?: () => void): void;

    /** @async */
    start(): Promise<void>;

    startCallback(callback: () => void): void;

    /** @async */
    stop(): Promise<void>;

    stopCallback(callback: () => void): void;

    sendMessage(sockets: NodeJS.EventEmitter[], type: string, data?: any): void;
}

export = WebpackDevServer;
