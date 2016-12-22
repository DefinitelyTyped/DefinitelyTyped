// Type definitions for karma v0.13.9
// Project: https://github.com/karma-runner/karma
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bluebird" />
/// <reference types="node" />

// See Karma public API https://karma-runner.github.io/0.13/dev/public-api.html
import Promise = require('bluebird');
import https = require('https');
import log4js = require('log4js');

declare namespace karma {
    interface Karma {
        /**
         * `start` method is deprecated since 0.13. It will be removed in 0.14.
         * Please use
         * <code>
         *     server = new Server(config, [done])
         *     server.start()
         * </code>
         * instead.
         */
        server: DeprecatedServer;
        Server: Server;
        runner: Runner;
        stopper: Stopper;
        launcher: Launcher;
        VERSION: string;
    }

    interface LauncherStatic {
        generateId(): string;
        //TODO: injector should be of type `di.Injector`
        new (emitter: NodeJS.EventEmitter, injector: any): Launcher;
    }

    interface Launcher {
        Launcher: LauncherStatic;
        //TODO: Can this return value ever be typified?
        launch(names: string[], protocol: string, hostname: string, port: number, urlRoot: string): any[];
        kill(id: string, callback: Function): boolean;
        restart(id: string): boolean;
        killAll(callback: Function): void;
        areAllCaptured(): boolean;
        markCaptured(id: string): void;
    }

    interface DeprecatedServer {
        start(options?: any, callback?: ServerCallback): void;
    }

    interface Runner {
        run(options?: ConfigOptions | ConfigFile, callback?: ServerCallback): void;
    }


    interface Stopper {
        /**
          * This function will signal a running server to stop. The equivalent of karma stop.
          */
        stop(options?: ConfigOptions, callback?: ServerCallback): void;
    }


    interface TestResults {
        disconnected: boolean;
        error: boolean;
        exitCode: number;
        failed: number;
        success: number;
    }

    interface Server extends NodeJS.EventEmitter {
        new (options?: ConfigOptions | ConfigFile, callback?: ServerCallback): Server;
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

        on(event: string, listener: Function): this;

        /**
         * Listen to the 'run_complete' event.
         */
        on(event: 'run_complete', listener: (browsers: any, results: TestResults) => void): this;

        ///**
        // * Backward-compatibility with karma-intellij bundled with WebStorm.
        // * Deprecated since version 0.13, to be removed in 0.14
        // */
        //static start(): void;
    }

    interface ServerCallback {
        (exitCode: number): void;
    }

    interface Config {
        set: (config: ConfigOptions) => void;
        LOG_DISABLE: string;
        LOG_ERROR: string;
        LOG_WARN: string;
        LOG_INFO: string;
        LOG_DEBUG: string;
    }

    interface ConfigFile {
        configFile: string;
    }

    interface ConfigOptions {
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
         * @default []
         * @description List of files/patterns to exclude from loaded files.
         */
        exclude?: string[];
        /**
         * @default []
         * @description List of files/patterns to load in the browser.
         */
        files?: (FilePattern | string)[];
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
        loggers?: log4js.AppenderConfigBase[];
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
        preprocessors?: { [name: string]: string | string[] }
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
        proxies?: { [path: string]: string }
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

    interface ClientOptions {
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
    }

    interface FilePattern {
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
}

declare var karma: karma.Karma;

export = karma;
