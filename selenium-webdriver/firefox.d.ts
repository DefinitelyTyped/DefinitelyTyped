declare module firefox {
    /**
     * Manages a Firefox subprocess configured for use with WebDriver.
     */
    class Binary {
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
        addArguments(...var_args: string[]);


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
     * A WebDriver client for Firefox.
     *
     * @extends {webdriver.WebDriver}
     */
    class Driver extends webdriver.WebDriver {
        /**
         * @param {(Options|webdriver.Capabilities|Object)=} opt_config The
         *    configuration options for this driver, specified as either an
         *    {@link Options} or {@link webdriver.Capabilities}, or as a raw hash
         *    object.
         * @param {webdriver.promise.ControlFlow=} opt_flow The flow to
         *     schedule commands through. Defaults to the active flow object.
         * @constructor
         */
        constructor(opt_config?: webdriver.Capabilities, opt_flow?: webdriver.promise.ControlFlow);
        constructor(opt_config?: any, opt_flow?: webdriver.promise.ControlFlow);
    }

    /**
     * Configuration options for the FirefoxDriver.
     */
    class Options {
        /**
         * @constructor
         */
        constructor();

        /**
         * Sets the profile to use. The profile may be specified as a
         * {@link Profile} object or as the path to an existing Firefox profile to use
         * as a template.
         *
         * @param {(string|!Profile)} profile The profile to use.
         * @return {!Options} A self reference.
         */
        setProfile(profile: string): Options;
        setProfile(profile: Profile): Options;


        /**
         * Sets the binary to use. The binary may be specified as the path to a Firefox
         * executable, or as a {@link Binary} object.
         *
         * @param {(string|!Binary)} binary The binary to use.
         * @return {!Options} A self reference.
         */
        setBinary(binary: string): Options;
        setBinary(binary: Binary): Options;


        /**
         * Sets the logging preferences for the new session.
         * @param {webdriver.logging.Preferences} prefs The logging preferences.
         * @return {!Options} A self reference.
         */
        setLoggingPreferences(prefs: webdriver.logging.Preferences): Options;


        /**
         * Sets the proxy to use.
         *
         * @param {webdriver.ProxyConfig} proxy The proxy configuration to use.
         * @return {!Options} A self reference.
         */
        setProxy(proxy: webdriver.ProxyConfig): Options;


        /**
         * Converts these options to a {@link webdriver.Capabilities} instance.
         *
         * @return {!webdriver.Capabilities} A new capabilities object.
         */
        toCapabilities(opt_remote?: any): webdriver.Capabilities;
    }

    /**
     * Models a Firefox proifle directory for use with the FirefoxDriver. The
     * {@code Proifle} directory uses an in-memory model until {@link #writeToDisk}
     * is called.
     */
    class Profile {
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
        addExtension(extension: string);


        /**
         * Sets a desired preference for this profile.
         * @param {string} key The preference key.
         * @param {(string|number|boolean)} value The preference value.
         * @throws {Error} If attempting to set a frozen preference.
         */
        setPreference(key: string, value: string);
        setPreference(key: string, value: number);
        setPreference(key: string, value: boolean);


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
        setPort(port: number);


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
        setAcceptUntrustedCerts(value: boolean);


        /**
         * Sets whether to assume untrusted certificates come from untrusted issuers.
         * @param {boolean} value .
         */
        setAssumeUntrustedCertIssuer(value: boolean);


        /**
         * @return {boolean} Whether to assume untrusted certs come from untrusted
         *     issuers.
         */
        assumeUntrustedCertIssuer(): boolean;


        /**
         * Sets whether to use native events with this profile.
         * @param {boolean} enabled .
         */
        setNativeEventsEnabled(enabled: boolean);


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
}

declare module 'selenium-webdriver/firefox' {
    export = firefox;
} 