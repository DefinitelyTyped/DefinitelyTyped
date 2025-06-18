import * as webdriver from "./index";
import * as remote from "./remote";

export class Driver extends webdriver.WebDriver {
    /**
     * Creates a new browser session for Microsoft's Edge browser.
     *
     * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
     *     options.
     * @param {remote.DriverService=} opt_service The session to use; will use
     *     the {@linkplain #getDefaultService default service} by default.
     * @param {promise.ControlFlow=} opt_flow The control flow to use, or
     *     {@code null} to use the currently active flow.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        opt_config?: webdriver.CreateSessionCapabilities,
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

/**
 * Class for managing MicrosoftEdgeDriver specific options.
 */
export class Options {
    /**
     * Extracts the MicrosoftEdgeDriver specific options from the given
     * capabilities object.
     * @param {!capabilities.Capabilities} caps The capabilities object.
     * @return {!Options} The MicrosoftEdgeDriver options.
     */
    static fromCapabilities(cap: webdriver.Capabilities): Options;

    /**
     * Sets the proxy settings for the new session.
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Sets the page load strategy for Edge.
     * Supported values are 'normal', 'eager', and 'none';
     *
     * @param {string} pageLoadStrategy The page load strategy to use.
     * @return {!Options} A self reference.
     */
    setPageLoadStrategy(pageLoadStrategy: string): Options;

    /**
     * Converts this options instance to a {@link capabilities.Capabilities}
     * object.
     * @param {capabilities.Capabilities=} opt_capabilities The capabilities to
     *     merge these options into, if any.
     * @return {!capabilities.Capabilities} The capabilities.
     */
    toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities;
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
