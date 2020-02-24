// Type definitions for karma 3.0
// Project: https://github.com/karma-runner/karma, http://karma-runner.github.io
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 James Garbutt <https://github.com/43081j>
//                 Yaroslav Admin <https://github.com/devoto13>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

// See Karma public API https://karma-runner.github.io/latest/dev/public-api.html
import Promise = require('bluebird');
import https = require('https');
import { Appender } from 'log4js';
import { EventEmitter } from 'events';

/**
 * `start` method is deprecated since 0.13. It will be removed in 0.14.
 * Please use
 * <code>
 *     server = new Server(config, [done])
 *     server.start()
 * </code>
 * instead.
 *
 * @deprecated
 */
export const server: DeprecatedServer;

export const runner: Runner;
export const stopper: Stopper;

export const VERSION: string;
export const constants: Constants;

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

export namespace launcher {
    class Launcher {
        static generateId(): string;

        constructor(emitter: NodeJS.EventEmitter, injector: any);

        // TODO: Can this return value ever be typified?
        launch(names: string[], protocol: string, hostname: string, port: number, urlRoot: string): any[];
        kill(id: string, callback: () => void): boolean;
        restart(id: string): boolean;
        killAll(callback: () => void): void;
        areAllCaptured(): boolean;
        markCaptured(id: string): void;
    }
}

/** @deprecated */
export interface DeprecatedServer {
    /** @deprecated */
    start(options?: any, callback?: ServerCallback): void;
}

export interface Runner {
    run(options?: ConfigOptions | ConfigFile, callback?: ServerCallback): void;
}

export interface Stopper {
    /**
     * This function will signal a running server to stop. The equivalent of karma stop.
     */
    stop(options?: ConfigOptions, callback?: ServerCallback): void;
}

export interface TestResults {
    disconnected: boolean;
    error: boolean;
    exitCode: number;
    failed: number;
    success: number;
}

export class Server extends EventEmitter {
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

    on(event: string, listener: (...args: any[]) => void): this;

    /**
     * Listen to the 'run_complete' event.
     */
    on(event: 'run_complete', listener: (browsers: any, results: TestResults) => void): this;

    /**
     * Backward-compatibility with karma-intellij bundled with WebStorm.
     * Deprecated since version 0.13, to be removed in 0.14
     */
    // static start(): void;
}

export type ServerCallback = (exitCode: number) => void;

export interface Config {
    set: (config: ConfigOptions) => void;
    LOG_DISABLE: string;
    LOG_ERROR: string;
    LOG_WARN: string;
    LOG_INFO: string;
    LOG_DEBUG: string;
}

export interface ConfigFile {
    configFile: string;
}

