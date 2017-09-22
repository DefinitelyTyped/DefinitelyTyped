// Type definitions for karma 1.7
// Project: https://github.com/karma-runner/karma
// Definitions by: Dmitriy Romanov <https://github.com/noldors>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as https from 'https';
import * as log4js from 'log4js';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as http from 'http';
import * as httpProxy from 'http-proxy';

export interface Config {
    LOG_DISABLE: string;
    LOG_ERROR: string;
    LOG_WARN: string;
    LOG_INFO: string;
    LOG_DEBUG: string;

    set(config: ConfigOptions): void;
}

export interface ConfigOptions {
    [index: string]: any;

    /**
     * @default true
     * @cli --auto-watch, --no-auto-watch
     * @description Enable or disable watching files and executing the tests whenever one of these files changes.
     */
    autoWatch?: boolean;

    /**
     * @default 250
     * @description When Karma is watching the files for changes,
     * it tries to batch multiple changes into a single run
     * so that the test runner doesn't try to start and restart running tests more than it should.
     * The configuration setting tells Karma how long to wait (in milliseconds)
     * after any changes have occurred before starting the test process again.
     */
    autoWatchBatchDelay?: number;

    /**
     * @default ''
     * @description The root path location that will be used
     * to resolve all relative paths defined in files and exclude.
     * If the basePath configuration is a relative path,
     * then it will be resolved to the __dirname of the configuration file.
     */
    basePath?: string;

    /**
     * @default 2000
     * @description How long does Karma wait for a browser to reconnect (in ms).
     * With a flaky connection, it is pretty common that the browser disconnects,
     * but the actual test execution is still running without any problems.
     * Karma does not treat a disconnection as an immediate failure and will wait for browserDisconnectTimeout (ms).
     * If the browser reconnects during that time, everything is fine.
     */
    browserDisconnectTimeout?: number;

    /**
     * @default {level: "debug", format: "%b %T: %m", terminal: true}
     * @description Configure how the browser console is logged with the following properties,
     * all of which are optional:
     * {
     *   level: string,
     *   format: string,
     *   path: string,
     *   terminal: boolean
     * }
     * Here the level is the desired log-level, where level log always is logged.
     * The format is a string where %b, %t, %T, and %m are replaced with the browser string,
     * log type in lower-case, log type in uppercase, and log message, respectively.
     * This format will only effect the output file.
     * Path is the output-path of the output-file, and terminal indicates if the log should be written in the
     * terminal, or not.
     */
    browserConsoleLogOptions?: BrowserConsoleLogOptions;

    /**
     * @default 0
     * @description The number of disconnections tolerated.
     * The disconnectTolerance value represents the maximum number of tries a browser
     * will attempt in the case of a disconnection. Usually, any disconnection is considered a failure,
     * but this option allows you to define a tolerance level when there is a
     * flaky network link between the Karma server and the browsers.
     */
    browserDisconnectTolerance?: number;

    /**
     * @default 10000
     * @description How long will Karma wait for a message from a browser before disconnecting from it (in ms).
     * If, during test execution, Karma does not receive any message from a browser
     * within browserNoActivityTimeout(ms), it will disconnect from the browser.
     */
    browserNoActivityTimeout?: number;

    /**
     * @default []
     * @cli --browsers Chrome,Firefox, --no-browsers
     * @description A list of browsers to launch and capture.
     * When Karma starts up, it will also start up each browser which is placed
     * within this setting. Once Karma is shut down, it will shut down these browsers as well.
     * You can capture any browser manually by opening the browser and visiting the URL
     * where the Karma web server is listening (by default it is http://localhost:9876/).
     * Additional launchers can be defined through plugins.
     * Use the --no-browsers command line option to override the value of this
     * setting specified in the configuration file with an empty list
     */
    browsers?: browserName[];

    /**
     * @default 60000
     * @description Timeout for capturing a browser (in ms).
     * The captureTimeout value represents the maximum boot-up time allowed for a browser
     * to start and connect to Karma. If any browser does not get captured within the timeout,
     * Karma will kill it and try to launch it again and, after three attempts to capture it, Karma will give up.
     */
    captureTimeout?: number;

    client?: ClientOptions;

    /**
     * @default true
     * @cli --colors, --no-colors
     * @description Enable or disable colors in the output (reporters and logs).
     */
    colors?: boolean;

