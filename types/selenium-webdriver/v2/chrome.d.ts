import * as webdriver from './index';
import * as remote from './remote';

/**
 * Creates a new WebDriver client for Chrome.
 *
 * @extends {webdriver.WebDriver}
 */
export class Driver extends webdriver.WebDriver {
    /**
     * @param {(webdriver.Capabilities|Options)=} opt_config The configuration
     *     options.
     * @param {remote.DriverService=} opt_service The session to use; will use
     *     the {@link getDefaultService default service} by default.
     * @param {webdriver.promise.ControlFlow=} opt_flow The control flow to use, or
     *     {@code null} to use the currently active flow.
     * @constructor
     */
    constructor(
        opt_config?: Options | webdriver.Capabilities,
        opt_service?: remote.DriverService,
        opt_flow?: webdriver.promise.ControlFlow,
    );
}

interface IOptionsValues {
    args: string[];
    binary?: string | undefined;
    detach: boolean;
    extensions: string[];
    localState?: any;
    logFile?: string | undefined;
    prefs?: any;
}

interface IPerfLoggingPrefs {
    enableNetwork: boolean;
    enablePage: boolean;
    enableTimeline: boolean;
    tracingCategories: string;
    bufferUsageReportingInterval: number;
}

/**
 * Class for managing ChromeDriver specific options.
 */
export class Options {
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
     * browser.  Each argument may be specified with or without the '--' prefix
     * (e.g. '--foo' and 'foo'). Arguments with an associated value should be
     * delimited by an '=': 'foo=bar'.
     * @param {...(string|!Array.<string>)} var_args The arguments to add.
     * @return {!Options} A self reference.
     */
    addArguments(...var_args: string[]): Options;

    /**
     * List of Chrome command line switches to exclude that ChromeDriver by default
     * passes when starting Chrome.  Do not prefix switches with '--'.
     *
     * @param {...(string|!Array<string>)} var_args The switches to exclude.
     * @return {!Options} A self reference.
     */
    excludeSwitches(...var_args: string[]): Options;

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
     * (e.g. '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome').
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
     * Sets the user preferences for Chrome's user profile. See the 'Preferences'
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
     * Sets the performance logging preferences. Options include:
     *
     * - `enableNetwork`: Whether or not to collect events from Network domain.
     * - `enablePage`: Whether or not to collect events from Page domain.
     * - `enableTimeline`: Whether or not to collect events from Timeline domain.
     *     Note: when tracing is enabled, Timeline domain is implicitly disabled,
     *     unless `enableTimeline` is explicitly set to true.
     * - `tracingCategories`: A comma-separated string of Chrome tracing categories
     *     for which trace events should be collected. An unspecified or empty
     *     string disables tracing.
     * - `bufferUsageReportingInterval`: The requested number of milliseconds
     *     between DevTools trace buffer usage events. For example, if 1000, then
     *     once per second, DevTools will report how full the trace buffer is. If a
     *     report indicates the buffer usage is 100%, a warning will be issued.
     *
     * @param {{enableNetwork: boolean,
     *          enablePage: boolean,
     *          enableTimeline: boolean,
     *          tracingCategories: string,
     *          bufferUsageReportingInterval: number}} prefs The performance
     *     logging preferences.
     * @return {!Options} A self reference.
     */
    setPerfLoggingPrefs(prefs: IPerfLoggingPrefs): Options;

    /**
     * Sets preferences for the 'Local State' file in Chrome's user data
     * directory.
     * @param {!Object} state Dictionary of local state preferences.
     * @return {!Options} A self reference.
     */
    setLocalState(state: any): Options;

    /**
     * Sets the name of the activity hosting a Chrome-based Android WebView. This
     * option must be set to connect to an [Android WebView](
     * https://sites.google.com/a/chromium.org/chromedriver/getting-started/getting-started---android)
     *
     * @param {string} name The activity name.
     * @return {!Options} A self reference.
     */
    androidActivity(name: string): Options;

    /**
     * Sets the device serial number to connect to via ADB. If not specified, the
     * ChromeDriver will select an unused device at random. An error will be
     * returned if all devices already have active sessions.
     *
     * @param {string} serial The device serial number to connect to.
     * @return {!Options} A self reference.
     */
    androidDeviceSerial(serial: string): Options;

