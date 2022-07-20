// Type definitions for nightwatch 2.0
// Project: http://nightwatchjs.org
// Definitions by: Rahul Kavalapara <https://github.com/rkavalap>
//                 Connor Schlesiger <https://github.com/schlesiger>
//                 Clayton Astrom <https://github.com/ClaytonAstrom>
//                 Lukas Beranek <https://github.com/lloiser>
//                 Vaibhav Singh <https://github.com/vaibhavsingh97>
//                 Andrei Rusu <https://github.com/beatfactor>
//                 David Burns <https://github.com/AutomatedTester>
//                 Ravi Sawlani <https://github.com/gravityvi>
//                 Binayak Ghosh <https://github.com/swrdfish>
//                 Harshit Agrawal <https://github.com/harshit-bs>
//                 David Mello <https://github.com/literallyMello>
//                 Luke Bickell <https://github.com/lukebickell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { WebElement, WebElementPromise, By } from 'selenium-webdriver';

export * from './globals';

export interface ChromePerfLoggingPrefs {
    /**
     * Default: true. Whether or not to collect events from Network domain.
     */
    enableNetwork?: boolean | undefined;
    /**
     * Default: true. Whether or not to collect events from Page domain.
     */
    enablePage?: boolean | undefined;
    /**
     * A comma-separated string of Chrome tracing categories for which trace events should be collected.
     * An unspecified or empty string disables tracing.
     */
    traceCategories?: string | undefined;
    /**
     * Default: 1000. The requested number of milliseconds between DevTools trace buffer usage events. For example, if 1000,
     * then once per second, DevTools will report how full the trace buffer is. If a report indicates the buffer usage is 100%,
     * a warning will be issued.
     */
    bufferUsageReportingInterval?: number | undefined;
}

export interface ChromeOptions {
    /**
     *     List of command-line arguments to use when starting Chrome. Arguments with an associated value should be separated by a '=' sign
     * (e.g., ['start-maximized', 'user-data-dir=/tmp/temp_profile']).
     */
    args?: string[] | undefined;
    /**
     * Path to the Chrome executable to use (on Mac OS X, this should be the actual binary, not just the app. e.g.,
     * '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
     */
    binary?: string | undefined;
    /**
     * A list of Chrome extensions to install on startup. Each item in the list should be a base-64 encoded packed Chrome extension (.crx)
     */
    extensions?: string[] | undefined;
    /**
     * A dictionary with each entry consisting of the name of the preference and its value. These preferences are applied
     * to the Local State file in the user data folder.
     */
    localState?: Record<string, string> | undefined;
    /**
     * A dictionary with each entry consisting of the name of the preference and its value. These preferences are only applied
     * to the user profile in use.
     */
    prefs?: Record<string, string> | undefined;
    /**
     * Default: false. If false, Chrome will be quit when ChromeDriver is killed, regardless of whether the session is quit.
     * If true, Chrome will only be quit if the session is quit (or closed). Note, if true, and the session is not quit,
     * ChromeDriver cannot clean up the temporary user data directory that the running Chrome instance is using.
     */
    detach?: boolean | undefined;
    /**
     * An address of a Chrome debugger server to connect to, in the form of <hostname/ip:port>, e.g. '127.0.0.1:38947'
     */
    debuggerAddress?: string | undefined;
    /**
     * List of Chrome command line switches to exclude that ChromeDriver by default passes when starting Chrome.
     * Do not prefix switches with --.
     */
    excludeSwitches?: string[] | undefined;
    /**
     * Directory to store Chrome minidumps . (Supported only on Linux.)
     */
    minidumpPath?: string | undefined;
    /**
     * A dictionary with either a value for “deviceName,” or values for “deviceMetrics” and “userAgent.” Refer to Mobile Emulation for more information.
     */
    mobileEmulation?: Record<string, string> | undefined;
    /**
     * An optional dictionary that specifies performance logging preferences. See below for more information.
     */
    perfLoggingPrefs?: ChromePerfLoggingPrefs | undefined;
    /**
     * A list of window types that will appear in the list of window handles. For access to <webview> elements, include "webview" in this list.
     */
    windowTypes?: string[] | undefined;
}

//  TODO: visit later
export interface NightwatchDesiredCapabilities {
    /**
     * The name of the browser being used; should be one of {android|chrome|firefox|htmlunit|internet explorer|iPhone|iPad|opera|safari}.
     */
    browserName?: string | undefined;

    /**
     * The browser version, or the empty string if unknown.
     */
    version?: string | undefined;

    /**
     * A key specifying which platform the browser should be running on. This value should be one of {WINDOWS|XP|VISTA|MAC|LINUX|UNIX|ANDROID}.
     * When requesting a new session, the client may specify ANY to indicate any available platform may be used.
     * For more information see [GridPlatforms (https://code.google.com/p/selenium/wiki/GridPlatforms)]
     */
    platform?: string | undefined;

    /**
     * Whether the session supports taking screenshots of the current page.
     */
    takesScreenShot?: boolean | undefined;

    /**
     * Whether the session can interact with modal popups, such as window.alert and window.confirm.
     */
    handlesAlerts?: boolean | undefined;

    /**
     * Whether the session supports CSS selectors when searching for elements.
     */
    cssSelectorsEnabled?: boolean | undefined;

    /**
     * Whether the session supports executing user supplied JavaScript in the context of the current page (only on HTMLUnitDriver).
     */
    javascriptEnabled?: boolean | undefined;

    /**
     * Whether the session can interact with database storage.
     */
    databaseEnabled?: boolean | undefined;

    /**
     * Whether the session can set and query the browser's location context.
     */
    locationContextEnabled?: boolean | undefined;

    /**
     * Whether the session can interact with the application cache.
     */
    applicationCacheEnabled?: boolean | undefined;

    /**
     * Whether the session can query for the browser's connectivity and disable it if desired.
     */
    browserConnectionEnabled?: boolean | undefined;

    /**
     * Whether the session supports interactions with storage objects (http://www.w3.org/TR/2009/WD-webstorage-20091029/).
     */
    webStorageEnabled?: boolean | undefined;

    /**
     * Whether the session should accept all SSL certs by default.
     */
    acceptSslCerts?: boolean | undefined;

    /**
     * Whether the session can rotate the current page's current layout between portrait and landscape orientations (only applies to mobile platforms).
     */
    rotatable?: boolean | undefined;

    /**
     * Whether the session is capable of generating native events when simulating user input.
     */
    nativeEvents?: boolean | undefined;

    /**
     * What the browser should do with an unhandled alert before throwing out the UnhandledAlertException. Possible values are "accept", "dismiss" and "ignore"
     */
    unexpectedAlertBehaviour?: string | undefined;

    /**
     * Allows the user to specify whether elements are scrolled into the viewport for interaction to align with the top (0) or bottom (1) of the viewport.
     * The default value is to align with the top of the viewport. Supported in IE and Firefox (since 2.36)
     */
    elementScrollBehaviour?: number | undefined;

    /**
     * A JSON object describing the logging level of different components in the browser, the driver, or any intermediary WebDriver servers.
     * Available values for most loggers are "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
     * This produces a JSON object looking something like: {"loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "FINE"}}.
     */
    loggingPrefs?:
        | {
              browser?: string | undefined;
              driver?: string | undefined;
              server?: string | undefined;
          }
        | undefined;
    /**
     * This is a list of all the Chrome-specific desired capabilities.
     */
    chromeOptions?: ChromeOptions | undefined;
}

export interface NightwatchScreenshotOptions {
    enabled?: boolean | undefined;
    filename_format: ({
        testSuite,
        testCase,
        isError,
        dateObject,
    }?: {
        testSuite?: string;
        testCase?: string;
        isError?: boolean;
        dateObject?: Date;
    }) => string;
    on_failure?: boolean | undefined;
    on_error?: boolean | undefined;
    path?: string | undefined;
}

export interface NightwatchTestRunner {
    type?: string | undefined;
    options?:
        | {
              ui?: string | undefined;
          }
        | undefined;
}

export interface NightwatchTestWorker {
    enabled: boolean;
    workers: string | number;
    node_options?: string | string[] | undefined;
}

export interface TimeoutOptions {
    /**
     * @default 60000
     */
    timeout: number;
    /**
     * @default 0
     */
    retry_attempts: number;
}

export interface NightwatchOptions {
    /**
     * Location(s) where custom commands will be loaded from.
     */
    custom_commands_path?: string | string[] | undefined;

    /**
     * Location(s) where custom assertions will be loaded from.
     */
    custom_assertions_path?: string | string[] | undefined;

    /**
     * Location(s) where page object files will be loaded from.
     */
    page_objects_path?: string | string[] | undefined;

    // An array specifying a list of Nightwatch plugin names that should be used;
    // e.g.: plugins: ['vite-plugin-nightwatch']
    plugins: string[];

    /**
     * Location of an external globals module which will be loaded and made available to the test as a property globals on the main client instance.
     * Globals can also be defined/overwritten inside a test_settings environment.
     */
    globals_path?: string | undefined;

    /**
     * An object which will be made available on the main test api, throughout the test execution.
     */
    globals?: NightwatchGlobals;

    /**
     * configuration settings for the dotenv module - a zero-dependency module that loads environment variables from a .env file into process.env. More details on https://www.npmjs.com/package/dotenv
     */
    dotenv?: any;

    /**
     * persist the same globals object between runs or have a (deep) copy of it per each test;
     * this can be useful when persisting data between test suites is needed, such as a cookie or session information.
     * @default false
     */
    persist_globals?: boolean | undefined;

    /**
     * The location where the JUnit XML report files will be saved. Set this to false if you want to disable XML reporting.
     */
    output_folder?: string | undefined;

    /**
     * An array of folders (excluding subfolders) where the tests are located.
     */
    src_folders: string | string[];

    /**
     * Used when running in parallel to determine if the output should be collected and displayed at the end.
     */
    live_output?: boolean | undefined;

    /**
     * disable support of loading of typescript files for backwards compatibility with test suites.
     */
    disable_typescript: boolean | undefined;

    /**
     * Controls whether or not to disable coloring of the cli output globally.
     */
    disable_colors?: boolean | undefined;

    /**
     * Used when running in parallel to specify the delay (in milliseconds) between starting the child processes
     */
    parallel_process_delay?: number | undefined;

    /**
     * An object containing Selenium Server related configuration options. See below for details.
     */
    selenium?: NightwatchSeleniumOptions | undefined;

