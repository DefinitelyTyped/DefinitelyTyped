import * as webdriver from './index';

export class Server { }

/**
 * @return {!Promise<string>} A promise that will resolve with the path
 *     to Safari on the current system.
 */
export function findSafariExecutable(): any;

/**
 * @param {string} serverUrl The URL to connect to.
 * @return {!Promise<string>} A promise for the path to a file that Safari can
 *     open on start-up to trigger a new connection to the WebSocket server.
 */
export function createConnectFile(serverUrl: string): any;

/**
 * Deletes all session data files if so desired.
 * @param {!Object} desiredCapabilities .
 * @return {!Array<promise.Promise>} A list of promises for the deleted files.
 */
export function cleanSession(desiredCapabilities: webdriver.Capabilities): any[];

/** @return {string} . */
export function getRandomString(): string;

/**
 * @implements {command.Executor}
 */
export class CommandExecutor {
}

/**
 * Configuration options specific to the {@link Driver SafariDriver}.
 */
export class Options {
    /**
     * Extracts the SafariDriver specific options from the given capabilities
     * object.
     * @param {!Capabilities} capabilities The capabilities object.
     * @return {!Options} The ChromeDriver options.
     */
    static fromCapabilities(capabilities: webdriver.Capabilities): Options;

    /**
     * Sets whether to force Safari to start with a clean session. Enabling this
     * option will cause all global browser data to be deleted.
     * @param {boolean} clean Whether to make sure the session has no cookies,
     *     cache entries, local storage, or databases.
     * @return {!Options} A self reference.
     */
    setCleanSession(clean: boolean): Options;

    /**
     * Sets the logging preferences for the new session.
     * @param {!./lib/logging.Preferences} prefs The logging preferences.
     * @return {!Options} A self reference.
     */
    setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;

    /**
     * Converts this options instance to a {@link Capabilities} object.
     * @param {Capabilities=} opt_capabilities The capabilities to
     *     merge these options into, if any.
     * @return {!Capabilities} The capabilities.
     */
    toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities;
}

/**
 * A WebDriver client for Safari. This class should never be instantiated
 * directly; instead, use the {@linkplain ./builder.Builder Builder}:
 *
 *     var driver = new Builder()
 *         .forBrowser('safari')
 *         .build();
 *
 */
export class Driver extends webdriver.WebDriver {
    /**
     * @param {(Options|Capabilities)=} opt_config The configuration
     *     options for the new session.
     * @param {promise.ControlFlow=} opt_flow The control flow to create
     *     the driver under.
     */
    constructor(opt_config?: Options | webdriver.Capabilities, opt_flow?: webdriver.promise.ControlFlow);

}
