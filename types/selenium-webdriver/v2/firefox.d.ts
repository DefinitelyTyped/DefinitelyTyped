import * as webdriver from './index';
import * as remote from './remote';

/**
 * Manages a Firefox subprocess configured for use with WebDriver.
 */
export class Binary {
    /**
     * @param {string=} opt_exe Path to the Firefox binary to use. If not
     *     specified, will attempt to locate Firefox on the current system.
     * @constructor
     */
    constructor(opt_exe?: string);

    /**
     * Add arguments to the command line used to start Firefox.
     * @param {...(string|!Array.<string>)} var_args Either the arguments to add as
     *     varargs, or the arguments as an array.
     */
    addArguments(...var_args: string[]): void;

    /**
     * Launches Firefox and eturns a promise that will be fulfilled when the process
     * terminates.
     * @param {string} profile Path to the profile directory to use.
     * @return {!promise.Promise.<!exec.Result>} A promise for the process result.
     * @throws {Error} If this instance has already been started.
     */
    launch(profile: string): webdriver.promise.Promise<any>;

    /**
     * Kills the managed Firefox process.
     * @return {!promise.Promise} A promise for when the process has terminated.
     */
    kill(): webdriver.promise.Promise<void>;
}

/**
 * Models a Firefox proifle directory for use with the FirefoxDriver. The
 * {@code Proifle} directory uses an in-memory model until {@link #writeToDisk}
 * is called.
 */
export class Profile {
    /**
     * @param {string=} opt_dir Path to an existing Firefox profile directory to
     *     use a template for this profile. If not specified, a blank profile will
     *     be used.
     * @constructor
     */
    constructor(opt_dir?: string);

    /**
     * Registers an extension to be included with this profile.
     * @param {string} extension Path to the extension to include, as either an
     *     unpacked extension directory or the path to a xpi file.
     */
    addExtension(extension: string): void;

    /**
     * Sets a desired preference for this profile.
     * @param {string} key The preference key.
     * @param {(string|number|boolean)} value The preference value.
     * @throws {Error} If attempting to set a frozen preference.
     */
    setPreference(key: string, value: string): void;
    setPreference(key: string, value: number): void;
    setPreference(key: string, value: boolean): void;

    /**
     * Returns the currently configured value of a profile preference. This does
     * not include any defaults defined in the profile's template directory user.js
     * file (if a template were specified on construction).
     * @param {string} key The desired preference.
     * @return {(string|number|boolean|undefined)} The current value of the
     *     requested preference.
     */
    getPreference(key: string): any;

    /**
     * @return {number} The port this profile is currently configured to use, or
     *     0 if the port will be selected at random when the profile is written
     *     to disk.
     */
    getPort(): number;

    /**
     * Sets the port to use for the WebDriver extension loaded by this profile.
     * @param {number} port The desired port, or 0 to use any free port.
     */
    setPort(port: number): void;

    /**
     * @return {boolean} Whether the FirefoxDriver is configured to automatically
     *     accept untrusted SSL certificates.
     */
    acceptUntrustedCerts(): boolean;

    /**
     * Sets whether the FirefoxDriver should automatically accept untrusted SSL
     * certificates.
     * @param {boolean} value .
     */
    setAcceptUntrustedCerts(value: boolean): void;

    /**
     * Sets whether to assume untrusted certificates come from untrusted issuers.
     * @param {boolean} value .
     */
    setAssumeUntrustedCertIssuer(value: boolean): void;

    /**
     * @return {boolean} Whether to assume untrusted certs come from untrusted
     *     issuers.
     */
    assumeUntrustedCertIssuer(): boolean;

    /**
     * Sets whether to use native events with this profile.
     * @param {boolean} enabled .
     */
    setNativeEventsEnabled(enabled: boolean): void;

    /**
     * Returns whether native events are enabled in this profile.
     * @return {boolean} .
     */
    nativeEventsEnabled(): boolean;

    /**
     * Writes this profile to disk.
     * @param {boolean=} opt_excludeWebDriverExt Whether to exclude the WebDriver
     *     extension from the generated profile. Used to reduce the size of an
     *     {@link #encode() encoded profile} since the server will always install
     *     the extension itself.
     * @return {!promise.Promise.<string>} A promise for the path to the new
     *     profile directory.
     */
    writeToDisk(opt_excludeWebDriverExt?: boolean): webdriver.promise.Promise<string>;

    /**
     * Encodes this profile as a zipped, base64 encoded directory.
     * @return {!promise.Promise.<string>} A promise for the encoded profile.
     */
    encode(): webdriver.promise.Promise<string>;
}

/**
 * Configuration options for the FirefoxDriver.
 */
export class Options {
    /**
     * Sets the profile to use. The profile may be specified as a
     * {@link Profile} object or as the path to an existing Firefox profile to use
     * as a template.
     *
     * @param {(string|!Profile)} profile The profile to use.
     * @return {!Options} A self reference.
     */
    setProfile(profile: string | any): Options;

    /**
     * Sets the binary to use. The binary may be specified as the path to a Firefox
     * executable, or as a {@link Binary} object.
     *
     * @param {(string|!Binary)} binary The binary to use.
     * @return {!Options} A self reference.
     */
    setBinary(binary: string | any): Options;

    /**
     * Sets the logging preferences for the new session.
     * @param {logging.Preferences} prefs The logging preferences.
     * @return {!Options} A self reference.
     */
    setLoggingPreferences(prefs: webdriver.logging.Preferences): Options;

    /**
     * Sets the proxy to use.
     *
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Sets whether to use Mozilla's Marionette to drive the browser.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette/WebDriver
     */
    useMarionette(marionette: any): Options;

    /**
     * Converts these options to a {@link capabilities.Capabilities} instance.
     *
     * @return {!capabilities.Capabilities} A new capabilities object.
     */
    toCapabilities(): webdriver.Capabilities;
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
export function createWiresService(binary: string | any): remote.DriverService;

/**
 * @param {(Profile|string)} profile The profile to prepare.
 * @param {number} port The port the FirefoxDriver should listen on.
 * @return {!Promise<string>} a promise for the path to the profile directory.
 */
export function prepareProfile(profile: string | any, port: number): any;

/**
 * A WebDriver client for Firefox.
 */
export class Driver extends webdriver.WebDriver {
    /**
     * @param {(Options|capabilities.Capabilities|Object)=} opt_config The
     *    configuration options for this driver, specified as either an
     *    {@link Options} or {@link capabilities.Capabilities}, or as a raw hash
     *    object.
     * @param {promise.ControlFlow=} opt_flow The flow to
     *     schedule commands through. Defaults to the active flow object.
     */
    constructor(opt_config?: Options | webdriver.Capabilities | Object, opt_flow?: webdriver.promise.ControlFlow);

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
}
