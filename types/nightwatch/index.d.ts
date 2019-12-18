// Type definitions for nightwatch 1.1
// Project: http://nightwatchjs.org
// Definitions by: Rahul Kavalapara <https://github.com/rkavalap>
//                 Connor Schlesiger <https://github.com/schlesiger>
//                 Clayton Astrom <https://github.com/ClaytonAstrom>
//                 Lukas Beranek <https://github.com/lloiser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface ChromePerfLoggingPrefs {
    /**
     * Default: true. Whether or not to collect events from Network domain.
     */
    enableNetwork?: boolean;
    /**
     * Default: true. Whether or not to collect events from Page domain.
     */
    enablePage?: boolean;
    /**
     * A comma-separated string of Chrome tracing categories for which trace events should be collected.
     * An unspecified or empty string disables tracing.
     */
    traceCategories?: string;
    /**
     * Default: 1000. The requested number of milliseconds between DevTools trace buffer usage events. For example, if 1000,
     * then once per second, DevTools will report how full the trace buffer is. If a report indicates the buffer usage is 100%,
     * a warning will be issued.
     */
    bufferUsageReportingInterval?: number;
}

export interface ChromeOptions {
    /**
     * 	List of command-line arguments to use when starting Chrome. Arguments with an associated value should be separated by a '=' sign
     * (e.g., ['start-maximized', 'user-data-dir=/tmp/temp_profile']).
     */
    args?: string[];
    /**
     * Path to the Chrome executable to use (on Mac OS X, this should be the actual binary, not just the app. e.g.,
     * '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
     */
    binary?: string;
    /**
     * A list of Chrome extensions to install on startup. Each item in the list should be a base-64 encoded packed Chrome extension (.crx)
     */
    extensions?: string[];
    /**
     * A dictionary with each entry consisting of the name of the preference and its value. These preferences are applied
     * to the Local State file in the user data folder.
     */
    localState?: Record<string, string>;
    /**
     * A dictionary with each entry consisting of the name of the preference and its value. These preferences are only applied
     * to the user profile in use.
     */
    prefs?: Record<string, string>;
    /**
     * Default: false. If false, Chrome will be quit when ChromeDriver is killed, regardless of whether the session is quit.
     * If true, Chrome will only be quit if the session is quit (or closed). Note, if true, and the session is not quit,
     * ChromeDriver cannot clean up the temporary user data directory that the running Chrome instance is using.
     */
    detach?: boolean;
    /**
     * An address of a Chrome debugger server to connect to, in the form of <hostname/ip:port>, e.g. '127.0.0.1:38947'
     */
    debuggerAddress?: string;
    /**
     * List of Chrome command line switches to exclude that ChromeDriver by default passes when starting Chrome.
     * Do not prefix switches with --.
     */
    excludeSwitches?: string[];
    /**
     * Directory to store Chrome minidumps . (Supported only on Linux.)
     */
    minidumpPath?: string;
    /**
     * A dictionary with either a value for “deviceName,” or values for “deviceMetrics” and “userAgent.” Refer to Mobile Emulation for more information.
     */
    mobileEmulation?: Record<string, string>;
    /**
     * An optional dictionary that specifies performance logging preferences. See below for more information.
     */
    perfLoggingPrefs?: ChromePerfLoggingPrefs;
    /**
     * A list of window types that will appear in the list of window handles. For access to <webview> elements, include "webview" in this list.
     */
    windowTypes?: string[];
    /**
     * Flag to activate W3C WebDriver API. Chromedriver (as of version 2.41 at least) simply does not support the W3C WebDriver API.
     */
    w3c?: boolean;
}

export interface NightwatchDesiredCapabilities {
    /**
     * The name of the browser being used; should be one of {android|chrome|firefox|htmlunit|internet explorer|iPhone|iPad|opera|safari}.
     */
    browserName?: string;

    /**
     * The browser version, or the empty string if unknown.
     */
    version?: string;

    /**
     * A key specifying which platform the browser should be running on. This value should be one of {WINDOWS|XP|VISTA|MAC|LINUX|UNIX|ANDROID}.
     * When requesting a new session, the client may specify ANY to indicate any available platform may be used.
     * For more information see [GridPlatforms (https://code.google.com/p/selenium/wiki/GridPlatforms)]
     */
    platform?: string;

    /**
     * Whether the session supports taking screenshots of the current page.
     */
    takesScreenShot?: boolean;

    /**
     * Whether the session can interact with modal popups, such as window.alert and window.confirm.
     */
    handlesAlerts?: boolean;

    /**
     * Whether the session supports CSS selectors when searching for elements.
     */
    cssSelectorsEnabled?: boolean;

    /**
     * Whether the session supports executing user supplied JavaScript in the context of the current page (only on HTMLUnitDriver).
     */
    javascriptEnabled?: boolean;

    /**
     * Whether the session can interact with database storage.
     */
    databaseEnabled?: boolean;

    /**
     * Whether the session can set and query the browser's location context.
     */
    locationContextEnabled?: boolean;

    /**
     * Whether the session can interact with the application cache.
     */
    applicationCacheEnabled?: boolean;

    /**
     * Whether the session can query for the browser's connectivity and disable it if desired.
     */
    browserConnectionEnabled?: boolean;

    /**
     * Whether the session supports interactions with storage objects (http://www.w3.org/TR/2009/WD-webstorage-20091029/).
     */
    webStorageEnabled?: boolean;

    /**
     * Whether the session should accept all SSL certs by default.
     */
    acceptSslCerts?: boolean;

    /**
     * Whether the session can rotate the current page's current layout between portrait and landscape orientations (only applies to mobile platforms).
     */
    rotatable?: boolean;

    /**
     * Whether the session is capable of generating native events when simulating user input.
     */
    nativeEvents?: boolean;

    /**
     * What the browser should do with an unhandled alert before throwing out the UnhandledAlertException. Possible values are "accept", "dismiss" and "ignore"
     */
    unexpectedAlertBehaviour?: string;

    /**
     * Allows the user to specify whether elements are scrolled into the viewport for interaction to align with the top (0) or bottom (1) of the viewport.
     * The default value is to align with the top of the viewport. Supported in IE and Firefox (since 2.36)
     */
    elementScrollBehaviour?: number;

    /**
     * A JSON object describing the logging level of different components in the browser, the driver, or any intermediary WebDriver servers.
     * Available values for most loggers are "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
     * This produces a JSON object looking something like: {"loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "FINE"}}.
     */
    loggingPrefs?: {
        browser?: string;
        driver?: string;
        server?: string;
    };
    /**
     * This is a list of all the Chrome-specific desired capabilities.
     */
    chromeOptions?: ChromeOptions;
}

export interface NightwatchScreenshotOptions {
    enabled?: boolean;
    on_failure?: boolean;
    on_error?: boolean;
    path?: string;
}

export interface NightwatchTestRunner {
    "type"?: string;
    options?: {
        ui?: string;
    };
}

export interface NightwatchTestWorker {
    enabled: boolean;
    workers: string;
}

export interface NightwatchOptions {
    /**
     * An array of folders (excluding subfolders) where the tests are located.
     */
    src_folders: string | string[];

    /**
     * The location where the JUnit XML report files will be saved.
     */
    output_folder?: string;

    /**
     * Location(s) where custom commands will be loaded from.
     */
    custom_commands_path?: string | string[];

    /**
     * Location(s) where custom assertions will be loaded from.
     */
    custom_assertions_path?: string | string[];

    /**
     * Location(s) where page object files will be loaded from.
     */
    page_objects_path?: string | string[];

    /**
     * Location of an external globals module which will be loaded and made available to the test as a property globals on the main client instance.
     * Globals can also be defined/overwritten inside a test_settings environment.
     */
    globals_path?: string;

    /**
     * An object containing Selenium Server related configuration options. See below for details.
     */
    selenium?: NightwatchSeleniumOptions;

    /**
     * This object contains all the test related options. See below for details.
     */
    test_settings: NightwatchTestSettings;

    /**
     * Whether or not to buffer the output in case of parallel running. See below for details.
     */
    live_output?: boolean;

    /**
     * Controls whether or not to disable coloring of the cli output globally.
     */
    disable_color?: boolean;

    /**
     * Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.
     */
    parallel_process_delay?: number;

