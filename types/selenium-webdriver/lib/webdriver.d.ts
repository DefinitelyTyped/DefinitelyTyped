import { WebSocket } from "ws";
import {
    Actions,
    Capabilities,
    IWebElementId,
    Locator,
    Logs,
    Serializable,
    Session,
    WebElement,
    WebElementPromise,
    Window,
} from "..";
import { Index as BIDI } from "../bidi";
import { HttpResponse } from "../devtools/networkinterceptor";
import { Command, Executor } from "./command";
import { FileDetector } from "./input";
export {};

type ConditionFn<T> = (webdriver: WebDriver) => T | null | Promise<T | null>;

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
     */
    expiry?: number | Date | undefined;

    sameSite?: string;
}

export interface ITimeouts {
    /**
     * Defines when, in milliseconds, to interrupt a script that is being
     * {@linkplain ./webdriver.IWebDriver#executeScript evaluated}.
     */
    script?: number | undefined;

    /**
     * The timeout, in milliseconds, to apply to navigation events along with the
     * {@link PageLoadStrategy}.
     */
    pageLoad?: number | undefined;

    /**
     * The maximum amount of time, in milliseconds, to spend attempting to
     * {@linkplain ./webdriver.IWebDriver#findElement locate} an element on the
     * current page.
     */
    implicit?: number | undefined;
}

/**
 * Defines a condition for use with WebDriver's {@linkplain WebDriver#wait wait
 * command}.
 */
export class Condition<T> {
    /**
     * @param {string} message A descriptive error message. Should complete the
     *     sentence "Waiting [...]"
     * @param {function(!WebDriver): OUT} fn The condition function to
     *     evaluate on each iteration of the wait loop.
     */
    constructor(message: string, fn: ConditionFn<T>);

    /** @return {string} A description of this condition. */
    description(): string;
}

/**
 * Defines a condition that will result in a {@link WebElement}.
 */
export class WebElementCondition extends Condition<WebElement> {
    /**
     * @param {string} message A descriptive error message. Should complete the
     *     sentence "Waiting [...]"
     * @param {function(!WebDriver): !(WebElement|IThenable<!WebElement>)}
     *     fn The condition function to evaluate on each iteration of the wait
     *     loop.
     */
    constructor(message: string, fn: ConditionFn<WebElement>);
}

/**
 * An interface for changing the focus of the driver to another frame or window.
 *
 * This class should never be instantiated directly. Instead, obtain an
 * instance with
 *
 *     webdriver.switchTo()
 *
 * @see WebDriver#switchTo()
 */
export class TargetLocator {
    /**
     * @param {!WebDriver} driver The parent driver.
     */
    constructor(driver: WebDriver);

    // endregion

    // region Methods

    /**
     * Locates the DOM element on the current page that corresponds to
     * `document.activeElement` or `document.body` if the active element is not
     * available.
     *
     * @return {!WebElementPromise} The active element.
     */
    activeElement(): WebElementPromise;