    /**
     * @default Infinity
     * @description How many browsers Karma launches in parallel.
     * Especially on services like SauceLabs and Browserstack,
     * it makes sense only to launch a limited amount of browsers at once,
     * and only start more when those have finished. Using this configuration,
     * you can specify how many browsers should be running at once at any given point in time.
     */
    concurrency?: number;

    /**
     * @default true
     * @description When true, this will append the crossorigin attribute to generated script tags,
     * which enables better error reporting for JavaScript files served from a different origin.
     * Disable this when you need to load external scripts that are served
     * without the necessary Access-Control-Allow-Origin header.
     */
    crossOriginAttribute?: boolean;

    /**
     * @default null
     * @description If null (default), uses karma's own context.html file.
     */
    customContextFile?: string | null;

    /**
     * @default null
     * @description If null (default), uses karma's own debug.html file.
     */
    customDebugFile?: string | null;

    /**
     * @default null
     * @description If null (default), uses karma's own client_with_context.html
     * file (which is used when client.runInParent set to true).
     */
    customClientContextFile?: string | null;

    /**
     * @default undefined
     * @description Custom HTTP headers that will be set upon serving files by Karma's web server.
     * Custom headers are useful, especially with upcoming browser features like Service Workers.
     * The customHeaders option allows you to set HTTP headers for files
     * that match a regular expression. customHeaders is an array of Objects with properties as follows:
     * match: Regular expression string to match files
     * name: HTTP header name
     * value: HTTP header value
     */
    customHeaders?: CustomHeader[];

    /**
     * @default false
     * @cli --detached
     * @description When true, this will start the karma server in another process,
     * writing no output to the console. The server can be stopped using the karma stop command.
     */
    detached?: boolean;

    /**
     * @default []
     * @description List of files/patterns to exclude from loaded files.
     */
    exclude?: string[];

    /**
     * @default true
     * @cli --fail-on-empty-test-suite, --no-fail-on-empty-test-suite
     * @description Enable or disable failure on running empty test-suites.
     * If disabled the program will return exit-code 0 and display a warning.
     */
    failOnEmptyTestSuite?: boolean;

    /**
     * @default []
     * @description List of files/patterns to load in the browser.
     */
    files?: Array<FilePattern | string>;

    /**
     * @default false
     * @description Force socket.io to use JSONP polling instead of XHR polling.
     */
    forceJSONP?: boolean;

    /**
     * @default []
     * @description List of test frameworks you want to use.
     * Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
     * Please note just about all frameworks in Karma require an additional
     * plugin/framework library to be installed (via NPM).
     */
    frameworks?: string[];

    /**
     * @default '0.0.0.0' or LISTEN_ADDR
     * @description Address that the server will listen on.
     * Change to 'localhost' to only listen to the loopback, or '::' to listen on all IPv6 interfaces
     */
    listenAddress?: string;

    /**
     * @default 'localhost'
     * @description Hostname to be used when capturing browsers.
     */
    hostname?: string;

    /**
     * @default {}
     * @description Options object to be used by Node's https class.
     */
    httpsServerOptions?: https.ServerOptions;

    /**
     * @default Config.LOG_INFO
     * @description Level of logging.
     * Possible values:
     * config.LOG_DISABLE
     * config.LOG_ERROR
     * config.LOG_WARN
     * config.LOG_INFO
     * config.LOG_DEBUG
     */
    logLevel?: string;

    /**
     * @default [{type: 'console'}]
     * @description A list of log appenders to be used. See the documentation for [log4js] for more information.
     */
    loggers?: log4js.AppenderConfigBase[];

    /**
     * @default []
     * @description List of names of additional middleware you want the karma server to use.
     * Middleware will be used in the order listed.
     * You must have installed the middleware via a plugin/framework (either inline or via NPM).
     * Additional information can be found in plugins.
     * The plugin must provide an express/connect middleware function.
     */
    middleware?: string[];

    /**
     * @default {}
     * @description Redefine default mapping from file extensions to MIME-type.
     * Set property name to required MIME, provide Array of extensions (without dots) as it's value.
     * @example
     * mime: {
     *   'text/x-typescript': ['ts','tsx'],
     *   'text/plain' : ['mytxt']
     * }
     */
    mime?: { [index: string]: string[] };