    /**
     * Whether or not to run individual test files in parallel. If set to true, runs the tests in parallel and determines the number of workers automatically.
     * If set to an object, can specify specify the number of workers as "auto" or a number. Example: "test_workers" : {"enabled" : true, "workers" : "auto"}
     */
    test_workers?: boolean | NightwatchTestWorker;

    /**
     * Specifies which test runner to use when running the tests. Values can be either default (built in nightwatch runner) or mocha.
     * Example: "test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}
     */
    test_runner?: string | NightwatchTestRunner;

    /**
     * Allows for webdriver config (mostly the same as selenium)
     */
    webdriver?: {
        port: number;
        start_process: boolean;
        server_path: string;
        cli_args: string[];
    };
}

export interface NightwatchGlobals {
    /**
     * this controls whether to abort the test execution when an assertion failed and skip the rest
     * it's being used in waitFor commands and expect assertions
     * @default true
     */
    abortOnAssertionFailure?: boolean;

    /**
     * this will overwrite the default polling interval (currently 500ms) for waitFor commands
     * and expect assertions that use retry
     * @default 300
     */
    waitForConditionPollInterval?: number;

    /**
     * default timeout value in milliseconds for waitFor commands and implicit waitFor value for
     * expect assertions
     * @default 5000
     */
    waitForConditionTimeout?: number;

    /**
     * this will cause waitFor commands on elements to throw an error if multiple
     * elements are found using the given locate strategy and selector
     * @default true
     */
    throwOnMultipleElementsReturned?: boolean;

    /**
     * controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
     * or an error is thrown
     * @default 10000
     */
    asyncHookTimeout?: number;
}

export interface NightwatchSeleniumOptions {
    /**
     * Whether or not to manage the selenium process automatically.
     */
    start_process: boolean;

    /**
     * Whether or not to automatically start the Selenium session.
     */
    start_session: boolean;

    /**
     * The location of the selenium jar file. This needs to be specified if start_process is enabled.E.g.: lib/selenium-server-standalone-2.43.0.jar
     */
    server_path: string;

    /**
     * The location where the selenium Selenium-debug.log file will be placed. Defaults to current directory. To disable Selenium logging, set this to false
     */
    log_path: string | boolean;

    /**
     * Usually not required and only used if start_process is true. Specify the IP address you wish Selenium to listen on.
     */
    host: string;

    /**
     * The port number Selenium will listen on.
     */
    port: number;

    /**
     * List of cli arguments to be passed to the Selenium process. Here you can set various options for browser drivers, such as:
     *
     * webdriver.firefox.profile: Selenium will be default create a new Firefox profile for each session.
     * If you wish to use an existing Firefox profile you can specify its name here.
     * Complete list of Firefox Driver arguments available https://code.google.com/p/selenium/wiki/FirefoxDriver.
     *
     * webdriver.chrome.driver: Nightwatch can run the tests using Chrome browser also. To enable this you have to download the ChromeDriver binary
     * (http://chromedriver.storage.googleapis.com/index.html) and specify it's location here. Also don't forget to specify chrome as the browser name in the
     * desiredCapabilities object.
     * More information can be found on the ChromeDriver website (https://sites.google.com/a/chromium.org/chromedriver/).
     *
     * webdriver.ie.driver: Nightwatch has support for Internet Explorer also. To enable this you have to download the IE Driver binary
     * (https://code.google.com/p/selenium/wiki/InternetExplorerDriver) and specify it's location here. Also don't forget to specify "internet explorer" as the browser
     * name in the desiredCapabilities object.
     */
    cli_args: any;
}

export interface NightwatchTestSettingGeneric {
    /**
     * A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.
     */
    launch_url?: string;

    /**
     * The hostname/IP on which the selenium server is accepting connections.
     */
    selenium_host?: string;

    /**
     * The port number on which the selenium server is accepting connections.
     */
    selenium_port?: number;

    /**
     * Whether to show extended Selenium command logs.
     */
    silent?: boolean;

    /**
     * Use to disable terminal output completely.
     */
    output?: boolean;

    /**
     * Use to disable colored output in the terminal.
     */
    disable_colors?: boolean;

    /**
     * In case the selenium server requires credentials this username will be used to compute the Authorization header.
     * The value can be also an environment variable, in which case it will look like this: "username" : "${SAUCE_USERNAME}"
     */
    username?: string;

    /**
     * This field will be used together with username to compute the Authorization header.
     * Like username, the value can be also an environment variable: "access_key" : "${SAUCE_ACCESS_KEY}"
     */
    access_key?: string;

    /**
     * Proxy requests to the selenium server. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses node-proxy-agent. Example: http://user:pass@host:port
     */
    proxy?: string;

    /**
     * An object which will be passed to the Selenium WebDriver when a new session will be created. You can specify browser name for instance along with other capabilities.
     * Example:
     *  "desiredCapabilities" : {
     *  "browserName" : "firefox",
     *  "acceptSslCerts" : true
     * }
     * You can view the complete list of capabilities https://code.google.com/p/selenium/wiki/DesiredCapabilities.
     */
    desiredCapabilities?: NightwatchDesiredCapabilities;

    /**
     * An object which will be made available within the test and can be overwritten per environment. Example:"globals" : {  "myGlobal" : "some_global" }
     */
    globals?: NightwatchGlobals;

    /**
     * An array of folders or file patterns to be skipped (relative to the main source folder).
     * Example: "exclude" : ["excluded-folder"] or: "exclude" : ["test-folder/*-smoke.js"]
     */
    exclude?: string[];

    /**
     * Folder or file pattern to be used when loading the tests. Files that don't match this patter will be ignored.
     * Example: "filter" : "tests/*-smoke.js"
     */
    filter?: string;

    /**
     * Do not show the Base64 image data in the (verbose) log when taking screenshots.
     */
    log_screenshot_data?: boolean;

    /**
     * Use xpath as the default locator strategy
     */
    use_xpath?: boolean;

    /**
     * Same as Selenium settings cli_args. You can override the global cli_args on a per-environment basis.
     */
    cli_args?: any;

    /**
     * End the session automatically when the test is being terminated, usually after a failed assertion.
     */
    end_session_on_fail?: boolean;

    /**
     * Skip the rest of testcases (if any) when one testcase fails..
     */
    skip_testcases_on_fail?: boolean;
}

export interface NightwatchTestSettingScreenshots extends NightwatchTestSettingGeneric {
    /**
     * Selenium generates screenshots when command errors occur. With on_failure set to true, also generates screenshots for failing or erroring tests. These are saved on the disk.
     * Since v0.7.5 you can disable screenshots for command errors by setting "on_error" to false.
     * Example:
     * "screenshots" : {
     *      "enabled" : true,
     *      "on_failure" : true,
     *      "on_error" : false,
     *      "path" : ""
     * }
     */
    screenshots: NightwatchScreenshotOptions;
}

export interface NightwatchTestOptions extends NightwatchTestSettingGeneric {
    screenshots: boolean;
    screenshotsPath: string;
}

export interface NightwatchTestSuite {
    name: string;
    "module": string;
    group: string;
    results: any;
}

export interface NightwatchAssertionsError {
    name: string;
    message: string;
    showDiff: boolean;
    stack: string;
}

export interface NightwatchLanguageChains {
    to: Expect;
    be: Expect;
    been: Expect;
    is: Expect;
    that: Expect;
    which: Expect;
    and: Expect;
    has: Expect;
    have: Expect;
    with: Expect;
    at: Expect;
    of: Expect;
}

export interface NightwatchTestSettings {
    [key: string]: NightwatchTestSettingScreenshots;
}

export interface Expect extends NightwatchLanguageChains, NightwatchBrowser {
    /**
     * Returns the DOM Element
     */
    element(property: string): this;

    /**
     * These methods will perform assertions on the specified target on the current element.
     * The targets can be an attribute value, the element's inner text and a css property.
     */
    equal(value: string): this;
    equals(value: string): this;
    contain(value: string): this;
    contains(value: string): this;
    match(value: string | RegExp): this;

    /**
     * Negates any of assertions following in the chain.
     */
    not: this;

