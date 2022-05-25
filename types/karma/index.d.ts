// Type definitions for karma 6.3
// Project: https://github.com/karma-runner/karma
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 James Garbutt <https://github.com/43081j>
//                 Yaroslav Admin <https://github.com/devoto13>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// See Karma public API https://karma-runner.github.io/latest/dev/public-api.html
import https = require("https");
import { Appender } from "log4js";
import { EventEmitter } from "events";
import * as constants from "./lib/constants";

export { constants };

export const VERSION: typeof constants.VERSION;
export const runner: Runner;
export const stopper: Stopper;

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

export interface Runner {
    run(options?: Config, callback?: ServerCallback): void;
    /** @deprecated */
    // tslint:disable-next-line:unified-signatures to correctly show deprecated overload
    run(options?: ConfigOptions | ConfigFile, callback?: ServerCallback): void;
}

export interface Stopper {
    /**
     * This function will signal a running server to stop. The equivalent of karma stop.
     */
    stop(options?: Config, callback?: ServerCallback): void;
    /** @deprecated */
    // tslint:disable-next-line:unified-signatures to correctly show deprecated overload
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
    constructor(options?: Config, callback?: ServerCallback);
    /** @deprecated */
    // tslint:disable-next-line:unified-signatures to correctly show deprecated overload
    constructor(options?: ConfigOptions | ConfigFile, callback?: ServerCallback);
    /**
     * Start the server
     */
    start(): Promise<void>;

    /**
     * Stop the server
     */
    stop(): Promise<void>;

    /**
     * Get properties from the injector
     * @param token
     */
    get(token: string): any;

    /**
     * Force a refresh of the file list
     */
    refreshFiles(): Promise<any>;
    refreshFile(path: string): Promise<any>;

    on(event: string, listener: (...args: any[]) => void): this;