export interface ConfigOptions {
    /**
     * @description Enable or disable watching files and executing the tests whenever one of these files changes.
     * @default true
     */
    autoWatch?: boolean;
    /**
     * @description When Karma is watching the files for changes, it tries to batch multiple changes into a single run
     * so that the test runner doesn't try to start and restart running tests more than it should.
     * The configuration setting tells Karma how long to wait (in milliseconds) after any changes have occurred
     * before starting the test process again.
     * @default 250
     */
    autoWatchBatchDelay?: number;
    /**
     * @default ''
     * @description The root path location that will be used to resolve all relative paths defined in <code>files</code> and <code>exclude</code>.
     * If the basePath configuration is a relative path then it will be resolved to
     * the <code>__dirname</code> of the configuration file.
     */
    basePath?: string;
    /**
     * Configure how the browser console is logged with the following properties, all of which are optional
     */
    browserConsoleLogOptions?: BrowserConsoleLogOptions;
    /**
     * @default 2000
     * @description How long does Karma wait for a browser to reconnect (in ms).
     * <p>
     * With a flaky connection it is pretty common that the browser disconnects,
     * but the actual test execution is still running without any problems. Karma does not treat a disconnection
     * as immediate failure and will wait <code>browserDisconnectTimeout</code> (ms).
     * If the browser reconnects during that time, everything is fine.
     * </p>
     */
    browserDisconnectTimeout?: number;
    /**
     * @default 0
     * @description The number of disconnections tolerated.
     * <p>
     * The <code>disconnectTolerance</code> value represents the maximum number of tries a browser will attempt
     * in the case of a disconnection. Usually any disconnection is considered a failure,
     * but this option allows you to define a tolerance level when there is a flaky network link between
     * the Karma server and the browsers.
     * </p>
     */
    browserDisconnectTolerance?: number;
    /**
     * @default 10000
     * @description How long will Karma wait for a message from a browser before disconnecting from it (in ms).
     * <p>
     * If, during test execution, Karma does not receive any message from a browser within
     * <code>browserNoActivityTimeout</code> (ms), it will disconnect from the browser
     * </p>
     */
    browserNoActivityTimeout?: number;
    /**
     * @default []
     * Possible Values:
     * <ul>
     *     <li>Chrome (launcher comes installed with Karma)</li>
     *     <li>ChromeCanary (launcher comes installed with Karma)</li>
     *     <li>PhantomJS (launcher comes installed with Karma)</li>
     *     <li>Firefox (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>Opera (launcher requires karma-opera-launcher plugin)</li>
     *     <li>Internet Explorer (launcher requires karma-ie-launcher plugin)</li>
     *     <li>Safari (launcher requires karma-safari-launcher plugin)</li>
     * </ul>
     * @description A list of browsers to launch and capture. When Karma starts up, it will also start up each browser
     * which is placed within this setting. Once Karma is shut down, it will shut down these browsers as well.
     * You can capture any browser manually by opening the browser and visiting the URL where
     * the Karma web server is listening (by default it is <code>http://localhost:9876/</code>).
     */
    browsers?: string[];
    /**
     * @default 60000
     * @description Timeout for capturing a browser (in ms).
     * <p>
     * The <code>captureTimeout</code> value represents the maximum boot-up time allowed for a
     * browser to start and connect to Karma. If any browser does not get captured within the timeout, Karma
     * will kill it and try to launch it again and, after three attempts to capture it, Karma will give up.
     * </p>
     */
    captureTimeout?: number;
    client?: ClientOptions;
    /**
     * @default true
     * @description Enable or disable colors in the output (reporters and logs).
     */
    colors?: boolean;
    /**
     * @default 'Infinity'
     * @description How many browsers Karma launches in parallel.
     * Especially on services like SauceLabs and Browserstack, it makes sense only to launch a limited
     * amount of browsers at once, and only start more when those have finished. Using this configuration,
     * you can specify how many browsers should be running at once at any given point in time.
     */
    concurrency?: number;
    customLaunchers?: { [key: string]: CustomLauncher };
    /**
     * @default []
     * @description List of files/patterns to exclude from loaded files.
     */
    exclude?: string[];
    /**
     * @default []
     * @description List of files/patterns to load in the browser.
     */
    files?: Array<FilePattern | string>;
    /**
     * @default []
     * @description List of test frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
     * Please note just about all frameworks in Karma require an additional plugin/framework library to be installed (via NPM).
     */
    frameworks?: string[];
    /**
     * @default 'localhost'
     * @description Hostname to be used when capturing browsers.
     */
    hostname?: string;
    /**
     * @default {}
     * @description Options object to be used by Node's https class.
     * Object description can be found in the
     * [NodeJS.org API docs](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener)
     */
    httpsServerOptions?: https.ServerOptions;
    /**
     * @default config.LOG_INFO
     * Possible values:
     * <ul>
     *   <li>config.LOG_DISABLE</li>
     *   <li>config.LOG_ERROR</li>
     *   <li>config.LOG_WARN</li>
     *   <li>config.LOG_INFO</li>
     *   <li>config.LOG_DEBUG</li>
     * </ul>
     * @description Level of logging.
     */
    logLevel?: string;
    /**
     * @default [{type: 'console'}]
     * @description A list of log appenders to be used. See the documentation for [log4js] for more information.
     */
    loggers?: { [name: string]: Appender } | Appender[];
    /**
     * @default []
     * @description List of names of additional middleware you want the
     * Karma server to use. Middleware will be used in the order listed.
     * You must have installed the middleware via a plugin/framework
     * (either inline or via NPM). Additional information can be found in
     * [plugins](http://karma-runner.github.io/2.0/config/plugins.html).
     * The plugin must provide an express/connect middleware function
     * (details about this can be found in the
     * [Express](http://expressjs.com/guide/using-middleware.html) docs).
     */
    middleware?: string[];
    /**
     * @default {}
     * @description Redefine default mapping from file extensions to MIME-type.
     * Set property name to required MIME, provide Array of extensions (without dots) as it's value.
     */
    mime?: {[type: string]: string[]};
    /**
     * @default ['karma-*']
     * @description List of plugins to load. A plugin can be a string (in which case it will be required
     * by Karma) or an inlined plugin - Object.
     * By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
     * Note: Just about all plugins in Karma require an additional library to be installed (via NPM).
     */
    plugins?: any[];
    /**
     * @default 9876
     * @description The port where the web server will be listening.
     */
    port?: number;
    /**
     * @default {'**\/*.coffee': 'coffee'}
     * @description A map of preprocessors to use.
     *
     * Preprocessors can be loaded through [plugins].
     *
     * Note: Just about all preprocessors in Karma (other than CoffeeScript and some other defaults)
     * require an additional library to be installed (via NPM).
     *
     * Be aware that preprocessors may be transforming the files and file types that are available at run time. For instance,
     * if you are using the "coverage" preprocessor on your source files, if you then attempt to interactively debug
     * your tests, you'll discover that your expected source code is completely changed from what you expected.  Because
     * of that, you'll want to engineer this so that your automated builds use the coverage entry in the "reporters" list,
     * but your interactive debugging does not.
     *
     */
    preprocessors?: { [name: string]: string | string[] };
    /**
     * @default 'http:'
     * Possible Values:
     * <ul>
     *   <li>http:</li>
     *   <li>https:</li>
     * </ul>
     * @description Protocol used for running the Karma webserver.
     * Determines the use of the Node http or https class.
     * Note: Using <code>'https:'</code> requires you to specify <code>httpsServerOptions</code>.
     */
    protocol?: string;
    /**
     * @default {}
     * @description A map of path-proxy pairs.
     */
    proxies?: { [path: string]: string };
    /**
     * @default true
     * @description Whether or not Karma or any browsers should raise an error when an inavlid SSL certificate is found.
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
     * Possible Values:
     * <ul>
     *   <li>dots</li>
     *   <li>progress</li>
     * </ul>
     * @description A list of reporters to use.
     * Additional reporters, such as growl, junit, teamcity or coverage can be loaded through plugins.
     * Note: Just about all additional reporters in Karma (other than progress) require an additional library to be installed (via NPM).
     */
    reporters?: string[];
    /**
     * When Karma is watching the files for changes, it will delay a new run
     * until the current run is finished. Enabling this setting
     * will cancel the current run and start a new run immediately when a change is detected.
     */
    restartOnFileChange?: boolean;
    /**
     * @default false
     * @description Continuous Integration mode.
     * If true, Karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending
     * on whether all tests passed or any tests failed.
     */
    singleRun?: boolean;
    /**
     * @default ['polling', 'websocket']
     * @description An array of allowed transport methods between the browser and testing server. This configuration setting
     * is handed off to [socket.io](http://socket.io/) (which manages the communication
     * between browsers and the testing server).
     */
    transports?: string[];
    /**
     * @default '/'
     * @description The base url, where Karma runs.
     * All of Karma's urls get prefixed with the urlRoot. This is helpful when using proxies, as
     * sometimes you might want to proxy a url that is already taken by Karma.
     */
    urlRoot?: string;
}

