import * as webdriver from './index';
import * as remote from './remote';

declare namespace edge {

    class Driver extends webdriver.WebDriver {
        /**
         * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
         *     options.
         * @param {remote.DriverService=} opt_service The session to use; will use
         *     the {@linkplain #getDefaultService default service} by default.
         * @param {promise.ControlFlow=} opt_flow The control flow to use, or
         *     {@code null} to use the currently active flow.
         */
        constructor(opt_config?: webdriver.Capabilities | Options, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow);

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
    class Options {

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
        toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities;
    }

    /**
     * Creates {@link remote.DriverService} instances that manage a
     * MicrosoftEdgeDriver server in a child process.
     */
    class ServiceBuilder {
        /**
         * @param {string=} opt_exe Path to the server executable to use. If omitted,
         *   the builder will attempt to locate the MicrosoftEdgeDriver on the current
         *   PATH.
         * @throws {Error} If provided executable does not exist, or the
         *   MicrosoftEdgeDriver cannot be found on the PATH.
         */
        constructor(opt_exe?: string);

        /**
         * Defines the stdio configuration for the driver service. See
         * {@code child_process.spawn} for more information.
         * @param {(string|!Array.<string|number|!stream.Stream|null|undefined>)}
         *     config The configuration to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setStdio(config: string | Array<string | number | any>): ServiceBuilder;

        /**
         * Sets the port to start the MicrosoftEdgeDriver on.
         * @param {number} port The port to use, or 0 for any free port.
         * @return {!ServiceBuilder} A self reference.
         * @throws {Error} If the port is invalid.
         */
        usingPort(port: number): ServiceBuilder;

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
     * Returns the default MicrosoftEdgeDriver service. If such a service has
     * not been configured, one will be constructed using the default configuration
     * for an MicrosoftEdgeDriver executable found on the system PATH.
     * @return {!remote.DriverService} The default MicrosoftEdgeDriver service.
     */
    function getDefaultService(): remote.DriverService;

    /**
     * Sets the default service to use for new MicrosoftEdgeDriver instances.
     * @param {!remote.DriverService} service The service to use.
     * @throws {Error} If the default service is currently running.
     */
    function setDefaultService(service: remote.DriverService): void;
}

export = edge;