    /**
     * Whether or not to automatically start the Selenium/WebDriver session. If running unit tests, this should be set tot false.
     * @default true
     */
    start_process?: boolean | undefined;

    /**
     * End the session automatically when the test is being terminated, usually after a failed assertion.
     * @default true
     */
    end_session_on_fail?: boolean | undefined;

    /**
     * Skip the remaining test cases from the current test suite, when one test case fails.
     */
    skip_testcases_on_fail?: boolean | undefined;

    /**
     * Whether or not to run individual test files in parallel. If set to true, runs the tests in parallel and determines the number of workers automatically.
     * If set to an object, can specify specify the number of workers as "auto" or a number. Example: "test_workers" : {"enabled" : true, "workers" : "auto"}
     * @default false
     */
    test_workers?: boolean | NightwatchTestWorker | undefined;

    /**
     * This object contains all the test related options. See below for details.
     */
    test_settings: NightwatchTestSettings;

    /**
     * Specifies which test runner to use when running the tests. Values can be either default (built in nightwatch runner) or mocha.
     * Example: "test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}
     * @default 'default'
     */
    test_runner?: string | NightwatchTestRunner | undefined;

    /**
     * Allows for webdriver config (mostly the same as selenium)
     */
    webdriver?:
        | {
              /**
               * When this is enabled, the Webdriver server is run in background in a child process and started/stopped automatically.
               * Nightwatch includes support for managing Chromedriver, Geckodriver (Firefox), Safaridriver, and Selenium Server. Please refer to the Install Webdriver section for details.
               * @default false
               */
              start_process: boolean;

              /**
               * Only useful if start_process is enabled.
               * @default none
               */
              server_path: string;

              /**
               * Only needed when the Webdriver service is running on a different machine.
               */
              host: string;

              /**
               * The port number on which the Webdriver service will listen and/or on which Nightwatch will attempt to connect.
               */
              port: number;

              /**
               * Should be set to true if connecting to a remote (cloud) service via HTTPS. Also don't forget to set port to 443.
               */
              ssl: boolean;

              /**
               * The location where the Webdriver service log file output.log file will be placed. Defaults to current directory.
               * To disable Webdriver logging, set this to false.
               * @default none
               */
              log_path: string | boolean;

              /**
               * List of cli arguments to be passed to the Webdriver process. This varies for each Webdriver implementation.
               *
               * @default none
               */
              cli_args: any;

              /**
               * Some Webdriver implementations (Safari, Edge) support both the W3C Webdriver API as well as the legacy JSON Wire (Selenium) API.
               *
               * @default false
               */
              use_legacy_jsonwire: boolean;

              /**
               * Time to wait (in ms) before starting to check the Webdriver server is up and running.
               *
               * @default 100
               */
              check_process_delay: number;

              /**
               * Maximum number of ping status check attempts when checking if the Webdriver server is up and running before returning a timeout error.
               *
               * @default 5
               */
              max_status_poll_tries: number;

              /**
               * Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running.
               *
               * @default 100
               */
              status_poll_interval: number;

              /**
               * The entire time (in ms) to wait for the Node.js process to be created and running (default is 2 min), including spawning the child process and checking the status.
               *
               * @default 120000
               */
              process_create_timeout: number;

              /**
               * Proxy requests to the Webdriver (or Selenium) service. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses node-proxy-agent.
               *
               * @example http://user:pass@host:port
               * @default none
               */
              proxy: string;

              /**
               * Requests to the Webdriver service will timeout in timeout miliseconds; a retry will happen retry_attempts number of times.
               *
               * @example {timeout: 15000, retry_attempts: 5}
               */
              timeout_options: TimeoutOptions;

              /**
               * Needed sometimes when using a Selenium Server. The prefix to be added to to all requests (e.g. /wd/hub).
               */
              default_path_prefix: string;

              /**
               * Usually only needed for cloud testing Selenium services. In case the server requires credentials this username will be used to compute the Authorization header.
               *
               * The value can be also an environment variable, in which case it will look like this:
               * "username" : "${SAUCE_USERNAME}"
               *
               * @default none
               */
              username: string;

              /**
               * This field will be used together with username to compute the Authorization header.
               *
               * Like username, the value can be also an environment variable:
               * "access_key" : "${SAUCE_ACCESS_KEY}"
               *
               * @default none
               */
              access_key: string;
          }
        | undefined;

    /**
     * An array of folders or file patterns to be skipped (relative to the main source folder).
     * @example
     * "exclude" : ["excluded-folder"]
     * or:
     * "exclude" : ["test-folder/*-smoke.js"]
     */
    exclude?: string[];

    /**
     * Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored
     * @example
     * "filter" : "tests/*-smoke.js"
     */
    filter?: string;

    /**
     * Skip a group of tests (a subfolder); can be a list of comma-separated values (no space).
     */
    skipgroup?: string;

    /**
     * A name property will be added to the desiredCapabilities containing the test suite name when this is enabled. It is useful when using cloud testing services.
     */
    sync_test_names?: boolean;

    /**
     * Skip tests by tag name; can be a list of comma-separated values (no space).
     */
    skiptags?: string;

    /**
     * Use xpath as the default locator strategy.
     */
    use_xpath?: boolean;

    parallel_mode?: boolean;

    report_prefix?: string;

    unit_testing_mode?: boolean;

    /**
     * @default junit
     */
    default_reporter?: string;

    /**
     * @default false
     */
    backwards_compatibility_mode?: boolean;

    disable_global_apis?: boolean;
}

export interface NightwatchGlobals {
    [key: string]: any;
    /**
     * this controls whether to abort the test execution when an assertion failed and skip the rest
     * it's being used in waitFor commands and expect assertions
     * @default true
     */
    abortOnAssertionFailure?: boolean | undefined;

    /**
     * this controls whether to abort the test execution when an assertion failed and skip the rest
     * it's being used in waitFor commands and expect assertions
     * @default false
     */
    abortOnElementLocateError?: boolean | undefined;

    /**
     * this will overwrite the default polling interval (currently 500ms) for waitFor commands
     * and expect assertions that use retry
     * @default 500
     */
    waitForConditionPollInterval?: number | undefined;

    /**
     * default timeout value in milliseconds for waitFor commands and implicit waitFor value for
     * expect assertions
     * @default 5000
     */
    waitForConditionTimeout?: number | undefined;

    /**
     * this will cause waitFor commands on elements to throw an error if multiple
     * elements are found using the given locate strategy and selector
     * @default false
     */
    throwOnMultipleElementsReturned?: boolean | undefined;

    /**
     * By default a warning is printed if multiple elements are found using the given locate strategy
     * and selector; set this to true to suppress those warnings
     * @default false
     */
    suppressWarningsOnMultipleElementsReturned: boolean | undefined;

    /**
     * controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
     * or an error is thrown
     * @default 20000
     */
    asyncHookTimeout?: number | undefined;

    /**
     * controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
     *  or an error is thrown
     * @default  2000
     */
    unitTestsTimeout?: number | undefined;

    /**
     * controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
     * or an error is thrown
     * @default 20000
     */
    customReporterCallbackTimeout?: number | undefined;

    /**
     * Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
     */
    retryAssertionTimeout?: number | undefined;

    reporter: (results: any, cb: any) => void;
    beforeTestSuite(browser: any): Promise<void>;
    afterTestSuite(browser: any): Promise<void>;
    beforeTestCase(browser: any): Promise<void>;
    afterTestCase(browser: any): Promise<void>;
    onBrowserNavigate(browser: any): Promise<void>;
    onBrowserQuit(browser: any): Promise<void>;
}

export interface NightwatchSeleniumOptions {
    /**
     * Whether or not to manage the selenium process automatically.
     * @default false
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
    port: number | undefined;

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
    cli_args: {};

    /**
     * Time to wait (in ms) before starting to check the Webdriver server is up and running
     * @default 500
     */
    check_process_delay: number;

    /**
     * Maximum number of ping status check attempts before returning a timeout error
     * @default 15
     */
    max_status_poll_tries: number;

    /**
     * Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running
     * @default 200
     */
    status_poll_interval: number;
}

// TODO: Remove duplicates from NightwatchOptions
export interface NightwatchTestSettingGeneric {
    /**
     * A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.
     */
    launch_url?: string | undefined;

    /**
     * The hostname/IP on which the selenium server is accepting connections.
     */
    selenium_host?: string | undefined;

    /**
     * The port number on which the selenium server is accepting connections.
     */
    selenium_port?: number | undefined;

    /**
     * Whether to show extended Selenium command logs.
     */
    silent?: boolean | undefined;

    /**
     * Use to disable terminal output completely.
     */
    output?: boolean | undefined;

    /**
     * Use to disable colored output in the terminal.
     */
    disable_colors?: boolean | undefined;

    /**
     * In case the selenium server requires credentials this username will be used to compute the Authorization header.
     * The value can be also an environment variable, in which case it will look like this: "username" : "${SAUCE_USERNAME}"
     */
    username?: string | undefined;

    /**
     * This field will be used together with username to compute the Authorization header.
     * Like username, the value can be also an environment variable: "access_key" : "${SAUCE_ACCESS_KEY}"
     */
    access_key?: string | undefined;

    /**
     * Proxy requests to the selenium server. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses node-proxy-agent. Example: http://user:pass@host:port
     */
    proxy?: string | undefined;

    /**
     * An object which will be passed to the Selenium WebDriver when a new session will be created. You can specify browser name for instance along with other capabilities.
     * Example:
     *  "desiredCapabilities" : {
     *  "browserName" : "firefox",
     *  "acceptSslCerts" : true
     * }
     * You can view the complete list of capabilities https://code.google.com/p/selenium/wiki/DesiredCapabilities.
     */
    desiredCapabilities?: NightwatchDesiredCapabilities | undefined;

    /**
     * An object which will be made available within the test and can be overwritten per environment. Example:"globals" : {  "myGlobal" : "some_global" }
     */
    globals?: NightwatchTestHooks | undefined;

    /**
     * An array of folders or file patterns to be skipped (relative to the main source folder).
     * Example: "exclude" : ["excluded-folder"] or: "exclude" : ["test-folder/*-smoke.js"]
     */
    exclude?: string[] | undefined;

    /**
     * Folder or file pattern to be used when loading the tests. Files that don't match this patter will be ignored.
     * Example: "filter" : "tests/*-smoke.js"
     */
    filter?: string | undefined;

    /**
     * Do not show the Base64 image data in the (verbose) log when taking screenshots.
     */
    log_screenshot_data?: boolean | undefined;