    /**
     * @default []
     * @description This is the same as middleware except that these middleware
     * will be run before karma's own middleware.
     */
    beforeMiddleware?: string[];

    /**
     * @default ['karma-*']
     * @description List of plugins to load.
     * A plugin can be a string (in which case it will be required by Karma) or an inlined plugin - Object.
     * By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
     *
     * Note: Just about all plugins in Karma require an additional library to be installed (via NPM).
     */
    plugins?: Array<NodeRequireFunction | string>;

    /**
     * @default 9876
     * @cli --port 9876
     * @description The port where the web server will be listening.
     */
    port?: number;

    /**
     * @default 2000
     * @description How long will Karma wait for browser process to terminate before sending a SIGKILL signal.
     * If, after test execution or after Karma attempts to kill the browser,
     * browser is not killed within processKillTimeout(ms),
     * Karma will send a SIGKILL signal to attempt to kill the browser forcefully.
     */
    processKillTimeout?: number;

    /**
     * @default {'**\/*.coffee': 'coffee'}
     * @description A map of preprocessors to use.
     *
     * Preprocessors can be loaded through plugins.
     *
     * Note: Just about all preprocessors in Karma (other than CoffeeScript and some other defaults)
     * require an additional library to be installed (via NPM).
     *
     * Be aware that preprocessors may be transforming the files and file types that are available at run time.
     * For instance, if you are using the "coverage" preprocessor on your source files,
     * if you then attempt to interactively debug your tests, you'll discover that your expected source code
     * is completely changed from what you expected.
     * Because of that, you'll want to engineer this so that your automated builds use the coverage entry
     * in the "reporters" list, but your interactive debugging does not.
     */
    preprocessors?: { [index: string]: string };

    /**
     * @default 'http:'
     * @description Protocol used for running the Karma webserver.
     * Determines the use of the Node http or https class.
     *
     * Note: Using 'https:' requires you to specify httpsServerOptions.
     */
    protocol?: protocol;

    /**
     * @default undefined
     * @description Module used for Karma webserver.
     *
     * Uses the provided module instead of node's built in http or https module.
     * The module loaded here must exactly match the interface of node's http module.
     * This can be useful for loading in a module like node-http2 to allow for http2 support.
     *
     * Note: if you're using this to enable http2 you must also set the protocol
     * to https: and specify certificates as http2 can only run of https.
     */
    httpModule?: string;

    /**
     * @default {}
     * @description A map of path-proxy pairs.
     *
     * The proxy can be specified directly by the target url or path, or with an object to configure more options.
     * The available options are:
     * target The target url or path (mandatory)
     * changeOrigin Whether or not the proxy should override the Host header using the host from the target (default false)
     */
    proxies?: Proxies;

    /**
     * @default true
     * @description Whether or not Karma or any browsers should raise an error when an invalid SSL certificate is found.
     */
    proxyValidateSSL?: boolean;

    /**
     * @default 0
     * @description Karma will report all the tests that are slower than given time limit (in ms).
     * This is disabled by default (since the default value is 0).
     */
    reportSlowerThan?: number;

    /**
     * @default ['progress']
     * @cli --reporters progress,growl
     * @description A list of reporters to use.
     * Possible Values:
     * dots
     * progress
     *
     * Additional reporters, such as growl, junit, teamcity or coverage can be loaded through plugins.
     *
     * Note: Just about all additional reporters in Karma (other than progress)
     * require an additional library to be installed (via NPM).
     */
    reporters?: string[];

    /**
     * @default undefined
     * @cli --format-error ./path/to/formatFunction.js
     * @description Format assertion errors and stack traces.
     * Useful for removing vendors and compiled sources. Return an empty line '' to remove it.
     *
     * The CLI option should be a path to a file that exports the format function.
     * This can be a function exported at the root of the module or an export named formatError.
     */
    formatError?(error: string): string;

    /**
     * @default false
     * @description
     * When Karma is watching the files for changes, it will delay a new run until the current run is finished.
     * Enabling this setting will cancel the current run and start a new run immediately when a change is detected.
     */
    restartOnFileChange?: boolean;

    /**
     * @default 2
     * @description When a browser crashes, karma will try to relaunch.
     * This defines how many times karma should relaunch a browser before giving up.
     */
    retryLimit?: number;

