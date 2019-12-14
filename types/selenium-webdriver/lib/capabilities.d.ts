import { logging, ProxyConfig } from '../';

/**
 * Recognized browser names.
 * @enum {string}
 */
export interface IBrowser {
  ANDROID: string;
  CHROME: string;
  EDGE: string;
  FIREFOX: string;
  IE: string;
  INTERNET_EXPLORER: string;
  IPAD: string;
  IPHONE: string;
  OPERA: string;
  PHANTOM_JS: string;
  SAFARI: string;
  HTMLUNIT: string;
}

/**
 * Instace of
 */
export const Browser: IBrowser;

/**
 * Common webdriver capability keys.
 * @enum {string}
 */
export interface ICapability {
  /**
   * Indicates whether a driver should accept all SSL certs by default. This
   * capability only applies when requesting a new session. To query whether
   * a driver can handle insecure SSL certs, see
   * {@link Capability.SECURE_SSL}.
   */
  ACCEPT_SSL_CERTS: string;

  /**
   * The browser name. Common browser names are defined in the
   * {@link Browser} enum.
   */
  BROWSER_NAME: string;

  /**
   * Defines how elements should be scrolled into the viewport for interaction.
   * This capability will be set to zero (0) if elements are aligned with the
   * top of the viewport, or one (1) if aligned with the bottom. The default
   * behavior is to align with the top of the viewport.
   */
  ELEMENT_SCROLL_BEHAVIOR: string;

  /**
   * Whether the driver is capable of handling modal alerts (e.g. alert,
   * confirm, prompt). To define how a driver <i>should</i> handle alerts,
   * use {@link Capability.UNEXPECTED_ALERT_BEHAVIOR}.
   */
  HANDLES_ALERTS: string;

  /**
   * Key for the logging driver logging preferences.
   */
  LOGGING_PREFS: string;

  /**
   * Whether this session generates native events when simulating user input.
   */
  NATIVE_EVENTS: string;

  /**
   * Describes the platform the browser is running on. Will be one of
   * ANDROID, IOS, LINUX, MAC, UNIX, or WINDOWS. When <i>requesting</i> a
   * session, ANY may be used to indicate no platform preference (this is
   * semantically equivalent to omitting the platform capability).
   */
  PLATFORM: string;

  /**
   * Describes the proxy configuration to use for a new WebDriver session.
   */
  PROXY: string;

  /** Whether the driver supports changing the brower's orientation. */
  ROTATABLE: string;

  /**
   * Whether a driver is only capable of handling secure SSL certs. To request
   * that a driver accept insecure SSL certs by default, use
   * {@link Capability.ACCEPT_SSL_CERTS}.
   */
  SECURE_SSL: string;

  /** Whether the driver supports manipulating the app cache. */
  SUPPORTS_APPLICATION_CACHE: string;

  /** Whether the driver supports locating elements with CSS selectors. */
  SUPPORTS_CSS_SELECTORS: string;

  /** Whether the browser supports JavaScript. */
  SUPPORTS_JAVASCRIPT: string;

  /** Whether the driver supports controlling the browser's location info. */
  SUPPORTS_LOCATION_CONTEXT: string;

  /** Whether the driver supports taking screenshots. */
  TAKES_SCREENSHOT: string;

  /**
   * Defines how the driver should handle unexpected alerts. The value should
   * be one of 'accept', 'dismiss', or 'ignore.
   */
  UNEXPECTED_ALERT_BEHAVIOR: string;

  /** Defines the browser version. */
  VERSION: string;
}

/**
 * The standard WebDriver capability keys.
 */
export const Capability: ICapability;

/**
 * Describes a set of capabilities for a WebDriver session.
 */
export class Capabilities {
  // region Constructors

  /**
   * @param {(Capabilities|Object)=} opt_other Another set of
   *     capabilities to merge into this instance.
   * @constructor
   */
  constructor(opt_other?: Capabilities|{});

  // endregion

  // region Methods

  /** @return {!Object} The JSON representation of this instance. */
  toJSON(): any;

  /**
   * Merges another set of capabilities into this instance. Any duplicates in
   * the provided set will override those already set on this instance.
   * @param {!(Capabilities|Object)} other The capabilities to
   *     merge into this instance.
   * @return {!Capabilities} A self reference.
   */
  merge(other: Capabilities|{}): Capabilities;