    /**
     * Use xpath as the default locator strategy
     */
    use_xpath?: boolean | undefined;

    /**
     * Same as Selenium settings cli_args. You can override the global cli_args on a per-environment basis.
     */
    cli_args?: any;

    /**
     * End the session automatically when the test is being terminated, usually after a failed assertion.
     */
    end_session_on_fail?: boolean | undefined;

    /**
     * Skip the rest of testcases (if any) when one testcase fails..
     */
    skip_testcases_on_fail?: boolean | undefined;
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
    module: string;
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
    element(property: any): this;

    /**
     * These methods will perform assertions on the specified target on the current element.
     * The targets can be an attribute value, the element's inner text and a css property.
     */
    equal(value: string): this;
    equals(value: string): this;
    contain(value: string): this;
    contains(value: string): this;
    match(value: string | RegExp): this;
    startWith(value: string): this;
    startsWith(value: string): this;
    endWith(value: string): this;
    endsWith(value: string): this;

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

    section(property: string): this;

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
    /**
     * Negates any of assertions following in the chain.
     */
    not: this;
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
    attributeContains(
        selector: string | ElementProperties,
        attribute: string,
        expected: string,
        message?: string,
    ): NightwatchAPI;

    /**
     * Checks if the given attribute of an element has the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.attributeEquals('body', 'data-attr', 'some value');
     *    };
     * ```
     */
    attributeEquals(
        selector: string | ElementProperties,
        attribute: string,
        expected: string,
        message?: string,
    ): NightwatchAPI;

    /**
     * Checks if the given element contains the specified text.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.containsText('#main', 'The Night Watch');
     *    };
     * ```
     */
    containsText(selector: string | ElementProperties, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element has the specified CSS class.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.cssClassPresent('#main', 'container');
     *    };
     * ```
     */
    cssClassPresent(selector: string | ElementProperties, className: string, message?: string): NightwatchAPI;

    /**
     * Checks if the specified css property of a given element has the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.cssProperty('#main', 'display', 'block');
     *    };
     * ```
     */
    cssProperty(
        selector: string | ElementProperties,
        cssProperty: string,
        expected: string | number,
        msg?: string,
    ): NightwatchAPI;

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
    elementPresent(selector: string | ElementProperties, msg?: string): NightwatchAPI;

    equal(value: any, expected: any, message?: string): NightwatchAPI;

    fail(actual?: any, expected?: any, message?: string, operator?: string): NightwatchAPI;

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
     * @deprecated in Nightwatch 2.0 and will be removed from future versions.
     * @see assert.titleEquals()
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.title("Nightwatch.js");
     *    };
     * ```
     */
    title(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the page title equals the given value.
     * @since 2.0
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.titleEquals("Nightwatch.js");
     *    };
     * ```
     */
    titleEquals(expected: string, message?: string): NightwatchAPI;

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
    value(selector: string | ElementProperties, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given form element's value contains the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.valueContains("form.login input[type=text]", "username");
     *    };
     * ```
     */
    valueContains(selector: string | ElementProperties, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element is visible on the page.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.visible(".should_be_visible");
     *    };
     * ```
     */
    visible(selector: string | ElementProperties, message?: string): NightwatchAPI;

    /**
     * Checks if the given element is selected.
     *
     * @example
     * this.demoTest = function (browser) {
     *  browser.assert.selected('.should_be_selected');
     *  browser.assert.selected({selector: '.should_be_selected'});
     *  browser.assert.selected({selector: '.should_be_selected', suppressNotFoundErrors: true});
     * };
     */
    selected(selector: string | ElementProperties, message?: string): NightwatchAPI;

    /**
     * Checks if the given element is enabled (as indicated by the 'disabled' attribute).
     *
     * @example
     * this.demoTest = function (browser) {
     *  browser.assert.enabled('.should_be_enabled');
     *  browser.assert.enabled({selector: '.should_be_enabled'});
     *  browser.assert.enabled({selector: '.should_be_enabled', suppressNotFoundErrors: true});
     * };
     */
    enabled(selector: string | ElementProperties, message?: string): NightwatchAPI;

    /**
     * Checks if the specified DOM property of a given element has the expected value.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     * If the result value is JSON object or array, a deep equality comparison will be performed.
     */
    domPropertyEquals(
        selector: string | ElementProperties,
        domProperty: string,
        expected: string | number,
        msg?: string,
    ): NightwatchAPI;

    /**
     * Checks if the specified DOM property of a given element has the expected value.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     * Several properties can be specified (either as an array or command-separated list). Nightwatch will check each one for presence.
     */
    domPropertyContains(
        selector: string | ElementProperties,
        domProperty: string,
        expected: string | number,
        msg?: string,
    ): NightwatchAPI;

    NightwatchAssertionsError: NightwatchAssertionsError;
}

export interface ElementProperties {
    /**
     * the element selector name
     *
     * @example
     * '@searchBar'
     */
    selector: string;

    /**
     * locator strategy can be one of
     *  - css selector
     *  - link text
     *  - partial link text
     *  - tag name
     *  - xpath
     *
     * @example
     * 'css selector'
     */
    locateStrategy?: LocateStrategy;

    /**
     * used to target a specific element in a query that results in multiple elements returned. Normally,
     * only the first element is used (index = 0) but using the index property, you can specify any element within the result.
     */
    index?: number;

    /**
     * used to overwrite this setting when using waitForElement* commands.
     */
    abortOnFailure?: boolean;

    /**
     * used to overwrite the default timeout for when using waitForElement* commands or assertions.
     */
    timeout?: number;

    /**
     * used to overwrite the default retry interval for when using waitForElement* commands or assertions.
     */
    retryInterval?: number;

    /**
     * Some element commands like .click() or .getText() will throw a NoSuchElement error if the element cannot be located, causing the test to fail.
     * If this option is set to true then this error is ignored.
     */
    suppressNotFoundErrors?: boolean;
}

export interface NightwatchTypedCallbackResult<T> {
    status: 0;
    value: T;
    error: Error;
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

export type NightwatchCallbackResult<T> = NightwatchTypedCallbackResult<T> | NightwatchCallbackResultError;

export interface NightwatchLogEntry {
    /**
     * The log entry message.
     */
    message: string;

    /**
     * The time stamp of log entry in seconds.
     */
    opt_timestamp: number;

    /**
     * The log type, if known.
     */
    opt_type?: string;

    /**
     * Severity level
     */
    level: 'ALL' | 'DEBUG' | 'FINE' | 'FINER' | 'FINEST' | 'INFO' | 'OFF' | 'SEVERE' | 'WARNING' | Level | number;
}

export interface Level {
    /**
     * the level's name.
     */
    name: string;

    /**
     * the level's numeric value.
     */
    level: number;
}

export interface NightwatchKeys {
    /** Releases all held modifier keys. */
    NULL: string;
    /** OS-specific keystroke sequence that performs a cancel action. */
    CANCEL: string;
    /** The help key. This key only appears on older Apple keyboards in place of the Insert key. */
    HELP: string;
    /** The backspace key. */
    BACK_SPACE: string;
    /** The tab key. */
    TAB: string;
    /** The clear key. This key only appears on full-size Apple keyboards in place of Num Lock key. */
    CLEAR: string;
    /** The return key. */
    RETURN: string;
    /** The enter (numpad) key. */
    ENTER: string;
    /** The shift key. */
    SHIFT: string;
    /** The control key. */
    CONTROL: string;
    /** The alt key. */
    ALT: string;
    /** The pause key. */
    PAUSE: string;
    /** The escape key. */
    ESCAPE: string;

    /** The space bar. */
    SPACE: string;
    /** The page up key. */
    PAGEUP: string;
    /** The page down key. */
    PAGEDOWN: string;
    /** The end key. */
    END: string;
    /** The home key. */
    HOME: string;
    /** The left arrow. */
    ARROW_LEFT: string;
    LEFT_ARROW: string;
    /** The up arrow. */
    ARROW_UP: string;
    UP_ARROW: string;
    /** The right arrow. */
    ARROW_RIGHT: string;
    RIGHT_ARROW: string;
    /** The down arrow. */
    ARROW_DOWN: string;
    DOWN_ARROW: string;
    /** The insert key. */
    INSERT: string;
    /** The delete key. */
    DELETE: string;
    /** The semicolon key. */
    SEMICOLON: string;
    /** The equals key. */
    EQUALS: string;

    /** The numpad zero key. */
    NUMPAD0: string;
    /** The numpad one key. */
    NUMPAD1: string;
    /** The numpad two key. */
    NUMPAD2: string;
    /** The numpad three key. */
    NUMPAD3: string;
    /** The numpad four key. */
    NUMPAD4: string;
    /** The numpad five key. */
    NUMPAD5: string;
    /** The numpad six key. */
    NUMPAD6: string;
    /** The numpad seven key. */
    NUMPAD7: string;
    /** The numpad eight key. */
    NUMPAD8: string;
    /** The numpad nine key. */
    NUMPAD9: string;

    /** The numpad multiply (*) key. */
    MULTIPLY: string;
    /** The numpad add (+) key. */
    ADD: string;
    /** The numpad separator (=) key. */
    SEPARATOR: string;
    /** The numpad subtract (-) key. */
    SUBTRACT: string;
    /** The numpad decimal (.) key. */
    DECIMAL: string;
    /** The numpad divide (/) key. */
    DIVIDE: string;

    /** The F1 key. */
    F1: string;
    /** The F2 key. */
    F2: string;
    /** The F3 key. */
    F3: string;
    /** The F4 key. */
    F4: string;
    /** The F5 key. */
    F5: string;
    /** The F6 key. */
    F6: string;
    /** The F7 key. */
    F7: string;
    /** The F8 key. */
    F8: string;
    /** The F9 key. */
    F9: string;
    /** The F10 key. */
    F10: string;
    /** The F11 key. */
    F11: string;
    /** The F12 key. */
    F12: string;
    /** The meta (Windows) key. */
    META: string;
    /** The command (⌘) key. */
    COMMAND: string;
}

export type NightwatchPage = {
    [name: string]: () => EnhancedPageObject<any, any, any>;
} & {
    [name: string]: NightwatchPage;
};

export interface NightwatchAPI extends SharedCommands, WebDriverProtocol, NightwatchCustomCommands {
    baseURL: string;
    assert: NightwatchAssertions;
    expect: Expect;
    verify: NightwatchAssertions;