    /**
     * These methods perform the same thing which is essentially retrying the assertion for the given amount of time (in milliseconds).
     * before or after can be chained to any assertion and thus adding retry capability. You can change the polling interval by defining
     * a waitForConditionPollInterval property (in milliseconds) as a global property in your nightwatch.json or in
     * your external globals file. Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
     */
    before(value: number): this;
    after(value: number): this;

    /**
     * Checks if the type (i.e. tag name) of a specified element is of an expected value.
     */
    a(value: string, message?: string): this;
    an(value: string, message?: string): this;

    /**
     * Checks if a given attribute of an element exists and optionally if it has the expected value.
     */
    attribute(name: string, message?: string): this;

    /**
     * Checks a given css property of an element exists and optionally if it has the expected value.
     */
    css(property: string, message?: string): this;

    /**
     * Property that checks if an element is currently enabled.
     */
    enabled: this;

    /**
     * Property that checks if an element is present in the DOM.
     */
    present: this;

    /**
     * Property that checks if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
     */
    selected: this;

    /**
     * Property that retrieves the text contained by an element. Can be chained to check if contains/equals/matches the specified text or regex.
     */
    text: this;

    /**
     * Property that retrieves the value (i.e. the value attributed) of an element. Can be chained to check if contains/equals/matches the specified text or regex.
     */
    value: this;

    /**
     * Property that asserts the visibility of a specified element.
     */
    visible: this;
}

export interface NightwatchAssertions extends NightwatchCommonAssertions, NightwatchCustomAssertions {
}

export interface NightwatchCommonAssertions {
    /**
     * Checks if the given attribute of an element contains the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.attributeContains('#someElement', 'href', 'google.com');
     *    };
     * ```
     */
    attributeContains(selector: string, attribute: string, expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given attribute of an element has the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.attributeEquals('body', 'data-attr', 'some value');
     *    };
     * ```
     */
    attributeEquals(selector: string, attribute: string, expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element contains the specified text.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.containsText('#main', 'The Night Watch');
     *    };
     * ```
     */
    containsText(selector: string, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element has the specified CSS class.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.cssClassPresent('#main', 'container');
     *    };
     * ```
     */
    cssClassPresent(selector: string, className: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.elementNotPresent(".should_not_exist");
     *    };
     * ```
     */
    cssClassNotPresent(selector: string, className: string, msg?: string): NightwatchAPI;

    /**
     * Checks if the specified css property of a given element has the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.cssProperty('#main', 'display', 'block');
     *    };
     * ```
     */
    cssProperty(selector: string, cssProperty: string, expected: string | number, msg?: string): NightwatchAPI;

    deepEqual(value: any, expected: any, message?: string): NightwatchAPI;

    deepStrictEqual(value: any, expected: any, message?: string): NightwatchAPI;

    doesNotThrow(value: any, expected: any, message?: string): NightwatchAPI;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.elementPresent("#main");
     *    };
     * ```
     */
    elementPresent(selector: string, msg?: string): NightwatchAPI;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.elementNotPresent(".should_not_exist");
     *    };
     * ```
     */
    elementNotPresent(selector: string, msg?: string): NightwatchAPI;

    equal(value: any, expected: any, message?: string): NightwatchAPI;

    fail(actual?: any, expected?: any, message?: string, operator?: string): NightwatchAPI;

    /**
     * Checks if the given element is not visible on the page.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.hidden(".should_not_be_visible");
     *    };
     * ```
     */
    hidden(selector: string, msg?: string): NightwatchAPI;

    ifError(value: any, message?: string): NightwatchAPI;

    notDeepEqual(actual: any, expected: any, message?: string): NightwatchAPI;

    notDeepStrictEqual(value: any, message?: string): NightwatchAPI;

    notEqual(actual: any, expected: any, message?: string): NightwatchAPI;

    notStrictEqual(value: any, expected: any, message?: string): NightwatchAPI;

    ok(actual: boolean, message?: string): NightwatchAPI;

    strictEqual(value: any, expected: any, message?: string): NightwatchAPI;

    throws(fn: () => void, message?: string): NightwatchAPI;

    /**
     * Checks if the page title equals the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.title("Nightwatch.js");
     *    };
     * ```
     */
    title(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the page title equals the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.title("Nightwatch.js");
     *    };
     * ```
     */
    titleContains(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the current URL contains the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.urlContains('google');
     *    };
     * ```
     */
    urlContains(expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the current url equals the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.urlEquals('https://www.google.com');
     *    };
     * ```
     */
    urlEquals(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given form element's value equals the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.value("form.login input[type=text]", "username");
     *    };
     * ```
     */
    value(selector: string, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given form element's value contains the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.valueContains("form.login input[type=text]", "username");
     *    };
     * ```
     */
    valueContains(selector: string, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element is visible on the page.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.visible(".should_be_visible");
     *    };
     * ```
     */
    visible(selector: string, message?: string): NightwatchAPI;

    NightwatchAssertionsError: NightwatchAssertionsError;
}

export interface NightwatchTypedCallbackResult<T> {
    status: 0;
    value: T;
    state: Error | string;
}
export interface NightwatchCallbackResultError {
    status: 1; // we cannot use `number` so giving it a "symbolic" value allows to disjoint the union
    value: {
        message: string;
        screen: string;
        class: string;
        stackTrace: Array<{
            fileName: string;
            lineNumber: number;
            className: string;
            methodName: string;
        }>;
    };
    state: Error | string;
}

export type NightwatchCallbackResult<T> =
    | NightwatchTypedCallbackResult<T>
    | NightwatchCallbackResultError;

export interface NightwatchLogEntry {
    /**
     * The log entry message.
     */
    message: string;

    /**
     * The time stamp of log entry in seconds.
     */
    timestamp: number;

    /**
     * Severity level
     */
    level: "SEVERE" | "WARNING" | "INFO" | "DEBUG";

    source?: string;
}

export interface NightwatchKeys {
    /** Releases all held modifier keys. */
    "NULL": string;
    /** OS-specific keystroke sequence that performs a cancel action. */
    "CANCEL": string;
    /** The help key. This key only appears on older Apple keyboards in place of the Insert key. */
    "HELP": string;
    /** The backspace key. */
    "BACK_SPACE": string;
    /** The tab key. */
    "TAB": string;
    /** The clear key. This key only appears on full-size Apple keyboards in place of Num Lock key. */
    "CLEAR": string;
    /** The return key. */
    "RETURN": string;
    /** The enter (numpad) key. */
    "ENTER": string;
    /** The shift key. */
    "SHIFT": string;
    /** The control key. */
    "CONTROL": string;
    /** The alt key. */
    "ALT": string;
    /** The pause key. */
    "PAUSE": string;
    /** The escape key. */
    "ESCAPE": string;

    /** The space bar. */
    "SPACE": string;
    /** The page up key. */
    "PAGEUP": string;
    /** The page down key. */
    "PAGEDOWN": string;
    /** The end key. */
    "END": string;
    /** The home key. */
    "HOME": string;
    /** The left arrow. */
    "ARROW_LEFT": string;
    "LEFT_ARROW": string;
    /** The up arrow. */
    "ARROW_UP": string;
    "UP_ARROW": string;
    /** The right arrow. */
    "ARROW_RIGHT": string;
    "RIGHT_ARROW": string;
    /** The down arrow. */
    "ARROW_DOWN": string;
    "DOWN_ARROW": string;
    /** The insert key. */
    "INSERT": string;
    /** The delete key. */
    "DELETE": string;
    /** The semicolon key. */
    "SEMICOLON": string;
    /** The equals key. */
    "EQUALS": string;

    /** The numpad zero key. */
    "NUMPAD0": string;
    /** The numpad one key. */
    "NUMPAD1": string;
    /** The numpad two key. */
    "NUMPAD2": string;
    /** The numpad three key. */
    "NUMPAD3": string;
    /** The numpad four key. */
    "NUMPAD4": string;
    /** The numpad five key. */
    "NUMPAD5": string;
    /** The numpad six key. */
    "NUMPAD6": string;
    /** The numpad seven key. */
    "NUMPAD7": string;
    /** The numpad eight key. */
    "NUMPAD8": string;
    /** The numpad nine key. */
    "NUMPAD9": string;

