import * as webdriver from './index';

/**
 * A record object that defines the configuration options for a DriverService
 * instance.
 *
 * @record
 */
export interface ServiceOptions { }

/**
 * Manages the life and death of a native executable WebDriver server.
 *
 * It is expected that the driver server implements the
 * https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol.
 * Furthermore, the managed server should support multiple concurrent sessions,
 * so that this class may be reused for multiple clients.
 */
export class DriverService {
    /**
     * @param {string} executable Path to the executable to run.
     * @param {!ServiceOptions} options Configuration options for the service.
     */
    constructor(executable: string, options: ServiceOptions);

    /**
     * @return {!promise.Promise<string>} A promise that resolves to
     *    the server's address.
     * @throws {Error} If the server has not been started.
     */
    address(): webdriver.promise.Promise<string>;

    /**
     * Returns whether the underlying process is still running. This does not take
     * into account whether the process is in the process of shutting down.
     * @return {boolean} Whether the underlying service process is running.
     */
    isRunning(): boolean;

    /**
     * Starts the server if it is not already running.
     * @param {number=} opt_timeoutMs How long to wait, in milliseconds, for the
     *     server to start accepting requests. Defaults to 30 seconds.
     * @return {!promise.Promise<string>} A promise that will resolve
     *     to the server's base URL when it has started accepting requests. If the
     *     timeout expires before the server has started, the promise will be
     *     rejected.
     */
    start(opt_timeoutMs?: number): webdriver.promise.Promise<string>;

    /**
     * Stops the service if it is not currently running. This function will kill
     * the server immediately. To synchronize with the active control flow, use
     * {@link #stop()}.
     * @return {!promise.Promise} A promise that will be resolved when
     *     the server has been stopped.
     */
    kill(): webdriver.promise.Promise<any>;

    /**
     * Schedules a task in the current control flow to stop the server if it is
     * currently running.
     * @return {!promise.Promise} A promise that will be resolved when
     *     the server has been stopped.
     */
    stop(): webdriver.promise.Promise<any>;
}

export namespace DriverService {
    /**
     * Creates {@link DriverService} objects that manage a WebDriver server in a
     * child process.
     */
    class Builder {
        /**
         * @param {string} exe Path to the executable to use. This executable must
         *     accept the `--port` flag for defining the port to start the server on.
         * @throws {Error} If the provided executable path does not exist.
         */
        constructor(exe: string);

        /**
         * Define additional command line arguments to use when starting the server.
         *
         * @param {...CommandLineFlag} var_args The arguments to include.
         * @return {!THIS} A self reference.
         * @this {THIS}
         * @template THIS
         */
        addArguments(...var_args: string[]): this;

        /**
         * Sets the host name to access the server on. If specified, the
         * {@linkplain #setLoopback() loopback} setting will be ignored.
         *
         * @param {string} hostname
         * @return {!DriverService.Builder} A self reference.
         */
        setHostname(hostname: string): this;

        /**
         * Sets whether the service should be accessed at this host's loopback
         * address.
         *
         * @param {boolean} loopback
         * @return {!DriverService.Builder} A self reference.
         */
        setLoopback(loopback: boolean): this;

        /**
         * Sets the base path for WebDriver REST commands (e.g. "/wd/hub").
         * By default, the driver will accept commands relative to "/".
         *
         * @param {?string} basePath The base path to use, or `null` to use the
         *     default.
         * @return {!DriverService.Builder} A self reference.
         */
        setPath(basePath: string | null): this;

        /**
         * Sets the port to start the server on.
         *
         * @param {number} port The port to use, or 0 for any free port.
         * @return {!DriverService.Builder} A self reference.
         * @throws {Error} If an invalid port is specified.
         */
        setPort(port: number): this;

        /**
         * Defines the environment to start the server under. This setting will be
         * inherited by every browser session started by the server. By default, the
         * server will inherit the enviroment of the current process.
         *
         * @param {(Map<string, string>|Object<string, string>|null)} env The desired
         *     environment to use, or `null` if the server should inherit the
         *     current environment.
         * @return {!DriverService.Builder} A self reference.
         */
        setEnvironment(env: Map<string, string> | {[name: string]: string} | null): this;

        /**
         * IO configuration for the spawned server process. For more information,
         * refer to the documentation of `child_process.spawn`.
         *
         * @param {StdIoOptions} config The desired IO configuration.
         * @return {!DriverService.Builder} A self reference.
         * @see https://nodejs.org/dist/latest-v4.x/docs/api/child_process.html#child_process_options_stdio
         */
        setStdio(config: any): this;

        /**
         * Creates a new DriverService using this instance's current configuration.
         *
         * @return {!DriverService} A new driver service.
         */
        build(): DriverService;
    }
}

/**
 * Manages the life and death of the
 * <a href="http://selenium-release.storage.googleapis.com/index.html">
 * standalone Selenium server</a>.
 */
export class SeleniumServer extends DriverService {
    /**
     * @param {string} jar Path to the Selenium server jar.
     * @param {SeleniumServer.Options=} opt_options Configuration options for the
     *     server.
     * @throws {Error} If the path to the Selenium jar is not specified or if an
     *     invalid port is specified.
     **/
    constructor(jar: string, opt_options?: SeleniumServer.Options);
}

export namespace SeleniumServer {
    /**
     * Options for the Selenium server
     */
    interface Options {
        /** Whether the server should only be accessed on this host's loopback address.*/
        loopback?: boolean;

        /** The port to start the server on (must be > 0). If the port is provided
        as a promise, the service will wait for the promise to resolve before starting. */
        port?: number|webdriver.promise.IThenable<number>;

        /** The arguments to pass to the service. If a promise is provided, the
        service will wait for it to resolve before starting. */
        args?: string[]|webdriver.promise.IThenable<string[]>;

        /** The arguments to pass to the JVM. If a promise is provided, the service
        will wait for it to resolve before starting. */
        jvmArgs?: string[]|webdriver.promise.IThenable<string[]>;

        /** The environment variables that should be visible to the server process.
        Defaults to inheriting the current process's environment.*/
        env?: {[key: string]: string};

        /** IO configuration for the spawned server process. For more information,
        refer to the documentation of `child_process.spawn`*/
        stdio?: string|Array<string|number>;
    }
}

/**
 * A {@link webdriver.FileDetector} that may be used when running
 * against a remote
 * [Selenium server](http://selenium-release.storage.googleapis.com/index.html).
 *
 * When a file path on the local machine running this script is entered with
 * {@link webdriver.WebElement#sendKeys WebElement#sendKeys}, this file detector
 * will transfer the specified file to the Selenium server's host; the sendKeys
 * command will be updated to use the transfered file's path.
 *
 * __Note:__ This class depends on a non-standard command supported on the
 * Java Selenium server. The file detector will fail if used with a server that
 * only supports standard WebDriver commands (such as the ChromeDriver).
 *
 * @final
 */
export class FileDetector extends webdriver.FileDetector {
    /**
     * @constructor
     **/
    constructor();

    /**
     * Prepares a `file` for use with the remote browser. If the provided path
     * does not reference a normal file (i.e. it does not exist or is a
     * directory), then the promise returned by this method will be resolved with
     * the original file path. Otherwise, this method will upload the file to the
     * remote server, which will return the file's path on the remote system so
     * it may be referenced in subsequent commands.
     *
     * @param {!webdriver.WebDriver} driver The driver for the current browser.
     * @param {string} file The path of the file to process.
     * @return {!webdriver.promise.Promise<string>} A promise for the processed
     *     file path.
     */
    handleFile(driver: webdriver.WebDriver, file: string): webdriver.promise.Promise<string>;
}