    /**
     * @default false
     * @cli --single-run, --no-single-run
     * @description Continuous Integration mode.
     *
     * If true, Karma will start and capture all configured browsers,
     * run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.
     */
    singleRun?: boolean;

    /**
     * @default ['polling', 'websocket']
     * @description An array of allowed transport methods between the browser and testing server.
     * This configuration setting is handed off to socket.io
     * (which manages the communication between browsers and the testing server).
     */
    transports?: string[];

    /**
     * @default undefined
     * @description Called when requesting Proxy.
     * Details about this can be found in the node-http-proxy.
     * An example of overwriting the HTTP header is shown below.
     * @example
     * proxyReq: function(proxyReq, req, res, options) {
     *   proxyReq.setHeader('Referer', 'https://www.example.com/');
     * }
     */
    proxyReq?(
        proxyReq: http.ClientRequest,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        options: httpProxy.ServerOptions
    ): void;

    /**
     * @default undefined
     * @description Called when respnsing Proxy.
     *
     * Details about this can be found in the node-http-proxy. An example of overwriting the HTTP header is shown below.
     * @example
     * proxyRes: function(proxyRes, req, res) {
     *   if (proxyRes.headers['set-cookie']) {
     *     proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map(function (cookie) {
     *       return cookie.replace(/\s*secure;?/i, '');
     *     })
     *   }
     * }
     */
    proxyRes?(proxyRes: http.IncomingMessage, req: http.IncomingMessage, res: http.ServerResponse): void;

    /**
     * @default undefined
     * @description For use when the Karma server needs to be run behind a proxy that changes the base url, etc
     */
    upstreamProxy?: UpstreamProxy;

    /**
     * @default '/'
     * @description The base url, where Karma runs.
     *
     * All of Karma's urls get prefixed with the urlRoot.
     * This is helpful when using proxies, as sometimes you might want to
     * proxy a url that is already taken by Karma.
     */
    urlRoot?: string;

    /**
     * @default 0
     * @description The JavaScript version to use in the Firefox browser.
     *
     * If > 0, Karma will add a JavaScript version tag to the included JavaScript files.
     *
     * Note: This will only be applied to the Firefox browser.
     * It is currently the only browser that supports the version tag.
     */
    jsVersion?: number;

    /**
     * @default undefined
     * @description Webpack configuration.
     */
    webpack?: webpack.Configuration;

    webpackMiddleware?: webpackDevMiddleware.Options;
}

export interface UpstreamProxy {
    /**
     * @defaul '/'
     * @description Will be prepended to the base url when launching browsers and
     * prepended to internal urls as loaded by the browsers
     */
    path?: string;

    /**
     * @default 9875
     * @description Will be used as the port when launching browsers.
     */
    port?: number;

    /**
     * @default 'localhost'
     * @description Will be used as the hostname when launching browsers.
     */
    hostname?: string;

    /**
     * @default 'http:'
     * @description Will be used as the protocol when launching browsers.
     */
    protocol?: protocol;
}

export interface Proxies {
    [index: string]: string | { target: string, changeOrigin?: boolean };
}

export type protocol = 'http:' | 'https:';

export type browserName = 'Chrome' | 'ChromeCanary' | 'PhantomJS' | 'Firefox' | 'Opera' | 'IE' | 'Safari';

export interface FilePattern {
    /**
     * The pattern to use for matching. This property is mandatory.
     */
    pattern: string;
    /**
     * @default true
     * @description If <code>autoWatch</code> is true all files that have set watched to true will be watched
     * for changes.
     */
    watched?: boolean;
    /**
     * @default true
     * @description Should the files be included in the browser using <script> tag? Use false if you want to
     * load them manually, eg. using Require.js.
     */
    included?: boolean;
    /**
     * @default true
     * @description Should the files be served by Karma's webserver?
     */
    served?: boolean;
    /**
     * @default false
     * @description Should the files be served from disk on each request by Karma's webserver?
     */
    nocache?: boolean;
}

export interface CustomHeader {
    match: string;
    name: string;
    value: string;
}

export interface BrowserConsoleLogOptions {
    level?: string;
    format?: string;
    path?: string;
    terminal?: boolean;
}

export interface ClientOptions {
    /**
     * @default undefined
     * @cli All arguments after -- (only when using karma run)
     * @description When karma run is passed additional arguments on the command-line,
     * they are passed through to the test adapter as karma.config.args (an array of strings).
     * The client.args option allows you to set this value for actions other than run.
     */
    args?: string[];

