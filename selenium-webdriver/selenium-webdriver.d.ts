// Type definitions for Selenium WebDriverJS 2.44.0
// Project: https://code.google.com/p/selenium/
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module chrome {
    /**
     * Creates a new WebDriver client for Chrome.
     *
     * @extends {webdriver.WebDriver}
     */
    class Driver extends webdriver.WebDriver {
        /**
         * @param {(webdriver.Capabilities|Options)=} opt_config The configuration
         *     options.
         * @param {remote.DriverService=} opt_service The session to use; will use
         *     the {@link getDefaultService default service} by default.
         * @param {webdriver.promise.ControlFlow=} opt_flow The control flow to use, or
         *     {@code null} to use the currently active flow.
         * @constructor
         */
        constructor(opt_config?: webdriver.Capabilities, opt_service?: any, opt_flow?: webdriver.promise.ControlFlow);
        constructor(opt_config?: Options, opt_service?: any, opt_flow?: webdriver.promise.ControlFlow);
    }

    interface IOptionsValues {
        args: string[];
        binary?: string;
        detach: boolean;
        extensions: string[];
        localState?: any;
        logFile?: string;
        prefs?: any;
    }

    /**
     * Class for managing ChromeDriver specific options.
     */
    class Options {
        /**
         * @constructor
         */
        constructor();

        /**
         * Extracts the ChromeDriver specific options from the given capabilities
         * object.
         * @param {!webdriver.Capabilities} capabilities The capabilities object.
         * @return {!Options} The ChromeDriver options.
         */
        static fromCapabilities(capabilities: webdriver.Capabilities): Options;


        /**
         * Add additional command line arguments to use when launching the Chrome
         * browser.  Each argument may be specified with or without the "--" prefix
         * (e.g. "--foo" and "foo"). Arguments with an associated value should be
         * delimited by an "=": "foo=bar".
         * @param {...(string|!Array.<string>)} var_args The arguments to add.
         * @return {!Options} A self reference.
         */
        addArguments(...var_args: string[]): Options;


        /**
         * Add additional extensions to install when launching Chrome. Each extension
         * should be specified as the path to the packed CRX file, or a Buffer for an
         * extension.
         * @param {...(string|!Buffer|!Array.<(string|!Buffer)>)} var_args The
         *     extensions to add.
         * @return {!Options} A self reference.
         */
        addExtensions(...var_args: any[]): Options;


        /**
         * Sets the path to the Chrome binary to use. On Mac OS X, this path should
         * reference the actual Chrome executable, not just the application binary
         * (e.g. "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
         *
         * The binary path be absolute or relative to the chromedriver server
         * executable, but it must exist on the machine that will launch Chrome.
         *
         * @param {string} path The path to the Chrome binary to use.
         * @return {!Options} A self reference.
         */
        setChromeBinaryPath(path: string): Options;


        /**
         * Sets whether to leave the started Chrome browser running if the controlling
         * ChromeDriver service is killed before {@link webdriver.WebDriver#quit()} is
         * called.
         * @param {boolean} detach Whether to leave the browser running if the
         *     chromedriver service is killed before the session.
         * @return {!Options} A self reference.
         */
        detachDriver(detach: boolean): Options;


        /**
         * Sets the user preferences for Chrome's user profile. See the "Preferences"
         * file in Chrome's user data directory for examples.
         * @param {!Object} prefs Dictionary of user preferences to use.
         * @return {!Options} A self reference.
         */
        setUserPreferences(prefs: any): Options;


        /**
         * Sets the logging preferences for the new session.
         * @param {!webdriver.logging.Preferences} prefs The logging preferences.
         * @return {!Options} A self reference.
         */
        setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;


        /**
         * Sets preferences for the "Local State" file in Chrome's user data
         * directory.
         * @param {!Object} state Dictionary of local state preferences.
         * @return {!Options} A self reference.
         */
        setLocalState(state: any): Options;


        /**
         * Sets the path to Chrome's log file. This path should exist on the machine
         * that will launch Chrome.
         * @param {string} path Path to the log file to use.
         * @return {!Options} A self reference.
         */
        setChromeLogFile(path: string): Options;


        /**
         * Sets the proxy settings for the new session.
         * @param {webdriver.ProxyConfig} proxy The proxy configuration to use.
         * @return {!Options} A self reference.
         */
        setProxy(proxy: webdriver.ProxyConfig): Options;


        /**
         * Converts this options instance to a {@link webdriver.Capabilities} object.
         * @param {webdriver.Capabilities=} opt_capabilities The capabilities to merge
         *     these options into, if any.
         * @return {!webdriver.Capabilities} The capabilities.
         */
        toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities;


        /**
         * Converts this instance to its JSON wire protocol representation. Note this
         * function is an implementation not intended for general use.
         * @return {{args: !Array.<string>,
         *           binary: (string|undefined),
         *           detach: boolean,
         *           extensions: !Array.<string>,
         *           localState: (Object|undefined),
         *           logFile: (string|undefined),
         *           prefs: (Object|undefined)}} The JSON wire protocol representation
         *     of this instance.
         */
        toJSON(): IOptionsValues;
    }

    /**
     * Creates {@link remote.DriverService} instances that manage a ChromeDriver
     * server.
     */
    class ServiceBuilder {
        /**
         * @param {string=} opt_exe Path to the server executable to use. If omitted,
         *     the builder will attempt to locate the chromedriver on the current
         *     PATH.
         * @throws {Error} If provided executable does not exist, or the chromedriver
         *     cannot be found on the PATH.
         * @constructor
         */
        constructor(opt_exe?: string);

        /**
         * Sets the port to start the ChromeDriver on.
         * @param {number} port The port to use, or 0 for any free port.
         * @return {!ServiceBuilder} A self reference.
         * @throws {Error} If the port is invalid.
         */
        usingPort(port: number): ServiceBuilder;


        /**
         * Sets the path of the log file the driver should log to. If a log file is
         * not specified, the driver will log to stderr.
         * @param {string} path Path of the log file to use.
         * @return {!ServiceBuilder} A self reference.
         */
        loggingTo(path: string): ServiceBuilder;


        /**
         * Enables verbose logging.
         * @return {!ServiceBuilder} A self reference.
         */
        enableVerboseLogging(): ServiceBuilder;


        /**
         * Sets the number of threads the driver should use to manage HTTP requests.
         * By default, the driver will use 4 threads.
         * @param {number} n The number of threads to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setNumHttpThreads(n: number): ServiceBuilder;


        /**
         * Sets the base path for WebDriver REST commands (e.g. "/wd/hub").
         * By default, the driver will accept commands relative to "/".
         * @param {string} path The base path to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setUrlBasePath(path: string): ServiceBuilder;


        /**
         * Defines the stdio configuration for the driver service. See
         * {@code child_process.spawn} for more information.
         * @param {(string|!Array.<string|number|!Stream|null|undefined>)} config The
         *     configuration to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setStdio(config: string): ServiceBuilder;
        setStdio(config: any[]): ServiceBuilder;


        /**
         * Defines the environment to start the server under. This settings will be
         * inherited by every browser session started by the server.
         * @param {!Object.<string, string>} env The environment to use.
         * @return {!ServiceBuilder} A self reference.
         */
        withEnvironment(env: { [key: string]: string }): ServiceBuilder;


        /**
         * Creates a new DriverService using this instance's current configuration.
         * @return {remote.DriverService} A new driver service using this instance's
         *     current configuration.
         * @throws {Error} If the driver exectuable was not specified and a default
         *     could not be found on the current PATH.
         */
        build(): any;
    }

    /**
     * Returns the default ChromeDriver service. If such a service has not been
     * configured, one will be constructed using the default configuration for
     * a ChromeDriver executable found on the system PATH.
     * @return {!remote.DriverService} The default ChromeDriver service.
     */
    function getDefaultService(): any;

    /**
     * Sets the default service to use for new ChromeDriver instances.
     * @param {!remote.DriverService} service The service to use.
     * @throws {Error} If the default service is currently running.
     */
    function setDefaultService(service: any): void;
}

declare module firefox {
    /**
     * Manages a Firefox subprocess configured for use with WebDriver.
     */
    class Binary {
        /**
         * @param {string=} opt_exe Path to the Firefox binary to use. If not
         *     specified, will attempt to locate Firefox on the current system.
         * @constructor
         */
        constructor(opt_exe?: string);

        /**
         * Add arguments to the command line used to start Firefox.
         * @param {...(string|!Array.<string>)} var_args Either the arguments to add as
         *     varargs, or the arguments as an array.
         */
        addArguments(...var_args: string[]): void;


        /**
         * Launches Firefox and eturns a promise that will be fulfilled when the process
         * terminates.
         * @param {string} profile Path to the profile directory to use.
         * @return {!promise.Promise.<!exec.Result>} A promise for the process result.
         * @throws {Error} If this instance has already been started.
         */
        launch(profile: string): webdriver.promise.Promise<any>;


        /**
         * Kills the managed Firefox process.
         * @return {!promise.Promise} A promise for when the process has terminated.
         */
        kill(): webdriver.promise.Promise<void>;
    }

    /**
     * A WebDriver client for Firefox.
     *
     * @extends {webdriver.WebDriver}
     */
    class Driver extends webdriver.WebDriver {
        /**
         * @param {(Options|webdriver.Capabilities|Object)=} opt_config The
         *    configuration options for this driver, specified as either an
         *    {@link Options} or {@link webdriver.Capabilities}, or as a raw hash
         *    object.
         * @param {webdriver.promise.ControlFlow=} opt_flow The flow to
         *     schedule commands through. Defaults to the active flow object.
         * @constructor
         */
        constructor(opt_config?: webdriver.Capabilities, opt_flow?: webdriver.promise.ControlFlow);
        constructor(opt_config?: any, opt_flow?: webdriver.promise.ControlFlow);
    }

    /**
     * Configuration options for the FirefoxDriver.
     */
    class Options {
        /**
         * @constructor
         */
        constructor();

        /**
         * Sets the profile to use. The profile may be specified as a
         * {@link Profile} object or as the path to an existing Firefox profile to use
         * as a template.
         *
         * @param {(string|!Profile)} profile The profile to use.
         * @return {!Options} A self reference.
         */
        setProfile(profile: string): Options;
        setProfile(profile: Profile): Options;


        /**
         * Sets the binary to use. The binary may be specified as the path to a Firefox
         * executable, or as a {@link Binary} object.
         *
         * @param {(string|!Binary)} binary The binary to use.
         * @return {!Options} A self reference.
         */
        setBinary(binary: string): Options;
        setBinary(binary: Binary): Options;


        /**
         * Sets the logging preferences for the new session.
         * @param {webdriver.logging.Preferences} prefs The logging preferences.
         * @return {!Options} A self reference.
         */
        setLoggingPreferences(prefs: webdriver.logging.Preferences): Options;


        /**
         * Sets the proxy to use.
         *
         * @param {webdriver.ProxyConfig} proxy The proxy configuration to use.
         * @return {!Options} A self reference.
         */
        setProxy(proxy: webdriver.ProxyConfig): Options;


        /**
         * Converts these options to a {@link webdriver.Capabilities} instance.
         *
         * @return {!webdriver.Capabilities} A new capabilities object.
         */
        toCapabilities(opt_remote?: any): webdriver.Capabilities;
    }

    /**
     * Models a Firefox proifle directory for use with the FirefoxDriver. The
     * {@code Proifle} directory uses an in-memory model until {@link #writeToDisk}
     * is called.
     */
    class Profile {
        /**
         * @param {string=} opt_dir Path to an existing Firefox profile directory to
         *     use a template for this profile. If not specified, a blank profile will
         *     be used.
         * @constructor
         */
        constructor(opt_dir?: string);

        /**
         * Registers an extension to be included with this profile.
         * @param {string} extension Path to the extension to include, as either an
         *     unpacked extension directory or the path to a xpi file.
         */
        addExtension(extension: string): void;


        /**
         * Sets a desired preference for this profile.
         * @param {string} key The preference key.
         * @param {(string|number|boolean)} value The preference value.
         * @throws {Error} If attempting to set a frozen preference.
         */
        setPreference(key: string, value: string): void;
        setPreference(key: string, value: number): void;
        setPreference(key: string, value: boolean): void;


        /**
         * Returns the currently configured value of a profile preference. This does
         * not include any defaults defined in the profile's template directory user.js
         * file (if a template were specified on construction).
         * @param {string} key The desired preference.
         * @return {(string|number|boolean|undefined)} The current value of the
         *     requested preference.
         */
        getPreference(key: string): any;


        /**
         * @return {number} The port this profile is currently configured to use, or
         *     0 if the port will be selected at random when the profile is written
         *     to disk.
         */
        getPort(): number;


        /**
         * Sets the port to use for the WebDriver extension loaded by this profile.
         * @param {number} port The desired port, or 0 to use any free port.
         */
        setPort(port: number): void;


        /**
         * @return {boolean} Whether the FirefoxDriver is configured to automatically
         *     accept untrusted SSL certificates.
         */
        acceptUntrustedCerts(): boolean;


        /**
         * Sets whether the FirefoxDriver should automatically accept untrusted SSL
         * certificates.
         * @param {boolean} value .
         */
        setAcceptUntrustedCerts(value: boolean): void;


        /**
         * Sets whether to assume untrusted certificates come from untrusted issuers.
         * @param {boolean} value .
         */
        setAssumeUntrustedCertIssuer(value: boolean): void;


        /**
         * @return {boolean} Whether to assume untrusted certs come from untrusted
         *     issuers.
         */
        assumeUntrustedCertIssuer(): boolean;


        /**
         * Sets whether to use native events with this profile.
         * @param {boolean} enabled .
         */
        setNativeEventsEnabled(enabled: boolean): void;


        /**
         * Returns whether native events are enabled in this profile.
         * @return {boolean} .
         */
        nativeEventsEnabled(): boolean;


        /**
         * Writes this profile to disk.
         * @param {boolean=} opt_excludeWebDriverExt Whether to exclude the WebDriver
         *     extension from the generated profile. Used to reduce the size of an
         *     {@link #encode() encoded profile} since the server will always install
         *     the extension itself.
         * @return {!promise.Promise.<string>} A promise for the path to the new
         *     profile directory.
         */
        writeToDisk(opt_excludeWebDriverExt?: boolean): webdriver.promise.Promise<string>;


        /**
         * Encodes this profile as a zipped, base64 encoded directory.
         * @return {!promise.Promise.<string>} A promise for the encoded profile.
         */
        encode(): webdriver.promise.Promise<string>;
    }
}

declare module executors {
    /**
     * Creates a command executor that uses WebDriver's JSON wire protocol.
     * @param url The server's URL, or a promise that will resolve to that URL.
     * @returns {!webdriver.CommandExecutor} The new command executor.
     */
    function createExecutor(url: string): webdriver.CommandExecutor;
    function createExecutor(url: webdriver.promise.Promise<string>): webdriver.CommandExecutor;
}

declare module webdriver {

    module error {
        interface IErrorCode {
            SUCCESS: number;

            NO_SUCH_ELEMENT: number;
            NO_SUCH_FRAME: number;
            UNKNOWN_COMMAND: number;
            UNSUPPORTED_OPERATION: number;  // Alias for UNKNOWN_COMMAND.
            STALE_ELEMENT_REFERENCE: number;
            ELEMENT_NOT_VISIBLE: number;
            INVALID_ELEMENT_STATE: number;
            UNKNOWN_ERROR: number;
            ELEMENT_NOT_SELECTABLE: number;
            JAVASCRIPT_ERROR: number;
            XPATH_LOOKUP_ERROR: number;
            TIMEOUT: number;
            NO_SUCH_WINDOW: number;
            INVALID_COOKIE_DOMAIN: number;
            UNABLE_TO_SET_COOKIE: number;
            MODAL_DIALOG_OPENED: number;
            UNEXPECTED_ALERT_OPEN: number;
            NO_SUCH_ALERT: number;
            NO_MODAL_DIALOG_OPEN: number;
            SCRIPT_TIMEOUT: number;
            INVALID_ELEMENT_COORDINATES: number;
            IME_NOT_AVAILABLE: number;
            IME_ENGINE_ACTIVATION_FAILED: number;
            INVALID_SELECTOR_ERROR: number;
            SESSION_NOT_CREATED: number;
            MOVE_TARGET_OUT_OF_BOUNDS: number;
            SQL_DATABASE_ERROR: number;
            INVALID_XPATH_SELECTOR: number;
            INVALID_XPATH_SELECTOR_RETURN_TYPE: number;
            // The following error codes are derived straight from HTTP return codes.
            METHOD_NOT_ALLOWED: number;
        }

