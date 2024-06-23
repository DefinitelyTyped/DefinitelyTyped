import * as http from "./http";
import * as webdriver from "./index";
import * as remote from "./remote";

/**
 * Creates a new WebDriver client for Chrome.
 */
export class Driver extends webdriver.chromium.ChromiumWebDriver {
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
        opt_config?: Options | webdriver.Capabilities,
        opt_serviceExecutor?: remote.DriverService | http.Executor,
    ): Driver;

    /**
     * returns new instance chrome driver service
     * @returns {remote.DriverService}
     */
    static getDefaultService(): remote.DriverService;
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
export class Options extends webdriver.chromium.Options {
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
     * Configures the ChromeDriver to launch Chrome on Android via adb. This
     * function is shorthand for
     * {@link #androidPackage options.androidPackage('com.android.chrome')}.
     * @return {!Options} A self reference.
     */
    androidChrome(): Options;

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
}

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * a [ChromeDriver](https://chromedriver.chromium.org/)
 * server in a child process.
 */
export class ServiceBuilder extends webdriver.chromium.ServiceBuilder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *     the builder will attempt to locate the chromedriver on the current
     *     PATH.
     * @throws {Error} If provided executable does not exist, or the chromedriver
     *     cannot be found on the PATH.
     */
    constructor(opt_exe?: string);
}
