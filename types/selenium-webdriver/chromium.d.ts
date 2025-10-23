import { Executor } from "./http";
import * as webdriver from "./index";
import * as remote from "./remote";

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * a WebDriver server in a child process.
 */
export class ServiceBuilder extends remote.DriverService.Builder {
    /**
     * @param {string=} exe Path to the server executable to use. Subclasses
     * should ensure a valid path to the appropriate exe is provided.
     */
    constructor(exe?: string);

    /**
     * Sets which port adb is listening to. _The driver will connect to adb
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
     * Enables Chrome logging.
     * @returns {!ServiceBuilder} A self reference.
     */
    enableChromeLogging(): ServiceBuilder;

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
     * @override
     */
    setPath(path: string): any;
}

/**
 * Class for managing WebDriver options specific to a Chromium-based browser.
 */
export class Options extends webdriver.Capabilities {
    /**
     * @param {(Capabilities|Map<string, ?>|Object)=} other Another set of
     *     capabilities to initialize this instance from.
     */
    constructor(other?: webdriver.Capabilities | Map<string, any> | object);

    /**
     * Add additional command line arguments to use when launching the browser.
     * Each argument may be specified with or without the "--" prefix
     * (e.g. "--foo" and "foo"). Arguments with an associated value should be
     * delimited by an "=": "foo=bar".
     *
     * @param {...(string|!Array<string>)} args The arguments to add.
     * @return {!Options} A self reference.
     */
    addArguments(...args: string[]): Options;

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
    windowSize({ width, height }: { width: number; height: number }): Options;

    /**
     * List of Chrome command line switches to exclude that ChromeDriver by default
     * passes when starting Chrome.  Do not prefix switches with "--".
     *
     * @param {...(string|!Array<string>)} args The switches to exclude.
     * @return {!Options} A self reference.
     */
    excludeSwitches(...args: string[]): Options;

    /**
     * Add additional extensions to install when launching the browser. Each extension
     * should be specified as the path to the packed CRX file, or a Buffer for an
     * extension.
     * @param {...(string|!Buffer|!Array<(string|!Buffer)>)} args The
     *     extensions to add.
     * @return {!Options} A self reference.
     */
    addExtensions(...args: Array<string | Buffer>): Options;

    /**
     * Sets the path to the browser binary to use. On Mac OS X, this path should
     * reference the actual Chromium executable, not just the application binary
     * (e.g. "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
     *
     * The binary path can be absolute or relative to the WebDriver server
     * executable, but it must exist on the machine that will launch the browser.
     *
     * @param {string} path The path to the browser binary to use.
     * @return {!Options} A self reference.
     */
    setBinaryPath(path: string): Options;

    /**
     * Sets whether to leave the started browser process running if the controlling
     * driver service is killed before {@link webdriver.WebDriver#quit()} is
     * called.
     * @param {boolean} detach Whether to leave the browser running if the
     *     driver service is killed before the session.
     * @return {!Options} A self reference.
     */
    detachDriver(detach: boolean): Options;

    /**
     * Sets the user preferences for Chrome's user profile. See the "Preferences"
     * file in Chrome's user data directory for examples.
     * @param {!Object} prefs Dictionary of user preferences to use.
     * @return {!Options} A self reference.
     */
    setUserPreferences(prefs: object): Options;

    /**
     * Sets the performance logging preferences. Options include:
     *
     * - `enableNetwork`: Whether or not to collect events from Network domain.
     * - `enablePage`: Whether or not to collect events from Page domain.
     * - `enableTimeline`: Whether or not to collect events from Timeline domain.
     *     Note: when tracing is enabled, Timeline domain is implicitly disabled,
     *     unless `enableTimeline` is explicitly set to true.
     * - `traceCategories`: A comma-separated string of Chromium tracing
     *     categories for which trace events should be collected. An unspecified
     *     or empty string disables tracing.
     * - `bufferUsageReportingInterval`: The requested number of milliseconds
     *     between DevTools trace buffer usage events. For example, if 1000, then
     *     once per second, DevTools will report how full the trace buffer is. If
     *     a report indicates the buffer usage is 100%, a warning will be issued.
     *
     * @param {{enableNetwork: boolean,
     *          enablePage: boolean,
     *          enableTimeline: boolean,
     *          traceCategories: string,
     *          bufferUsageReportingInterval: number}} prefs The performance
     *     logging preferences.
     * @return {!Options} A self reference.
     */
    setPerfLoggingPrefs(prefs: {
        enableNetwork: boolean;
        enablePage: boolean;
        enableTimeline: boolean;
        traceCategories: string;
        bufferUsageReportingInterval: number;
    }): Options;