        var ErrorCode: IErrorCode;

        /**
         * Error extension that includes error status codes from the WebDriver wire
         * protocol:
         * http://code.google.com/p/selenium/wiki/JsonWireProtocol#Response_Status_Codes
         *
         * @extends {Error}
         */
        class Error {

            //region Constructors

            /**
             * @param {!bot.ErrorCode} code The error's status code.
             * @param {string=} opt_message Optional error message.
             * @constructor
             */
            constructor(code: number, opt_message?: string);

            //endregion

            //region Static Properties

            /**
             * Status strings enumerated in the W3C WebDriver working draft.
             * @enum {string}
             * @see http://www.w3.org/TR/webdriver/#status-codes
             */
            static State: {
                ELEMENT_NOT_SELECTABLE: string;
                ELEMENT_NOT_VISIBLE: string;
                IME_ENGINE_ACTIVATION_FAILED: string;
                IME_NOT_AVAILABLE: string;
                INVALID_COOKIE_DOMAIN: string;
                INVALID_ELEMENT_COORDINATES: string;
                INVALID_ELEMENT_STATE: string;
                INVALID_SELECTOR: string;
                JAVASCRIPT_ERROR: string;
                MOVE_TARGET_OUT_OF_BOUNDS: string;
                NO_SUCH_ALERT: string;
                NO_SUCH_DOM: string;
                NO_SUCH_ELEMENT: string;
                NO_SUCH_FRAME: string;
                NO_SUCH_WINDOW: string;
                SCRIPT_TIMEOUT: string;
                SESSION_NOT_CREATED: string;
                STALE_ELEMENT_REFERENCE: string;
                SUCCESS: string;
                TIMEOUT: string;
                UNABLE_TO_SET_COOKIE: string;
                UNEXPECTED_ALERT_OPEN: string;
                UNKNOWN_COMMAND: string;
                UNKNOWN_ERROR: string;
                UNSUPPORTED_OPERATION: string;
            }

            //endregion

            //region Properties

            /**
             * This error's status code.
             * @type {!bot.ErrorCode}
             */
            code: number;

            /** @type {string} */
            state: string;

            /** @override */
            message: string;

            /** @override */
            name: string;

            /** @override */
            stack: string;

            /**
             * Flag used for duck-typing when this code is embedded in a Firefox extension.
             * This is required since an Error thrown in one component and then reported
             * to another will fail instanceof checks in the second component.
             * @type {boolean}
             */
            isAutomationError: boolean;

            //endregion

            //region Methods

            /** @return {string} The string representation of this error. */
            toString(): string;

            //endregion
        }
    }

    module logging {

        /**
         * A hash describing log preferences.
         * @typedef {Object.<webdriver.logging.Type, webdriver.logging.LevelName>}
         */
        class Preferences {
            setLevel(type: string, level: ILevel): void;
            toJSON(): { [key: string]: string };
        }

        interface IType {
            /** Logs originating from the browser. */
            BROWSER: string;
            /** Logs from a WebDriver client. */
            CLIENT: string;
            /** Logs from a WebDriver implementation. */
            DRIVER: string;
            /** Logs related to performance. */
            PERFORMANCE: string;
            /** Logs from the remote server. */
            SERVER: string;
        }

        /**
         * Common log types.
         * @enum {string}
         */
        var Type: IType;

        /**
         * Logging levels.
         * @enum {{value: number, name: webdriver.logging.LevelName}}
         */
        interface ILevel {
            value: number;
            name: string;
        }

        interface ILevelValues {
            ALL: ILevel;
            DEBUG: ILevel;
            INFO: ILevel;
            WARNING: ILevel;
            SEVERE: ILevel;
            OFF: ILevel;
        }

        var Level: ILevelValues;

        /**
         * Converts a level name or value to a {@link webdriver.logging.Level} value.
         * If the name/value is not recognized, {@link webdriver.logging.Level.ALL}
         * will be returned.
         * @param {(number|string)} nameOrValue The log level name, or value, to
         *     convert .
         * @return {!webdriver.logging.Level} The converted level.
         */
        function getLevel(nameOrValue: string): ILevel;
        function getLevel(nameOrValue: number): ILevel;

        interface IEntryJSON {
            level: string;
            message: string;
            timestamp: number;
            type: string;
        }

        /**
         * A single log entry.
         */
        class Entry {

            //region Constructors

            /**
             * @param {(!webdriver.logging.Level|string)} level The entry level.
             * @param {string} message The log message.
             * @param {number=} opt_timestamp The time this entry was generated, in
             *     milliseconds since 0:00:00, January 1, 1970 UTC. If omitted, the
             *     current time will be used.
             * @param {string=} opt_type The log type, if known.
             * @constructor
             */
            constructor(level: ILevel, message: string, opt_timestamp?:number, opt_type?:string);
            constructor(level: string, message: string, opt_timestamp?:number, opt_type?:string);

            //endregion

            //region Public Properties

            /** @type {!webdriver.logging.Level} */
            level: ILevel;

            /** @type {string} */
            message: string;

            /** @type {number} */
            timestamp: number;

            /** @type {string} */
            type: string;

            //endregion

            //region Static Methods

            /**
             * Converts a {@link goog.debug.LogRecord} into a
             * {@link webdriver.logging.Entry}.
             * @param {!goog.debug.LogRecord} logRecord The record to convert.
             * @param {string=} opt_type The log type.
             * @return {!webdriver.logging.Entry} The converted entry.
             */
            static fromClosureLogRecord(logRecord: any, opt_type?:string): Entry;

            //endregion

            //region Methods

            /**
             * @return {{level: string, message: string, timestamp: number,
             *           type: string}} The JSON representation of this entry.
             */
            toJSON(): IEntryJSON;

            //endregion
        }
    }

    module promise {
        //region Functions

        /**
         * Given an array of promises, will return a promise that will be fulfilled
         * with the fulfillment values of the input array's values. If any of the
         * input array's promises are rejected, the returned promise will be rejected
         * with the same reason.
         *
         * @param {!Array.<(T|!webdriver.promise.Promise.<T>)>} arr An array of
         *     promises to wait on.
         * @return {!webdriver.promise.Promise.<!Array.<T>>} A promise that is
         *     fulfilled with an array containing the fulfilled values of the
         *     input array, or rejected with the same reason as the first
         *     rejected value.
         * @template T
         */
        function all(arr: Promise<any>[]): Promise<any[]>;

        /**
         * Invokes the appropriate callback function as soon as a promised
         * {@code value} is resolved. This function is similar to
         * {@link webdriver.promise.when}, except it does not return a new promise.
         * @param {*} value The value to observe.
         * @param {Function} callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         */
        function asap(value: any, callback: Function, opt_errback?: Function): void;

        /**
         * @return {!webdriver.promise.ControlFlow} The currently active control flow.
         */
        function controlFlow(): ControlFlow;

        /**
         * Creates a new control flow. The provided callback will be invoked as the
         * first task within the new flow, with the flow as its sole argument. Returns
         * a promise that resolves to the callback result.
         * @param {function(!webdriver.promise.ControlFlow)} callback The entry point
         *     to the newly created flow.
         * @return {!webdriver.promise.Promise} A promise that resolves to the callback
         *     result.
         */
        function createFlow<R>(callback: (flow: ControlFlow) => R): Promise<R>;

        /**
         * Determines whether a {@code value} should be treated as a promise.
         * Any object whose "then" property is a function will be considered a promise.
         *
         * @param {*} value The value to test.
         * @return {boolean} Whether the value is a promise.
         */
        function isPromise(value: any): boolean;

        /**
         * Tests is a function is a generator.
         * @param {!Function} fn The function to test.
         * @return {boolean} Whether the function is a generator.
         */
        function isGenerator(fn: Function): boolean;

        /**
         * Creates a promise that will be resolved at a set time in the future.
         * @param {number} ms The amount of time, in milliseconds, to wait before
         *     resolving the promise.
         * @return {!webdriver.promise.Promise} The promise.
         */
        function delayed(ms: number): Promise<void>;

        /**
         * Calls a function for each element in an array, and if the function returns
         * true adds the element to a new array.
         *
         * <p>If the return value of the filter function is a promise, this function
         * will wait for it to be fulfilled before determining whether to insert the
         * element into the new array.
         *
         * <p>If the filter function throws or returns a rejected promise, the promise
         * returned by this function will be rejected with the same reason. Only the
         * first failure will be reported; all subsequent errors will be silently
         * ignored.
         *
         * @param {!(Array.<TYPE>|webdriver.promise.Promise.<!Array.<TYPE>>)} arr The
         *     array to iterator over, or a promise that will resolve to said array.
         * @param {function(this: SELF, TYPE, number, !Array.<TYPE>): (
         *             boolean|webdriver.promise.Promise.<boolean>)} fn The function
         *     to call for each element in the array.
         * @param {SELF=} opt_self The object to be used as the value of 'this' within
         *     {@code fn}.
         * @template TYPE, SELF
         */
        function filter<T>(arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any): Promise<T[]>;
        function filter<T>(arr: Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any): Promise<T[]>

        /**
         * Creates a new deferred object.
         * @return {!webdriver.promise.Deferred} The new deferred object.
         */
        function defer<T>(): Deferred<T>;

        /**
         * Creates a promise that has been resolved with the given value.
         * @param {*=} opt_value The resolved value.
         * @return {!webdriver.promise.Promise} The resolved promise.
         */
        function fulfilled<T>(opt_value?: T): Promise<T>;

        /**
         * Calls a function for each element in an array and inserts the result into a
         * new array, which is used as the fulfillment value of the promise returned
         * by this function.
         *
         * <p>If the return value of the mapping function is a promise, this function
         * will wait for it to be fulfilled before inserting it into the new array.
         *
         * <p>If the mapping function throws or returns a rejected promise, the
         * promise returned by this function will be rejected with the same reason.
         * Only the first failure will be reported; all subsequent errors will be
         * silently ignored.
         *
         * @param {!(Array.<TYPE>|webdriver.promise.Promise.<!Array.<TYPE>>)} arr The
         *     array to iterator over, or a promise that will resolve to said array.
         * @param {function(this: SELF, TYPE, number, !Array.<TYPE>): ?} fn The
         *     function to call for each element in the array. This function should
         *     expect three arguments (the element, the index, and the array itself.
         * @param {SELF=} opt_self The object to be used as the value of 'this' within
         *     {@code fn}.
         * @template TYPE, SELF
         */
        function map<T>(arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any): Promise<T[]>
        function map<T>(arr: Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any): Promise<T[]>

        /**
         * Creates a promise that has been rejected with the given reason.
         * @param {*=} opt_reason The rejection reason; may be any value, but is
         *     usually an Error or a string.
         * @return {!webdriver.promise.Promise} The rejected promise.
         */
        function rejected(opt_reason?: any): Promise<void>;

        /**
         * Wraps a function that is assumed to be a node-style callback as its final
         * argument. This callback takes two arguments: an error value (which will be
         * null if the call succeeded), and the success value as the second argument.
         * If the call fails, the returned promise will be rejected, otherwise it will
         * be resolved with the result.
         * @param {!Function} fn The function to wrap.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     result of the provided function's callback.
         */
        function checkedNodeCall<T>(fn: Function, ...var_args: any[]): Promise<T>;

        /**
         * Consumes a {@code GeneratorFunction}. Each time the generator yields a
         * promise, this function will wait for it to be fulfilled before feeding the
         * fulfilled value back into {@code next}. Likewise, if a yielded promise is
         * rejected, the rejection error will be passed to {@code throw}.
         *
         * <p>Example 1: the Fibonacci Sequence.
         * <pre><code>
         * webdriver.promise.consume(function* fibonacci() {
         *   var n1 = 1, n2 = 1;
         *   for (var i = 0; i < 4; ++i) {
         *     var tmp = yield n1 + n2;
         *     n1 = n2;
         *     n2 = tmp;
         *   }
         *   return n1 + n2;
         * }).then(function(result) {
         *   console.log(result);  // 13
         * });
         * </code></pre>
         *
         * <p>Example 2: a generator that throws.
         * <pre><code>
         * webdriver.promise.consume(function* () {
         *   yield webdriver.promise.delayed(250).then(function() {
         *     throw Error('boom');
         *   });
         * }).thenCatch(function(e) {
         *   console.log(e.toString());  // Error: boom
         * });
         * </code></pre>
         *
         * @param {!Function} generatorFn The generator function to execute.
         * @param {Object=} opt_self The object to use as "this" when invoking the
         *     initial generator.
         * @param {...*} var_args Any arguments to pass to the initial generator.
         * @return {!webdriver.promise.Promise.<?>} A promise that will resolve to the
         *     generator's final result.
         * @throws {TypeError} If the given function is not a generator.
         */
        function consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): Promise<T>;

        /**
         * Registers an observer on a promised {@code value}, returning a new promise
         * that will be resolved when the value is. If {@code value} is not a promise,
         * then the return promise will be immediately resolved.
         * @param {*} value The value to observe.
         * @param {Function=} opt_callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         * @return {!webdriver.promise.Promise} A new promise.
         */
        function when<T,R>(value: T, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): Promise<R>;
        function when<T,R>(value: Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): Promise<R>;

        /**
         * Returns a promise that will be resolved with the input value in a
         * fully-resolved state. If the value is an array, each element will be fully
         * resolved. Likewise, if the value is an object, all keys will be fully
         * resolved. In both cases, all nested arrays and objects will also be
         * fully resolved.  All fields are resolved in place; the returned promise will
         * resolve on {@code value} and not a copy.
         *
         * Warning: This function makes no checks against objects that contain
         * cyclical references:
         *
         *   var value = {};
         *   value['self'] = value;
         *   webdriver.promise.fullyResolved(value);  // Stack overflow.
         *
         * @param {*} value The value to fully resolve.
         * @return {!webdriver.promise.Promise} A promise for a fully resolved version
         *     of the input value.
         */
        function fullyResolved<T>(value: any): Promise<T>;

        /**
         * Changes the default flow to use when no others are active.
         * @param {!webdriver.promise.ControlFlow} flow The new default flow.
         * @throws {Error} If the default flow is not currently active.
         */
        function setDefaultFlow(flow: ControlFlow): void;

        //endregion

        /**
         * Error used when the computation of a promise is cancelled.
         *
         * @extends {goog.debug.Error}
         * @final
         */
        class CancellationError {
            /**
             * @param {string=} opt_msg The cancellation message.
             * @constructor
             */
            constructor(opt_msg?: string);

            name: string;
            message: string;
        }

        interface IThenable<T> {
            /**
             * Cancels the computation of this promise's value, rejecting the promise in the
             * process. This method is a no-op if the promise has alreayd been resolved.
             *
             * @param {string=} opt_reason The reason this promise is being cancelled.
             */
            cancel(opt_reason?: string): void;


            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;


            /**
             * Registers listeners for when this instance is resolved.
             *
             * @param opt_callback The
             *     function to call if this promise is successfully resolved. The function
             *     should expect a single argument: the promise's resolved value.
             * @param opt_errback The
             *     function to call if this promise is rejected. The function should expect
             *     a single argument: the rejection reason.
             * @return A new promise which will be
             *     resolved with the result of the invoked callback.
             */
            then<R>(opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any): Promise<R>;

