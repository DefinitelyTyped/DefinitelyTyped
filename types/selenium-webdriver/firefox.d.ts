import * as http from './http';
import * as webdriver from './index';
import * as remote from './remote';

/**
 * Configuration options for the FirefoxDriver.
 */
export class Options extends webdriver.Capabilities {
  /**
   * Sets the profile to use. The profile may be specified as a
   * {@link Profile} object or as the path to an existing Firefox profile to use
   * as a template.
   *
   * @param {(string|!Profile)} profile The profile to use.
   * @return {!Options} A self reference.
   */
  setProfile(profile: string): Options;

  /**
   * Sets the binary to use. The binary may be specified as the path to a
   * Firefox executable, or as a {@link Binary} object.
   *
   * @param {(string|!Binary)} binary The binary to use.
   * @return {!Options} A self reference.
   */
  setBinary(binary: string|any): Options;

  /**
   * Sets the proxy to use.
   *
   * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
   * @return {!Options} A self reference.
   */
  setProxy(proxy: webdriver.ProxyConfig): Options;

  /**
   * Sets whether to use Mozilla's geckodriver to drive the browser. This option
   * is enabled by default and required for Firefox 47+.
   *
   * @param {boolean} enable Whether to enable the geckodriver.
   * @see https://github.com/mozilla/geckodriver
   */
  useGeckoDriver(enable: boolean): Options;
}

/**
 * @return {string} .
 * @throws {Error}
 */
export function findWires(): string;

/**
 * @param {(string|!Binary)} binary .
 * @return {!remote.DriverService} .
 */
export function createWiresService(binary: string|any): remote.DriverService;

/**
 * @param {(Profile|string)} profile The profile to prepare.
 * @param {number} port The port the FirefoxDriver should listen on.
 * @return {!Promise<string>} a promise for the path to the profile directory.
 */
export function prepareProfile(profile: string|any, port: number): any;

/**
 * A WebDriver client for Firefox.
 */
export class Driver extends webdriver.WebDriver {
  /**
   * Creates a new Firefox session.
   *
   * @param {(Options|capabilities.Capabilities|Object)=} opt_config The
   *    configuration options for this driver, specified as either an
   *    {@link Options} or {@link capabilities.Capabilities}, or as a raw hash
   *    object.
   * @param {(http.Executor|remote.DriverService)=} opt_executor Either a
   *   pre-configured command executor to use for communicating with an
   *   externally managed remote end (which is assumed to already be running),
   *   or the `DriverService` to use to start the geckodriver in a child
   *   process.
   *
   *   If an executor is provided, care should e taken not to use reuse it with
   *   other clients as its internal command mappings will be updated to support
   *   Firefox-specific commands.
   *
   *   _This parameter may only be used with Mozilla's GeckoDriver._
   * @throws {Error} If a custom command executor is provided and the driver is
   *     configured to use the legacy FirefoxDriver from the Selenium project.
   * @return {!Driver} A new driver instance.
   */
  static createSession(
      opt_config?: Options|webdriver.Capabilities,
      opt_executor?: http.Executor|remote.DriverService): Driver;

  /**
   * This function is a no-op as file detectors are not supported by this
   * implementation.
   * @override
   */
  setFileDetector(): void;
}

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * a [geckodriver](https://github.com/mozilla/geckodriver) server in a child
 * process.
 */
export class ServiceBuilder extends remote.DriverService.Builder {
  /**
   * @param {string=} opt_exe Path to the server executable to use. If omitted,
   *     the builder will attempt to locate the geckodriver on the system PATH.
   */
  constructor(opt_exe?: string);

  /**
   * Enables verbose logging.
   *
   * @param {boolean=} opt_trace Whether to enable trace-level logging. By
   *     default, only debug logging is enabled.
   * @return {!ServiceBuilder} A self reference.
   */
  enableVerboseLogging(opt_trace?: boolean): this;

  /**
   * Sets the path to the executable Firefox binary that the geckodriver should
   * use. If this method is not called, this builder will attempt to locate
   * Firefox in the default installation location for the current platform.
   *
   * @param {(string|!Binary)} binary Path to the executable Firefox binary to use.
   * @return {!ServiceBuilder} A self reference.
   * @see Binary#locate()
   */
  setFirefoxBinary(binary: string): this;
}
