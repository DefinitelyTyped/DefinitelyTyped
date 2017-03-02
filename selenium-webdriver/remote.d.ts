import * as webdriver from './index';

/**
 * A record object that defines the configuration options for a DriverService
 * instance.
 *
 * @record
 */
interface ServiceOptions { }

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