    /** The numpad multiply (*) key. */
    "MULTIPLY": string;
    /** The numpad add (+) key. */
    "ADD": string;
    /** The numpad separator (=) key. */
    "SEPARATOR": string;
    /** The numpad subtract (-) key. */
    "SUBTRACT": string;
    /** The numpad decimal (.) key. */
    "DECIMAL": string;
    /** The numpad divide (/) key. */
    "DIVIDE": string;

    /** The F1 key. */
    "F1": string;
    /** The F2 key. */
    "F2": string;
    /** The F3 key. */
    "F3": string;
    /** The F4 key. */
    "F4": string;
    /** The F5 key. */
    "F5": string;
    /** The F6 key. */
    "F6": string;
    /** The F7 key. */
    "F7": string;
    /** The F8 key. */
    "F8": string;
    /** The F9 key. */
    "F9": string;
    /** The F10 key. */
    "F10": string;
    /** The F11 key. */
    "F11": string;
    /** The F12 key. */
    "F12": string;
    /** The meta (Windows) key. */
    "META": string;
    /** The command (⌘) key. */
    "COMMAND": string;
}

export interface NightwatchAPI extends SharedCommands, WebDriverProtocol, NightwatchCustomCommands {
    assert: NightwatchAssertions;
    expect: Expect;
    verify: NightwatchAssertions;

    page: {
        [name: string]: () => EnhancedPageObject<any, any, any>;
    } & NightwatchCustomPageObjects;

    /**
     * SessionId of the session used by the Nightwatch api.
     */
    sessionId: string;

    /**
     * Override the sessionId used by Nightwatch client with another session id.
     */
    setSessionId(sessionId: string): this;

    options: NightwatchTestOptions;

    Keys: NightwatchKeys;

    currentTest: NightwatchTestSuite;

    globals: NightwatchGlobals;

    launchUrl: string;
    launch_url: string;
}

// tslint:disable-next-line
export interface NightwatchCustomCommands { }

// tslint:disable-next-line
export interface NightwatchCustomAssertions { }

// tslint:disable-next-line
export interface NightwatchCustomPageObjects { }

export interface NightwatchBrowser extends NightwatchAPI, NightwatchCustomCommands {
}

export type NightwatchTest = (browser: NightwatchBrowser) => void;

export interface NightwatchTestFunctions {
    before?: NightwatchTestHook;
    after?: NightwatchTestHook;
    beforeEach?: NightwatchTestHook;
    afterEach?: NightwatchTestHook;
    "@tags"?: string | string[];
    "@disabled"?: boolean;
    [key: string]: any;
}

export type NightwatchTestHook =
    | ((browser: NightwatchBrowser, done: (err?: any) => void) => void)
    | ((done: (err?: any) => void) => void)
    ;

export interface NightwatchTestHooks extends NightwatchGlobals {
    before?: NightwatchTestHook;
    after?: NightwatchTestHook;
    beforeEach?: NightwatchTestHook;
    afterEach?: NightwatchTestHook;
}

export type NightwatchTests = NightwatchTestFunctions | NightwatchTestHooks;

/**
 * Performs an assertion
 *
 */
export type NightwatchAssert = (passed: boolean, receivedValue?: any, expectedValue?: any, message?: string, abortOnFailure?: boolean, originalStackTrace?: string) => void;

/**
 * Abstract assertion class that will subclass all defined assertions
 *
 * All assertions must implement the following api:
 *
 * - @param {T|function} expected
 * - @param {string} message
 * - @param {function} pass
 * - @param {function} value
 * - @param {function} command
 * - @param {function} - Optional failure
 */
export interface NightwatchAssertion<T, U = any> {
    expected: (() => T) | T;
    message: string;
    pass(value: T): any;
    value(result: U): T;
    command(callback: (result: U) => void): this;
    failure?(result: U): boolean;
    api: NightwatchAPI;
}

export interface NightwatchClient {
    api: NightwatchAPI;
    assertion: NightwatchAssert;
}

export interface Nightwatch {
    api: NightwatchAPI;
    client: NightwatchClient;

    assert: NightwatchAssertions;
    expect: Expect;
    verify: NightwatchAssertions;
}

export type LocateStrategy = "class name" | "css selector" | "id" | "name" | "link text" | "partial link text" | "tag name" | "xpath";

/**
 * #### [Enhanced Element Instances](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-element-instances)
 * Element instances encapsulate the definition used to handle element selectors.
 * Generally you won't need to access them directly,
 * instead referring to them using their `@`-prefixed names for selector arguments,
 * but they are available through a page object or section's elements property.
 */
export interface EnhancedElementInstance<T> {
    /**
     * The name of the element as defined by its key in the parent section or the page object's `elements` definition.
     * This is the same name used with the `@` prefix in selector arguments for page object commands that refer to the element.
     */
    name: string;

    /**
     * The locate strategy to be used with `selector` when finding the element within the DOM.
     */
    locateStrategy: LocateStrategy;

    /**
     * A reference to the parent object instance.
     * This is the parent section or the page object that contained the definition for this object.
     */
    parent: T;

    /**
     * The selector string used to find the element in the DOM.
     */
    selector: string;
}

export type EnhancedSectionInstance<Commands = {}, Elements = {}, Sections = {}> = EnhancedPageObject<Commands, Elements, Sections>;

export interface EnhancedPageObjectSections {
    [name: string]: EnhancedSectionInstance<any, any, any>;
}

/**
 * #### [Enhanced Page Object Instances](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-page-object-instances)
 * Page object module definitions are used to define page object instances when their respective factory functions within the page reference of the standard command API is called.
 * ```
 * var myPageObject = browser.page.MyPage(); // defined in MyPage.js module
 * ```
 * Every time a factory function like MyPage above is called, a new instance of the page object is instantiated.
 */
export type EnhancedPageObject<Commands = {}, Elements = {}, Sections extends EnhancedPageObjectSections = {}> = Nightwatch & SharedCommands & NightwatchCustomCommands & Commands & {
    /**
     * A map of Element objects (see [Enhanced Element Instances](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-element-instances)) used by element selectors.
     */
    elements: {
        [name: string]: EnhancedElementInstance<EnhancedPageObject<Commands, Elements, Sections>>;
    };

    section: Sections;

    /**
     * The name of the page object as defined by its module name (not including the extension).
     * This is the same name used to access the `page` object factory from the page reference in the command API.
     */
    name: string;

    /**
     * This command is an alias to url and also a convenience method because when called without any arguments
     *  it performs a call to .url() with passing the value of `url` property on the page object.
     * Uses `url` protocol command.
     */
    navigate(url?: string, callback?: () => void): EnhancedPageObject<Commands, Elements, Sections>;
};

export interface Cookie {
    name: string;
    value: string;
    path: string;
    domain: string;
    secure: boolean;
}

export interface SharedCommands extends ClientCommands, ElementCommands { }