  /**
   * @param {string} key The capability to set.
   * @param {*} value The capability value.  Capability values must be JSON
   *     serializable. Pass {@code null} to unset the capability.
   * @return {!Capabilities} A self reference.
   */
  set(key: string, value: any): Capabilities;

  /**
   * Sets the name of the target browser.
   *
   * @param {(Browser|string)} name the browser name.
   * @return {!Capabilities} a self reference.
   */
  setBrowserName(name: string): Capabilities;

  /**
   * Sets the desired version of the target browser.
   *
   * @param {string} version the desired version.
   * @return {!Capabilities} a self reference.
   */
  setBrowserVersion(version: string): Capabilities;

  /**
   * Sets the logging preferences. Preferences may be specified as a
   * {@link logging.Preferences} instance, or a as a map of log-type to
   * log-level.
   * @param {!(logging.Preferences|Object.<string, string>)} prefs The
   *     logging preferences.
   * @return {!Capabilities} A self reference.
   */
  setLoggingPrefs(prefs: logging.Preferences|{}): Capabilities;

  /**
   * Sets the proxy configuration for this instance.
   * @param {ProxyConfig} proxy The desired proxy configuration.
   * @return {!Capabilities} A self reference.
   */
  setProxy(proxy: ProxyConfig): Capabilities;

  /**
   * Sets whether native events should be used.
   * @param {boolean} enabled Whether to enable native events.
   * @return {!Capabilities} A self reference.
   */
  setEnableNativeEvents(enabled: boolean): Capabilities;

  /**
   * Sets how elements should be scrolled into view for interaction.
   * @param {number} behavior The desired scroll behavior: either 0 to align
   *     with the top of the viewport or 1 to align with the bottom.
   * @return {!Capabilities} A self reference.
   */
  setScrollBehavior(behavior: number): Capabilities;

  /**
   * Sets the default action to take with an unexpected alert before returning
   * an error.
   * @param {string} behavior The desired behavior; should be 'accept',
   *     'dismiss', or 'ignore'. Defaults to 'dismiss'.
   * @return {!Capabilities} A self reference.
   */
  setAlertBehavior(behavior?: string): Capabilities;

  /**
   * @param {string} key The capability to return.
   * @return {*} The capability with the given key, or {@code null} if it has
   *     not been set.
   */
  get(key: string): any;

  /**
   * @param {string} key The capability to check.
   * @return {boolean} Whether the specified capability is set.
   */
  has(key: string): boolean;

  // endregion

  // region Static Methods

  /**
   * @return {!Capabilities} A basic set of capabilities for Android.
   */
  static android(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Chrome.
   */
  static chrome(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Microsoft Edge.
   */
  static edge(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Firefox.
   */
  static firefox(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for
   *     Internet Explorer.
   */
  static ie(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for iPad.
   */
  static ipad(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for iPhone.
   */
  static iphone(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Opera.
   */
  static opera(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for
   *     PhantomJS.
   */
  static phantomjs(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Safari.
   */
  static safari(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for HTMLUnit.
   */
  static htmlunit(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for HTMLUnit
   *                                   with enabled Javascript.
   */
  static htmlunitwithjs(): Capabilities;

  // endregion
}

export interface ITimeouts {
  /**
   * Sets the amount of time to wait, in milliseconds, for an asynchronous
   * script to finish execution before returning an error. If the timeout is
   * less than or equal to 0, the script will be allowed to run indefinitely.
   */
  script?: number;
  /**
   * Sets the amount of time to wait, in milliseconds, for a page load to
   * complete before returning an error.  If the timeout is negative,
   * page loads may be indefinite.
   */
  pageLoad?: number;
  /**
   * Specifies the amount of time in milliseconds the driver should wait when
   * searching for an element if it is not immediately present.
   * <p/>
   * When searching for a single element, the driver should poll the page
   * until the element has been found, or this timeout expires before failing
   * with a {@code bot.ErrorCode.NO_SUCH_ELEMENT} error. When searching
   * for multiple elements, the driver should poll the page until at least one
   * element has been found or this timeout has expired.
   * <p/>
   * Setting the wait timeout to 0 (its default value), disables implicit
   * waiting.
   * <p/>
   * Increasing the implicit wait timeout should be used judiciously as it
   * will have an adverse effect on test run time, especially when used with
   * slower location strategies like XPath.
   */
  implicit?: number;
}
