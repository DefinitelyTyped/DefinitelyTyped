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
        addExtensions(...var_args): Options;


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
    function setDefaultService(service: any);
}

declare module 'selenium-webdriver/chrome' {
    export = chrome;
}
