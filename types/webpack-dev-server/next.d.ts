/**
 * These are type definitions for the upcoming webpack-dev-server v4 release.
 *
 * webpack-dev-server v4 is currently in beta so the v4 definitions should
 * remain the default exported types as long as v3 remains the stable version.
 *
 * This file exists to give contributors to DefinitelyTyped the ability to
 * update the types for webpack-dev-server in advance of the v4 release.
 * Once v4 is promoted as stable release we can then move the v3 types
 * into an old version and apply the types from this file to the definitions
 * and publish them as v4.
 *
 * To load the types declared here in an actual project, there are three ways:
 * The easiest one, if your `tsconfig.json` already has a `"types"` array in
 * the `"compilerOptions"` section, is to add`"webpack-dev-server/next"` to the
 * `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript
 * file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'webpack-dev-server/next'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="webpack-dev-server/next" />
 * ```
 *
 * Either the import or the reference only needs to appear once,
 * anywhere in the project.
 */

import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as httpProxyMiddleware from 'http-proxy-middleware';
import * as serveStatic from 'serve-static';
import * as serveIndex from 'serve-index';
import * as https from 'https';
import * as http from 'http';
import * as connectHistoryApiFallback from 'connect-history-api-fallback';

declare namespace WebpackDevServer {
    interface ProxyConfigMap {
        [url: string]: string | httpProxyMiddleware.Config;
    }

    type ProxyConfigArrayItem = {
        path?: string | string[];
        context?: string | string[] | httpProxyMiddleware.Filter;
    } & httpProxyMiddleware.Config;

    type ProxyConfigArray = ProxyConfigArrayItem[];

    interface Client {
        /**
         * Tells clients connected to devServer to use provided socket host.
         */
        host?: string;
        /**
         * The path at which to connect to the reloading socket. Default is
         * '/sockjs-node'
         */
        path?: string;
        /**
         * Tells clients connected to devServer to use provided socket port.
         */
        port?: string | number | null;
        /**
         * When using inline mode, the console in your DevTools will show you
         * messages e.g. before reloading, before an error or when Hot Module
         * Replacement is enabled. This may be too verbose.
         */
        logging?: 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose';
        /**
         * Output running progress to console.
         */
        progress?: boolean;
        /**
         * Shows a full-screen overlay in the browser when there are compiler
         * errors or warnings. Disabled by default.
         */
        overlay?:
            | boolean
            | {
                  warnings?: boolean;
                  errors?: boolean;
              };
    }

    interface Static {
        /**
         * Tell the server where to serve content from.
         */
        directory?: string;
        /**
         * It is possible to configure advanced options for serving static
         * files from `directory`.
         */
        staticOptions?: serveStatic.ServeStaticOptions;
        /**
         * Tell the server at what URL to serve `directory`.
         * If there was a file `assets/manifest.json`,
         * it would be served at `/serve-directory-at-this-url/manifest.json`
         */
        publicPath?: string | string[];
        /**
         * Tells dev-server to use serveIndex middleware when enabled.
         *
         * serveIndex middleware generates directory listings on viewing
         * directories that don't have an index.html file.
         */
        serveIndex?: boolean | serveIndex.Options;
        /**
         * Tell the server to watch the files served by the
         * devServer.contentBase option. File changes will trigger a full page
         * reload.
         */
        watch?: boolean | webpack.Configuration['watchOptions'];
    }