export interface ClientOptions {
    /**
     * @default undefined
     * @description When karma run is passed additional arguments on the command-line, they
     * are passed through to the test adapter as karma.config.args (an array of strings).
     * The client.args option allows you to set this value for actions other than run.
     * How this value is used is up to your test adapter - you should check your adapter's
     * documentation to see how (and if) it uses this value.
     */
    args?: string[];
    /**
     * @default true
     * @description Run the tests inside an iFrame or a new window
     * If true, Karma runs the tests inside an iFrame. If false, Karma runs the tests in a new window. Some tests may not run in an
     * iFrame and may need a new window to run.
     */
    useIframe?: boolean;
    /**
     * @default true
     * @description Capture all console output and pipe it to the terminal.
     */
    captureConsole?: boolean;
    /**
     * @default false
     * @description Run the tests on the same window as the client, without using iframe or a new window
     */
    runInParent?: boolean;
    /**
     * @default true
     * @description Clear the context window
     * If true, Karma clears the context window upon the completion of running the tests.
     * If false, Karma does not clear the context window upon the completion of running the tests.
     * Setting this to false is useful when embedding a Jasmine Spec Runner Template.
     */
    clearContext?: boolean;
}

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

export interface CustomLauncher {
    base: string;
    browserName?: string;
    flags?: string[];
    platform?: string;
}

export interface BrowserConsoleLogOptions {
    /** the desired log-level, where level log always is logged */
    level?: 'log' | 'error' | 'warn' | 'info' | 'debug';
    /**
     * The format is a string where `%b`, `%t`, `%T`, and `%m` are replaced with the browser string,
     * log type in lower-case, log type in uppercase, and log message, respectively.
     * This format will only effect the output file
     */
    format?: string;
    /** output-path of the output-file */
    path?: string;
    /** if the log should be written in the terminal, or not */
    terminal?: boolean;
}

export namespace config {
    function parseConfig(configFilePath: string, cliOptions: ConfigOptions): Config;
}