    /**
     * Configures the ChromeDriver to launch Chrome on Android via adb. This
     * function is shorthand for
     * {@link #androidPackage options.androidPackage('com.android.chrome')}.
     * @return {!Options} A self reference.
     */
    androidChrome(): Options;

    /**
     * Sets the package name of the Chrome or WebView app.
     *
     * @param {?string} pkg The package to connect to, or `null` to disable Android
     *     and switch back to using desktop Chrome.
     * @return {!Options} A self reference.
     */
    androidPackage(pkg: string): Options;

    /**
     * Sets the process name of the Activity hosting the WebView (as given by `ps`).
     * If not specified, the process name is assumed to be the same as
     * {@link #androidPackage}.
     *
     * @param {string} processName The main activity name.
     * @return {!Options} A self reference.
     */
    androidProcess(processName: string): Options;

    /**
     * Sets whether to connect to an already-running instead of the specified
     * {@linkplain #androidProcess app} instead of launching the app with a clean
     * data directory.
     *
     * @param {boolean} useRunning Whether to connect to a running instance.
     * @return {!Options} A self reference.
     */
    androidUseRunningApp(useRunning: boolean): Options;

    /**
     * Sets the path to Chrome's log file. This path should exist on the machine
     * that will launch Chrome.
     * @param {string} path Path to the log file to use.
     * @return {!Options} A self reference.
     */
    setChromeLogFile(path: string): Options;

    /**
     * Sets the directory to store Chrome minidumps in. This option is only
     * supported when ChromeDriver is running on Linux.
     * @param {string} path The directory path.
     * @return {!Options} A self reference.
     */
    setChromeMinidumpPath(path: string): Options;

    /**
     * Configures Chrome to emulate a mobile device. For more information, refer
     * to the ChromeDriver project page on [mobile emulation][em]. Configuration
     * options include:
     *
     * - `deviceName`: The name of a pre-configured [emulated device][devem]
     * - `width`: screen width, in pixels
     * - `height`: screen height, in pixels
     * - `pixelRatio`: screen pixel ratio
     *
     * __Example 1: Using a Pre-configured Device__
     *
     *     let options = new chrome.Options().setMobileEmulation(
     *         {deviceName: 'Google Nexus 5'});
     *
     *     let driver = new chrome.Driver(options);
     *
     * __Example 2: Using Custom Screen Configuration__
     *
     *     let options = new chrome.Options().setMobileEmulation({
     *         width: 360,
     *         height: 640,
     *         pixelRatio: 3.0
     *     });
     *
     *     let driver = new chrome.Driver(options);
     *
     *
     * [em]: https://sites.google.com/a/chromium.org/chromedriver/mobile-emulation
     * [devem]: https://developer.chrome.com/devtools/docs/device-mode
     *
     * @param {?({deviceName: string}|
     *           {width: number, height: number, pixelRatio: number})} config The
     *     mobile emulation configuration, or `null` to disable emulation.
     * @return {!Options} A self reference.
     */
    setMobileEmulation(config: any): Options;

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
}

/**
 * Creates {@link remote.DriverService} instances that manage a ChromeDriver
 * server.
 */
export class ServiceBuilder {
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
     * Sets which port adb is listening to. _The ChromeDriver will connect to adb
     * if an {@linkplain Options#androidPackage Android session} is requested, but
     * adb **must** be started beforehand._
     *
     * @param {number} port Which port adb is running on.
     * @return {!ServiceBuilder} A self reference.
     */
    setAdbPort(port: number): ServiceBuilder;

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
     * Sets the base path for WebDriver REST commands (e.g. '/wd/hub').
     * By default, the driver will accept commands relative to '/'.
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
    setStdio(config: string | Array<string | number | any>): ServiceBuilder;

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
    build(): remote.DriverService;
}

/**
 * Returns the default ChromeDriver service. If such a service has not been
 * configured, one will be constructed using the default configuration for
 * a ChromeDriver executable found on the system PATH.
 * @return {!remote.DriverService} The default ChromeDriver service.
 */
export function getDefaultService(): remote.DriverService;

/**
 * Sets the default service to use for new ChromeDriver instances.
 * @param {!remote.DriverService} service The service to use.
 * @throws {Error} If the default service is currently running.
 */
export function setDefaultService(service: remote.DriverService): void;