    page: NightwatchPage & NightwatchCustomPageObjects;

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

// tslint:disable-next-line:no-empty-interface
export interface NightwatchCustomCommands {}

// tslint:disable-next-line:no-empty-interface
export interface NightwatchCustomAssertions {}

// tslint:disable-next-line:no-empty-interface
export interface NightwatchCustomPageObjects {}

export interface NightwatchBrowser
    extends NightwatchAPI,
        NightwatchComponentTestingCommands,
        NightwatchCustomCommands {}

export interface NightwatchComponentTestingCommands {
    importScript(scriptPath: string, options: { scriptType: string; componentTyp: string }, callback: () => void): this;
    mountReactComponent(componentPath: string, props?: string | (() => void), callback?: () => void): this;
    mountVueComponent(componentPath: string, options?: any, callback?: () => void): this;
    launchComponentRenderer(): this;
}

// tslint:disable-next-line
export interface NightwatchElement extends WebElement {}

export type NightwatchTest = (browser?: NightwatchBrowser) => void;
export interface NightwatchTestFunctions {
    before?: NightwatchTestHook | undefined;
    after?: NightwatchTestHook | undefined;
    beforeEach?: NightwatchTestHook | undefined;
    afterEach?: NightwatchTestHook | undefined;
    '@tags'?: string | string[] | undefined;
    '@disabled'?: boolean | undefined;
    [key: string]: any;
}

export type NightwatchTestHook = GlobalNightwatchTestHookEach | GlobalNightwatchTestHook;

export type GlobalNightwatchTestHookEach = (browser: NightwatchBrowser, done: (err?: any) => void) => void;

export type GlobalNightwatchTestHook = (done: (err?: any) => void) => void;

export interface NightwatchTestHooks extends NightwatchGlobals {
    before?: GlobalNightwatchTestHook | undefined;
    after?: GlobalNightwatchTestHook | undefined;
    beforeEach?: GlobalNightwatchTestHookEach | undefined;
    afterEach?: GlobalNightwatchTestHookEach | undefined;
}

export function element(locator: string | ElementProperties | By | WebElement, options?: any): WebElement;

export type NightwatchTests = NightwatchTestFunctions | NightwatchTestHooks;

export class DescribeInstance {
    '[instance]': any;
    '[attributes]': {};
    '[client]': NightwatchClient;
    name(): string;
    tags(): string | string[];
    unitTest(): boolean;
    endSessionOnFail(): boolean;
    skipTestcasesOnFail(): boolean;
    disabled(): boolean;
    desiredCapabilities(): NightwatchDesiredCapabilities;
    page(): any;
    globals(): NightwatchGlobals;
    settings(): NightwatchOptions;
    argv(): any;
    timeout(value: number): void;
    waitForTimeout(value: number): number | void;
    waitForRetryInterval(value: number): number | void;
    retryInterval(value: number): void;
    retries(n: any): void;
    suiteRetries(n: any): void;
    define(name: any, value: any): any;
}

interface SuiteFunction {
    (title: string, fn?: (this: DescribeInstance) => void): this;
    only: ExclusiveSuiteFunction;
    skip: PendingSuiteFunction;
}

interface ExclusiveSuiteFunction {
    (title: string, fn?: (this: DescribeInstance) => void): this;
}

interface PendingSuiteFunction {
    (title: string, fn: (this: DescribeInstance) => void): this | void;
}

interface ExclusiveTestFunction {
    (fn: NormalFunc | AsyncFunc): this;
    (title: string, fn?: NormalFunc | AsyncFunc): this;
}

interface PendingTestFunction {
    (fn: NormalFunc | AsyncFunc): this;
    (title: string, fn?: NormalFunc | AsyncFunc): this;
}

type NormalFunc = (this: DescribeInstance) => any;
type AsyncFunc = (this: DescribeInstance) => PromiseLike<any>;
interface TestFunction {
    (fn: NormalFunc | AsyncFunc): this;
    (title: string, fn?: NormalFunc | AsyncFunc): this;
    only: ExclusiveTestFunction;
    skip: PendingTestFunction;
    retries(n: number): void;
}

export const describe: SuiteFunction;
export const xdescribe: PendingSuiteFunction;
export const context: SuiteFunction;
export const xcontext: PendingSuiteFunction;
export const test: TestFunction;
export const it: TestFunction;
export const xit: PendingTestFunction;
export const specify: TestFunction;
export const xspecify: PendingTestFunction;
export const before: GlobalNightwatchTestHook;
export const after: GlobalNightwatchTestHook;
export const beforeEach: GlobalNightwatchTestHookEach;
export const afterEach: GlobalNightwatchTestHookEach;
/**
 * Performs an assertion
 *
 */
export type NightwatchAssert = (
    passed: boolean,
    receivedValue?: any,
    expectedValue?: any,
    message?: string,
    abortOnFailure?: boolean,
    originalStackTrace?: string,
) => void;

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
    client: NightwatchClient;
}

export interface NightwatchClient {
    api: NightwatchAPI;
    locateStrategy: LocateStrategy;
    options: NightwatchOptions;
    // TODO: Add reporter
    // reporter: reporte
    sessionID: string;
    settings: NightwatchOptions;
}

export interface CreateClientParams {
    browserName: string | null;
    headless?: boolean;
    silent?: boolean;
    output?: boolean;
    useAsync?: boolean;
    env?: string;
    timeout?: number;
    parallel?: boolean;
    reporter?: null;
    globals?: any;
    devtools?: boolean;
    debug?: boolean;
    enable_global_apis?: boolean;
    config?: string;
}

export interface Nightwatch {
    cli(callback: any): this;
    client(settings: NightwatchOptions, reporter?: any, argv?: {}): this;
    createClient({
        headless,
        silent,
        output,
        useAsync,
        env,
        timeout,
        parallel,
        reporter,
        browserName,
        globals,
        devtools,
        debug,
        enable_global_apis,
        config,
    }: CreateClientParams): this;
    cliRunner(argv?: {}): this;
    initClient(opts: any): this;
    runner(argv?: {}, done?: () => void, settings?: {}): this;
    runTests(testSource: string | string[], settings?: any, ...args: any[]): any;
    api: NightwatchAPI;
    assert: NightwatchAssertions;
    expect: Expect;
    verify: NightwatchAssertions;
}

export type LocateStrategy =
    | 'class name'
    | 'css selector'
    | 'id'
    | 'name'
    | 'link text'
    | 'partial link text'
    | 'tag name'
    | 'xpath';

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

export type EnhancedSectionInstance<
    Commands = {},
    Elements = {},
    Sections extends EnhancedPageObjectSections = {},
> = EnhancedPageObject<Commands, Elements, Sections>;

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
export type EnhancedPageObject<
    Commands = {},
    Elements = {},
    Sections extends EnhancedPageObjectSections = {},
> = Nightwatch &
    SharedCommands &
    NightwatchCustomCommands &
    Commands & {
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
    path: string | undefined;
    domain: string | undefined;
    secure: boolean | undefined;
    expiry: Date | number | undefined;
    httpOnly: boolean | undefined;
}

export interface SharedCommands extends ClientCommands, ElementCommands {}

export type windowSizeAndPosition = { offsetX: number; offsetY: number } | { height: number; width: number };
export interface ClientCommands {
    /**
     * Close the current window. This can be useful when you're working with multiple windows open (e.g. an OAuth login).
     * Uses `window` protocol command.
     *
     * @example
     * this.demoTest = function () {
     *   browser.closeWindow();
     * };
     *
     * @see window
     */
    closeWindow(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Delete the cookie with the given name. This command is a no-op if there is no such cookie visible to the current page.
     *
     * @example
     * this.demoTest = function() {
     *   browser.deleteCookie("test_cookie", function() {
     *     // do something more in here
     *   });
     * }
     *
     * @see cookie
     */
    deleteCookie(
        cookieName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): this;

    /**
     * Delete all cookies visible to the current page.
     *
     * @example
     * this.demoTest = function() {
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
     * this.demoTest = function () {
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
     * this.demoTest = function() {
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
     * this.demoTest = function() {
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
     * this.demoTest = function() {
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
     * this.demoTest = function() {
     *   this.getLogTypes(function(typesArray) {
     *     console.log(typesArray);
     *   });
     * };
     *
     * @see sessionLogTypes
     */
    getLogTypes(
        callback?: (
            this: NightwatchAPI,
            result: Array<'client' | 'driver' | 'browser' | 'server' | 'performance'>,
        ) => void,
    ): this;

    /**
     * Returns the title of the current page. Uses title protocol command.
     *
     * @example
     *  this.demoTest = function () {
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
     * this.demoTest = function () {
     *   browser.init();
     * };
     *
     * @see url
     */
    init(url?: string): this;

    /**
     * Utility command to load an external script into the page specified by url.
     *
     * @example
     * this.demoTest = function() {
     *   this.injectScript("{script-url}", function() {
     *     // we're all done here.
     *   });
     * };
     */
    injectScript(
        scriptUrl: string,
        id?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Utility command to test if the log type is available.
     *
     * @example
     * this.demoTest = function() {
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
     *  this.demoTest = function () {
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
     * this.demoTest = function () {
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
     * this.demoTest = function () {
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
     *     .perform(function(done) {
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
            | (() => undefined | Promise<any>)
            | ((done: () => void) => void)
            | ((client: NightwatchAPI, done: () => void) => void),
    ): this;

    /**
     * Resizes the current window.
     *
     * @example
     *  this.demoTest = function () {
     *    browser.resizeWindow(1000, 800);
     *  };
     *
     * @see windowSize
     */
    resizeWindow(
        width: number,
        height: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Take a screenshot of the current page and saves it as the given filename.
     *
     * @example
     *  this.demoTest = function (  ) {
     *    browser.saveScreenshot('/path/to/fileName.png');
     *  };
     *
     * @see screenshot
     */
    saveScreenshot(
        fileName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Set a cookie, specified as a cookie JSON object, as defined [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object).
     *
     * Uses `cookie` protocol command.
     *
     * @example
     * this.demoTest = function() {
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
     *  this.demoTest = function () {
     *    browser.setWindowPosition(0, 0);
     *  };
     *
     * @see windowPosition
     */
    setWindowPosition(
        offsetX: number,
        offsetY: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Change the [window rect](https://w3c.github.io/webdriver/#dfn-window-rect). This is defined as a dictionary of the `screenX`, `screenY`, `outerWidth` and `outerHeight` attributes of the window.
     *
     * Its JSON representation is the following:
     * - `x` - window's screenX attribute;
     * - `y` - window's screenY attribute;
     * - `width` - outerWidth attribute;
     * - `height` - outerHeight attribute.
     *
     * All attributes are in in CSS pixels. To change the window react, you can either specify `width` and `height`, `x` and `y` or all properties together.
     *
     * @example
     * module.exports = {
     *   'demo test .setWindowRect()': function() {
     *
     *      // Change the screenX and screenY attributes of the window rect.
     *      browser.setWindowRect({x: 500, y: 500});
     *
     *      // Change the width and height attributes of the window rect.
     *      browser.setWindowRect({width: 600, height: 300});
     *
     *      // Retrieve the attributes
     *      browser.setWindowRect(function(result) {
     *        console.log(result.value);
     *      });
     *   },
     *
     *   'setWindowRect ES6 demo test': async function() {
     *      await browser.setWindowRect({
     *        width: 600,
     *        height: 300,
     *        x: 100,
     *        y: 100
     *      });
     *   }
     * }
     *
     * @see windowRect
     */
    setWindowRect(
        options: windowSizeAndPosition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Sets the current window position.
     *
     * @example
     *  this.demoTest = function () {
     *    browser.setWindowPosition(0, 0);
     *  };
     *
     * @see windowSize
     *
     */
    setWindowSize(
        width: number,
        height: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute.
     *
     * To find out the window handle use `windowHandles` command
     *
     * @example
     *  this.demoTest = function () {
     *    browser.windowHandles(function(result) {
     *      var handle = result.value[0];
     *      browser.switchWindow(handle);
     *    });
     *  };
     *
     *  this.demoTestAsync = async function () {
     *    const result = browser.windowHandles();
     *    var handle = result.value[0];
     *    browser.switchWindow(handle);
     *  };
     *
     * @see window
     */
    switchWindow(
        handleOrName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Change or get the [window rect](https://w3c.github.io/webdriver/#dfn-window-rect).
     * This is defined as a dictionary of the `screenX`, `screenY`, `outerWidth` and `outerHeight` attributes of the window.
     *
     * Its JSON representation is the following:
     * - `x` - window's screenX attribute;
     * - `y` - window's screenY attribute;
     * - `width` - outerWidth attribute;
     * - `height` - outerHeight attribute.
     *
     * All attributes are in in CSS pixels. To change the window react, you can either specify `width` and `height`, `x` and `y` or all properties together.
     *
     * @example
     * module.exports = {
     *   'demo test .getWindowRect()': function() {
     *      // Retrieve the attributes
     *      browser.getWindowRect(function(value) {
     *        console.log(value);
     *      });
     *   },
     *
     *   'getWindowRect ES6 demo test': async function() {
     *      const resultValue = await browser.getWindowRect();
     *      console.log('result value', resultValue);
     *   }
     * }
     *
     *  @see windowRect
     */
    getWindowRect(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ x: number; y: number; width: number; height: number }>,
        ) => void,
    ): this;

    /**
     * Retrieves the current window size.
     *
     * For clients which are compatible with the [W3C Webdriver API](https://w3c.github.io/webdriver/), `getWindowSize` is an alias of `getWindowRect`.
     *
     * The `getWindowRect` command returns both dimensions and position of the window, using the `windowRect` protocol command.
     *
     * @example
     * module.exports = {
     *   'demo test .getWindowSize()': function() {
     *      // Retrieve the attributes
     *      browser.getWindowSize(function(value) {
     *        console.log(value);
     *      });
     *   },
     *
     *   'getWindowSize ES6 demo test': async function(browser) {
     *      const value = await browser.getWindowSize();
     *      console.log('value', value);
     *   }
     * }
     *
     */
    getWindowSize(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ x: number; y: number; width: number; height: number }>,
        ) => void,
    ): this;

    /**
     * Retrieves the current window position.
     *
     * For clients which are compatible with the [W3C Webdriver API](https://w3c.github.io/webdriver/), `getWindowPosition` is an alias of `getWindowRect`.
     *
     * The `getWindowRect` command returns both dimensions and position of the window, using the `windowRect` protocol command.
     *
     * @example
     * module.exports = {
     *   'demo test .getWindowPosition()': function(browser) {
     *      // Retrieve the attributes
     *      browser.getWindowPosition(function(value) {
     *        console.log(value);
     *      });
     *   },
     *
     *   'getWindowPosition ES6 demo test': async function(browser) {
     *      const value = await browser.getWindowPosition();
     *      console.log('value', value);
     *   }
     * }
     *
     * @see windowRect
     */
    getWindowPosition(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void,
    ): this;

    /**
     * Returns the page source. Uses pageSource protocol command.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.pageSource(function(pageSource) {
     *      console.log(pageSource);
     *    });
     *  };
     *
     * @see pageSource
     */
    pageSource(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Convenience command that adds the specified hash (i.e. url fragment) to the current value of the `launch_url` as set in `nightwatch.json`.
     *
     * @example
     * this.demoTest = function () {
     *   browser.urlHash('#hashvalue');
     *   // or
     *   browser.urlHash('hashvalue');
     * };
     *
     * @see url
     */
    urlHash(hash: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Sets the locate strategy for selectors to `css selector`, therefore every following selector needs to be specified as css.
     *
     * @example
     * this.demoTest = function () {
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
     * this.demoTest = function () {
     *   browser
     *     .useXpath() // every selector now must be xpath
     *     .click("//tr[@data-recordid]/span[text()='Search Text']");
     * };
     */
    useXpath(callback?: (this: NightwatchAPI) => void): this;
}

export interface ElementCommands {
    /**
     * Clear a textarea or a text input element's value.
     * Starting with v1.1 `clearValue()` will wait for the element to be present (until the specified timeout).
     *
     * If the element is not found, an error is thrown which will cause the test to fail.
     * Starting with `v1.2` you can suppress element not found errors by specifying the `suppressNotFoundErrors` flag.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.clearValue('#login input[type=text]');
     *
     *     browser.clearValue('#login input[type=text]', function(result) {
     *       console.log('clearValue result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.clearValue('css selector', '#login input[type=text]');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.clearValue({
     *       selector: '#login input[type=text]',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.clearValue({
     *       selector: '#login input[type=text]',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   }
     * }
     *
     * @see elementIdClear
     */
    clearValue(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): this;
    clearValue(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): this;

    /**
     * Simulates a click event on the given DOM element.
     * The element is scrolled into view if it is not already pointer-interactable.
     * See the WebDriver specification for <a href="https://www.w3.org/TR/webdriver/#element-interactability" target="_blank">element interactability</a>.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.click('#main ul li a.first');
     *
     *     browser.click('#main ul li a.first', function(result) {
     *       console.log('Click result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.click('css selector', '#main ul li a.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.click({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.click({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.click('#main ul li a.first');
     *     console.log('Click result', result);
     *   }
     * }
     *
     *
     * @see elementIdClick
     */
    click(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): this;
    click(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): this;

    /**
     * Retrieve the value of an attribute for a given DOM element.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getAttribute('#main ul li a.first', 'href', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getAttribute('css selector', '#main ul li a.first', 'href', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getAttribute({
     *       selector: '#main ul li a.first',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, 'href', function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getAttribute('#main ul li a.first', 'href');
     *     console.log('attribute', result);
     *   }
     * }
     *
     * @see elementIdAttribute
     */
    getAttribute(
        selector: string | ElementProperties,
        attribute: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): this;
    getAttribute(
        using: LocateStrategy,
        selector: string | ElementProperties,
        attribute: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): this;

    /**
     * Retrieve the value of a css property for a given DOM element.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getCssProperty('#main ul li a.first', 'display', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getCssProperty('css selector', '#main ul li a.first', 'display', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getCssProperty({
     *       selector: '#main ul li a.first',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, 'display', function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getCssProperty('#main ul li a.first', 'display');
     *     console.log('display', result);
     *   }
     * }
     *
     * @see elementIdCssProperty
     */
    getCssProperty(
        selector: string | ElementProperties,
        cssProperty: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;
    getCssProperty(
        using: LocateStrategy,
        selector: string | ElementProperties,
        cssProperty: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Determine an element's size in pixels. For W3C Webdriver compatible clients (such as GeckoDriver), this command is equivalent to `getLocation` and both return
     * the dimensions and coordinates of the given element:
     * - x: X axis position of the top-left corner of the element, in CSS pixels
     * - y: Y axis position of the top-left corner of the element, in CSS pixels
     * - height: Height of the element’s bounding rectangle in CSS pixels;
     * - width: Width of the web element’s bounding rectangle in CSS pixels.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getElementSize('#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getElementSize('css selector', '#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getElementSize({
     *       selector: '#login',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getElementSize('#login');
     *     console.log('classList', result);
     *   }
     * }
     *
     * @see elementIdSize
     */
    getElementSize(
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ width: number; height: number; x: number; y: number }>,
        ) => void,
    ): this;
    getElementSize(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ width: number; height: number; x: number; y: number }>,
        ) => void,
    ): this;

    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page. The element's coordinates are returned as a JSON object with x and y properties.
     *
     * For W3C Webdriver compatible clients (such as GeckoDriver), this command is equivalent to `getElementSize` and both return
     * the dimensions and coordinates of the given element:
     * - x: X axis position of the top-left corner of the element, in CSS pixels
     * - y: Y axis position of the top-left corner of the element, in CSS pixels
     * - height: Height of the element’s bounding rectangle in CSS pixels;
     * - width: Width of the web element’s bounding rectangle in CSS pixels.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getLocation('#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getLocation('css selector', '#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getLocation({
     *       selector: '#login',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getLocation('#login');
     *     console.log('location', result);
     *   }
     * }
     *
     * @see elementIdLocation
     */
    getLocation(
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ x: number; y: number; width: number; height: number }>,
        ) => void,
    ): this;
    getLocation(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ x: number; y: number; width: number; height: number }>,
        ) => void,
    ): this;

    /**
     * Determine an element's location on the screen once it has been scrolled into view. Uses `elementIdLocationInView` protocol command.
     *
     * @example
     * this.demoTest = function () {
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
    getLocationInView(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void,
    ): this;
    getLocationInView(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void,
    ): this;

    /**
     * Query for an element's tag name.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getTagName('#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getTagName('css selector', '#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getTagName({
     *       selector: '#login',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getTagName('#login');
     *     console.log('tagName', result);
     *   }
     * }
     *
     * @see elementIdName
     */
    getTagName(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;
    getTagName(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Returns the visible text for the element.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getText('#main ul li a.first', function(result) {
     *       this.assert.equal(typeof result, 'object);
     *       this.assert.strictEqual(result.status, 0); // only when using Selenium / JSONWire
     *       this.assert.equal(result.value, 'nightwatchjs.org');
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getText('css selector', '#main ul li a.first', function(result) {
     *       console.log('getText result', result.value);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getText({
     *       selector: '#main ul li a',
     *       index: 1
     *     }, function(result) {
     *       console.log('getText result', result.value);
     *     });
     *
     *     browser.getText({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     }, function(result) {
     *       console.log('getText result', result.value);
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.getText('#main ul li a.first');
     *     console.log('getText result', result);
     *   }
     * }
     *
     * @see elementIdText
     */
    getText(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;
    getText(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Returns a form element current value.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getValue('#login input[type=text]', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getValue('css selector', '#login input[type=text]', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getValue({
     *       selector: '#login input[type=text]',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.getValue('#login input[type=text]');
     *     console.log('Value', result);
     *   }
     * }
     *
     * @see elementIdValue
     */
    getValue(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;
    getValue(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Determine if an element is currently displayed.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.isVisible('#main ul li a.first', function(result) {
     *       this.assert.equal(typeof result, "object");
     *       this.assert.equal(result.status, 0);
     *       this.assert.equal(result.value, true);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.isVisible('css selector', '#main ul li a.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.isVisible({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.isVisible({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.isVisible('#main ul li a.first');
     *     console.log('isVisible result', result);
     *   }
     * }
     *
     * @see elementIdDisplayed
     */
    isVisible(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;
    isVisible(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

    /**
     * Move the mouse by an offset of the specified element. If an element is provided but no offset, the mouse will be moved to the center of the element.
     * If the element is not visible, it will be scrolled into view.
     *
     * @example
     * this.demoTest = function () {
     *   browser.moveToElement('#main', 10, 10);
     * };
     *
     * @see moveTo
     */
    moveToElement(
        selector: string | ElementProperties,
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    moveToElement(
        using: LocateStrategy,
        selector: string | ElementProperties,
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
     * this.demoTest = function () {
     *   browser.setValue('input[type=text]', 'nightwatch');
     * };
     * //
     * // send some text to an input and hit enter.
     * this.demoTest = function () {
     *   browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     *
     * @see elementIdValue
     */
    setValue(
        selector: string | ElementProperties,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    setValue(
        using: LocateStrategy,
        selector: string | ElementProperties,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    /**
     * Alias for `setValue`.
     *
     * Types a key sequence on the DOM element.
     *  Can be used to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
     *
     *
     * An object map with available keys and their respective UTF-8 characters,
     * as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `browser.Keys`.
     *
     * @example
     * // send some simple text to an input
     * this.demoTest = function () {
     *   browser.sendKeys('input[type=text]', 'nightwatch');
     * };
     * //
     * // send some text to an input and hit enter.
     * this.demoTest = function () {
     *   browser.sendKeys('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     *
     * @see setValue
     */
    sendKeys: SharedCommands['setValue'];

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. Uses `submit` protocol command.
     *
     * @example
     * this.demoTest = function () {
     *   browser.submitForm('form.login');
     * };
     *
     * @see submit
     */
    submitForm(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    submitForm(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Opposite of `waitForElementPresent`. Waits a given time in milliseconds (default 5000ms)
     * for an element to be not present (i.e. removed) in the page before performing
     * any other commands or assertions.
     * If the element is still present after the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * module.exports = {
     *  'demo Test': function() {
     *     // with default implicit timeout of 5000ms (can be overwritten in settings under 'globals.waitForConditionTimeout')
     *     browser.waitForElementNotPresent('#dialog');
     *
     *     // specify the locate strategy (css selector/xpath) as the first argument
     *     browser.waitForElementNotPresent('css selector', '#dialog');
     *
     *     // with explicit timeout (in milliseconds)
     *     browser.waitForElementNotPresent('#dialog', 1000);
     *
     *     // continue if failed
     *     browser.waitForElementNotPresent('#dialog', 1000, false);
     *
     *     // with callback
     *     browser.waitForElementNotPresent('#dialog', 1000, function() {
     *       // do something while we're here
     *     });
     *
     *     // with custom output message - the locate strategy is required
     *     browser.waitForElementNotPresent('css selector', '#dialog', 'The dialog container is removed.');
     *
     *     // with custom Spanish message
     *     browser.waitForElementNotPresent('#dialog', 1000, 'elemento %s no era presente en %d ms');
     *
     *     // many combinations possible - the message is always the last argument
     *     browser.waitForElementNotPresent('#dialog', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
     *   },
     *
     *   'demo Test with selector objects': function() {
     *      browser.waitForElementNotPresent({
     *        selector: '#dialog',
     *        timeout: 1000
     *      });
     *
     *      browser.waitForElementNotPresent({
     *        selector: '#dialog',
     *        locateStrategy: 'css selector'
     *      }, 'Custom output message');
     *
     *      browser.waitForElementNotPresent({
     *        selector: '.container',
     *        index: 2,
     *        retryInterval: 100,
     *        abortOnFailure: true
     *      });
     *   }
     *
     *   'page object demo Test': function () {
     *      var nightwatch = browser.page.nightwatch();
     *      nightwatch
     *        .navigate()
     *        .assert.titleContains('Nightwatch.js');
     *
     *      nightwatch.api.waitForElementNotPresent('@dialogContainer', function(result) {
     *        console.log(result);
     *      });
     *   }
     * }
     *
     * @see waitForElementPresent
     * @since v0.4.0
     */
    waitForElementNotPresent(
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;
    waitForElementNotPresent(
        using: LocateStrategy,
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;

    /**
     * Opposite of `waitForElementVisible`. Waits a given time in milliseconds (default 5000ms)
     * for an element to be not visible (i.e. hidden but existing) in the page before
     * performing any other commands or assertions.
     * If the element fails to be hidden in the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * module.exports = {
     *  'demo Test': function() {
     *     // with default implicit timeout of 5000ms (can be overwritten in settings under 'globals.waitForConditionTimeout')
     *     browser.waitForElementNotVisible('#dialog');
     *
     *     // specify the locate strategy (css selector/xpath) as the first argument
     *     browser.waitForElementNotVisible('css selector', '#dialog');
     *
     *     // with explicit timeout (in milliseconds)
     *     browser.waitForElementNotVisible('#dialog', 1000);
     *
     *     // continue if failed
     *     browser.waitForElementNotVisible('#dialog', 1000, false);
     *
     *     // with callback
     *     browser.waitForElementNotVisible('#dialog', 1000, function() {
     *       // do something while we're here
     *     });
     *
     *     // with custom output message - the locate strategy is required
     *     browser.waitForElementNotVisible('css selector', '#dialog', 'The dialog container is not visible.');
     *
     *     // with custom Spanish message
     *     browser.waitForElementNotVisible('#dialog', 1000, 'elemento %s no era visible en %d ms');
     *
     *     // many combinations possible - the message is always the last argument
     *     browser.waitForElementNotVisible('#dialog', 1000, false, function() {}, 'elemento %s no era visible en %d ms');
     *   },
     *
     *   'demo Test with selector objects': function() {
     *      browser.waitForElementNotVisible({
     *        selector: '#dialog',
     *        timeout: 1000
     *      });
     *
     *      browser.waitForElementNotVisible({
     *        selector: '#dialog',
     *        locateStrategy: 'css selector'
     *      }, 'Custom output message');
     *
     *      browser.waitForElementNotVisible({
     *        selector: '.container',
     *        index: 2,
     *        retryInterval: 100,
     *        abortOnFailure: true
     *      });
     *   }
     *
     *   'page object demo Test': function () {
     *      var nightwatch = browser.page.nightwatch();
     *      nightwatch
     *        .navigate()
     *        .assert.titleContains('Nightwatch.js');
     *
     *      nightwatch.api.waitForElementNotVisible('@mainDialog', function(result) {
     *        console.log(result);
     *      });
     *   }
     * }
     *
     * @since v0.4.0
     * @see waitForElementVisible
     */
    waitForElementNotVisible(
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;
    waitForElementNotVisible(
        using: LocateStrategy,
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;

    /**
     * Waits a given time in milliseconds (default 5000ms) for an element to be present in the page before performing any other commands or assertions.
     * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     * Similarly, the default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * module.exports = {
     *  'demo Test': function() {
     *     // with default implicit timeout of 5000ms (can be overwritten in settings under 'globals.waitForConditionTimeout')
     *     browser.waitForElementPresent('#index-container');
     *
     *     // specify the locate strategy (css selector/xpath) as the first argument
     *     browser.waitForElementPresent('css selector', '#index-container');
     *
     *     // with explicit timeout (in milliseconds)
     *     browser.waitForElementPresent('#index-container', 1000);
     *
     *     // continue if failed
     *     browser.waitForElementPresent('#index-container', 1000, false);
     *
     *     // with callback
     *     browser.waitForElementPresent('#index-container', 1000, function() {
     *       // do something while we're here
     *     });
     *
     *     // with custom output message - the locate strategy is required
     *     browser.waitForElementPresent('css selector', '#index-container', 'The index container is found.');
     *
     *     // with custom Spanish message
     *     browser.waitForElementPresent('#index-container', 1000, 'elemento %s no era presente en %d ms');
     *
     *     // many combinations possible - the message is always the last argument
     *     browser.waitForElementPresent('#index-container', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
     *   },
     *
     *   'demo Test with selector objects': function() {
     *      browser.waitForElementPresent({
     *        selector: '#index-container',
     *        timeout: 1000
     *      });
     *
     *      browser.waitForElementPresent({
     *        selector: '#index-container',
     *        locateStrategy: 'css selector'
     *      }, 'Custom output message');
     *
     *      browser.waitForElementPresent({
     *        selector: '.container',
     *        index: 2,
     *        retryInterval: 100,
     *        abortOnFailure: true
     *      });
     *   }
     *
     *   'page object demo Test': function () {
     *      var nightwatch = browser.page.nightwatch();
     *      nightwatch
     *        .navigate()
     *        .assert.titleContains('Nightwatch.js');
     *
     *      nightwatch.api.waitForElementPresent('@featuresList', function(result) {
     *        console.log(result);
     *      });
     *   }
     * }
     *
     */
    waitForElementPresent(
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;
    waitForElementPresent(
        using: LocateStrategy,
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;

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
    waitForElementVisible(
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;

    waitForElementVisible(
        using: LocateStrategy,
        selector: string | ElementProperties,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
        message?: string,
    ): this;

    /**
     * Returns the computed WAI-ARIA label of an element.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getAccessibleName('*[name="search"]', function(result) {
     *       this.assert.equal(typeof result, 'object);
     *       this.assert.equal(result.value, 'search input');
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getAccessibleName('css selector', '*[name="search"]', function(result) {
     *       console.log('getAccessibleName result', result.value);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getAccessibleName({
     *       selector: '*[name="search"]',
     *       index: 1
     *     }, function(result) {
     *       console.log('getAccessibleName result', result.value);
     *     });
     *
     *     browser.getAccessibleName({
     *       selector: '*[name="search"]',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     }, function(result) {
     *       console.log('getAccessibleName result', result.value);
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.getAccessibleName('*[name="search"]');
     *     console.log('getAccessibleName result', result);
     *   }
     * }
     *
     */
    getAccessibleName(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;
    getAccessibleName(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Returns the computed WAI-ARIA role of an element.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.getAriaRole('*[name="search"]', function(result) {
     *       this.assert.equal(typeof result, 'object');
     *       this.assert.equal(result.value, 'combobox');
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getAriaRole('css selector', '*[name="search"]', function(result) {
     *       console.log('getAriaRole result', result.value);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getAriaRole({
     *       selector: '*[name="search"]',
     *       index: 1
     *     }, function(result) {
     *       console.log('getAriaRole result', result.value);
     *     });
     *
     *     browser.getAriaRole({
     *       selector: '*[name="search"]',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     }, function(result) {
     *       console.log('getAriaRole result', result.value);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getAriaRole('*[name="search"]');
     *     console.log('getAriaRole result', result);
     *   }
     * }
     *
     */
    getAriaRole(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;
    getAriaRole(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Determine an element's size in pixels. For W3C Webdriver compatible clients (such as GeckoDriver), this command is equivalent to `getLocation` and both return
     * the dimensions and coordinates of the given element:
     * - x: X axis position of the top-left corner of the element, in CSS pixels
     * - y: Y axis position of the top-left corner of the element, in CSS pixels
     * - height: Height of the element’s bounding rectangle in CSS pixels;
     * - width: Width of the web element’s bounding rectangle in CSS pixels.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.getElementSize('#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getElementSize('css selector', '#login', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getElementSize({
     *       selector: '#login',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.getElementSize('#login');
     *     console.log('classList', result);
     *   }
     * }
     */
    getElementRect(
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ height: number; width: number; x: number; y: number }>,
        ) => void,
    ): this;
    getElementRect(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ height: number; width: number; x: number; y: number }>,
        ) => void,
    ): this;

    /**
     *
     * Uploads file to an element using absolute file path.
     *
     *
     * @example
     * // send a file to for upload to a field.
     * this.demoTest = function (browser) {
     *   browser.uploadFile('#myFile', '/path/file.pdf');
     * };
     *
     *
     */
    uploadFile(
        selector: string | ElementProperties,
        filePath: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    uploadFile(
        using: LocateStrategy,
        selector: string | ElementProperties,
        filePath: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Drag an element to the given position or destination element.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.dragAndDrop('#main', {x: 100, y:100}):
     *
     *
     *
     *  //using webElement as a destination
     *   demoTestAsync: async function(browser) {
     *     const destination = await browser.findElement('#upload');
     *     browser.dragAndDrop('#main', destination.getId());
     *   }
     * }
     *
     */
    dragAndDrop(
        selector: string | ElementProperties,
        destination: NightwatchElement | { x: number; y: number },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    dragAndDrop(
        using: LocateStrategy,
        selector: string | ElementProperties,
        destination: NightwatchElement | { x: number; y: number },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Search for an elements on the page, starting from the document root. The located element will be returned as web element JSON object (with an added .getId() convenience method).
     * First argument is the element selector, either specified as a string or as an object (with 'selector' and 'locateStrategy' properties).
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElement = await browser.findElement('.features-container li:first-child');
     *
     *     console.log('Element Id:', resultElement.getId());
     *   },
     *
     *
     */
    findElement(
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ value: WebElement; status: number; WebdriverElementId: WebElement }>,
        ) => void,
    ): WebElementPromise;
    findElement(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ value: WebElement; status: number; WebdriverElementId: WebElement }>,
        ) => void,
    ): WebElementPromise;

    /**
     * Search for multiple elements on the page, starting from the document root. The located elements will be returned as web element JSON objects (with an added .getId() convenience method).
     * First argument is the element selector, either specified as a string or as an object (with 'selector' and 'locateStrategy' properties).
     *
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElements = await browser.findElements('.features-container li');
     *
     *     resultElements.forEach(item => console.log('Element Id:', item.getId()));
     *   },
     *
     */
    findElements(
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{
                value: WebElement[];
                status: number;
                WebdriverElementId: WebElement;
            }>,
        ) => void,
    ): WebElement[];
    findElements(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{
                value: WebElement[];
                status: number;
                WebdriverElementId: WebElement;
            }>,
        ) => void,
    ): WebElement[];

    /**
     * Retrieve the value of a specified DOM property for the given element.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.getElementProperty('#login input[type=text]', 'classList', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.getElementProperty('css selector', '#login input[type=text]', 'classList', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.getElementProperty({
     *       selector: '#login input[type=text]',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, 'classList', function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.getElementProperty('#login input[type=text]', 'classList');
     *     console.log('classList', result);
     *   }
     * }
     *
     */
    getElementProperty(
        selector: string | ElementProperties,
        property: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void,
    ): this;
    getElementProperty(
        using: LocateStrategy,
        selector: string | ElementProperties,
        property: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void,
    ): this;

    /**
     *
     * Determines if an element is enabled, as indicated by the 'disabled' attribute.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.isEnabled('#main select option.first', function(result) {
     *       this.assert.equal(typeof result, "object");
     *       this.assert.equal(result.status, 0);
     *       this.assert.equal(result.value, true);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.isEnabled('css selector', '#main select option.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.isEnabled({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.isEnabled({
     *       selector: '#main select option.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.isEnabled('#main select option.first');
     *     console.log('isVisible result', result);
     *   }
     * }
     */
    isEnabled(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;
    isEnabled(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

    /**
     *
     * Determines if an element is selected.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.isSelected('#main select option.first', function(result) {
     *       this.assert.equal(typeof result, "object");
     *       this.assert.equal(result.status, 0);
     *       this.assert.equal(result.value, true);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.isSelected('css selector', '#main select option.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.isSelected({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.isSelected({
     *       selector: '#main select option.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.isSelected('#main select option.first');
     *     console.log('isVisible result', result);
     *   }
     * }
     */
    isSelected(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;
    isSelected(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

    /**
     *
     * Set the value of a specified DOM attribute for the given element.
     * For all the available DOM attributes, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.setAttribute('#login input[type=text]', 'disabled', 'true', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.setAttribute('css selector', '#login input[type=text]', 'disabled', 'true', function(result) {
     *       console.log('result', result);
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.setAttribute({
     *       selector: '#login input[type=text]',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     }, 'disabled', 'true', function(result) {
     *       console.log('result', result);
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     await browser.setAttribute('#login input[type=text]', 'disabled', 'true');
     *   }
     * }
     */
    setAttribute(
        selector: string | ElementProperties,
        attribute: string,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    setAttribute(
        using: LocateStrategy,
        selector: string | ElementProperties,
        attribute: string,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     *
     * An alias of "setValue" command, but hides the content from the nightwatch logs.
     *
     * <div class="alert alert-warning"><strong>setValue/setPassword</strong> do not clear
     * the existing value of the element. To do so, use the <strong>clearValue()</strong> command.</div>
     *
     * An object map with available keys and their respective UTF-8 characters,
     *  as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types), is loaded onto the main Nightwatch instance as `browser.Keys`.
     *
     * @example
     * // send some simple text to an input
     * this.demoTest = function (browser) {
     *   browser.setPassword('input[type=text]', 'nightwatch');
     * };
     * //
     * // send some text to an input and hit enter.
     * this.demoTest = function (browser) {
     *   browser.setPassword('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     *
     */
    setPassword(
        selector: string | ElementProperties,
        inputValue: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    setPassword(
        using: LocateStrategy,
        selector: string | ElementProperties,
        inputValue: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     *
     * Take a screenshot of the visible region encompassed by this element's bounding rectangle.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.takeElementScreenshot('#main', function (imageData, err) {
     *       require('fs').writeFile('out.png', imageData.value, 'base64', function (err) {
     *         console.log(err);
     *       });
     *     });
     *
     *     // with explicit locate strategy
     *     browser.takeElementScreenshot('css selector', '#main', function(imageData, err) {
     *       require('fs').writeFile('out.png', imageData.value, 'base64', function (err) {
     *         console.log(err);
     *       });
     *     });
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.takeElementScreenshot({
     *       selector: '#main ul li a',
     *       index: 1
     *     }, function(imageData, err) {
     *       require('fs').writeFile('out.png', imageData.value, 'base64', function (err) {
     *         console.log(err);
     *       });
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const data = await browser.takeElementScreenshot('#main');
     *     require('fs').writeFile('out.png', data, 'base64');
     *   }
     * }
     *
     */
    takeElementScreenshot(
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => string,
    ): this;
    takeElementScreenshot(
        using: LocateStrategy,
        selector: string | ElementProperties,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => string,
    ): this;
}

export interface WebDriverProtocol
    extends WebDriverProtocolSessions,
        WebDriverProtocolNavigation,
        WebDriverProtocolCommandContexts,
        WebDriverProtocolElements,
        WebDriverProtocolElementState,
        WebDriverProtocolElementInteraction,
        WebDriverProtocolElementLocation,
        WebDriverProtocolDocumentHandling,
        WebDriverProtocolCookies,
        WebDriverProtocolUserActions,
        WebDriverProtocolUserPrompts,
        WebDriverProtocolScreenCapture,
        WebDriverProtocolMobileRelated {}

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
    session(
        action?: string,
        sessionId?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Record<string, any>>) => void,
    ): this;

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
    sessions(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<Record<string, any>>>) => void,
    ): this;

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
    timeouts(
        typeOfOperation: string,
        ms: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    timeouts(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

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
    timeoutsAsyncScript(
        ms: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
    timeoutsImplicitWait(
        ms: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Query the server's current status.
     */
    status(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{
                build: { version: string; revision: string; time: string };
                status: { arch: string; name: string; version: string };
            }>,
        ) => void,
    ): this;

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
    sessionLogTypes(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<Array<'client' | 'driver' | 'browser' | 'server'>>,
        ) => void,
    ): this;
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
    url(url?: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;
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
    window(
        method: string,
        handleOrName?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
    windowMaximize(
        handleOrName?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
    windowPosition(
        windowHandle: string,
        offsetX: number,
        offsetY: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    windowPosition(
        windowHandle: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void,
    ): this;

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
    windowSize(
        windowHandle: string,
        width: number,
        height: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    windowSize(
        windowHandle: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ width: number; height: number }>) => void,
    ): this;

    /**
     *
     * Change or get the [window rect](https://w3c.github.io/webdriver/#dfn-window-rect).
     * This is defined as a dictionary of the `screenX`, `screenY`, `outerWidth` and `outerHeight` attributes of the window.
     *
     * Its JSON representation is the following:
     * - `x` - window's screenX attribute;
     * - `y` - window's screenY attribute;
     * - `width` - outerWidth attribute;
     * - `height` - outerHeight attribute.
     *
     * All attributes are in in CSS pixels. To change the window react, you can either specify `width` and `height`, `x` and `y` or all properties together.
     *
     * @example
     * module.exports = {
     *   'demo test .windowRect()': function(browser) {
     *
     *      // Change the screenX and screenY attributes of the window rect.
     *      browser.windowRect({x: 500, y: 500});
     *
     *      // Change the width and height attributes of the window rect.
     *      browser.windowRect({width: 600, height: 300});
     *
     *      // Retrieve the attributes
     *      browser.windowRect(function(result) {
     *        console.log(result.value);
     *      });
     *   },
     *
     *   'windowRect ES6 demo test': async function(browser) {
     *      const resultValue = await browser.windowRect();
     *      console.log('result value', resultValue);
     *   }
     * }
     */
    windowRect(
        options: { width?: number; height?: number; x?: number; y?: number },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
    frame(
        frameId?: WebElement | string | number | null,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
    element(
        using: LocateStrategy,
        value: string,
        callback: (this: NightwatchAPI, result: NightwatchCallbackResult<{ ELEMENT: string }>) => void,
    ): this;

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
    elements(
        using: LocateStrategy,
        value: string,
        callback: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<{ ELEMENT: string }>>) => void,
    ): this;

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
    elementIdElement(
        id: string,
        using: LocateStrategy,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ ELEMENT: string }>) => void,
    ): this;

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
    elementIdElements(
        id: string,
        using: LocateStrategy,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<{ ELEMENT: string }>>) => void,
    ): this;

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
    elementIdEquals(
        id: string,
        otherId: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

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
    elementActive(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ ELEMENT: string }>) => void,
    ): this;
}

export interface WebDriverProtocolElementState {
    /**
     * Get the value of an element's attribute.
     */
    elementIdAttribute(
        id: string,
        attributeName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): this;

    /**
     * Retrieve the computed value of the given CSS property of the given element.
     *
     * The CSS property to query should be specified using the CSS property name, not the JavaScript property name (e.g. background-color instead of backgroundColor).
     */
    elementIdCssProperty(
        id: string,
        cssPropertyName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): this;

    /**
     * Determine if an element is currently displayed.
     */
    elementIdDisplayed(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

    /**
     * Determine if an element is currently enabled.
     */
    elementIdEnabled(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

    /**
     * Retrieve the qualified tag name of the given element.
     */
    elementIdName(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
     */
    elementIdSelected(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): this;

    /**
     * Determine an element's size in pixels. The size will be returned as a JSON object with width and height properties.
     */
    elementIdSize(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ width: number; height: number }>) => void,
    ): this;

    /**
     * Returns the visible text for the element.
     */
    elementIdText(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;
}

export interface WebDriverProtocolElementInteraction {
    /**
     * Scrolls into view a submittable element excluding buttons or editable element, and then attempts to clear its value, reset the checked state, or text content.
     *
     * @example
     * browser.elementIdClear(elementId);
     */
    elementIdClear(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Scrolls into view the element and clicks the in-view center point. If the element is not pointer-interactable, an <code>element not interactable</code> error is returned.
     *
     * @example
     * browser.elementIdClick(elementId);
     */
    elementIdClick(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Scrolls into view the form control element and then sends the provided keys to the element, or returns the current value of the element.
     * In case the element is not keyboard interactable, an <code>element not interactable error</code> is returned.
     */
    elementIdValue(
        id: string,
        value?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    elementIdValue(
        id: string,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Send a sequence of key strokes to the active element. The sequence is defined in the same format as the `sendKeys` command.
     * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `client.Keys`.
     *
     * Rather than the `setValue`, the modifiers are not released at the end of the call. The state of the modifier keys is kept between calls,
     * so mouse interactions can be performed while modifier keys are depressed.
     *
     * @example
     * browser
     * .keys(browser.Keys.CONTROL) // hold down CONTROL key
     * .click('#element')
     * .keys(browser.Keys.NULL) // release all keys
     */
    keys(
        keysToSend: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element.
     *
     * @example
     * browser.submit(elementID);
     */
    submit(id: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
}

export interface WebDriverProtocolElementLocation {
    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     *
     * The element's coordinates are returned as a JSON object with x and y properties.
     *
     * @deprecated
     */
    elementIdLocation(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void,
    ): this;

    /**
     * Determine an element's location on the screen once it has been scrolled into view.
     *
     * @deprecated
     */
    elementIdLocationInView(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void,
    ): this;
}

export interface WebDriverProtocolDocumentHandling {
    /**
     * Returns a string serialisation of the DOM of the current page.
     *
     * @example
     * browser.source();
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
    execute<T>(
        body: ((this: undefined, ...data: any[]) => T) | string,
        args?: any[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<T>) => void,
    ): this;

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
    executeAsync(
        script: ((this: undefined, ...data: any[]) => any) | string,
        args?: any[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void,
    ): this;
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
     * Move to the element and peforms a double-click in the middle of the element.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.doubleClick('#main ul li a.first');
     *
     *     browser.doubleClick('#main ul li a.first', function(result) {
     *       console.log('double click result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.doubleClick('css selector', '#main ul li a.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.doubleClick({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.doubleClick({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.doubleClick('#main ul li a.first');
     *     console.log('double click result', result);
     *   }
     * }
     */
    doubleClick(
        selector: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
    doubleClick(
        using: LocateStrategy,
        selector: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Click at the current mouse coordinates (set by `.moveTo()`).
     *
     * The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button.
     *
     * @deprecated
     */
    mouseButtonClick(
        button: 0 | 1 | 2 | 'left' | 'middle' | 'right',
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Click and hold the left mouse button (at the coordinates set by the last `moveTo` command). Note that the next mouse-related command that should follow is `mouseButtonUp` .
     * Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.
     *
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button,
     * and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     *
     * **Since v2.0, this command is deprecated.** It is only available on older JSONWire-based drivers.
     * Please use the new [User Actions API](/api/useractions/).
     *
     * @deprecated
     */
    mouseButtonDown(
        button: 0 | 1 | 2 | 'left' | 'middle' | 'right',
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Releases the mouse button previously held (where the mouse is currently at). Must be called once for every `mouseButtonDown` command issued.
     *
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button,
     * and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     *
     * **Since v2.0, this command is deprecated.** It is only available on older JSONWire-based drivers.
     * Please use the new [User Actions API](/api/useractions/).
     *
     * @deprecated
     */
    mouseButtonUp(
        button: 0 | 1 | 2 | 'left' | 'middle' | 'right',
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

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
    moveTo(
        element: string | null,
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;
}

export interface WebDriverProtocolUserPrompts {
    /**
     * Accepts the currently displayed alert dialog. Usually, this is equivalent to clicking on the 'OK' button in the dialog.
     *
     * @example
     * browser.acceptAlert()
     */
    acceptAlert(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Dismisses the currently displayed alert dialog. For confirm() and prompt() dialogs, this is equivalent to clicking the 'Cancel' button.
     *
     * For alert() dialogs, this is equivalent to clicking the 'OK' button.
     *
     * @example
     * browser.dismissAlert();
     */
    dismissAlert(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Gets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.
     *
     * @example
     * browser.getAlertText();
     */
    getAlertText(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Sends keystrokes to a JavaScript prompt() dialog.
     *
     * @example
     * browser.setAlertText('randomalert');
     */
    setAlertText(value: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
}

export interface WebDriverProtocolScreenCapture {
    /**
     * Take a screenshot of the current page.
     *
     * @example
     * browser.screenshot(true);
     */
    screenshot(log_screenshot_data: boolean, callback?: (screenshotEncoded: string) => void): this;
}

export interface WebDriverProtocolMobileRelated {
    /**
     * Get the current browser orientation.
     *
     * @example
     * browser.getOrientation()
     */
    getOrientation(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<'LANDSCAPE' | 'PORTRAIT'>) => void,
    ): this;

    /**
     * Sets the browser orientation.
     *
     * @example
     * browser.setOrientation(orientation)
     */
    setOrientation(
        orientation: 'LANDSCAPE' | 'PORTRAIT',
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
    ): this;

    /**
     * Get a list of the available contexts.
     *
     * @example
     * browser.contexts();
     *
     * Used by Appium when testing hybrid mobile web apps. More info here: https://github.com/appium/appium/blob/master/docs/en/advanced-concepts/hybrid.md.
     */
    contexts(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void): this;

    /**
     * Get current context.
     *
     * @example
     * browser.currentContext();
     */
    currentContext(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void): this;

    /**
     * Sets the context.
     *
     * @example
     * browser.setContext(context);
     */
    setContext(context: string, callback?: () => void): this;
}

/**
 * Map of DOM element locators as shorthand string selectors based on
 * global selector setting or ElementLocator
 *
 * @example
 * const elements: PageElements {
 * header: "h1",
 * banner: {
 *  locateStrategy: "css selector",
 *  selector: "#bannerId"
 *  }
 * }
 */
export interface PageElements {
    [key: string]: string | ElementProperties;
}

/**
 * Type for defining page object models allowing for optional type-safe
 * inclusion of url, elements, sections, commands, and props properties.
 */
export interface PageObjectModel {
    url?: string | ((...args: any) => string);
    elements?: PageElements;
    sections?: EnhancedPageObjectSections;
    commands?: any;
    props?: any;
}
