import * as http from "./http";
import * as webdriver from "./index";
import * as remote from "./remote";

/**
 * Creates a new WebDriver client for Chrome.
 */
export class Driver extends webdriver.ChromiumWebDriver {
    /**
     * Creates a new session with the ChromeDriver.
     *
     * @param {(Capabilities|Options)=} opt_config The configuration options.
     * @param {(remote.DriverService|http.Executor)=} opt_serviceExecutor Either
     *     a  DriverService to use for the remote end, or a preconfigured executor
     *     for an externally managed endpoint. If neither is provided, the
     *     {@linkplain ##getDefaultService default service} will be used by
     *     default.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        opt_config?: Options | webdriver.CreateSessionCapabilities,
        opt_service?: remote.DriverService | http.Executor,
    ): Driver;
}

export interface IOptionsValues {
    args: string[];
    binary?: string | undefined;
    detach: boolean;
    extensions: string[];
    localState?: any;
    logFile?: string | undefined;
    prefs?: any;
}

export interface IPerfLoggingPrefs {
    enableNetwork?: boolean | undefined;
    enablePage?: boolean | undefined;
    enableTimeline?: boolean | undefined;
    traceCategories?: string | undefined;
    bufferUsageReportingInterval?: number | undefined;
}

/**
 * Class for managing ChromeDriver specific options.
 */
export class Options extends webdriver.Capabilities {
    /** */
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
     * Sets the address of a Chromium remote debugging server to connect to.
     * Address should be of the form "{hostname|IP address}:port"
     * (e.g. "localhost:9222").
     *
     * @param {string} address The address to connect to.
     * @return {!Options} A self reference.
     */
    debuggerAddress(address: string): Options;

    /**
     * Sets the initial window size.
     *
     * @param {{width: number, height: number}} size The desired window size.
     * @return {!Options} A self reference.
     * @throws {TypeError} if width or height is unspecified, not a number, or
     *     less than or equal to 0.
     */
    windowSize(size: { width: number; height: number }): Options;

    /**
     * List of Chrome command line switches to exclude that ChromeDriver by
     * default passes when starting Chrome.  Do not prefix switches with '--'.
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
     * Sets the performance logging preferences. Options include:
     *
     * - `enableNetwork`: Whether or not to collect events from Network domain.
     * - `enablePage`: Whether or not to collect events from Page domain.
     * - `enableTimeline`: Whether or not to collect events from Timeline domain.
     *     Note: when tracing is enabled, Timeline domain is implicitly disabled,
     *     unless `enableTimeline` is explicitly set to true.
     * - `tracingCategories`: A comma-separated string of Chrome tracing
     * categories for which trace events should be collected. An unspecified or
     * empty string disables tracing.
     * - `bufferUsageReportingInterval`: The requested number of milliseconds
     *     between DevTools trace buffer usage events. For example, if 1000, then
     *     once per second, DevTools will report how full the trace buffer is. If
     * a report indicates the buffer usage is 100%, a warning will be issued.
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
     * @param {?string} pkg The package to connect to, or `null` to disable
     *     Android and switch back to using desktop Chrome.
     * @return {!Options} A self reference.
     */
    androidPackage(pkg: string): Options;

    /**
     * Sets the process name of the Activity hosting the WebView (as given by
     * `ps`). If not specified, the process name is assumed to be the same as
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
     * [em]: https://sites.google.com/a/chromium.org/chromedriver/mobile-emulation
     * [devem]: https://developer.chrome.com/devtools/docs/device-mode
     *
     * @param {?({deviceName: string}|
     *           {width: number, height: number, pixelRatio: number})} config The
     *     mobile emulation configuration, or `null` to disable emulation.
     * @return {!Options} A self reference.
     */
    setMobileEmulation(config: any): Options;
}

/**
 * Creates {@link remote.DriverService} instances that manage a ChromeDriver
 * server.
 */
export class ServiceBuilder extends remote.DriverService.Builder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *     the builder will attempt to locate the chromedriver on the current
     *     PATH.
     * @throws {Error} If provided executable does not exist, or the chromedriver
     *     cannot be found on the PATH.
     */
    constructor(opt_exe?: string);

    /**
     * Sets which port adb is listening to. _The ChromeDriver will connect to adb
     * if an {@linkplain Options#androidPackage Android session} is requested, but
     * adb **must** be started beforehand._
     *
     * @param {number} port Which port adb is running on.
     * @return {!ServiceBuilder} A self reference.
     */
    setAdbPort(port: number): this;

    /**
     * Sets the path of the log file the driver should log to. If a log file is
     * not specified, the driver will log to stderr.
     * @param {string} path Path of the log file to use.
     * @return {!ServiceBuilder} A self reference.
     */
    loggingTo(path: string): this;

    /**
     * Enables verbose logging.
     * @return {!ServiceBuilder} A self reference.
     */
    enableVerboseLogging(): this;

    /**
     * Sets the number of threads the driver should use to manage HTTP requests.
     * By default, the driver will use 4 threads.
     * @param {number} n The number of threads to use.
     * @return {!ServiceBuilder} A self reference.
     */
    setNumHttpThreads(n: number): this;
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

/**
 * _Synchronously_ attempts to locate the chromedriver executable on the current
 * system.
 *
 * @return {?string} the located executable, or `null`.
 */
export function locateSynchronously(): string | null;
