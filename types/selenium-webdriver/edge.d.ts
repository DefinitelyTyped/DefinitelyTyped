import * as webdriver from './index';
import * as remote from './remote';

export class Driver extends webdriver.WebDriver {
  /**
   * Creates a new browser session for Microsoft's Edge browser.
   *
   * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
   *     options.
   * @param {remote.DriverService=} opt_service The session to use; will use
   *     the {@linkplain #getDefaultService default service} by default.
   * @return {!Driver} A new driver instance.
   */
  static createSession(
    opt_config?: webdriver.CreateSessionCapabilities, opt_service?: remote.DriverService): Driver;

  /**
   * This function is a no-op as file detectors are not supported by this
   * implementation.
   * @override
   */
  setFileDetector(): void;
}

export interface IOptionsValues {
  args: string[];
  binary?: string;
  detach: boolean;
  extensions: string[];
  localState?: any;
  logFile?: string;
  prefs?: any;
}

export interface IPerfLoggingPrefs {
  enableNetwork?: boolean;
  enablePage?: boolean;
  enableTimeline?: boolean;
  traceCategories?: string;
  bufferUsageReportingInterval?: number;
}

/**
 * Class for managing MicrosoftEdgeDriver specific options.
 */
export class Options extends webdriver.Capabilities {
  /**
   * @constructor
   */
  constructor();

  /**
   * Extracts the EdgeDriver specific options from the given capabilities
   * object.
   * @param {!webdriver.Capabilities} capabilities The capabilities object.
   * @return {!Options} The EdgeDriver options.
   */
  static fromCapabilities(capabilities: webdriver.Capabilities): Options;

  /**
   * Add additional command line arguments to use when launching the Edge
   * browser.  Each argument may be specified with or without the '--' prefix
   * (e.g. '--foo' and 'foo'). Arguments with an associated value should be
   * delimited by an '=': 'foo=bar'.
   * @param {...(string|!Array.<string>)} var_args The arguments to add.
   * @return {!Options} A self reference.
   */
  addArguments(...var_args: string[]): Options;

  /**
   * Configures the edgedriver to start Edge in headless mode.
   *
   * > __NOTE:__ Resizing the browser window in headless mode is only supported
   * > in Edge 60. Users are encouraged to set an initial window size with
   * > the {@link #windowSize windowSize({width, height})} option.
   *
   * @return {!Options} A self reference.
   */
  headless(): Options;

  /**
   * Sets the initial window size.
   *
   * @param {{width: number, height: number}} size The desired window size.
   * @return {!Options} A self reference.
   * @throws {TypeError} if width or height is unspecified, not a number, or
   *     less than or equal to 0.
   */
  windowSize(size: { width: number, height: number }): Options;

  /**
   * List of Edge command line switches to exclude that EdgeDriver by
   * default passes when starting Edge.  Do not prefix switches with '--'.
   *
   * @param {...(string|!Array<string>)} var_args The switches to exclude.
   * @return {!Options} A self reference.
   */
  excludeSwitches(...var_args: string[]): Options;

  /**
   * Add additional extensions to install when launching Edge. Each extension
   * should be specified as the path to the packed CRX file, or a Buffer for an
   * extension.
   * @param {...(string|!Buffer|!Array.<(string|!Buffer)>)} var_args The
   *     extensions to add.
   * @return {!Options} A self reference.
   */
  addExtensions(...var_args: any[]): Options;

  /**
   * Sets the path to the Edge binary to use. On Mac OS X, this path should
   * reference the actual Edge executable, not just the application binary
   * (e.g. '/Applications/Google Edge.app/Contents/MacOS/Google Edge').
   *
   * The binary path be absolute or relative to the edgedriver server
   * executable, but it must exist on the machine that will launch Edge.
   *
   * @param {string} path The path to the Edge binary to use.
   * @return {!Options} A self reference.
   */
  setChromeBinaryPath(path: string): Options;

  /**
   * Instruct the EdgeDriver to use Edge Chromium if true.
   * Otherwise, use Edge Legacy (EdgeHTML). Defaults to using Edge Legacy.
   *
   * @param {boolean} useEdgeChromium
   * @return {!Options} A self reference.
   */
  setEdgeChromium(useEdgeChromium: boolean): Options;

  /**
   * Sets whether to leave the started Edge browser running if the controlling
   * EdgeDriver service is killed before {@link webdriver.WebDriver#quit()} is
   * called.
   * @param {boolean} detach Whether to leave the browser running if the
   *     edgedriver service is killed before the session.
   * @return {!Options} A self reference.
   */
  detachDriver(detach: boolean): Options;