    /**
     * Switches focus of all future commands to the topmost frame in the current
     * window.
     *
     * @return {!Promise<void>} A promise that will be resolved
     *     when the driver has changed focus to the default content.
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
     * @param {(number|string|WebElement|null)} id The frame locator.
     * @return {!Promise<void>} A promise that will be resolved
     *     when the driver has changed focus to the specified frame.
     */
    frame(id: number | string | WebElement | null): Promise<void>;

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
     * Changes the focus of all future commands to another window. Windows may be
     * specified by their {@code window.name} attribute or by its handle
     * (as returned by {@link WebDriver#getWindowHandles}).
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
     * Changes focus to the active modal dialog, such as those opened by
     * `window.alert()`, `window.confirm()`, and `window.prompt()`. The returned
     * promise will be rejected with a
     * {@linkplain error.NoSuchAlertError} if there are no open alerts.
     *
     * @return {!AlertPromise} The open alert.
     */
    alert(): AlertPromise;
}

/**
 * Each WebDriver instance provides automated control over a browser session.
 */
export class WebDriver {
    /**
     * @param {!(./session.Session|IThenable<!./session.Session>)} session Either
     *     a known session or a promise that will be resolved to a session.
     * @param {!Executor} executor The executor to use when sending
     *     commands to the browser.
     * @param {(function(this: void): ?)=} onQuit A function to call, if any,
     *     when the session is terminated.
     */
    constructor(session: Session | Promise<Session>, executor: Executor, onQuit?: (this: void) => any);

    /**
     * Creates a new WebDriver session.
     *
     * This function will always return a WebDriver instance. If there is an error
     * creating the session, such as the aforementioned SessionNotCreatedError,
     * the driver will have a rejected {@linkplain #getSession session} promise.
     * This rejection will propagate through any subsequent commands scheduled
     * on the returned WebDriver instance.
     *
     *     let required = Capabilities.firefox();
     *     let driver = WebDriver.createSession(executor, {required});
     *
     *     // If the createSession operation failed, then this command will also
     *     // also fail, propagating the creation failure.
     *     driver.get('http://www.google.com').catch(e => console.log(e));
     *
     * @param {!Executor} executor The executor to create the new session
     *     with.
     * @param {!Capabilities} capabilities The desired capabilities for the new
     *     session.
     * @param {(function(this: void): ?)=} onQuit A callback to invoke when
     *    the newly created session is terminated. This should be used to clean
     *    up any resources associated with the session.
     * @return {!WebDriver} The driver for the newly created session.
     */
    static createSession(...var_args: any[]): WebDriver;

    /** @override */
    execute(command: Command): Promise<void>;

    /** @override */
    setFileDetector(detector: FileDetector): void;

    /** @override */
    getExecutor(): Executor;

    /** @override */
    getSession(): Promise<Session>;

    /** @override */
    getCapabilities(): Promise<Capabilities>;

    /** @override */
    quit(): Promise<void>;

    /** @override */
    actions(options?: { async?: boolean | undefined; bridge?: boolean | undefined }): Actions;

    /**
     * Executes a snippet of JavaScript in the context of the currently selected
     * frame or window. The script fragment will be executed as the body of an
     * anonymous function. If the script is provided as a function object, that
     * function will be converted to a string for injection into the target
     * window.
     *
     * Any arguments provided in addition to the script will be included as script
     * arguments and may be referenced using the `arguments` object. Arguments may
     * be a boolean, number, string, or {@linkplain WebElement}. Arrays and
     * objects may also be used as script arguments as long as each item adheres
     * to the types previously mentioned.
     *
     * The script may refer to any variables accessible from the current window.
     * Furthermore, the script will execute in the window's context, thus
     * `document` may be used to refer to the current document. Any local
     * variables will not be available once the script has finished executing,
     * though global variables will persist.
     *
     * If the script has a return value (i.e. if the script contains a return
     * statement), then the following steps will be taken for resolving this
     * functions return value:
     *
     * - For a HTML element, the value will resolve to a {@linkplain WebElement}
     * - Null and undefined return values will resolve to null</li>
     * - Booleans, numbers, and strings will resolve as is</li>
     * - Functions will resolve to their string representation</li>
     * - For arrays and objects, each member item will be converted according to
     *     the rules above
     *
     * @param {!(string|Function)} script The script to execute.
     * @param {...*} args The arguments to pass to the script.
     * @return {!IThenable<T>} A promise that will resolve to the
     *    scripts return value.
     * @template T
     */
    /** @override */
    executeScript<T>(script: string | Function, ...args: any[]): Promise<T>;

    /**
     * Executes a snippet of asynchronous JavaScript in the context of the
     * currently selected frame or window. The script fragment will be executed as
     * the body of an anonymous function. If the script is provided as a function
     * object, that function will be converted to a string for injection into the
     * target window.
     *
     * Any arguments provided in addition to the script will be included as script
     * arguments and may be referenced using the `arguments` object. Arguments may
     * be a boolean, number, string, or {@linkplain WebElement}. Arrays and
     * objects may also be used as script arguments as long as each item adheres
     * to the types previously mentioned.
     *
     * Unlike executing synchronous JavaScript with {@link #executeScript},
     * scripts executed with this function must explicitly signal they are
     * finished by invoking the provided callback. This callback will always be
     * injected into the executed function as the last argument, and thus may be
     * referenced with  `arguments[arguments.length - 1]`. The following steps
     * will be taken for resolving this functions return value against the first
     * argument to the script's callback function:
     *
     * - For a HTML element, the value will resolve to a {@link WebElement}
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
     *       xhr.open("GET", "/resource/data.json", true);
     *       xhr.onreadystatechange = function() {
     *         if (xhr.readyState == 4) {
     *           callback(xhr.responseText);
     *         }
     *       };
     *       xhr.send('');
     *     }).then(function(str) {
     *       console.log(JSON.parse(str)['food']);
     *     });
     *
     * @param {!(string|Function)} script The script to execute.
     * @param {...*} args The arguments to pass to the script.
     * @return {!IThenable<T>} A promise that will resolve to the scripts return
     *     value.
     * @template T
     */
    executeAsyncScript<T>(script: string | Function, ...args: any[]): Promise<T>;

    wait(
        condition: WebElementCondition,
        timeout?: number,
        message?: string,
        pollTimeout?: number,
    ): WebElementPromise;

    /**
     * Waits for a condition to evaluate to a "truthy" value. The condition may be
     * specified by a {@link Condition}, as a custom function, or as any
     * promise-like thenable.
     *
     * For a {@link Condition} or function, the wait will repeatedly
     * evaluate the condition until it returns a truthy value. If any errors occur
     * while evaluating the condition, they will be allowed to propagate. In the
     * event a condition returns a {@linkplain Promise}, the polling loop will
     * wait for it to be resolved and use the resolved value for whether the
     * condition has been satisfied. The resolution time for a promise is always
     * factored into whether a wait has timed out.
     *
     * If the provided condition is a {@link WebElementCondition}, then
     * the wait will return a {@link WebElementPromise} that will resolve to the
     * element that satisfied the condition.
     *
     * _Example:_ waiting up to 10 seconds for an element to be present on the
     * page.
     *
     *     async function example() {
     *       let button =
     *           await driver.wait(until.elementLocated(By.id('foo')), 10000);
     *       await button.click();
     *     }
     *
     * @param {!(IThenable<T>|
     *           Condition<T>|
     *           function(!WebDriver): T)} condition The condition to
     *     wait on, defined as a promise, condition object, or  a function to
     *     evaluate as a condition.
     * @param {number=} timeout The duration in milliseconds, how long to wait
     *     for the condition to be true.
     * @param {(string|Function)=} message An optional message to use if the wait times out.
     * @param {number=} pollTimeout The duration in milliseconds, how long to
     *     wait between polling the condition.
     * @return {!(IThenable<T>|WebElementPromise)} A promise that will be
     *     resolved with the first truthy value returned by the condition
     *     function, or rejected if the condition times out. If the input
     *     condition is an instance of a {@link WebElementCondition},
     *     the returned value will be a {@link WebElementPromise}.
     * @throws {TypeError} if the provided `condition` is not a valid type.
     * @template T
     */
    wait<T>(
        condition: PromiseLike<T> | Condition<T> | ((driver: WebDriver) => T | PromiseLike<T>) | Function,
        timeout?: number,
        message?: string,
        pollTimeout?: number,
    ): Promise<T>;

    /**
     * Makes the driver sleep for the given amount of time.
     *
     * @param {number} ms The amount of time, in milliseconds, to sleep.
     * @return {!Promise<void>} A promise that will be resolved when the sleep has
     *     finished.
     */
    sleep(ms: number): Promise<void>;

    /**
     * Retrieves the current window handle.
     *
     * @return {!Promise<string>} A promise that will be resolved with the current
     *     window handle.
     */
    getWindowHandle(): Promise<string>;

    /**
     * Retrieves a list of all available window handles.
     *
     * @return {!Promise<!Array<string>>} A promise that will be resolved with an
     *     array of window handles.
     */
    getAllWindowHandles(): Promise<string[]>;

    /**
     * Retrieves the current page's source. The returned source is a representation
     * of the underlying DOM: do not expect it to be formatted or escaped in the
     * same way as the raw response sent from the web server.
     *
     * @return {!Promise<string>} A promise that will be resolved with the current
     *     page source.
     */
    getPageSource(): Promise<string>;

    /**
     * Closes the current window.
     *
     * @return {!Promise<void>} A promise that will be resolved when this command
     *     has completed.
     */
    close(): Promise<void>;

    /**
     * Navigates to the given URL.
     *
     * @param {string} url The fully qualified URL to open.
     * @return {!Promise<void>} A promise that will be resolved when the document
     *     has finished loading.
     */
    get(url: string): Promise<void>;

    /**
     * Retrieves the URL for the current page.
     *
     * @return {!Promise<string>} A promise that will be resolved with the
     *     current URL.
     */
    getCurrentUrl(): Promise<string>;

    /**
     * Retrieves the current page title.
     *
     * @return {!Promise<string>} A promise that will be resolved with the current
     *     page's title.
     */
    getTitle(): Promise<string>;

    /**
     * Locates an element on the page. If the element cannot be found, a
     * {@link error.NoSuchElementError} will be returned by the driver.
     *
     * This function should not be used to test whether an element is present on
     * the page. Rather, you should use {@link #findElements}:
     *
     *     driver.findElements(By.id('foo'))
     *         .then(found => console.log('Element found? %s', !!found.length));
     *
     * The search criteria for an element may be defined using one of the
     * factories in the {@link webdriver.By} namespace, or as a short-hand
     * {@link webdriver.By.Hash} object. For example, the following two statements
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
     * @param {!Function} webElementPromise The webElement in unresolved state
     * @return {!Promise<!WebElement>} First single WebElement from array of resolved promises
     */
    normalize_(webElementPromise: Function): Promise<WebElement>;

    /**
     * @param {!Function} locatorFn The locator function to use.
     * @param {!(WebDriver|WebElement)} context The search context.
     * @return {!Promise<!WebElement>} A promise that will resolve to a list of
     *     WebElements.
     */
    findElementInternal_(locatorFn: Function, context: WebDriver | WebElement): Promise<WebElement>;

    /**
     * Search for multiple elements on the page. Refer to the documentation on
     * {@link #findElement(by)} for information on element locator strategies.
     *
     * @param {!(by.By|Function)} locator The locator to use.
     * @return {!Promise<!Array<!WebElement>>} A promise that will resolve to an
     *     array of WebElements.
     */
    findElements(locator: Locator): Promise<WebElement[]>;

    /**
     * @param {!Function} locatorFn The locator function to use.
     * @param {!(WebDriver|WebElement)} context The search context.
     * @return {!Promise<!Array<!WebElement>>} A promise that will resolve to an
     *     array of WebElements.
     */
    findElementsInternal_(locatorFn: Function, context: WebDriver | WebElement): Promise<WebElement[]>;

    /**
     * Takes a screenshot of the current page. The driver makes the best effort to
     * return a screenshot of the following, in order of preference:
     *
     * 1. Entire page
     * 2. Current window
     * 3. Visible portion of the current frame
     * 4. The entire display containing the browser
     *
     * @return {!Promise<string>} A promise that will be resolved to the
     *     screenshot as a base-64 encod    ed PNG.
     */
    takeScreenshot(): Promise<string>;

    /**
     * @return {!Options} The options interface for this instance.
     */
    manage(): Options;

    /**
     * @return {!Navigation} The navigation interface for this instance.
     */
    navigate(): Navigation;

    /**
     * @return {!TargetLocator} The target locator interface for this
     *     instance.
     */
    switchTo(): TargetLocator;

    /**
     * Takes a PDF of the current page. The driver makes a best effort to
     * return a PDF based on the provided parameters.
     *
     * @param {{orientation:(string|undefined),
     *         scale:(number|undefined),
     *         background:(boolean|undefined),
     *         width:(number|undefined),
     *         height:(number|undefined),
     *         top:(number|undefined),
     *         bottom:(number|undefined),
     *         left:(number|undefined),
     *         right:(number|undefined),
     *         shrinkToFit:(boolean|undefined),
     *         pageRanges:(Array|undefined)}} options
     */
    printPage(options: {
        orientation: string | undefined;
        scale: number | undefined;
        background: boolean | undefined;
        width: number | undefined;
        height: number | undefined;
        top: number | undefined;
        bottom: number | undefined;
        left: number | undefined;
        right: number | undefined;
        shrinkToFit: boolean | undefined;
        pageRanges: [] | undefined;
    }): void;

    /**
     * Creates a new WebSocket connection.
     * @return {!Promise<resolved>} A new CDP instance.
     */
    createCDPConnection(target: string): Promise<any>;

    /**
     * Initiates bidi connection using 'webSocketUrl'
     * @returns {BIDI}
     */
    getBidi(): Promise<BIDI>;

    /**
     * Retrieves 'webSocketDebuggerUrl' by sending a http request using debugger address
     * @param {string} debuggerAddress
     * @param target
     * @param caps
     * @return {string} Returns parsed webSocketDebuggerUrl obtained from the http request
     */
    getWsUrl(debuggerAddress: string, target: string, caps: Capabilities): Promise<string>;

    /**
     * Sets a listener for Fetch.authRequired event from CDP
     * If event is triggered, it enter username and password
     * and allows the test to move forward
     * @param {string} username
     * @param {string} password
     * @param connection CDP Connection
     */
    register(username: string, password: string, connection: any): Promise<void>;

    /**
     * Handle Network interception requests
     * @param connection WebSocket connection to the browser
     * @param httpResponse Object representing what we are intercepting
     *                     as well as what should be returned.
     * @param callback callback called when we intercept requests.
     */
    onIntercept(connection: WebSocket, httpResponse: HttpResponse, callback: () => void): Promise<void>;

    /**
     * @param connection
     * @param callback
     * @returns {Promise<void>}
     */
    onLogEvent(connection: WebSocket, callback: (event: any) => void): Promise<void>;

    /**
     * @param connection
     * @param callback
     * @returns {Promise<void>}
     */
    onLogException(connection: WebSocket, callback: (event: any) => void): Promise<void>;

    /**
     * @param connection
     * @param callback
     * @returns {Promise<void>}
     */
    logMutationEvents(connection: WebSocket, callback: (event: any) => void): Promise<void>;
}

/**
 * Interface for navigating back and forth in the browser history.
 *
 * This class should never be instantiated directly. Instead, obtain an instance
 * with
 *
 *    webdriver.navigate()
 *
 * @see WebDriver#navigate()
 */
export class Navigation {
    /**
     * @param {!WebDriver} driver The parent driver.
     */
    constructor(driver: WebDriver);

    /**
     * Navigates to a new URL.
     *
     * @param {string} url The URL to navigate to.
     * @return {!Promise<void>} A promise that will be resolved when the URL
     *     has been loaded.
     */
    to(url: string): Promise<void>;

    /**
     * Moves backwards in the browser history.
     *
     * @return {!Promise<void>} A promise that will be resolved when the
     *     navigation event has completed.
     */
    back(): Promise<void>;

    /**
     * Moves forwards in the browser history.
     *
     * @return {!Promise<void>} A promise that will be resolved when the
     *     navigation event has completed.
     */
    forward(): Promise<void>;

    /**
     * Refreshes the current page.
     *
     * @return {!Promise<void>} A promise that will be resolved when the
     *     navigation event has completed.
     */
    refresh(): Promise<void>;
}

/**
 * Provides methods for managing browser and driver state.
 *
 * This class should never be instantiated directly. Instead, obtain an instance
 * with {@linkplain WebDriver#manage() webdriver.manage()}.
 */
export class Options {
    /**
     * @param {!WebDriver} driver The parent driver.
     */
    constructor(driver: WebDriver);

    /**
     * Adds a cookie.
     *
     * __Sample Usage:__
     *
     *     // Set a basic cookie.
     *     driver.manage().addCookie({name: 'foo', value: 'bar'});
     *
     *     // Set a cookie that expires in 10 minutes.
     *     let expiry = new Date(Date.now() + (10 * 60 * 1000));
     *     driver.manage().addCookie({name: 'foo', value: 'bar', expiry});
     *
     *     // The cookie expiration may also be specified in seconds since epoch.
     *     driver.manage().addCookie({
     *       name: 'foo',
     *       value: 'bar',
     *       expiry: Math.floor(Date.now() / 1000)
     *     });
     *
     * @param {!Options.Cookie} spec Defines the cookie to add.
     * @return {!Promise<void>} A promise that will be resolved
     *     when the cookie has been added to the page.
     * @throws {error.InvalidArgumentError} if any of the cookie parameters are
     *     invalid.
     * @throws {TypeError} if `spec` is not a cookie object.
     */
    addCookie(spec: IWebDriverOptionsCookie): Promise<void>;

    /**
     * Deletes all cookies visible to the current page.
     *
     * @return {!Promise<void>} A promise that will be resolved
     *     when all cookies have been deleted.
     */
    deleteAllCookies(): Promise<void>;

    /**
     * Deletes the cookie with the given name. This command is a no-op if there is
     * no cookie with the given name visible to the current page.
     *
     * @param {string} name The name of the cookie to delete.
     * @return {!Promise<void>} A promise that will be resolved
     *     when the cookie has been deleted.
     */
    deleteCookie(name: string): Promise<void>;

    /**
     * Retrieves all cookies visible to the current page. Each cookie will be
     * returned as a JSON object as described by the WebDriver wire protocol.
     *
     * @return {!Promise<!Array<!Options.Cookie>>} A promise that will be
     *     resolved with the cookies visible to the current browsing context.
     */
    getCookies(): Promise<IWebDriverOptionsCookie[]>;

    /**
     * Retrieves the cookie with the given name. Returns null if there is no such
     * cookie. The cookie will be returned as a JSON object as described by the
     * WebDriver wire protocol.
     *
     * @param {string} name The name of the cookie to retrieve.
     * @return {!Promise<?Options.Cookie>} A promise that will be resolved
     *     with the named cookie
     * @throws {error.NoSuchCookieError} if there is no such cookie.
     */
    getCookie(name: string): Promise<IWebDriverOptionsCookie>;

    /**
     * Fetches the timeouts currently configured for the current session.
     *
     * @return {!Promise<{script: number,
     *                             pageLoad: number,
     *                             implicit: number}>} A promise that will be
     *     resolved with the timeouts currently configured for the current
     *     session.
     * @see #setTimeouts()
     */
    getTimeouts(): Promise<ITimeouts>;

    /**
     * Sets the timeout durations associated with the current session.
     *
     * The following timeouts are supported (all timeouts are specified in
     * milliseconds):
     *
     * -  `implicit` specifies the maximum amount of time to wait for an element
     *    locator to succeed when {@linkplain WebDriver#findElement locating}
     *    {@linkplain WebDriver#findElements elements} on the page.
     *    Defaults to 0 milliseconds.
     *
     * -  `pageLoad` specifies the maximum amount of time to wait for a page to
     *    finishing loading. Defaults to 300000 milliseconds.
     *
     * -  `script` specifies the maximum amount of time to wait for an
     *    {@linkplain WebDriver#executeScript evaluated script} to run. If set to
     *    `null`, the script timeout will be indefinite.
     *    Defaults to 30000 milliseconds.
     *
     * @param {{script: (number|null|undefined),
     *          pageLoad: (number|null|undefined),
     *          implicit: (number|null|undefined)}} conf
     *     The desired timeout configuration.
     * @return {!Promise<void>} A promise that will be resolved when the timeouts
     *     have been set.
     * @throws {!TypeError} if an invalid options object is provided.
     * @see #getTimeouts()
     * @see <https://w3c.github.io/webdriver/webdriver-spec.html#dfn-set-timeouts>
     */
    setTimeouts(timeouts: ITimeouts): Promise<void>;

    /**
     * @return {!Logs} The interface for managing driver logs.
     */
    logs(): Logs;

    /**
     * @return {!Window} The interface for managing the current window.
     */
    window(): Window;

    /**
     * @param {!WebDriver} driver
     * @param {string} type
     * @param {number} ms
     * @return {!Promise<void>}
     */
    legacyTimeout(driver: WebDriver, type: string, ms: number): Promise<void>;
}

//////////////////////////////////////////////////////////////////////////////
//
//  ShadowRoot
//
//////////////////////////////////////////////////////////////////////////////

/**
 * Represents a ShadowRoot of a {@link WebElement}. Provides functions to
 * retrieve elements that live in the DOM below the ShadowRoot.
 */
export class ShadowRoot implements Serializable<IWebElementId> {
    constructor(driver: WebDriver, id: string | Promise<string>);

    /**
     * Extracts the encoded ShadowRoot ID from the object.
     *
     * @param {?} obj The object to extract the ID from.
     * @return {string} the extracted ID.
     * @throws {TypeError} if the object is not a valid encoded ID.
     */
    static extractId(obj: any): string;

    /**
     * @param {?} obj the object to test.
     * @return {boolean} whether the object is a valid encoded WebElement ID.
     */
    static isId(obj: any): boolean;

    /** @override */
    serialize(): Promise<IWebElementId>;

    /**
     * Schedules a command that targets this element with the parent WebDriver
     * instance. Will ensure this element's ID is included in the command
     * parameters under the "id" key.
     *
     * @param {!Command} command The command to schedule.
     * @return {!Promise<T>} A promise that will be resolved with the result.
     * @template T
     * @see WebDriver#schedule
     */
    execute_<T>(command: Command): Promise<T>;

    /**
     * Schedule a command to find a descendant of this ShadowROot. If the element
     * cannot be found, the returned promise will be rejected with a
     * {@linkplain error.NoSuchElementError NoSuchElementError}.
     *
     * The search criteria for an element may be defined using one of the static
     * factories on the {@link by.By} class, or as a short-hand
     * {@link ./by.ByHash} object. For example, the following two statements
     * are equivalent:
     *
     *     var e1 = shadowroot.findElement(By.id('foo'));
     *     var e2 = shadowroot.findElement({id:'foo'});
     *
     * You may also provide a custom locator function, which takes as input this
     * instance and returns a {@link WebElement}, or a promise that will resolve
     * to a WebElement. If the returned promise resolves to an array of
     * WebElements, WebDriver will use the first element. For example, to find the
     * first visible link on a page, you could write:
     *
     *     var link = element.findElement(firstVisibleLink);
     *
     *     function firstVisibleLink(shadowRoot) {
     *       var links = shadowRoot.findElements(By.tagName('a'));
     *       return promise.filter(links, function(link) {
     *         return link.isDisplayed();
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
     * Locates all of the descendants of this element that match the given search
     * criteria.
     *
     * @param {!(by.By|Function)} locator The locator strategy to use when
     *     searching for the element.
     * @return {!Promise<!Array<!WebElement>>} A promise that will resolve to an
     *     array of WebElements.
     */
    findElements(locator: Locator): Promise<WebElement[]>;

    getId(): Promise<string>;
}

/**
 * ShadowRootPromise is a promise that will be fulfilled with a WebElement.
 * This serves as a forward proxy on ShadowRoot, allowing calls to be
 * scheduled without directly on this instance before the underlying
 * ShadowRoot has been fulfilled.
 *
 * @final
 */
export interface ShadowRootPromise extends Promise<ShadowRoot> {}

/**
 * Implement ShadowRootPromise
 */
export class ShadowRootPromise extends ShadowRoot {
    /**
     * @param {!WebDriver} driver The parent WebDriver instance for this
     *     element.
     * @param {!Promise<!ShadowRoot>} shadow A promise
     *     that will resolve to the promised element.
     */
    constructor(driver: WebDriver, shadow: Promise<ShadowRoot>);
}

//////////////////////////////////////////////////////////////////////////////
//
//  Alert
//
//////////////////////////////////////////////////////////////////////////////

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

    /**
     * Retrieves the message text displayed with this alert. For instance, if the
     * alert were opened with alert("hello"), then this would return "hello".
     *
     * @return {!Promise<string>} A promise that will be
     *     resolved to the text displayed with this alert.
     */
    getText(): Promise<string>;

    /**
     * Accepts this alert.
     *
     * @return {!Promise<void>} A promise that will be resolved
     *     when this command has completed.
     */
    accept(): Promise<void>;

    /**
     * Dismisses this alert.
     *
     * @return {!Promise<void>} A promise that will be resolved
     *     when this command has completed.
     */
    dismiss(): Promise<void>;

    /**
     * Sets the response text on this alert. This command will return an error if
     * the underlying alert does not support response text (e.g. window.alert and
     * window.confirm).
     *
     * @param {string} text The text to set.
     * @return {!Promise<void>} A promise that will be resolved
     *     when this command has completed.
     */
    sendKeys(text: string): Promise<void>;
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
     * @param {!Promise<!Alert>} alert A thenable
     *     that will be fulfilled with the promised alert.
     */
    constructor(driver: WebDriver, alert: Promise<Alert>);
}
