// Type definitions for webpack-dev-server 4.0
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
//                 Kohei Seino <https://github.com/kseino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import * as webpack from 'webpack';
import * as httpProxyMiddleware from 'http-proxy-middleware';
import * as express from 'express';
import * as serveStatic from 'serve-static';
import * as https from 'https';
import * as http from 'http';
import * as connectHistoryApiFallback from 'connect-history-api-fallback';

declare namespace WebpackDevServer {
    interface ListeningApp {
        address(): { port?: number | undefined };
    }

    interface ProxyConfigMap {
        [url: string]: string | httpProxyMiddleware.Options;
    }

    type ProxyConfigArrayItem = {
        path?: string | string[] | undefined;
        context?: string | string[] | httpProxyMiddleware.Filter | undefined;
    } & httpProxyMiddleware.Options;

    type ProxyConfigArray = ProxyConfigArrayItem[];

    interface StaticConfig {
        /**
         * Tell the server where to serve the content from.
         * This is only necessary if you want to serve static files.
         * static.publicPath will be used to determine where the bundles
         * should be served from, and takes precedence.
         */
        directory?: string | undefined;
        /**
         * It is possible to configure advanced options for serving static files
         * from static.directory.
         */
        staticOptions?: serveStatic.ServeStaticOptions | undefined;
        /**
         * Tell the server at which URL to serve static.directory content.
         */
        publicPath?: string | string[] | undefined;
        /**
         * Tell dev-server to use serveIndex middleware when enabled.
         * serveIndex middleware generates directory listings on viewing directories
         * that don't have an index.html file.
         */
        serveIndex?:
            | boolean
            | {
                  icons: boolean;
              }
            | undefined;
        /**
         * Tell dev-server to watch the files served by the static.directory option.
         * It is disabled by default.
         * When enabled, file changes will trigger a full page reload.
         */
        watch?: boolean | object | undefined;
    }

