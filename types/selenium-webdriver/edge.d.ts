import * as webdriver from "./index";
import * as remote from "./remote";

/**
 * Creates a new WebDriver client for Microsoft's Edge.
 */
export class Driver extends webdriver.chromium.ChromiumWebDriver {
    /**
     * Creates a new browser session for Microsoft's Edge browser.
     *
     * @param {(Capabilities|Options)=} opt_config The configuration options.
     * @param {remote.DriverService=} opt_serviceExecutor The service to use; will create
     *     a new Legacy or Chromium service based on {@linkplain Options} by default.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        opt_config?: webdriver.Capabilities | Options,
        opt_serviceExecutor?: remote.DriverService,
    ): Driver;

    /**
     * returns new instance of edge driver service
     * @returns {remote.DriverService}
     */
    static getDefaultService(): remote.DriverService;

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
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
 * Class for managing MicrosoftEdgeDriver specific options.
 */
export class Options extends webdriver.chromium.Options {
    /**
     * Sets the path to the edge binary to use
     *
     * The binary path be absolute or relative to the msedgedriver server
     * executable, but it must exist on the machine that will launch edge chromium.
     * @param {string} path The path to the edgedriver binary to use.
     * @return {!Options} A self reference.
     */
    setEdgeChromiumBinaryPath(path: string): Options;

    /**
     * Changes the browser name to 'webview2' to enable
     * <a href="https://learn.microsoft.com/en-us/microsoft-edge/webview2/how-to/webdriver">
     *   test automation of WebView2 apps with Microsoft Edge WebDriver
     * </a>
     *
     * @param {boolean} enable  flag to enable or disable the 'webview2' usage
     */
    useWebView(enable: boolean): void;
}

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * a [MSEdgeDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
 * server in a child process.
 */
export class ServiceBuilder extends webdriver.chromium.ServiceBuilder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *   the builder will attempt to locate the MicrosoftEdgeDriver on the current
     *   PATH.
     * @throws {Error} If provided executable does not exist, or the
     *   MicrosoftEdgeDriver cannot be found on the PATH.
     */
    constructor(opt_exe?: string);
}