    interface Configuration {
        /**
         * This option broadcasts the server via ZeroConf networking on start.
         */
        bonjour?: boolean;
        /**
         * This group of options allows you to configure how the client should
         * behave.
         */
        client?: Client;
        /**
         * Enable gzip compression for everything served.
         */
        compress?: boolean;
        /**
         * The dev-server makes use of the webpack-dev-middleware package.
         * Checkout its [documentation](https://github.com/webpack/webpack-dev-middleware#options)
         * for a list of possible options.
         */
        dev?: webpackDevMiddleware.Options;
        /**
         * This option allows you to whitelist services that are allowed to
         * access the dev server (`localhost`, the value of `host` option and
         * IPv4/IPv6 are allowed by default).
         *
         * Setting it to false will bypesses host checking. THIS IS NOT
         * RECOMMENDED as apps that do not check the host are vulnerable to DNS
         * rebinding attacks.
         */
        firewall?: boolean | string[];
        /**
         * Adds headers to all responses.
         */
        headers?: {
            [key: string]: string;
        };
        /**
         * When using the HTML5 History API, the index.html page will likely
         * have to be served in place of any 404 responses.
         */
        historyApiFallback?: boolean | connectHistoryApiFallback.Options;
        /**
         * Specify a host to use. By default this is localhost.
         */
        host?: string;
        /**
         * Enable webpack's Hot Module Replacement feature.
         * Note that webpack.HotModuleReplacementPlugin is required to fully
         * enable HMR. If webpack or webpack-dev-server are launched with the
         * --hot option, this plugin will be added automatically, so you may
         * not need to add this to your webpack.config.js.
         *
         * The `omly` string can be used to enables HMR without page refresh as
         * fallback in case of build failures.
         *
         * This is enabled by default.
         */
        hot?: 'only' | null;
        /**
         * Serve over HTTP/2 using spdy. This option is ignored if the `https`
         * option is not enabled, as spdy is broken for HTTP. The dev server
         * will migrate over to Node's built-in HTTP/2 once Express supports it.
         */
        http2?: boolean;
        /**
         * By default dev-server will be served over HTTP. It can optionally be
         * served over HTTP/2.
         */
        https?: boolean | https.ServerOptions;
        /**
         * Tells devServer to inject a client. Setting devServer.injectClient
         * to true will result in always injecting a client. It is possible to
         * provide a function to inject conditionally
         */
        injectClient?: boolean | ((compilerConfig: webpack.Compiler) => boolean);
        /**
         * Tells devServer to inject a Hot Module Replacement. Setting
         * devServer.injectHot to true will result in always injecting. It is
         * possible to provide a function to inject conditionally
         */
        injectHot?: boolean | ((compilerConfig: webpack.Compiler) => boolean);
        /**
         * By default, the dev-server will reload/refresh the page when file
         * changes are detected. devServer.hot option must be disabled or
         * `static[].watch` option must be enabled in order for liveReload to
         * take effect. Disable devServer.liveReload by setting it to false
         */
        liveReload?: boolean;
        /**
         * Provides the ability to execute custom middleware after all other
         * middleware internally within the server.
         */
        onAfterSetupMiddleware?: (server: WebpackDevServer) => void;
        /**
         * Provides the ability to execute custom middleware prior to all
         * other middleware internally within the server.
         */
        onBeforeSetupMiddleware?: (server: WebpackDevServer) => void;
        /**
         * Provides an option to execute a custom function when
         * webpack-dev-server starts listening for connections on a port.
         */
        onListening?: (server: WebpackDevServer) => void;
        /** When open is enabled, the dev server will open the browser. */
        open?: boolean | string | object;
        /** Specify a page to navigate to when opening the browser. */
        openPage?: string | string[];
        /** Specify a port number to listen for requests on. */
        port?: number | string | null;
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
        proxy?: ProxyConfigMap | ProxyConfigArray;
        /**
         * When using inline mode and you're proxying dev-server, the inline
         * client script does not always know where to connect to.  It will try
         * to guess the URL of the server based on window.location, but if that
         * fails you'll need to use this.
         */
        public?: string;
        /**
         * Should the server close and exit the process on `SIGINT` and
         * `SIGTERM` signals.
         */
        setupExitSignals?: boolean;
        /**
         * Configure static directories to serve.
         * This is only necessary if you want to serve static files.
         * devServer.dev.publicPath will be used to determine where the bundles
         * should be served from, and takes precedence.
         */
        static?: boolean | string | Static | Array<Static | string>;
        /**
         * Specifying this option instructs the server to close when `stdin` ends.
         */
        stdin?: boolean;
        /**
         * Providing a string to devServer.transportMode is a shortcut to
         * setting both devServer.transportMode.client and
         * devServer.transportMode.server to the given string value.
         *
         * This option allows us either to choose the current devServer
         * transport mode for client/server individually or to provide custom
         * client/server implementation. This allows to specify how browser or
         * other client communicates with the devServer.
         *
         * The default mode is 'ws'. This mode uses uses ws as a server, and
         * native WebSockets on the client.
         *
         * IE 11 and other old browsers doesn't support WebSocket, set sockjs
         * value for transportMode if you need supports IE 11.
         */
        transportMode?:
            | 'sockjs'
            | 'ws'
            | {
                  client: object;
                  server: 'ws';
              }
            | {
                  client: 'ws';
                  server: object;
              }
            | {
                  client: object;
                  server: object;
              };
        /** This option lets the browser open with your local IP. */
        useLocalIp?: boolean;
    }
}

declare module 'webpack' {
    interface Configuration {
        /**
         * Can be used to configure the behaviour of webpack-dev-server when
         * the webpack config is passed to webpack-dev-server CLI.
         */
        devServer?: WebpackDevServer.Configuration;
    }
}

declare class WebpackDevServer {
    sockets: NodeJS.EventEmitter[];

    constructor(webpack: webpack.Compiler | webpack.MultiCompiler, config?: WebpackDevServer.Configuration);

    listen(port: number, hostname?: string, callback?: (error?: Error) => void): Promise<http.Server>;

    close(callback?: () => void): void;

    sockWrite(sockets: NodeJS.EventEmitter[], type: string, data?: any): void;
}

export = WebpackDevServer;