  /**
   * Sets the user preferences for Edge's user profile. See the 'Preferences'
   * file in Edge's user data directory for examples.
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
   * - `tracingCategories`: A comma-separated string of Edge tracing
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
   * Sets preferences for the 'Local State' file in Edge's user data
   * directory.
   * @param {!Object} state Dictionary of local state preferences.
   * @return {!Options} A self reference.
   */
  setLocalState(state: any): Options;

  /**
   * Sets the name of the activity hosting a Edge-based Android WebView. This
   * option must be set to connect to an [Android WebView](
   * https://sites.google.com/a/chromium.org/edgedriver/getting-started/getting-started---android)
   *
   * @param {string} name The activity name.
   * @return {!Options} A self reference.
   */
  androidActivity(name: string): Options;

  /**
   * Sets the device serial number to connect to via ADB. If not specified, the
   * EdgeDriver will select an unused device at random. An error will be
   * returned if all devices already have active sessions.
   *
   * @param {string} serial The device serial number to connect to.
   * @return {!Options} A self reference.
   */
  androidDeviceSerial(serial: string): Options;

  /**
   * Configures the EdgeDriver to launch Edge on Android via adb. This
   * function is shorthand for
   * {@link #androidPackage options.androidPackage('com.android.edge')}.
   * @return {!Options} A self reference.
   */
  androidEdge(): Options;

  /**
   * Sets the package name of the Edge or WebView app.
   *
   * @param {?string} pkg The package to connect to, or `null` to disable
   *     Android and switch back to using desktop Edge.
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
   * Sets the path to Edge's log file. This path should exist on the machine
   * that will launch Edge.
   * @param {string} path Path to the log file to use.
   * @return {!Options} A self reference.
   */
  setEdgeLogFile(path: string): Options;

  /**
   * Sets the directory to store Edge minidumps in. This option is only
   * supported when EdgeDriver is running on Linux.
   * @param {string} path The directory path.
   * @return {!Options} A self reference.
   */
  setEdgeMinidumpPath(path: string): Options;

  /**
   * Configures Edge to emulate a mobile device. For more information, refer
   * to the EdgeDriver project page on [mobile emulation][em]. Configuration
   * options include:
   *
   * - `deviceName`: The name of a pre-configured [emulated device][devem]
   * - `width`: screen width, in pixels
   * - `height`: screen height, in pixels
   * - `pixelRatio`: screen pixel ratio
   *
   * __Example 1: Using a Pre-configured Device__
   *
   *     let options = new edge.Options().setMobileEmulation(
   *         {deviceName: 'Google Nexus 5'});
   *
   *     let driver = new edge.Driver(options);
   *
   * __Example 2: Using Custom Screen Configuration__
   *
   *     let options = new edge.Options().setMobileEmulation({
   *         width: 360,
   *         height: 640,
   *         pixelRatio: 3.0
   *     });
   *
   *     let driver = new edge.Driver(options);
   *
   *
   * [em]: https://sites.google.com/a/chromium.org/edgedriver/mobile-emulation
   * [devem]: https://developer.edge.com/devtools/docs/device-mode
   *
   * @param {?({deviceName: string}|
   *           {width: number, height: number, pixelRatio: number})} config The
   *     mobile emulation configuration, or `null` to disable emulation.
   * @return {!Options} A self reference.
   */
  setMobileEmulation(config: any): Options;
}

/**
 * Creates {@link remote.DriverService} instances that manage a
 * MicrosoftEdgeDriver server in a child process.
 */
export class ServiceBuilder extends remote.DriverService.Builder {
  /**
   * @param {string=} opt_exe Path to the server executable to use. If omitted,
   *   the builder will attempt to locate the MicrosoftEdgeDriver on the current
   *   PATH.
   * @throws {Error} If provided executable does not exist, or the
   *   MicrosoftEdgeDriver cannot be found on the PATH.
   */
  constructor(opt_exe?: string);
}

/**
 * Returns the default MicrosoftEdgeDriver service. If such a service has
 * not been configured, one will be constructed using the default configuration
 * for an MicrosoftEdgeDriver executable found on the system PATH.
 * @return {!remote.DriverService} The default MicrosoftEdgeDriver service.
 */
export function getDefaultService(): remote.DriverService;

/**
 * Sets the default service to use for new MicrosoftEdgeDriver instances.
 * @param {!remote.DriverService} service The service to use.
 * @throws {Error} If the default service is currently running.
 */
export function setDefaultService(service: remote.DriverService): void;