            /**
             * Registers listeners for when this instance is resolved.
             *
             * @param opt_callback The
             *     function to call if this promise is successfully resolved. The function
             *     should expect a single argument: the promise's resolved value.
             * @param opt_errback The
             *     function to call if this promise is rejected. The function should expect
             *     a single argument: the rejection reason.
             * @return A new promise which will be
             *     resolved with the result of the invoked callback.
             */
            then<R>(opt_callback?: (value: T) => R, opt_errback?: (error: any) => any): Promise<R>;


            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } catch (ex) {
             *     console.error(ex);
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenCatch(function(ex) {
             *     console.error(ex);
             *   });
             * </code></pre>
             *
             * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
             *     to call if this promise is rejected. The function should expect a single
             *     argument: the rejection reason.
             * @return {!webdriver.promise.Promise.<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            thenCatch<R>(errback: (error: any) => any): Promise<R>;


            /**
             * Registers a listener to invoke when this promise is resolved, regardless
             * of whether the promise's value was successfully computed. This function
             * is synonymous with the {@code finally} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } finally {
             *     cleanUp();
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenFinally(cleanUp);
             * </code></pre>
             *
             * <b>Note:</b> similar to the {@code finally} clause, if the registered
             * callback returns a rejected promise or throws an error, it will silently
             * replace the rejection error (if any) from this promise:
             * <pre><code>
             *   try {
             *     throw Error('one');
             *   } finally {
             *     throw Error('two');  // Hides Error: one
             *   }
             *
             *   webdriver.promise.rejected(Error('one'))
             *       .thenFinally(function() {
             *         throw Error('two');  // Hides Error: one
             *       });
             * </code></pre>
             *
             *
             * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
             *     to call when this promise is resolved.
             * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
             *     with the callback result.
             * @template R
             */
            thenFinally<R>(callback: () => any): Promise<R>;
        }

        /**
        * Thenable is a promise-like object with a {@code then} method which may be
        * used to schedule callbacks on a promised value.
        *
        * @interface
        * @template T
        */
        class Thenable<T> implements IThenable<T> {
            /**
             * Cancels the computation of this promise's value, rejecting the promise in the
             * process. This method is a no-op if the promise has alreayd been resolved.
             *
             * @param {string=} opt_reason The reason this promise is being cancelled.
             */
            cancel(opt_reason?: string): void;


            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;


            /**
             * Registers listeners for when this instance is resolved.
             *
             * @param opt_callback The
             *     function to call if this promise is successfully resolved. The function
             *     should expect a single argument: the promise's resolved value.
             * @param opt_errback The
             *     function to call if this promise is rejected. The function should expect
             *     a single argument: the rejection reason.
             * @return A new promise which will be
             *     resolved with the result of the invoked callback.
             */
            then<R>(opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any): Promise<R>;

            /**
             * Registers listeners for when this instance is resolved.
             *
             * @param opt_callback The
             *     function to call if this promise is successfully resolved. The function
             *     should expect a single argument: the promise's resolved value.
             * @param opt_errback The
             *     function to call if this promise is rejected. The function should expect
             *     a single argument: the rejection reason.
             * @return A new promise which will be
             *     resolved with the result of the invoked callback.
             */
            then<R>(opt_callback?: (value: T) => R, opt_errback?: (error: any) => any): Promise<R>;


            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } catch (ex) {
             *     console.error(ex);
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenCatch(function(ex) {
             *     console.error(ex);
             *   });
             * </code></pre>
             *
             * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
             *     to call if this promise is rejected. The function should expect a single
             *     argument: the rejection reason.
             * @return {!webdriver.promise.Promise.<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            thenCatch<R>(errback: (error: any) => any): Promise<R>;


            /**
             * Registers a listener to invoke when this promise is resolved, regardless
             * of whether the promise's value was successfully computed. This function
             * is synonymous with the {@code finally} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } finally {
             *     cleanUp();
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenFinally(cleanUp);
             * </code></pre>
             *
             * <b>Note:</b> similar to the {@code finally} clause, if the registered
             * callback returns a rejected promise or throws an error, it will silently
             * replace the rejection error (if any) from this promise:
             * <pre><code>
             *   try {
             *     throw Error('one');
             *   } finally {
             *     throw Error('two');  // Hides Error: one
             *   }
             *
             *   webdriver.promise.rejected(Error('one'))
             *       .thenFinally(function() {
             *         throw Error('two');  // Hides Error: one
             *       });
             * </code></pre>
             *
             *
             * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
             *     to call when this promise is resolved.
             * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
             *     with the callback result.
             * @template R
             */
            thenFinally<R>(callback: () => any): Promise<R>;

            /**
             * Adds a property to a class prototype to allow runtime checks of whether
             * instances of that class implement the Thenable interface. This function will
             * also ensure the prototype's {@code then} function is exported from compiled
             * code.
             * @param {function(new: webdriver.promise.Thenable, ...[?])} ctor The
             *     constructor whose prototype to modify.
             */
            static addImplementation(ctor: Function): void;


            /**
             * Checks if an object has been tagged for implementing the Thenable interface
             * as defined by {@link webdriver.promise.Thenable.addImplementation}.
             * @param {*} object The object to test.
             * @return {boolean} Whether the object is an implementation of the Thenable
             *     interface.
             */
            static isImplementation(object: any): boolean;
        }

        /**
         * Represents the eventual value of a completed operation. Each promise may be
         * in one of three states: pending, resolved, or rejected. Each promise starts
         * in the pending state and may make a single transition to either a
         * fulfilled or failed state.
         *
         * <p/>This class is based on the Promise/A proposal from CommonJS. Additional
         * functions are provided for API compatibility with Dojo Deferred objects.
         *
         * @see http://wiki.commonjs.org/wiki/Promises/A
         */
        class Promise<T> implements IThenable<T> {

            //region Constructors

            /**
            * @constructor
            * @see http://wiki.commonjs.org/wiki/Promises/A
            */
            constructor();

            //endregion

            //region Methods

            /**
             * Cancels the computation of this promise's value, rejecting the promise in the
             * process.
             * @param {*} reason The reason this promise is being cancelled. If not an
             *     {@code Error}, one will be created using the value's string
             *     representation.
             */
            cancel(reason: any): void;

            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;

            /**
             * Registers listeners for when this instance is resolved. This function most
             * overridden by subtypes.
             *
             * @param opt_callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param opt_errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @return A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            then<R>(opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any): Promise<R>;

            /**
             * Registers listeners for when this instance is resolved. This function most
             * overridden by subtypes.
             *
             * @param opt_callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param opt_errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @return A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            then<R>(opt_callback?: (value: T) => R, opt_errback?: (error: any) => any): Promise<R>;


            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } catch (ex) {
             *     console.error(ex);
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenCatch(function(ex) {
             *     console.error(ex);
             *   });
             * </code></pre>
             *
             * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
             *     to call if this promise is rejected. The function should expect a single
             *     argument: the rejection reason.
             * @return {!webdriver.promise.Promise.<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            thenCatch<R>(errback: (error: any) => any): Promise<R>;


            /**
             * Registers a listener to invoke when this promise is resolved, regardless
             * of whether the promise's value was successfully computed. This function
             * is synonymous with the {@code finally} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } finally {
             *     cleanUp();
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenFinally(cleanUp);
             * </code></pre>
             *
             * <b>Note:</b> similar to the {@code finally} clause, if the registered
             * callback returns a rejected promise or throws an error, it will silently
             * replace the rejection error (if any) from this promise:
             * <pre><code>
             *   try {
             *     throw Error('one');
             *   } finally {
             *     throw Error('two');  // Hides Error: one
             *   }
             *
             *   webdriver.promise.rejected(Error('one'))
             *       .thenFinally(function() {
             *         throw Error('two');  // Hides Error: one
             *       });
             * </code></pre>
             *
             *
             * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
             *     to call when this promise is resolved.
             * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
             *     with the callback result.
             * @template R
             */
            thenFinally<R>(callback: () => any): Promise<R>;

            //endregion
        }

        /**
         * Represents a value that will be resolved at some point in the future. This
         * class represents the protected "producer" half of a Promise - each Deferred
         * has a {@code promise} property that may be returned to consumers for
         * registering callbacks, reserving the ability to resolve the deferred to the
         * producer.
         *
         * <p>If this Deferred is rejected and there are no listeners registered before
         * the next turn of the event loop, the rejection will be passed to the
         * {@link webdriver.promise.ControlFlow} as an unhandled failure.
         *
         * <p>If this Deferred is cancelled, the cancellation reason will be forward to
         * the Deferred's canceller function (if provided). The canceller may return a
         * truth-y value to override the reason provided for rejection.
         *
         * @extends {webdriver.promise.Promise}
         */
        class Deferred<T> extends Promise<T> {
            //region Constructors

            /**
             *
             * @param {webdriver.promise.ControlFlow=} opt_flow The control flow
             *     this instance was created under. This should only be provided during
             *     unit tests.
             * @constructor
             */
            constructor(opt_flow?: ControlFlow);

            //endregion

            static State_: {
                BLOCKED: number;
                PENDING: number;
                REJECTED: number;
                RESOLVED: number;
            }

            //region Properties

            /**
             * The consumer promise for this instance. Provides protected access to the
             * callback registering functions.
             * @type {!webdriver.promise.Promise}
             */
            promise: Promise<T>;

            //endregion

            //region Methods

            /**
             * Rejects this promise. If the error is itself a promise, this instance will
             * be chained to it and be rejected with the error's resolved value.
             * @param {*=} opt_error The rejection reason, typically either a
             *     {@code Error} or a {@code string}.
             */
            reject(opt_error?: any): void;
            errback(opt_error?: any): void;

            /**
             * Resolves this promise with the given value. If the value is itself a
             * promise and not a reference to this deferred, this instance will wait for
             * it before resolving.
             * @param {*=} opt_value The resolved value.
             */
            fulfill(opt_value?: T): void;

            /**
             * Removes all of the listeners previously registered on this deferred.
             * @throws {Error} If this deferred has already been resolved.
             */
            removeAll(): void;

            //endregion
        }

        interface IControlFlowTimer {
            clearInterval: (ms: number) => void;
            clearTimeout: (ms: number) => void;
            setInterval: (fn: Function, ms: number) => number;
            setTimeout: (fn: Function, ms: number) => number;
        }

        /**
         * Handles the execution of scheduled tasks, each of which may be an
         * asynchronous operation. The control flow will ensure tasks are executed in
         * the ordered scheduled, starting each task only once those before it have
         * completed.
         *
         * <p>Each task scheduled within this flow may return a
         * {@link webdriver.promise.Promise} to indicate it is an asynchronous
         * operation. The ControlFlow will wait for such promises to be resolved before
         * marking the task as completed.
         *
         * <p>Tasks and each callback registered on a {@link webdriver.promise.Deferred}
         * will be run in their own ControlFlow frame.  Any tasks scheduled within a
         * frame will have priority over previously scheduled tasks. Furthermore, if
         * any of the tasks in the frame fails, the remainder of the tasks in that frame
         * will be discarded and the failure will be propagated to the user through the
         * callback/task's promised result.
         *
         * <p>Each time a ControlFlow empties its task queue, it will fire an
         * {@link webdriver.promise.ControlFlow.EventType.IDLE} event. Conversely,
         * whenever the flow terminates due to an unhandled error, it will remove all
         * remaining tasks in its queue and fire an
         * {@link webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION} event. If
         * there are no listeners registered with the flow, the error will be
         * rethrown to the global error handler.
         *
         * @extends {webdriver.EventEmitter}
         */
        class ControlFlow extends EventEmitter {

            //region Constructors

            /**
             * @param {webdriver.promise.ControlFlow.Timer=} opt_timer The timer object
             *     to use. Should only be set for testing.
             * @constructor
             */
            constructor(opt_timer?: IControlFlowTimer);

            //endregion

            //region Properties

            /**
             * The timer used by this instance.
             * @type {webdriver.promise.ControlFlow.Timer}
             */
            timer: IControlFlowTimer;

            //endregion

            //region Static Properties

            /**
             * The default timer object, which uses the global timer functions.
             * @type {webdriver.promise.ControlFlow.Timer}
             */
            static defaultTimer: IControlFlowTimer;

            /**
             * Events that may be emitted by an {@link webdriver.promise.ControlFlow}.
             * @enum {string}
             */
            static EventType: {
                /** Emitted when all tasks have been successfully executed. */
                    IDLE: string;

                /** Emitted when a ControlFlow has been reset. */
                    RESET: string;

                /** Emitted whenever a new task has been scheduled. */
                    SCHEDULE_TASK: string;

                /**
                 * Emitted whenever a control flow aborts due to an unhandled promise
                 * rejection. This event will be emitted along with the offending rejection
                 * reason. Upon emitting this event, the control flow will empty its task
                 * queue and revert to its initial state.
                 */
                    UNCAUGHT_EXCEPTION: string;
            };

            /**
             * How often, in milliseconds, the event loop should run.
             * @type {number}
             * @const
             */
            static EVENT_LOOP_FREQUENCY: number;

            //endregion

            //region Methods

            /**
             * Resets this instance, clearing its queue and removing all event listeners.
             */
            reset(): void;

            /**
             * Returns a summary of the recent task activity for this instance. This
             * includes the most recently completed task, as well as any parent tasks. In
             * the returned summary, the task at index N is considered a sub-task of the
             * task at index N+1.
             * @return {!Array.<string>} A summary of this instance's recent task
             *     activity.
             */
            getHistory(): string[];

            /** Clears this instance's task history. */
            clearHistory(): void;

            /**
             * Appends a summary of this instance's recent task history to the given
             * error's stack trace. This function will also ensure the error's stack trace
             * is in canonical form.
             * @param {!(Error|goog.testing.JsUnitException)} e The error to annotate.
             * @return {!(Error|goog.testing.JsUnitException)} The annotated error.
             */
            annotateError(e: any): any;

            /**
             * @return {string} The scheduled tasks still pending with this instance.
             */
            getSchedule(): string;

            /**
             * Schedules a task for execution. If there is nothing currently in the
             * queue, the task will be executed in the next turn of the event loop.
             *
             * @param {!Function} fn The function to call to start the task. If the
             *     function returns a {@link webdriver.promise.Promise}, this instance
             *     will wait for it to be resolved before starting the next task.
             * @param {string=} opt_description A description of the task.
             * @return {!webdriver.promise.Promise} A promise that will be resolved with
             *     the result of the action.
             */
            execute<T>(fn: Function, opt_description?: string): Promise<T>;

            /**
             * Inserts a {@code setTimeout} into the command queue. This is equivalent to
             * a thread sleep in a synchronous programming language.
             *
             * @param {number} ms The timeout delay, in milliseconds.
             * @param {string=} opt_description A description to accompany the timeout.
             * @return {!webdriver.promise.Promise} A promise that will be resolved with
             *     the result of the action.
             */
            timeout(ms: number, opt_description?: string): Promise<void>;

            /**
             * Schedules a task that shall wait for a condition to hold. Each condition
             * function may return any value, but it will always be evaluated as a boolean.
             *
             * <p>Condition functions may schedule sub-tasks with this instance, however,
             * their execution time will be factored into whether a wait has timed out.
             *
             * <p>In the event a condition returns a Promise, the polling loop will wait for
             * it to be resolved before evaluating whether the condition has been satisfied.
             * The resolution time for a promise is factored into whether a wait has timed
             * out.
             *
             * <p>If the condition function throws, or returns a rejected promise, the
             * wait task will fail.
             *
             * @param {!Function} condition The condition function to poll.
             * @param {number} timeout How long to wait, in milliseconds, for the condition
             *     to hold before timing out.
             * @param {string=} opt_message An optional error message to include if the
             *     wait times out; defaults to the empty string.
             * @return {!webdriver.promise.Promise} A promise that will be resolved when the
             *     condition has been satisified. The promise shall be rejected if the wait
             *     times out waiting for the condition.
             */
            wait(condition: Function, timeout: number, opt_message?: string): Promise<void>;

            /**
             * Schedules a task that will wait for another promise to resolve.  The resolved
             * promise's value will be returned as the task result.
             * @param {!webdriver.promise.Promise} promise The promise to wait on.
             * @return {!webdriver.promise.Promise} A promise that will resolve when the
             *     task has completed.
             */
            await<T>(promise: Promise<T>): Promise<T>;

            //endregion
        }
    }

    module stacktrace {
        /**
         * Class representing one stack frame.
         */
        class Frame {
            /**
             * @param {(string|undefined)} context Context object, empty in case of global
             *     functions or if the browser doesn't provide this information.
             * @param {(string|undefined)} name Function name, empty in case of anonymous
             *     functions.
             * @param {(string|undefined)} alias Alias of the function if available. For
             *     example the function name will be 'c' and the alias will be 'b' if the
             *     function is defined as <code>a.b = function c() {};</code>.
             * @param {(string|undefined)} path File path or URL including line number and
             *     optionally column number separated by colons.
             * @constructor
             */
            constructor(context?: string, name?: string, alias?: string, path?: string);

            /**
             * @return {string} The function name or empty string if the function is
             *     anonymous and the object field which it's assigned to is unknown.
             */
            getName(): string;


            /**
             * @return {string} The url or empty string if it is unknown.
             */
            getUrl(): string;


            /**
             * @return {number} The line number if known or -1 if it is unknown.
             */
            getLine(): number;


            /**
             * @return {number} The column number if known and -1 if it is unknown.
             */
            getColumn(): number;


            /**
             * @return {boolean} Whether the stack frame contains an anonymous function.
             */
            isAnonymous(): boolean;


            /**
             * Converts this frame to its string representation using V8's stack trace
             * format: http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
             * @return {string} The string representation of this frame.
             * @override
             */
            toString(): string;
        }

        /**
         * Stores a snapshot of the stack trace at the time this instance was created.
         * The stack trace will always be adjusted to exclude this function call.
         */
        class Snapshot {
            /**
             * @param {number=} opt_slice The number of frames to remove from the top of
             *     the generated stack trace.
             * @constructor
             */
            constructor(opt_slice?: number);

            /**
             * @return {!Array.<!webdriver.stacktrace.Frame>} The parsed stack trace.
             */
            getStacktrace(): Frame[];
        }

        /**
         * Formats an error's stack trace.
         * @param {!(Error|goog.testing.JsUnitException)} error The error to format.
         * @return {!(Error|goog.testing.JsUnitException)} The formatted error.
         */
        function format(error: any): any;

        /**
         * Gets the native stack trace if available otherwise follows the call chain.
         * The generated trace will exclude all frames up to and including the call to
         * this function.
         * @return {!Array.<!webdriver.stacktrace.Frame>} The frames of the stack trace.
         */
        function get(): Frame[];

        /**
         * Whether the current browser supports stack traces.
         *
         * @type {boolean}
         * @const
         */
        var BROWSER_SUPPORTED: boolean;
    }

    module until {
        /**
         * Defines a condition to
         */
        class Condition<T> {
            /**
             * @param {string} message A descriptive error message. Should complete the
             *     sentence "Waiting [...]"
             * @param {function(!webdriver.WebDriver): OUT} fn The condition function to
             *     evaluate on each iteration of the wait loop.
             * @constructor
             */
            constructor(message: string, fn: (webdriver: WebDriver) => any);

            /** @return {string} A description of this condition. */
            description(): string;

            /** @type {function(!webdriver.WebDriver): OUT} */
            fn(webdriver: WebDriver): any;
        }

        /**
         * Creates a condition that will wait until the input driver is able to switch
         * to the designated frame. The target frame may be specified as:
         * <ol>
         *   <li>A numeric index into {@code window.frames} for the currently selected
         *       frame.
         *   <li>A {@link webdriver.WebElement}, which must reference a FRAME or IFRAME
         *       element on the current page.
         *   <li>A locator which may be used to first locate a FRAME or IFRAME on the
         *       current page before attempting to switch to it.
         * </ol>
         *
         * <p>Upon successful resolution of this condition, the driver will be left
         * focused on the new frame.
         *
         * @param {!(number|webdriver.WebElement|
         *           webdriver.Locator|webdriver.By.Hash|
         *           function(!webdriver.WebDriver): !webdriver.WebElement)} frame
         *     The frame identifier.
         * @return {!until.Condition.<boolean>} A new condition.
         */
        function ableToSwitchToFrame(frame: number): Condition<boolean>;
        function ableToSwitchToFrame(frame: IWebElement): Condition<boolean>;
        function ableToSwitchToFrame(frame: Locator): Condition<boolean>;
        function ableToSwitchToFrame(frame: (webdriver: WebDriver) => IWebElement): Condition<boolean>;
        function ableToSwitchToFrame(frame: any): Condition<boolean>;

        /**
         * Creates a condition that waits for an alert to be opened. Upon success, the
         * returned promise will be fulfilled with the handle for the opened alert.
         *
         * @return {!until.Condition.<!webdriver.Alert>} The new condition.
         */
        function alertIsPresent(): Condition<Alert>;

        /**
         * Creates a condition that will wait for the given element to be disabled.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isEnabled
         */
        function elementIsDisabled(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be enabled.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isEnabled
         */
        function elementIsEnabled(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be deselected.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isSelected
         */
        function elementIsNotSelected(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be in the DOM,
         * yet not visible to the user.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isDisplayed
         */
        function elementIsNotVisible(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be selected.
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isSelected
         */
        function elementIsSelected(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to become visible.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isDisplayed
         */
        function elementIsVisible(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will loop until an element is
         * {@link webdriver.WebDriver#findElement found} with the given locator.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The locator
         *     to use.
         * @return {!until.Condition.<!webdriver.WebElement>} The new condition.
         */
        function elementLocated(locator: Locator): Condition<IWebElement>;
        function elementLocated(locator: any): Condition<IWebElement>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to contain the given
         * substring.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {string} substr The substring to search for.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextContains(element: IWebElement, substr: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to match the given
         * {@code text} exactly.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {string} text The expected text.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextIs(element: IWebElement, text: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to match a regular
         * expression.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {!RegExp} regex The regular expression to test against.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextMatches(element: IWebElement, regex: RegExp): Condition<boolean>;

        /**
         * Creates a condition that will loop until at least one element is
         * {@link webdriver.WebDriver#findElement found} with the given locator.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The locator
         *     to use.
         * @return {!until.Condition.<!Array.<!webdriver.WebElement>>} The new
         *     condition.
         */
        function elementsLocated(locator: Locator): Condition<IWebElement[]>;
        function elementsLocated(locator: any): Condition<IWebElement[]>;

        /**
         * Creates a condition that will wait for the given element to become stale. An
         * element is considered stale once it is removed from the DOM, or a new page
         * has loaded.
         *
         * @param {!webdriver.WebElement} element The element that should become stale.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function stalenessOf(element: IWebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to contain
         * the given substring.
         *
         * @param {string} substr The substring that should be present in the page
         *     title.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleContains(substr: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to match the
         * given value.
         *
         * @param {string} title The expected page title.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleIs(title: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to match the
         * given regular expression.
         *
         * @param {!RegExp} regex The regular expression to test against.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleMatches(regex: RegExp): Condition<boolean>;
    }

    interface ILocation {
        x: number;
        y: number;
    }

    interface ISize {
        width: number;
        height: number;
    }

    /**
     * Enumeration of the buttons used in the advanced interactions API.
     * NOTE: A TypeScript enum was not used so that this class could be extended in Protractor.
     * @enum {number}
     */
    interface IButton {
        LEFT: number;
        MIDDLE: number;
        RIGHT: number;
    }

    var Button: IButton

    /**
     * Representations of pressable keys that aren't text.  These are stored in
     * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
     * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
     *
     * @enum {string}
     */
    interface IKey {
        NULL: string;
        CANCEL: string;  // ^break
        HELP: string;
        BACK_SPACE: string;
        TAB: string;
        CLEAR: string;
        RETURN: string;
        ENTER: string;
        SHIFT: string;
        CONTROL: string;
        ALT: string;
        PAUSE: string;
        ESCAPE: string;
        SPACE: string;
        PAGE_UP: string;
        PAGE_DOWN: string;
        END: string;
        HOME: string;
        ARROW_LEFT: string;
        LEFT: string;
        ARROW_UP: string;
        UP: string;
        ARROW_RIGHT: string;
        RIGHT: string;
        ARROW_DOWN: string;
        DOWN: string;
        INSERT: string;
        DELETE: string;
        SEMICOLON: string;
        EQUALS: string;

        NUMPAD0: string;  // number pad keys
        NUMPAD1: string;
        NUMPAD2: string;
        NUMPAD3: string;
        NUMPAD4: string;
        NUMPAD5: string;
        NUMPAD6: string;
        NUMPAD7: string;
        NUMPAD8: string;
        NUMPAD9: string;
        MULTIPLY: string;
        ADD: string;
        SEPARATOR: string;
        SUBTRACT: string;
        DECIMAL: string;
        DIVIDE: string;

        F1: string;  // function keys
        F2: string;
        F3: string;
        F4: string;
        F5: string;
        F6: string;
        F7: string;
        F8: string;
        F9: string;
        F10: string;
        F11: string;
        F12: string;

        COMMAND: string;  // Apple command key
        META: string;   // alias for Windows key

        /**
         * Simulate pressing many keys at once in a "chord". Takes a sequence of
         * {@link webdriver.Key}s or strings, appends each of the values to a string,
         * and adds the chord termination key ({@link webdriver.Key.NULL}) and returns
         * the resultant string.
         *
         * Note: when the low-level webdriver key handlers see Keys.NULL, active
         * modifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.
         *
         * @param {...string} var_args The key sequence to concatenate.
         * @return {string} The null-terminated key sequence.
         * @see http://code.google.com/p/webdriver/issues/detail?id=79
         */
        chord: (...var_args: string[]) => string;
    }

    var Key: IKey;

    /**
     * Class for defining sequences of complex user interactions. Each sequence
     * will not be executed until {@link #perform} is called.
     *
     * <p>Example:<pre><code>
     *   new webdriver.ActionSequence(driver).
     *       keyDown(webdriver.Key.SHIFT).
     *       click(element1).
     *       click(element2).
     *       dragAndDrop(element3, element4).
     *       keyUp(webdriver.Key.SHIFT).
     *       perform();
     * </pre></code>
     *
     */
    class ActionSequence {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The driver instance to use.
         * @constructor
         */
        constructor(driver: WebDriver);

        //endregion

        //region Methods

        /**
         * Executes this action sequence.
         * @return {!webdriver.promise.Promise} A promise that will be resolved once
         *     this sequence has completed.
         */
        perform(): webdriver.promise.Promise<void>;

        /**
         * Moves the mouse.  The location to move to may be specified in terms of the
         * mouse's current location, an offset relative to the top-left corner of an
         * element, or an element (in which case the middle of the element is used).
         * @param {(!webdriver.WebElement|{x: number, y: number})} location The
         *     location to drag to, as either another WebElement or an offset in pixels.
         * @param {{x: number, y: number}=} opt_offset An optional offset, in pixels.
         *     Defaults to (0, 0).
         * @return {!webdriver.ActionSequence} A self reference.
         */
        mouseMove(location: IWebElement, opt_offset?: ILocation): ActionSequence;
        mouseMove(location: ILocation): ActionSequence;

        /**
         * Presses a mouse button. The mouse button will not be released until
         * {@link #mouseUp} is called, regardless of whether that call is made in this
         * sequence or another. The behavior for out-of-order events (e.g. mouseDown,
         * click) is undefined.
         *
         * <p>If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).mouseDown()</code></pre>
         *
         * <p>Warning: this method currently only supports the left mouse button. See
         * http://code.google.com/p/selenium/issues/detail?id=4047
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        mouseDown(opt_elementOrButton?: IWebElement, opt_button?: number): ActionSequence;
        mouseDown(opt_elementOrButton?: number): ActionSequence;

        /**
         * Releases a mouse button. Behavior is undefined for calling this function
         * without a previous call to {@link #mouseDown}.
         *
         * <p>If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).mouseUp()</code></pre>
         *
         * <p>Warning: this method currently only supports the left mouse button. See
         * http://code.google.com/p/selenium/issues/detail?id=4047
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        mouseUp(opt_elementOrButton?: IWebElement, opt_button?: number): ActionSequence;
        mouseUp(opt_elementOrButton?: number): ActionSequence;

        /**
         * Convenience function for performing a "drag and drop" manuever. The target
         * element may be moved to the location of another element, or by an offset (in
         * pixels).
         * @param {!webdriver.WebElement} element The element to drag.
         * @param {(!webdriver.WebElement|{x: number, y: number})} location The
         *     location to drag to, either as another WebElement or an offset in pixels.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        dragAndDrop(element: IWebElement, location: IWebElement): ActionSequence;
        dragAndDrop(element: IWebElement, location: ILocation): ActionSequence;

        /**
         * Clicks a mouse button.
         *
         * <p>If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).click()</code></pre>
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        click(opt_elementOrButton?: IWebElement, opt_button?: number): ActionSequence;
        click(opt_elementOrButton?: number): ActionSequence;

        /**
         * Double-clicks a mouse button.
         *
         * <p>If an element is provided, the mouse will first be moved to the center of
         * that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).doubleClick()</code></pre>
         *
         * <p>Warning: this method currently only supports the left mouse button. See
         * http://code.google.com/p/selenium/issues/detail?id=4047
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        doubleClick(opt_elementOrButton?: IWebElement, opt_button?: number): ActionSequence;
        doubleClick(opt_elementOrButton?: number): ActionSequence;

        /**
         * Performs a modifier key press. The modifier key is <em>not released</em>
         * until {@link #keyUp} or {@link #sendKeys} is called. The key press will be
         * targetted at the currently focused element.
         * @param {!webdriver.Key} key The modifier key to push. Must be one of
         *     {ALT, CONTROL, SHIFT, COMMAND, META}.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        keyDown(key: string): ActionSequence;

        /**
         * Performs a modifier key release. The release is targetted at the currently
         * focused element.
         * @param {!webdriver.Key} key The modifier key to release. Must be one of
         *     {ALT, CONTROL, SHIFT, COMMAND, META}.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        keyUp(key: string): ActionSequence;

        /**
         * Simulates typing multiple keys. Each modifier key encountered in the
         * sequence will not be released until it is encountered again. All key events
         * will be targetted at the currently focused element.
         * @param {...(string|!webdriver.Key|!Array.<(string|!webdriver.Key)>)} var_args
         *     The keys to type.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        sendKeys(...var_args: any[]): ActionSequence;

        //endregion
    }

    /**
     * Represents a modal dialog such as {@code alert}, {@code confirm}, or
     * {@code prompt}. Provides functions to retrieve the message displayed with
     * the alert, accept or dismiss the alert, and set the response text (in the
     * case of {@code prompt}).
     */
    interface Alert {

        //region Methods

        /**
         * Retrieves the message text displayed with this alert. For instance, if the
         * alert were opened with alert("hello"), then this would return "hello".
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     text displayed with this alert.
         */
        getText(): webdriver.promise.Promise<string>;

        /**
         * Accepts this alert.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        accept(): webdriver.promise.Promise<void>;

        /**
         * Dismisses this alert.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        dismiss(): webdriver.promise.Promise<void>;

        /**
         * Sets the response text on this alert. This command will return an error if
         * the underlying alert does not support response text (e.g. window.alert and
         * window.confirm).
         * @param {string} text The text to set.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        sendKeys(text: string): webdriver.promise.Promise<void>;

        //endregion

    }

    /**
     * AlertPromise is a promise that will be fulfilled with an Alert. This promise
     * serves as a forward proxy on an Alert, allowing calls to be scheduled
     * directly on this instance before the underlying Alert has been fulfilled. In
     * other words, the following two statements are equivalent:
     * <pre><code>
     *     driver.switchTo().alert().dismiss();
     *     driver.switchTo().alert().then(function(alert) {
     *       return alert.dismiss();
     *     });
     * </code></pre>
     *
     * @param {!webdriver.WebDriver} driver The driver controlling the browser this
     *     alert is attached to.
     * @param {!webdriver.promise.Thenable.<!webdriver.Alert>} alert A thenable
     *     that will be fulfilled with the promised alert.
     * @constructor
     * @extends {webdriver.Alert}
     * @implements {webdriver.promise.Thenable.<!webdriver.Alert>}
     * @final
     */
    interface AlertPromise extends Alert, webdriver.promise.IThenable<Alert> {
    }

    /**
     * An error returned to indicate that there is an unhandled modal dialog on the
     * current page.
     * @extends {bot.Error}
     */
    interface UnhandledAlertError extends webdriver.error.Error {
        //region Methods

        /**
         * @return {string} The text displayed with the unhandled alert.
         */
        getAlertText(): string;

        /**
         * @return {!webdriver.Alert} The open alert.
         * @deprecated Use {@link #getAlertText}. This method will be removed in
         *     2.45.0.
         */
        getAlert(): Alert;


        //endregion
    }

    /**
     * Recognized browser names.
     * @enum {string}
     */
    interface IBrowser {
        ANDROID: string;
        CHROME: string;
        FIREFOX: string;
        INTERNET_EXPLORER: string;
        IPAD: string;
        IPHONE: string;
        OPERA: string;
        PHANTOM_JS: string;
        SAFARI: string;
        HTMLUNIT: string;
    }

    var Browser: IBrowser

    interface ProxyConfig {
        proxyType: string;
        proxyAutoconfigUrl?: string;
        ftpProxy?: string;
        httpProxy?: string;
        sslProxy?: string;
        noProxy?: string;
    }

    class Builder {

        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Methods

        /**
         * Creates a new WebDriver client based on this builder's current
         * configuration.
         *
         * @return {!webdriver.WebDriver} A new WebDriver instance.
         * @throws {Error} If the current configuration is invalid.
         */
        build(): WebDriver;

        /**
         * Configures the target browser for clients created by this instance.
         * Any calls to {@link #withCapabilities} after this function will
         * overwrite these settings.
         *
         * <p>You may also define the target browser using the {@code SELENIUM_BROWSER}
         * environment variable. If set, this environment variable should be of the
         * form {@code browser[:[version][:platform]]}.
         *
         * @param {(string|webdriver.Browser)} name The name of the target browser;
         *     common defaults are available on the {@link webdriver.Browser} enum.
         * @param {string=} opt_version A desired version; may be omitted if any
         *     version should be used.
         * @param {string=} opt_platform The desired platform; may be omitted if any
         *     version may be used.
         * @return {!Builder} A self reference.
         */
        forBrowser(name: string, opt_version?: string, opt_platform?: string): Builder;

        /**
         * Returns the base set of capabilities this instance is currently configured
         * to use.
         * @return {!webdriver.Capabilities} The current capabilities for this builder.
         */
        getCapabilities(): Capabilities;

        /**
         * @return {string} The URL of the WebDriver server this instance is configured
         *     to use.
         */
        getServerUrl(): string;

        /**
         * Sets the default action to take with an unexpected alert before returning
         * an error.
         * @param {string} beahvior The desired behavior; should be "accept", "dismiss",
         *     or "ignore". Defaults to "dismiss".
         * @return {!Builder} A self reference.
         */
        setAlertBehavior(behavior: string): Builder;

        /**
         * Sets Chrome-specific options for drivers created by this builder. Any
         * logging or proxy settings defined on the given options will take precedence
         * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
         * respectively.
         *
         * @param {!chrome.Options} options The ChromeDriver options to use.
         * @return {!Builder} A self reference.
         */
        setChromeOptions(options: chrome.Options): Builder;

        /**
         * Sets the control flow that created drivers should execute actions in. If
         * the flow is never set, or is set to {@code null}, it will use the active
         * flow at the time {@link #build()} is called.
         * @param {webdriver.promise.ControlFlow} flow The control flow to use, or
         *     {@code null} to
         * @return {!Builder} A self reference.
         */
        setControlFlow(flow: webdriver.promise.ControlFlow): Builder;

        /**
         * Sets whether native events should be used.
         * @param {boolean} enabled Whether to enable native events.
         * @return {!Builder} A self reference.
         */
        setEnableNativeEvents(enabled: boolean): Builder;

        /**
         * Sets Firefox-specific options for drivers created by this builder. Any
         * logging or proxy settings defined on the given options will take precedence
         * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
         * respectively.
         *
         * @param {!firefox.Options} options The FirefoxDriver options to use.
         * @return {!Builder} A self reference.
         */
        setFirefoxOptions(options: firefox.Options): Builder;

        /**
         * Sets the logging preferences for the created session. Preferences may be
         * changed by repeated calls, or by calling {@link #withCapabilities}.
         * @param {!(webdriver.logging.Preferences|Object.<string, string>)} prefs The
         *     desired logging preferences.
         * @return {!Builder} A self reference.
         */
        setLoggingPrefs(prefs: webdriver.logging.Preferences): Builder;
        setLoggingPrefs(prefs: { [key: string]: string }): Builder;

        /**
         * Sets the proxy configuration to use for WebDriver clients created by this
         * builder. Any calls to {@link #withCapabilities} after this function will
         * overwrite these settings.
         * @param {!webdriver.ProxyConfig} config The configuration to use.
         * @return {!Builder} A self reference.
         */
        setProxy(config: ProxyConfig): Builder;

        /**
         * Sets how elements should be scrolled into view for interaction.
         * @param {number} behavior The desired scroll behavior: either 0 to align with
         *     the top of the viewport or 1 to align with the bottom.
         * @return {!Builder} A self reference.
         */
        setScrollBehavior(behavior: number): Builder;

        /**
         * Sets the URL of a remote WebDriver server to use. Once a remote URL has been
         * specified, the builder direct all new clients to that server. If this method
         * is never called, the Builder will attempt to create all clients locally.
         *
         * <p>As an alternative to this method, you may also set the
         * {@code SELENIUM_REMOTE_URL} environment variable.
         *
         * @param {string} url The URL of a remote server to use.
         * @return {!Builder} A self reference.
         */
        usingServer(url: string): Builder;

        /**
         * Sets the desired capabilities when requesting a new session. This will
         * overwrite any previously set capabilities.
         * @param {!(Object|webdriver.Capabilities)} capabilities The desired
         *     capabilities for a new session.
         * @return {!Builder} A self reference.
         */
        withCapabilities(capabilities: Capabilities): Builder;
        withCapabilities(capabilities: any): Builder;

        //endregion
    }

    /**
     * Common webdriver capability keys.
     * @enum {string}
     */
    interface ICapability {

        /**
         * Indicates whether a driver should accept all SSL certs by default. This
         * capability only applies when requesting a new session. To query whether
         * a driver can handle insecure SSL certs, see
         * {@link webdriver.Capability.SECURE_SSL}.
         */
        ACCEPT_SSL_CERTS: string;


        /**
         * The browser name. Common browser names are defined in the
         * {@link webdriver.Browser} enum.
         */
        BROWSER_NAME: string;

        /**
         * Defines how elements should be scrolled into the viewport for interaction.
         * This capability will be set to zero (0) if elements are aligned with the
         * top of the viewport, or one (1) if aligned with the bottom. The default
         * behavior is to align with the top of the viewport.
         */
        ELEMENT_SCROLL_BEHAVIOR: string;

        /**
         * Whether the driver is capable of handling modal alerts (e.g. alert,
         * confirm, prompt). To define how a driver <i>should</i> handle alerts,
         * use {@link webdriver.Capability.UNEXPECTED_ALERT_BEHAVIOR}.
         */
        HANDLES_ALERTS: string;

        /**
         * Key for the logging driver logging preferences.
         */
        LOGGING_PREFS: string;

        /**
	     * Whether this session generates native events when simulating user input.
         */
        NATIVE_EVENTS: string;

        /**
         * Describes the platform the browser is running on. Will be one of
         * ANDROID, IOS, LINUX, MAC, UNIX, or WINDOWS. When <i>requesting</i> a
         * session, ANY may be used to indicate no platform preference (this is
         * semantically equivalent to omitting the platform capability).
         */
        PLATFORM: string;

        /**
         * Describes the proxy configuration to use for a new WebDriver session.
         */
        PROXY: string;

        /** Whether the driver supports changing the brower's orientation. */
        ROTATABLE: string;

        /**
         * Whether a driver is only capable of handling secure SSL certs. To request
         * that a driver accept insecure SSL certs by default, use
         * {@link webdriver.Capability.ACCEPT_SSL_CERTS}.
         */
        SECURE_SSL: string;

        /** Whether the driver supports manipulating the app cache. */
       SUPPORTS_APPLICATION_CACHE: string;

        /** Whether the driver supports locating elements with CSS selectors. */
        SUPPORTS_CSS_SELECTORS: string;

        /** Whether the browser supports JavaScript. */
        SUPPORTS_JAVASCRIPT: string;

        /** Whether the driver supports controlling the browser's location info. */
        SUPPORTS_LOCATION_CONTEXT: string;

        /** Whether the driver supports taking screenshots. */
        TAKES_SCREENSHOT: string;

        /**
         * Defines how the driver should handle unexpected alerts. The value should
         * be one of "accept", "dismiss", or "ignore.
         */
        UNEXPECTED_ALERT_BEHAVIOR: string;

        /** Defines the browser version. */
        VERSION: string;
    }

    var Capability: ICapability;

    class Capabilities {
        //region Constructors

        /**
         * @param {(webdriver.Capabilities|Object)=} opt_other Another set of
         *     capabilities to merge into this instance.
         * @constructor
         */
        constructor(opt_other?: Capabilities);
        constructor(opt_other?: any);

        //endregion

        //region Methods

        /** @return {!Object} The JSON representation of this instance. */
        toJSON(): any;

        /**
         * Merges another set of capabilities into this instance. Any duplicates in
         * the provided set will override those already set on this instance.
         * @param {!(webdriver.Capabilities|Object)} other The capabilities to
         *     merge into this instance.
         * @return {!webdriver.Capabilities} A self reference.
         */
        merge(other: Capabilities): Capabilities;
        merge(other: any): Capabilities;

        /**
         * @param {string} key The capability to set.
         * @param {*} value The capability value.  Capability values must be JSON
         *     serializable. Pass {@code null} to unset the capability.
         * @return {!webdriver.Capabilities} A self reference.
         */
        set(key: string, value: any): Capabilities;

        /**
         * Sets the logging preferences. Preferences may be specified as a
         * {@link webdriver.logging.Preferences} instance, or a as a map of log-type to
         * log-level.
         * @param {!(webdriver.logging.Preferences|Object.<string, string>)} prefs The
         *     logging preferences.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setLoggingPrefs(prefs: webdriver.logging.Preferences): Capabilities;
        setLoggingPrefs(prefs: { [key: string]: string }): Capabilities;


        /**
         * Sets the proxy configuration for this instance.
         * @param {webdriver.ProxyConfig} proxy The desired proxy configuration.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setProxy(proxy: ProxyConfig): Capabilities;


        /**
         * Sets whether native events should be used.
         * @param {boolean} enabled Whether to enable native events.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setEnableNativeEvents(enabled: boolean): Capabilities;


        /**
         * Sets how elements should be scrolled into view for interaction.
         * @param {number} behavior The desired scroll behavior: either 0 to align with
         *     the top of the viewport or 1 to align with the bottom.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setScrollBehavior(behavior: number): Capabilities;

        /**
         * Sets the default action to take with an unexpected alert before returning
         * an error.
         * @param {string} behavior The desired behavior; should be "accept", "dismiss",
         *     or "ignore". Defaults to "dismiss".
         * @return {!webdriver.Capabilities} A self reference.
         */
        setAlertBehavior(behavior: string): Capabilities;

        /**
         * @param {string} key The capability to return.
         * @return {*} The capability with the given key, or {@code null} if it has
         *     not been set.
         */
        get(key: string): any;

        /**
         * @param {string} key The capability to check.
         * @return {boolean} Whether the specified capability is set.
         */
        has(key: string): boolean;

        //endregion

        //region Static Methods

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Android.
         */
        static android(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Chrome.
         */
        static chrome(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Firefox.
         */
        static firefox(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for
         *     Internet Explorer.
         */
        static ie(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for iPad.
         */
        static ipad(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for iPhone.
         */
        static iphone(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Opera.
         */
        static opera(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for
         *     PhantomJS.
         */
        static phantomjs(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Safari.
         */
        static safari(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for HTMLUnit.
         */
        static htmlunit(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for HTMLUnit
         *                                   with enabled Javascript.
         */
        static htmlunitwithjs(): Capabilities;

        //endregion
    }

    /**
     * An enumeration of valid command string.
     */
    interface ICommandName {
        GET_SERVER_STATUS: string;

        NEW_SESSION: string;
        GET_SESSIONS: string;
        DESCRIBE_SESSION: string;

        CLOSE: string;
        QUIT: string;

        GET_CURRENT_URL: string;
        GET: string;
        GO_BACK: string;
        GO_FORWARD: string;
        REFRESH: string;

        ADD_COOKIE: string;
        GET_COOKIE: string;
        GET_ALL_COOKIES: string;
        DELETE_COOKIE: string;
        DELETE_ALL_COOKIES: string;

        GET_ACTIVE_ELEMENT: string;
        FIND_ELEMENT: string;
        FIND_ELEMENTS: string;
        FIND_CHILD_ELEMENT: string;
        FIND_CHILD_ELEMENTS: string;

        CLEAR_ELEMENT: string;
        CLICK_ELEMENT: string;
        SEND_KEYS_TO_ELEMENT: string;
        SUBMIT_ELEMENT: string;

        GET_CURRENT_WINDOW_HANDLE: string;
        GET_WINDOW_HANDLES: string;
        GET_WINDOW_POSITION: string;
        SET_WINDOW_POSITION: string;
        GET_WINDOW_SIZE: string;
        SET_WINDOW_SIZE: string;
        MAXIMIZE_WINDOW: string;

        SWITCH_TO_WINDOW: string;
        SWITCH_TO_FRAME: string;
        GET_PAGE_SOURCE: string;
        GET_TITLE: string;

        EXECUTE_SCRIPT: string;
        EXECUTE_ASYNC_SCRIPT: string;

        GET_ELEMENT_TEXT: string;
        GET_ELEMENT_TAG_NAME: string;
        IS_ELEMENT_SELECTED: string;
        IS_ELEMENT_ENABLED: string;
        IS_ELEMENT_DISPLAYED: string;
        GET_ELEMENT_LOCATION: string;
        GET_ELEMENT_LOCATION_IN_VIEW: string;
        GET_ELEMENT_SIZE: string;
        GET_ELEMENT_ATTRIBUTE: string;
        GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string;
        ELEMENT_EQUALS: string;

        SCREENSHOT: string;
        IMPLICITLY_WAIT: string;
        SET_SCRIPT_TIMEOUT: string;
        SET_TIMEOUT: string;

        ACCEPT_ALERT: string;
        DISMISS_ALERT: string;
        GET_ALERT_TEXT: string;
        SET_ALERT_TEXT: string;

        EXECUTE_SQL: string;
        GET_LOCATION: string;
        SET_LOCATION: string;
        GET_APP_CACHE: string;
        GET_APP_CACHE_STATUS: string;
        CLEAR_APP_CACHE: string;
        IS_BROWSER_ONLINE: string;
        SET_BROWSER_ONLINE: string;

        GET_LOCAL_STORAGE_ITEM: string;
        GET_LOCAL_STORAGE_KEYS: string;
        SET_LOCAL_STORAGE_ITEM: string;
        REMOVE_LOCAL_STORAGE_ITEM: string;
        CLEAR_LOCAL_STORAGE: string;
        GET_LOCAL_STORAGE_SIZE: string;

        GET_SESSION_STORAGE_ITEM: string;
        GET_SESSION_STORAGE_KEYS: string;
        SET_SESSION_STORAGE_ITEM: string;
        REMOVE_SESSION_STORAGE_ITEM: string;
        CLEAR_SESSION_STORAGE: string;
        GET_SESSION_STORAGE_SIZE: string;

        SET_SCREEN_ORIENTATION: string;
        GET_SCREEN_ORIENTATION: string;

        // These belong to the Advanced user interactions - an element is
        // optional for these commands.
        CLICK: string;
        DOUBLE_CLICK: string;
        MOUSE_DOWN: string;
        MOUSE_UP: string;
        MOVE_TO: string;
        SEND_KEYS_TO_ACTIVE_ELEMENT: string;

        // These belong to the Advanced Touch API
        TOUCH_SINGLE_TAP: string;
        TOUCH_DOWN: string;
        TOUCH_UP: string;
        TOUCH_MOVE: string;
        TOUCH_SCROLL: string;
        TOUCH_DOUBLE_TAP: string;
        TOUCH_LONG_PRESS: string;
        TOUCH_FLICK: string;

        GET_AVAILABLE_LOG_TYPES: string;
        GET_LOG: string;
        GET_SESSION_LOGS: string;
    }

    var CommandName: ICommandName;

    /**
     * Describes a command to be executed by the WebDriverJS framework.
     * @param {!webdriver.CommandName} name The name of this command.
     * @constructor
     */
    class Command {
        //region Constructors

        /**
         * @param {!webdriver.CommandName} name The name of this command.
         * @constructor
         */
        constructor(name: string);

        //endregion

        //region Methods

        /**
         * @return {!webdriver.CommandName} This command's name.
         */
        getName(): string;

        /**
         * Sets a parameter to send with this command.
         * @param {string} name The parameter name.
         * @param {*} value The parameter value.
         * @return {!webdriver.Command} A self reference.
         */
        setParameter(name: string, value: any): Command;

        /**
         * Sets the parameters for this command.
         * @param {!Object.<*>} parameters The command parameters.
         * @return {!webdriver.Command} A self reference.
         */
        setParameters(parameters: any): Command;

        /**
         * Returns a named command parameter.
         * @param {string} key The parameter key to look up.
         * @return {*} The parameter value, or undefined if it has not been set.
         */
        getParameter(key: string): any;

        /**
         * @return {!Object.<*>} The parameters to send with this command.
         */
        getParameters(): any;

        //endregion
    }

    /**
     * Handles the execution of {@code webdriver.Command} objects.
     */
    interface CommandExecutor {
        /**
         * Executes the given {@code command}. If there is an error executing the
         * command, the provided callback will be invoked with the offending error.
         * Otherwise, the callback will be invoked with a null Error and non-null
         * {@link bot.response.ResponseObject} object.
         * @param {!webdriver.Command} command The command to execute.
         * @param {function(Error, !bot.response.ResponseObject=)} callback the function
         *     to invoke when the command response is ready.
         */
        execute(command: Command, callback: (error: Error, responseObject: any) => any ): void;
    }

    /**
     * Object that can emit events for others to listen for. This is used instead
     * of Closure's event system because it is much more light weight. The API is
     * based on Node's EventEmitters.
     */
    class EventEmitter {
        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Methods

        /**
         * Fires an event and calls all listeners.
         * @param {string} type The type of event to emit.
         * @param {...*} var_args Any arguments to pass to each listener.
         */
        emit(type: string, ...var_args: any[]): void;

        /**
         * Returns a mutable list of listeners for a specific type of event.
         * @param {string} type The type of event to retrieve the listeners for.
         * @return {!Array.<{fn: !Function, oneshot: boolean,
         *                   scope: (Object|undefined)}>} The registered listeners for
         *     the given event type.
         */
        listeners(type: string): Array<{fn: Function; oneshot: boolean; scope: any;}>;

        /**
         * Registers a listener.
         * @param {string} type The type of event to listen for.
         * @param {!Function} listenerFn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        addListener(type: string, listenerFn: Function, opt_scope?:any): EventEmitter;

        /**
         * Registers a one-time listener which will be called only the first time an
         * event is emitted, after which it will be removed.
         * @param {string} type The type of event to listen for.
         * @param {!Function} listenerFn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        once(type: string, listenerFn: any, opt_scope?: any): EventEmitter;

        /**
         * An alias for {@code #addListener()}.
         * @param {string} type The type of event to listen for.
         * @param {!Function} listenerFn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        on(type: string, listenerFn: Function, opt_scope?:any): EventEmitter;

        /**
         * Removes a previously registered event listener.
         * @param {string} type The type of event to unregister.
         * @param {!Function} listenerFn The handler function to remove.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        removeListener(type: string, listenerFn: Function): EventEmitter;

        /**
         * Removes all listeners for a specific type of event. If no event is
         * specified, all listeners across all types will be removed.
         * @param {string=} opt_type The type of event to remove listeners from.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        removeAllListeners(opt_type?: string): EventEmitter;

        //endregion
    }

    /**
     * Interface for navigating back and forth in the browser history.
     */
    interface WebDriverNavigation {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        new (driver: WebDriver): WebDriverNavigation;

        //endregion

        //region Methods

        /**
         * Schedules a command to navigate to a new URL.
         * @param {string} url The URL to navigate to.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     URL has been loaded.
         */
        to(url: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to move backwards in the browser history.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     navigation event has completed.
         */
        back(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to move forwards in the browser history.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     navigation event has completed.
         */
        forward(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to refresh the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     navigation event has completed.
         */
        refresh(): webdriver.promise.Promise<void>;

        //endregion
    }

    interface IWebDriverOptionsCookie {
        name: string;
        value: string;
        path?: string;
        domain?: string;
        secure?: boolean;
        expiry?: number;
    }

    /**
     * Provides methods for managing browser and driver state.
     */
    interface WebDriverOptions {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        new (driver: webdriver.WebDriver): WebDriverOptions;

        //endregion

        //region Methods

        /**
         * Schedules a command to add a cookie.
         * @param {string} name The cookie name.
         * @param {string} value The cookie value.
         * @param {string=} opt_path The cookie path.
         * @param {string=} opt_domain The cookie domain.
         * @param {boolean=} opt_isSecure Whether the cookie is secure.
         * @param {(number|!Date)=} opt_expiry When the cookie expires. If specified as
         *     a number, should be in milliseconds since midnight, January 1, 1970 UTC.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     cookie has been added to the page.
         */
        addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: number): webdriver.promise.Promise<void>;
        addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: Date): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to delete all cookies visible to the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     cookies have been deleted.
         */
        deleteAllCookies(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to delete the cookie with the given name. This command is
         * a no-op if there is no cookie with the given name visible to the current
         * page.
         * @param {string} name The name of the cookie to delete.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     cookie has been deleted.
         */
        deleteCookie(name: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to retrieve all cookies visible to the current page.
         * Each cookie will be returned as a JSON object as described by the WebDriver
         * wire protocol.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     cookies visible to the current page.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
         */
        getCookies(): webdriver.promise.Promise<IWebDriverOptionsCookie[]>;

        /**
         * Schedules a command to retrieve the cookie with the given name. Returns null
         * if there is no such cookie. The cookie will be returned as a JSON object as
         * described by the WebDriver wire protocol.
         * @param {string} name The name of the cookie to retrieve.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     named cookie, or {@code null} if there is no such cookie.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
         */
        getCookie(name: string): webdriver.promise.Promise<IWebDriverOptionsCookie>;

        /**
         * @return {!webdriver.WebDriver.Logs} The interface for managing driver
         *     logs.
         */
        logs(): WebDriverLogs;

        /**
         * @return {!webdriver.WebDriver.Timeouts} The interface for managing driver
         *     timeouts.
         */
        timeouts(): WebDriverTimeouts;

        /**
         * @return {!webdriver.WebDriver.Window} The interface for managing the
         *     current window.
         */
        window(): WebDriverWindow;

        //endregion
    }

    /**
     * An interface for managing timeout behavior for WebDriver instances.
     */
    interface WebDriverTimeouts {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        new (driver: WebDriver): WebDriverTimeouts;

        //endregion

        //region Methods

        /**
         * Specifies the amount of time the driver should wait when searching for an
         * element if it is not immediately present.
         * <p/>
         * When searching for a single element, the driver should poll the page
         * until the element has been found, or this timeout expires before failing
         * with a {@code bot.ErrorCode.NO_SUCH_ELEMENT} error. When searching
         * for multiple elements, the driver should poll the page until at least one
         * element has been found or this timeout has expired.
         * <p/>
         * Setting the wait timeout to 0 (its default value), disables implicit
         * waiting.
         * <p/>
         * Increasing the implicit wait timeout should be used judiciously as it
         * will have an adverse effect on test run time, especially when used with
         * slower location strategies like XPath.
         *
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     implicit wait timeout has been set.
         */
        implicitlyWait(ms: number): webdriver.promise.Promise<void>;

        /**
         * Sets the amount of time to wait, in milliseconds, for an asynchronous script
         * to finish execution before returning an error. If the timeout is less than or
         * equal to 0, the script will be allowed to run indefinitely.
         *
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     script timeout has been set.
         */
        setScriptTimeout(ms: number): webdriver.promise.Promise<void>;

        /**
         * Sets the amount of time to wait for a page load to complete before returning
         * an error.  If the timeout is negative, page loads may be indefinite.
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the timeout has been set.
         */
        pageLoadTimeout(ms: number): webdriver.promise.Promise<void>;

        //endregion
    }

    /**
     * An interface for managing the current window.
     */
    interface WebDriverWindow {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        new (driver: WebDriver): WebDriverWindow;

        //endregion

        //region Methods

        /**
         * Retrieves the window's current position, relative to the top left corner of
         * the screen.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     window's position in the form of a {x:number, y:number} object literal.
         */
        getPosition(): webdriver.promise.Promise<ILocation>;

        /**
         * Repositions the current window.
         * @param {number} x The desired horizontal position, relative to the left side
         *     of the screen.
         * @param {number} y The desired vertical position, relative to the top of the
         *     of the screen.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        setPosition(x: number, y: number): webdriver.promise.Promise<void>;

        /**
         * Retrieves the window's current size.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     window's size in the form of a {width:number, height:number} object
         *     literal.
         */
        getSize(): webdriver.promise.Promise<ISize>;

        /**
         * Resizes the current window.
         * @param {number} width The desired window width.
         * @param {number} height The desired window height.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        setSize(width: number, height: number): webdriver.promise.Promise<void>;

        /**
         * Maximizes the current window.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        maximize(): webdriver.promise.Promise<void>;

        //endregion
    }

    /**
     * Interface for managing WebDriver log records.
     */
    interface WebDriverLogs {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        new (driver: WebDriver): WebDriverLogs;

        //endregion

        //region

        /**
         * Fetches available log entries for the given type.
         *
         * <p/>Note that log buffers are reset after each call, meaning that
         * available log entries correspond to those entries not yet returned for a
         * given log type. In practice, this means that this call will return the
         * available log entries since the last call, or from the start of the
         * session.
         *
         * @param {!webdriver.logging.Type} type The desired log type.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.logging.Entry>>} A
         *   promise that will resolve to a list of log entries for the specified
         *   type.
         */
        get(type: string): webdriver.promise.Promise<webdriver.logging.Entry[]>;

        /**
         * Retrieves the log types available to this driver.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.logging.Type>>} A
         *     promise that will resolve to a list of available log types.
         */
        getAvailableLogTypes(): webdriver.promise.Promise<string[]>;

        //endregion
    }

    /**
     * An interface for changing the focus of the driver to another frame or window.
     */
    interface WebDriverTargetLocator {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        new (driver: WebDriver): WebDriverTargetLocator;

        //endregion

        //region Methods

        /**
         * Schedules a command retrieve the {@code document.activeElement} element on
         * the current document, or {@code document.body} if activeElement is not
         * available.
         * @return {!webdriver.WebElement} The active element.
         */
        activeElement(): WebElementPromise;

        /**
         * Schedules a command to switch focus of all future commands to the first frame
         * on the page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the default content.
         */
        defaultContent(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to switch the focus of all future commands to another
         * frame on the page.
         * <p/>
         * If the frame is specified by a number, the command will switch to the frame
         * by its (zero-based) index into the {@code window.frames} collection.
         * <p/>
         * If the frame is specified by a string, the command will select the frame by
         * its name or ID. To select sub-frames, simply separate the frame names/IDs by
         * dots. As an example, "main.child" will select the frame with the name "main"
         * and then its child "child".
         * <p/>
         * If the specified frame can not be found, the deferred result will errback
         * with a {@code bot.ErrorCode.NO_SUCH_FRAME} error.
         * @param {string|number} nameOrIndex The frame locator.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the specified frame.
         */
        frame(nameOrIndex: string): webdriver.promise.Promise<void>;
        frame(nameOrIndex: number): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to switch the focus of all future commands to another
         * window. Windows may be specified by their {@code window.name} attribute or
         * by its handle (as returned by {@code webdriver.WebDriver#getWindowHandles}).
         * <p/>
         * If the specificed window can not be found, the deferred result will errback
         * with a {@code bot.ErrorCode.NO_SUCH_WINDOW} error.
         * @param {string} nameOrHandle The name or window handle of the window to
         *     switch focus to.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the specified window.
         */
        window(nameOrHandle: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to change focus to the active alert dialog. This command
         * will return a {@link bot.ErrorCode.NO_MODAL_DIALOG_OPEN} error if a modal
         * dialog is not currently open.
         * @return {!webdriver.Alert} The open alert.
         */
        alert(): AlertPromise;

        //endregion
    }

    /**
     * Creates a new WebDriver client, which provides control over a browser.
     *
     * Every WebDriver command returns a {@code webdriver.promise.Promise} that
     * represents the result of that command. Callbacks may be registered on this
     * object to manipulate the command result or catch an expected error. Any
     * commands scheduled with a callback are considered sub-commands and will
     * execute before the next command in the current frame. For example:
     *
     *   var message = [];
     *   driver.call(message.push, message, 'a').then(function() {
     *     driver.call(message.push, message, 'b');
     *   });
     *   driver.call(message.push, message, 'c');
     *   driver.call(function() {
     *     alert('message is abc? ' + (message.join('') == 'abc'));
     *   });
     *
     */
    class WebDriver {
        //region Constructors

        /**
         * @param {!(webdriver.Session|webdriver.promise.Promise)} session Either a
         *     known session or a promise that will be resolved to a session.
         * @param {!webdriver.CommandExecutor} executor The executor to use when
         *     sending commands to the browser.
         * @param {webdriver.promise.ControlFlow=} opt_flow The flow to
         *     schedule commands through. Defaults to the active flow object.
         * @constructor
         */
         constructor(session: Session, executor: CommandExecutor, opt_flow?: webdriver.promise.ControlFlow);
         constructor(session: webdriver.promise.Promise<Session>, executor: CommandExecutor, opt_flow?: webdriver.promise.ControlFlow);

        //endregion

        //region Static Properties

        static Navigation: WebDriverNavigation;
        static Options: WebDriverOptions;
        static Timeouts: WebDriverTimeouts;
        static Window: WebDriverWindow;
        static Logs: WebDriverLogs;
        static TargetLocator: WebDriverTargetLocator;

        //endregion

        //region StaticMethods

        /**
         * Creates a new WebDriver client for an existing session.
         * @param {!webdriver.CommandExecutor} executor Command executor to use when
         *     querying for session details.
         * @param {string} sessionId ID of the session to attach to.
         * @param {webdriver.promise.ControlFlow=} opt_flow The control flow all driver
         *     commands should execute under. Defaults to the
         *     {@link webdriver.promise.controlFlow() currently active}  control flow.
         * @return {!webdriver.WebDriver} A new client for the specified session.
         */
        static attachToSession(executor: CommandExecutor, sessionId: string, opt_flow?: webdriver.promise.ControlFlow): WebDriver;

        /**
         * Creates a new WebDriver session.
         * @param {!webdriver.CommandExecutor} executor The executor to create the new
         *     session with.
         * @param {!webdriver.Capabilities} desiredCapabilities The desired
         *     capabilities for the new session.
         * @param {webdriver.promise.ControlFlow=} opt_flow The control flow all driver
         *     commands should execute under, including the initial session creation.
         *     Defaults to the {@link webdriver.promise.controlFlow() currently active}
         *     control flow.
         * @return {!webdriver.WebDriver} The driver for the newly created session.
         */
        static createSession(executor: CommandExecutor, desiredCapabilities: Capabilities, opt_flow?: webdriver.promise.ControlFlow): WebDriver;

        //endregion

        //region Methods

        /**
         * @return {!webdriver.promise.ControlFlow} The control flow used by this
         *     instance.
         */
        controlFlow(): webdriver.promise.ControlFlow;

        /**
         * Schedules a {@code webdriver.Command} to be executed by this driver's
         * {@code webdriver.CommandExecutor}.
         * @param {!webdriver.Command} command The command to schedule.
         * @param {string} description A description of the command for debugging.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the command result.
         */
        schedule<T>(command: Command, description: string): webdriver.promise.Promise<T>;

        /**
         * @return {!webdriver.promise.Promise} A promise for this client's session.
         */
        getSession(): webdriver.promise.Promise<Session>;

        /**
         * @return {!webdriver.promise.Promise} A promise that will resolve with the
         *     this instance's capabilities.
         */
        getCapabilities(): webdriver.promise.Promise<Capabilities>;

        /**
         * Schedules a command to quit the current session. After calling quit, this
         * instance will be invalidated and may no longer be used to issue commands
         * against the browser.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the command has completed.
         */
        quit(): webdriver.promise.Promise<void>;

        /**
         * Creates a new action sequence using this driver. The sequence will not be
         * scheduled for execution until {@link webdriver.ActionSequence#perform} is
         * called. Example:
         * <pre><code>
         *   driver.actions().
         *       mouseDown(element1).
         *       mouseMove(element2).
         *       mouseUp().
         *       perform();
         * </code></pre>
         * @return {!webdriver.ActionSequence} A new action sequence for this instance.
         */
        actions(): ActionSequence;

        /**
         * Schedules a command to execute JavaScript in the context of the currently
         * selected frame or window. The script fragment will be executed as the body
         * of an anonymous function. If the script is provided as a function object,
         * that function will be converted to a string for injection into the target
         * window.
         *
         * Any arguments provided in addition to the script will be included as script
         * arguments and may be referenced using the {@code arguments} object.
         * Arguments may be a boolean, number, string, or {@code webdriver.WebElement}.
         * Arrays and objects may also be used as script arguments as long as each item
         * adheres to the types previously mentioned.
         *
         * The script may refer to any variables accessible from the current window.
         * Furthermore, the script will execute in the window's context, thus
         * {@code document} may be used to refer to the current document. Any local
         * variables will not be available once the script has finished executing,
         * though global variables will persist.
         *
         * If the script has a return value (i.e. if the script contains a return
         * statement), then the following steps will be taken for resolving this
         * functions return value:
         * <ul>
         * <li>For a HTML element, the value will resolve to a
         *     {@code webdriver.WebElement}</li>
         * <li>Null and undefined return values will resolve to null</li>
         * <li>Booleans, numbers, and strings will resolve as is</li>
         * <li>Functions will resolve to their string representation</li>
         * <li>For arrays and objects, each member item will be converted according to
         *     the rules above</li>
         * </ul>
         *
         * @param {!(string|Function)} script The script to execute.
         * @param {...*} var_args The arguments to pass to the script.
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *    scripts return value.
         */
        executeScript<T>(script: string, ...var_args: any[]): webdriver.promise.Promise<T>;
        executeScript<T>(script: Function, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to execute asynchronous JavaScript in the context of the
         * currently selected frame or window. The script fragment will be executed as
         * the body of an anonymous function. If the script is provided as a function
         * object, that function will be converted to a string for injection into the
         * target window.
         *
         * Any arguments provided in addition to the script will be included as script
         * arguments and may be referenced using the {@code arguments} object.
         * Arguments may be a boolean, number, string, or {@code webdriver.WebElement}.
         * Arrays and objects may also be used as script arguments as long as each item
         * adheres to the types previously mentioned.
         *
         * Unlike executing synchronous JavaScript with
         * {@code webdriver.WebDriver.prototype.executeScript}, scripts executed with
         * this function must explicitly signal they are finished by invoking the
         * provided callback. This callback will always be injected into the
         * executed function as the last argument, and thus may be referenced with
         * {@code arguments[arguments.length - 1]}. The following steps will be taken
         * for resolving this functions return value against the first argument to the
         * script's callback function:
         * <ul>
         * <li>For a HTML element, the value will resolve to a
         *     {@code webdriver.WebElement}</li>
         * <li>Null and undefined return values will resolve to null</li>
         * <li>Booleans, numbers, and strings will resolve as is</li>
         * <li>Functions will resolve to their string representation</li>
         * <li>For arrays and objects, each member item will be converted according to
         *     the rules above</li>
         * </ul>
         *
         * Example #1: Performing a sleep that is synchronized with the currently
         * selected window:
         * <code><pre>
         * var start = new Date().getTime();
         * driver.executeAsyncScript(
         *     'window.setTimeout(arguments[arguments.length - 1], 500);').
         *     then(function() {
         *       console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');
         *     });
         * </pre></code>
         *
         * Example #2: Synchronizing a test with an AJAX application:
         * <code><pre>
         * var button = driver.findElement(By.id('compose-button'));
         * button.click();
         * driver.executeAsyncScript(
         *     'var callback = arguments[arguments.length - 1];' +
         *     'mailClient.getComposeWindowWidget().onload(callback);');
         * driver.switchTo().frame('composeWidget');
         * driver.findElement(By.id('to')).sendKEys('dog@example.com');
         * </pre></code>
         *
         * Example #3: Injecting a XMLHttpRequest and waiting for the result. In this
         * example, the inject script is specified with a function literal. When using
         * this format, the function is converted to a string for injection, so it
         * should not reference any symbols not defined in the scope of the page under
         * test.
         * <code><pre>
         * driver.executeAsyncScript(function() {
         *   var callback = arguments[arguments.length - 1];
         *   var xhr = new XMLHttpRequest();
         *   xhr.open("GET", "/resource/data.json", true);
         *   xhr.onreadystatechange = function() {
         *     if (xhr.readyState == 4) {
         *       callback(xhr.resposneText);
         *     }
         *   }
         *   xhr.send('');
         * }).then(function(str) {
         *   console.log(JSON.parse(str)['food']);
         * });
         * </pre></code>
         *
         * @param {!(string|Function)} script The script to execute.
         * @param {...*} var_args The arguments to pass to the script.
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *    scripts return value.
         */
        executeAsyncScript<T>(script: string, ...var_args: any[]): webdriver.promise.Promise<T>;
        executeAsyncScript<T>(script: Function, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to execute a custom function.
         * @param {!Function} fn The function to execute.
         * @param {Object=} opt_scope The object in whose scope to execute the function.
         * @param {...*} var_args Any arguments to pass to the function.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     function's result.
         */
        call<T>(fn: Function, opt_scope?: any, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to wait for a condition to hold, as defined by some
         * user supplied function. If any errors occur while evaluating the wait, they
         * will be allowed to propagate.
         *
         * <p>In the event a condition returns a {@link webdriver.promise.Promise}, the
         * polling loop will wait for it to be resolved and use the resolved value for
         * evaluating whether the condition has been satisfied. The resolution time for
         * a promise is factored into whether a wait has timed out.
         *
         * @param {!(webdriver.until.Condition.<T>|
         *           function(!webdriver.WebDriver): T)} condition Either a condition
         *     object, or a function to evaluate as a condition.
         * @param {number} timeout How long to wait for the condition to be true.
         * @param {string=} opt_message An optional message to use if the wait times
         *     out.
         * @return {!webdriver.promise.Promise.<T>} A promise that will be fulfilled
         *     with the first truthy value returned by the condition function, or
         *     rejected if the condition times out.
         * @template T
         */
        wait<T>(condition: webdriver.until.Condition<T>, timeout: number, opt_message?: string): webdriver.promise.Promise<T>;
        wait<T>(condition: (webdriver: WebDriver) => any, timeout: number, opt_message?: string): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to make the driver sleep for the given amount of time.
         * @param {number} ms The amount of time, in milliseconds, to sleep.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     sleep has finished.
         */
        sleep(ms: number): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to retrieve they current window handle.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current window handle.
         */
        getWindowHandle(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to retrieve the current list of available window handles.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with an
         *     array of window handles.
         */
        getAllWindowHandles(): webdriver.promise.Promise<string[]>;

        /**
         * Schedules a command to retrieve the current page's source. The page source
         * returned is a representation of the underlying DOM: do not expect it to be
         * formatted or escaped in the same way as the response sent from the web
         * server.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current page source.
         */
        getPageSource(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to close the current window.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        close(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to navigate to the given URL.
         * @param {string} url The fully qualified URL to open.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     document has finished loading.
         */
        get(url: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to retrieve the URL of the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current URL.
         */
        getCurrentUrl(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to retrieve the current page's title.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current page's title.
         */
        getTitle(): webdriver.promise.Promise<string>;

        /**
         * Schedule a command to find an element on the page. If the element cannot be
         * found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will be returned
         * by the driver. Unlike other commands, this error cannot be suppressed. In
         * other words, scheduling a command to find an element doubles as an assert
         * that the element is present on the page. To test whether an element is
         * present on the page, use {@code #isElementPresent} instead.
         *
         * <p>The search criteria for find an element may either be a
         * {@code webdriver.Locator} object, or a simple JSON object whose sole key
         * is one of the accepted locator strategies, as defined by
         * {@code webdriver.Locator.Strategy}. For example, the following two statements
         * are equivalent:
         * <code><pre>
         * var e1 = driver.findElement(By.id('foo'));
         * var e2 = driver.findElement({id:'foo'});
         * </pre></code>
         *
         * <p>When running in the browser, a WebDriver cannot manipulate DOM elements
         * directly; it may do so only through a {@link webdriver.WebElement} reference.
         * This function may be used to generate a WebElement from a DOM element. A
         * reference to the DOM element will be stored in a known location and this
         * driver will attempt to retrieve it through {@link #executeScript}. If the
         * element cannot be found (eg, it belongs to a different document than the
         * one this instance is currently focused on), a
         * {@link bot.ErrorCode.NO_SUCH_ELEMENT} error will be returned.
         *
         * @param {!(webdriver.Locator|Object.<string>|Element)} locatorOrElement The
         *     locator strategy to use when searching for the element, or the actual
         *     DOM element to be located by the server.
         * @param {...} var_args Arguments to pass to {@code #executeScript} if using a
         *     JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.WebElement} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locatorOrElement: Locator, ...var_args: any[]): WebElementPromise;
        findElement(locatorOrElement: any, ...var_args: any[]): WebElementPromise;

        /**
         * Schedules a command to test if an element is present on the page.
         *
         * <p>If given a DOM element, this function will check if it belongs to the
         * document the driver is currently focused on. Otherwise, the function will
         * test if at least one element can be found with the given search criteria.
         *
         * @param {!(webdriver.Locator|Object.<string>|Element)} locatorOrElement The
         *     locator strategy to use when searching for the element, or the actual
         *     DOM element to be located by the server.
         * @param {...} var_args Arguments to pass to {@code #executeScript} if using a
         *     JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.promise.Promise} A promise that will resolve to whether
         *     the element is present on the page.
         */
        isElementPresent(locatorOrElement: Locator, ...var_args: any[]): webdriver.promise.Promise<boolean>;
        isElementPresent(locatorOrElement: any, ...var_args: any[]): webdriver.promise.Promise<boolean>;

        /**
         * Schedule a command to search for multiple elements on the page.
         *
         * @param {webdriver.Locator|Object.<string>} locator The locator
         *     strategy to use when searching for the element.
         * @param {...} var_args Arguments to pass to {@code #executeScript} if using a
         *     JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to an
         *     array of the located {@link webdriver.WebElement}s.
         */
        findElements(locator: Locator, ...var_args: any[]): webdriver.promise.Promise<WebElement[]>;
        findElements(locator: any, ...var_args: any[]): webdriver.promise.Promise<WebElement[]>;

        /**
         * Schedule a command to take a screenshot. The driver makes a best effort to
         * return a screenshot of the following, in order of preference:
         * <ol>
         *   <li>Entire page
         *   <li>Current window
         *   <li>Visible portion of the current frame
         *   <li>The screenshot of the entire display containing the browser
         * </ol>
         *
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     screenshot as a base-64 encoded PNG.
         */
        takeScreenshot(): webdriver.promise.Promise<string>;

        /**
         * @return {!webdriver.WebDriver.Options} The options interface for this
         *     instance.
         */
        manage(): WebDriverOptions;

        /**
         * @return {!webdriver.WebDriver.Navigation} The navigation interface for this
         *     instance.
         */
        navigate(): WebDriverNavigation;

        /**
         * @return {!webdriver.WebDriver.TargetLocator} The target locator interface for
         *     this instance.
         */
        switchTo(): WebDriverTargetLocator;

        //endregion
    }

    interface IWebElementId {
        ELEMENT: string;
    }

    /**
     * Represents a DOM element. WebElements can be found by searching from the
     * document root using a {@code webdriver.WebDriver} instance, or by searching
     * under another {@code webdriver.WebElement}:
     * <pre><code>
     *   driver.get('http://www.google.com');
     *   var searchForm = driver.findElement(By.tagName('form'));
     *   var searchBox = searchForm.findElement(By.name('q'));
     *   searchBox.sendKeys('webdriver');
     * </code></pre>
     *
     * The WebElement is implemented as a promise for compatibility with the promise
     * API. It will always resolve itself when its internal state has been fully
     * resolved and commands may be issued against the element. This can be used to
     * catch errors when an element cannot be located on the page:
     * <pre><code>
     *   driver.findElement(By.id('not-there')).then(function(element) {
     *     alert('Found an element that was not expected to be there!');
     *   }, function(error) {
     *     alert('The element was not found, as expected');
     *   });
     * </code></pre>
     */

    interface IWebElement {
        //region Methods

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the click command has completed.
         */
        click(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to type a sequence on the DOM element represented by this
         * instance.
         * <p/>
         * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
         * processed in the keysequence, that key state is toggled until one of the
         * following occurs:
         * <ul>
         * <li>The modifier key is encountered again in the sequence. At this point the
         * state of the key is toggled (along with the appropriate keyup/down events).
         * </li>
         * <li>The {@code webdriver.Key.NULL} key is encountered in the sequence. When
         * this key is encountered, all modifier keys current in the down state are
         * released (with accompanying keyup events). The NULL key can be used to
         * simulate common keyboard shortcuts:
         * <code>
         *     element.sendKeys("text was",
         *                      webdriver.Key.CONTROL, "a", webdriver.Key.NULL,
         *                      "now text is");
         *     // Alternatively:
         *     element.sendKeys("text was",
         *                      webdriver.Key.chord(webdriver.Key.CONTROL, "a"),
         *                      "now text is");
         * </code></li>
         * <li>The end of the keysequence is encountered. When there are no more keys
         * to type, all depressed modifier keys are released (with accompanying keyup
         * events).
         * </li>
         * </ul>
         * <strong>Note:</strong> On browsers where native keyboard events are not yet
         * supported (e.g. Firefox on OS X), key events will be synthesized. Special
         * punctionation keys will be synthesized according to a standard QWERTY en-us
         * keyboard layout.
         *
         * @param {...string} var_args The sequence of keys to
         *     type. All arguments will be joined into a single sequence (var_args is
         *     permitted for convenience).
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     keys have been typed.
         */
        sendKeys(...var_args: string[]): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's tag name.
         */
        getTagName(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the computed style of the element
         * represented by this instance. If the element inherits the named style from
         * its parent, the parent will be queried for its value.  Where possible, color
         * values will be converted to their hex representation (e.g. #00ff00 instead of
         * rgb(0, 255, 0)).
         * <p/>
         * <em>Warning:</em> the value returned will be as the browser interprets it, so
         * it may be tricky to form a proper assertion.
         *
         * @param {string} cssStyleProperty The name of the CSS style property to look
         *     up.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     requested CSS value.
         */
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the value of the given attribute of the
         * element. Will return the current value even if it has been modified after the
         * page has been loaded. More exactly, this method will return the value of the
         * given attribute, unless that attribute is not present, in which case the
         * value of the property with the same name is returned. If neither value is
         * set, null is returned. The "style" attribute is converted as best can be to a
         * text representation with a trailing semi-colon. The following are deemed to
         * be "boolean" attributes and will be returned as thus:
         *
         * <p>async, autofocus, autoplay, checked, compact, complete, controls, declare,
         * defaultchecked, defaultselected, defer, disabled, draggable, ended,
         * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
         * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
         * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
         * selected, spellcheck, truespeed, willvalidate
         *
         * <p>Finally, the following commonly mis-capitalized attribute/property names
         * are evaluated as expected:
         * <ul>
         *   <li>"class"
         *   <li>"readonly"
         * </ul>
         * @param {string} attributeName The name of the attribute to query.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     attribute's value.
         */
        getAttribute(attributeName: string): webdriver.promise.Promise<string>;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's visible text.
         */
        getText(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's size as a {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise<ISize>;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     element's location as a {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise<ILocation>;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the form has been submitted.
         */
        submit(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to clear the {@code value} of this element. This command
         * has no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the element has been cleared.
         */
        clear(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise<string>;

        /**
         * @return {!webdriver.promise.Promise.<webdriver.WebElement.Id>} A promise
         *     that resolves to this element's JSON representation as defined by the
         *     WebDriver wire protocol.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
         */
        getId(): webdriver.promise.Promise<IWebElementId>

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise<string>;

        //endregion
    }

    interface IWebElementFinders {
        /**
         * Schedule a command to find a descendant of this element. If the element
         * cannot be found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will
         * be returned by the driver. Unlike other commands, this error cannot be
         * suppressed. In other words, scheduling a command to find an element doubles
         * as an assert that the element is present on the page. To test whether an
         * element is present on the page, use {@code #isElementPresent} instead.
         *
         * <p>The search criteria for an element may be defined using one of the
         * factories in the {@link webdriver.By} namespace, or as a short-hand
         * {@link webdriver.By.Hash} object. For example, the following two statements
         * are equivalent:
         * <code><pre>
         * var e1 = element.findElement(By.id('foo'));
         * var e2 = element.findElement({id:'foo'});
         * </pre></code>
         *
         * <p>You may also provide a custom locator function, which takes as input
         * this WebDriver instance and returns a {@link webdriver.WebElement}, or a
         * promise that will resolve to a WebElement. For example, to find the first
         * visible link on a page, you could write:
         * <code><pre>
         * var link = element.findElement(firstVisibleLink);
         *
         * function firstVisibleLink(element) {
         *   var links = element.findElements(By.tagName('a'));
         *   return webdriver.promise.filter(links, function(link) {
         *     return links.isDisplayed();
         *   }).then(function(visibleLinks) {
         *     return visibleLinks[0];
         *   });
         * }
         * </pre></code>
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the element.
         * @return {!webdriver.WebElement} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locator: Locator): WebElementPromise;
        findElement(locator: any): WebElementPromise;

        /**
         * Schedules a command to test if there is at least one descendant of this
         * element that matches the given search criteria.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the element.
         * @return {!webdriver.promise.Promise.<boolean>} A promise that will be
         *     resolved with whether an element could be located on the page.
         */
        isElementPresent(locator: Locator): webdriver.promise.Promise<boolean>;
        isElementPresent(locator: any): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to find all of the descendants of this element that
         * match the given search criteria.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the elements.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>} A
         *     promise that will resolve to an array of WebElements.
         */
        findElements(locator: Locator): webdriver.promise.Promise<WebElement[]>;
        findElements(locator: any): webdriver.promise.Promise<WebElement[]>;
    }

    class WebElement implements IWebElement, IWebElementFinders {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent WebDriver instance for this
         *     element.
         * @param {!(webdriver.promise.Promise.<webdriver.WebElement.Id>|
         *           webdriver.WebElement.Id)} id The server-assigned opaque ID for the
         *     underlying DOM element.
         * @constructor
         */
        constructor(driver: WebDriver, id: webdriver.promise.Promise<IWebElementId>);
        constructor(driver: WebDriver, id: IWebElementId);

        //endregion

        //region Static Properties

        /**
         * The property key used in the wire protocol to indicate that a JSON object
         * contains the ID of a WebElement.
         * @type {string}
         * @const
         */
        static ELEMENT_KEY: string;

        //endregion

        //region Methods

        /**
         * @return {!webdriver.WebDriver} The parent driver for this instance.
         */
        getDriver(): WebDriver;

        /**
         * Schedule a command to find a descendant of this element. If the element
         * cannot be found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will
         * be returned by the driver. Unlike other commands, this error cannot be
         * suppressed. In other words, scheduling a command to find an element doubles
         * as an assert that the element is present on the page. To test whether an
         * element is present on the page, use {@code #isElementPresent} instead.
         *
         * <p>The search criteria for an element may be defined using one of the
         * factories in the {@link webdriver.By} namespace, or as a short-hand
         * {@link webdriver.By.Hash} object. For example, the following two statements
         * are equivalent:
         * <code><pre>
         * var e1 = element.findElement(By.id('foo'));
         * var e2 = element.findElement({id:'foo'});
         * </pre></code>
         *
         * <p>You may also provide a custom locator function, which takes as input
         * this WebDriver instance and returns a {@link webdriver.WebElement}, or a
         * promise that will resolve to a WebElement. For example, to find the first
         * visible link on a page, you could write:
         * <code><pre>
         * var link = element.findElement(firstVisibleLink);
         *
         * function firstVisibleLink(element) {
         *   var links = element.findElements(By.tagName('a'));
         *   return webdriver.promise.filter(links, function(link) {
         *     return links.isDisplayed();
         *   }).then(function(visibleLinks) {
         *     return visibleLinks[0];
         *   });
         * }
         * </pre></code>
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the element.
         * @return {!webdriver.WebElement} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locator: Locator): WebElementPromise;
        findElement(locator: any): WebElementPromise;

        /**
         * Schedules a command to test if there is at least one descendant of this
         * element that matches the given search criteria.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the element.
         * @return {!webdriver.promise.Promise.<boolean>} A promise that will be
         *     resolved with whether an element could be located on the page.
         */
        isElementPresent(locator: Locator): webdriver.promise.Promise<boolean>;
        isElementPresent(locator: any): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to find all of the descendants of this element that
         * match the given search criteria.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the elements.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>} A
         *     promise that will resolve to an array of WebElements.
         */
        findElements(locator: Locator): webdriver.promise.Promise<WebElement[]>;
        findElements(locator: any): webdriver.promise.Promise<WebElement[]>;

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the click command has completed.
         */
        click(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to type a sequence on the DOM element represented by this
         * instance.
         * <p/>
         * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
         * processed in the keysequence, that key state is toggled until one of the
         * following occurs:
         * <ul>
         * <li>The modifier key is encountered again in the sequence. At this point the
         * state of the key is toggled (along with the appropriate keyup/down events).
         * </li>
         * <li>The {@code webdriver.Key.NULL} key is encountered in the sequence. When
         * this key is encountered, all modifier keys current in the down state are
         * released (with accompanying keyup events). The NULL key can be used to
         * simulate common keyboard shortcuts:
         * <code>
         *     element.sendKeys("text was",
         *                      webdriver.Key.CONTROL, "a", webdriver.Key.NULL,
         *                      "now text is");
         *     // Alternatively:
         *     element.sendKeys("text was",
         *                      webdriver.Key.chord(webdriver.Key.CONTROL, "a"),
         *                      "now text is");
         * </code></li>
         * <li>The end of the keysequence is encountered. When there are no more keys
         * to type, all depressed modifier keys are released (with accompanying keyup
         * events).
         * </li>
         * </ul>
         * <strong>Note:</strong> On browsers where native keyboard events are not yet
         * supported (e.g. Firefox on OS X), key events will be synthesized. Special
         * punctionation keys will be synthesized according to a standard QWERTY en-us
         * keyboard layout.
         *
         * @param {...string} var_args The sequence of keys to
         *     type. All arguments will be joined into a single sequence (var_args is
         *     permitted for convenience).
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     keys have been typed.
         */
        sendKeys(...var_args: string[]): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's tag name.
         */
        getTagName(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the computed style of the element
         * represented by this instance. If the element inherits the named style from
         * its parent, the parent will be queried for its value.  Where possible, color
         * values will be converted to their hex representation (e.g. #00ff00 instead of
         * rgb(0, 255, 0)).
         * <p/>
         * <em>Warning:</em> the value returned will be as the browser interprets it, so
         * it may be tricky to form a proper assertion.
         *
         * @param {string} cssStyleProperty The name of the CSS style property to look
         *     up.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     requested CSS value.
         */
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the value of the given attribute of the
         * element. Will return the current value even if it has been modified after the
         * page has been loaded. More exactly, this method will return the value of the
         * given attribute, unless that attribute is not present, in which case the
         * value of the property with the same name is returned. If neither value is
         * set, null is returned. The "style" attribute is converted as best can be to a
         * text representation with a trailing semi-colon. The following are deemed to
         * be "boolean" attributes and will be returned as thus:
         *
         * <p>async, autofocus, autoplay, checked, compact, complete, controls, declare,
         * defaultchecked, defaultselected, defer, disabled, draggable, ended,
         * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
         * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
         * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
         * selected, spellcheck, truespeed, willvalidate
         *
         * <p>Finally, the following commonly mis-capitalized attribute/property names
         * are evaluated as expected:
         * <ul>
         *   <li>"class"
         *   <li>"readonly"
         * </ul>
         * @param {string} attributeName The name of the attribute to query.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     attribute's value.
         */
        getAttribute(attributeName: string): webdriver.promise.Promise<string>;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's visible text.
         */
        getText(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's size as a {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise<ISize>;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     element's location as a {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise<ILocation>;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the form has been submitted.
         */
        submit(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to clear the {@code value} of this element. This command
         * has no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the element has been cleared.
         */
        clear(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise<string>;

        /**
         * @return {!webdriver.promise.Promise.<webdriver.WebElement.Id>} A promise
         *     that resolves to this element's JSON representation as defined by the
         *     WebDriver wire protocol.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
         */
        getId(): webdriver.promise.Promise<IWebElementId>;

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise<string>;

        //endregion

        //region Static Methods

        /**
         * Compares to WebElements for equality.
         * @param {!webdriver.WebElement} a A WebElement.
         * @param {!webdriver.WebElement} b A WebElement.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to
         *     whether the two WebElements are equal.
         */
        static equals(a: WebElement, b: WebElement): webdriver.promise.Promise<boolean>;

        //endregion
    }

    /**
     * WebElementPromise is a promise that will be fulfilled with a WebElement.
     * This serves as a forward proxy on WebElement, allowing calls to be
     * scheduled without directly on this instance before the underlying
     * WebElement has been fulfilled. In other words, the following two statements
     * are equivalent:
     * <pre><code>
     *     driver.findElement({id: 'my-button'}).click();
     *     driver.findElement({id: 'my-button'}).then(function(el) {
     *       return el.click();
     *     });
     * </code></pre>
     *
     * @param {!webdriver.WebDriver} driver The parent WebDriver instance for this
     *     element.
     * @param {!webdriver.promise.Promise.<!webdriver.WebElement>} el A promise
     *     that will resolve to the promised element.
     * @constructor
     * @extends {webdriver.WebElement}
     * @implements {webdriver.promise.Thenable.<!webdriver.WebElement>}
     * @final
     */
    class WebElementPromise extends WebElement implements webdriver.promise.IThenable<WebElement> {
        /**
         * Cancels the computation of this promise's value, rejecting the promise in the
         * process. This method is a no-op if the promise has alreayd been resolved.
         *
         * @param {string=} opt_reason The reason this promise is being cancelled.
         */
        cancel(opt_reason?: string): void;


        /** @return {boolean} Whether this promise's value is still being computed. */
        isPending(): boolean;


        /**
         * Registers listeners for when this instance is resolved.
         *
         * @param opt_callback The
         *     function to call if this promise is successfully resolved. The function
         *     should expect a single argument: the promise's resolved value.
         * @param opt_errback The
         *     function to call if this promise is rejected. The function should expect
         *     a single argument: the rejection reason.
         * @return A new promise which will be
         *     resolved with the result of the invoked callback.
         */
        then<R>(opt_callback?: (value: WebElement) => webdriver.promise.Promise<R>, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;

        /**
         * Registers listeners for when this instance is resolved.
         *
         * @param opt_callback The
         *     function to call if this promise is successfully resolved. The function
         *     should expect a single argument: the promise's resolved value.
         * @param opt_errback The
         *     function to call if this promise is rejected. The function should expect
         *     a single argument: the rejection reason.
         * @return A new promise which will be
         *     resolved with the result of the invoked callback.
         */
        then<R>(opt_callback?: (value: WebElement) => R, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;


        /**
         * Registers a listener for when this promise is rejected. This is synonymous
         * with the {@code catch} clause in a synchronous API:
         * <pre><code>
         *   // Synchronous API:
         *   try {
         *     doSynchronousWork();
         *   } catch (ex) {
         *     console.error(ex);
         *   }
         *
         *   // Asynchronous promise API:
         *   doAsynchronousWork().thenCatch(function(ex) {
         *     console.error(ex);
         *   });
         * </code></pre>
         *
         * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
         *     to call if this promise is rejected. The function should expect a single
         *     argument: the rejection reason.
         * @return {!webdriver.promise.Promise.<R>} A new promise which will be
         *     resolved with the result of the invoked callback.
         * @template R
         */
        thenCatch<R>(errback: (error: any) => any): webdriver.promise.Promise<R>;


        /**
         * Registers a listener to invoke when this promise is resolved, regardless
         * of whether the promise's value was successfully computed. This function
         * is synonymous with the {@code finally} clause in a synchronous API:
         * <pre><code>
         *   // Synchronous API:
         *   try {
         *     doSynchronousWork();
         *   } finally {
         *     cleanUp();
         *   }
         *
         *   // Asynchronous promise API:
         *   doAsynchronousWork().thenFinally(cleanUp);
         * </code></pre>
         *
         * <b>Note:</b> similar to the {@code finally} clause, if the registered
         * callback returns a rejected promise or throws an error, it will silently
         * replace the rejection error (if any) from this promise:
         * <pre><code>
         *   try {
         *     throw Error('one');
         *   } finally {
         *     throw Error('two');  // Hides Error: one
         *   }
         *
         *   webdriver.promise.rejected(Error('one'))
         *       .thenFinally(function() {
         *         throw Error('two');  // Hides Error: one
         *       });
         * </code></pre>
         *
         *
         * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
         *     to call when this promise is resolved.
         * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
         *     with the callback result.
         * @template R
         */
        thenFinally<R>(callback: () => any): webdriver.promise.Promise<R>;
    }

    interface ILocatorStrategy {
        className(value: string): Locator;
        css(value: string): Locator;
        id(value: string): Locator;
        js(script: any, ...var_args: any[]): (WebDriver: webdriver.WebDriver) => webdriver.promise.Promise<any>;
        linkText(value: string): Locator;
        name(value: string): Locator;
        partialLinkText(value: string): Locator;
        tagName(value: string): Locator;
        xpath(value: string): Locator;
    }

    var By: ILocatorStrategy;

    /**
     * An element locator.
     */
    interface Locator {

        //region Properties

        /**
         * The search strategy to use when searching for an element.
         * @type {string}
         */
        using: string;

        /**
         * The search target for this locator.
         * @type {string}
         */
        value: string;

        //endregion

        //region Methods

        /** @return {string} String representation of this locator. */
        toString(): string;

        //endregion
    }

    /**
     * Contains information about a WebDriver session.
     */
    class Session {

        //region Constructors

        /**
         * @param {string} id The session ID.
         * @param {!(Object|webdriver.Capabilities)} capabilities The session
         *     capabilities.
         * @constructor
         */
        constructor(id: string, capabilities: Capabilities);
        constructor(id: string, capabilities: any);

        //endregion

        //region Methods

        /**
         * @return {string} This session's ID.
         */
        getId(): string;

        /**
         * @return {!webdriver.Capabilities} This session's capabilities.
         */
        getCapabilities(): Capabilities;

        /**
         * Retrieves the value of a specific capability.
         * @param {string} key The capability to retrieve.
         * @return {*} The capability value.
         */
        getCapability(key: string): any;

        /**
         * Returns the JSON representation of this object, which is just the string
         * session ID.
         * @return {string} The JSON representation of this Session.
         */
        toJSON(): string;

        //endregion
    }
}

declare module testing {
    /**
    * Registers a new test suite.
    * @param name The suite name.
    * @param fn The suite function, or {@code undefined} to define a pending test suite.
    */
    function describe(name: string, fn: Function): void;

    /**
     * Defines a suppressed test suite.
     * @param name The suite name.
     * @param fn The suite function, or {@code undefined} to define a pending test suite.
     */
    function xdescribe(name: string, fn: Function): void;

    /**
     * Register a function to call after the current suite finishes.
     * @param fn
     */
    function after(fn: Function): void;

    /**
     * Register a function to call after each test in a suite.
     * @param fn
     */
    function afterEach(fn: Function): void;

    /**
     * Register a function to call before the current suite starts.
     * @param fn
     */
    function before(fn: Function): void;

    /**
     * Register a function to call before each test in a suite.
     * @param fn
     */
    function beforeEach(fn: Function): void;

    /**
     * Add a test to the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function it(name: string, fn: Function): void;

    /**
     * An alias for {@link #it()} that flags the test as the only one that should
     * be run within the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function iit(name: string, fn: Function): void;

    /**
     * Adds a test to the current suite while suppressing it so it is not run.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function xit(name: string, fn: Function): void;
}

declare module 'selenium-webdriver/chrome' {
    export = chrome;
}

declare module 'selenium-webdriver/firefox' {
    export = firefox;
}

declare module 'selenium-webdriver/executors' {
    export = executors;
}

declare module 'selenium-webdriver' {
    export = webdriver;
}

declare module 'selenium-webdriver/testing' {
    export = testing;
}
