import { Protocol } from "devtools-protocol";
import { Actions, By, Capabilities, RelativeBy, WebElement } from "selenium-webdriver";
import { Expect } from "./expect";

export * from "./expect";
export * from "./globals";

export const ELEMENT_KEY = "element-6066-11e4-a52e-4f735466cecf";

export interface ElementResult {
    [ELEMENT_KEY]: string;
}

export interface JSON_WEB_OBJECT extends ElementResult {
    getId: () => string;
}

export type Definition = string | ElementProperties | Element | By | RelativeBy;

export type Awaitable<T, V> = Omit<T, "then"> & PromiseLike<V>;

// tslint:disable-next-line
type VoidToNull<T> = T extends void ? null : T;

type ExecuteScriptFunction<ArgType extends any[], ReturnValue> = (
    this: { [key: string]: any },
    ...args: ArgType
) => ReturnValue;

type ExecuteAsyncScriptFunction<ArgType extends any[], ReturnValue> = (
    this: { [key: string]: any },
    ...args: [...innerArgs: ArgType, done: (result?: ReturnValue) => void]
) => void;

export interface AppiumGeolocation {
    latitude: number;
    longitude: number;
    altitude?: number;
}

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
     * The name of the browser being used; examples: {chrome|firefox|safari|edge|internet explorer|android|iPhone|iPad|opera|brave}.
     */
    browserName?: string | null;

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
            feature_path?: string | undefined;
            auto_start_session?: boolean | undefined;
            parallel?: number | undefined;
            reporter?: string | undefined;
            reporterOptions?: { [key: string]: any };
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

            /**
             * Sets the path to the Chrome binary to use.
             * On Mac OS X, this path should reference the actual Chrome executable,
             * not just the application binary (e.g. "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
             */
            chrome_binary?: "";

            /**
             * Sets the path to Chrome's log file. This path should exist on the machine that will launch Chrome.
             */
            chrome_log_file?: "";

            /**
             * Configures the ChromeDriver to launch Chrome on Android via adb.
             */
            android_chrome?: false;

            /**
             * Sets the path to the Edge binary to use. This path should exist on the machine that will launch Edge.
             */
            edge_binary?: "";

            /**
             * Sets the path to the Edge binary to use.
             */
            edge_log_file?: "";

            /**
             * Sets the binary to use. The binary may be specified as the path to a Firefox executable or a desired release Channel. This path should exist on the machine that will launch Firefox.
             */
            firefox_binary?: "";

            /**
             * Sets the path to an existing profile to use as a template for new browser sessions.
             * This profile will be copied for each new session - changes will not be applied to the profile itself.
             */
            firefox_profile?: "";
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
     * Tag(s) used/to be used during test execution.
     * Can be a single tag or an array of tags.
     */
    tag_filter?: string | string[];

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
     * Set this to true to use the v1.x response format for commands when using ES6 async/await
     * @default false
     */
    backwards_compatibility_mode?: boolean;

    /**
     * Set this to true to disable the global objects such as element(), browser, by(), expect()
     */
    disable_global_apis?: boolean;

    /**
     * Ignore network errors (e.g. ECONNRESET errors)
     */
    report_network_errors?: boolean;

    /**
     * Interactive element commands such as "click" or "setValue" can be retried
     * if an error occurred (such as an "element not interactable" error)
     */
    element_command_retries?: number;

    /**
     * Sets the initial window size: {height: number, width: number}
     */
    window_size?: WindowSize;
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