    /**
     * Sets preferences for the "Local State" file in Chrome's user data
     * directory.
     * @param {!Object} state Dictionary of local state preferences.
     * @return {!Options} A self reference.
     */
    setLocalState(state: object): Options;

    /**
     * Sets the name of the activity hosting a Chrome-based Android WebView. This
     * option must be set to connect to an [Android WebView](
     * https://chromedriver.chromium.org/getting-started/getting-started---android)
     *
     * @param {string} name The activity name.
     * @return {!Options} A self reference.
     */
    androidActivity(name: string): Options;

    /**
     * Sets the device serial number to connect to via ADB. If not specified, the
     * WebDriver server will select an unused device at random. An error will be
     * returned if all devices already have active sessions.
     *
     * @param {string} serial The device serial number to connect to.
     * @return {!Options} A self reference.
     */
    androidDeviceSerial(serial: string): Options;

    /**
     * Sets the package name of the Chrome or WebView app.
     *
     * @param {?string} pkg The package to connect to, or `null` to disable Android
     *     and switch back to using desktop browser.
     * @return {!Options} A self reference.
     */
    androidPackage(pkg: string | null): Options;

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
     * Sets the path to the browser's log file. This path should exist on the machine
     * that will launch the browser.
     * @param {string} path Path to the log file to use.
     * @return {!Options} A self reference.
     */
    setBrowserLogFile(path: string): Options;

    /**
     * Sets the directory to store browser minidumps in. This option is only
     * supported when the driver is running on Linux.
     * @param {string} path The directory path.
     * @return {!Options} A self reference.
     */
    setBrowserMinidumpPath(path: string): Options;

    /**
     * Configures the browser to emulate a mobile device. For more information, refer
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
     *     let driver = chrome.Driver.createSession(options);
     *
     * __Example 2: Using Custom Screen Configuration__
     *
     *     let options = new chrome.Options().setMobileEmulation({deviceMetrics: {
     *         width: 360,
     *         height: 640,
     *         pixelRatio: 3.0
     *     }});
     *
     *     let driver = chrome.Driver.createSession(options);
     *
     * [em]: https://chromedriver.chromium.org/mobile-emulation
     * [devem]: https://developer.chrome.com/devtools/docs/device-mode
     *
     * @param {?({deviceName: string}|
     *           {width: number, height: number, pixelRatio: number})} config The
     *     mobile emulation configuration, or `null` to disable emulation.
     * @return {!Options} A self reference.
     */
    setMobileEmulation(
        config?:
            | { deviceName: string }
            | { width: number; height: number; pixelRatio: number },
    ): Options;

    /**
     * Sets a list of the window types that will appear when getting window
     * handles. For access to <webview> elements, include "webview" in the list.
     * @param {...(string|!Array<string>)} args The window types that will appear
     * when getting window handles.
     * @return {!Options} A self reference.
     */
    windowTypes(...args: string[]): Options;

    /**
     * Enable bidi connection
     * @returns {!Capabilities}
     */
    enableBidi(): webdriver.Capabilities;
}

/**
 * A list of extensions to install when launching the browser.
 */
export class Extensions {
    constructor();

    /**
     * @return {number} The length of the extensions list.
     */
    length: number;

    /**
     * Add additional extensions to install when launching the browser. Each
     * extension should be specified as the path to the packed CRX file, or a
     * Buffer for an extension.
     *
     * @param {...(string|!Buffer|!Array<(string|!Buffer)>)} args The
     *     extensions to add.
     */
    add(...args: Array<string | Buffer>): void;
}

/**
 * Creates a new WebDriver client for Chromium-based browsers.
 */
export class ChromiumWebDriver extends webdriver.WebDriver {
    /**
     * Creates a new session with the WebDriver server.
     *
     * @param {(Capabilities|Options)=} caps The configuration options.
     * @param {(remote.DriverService|Executor)=} opt_serviceExecutor Either
     *     a  DriverService to use for the remote end, or a preconfigured executor
     *     for an externally managed endpoint. If neither is provided, the
     *     {@linkplain ##getDefaultService default service} will be used by
     *     default.
     * @param vendorPrefix Either 'goog' or 'ms'
     * @param vendorCapabilityKey Either 'goog:chromeOptions' or 'ms:edgeOptions'
     * @return {!ChromiumWebDriver} A new driver instance.
     */
    static createSession(
        caps?: webdriver.Capabilities | Options,
        opt_serviceExecutor?: remote.DriverService | Executor,
        vendorPrefix?: string,
        vendorCapabilityKey?: string,
    ): ChromiumWebDriver;

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;