    /**
     * @default true
     * @description Run the tests inside an iFrame or a new window.
     * If true, Karma runs the tests inside an iFrame.
     * If false, Karma runs the tests in a new window.
     * Some tests may not run in an iFrame and may need a new window to run.
     */
    useIframe?: boolean;

    /**
     * @default false
     * @description Run the tests on the same window as the client, without using iframe or a new window.
     * If true, Karma runs the tests inside the original window without using iframe.
     * It will load the test scripts dynamically.
     */
    runInParent?: boolean;

    /**
     * @default true
     * @description Capture all console output and pipe it to the terminal.
     */
    captureConsole?: boolean;

    /**
     * @default true
     * @description Clear the context window.
     * If true, Karma clears the context window upon the completion of running the tests.
     * If false, Karma does not clear the context window upon the completion of running the tests.
     * Setting this to false is useful when embedding a Jasmine Spec Runner Template.
     */
    clearContext?: boolean;
}

export interface Karma {
    constants: Constants;
    VERSION: string;
    Server: Server;
    runner: Runner;
    stopper: Stopper;
    launcher: Launcher;
    config: { parseConfig(configFilePath: string, cliOptions: any): void };
    /**
     * @deprecated Should be removed in 0.14 but not removed
     */
    server: OldServer;
}

export interface Constants {
    VERSION: string;
    DEFAULT_PORT: number;
    DEFAULT_HOSTNAME: string;
    DEFAULT_LISTEN_ADDR: string;
    LOG_DISABLE: string;
    LOG_ERROR: string;
    LOG_WARN: string;
    LOG_INFO: string;
    LOG_DEBUG: string;
    LOG_LOG: string;
    LOG_PRIORITIES: string[];
    COLOR_PATTERN: string;
    NO_COLOR_PATTERN: string;
    CONSOLE_APPENDER: {
        type: string;
        layout: {
            type: string;
            pattern: string;
        };
    };
    EXIT_CODE: string;
}

export interface LauncherStatic {
    generateId(): string;
    new (emitter: NodeJS.EventEmitter, injector: any): Launcher;
}

export class Browser {
    id: string;
    fullName: string;
    name: string;
    state: boolean;
    lastResult: any;
    disconnectsCount: number;
    init(): void;
    isReady(): boolean;
    toString(): string;
    onKarmaError(error: string): void;
    onInfo(info: string): void;
    onStart(info: string): void;
    onComplete(result: string): void;
    onDisconnect(_: string, disconnectedSocket: {id: string}): void;
    reconnect(newSocket: {id: string}): void;
    onResult(result: string | string[]): void;
    serialize(): {id: string, name: string, isReady: boolean};
    execute(config: ConfigOptions): void;
}

export class Launcher {
    static generateId(): string;
    getBrowserById(id: number): Browser;
    launchSingle(
        protocol: protocol,
        hostname: string,
        port: number,
        urlRoot: string,
        upstreamProxy: UpstreamProxy,
        processKillTimeout: number
    ): (name: string) => void;
    launch(names: string[], concurency: number): Browser[];
    kill(id: string, callback: ServerCallback): boolean;
    restart(id: string): boolean;
    killAll(callback: ServerCallback): void;
    areAllCaptured(): boolean;
    markCaptured(id: string): void;
}

export interface OldServer {
    start(options?: any, callback?: ServerCallback): void;
}

export interface Runner {
    run(config?: ConfigOptions | ConfigFile, done?: ServerCallback): void;
}

export interface Stopper {
    /**
     * This function will signal a running server to stop. The equivalent of karma stop.
     */
    stop(config?: ConfigOptions, done?: ServerCallback): void;
}

export interface TestResults {
    disconnected: boolean;
    error: boolean;
    exitCode: number;
    failed: number;
    success: number;
}

export class Server extends NodeJS.EventEmitter {
    constructor(options?: ConfigOptions | ConfigFile, callback?: ServerCallback);
    /**
     * Start the server
     */
    start(): void;
    /**
     * Get properties from the injector
     * @param token
     */
    get(token: string): any;
    /**
     * Force a refresh of the file list
     */
    refreshFiles(): Promise<any>;
}

export type ServerCallback = (exitCode: number) => void;

export interface ConfigFile {
    configFile: string;
}
