import * as http from './http';
import * as webdriver from './index';
import * as remote from './remote';

/**
 * Configuration options for the FirefoxDriver.
 */
export class Options extends webdriver.Capabilities {
    /**
     * Sets the profile to use. The profile may be specified as a
     * {@link Profile} object or as the path to an existing Firefox profile to use
     * as a template.
     *
     * @param {(string|!Profile)} profile The profile to use.
     * @return {!Options} A self reference.
     */
    setProfile(profile: string): Options;

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
     * Sets the initial window size when running in
     * {@linkplain #headless headless} mode.
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
     * Firefox executable, or as a {@link Binary} object.
     *
     * @param {(string|!Binary)} binary The binary to use.
     * @return {!Options} A self reference.
     */
    setBinary(binary: string | any): Options;

    /**
     * Sets the proxy to use.
     *
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Sets whether to use Mozilla's geckodriver to drive the browser. This option
     * is enabled by default and required for Firefox 47+.
     *
     * @param {boolean} enable Whether to enable the geckodriver.
     * @see https://github.com/mozilla/geckodriver
     */
    useGeckoDriver(enable: boolean): Options;

    /**
     * Configures the geckodriver to start Firefox in headless mode.
     * @return {!Options} A self reference.
     */
    headless(): Options;
}

/**
 * @return {string} .
 * @throws {Error}
 */
export function findWires(): string;

/**
 * @param {(string|!Binary)} binary .
 * @return {!remote.DriverService} .
 */
export function createWiresService(binary: string | any): remote.DriverService;

/**
 * @param {(Profile|string)} profile The profile to prepare.
 * @param {number} port The port the FirefoxDriver should listen on.
 * @return {!Promise<string>} a promise for the path to the profile directory.
 */
export function prepareProfile(profile: string | any, port: number): any;

/**
 * A WebDriver client for Firefox.
 */
export class Driver extends webdriver.WebDriver {
    /**
     * Creates a new Firefox session.
     *
     * @param {(Options|capabilities.Capabilities|Object)=} opt_config The
     *    configuration options for this driver, specified as either an
     *    {@link Options} or {@link capabilities.Capabilities}, or as a raw hash
     *    object.
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
     * @throws {Error} If a custom command executor is provided and the driver is
     *     configured to use the legacy FirefoxDriver from the Selenium project.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        opt_config?: Options | webdriver.Capabilities,
        opt_executor?: http.Executor | remote.DriverService,
    ): Driver;

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;

    /**
     * Installs a new addon with the current session. This function will return an
     * ID that may later be used to {@linkplain #uninstallAddon uninstall} the
     * addon.
     *
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
    enableVerboseLogging(opt_trace?: boolean): this;

    /**
     * Sets the path to the executable Firefox binary that the geckodriver should
     * use. If this method is not called, this builder will attempt to locate
     * Firefox in the default installation location for the current platform.
     *
     * @param {(string|!Binary)} binary Path to the executable Firefox binary to use.
     * @return {!ServiceBuilder} A self reference.
     * @see Binary#locate()
     */
    setFirefoxBinary(binary: string): this;
}