export interface NightwatchTestSettings {
    [key: string]: NightwatchTestSettingScreenshots;
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

export interface NightwatchEnsureResult {
    value: null;
    returned: 1;
}

export interface Ensure {
    /**
     * Ensures that the Nightwatch WebDriver client is able to switch to the designated frame.
     */
    ableToSwitchToFrame(frame: number | WebElement | By): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that waits for an alert to be opened.
     */
    alertIsPresent(): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to be disabled.
     */
    elementIsDisabled(element: WebElement | Element | string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to be enabled.
     */
    elementIsEnabled(element: WebElement): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to be deselected.
     */
    elementIsNotSelected(element: WebElement | Element | string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to be in the DOM, yet not displayed to the user.
     */
    elementIsNotVisible(element: WebElement | Element | string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to be selected.
     */
    elementIsSelected(element: WebElement | Element | string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to be displayed.
     */
    elementIsVisible(element: WebElement | Element | string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will loop until an element is found with the given locator.
     */
    elementLocated(locator: By): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element's text to contain the given substring.
     */
    elementTextContains(
        element: WebElement | Element | string,
        substr: string,
    ): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element's text to equal the given text.
     */
    elementTextIs(
        element: WebElement | Element | string,
        text: string,
    ): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element's text to match a given regular expression.
     */
    elementTextMatches(
        element: WebElement | Element | string,
        regex: RegExp,
    ): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will loop until at least one element is found with the given locator.
     */
    elementsLocated(locator: By): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the given element to become stale.
     * An element is considered stale once it is removed from the DOM, or a new page has loaded.
     */
    stalenessOf(element: WebElement | Element | string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the current page's title to contain the given substring.
     */
    titleContains(substr: string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the current page's title to match the given value.
     */
    titleIs(title: string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the current page's title to match the given regular expression.
     */
    titleMatches(regex: RegExp): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the current page's url to contain the given substring.
     */
    urlContains(substrUrl: string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the current page's url to match the given value.
     */
    urlIs(url: string): Awaitable<NightwatchAPI, NightwatchEnsureResult>;

    /**
     * Creates a condition that will wait for the current page's url to match the given regular expression.
     */
    urlMatches(regex: RegExp): Awaitable<NightwatchAPI, NightwatchEnsureResult>;
}

export interface Assert extends NightwatchAssertions, NightwatchNodeAssertions {}

export interface NightwatchAssertions extends NightwatchCommonAssertions, NightwatchCustomAssertions {
    /**
     * Negates any of assertions following in the chain.
     */
    not: Omit<NightwatchAssertions, "not">;
}

export interface NightwatchAssertionsResult<T> {
    value: T;
    status: 0;
    returned: 1;
    passed: true;
}

export interface NightwatchCommonAssertions {
    /**
     * Checks if the given attribute of an element contains the expected value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.attributeContains('#someElement', 'href', 'google.com');
     *    };
     * ```
     */
    attributeContains(
        selector: Definition,
        attribute: string,
        expected: string,
        message?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given attribute of an element has the expected value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.attributeEquals('body', 'data-attr', 'some value');
     *    };
     * ```
     */
    attributeEquals(
        selector: Definition,
        attribute: string,
        expected: string,
        message?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Check if an element's attribute value matches a regular expression.
     *
     * @example
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.attributeMatches('body', 'data-attr', '(value)');
     *    };
     * ```
     */
    attributeMatches(
        selector: Definition,
        attribute: string,
        regex: string | RegExp,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the specified css property of a given element has the expected value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.cssProperty('#main', 'display', 'block');
     *    };
     * ```
     */
    cssProperty(
        selector: Definition,
        cssProperty: string,
        expected: string,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the specified DOM property of a given element has the expected value.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     * Several properties can be specified (either as an array or command-separated list). Nightwatch will check each one for presence.
     */
    domPropertyContains(
        selector: Definition,
        domProperty: string,
        expected: string | number,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<any>>;

    /**
     * Checks if the specified DOM property of a given element has the expected value.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     * If the result value is JSON object or array, a deep equality comparison will be performed.
     */
    domPropertyEquals(
        selector: Definition,
        domProperty: string,
        expected: string | number,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<any>>;

    /**
     * Check if specified DOM property value of a given element matches a regex.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     */
    domPropertyMatches(
        selector: Definition,
        domProperty: string,
        expected: string | RegExp,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<any>>;

    /**
     * Checks if the number of elements specified by a selector is equal to a given value.
     *
     * @example
     *
     * this.demoTest = function (browser) {
     *   browser.assert.elementsCount('div', 10);
     *   browser.assert.not.elementsCount('div', 10);
     * }
     */
    elementsCount(
        selector: Definition,
        count: number,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<JSON_WEB_OBJECT[]> & { WebdriverElementId: string }>;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.elementPresent("#main");
     *    };
     * ```
     */
    elementPresent(
        selector: Definition,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<Array<Omit<JSON_WEB_OBJECT, "getId">>>>;

    /**
     * Checks if the given element does not exists in the DOM.
     *
     * @example
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.elementNotPresent(".should_not_exist");
     *    };
     * ```
     *
     * @deprecated In favour of `assert.not.elementPresent()`.
     */
    elementNotPresent(
        selector: Definition,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<Array<Omit<JSON_WEB_OBJECT, "getId">>>>;

    /**
     * Checks if the given element does not have the specified CSS class.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.cssClassNotPresent('#main', 'container');
     *    };
     * ```
     *
     * @deprecated In favour of `assert.not.hasClass()`.
     */
    cssClassNotPresent(
        selector: Definition,
        className: string,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given element has the specified CSS class.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.cssClassPresent('#main', 'container');
     *    };
     * ```
     *
     * @deprecated In favour of `assert.hasClass()`.
     */
    cssClassPresent(
        selector: Definition,
        className: string,
        message?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given element has the specified CSS class.
     *
     * @example
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.hasClass('#main', 'container');
     *      browser.assert.hasClass('#main', ['visible', 'container']);
     *      browser.assert.hasClass('#main', 'visible container');
     *    };
     * ```
     */
    hasClass(
        selector: Definition,
        className: string | string[],
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given element contains the specified DOM attribute.
     *
     * Equivalent of: https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
     *
     * @example
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.hasAttribute('#main', 'data-track');
     *    };
     * ```
     */
    hasAttribute(
        selector: Definition,
        expectedAttribute: string,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given element is enabled (as indicated by the 'disabled' attribute).
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.assert.enabled('.should_be_enabled');
     *    browser.assert.enabled({selector: '.should_be_enabled'});
     *    browser.assert.enabled({selector: '.should_be_enabled', suppressNotFoundErrors: true});
     *  };
     */
    enabled(selector: Definition, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<boolean>>;

    /**
     * Checks if the given element is selected.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.assert.selected('.should_be_selected');
     *    browser.assert.selected({selector: '.should_be_selected'});
     *    browser.assert.selected({selector: '.should_be_selected', suppressNotFoundErrors: true});
     *  };
     */
    selected(selector: Definition, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<boolean>>;

    /**
     * Checks if the given element contains the specified text.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.containsText('#main', 'The Night Watch');
     *    };
     * ```
     *
     * @deprecated In favour of `assert.textContains()`.
     */
    containsText(
        selector: Definition,
        expectedText: string,
        message?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given element contains the specified text.
     *
     * @example
     * ```
     *   this.demoTest = function (browser) {
     *     browser.assert.textContains('#main', 'The Night Watch');
     *   };
     * ```
     */
    textContains(
        selector: Definition,
        expectedText: string,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Check if an element's inner text equals the expected text.
     *
     * @example
     *
     * ```
     *   this.demoTest = function (browser) {
     *     browser.assert.textEquals('#main', 'The Night Watch');
     *   };
     * ```
     */
    textEquals(
        selector: Definition,
        expectedText: string,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Check if an elements inner text matches a regular expression.
     *
     * @example
     *
     * ```
     *   this.demoTest = function (browser) {
     *     browser.assert.textMatches('#main', '^Nightwatch');
     *   };
     * ```
     */
    textMatches(
        selector: Definition,
        regex: string | RegExp,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the page title equals the given value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.title("Nightwatch.js");
     *    };
     * ```
     *
     * @deprecated In favour of `titleEquals()`.
     */
    title(expected: string, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the page title equals the given value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.title("Nightwatch.js");
     *    };
     * ```
     */
    titleContains(expected: string, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the page title equals the given value.
     * @since 2.0
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.titleEquals("Nightwatch.js");
     *    };
     * ```
     */
    titleEquals(expected: string, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the current title matches a regular expression.
     *
     * @example
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.titleMatches('^Nightwatch');
     *    };
     * ```
     */
    titleMatches(regex: string | RegExp, msg?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the current URL contains the given value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.urlContains('google');
     *    };
     * ```
     */
    urlContains(expectedText: string, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the current url equals the given value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.urlEquals('https://www.google.com');
     *    };
     * ```
     */
    urlEquals(expected: string, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the current url matches a regular expression.
     *
     * @example
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.urlMatches('^https');
     *    };
     * ```
     */
    urlMatches(regex: string | RegExp, msg?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given form element's value equals the expected value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.value("form.login input[type=text]", "username");
     *    };
     * ```
     *
     * @deprecated In favour of `assert.valueEquals()`.
     */
    value(
        selector: Definition,
        expectedText: string,
        message?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given form element's value contains the expected value.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.valueContains("form.login input[type=text]", "username");
     *    };
     * ```
     */
    valueContains(
        selector: Definition,
        expectedText: string,
        message?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given form element's value equals the expected value.
     *
     * The existing .assert.value() command.
     *
     * @example
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.valueEquals("form.login input[type=text]", "username");
     *    };
     * ```
     */
    valueEquals(
        selector: Definition,
        expected: string,
        msg?: string,
    ): Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;

    /**
     * Checks if the given element is not visible on the page.
     *
     * @example
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.hidden('.should_not_be_visible');
     *    };
     * ```
     *
     * @deprecated In favour of `assert.not.visible()`.
     */
    hidden(selector: Definition, msg?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<boolean>>;

    /**
     * Checks if the given element is visible on the page.
     *
     * ```
     *    this.demoTest = function (browser) {
     *      browser.assert.visible(".should_be_visible");
     *    };
     * ```
     */
    visible(selector: Definition, message?: string): Awaitable<NightwatchAPI, NightwatchAssertionsResult<boolean>>;

    NightwatchAssertionsError: NightwatchAssertionsError;
}

export interface NightwatchNodeAssertionsResult {
    value: null;
    returned: 1;
}

export interface NightwatchNodeAssertions {
    // The following definitions are taken from @types/assert

    fail(message?: string | Error): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    fail(
        actual: any,
        expected: any,
        message?: string | Error,
        operator?: string,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    ok(value: any, message?: string | Error): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    equal(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    notEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    deepEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    notDeepEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    strictEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    notStrictEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    deepStrictEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    notDeepStrictEqual(
        actual: any,
        expected: any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    throws(
        block: () => any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    doesNotThrow(
        block: () => any,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    ifError(value: any): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    rejects(
        block: (() => Promise<any>) | Promise<any>,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    doesNotReject(
        block: (() => Promise<any>) | Promise<any>,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;

    match(
        value: string,
        regExp: RegExp,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
    doesNotMatch(
        value: string,
        regExp: RegExp,
        message?: string | Error,
    ): Awaitable<NightwatchAPI, NightwatchNodeAssertionsResult | Error>;
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
    timestamp: number;

    /**
     * The log type.
     */
    type: string;

    /**
     * Severity level
     */
    level: Level;
}

export interface Level {
    /**
     * the level's name.
     */
    name: "ALL" | "DEBUG" | "FINE" | "FINER" | "FINEST" | "INFO" | "OFF" | "SEVERE" | "WARNING";

    /**
     * the level's numeric value.
     */
    value: number;
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

export interface NightwatchApiCommands {
    readonly WEBDRIVER_ELEMENT_ID: string;
    readonly browserName: string;
    readonly platformName: string;
    __isBrowserName(browser: string, alternateName: string): boolean;
    __isPlatformName(platform: string): boolean;
    isIOS(): boolean;
    isAndroid(): boolean;
    isMobile(): boolean;
    isSafari(): boolean;
    isChrome(): boolean;
    isFirefox(): boolean;
    isEdge(): boolean;
    isInternetExplorer(): boolean;
    isOpera(): boolean;

    /**
     * Whether or not Nightwatch is being used to connect to an Appium server.
     */
    isAppiumClient(): boolean;
}

export interface NightwatchAPI
    extends SharedCommands, WebDriverProtocol, NightwatchCustomCommands, NightwatchApiCommands
{
    baseUrl: string;
    assert: Assert;
    actions(options?: { async?: boolean; bridge?: boolean }): Actions;
    expect: Expect;
    ensure: Ensure;
    verify: Assert;

    appium: AppiumCommands;

    page: NightwatchPage & NightwatchCustomPageObjects;

    /**
     * SessionId of the session used by the Nightwatch api.
     */
    sessionId: string;

    /**
     * Override the sessionId used by Nightwatch client with another session id.
     */
    setSessionId(sessionId: string): this;

    options: NightwatchOptions & Pick<NightwatchTestOptions, "desiredCapabilities">;

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
    extends NightwatchAPI, NightwatchComponentTestingCommands, NightwatchCustomCommands
{}

export interface NightwatchComponentTestingCommands {
    importScript(
        scriptPath: string,
        options: { scriptType: string; componentType: string },
        callback: () => void,
    ): this;
    mountReactComponent(componentPath: string, props?: string | (() => void), callback?: () => void): Element;
    mountComponent(componentPath: string, props?: string | (() => void), callback?: () => void): Element;
    mountVueComponent(componentPath: string, options?: any, callback?: () => void): Element;
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
    "@tags"?: string | string[] | undefined;
    "@disabled"?: boolean | undefined;
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

export class Element {
    name: string | undefined;
    locateStrategy: LocateStrategy;
    index: number;
    selector: string | undefined; // and probably `RelativeBy`.
    pseudoSelector: string | null;

    resolvedElement: string | null;
    parent: any;
    usingRecursion: boolean;

    webElement?: WebElement;
    webElementId?: string;

    abortOnFailure?: boolean;
    suppressNotFoundErrors?: boolean;
    retryInterval?: number;
    message?: string;
    timeout?: number;
}

export interface ElementGlobal extends Element {
    /**
     * Get the server-assigned opaque ID assigned to this element.
     */
    getId(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;

    /**
     * Locates the descendants of this element that match the given search criteria, and returns the first one.
     *
     * If no `selector` is passed, returns the[WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html)
     * instance for this element.
     */
    findElement(
        selector?: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<WebElement>) => void,
    ): Awaitable<NightwatchAPI, WebElement>;

    /**
     * Locates and wraps the first element, that match the given search criteria in the descendants of this element, in global element() api object.
     *
     * If no `selector` is passed, returns the[WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html)
     * instance for this element.
     */
    find(): Awaitable<NightwatchAPI, WebElement>;
    find(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementGlobal | null>) => void,
    ): Awaitable<NightwatchAPI, ElementGlobal | null>;

    get: ElementGlobal["find"];
    element: ElementGlobal["find"];

    /**
     * Locates all of the descendants of this element that match the given search criteria.
     */
    findElements(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<WebElement[]>) => void,
    ): Awaitable<NightwatchAPI, WebElement[]>;

    findAll(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementGlobal[]>) => void,
    ): Awaitable<NightwatchAPI, ElementGlobal[]>;

    /**
     * Clear the `value` of this element. This command has no effect if the underlying DOM element
     * is neither a text INPUT element nor a TEXTAREA element.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#clear
     */
    clear(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Clicks on this element.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#click
     */
    click(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Get the computed WAI-ARIA label of element.
     */
    getAccessibleName(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;
    /**
     * Get the computed WAI-ARIA label of element.
     */
    accessibleName: ElementGlobal["getAccessibleName"];

    /**
     * Get the computed WAI-ARIA role of element.
     */
    getAriaRole(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;
    /**
     * Get the computed WAI-ARIA role of element.
     */
    arialRole: ElementGlobal["getAriaRole"];

    /**
     * Retrieves the current value of the given attribute of this element.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getAttribute
     */
    getAttribute(
        attributeName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<NightwatchAPI, string | null>;
    /**
     * Retrieves the current value of the given attribute of this element.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getAttribute
     */
    attr: ElementGlobal["getAttribute"];
    /**
     * Retrieves the current value of the given attribute of this element.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getAttribute
     */
    attribute: ElementGlobal["getAttribute"];

    /**
     * Retrieves the value of a computed style property for this instance.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getCssValue
     */
    getCssValue(
        cssStyleProperty: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;
    /**
     * Retrieves the value of a computed style property for this instance.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getCssValue
     */
    css: ElementGlobal["getCssValue"];

    /**
     * Retrieves the value of the given property of this element.
     */
    getProperty(
        propertyName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<NightwatchAPI, string | null>;
    /**
     * Retrieves the value of the given property of this element.
     */
    property: ElementGlobal["getProperty"];
    /**
     * Retrieves the value of the given property of this element.
     */
    prop: ElementGlobal["getProperty"];

    /**
     * Returns an object describing an element's location, in pixels relative to the document element, and the element's size in pixels.
     */
    getRect(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchSizeAndPosition>) => void,
    ): Awaitable<NightwatchAPI, NightwatchSizeAndPosition>;
    /**
     * Returns an object describing an element's location, in pixels relative to the document element, and the element's size in pixels.
     */
    rect: ElementGlobal["getRect"];

    /**
     * Retrieves the element's tag name.
     */
    getTagName(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;
    /**
     * Retrieves the element's tag name.
     */
    tagName: ElementGlobal["getTagName"];

    /**
     * Get the visible (i.e. not hidden by CSS) innerText of this element, including sub-elements, without any leading or trailing whitespace.
     */
    getText(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;
    /**
     * Get the visible (i.e. not hidden by CSS) innerText of this element, including sub-elements, without any leading or trailing whitespace.
     */
    text: ElementGlobal["getText"];

    /**
     * Types a key sequence on the DOM element represented by this instance.
     *
     * @example
     * element(<selector>).sendKeys(1, 'something', browser.Keys.SPACE, Promise.resolve(2));
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#sendKeys
     */
    sendKeys(
        ...args: Array<string | number | PromiseLike<string> | PromiseLike<number>>
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Submits the form containing this element (or this element if it is itself a FORM element).
     * This command is a no-op if the element is not contained in a form.
     *
     * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#submit
     */
    submit(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Take a screenshot of the visible region encompassed by this element's bounding rectangle.
     */
    takeScreenshot(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;
    /**
     * Take a screenshot of the visible region encompassed by this element's bounding rectangle.
     */
    screenshot: ElementGlobal["takeScreenshot"];

    /**
     * Test whether this element is currently displayed.
     */
    isDisplayed(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<NightwatchAPI, boolean>;

    /**
     * Tests whether this element is enabled, as dictated by the `disabled` attribute.
     */
    isEnabled(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<NightwatchAPI, boolean>;

    /**
     * Tests whether this element is selected.
     */
    isSelected(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<NightwatchAPI, boolean>;

    /**
     * Get the [WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html) instance for this element.
     */
    getWebElement(): Awaitable<NightwatchAPI, WebElement>;

    isComponent?: boolean;
}

export function globalElement(
    locator: Definition | WebElement,
    options?: {
        isComponent?: boolean;
        type: string;
    },
): ElementGlobal;

export type NightwatchTests = NightwatchTestFunctions | NightwatchTestHooks;

export class DescribeInstance {
    "[instance]": any;
    "[attributes]": {};
    "[client]": NightwatchClient;

    /**
     * Title of the describe suite.
     */
    get name(): string;

    /**
     * Get or set tags for the test suite.
     *
     * @see https://nightwatchjs.org/guide/running-tests/filtering-by-test-tags.html
     */
    get tags(): string | string[];
    set tags(value: string | string[]);

    /**
     * Enable if the current test is a unit/integration test
     * (no webdriver session is required).
     */
    get unitTest(): boolean;
    set unitTest(value: boolean);

    /**
     * Set to false if you'd like the browser window to be kept open
     * in case of a failure or error (useful for debugging).
     */
    get endSessionOnFail(): boolean;
    set endSessionOnFail(value: boolean);

    /**
     * Set to false if you'd like the rest of the test cases/test steps
     * to be executed in the event of an assertion failure/error.
     */
    get skipTestcasesOnFail(): boolean;
    set skipTestcasesOnFail(value: boolean);

    /**
     * Set to true if you'd like this test suite to be skipped by the
     * test runner.
     */
    get disabled(): boolean;
    set disabled(value: boolean);

    /**
     * Get or set testsuite specific capabilities.
     */
    get desiredCapabilities(): NightwatchDesiredCapabilities;
    set desiredCapabilities(value: NightwatchDesiredCapabilities);

    /**
     * Get available page objects.
     */
    get page(): NightwatchAPI["page"];

    /**
     * Get all current globals.
     */
    get globals(): NightwatchGlobals;

    /**
     * Get all current settings.
     */
    get settings(): NightwatchOptions;

    /**
     * Get all current cli arguments.
     */
    get argv(): { [key: string]: any };

    /**
     * Get all current mocha options.
     */
    get mochaOptions(): { [key: string]: any } | undefined;

    /**
     * Control the unit test timeout.
     *
     * Control the assertion and element commands timeout until when
     * an element should be located or assertion passed.
     *
     * @param value Timeout in `ms`
     */
    timeout(value: number): void;

    /**
     * Get the assertion and element commands timeout until when
     * an element would be located or assertion passed.
     *
     * @returns Timeout in `ms`
     */
    waitForTimeout(): number;

    /**
     * Control the assertion and element commands timeout until when
     * an element should be located or assertion passed.
     *
     * @param value Timeout in `ms`
     */
    waitForTimeout(value: number): void;

    /**
     * Get the polling interval between re-tries for assertions
     * or element commands.
     *
     * @returns Time interval in `ms`
     */
    waitForRetryInterval(): number;

    /**
     * Control the polling interval between re-tries for assertions
     * or element commands.
     *
     * @param value Time interval in `ms`
     */
    waitForRetryInterval(value: number): void;

    /**
     * Control the polling interval between re-tries for assertions
     * or element commands.
     *
     * @param value Time interval in `ms`
     */
    retryInterval(value: number): void;

    /**
     * How many time to retry a failed testcase inside this test suite
     */
    retries(n: number): void;

    /**
     * How many times to retry the current test suite in case of an
     * assertion failure or error
     */
    suiteRetries(n: number): void;
}

export type ExtendDescribeThis<T> = DescribeInstance & { [P in keyof T]?: T[P] };

interface SuiteFunction {
    (title: string, fn?: (this: DescribeInstance) => void): this;
    only: ExclusiveSuiteFunction;
    skip: PendingSuiteFunction;
}

interface ExclusiveSuiteFunction {
    (title: string, fn?: (this: DescribeInstance) => void): this;
}

interface PendingSuiteFunction {
    (title: string, fn?: (this: DescribeInstance) => void): this | void;
}

interface ExclusiveTestFunction {
    (fn: NormalFunc | AsyncFunc): this;
    (title: string, fn: NormalFunc | AsyncFunc): this;
}

interface PendingTestFunction {
    (fn: NormalFunc | AsyncFunc): this;
    (title: string, fn: NormalFunc | AsyncFunc): this;
}

type NormalFunc = (this: DescribeInstance, browser: NightwatchBrowser) => void;
type AsyncFunc = (this: DescribeInstance, browser: NightwatchBrowser) => PromiseLike<any>;
interface TestFunction {
    (fn: NormalFunc | AsyncFunc): this;
    (title: string, fn: NormalFunc | AsyncFunc): this;
    only: ExclusiveTestFunction;
    skip: PendingTestFunction;
    retries(n: number): void;
}

type NightwatchBddTestHookCallback = (
    this: DescribeInstance,
    browser: NightwatchBrowser,
    done: (err?: any) => void,
) => void;

type NightwatchBddTestHook = (callback: NightwatchBddTestHookCallback) => void;

declare global {
    const describe: SuiteFunction;
    const xdescribe: PendingSuiteFunction;
    const context: SuiteFunction;
    const xcontext: PendingSuiteFunction;
    const test: TestFunction;
    const it: TestFunction;
    const xit: PendingTestFunction;
    const specify: TestFunction;
    const xspecify: PendingTestFunction;
    const before: NightwatchBddTestHook;
    const after: NightwatchBddTestHook;
    const beforeEach: NightwatchBddTestHook;
    const afterEach: NightwatchBddTestHook;
}

/**
 * Performs an assertion
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
 */
export interface NightwatchAssertion<T, U = any> {
    expected: (() => T) | T;
    message: string;
    pass(value: T): any;
    value(result: U): T;
    command(callback: (result: U) => void): this;
    failure?(result: U): boolean;
    api: NightwatchAPI;
    client: NightwatchClientObject;
}

export interface NightwatchClient extends NightwatchClientObject {
    argv: { [key: string]: any };
    client: NightwatchClientObject;
    configLocateStrategy: "css selector" | "xpath";
    // TODO: Add missing properties, like:
    // elementLocator
    // httpOpts
    // initialCapabilities
    // queue
    // reporter
    unitTestingMode: boolean;
    usingCucumber: boolean;
}

export interface NightwatchClientObject {
    api: NightwatchAPI;
    options: NightwatchOptions;
    settings: NightwatchOptions;
    locateStrategy: LocateStrategy;
    // TODO: Add missing properties, like:
    // reporter: reporter
    // elementLocator
    sessionId: string | null;
}

export interface CreateClientParams {
    browserName?: string | null;
    headless?: boolean;
    silent?: boolean;
    output?: boolean;
    useAsync?: boolean;
    env?: string | null;
    timeout?: number | null;
    parallel?: boolean;
    reporter?: any;
    globals?: Partial<NightwatchGlobals>;
    devtools?: boolean;
    debug?: boolean;
    enable_global_apis?: boolean;
    config?: string;
    test_settings?: Partial<NightwatchOptions>;
}

export interface Nightwatch {
    cli(callback: () => void): void;
    client(settings: NightwatchOptions, reporter?: any, argv?: {}, skipInt?: boolean): this;
    CliRunner(argv?: {}): this; // TODO: return type is `CliRunner` instance.
    initClient(opts?: {}): this;
    runner(argv?: {}, done?: () => void, settings?: {}): Promise<void>;
    runTests(testSource: string | string[], settings?: any, ...args: any[]): Promise<void>;

    /**
     * Creates a new Nightwatch client that can be used to create WebDriver sessions.
     */
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
        test_settings,
    }?: CreateClientParams): NightwatchProgrammaticAPIClient;

    // TODO: add the following missing properties
    // Logger
    // element (only available after createClient is called)

    browser: NightwatchAPI;
    app: NightwatchAPI;
    by: typeof By;
    Capabilities: typeof Capabilities;
    Key: NightwatchKeys;
}

export interface NightwatchProgrammaticAPIClient {
    /**
     * Create a new browser session.
     */
    launchBrowser(): Promise<NightwatchAPI>;

    /**
     * Update the initially specified capabilities.
     */
    updateCapabilities(value: {} | (() => {})): void;

    nightwatch_client: NightwatchClient;
    settings: NightwatchOptions;
    // TODO: 'transport' property missing
}

export type LocateStrategy =
    | "class name"
    | "css selector"
    | "id"
    | "name"
    | "link text"
    | "partial link text"
    | "tag name"
    | "xpath";

export type NightwatchLogTypes =
    | "client"
    | "driver"
    | "browser"
    | "server"
    | "performance";

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
> =
    & SharedCommands
    & NightwatchCustomCommands
    & Commands
    & {
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

        // TODO: `props` property missing.
        url: string | undefined;

        /**
         * Nightwatch API.
         */
        api: NightwatchAPI;

        /**
         * Nightwatch Client.
         */
        client: NightwatchClient;

        assert: Assert;
        verify: Assert;
        // TODO: revisit this, some additional properties/methods are also available on
        // expect when using VSCode Debugger, like active, attribute, etc.
        expect: Expect;
    };

export interface Cookie {
    name: string;
    value: string;
    path?: string;
    domain?: string;
    secure?: boolean;
    expiry?: Date | number;
    httpOnly?: boolean;
    sameSite?: string;
}

export interface SharedCommands extends ClientCommands, ElementCommands {}

export interface WindowPosition {
    x: number;
    y: number;
}

// tslint:disable-next-line
export interface NightwatchPosition extends WindowPosition {}

export interface WindowSize {
    height: number;
    width: number;
}

// tslint:disable-next-line
export interface NightwatchSize extends WindowSize {}

export type WindowSizeAndPosition = WindowPosition & WindowSize;

export type NightwatchSizeAndPosition = WindowSizeAndPosition;

export type WindowType = "tab" | "window";

export interface ChromiumClientCommands {
    /**
     * Mock the geolocation of the browser.
     *
     * Call without any arguments to reset the geolocation.
     *
     * @example
     *  describe('mock geolocation', function() {
     *    it('sets the geolocation to Tokyo, Japan and then resets it', () => {
     *      browser
     *        .setGeolocation({
     *          latitude: 35.689487,
     *          longitude: 139.691706,
     *          accuracy: 100
     *        })  // sets the geolocation to Tokyo, Japan
     *        .navigateTo('https://www.gps-coordinates.net/my-location')
     *        .pause(3000)
     *        .setGeolocation()  // resets the geolocation
     *        .navigateTo('https://www.gps-coordinates.net/my-location')
     *        .pause(3000);
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/network-requests/mock-geolocation.html
     */
    setGeolocation(
        coordinates?: { latitude: number; longitude: number; accuracy?: number },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Capture outgoing network calls from the browser.
     *
     * @example
     *  describe('capture network requests', function() {
     *    it('captures and logs network requests as they occur', function(this: ExtendDescribeThis<{requestCount: number}>) {
     *      this.requestCount = 1;
     *      browser
     *        .captureNetworkRequests((requestParams) => {
     *          console.log('Request Number:', this.requestCount!++);
     *          console.log('Request URL:', requestParams.request.url);
     *          console.log('Request method:', requestParams.request.method);
     *          console.log('Request headers:', requestParams.request.headers);
     *        })
     *        .navigateTo('https://www.google.com');
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/network-requests/capture-network-calls.html
     */
    captureNetworkRequests(
        onRequestCallback: (requestParams: Protocol.Network.RequestWillBeSentEvent) => void,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Intercept the request made on a particular URL and mock the response.
     *
     * @example
     *  describe('mock network response', function() {
     *    it('intercepts the request made to Google search and mocks its response', function() {
     *      browser
     *        .mockNetworkResponse('https://www.google.com/', {
     *          status: 200,
     *          headers: {
     *            'Content-Type': 'UTF-8'
     *          },
     *          body: 'Hello there!'
     *        })
     *        .navigateTo('https://www.google.com/')
     *        .pause(2000);
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/network-requests/mock-network-response.html
     */
    mockNetworkResponse(
        urlToIntercept: string,
        response?: {
            status?: Protocol.Fetch.FulfillRequestRequest["responseCode"];
            headers?: { [name: string]: string };
            body?: Protocol.Fetch.FulfillRequestRequest["body"];
        },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Override device mode/dimensions.
     *
     * @example
     *  describe('modify device dimensions', function() {
     *    it('modifies the device dimensions and then resets it', function() {
     *      browser
     *        .setDeviceDimensions({
     *          width: 400,
     *          height: 600,
     *          deviceScaleFactor: 50,
     *          mobile: true
     *        })
     *        .navigateTo('https://www.google.com')
     *        .pause(1000)
     *        .setDeviceDimensions()  // resets the device dimensions
     *        .navigateTo('https://www.google.com')
     *        .pause(1000);
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/mobile-web-testing/override-device-dimensions.html
     */
    setDeviceDimensions(
        metrics?: {
            width?: number;
            height?: number;
            deviceScaleFactor?: number;
            mobile?: boolean;
        },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Get the performance metrics from the browser. Metrics collection
     * only begin after `enablePerformanceMetrics()` command is called.
     *
     * @returns A promise that contains metrics collected between the
     * last call to `enablePerformanceMetrics()` command and this command.
     *
     * @example
     *  describe('collect performance metrics', function() {
     *    it('enables the metrics collection, does some stuff and collects the metrics', function() {
     *      browser
     *        .enablePerformanceMetrics()
     *        .navigateTo('https://www.google.com')
     *        .getPerformanceMetrics((result) => {
     *          if (result.status === 0) {
     *            const metrics = result.value;
     *            console.log(metrics);
     *          }
     *        });
     *    });
     *  });
     *
     * @see https://web.dev/metrics/
     * @see https://pptr.dev/api/puppeteer.page.metrics/
     */
    getPerformanceMetrics(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ [metricName: string]: number }>,
        ) => void,
    ): Awaitable<this, { [metricName: string]: number }>;

    /**
     * Enable/disable the collection of performance metrics in the browser. Metrics
     * collection only begin after this command is called.
     *
     * @example
     *  describe('collect performance metrics', function() {
     *    it('enables the metrics collection, does some stuff and collects the metrics', function() {
     *      browser
     *        .enablePerformanceMetrics()
     *        .navigateTo('https://www.google.com')
     *        .getPerformanceMetrics((result) => {
     *          if (result.status === 0) {
     *            const metrics = result.value;
     *            console.log(metrics);
     *          }
     *        });
     *    });
     *  });
     *
     * @see https://web.dev/metrics/
     * @see https://pptr.dev/api/puppeteer.page.metrics/
     */
    enablePerformanceMetrics(
        enable?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Take heap snapshot and save it as a `.heapsnapshot` file.
     * The saved snapshot file can then be loaded into Chrome
     * DevTools' Memory tab for inspection.
     *
     * The contents of the heap snapshot are also available in the `value`
     * property of the `result` argument passed to the callback, in
     * string-serialized JSON format.
     *
     * @returns A promise that contains heap snapshot in string-serialized
     * JSON format.
     *
     * @example
     *  describe('take heap snapshot', function() {
     *    it('takes heap snapshot and saves it as snap.heapsnapshot file', function() {
     *      browser
     *        .navigateTo('https://www.google.com')
     *        .takeHeapSnapshot('./snap.heapsnapshot');
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/running-tests/take-heap-snapshot.html
     */
    takeHeapSnapshot(
        heapSnapshotLocation?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

    /**
     * Listen to the `console` events (ex. `console.log` event) and
     * register callback to process the same.
     *
     * @example
     *  describe('capture console events', function() {
     *    it('captures and logs console.log event', function() {
     *      browser
     *        .captureBrowserConsoleLogs((event) => {
     *          console.log(event.type, event.timestamp, event.args[0].value);
     *        })
     *        .navigateTo('https://www.google.com')
     *        .executeScript(function() {
     *          console.log('here');
     *        }, []);
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/running-tests/capture-console-messages.html
     */
    captureBrowserConsoleLogs(
        onEventCallback: (
            event: Pick<
                Protocol.Runtime.ConsoleAPICalledEvent,
                "type" | "timestamp" | "args"
            >,
        ) => void,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Catch the JavaScript exceptions thrown in the browser.
     *
     * @example
     *  describe('catch browser exceptions', function() {
     *    it('captures the js exceptions thrown in the browser', async function() {
     *      await browser.captureBrowserExceptions((event) => {
     *        console.log('>>> Exception:', event);
     *      });
     *
     *      await browser.navigateTo('https://duckduckgo.com/');
     *
     *      const searchBoxElement = await browser.findElement('input[name=q]');
     *      await browser.executeScript(function(_searchBoxElement) {
     *        _searchBoxElement.setAttribute('onclick', 'throw new Error("Hello world!")');
     *      }, [searchBoxElement]);
     *
     *      await browser.elementIdClick(searchBoxElement.getId());
     *    });
     *  });
     *
     * @see https://nightwatchjs.org/guide/running-tests/catch-js-exceptions.html
     */
    captureBrowserExceptions(
        onExceptionCallback: (event: Protocol.Runtime.ExceptionThrownEvent) => void,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
}

export interface ClientCommands extends ChromiumClientCommands {
    /**
     * Close the current window. This can be useful when you're working with multiple windows open (e.g. an OAuth login).
     * Uses `window` protocol command.
     *
     * @example
     * describe('closeWindow command demo' , function (result) {
     *   test('demo test', function () {
     *     browser.closeWindow();
     *   });
     * });
     * @see https://nightwatchjs.org/api/closeWindow.html
     */
    closeWindow(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Sets the current window state to fullscreen.
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     browser.fullscreenWindow(function(result) {
     *       console.log(result);
     *     });
     *   },
     *
     *   'ES6 async demo Test': async function(browser) {
     *     const result = await browser.fullscreenWindow();
     *     console.log('result value is:', result.value);
     *   }
     * }
     * @see https://nightwatchjs.org/api/fullscreenWindow.html
     */
    fullscreenWindow(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Hides the window in the system tray. If the window happens to be in fullscreen mode,
     * it is restored the normal state then it will be "iconified" - minimize or hide the window from the visible screen.
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     browser.minimizeWindow(function(result) {
     *       console.log(result);
     *     });
     *   },
     *
     *   'ES6 async demo Test': async function(browser) {
     *     const result = await browser.minimizeWindow();
     *     console.log('result value is:', result.value);
     *   }
     * }
     * @see https://nightwatchjs.org/api/minimizeWindow.html
     */
    minimizeWindow(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Opens a new top-level browser window, which can be either a tab (default) or a separate new window.
     *
     * This command is only available for W3C Webdriver compatible browsers.
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     // open a new window tab (default)
     *     browser.openNewWindow(function(result) {
     *       console.log(result);
     *     });
     *
     *     // open a new window
     *     browser.openNewWindow('window', function(result) {
     *       console.log(result);
     *     });
     *   },
     *
     *   'ES6 async demo Test': async function(browser) {
     *     const result = await browser.openNewWindow();
     *     console.log('result value is:', result.value);
     *   }
     * }
     * @see https://nightwatchjs.org/api/openNewWindow.html
     */
    openNewWindow(
        type?: WindowType,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/deleteCookie.html
     */
    deleteCookie(
        cookieName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/deleteCookies.html
     */
    deleteCookies(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Ends the session. Uses session protocol command.
     *
     * @example
     * this.demoTest = function () {
     *   browser.end();
     * };
     *
     * @see https://nightwatchjs.org/api/end.html
     */
    end(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/getCookie.html
     */
    getCookie(
        name: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Cookie>) => void,
    ): Awaitable<this, Cookie>;

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
     * @see https://nightwatchjs.org/api/getCookies.html
     */
    getCookies(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Cookie[]>) => void,
    ): Awaitable<this, Cookie[]>;

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
     * @see https://nightwatchjs.org/api/getLog.html
     */
    getLog(
        typestring: string,
        callback?: (this: NightwatchAPI, log: NightwatchLogEntry[]) => void,
    ): Awaitable<this, NightwatchLogEntry[]>;

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
     * @see https://nightwatchjs.org/api/getLogTypes.html
     */
    getLogTypes(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchLogTypes[],
        ) => void,
    ): Awaitable<this, NightwatchLogTypes[]>;

    /**
     * Retrieve the URL of the current page.
     *
     * @example
     * describe('Navigation commands demo', function() {
     *   test('demoTest', function(browser) {
     *     // navigate to new url:
     *     browser.navigateTo('https://nightwatchjs.org');
     *
     *     // Retrieve to url with callback:
     *     browser.getCurrentUrl(function(result) {
     *       console.log(result.value);
     *     });
     *   });
     *
     *   test('demoTestAsync', async function(browser) {
     *     const currentUrl = await browser.navigateTo('https://nightwatchjs.org').getCurrentUrl();
     *     console.log('currentUrl:', currentUrl); // will print 'https://nightwatchjs.org'
     *   });
     *
     * });
     *
     *  @see https://nightwatchjs.org/api/getCurrentUrl.html
     */
    getCurrentUrl(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/getTitle.html
     */
    getTitle(
        callback?: (this: NightwatchAPI, result: string) => void,
    ): Awaitable<this, string>;

    /**
     * Navigate to a new URL. This method will also call the `onBrowserNavigate()` test global,
     * right after the page is loaded.
     *
     * @example
     *  describe('Navigation commands demo', function() {
     *    test('demoTest', function(browser) {
     *      // navigate to new url:
     *      browser.navigateTo('https://nightwatchjs.org');
     *
     *      // Retrieve to url with callback:
     *      browser.getCurrentUrl(function(result) {
     *        console.log(result.value);
     *      });
     *    });
     *
     *    test('demoTestAsync', async function(browser) {
     *      const currentUrl = await browser.navigateTo('https://nightwatchjs.org').getCurrentUrl();
     *      console.log('currentUrl:', currentUrl); // will print 'https://nightwatchjs.org'
     *    });
     *  });
     *
     *  @see https://nightwatchjs.org/api/navigateTo.html
     */
    navigateTo(
        url: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Ends the session and closes down the test WebDriver server, if one is running.
     * This is similar to calling the .end() command, but the former doesn't quit the WebDriver session.
     *
     * This command will also execute the `onBrowserQuit()` global, if one is defined.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.quit(function(result) {
     *     console.log(result.value);
     *   });
     * }
     *
     * @see https://nightwatchjs.org/api/quit.html
     */
    quit(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/init.html
     */
    init(
        url?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Utility command to load an external script into the page specified by url.
     *
     * @example
     * this.demoTest = function() {
     *   this.injectScript("{script-url}", function() {
     *     // we're all done here.
     *   });
     * };
     *
     * @see https://nightwatchjs.org/api/injectScript.html
     */
    injectScript(
        scriptUrl: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<WebElement>) => void,
    ): Awaitable<this, WebElement>;
    injectScript(
        scriptUrl: string,
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<WebElement>) => void,
    ): Awaitable<this, WebElement>;

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
     * @see https://nightwatchjs.org/api/isLogAvailable.html
     */
    isLogAvailable(
        typeString: string,
        callback?: (this: NightwatchAPI, result: boolean) => void,
    ): Awaitable<this, boolean>;

    /**
     * Maximizes the current window.
     *
     * @example
     *  this.demoTest = function () {
     *    browser.maximizeWindow();
     *  };
     *
     * @see https://nightwatchjs.org/api/maximizeWindow.html
     */
    maximizeWindow(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Suspends the test for the given time in milliseconds. If the milliseconds argument is missing it will suspend the test indefinitely
     *
     * @example
     * this.demoTest = function () {
     *   browser.pause(1000);
     *   // or suspend indefinitely
     *   browser.pause();
     * };
     *
     * @see https://nightwatchjs.org/api/pause.html
     */
    pause(ms?: number, callback?: (this: NightwatchAPI) => void): Awaitable<this, undefined>;

    /**
     * This command halts the test execution and provides users with a REPL interface where they can type
     * any of the available Nightwatch commands and the command will be executed in the running browser
     * in real-time.
     *
     * This can be used to debug why a certain command in not working as expected, find the correct
     * locators for your assertions or just play around with the available Nightwatch commands.
     *
     * @example
     * // async function is required while using the debug
     * // command to get the correct result as output.
     * this.demoTest = async function (browser) {
     *   browser.debug();
     *
     *   // with no auto-complete
     *   browser.debug({preview: false});
     *
     *   // with a timeout of 6000 ms (time for which the interface
     *   // would wait for a result).
     *   browser.debug({timeout: 6000})
     * };
     *
     * @see https://nightwatchjs.org/api/debug.html
     */
    debug(
        config?: { useGlobal?: boolean; preview?: boolean; timeout?: number },
        callback?: (this: NightwatchAPI) => void,
    ): Awaitable<this, undefined>;

    /**
     * A simple perform command which allows access to the Nightwatch API in a callback. Can be useful if you want to read variables set by other commands.
     *
     * The callback signature can have up to two parameters.
     *  - no parameters: callback runs and perform completes immediately at the end of the execution of the callback.
     *  - one parameter: allows for asynchronous execution within the callback providing a done callback function for completion as the first argument.
     *  - two parameters: allows for asynchronous execution with the Nightwatch `api` object passed in as the first argument, followed by the done callback.
     *
     * @example
     * describe('perform example', function() {
     *   var elementValue;
     *
     *   it('basic perform', function(browser) {
     *     browser
     *       .getValue('.some-element', function(result) {
     *         elementValue = result.value;
     *       })
     *       // other stuff going on ...
     *
     *       // self-completing callback
     *       .perform(function() {
     *         console.log('elementValue', elementValue);
     *         // without any defined parameters, perform
     *         // completes immediately (synchronously)
     *       })
     *
     *       // returning a Promise
     *       .perform(async function() {
     *         // `this` can be used to directly access Nightwatch API
     *         const sessionId = await this.sessionId;
     *         console.log('session id', sessionId);
     *       })
     *
     *       // DEPRECATED: asynchronous completion using done
     *       .perform(function(done: (result: string) => void) {
     *         // potentially some async stuff going on
     *         // `this` can be used to directly access Nightwatch API
     *         this.getTitle((result) => {
     *           // when finished, call the done callback
     *           done(result.value);
     *         });
     *       })
     *
     *       // DEPRECATED: asynchronous completion including api (client)
     *       .perform(function(client: NightwatchAPI, done: () => void) {
     *         this.navigateTo('https://google.com/', () => {
     *           done();
     *         });
     *       });
     *   });
     *
     *   it('perform with async', function(browser) {
     *     const result = await browser.perform(async function() {
     *       // `this` can be used to directly access Nightwatch API
     *       const pageTitle = await this.getTitle();
     *
     *       return 100;
     *     });
     *     console.log('result:', result); // 100
     *   })
     * };
     */
    perform<ReturnValue>(
        callback: (this: NightwatchAPI) => ReturnValue | Promise<ReturnValue>,
    ): Awaitable<this, ReturnValue>;
    perform<ReturnValue>(
        // tslint:disable-next-line unified-signatures
        callback: (this: NightwatchAPI, client: NightwatchAPI, done: (result?: ReturnValue) => void) => void,
    ): Awaitable<this, ReturnValue>;
    perform<ReturnValue>(
        // tslint:disable-next-line unified-signatures
        callback: (this: NightwatchAPI, done: (result?: ReturnValue) => void) => void,
    ): Awaitable<this, ReturnValue>;

    /**
     * Waits for a condition to evaluate to a "truthy" value. The condition may be specified by any function which
     * returns the value to be evaluated or a Promise to wait for.
     *
     * An optional wait time can be specified, otherwise the global waitForConditionTimeout value will be used.
     *
     * @example
     * describe('waitUntil Example', function() {
     *   it('demo Test', function(browser) {
     *     browser
     *       .url('https://nightwatchjs.org')
     *       .waitUntil(async function() {
     *         const title = await this.execute(function() {
     *           return document.title;
     *         });
     *
     *         return title === 'Nightwatch.js';
     *       }, 1000);
     *   });
     * });
     */
    waitUntil(
        conditionFn: (this: NightwatchAPI) => void,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    waitUntil(
        conditionFn: (this: NightwatchAPI) => void,
        waitTimeMs: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    waitUntil(
        conditionFn: (this: NightwatchAPI) => void,
        waitTimeMs: number,
        retryInterval: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    waitUntil(
        conditionFn: (this: NightwatchAPI) => void,
        waitTimeMs: number,
        retryInterval: number,
        message: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Resizes the current window.
     *
     * @example
     *  this.demoTest = function () {
     *    browser.resizeWindow(1000, 800);
     *  };
     *
     * @see https://nightwatchjs.org/api/resizeWindow.html
     */
    resizeWindow(
        width: number,
        height: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Take a screenshot of the current page and saves it as the given filename.
     *
     * @example
     *  this.demoTest = function (  ) {
     *    browser.saveScreenshot('/path/to/fileName.png');
     *  };
     *
     * @see https://nightwatchjs.org/api/saveScreenshot.html
     */
    saveScreenshot(
        fileName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/setCookie.html
     */
    setCookie(
        cookie: Cookie,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Sets the current window position.
     *
     * @example
     *  this.demoTest = function () {
     *    browser.setWindowPosition(0, 0);
     *  };
     *
     * @see https://nightwatchjs.org/api/setWindowPosition.html
     */
    setWindowPosition(
        offsetX: number,
        offsetY: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/setWindowRect.html
     */
    setWindowRect(
        options: WindowSizeAndPosition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Sets the current window position.
     *
     * @example
     *  this.demoTest = function () {
     *    browser.setWindowPosition(0, 0);
     *  };
     *
     * @see https://nightwatchjs.org/api/setWindowSize.html
     */
    setWindowSize(
        width: number,
        height: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute.
     *
     * To find out the window handle use `windowHandles` command
     *
     * @example
     *  this.demoTest = function () {
     *    browser.windowHandles(function(result) {
     *      const handle = result.value[0];
     *      browser.switchWindow(handle);
     *    });
     *  };
     *
     *  this.demoTestAsync = async function () {
     *    const result = await browser.windowHandles();
     *    const handle = result[0];
     *    browser.switchWindow(handle);
     *  };
     *
     * @alias switchToWindow
     *
     * @see https://nightwatchjs.org/api/switchWindow.html
     */
    switchWindow(
        handleOrName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute.
     *
     * To find out the window handle use `windowHandles` command
     *
     * @example
     *  this.demoTest = function () {
     *    browser.windowHandles(function(result) {
     *      const handle = result.value[0];
     *      browser.switchToWindow(handle);
     *    });
     *  };
     *
     *  this.demoTestAsync = async function () {
     *    const result = await browser.windowHandles();
     *    const handle = result[0];
     *    browser.switchToWindow(handle);
     *  };
     *
     * @see https://nightwatchjs.org/api/switchToWindow.html
     */
    switchToWindow(
        handleOrName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     *  @see https://nightwatchjs.org/api/getWindowRect.html
     */
    getWindowRect(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<WindowSizeAndPosition>,
        ) => void,
    ): Awaitable<this, WindowSizeAndPosition>;

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
     * @see https://nightwatchjs.org/api/getWindowSize.html
     */
    getWindowSize(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<WindowSizeAndPosition>,
        ) => void,
    ): Awaitable<this, WindowSizeAndPosition>;

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
     * @see https://nightwatchjs.org/api/getWindowPosition.html
     */
    getWindowPosition(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<WindowPosition>) => void,
    ): Awaitable<this, WindowPosition>;

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
     * @see https://nightwatchjs.org/api/pageSource.html
     */
    pageSource(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/urlHash.html
     */
    urlHash(
        hash: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Sets the locate strategy for selectors to `css selector`, therefore every following selector needs to be specified as css.
     *
     * @example
     * this.demoTest = function () {
     *   browser
     *     .useCss() // we're back to CSS now
     *     .setValue('input[type=text]', 'nightwatch');
     * };
     *
     * @see https://nightwatchjs.org/api/useCss.html
     */
    useCss(callback?: (this: NightwatchAPI) => void): Awaitable<this, undefined>;

    /**
     * Sets the locate strategy for selectors to xpath, therefore every following selector needs to be specified as xpath.
     *
     * @example
     * this.demoTest = function () {
     *   browser
     *     .useXpath() // every selector now must be xpath
     *     .click("//tr[@data-recordid]/span[text()='Search Text']");
     * };
     *
     * @see https://nightwatchjs.org/api/useXpath.html
     */
    useXpath(callback?: (this: NightwatchAPI) => void): Awaitable<this, undefined>;

    /**
     * Injects the axe-core js library into the current page (using the .executeScript() command) to be paired
     * with axeRun to evaluate the axe-core accessibility rules.
     *
     * @example
     * this.demoTest = function () {
     *   browser
     *     .url('https://nightwatchjs.org')
     *     .axeInject()
     *     .axeRun();
     * };
     *
     * @see https://nightwatchjs.org/api/axeInject.html
     */
    axeInject(): Awaitable<this, null>;

    /**
     * Analyzes the current page against applied axe rules.
     *
     * @example
     * this.demoTest = function () {
     *   browser
     *     .url('https://nightwatchjs.org')
     *     .axeInject()
     *     .axeRun(
     *        'body',
     *        { runOnly: ['color-contrast', 'image-alt'] }
     *     );
     * };
     *
     * @example
     * this.demoTest = function () {
     *   browser
     *     .url('https://nightwatchjs.org')
     *     .axeInject()
     *     .axeRun(
     *        'body',
     *        {
     *          'color-contrast': {
     *             enabled: false
     *            }
     *          },
     *        }
     *     );
     * };
     *
     * @param selector - CSS selector to scope rule analysis against, will cascade to child elements
     * @param options - Allows configuration of what rules will be run (accessibility standard or rules to enable/disable)
     * @see {@link https://www.deque.com/axe/core-documentation/api-documentation/#options-parameter}
     *
     * @see {@link https://nightwatchjs.org/api/axeRun.html}
     */
    axeRun(
        selector?: string,
        options?: { [key: string]: any },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
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
     *   describe('clearValue Command demo', function() {
     *     test('demo test', function() {
     *       browser.clearValue('#login input[type=text]');
     *
     *       browser.clearValue('#login input[type=text]', function(result) {
     *         console.log('clearValue result', result);
     *       });
     *
     *       // with explicit locate strategy
     *       browser.clearValue('css selector', '#login input[type=text]');
     *
     *       // with selector object - see https://nightwatchjs.org/guide#element-properties
     *       browser.clearValue({
     *         selector: '#login input[type=text]',
     *         index: 1,
     *         suppressNotFoundErrors: true
     *       });
     *
     *       browser.clearValue({
     *         selector: '#login input[type=text]',
     *         timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *       });
     *
     *     });
     *
     *   });
     *
     * @see https://nightwatchjs.org/api/clearValue.html
     */
    clearValue(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    clearValue(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/click.html
     */
    click(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    click(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/getAttribute.html
     */
    getAttribute(
        selector: Definition,
        attribute: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<this, string | null>;
    getAttribute(
        using: LocateStrategy,
        selector: Definition,
        attribute: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<this, string | null>;

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
     * @see https://nightwatchjs.org/api/getCssProperty.html
     */
    getCssProperty(
        selector: Definition,
        cssProperty: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    getCssProperty(
        using: LocateStrategy,
        selector: Definition,
        cssProperty: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/getElementSize.html
     */
    getElementSize(
        selector: Definition,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<NightwatchSizeAndPosition>,
        ) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;
    getElementSize(
        using: LocateStrategy,
        selector: Definition,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<NightwatchSizeAndPosition>,
        ) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;

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
     * @see https://nightwatchjs.org/api/getLocation.html
     */
    getLocation(
        selector: Definition,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<NightwatchSizeAndPosition>,
        ) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;
    getLocation(
        using: LocateStrategy,
        selector: Definition,
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<NightwatchSizeAndPosition>,
        ) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;

    /**
     * Determine an element's location on the screen once it has been scrolled into view.
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
     * @see https://nightwatchjs.org/api/getLocationInView.html
     *
     * @deprecated This is a JSON Wire Protocol command and is no longer supported.
     */
    getLocationInView(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchPosition>) => void,
    ): Awaitable<this, NightwatchPosition>;
    getLocationInView(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchPosition>) => void,
    ): Awaitable<this, NightwatchPosition>;

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
     * @see https://nightwatchjs.org/api/getTagName.html
     */
    getTagName(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    getTagName(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/getText.html
     */
    getText(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    getText(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/getValue.html
     */
    getValue(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    getValue(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/isVisible.html
     */
    isVisible(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;
    isVisible(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Determines if an element is present in the DOM.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.isPresent('#main ul li a.first', function(result) {
     *       this.assert.equal(typeof result, "object");
     *       this.assert.equal(result.status, 0);
     *       this.assert.equal(result.value, true);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.isPresent('css selector', '#main ul li a.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.isPresent({
     *       selector: '#main ul li a',
     *       index: 1,
     *     });
     *
     *     browser.isPresent({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function(browser) {
     *     const result = await browser.isPresent('#main ul li a.first');
     *     console.log('isPresent result', result);
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/isPresent.html
     */
    isPresent(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;
    isPresent(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Move the mouse by an offset of the specified element. If an element is provided but no offset, the mouse will be moved to the center of the element.
     * If the element is not visible, it will be scrolled into view.
     *
     * @example
     * this.demoTest = function () {
     *   browser.moveToElement('#main', 10, 10);
     * };
     *
     * @see https://nightwatchjs.org/api/moveToElement.html
     */
    moveToElement(
        selector: Definition,
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    moveToElement(
        using: LocateStrategy,
        selector: Definition,
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Sends some text to an element. Can be used to set the value of a form element or to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
     *
     * From Nightwatch v2, **setValue** also clears the existing value of the element by calling the **clearValue()** beforehand.
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
     * @see https://nightwatchjs.org/api/setValue.html
     */
    setValue(
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    setValue(
        using: LocateStrategy,
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Types a key sequence on the DOM element. Can be used to send a sequence of key strokes to an element.
     * Any UTF-8 character may be specified.
     *
     * **sendKeys** does not clear the existing value of the element. To do so, use **setValue()** instead.
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
     * @see https://nightwatchjs.org/api/sendKeys.html
     */
    sendKeys(
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    sendKeys(
        using: LocateStrategy,
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. Uses `submit` protocol command.
     *
     * @example
     * this.demoTest = function () {
     *   browser.submitForm('form.login');
     * };
     *
     * @see https://nightwatchjs.org/api/submitForm.html
     */
    submitForm(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    submitForm(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Opposite of `waitForElementPresent`. Waits a given time in milliseconds (default 5000ms)
     * for an element to be not present (i.e. removed) in the page before performing
     * any other commands or assertions.
     * If the element is still present after the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @returns `null` if element not found, `Error` otherwise.
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
     * @see https://nightwatchjs.org/api/waitForElementNotPresent.html
     * @since v0.4.0
     */
    waitForElementNotPresent(
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null | ElementResult[]>) => void,
        message?: string,
    ): Awaitable<this, null | Error>;
    waitForElementNotPresent(
        using: LocateStrategy,
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null | ElementResult[]>) => void,
        message?: string,
    ): Awaitable<this, null | Error>;

    /**
     * Opposite of `waitForElementVisible`. Waits a given time in milliseconds (default 5000ms)
     * for an element to be not visible (i.e. hidden but existing) in the page before
     * performing any other commands or assertions.
     * If the element fails to be hidden in the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @returns `false` if element not visible, `Error` otherwise.
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
     * @see https://nightwatchjs.org/api/waitForElementNotVisible.html
     */
    waitForElementNotVisible(
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
        message?: string,
    ): Awaitable<this, false | Error>;
    waitForElementNotVisible(
        using: LocateStrategy,
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
        message?: string,
    ): Awaitable<this, false | Error>;

    /**
     * Waits a given time in milliseconds (default 5000ms) for an element to be present in the page before performing any other commands or assertions.
     * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     * Similarly, the default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @returns `ElementResult[]` if element is found, `Error` otherwise.
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
     * @see https://nightwatchjs.org/api/waitForElementPresent.html
     */
    waitForElementPresent(
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementResult[] | null>) => void,
        message?: string,
    ): Awaitable<this, ElementResult[] | Error>;
    waitForElementPresent(
        using: LocateStrategy,
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementResult[] | null>) => void,
        message?: string,
    ): Awaitable<this, ElementResult[] | Error>;

    /**
     * Waits a given time in milliseconds for an element to be visible in the page before performing any other commands or assertions.
     *
     * If the element fails to be present and visible in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @returns `true` is element is visible, `Error` otherwise.
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
     *
     * @see https://nightwatchjs.org/api/waitForElementVisible.html
     */
    waitForElementVisible(
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
        message?: string,
    ): Awaitable<this, true | Error>;

    waitForElementVisible(
        using: LocateStrategy,
        selector: Definition,
        time?: number,
        poll?: number,
        abortOnFailure?: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
        message?: string,
    ): Awaitable<this, true | Error>;

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
     * @see https://nightwatchjs.org/api/getAccessibleName.html
     */
    getAccessibleName(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    getAccessibleName(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     * @see https://nightwatchjs.org/api/getAriaRole.html
     */
    getAriaRole(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    getAriaRole(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

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
     *
     * @see https://nightwatchjs.org/api/getElementRect.html
     */
    getElementRect(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchSizeAndPosition>) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;
    getElementRect(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchSizeAndPosition>) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;

    /**
     * Uploads file to an element using absolute file path.
     *
     * @example
     * // send a file to for upload to a field.
     * this.demoTest = function (browser) {
     *   browser.uploadFile('#myFile', '/path/file.pdf');
     * };
     *
     * @see https://nightwatchjs.org/api/uploadFile.html
     */
    uploadFile(
        selector: Definition,
        filePath: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    uploadFile(
        using: LocateStrategy,
        selector: Definition,
        filePath: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Sends some text to an element. Can be used to set the value of a form element or
     *  to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
     *
     * <div class="alert alert-warning"><strong>updateValue</strong> is equivalent
     * with <strong>setValue</strong> and <strong>sendKeys</strong> with the exception
     * that it clears the value beforehand.</div>
     *
     * An object map with available keys and their respective UTF-8 characters,
     * as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `browser.Keys`.
     *
     * @example
     * // send some simple text to an input
     * this.demoTest = function (browser) {
     *   browser.updateValue('input[type=text]', 'nightwatch');
     * };
     *
     * // send some text to an input and hit enter.
     * this.demoTest = function (browser) {
     *   browser.updateValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     *
     * @see https://nightwatchjs.org/api/updateValue.html
     */
    updateValue(
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    updateValue(
        using: LocateStrategy,
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    /**
     * Drag an element to the given position or destination element.
     *
     * @example
     * module.exports = {
     *   demoTest(browser) {
     *     browser.dragAndDrop('#main', {x: 100, y:100}):
     *
     *  //using webElement as a destination
     *   demoTestAsync: async function(browser) {
     *     const destination = await browser.findElement('#upload');
     *     browser.dragAndDrop('#main', destination.getId());
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/dragAndDrop.html
     */
    dragAndDrop(
        selector: Definition,
        destination: NightwatchElement | NightwatchPosition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    dragAndDrop(
        using: LocateStrategy,
        selector: Definition,
        destination: NightwatchElement | NightwatchPosition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Returns an element's first child. The child element will be returned as web
     * element JSON object (with an added .getId() convenience method).
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElement = await browser.getFirstElementChild('.features-container');
     *
     *     console.log('last child element Id:', resultElement.getId());
     *   },
     *
     * @see https://nightwatchjs.org/api/getFirstElementChild.html
     */
    getFirstElementChild(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;
    getFirstElementChild(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;

    /**
     * Returns an element's last child. The child element will be returned
     * as web element JSON object (with an added .getId() convenience method).
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElement = await browser.getLastElementChild('.features-container');
     *
     *     console.log('last child element Id:', resultElement.getId());
     *   },
     *
     * @see https://nightwatchjs.org/api/getLastElementChild.html
     */
    getLastElementChild(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;
    getLastElementChild(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;

    /**
     * Returns the element immediately following the specified one in their parent's childNodes.
     * The element will be returned as web element JSON object (with an added .getId() convenience method).
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElement = await browser.getNextSibling('.features-container li:first-child');
     *
     *     console.log('next sibling element Id:', resultElement.getId());
     *   },
     *
     * @see https://nightwatchjs.org/api/getNextSibling.html
     */
    getNextSibling(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;
    getNextSibling(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;

    /**
     *  Returns the element immediately preceding the specified one in its parent's child elements list.
     * The element will be returned as web element JSON object (with an added `.getId()` convenience method).
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElement = await browser.getPreviousSibling('.features-container li:second-child');
     *
     *     console.log('previous sibling element Id:', resultElement.getId());
     *   },
     *
     * browser.getPreviousSibling('#web-button', function(result) {
     *
     *   console.log(result.value)
     * }})
     * await browser.getPreviousSibling('#web-button')
     * await browser.getPreviousSibling({selector: '#web-button', locateStrategy: 'css selector'})
     *
     * // with global element():
     * const formEl = element('form');
     * const result = await browser.getPreviousSibling(formEl)
     *
     * // with Selenium By() locators
     * // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html
     * const locator = by.tagName('form');
     * const result = await browser.getPreviousSibling(locator)
     *
     * // with browser.findElement()
     * const formEl = await browser.findElement('form');
     * const result = await browser.getPreviousSibling(formEl)
     *
     * @see https://nightwatchjs.org/api/getPreviousSibling.html
     */
    getPreviousSibling(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;
    getPreviousSibling(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;

    /**
     * Returns true or false based on whether the DOM has any child nodes
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const result = await browser.hasDescendants('.features-container');
     *
     *     console.log('true or false:', result);
     *   },
     *
     * @see https://nightwatchjs.org/api/hasDescendants.html
     */
    hasDescendants(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;
    hasDescendants(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Returns the `shadowRoot` read-only property which represents the shadow root hosted by the element.
     *  This can further be used to retrieve elements part of the shadow root element.
     *
     * @example
     * describe('Shadow Root example test', function() {
     *   it('retrieve the shadowRoot', async function(browser) {
     *      await browser
     *        .navigateTo('https://mdn.github.io/web-components-examples/popup-info-box-web-component/')
     *        .waitForElementVisible('form');
     *
     *      const shadowRootEl = await browser.getShadowRoot('popup-info');
     *      const infoElement = await shadowRootEl.find('.info');
     *
     *      await expect(infoElement.property('innerHTML')).to.include('card validation code');
     *      const iconElement = await shadowRootEl.find('.icon');
     *      const firstElement = await browser.getFirstElementChild(iconElement);
     *
     *      await expect.element(firstElement).to.be.an('img');
     *    });
     * });
     *
     * @see https://nightwatchjs.org/api/getShadowRoot.html
     */
    getShadowRoot(
        selector: Definition | WebElement,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementGlobal | null>) => void,
    ): Awaitable<this, ElementGlobal | null>;
    getShadowRoot(
        using: LocateStrategy,
        selector: Definition | WebElement,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementGlobal | null>) => void,
    ): Awaitable<this, ElementGlobal | null>;

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
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/findElement.html
     */
    findElement(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;
    findElement(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT>;

    /**
     * Search for multiple elements on the page, starting from the document root. The located elements will be returned as web element JSON objects (with an added .getId() convenience method).
     * First argument is the element selector, either specified as a string or as an object (with 'selector' and 'locateStrategy' properties).
     *
     * @example
     * module.exports = {
     *  'demo Test': function(browser) {
     *     const resultElements = await browser.findElements('.features-container li');
     *
     *     resultElements.forEach(item => console.log('Element Id:', item.getId()));
     *   },
     *
     * @see https://nightwatchjs.org/api/findElements.html
     */
    findElements(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT[]>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT[]>;
    findElements(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<JSON_WEB_OBJECT[]>) => void,
    ): Awaitable<this, JSON_WEB_OBJECT[]>;

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
     * @see https://nightwatchjs.org/api/getElementProperty.html
     */
    getElementProperty(
        selector: Definition,
        property: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void,
    ): Awaitable<this, any>;
    getElementProperty(
        using: LocateStrategy,
        selector: Definition,
        property: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void,
    ): Awaitable<this, any>;

    /**
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
     * @see https://nightwatchjs.org/api/isEnabled.html
     */
    isEnabled(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;
    isEnabled(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
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
     * @see https://nightwatchjs.org/api/isSelected.html
     */
    isSelected(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;
    isSelected(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
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
     * @see https://nightwatchjs.org/api/setAttribute.html
     */
    setAttribute(
        selector: Definition,
        attribute: string,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;
    setAttribute(
        using: LocateStrategy,
        selector: Definition,
        attribute: string,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
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
     */
    setPassword(
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    setPassword(
        using: LocateStrategy,
        selector: Definition,
        inputValue: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
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
     * @see https://nightwatchjs.org/api/takeElementScreenshot.html
     */
    takeElementScreenshot(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    takeElementScreenshot(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
}

export interface AppiumCommands {
    /**
     * Get the current device orientation.
     *
     * @example
     * module.exports = {
     *   'get current device orientation': function (app) {
     *     app
     *       .appium.getOrientation(function (result) {
     *         console.log('current device orientation is:', result.value);
     *       });
     *   },
     *
     *   'get current device orientation with ES6 async/await': async function (app) {
     *     const orientation = await app.appium.getOrientation();
     *     console.log('current device orientation is:', orientation);
     *   }
     * };
     */
    getOrientation(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<"LANDSCAPE" | "PORTRAIT">) => void,
    ): Awaitable<NightwatchAPI, "LANDSCAPE" | "PORTRAIT">;

    /**
     * Set the current device orientation.
     *
     * @example
     * module.exports = {
     *   'set orientation to LANDSCAPE': function (app) {
     *     app
     *       .appium.setOrientation('LANDSCAPE');
     *   }
     * };
     */
    setOrientation(
        orientation: "LANDSCAPE" | "PORTRAIT",
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<"LANDSCAPE" | "PORTRAIT">) => void,
    ): Awaitable<NightwatchAPI, "LANDSCAPE" | "PORTRAIT">;

    /**
     * Get a list of the available contexts. Used when testing hybrid mobile apps using Appium.
     *
     * More info here: https://appium.io/docs/en/commands/context/get-contexts/
     *
     * @example
     * module.exports = {
     *   'get available contexts': function (app) {
     *     app
     *       .appium.getContexts(function (result) {
     *         console.log('the available contexts are:', result.value);
     *       });
     *   },
     *
     *   'get available contexts with ES6 async/await': async function (app) {
     *     const contexts = await app.appium.getContexts();
     *     console.log('the available contexts are:', contexts);
     *   }
     * };
     */
    getContexts(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string[]>) => void,
    ): Awaitable<NightwatchAPI, string[]>;

    /**
     * Get the current context in which Appium is running. Used when testing hybrid mobile apps using Appium.
     *
     * More info here: https://appium.io/docs/en/commands/context/get-context/
     *
     * @example
     * module.exports = {
     *   'get current context': function (app) {
     *     app
     *       .appium.getContext(function (result) {
     *         console.log('the current context is:', result.value);
     *       });
     *   },
     *
     *   'get current context with ES6 async/await': async function (app) {
     *     const context = await app.appium.getContext();
     *     console.log('the current context is:', context);
     *   }
     * };
     */
    getContext(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<NightwatchAPI, string | null>;

    /**
     * Set the context to be automated. Used when testing hybrid mobile apps using Appium.
     *
     * More info here: https://appium.io/docs/en/commands/context/set-context/
     *
     * @example
     * module.exports = {
     *   'switch to webview context': async function (app) {
     *     app
     *       .waitUntil(async function() {
     *         // wait for webview context to be available
     *         // initially, this.getContexts() only returns ['NATIVE_APP']
     *         const contexts = await this.appium.getContexts();
     *
     *         return contexts.length > 1;
     *       })
     *       .perform(async function() {
     *         // switch to webview context
     *         const contexts = await this.appium.getContexts();  // contexts: ['NATIVE_APP', 'WEBVIEW_<id>']
     *         await this.appium.setContext(contexts[1]);
     *       });
     *   },
     *
     *   'switch to native context': function (app) {
     *     app.appium.setContext('NATIVE_APP');
     *   }
     * };
     */
    setContext(
        context: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Start an Android activity by providing package name, activity name and other optional parameters.
     *
     * More info here: https://appium.io/docs/en/commands/device/activity/start-activity/
     *
     * @example
     * module.exports = {
     *   'start an android activity': function (app) {
     *     app
     *       .appium.startActivity({
     *         appPackage: 'com.android.chrome',
     *         appActivity: 'com.google.android.apps.chrome.Main'
     *       });
     *   },
     *
     *   'start the main Android activity and wait for onboarding activity to start': function (app) {
     *     app
     *       .appium.startActivity({
     *         appPackage: 'org.wikipedia',
     *         appActivity: 'org.wikipedia.main.MainActivity',
     *         appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity'
     *       });
     *   }
     * };
     */
    startActivity(
        opts: {
            appPackage: string;
            appActivity: string;
            appWaitPackage?: string;
            appWaitActivity?: string;
            intentAction?: string;
            intentCategory?: string;
            intentFlags?: string;
            optionalIntentArguments?: string;
            dontStopAppOnReset?: boolean;
        },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Get the name of the current Android activity.
     *
     * @example
     * module.exports = {
     *   'get current activity name': function (app) {
     *     app
     *       .appium.getCurrentActivity(function (result) {
     *         console.log('current android activity is:', result.value);
     *       });
     *   },
     *
     *   'get current activity name with ES6 async/await': async function (app) {
     *     const activity = await app.appium.getCurrentActivity();
     *     console.log('current android activity is:', activity);
     *   }
     * };
     */
    getCurrentActivity(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;

    /**
     * Get the name of the current Android package.
     *
     * @example
     * module.exports = {
     *   'get current package name': function (app) {
     *     app
     *       .appium.getCurrentPackage(function (result) {
     *         console.log('current android package is:', result.value);
     *       });
     *   },
     *
     *   'get current package name with ES6 async/await': async function (app) {
     *     const packageName = await app.appium.getCurrentPackage();
     *     console.log('current android package is:', packageName);
     *   }
     * };
     */
    getCurrentPackage(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<NightwatchAPI, string>;

    /**
     * Get the current geolocation of the mobile device.
     *
     * @example
     * module.exports = {
     *   'get device geolocation': function (app) {
     *     app
     *       .appium.getGeolocation(function (result) {
     *         console.log('current device geolocation is:', result.value);
     *       });
     *   },
     *
     *   'get device geolocation with ES6 async/await': async function (app) {
     *     const location = await app.appium.getGeolocation();
     *     console.log('current device geolocation is:', location);
     *   }
     * };
     */
    getGeolocation(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<AppiumGeolocation>) => void,
    ): Awaitable<NightwatchAPI, AppiumGeolocation>;

    /**
     * Set the current geolocation of the mobile device.
     *
     * @example
     * module.exports = {
     *   'set geolocation to Tokyo, Japan': function (app) {
     *     app
     *       .appium.setGeolocation({latitude: 35.689487, longitude: 139.691706, altitude: 5});
     *   },
     *
     *   'set geolocation to Tokyo, Japan with ES6 async/await': async function (app) {
     *     await app.appium.setGeolocation({latitude: 35.689487, longitude: 139.691706});
     *   }
     * };
     */
    setGeolocation(
        coordinates: AppiumGeolocation,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<AppiumGeolocation>) => void,
    ): Awaitable<NightwatchAPI, AppiumGeolocation>;

    /**
     * Press a particular key on an Android Device.
     *
     * See [official Android Developers docs](https://developer.android.com/reference/android/view/KeyEvent.html) for reference of available Android key code values.
     *
     * @example
     * module.exports = {
     *   'press e with caps lock on (keycode 33 and metastate 1048576)': function (app) {
     *     app
     *       .appium.pressKeyCode(33, 1048576);
     *   },
     *
     *   'press g (keycode 35) with ES6 async/await': async function (app) {
     *     await app.appium.pressKeyCode(35);
     *   }
     * };
     */
    pressKeyCode(
        keycode: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;
    pressKeyCode(
        keycode: number,
        metastate?: number,
        flags?: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Press and hold a particular key on an Android Device.
     *
     * See [official Android Developers docs](https://developer.android.com/reference/android/view/KeyEvent.html) for reference of available Android key code values.
     *
     * @example
     * module.exports = {
     *   'long press e with caps lock on (keycode 33 and metastate 1048576)': function (app) {
     *     app
     *       .appium.longPressKeyCode(33, 1048576);
     *   },
     *
     *   'long press g (keycode 35) with ES6 async/await': async function (app) {
     *     await app.appium.longPressKeyCode(35);
     *   }
     * };
     */
    longPressKeyCode(
        keycode: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;
    longPressKeyCode(
        keycode: number,
        metastate?: number,
        flags?: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<NightwatchAPI, null>;

    /**
     * Hide soft keyboard.
     *
     * @example
     * module.exports = {
     *   'hide device soft keyboard': function (app) {
     *     app
     *       .appium.hideKeyboard();
     *   },
     *
     *   'hide device soft keyboard with ES6 async/await': async function (app) {
     *     await app.appium.hideKeyboard();
     *   }
     * };
     */
    hideKeyboard(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<NightwatchAPI, boolean>;

    /**
     * Whether or not the soft keyboard is shown.
     *
     * @example
     * module.exports = {
     *   'whether keyboard is shown': function (app) {
     *     app
     *       .appium.isKeyboardShown(function (result) {
     *         console.log('result value of whether keyboard is shown:', result.value);
     *       });
     *   },
     *
     *   'whether keyboard is shown with ES6 async/await': async function (app) {
     *     const result = await app.appium.isKeyboardShown();
     *     console.log('result value of whether keyboard is shown:', result);
     *   }
     * };
     */
    isKeyboardShown(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<NightwatchAPI, boolean>;
}

export interface WebDriverProtocol
    extends
        WebDriverProtocolSessions,
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
        WebDriverProtocolMobileRelated
{}

export interface NightwatchServerStatusResult {
    build: { version: string; revision: string; time: string };
    status: { arch: string; name: string; version: string };
}

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
     *
     * @see https://nightwatchjs.org/api/session.html#apimethod-container
     */
    session(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Record<string, any>>) => void,
    ): Awaitable<this, Record<string, any>>;
    session(
        actionOrSessionId: "get" | "post" | "delete" | "GET" | "POST" | "DELETE" | string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Record<string, any>>) => void,
    ): Awaitable<this, Record<string, any>>;
    session(
        action: "get" | "post" | "delete" | "GET" | "POST" | "DELETE",
        sessionId: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Record<string, any>>) => void,
    ): Awaitable<this, Record<string, any>>;

    /**
     * Returns a list of the currently active sessions.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.sessions(function(result) {
     *      console.log(result.value);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/sessions.html
     */
    sessions(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Array<Record<string, any>>>) => void,
    ): Awaitable<this, Array<Record<string, any>>>;

    /**
     * Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.timeouts('script', 10000, function(result) {
     *      console.log(result);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/timeouts.html
     */
    timeouts(
        typeOfOperation: "script" | "implicit" | "pageLoad",
        ms: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    timeouts(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<{ script: number; implicit: number; pageLoad: number }>,
        ) => void,
    ): Awaitable<this, { script: number; implicit: number; pageLoad: number }>;

    /**
     * Set the amount of time, in milliseconds, that asynchronous scripts executed by `.executeAsync` are permitted to run before they are aborted and a |Timeout| error is returned to the client.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.timeoutsAsyncScript(10000, function(result) {
     *      console.log(result);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/timeoutsAsyncScript.html
     */
    timeoutsAsyncScript(
        ms: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Set the amount of time the driver should wait when searching for elements. If this command is never sent, the driver will default to an implicit wait of 0ms.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.timeoutsImplicitWait(10000, function(result) {
     *      console.log(result);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/timeoutsImplicitWait.html
     */
    timeoutsImplicitWait(
        ms: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Query the server's current status.
     *
     * @see https://nightwatchjs.org/api/status.html
     */
    status(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<NightwatchServerStatusResult>,
        ) => void,
    ): Awaitable<this, NightwatchServerStatusResult>;

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
     *  }
     *
     * @see https://nightwatchjs.org/api/sessionLog.html
     */
    sessionLog(
        typeString: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchLogEntry[]>) => void,
    ): Awaitable<this, NightwatchLogEntry[]>;

    /**
     * Gets an array of strings for which log types are available. This methods returns the entire WebDriver response, if you are only interested in the logs array, use `.getLogTypes()` instead.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.sessionLogTypes(function(result) {
     *      console.log(result.value);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/sessionLogTypes.html
     */
    sessionLogTypes(
        callback?: (
            this: NightwatchAPI,
            result: NightwatchCallbackResult<NightwatchLogTypes[]>,
        ) => void,
    ): Awaitable<this, NightwatchLogTypes[]>;

    /**
     * Command to set Chrome network emulation settings.
     *
     * @example
     *  this.demoTest = function() {
     *    browser.setNetworkConditions({
     *      offline: false,
     *      latency: 50000,
     *      download_throughput: 450 * 1024,
     *      upload_throughput: 150 * 1024
     *    });
     *  };
     *
     * @see https://nightwatchjs.org/api/setNetworkConditions.html
     */
    setNetworkConditions(
        spec: {
            offline: boolean;
            latency: number;
            download_throughput: number;
            upload_throughput: number;
        },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
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
     *
     * @see https://nightwatchjs.org/api/url.html
     */
    url(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): Awaitable<this, string>;
    url(
        url: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Navigate backwards in the browser history, if possible.
     *
     * @see https://nightwatchjs.org/api/back.html
     */
    back(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): Awaitable<this, null>;

    /**
     * Navigate forwards in the browser history, if possible.
     *
     * @see https://nightwatchjs.org/api/forward.html
     */
    forward(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): Awaitable<this, null>;

    /**
     * Refresh the current page.
     *
     * @see https://nightwatchjs.org/api/refresh.html
     */
    refresh(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): Awaitable<this, null>;

    /**
     * Get the current page title.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.title(function(result) {
     *      console.log(result.value);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/title.html
     */
    title(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): Awaitable<this, string>;
}

export interface WebDriverProtocolCommandContexts {
    /**
     * Change focus to another window or close the current window.
     * Shouldn't normally be used directly, instead `.switchWindow()` and `.closeWindow()` should be used.
     *
     * @see https://nightwatchjs.org/api/window.html
     *
     * @deprecated Use `.switchWindow()` and `.closeWindow()` instead.
     */
    window(
        method: "post" | "delete" | "POST" | "DELETE",
        handleOrName?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Retrieve the current window handle.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowHandle(function(result) {
     *      console.log(result.value);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/windowHandle.html
     */
    windowHandle(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

    /**
     * Retrieve the list of all window handles available to the session.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowHandles(function(result) {
     *      // An array of window handles.
     *      console.log(result.value);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/windowHandles.html
     */
    windowHandles(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string[]>) => void,
    ): Awaitable<this, string[]>;

    /**
     * Increases the window to the maximum available size without going full-screen.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.windowMaximize('current', function(result) {
     *      console.log(result);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/windowMaximize.html
     */
    windowMaximize(
        handleOrName?: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     *  }
     *
     * @see https://nightwatchjs.org/api/windowPosition.html
     */
    windowPosition(
        windowHandle: string,
        offsetX: number,
        offsetY: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    windowPosition(
        windowHandle: string,
        callback: (this: NightwatchAPI, result: NightwatchCallbackResult<WindowPosition>) => void,
    ): Awaitable<this, WindowPosition>;

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
     *  }
     *
     * @see https://nightwatchjs.org/api/windowSize.html
     */
    windowSize(
        windowHandle: string,
        width: number,
        height: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    windowSize(
        windowHandle: string,
        callback: (this: NightwatchAPI, result: NightwatchCallbackResult<WindowSizeAndPosition>) => void,
    ): Awaitable<this, WindowSizeAndPosition>;

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
     *
     * @see https://nightwatchjs.org/api/windowRect.html
     */
    windowRect(
        options: { width?: number; height?: number; x?: number; y?: number },
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    windowRect(
        options: null,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<WindowSizeAndPosition>) => void,
    ): Awaitable<this, WindowSizeAndPosition>;

    /**
     * Change focus to another frame on the page. If the frame id is missing or null, the server should switch to the page's default content.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.frame('<ID>', function(result) {
     *      console.log(result);
     *    });
     *  }
     *
     * @see https://nightwatchjs.org/api/frame.html
     */
    frame(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    frame(
        frameId: WebElement | string | number | null,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.frameParent(function(result) {
     *      console.log(result);
     *    });
     *  }
     *
     * @since v0.4.8
     *
     * @see https://nightwatchjs.org/api/frameParent.html
     */
    frameParent(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
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
     *     console.log('result value is:', result);
     *   },
     *
     *   'demo Test with page object': function(browser) {
     *     const loginPage = browser.page.login();
     *     loginPage.api.element('@resultContainer', function(result) {
     *       console.log(result.value)
     *     });
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/element.html
     */
    element(
        using: LocateStrategy,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementResult>) => void,
    ): Awaitable<this, ElementResult>;

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
     *     console.log('result value is:', result);
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
     *
     * @see https://nightwatchjs.org/api/elements.html
     */
    elements(
        using: LocateStrategy,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementResult[]>) => void,
    ): Awaitable<this, ElementResult[]>;

    /**
     * Search for an element on the page, starting from the identified element. The located element will be returned as a Web Element JSON object.
     *
     * This command operates on a protocol level and requires a [Web Element ID](https://www.w3.org/TR/webdriver1/#dfn-web-elements).
     * Read more on [Element retrieval](https://www.w3.org/TR/webdriver1/#element-retrieval) on the W3C WebDriver spec page.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.findElement('.some-element', (result) => {
     *       this.elementIdElement(result.value.getId(), 'css selector', '.new-element', function(result) {
     *         console.log(result.value);
     *       });
     *     });
     *   },
     *
     *   'es6 async demo Test': async function(browser) {
     *     const elementObject = await browser.findElement('.some-element');
     *     const result = await browser.elementIdElement(elementId.getId(), 'css selector', '.new-element');
     *     console.log(result);
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/elementIdElement.html
     */
    elementIdElement(
        id: string,
        using: LocateStrategy,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementResult | []>) => void,
    ): Awaitable<this, ElementResult | []>;

    /**
     * Search for multiple elements on the page, starting from the identified element. The located element will be returned as a web element JSON objects.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.findElement('#main', (result) => {
     *       browser.elementIdElements(result.value.getId(), 'css selector', 'ul li', function(result) {
     *         console.log(result.value)
     *       });
     *     });
     *   },
     *
     *   'es6 async demo Test': async function(browser) {
     *     const elementObject = await browser.findElement('#main');
     *     const result = await browser.elementIdElements(elementObject.getId(), 'css selector', 'ul li');
     *     console.log(result);
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/elementIdElements.html
     */
    elementIdElements(
        id: string,
        using: LocateStrategy,
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ElementResult[]>) => void,
    ): Awaitable<this, ElementResult[]>;

    /**
     * Move to the element and performs a double-click in the middle of the given element if
     * element is given else double-clicks at the current mouse coordinates (set by `.moveTo()`).
     */
    elementIdDoubleClick(
        webElementId: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Retrieve the value of a specified DOM property for the given element.
     * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
     */
    elementIdProperty(
        webElementId: string,
        DOMPropertyName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<any>) => void,
    ): Awaitable<this, any>;

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
     *
     * @see https://nightwatchjs.org/api/elementIdEquals.html
     *
     * @deprecated In favour of WebElement.equals(a, b) from Selenium Webdriver.
     */
    elementIdEquals(
        id: string,
        otherId: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Get the element on the page that currently has focus.
     * The element will be returned as a [Web Element](https://www.w3.org/TR/webdriver1/#dfn-web-elements) id.
     *
     * @example
     * module.exports = {
     *  'demo Test' : function(browser) {
     *     browser.elementActive(function(result) {
     *       console.log(result.value)
     *     });
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/elementActive.html
     */
    elementActive(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
}

export interface WebDriverProtocolElementState {
    /**
     * Get the value of an element's attribute.
     *
     * @see https://nightwatchjs.org/api/elementIdAttribute.html
     */
    elementIdAttribute(
        id: string,
        attributeName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<this, string | null>;

    /**
     * Retrieve the computed value of the given CSS property of the given element.
     *
     * The CSS property to query should be specified using the CSS property name, not the JavaScript property name (e.g. background-color instead of backgroundColor).
     *
     * @see https://nightwatchjs.org/api/elementIdCssProperty.html
     */
    elementIdCssProperty(
        id: string,
        cssPropertyName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

    /**
     * Determine if an element is currently displayed.
     *
     * @see https://nightwatchjs.org/api/elementIdDisplayed.html#apimethod-container
     */
    elementIdDisplayed(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Determine if an element is currently enabled.
     *
     * @see https://nightwatchjs.org/api/elementIdEnabled.html#apimethod-container
     */
    elementIdEnabled(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Retrieve the qualified tag name of the given element.
     *
     * @see https://nightwatchjs.org/api/elementIdName.html#apimethod-container
     */
    elementIdName(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

    /**
     * Determine if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
     *
     * @see https://nightwatchjs.org/api/elementIdSelected.html#apimethod-container
     */
    elementIdSelected(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void,
    ): Awaitable<this, boolean>;

    /**
     * Determine an element's size in pixels. The size will be returned as a JSON object with width and height properties.
     *
     * @see https://nightwatchjs.org/api/elementIdSize.html#apimethod-container
     *
     * @deprecated In favour of .getElementRect()
     */
    elementIdSize(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchSizeAndPosition>) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;

    /**
     * Returns the visible text for the element.
     *
     * @see https://nightwatchjs.org/api/elementIdText.html#apimethod-container
     */
    elementIdText(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
}

export interface WebDriverProtocolElementInteraction {
    /**
     * Scrolls into view a submittable element excluding buttons or editable element, and then attempts to clear its value, reset the checked state, or text content.
     *
     * @example
     * browser.elementIdClear(elementId);
     *
     * @see https://nightwatchjs.org/api/elementIdClear.html#apimethod-container
     */
    elementIdClear(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Scrolls into view the element and clicks the in-view center point.
     * If the element is not pointer-interactable,
     * an <code>element not interactable</code> error is returned.
     *
     * @example
     * browser.elementIdClick(elementId);
     *
     * @see https://nightwatchjs.org/api/elementIdClick.html#apimethod-container
     */
    elementIdClick(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Scrolls into view the form control element and then sends the provided keys to the element, or returns the current value of the element.
     * In case the element is not keyboard interactable, an <code>element not interactable error</code> is returned.
     *
     * @see https://nightwatchjs.org/api/elementIdValue.html#apimethod-container
     *
     * @deprecated In favour of .getValue() and .setValue()
     */
    elementIdValue(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    elementIdValue(
        id: string,
        value: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Send a sequence of key strokes to the active element. The sequence is defined in the same format as the `sendKeys` command.
     * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `client.Keys`.
     *
     * Rather than the `setValue`, the modifiers are not released at the end of the call. The state of the modifier keys is kept between calls,
     * so mouse interactions can be performed while modifier keys are depressed.
     *
     * Since v2.0, this command is deprecated. It is only available on older JSONWire-based drivers.
     * Please use the new [User Actions API](https://nightwatchjs.org/api/useractions/#overview).
     *
     * @example
     * browser
     * .keys(browser.Keys.CONTROL) // hold down CONTROL key
     * .click('#element')
     * .keys(browser.Keys.NULL) // release all keys
     *
     * @see https://nightwatchjs.org/api/keys.html#apimethod-container
     *
     * @deprecated Please use the [User Actions API](https://nightwatchjs.org/api/useractions/#overview) API instead
     */
    keys(
        keysToSend: string | string[],
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element.
     *
     * @example
     * browser.submit(elementID);
     */
    submit(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
}

export interface WebDriverProtocolElementLocation {
    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     *
     * The element's coordinates are returned as a JSON object with x and y properties.
     *
     * @see https://nightwatchjs.org/api/elementIdLocation.html#apimethod-container
     *
     * @deprecated In favour of .getElementRect()
     */
    elementIdLocation(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchSizeAndPosition>) => void,
    ): Awaitable<this, NightwatchSizeAndPosition>;

    /**
     * Determine an element's location on the screen once it has been scrolled into view.
     *
     * @see https://nightwatchjs.org/api/elementIdLocationInView.html#apimethod-container
     *
     * @deprecated This is a JSON Wire Protocol command and is no longer supported.
     */
    elementIdLocationInView(
        id: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<NightwatchPosition>) => void,
    ): Awaitable<this, NightwatchPosition>;
}

export interface WebDriverProtocolDocumentHandling {
    /**
     * Returns a string serialisation of the DOM of the current page.
     *
     * @example
     * browser.source();
     *
     * @see https://nightwatchjs.org/api/source.html#apimethod-container
     */
    source(callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): Awaitable<this, string>;

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
     *    browser.execute(function(imageData: string) {
     *      // resize operation
     *      return true;
     *    }, [imageData], function(result) {
     *      // result.value === true
     *    });
     * }
     *
     * @see https://nightwatchjs.org/api/execute.html#apimethod-container
     *
     * @alias executeScript
     */
    execute<ReturnValue>(
        body: ExecuteScriptFunction<[], ReturnValue> | string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<VoidToNull<ReturnValue>>) => void,
    ): Awaitable<this, VoidToNull<ReturnValue>>;
    execute<ArgType extends any[], ReturnValue>(
        body: ExecuteScriptFunction<ArgType, ReturnValue> | string,
        args: ArgType,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<VoidToNull<ReturnValue>>) => void,
    ): Awaitable<this, VoidToNull<ReturnValue>>;

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
     *    browser.executeScript(function(imageData: string) {
     *      // resize operation
     *      return true;
     *    }, [imageData], function(result) {
     *      // result.value === true
     *    });
     * }
     *
     * @see https://nightwatchjs.org/api/execute.html#apimethod-container
     *
     * @alias execute
     */
    executeScript<ReturnValue>(
        body: ExecuteScriptFunction<[], ReturnValue> | string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<VoidToNull<ReturnValue>>) => void,
    ): Awaitable<this, VoidToNull<ReturnValue>>;
    executeScript<ArgType extends any[], ReturnValue>(
        body: ExecuteScriptFunction<ArgType, ReturnValue> | string,
        args: ArgType,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<VoidToNull<ReturnValue>>) => void,
    ): Awaitable<this, VoidToNull<ReturnValue>>;

    /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
     * The executed script is assumed to be asynchronous.
     *
     * The function to be injected receives the `done` callback as argument which needs to be called
     * when the asynchronous operation finishes. The value passed to the `done` callback is returned to the client.
     * Additional arguments for the injected function may be passed as a non-empty array which
     * will be passed before the `done` callback.
     *
     * Asynchronous script commands may not span page loads. If an unload event is fired
     *  while waiting for the script result, an error will be returned.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser.executeAsyncScript(function(done: (result: true) => void) {
     *      setTimeout(function() {
     *        done(true);
     *      }, 500);
     *    }, function(result) {
     *      // result.value === true
     *    });
     *
     *    browser.executeAsyncScript(function(arg1: string, arg2: number, done: (result: string) => void) {
     *      setTimeout(function() {
     *        done(arg1);
     *      }, 500);
     *    }, [arg1, arg2], function(result) {
     *      // result.value === arg1
     *    });
     * }
     *
     * @see https://nightwatchjs.org/api/executeAsyncScript.html
     *
     * @alias executeAsync
     */
    executeAsyncScript<ReturnValue>(
        script: ExecuteAsyncScriptFunction<[], ReturnValue> | string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ReturnValue>) => void,
    ): Awaitable<this, ReturnValue>;
    executeAsyncScript<ArgType extends any[], ReturnValue>(
        script: ExecuteAsyncScriptFunction<ArgType, ReturnValue> | string,
        args: ArgType,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ReturnValue>) => void,
    ): Awaitable<this, ReturnValue>;

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
     *    browser.executeAsync(function(done: (result: true) => void) {
     *      setTimeout(function() {
     *        done(true);
     *      }, 500);
     *    }, function(result) {
     *      // result.value === true
     *    });
     *
     *    browser.executeAsync(function(arg1: string, arg2: number, done: (result: string) => void) {
     *      setTimeout(function() {
     *        done(arg1);
     *      }, 500);
     *    }, [arg1, arg2], function(result) {
     *      // result.value === arg1
     *    });
     * }
     *
     * @see https://nightwatchjs.org/api/executeAsyncScript.html
     *
     * @alias executeAsyncScript
     */
    executeAsync<ReturnValue>(
        script: ExecuteAsyncScriptFunction<[], ReturnValue> | string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ReturnValue>) => void,
    ): Awaitable<this, ReturnValue>;
    executeAsync<ArgType extends any[], ReturnValue>(
        script: ExecuteAsyncScriptFunction<ArgType, ReturnValue> | string,
        args: ArgType,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<ReturnValue>) => void,
    ): Awaitable<this, ReturnValue>;
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
    cookie(
        method: "GET" | "DELETE",
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<Cookie[] | null>) => void,
    ): Awaitable<this, Cookie[] | null>;
    cookie(
        method: "POST",
        cookie: Cookie,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    cookie(
        method: "DELETE",
        cookieName: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
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
     *
     * @see https://nightwatchjs.org/api/doubleClick.html#apimethod-container
     */
    doubleClick(
        selector: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    doubleClick(
        using: LocateStrategy,
        selector: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Move to the element and click (without releasing) in the middle of the given element.
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.clickAndHold('#main ul li a.first');
     *
     *     browser.clickAndHold('#main ul li a.first', function(result) {
     *       console.log('Click result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.clickAndHold('css selector', '#main ul li a.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.clickAndHold({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.clickAndHold({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.clickAndHold('#main ul li a.first');
     *     console.log('Right click result', result);
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/clickAndHold.html#apimethod-container
     */
    clickAndHold(
        selector: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    clickAndHold(
        using: LocateStrategy,
        selector: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Release the depressed left mouse button at the current mouse coordinates (set by `.moveTo()`).
     */
    releaseMouseButton(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Click at the current mouse coordinates (set by `.moveTo()`).
     *
     * The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button.
     *
     * @see https://nightwatchjs.org/api/mouseButtonClick.html
     *
     * @deprecated Please use the new [User Actions API](https://nightwatchjs.org/api/useractions/) instead
     */
    mouseButtonClick(
        button: 0 | 1 | 2 | "left" | "middle" | "right",
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     * @see https://nightwatchjs.org/api/mouseButtonDown.html
     *
     * @deprecated Please use the new [User Actions API](https://nightwatchjs.org/api/useractions/) instead
     */
    mouseButtonDown(
        button: 0 | 1 | 2 | "left" | "middle" | "right",
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Releases the mouse button previously held (where the mouse is currently at). Must be called once for every `mouseButtonDown` command issued.
     *
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button,
     * and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     *
     * **Since v2.0, this command is deprecated.** It is only available on older JSONWire-based drivers.
     * Please use the new [User Actions API](/api/useractions/).
     *
     * @see https://nightwatchjs.org/api/mouseButtonUp.html
     *
     * @deprecated Please use the new [User Actions API](https://nightwatchjs.org/api/useractions/) instead
     */
    mouseButtonUp(
        button: 0 | 1 | 2 | "left" | "middle" | "right",
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

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
     *
     * @see https://nightwatchjs.org/api/moveTo.html#apimethod-container
     */
    moveTo(
        elementId: string | null,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    moveTo(
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    moveTo(
        elementId: string | null,
        xoffset: number,
        yoffset: number,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Simulates a context-click(right click) event on the given DOM element.
     * The element is scrolled into view if it is not already pointer-interactable.
     * See the WebDriver specification for element [interactability](https://www.w3.org/TR/webdriver/#element-interactability).
     *
     * @example
     * module.exports = {
     *   demoTest() {
     *     browser.rightClick('#main ul li a.first');
     *
     *     browser.rightClick('#main ul li a.first', function(result) {
     *       console.log('Click result', result);
     *     });
     *
     *     // with explicit locate strategy
     *     browser.rightClick('css selector', '#main ul li a.first');
     *
     *     // with selector object - see https://nightwatchjs.org/guide#element-properties
     *     browser.rightClick({
     *       selector: '#main ul li a',
     *       index: 1,
     *       suppressNotFoundErrors: true
     *     });
     *
     *     browser.rightClick({
     *       selector: '#main ul li a.first',
     *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
     *     });
     *   },
     *
     *   demoTestAsync: async function() {
     *     const result = await browser.rightClick('#main ul li a.first');
     *     console.log('Right click result', result);
     *   }
     * }
     *
     * @see https://nightwatchjs.org/api/rightClick.html#apimethod-container
     */
    rightClick(
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
    rightClick(
        using: LocateStrategy,
        selector: Definition,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
}

export interface WebDriverProtocolUserPrompts {
    /**
     * Accepts the currently displayed alert dialog. Usually, this is equivalent to clicking on the 'OK' button in the dialog.
     *
     * @example
     * browser.acceptAlert()
     *
     * @see https://nightwatchjs.org/api/acceptAlert.html#apimethod-container
     */
    acceptAlert(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Dismisses the currently displayed alert dialog. For confirm() and prompt() dialogs, this is equivalent to clicking the 'Cancel' button.
     *
     * For alert() dialogs, this is equivalent to clicking the 'OK' button.
     *
     * @example
     * browser.dismissAlert();
     *
     * @see https://nightwatchjs.org/api/dismissAlert.html#apimethod-container
     */
    dismissAlert(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Gets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.
     *
     * @example
     * browser.getAlertText();
     *
     * @see https://nightwatchjs.org/api/getAlertText.html#apimethod-container
     */
    getAlertText(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;

    /**
     * Sends keystrokes to a JavaScript prompt() dialog.
     *
     * @example
     * browser.setAlertText('randomalert');
     *
     * @see https://nightwatchjs.org/api/setAlertText.html#apimethod-container
     */
    setAlertText(
        value: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;

    /**
     * Automate the input of basic auth credentials whenever they arise.
     *
     * @example
     *  this.demoTest = function (browser) {
     *    browser
     *      .registerBasicAuth('test-username', 'test-password')
     *      .navigateTo('http://browserspy.dk/password-ok.php');
     *  };
     *
     * @see https://nightwatchjs.org/api/registerBasicAuth.html#apimethod-container
     */
    registerBasicAuth(
        username: string,
        password: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
}

export interface WebDriverProtocolScreenCapture {
    /**
     * Take a screenshot of the current page.
     *
     * @example
     * browser.screenshot(true);
     */
    screenshot(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
    screenshot(
        log_screenshot_data: boolean,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void,
    ): Awaitable<this, string>;
}

export interface WebDriverProtocolMobileRelated {
    /**
     * Get the current browser orientation.
     *
     * @example
     * browser.getOrientation()
     */
    getOrientation(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<"LANDSCAPE" | "PORTRAIT">) => void,
    ): Awaitable<this, "LANDSCAPE" | "PORTRAIT">;

    /**
     * Sets the browser orientation.
     *
     * @example
     * browser.setOrientation(orientation)
     */
    setOrientation(
        orientation: "LANDSCAPE" | "PORTRAIT",
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<"LANDSCAPE" | "PORTRAIT">) => void,
    ): Awaitable<this, "LANDSCAPE" | "PORTRAIT">;

    /**
     * Get a list of the available contexts.
     *
     * @example
     * browser.contexts();
     *
     * Used by Appium when testing hybrid mobile web apps. More info here: https://github.com/appium/appium/blob/master/docs/en/advanced-concepts/hybrid.md.
     */
    contexts(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string[]>) => void,
    ): Awaitable<this, string[]>;

    /**
     * Get current context.
     *
     * @example
     * browser.currentContext();
     */
    currentContext(
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void,
    ): Awaitable<this, string | null>;

    /**
     * Sets the context.
     *
     * @example
     * browser.setContext(context);
     */
    setContext(
        context: string,
        callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void,
    ): Awaitable<this, null>;
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
    [key: string]: Definition;
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

declare const _default: Nightwatch;
export default _default;
