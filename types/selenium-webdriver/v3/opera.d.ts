import * as webdriver from "./index";
import * as remote from "./remote";

/**
 * Creates {@link remote.DriverService} instances that manages an
 * [OperaDriver](https://github.com/operasoftware/operachromiumdriver)
 * server in a child process.
 */
export class ServiceBuilder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *     the builder will attempt to locate the operadriver on the current
     *     PATH.
     * @throws {Error} If provided executable does not exist, or the operadriver
     *     cannot be found on the PATH.
     */
    constructor(opt_exe?: string);

    /**
     * Sets the port to start the OperaDriver on.
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
     * Silence sthe drivers output.
     * @return {!ServiceBuilder} A self reference.
     */
    silent(): ServiceBuilder;

    /**
     * Defines the stdio configuration for the driver service. See
     * {@code child_process.spawn} for more information.
     * @param {(string|!Array<string|number|!stream.Stream|null|undefined>)}
     *     config The configuration to use.
     * @return {!ServiceBuilder} A self reference.
     */
    setStdio(config: string | Array<string | number | any>): ServiceBuilder;

    /**
     * Defines the environment to start the server under. This settings will be
     * inherited by every browser session started by the server.
     * @param {!Object.<string, string>} env The environment to use.
     * @return {!ServiceBuilder} A self reference.
     */
    withEnvironment(env: Object): ServiceBuilder;

    /**
     * Creates a new DriverService using this instance's current configuration.
     * @return {!remote.DriverService} A new driver service using this instance's
     *     current configuration.
     * @throws {Error} If the driver exectuable was not specified and a default
     *     could not be found on the current PATH.
     */
    build(): remote.DriverService;
}

/**
 * Sets the default service to use for new OperaDriver instances.
 * @param {!remote.DriverService} service The service to use.
 * @throws {Error} If the default service is currently running.
 */
export function setDefaultService(service: remote.DriverService): any;

/**
 * Returns the default OperaDriver service. If such a service has not been
 * configured, one will be constructed using the default configuration for
 * a OperaDriver executable found on the system PATH.
 * @return {!remote.DriverService} The default OperaDriver service.
 */
export function getDefaultService(): remote.DriverService;

/**
 * Class for managing {@linkplain Driver OperaDriver} specific options.
 */
export class Options {
    /**
     * Extracts the OperaDriver specific options from the given capabilities
     * object.
     * @param {!capabilities.Capabilities} caps The capabilities object.
     * @return {!Options} The OperaDriver options.
     */
    static fromCapabilities(caps: webdriver.Capabilities): Options;

    /**
     * Add additional command line arguments to use when launching the Opera
     * browser.  Each argument may be specified with or without the '--' prefix
     * (e.g. '--foo' and 'foo'). Arguments with an associated value should be
     * delimited by an '=': 'foo=bar'.
     * @param {...(string|!Array.<string>)} var_args The arguments to add.
     * @return {!Options} A self reference.
     */
    addArguments(...var_args: string[]): Options;

    /**
     * Add additional extensions to install when launching Opera. Each extension
     * should be specified as the path to the packed CRX file, or a Buffer for an
     * extension.
     * @param {...(string|!Buffer|!Array.<(string|!Buffer)>)} var_args The
     *     extensions to add.
     * @return {!Options} A self reference.
     */
    addExtensions(...var_args: any[]): Options;

    /**
     * Sets the path to the Opera binary to use. On Mac OS X, this path should
     * reference the actual Opera executable, not just the application binary. The
     * binary path be absolute or relative to the operadriver server executable, but
     * it must exist on the machine that will launch Opera.
     *
     * @param {string} path The path to the Opera binary to use.
     * @return {!Options} A self reference.
     */
    setOperaBinaryPath(path: string): Options;

    /**
     * Sets the logging preferences for the new session.
     * @param {!./lib/logging.Preferences} prefs The logging preferences.
     * @return {!Options} A self reference.
     */
    setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;

    /**
     * Sets the proxy settings for the new session.
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Converts this options instance to a {@link capabilities.Capabilities}
     *     object.
     * @param {capabilities.Capabilities=} opt_capabilities The capabilities to
     *     merge these options into, if any.
     * @return {!capabilities.Capabilities} The capabilities.
     */
    toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities;
}

export class Driver extends webdriver.WebDriver {
    /**
     * Creates a new session for Opera.
     *
     * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
     *     options.
     * @param {remote.DriverService=} opt_service The session to use; will use
     *     the {@link getDefaultService default service} by default.
     * @param {promise.ControlFlow=} opt_flow The control flow to use,
     *     or {@code null} to use the currently active flow.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        opt_config?: webdriver.Capabilities | Options,
        opt_service?: remote.DriverService,
        opt_flow?: webdriver.promise.ControlFlow,
    ): Driver;

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
}
