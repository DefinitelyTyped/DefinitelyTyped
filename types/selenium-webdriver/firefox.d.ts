import * as http from "./http";
import * as webdriver from "./index";
import Symbols from "./lib/symbols";
import * as remote from "./remote";
export {};

declare class Profile {
    constructor();

    addExtensions(): void;

    /**
     * @return {(!Promise<string>|undefined)} a promise for a base64 encoded
     *     profile, or undefined if there's no data to include.
     */
    [Symbols.serialize](): Promise<string>;
}

export enum Context {
    CONTENT = "content",
    CHROME = "chrome",
}

/**
 * Configuration options for the FirefoxDriver.
 */
export class Options extends webdriver.Capabilities {
    /**
     * @param {(Capabilities|Map<string, ?>|Object)=} other Another set of
     *     capabilities to initialize this instance from.
     */
    constructor(other?: webdriver.Capabilities | Map<string, any> | object);

    /**
     * @return {!Object}
     */
    firefoxOptions_(): object;

    /**
     * Sets the profile to use. The profile may be specified as a
     * {@link Profile} object or as the path to an existing Firefox profile to use
     * as a template.
     *
     * @param {(string|!Profile)} profile The profile to use.
     * @return {!Options} A self reference.
     */
    setProfile(profile: string | Profile): Options;

    /**
     * @param {string} key the preference key.
     * @param {(string|number|boolean)} value the preference value.
     * @return {!Options} A self reference.
     * @throws {TypeError} if either the key or value has an invalid type.
     */
    setPreference(key: string, value: string | number | boolean): Options;

    /**
     * Add extensions that should be installed when starting Firefox.
     *
     * @param {...string} paths The paths to the extension XPI files to install.
     * @return {!Options} A self reference.
     */
    addExtensions(...paths: string[]): Options;

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
     * Specify additional command line arguments that should be used when starting
     * the Firefox browser.
     *
     * @param {...(string|!Array<string>)} args The arguments to include.
     * @return {!Options} A self reference.
     */
    addArguments(...args: string[]): Options;

    /**
     * Sets the binary to use. The binary may be specified as the path to a
     * Firefox executable.
     *
     * @param {(string)} binary The binary to use.
     * @return {!Options} A self reference.
     * @throws {TypeError} If `binary` is an invalid type.
     */
    setBinary(binary: string): Options;

    /**
     * Enables Mobile start up features
     *
     * @param {string} androidPackage The package to use
     * @return {!Options} A self reference
     */
    enableMobile(androidPackage: string, androidActivity: string, deviceSerial: string): Options;

    /**
     * Enables moz:debuggerAddress for firefox cdp
     */
    enableDebugger(): void;

    /**
     * Enable bidi connection
     * @returns {!Capabilities}
     */
    enableBidi(): webdriver.Capabilities;
}

/**
 * A WebDriver client for Firefox.
 */
export class Driver extends webdriver.WebDriver {
    /**
     * Creates a new Firefox session.
     *
     * @param {(Options|Capabilities|Object)=} opt_config The
     *    configuration options for this driver, specified as either an
     *    {@link Options} or {@link Capabilities}, or as a raw hash object.
     * @param {(http.Executor|remote.DriverService)=} opt_executor Either a
     *   pre-configured command executor to use for communicating with an
     *   externally managed remote end (which is assumed to already be running),
     *   or the `DriverService` to use to start the geckodriver in a child
     *   process.
     *
     *   If an executor is provided, care should e taken not to use reuse it with
     *   other clients as its internal command mappings will be updated to support
     *   Firefox-specific commands.
     *
     *   _This parameter may only be used with Mozilla's GeckoDriver._
     *
     * @throws {Error} If a custom command executor is provided and the driver is
     *     configured to use the legacy FirefoxDriver from the Selenium project.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        opt_config?: Options | webdriver.Capabilities | Object,
        opt_executor?: http.Executor | remote.DriverService,
    ): Driver;

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;

    /**
     * Get the context that is currently in effect.
     *
     * @return {!Promise<Context>} Current context.
     */
    getContext(): Promise<Context>;

    /**
     * Changes target context for commands between chrome- and content.
     *
     * Changing the current context has a stateful impact on all subsequent
     * commands. The {@link Context.CONTENT} context has normal web
     * platform document permissions, as if you would evaluate arbitrary
     * JavaScript. The {@link Context.CHROME} context gets elevated
     * permissions that lets you manipulate the browser chrome itself,
     * with full access to the XUL toolkit.
     *
     * Use your powers wisely.
     *
     * @param {!Promise<void>} ctx The context to switch to.
     */
    setContext(ctx: Context): Promise<void>;

    /**
     * Installs a new addon with the current session. This function will return an
     * ID that may later be used to {@linkplain #uninstallAddon uninstall} the
     * addon.
     *
     * @param {string} path Path on the local filesystem to the web extension to
     *     install.
     * @param {boolean} temporary Flag indicating whether the extension should be
     *     installed temporarily - gets removed on restart
     * @return {!Promise<string>} A promise that will resolve to an ID for the
     *     newly installed addon.
     * @see #uninstallAddon
     */
    installAddon(path: string, temporary: boolean): Promise<string>;

    /**
     * Uninstalls an addon from the current browser session's profile.
     *
     * @param {(string|!Promise<string>)} id ID of the addon to uninstall.
     * @return {!Promise} A promise that will resolve when the operation has
     *     completed.
     * @see #installAddon
     */
    uninstallAddon(id: string | Promise<string>): Promise<void>;

    /**
     * Take full page screenshot of the visible region
     *
     * @return {!Promise<string>} A promise that will be
     *     resolved to the screenshot as a base-64 encoded PNG.
     */
    takeFullPageScreenshot(): Promise<string>;
}

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * a [geckodriver](https://github.com/mozilla/geckodriver) server in a child
 * process.
 */
export class ServiceBuilder extends remote.DriverService.Builder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *     the builder will attempt to locate the geckodriver on the system PATH.
     */
    constructor(opt_exe?: string);

    /**
     * Enables verbose logging.
     *
     * @param {boolean=} opt_trace Whether to enable trace-level logging. By
     *     default, only debug logging is enabled.
     * @return {!ServiceBuilder} A self reference.
     */
    enableVerboseLogging(opt_trace?: boolean): ServiceBuilder;
}

/**
 * Provides methods for locating the executable for a Firefox release channel
 * on Windows and MacOS. For other systems (i.e. Linux), Firefox will always
 * be located on the system PATH.
 * @deprecated Instead of using this class, you should configure the
 *    {@link Options} with the appropriate binary location or let Selenium
 *    Manager handle it for you.
 * @final
 */
export class Channel {
    /**
     * @param {string} darwin The path to check when running on MacOS.
     * @param {string} win32 The path to check when running on Windows.
     */
    constructor(darwin: string, win32: string);

    /**
     * Attempts to locate the Firefox executable for this release channel. This
     * will first check the default installation location for the channel before
     * checking the user's PATH. The returned promise will be rejected if Firefox
     * can not be found.
     *
     * @return {!Promise<string>} A promise for the location of the located
     *     Firefox executable.
     */
    locate(): Promise<string>;
}
