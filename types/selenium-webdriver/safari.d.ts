import * as webdriver from "./index";

export class Server {}

/**
 * @return {!Promise<string>} A promise that will resolve with the path
 *     to Safari on the current system.
 */
export function findSafariDriver(): any;

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

/** */
export class CommandExecutor {}

/**
 * Configuration options specific to the {@link Driver SafariDriver}.
 */
export class Options extends webdriver.Capabilities {
    /**
     * Instruct the SafariDriver to use the Safari Technology Preview if true.
     * Otherwise, use the release version of Safari. Defaults to using the release version of Safari.
     *
     * @param {boolean} useTechnologyPreview
     * @return {!Options} A self reference.
     */
    setTechnologyPreview(useTechnologyPreview: boolean): Options;
}

/**
 * A WebDriver client for Safari. This class should never be instantiated
 * directly; instead, use the {@linkplain ./builder.Builder Builder}:
 *
 *     var driver = new Builder()
 *         .forBrowser('safari')
 *         .build();
 */
export class Driver extends webdriver.WebDriver {
    /**
     * Creates a new Safari session.
     *
     * @param {(Options|Capabilities)=} opt_config The configuration
     *     options for the new session.
     * @return {!Driver} A new driver instance.
     */
    static createSession(opt_config?: Options | webdriver.Capabilities): Driver;
}