    /**
     * Listen to the 'run_complete' event.
     */
    on(event: "run_complete", listener: (browsers: any, results: TestResults) => void): this;
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

// For documentation and intellisense list Karma browsers

/**
 *  Available browser launchers
 * - `Chrome` - launcher requires `karma-chrome-launcher` plugin
 * - `ChromeCanary` - launcher requires `karma-chrome-launcher` plugin
 * - `ChromeHeadless` - launcher requires `karma-chrome-launcher` plugin
 * - `PhantomJS` - launcher requires `karma-phantomjs-launcher` plugin
 * - `Firefox` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxHeadless` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxDeveloper` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxDeveloperHeadless` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxAurora` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxAuroraHeadless` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxNightly` - launcher requires `karma-firefox-launcher` plugin
 * - `FirefoxNightlyHeadless` - launcher requires `karma-firefox-launcher` plugin
 * - `Opera` - launcher requires `karma-opera-launcher` plugin
 * - `IE` - launcher requires `karma-ie-launcher` plugin
 * - `Safari` - launcher requires karma-safari-launcher plugin
 */
export type AutomatedBrowsers =
    | "Chrome"
    | "ChromeCanary"
    | "ChromeHeadless"
    | "PhantomJS"
    | "Firefox"
    | "FirefoxHeadless"
    | "FirefoxDeveloper"
    | "FirefoxDeveloperHeadless"
    | "FirefoxAurora"
    | "FirefoxAuroraHeadless"
    | "FirefoxNightly"
    | "FirefoxNightlyHeadless"
    | "Opera"
    | "IE"
    | "Safari";

export interface CustomHeaders {
    /** Regular expression string to match files */
    match: string;
    /** HTTP header name */
    name: string;
    /** HTTP header value */
    value: string;
}

export interface ProxyOptions {
    /** The target url or path (mandatory) */
    target: string;
    /**
     * Whether or not the proxy should override the Host header using the host from the target
     * @defult false
     */
    changeOrigin?: boolean | undefined;
}

/** A map of path-proxy pairs. */
export interface PathProxyPairs {
    [path: string]: string | ProxyOptions;
}

/** For use when the Karma server needs to be run behind a proxy that changes the base url, etc */
export interface UpstreamProxy {
    /**
     * Will be prepended to the base url when launching browsers and prepended to internal urls as loaded by the browsers
     * @default '/'
     */
    path?: string | undefined;
    /**
     * Will be used as the port when launching browsers
     * @default 9875
     */
    port?: number | undefined;
    /**
     * Will be used as the hostname when launching browsers
     * @default 'localhost'
     */
    hostname?: string | undefined;
    /**
     * Will be used as the protocol when launching browsers
     * @default 'http'
     */
    protocol?: string | undefined;
}

// description of inline plugins
export type PluginName = string;
// tslint:disable-next-line:ban-types support for constructor function and classes
export type ConstructorFn = Function | (new (...params: any[]) => any);
export type FactoryFn = (...params: any[]) => any;
export type ConstructorFnType = ["type", ConstructorFn];
export type FactoryFnType = ["factory", FactoryFn];
export type ValueType = ["value", any];
export type InlinePluginType = FactoryFnType | ConstructorFnType | ValueType;
export type InlinePluginDef = Record<PluginName, InlinePluginType>;

export interface ConfigOptions {
    /**
     * @description Enable or disable watching files and executing the tests whenever one of these files changes.
     * @default true
     */
    autoWatch?: boolean | undefined;
    /**
     * @description When Karma is watching the files for changes, it tries to batch multiple changes into a single run
     * so that the test runner doesn't try to start and restart running tests more than it should.
     * The configuration setting tells Karma how long to wait (in milliseconds) after any changes have occurred
     * before starting the test process again.
     * @default 250
     */
    autoWatchBatchDelay?: number | undefined;
    /**
     * @default ''
     * @description The root path location that will be used to resolve all relative paths defined in <code>files</code> and <code>exclude</code>.
     * If the basePath configuration is a relative path then it will be resolved to
     * the <code>__dirname</code> of the configuration file.
     */
    basePath?: string | undefined;
    /**
     * Configure how the browser console is logged with the following properties, all of which are optional
     */
    browserConsoleLogOptions?: BrowserConsoleLogOptions | undefined;
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
    browserDisconnectTimeout?: number | undefined;
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
    browserDisconnectTolerance?: number | undefined;
    /**
     * @default 10000
     * @description How long will Karma wait for a message from a browser before disconnecting from it (in ms).
     * <p>
     * If, during test execution, Karma does not receive any message from a browser within
     * <code>browserNoActivityTimeout</code> (ms), it will disconnect from the browser
     * </p>
     */
    browserNoActivityTimeout?: number | undefined;
    /**
     * Timeout for the client socket connection (in ms)
     * @default 20000
     */
    browserSocketTimeout?: number | undefined;
    /**
     * @default []
     * Possible Values:
     * <ul>
     *     <li>Chrome (launcher comes installed with Karma)</li>
     *     <li>ChromeCanary (launcher comes installed with Karma)</li>
     *     <li>PhantomJS (launcher comes installed with Karma)</li>
     *     <li>Firefox (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxHeadless (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxDeveloper (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxDeveloperHeadless (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxAurora (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxAuroraHeadless (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxNightly (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>FirefoxNightlyHeadless (launcher requires karma-firefox-launcher plugin)</li>
     *     <li>Opera (launcher requires karma-opera-launcher plugin)</li>
     *     <li>Internet Explorer (launcher requires karma-ie-launcher plugin)</li>
     *     <li>Safari (launcher requires karma-safari-launcher plugin)</li>
     * </ul>
     * @description A list of browsers to launch and capture. When Karma starts up, it will also start up each browser
     * which is placed within this setting. Once Karma is shut down, it will shut down these browsers as well.
     * You can capture any browser manually by opening the browser and visiting the URL where
     * the Karma web server is listening (by default it is <code>http://localhost:9876/</code>).
     */
    browsers?: Array<AutomatedBrowsers | string> | undefined;
    /**
     * @default 60000
     * @description Timeout for capturing a browser (in ms).
     * <p>
     * The <code>captureTimeout</code> value represents the maximum boot-up time allowed for a
     * browser to start and connect to Karma. If any browser does not get captured within the timeout, Karma
     * will kill it and try to launch it again and, after three attempts to capture it, Karma will give up.
     * </p>
     */
    captureTimeout?: number | undefined;
    client?: ClientOptions | undefined;
    /**
     * @default true
     * @description Enable or disable colors in the output (reporters and logs).
     */
    colors?: boolean | undefined;
    /**
     * @default 'Infinity'
     * @description How many browsers Karma launches in parallel.
     * Especially on services like SauceLabs and Browserstack, it makes sense only to launch a limited
     * amount of browsers at once, and only start more when those have finished. Using this configuration,
     * you can specify how many browsers should be running at once at any given point in time.
     */
    concurrency?: number | undefined;
    /**
     * When true, this will append the crossorigin attribute to generated script tags,
     * which enables better error reporting for JavaScript files served from a different origin
     * @default true
     */
    crossOriginAttribute?: boolean | undefined;
    /**
     * If null (default), uses karma's own context.html file.
     * @default undefined
     */
    customContextFile?: string | undefined;
    /**
     * If null (default), uses karma's own client_with_context.html file (which is used when client.runInParent set to true).
     * @default undefined
     */
    customClientContextFile?: string | undefined;
    /**
     * If null (default), uses karma's own debug.html file.
     * @default undefined
     */
    customDebugFile?: string | undefined;
    /**
     * Custom HTTP headers that will be set upon serving files by Karma's web server.
     * Custom headers are useful, especially with upcoming browser features like Service Workers.
     * @default undefined
     */
    customHeaders?: CustomHeaders[] | undefined;
    customLaunchers?: { [key: string]: CustomLauncher } | undefined;
    /**
     * When true, this will start the karma server in another process, writing no output to the console.
     * The server can be stopped using the karma stop command.
     * @default false
     */
    detached?: boolean | undefined;
    /**
     * @default []
     * @description List of files/patterns to exclude from loaded files.
     */
    exclude?: string[] | undefined;
    /**
     * Enable or disable failure on running empty test-suites.
     * If disabled the program will return exit-code 0 and display a warning.
     * @default true
     */
    failOnEmptyTestSuite?: boolean | undefined;
    /**
     * Enable or disable failure on tests deliberately disabled, eg fit() or xit() tests in jasmine.
     * Use this to prevent accidental disabling tests needed to validate production.
     * @default true
     */
    failOnSkippedTests?: boolean | undefined;
    /**
     * Enable or disable failure on failing tests.
     * @default true
     */
    failOnFailingTestSuite?: boolean | undefined;
    /**
     * @default []
     * @description List of files/patterns to load in the browser.
     */
    files?: Array<FilePattern | string> | undefined;
    /**
     * Force socket.io to use JSONP polling instead of XHR polling
     * @default false
     */
    forceJSONP?: boolean | undefined;
    /**
     * A new error message line
     * @default undefined
     */
    formatError?: ((msg: string) => string) | undefined;
    /**
     * @default []
     * @description List of test frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
     * Please note just about all frameworks in Karma require an additional plugin/framework library to be installed (via NPM).
     */
    frameworks?: string[] | undefined;
    /**
     * @default 'localhost'
     * @description Hostname to be used when capturing browsers.
     */
    hostname?: string | undefined;
    /**
     * Module used for Karma webserver
     * @default undefined
     */
    httpModule?: string | undefined;
    /**
     * @default {}
     * @description Options object to be used by Node's https class.
     * Object description can be found in the
     * [NodeJS.org API docs](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener)
     */
    httpsServerOptions?: https.ServerOptions | undefined;
    /**
     * Address that the server will listen on. Change to 'localhost' to only listen to the loopback, or '::' to listen on all IPv6 interfaces
     * @default '0.0.0.0' or `LISTEN_ADDR`
     */
    listenAddress?: string | undefined;
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
    logLevel?: string | undefined;
    /**
     * @default [{type: 'console'}]
     * @description A list of log appenders to be used. See the documentation for [log4js] for more information.
     */
    loggers?: { [name: string]: Appender } | Appender[] | undefined;
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
    middleware?: string[] | undefined;
    /**
     * This is the same as middleware except that these middleware will be run before karma's own middleware.
     * @default []
     */
    beforeMiddleware?: string[] | undefined;
    /**
     * @default {}
     * @description Redefine default mapping from file extensions to MIME-type.
     * Set property name to required MIME, provide Array of extensions (without dots) as it's value.
     */
    mime?: { [type: string]: string[] } | undefined;
    /**
     * Socket.io pingTimeout in ms, https://socket.io/docs/server-api/#new-Server-httpServer-options.
     * Very slow networks may need values up to 60000. Larger values delay discovery of deadlock in tests or browser crashes.
     * @default 5000
     */
    pingTimeout?: number | undefined;
    /**
     * @default ['karma-*']
     * @description List of plugins to load. A plugin can be a string (in which case it will be required
     * by Karma) or an inlined plugin - Object.
     * By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
     * Note: Just about all plugins in Karma require an additional library to be installed (via NPM).
     */
    plugins?: Array<PluginName | InlinePluginDef> | undefined;
    /**
     * @default 9876
     * @description The port where the web server will be listening.
     */
    port?: number | undefined;
    /**
     * How long will Karma wait for browser process to terminate before sending a SIGKILL signal
     * @default 2000
     */
    processKillTimeout?: number | undefined;
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
    preprocessors?: { [name: string]: string | string[] } | undefined;
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
    protocol?: string | undefined;
    /**
     * @default {}
     * @description A map of path-proxy pairs
     * The proxy can be specified directly by the target url or path, or with an object to configure more options
     */
    proxies?: PathProxyPairs | undefined;
    /**
     * Called when requesting Proxy
     * @default undefined
     */
    proxyReq?: ((proxyReq: any, req: any, res: any, options: object) => void) | undefined;
    /**
     * Called when respnsing Proxy
     * @default undefined
     */
    proxyRes?: ((proxyRes: any, req: any, res: any) => void) | undefined;
    /**
     * @default true
     * @description Whether or not Karma or any browsers should raise an error when an inavlid SSL certificate is found.
     */
    proxyValidateSSL?: boolean | undefined;
    /**
     * @default 0
     * @description Karma will report all the tests that are slower than given time limit (in ms).
     * This is disabled by default (since the default value is 0).
     */
    reportSlowerThan?: number | undefined;
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
    reporters?: string[] | undefined;
    /**
     * When Karma is watching the files for changes, it will delay a new run
     * until the current run is finished. Enabling this setting
     * will cancel the current run and start a new run immediately when a change is detected.
     */
    restartOnFileChange?: boolean | undefined;
    /**
     * When a browser crashes, karma will try to relaunch. This defines how many times karma should relaunch a browser before giving up.
     * @default 2
     */
    retryLimit?: number | undefined;
    /**
     * @default false
     * @description Continuous Integration mode.
     * If true, Karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending
     * on whether all tests passed or any tests failed.
     */
    singleRun?: boolean | undefined;
    /**
     * @default ['polling', 'websocket']
     * @description An array of allowed transport methods between the browser and testing server. This configuration setting
     * is handed off to [socket.io](http://socket.io/) (which manages the communication
     * between browsers and the testing server).
     */
    transports?: string[] | undefined;
    /**
     * For use when the Karma server needs to be run behind a proxy that changes the base url, etc
     */
    upstreamProxy?: UpstreamProxy | undefined;
    /**
     * @default '/'
     * @description The base url, where Karma runs.
     * All of Karma's urls get prefixed with the urlRoot. This is helpful when using proxies, as
     * sometimes you might want to proxy a url that is already taken by Karma.
     */
    urlRoot?: string | undefined;
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
    args?: string[] | undefined;
    /**
     * @default false
     * @description Set style display none on client elements.
     * If true, Karma does not display the banner and browser list.
     * Useful when using karma on component tests with screenshots
     */
    clientDisplayNone?: boolean | undefined;
    /**
     * @default true
     * @description Run the tests inside an iFrame or a new window
     * If true, Karma runs the tests inside an iFrame. If false, Karma runs the tests in a new window. Some tests may not run in an
     * iFrame and may need a new window to run.
     */
    useIframe?: boolean | undefined;
    /**
     * @default true
     * @description Capture all console output and pipe it to the terminal.
     */
    captureConsole?: boolean | undefined;
    /**
     * @default false
     * @description Run the tests on the same window as the client, without using iframe or a new window
     */
    runInParent?: boolean | undefined;
    /**
     * @default true
     * @description Clear the context window
     * If true, Karma clears the context window upon the completion of running the tests.
     * If false, Karma does not clear the context window upon the completion of running the tests.
     * Setting this to false is useful when embedding a Jasmine Spec Runner Template.
     */
    clearContext?: boolean | undefined;
}

/** type to use when including a file */
export type FilePatternTypes = "css" | "html" | "js" | "module" | "dom";

export interface FilePattern {
    /**
     * The pattern to use for matching.
     */
    pattern: string;
    /**
     * @default true
     * @description If <code>autoWatch</code> is true all files that have set watched to true will be watched
     * for changes.
     */
    watched?: boolean | undefined;
    /**
     * @default true
     * @description Should the files be included in the browser using <script> tag? Use false if you want to
     * load them manually, eg. using Require.js.
     */
    included?: boolean | undefined;
    /**
     * @default true
     * @description Should the files be served by Karma's webserver?
     */
    served?: boolean | undefined;
    /**
     * Choose the type to use when including a file
     * @default 'js'
     * @description  The type determines the mechanism for including the file.
     * The css and html types create link elements; the js and module elements create script elements.
     * The dom type includes the file content in the page, used, for example, to test components combining HTML and JS.
     */
    type?: FilePatternTypes | undefined;
    /**
     * @default false
     * @description Should the files be served from disk on each request by Karma's webserver?
     */
    nocache?: boolean | undefined;
}

export interface CustomLauncher {
    base: string;
    browserName?: string | undefined;
    flags?: string[] | undefined;
    platform?: string | undefined;
}

export interface BrowserConsoleLogOptions {
    /** the desired log-level, where level log always is logged */
    level?: "log" | "error" | "warn" | "info" | "debug" | undefined;
    /**
     * The format is a string where `%b`, `%t`, `%T`, and `%m` are replaced with the browser string,
     * log type in lower-case, log type in uppercase, and log message, respectively.
     * This format will only effect the output file
     */
    format?: string | undefined;
    /** output-path of the output-file */
    path?: string | undefined;
    /** if the log should be written in the terminal, or not */
    terminal?: boolean | undefined;
}

interface ParseOptions {
    /**
     * When true, the return value of the function is a Promise of Config instead of Config.
     * Should be set to true to support async Karma configuration file.
     *
     * @deprecated Will become a default in the next major release.
     */
    promiseConfig?: boolean | undefined;

    /**
     * When true, function will throw error or return rejected Promise instead of calling process.exit(1).
     *
     * @deprecated Will become a default in the next major release.
     */
    throwErrors?: boolean | undefined;
}

export namespace config {
    function parseConfig(configFilePath: string, cliOptions: ConfigOptions): Config;
    function parseConfig(
        configFilePath: string | null | undefined,
        cliOptions: ConfigOptions,
        parseOptions?: ParseOptions & { promiseConfig: true },
    ): Promise<Config>;
    function parseConfig(
        configFilePath: string | null | undefined,
        cliOptions: ConfigOptions,
        parseOptions?: ParseOptions,
    ): Config;
}
