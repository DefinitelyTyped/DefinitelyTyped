// Type definitions for Selenium WebDriverJS 4.0
// Project: https://github.com/SeleniumHQ/selenium
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>,
//   Yuki Kokubun <https://github.com/Kuniwak>,
//   Craig Nishina <https://github.com/cnishina>,
//   Simon Gellis <https://github.com/SupernaviX>,
//   Ben Dixon <https://github.com/bendxn>,
//   Ziyu <https://github.com/oddui>
//   Johann Wolf <https://github.com/beta-vulgaris>
//   Aleksey Chemakin <https://github.com/Dzenly>
//   David Burns <https://github.com/AutomatedTester>
//   Pirasis Leelatanon <https://github.com/1pete>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as chrome from './chrome';
import * as edge from './edge';
import * as firefox from './firefox';
import * as ie from './ie';
import { By, ByHash } from './lib/by';
import { Browser, Capability, Capabilities, ITimeouts } from './lib/capabilities';
import * as command from './lib/command';
import * as http from './http';
import { Actions, Button, Key, Origin } from './lib/input';
import { promise } from './lib/promise';
import * as logging from './lib/logging';
import * as until from './lib/until';
import * as safari from './safari';

export { By, ByHash } from './lib/by';
export { Browser, Capability, Capabilities, ITimeouts } from './lib/capabilities';
export { Actions, Button, Key, Origin } from './lib/input';
export { promise } from './lib/promise';
export { until };
export { logging };

/**
 * Typings for lib/error
 */
export namespace error {
  class IError extends Error {
    constructor(message?: string);
    message: string;
  }

  /**
   * The base WebDriver error type. This error type is only used directly when a
   * more appropriate category is not defined for the offending error.
   */
  class WebDriverError extends IError {
    constructor(message?: string);
    remoteStacktrace?: string | undefined;
  }

  /**
   * Indicates a {@linkplain ./webdriver.WebElement#click click command} could
   * not completed because the click target is obscured by other elements on the
   * page.
   */
  class ElementClickInterceptedError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An attempt was made to select an element that cannot be selected.
   */
  class ElementNotSelectableError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * Indicates a command could not be completed because the target element is
   * not pointer or keyboard interactable. This will often occur if an element
   * is present in the DOM, but not rendered (i.e. its CSS style has
   * "display: none").
   */

  class ElementNotInteractableError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * Indicates a navigation event caused the browser to generate a certificate
   * warning. This is usually caused by an expired or invalid TLS certificate.
   */
  class InsecureCertificateError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * The arguments passed to a command are either invalid or malformed.
   */
  class InvalidArgumentError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An illegal attempt was made to set a cookie under a different domain than
   * the current page.
   */
  class InvalidCookieDomainError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * The coordinates provided to an interactions operation are invalid.
   */
  class InvalidCoordinatesError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An element command could not be completed because the element is in an
   * invalid state, e.g. attempting to click an element that is no longer
   * attached to the document.
   */
  class InvalidElementStateError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * Argument was an invalid selector.
   */
  class InvalidSelectorError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * Occurs when a command is directed to a session that does not exist.
   */
  class NoSuchSessionError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An error occurred while executing JavaScript supplied by the user.
   */
  class JavascriptError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * The target for mouse interaction is not in the browser’s viewport and
   * cannot be brought into that viewport.
   */
  class MoveTargetOutOfBoundsError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An attempt was made to operate on a modal dialog when one was not open.
   */
  class NoSuchAlertError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * Indicates a named cookie could not be found in the cookie jar for the
   * currently selected document.
   */
  class NoSuchCookieError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An element could not be located on the page using the given search
   * parameters.
   */
  class NoSuchElementError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A request to switch to a frame could not be satisfied because the frame
   * could not be found.
   */
  class NoSuchFrameError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A request to switch to a window could not be satisfied because the window
   * could not be found.
   */
  class NoSuchWindowError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A script did not complete before its timeout expired.
   */
  class ScriptTimeoutError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A new session could not be created.
   */
  class SessionNotCreatedError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An element command failed because the referenced element is no longer
   * attached to the DOM.
   */
  class StaleElementReferenceError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * An operation did not completErrorCodee before its timeout expired.
   */
  class TimeoutError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A request to set a cookie’s value could not be satisfied.
   */
  class UnableToSetCookieError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A screen capture operation was not possible.
   */
  class UnableToCaptureScreenError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * A modal dialog was open, blocking this operation.
   */
  class UnexpectedAlertOpenError extends WebDriverError {
    constructor(message?: string, openAlertText?: string);
    /**
     * @return {(string|undefined)} The text displayed with the unhandled alert,
     *     if available.
     */
    getAlertText(): string;
  }

  /**
   * A command could not be executed because the remote end is not aware of it.
   */
  class UnknownCommandError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * The requested command matched a known URL but did not match an method for
   * that URL.
   */
  class UnknownMethodError extends WebDriverError {
    constructor(message?: string);
  }

  /**
   * Reports an unsupport operation.
   */
  class UnsupportedOperationError extends WebDriverError {
    constructor(message?: string);
  }

  interface Response {
    error: string|number;
    message: string;
  }
  /**
   * Checks a response object from a server that adheres to the W3C WebDriver
   * protocol.
   */
  function checkResponse(data: Response): Response;

  interface MaybeLegacyResponse {
    status?: number | undefined;
    value?: {message: string} | undefined;
    message?: string | undefined;
    getAlertText?(): string;
  }

  /**
   * Checks a legacy response from the Selenium 2.0 wire protocol for an error.
   */
  function checkLegacyResponse(response: MaybeLegacyResponse): MaybeLegacyResponse;

  interface ErrorData {
    error: string|number;
    message: string;
    [key: string]: string|number;
  }

  /**
   * Throws an error coded from the W3C protocol. A generic error will be thrown
   * if the provided `data` is not a valid encoded error.
   */
  function throwDecodedError(data: ErrorData|string): never;

  interface ErrorCodeType {
    [key: string]: number;
  }

  const ErrorCode: ErrorCodeType;

  /**
   * Lookup the err in table of errors.
   */
  function encodeError(err: any): {error: string, message: string};
}

type ConditionFn<T> = (webdriver: WebDriver) => T | null | Promise<T | null>;

/**
 * Defines a condition for use with WebDriver's WebDriver#wait wait command.
 */
export class Condition<T> {
  /**
   * @param {string} message A descriptive error message. Should complete the
   *     sentence 'Waiting [...]'
   * @param {function(!WebDriver): OUT} fn The condition function to
   *     evaluate on each iteration of the wait loop.
   * @constructor
   */
  constructor(message: string, fn: ConditionFn<T>);

  /** @return {string} A description of this condition. */
  description(): string;

  /** @type {function(!WebDriver): OUT} */
  fn(webdriver: WebDriver): ConditionFn<T>;
}

/**
 * Defines a condition that will result in a {@link WebElement}.
 *
 * @extends {Condition<!(WebElement|IThenable<!WebElement>)>}
 */
export class WebElementCondition extends Condition<WebElement> {
  // add an unused private member so the compiler treats this
  // class distinct from other Conditions
  private _nominal: undefined;
}

/**
 * x,y
 */
export interface ILocation {
  x: number;
  y: number;
}

/**
 * width, height
 */
export interface ISize {
  width: number;
  height: number;
}

/**
 * x,y,w,h
 */
export interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Class for defining sequences of user touch interactions. Each sequence
 * will not be executed until {@link #perform} is called.
 *
 * Example:
 *
 *     new TouchSequence(driver).
 *         tapAndHold({x: 0, y: 0}).
 *         move({x: 3, y: 4}).
 *         release({x: 10, y: 10}).
 *         perform();
 */
export class TouchSequence {
  /*
   * @param {!WebDriver} driver The driver instance to use.
   * @constructor
   */
  constructor(driver: WebDriver);

  /**
   * Executes this action sequence.
   * @return {!Promise} A promise that will be resolved once
   *     this sequence has completed.
   */
  perform(): Promise<void>;

  /**
   * Taps an element.
   *
   * @param {!WebElement} elem The element to tap.
   * @return {!TouchSequence} A self reference.
   */
  tap(elem: WebElement): TouchSequence;

  /**
   * Double taps an element.
   *
   * @param {!WebElement} elem The element to double tap.
   * @return {!TouchSequence} A self reference.
   */
  doubleTap(elem: WebElement): TouchSequence;

  /**
   * Long press on an element.
   *
   * @param {!WebElement} elem The element to long press.
   * @return {!TouchSequence} A self reference.
   */
  longPress(elem: WebElement): TouchSequence;

  /**
   * Touch down at the given location.
   *
   * @param {{ x: number, y: number }} location The location to touch down at.
   * @return {!TouchSequence} A self reference.
   */
  tapAndHold(location: ILocation): TouchSequence;

  /**
   * Move a held {@linkplain #tapAndHold touch} to the specified location.
   *
   * @param {{x: number, y: number}} location The location to move to.
   * @return {!TouchSequence} A self reference.
   */
  move(location: ILocation): TouchSequence;

  /**
   * Release a held {@linkplain #tapAndHold touch} at the specified location.
   *
   * @param {{x: number, y: number}} location The location to release at.
   * @return {!TouchSequence} A self reference.
   */
  release(location: ILocation): TouchSequence;

  /**
   * Scrolls the touch screen by the given offset.
   *
   * @param {{x: number, y: number}} offset The offset to scroll to.
   * @return {!TouchSequence} A self reference.
   */
  scroll(offset: IOffset): TouchSequence;

  /**
   * Scrolls the touch screen, starting on `elem` and moving by the specified
   * offset.
   *
   * @param {!WebElement} elem The element where scroll starts.
   * @param {{x: number, y: number}} offset The offset to scroll to.
   * @return {!TouchSequence} A self reference.
   */
  scrollFromElement(elem: WebElement, offset: IOffset): TouchSequence;

  /**
   * Flick, starting anywhere on the screen, at speed xspeed and yspeed.
   *
   * @param {{xspeed: number, yspeed: number}} speed The speed to flick in each
   *    direction, in pixels per second.
   * @return {!TouchSequence} A self reference.
   */
  flick(speed: ISpeed): TouchSequence;

  /**
   * Flick starting at elem and moving by x and y at specified speed.
   *
   * @param {!WebElement} elem The element where flick starts.
   * @param {{x: number, y: number}} offset The offset to flick to.
   * @param {number} speed The speed to flick at in pixels per second.
   * @return {!TouchSequence} A self reference.
   */
  flickElement(elem: WebElement, offset: IOffset, speed: number): TouchSequence;
}

/**
 * x.y again
 */
export interface IOffset {
  x: number;
  y: number;
}

/**
 * delta x,y
 */
export interface ISpeed {
  xspeed: number;
  yspeed: number;
}

/**
 * Represents a modal dialog such as {@code alert}, {@code confirm}, or
 * {@code prompt}. Provides functions to retrieve the message displayed with
 * the alert, accept or dismiss the alert, and set the response text (in the
 * case of {@code prompt}).
 */
export class Alert {
  /**
   * @param {!WebDriver} driver The driver controlling the browser this alert
   *     is attached to.
   * @param {string} text The message text displayed with this alert.
   */
  constructor(driver: WebDriver, text: string);

  // region Methods

  /**
   * Retrieves the message text displayed with this alert. For instance, if the
   * alert were opened with alert('hello'), then this would return 'hello'.
   * @return {!Promise} A promise that will be resolved to the
   *     text displayed with this alert.
   */
  getText(): Promise<string>;

  /**
   * Sets the username and password in an alert prompting for credentials (such
   * as a Basic HTTP Auth prompt). This method will implicitly
   * {@linkplain #accept() submit} the dialog.
   *
   * @param {string} username The username to send.
   * @param {string} password The password to send.
   * @return {!Promise<void>} A promise that will be resolved when this
   *     command has completed.
   */
  authenticateAs(username: string, password: string): Promise<void>;

  /**
   * Accepts this alert.
   * @return {!Promise} A promise that will be resolved when
   *     this command has completed.
   */
  accept(): Promise<void>;

  /**
   * Dismisses this alert.
   * @return {!Promise} A promise that will be resolved when
   *     this command has completed.
   */
  dismiss(): Promise<void>;

  /**
   * Sets the response text on this alert. This command will return an error if
   * the underlying alert does not support response text (e.g. window.alert and
   * window.confirm).
   * @param {string} text The text to set.
   * @return {!Promise} A promise that will be resolved when
   *     this command has completed.
   */
  sendKeys(text: string): Promise<void>;

  // endregion
}

/**
 * AlertPromise is a promise that will be fulfilled with an Alert. This promise
 * serves as a forward proxy on an Alert, allowing calls to be scheduled
 * directly on this instance before the underlying Alert has been fulfilled. In
 * other words, the following two statements are equivalent:
 *
 *     driver.switchTo().alert().dismiss();
 *     driver.switchTo().alert().then(function(alert) {
 *       return alert.dismiss();
 *     });
 *
 * @implements {promise.Thenable.<!Alert>}
 * @final
 */
export interface AlertPromise extends Promise<Alert> {}

/**
 * Implement AlertPromise
 */
export class AlertPromise extends Alert {
  /**
   * @param {!WebDriver} driver The driver controlling the browser this
   *     alert is attached to.
   * @param {!promise.Thenable<!Alert>} alert A thenable
   *     that will be fulfilled with the promised alert.
   */
  constructor(driver: WebDriver, alert: Promise<Alert>);
}

/**
 * ProxyConfig
 */
export interface ProxyConfig {
  proxyType: string;
  proxyAutoconfigUrl?: string | undefined;
  ftpProxy?: string | undefined;
  httpProxy?: string | undefined;
  sslProxy?: string | undefined;
  noProxy?: string | undefined;
  socksProxy?: string | undefined;
  socksUsername?: string | undefined;
  socksPassword?: string | undefined;
}

/**
 * Creates new {@link WebDriver WebDriver} instances. The environment
 * variables listed below may be used to override a builder's configuration,
 * allowing quick runtime changes.
 *
 * - {@code SELENIUM_BROWSER}: defines the target browser in the form
 *   {@code browser[:version][:platform]}.
 *
 * - {@code SELENIUM_REMOTE_URL}: defines the remote URL for all builder
 *   instances. This environment variable should be set to a fully qualified
 *   URL for a WebDriver server (e.g. http://localhost:4444/wd/hub). This
 *   option always takes precedence over {@code SELENIUM_SERVER_JAR}.
 *
 * - {@code SELENIUM_SERVER_JAR}: defines the path to the
 *   <a href='http://selenium-release.storage.googleapis.com/index.html'>
 *   standalone Selenium server</a> jar to use. The server will be started the
 *   first time a WebDriver instance and be killed when the process exits.
 *
 * Suppose you had mytest.js that created WebDriver with
 *
 *     var driver = new Builder()
 *         .forBrowser('chrome')
 *         .build();
 *
 * This test could be made to use Firefox on the local machine by running with
 * `SELENIUM_BROWSER=firefox node mytest.js`. Rather than change the code to
 * target Google Chrome on a remote machine, you can simply set the
 * `SELENIUM_BROWSER` and `SELENIUM_REMOTE_URL` environment variables:
 *
 *     SELENIUM_BROWSER=chrome:36:LINUX \
 *     SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
 *     node mytest.js
 *
 * You could also use a local copy of the standalone Selenium server:
 *
 *     SELENIUM_BROWSER=chrome:36:LINUX \
 *     SELENIUM_SERVER_JAR=/path/to/selenium-server-standalone.jar \
 *     node mytest.js
 */
export class Builder {
  // region Constructors

  /**
   * @constructor
   */
  constructor();

  // endregion

  // region Methods

  /**
   * Configures this builder to ignore any environment variable overrides and to
   * only use the configuration specified through this instance's API.
   *
   * @return {!Builder} A self reference.
   */
  disableEnvironmentOverrides(): Builder;

  /**
   * Creates a new WebDriver client based on this builder's current
   * configuration.
   *
   * This method will return a {@linkplain ThenableWebDriver} instance, allowing
   * users to issue commands directly without calling `then()`. The returned
   * thenable wraps a promise that will resolve to a concrete
   * {@linkplain webdriver.WebDriver WebDriver} instance. The promise will be
   * rejected if the remote end fails to create a new session.
   *
   * @return {!ThenableWebDriver} A new WebDriver instance.
   * @throws {Error} If the current configuration is invalid.
   */
  build(): ThenableWebDriver;

  /**
   * Configures the target browser for clients created by this instance.
   * Any calls to {@link #withCapabilities} after this function will
   * overwrite these settings.
   *
   * <p>You may also define the target browser using the {@code
   * SELENIUM_BROWSER} environment variable. If set, this environment variable
   * should be of the form {@code browser[:[version][:platform]]}.
   *
   * @param {(string|Browser)} name The name of the target browser;
   *     common defaults are available on the {@link Browser} enum.
   * @param {string=} opt_version A desired version; may be omitted if any
   *     version should be used.
   * @param {string=} opt_platform The desired platform; may be omitted if any
   *     version may be used.
   * @return {!Builder} A self reference.
   */
  forBrowser(name: string, opt_version?: string, opt_platform?: string): Builder;

  /**
   * Returns the base set of capabilities this instance is currently configured
   * to use.
   * @return {!Capabilities} The current capabilities for this builder.
   */
  getCapabilities(): Capabilities;

  /**
   * @return {string} The URL of the WebDriver server this instance is
   *     configured to use.
   */
  getServerUrl(): string;

  /**
   * @return {?string} The URL of the proxy server to use for the WebDriver's
   *    HTTP connections, or `null` if not set.
   */
  getWebDriverProxy(): string|null;

  /**
   * Sets the default action to take with an unexpected alert before returning
   * an error.
   * @param {string} beahvior The desired behavior; should be 'accept',
   *     'dismiss', or 'ignore'. Defaults to 'dismiss'.
   * @return {!Builder} A self reference.
   */
  setAlertBehavior(behavior?: string): Builder;

  /**
   * Sets Chrome-specific options for drivers created by this builder. Any
   * logging or proxy settings defined on the given options will take precedence
   * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
   * respectively.
   *
   * @param {!chrome.Options} options The ChromeDriver options to use.
   * @return {!Builder} A self reference.
   */
  setChromeOptions(options: chrome.Options): Builder;

  /**
   * @return {chrome.Options} the Chrome specific options currently configured
   *     for this builder.
   */
  getChromeOptions(): chrome.Options;

  /**
   * Sets the service builder to use for managing the chromedriver child process
   * when creating new Chrome sessions.
   *
   * @param {chrome.ServiceBuilder} service the service to use.
   * @return {!Builder} A self reference.
   */
  setChromeService(service: chrome.ServiceBuilder): Builder;

  /**
   * Set {@linkplain edge.Options options} specific to Microsoft's Edge browser
   * for drivers created by this builder. Any proxy settings defined on the
   * given options will take precedence over those set through
   * {@link #setProxy}.
   *
   * @param {!edge.Options} options The MicrosoftEdgeDriver options to use.
   * @return {!Builder} A self reference.
   */
  setEdgeOptions(options: edge.Options): Builder;

  /**
   * Sets the {@link edge.ServiceBuilder} to use to manage the
   * MicrosoftEdgeDriver child process when creating sessions locally.
   *
   * @param {edge.ServiceBuilder} service the service to use.
   * @return {!Builder} a self reference.
   */
  setEdgeService(service: edge.ServiceBuilder): Builder;

  /**
   * Sets Firefox-specific options for drivers created by this builder. Any
   * logging or proxy settings defined on the given options will take precedence
   * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
   * respectively.
   *
   * @param {!firefox.Options} options The FirefoxDriver options to use.
   * @return {!Builder} A self reference.
   */
  setFirefoxOptions(options: firefox.Options): Builder;

  /**
   * @return {firefox.Options} the Firefox specific options currently configured
   *     for this instance.
   */
  getFirefoxOptions(): firefox.Options;

  /**
   * Sets the {@link firefox.ServiceBuilder} to use to manage the geckodriver
   * child process when creating Firefox sessions locally.
   *
   * @param {firefox.ServiceBuilder} service the service to use.
   * @return {!Builder} a self reference.
   */
  setFirefoxService(service: firefox.ServiceBuilder): Builder;

  /**
   * Set Internet Explorer specific {@linkplain ie.Options options} for drivers
   * created by this builder. Any proxy settings defined on the given options
   * will take precedence over those set through {@link #setProxy}.
   *
   * @param {!ie.Options} options The IEDriver options to use.
   * @return {!Builder} A self reference.
   */
  setIeOptions(options: ie.Options): Builder;

  /**
   * Sets the {@link ie.ServiceBuilder} to use to manage the geckodriver
   * child process when creating IE sessions locally.
   *
   * @param {ie.ServiceBuilder} service the service to use.
   * @return {!Builder} a self reference.
   */
  setIeService(service: ie.ServiceBuilder): Builder;

  /**
   * Sets the logging preferences for the created session. Preferences may be
   * changed by repeated calls, or by calling {@link #withCapabilities}.
   * @param {!(logging.Preferences|Object.<string, string>)} prefs The
   *     desired logging preferences.
   * @return {!Builder} A self reference.
   */
  setLoggingPrefs(prefs: logging.Preferences|{}): Builder;

  /**
   * Sets the proxy configuration to use for WebDriver clients created by this
   * builder. Any calls to {@link #withCapabilities} after this function will
   * overwrite these settings.
   * @param {!capabilities.ProxyConfig} config The configuration to use.
   * @return {!Builder} A self reference.
   */
  setProxy(config: ProxyConfig): Builder;

  /**
   * Sets Safari specific {@linkplain safari.Options options} for drivers
   * created by this builder. Any logging settings defined on the given options
   * will take precedence over those set through {@link #setLoggingPrefs}.
   *
   * @param {!safari.Options} options The Safari options to use.
   * @return {!Builder} A self reference.
   */
  setSafariOptions(options: safari.Options): Builder;

  /**
   * @return {safari.Options} the Safari specific options currently configured
   *     for this instance.
   */
  getSafariOptions(): safari.Options;

  /**
   * Sets the http agent to use for each request.
   * If this method is not called, the Builder will use http.globalAgent by
   * default.
   *
   * @param {http.Agent} agent The agent to use for each request.
   * @return {!Builder} A self reference.
   */
  usingHttpAgent(agent: any): Builder;

  /**
   * @return {http.Agent} The http agent used for each request
   */
  getHttpAgent(): any|null;

  /**
   * Sets the URL of a remote WebDriver server to use. Once a remote URL has
   * been specified, the builder direct all new clients to that server. If this
   * method is never called, the Builder will attempt to create all clients
   * locally.
   *
   * <p>As an alternative to this method, you may also set the
   * {@code SELENIUM_REMOTE_URL} environment variable.
   *
   * @param {string} url The URL of a remote server to use.
   * @return {!Builder} A self reference.
   */
  usingServer(url: string): Builder;

  /**
   * Sets the URL of the proxy to use for the WebDriver's HTTP connections.
   * If this method is never called, the Builder will create a connection
   * without a proxy.
   *
   * @param {string} proxy The URL of a proxy to use.
   * @return {!Builder} A self reference.
   */
  usingWebDriverProxy(proxy: string): Builder;

  /**
   * Sets the desired capabilities when requesting a new session. This will
   * overwrite any previously set capabilities.
   * @param {!(Object|Capabilities)} capabilities The desired
   *     capabilities for a new session.
   * @return {!Builder} A self reference.
   */
  withCapabilities(capabilities: {}|Capabilities): Builder;

  // endregion
}

export type Locator = By | Function | ByHash;

/**
 * Describes an event listener registered on an {@linkplain EventEmitter}.
 */
export class Listener {
  /**
   * @param {!Function} fn The acutal listener function.
   * @param {(Object|undefined)} scope The object in whose scope to invoke the
   *     listener.
   * @param {boolean} oneshot Whether this listener should only be used once.
   */
  constructor(fn: Function, scope: {}, oneshot: boolean);
}

/**
 * Object that can emit events for others to listen for. This is used instead
 * of Closure's event system because it is much more light weight. The API is
 * based on Node's EventEmitters.
 */
export class EventEmitter {
  // region Constructors

  /**
   * @constructor
   */
  constructor();

  // endregion

  // region Methods

  /**
   * Fires an event and calls all listeners.
   * @param {string} type The type of event to emit.
   * @param {...*} var_args Any arguments to pass to each listener.
   */
  emit(type: string, ...var_args: any[]): void;

  /**
   * Returns a mutable list of listeners for a specific type of event.
   * @param {string} type The type of event to retrieve the listeners for.
   * @return {!Set<!Listener>} The registered listeners for the given event
   *     type.
   */
  listeners(type: string): any;

  /**
   * Registers a listener.
   * @param {string} type The type of event to listen for.
   * @param {!Function} fn The function to invoke when the event is fired.
   * @param {Object=} opt_self The object in whose scope to invoke the listener.
   * @param {boolean=} opt_oneshot Whether the listener should b (e removed
   *     after
   *    the first event is fired.
   * @return {!EventEmitter} A self reference.
   * @private
   */
  addListener(type: string, fn: Function, opt_scope?: any, opt_oneshot?: boolean): EventEmitter;

  /**
   * Registers a one-time listener which will be called only the first time an
   * event is emitted, after which it will be removed.
   * @param {string} type The type of event to listen for.
   * @param {!Function} fn The function to invoke when the event is fired.
   * @param {Object=} opt_scope The object in whose scope to invoke the
   *     listener.
   * @return {!EventEmitter} A self reference.
   */
  once(type: string, fn: any, opt_scope?: any): EventEmitter;

  /**
   * An alias for {@code #addListener()}.
   * @param {string} type The type of event to listen for.
   * @param {!Function} fn The function to invoke when the event is fired.
   * @param {Object=} opt_scope The object in whose scope to invoke the
   *     listener.
   * @return {!EventEmitter} A self reference.
   */
  on(type: string, fn: Function, opt_scope?: any): EventEmitter;

  /**
   * Removes a previously registered event listener.
   * @param {string} type The type of event to unregister.
   * @param {!Function} listenerFn The handler function to remove.
   * @return {!EventEmitter} A self reference.
   */
  removeListener(type: string, listenerFn: Function): EventEmitter;

  /**
   * Removes all listeners for a specific type of event. If no event is
   * specified, all listeners across all types will be removed.
   * @param {string=} opt_type The type of event to remove listeners from.
   * @return {!EventEmitter} A self reference.
   */
  removeAllListeners(opt_type?: string): EventEmitter;

  // endregion
}

/**
 * Interface for navigating back and forth in the browser history.
 */
export class Navigation {
  // region Constructors

  /**
   * Interface for navigating back and forth in the browser history.
   *
   * This class should never be instantiated directly. Insead, obtain an
   * instance with
   *
   *    navigate()
   *
   * @see WebDriver#navigate()
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Schedules a command to navigate to a new URL.
   * @param {string} url The URL to navigate to.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the URL has been loaded.
   */
  to(url: string): Promise<void>;

  /**
   * Schedules a command to move backwards in the browser history.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the navigation event has completed.
   */
  back(): Promise<void>;

  /**
   * Schedules a command to move forwards in the browser history.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the navigation event has completed.
   */
  forward(): Promise<void>;

  /**
   * Schedules a command to refresh the current page.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the navigation event has completed.
   */
  refresh(): Promise<void>;

  // endregion
}

export interface IWebDriverOptionsCookie {
  /**
   * The name of the cookie.
   */
  name: string;

  /**
   * The cookie value.
   */
  value: string;

  /**
   * The cookie path. Defaults to "/" when adding a cookie.
   */
  path?: string | undefined;

  /**
   * The domain the cookie is visible to. Defaults to the current browsing
   * context's document's URL when adding a cookie.
   */
  domain?: string | undefined;

  /**
   * Whether the cookie is a secure cookie. Defaults to false when adding a new
   * cookie.
   */
  secure?: boolean | undefined;

  /**
   * Whether the cookie is an HTTP only cookie. Defaults to false when adding a
   * new cookie.
   */
  httpOnly?: boolean | undefined;

  /**
   * When the cookie expires.
   *
   * When {@linkplain Options#addCookie() adding a cookie}, this may be
   * specified in _seconds_ since Unix epoch (January 1, 1970). The expiry will
   * default to 20 years in the future if omitted.
   *
   * The expiry is always returned in seconds since epoch when
   * {@linkplain Options#getCookies() retrieving cookies} from the browser.
   *
   * @type {(!Date|number|undefined)}
   */
  expiry?: number|Date | undefined;
}

export interface IWebDriverCookie extends IWebDriverOptionsCookie {
  /**
   * When the cookie expires.
   *
   * The expiry is always returned in seconds since epoch when
   * {@linkplain Options#getCookies() retrieving cookies} from the browser.
   *
   * @type {(!number|undefined)}
   */
  expiry?: number | undefined;
}

/**
 * Provides methods for managing browser and driver state.
 */
export class Options {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Schedules a command to add a cookie.
   * @param {IWebDriverOptionsCookie} spec Defines the cookie to add.
   * @return {!Promise<void>} A promise that will be resolved
   *     when the cookie has been added to the page.
   * @throws {error.InvalidArgumentError} if any of the cookie parameters are
   *     invalid.
   * @throws {TypeError} if `spec` is not a cookie object.
   */
  addCookie(spec: IWebDriverOptionsCookie): Promise<void>;

  /**
   * Schedules a command to delete all cookies visible to the current page.
   * @return {!Promise} A promise that will be resolved when all
   *     cookies have been deleted.
   */
  deleteAllCookies(): Promise<void>;

  /**
   * Schedules a command to delete the cookie with the given name. This command
   * is a no-op if there is no cookie with the given name visible to the current
   * page.
   * @param {string} name The name of the cookie to delete.
   * @return {!Promise} A promise that will be resolved when the
   *     cookie has been deleted.
   */
  deleteCookie(name: string): Promise<void>;

  /**
   * Schedules a command to retrieve all cookies visible to the current page.
   * Each cookie will be returned as a JSON object as described by the WebDriver
   * wire protocol.
   * @return {!Promise} A promise that will be resolved with the
   *     cookies visible to the current page.
   * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
   */
  getCookies(): Promise<IWebDriverCookie[]>;

  /**
   * Schedules a command to retrieve the cookie with the given name. Returns
   * null if there is no such cookie. The cookie will be returned as a JSON
   * object as described by the WebDriver wire protocol.
   * @param {string} name The name of the cookie to retrieve.
   * @return {!Promise} A promise that will be resolved with the
   *     named cookie, or {@code null} if there is no such cookie.
   * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
   */
  getCookie(name: string): Promise<IWebDriverCookie>;

  /**
   * @return {!Logs} The interface for managing driver
   *     logs.
   */
  logs(): Logs;

  /**
   * The current timeouts
   */
  getTimeouts(): Promise<ITimeouts>;

  /**
   * Set current timeouts
   */
  setTimeouts(timeouts: ITimeouts): Promise<void>;

  /**
   * @return {!Window} The interface for managing the
   *     current window.
   */
  window(): Window;

  // endregion
}

/**
 * An interface for managing the current window.
 */
export class Window {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Retrieves the window's current position, relative to the top left corner of
   * the screen.
   * @return {!Promise} A promise that will be resolved with the
   *     window's position in the form of a {x:number, y:number} object literal.
   */
  getPosition(): Promise<ILocation>;

  /**
   * Repositions the current window.
   * @param {number} x The desired horizontal position, relative to the left
   *     side of the screen.
   * @param {number} y The desired vertical position, relative to the top of the
   *     of the screen.
   * @return {!Promise} A promise that will be resolved when the
   *     command has completed.
   */
  setPosition(x: number, y: number): Promise<void>;

  /**
   * Retrieves the window's current size.
   * @return {!Promise} A promise that will be resolved with the
   *     window's size in the form of a {width:number, height:number} object
   *     literal.
   */
  getSize(): Promise<ISize>;

  /**
   * Resizes the current window.
   * @param {number} width The desired window width.
   * @param {number} height The desired window height.
   * @return {!Promise} A promise that will be resolved when the
   *     command has completed.
   */
  setSize(width: number, height: number): Promise<void>;

  /**
   * Returns the current top-level window's size and position.
   */
  getRect(): Promise<IRectangle>;

  /**
   * Sets the current top-level window's size and position. You may update
   * just the size by omitting `x` & `y`, or just the position by omitting
   * `width` & `height` options.
   */
  setRect({x, y, width, height}: Partial<IRectangle>): Promise<IRectangle>;

  /**
   * Maximizes the current window. The exact behavior of this command is
   * specific to individual window managers, but typically involves increasing
   * the window to the maximum available size without going full-screen.
   * @return {!Promise} A promise that will be resolved when the
   *     command has completed.
   */
  maximize(): Promise<void>;

  /**
   * Minimizes the current window. The exact behavior of this command is
   * specific to individual window managers, but typically involves hiding
   * the window in the system tray.
   * @return {!Promise} A promise that will be resolved when the
   *     command has completed.
   */
  minimize(): Promise<void>;

  /**
   * Invokes the "full screen" operation on the current window. The exact
   * behavior of this command is specific to individual window managers, but
   * this will typically increase the window size to the size of the physical
   * display and hide the browser chrome.
   *
   * @return {!Promise<void>} A promise that will be resolved when the command
   *     has completed.
   * @see <https://fullscreen.spec.whatwg.org/#fullscreen-an-element>
   */
  fullsceen(): Promise<void>;

  // endregion
}

/**
 * Interface for managing WebDriver log records.
 */
export class Logs {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region

  /**
   * Fetches available log entries for the given type.
   *
   * <p/>Note that log buffers are reset after each call, meaning that
   * available log entries correspond to those entries not yet returned for a
   * given log type. In practice, this means that this call will return the
   * available log entries since the last call, or from the start of the
   * session.
   *
   * @param {!logging.Type} type The desired log type.
   * @return {!Promise.<!Array.<!logging.Entry>>} A
   *   promise that will resolve to a list of log entries for the specified
   *   type.
   */
  get(type: string): Promise<logging.Entry[]>;

  /**
   * Retrieves the log types available to this driver.
   * @return {!Promise.<!Array.<!logging.Type>>} A
   *     promise that will resolve to a list of available log types.
   */
  getAvailableLogTypes(): Promise<string[]>;

  // endregion
}

/**
 * An interface for changing the focus of the driver to another frame or window.
 */
export class TargetLocator {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Schedules a command retrieve the {@code document.activeElement} element on
   * the current document, or {@code document.body} if activeElement is not
   * available.
   * @return {!WebElement} The active element.
   */
  activeElement(): WebElementPromise;

  /**
   * Schedules a command to switch focus of all future commands to the first
   * frame on the page.
   * @return {!Promise} A promise that will be resolved when the
   *     driver has changed focus to the default content.
   */
  defaultContent(): Promise<void>;

  /**
   * Changes the focus of all future commands to another frame on the page. The
   * target frame may be specified as one of the following:
   *
   * - A number that specifies a (zero-based) index into [window.frames](
   *   https://developer.mozilla.org/en-US/docs/Web/API/Window.frames).
   * - A {@link WebElement} reference, which correspond to a `frame` or `iframe`
   *   DOM element.
   * - The `null` value, to select the topmost frame on the page. Passing `null`
   *   is the same as calling {@link #defaultContent defaultContent()}.
   *
   * If the specified frame can not be found, the returned promise will be
   * rejected with a {@linkplain error.NoSuchFrameError}.
   *
   * @param {(number|WebElement|null)} id The frame locator.
   * @return {!Promise<void>} A promise that will be resolved
   *     when the driver has changed focus to the specified frame.
   */
  frame(id: number|WebElement|null): Promise<void>;

  /**
   * Changes the focus of all future commands to the parent frame of the
   * currently selected frame. This command has no effect if the driver is
   * already focused on the top-level browsing context.
   *
   * @return {!Promise<void>} A promise that will be resolved when the command
   *     has completed.
   */
  parentFrame(): Promise<void>;

  /**
   * Schedules a command to switch the focus of all future commands to another
   * window. Windows may be specified by their {@code window.name} attribute or
   * by its handle (as returned by {@link WebDriver#getWindowHandles}).
   *
   * If the specified window cannot be found, the returned promise will be
   * rejected with a {@linkplain error.NoSuchWindowError}.
   *
   * @param {string} nameOrHandle The name or window handle of the window to
   *     switch focus to.
   * @return {!Promise<void>} A promise that will be resolved
   *     when the driver has changed focus to the specified window.
   */
  window(nameOrHandle: string): Promise<void>;

  /**
   * Creates a new browser window and switches the focus for future
   * commands of this driver to the new window.
   *
   * @param {string} typeHint 'window' or 'tab'. The created window is not
   *     guaranteed to be of the requested type; if the driver does not support
   *     the requested type, a new browser window will be created of whatever type
   *     the driver does support.
   * @return {!Promise<void>} A promise that will be resolved
   *     when the driver has changed focus to the new window.
   */
  newWindow(typeHint: string): Promise<void>;

  /**
   * Schedules a command to change focus to the active modal dialog, such as
   * those opened by `window.alert()`, `window.confirm()`, and
   * `window.prompt()`. The returned promise will be rejected with a
   * {@linkplain error.NoSuchAlertError} if there are no open alerts.
   *
   * @return {!AlertPromise} The open alert.
   */
  alert(): AlertPromise;

  // endregion
}

/**
 * Used with {@link WebElement#sendKeys WebElement#sendKeys} on file
 * input elements ({@code <input type='file'>}) to detect when the entered key
 * sequence defines the path to a file.
 *
 * By default, {@linkplain WebElement WebElement's} will enter all
 * key sequences exactly as entered. You may set a
 * {@linkplain WebDriver#setFileDetector file detector} on the parent
 * WebDriver instance to define custom behavior for handling file elements. Of
 * particular note is the {@link selenium-webdriver/remote.FileDetector}, which
 * should be used when running against a remote
 * [Selenium Server](http://docs.seleniumhq.org/download/).
 */
export class FileDetector {
  /** @constructor */
  constructor();

  /**
   * Handles the file specified by the given path, preparing it for use with
   * the current browser. If the path does not refer to a valid file, it will
   * be returned unchanged, otherwisee a path suitable for use with the current
   * browser will be returned.
   *
   * This default implementation is a no-op. Subtypes may override this
   * function for custom tailored file handling.
   *
   * @param {!WebDriver} driver The driver for the current browser.
   * @param {string} path The path to process.
   * @return {!Promise<string>} A promise for the processed
   *     file path.
   * @package
   */
  handleFile(driver: WebDriver, path: string): Promise<string>;
}

export type CreateSessionCapabilities =
    Capabilities | {desired?: Capabilities | undefined, required?: Capabilities | undefined};

/**
 * Creates a new WebDriver client, which provides control over a browser.
 *
 * Every WebDriver command returns a {@code Promise} that
 * represents the result of that command. Callbacks may be registered on this
 * object to manipulate the command result or catch an expected error. Any
 * commands scheduled with a callback are considered sub-commands and will
 * execute before the next command in the current frame. For example:
 *
 *   var message = [];
 *   driver.call(message.push, message, 'a').then(function() {
 *     driver.call(message.push, message, 'b');
 *   });
 *   driver.call(message.push, message, 'c');
 *   driver.call(function() {
 *     alert('message is abc? ' + (message.join('') == 'abc'));
 *   });
 *
 */
export class WebDriver {
  // region Constructors

  /**
   * @param {!(Session|Promise<!Session>)} session Either a
   *     known session or a promise that will be resolved to a session.
   * @param {!command.Executor} executor The executor to use when sending
   *     commands to the browser.
   */
  constructor(session: Session|Promise<Session>, executor: http.Executor);

  // endregion

  // region StaticMethods

  /**
   * Creates a new WebDriver session.
   *
   * By default, the requested session `capabilities` are merely "desired" and
   * the remote end will still create a new session even if it cannot satisfy
   * all of the requested capabilities. You can query which capabilities a
   * session actually has using the
   * {@linkplain #getCapabilities() getCapabilities()} method on the returned
   * WebDriver instance.
   *
   * To define _required capabilities_, provide the `capabilities` as an object
   * literal with `required` and `desired` keys. The `desired` key may be
   * omitted if all capabilities are required, and vice versa. If the server
   * cannot create a session with all of the required capabilities, it will
   * return an {@linkplain error.SessionNotCreatedError}.
   *
   *     let required = new Capabilities().set('browserName', 'firefox');
   *     let desired = new Capabilities().set('version', '45');
   *     let driver = WebDriver.createSession(executor, {required, desired});
   *
   * This function will always return a WebDriver instance. If there is an error
   * creating the session, such as the aforementioned SessionNotCreatedError,
   * the driver will have a rejected {@linkplain #getSession session} promise.
   * It is recommended that this promise is left _unhandled_ so it will
   * propagate through the {@linkplain promise.ControlFlow control flow} and
   * cause subsequent commands to fail.
   *
   *     let required = Capabilities.firefox();
   *     let driver = WebDriver.createSession(executor, {required});
   *
   *     // If the createSession operation failed, then this command will also
   *     // also fail, propagating the creation failure.
   *     driver.get('http://www.google.com').catch(e => console.log(e));
   *
   * @param {!command.Executor} executor The executor to create the new session
   *     with.
   * @param {(!Capabilities|
   *          {desired: (Capabilities|undefined),
   *           required: (Capabilities|undefined)})} capabilities The desired
   *     capabilities for the new session.
   * @param {promise.ControlFlow=} opt_flow The control flow all driver
   *     commands should execute under, including the initial session creation.
   *     Defaults to the {@link promise.controlFlow() currently active}
   *     control flow.
   * @param {(function(new: WebDriver,
   *                   !IThenable<!Session>,
   *                   !command.Executor,
   *                   promise.ControlFlow=))=} opt_ctor
   *    A reference to the constructor of the specific type of WebDriver client
   *    to instantiate. Will create a vanilla {@linkplain WebDriver} instance
   *    if a constructor is not provided.
   * @param {(function(this: void): ?)=} opt_onQuit A callback to invoke when
   *    the newly created session is terminated. This should be used to clean
   *    up any resources associated with the session.
   * @return {!WebDriver} The driver for the newly created session.
   */
  // This method's arguments are untyped so that its overloads can have correct
  // types. Typescript doesn't allow static methods to be overridden with
  // incompatible signatures.
  static createSession(...var_args: any[]): WebDriver;

  // endregion

  // region Methods

  /**
   * Schedules a {@link command.Command} to be executed by this driver's
   * {@link command.Executor}.
   *
   * @param {!command.Command} command The command to schedule.
   * @param {string} description A description of the command for debugging.
   * @return {!Promise<T>} A promise that will be resolved
   *     with the command result.
   * @template T
   */
  execute<T>(command: command.Command, description?: string): Promise<T>;

  /**
   * Sets the {@linkplain input.FileDetector file detector} that should be
   * used with this instance.
   * @param {input.FileDetector} detector The detector to use or {@code null}.
   */
  setFileDetector(detector: FileDetector): void;

  getExecutor(): command.Executor;

  /**
   * @return {!Promise.<!Session>} A promise for this
   *     client's session.
   */
  getSession(): Promise<Session>;

  /**
   * @return {!Promise.<!Capabilities>} A promise
   *     that will resolve with the this instance's capabilities.
   */
  getCapabilities(): Promise<Capabilities>;

  /**
   * Schedules a command to quit the current session. After calling quit, this
   * instance will be invalidated and may no longer be used to issue commands
   * against the browser.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the command has completed.
   */
  quit(): Promise<void>;

  /**
   * Creates a new action sequence using this driver. The sequence will not be
   * scheduled for execution until {@link actions.ActionSequence#perform} is
   * called. Example:
   *
   *     driver.actions().
   *         mouseDown(element1).
   *         mouseMove(element2).
   *         mouseUp().
   *         perform();
   *
   * @return {!actions.ActionSequence} A new action sequence for this instance.
   */
  actions(options?: {async: boolean, bridge: boolean}|{async: boolean}|{bridge: boolean}): Actions;

  /**
   * Schedules a command to execute JavaScript in the context of the currently
   * selected frame or window. The script fragment will be executed as the body
   * of an anonymous function. If the script is provided as a function object,
   * that function will be converted to a string for injection into the target
   * window.
   *
   * Any arguments provided in addition to the script will be included as script
   * arguments and may be referenced using the {@code arguments} object.
   * Arguments may be a boolean, number, string, or {@code WebElement}.
   * Arrays and objects may also be used as script arguments as long as each
   * item adheres to the types previously mentioned.
   *
   * The script may refer to any variables accessible from the current window.
   * Furthermore, the script will execute in the window's context, thus
   * {@code document} may be used to refer to the current document. Any local
   * variables will not be available once the script has finished executing,
   * though global variables will persist.
   *
   * If the script has a return value (i.e. if the script contains a return
   * statement), then the following steps will be taken for resolving this
   * functions return value:
   *
   * - For a HTML element, the value will resolve to a
   *     {@link WebElement}
   * - Null and undefined return values will resolve to null</li>
   * - Booleans, numbers, and strings will resolve as is</li>
   * - Functions will resolve to their string representation</li>
   * - For arrays and objects, each member item will be converted according to
   *     the rules above
   *
   * @param {!(string|Function)} script The script to execute.
   * @param {...*} var_args The arguments to pass to the script.
   * @return {!Promise.<T>} A promise that will resolve to the
   *    scripts return value.
   * @template T
   */
  executeScript<T>(script: string|Function, ...var_args: any[]): Promise<T>;

  /**
   * Schedules a command to execute asynchronous JavaScript in the context of
   * the currently selected frame or window. The script fragment will be
   * executed as the body of an anonymous function. If the script is provided as
   * a function object, that function will be converted to a string for
   * injection into the target window.
   *
   * Any arguments provided in addition to the script will be included as script
   * arguments and may be referenced using the {@code arguments} object.
   * Arguments may be a boolean, number, string, or {@code WebElement}.
   * Arrays and objects may also be used as script arguments as long as each
   * item adheres to the types previously mentioned.
   *
   * Unlike executing synchronous JavaScript with {@link #executeScript},
   * scripts executed with this function must explicitly signal they are
   * finished by invoking the provided callback. This callback will always be
   * injected into the executed function as the last argument, and thus may be
   * referenced with {@code arguments[arguments.length - 1]}. The following
   * steps will be taken for resolving this functions return value against the
   * first argument to the script's callback function:
   *
   * - For a HTML element, the value will resolve to a
   *     {@link WebElement}
   * - Null and undefined return values will resolve to null
   * - Booleans, numbers, and strings will resolve as is
   * - Functions will resolve to their string representation
   * - For arrays and objects, each member item will be converted according to
   *     the rules above
   *
   * __Example #1:__ Performing a sleep that is synchronized with the currently
   * selected window:
   *
   *     var start = new Date().getTime();
   *     driver.executeAsyncScript(
   *         'window.setTimeout(arguments[arguments.length - 1], 500);').
   *         then(function() {
   *           console.log(
   *               'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
   *         });
   *
   * __Example #2:__ Synchronizing a test with an AJAX application:
   *
   *     var button = driver.findElement(By.id('compose-button'));
   *     button.click();
   *     driver.executeAsyncScript(
   *         'var callback = arguments[arguments.length - 1];' +
   *         'mailClient.getComposeWindowWidget().onload(callback);');
   *     driver.switchTo().frame('composeWidget');
   *     driver.findElement(By.id('to')).sendKeys('dog@example.com');
   *
   * __Example #3:__ Injecting a XMLHttpRequest and waiting for the result. In
   * this example, the inject script is specified with a function literal. When
   * using this format, the function is converted to a string for injection, so
   * it should not reference any symbols not defined in the scope of the page
   * under test.
   *
   *     driver.executeAsyncScript(function() {
   *       var callback = arguments[arguments.length - 1];
   *       var xhr = new XMLHttpRequest();
   *       xhr.open('GET', '/resource/data.json', true);
   *       xhr.onreadystatechange = function() {
   *         if (xhr.readyState == 4) {
   *           callback(xhr.responseText);
   *         }
   *       }
   *       xhr.send('');
   *     }).then(function(str) {
   *       console.log(JSON.parse(str)['food']);
   *     });
   *
   * @param {!(string|Function)} script The script to execute.
   * @param {...*} var_args The arguments to pass to the script.
   * @return {!Promise.<T>} A promise that will resolve to the
   *    scripts return value.
   * @template T
   */
  executeAsyncScript<T>(script: string|Function, ...var_args: any[]): Promise<T>;

  /**
   * Schedules a command to wait for a condition to hold. The condition may be
   * specified by a {@link Condition}, as a custom function, or
   * as a {@link Promise}.
   *
   * For a {@link Condition} or function, the wait will repeatedly
   * evaluate the condition until it returns a truthy value. If any errors occur
   * while evaluating the condition, they will be allowed to propagate. In the
   * event a condition returns a {@link Promise promise}, the
   * polling loop will wait for it to be resolved and use the resolved value for
   * whether the condition has been satisified. Note the resolution time for
   * a promise is factored into whether a wait has timed out.
   *
   * Note, if the provided condition is a {@link WebElementCondition}, then
   * the wait will return a {@link WebElementPromise} that will resolve to the
   * element that satisified the condition.
   *
   * *Example:* waiting up to 10 seconds for an element to be present and
   * visible on the page.
   *
   *     var button = driver.wait(until.elementLocated(By.id('foo'), 10000);
   *     button.click();
   *
   * This function may also be used to block the command flow on the resolution
   * of a {@link Promise promise}. When given a promise, the
   * command will simply wait for its resolution before completing. A timeout
   * may be provided to fail the command if the promise does not resolve before
   * the timeout expires.
   *
   * *Example:* Suppose you have a function, `startTestServer`, that returns a
   * promise for when a server is ready for requests. You can block a
   * `WebDriver` client on this promise with:
   *
   *     var started = startTestServer();
   *     driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
   *     driver.get(getServerUrl());
   *
   * @param {!WebElementCondition} condition The condition to
   *     wait on, defined as a promise, condition object, or  a function to
   *     evaluate as a condition.
   * @param {number=} opt_timeout How long to wait for the condition to be true.
   * @param {string=} opt_message An optional message to use if the wait times
   *     out.
   * @return {!WebElementPromise} A promise that will be fulfilled
   *     with the first truthy value returned by the condition function, or
   *     rejected if the condition times out.
   * @template T
   */
  wait(condition: WebElementCondition, opt_timeout?: number, opt_message?: string):
      WebElementPromise;

  /**
   * Schedules a command to wait for a condition to hold. The condition may be
   * specified by a {@link webdriver.Condition}, as a custom function, or
   * as a {@link Promise}.
   *
   * For a {@link webdriver.Condition} or function, the wait will repeatedly
   * evaluate the condition until it returns a truthy value. If any errors occur
   * while evaluating the condition, they will be allowed to propagate. In the
   * event a condition returns a {@link Promise promise}, the
   * polling loop will wait for it to be resolved and use the resolved value for
   * whether the condition has been satisified. Note the resolution time for
   * a promise is factored into whether a wait has timed out.
   *
   * Note, if the provided condition is a {@link WebElementCondition}, then
   * the wait will return a {@link WebElementPromise} that will resolve to the
   * element that satisified the condition.
   *
   * *Example:* waiting up to 10 seconds for an element to be present and
   * visible on the page.
   *
   *     var button = driver.wait(until.elementLocated(By.id('foo'), 10000);
   *     button.click();
   *
   * This function may also be used to block the command flow on the resolution
   * of a {@link Promise promise}. When given a promise, the
   * command will simply wait for its resolution before completing. A timeout
   * may be provided to fail the command if the promise does not resolve before
   * the timeout expires.
   *
   * *Example:* Suppose you have a function, `startTestServer`, that returns a
   * promise for when a server is ready for requests. You can block a
   * `WebDriver` client on this promise with:
   *
   *     var started = startTestServer();
   *     driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
   *     driver.get(getServerUrl());
   *
   * @param {!(Promise<T>|
   *           Condition<T>|
   *           function(!WebDriver): T)} condition The condition to
   *     wait on, defined as a promise, condition object, or  a function to
   *     evaluate as a condition.
   * @param {number=} opt_timeout How long to wait for the condition to be true.
   * @param {string=} opt_message An optional message to use if the wait times
   *     out.
   * @return {!Promise<T>} A promise that will be fulfilled
   *     with the first truthy value returned by the condition function, or
   *     rejected if the condition times out.
   * @template T
   */
  wait<T>(
      condition: PromiseLike<T>|Condition<T>|((driver: WebDriver) => T | PromiseLike<T>)|Function,
      opt_timeout?: number, opt_message?: string): Promise<T>;

  /**
   * Schedules a command to make the driver sleep for the given amount of time.
   * @param {number} ms The amount of time, in milliseconds, to sleep.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the sleep has finished.
   */
  sleep(ms: number): Promise<void>;

  /**
   * Schedules a command to retrieve they current window handle.
   * @return {!Promise.<string>} A promise that will be
   *     resolved with the current window handle.
   */
  getWindowHandle(): Promise<string>;

  /**
   * Schedules a command to retrieve the current list of available window
   * handles.
   * @return {!Promise.<!Array.<string>>} A promise that will
   *     be resolved with an array of window handles.
   */
  getAllWindowHandles(): Promise<string[]>;

  /**
   * Schedules a command to retrieve the current page's source. The page source
   * returned is a representation of the underlying DOM: do not expect it to be
   * formatted or escaped in the same way as the response sent from the web
   * server.
   * @return {!Promise.<string>} A promise that will be
   *     resolved with the current page source.
   */
  getPageSource(): Promise<string>;

  /**
   * Schedules a command to close the current window.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when this command has completed.
   */
  close(): Promise<void>;

  /**
   * Schedules a command to navigate to the given URL.
   * @param {string} url The fully qualified URL to open.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the document has finished loading.
   */
  get(url: string): Promise<void>;

  /**
   * Schedules a command to retrieve the URL of the current page.
   * @return {!Promise.<string>} A promise that will be
   *     resolved with the current URL.
   */
  getCurrentUrl(): Promise<string>;

  /**
   * Schedules a command to retrieve the current page's title.
   * @return {!Promise.<string>} A promise that will be
   *     resolved with the current page's title.
   */
  getTitle(): Promise<string>;

  /**
   * Schedule a command to find an element on the page. If the element cannot be
   * found, a {@link bot.ErrorCode.NO_SUCH_ELEMENT} result will be returned
   * by the driver. Unlike other commands, this error cannot be suppressed. In
   * other words, scheduling a command to find an element doubles as an assert
   * that the element is present on the page. To test whether an element is
   * present on the page, use {@link #findElements}.
   *
   * The search criteria for an element may be defined using one of the
   * factories in the {@link By} namespace, or as a short-hand
   * {@link By.Hash} object. For example, the following two statements
   * are equivalent:
   *
   *     var e1 = driver.findElement(By.id('foo'));
   *     var e2 = driver.findElement({id:'foo'});
   *
   * You may also provide a custom locator function, which takes as input this
   * instance and returns a {@link WebElement}, or a promise that will resolve
   * to a WebElement. If the returned promise resolves to an array of
   * WebElements, WebDriver will use the first element. For example, to find the
   * first visible link on a page, you could write:
   *
   *     var link = driver.findElement(firstVisibleLink);
   *
   *     function firstVisibleLink(driver) {
   *       var links = driver.findElements(By.tagName('a'));
   *       return promise.filter(links, function(link) {
   *         return link.isDisplayed();
   *       });
   *     }
   *
   * @param {!(by.By|Function)} locator The locator to use.
   * @return {!WebElementPromise} A WebElement that can be used to issue
   *     commands against the located element. If the element is not found, the
   *     element will be invalidated and all scheduled commands aborted.
   */
  findElement(locator: Locator): WebElementPromise;

  /**
   * Schedule a command to search for multiple elements on the page.
   *
   * @param {!(by.By|Function)} locator The locator to use.
   * @return {!Promise.<!Array.<!WebElement>>} A
   *     promise that will resolve to an array of WebElements.
   */
  findElements(locator: Locator): Promise<WebElement[]>;

  /**
   * Schedule a command to take a screenshot. The driver makes a best effort to
   * return a screenshot of the following, in order of preference:
   *
   * 1. Entire page
   * 2. Current window
   * 3. Visible portion of the current frame
   * 4. The entire display containing the browser
   *
   * @return {!Promise<string>} A promise that will be
   *     resolved to the screenshot as a base-64 encoded PNG.
   */
  takeScreenshot(): Promise<string>;

  /**
   * @return {!Options} The options interface for this
   *     instance.
   */
  manage(): Options;

  /**
   * @return {!Navigation} The navigation interface for this
   *     instance.
   */
  navigate(): Navigation;

  /**
   * @return {!TargetLocator} The target locator interface for
   *     this instance.
   */
  switchTo(): TargetLocator;

  // endregion
}

/**
 * A thenable wrapper around a {@linkplain webdriver.IWebDriver IWebDriver}
 * instance that allows commands to be issued directly instead of having to
 * repeatedly call `then`:
 *
 *     let driver = new Builder().build();
 *     driver.then(d => d.get(url));  // You can do this...
 *     driver.get(url);               // ...or this
 *
 * If the driver instance fails to resolve (e.g. the session cannot be created),
 * every issued command will fail.
 *
 * @extends {webdriver.IWebDriver}
 * @extends {Promise<!webdriver.IWebDriver>}
 * @interface
 */
export interface ThenableWebDriver extends WebDriver, Promise<WebDriver> {}

export interface IWebElementId { [ELEMENT: string]: string; }

/**
 * Represents a DOM element. WebElements can be found by searching from the
 * document root using a {@code WebDriver} instance, or by searching
 * under another {@code WebElement}:
 * <pre><code>
 *   driver.get('http://www.google.com');
 *   var searchForm = driver.findElement(By.tagName('form'));
 *   var searchBox = searchForm.findElement(By.name('q'));
 *   searchBox.sendKeys('webdriver');
 * </code></pre>
 *
 * The WebElement is implemented as a promise for compatibility with the promise
 * API. It will always resolve itself when its internal state has been fully
 * resolved and commands may be issued against the element. This can be used to
 * catch errors when an element cannot be located on the page:
 * <pre><code>
 *   driver.findElement(By.id('not-there')).then(function(element) {
 *     alert('Found an element that was not expected to be there!');
 *   }, function(error) {
 *     alert('The element was not found, as expected');
 *   });
 * </code></pre>
 */
export interface IWebElement {
  // region Methods

  /**
   * Schedules a command to click on this element.
   * @return {!Promise} A promise that will be resolved when
   *     the click command has completed.
   */
  click(): Promise<void>;

  /**
   * Schedules a command to type a sequence on the DOM element represented by
   * this instance.
   *
   * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
   * processed in the key sequence, that key state is toggled until one of the
   * following occurs:
   *
   * - The modifier key is encountered again in the sequence. At this point the
   *   state of the key is toggled (along with the appropriate keyup/down
   *   events).
   * - The {@link input.Key.NULL} key is encountered in the sequence. When
   *   this key is encountered, all modifier keys current in the down state are
   *   released (with accompanying keyup events). The NULL key can be used to
   *   simulate common keyboard shortcuts:
   *
   *         element.sendKeys('text was',
   *                          Key.CONTROL, 'a', Key.NULL,
   *                          'now text is');
   *         // Alternatively:
   *         element.sendKeys('text was',
   *                          Key.chord(Key.CONTROL, 'a'),
   *                          'now text is');
   *
   * - The end of the key sequence is encountered. When there are no more keys
   *   to type, all depressed modifier keys are released (with accompanying
   *   keyup events).
   *
   * If this element is a file input ({@code <input type='file'>}), the
   * specified key sequence should specify the path to the file to attach to
   * the element. This is analogous to the user clicking 'Browse...' and
   * entering the path into the file select dialog.
   *
   *     var form = driver.findElement(By.css('form'));
   *     var element = form.findElement(By.css('input[type=file]'));
   *     element.sendKeys('/path/to/file.txt');
   *     form.submit();
   *
   * For uploads to function correctly, the entered path must reference a file
   * on the _browser's_ machine, not the local machine running this script. When
   * running against a remote Selenium server, a {@link input.FileDetector}
   * may be used to transparently copy files to the remote machine before
   * attempting to upload them in the browser.
   *
   * __Note:__ On browsers where native keyboard events are not supported
   * (e.g. Firefox on OS X), key events will be synthesized. Special
   * punctuation keys will be synthesized according to a standard QWERTY en-us
   * keyboard layout.
   *
   * @param {...(number|string|!IThenable<(number|string)>)} var_args The
   *     sequence of keys to type. Number keys may be referenced numerically or
   *     by string (1 or '1'). All arguments will be joined into a single
   *     sequence.
   * @return {!Promise} A promise that will be resolved when all
   *     keys have been typed.
   */
  sendKeys(...var_args: Array<number|string|Promise<string|number>>): Promise<void>;

  /**
   * Schedules a command to query for the tag/node name of this element.
   * @return {!Promise} A promise that will be resolved with the
   *     element's tag name.
   */
  getTagName(): Promise<string>;

  /**
   * Schedules a command to query for the computed style of the element
   * represented by this instance. If the element inherits the named style from
   * its parent, the parent will be queried for its value.  Where possible,
   * color values will be converted to their hex representation (e.g. #00ff00
   * instead of rgb(0, 255, 0)). <p/> <em>Warning:</em> the value returned will
   * be as the browser interprets it, so it may be tricky to form a proper
   * assertion.
   *
   * @param {string} cssStyleProperty The name of the CSS style property to look
   *     up.
   * @return {!Promise} A promise that will be resolved with the
   *     requested CSS value.
   */
  getCssValue(cssStyleProperty: string): Promise<string>;

  /**
   * Schedules a command to query for the value of the given attribute of the
   * element. Will return the current value even if it has been modified after
   * the page has been loaded. More exactly, this method will return the value
   * of the given attribute, unless that attribute is not present, in which case
   * the value of the property with the same name is returned. If neither value
   * is set, null is returned. The 'style' attribute is converted as best can be
   * to a text representation with a trailing semi-colon. The following are
   * deemed to be 'boolean' attributes and will be returned as thus:
   *
   * <p>async, autofocus, autoplay, checked, compact, complete, controls,
   * declare, defaultchecked, defaultselected, defer, disabled, draggable,
   * ended, formnovalidate, hidden, indeterminate, iscontenteditable, ismap,
   * itemscope, loop, multiple, muted, nohref, noresize, noshade, novalidate,
   * nowrap, open, paused, pubdate, readonly, required, reversed, scoped,
   * seamless, seeking, selected, spellcheck, truespeed, willvalidate
   *
   * <p>Finally, the following commonly mis-capitalized attribute/property names
   * are evaluated as expected:
   * <ul>
   *   <li>'class'
   *   <li>'readonly'
   * </ul>
   * @param {string} attributeName The name of the attribute to query.
   * @return {!Promise} A promise that will be resolved with the
   *     attribute's value.
   */
  getAttribute(attributeName: string): Promise<string>;

  /**
   * Get the visible (i.e. not hidden by CSS) innerText of this element,
   * including sub-elements, without any leading or trailing whitespace.
   * @return {!Promise} A promise that will be resolved with the
   *     element's visible text.
   */
  getText(): Promise<string>;

  /**
   * Schedules a command to compute the size of this element's bounding box, in
   * pixels.
   * @return {!Promise} A promise that will be resolved with the
   *     element's size as a {@code {width:number, height:number}} object.
   */
  getSize(): Promise<ISize>;

  /**
   * Returns an object describing an element's location, in pixels relative to
   * the document element, and the element's size in pixels.
   */
  getRect(): Promise<IRectangle>;

  /**
   * Schedules a command to compute the location of this element in page space.
   * @return {!Promise} A promise that will be resolved to the
   *     element's location as a {@code {x:number, y:number}} object.
   */
  getLocation(): Promise<ILocation>;

  /**
   * Schedules a command to query whether the DOM element represented by this
   * instance is enabled, as dicted by the {@code disabled} attribute.
   * @return {!Promise} A promise that will be resolved with
   *     whether this element is currently enabled.
   */
  isEnabled(): Promise<boolean>;

  /**
   * Schedules a command to query whether this element is selected.
   * @return {!Promise} A promise that will be resolved with
   *     whether this element is currently selected.
   */
  isSelected(): Promise<boolean>;

  /**
   * Schedules a command to submit the form containing this element (or this
   * element if it is a FORM element). This command is a no-op if the element is
   * not contained in a form.
   * @return {!Promise} A promise that will be resolved when
   *     the form has been submitted.
   */
  submit(): Promise<void>;

  /**
   * Schedules a command to clear the {@code value} of this element. This
   * command has no effect if the underlying DOM element is neither a text INPUT
   * element nor a TEXTAREA element.
   * @return {!Promise} A promise that will be resolved when
   *     the element has been cleared.
   */
  clear(): Promise<void>;

  /**
   * Schedules a command to test whether this element is currently displayed.
   * @return {!Promise} A promise that will be resolved with
   *     whether this element is currently visible on the page.
   */
  isDisplayed(): Promise<boolean>;

  /**
   * @return {!Promise.<WebElement.Id>} A promise
   *     that resolves to this element's JSON representation as defined by the
   *     WebDriver wire protocol.
   * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
   */
  getId(): Promise<IWebElementId>;

  // endregion
}

export interface IWebElementFinders {
  /**
   * Schedule a command to find a descendant of this element. If the element
   * cannot be found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will
   * be returned by the driver. Unlike other commands, this error cannot be
   * suppressed. In other words, scheduling a command to find an element doubles
   * as an assert that the element is present on the page. To test whether an
   * element is present on the page, use {@code #findElements}.
   *
   * <p>The search criteria for an element may be defined using one of the
   * factories in the {@link By} namespace, or as a short-hand
   * {@link By.Hash} object. For example, the following two statements
   * are equivalent:
   * <code><pre>
   * var e1 = element.findElement(By.id('foo'));
   * var e2 = element.findElement({id:'foo'});
   * </pre></code>
   *
   * <p>You may also provide a custom locator function, which takes as input
   * this WebDriver instance and returns a {@link WebElement}, or a
   * promise that will resolve to a WebElement. For example, to find the first
   * visible link on a page, you could write:
   * <code><pre>
   * var link = element.findElement(firstVisibleLink);
   *
   * function firstVisibleLink(element) {
   *   var links = element.findElements(By.tagName('a'));
   *   return promise.filter(links, function(link) {
   *     return links.isDisplayed();
   *   }).then(function(visibleLinks) {
   *     return visibleLinks[0];
   *   });
   * }
   * </pre></code>
   *
   * @param {!(Locator|By.Hash|Function)} locator The
   *     locator strategy to use when searching for the element.
   * @return {!WebElement} A WebElement that can be used to issue
   *     commands against the located element. If the element is not found, the
   *     element will be invalidated and all scheduled commands aborted.
   */
  findElement(locator: Locator): WebElementPromise;

  /**
   * Schedules a command to find all of the descendants of this element that
   * match the given search criteria.
   *
   * @param {!(Locator|By.Hash|Function)} locator The
   *     locator strategy to use when searching for the elements.
   * @return {!Promise.<!Array.<!WebElement>>} A
   *     promise that will resolve to an array of WebElements.
   */
  findElements(locator: Locator): Promise<WebElement[]>;
}

/**
 * Defines an object that can be asynchronously serialized to its WebDriver
 * wire representation.
 *
 * @constructor
 * @template T
 */
export interface Serializable<T> {
  /**
   * Returns either this instance's serialized represention, if immediately
   * available, or a promise for its serialized representation. This function is
   * conceptually equivalent to objects that have a {@code toJSON()} property,
   * except the serialize() result may be a promise or an object containing a
   * promise (which are not directly JSON friendly).
   *
   * @return {!(T|IThenable.<!T>)} This instance's serialized wire format.
   */
  serialize(): T|Promise<T>;
}

/**
 * Represents a DOM element. WebElements can be found by searching from the
 * document root using a {@link WebDriver} instance, or by searching
 * under another WebElement:
 *
 *     driver.get('http://www.google.com');
 *     var searchForm = driver.findElement(By.tagName('form'));
 *     var searchBox = searchForm.findElement(By.name('q'));
 *     searchBox.sendKeys('webdriver');
 *
 * The WebElement is implemented as a promise for compatibility with the promise
 * API. It will always resolve itself when its internal state has been fully
 * resolved and commands may be issued against the element. This can be used to
 * catch errors when an element cannot be located on the page:
 *
 *     driver.findElement(By.id('not-there')).then(function(element) {
 *       alert('Found an element that was not expected to be there!');
 *     }, function(error) {
 *       alert('The element was not found, as expected');
 *     });
 *
 * @extends {Serializable.<WebElement.Id>}
 */
export class WebElement implements Serializable<IWebElementId> {
  /**
   * @param {!WebDriver} driver the parent WebDriver instance for this element.
   * @param {(!IThenable<string>|string)} id The server-assigned opaque ID for
   *     the underlying DOM element.
   */
  constructor(driver: WebDriver, id: Promise<string>|string);

  /**
   * @param {string} id The raw ID.
   * @param {boolean=} opt_noLegacy Whether to exclude the legacy element key.
   * @return {!Object} The element ID for use with WebDriver's wire protocol.
   */
  static buildId(id: string, opt_noLegacy?: boolean): IWebElementId;

  /**
   * Extracts the encoded WebElement ID from the object.
   *
   * @param {?} obj The object to extract the ID from.
   * @return {string} the extracted ID.
   * @throws {TypeError} if the object is not a valid encoded ID.
   */
  static extractId(obj: IWebElementId): string;

  /**
   * @param {?} obj the object to test.
   * @return {boolean} whether the object is a valid encoded WebElement ID.
   */
  static isId(obj: IWebElementId): boolean;

  /**
   * Compares two WebElements for equality.
   *
   * @param {!WebElement} a A WebElement.
   * @param {!WebElement} b A WebElement.
   * @return {!Promise<boolean>} A promise that will be
   *     resolved to whether the two WebElements are equal.
   */
  static equals(a: WebElement, b: WebElement): Promise<boolean>;

  /**
   * @return {!WebDriver} The parent driver for this instance.
   */
  getDriver(): WebDriver;

  /**
   * @return {!Promise<string>} A promise that resolves to
   *     the server-assigned opaque ID assigned to this element.
   */
  getId(): Promise<string>;

  /**
   * Schedule a command to find a descendant of this element. If the element
   * cannot be found, a {@link bot.ErrorCode.NO_SUCH_ELEMENT} result will
   * be returned by the driver. Unlike other commands, this error cannot be
   * suppressed. In other words, scheduling a command to find an element doubles
   * as an assert that the element is present on the page. To test whether an
   * element is present on the page, use {@link #findElements}.
   *
   * The search criteria for an element may be defined using one of the
   * factories in the {@link By} namespace, or as a short-hand
   * {@link By.Hash} object. For example, the following two statements
   * are equivalent:
   *
   *     var e1 = element.findElement(By.id('foo'));
   *     var e2 = element.findElement({id:'foo'});
   *
   * You may also provide a custom locator function, which takes as input
   * this WebDriver instance and returns a {@link WebElement}, or a
   * promise that will resolve to a WebElement. For example, to find the first
   * visible link on a page, you could write:
   *
   *     var link = element.findElement(firstVisibleLink);
   *
   *     function firstVisibleLink(element) {
   *       var links = element.findElements(By.tagName('a'));
   *       return promise.filter(links, function(link) {
   *         return links.isDisplayed();
   *       }).then(function(visibleLinks) {
   *         return visibleLinks[0];
   *       });
   *     }
   *
   * @param {!(by.By|Function)} locator The locator strategy to use when
   *     searching for the element.
   * @return {!WebElementPromise} A WebElement that can be used to issue
   *     commands against the located element. If the element is not found, the
   *     element will be invalidated and all scheduled commands aborted.
   */
  findElement(locator: Locator): WebElementPromise;

  /**
   * Schedules a command to find all of the descendants of this element that
   * match the given search criteria.
   *
   * @param {!(by.By|Function)} locator The locator strategy to use when
   *     searching for the element.
   * @return {!Promise<!Array<!WebElement>>} A
   *     promise that will resolve to an array of WebElements.
   */
  findElements(locator: Locator): Promise<WebElement[]>;

  /**
   * Schedules a command to click on this element.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the click command has completed.
   */
  click(): Promise<void>;

  /**
   * Schedules a command to type a sequence on the DOM element represented by
   * this promsieinstance.
   *
   * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
   * processed in the keysequence, that key state is toggled until one of the
   * following occurs:
   *
   * - The modifier key is encountered again in the sequence. At this point the
   *   state of the key is toggled (along with the appropriate keyup/down
   * events).
   * - The {@link Key.NULL} key is encountered in the sequence. When
   *   this key is encountered, all modifier keys current in the down state are
   *   released (with accompanying keyup events). The NULL key can be used to
   *   simulate common keyboard shortcuts:
   *
   *         element.sendKeys('text was',
   *                          Key.CONTROL, 'a', Key.NULL,
   *                          'now text is');
   *         // Alternatively:
   *         element.sendKeys('text was',
   *                          Key.chord(Key.CONTROL, 'a'),
   *                          'now text is');
   *
   * - The end of the keysequence is encountered. When there are no more keys
   *   to type, all depressed modifier keys are released (with accompanying
   * keyup events).
   *
   * If this element is a file input ({@code <input type='file'>}), the
   * specified key sequence should specify the path to the file to attach to
   * the element. This is analgous to the user clicking 'Browse...' and entering
   * the path into the file select dialog.
   *
   *     var form = driver.findElement(By.css('form'));
   *     var element = form.findElement(By.css('input[type=file]'));
   *     element.sendKeys('/path/to/file.txt');
   *     form.submit();
   *
   * For uploads to function correctly, the entered path must reference a file
   * on the _browser's_ machine, not the local machine running this script. When
   * running against a remote Selenium server, a {@link FileDetector}
   * may be used to transparently copy files to the remote machine before
   * attempting to upload them in the browser.
   *
   * __Note:__ On browsers where native keyboard events are not supported
   * (e.g. Firefox on OS X), key events will be synthesized. Special
   * punctionation keys will be synthesized according to a standard QWERTY en-us
   * keyboard layout.
   *
   * @param {...(string|!Promise<string>)} var_args The sequence
   *     of keys to type. All arguments will be joined into a single sequence.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when all keys have been typed.
   */
  sendKeys(...var_args: Array<string|number|Promise<string|number>>): Promise<void>;

  /**
   * Schedules a command to query for the tag/node name of this element.
   * @return {!Promise.<string>} A promise that will be
   *     resolved with the element's tag name.
   */
  getTagName(): Promise<string>;

  /**
   * Schedules a command to query for the computed style of the element
   * represented by this instance. If the element inherits the named style from
   * its parent, the parent will be queried for its value.  Where possible,
   * color values will be converted to their hex representation (e.g. #00ff00
   * instead of rgb(0, 255, 0)).
   *
   * _Warning:_ the value returned will be as the browser interprets it, so
   * it may be tricky to form a proper assertion.
   *
   * @param {string} cssStyleProperty The name of the CSS style property to look
   *     up.
   * @return {!Promise<string>} A promise that will be
   *     resolved with the requested CSS value.
   */
  getCssValue(cssStyleProperty: string): Promise<string>;

  /**
   * Schedules a command to query for the value of the given attribute of the
   * element. Will return the current value, even if it has been modified after
   * the page has been loaded. More exactly, this method will return the value
   * of the given attribute, unless that attribute is not present, in which case
   * the value of the property with the same name is returned. If neither value
   * is set, null is returned (for example, the 'value' property of a textarea
   * element). The 'style' attribute is converted as best can be to a
   * text representation with a trailing semi-colon. The following are deemed to
   * be 'boolean' attributes and will return either 'true' or null:
   *
   * async, autofocus, autoplay, checked, compact, complete, controls, declare,
   * defaultchecked, defaultselected, defer, disabled, draggable, ended,
   * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
   * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
   * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
   * selected, spellcheck, truespeed, willvalidate
   *
   * Finally, the following commonly mis-capitalized attribute/property names
   * are evaluated as expected:
   *
   * - 'class'
   * - 'readonly'
   *
   * @param {string} attributeName The name of the attribute to query.
   * @return {!Promise.<?string>} A promise that will be
   *     resolved with the attribute's value. The returned value will always be
   *     either a string or null.
   */
  getAttribute(attributeName: string): Promise<string>;

  /**
   * Get the visible (i.e. not hidden by CSS) innerText of this element,
   * including sub-elements, without any leading or trailing whitespace.
   * @return {!Promise.<string>} A promise that will be
   *     resolved with the element's visible text.
   */
  getText(): Promise<string>;

  /**
   * DEPRECATED 3.0
   * Schedules a command to compute the size of this element's bounding box, in
   * pixels.
   * @return {!Promise.<{width: number, height: number}>} A
   *     promise that will be resolved with the element's size as a
   *     {@code {width:number, height:number}} object.
   */
  getSize(): Promise<ISize>;

  /**
   * Returns an object describing an element's location, in pixels relative to
   * the document element, and the element's size in pixels.
   */
  getRect(): Promise<IRectangle>;

  /**
   * DEPRECATED 3.0
   * Schedules a command to compute the location of this element in page space.
   * @return {!Promise.<{x: number, y: number}>} A promise that
   *     will be resolved to the element's location as a
   *     {@code {x:number, y:number}} object.
   */
  getLocation(): Promise<ILocation>;

  /**
   * Schedules a command to query whether the DOM element represented by this
   * instance is enabled, as dicted by the {@code disabled} attribute.
   * @return {!Promise.<boolean>} A promise that will be
   *     resolved with whether this element is currently enabled.
   */
  isEnabled(): Promise<boolean>;

  /**
   * Schedules a command to query whether this element is selected.
   * @return {!Promise.<boolean>} A promise that will be
   *     resolved with whether this element is currently selected.
   */
  isSelected(): Promise<boolean>;

  /**
   * Schedules a command to submit the form containing this element (or this
   * element if it is a FORM element). This command is a no-op if the element is
   * not contained in a form.
   * @return {!Promise.<void>} A promise that will be resolved
   *     when the form has been submitted.
   */
  submit(): Promise<void>;

  /**
   * Schedules a command to clear the `value` of this element. This command has
   * no effect if the underlying DOM element is neither a text INPUT element
   * nor a TEXTAREA element.
   * @return {!Promise<void>} A promise that will be resolved
   *     when the element has been cleared.
   */
  clear(): Promise<void>;

  /**
   * Schedules a command to test whether this element is currently displayed.
   * @return {!Promise.<boolean>} A promise that will be
   *     resolved with whether this element is currently visible on the page.
   */
  isDisplayed(): Promise<boolean>;

  /**
   * Take a screenshot of the visible region encompassed by this element's
   * bounding rectangle.
   *
   * @param {boolean=} opt_scroll Optional argument that indicates whether the
   *     element should be scrolled into view before taking a screenshot.
   *     Defaults to false.
   * @return {!Promise<string>} A promise that will be
   *     resolved to the screenshot as a base-64 encoded PNG.
   */
  takeScreenshot(opt_scroll?: boolean): Promise<string>;

  /** @override */
  serialize(): Promise<IWebElementId>;
}

/**
 * WebElementPromise is a promise that will be fulfilled with a WebElement.
 * This serves as a forward proxy on WebElement, allowing calls to be
 * scheduled without directly on this instance before the underlying
 * WebElement has been fulfilled. In other words, the following two statements
 * are equivalent:
 * <pre><code>
 *     driver.findElement({id: 'my-button'}).click();
 *     driver.findElement({id: 'my-button'}).then(function(el) {
 *       return el.click();
 *     });
 * </code></pre>
 *
 * @param {!WebDriver} driver The parent WebDriver instance for this
 *     element.
 * @param {!Promise.<!WebElement>} el A promise
 *     that will resolve to the promised element.
 * @constructor
 * @extends {WebElement}
 * @implements {promise.Thenable.<!WebElement>}
 * @final
 */
export interface WebElementPromise extends Promise<WebElement> {}

/**
 * Implement WebElementPromise
 */
export class WebElementPromise extends WebElement {
  /**
   * @param {!WebDriver} driver The parent WebDriver instance for this
   *     element.
   * @param {!Promise<!WebElement>} el A promise
   *     that will resolve to the promised element.
   */
  constructor(driver: WebDriver, el: Promise<WebElement>);
}

/**
 * Contains information about a WebDriver session.
 */
export class Session {
  // region Constructors

  /**
   * @param {string} id The session ID.
   * @param {!(Object|Capabilities)} capabilities The session
   *     capabilities.
   * @constructor
   */
  constructor(id: string, capabilities: Capabilities|{});

  // endregion

  // region Methods

  /**
   * @return {string} This session's ID.
   */
  getId(): string;

  /**
   * @return {!Capabilities} This session's capabilities.
   */
  getCapabilities(): Capabilities;

  /**
   * Retrieves the value of a specific capability.
   * @param {string} key The capability to retrieve.
   * @return {*} The capability value.
   */
  getCapability(key: string): any;

  /**
   * Returns the JSON representation of this object, which is just the string
   * session ID.
   * @return {string} The JSON representation of this Session.
   */
  toJSON(): string;

  // endregion
}