    /**
     * Schedules a command to launch Chrome App with given ID.
     * @param {string} id ID of the App to launch.
     * @return {!Promise<void>} A promise that will be resolved
     *     when app is launched.
     */
    launchApp(id: string): Promise<void>;

    /**
     * Schedules a command to get Chromium network emulation settings.
     * @return {!Promise} A promise that will be resolved when network
     *     emulation settings are retrieved.
     */
    getNetworkConditions(): Promise<any>;

    /**
     * Schedules a command to delete Chromium network emulation settings.
     * @return {!Promise} A promise that will be resolved when network
     *     emulation settings have been deleted.
     */
    deleteNetworkConditions(): Promise<any>;

    /**
     * Schedules a command to set Chromium network emulation settings.
     *
     * __Sample Usage:__
     *
     *  driver.setNetworkConditions({
     *    offline: false,
     *    latency: 5, // Additional latency (ms).
     *    download_throughput: 500 * 1024, // Maximal aggregated download throughput.
     *    upload_throughput: 500 * 1024 // Maximal aggregated upload throughput.
     * });
     *
     * @param {Object} spec Defines the network conditions to set
     * @return {!Promise<void>} A promise that will be resolved when network
     *     emulation settings are set.
     */
    setNetworkConditions(
        spec: { offline: boolean; latency: number; download_throughput: number; upload_throughput: number },
    ): Promise<void>;

    /**
     * Sends an arbitrary devtools command to the browser.
     *
     * @param {string} cmd The name of the command to send.
     * @param {Object=} params The command parameters.
     * @return {!Promise<void>} A promise that will be resolved when the command
     *     has finished.
     * @see <https://chromedevtools.github.io/devtools-protocol/>
     */
    sendDevToolsCommand(cmd: string, params: object): Promise<void>;

    /**
     * Sends an arbitrary devtools command to the browser and get the result.
     *
     * @param {string} cmd The name of the command to send.
     * @param {Object=} params The command parameters.
     * @return {!Promise<string>} A promise that will be resolved when the command
     *     has finished.
     * @see <https://chromedevtools.github.io/devtools-protocol/>
     */
    sendAndGetDevToolsCommand(cmd: string, params: object): Promise<string>;

    /**
     * Set a permission state to the given value.
     *
     * @param {string} name A name of the permission to update.
     * @param {('granted'|'denied'|'prompt')} state State to set permission to.
     * @returns {!Promise<Object>} A promise that will be resolved when the
     *     command has finished.
     * @see <https://w3c.github.io/permissions/#permission-registry> for valid
     *     names
     */
    setPermission(name: string, state: "granted" | "denied" | "prompt"): Promise<object>;

    /**
     * Sends a DevTools command to change the browser's download directory.
     *
     * @param {string} path The desired download directory.
     * @return {!Promise<void>} A promise that will be resolved when the command
     *     has finished.
     * @see #sendDevToolsCommand
     */
    setDownloadPath(path: string): Promise<void>;

    /**
     * Returns the list of cast sinks (Cast devices) available to the Chrome media router.
     *
     * @return {!promise.Thenable<void>} A promise that will be resolved with an array of Strings
     *   containing the friendly device names of available cast sink targets.
     */
    getCastSinks(): Promise<string[]>;

    /**
     * Selects a cast sink (Cast device) as the recipient of media router intents (connect or play).
     *
     * @param {String} deviceName name of the target device.
     * @return {!promise.Thenable<void>} A promise that will be resolved
     *     when the target device has been selected to respond further webdriver commands.
     */
    setCastSinkToUse(deviceName: string): Promise<void>;

    /**
     * Initiates desktop mirroring for the current browser tab on the specified device.
     *
     * @param {String} deviceName name of the target device.
     * @return {!promise.Thenable<void>} A promise that will be resolved
     *     when the mirror command has been issued to the device.
     */
    startDesktopMirroring(deviceName: string): Promise<void>;

    /**
     * Initiates tab mirroring for the current browser tab on the specified device.
     *
     * @param {String} deviceName name of the target device.
     * @return {!promise.Thenable<void>} A promise that will be resolved
     *     when the mirror command has been issued to the device.
     */
    startCastTabMirroring(deviceName: string): Promise<void>;

    /**
     * Returns an error message when there is any issue in a Cast session.
     * @return {!promise.Thenable<void>} A promise that will be resolved
     *     when the mirror command has been issued to the device.
     */
    getCastIssueMessage(): Promise<string>;

    /**
     * Stops casting from media router to the specified device, if connected.
     *
     * @param {String} deviceName name of the target device.
     * @return {!promise.Thenable<void>} A promise that will be resolved
     *     when the stop command has been issued to the device.
     */
    stopCasting(deviceName: string): Promise<void>;
}