export interface ClientCommands {
    /**
     * Close the current window. This can be useful when you're working with multiple windows open (e.g. an OAuth login).
     * Uses `window` protocol command.
     *
     * @example
     * this.demoTest = function (client) {
     *   client.closeWindow();
     * };
     *
     * @see window
     */
    closeWindow(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Delete the cookie with the given name. This command is a no-op if there is no such cookie visible to the current page.
     *
     * @example
     * this.demoTest = function(browser) {
     *   browser.deleteCookie("test_cookie", function() {
     *     // do something more in here
     *   });
     * }
     *
     * @see cookie
     */
    deleteCookie(cookieName: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Delete all cookies visible to the current page.
     *
     * @example
     * this.demoTest = function(browser) {
     *   browser.deleteCookies(function() {
     *     // do something more in here
     *   });
     * }
     *
     * @see cookie
     */
    deleteCookies(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Ends the session. Uses session protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.end();
     * };
     *
     * @see session
     */
    end(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Retrieve a single cookie visible to the current page. The cookie is returned as a cookie JSON object,
     * as defined [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object).
     *
     * Uses `cookie` protocol command.
     *
     * @example
     * this.demoTest = function(browser) {
     *   browser.getCookie(name, function callback(result) {
     *     this.assert.equal(result.value, '123456');
     *     this.assert.equals(result.name, 'test_cookie');
     *   });
     * }
     *
     * @see cookie
     */
    getCookie(name: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Cookie>) => void): this;

    /**
     * Retrieve all cookies visible to the current page. The cookies are returned as an array of cookie JSON object,
     * as defined [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object).
     *
     * Uses `cookie` protocol command.
     *
     * @example
     * this.demoTest = function(browser) {
     *   browser.getCookies(function callback(result) {
     *     this.assert.equal(result.value.length, 1);
     *     this.assert.equals(result.value[0].name, 'test_cookie');
     *   });
     * }
     *
     * @see cookie
     */
    getCookies(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Cookie[]>) => void): this;

    /**
     * Gets a log from Selenium.
     *
     * @example
     * this.demoTest = function(client) {
     *   this.getLog('browser', function(logEntriesArray) {
     *     console.log('Log length: ' + logEntriesArray.length);
     *     logEntriesArray.forEach(function(log) {
     *        console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
     *      });
     *   });
     * };
     *
     * @see getLogTypes
     */
    getLog(typestring: string, callback?: (this: NightwatchAPI, log: NightwatchLogEntry[]) => void): this;

    /**
     * Gets the available log types. More info about log types in WebDriver can be found here: https://github.com/SeleniumHQ/selenium/wiki/Logging
     *
     * @example
     * this.demoTest = function(client) {
     *   this.getLogTypes(function(typesArray) {
     *     console.log(typesArray);
     *   });
     * };
     *
     * @see sessionLogTypes
     */
    getLogTypes(callback?: (this: NightwatchAPI, result: Array<"client" | "driver" | "browser" | "server">) => void): this;

    /**
     * Returns the title of the current page. Uses title protocol command.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.getTitle(function(title) {
     *      this.assert.equal(typeof title, 'string');
     *      this.assert.equal(title, 'Nightwatch.js');
     *    });
     *  };
     *
     * @see title
     */
    getTitle(callback?: (this: NightwatchAPI, result?: string) => void): this;

    /**
     * This command is an alias to url and also a convenience method when called without any arguments in the sense
     * that it performs a call to .url() with passing the value of `launch_url` field from the settings file.
     * Uses `url` protocol command.
     *
     * @example
     * this.demoTest = function (client) {
     *   client.init();
     * };
     *
     * @see url
     */
    init(url?: string): this;

    /**
     * Utility command to load an external script into the page specified by url.
     *
     * @example
     * this.demoTest = function(client) {
     *   this.injectScript("{script-url}", function() {
     *     // we're all done here.
     *   });
     * };
     */
    injectScript(scriptUrl: string, id?: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Utility command to test if the log type is available.
     *
     * @example
     * this.demoTest = function(browser) {
     *   browser.isLogAvailable('browser', function(isAvailable) {
     *     // do something more in here
     *   });
     * }
     *
     * @see getLogTypes
     */
    isLogAvailable(typeString: string, callback?: (this: NightwatchAPI, result: boolean) => void): this;

    /**
     * Maximizes the current window.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.maximizeWindow();
     *  };
     *
     * @see windowMaximize
     */
    maximizeWindow(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Suspends the test for the given time in milliseconds. If the milliseconds argument is missing it will suspend the test indefinitely
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.pause(1000);
     *   // or suspend indefinitely
     *   browser.pause();
     * };
     */
    pause(ms?: number, callback?: (this: NightwatchAPI) => void): this;

    /**
     * A simple perform command which allows access to the Nightwatch API in a callback. Can be useful if you want to read variables set by other commands.
     *
     * The callback signature can have up to two parameters.
     *  - no parameters: callback runs and perform completes immediately at the end of the execution of the callback.
     *  - one parameter: allows for asynchronous execution within the callback providing a done callback function for completion as the first argument.
     *  - two parameters: allows for asynchronous execution with the Nightwatch `api` object passed in as the first argument, followed by the done callback.
     *
     * @example
     * this.demoTest = function (browser) {
     *   var elementValue;
     *   browser
     *     .getValue('.some-element', function(result) {
     *       elementValue = result.value;
     *     })
     *     // other stuff going on ...
     *     //
     *     // self-completing callback
     *     .perform(function() {
     *       console.log('elementValue', elementValue);
     *       // without any defined parameters, perform
     *       // completes immediately (synchronously)
     *     })
     *     //
     *     // asynchronous completion
     *     .perform(function(done) {
     *       console.log('elementValue', elementValue);
     *       // potentially other async stuff going on
     *       // on finished, call the done callback
     *       done();
     *     })
     *     //
     *     // asynchronous completion including api (client)
     *     .perform(function(client, done) {
     *       console.log('elementValue', elementValue);
     *       // similar to before, but now with client
     *       // potentially other async stuff going on
     *       // on finished, call the done callback
     *       done();
     *     });
     * };
     */
    perform(
        callback:
            | (() => (undefined | Promise<any>))
            | ((done: () => void) => void)
            | ((client: NightwatchAPI, done: () => void) => void)
    ): this;

    /**
     * Resizes the current window.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.resizeWindow(1000, 800);
     *  };
     *
     * @see windowSize
     */
    resizeWindow(width: number, height: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Take a screenshot of the current page and saves it as the given filename.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.saveScreenshot('/path/to/fileName.png');
     *  };
     *
     * @see screenshot
     */
    saveScreenshot(fileName: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Set a cookie, specified as a cookie JSON object, as defined [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object).
     *
     * Uses `cookie` protocol command.
     *
     * @example
     * this.demoTest = function(browser) {
     *   browser.setCookie({
     *     name     : "test_cookie",
     *     value    : "test_value",
     *     path     : "/", (Optional)
     *     domain   : "example.org", (Optional)
     *     secure   : false, (Optional)
     *     httpOnly : false, // (Optional)
     *     expiry   : 1395002765 // (Optional) time in seconds since midnight, January 1, 1970 UTC
     *   });
     * }
     *
     * @see cookie
     */
    setCookie(cookie: Cookie, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Sets the current window position.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.setWindowPosition(0, 0);
     *  };
     *
     * @see windowPosition
     */
    setWindowPosition(offsetX: number, offsetY: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute.
     *
     * To find out the window handle use `windowHandles` command
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowHandles(function(result) {
     *      var handle = result.value[0];
     *      browser.switchWindow(handle);
     *    });
     *  };
     *
     *  this.demoTestAsync = async function (browser) {
     *    const result = browser.windowHandles();
     *    var handle = result.value[0];
     *    browser.switchWindow(handle);
     *  };
     *
     * @see window
     */
    switchWindow(handleOrName: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Convenience command that adds the specified hash (i.e. url fragment) to the current value of the `launch_url` as set in `nightwatch.json`.
     *
     * @example
     * this.demoTest = function (client) {
     *   client.urlHash('#hashvalue');
     *   // or
     *   client.urlHash('hashvalue');
     * };
     *
     * @see url
     */
    urlHash(hash: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Sets the locate strategy for selectors to `css selector`, therefore every following selector needs to be specified as css.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser
     *     .useCss() // we're back to CSS now
     *     .setValue('input[type=text]', 'nightwatch');
     * };
     */
    useCss(callback?: (this: NightwatchAPI) => void): this;

    /**
     * Sets the locate strategy for selectors to xpath, therefore every following selector needs to be specified as xpath.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser
     *     .useXpath() // every selector now must be xpath
     *     .click("//tr[@data-recordid]/span[text()='Search Text']");
     * };
     */
    useXpath(callback?: (this: NightwatchAPI) => void): this;
}

export interface ElementCommands {
    /**
     * Clear a textarea or a text input element's value. Uses `elementIdValue` protocol action internally.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.clearValue('input[type=text]');
     * };
     *
     * @see elementIdClear
     */
    clearValue(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Simulates a click event on the given DOM element. Uses `elementIdClick` protocol action internally.
     *
     * The element is scrolled into view if it is not already pointer-interactable.
     * See the WebDriver specification for <a href="https://www.w3.org/TR/webdriver/#element-interactability" target="_blank">element interactability</a>
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.click("#main ul li a.first");
     * };
     *
     * @see elementIdClick
     */
    click(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Retrieve the value of an attribute for a given DOM element. Uses `elementIdAttribute` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getAttribute("#main ul li a.first", "href", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "#home");
     *   });
     * };
     *
     * @see elementIdAttribute
     */
    getAttribute(selector: string, attribute: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void): this;

    /**
     * Retrieve the value of a css property for a given DOM element. Uses `elementIdCssProperty` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getCssProperty("#main ul li a.first", "display", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, 'inline');
     *   });
     * };
     *
     * @see elementIdCssProperty
     */
    getCssProperty(selector: string, cssProperty: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine an element's size in pixels. Uses `elementIdSize` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getElementSize("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value.width, 500);
     *     this.assert.equal(result.value.height, 20);
     *  });
     * };
     *
     * @see elementIdSize
     */
    getElementSize(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ width: number; height: number }>) => void): this;

    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     *
     * The element's coordinates are returned as a JSON object with x and y properties. Uses `elementIdLocation` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getLocation("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value.x, 200);
     *     this.assert.equal(result.value.y, 200);
     *   });
     * };
     *
     * @see elementIdLocation
     */
    getLocation(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;

    /**
     * Determine an element's location on the screen once it has been scrolled into view. Uses `elementIdLocationInView` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getLocationInView("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value.x, 200);
     *     this.assert.equal(result.value.y, 200);
     *   });
     * };
     *
     * @see elementIdLocationInView
     */
    getLocationInView(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;

    /**
     * Query for an element's tag name. Uses `elementIdName` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getTagName("#main ul li .first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "a");
     *   });
     * };
     *
     * @see elementIdName
     */
    getTagName(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Returns the visible text for the element. Uses `elementIdText` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getText("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "nightwatchjs.org");
     *   });
     * };
     *
     * @see elementIdText
     */
    getText(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Returns a form element current value. Uses `elementIdValue` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getValue("form.login input[type=text]", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "enter username");
     *   });
     * };
     *
     * @see elementIdValue
     */
    getValue(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine if an element is currently displayed. Uses `elementIdDisplayed` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.isVisible('#main', function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, true);
     *   });
     * };
     *
     * @see elementIdDisplayed
     */
    isVisible(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void): this;

    /**
     * Move the mouse by an offset of the specified element. If an element is provided but no offset, the mouse will be moved to the center of the element.
     * If the element is not visible, it will be scrolled into view.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.moveToElement('#main', 10, 10);
     * };
     *
     * @see moveTo
     */
    moveToElement(selector: string, xoffset: number, yoffset: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Sends some text to an element. Can be used to set the value of a form element or to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
     *
     * <div class="alert alert-warning"><strong>setValue</strong> does not clear the existing value of the element. To do so, use the <strong>clearValue()</strong> command.</div>
     *
     * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `browser.Keys`.
     *
     * @example
     * // send some simple text to an input
     * this.demoTest = function (browser) {
     *   browser.setValue('input[type=text]', 'nightwatch');
     * };
     * //
     * // send some text to an input and hit enter.
     * this.demoTest = function (browser) {
     *   browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     *
     * @see elementIdValue
     */
    setValue(selector: string, inputValue: string | string[], callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
    /**
     * Alias for `setValue`.
     * @see setValue
     */
    sendKeys: SharedCommands["setValue"];

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. Uses `submit` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.submitForm('form.login');
     * };
     *
     * @see submit
     */
    submitForm(selector: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Opposite of `waitForElementPresent`. Waits a given time in milliseconds for an element to be not present (i.e. removed)
     * in the page before performing any other commands or assertions.
     *
     * If the element is still present after the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementNotPresent('#dialog', 1000);
     * };
     *
     * @see waitForElementPresent
     * @since v0.4.0
     */
    waitForElementNotPresent(selector: string, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;

    /**
     * Opposite of `waitForElementVisible`. Waits a given time in milliseconds for an element to be not visible (i.e. hidden but existing)
     * in the page before performing any other commands or assertions.
     *
     * If the element fails to be hidden in the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementNotVisible('#dialog', 1000);
     * };
     *
     * @since v0.4.0
     * @see waitForElementVisible
     */
    waitForElementNotVisible(selector: string, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;

    /**
     * Waits a given time in milliseconds for an element to be present in the page before performing any other commands or assertions.
     *
     * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementPresent('body', 1000);
     *   // continue if failed
     *   browser.waitForElementPresent('body', 1000, false);
     *   // with callback
     *   browser.waitForElementPresent('body', 1000, function() {
     *     // do something while we're here
     *   });
     *   // custom Spanish message
     *   browser.waitForElementPresent('body', 1000, 'elemento %s no era presente en %d ms');
     *   // many combinations possible - the message is always the last argument
     *   browser.waitForElementPresent('body', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
     * };
     */
    waitForElementPresent(selector: string, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;

    /**
     * Waits a given time in milliseconds for an element to be visible in the page before performing any other commands or assertions.
     *
     * If the element fails to be present and visible in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementVisible('body', 1000);
     *   // continue if failed
     *   browser.waitForElementVisible('body', 1000, false);
     *   // with callback
     *   browser.waitForElementVisible('body', 1000, function() {
     *     // do something while we're here
     *   });
     *   // custom Spanish message
     *   browser.waitForElementVisible('body', 1000, 'elemento %s no era visible en %d ms');
     *   // many combinations possible - the message is always the last argument
     *   browser.waitForElementVisible('body', 1000, false, function() {}, 'elemento %s no era visible en %d ms');
     * };
     */
    waitForElementVisible(selector: string, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;
}

export interface WebDriverProtocol extends
    WebDriverProtocolSessions, WebDriverProtocolNavigation,
    WebDriverProtocolCommandContexts,
    WebDriverProtocolElements, WebDriverProtocolElementState,
    WebDriverProtocolElementInteraction, WebDriverProtocolElementLocation,
    WebDriverProtocolDocumentHandling, WebDriverProtocolCookies,
    WebDriverProtocolUserActions, WebDriverProtocolUserPrompts,
    WebDriverProtocolScreenCapture, WebDriverProtocolMobileRelated { }

export interface WebDriverProtocolSessions {
    /**
     * Get info about, delete or create a new session. Defaults to the current session.
     *
     * @example
     * this.demoTest = function (browser) {
     *    browser.session(function(result) {
     *      console.log(result.value);
     *    });
     *    //
     *    browser.session('delete', function(result) {
     *      console.log(result.value);
     *    });
     *    //
     *    browser.session('delete', '12345-abc', function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    session(action?: string, sessionId?: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Record<string, any>>) => void): this;

    /**
     * Returns a list of the currently active sessions.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.sessions(function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    sessions(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<Record<string, any>>>) => void): this;

    /**
     * Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.timeouts('script', 10000, function(result) {
     *      console.log(result);
     *    });
     * }
     */
    timeouts(typeOfOperation: string, ms: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Set the amount of time, in milliseconds, that asynchronous scripts executed by `.executeAsync` are permitted to run before they are aborted and a |Timeout| error is returned to the client.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.timeoutsAsyncScript(10000, function(result) {
     *      console.log(result);
     *    });
     * }
     */
    timeoutsAsyncScript(ms: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Set the amount of time the driver should wait when searching for elements. If this command is never sent, the driver will default to an implicit wait of 0ms.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.timeoutsImplicitWait(10000, function(result) {
     *      console.log(result);
     *    });
     * }
     */
    timeoutsImplicitWait(ms: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Query the server's current status.
     */
    status(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{
        build: { version: string; revision: string; time: string };
        status: { arch: string; name: string; version: string };
    }>) => void): this;

    /**
     * Gets the text of the log type specified. To find out the available log types, use `.getLogTypes()`.
     *
     * Returns a [log entry JSON object](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#log-entry-json-object).
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.sessionLog('client', function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    sessionLog(typeString: string, callback?: (this: NightwatchAPI, log: NightwatchLogEntry[]) => void): this;

    /**
     * Gets an array of strings for which log types are available. This methods returns the entire WebDriver response, if you are only interested in the logs array, use `.getLogTypes()` instead.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.sessionLogTypes(function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    sessionLogTypes(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<"client" | "driver" | "browser" | "server">>) => void): this;
}

export interface WebDriverProtocolNavigation {
    /**
     * Retrieve the URL of the current page or navigate to a new URL.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.url(function(result) {
     *       // return the current url
     *       console.log(result);
     *     });
     *     //
     *     // navigate to new url:
     *     browser.url('{URL}');
     *     //
     *     //
     *     // navigate to new url:
     *     browser.url('{URL}', function(result) {
     *       console.log(result);
     *     });
     *   }
     * }
     */
    url(url: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;
    /**
     * Retrieve the URL of the current page or navigate to a new URL.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.url(function(result) {
     *       // return the current url
     *       console.log(result);
     *     });
     *     //
     *     // navigate to new url:
     *     browser.url('{URL}');
     *     //
     *     //
     *     // navigate to new url:
     *     browser.url('{URL}', function(result) {
     *       console.log(result);
     *     });
     *   }
     * }
     */
    url(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Navigate backwards in the browser history, if possible.
     */
    back(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Navigate forwards in the browser history, if possible.
     */
    forward(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Refresh the current page.
     */
    refresh(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Get the current page title.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.title(function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    title(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;
}

export interface WebDriverProtocolCommandContexts {
    /**
     * Change focus to another window or close the current window. Shouldn't normally be used directly, instead `.switchWindow()` and `.closeWindow()` should be used.
     */
    window(method: string, handleOrName?: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Retrieve the current window handle.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowHandle(function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    windowHandle(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Retrieve the list of all window handles available to the session.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowHandles(function(result) {
     *      // An array of window handles.
     *      console.log(result.value);
     *    });
     * }
     */
    windowHandles(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string[]>) => void): this;

    /**
     * Increases the window to the maximum available size without going full-screen.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowMaximize('current', function(result) {
     *      console.log(result);
     *    });
     * }
     */
    windowMaximize(handleOrName: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Change or get the position of the specified window. If the second argument is a function it will be used as a callback and
     * the call will perform a get request to retrieve the existing window position.
     *
     * @example
     *  this.demoTest = function (browser) {
     *
     *    // Change the position of the specified window.
     *    // If the :windowHandle URL parameter is "current", the currently active window will be moved.
     *    browser.windowPosition('current', 0, 0, function(result) {
     *      console.log(result);
     *    });
     *
     *    // Get the position of the specified window.
     *    // If the :windowHandle URL parameter is "current", the position of the currently active window will be returned.
     *    browser.windowPosition('current', function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    windowPosition(windowHandle: string, offsetX: number, offsetY: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
    /**
     * Change or get the position of the specified window. If the second argument is a function it will be used as a callback and
     * the call will perform a get request to retrieve the existing window position.
     *
     * @example
     *  this.demoTest = function (browser) {
     *
     *    // Change the position of the specified window.
     *    // If the :windowHandle URL parameter is "current", the currently active window will be moved.
     *    browser.windowPosition('current', 0, 0, function(result) {
     *      console.log(result);
     *    });
     *
     *    // Get the position of the specified window.
     *    // If the :windowHandle URL parameter is "current", the position of the currently active window will be returned.
     *    browser.windowPosition('current', function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    windowPosition(windowHandle: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;

    /**
     * Change or get the size of the specified window. If the second argument is a function it will be used as a callback and the call will perform a get request to retrieve the existing window size.
     *
     * @example
     *  this.demoTest = function (browser) {
     *
     *    // Return the size of the specified window. If the :windowHandle URL parameter is "current", the size of the currently active window will be returned.
     *    browser.windowSize('current', function(result) {
     *      console.log(result.value);
     *    });
     *
     *    // Change the size of the specified window.
     *    // If the :windowHandle URL parameter is "current", the currently active window will be resized.
     *    browser.windowSize('current', 300, 300, function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    windowSize(windowHandle: string, width: number, height: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
    /**
     * Change or get the size of the specified window. If the second argument is a function it will be used as a callback and the call will perform a get request to retrieve the existing window size.
     *
     * @example
     *  this.demoTest = function (browser) {
     *
     *    // Return the size of the specified window. If the :windowHandle URL parameter is "current", the size of the currently active window will be returned.
     *    browser.windowSize('current', function(result) {
     *      console.log(result.value);
     *    });
     *
     *    // Change the size of the specified window.
     *    // If the :windowHandle URL parameter is "current", the currently active window will be resized.
     *    browser.windowSize('current', 300, 300, function(result) {
     *      console.log(result.value);
     *    });
     * }
     */
    windowSize(windowHandle: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ width: number; height: number }>) => void): this;

    /**
     * Change focus to another frame on the page. If the frame id is missing or null, the server should switch to the page's default content.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.frame('<ID>', function(result) {
     *      console.log(result);
     *    });
     * }
     */
    frame(frameId: string | undefined | null, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.frameParent(function(result) {
     *      console.log(result);
     *    });
     * }
     *
     * @since v0.4.8
     */
    frameParent(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
}

export interface WebDriverProtocolElements {
    /**
     * Search for an element on the page, starting from the document root. The located element will be returned as a web element JSON object.
     * First argument to be passed is the locator strategy, which is detailed on the [WebDriver docs](https://www.w3.org/TR/webdriver/#locator-strategies).
     *
     * The locator stragy can be one of:
     * - `css selector`
     * - `link text`
     * - `partial link text`
     * - `tag name`
     * - `xpath`
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.element('css selector', 'body', function(result) {
     *       console.log(result.value)
     *     });
     *   },
     *
     *   'es6 async demo Test': async function(browser) {
     *     const result = await browser.element('css selector', 'body');
     *     console.log('result value is:', result.value);
     *   }
     * }
     */
    element(using: LocateStrategy, value: string, callback: (this: NightwatchAPI, result: NightwatchCallbackResult<{ ELEMENT: string }>) => void): this;

    /**
     * Search for multiple elements on the page, starting from the document root. The located elements will be returned as web element JSON objects.
     * First argument to be passed is the locator strategy, which is detailed on the [WebDriver docs](https://www.w3.org/TR/webdriver/#locator-strategies).
     *
     * * The locator strategy can be one of:
     * - `css selector`
     * - `link text`
     * - `partial link text`
     * - `tag name`
     * - `xpath`
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.elements('css selector', 'ul li', function(result) {
     *       console.log(result.value)
     *     });
     *   },
     *
     *   'es6 async demo Test': async function(browser) {
     *     const result = await browser.elements('css selector', 'ul li');
     *     console.log('result value is:', result.value);
     *   },
     *
     *   'page object demo Test': function (browser) {
     *      var nightwatch = browser.page.nightwatch();
     *      nightwatch
     *        .navigate()
     *        .assert.titleContains('Nightwatch.js');
     *
     *      nightwatch.api.elements('@featuresList', function(result) {
     *        console.log(result);
     *      });
     *
     *      browser.end();
     *   }
     * }
     */
    elements(using: LocateStrategy, value: string, callback: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<{ ELEMENT: string }>>) => void): this;

    /**
     * Search for an element on the page, starting from the identified element. The located element will be returned as a Web Element JSON object.
     *
     * This command operates on a protocol level and requires a [Web Element ID](https://www.w3.org/TR/webdriver1/#dfn-web-elements).
     * Read more on [Element retrieval](https://www.w3.org/TR/webdriver1/#element-retrieval) on the W3C WebDriver spec page.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.elementIdElement('<WebElementId>', 'css selector', '.new-element', function(result) {
     *       console.log(result.value)
     *     });
     *   },
     *
     *   'es6 async demo Test': async function(browser) {
     *     const result = await browser.elementIdElement('<WebElementId>', 'css selector', '.new-element');
     *     console.log(result.value);
     *   }
     * }
     */
    elementIdElement(id: string, using: LocateStrategy, value: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ ELEMENT: string }>) => void): this;

    /**
     * Search for multiple elements on the page, starting from the identified element. The located element will be returned as a web element JSON objects.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.elementIdElements('<WebElementId>', 'css selector', 'ul li', function(result) {
     *       console.log(result.value)
     *     });
     *   },
     *
     *   'es6 async demo Test': async function(browser) {
     *     const result = await browser.elementIdElements('<WebElementId>', 'css selector', 'ul li');
     *     console.log(result.value);
     *   }
     * }
     */
    elementIdElements(id: string, using: LocateStrategy, value: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<{ ELEMENT: string }>>) => void): this;

    /**
     * Test if two web element IDs refer to the same DOM element.
     *
     * This command is __deprecated__ and is only available on the [JSON Wire protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidequalsother)
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.elementIdEquals('<ID-1>', '<ID-2>', function(result) {
     *       console.log(result.value)
     *     });
     *   }
     * }
     */
    elementIdEquals(id: string, otherId: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void): this;

    /**
     * Get the element on the page that currently has focus. The element will be returned as a [Web Element](https://www.w3.org/TR/webdriver1/#dfn-web-elements) JSON object.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.elementActive(function(result) {
     *       console.log(result.value)
     *     });
     *   }
     * }
     */
    elementActive(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ ELEMENT: string }>) => void): this;
}

export interface WebDriverProtocolElementState {
    /**
     * Get the value of an element's attribute.
     */
    elementIdAttribute(id: string, attributeName: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void): this;

    /**
     * Retrieve the computed value of the given CSS property of the given element.
     *
     * The CSS property to query should be specified using the CSS property name, not the JavaScript property name (e.g. background-color instead of backgroundColor).
     */
    elementIdCssProperty(id: string, cssPropertyName: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine if an element is currently displayed.
     */
    elementIdDisplayed(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void): this;

    /**
     * Determine if an element is currently enabled.
     */
    elementIdEnabled(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void): this;

    /**
     * Retrieve the qualified tag name of the given element.
     */
    elementIdName(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
     */
    elementIdSelected(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void): this;

    /**
     * Determine an element's size in pixels. The size will be returned as a JSON object with width and height properties.
     */
    elementIdSize(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ width: number; height: number }>) => void): this;

    /**
     * Returns the visible text for the element.
     */
    elementIdText(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;
}

export interface WebDriverProtocolElementInteraction {
    /**
     * Scrolls into view a submittable element excluding buttons or editable element, and then attempts to clear its value, reset the checked state, or text content.
     */
    elementIdClear(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Scrolls into view the element and clicks the in-view center point. If the element is not pointer-interactable, an <code>element not interactable</code> error is returned.
     */
    elementIdClick(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Scrolls into view the form control element and then sends the provided keys to the element, or returns the current value of the element.
     * In case the element is not keyboard interactable, an <code>element not interactable error</code> is returned.
     */
    elementIdValue(id: string, value: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
    /**
     * Scrolls into view the form control element and then sends the provided keys to the element, or returns the current value of the element.
     * In case the element is not keyboard interactable, an <code>element not interactable error</code> is returned.
     */
    elementIdValue(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Send a sequence of key strokes to the active element. The sequence is defined in the same format as the `sendKeys` command.
     * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `client.Keys`.
     *
     * Rather than the `setValue`, the modifiers are not released at the end of the call. The state of the modifier keys is kept between calls,
     * so mouse interactions can be performed while modifier keys are depressed.
     */
    keys(keysToSend: string[], callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element.
     */
    submit(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
}

export interface WebDriverProtocolElementLocation {
    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     *
     * The element's coordinates are returned as a JSON object with x and y properties.
     */
    elementIdLocation(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;

    /**
     * Determine an element's location on the screen once it has been scrolled into view.
     */
    elementIdLocationInView(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;
}

export interface WebDriverProtocolDocumentHandling {
    /**
     * Returns a string serialisation of the DOM of the current page.
     */
    source(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. The executed script is assumed to be synchronous.
     * The script argument defines the script to execute in the form of a function body. The value returned by that function will be returned to the client.
     *
     * The function will be invoked with the provided args array and the values may be accessed via the arguments object in the order specified.
     *
     * Under the hood, if the `body` param is a function it is converted to a string with `<function>.toString()`. Any references to your current scope are ignored.
     *
     * To ensure cross-browser compatibility, the specified function should not be in ES6 format (i.e. `() => {}`).
     * If the execution of the function fails, the first argument of the callback contains error information.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.execute(function(imageData) {
     *      // resize operation
     *      return true;
     *    }, [imageData], function(result) {
     *      // result.value === true
     *    });
     * }
     */
    execute<T>(body: ((this: undefined, ...data: any[]) => T) | string, args?: any[], callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<T>) => void): this;

    /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. The executed script is assumed to be asynchronous.
     *
     * The function to be injected receives the `done` callback as argument which needs to be called when the asynchronous operation finishes.
     * The value passed to the `done` callback is returned to the client.
     * Additional arguments for the injected function may be passed as a non-empty array which will be passed before the `done` callback.
     *
     * Asynchronous script commands may not span page loads. If an unload event is fired while waiting for the script result, an error will be returned.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.executeAsync(function(done) {
     *      setTimeout(function() {
     *        done(true);
     *      }, 500);
     *    }, function(result) {
     *      // result.value === true
     *    });
     *
     *    browser.executeAsync(function(arg1, arg2, done) {
     *      setTimeout(function() {
     *        done(true);
     *      }, 500);
     *    }, [arg1, arg2], function(result) {
     *      // result.value === true
     *    });
     * }
     */
    executeAsync<T>(script: ((this: undefined, ...data: any[]) => T) | string, args?: any[], callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<T>) => void): this;
}

export interface WebDriverProtocolCookies {
    /**
     * Retrieve or delete all cookies visible to the current page or set a cookie. Normally this shouldn't be used directly, instead the cookie convenience methods should be used:
     * <code>getCookie</code>, <code>getCookies</code>, <code>setCookie</code>, <code>deleteCookie</code>, <code>deleteCookies</code>.
     *
     * @see getCookies
     * @see getCookie
     * @see setCookie
     * @see deleteCookie
     * @see deleteCookies
     */
    cookie(method: string, callbackOrCookie?: () => void): this;
}

export interface WebDriverProtocolUserActions {
    /**
     * Double-clicks at the current mouse coordinates (set by `.moveTo()`).
     */
    doubleClick(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Click at the current mouse coordinates (set by `.moveTo()`).
     *
     * The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button.
     */
    mouseButtonClick(button: 0 | 1 | 2 | 'left' | 'middle' | 'right', callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Click and hold the left mouse button (at the coordinates set by the last `moveTo` command). Note that the next mouse-related command that should follow is `mouseButtonUp` .
     * Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.
     *
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button,
     * and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     */
    mouseButtonDown(button: 0 | 1 | 2 | 'left' | 'middle' | 'right', callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Releases the mouse button previously held (where the mouse is currently at). Must be called once for every `mouseButtonDown` command issued.
     *
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button,
     * and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     */
    mouseButtonUp(button: 0 | 1 | 2 | 'left' | 'middle' | 'right', callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Move the mouse by an offset of the specified [Web Element ID](https://www.w3.org/TR/webdriver1/#dfn-web-elements) or relative to the current mouse cursor, if no element is specified.
     * If an element is provided but no offset, the mouse will be moved to the center of the element.
     *
     * If an element is provided but no offset, the mouse will be moved to the center of the element. If the element is not visible, it will be scrolled into view.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.moveTo(null, 110, 100);
     * };
     */
    moveTo(element: string | null, xoffset: number, yoffset: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
}

export interface WebDriverProtocolUserPrompts {
    /**
     * Accepts the currently displayed alert dialog. Usually, this is equivalent to clicking on the 'OK' button in the dialog.
     */
    acceptAlert(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Dismisses the currently displayed alert dialog. For confirm() and prompt() dialogs, this is equivalent to clicking the 'Cancel' button.
     *
     * For alert() dialogs, this is equivalent to clicking the 'OK' button.
     */
    dismissAlert(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Gets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.
     */
    getAlertText(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Sends keystrokes to a JavaScript prompt() dialog.
     */
    setAlertText(value: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
}

export interface WebDriverProtocolScreenCapture {
    /**
     * Take a screenshot of the current page.
     */
    screenshot(log_screenshot_data: boolean, callback?: (screenshotEncoded: string) => void): this;
}

export interface WebDriverProtocolMobileRelated {
    /**
     * Get the current browser orientation.
     */
    getOrientation(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<"LANDSCAPE" | "PORTRAIT">) => void): this;

    /**
     * Sets the browser orientation.
     */
    setOrientation(orientation: "LANDSCAPE" | "PORTRAIT", callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Get a list of the available contexts.
     *
     * Used by Appium when testing hybrid mobile web apps. More info here: https://github.com/appium/appium/blob/master/docs/en/advanced-concepts/hybrid.md.
     */
    contexts(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void): this;

    /**
     * Get current context.
     */
    currentContext(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void): this;

    /**
     * Sets the context.
     */
    setContext(context: string, callback?: () => void): this;
}