    interface Configuration {
        /**
         * This option allows you to whitelist services that are allowed to
         * access the dev server.
         */
        allowedHosts?: 'auto' | 'all' | string[] | undefined;
        /**
         * This option broadcasts the server via ZeroConf networking on start.
         */
        bonjour?: boolean | object | undefined;
        client?: {
            /**
             * Allows to set log level in the browser, e.g. before reloading,
             * before an error or when Hot Module Replacement is enabled.
             */
            logging?: 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose' | undefined;
            /**
             * Shows a full-screen overlay in the browser
             * when there are compiler errors or warnings.
             */
            overlay?:
                | boolean
                | {
                      errors?: boolean;
                      warnings?: boolean;
                  }
                | undefined;
            /**
             * Prints compilation progress in percentage in the browser.
             */
            progress?: boolean | undefined;
            /**
             * This option allows us either to choose the current devServer
             * transport mode for client individually or to provide custom
             * client implementation. This allows to specify how browser or
             * other client communicates with the devServer.
             */
            webSocketTransport?: 'ws' | 'sockjs' | string | undefined;
            /**
             * This option allows to specify URL to web socket server
             * (useful when you're proxying dev server and client script
             * does not always know where to connect to).
             */
            webSocketURL?:
                | string
                | {
                      /**
                       * Tells clients connected to devServer to use the provided hostname.
                       */
                      hostname?: string | undefined;
                      /**
                       * Tells clients connected to devServer to use the provided path to connect.
                       */
                      pathname?: string | undefined;
                      /**
                       * Tells clients connected to devServer to use the provided password
                       * to authenticate.
                       */
                      password?: string | undefined;
                      /**
                       * Tells clients connected to devServer to use the provided port.
                       */
                      port?: string | number | undefined;
                      /**
                       * Tells clients connected to devServer to use the provided protocol.
                       */
                      protocol?: 'ws' | 'sockjs' | string | undefined;
                      /**
                       * Tells clients connected to devServer to use the provided username
                       * to authenticate.
                       */
                      username?: string | undefined;
                  }
                | undefined;
        };
        /**
         * Enable gzip compression for everything served.
         */
        compress?: boolean | undefined;
        /**
         * Provide options to webpack-dev-middleware which handles webpack assets.
         */
        devMiddleware?: {
            /**
             * The filename that is considered the index file.
             * If false, the server will not respond to requests to the root URL.
             * default is index.html
             */
            index?: boolean | string | undefined;
            /**
             * The object is passed to the underlying webpack-dev-middleware. See
             * [documentation](https://github.com/webpack/webpack-dev-middleware#mimetypes)
             * for usage notes.
             */
            mimeTypes?:
                | {
                      [key: string]: string[];
                  }
                | {
                      typeMap?:
                          | ({
                                [key: string]: string[];
                            } & {
                                force: boolean;
                            })
                          | undefined;
                  }
                | undefined;
            /**
             * The bundled files will be available in the browser under this path.
             * default is '/'
             */
            publicPath?: string;
            /**
             * Instructs the module to enable or disable the server-side rendering mode.
             */
            serverSideRender?: boolean | undefined;
            /**
             * This option lets you precisely control what bundle information gets
             * displayed.  This can be a nice middle ground if you want some bundle
             * information, but not all of it.
             */
            stats?: boolean | string | object | webpack.Configuration['stats'] | undefined;
            /**
             * Tells devServer to write generated assets to the disk.
             */
            writeToDisk?: boolean | ((filePath: string) => boolean) | undefined;
        };
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
        /** Adds headers to all responses. */
        headers?:
            | {
                  [key: string]: string;
              }
            | undefined;
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
         * Note that webpack.HotModuleReplacementPlugin is required to fully
         * enable HMR. If webpack or webpack-dev-server are launched with the
         * --hot option, this plugin will be added automatically, so you may
         * not need to add this to your webpack.config.js.
         */
        hot?: 'only' | boolean | undefined;
        /** The Unix socket to listen to (instead of a host). */
        ipc?: boolean | string | undefined;
        /**
         * By default, the dev-server will reload/refresh the page when file
         * changes are detected. devServer.hot option must be disabled or
         * devServer.watchContentBase option must be enabled in order for
         * liveReload to take effect. Disable devServer.liveReload by setting
         * it to false
         */
        liveReload?: boolean | undefined;
        /**
         * Provides the ability to execute custom middleware after all other
         * middleware internally within the server.
         */
        onAfterSetupMiddleware?:
            | ((app: express.Application, server: WebpackDevServer, compiler: webpack.Compiler) => void)
            | undefined;
        /**
         * Provides the ability to execute custom middleware prior to all
         * other middleware internally within the server.
         */
        onBeforeSetupMiddleware?:
            | ((app: express.Application, server: WebpackDevServer, compiler: webpack.Compiler) => void)
            | undefined;
        /**
         * Provides an option to execute a custom function when
         * webpack-dev-server starts listening for connections on a port.
         */
        onListening?: ((server: WebpackDevServer) => void) | undefined;
        /**
         * Allows to configure dev server to open the browser(s) and page(s)
         * after server had been started (set it to true to open your default browser
         */
        open?: boolean | string | string[] | object | object[] | undefined;
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
        /** Allows to close dev server and exit the process on SIGINT and SIGTERM signals. */
        setupExitSignals?: boolean | undefined;
        static?: boolean | string | string[] | StaticConfig | StaticConfig[] | undefined;
        /**
         * This option allows you to configure list of globs/directories/files
         * to watch for file changes.
         */
        watchFiles?: string | string[] | object | object[] | undefined;
        /**
         * This option allows us either to choose the current web-socket server or
         * to provide custom web-socket server implementation.
         * The current default mode is 'ws'. This mode uses ws as a server,
         * and native WebSockets on the client.
         */
        webSocketServer?: false | 'sockjs' | 'ws' | string | object | undefined;
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
    listeningApp: WebpackDevServer.ListeningApp;
    sockets: NodeJS.EventEmitter[];

    constructor(config: WebpackDevServer.Configuration, webpack: webpack.Compiler | webpack.MultiCompiler);

    // deprecated
    listen(port: number, hostname: string, callback?: (error?: Error) => void): http.Server;
    listen(port: number, callback?: (error?: Error) => void): http.Server;

    // deprecated
    close(callback?: () => void): void;

    start(): http.Server;
    startCallback(callback?: () => void): http.Server;

    stop(): void;
    stopCallback(callback?: () => void): void;

    sendMessage(sockets: NodeJS.EventEmitter[], type: string, data?: any): void;
}

export = WebpackDevServer;
