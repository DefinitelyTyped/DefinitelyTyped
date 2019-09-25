import * as webdriver from './index';

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

/**
 * @implements {command.Executor}
 */
export class CommandExecutor {}

/**
 * Configuration options specific to the {@link Driver SafariDriver}.
 */
export class Options extends webdriver.Capabilities {
  /**
   * Sets the logging preferences for the new session.
   * @param {!./lib/logging.Preferences} prefs The logging preferences.
   * @return {!Options} A self reference.
   */
  setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;
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
   * Creates a new Safari session.
   *
   * @param {(Options|Capabilities)=} opt_config The configuration
   *     options for the new session.
   * @return {!Driver} A new driver instance.
   */
  static createSession(opt_config?: Options|webdriver.Capabilities): Driver;
}
