// Type definitions for leadfoot
// Project: https://github.com/theintern/leadfoot
// Definitions by: theintern <https://github.com/theintern>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="dojo" />
/// <reference types="node" />

declare module leadfoot {

    /**
     * An error from the remote WebDriver server.
     */
    interface WebDriverError extends Error {
        /**
         * The human-readable error type returned by the WebDriver server. See {@link module:leadfoot/lib/statusCodes} for a
         * list of error types.
         */
        name: string;

        /**
         * A human-readable message describing the error.
         */
        message: string;

        /**
         * The raw error status code returned by the WebDriver server.
         */
        status: number;

        /**
         * The raw detail of the error returned by the WebDriver server.
         */
        detail: any;

        /**
         * The parameters for the request.
         */
        request: {
            url: string;
            method: string;
            requestData: {};
        };

        /**
         * The response object for the request.
         */
//        response: request.IResponse;
        response: any;

        /**
         * The stack trace for the request.
         */
        stack: string;
    }

    /**
     * An object that describes an HTTP cookie.
     */
    interface WebDriverCookie {
        /**
         * The name of the cookie.
         */
        name: string;

        /**
         * The value of the cookie.
         */
        value: string;

        /**
         * The registered path for the cookie.
         */
        path: string;

        /**
         * The registered domain for the cookie.
         */
        domain: string;

        /**
         * True if the cookie should only be transmitted over HTTPS.
         */
        secure: boolean;

        /**
         * True if the cookie should be inaccessible to client-side scripting.
         */
        httpOnly: boolean;

        /**
         * The expiration date of the cookie.
         */
        expiry: Date;
    }

    /**
     * An object that describes a geographical location.
     */
    interface Geolocation {
        /**
         * Latitude in WGS84 decimal coordinate system.
         */
        latitude: number;

        /**
         * Longitude in WGS84 decimal coordinate system.
         */
        longitude: number;

        /**
         * Altitude in meters above the WGS84 ellipsoid.
         */
        altitude: number;
    }

    /**
     * A remote log entry.
     */
    interface LogEntry {
        /**
         * The timestamp of the entry in seconds since unix epoch.
         */
        timestamp: number;

        /**
         * The severity level of the entry. This level is not currently normalised.
         */
        level: string;

        /**
         * The log entry message.
         */
        message: string;
    }

    /**
     * A list of possible capabilities for a remote WebDriver environment.
     */
    interface Capabilities {
        /**
         * Environments with this capability expose the state of the browser’s offline application cache via the WebDriver API.
         */
        applicationCacheEnabled?: boolean;

        /**
         * Environments with this capability are incapable of clearing or deleting cookies. This issue cannot be worked around.
         */
        brokenCookies?: boolean;

        /**
         * Environments with this capability do not correctly retrieve the size of a CSS transformed element. This issue is
         * automatically corrected.
         */
        brokenCssTransformedSize?: boolean;

        /**
         * Environments with this capability do not correctly delete cookies. This issue is automatically corrected for cookies
         * that are accessible via JavaScript.
         */
        brokenDeleteCookie?: boolean;

        /**
         * Environments with this capability do not follow the correct event order when double-clicking. This issue is
         * automatically corrected.
         */
        brokenDoubleClick?: boolean;

        /**
         * Environments with this capability return invalid element handles from execute functions. This issue cannot be worked
         * around.
         */
        brokenExecuteElementReturn?: boolean;

        /**
         * Environments with this capability claim fully transparent elements are non-hidden. This issue is automatically
         * corrected.
         */
        brokenElementDisplayedOpacity?: boolean;

        /**
         * Environments with this capability claim elements positioned offscreen to the top/left of the page are non-hidden.
         * This issue is automatically corrected.
         */
        brokenElementDisplayedOffscreen?: boolean;

        /**
         * Environments with this capability do not correctly retrieve the position of a CSS transformed element. This issue is
         * automatically corrected.
         */
        brokenElementPosition?: boolean;

        /**
         * Environments with this capability do not operate correctly when the `flickFinger` method is called. This issue cannot
         * be corrected.
         */
        brokenFlickFinger?: boolean;

        /**
         * Environments with this capability return HTML tag names with the incorrect case. This issue is automatically
         * corrected.
         */
        brokenHtmlTagName?: boolean;

        /**
         * Environments with this capability fail to perform long tap gestures. This issue is not currently corrected.
         */
        brokenLongTap?: boolean;

        /**
         * Environments with this capability have broken mouse event APIs. This issue is automatically corrected as much as
         * possible through JavaScript-based event emulation.
         */
        brokenMouseEvents?: boolean;

        /**
         * Environments with this capability do not support dragging fingers across the page. This issue is not currently
         * corrected.
         */
        brokenMoveFinger?: boolean;

        /**
         * Environments with this capability do not support browser navigation functions (back, forward, refresh). This issue
         * cannot be corrected.
         */
        brokenNavigation?: boolean;

        /**
         * Environments with this capability incorrectly return an empty string instead of `null` for attributes that do not
         * exist when using the `getSpecAttribute` retrieval method. This issue is automatically corrected.
         */
        brokenNullGetSpecAttribute?: boolean;

        /**
         * Environments with this capability fail to complete calls to refresh a page through the standard WebDriver API. This
         * issue is automatically corrected.
         */
        brokenRefresh?: boolean;

        /**
         * Environments with this capability have broken keyboard event APIs. This issue is automatically corrected as much as
         * possible through JavaScript-based event emulation.
         */
        brokenSendKeys?: boolean;

        /**
         * Environments with this capability incorrectly omit the key/value of the button being submitted. This issue is
         * automatically corrected.
         */
        brokenSubmitElement?: boolean;

        /**
         * Environments with this capability do not operate correctly when the `touchScroll` method is called. This issue is
         * automatically corrected.
         */
        brokenTouchScroll?: boolean;

        /**
         * Environments with this capability cannot switch between windows. This issue cannot be corrected.
         */
        brokenWindowSwitch?: boolean;

        /**
         * Environments with this capability break when `setWindowPosition` is called. This issue cannot be corrected.
         */
        brokenWindowPosition?: boolean;

        /**
         * The name of the current environment.
         */
        browserName: string;

        /**
         * Environments with this capability can use CSS selectors to find elements.
         */
        cssSelectorsEnabled?: boolean;

        /**
         * Environments with this capability have viewports that can be resized.
         */
        dynamicViewport?: boolean;

        /**
         * Environments with this capability break when the `getLogTypes` method is called. The list of log types provided here
         * are used in lieu of the values provided by the server when calling `getLogTypes`.
         */
        fixedLogTypes?: boolean | string[];

        /**
         * Environments with this capability have JavaScript enabled. Leadfoot does not operate in environments without
         * JavaScript.
         */
        javascriptEnabled?: boolean;

        /**
         * Environments with this capability allow the geographic location of the browser to be set and retrieved using the
         * WebDriver API.
         */
        locationContextEnabled?: boolean;

        /**
         * Environments with this capability support interaction via mouse commands.
         */
        mouseEnabled?: boolean;

        /**
         * Environments with this capability use platform native events instead of emulated events.
         */
        nativeEvents?: boolean;

        /**
         * The name of the platform on which the current environment is running.
         */
        platform: string;

        /**
         * Environments with this capability allow files to be uploaded from a remote client.
         */
        remoteFiles?: boolean;

        /**
         * Environments with this capability allow the rotation of the device to be set and retrieved using the WebDriver API.
         */
        rotatable?: boolean;

        /**
         * The special key that is used by default on the given platform to perform keyboard shortcuts.
         */
        shortcutKey?: string;

        /**
         * Environments with this capability support CSS transforms.
         */
        supportsCssTransforms?: boolean;

        /**
         * Environments with this capability support asynchronous JavaScript execution.
         */
        supportsExecuteAsync?: boolean;

        /**
         * Environments with this capability support navigation to `data:` URIs.
         */
        supportsNavigationDataUris?: boolean;

        /** {boolean} takesScreenshot
         * Environments with this capability allow screenshots of the current screen to be taken.
         */
        takesScreenshot?: boolean;

        /**
         * Environments with this capability support interaction via touch commands.
         */
        touchEnabled?: boolean;

        /**
         * The version number of the current environment.
         */
        version: string;

        /**
         * Environments with this capability allow local storage and session storage to be set and retrieved using the
         * WebDriver API.
         */
        webStorageEnabled?: boolean;
    }
}

declare module 'leadfoot/helpers/pollUntil' {
    import Promise = require('dojo/promise/Promise');

    namespace pollUntil { }

    /**
     * A {@link module:leadfoot/Command} helper that polls for a value within the client environment until the value exists
     * or a timeout is reached.
     *
     * @param poller
     * The poller function to execute on an interval. The function should return `null` or `undefined` if there is not a
     * result. If the poller function throws, polling will halt.
     *
     * @param args
     * An array of arguments to pass to the poller function when it is invoked. Only values that can be serialised to JSON,
     * plus {@link module:leadfoot/Element} objects, can be specified as arguments.
     *
     * @param timeout
     * The maximum amount of time to wait for a successful result, in milliseconds. If not specified, the current
     * `executeAsync` maximum timeout for the session will be used.
     *
     * @param pollInterval
     * The amount of time to wait between calls to the poller function, in milliseconds. If not specified, defaults to 67ms.
     *
     * @returns
     * A {@link module:leadfoot/Command#then} callback function that, when called, returns a promise that resolves to the
     * value returned by the poller function on success and rejects on failure.
     *
     * @example
     * var Command = require('leadfoot/Command');
     * var pollUntil = require('leadfoot/helpers/pollUntil');
     *
     * new Command(session)
     *     .get('http://example.com')
     *     .then(pollUntil('return document.getElementById("a");', 1000))
     *     .then(function (elementA) {
     *         // element was found
     *     }, function (error) {
     *         // element was not found
     *     });
     *
     * @example
     * var Command = require('leadfoot/Command');
     * var pollUntil = require('leadfoot/helpers/pollUntil');
     *
     * new Command(session)
     *     .get('http://example.com')
     *     .then(pollUntil(function (value) {
     *         var element = document.getElementById('a');
     *         return element && element.value === value ? true : null;
     *     }, [ 'foo' ], 1000))
     *     .then(function () {
     *         // value was set to 'foo'
     *     }, function (error) {
     *         // value was never set
     *     });
     */
    function pollUntil<T>(poller: Function | string, args?: any[], timeout?: number, pollInterval?: number): (value: any) => Promise<T>;
    function pollUntil<T>(poller: Function | string, timeout?: number, pollInterval?: number): (value: any) => Promise<T>;

    export = pollUntil;
}

declare module 'leadfoot/Command' {
    import Element = require('leadfoot/Element');
    import Promise = require('dojo/promise/Promise');
    import Thenable = require('dojo/promise/Thenable');
    import Session = require('leadfoot/Session');

    /**
    * The Command class is a chainable, subclassable object type that can be used to execute commands serially against a
    * remote WebDriver environment. The standard Command class includes methods from the {@link module:leadfoot/Session}
    * and {@link module:leadfoot/Element} classes, so you can perform all standard session and element operations that
    * come with Leadfoot without being forced to author long promise chains.
    *
    * In order to use the Command class, you first need to pass it a {@link module:leadfoot/Session} instance for it to
    * use:
    *
    * ```js
    * var command = new Command(session);
    * ```
    *
    * Once you have created the Command, you can then start chaining methods, and they will execute in order one after
    * another:
    *
    * ```js
    * command.get('http://example.com')
    *   .findByTagName('h1')
    *   .getVisibleText()
    *   .then(function (text) {
    *       assert.strictEqual(text, 'Example Domain');
    *   });
    * ```
    *
    * Because these operations are asynchronous, you need to use a `then` callback in order to retrieve the value from the
    * last method. Command objects are Thenables, which means that they can be used with any Promises/A+ or ES6-confirmant
    * Promises implementation, though there are some specific differences in the arguments and context that are provided
    * to callbacks; see {@link module:leadfoot/Command#then} for more details.
    *
    * ---
    *
    * Each call on a Command generates a new Command object, which means that certain operations can be parallelised:
    *
    * ```js
    * command = command.get('http://example.com');
    * Promise.all([
    *   command.getPageTitle(),
    *   command.findByTagName('h1').getVisibleText()
    * ]).then(function (results) {
    *   assert.strictEqual(results[0], results[1]);
    * });
    * ```
    *
    * In this example, the commands on line 3 and 4 both depend upon the `get` call completing successfully but are
    * otherwise independent of each other and so execute here in parallel. This is different from commands in Intern 1
    * which were always chained onto the last called method within a given test.
    *
    * ---
    *
    * Command objects actually encapsulate two different types of interaction: *session* interactions, which operate
    * against the entire browser session, and *element* interactions, which operate against specific elements taken from
    * the currently loaded page. Things like navigating the browser, moving the mouse cursor, and executing scripts are
    * session interactions; things like getting text displayed on the page, typing into form fields, and getting element
    * attributes are element interactions.
    *
    * Session interactions can be performed at any time, from any Command. On the other hand, to perform element
    * interactions, you first need to retrieve one or more elements to interact with. This can be done using any of the
    * `find` or `findAll` methods, by the `getActiveElement` method, or by returning elements from `execute` or
    * `executeAsync` calls. The retrieved elements are stored internally as the *element context* of all chained
    * Commands. When an element method is called on a chained Command with a single element context, the result will be
    * returned as-is:
    *
    * ```js
    * command = command.get('http://example.com')
    *   // finds one element -> single element context
    *   .findByTagName('h1')
    *   .getVisibleText()
    *   .then(function (text) {
    *     // `text` is the text from the element context
    *     assert.strictEqual(text, 'Example Domain');
    *   });
    * ```
    *
    * When an element method is called on a chained Command with a multiple element context, the result will be returned
    * as an array:
    *
    * ```js
    * command = command.get('http://example.com')
    *   // finds multiple elements -> multiple element context
    *   .findAllByTagName('p')
    *   .getVisibleText()
    *   .then(function (texts) {
    *     // `texts` is an array of text from each of the `p` elements
    *     assert.deepEqual(texts, [
    *       'This domain is established to be used for […]',
    *       'More information...'
    *     ]);
    *   });
    * ```
    *
    * The `find` and `findAll` methods are special and change their behaviour based on the current element filtering state
    * of a given command. If a command has been filtered by element, the `find` and `findAll` commands will only find
    * elements *within* the currently filtered set of elements. Otherwise, they will find elements throughout the page.
    *
    * Some method names, like `click`, are identical for both Session and Element APIs; in this case, the element APIs
    * are suffixed with the word `Element` in order to identify them uniquely.
    *
    * ---
    *
    * Commands can be subclassed in order to add additional functionality without making direct modifications to the
    * default Command prototype that might break other parts of the system:
    *
    * ```js
    * function CustomCommand() {
    *   Command.apply(this, arguments);
    * }
    * CustomCommand.prototype = Object.create(Command.prototype);
    * CustomCommand.prototype.constructor = CustomCommand;
    * CustomCommand.prototype.login = function (username, password) {
    *   return new this.constructor(this, function () {
    *     return this.parent
    *       .findById('username')
    *         .click()
    *         .type(username)
    *         .end()
    *       .findById('password')
    *         .click()
    *         .type(password)
    *         .end()
    *       .findById('login')
    *         .click()
    *         .end();
    *   });
    * };
    * ```
    *
    * Note that returning `this`, or a command chain starting from `this`, from a callback or command initialiser will
    * deadlock the Command, as it waits for itself to settle before settling.
    */
    class Command<T> implements Thenable<T> {
        /**
         * @constructor module:leadfoot/Command
         * @param {module:leadfoot/Command|module:leadfoot/Session} parent
         * The parent command that this command is chained to, or a {@link module:leadfoot/Session} object if this is the
         * first command in a command chain.
         *
         * @param {function(setContext:Function, value:any): (any|Promise)} initialiser
         * A function that will be executed when all parent commands have completed execution. This function can create a
         * new context for this command by calling the passed `setContext` function any time prior to resolving the Promise
         * that it returns. If no context is explicitly provided, the context from the parent command will be used.
         *
         * @param {(function(setContext:Function, error:Error): (any|Promise))=} errback
         * A function that will be executed if any parent commands failed to complete successfully. This function can create
         * a new context for the current command by calling the passed `setContext` function any time prior to resolving the
         * Promise that it returns. If no context is explicitly provided, the context from the parent command will be used.
         */
        constructor(
            parent: Command<any> | Session,
            initialiser?: (setContext: Command.ContextSetter, value: any) => Thenable<T> | T,
            errback?: (setContext: Command.ContextSetter, error: Error) => Thenable<T> | T
        );

        /**
         * The parent Command of the Command, if one exists.
         *
         * @readonly
         */
        parent: Command<any>;

        /**
         * The parent Session of the Command.
         *
         * @readonly
         */
        session: Session;

        /**
         * The filtered elements that will be used if an element-specific method is invoked. Note that this property is not
         * valid until the parent Command has been settled. The context array also has two additional properties:
         *
         * - isSingle (boolean): If true, the context will always contain a single element. This is used to differentiate
         *   between methods that should still return scalar values (`find`) and methods that should return arrays of
         *   values even if there is only one element in the context (`findAll`).
         * - depth (number): The depth of the context within the command chain. This is used to prevent traversal into
         *   higher filtering levels by {@link module:leadfoot/Command#end}.
         *
         * @readonly
         */
        context: Command.Context;

        /**
         * The underlying Promise for the Command.
         *
         * @readonly
         */
        promise: Promise<T>;

        /**
         * Pauses execution of the next command in the chain for `ms` milliseconds.
         *
         * @param {number} ms Time to delay, in milliseconds.
         * @returns {module:leadfoot/Command.<void>}
         */
        sleep(ms: number): Command<void>;

        /**
         * Ends the most recent filtering operation in the current Command chain and returns the set of matched elements
         * to the previous state. This is equivalent to the `jQuery#end` method.
         *
         * @example
         * command
         *   .findById('parent') // sets filter to #parent
         *     .findByClassName('child') // sets filter to all .child inside #parent
         *       .getVisibleText()
         *       .then(function (visibleTexts) {
         *         // all the visible texts from the children
         *       })
         *       .end() // resets filter to #parent
         *     .end(); // resets filter to nothing (the whole document)
         *
         * @param numCommandsToPop The number of element contexts to pop. Defaults to 1.
         */
        end(numCommandsToPop?: number): Command<void>;

        /**
         * Adds a callback to be invoked once the previously chained operation has completed.
         *
         * This method is compatible with the `Promise#then` API, with two important differences:
         *
         * 1. The context (`this`) of the callback is set to the Command object, rather than being `undefined`. This allows
         *    promise helpers to be created that can retrieve the appropriate session and element contexts for execution.
         * 2. A second non-standard `setContext` argument is passed to the callback. This `setContext` function can be
         *    called at any time before the callback fulfills its return value and expects either a single
         *    {@link module:leadfoot/Element} or an array of Elements to be provided as its only argument. The provided
         *    element(s) will be used as the context for subsequent element method invocations (`click`, etc.). If
         *    the `setContext` method is not called, the element context from the parent will be passed through unmodified.
         *
         * @param {Function=} callback
         * @param {Function=} errback
         * @returns {module:leadfoot/Command.<any>}
         */
        then<U>(
            callback: (value: T, setContext?: Command.ContextSetter) => Thenable<U> | U,
            errback?: (error: Error, setContext?: Command.ContextSetter) => Thenable<U> | U
        ): Command<U>;

        /**
         * Adds a callback to be invoked when any of the previously chained operations have failed.
         */
        catch<U>(errback: (error: Error, setContext?: Command.ContextSetter) => Thenable<U> | U): Command<U>;

        /**
         * Adds a callback to be invoked once the previously chained operations have resolved.
         */
        finally<U>(callback: (valueOrError: T | Error, setContext?: Command.ContextSetter) => Thenable<U> | U): Command<U>;

        /**
         * Cancels all outstanding chained operations of the Command. Calling this method will cause this command and all
         * subsequent chained commands to fail with a CancelError.
         */
        cancel(): Command<void>;

        /**
         * Gets the current value of a timeout for the session.
         *
         * @param type The type of timeout to retrieve. One of 'script', 'implicit', or 'page load'.
         * @returns The timeout, in milliseconds.
         */
        getTimeout(type: string): Command<number>;

        /**
         * Sets the value of a timeout for the session.
         *
         * @param type
         * The type of timeout to set. One of 'script', 'implicit', or 'page load'.
         *
         * @param ms
         * The length of time to use for the timeout, in milliseconds. A value of 0 will cause operations to time out
         * immediately.
         */
        setTimeout(type: string, ms: number): Command<void>;

        /**
         * Gets the identifier for the window that is currently focused.
         *
         * @returns A window handle identifier that can be used with other window handling functions.
         */
        getCurrentWindowHandle(): Command<string>;

        /**
         * Gets a list of identifiers for all currently open windows.
         */
        getAllWindowHandles(): Command<string[]>;

        /**
         * Gets the URL that is loaded in the focused window/frame.
         */
        getCurrentUrl(): Command<string>;

        /**
         * Navigates the focused window/frame to a new URL.
         */
        get(url: string): Command<void>;

        /**
         * Navigates the focused window/frame forward one page using the browser’s navigation history.
         */
        goForward(): Command<void>;

        /**
         * Navigates the focused window/frame back one page using the browser’s navigation history.
         */
        goBack(): Command<void>;

        /**
         * Reloads the current browser window/frame.
         */
        refresh(): Command<void>;

        /**
         * Executes JavaScript code within the focused window/frame. The code should return a value synchronously.
         *
         * @see {@link module:leadfoot/Session#executeAsync} to execute code that returns values asynchronously.
         *
         * @param script
         * The code to execute. If a string value is passed, it will be converted to a function on the remote end.
         *
         * @param args
         * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
         * {@link module:leadfoot/Element} objects, can be specified as arguments.
         *
         * @returns
         * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
         * returned.
         */
        execute<T>(script: Function | string, args: any[]): Command<T>;

        /**
         * Executes JavaScript code within the focused window/frame. The code must invoke the provided callback in
         * order to signal that it has completed execution.
         *
         * @see {@link module:leadfoot/Session#execute} to execute code that returns values synchronously.
         * @see {@link module:leadfoot/Session#setExecuteAsyncTimeout} to set the time until an asynchronous script is
         * considered timed out.
         *
         * @param script
         * The code to execute. If a string value is passed, it will be converted to a function on the remote end.
         *
         * @param args
         * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
         * {@link module:leadfoot/Element} objects, can be specified as arguments. In addition to these arguments, a
         * callback function will always be passed as the final argument to the script. This callback function must be
         * invoked in order to signal that execution has completed. The return value of the script, if any, should be passed
         * to this callback function.
         *
         * @returns
         * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
         * returned.
         */
        executeAsync<T>(script: Function | string, args: any[]): Command<T>;

        /**
         * Gets a screenshot of the focused window and returns it in PNG format.
         *
         * @returns A buffer containing a PNG image.
         */
        takeScreenshot(): Command<Buffer>;

        /**
         * Gets a list of input method editor engines available to the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        getAvailableImeEngines(): Command<string[]>;

        /**
         * Gets the currently active input method editor for the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        getActiveImeEngine(): Command<string>;

        /**
         * Returns whether or not an input method editor is currently active in the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        isImeActivated(): Command<boolean>;

        /**
         * Deactivates any active input method editor in the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        deactivateIme(): Command<void>;

        /**
         * Activates an input method editor in the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         *
         * @param engine The type of IME to activate.
         */
        activateIme(engine: string): Command<void>;

        /**
         * Switches the currently focused frame to a new frame.
         *
         * @param id
         * The frame to switch to. In most environments, a number or string value corresponds to a key in the
         * `window.frames` object of the currently active frame. If `null`, the topmost (default) frame will be used.
         * If an Element is provided, it must correspond to a `<frame>` or `<iframe>` element.
         */
        switchToFrame(id: string | number | Element): Command<void>;

        /**
         * Switches the currently focused window to a new window.
         *
         * @param name
         * The name of the window to switch to. In most environments, this value corresponds to the `window.name`
         * property of a window; however, this is not the case in mobile environments. In mobile environments, use
         * {@link module:leadfoot/Session#getAllWindowHandles} to learn what window names can be used.
         */
        switchToWindow(name: string): Command<void>;

        /**
         * Switches the currently focused frame to the parent of the currently focused frame.
         */
        switchToParentFrame(): Command<void>;

        /**
         * Closes the currently focused window. In most environments, after the window has been closed, it is necessary
         * to explicitly switch to whatever window is now focused.
         */
        closeCurrentWindow(): Command<void>;

        /**
         * Sets the dimensions of a window.
         *
         * @param windowHandle
         * The name of the window to resize. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to resize the currently focused window.
         *
         * @param width
         * The new width of the window, in CSS pixels.
         *
         * @param height
         * The new height of the window, in CSS pixels.
         */
        setWindowSize(windowHandle: string, width: number, height: number): Command<void>;
        setWindowSize(width: number, height: number): Command<void>;

        /**
         * Gets the dimensions of a window.
         *
         * @param windowHandle
         * The name of the window to query. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to query the currently focused window.
         *
         * @returns
         * An object describing the width and height of the window, in CSS pixels.
         */
        getWindowSize(windowHandle?: string): Command<{ width: number; height: number; }>;

        /**
         * Sets the position of a window.
         *
         * @param windowHandle
         * The name of the window to move. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to move the currently focused window.
         *
         * @param x
         * The screen x-coordinate to move to, in CSS pixels, relative to the left edge of the primary monitor.
         *
         * @param y
         * The screen y-coordinate to move to, in CSS pixels, relative to the top edge of the primary monitor.
         */
        setWindowPosition(windowHandle: string, x: number, y: number): Command<void>;
        setWindowPosition(x: number, y: number): Command<void>;

        /**
         * Gets the position of a window.
         *
         * @param windowHandle
         * The name of the window to query. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to query the currently focused window.
         *
         * @returns
         * An object describing the position of the window, in CSS pixels, relative to the top-left corner of the
         * primary monitor. If a secondary monitor exists above or to the left of the primary monitor, these values
         * will be negative.
         */
        getWindowPosition(windowHandle?: string): Command<{ x: number; y: number; }>;

        /**
         * Maximises a window according to the platform’s window system behaviour.
         *
         * @param windowHandle
         * The name of the window to resize. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to resize the currently focused window.
         */
        maximizeWindow(windowHandle?: string): Command<void>;

        /**
         * Gets all cookies set on the current page.
         */
        getCookies(): Command<leadfoot.WebDriverCookie[]>;

        /**
         * Sets a cookie on the current page.
         *
         * @param cookie
         */
        setCookie(cookie: leadfoot.WebDriverCookie): Command<void>;

        /**
         * Clears all cookies for the current page.
         */
        clearCookies(): Command<void>;

        /**
         * Deletes a cookie on the current page.
         *
         * @param name The name of the cookie to delete.
         */
        deleteCookie(name: string): Command<void>;

        /**
         * Gets the HTML loaded in the focused window/frame. This markup is serialised by the remote environment so
         * may not exactly match the HTML provided by the Web server.
         */
        getPageSource(): Command<string>;

        /**
         * Gets the title of the focused window/frame.
         */
        getPageTitle(): Command<string>;

        /**
         * Gets the first element from the elements in the Command's context that matches the given query.
         *
         * @see {@link module:leadfoot/Session#setFindTimeout} to set the amount of time it the remote environment
         * should spend waiting for an element that does not exist at the time of the `find` call before timing
         * out.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        find(using: string, value: string): Command<Element>;

        /**
         * Gets all elements from the elements in the Command's context that match the given query.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        findAll(using: string, value: string): Command<Element[]>;

        /**
         * Gets the currently focused element from the focused window/frame.
         */
        getActiveElement(): Command<Element>;

        /**
         * Types into the focused window/frame/element.
         *
         * @param keys
         * The text to type in the remote environment. It is possible to type keys that do not have normal character
         * representations (modifier keys, function keys, etc.) as well as keys that have two different representations
         * on a typical US-ASCII keyboard (numpad keys); use the values from {@link module:leadfoot/keys} to type these
         * special characters. Any modifier keys that are activated by this call will persist until they are
         * deactivated. To deactivate a modifier key, type the same modifier key a second time, or send `\uE000`
         * ('NULL') to deactivate all currently active modifier keys.
         */
        pressKeys(keys: string | string[]): Command<void>;

        /**
         * Gets the current screen orientation.
         *
         * @returns Either 'portrait' or 'landscape'.
         */
        getOrientation(): Command<string>;

        /**
         * Sets the screen orientation.
         *
         * @param orientation Either 'portrait' or 'landscape'.
         */
        setOrientation(orientation: string): Command<void>;

        /**
         * Gets the text displayed in the currently active alert pop-up.
         */
        getAlertText(): Command<string>;

        /**
         * Types into the currently active prompt pop-up.
         *
         * @param text The text to type into the pop-up’s input box.
         */
        typeInPrompt(text: string | string[]): Command<void>;

        /**
         * Accepts an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button.
         */
        acceptAlert(): Command<void>;

        /**
         * Dismisses an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button of an alert pop-up
         * or the 'Cancel' button of a prompt or confirmation pop-up.
         */
        dismissAlert(): Command<void>;

        /**
         * Moves the remote environment’s mouse cursor to the specified element or relative position. If the element is
         * outside of the viewport, the remote driver will attempt to scroll it into view automatically.
         *
         * @param element
         * The element to move the mouse to. If x-offset and y-offset are not specified, the mouse will be moved to the
         * centre of the element.
         *
         * @param xOffset
         * The x-offset of the cursor, maybe in CSS pixels, relative to the left edge of the specified element’s
         * bounding client rectangle. If no element is specified, the offset is relative to the previous position of the
         * mouse, or to the left edge of the page’s root element if the mouse was never moved before.
         *
         * @param yOffset
         * The y-offset of the cursor, maybe in CSS pixels, relative to the top edge of the specified element’s bounding
         * client rectangle. If no element is specified, the offset is relative to the previous position of the mouse,
         * or to the top edge of the page’s root element if the mouse was never moved before.
         */
        moveMouseTo(element: Element, xOffset?: number, yOffset?: number): Command<void>;
        moveMouseTo(xOffset: number, yOffset: number): Command<void>;

        /**
         * Clicks a mouse button at the point where the mouse cursor is currently positioned. This method may fail to
         * execute with an error if the mouse has not been moved anywhere since the page was loaded.
         *
         * @param button
         * The button to click. 0 corresponds to the primary mouse button, 1 to the middle mouse button, 2 to the
         * secondary mouse button. Numbers above 2 correspond to any additional buttons a mouse might provide.
         */
        clickMouseButton(button?: number): Command<void>;

        /**
         * Depresses a mouse button without releasing it.
         *
         * @param button The button to press. See {@link module:leadfoot/Session#click} for available options.
         */
        pressMouseButton(button?: number): Command<void>;

        /**
         * Releases a previously depressed mouse button.
         *
         * @param button The button to press. See {@link module:leadfoot/Session#click} for available options.
         */
        releaseMouseButton(button?: number): Command<void>;

        /**
         * Double-clicks the primary mouse button.
         */
        doubleClick(): Command<void>;

        /**
         * Taps an element on a touch screen device. If the element is outside of the viewport, the remote driver will
         * attempt to scroll it into view automatically.
         *
         * @param element The element to tap.
         */
        tap(element: Element): Command<void>;

        /**
         * Depresses a new finger at the given point on a touch screen device without releasing it.
         *
         * @param x The screen x-coordinate to press, maybe in device pixels.
         * @param y The screen y-coordinate to press, maybe in device pixels.
         */
        pressFinger(x: number, y: number): Command<void>;

        /**
         * Releases whatever finger exists at the given point on a touch screen device.
         *
         * @param x The screen x-coordinate where a finger is pressed, maybe in device pixels.
         * @param y The screen y-coordinate where a finger is pressed, maybe in device pixels.
         */
        releaseFinger(x: number, y: number): Command<void>;

        /**
         * Moves the last depressed finger to a new point on the touch screen.
         *
         * @param x The screen x-coordinate to move to, maybe in device pixels.
         * @param y The screen y-coordinate to move to, maybe in device pixels.
         */
        moveFinger(x: number, y: number): Command<void>;

        /**
         * Scrolls the currently focused window on a touch screen device.
         *
         * @param element
         * An element to scroll to. The window will be scrolled so the element is as close to the top-left corner of the
         * window as possible.
         *
         * @param xOffset
         * An optional x-offset, relative to the left edge of the element, in CSS pixels. If no element is specified,
         * the offset is relative to the previous scroll position of the window.
         *
         * @param yOffset
         * An optional y-offset, relative to the top edge of the element, in CSS pixels. If no element is specified,
         * the offset is relative to the previous scroll position of the window.
         */
        touchScroll(element: Element, xOffset: number, yOffset: number): Command<void>;
        touchScroll(xOffset: number, yOffset: number): Command<void>;

        /**
         * Performs a double-tap gesture on an element.
         *
         * @param element The element to double-tap.
         */
        doubleTap(element: Element): Command<void>;

        /**
         * Performs a long-tap gesture on an element.
         *
         * @param element The element to long-tap.
         */
        longTap(element: Element): Command<void>;

        /**
         * Flicks a finger. Note that this method is currently badly specified and highly dysfunctional and is only
         * provided for the sake of completeness.
         *
         * @param element The element where the flick should start.
         * @param xOffset The x-offset in pixels to flick by.
         * @param yOffset The x-offset in pixels to flick by.
         * @param speed The speed of the flick, in pixels per *second*. Most human flicks are 100–200ms, so
         * this value will be higher than expected.
         */
        flickFinger(element: Element, xOffset: number, yOffset: number, speed: number): Command<void>;

        /**
         * Gets the current geographical location of the remote environment.
         *
         * @returns
         * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
         * as meters above the WGS84 ellipsoid. Not all environments support altitude.
         */
        getGeolocation(): Command<leadfoot.Geolocation>;

        /**
         * Sets the geographical location of the remote environment.
         *
         * @param location
         * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
         * as meters above the WGS84 ellipsoid. Not all environments support altitude.
         */
        setGeolocation(location: leadfoot.Geolocation): Command<void>;

        /**
         * Gets all logs from the remote environment of the given type. The logs in the remote environment are cleared
         * once they have been retrieved.
         *
         * @param type
         * The type of log entries to retrieve. Available log types differ between remote environments. Use
         * {@link module:leadfoot/Session#getAvailableLogTypes} to learn what log types are currently available. Not all
         * environments support all possible log types.
         *
         * @returns
         * An array of log entry objects. Timestamps in log entries are Unix timestamps, in seconds.
         */
        getLogsFor(type: string): Command<leadfoot.LogEntry[]>;

        /**
         * Gets the types of logs that are currently available for retrieval from the remote environment.
         */
        getAvailableLogTypes(): Command<string[]>;

        /**
         * Gets the current state of the HTML5 application cache for the current page.
         *
         * @returns
         * The cache status. One of 0 (uncached), 1 (cached/idle), 2 (checking), 3 (downloading), 4 (update ready), 5
         * (obsolete).
         */
        getApplicationCacheStatus(): Command<number>;

        /**
         * Terminates the session. No more commands will be accepted by the remote after this point.
         */
        quit(): Command<void>;

        /**
         * Gets the list of keys set in local storage for the focused window/frame.
         */
        getLocalStorageKeys(): Command<string[]>;

        /**
         * Sets a value in local storage for the focused window/frame.
         *
         * @param key The key to set.
         * @param value The value to set.
         */
        setLocalStorageItem(key: string, value: string): Command<void>;

        /**
         * Clears all data in local storage for the focused window/frame.
         */
        clearLocalStorage(): Command<void>;

        /**
         * Gets a value from local storage for the focused window/frame.
         *
         * @param key The key of the data to get.
         */
        getLocalStorageItem(key: string): Command<string>;

        /**
         * Deletes a value from local storage for the focused window/frame.
         *
         * @param key The key of the data to delete.
         */
        deleteLocalStorageItem(key: string): Command<void>;

        /**
         * Gets the number of keys set in local storage for the focused window/frame.
         */
        getLocalStorageLength(): Command<number>;

        /**
         * Gets the list of keys set in session storage for the focused window/frame.
         */
        getSessionStorageKeys(): Command<string[]>;

        /**
         * Sets a value in session storage for the focused window/frame.
         *
         * @param key The key to set.
         * @param value The value to set.
         */
        setSessionStorageItem(key: string, value: string): Command<void>;

        /**
         * Clears all data in session storage for the focused window/frame.
         */
        clearSessionStorage(): Command<void>;

        /**
         * Gets a value from session storage for the focused window/frame.
         *
         * @param key The key of the data to get.
         */
        getSessionStorageItem(key: string): Command<string>;

        /**
         * Deletes a value from session storage for the focused window/frame.
         *
         * @param key The key of the data to delete.
         */
        deleteSessionStorageItem(key: string): Command<void>;

        /**
         * Gets the number of keys set in session storage for the focused window/frame.
         */
        getSessionStorageLength(): Command<number>;

        /**
         * Gets the first element within the elements in the Command's context matching the given CSS class name.
         *
         * @param className The CSS class name to search for.
         */
        findByClassName(className: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context matching the given CSS selector.
         *
         * @param selector The CSS selector to search for.
         */
        findByCssSelector(selector: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context matching the given ID.
         *
         * @param id The ID of the element.
         */
        findById(id: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context matching the given name attribute.
         *
         * @param name The name of the element.
         */
        findByName(name: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context matching the given case-insensitive link text.
         *
         * @param text The link text of the element.
         */
        findByLinkText(text: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context partially matching the given case-insensitive link text.
         *
         * @param text The partial link text of the element.
         */
        findByPartialLinkText(text: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context matching the given HTML tag name.
         *
         * @param tagName The tag name of the element.
         */
        findByTagName(tagName: string): Command<Element>;

        /**
         * Gets the first element within the elements in the Command's context matching the given XPath selector.
         *
         * @param path The XPath selector to search for.
         */
        findByXpath(path: string): Command<Element>;

        /**
         * Gets all elements within the elements in the Command's context matching the given CSS class name.
         *
         * @param className The CSS class name to search for.
         */
        findAllByClassName(className: string): Command<Element[]>;

        /**
         * Gets all elements within the elements in the Command's context matching the given CSS selector.
         *
         * @param selector The CSS selector to search for.
         */
        findAllByCssSelector(selector: string): Command<Element[]>;

        /**
         * Gets all elements within the elements in the Command's context matching the given name attribute.
         *
         * @param name The name of the element.
         */
        findAllByName(name: string): Command<Element[]>;

        /**
         * Gets all elements within the elements in the Command's context matching the given case-insensitive link text.
         *
         * @param text The link text of the element.
         */
        findAllByLinkText(text: string): Command<Element[]>;

        /**
         * Gets all elements within the elements in the Command's context partially matching the given case-insensitive link text.
         *
         * @param text The partial link text of the element.
         */
        findAllByPartialLinkText(text: string): Command<Element[]>;

        /**
         * Gets all elements within the elements in the Command's context matching the given HTML tag name.
         *
         * @param tagName The tag name of the element.
         */
        findAllByTagName(tagName: string): Command<Element[]>;

        /**
         * Gets all elements within the elements in the Command's context matching the given XPath selector.
         *
         * @param path The XPath selector to search for.
         */
        findAllByXpath(path: string): Command<Element[]>;

        /**
         * Waits for all elements within the elements in the Command's context that match the given query to be destroyed.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        waitForDeleted(using: string, value: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given CSS class name to be destroyed.
         *
         * @param className The CSS class name to search for.
         */
        waitForDeletedByClassName(className: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given CSS selector to be destroyed.
         *
         * @param selector The CSS selector to search for.
         */
        waitForDeletedByCssSelector(className: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given ID to be destroyed.
         *
         * @param id The ID of the element.
         */
        waitForDeletedById(id: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given name attribute to be destroyed.
         *
         * @param name The name of the element.
         */
        waitForDeletedByName(name: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given case-insensitive link text to be destroyed.
         *
         * @param text The link text of the element.
         */
        waitForDeletedByLinkText(text: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context partially matching the given case-insensitive link text to be
         * destroyed.
         *
         * @param text The partial link text of the element.
         */
        waitForDeletedByPartialLinkText(text: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given HTML tag name to be destroyed.
         *
         * @param tagName The tag name of the element.
         */
        waitForDeletedByTagName(tagName: string): Command<void>;

        /**
         * Waits for all elements within the elements in the Command's context matching the given XPath selector to be destroyed.
         *
         * @param path The XPath selector to search for.
         */
        waitForDeletedByXpath(path: string): Command<void>;

        /**
         * Gets the timeout for {@link module:leadfoot/Session#executeAsync} calls.
         */
        getExecuteAsyncTimeout(): Command<number>;

        /**
         * Sets the timeout for {@link module:leadfoot/Session#executeAsync} calls.
         *
         * @param ms The length of the timeout, in milliseconds.
         */
        setExecuteAsyncTimeout(ms: number): Command<number>;

        /**
         * Gets the timeout for {@link module:leadfoot/Session#find} calls.
         */
        getFindTimeout(): Command<number>;

        /**
         * Sets the timeout for {@link module:leadfoot/Session#find} calls.
         *
         * @param ms The length of the timeout, in milliseconds.
         */
        setFindTimeout(ms: number): Command<void>;

        /**
         * Gets the timeout for {@link module:leadfoot/Session#get} calls.
         */
        getPageLoadTimeout(): Command<number>;

        /**
         * Sets the timeout for {@link module:leadfoot/Session#get} calls.
         *
         * @param ms The length of the timeout, in milliseconds.
         */
        setPageLoadTimeout(ms: number): Command<void>;

        /**
         * Clicks the element. This method works on both mouse and touch platforms.
         */
        click(): Command<void>;

        /**
         * Submits the element, if it is a form, or the form belonging to the element, if it is a form element.
         */
        submit(): Command<void>;

        /**
         * Gets the visible text within the element. `<br>` elements are converted to line breaks in the returned
         * text, and whitespace is normalised per the usual XML/HTML whitespace normalisation rules.
         */
        getVisibleText(): Command<string | string[]>;

        /**
         * Types into the element. This method works the same as the {@link module:leadfoot/Session#pressKeys} method
         * except that any modifier keys are automatically released at the end of the command.
         *
         * @param value
         * The text to type in the remote environment. See {@link module:leadfoot/Session#pressKeys} for more information.
         */
        type(value: string | string[]): Command<void>;

        /**
         * Gets the tag name of the element. For HTML documents, the value is always lowercase.
         */
        getTagName(): Command<string>;

        /**
         * Clears the value of a form element.
         */
        clearValue(): Command<void>;

        /**
         * Returns whether or not a form element is currently selected (for drop-down options and radio buttons), or
         * whether or not the element is currently checked (for checkboxes).
         */
        isSelected(): Command<boolean>;

        /**
         * Returns whether or not a form element can be interacted with.
         */
        isEnabled(): Command<boolean>;

        /**
         * Gets a property or attribute of the element according to the WebDriver specification algorithm. Use of this
         * method is not recommended; instead, use {@link module:leadfoot/Element#getAttribute} to retrieve DOM attributes
         * and {@link module:leadfoot/Element#getProperty} to retrieve DOM properties.
         *
         * This method uses the following algorithm on the server to determine what value to return:
         *
         * 1. If `name` is 'style', returns the `style.cssText` property of the element.
         * 2. If the attribute exists and is a boolean attribute, returns 'true' if the attribute is true, or null
         *    otherwise.
         * 3. If the element is an `<option>` element and `name` is 'value', returns the `value` attribute if it exists,
         *    otherwise returns the visible text content of the option.
         * 4. If the element is a checkbox or radio button and `name` is 'selected', returns 'true' if the element is
         *    checked, or null otherwise.
         * 5. If the returned value is expected to be a URL (e.g. element is `<a>` and attribute is `href`), returns the
         *    fully resolved URL from the `href`/`src` property of the element, not the attribute.
         * 6. If `name` is 'class', returns the `className` property of the element.
         * 7. If `name` is 'readonly', returns 'true' if the `readOnly` property is true, or null otherwise.
         * 8. If `name` corresponds to a property of the element, and the property is not an Object, return the property
         *    value coerced to a string.
         * 9. If `name` corresponds to an attribute of the element, return the attribute value.
         *
         * @param name The property or attribute name.
         * @returns The value of the attribute as a string, or `null` if no such property or
         * attribute exists.
         */
        getSpecAttribute(name: string): Command<string>;

        /**
         * Gets an attribute of the element.
         *
         * @see Element#getProperty to retrieve an element property.
         * @param name The name of the attribute.
         * @returns The value of the attribute, or `null` if no such attribute exists.
         */
        getAttribute(name: string): Command<string>;

        /**
         * Gets a property of the element.
         *
         * @see Element#getAttribute to retrieve an element attribute.
         * @param name The name of the property.
         * @returns The value of the property.
         */
        getProperty<T extends any>(name: string): Command<T>;

        /**
         * Determines if this element is equal to another element.
         *
         * @param other The other element.
         */
        equals(other: Element): Command<boolean>;

        /**
         * Returns whether or not the element would be visible to an actual user. This means that the following types
         * of elements are considered to be not displayed:
         *
         * 1. Elements with `display: none`
         * 2. Elements with `visibility: hidden`
         * 3. Elements positioned outside of the viewport that cannot be scrolled into view
         * 4. Elements with `opacity: 0`
         * 5. Elements with no `offsetWidth` or `offsetHeight`
         */
        isDisplayed(): Command<boolean>;

        /**
         * Gets the position of the element relative to the top-left corner of the document, taking into account
         * scrolling and CSS transformations (if they are supported).
         */
        getPosition(): Command<{ x: number; y: number; }>;

        /**
         * Gets the size of the element, taking into account CSS transformations (if they are supported).
         */
        getSize(): Command<{ width: number; height: number; }>;

        /**
         * Gets a CSS computed property value for the element.
         *
         * @param propertyName
         * The CSS property to retrieve. This argument must be camel-case, *not* hyphenated.
         */
        getComputedStyle(propertyName: string): Command<string>;

        /**
         * Augments `target` with a conversion of the `originalFn` method that enables its use with a Command object.
         * This can be used to easily add new methods from any custom object that implements the Session API to any target
         * object that implements the Command API.
         *
         * Functions that are copied may have the following extra properties in order to change the way that Command works
         * with these functions:
         *
         * - `createsContext` (boolean): If this property is specified, the return value from the function will be used as
         *   the new context for the returned Command.
         * - `usesElement` (boolean): If this property is specified, element(s) from the current context will be used as
         *   the first argument to the function, if the explicitly specified first argument is not already an element.
         */
        static addSessionMethod(target: Command<any>, key: string, originalFn: Function): void;

        /**
         * Augments `target` with a method that will call `key` on all context elements stored within `target`.
         * This can be used to easily add new methods from any custom object that implements the Element API to any target
         * object that implements the Command API.
         *
         * Functions that are copied may have the following extra properties in order to change the way that Command works
         * with these functions:
         *
         * - `createsContext` (boolean): If this property is specified, the return value from the function will be used as
         *   the new context for the returned Command.
         */
        static addElementMethod(target: Command<any>, key: string): void;
    }

    module Command {
        export interface Context extends Array<Element> {
            isSingle: boolean;
            depth: number;
        }

        export interface ContextSetter {
            (context: Element | Element[]): void;
        }
    }

    export = Command;
}

declare module 'leadfoot/Element' {
    import Promise = require('dojo/promise/Promise');
    import Session = require('leadfoot/Session');

    /**
     * An Element represents a DOM or UI element within the remote environment.
     */
    class Element {
        constructor(elementId: string | Element | { ELEMENT: string; }, session: Session);

        /**
         * The opaque, remote-provided ID of the element.
         * @readonly
         */
        elementId: string;

        /**
         * The session that the element belongs to.
         *
         * @readonly
         */
        session: Session;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _get(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _post(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        toJSON(): { ELEMENT: string; };

        /**
         * Gets the first element within this element that matches the given query.
         *
         * @see {@link module:leadfoot/Session#setFindTimeout} to set the amount of time it the remote environment
         * should spend waiting for an element that does not exist at the time of the `find` call before timing
         * out.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        find(using: string, value: string): Promise<Element>;

        /**
         * Gets all elements within this element that match the given query.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        findAll(using: string, value: string): Promise<Element[]>;

        /**
         * Clicks the element. This method works on both mouse and touch platforms.
         */
        click(): Promise<void>;

        /**
         * Submits the element, if it is a form, or the form belonging to the element, if it is a form element.
         */
        submit(): Promise<void>;

        /**
         * Gets the visible text within the element. `<br>` elements are converted to line breaks in the returned
         * text, and whitespace is normalised per the usual XML/HTML whitespace normalisation rules.
         */
        getVisibleText(): Promise<string>;

        /**
         * Types into the element. This method works the same as the {@link module:leadfoot/Session#pressKeys} method
         * except that any modifier keys are automatically released at the end of the command.
         *
         * @param value
         * The text to type in the remote environment. See {@link module:leadfoot/Session#pressKeys} for more information.
         */
        type(value: string | string[]): Promise<void>;

        /**
         * Gets the tag name of the element. For HTML documents, the value is always lowercase.
         */
        getTagName(): Promise<string>;

        /**
         * Clears the value of a form element.
         */
        clearValue(): Promise<void>;

        /**
         * Returns whether or not a form element is currently selected (for drop-down options and radio buttons), or
         * whether or not the element is currently checked (for checkboxes).
         */
        isSelected(): Promise<boolean>;

        /**
         * Returns whether or not a form element can be interacted with.
         */
        isEnabled(): Promise<boolean>;

        /**
         * Gets a property or attribute of the element according to the WebDriver specification algorithm. Use of this
         * method is not recommended; instead, use {@link module:leadfoot/Element#getAttribute} to retrieve DOM attributes
         * and {@link module:leadfoot/Element#getProperty} to retrieve DOM properties.
         *
         * This method uses the following algorithm on the server to determine what value to return:
         *
         * 1. If `name` is 'style', returns the `style.cssText` property of the element.
         * 2. If the attribute exists and is a boolean attribute, returns 'true' if the attribute is true, or null
         *    otherwise.
         * 3. If the element is an `<option>` element and `name` is 'value', returns the `value` attribute if it exists,
         *    otherwise returns the visible text content of the option.
         * 4. If the element is a checkbox or radio button and `name` is 'selected', returns 'true' if the element is
         *    checked, or null otherwise.
         * 5. If the returned value is expected to be a URL (e.g. element is `<a>` and attribute is `href`), returns the
         *    fully resolved URL from the `href`/`src` property of the element, not the attribute.
         * 6. If `name` is 'class', returns the `className` property of the element.
         * 7. If `name` is 'readonly', returns 'true' if the `readOnly` property is true, or null otherwise.
         * 8. If `name` corresponds to a property of the element, and the property is not an Object, return the property
         *    value coerced to a string.
         * 9. If `name` corresponds to an attribute of the element, return the attribute value.
         *
         * @param name The property or attribute name.
         * @returns The value of the attribute as a string, or `null` if no such property or
         * attribute exists.
         */
        getSpecAttribute(name: string): Promise<string>;

        /**
         * Gets an attribute of the element.
         *
         * @see Element#getProperty to retrieve an element property.
         * @param name The name of the attribute.
         * @returns The value of the attribute, or `null` if no such attribute exists.
         */
        getAttribute(name: string): Promise<string>;

        /**
         * Gets a property of the element.
         *
         * @see Element#getAttribute to retrieve an element attribute.
         * @param name The name of the property.
         * @returns The value of the property.
         */
        getProperty<T extends any>(name: string): Promise<T>;

        /**
         * Determines if this element is equal to another element.
         *
         * @param other The other element.
         */
        equals(other: Element): Promise<boolean>;

        /**
         * Returns whether or not the element would be visible to an actual user. This means that the following types
         * of elements are considered to be not displayed:
         *
         * 1. Elements with `display: none`
         * 2. Elements with `visibility: hidden`
         * 3. Elements positioned outside of the viewport that cannot be scrolled into view
         * 4. Elements with `opacity: 0`
         * 5. Elements with no `offsetWidth` or `offsetHeight`
         */
        isDisplayed(): Promise<boolean>;

        /**
         * Gets the position of the element relative to the top-left corner of the document, taking into account
         * scrolling and CSS transformations (if they are supported).
         */
        getPosition(): Promise<{ x: number; y: number; }>;

        /**
         * Gets the size of the element, taking into account CSS transformations (if they are supported).
         */
        getSize(): Promise<{ width: number; height: number; }>;

        /**
         * Gets a CSS computed property value for the element.
         *
         * @param propertyName
         * The CSS property to retrieve. This argument must be camel-case, *not* hyphenated.
         */
        getComputedStyle(propertyName: string): Promise<string>;

        /**
         * Gets the first element inside this element matching the given CSS class name.
         *
         * @param className The CSS class name to search for.
         */
        findByClassName(className: string): Promise<Element>;

        /**
         * Gets the first element inside this element matching the given CSS selector.
         *
         * @param selector The CSS selector to search for.
         */
        findByCssSelector(selector: string): Promise<Element>;

        /**
         * Gets the first element inside this element matching the given ID.
         *
         * @param id The ID of the element.
         */
        findById(id: string): Promise<Element>;

        /**
         * Gets the first element inside this element matching the given name attribute.
         *
         * @param name The name of the element.
         */
        findByName(name: string): Promise<Element>;

        /**
         * Gets the first element inside this element matching the given case-insensitive link text.
         *
         * @param text The link text of the element.
         */
        findByLinkText(text: string): Promise<Element>;

        /**
         * Gets the first element inside this element partially matching the given case-insensitive link text.
         *
         * @param text The partial link text of the element.
         */
        findByPartialLinkText(text: string): Promise<Element>;

        /**
         * Gets the first element inside this element matching the given HTML tag name.
         *
         * @param tagName The tag name of the element.
         */
        findByTagName(tagName: string): Promise<Element>;

        /**
         * Gets the first element inside this element matching the given XPath selector.
         *
         * @param path The XPath selector to search for.
         */
        findByXpath(path: string): Promise<Element>;

        /**
         * Gets all elements inside this element matching the given CSS class name.
         *
         * @param className The CSS class name to search for.
         */
        findAllByClassName(className: string): Promise<Element[]>;

        /**
         * Gets all elements inside this element matching the given CSS selector.
         *
         * @param selector The CSS selector to search for.
         */
        findAllByCssSelector(selector: string): Promise<Element[]>;

        /**
         * Gets all elements inside this element matching the given name attribute.
         *
         * @param name The name of the element.
         */
        findAllByName(name: string): Promise<Element[]>;

        /**
         * Gets all elements inside this element matching the given case-insensitive link text.
         *
         * @param text The link text of the element.
         */
        findAllByLinkText(text: string): Promise<Element[]>;

        /**
         * Gets all elements inside this element partially matching the given case-insensitive link text.
         *
         * @param text The partial link text of the element.
         */
        findAllByPartialLinkText(text: string): Promise<Element[]>;

        /**
         * Gets all elements inside this element matching the given HTML tag name.
         *
         * @param tagName The tag name of the element.
         */
        findAllByTagName(tagName: string): Promise<Element[]>;

        /**
         * Gets all elements inside this element matching the given XPath selector.
         *
         * @param path The XPath selector to search for.
         */
        findAllByXpath(path: string): Promise<Element[]>;

        /**
         * Waits for all elements inside this element that match the given query to be destroyed.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        waitForDeleted(using: string, value: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given CSS class name to be destroyed.
         *
         * @param className The CSS class name to search for.
         */
        waitForDeletedByClassName(className: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given CSS selector to be destroyed.
         *
         * @param selector The CSS selector to search for.
         */
        waitForDeletedByCssSelector(className: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given ID to be destroyed.
         *
         * @param id The ID of the element.
         */
        waitForDeletedById(id: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given name attribute to be destroyed.
         *
         * @param name The name of the element.
         */
        waitForDeletedByName(name: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given case-insensitive link text to be destroyed.
         *
         * @param text The link text of the element.
         */
        waitForDeletedByLinkText(text: string): Promise<void>;

        /**
         * Waits for all elements inside this element partially matching the given case-insensitive link text to be
         * destroyed.
         *
         * @param text The partial link text of the element.
         */
        waitForDeletedByPartialLinkText(text: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given HTML tag name to be destroyed.
         *
         * @param tagName The tag name of the element.
         */
        waitForDeletedByTagName(tagName: string): Promise<void>;

        /**
         * Waits for all elements inside this element matching the given XPath selector to be destroyed.
         *
         * @param path The XPath selector to search for.
         */
        waitForDeletedByXpath(path: string): Promise<void>;
    }

    export = Element;
}

declare module 'leadfoot/keys' {
    var keys: {
        /** Releases all held modifier keys. */
        'NULL': string;
        /** OS-specific keystroke sequence that performs a cancel action. */
        'CANCEL': string;
        /** The help key. This key only appears on older Apple keyboards in place of the Insert key. */
        'HELP': string;
        /** The backspace key. */
        'BACKSPACE': string;
        /** The tab key. */
        'TAB': string;
        /** The clear key. This key only appears on full-size Apple keyboards in place of Num Lock key. */
        'CLEAR': string;
        /** The return key. */
        'RETURN': string;
        /** The enter (numpad) key. */
        'ENTER': string;
        /** The shift key. */
        'SHIFT': string;
        /** The control key. */
        'CONTROL': string;
        /** The alt key. */
        'ALT': string;
        /** The pause key. */
        'PAUSE': string;
        /** The escape key. */
        'ESCAPE': string;

        /** The space bar. */
        'SPACE': string;
        /** The page up key. */
        'PAGE_UP': string;
        /** The page down key. */
        'PAGE_DOWN': string;
        /** The end key. */
        'END': string;
        /** The home key. */
        'HOME': string;
        /** The left arrow. */
        'ARROW_LEFT': string;
        /** The up arrow. */
        'ARROW_UP': string;
        /** The right arrow. */
        'ARROW_RIGHT': string;
        /** The down arrow. */
        'ARROW_DOWN': string;
        /** The insert key. */
        'INSERT': string;
        /** The delete key. */
        'DELETE': string;
        /** The semicolon key. */
        'SEMICOLON': string;
        /** The equals key. */
        'EQUALS': string;

        /** The numpad zero key. */
        'NUMPAD0': string;
        /** The numpad one key. */
        'NUMPAD1': string;
        /** The numpad two key. */
        'NUMPAD2': string;
        /** The numpad three key. */
        'NUMPAD3': string;
        /** The numpad four key. */
        'NUMPAD4': string;
        /** The numpad five key. */
        'NUMPAD5': string;
        /** The numpad six key. */
        'NUMPAD6': string;
        /** The numpad seven key. */
        'NUMPAD7': string;
        /** The numpad eight key. */
        'NUMPAD8': string;
        /** The numpad nine key. */
        'NUMPAD9': string;

        /** The numpad multiply (*) key. */
        'MULTIPLY': string;
        /** The numpad add (+) key. */
        'ADD': string;
        /** The numpad separator (=) key. */
        'SEPARATOR': string;
        /** The numpad subtract (-) key. */
        'SUBTRACT': string;
        /** The numpad decimal (.) key. */
        'DECIMAL': string;
        /** The numpad divide (/) key. */
        'DIVIDE': string;

        /** The F1 key. */
        'F1': string;
        /** The F2 key. */
        'F2': string;
        /** The F3 key. */
        'F3': string;
        /** The F4 key. */
        'F4': string;
        /** The F5 key. */
        'F5': string;
        /** The F6 key. */
        'F6': string;
        /** The F7 key. */
        'F7': string;
        /** The F8 key. */
        'F8': string;
        /** The F9 key. */
        'F9': string;
        /** The F10 key. */
        'F10': string;
        /** The F11 key. */
        'F11': string;
        /** The F12 key. */
        'F12': string;
        /** The meta (Windows) key. */
        'META': string;
        /** The command (⌘) key. */
        'COMMAND': string;
        /** The zenkaku/hankaku key. */
        'ZENKAKU_HANKAKU': string;

        '\uE000': string;
        '\uE001': string;
        '\uE002': string;
        '\uE003': string;
        '\uE004': string;
        '\uE005': string;
        '\uE006': string;
        '\uE007': string;
        '\uE008': string;
        '\uE009': string;
        '\uE00A': string;
        '\uE00B': string;
        '\uE00C': string;

        '\uE00D': string;
        '\uE00E': string;
        '\uE00F': string;
        '\uE010': string;
        '\uE011': string;
        '\uE012': string;
        '\uE013': string;
        '\uE014': string;
        '\uE015': string;
        '\uE016': string;
        '\uE017': string;
        '\uE018': string;
        '\uE019': string;

        '\uE01A': string;
        '\uE01B': string;
        '\uE01C': string;
        '\uE01D': string;
        '\uE01E': string;
        '\uE01F': string;
        '\uE020': string;
        '\uE021': string;
        '\uE022': string;
        '\uE023': string;

        '\uE024': string;
        '\uE025': string;
        '\uE026': string;
        '\uE027': string;
        '\uE028': string;
        '\uE029': string;

        '\uE031': string;
        '\uE032': string;
        '\uE033': string;
        '\uE034': string;
        '\uE035': string;
        '\uE036': string;
        '\uE037': string;
        '\uE038': string;
        '\uE039': string;
        '\uE03A': string;
        '\uE03B': string;
        '\uE03C': string;
        '\uE03D': string;
        '\uE040': string;
    };
    export = keys;
}

declare module 'leadfoot/Server' {
    import Promise = require('dojo/promise/Promise');
    import Session = require('leadfoot/Session');

    /**
     * The Server class represents a remote HTTP server implementing the WebDriver wire protocol that can be used to
     * generate new remote control sessions.
     */
    class Server {
        /**
         * @param url
         * The fully qualified URL to the JsonWireProtocol endpoint on the server. The default endpoint for a
         * JsonWireProtocol HTTP server is http://localhost:4444/wd/hub. You may also pass a parsed URL object which will
         * be converted to a string.
         */
        constructor(url: {} | string);

        /**
         * An alternative session constructor. Defaults to the standard {@link module:leadfoot/Session} constructor if
         * one is not provided.
         */
        sessionConstructor: typeof Session;

        /**
         * Whether or not to perform capabilities testing and correction when creating a new Server.
         *
         * @default true
         */
        fixSessionCapabilities: boolean;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _get(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _post(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _delete(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * Gets the status of the remote server.
         *
         * @returns An object containing arbitrary properties describing the status of the remote
         * server.
         */
        getStatus(): Promise<{}>;

        /**
         * Creates a new remote control session on the remote server.
         *
         * @param desiredCapabilities
         * A hash map of desired capabilities of the remote environment. The server may return an environment that does
         * not match all the desired capabilities if one is not available.
         *
         * @param requiredCapabilities
         * A hash map of required capabilities of the remote environment. The server will not return an environment that
         * does not match all the required capabilities if one is not available.
         */
        createSession(desiredCapabilities: leadfoot.Capabilities, requiredCapabilities?: leadfoot.Capabilities): Promise<Session>;

        /**
         * Adds additional capabilities data on the `capabilities` key of the passed session.
         */
        protected _fillCapabilities(session: Session): Session;

        /**
         * Gets a list of all currently active remote control sessions on this server.
         *
         * @returns {Promise.<Object[]>}
         */
        getSessions(): Promise<{}[]>;

        /**
         * Gets information on the capabilities of a given session from the server. The list of capabilities returned
         * by this command will not include any of the extra session capabilities detected by Leadfoot and may be
         * inaccurate.
         *
         * @param sessionId
         */
        getSessionCapabilities(sessionId: string): Promise<leadfoot.Capabilities>;

        /**
         * Terminates a session on the server.
         *
         * @param sessionId
         */
        deleteSession(sessionId: string): Promise<void>;
    }

    export = Server;
}

declare module 'leadfoot/Session' {
    import Element = require('leadfoot/Element');
    import Promise = require('dojo/promise/Promise');
    import Server = require('leadfoot/Server');

    /**
     * A Session represents a connection to a remote environment that can be driven programmatically.
     */
    class Session {
        /**
         * @param sessionId The ID of the session, as provided by the remote.
         * @param server The server that the session belongs to.
         * @param capabilities A map of bugs and features that the remote environment exposes.
         */
        constructor(sessionId: string, server: Server, capabilities: leadfoot.Capabilities);

        /**
         * Information about the available features and bugs in the remote environment.
         *
         * @readonly
         */
        capabilities: leadfoot.Capabilities;

        /**
         * The current session ID.
         *
         * @readonly
         */
        sessionId: string;

        /**
         * The Server that the session runs on.
         *
         * @member {module:leadfoot/Server} server
         * @memberOf module:leadfoot/Session#
         * @readonly
         */
        server: Server;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _get(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _post(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
         * data.
         *
         * @param path
         * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
         * replaced by entries in the `pathParts` argument.
         *
         * @param requestData
         * The payload for the request.
         *
         * @param pathParts Optional placeholder values to inject into the path of the URL.
         */
        protected _delete(path: string, requestData: {}, pathParts?: string[]): Promise<{}>;

        /**
         * Gets the current value of a timeout for the session.
         *
         * @param type The type of timeout to retrieve. One of 'script', 'implicit', or 'page load'.
         * @returns The timeout, in milliseconds.
         */
        getTimeout(type: string): Promise<number>;

        /**
         * Sets the value of a timeout for the session.
         *
         * @param type
         * The type of timeout to set. One of 'script', 'implicit', or 'page load'.
         *
         * @param ms
         * The length of time to use for the timeout, in milliseconds. A value of 0 will cause operations to time out
         * immediately.
         */
        setTimeout(type: string, ms: number): Promise<void>;

        /**
         * Gets the identifier for the window that is currently focused.
         *
         * @returns A window handle identifier that can be used with other window handling functions.
         */
        getCurrentWindowHandle(): Promise<string>;

        /**
         * Gets a list of identifiers for all currently open windows.
         */
        getAllWindowHandles(): Promise<string[]>;

        /**
         * Gets the URL that is loaded in the focused window/frame.
         */
        getCurrentUrl(): Promise<string>;

        /**
         * Navigates the focused window/frame to a new URL.
         */
        get(url: string): Promise<void>;

        /**
         * Navigates the focused window/frame forward one page using the browser’s navigation history.
         */
        goForward(): Promise<void>;

        /**
         * Navigates the focused window/frame back one page using the browser’s navigation history.
         */
        goBack(): Promise<void>;

        /**
         * Reloads the current browser window/frame.
         */
        refresh(): Promise<void>;

        /**
         * Executes JavaScript code within the focused window/frame. The code should return a value synchronously.
         *
         * @see {@link module:leadfoot/Session#executeAsync} to execute code that returns values asynchronously.
         *
         * @param script
         * The code to execute. If a string value is passed, it will be converted to a function on the remote end.
         *
         * @param args
         * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
         * {@link module:leadfoot/Element} objects, can be specified as arguments.
         *
         * @returns
         * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
         * returned.
         */
        execute<T>(script: Function | string, args: any[]): Promise<T>;

        /**
         * Executes JavaScript code within the focused window/frame. The code must invoke the provided callback in
         * order to signal that it has completed execution.
         *
         * @see {@link module:leadfoot/Session#execute} to execute code that returns values synchronously.
         * @see {@link module:leadfoot/Session#setExecuteAsyncTimeout} to set the time until an asynchronous script is
         * considered timed out.
         *
         * @param script
         * The code to execute. If a string value is passed, it will be converted to a function on the remote end.
         *
         * @param args
         * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
         * {@link module:leadfoot/Element} objects, can be specified as arguments. In addition to these arguments, a
         * callback function will always be passed as the final argument to the script. This callback function must be
         * invoked in order to signal that execution has completed. The return value of the script, if any, should be passed
         * to this callback function.
         *
         * @returns
         * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
         * returned.
         */
        executeAsync<T>(script: Function | string, args: any[]): Promise<T>;

        /**
         * Gets a screenshot of the focused window and returns it in PNG format.
         *
         * @returns A buffer containing a PNG image.
         */
        takeScreenshot(): Promise<Buffer>;

        /**
         * Gets a list of input method editor engines available to the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        getAvailableImeEngines(): Promise<string[]>;

        /**
         * Gets the currently active input method editor for the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        getActiveImeEngine(): Promise<string>;

        /**
         * Returns whether or not an input method editor is currently active in the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        isImeActivated(): Promise<boolean>;

        /**
         * Deactivates any active input method editor in the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         */
        deactivateIme(): Promise<void>;

        /**
         * Activates an input method editor in the remote environment.
         * As of April 2014, no known remote environments support IME functions.
         *
         * @param engine The type of IME to activate.
         */
        activateIme(engine: string): Promise<void>;

        /**
         * Switches the currently focused frame to a new frame.
         *
         * @param id
         * The frame to switch to. In most environments, a number or string value corresponds to a key in the
         * `window.frames` object of the currently active frame. If `null`, the topmost (default) frame will be used.
         * If an Element is provided, it must correspond to a `<frame>` or `<iframe>` element.
         */
        switchToFrame(id: string | number | Element): Promise<void>;

        /**
         * Switches the currently focused window to a new window.
         *
         * @param name
         * The name of the window to switch to. In most environments, this value corresponds to the `window.name`
         * property of a window; however, this is not the case in mobile environments. In mobile environments, use
         * {@link module:leadfoot/Session#getAllWindowHandles} to learn what window names can be used.
         */
        switchToWindow(name: string): Promise<void>;

        /**
         * Switches the currently focused frame to the parent of the currently focused frame.
         */
        switchToParentFrame(): Promise<void>;

        /**
         * Closes the currently focused window. In most environments, after the window has been closed, it is necessary
         * to explicitly switch to whatever window is now focused.
         */
        closeCurrentWindow(): Promise<void>;

        /**
         * Sets the dimensions of a window.
         *
         * @param windowHandle
         * The name of the window to resize. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to resize the currently focused window.
         *
         * @param width
         * The new width of the window, in CSS pixels.
         *
         * @param height
         * The new height of the window, in CSS pixels.
         */
        setWindowSize(windowHandle: string, width: number, height: number): Promise<void>;
        setWindowSize(width: number, height: number): Promise<void>;

        /**
         * Gets the dimensions of a window.
         *
         * @param windowHandle
         * The name of the window to query. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to query the currently focused window.
         *
         * @returns
         * An object describing the width and height of the window, in CSS pixels.
         */
        getWindowSize(windowHandle?: string): Promise<{ width: number; height: number; }>;

        /**
         * Sets the position of a window.
         *
         * @param windowHandle
         * The name of the window to move. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to move the currently focused window.
         *
         * @param x
         * The screen x-coordinate to move to, in CSS pixels, relative to the left edge of the primary monitor.
         *
         * @param y
         * The screen y-coordinate to move to, in CSS pixels, relative to the top edge of the primary monitor.
         */
        setWindowPosition(windowHandle: string, x: number, y: number): Promise<void>;
        setWindowPosition(x: number, y: number): Promise<void>;

        /**
         * Gets the position of a window.
         *
         * @param windowHandle
         * The name of the window to query. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to query the currently focused window.
         *
         * @returns
         * An object describing the position of the window, in CSS pixels, relative to the top-left corner of the
         * primary monitor. If a secondary monitor exists above or to the left of the primary monitor, these values
         * will be negative.
         */
        getWindowPosition(windowHandle?: string): Promise<{ x: number; y: number; }>;

        /**
         * Maximises a window according to the platform’s window system behaviour.
         *
         * @param windowHandle
         * The name of the window to resize. See {@link module:leadfoot/Session#switchToWindow} to learn about valid
         * window names. Omit this argument to resize the currently focused window.
         */
        maximizeWindow(windowHandle?: string): Promise<void>;

        /**
         * Gets all cookies set on the current page.
         */
        getCookies(): Promise<leadfoot.WebDriverCookie[]>;

        /**
         * Sets a cookie on the current page.
         *
         * @param cookie
         */
        setCookie(cookie: leadfoot.WebDriverCookie): Promise<void>;

        /**
         * Clears all cookies for the current page.
         */
        clearCookies(): Promise<void>;

        /**
         * Deletes a cookie on the current page.
         *
         * @param name The name of the cookie to delete.
         */
        deleteCookie(name: string): Promise<void>;

        /**
         * Gets the HTML loaded in the focused window/frame. This markup is serialised by the remote environment so
         * may not exactly match the HTML provided by the Web server.
         */
        getPageSource(): Promise<string>;

        /**
         * Gets the title of the focused window/frame.
         */
        getPageTitle(): Promise<string>;

        /**
         * Gets the first element from the focused window/frame that matches the given query.
         *
         * @see {@link module:leadfoot/Session#setFindTimeout} to set the amount of time it the remote environment
         * should spend waiting for an element that does not exist at the time of the `find` call before timing
         * out.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        find(using: string, value: string): Promise<Element>;

        /**
         * Gets all elements from the focused window/frame that match the given query.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        findAll(using: string, value: string): Promise<Element[]>;

        /**
         * Gets the currently focused element from the focused window/frame.
         */
        getActiveElement(): Promise<Element>;

        /**
         * Types into the focused window/frame/element.
         *
         * @param keys
         * The text to type in the remote environment. It is possible to type keys that do not have normal character
         * representations (modifier keys, function keys, etc.) as well as keys that have two different representations
         * on a typical US-ASCII keyboard (numpad keys); use the values from {@link module:leadfoot/keys} to type these
         * special characters. Any modifier keys that are activated by this call will persist until they are
         * deactivated. To deactivate a modifier key, type the same modifier key a second time, or send `\uE000`
         * ('NULL') to deactivate all currently active modifier keys.
         */
        pressKeys(keys: string | string[]): Promise<void>;

        /**
         * Gets the current screen orientation.
         *
         * @returns Either 'portrait' or 'landscape'.
         */
        getOrientation(): Promise<string>;

        /**
         * Sets the screen orientation.
         *
         * @param orientation Either 'portrait' or 'landscape'.
         */
        setOrientation(orientation: string): Promise<void>;

        /**
         * Gets the text displayed in the currently active alert pop-up.
         */
        getAlertText(): Promise<string>;

        /**
         * Types into the currently active prompt pop-up.
         *
         * @param text The text to type into the pop-up’s input box.
         */
        typeInPrompt(text: string | string[]): Promise<void>;

        /**
         * Accepts an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button.
         */
        acceptAlert(): Promise<void>;

        /**
         * Dismisses an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button of an alert pop-up
         * or the 'Cancel' button of a prompt or confirmation pop-up.
         */
        dismissAlert(): Promise<void>;

        /**
         * Moves the remote environment’s mouse cursor to the specified element or relative position. If the element is
         * outside of the viewport, the remote driver will attempt to scroll it into view automatically.
         *
         * @param element
         * The element to move the mouse to. If x-offset and y-offset are not specified, the mouse will be moved to the
         * centre of the element.
         *
         * @param xOffset
         * The x-offset of the cursor, maybe in CSS pixels, relative to the left edge of the specified element’s
         * bounding client rectangle. If no element is specified, the offset is relative to the previous position of the
         * mouse, or to the left edge of the page’s root element if the mouse was never moved before.
         *
         * @param yOffset
         * The y-offset of the cursor, maybe in CSS pixels, relative to the top edge of the specified element’s bounding
         * client rectangle. If no element is specified, the offset is relative to the previous position of the mouse,
         * or to the top edge of the page’s root element if the mouse was never moved before.
         */
        moveMouseTo(element: Element, xOffset?: number, yOffset?: number): Promise<void>;
        moveMouseTo(xOffset: number, yOffset: number): Promise<void>;

        /**
         * Clicks a mouse button at the point where the mouse cursor is currently positioned. This method may fail to
         * execute with an error if the mouse has not been moved anywhere since the page was loaded.
         *
         * @param button
         * The button to click. 0 corresponds to the primary mouse button, 1 to the middle mouse button, 2 to the
         * secondary mouse button. Numbers above 2 correspond to any additional buttons a mouse might provide.
         */
        clickMouseButton(button?: number): Promise<void>;

        /**
         * Depresses a mouse button without releasing it.
         *
         * @param button The button to press. See {@link module:leadfoot/Session#click} for available options.
         */
        pressMouseButton(button?: number): Promise<void>;

        /**
         * Releases a previously depressed mouse button.
         *
         * @param button The button to press. See {@link module:leadfoot/Session#click} for available options.
         */
        releaseMouseButton(button?: number): Promise<void>;

        /**
         * Double-clicks the primary mouse button.
         */
        doubleClick(): Promise<void>;

        /**
         * Taps an element on a touch screen device. If the element is outside of the viewport, the remote driver will
         * attempt to scroll it into view automatically.
         *
         * @param element The element to tap.
         */
        tap(element: Element): Promise<void>;

        /**
         * Depresses a new finger at the given point on a touch screen device without releasing it.
         *
         * @param x The screen x-coordinate to press, maybe in device pixels.
         * @param y The screen y-coordinate to press, maybe in device pixels.
         */
        pressFinger(x: number, y: number): Promise<void>;

        /**
         * Releases whatever finger exists at the given point on a touch screen device.
         *
         * @param x The screen x-coordinate where a finger is pressed, maybe in device pixels.
         * @param y The screen y-coordinate where a finger is pressed, maybe in device pixels.
         */
        releaseFinger(x: number, y: number): Promise<void>;

        /**
         * Moves the last depressed finger to a new point on the touch screen.
         *
         * @param x The screen x-coordinate to move to, maybe in device pixels.
         * @param y The screen y-coordinate to move to, maybe in device pixels.
         */
        moveFinger(x: number, y: number): Promise<void>;

        /**
         * Scrolls the currently focused window on a touch screen device.
         *
         * @param element
         * An element to scroll to. The window will be scrolled so the element is as close to the top-left corner of the
         * window as possible.
         *
         * @param xOffset
         * An optional x-offset, relative to the left edge of the element, in CSS pixels. If no element is specified,
         * the offset is relative to the previous scroll position of the window.
         *
         * @param yOffset
         * An optional y-offset, relative to the top edge of the element, in CSS pixels. If no element is specified,
         * the offset is relative to the previous scroll position of the window.
         */
        touchScroll(element: Element, xOffset: number, yOffset: number): Promise<void>;
        touchScroll(xOffset: number, yOffset: number): Promise<void>;

        /**
         * Performs a double-tap gesture on an element.
         *
         * @param element The element to double-tap.
         */
        doubleTap(element: Element): Promise<void>;

        /**
         * Performs a long-tap gesture on an element.
         *
         * @param element The element to long-tap.
         */
        longTap(element: Element): Promise<void>;

        /**
         * Flicks a finger. Note that this method is currently badly specified and highly dysfunctional and is only
         * provided for the sake of completeness.
         *
         * @param element The element where the flick should start.
         * @param xOffset The x-offset in pixels to flick by.
         * @param yOffset The x-offset in pixels to flick by.
         * @param speed The speed of the flick, in pixels per *second*. Most human flicks are 100–200ms, so
         * this value will be higher than expected.
         */
        flickFinger(element: Element, xOffset: number, yOffset: number, speed: number): Promise<void>;

        /**
         * Gets the current geographical location of the remote environment.
         *
         * @returns
         * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
         * as meters above the WGS84 ellipsoid. Not all environments support altitude.
         */
        getGeolocation(): Promise<leadfoot.Geolocation>;

        /**
         * Sets the geographical location of the remote environment.
         *
         * @param location
         * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
         * as meters above the WGS84 ellipsoid. Not all environments support altitude.
         */
        setGeolocation(location: leadfoot.Geolocation): Promise<void>;

        /**
         * Gets all logs from the remote environment of the given type. The logs in the remote environment are cleared
         * once they have been retrieved.
         *
         * @param type
         * The type of log entries to retrieve. Available log types differ between remote environments. Use
         * {@link module:leadfoot/Session#getAvailableLogTypes} to learn what log types are currently available. Not all
         * environments support all possible log types.
         *
         * @returns
         * An array of log entry objects. Timestamps in log entries are Unix timestamps, in seconds.
         */
        getLogsFor(type: string): Promise<leadfoot.LogEntry[]>;

        /**
         * Gets the types of logs that are currently available for retrieval from the remote environment.
         */
        getAvailableLogTypes(): Promise<string[]>;

        /**
         * Gets the current state of the HTML5 application cache for the current page.
         *
         * @returns
         * The cache status. One of 0 (uncached), 1 (cached/idle), 2 (checking), 3 (downloading), 4 (update ready), 5
         * (obsolete).
         */
        getApplicationCacheStatus(): Promise<number>;

        /**
         * Terminates the session. No more commands will be accepted by the remote after this point.
         */
        quit(): Promise<void>;

        /**
         * Gets the list of keys set in local storage for the focused window/frame.
         */
        getLocalStorageKeys(): Promise<string[]>;

        /**
         * Sets a value in local storage for the focused window/frame.
         *
         * @param key The key to set.
         * @param value The value to set.
         */
        setLocalStorageItem(key: string, value: string): Promise<void>;

        /**
         * Clears all data in local storage for the focused window/frame.
         */
        clearLocalStorage(): Promise<void>;

        /**
         * Gets a value from local storage for the focused window/frame.
         *
         * @param key The key of the data to get.
         */
        getLocalStorageItem(key: string): Promise<string>;

        /**
         * Deletes a value from local storage for the focused window/frame.
         *
         * @param key The key of the data to delete.
         */
        deleteLocalStorageItem(key: string): Promise<void>;

        /**
         * Gets the number of keys set in local storage for the focused window/frame.
         */
        getLocalStorageLength(): Promise<number>;

        /**
         * Gets the list of keys set in session storage for the focused window/frame.
         */
        getSessionStorageKeys(): Promise<string[]>;

        /**
         * Sets a value in session storage for the focused window/frame.
         *
         * @param key The key to set.
         * @param value The value to set.
         */
        setSessionStorageItem(key: string, value: string): Promise<void>;

        /**
         * Clears all data in session storage for the focused window/frame.
         */
        clearSessionStorage(): Promise<void>;

        /**
         * Gets a value from session storage for the focused window/frame.
         *
         * @param key The key of the data to get.
         */
        getSessionStorageItem(key: string): Promise<string>;

        /**
         * Deletes a value from session storage for the focused window/frame.
         *
         * @param key The key of the data to delete.
         */
        deleteSessionStorageItem(key: string): Promise<void>;

        /**
         * Gets the number of keys set in session storage for the focused window/frame.
         */
        getSessionStorageLength(): Promise<number>;

        /**
         * Gets the first element in the currently active window/frame matching the given CSS class name.
         *
         * @param className The CSS class name to search for.
         */
        findByClassName(className: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame matching the given CSS selector.
         *
         * @param selector The CSS selector to search for.
         */
        findByCssSelector(selector: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame matching the given ID.
         *
         * @param id The ID of the element.
         */
        findById(id: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame matching the given name attribute.
         *
         * @param name The name of the element.
         */
        findByName(name: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame matching the given case-insensitive link text.
         *
         * @param text The link text of the element.
         */
        findByLinkText(text: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame partially matching the given case-insensitive link text.
         *
         * @param text The partial link text of the element.
         */
        findByPartialLinkText(text: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame matching the given HTML tag name.
         *
         * @param tagName The tag name of the element.
         */
        findByTagName(tagName: string): Promise<Element>;

        /**
         * Gets the first element in the currently active window/frame matching the given XPath selector.
         *
         * @param path The XPath selector to search for.
         */
        findByXpath(path: string): Promise<Element>;

        /**
         * Gets all elements in the currently active window/frame matching the given CSS class name.
         *
         * @param className The CSS class name to search for.
         */
        findAllByClassName(className: string): Promise<Element[]>;

        /**
         * Gets all elements in the currently active window/frame matching the given CSS selector.
         *
         * @param selector The CSS selector to search for.
         */
        findAllByCssSelector(selector: string): Promise<Element[]>;

        /**
         * Gets all elements in the currently active window/frame matching the given name attribute.
         *
         * @param name The name of the element.
         */
        findAllByName(name: string): Promise<Element[]>;

        /**
         * Gets all elements in the currently active window/frame matching the given case-insensitive link text.
         *
         * @param text The link text of the element.
         */
        findAllByLinkText(text: string): Promise<Element[]>;

        /**
         * Gets all elements in the currently active window/frame partially matching the given case-insensitive link text.
         *
         * @param text The partial link text of the element.
         */
        findAllByPartialLinkText(text: string): Promise<Element[]>;

        /**
         * Gets all elements in the currently active window/frame matching the given HTML tag name.
         *
         * @param tagName The tag name of the element.
         */
        findAllByTagName(tagName: string): Promise<Element[]>;

        /**
         * Gets all elements in the currently active window/frame matching the given XPath selector.
         *
         * @param path The XPath selector to search for.
         */
        findAllByXpath(path: string): Promise<Element[]>;

        /**
         * Waits for all elements in the currently active window/frame that match the given query to be destroyed.
         *
         * @param using
         * The element retrieval strategy to use. See {@link module:leadfoot/Session#find} for options.
         *
         * @param value
         * The strategy-specific value to search for. See {@link module:leadfoot/Session#find} for details.
         */
        waitForDeleted(using: string, value: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given CSS class name to be destroyed.
         *
         * @param className The CSS class name to search for.
         */
        waitForDeletedByClassName(className: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given CSS selector to be destroyed.
         *
         * @param selector The CSS selector to search for.
         */
        waitForDeletedByCssSelector(className: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given ID to be destroyed.
         *
         * @param id The ID of the element.
         */
        waitForDeletedById(id: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given name attribute to be destroyed.
         *
         * @param name The name of the element.
         */
        waitForDeletedByName(name: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given case-insensitive link text to be destroyed.
         *
         * @param text The link text of the element.
         */
        waitForDeletedByLinkText(text: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame partially matching the given case-insensitive link text to be
         * destroyed.
         *
         * @param text The partial link text of the element.
         */
        waitForDeletedByPartialLinkText(text: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given HTML tag name to be destroyed.
         *
         * @param tagName The tag name of the element.
         */
        waitForDeletedByTagName(tagName: string): Promise<void>;

        /**
         * Waits for all elements in the currently active window/frame matching the given XPath selector to be destroyed.
         *
         * @param path The XPath selector to search for.
         */
        waitForDeletedByXpath(path: string): Promise<void>;

        /**
         * Gets the timeout for {@link module:leadfoot/Session#executeAsync} calls.
         */
        getExecuteAsyncTimeout(): Promise<number>;

        /**
         * Sets the timeout for {@link module:leadfoot/Session#executeAsync} calls.
         *
         * @param ms The length of the timeout, in milliseconds.
         */
        setExecuteAsyncTimeout(ms: number): Promise<number>;

        /**
         * Gets the timeout for {@link module:leadfoot/Session#find} calls.
         */
        getFindTimeout(): Promise<number>;

        /**
         * Sets the timeout for {@link module:leadfoot/Session#find} calls.
         *
         * @param ms The length of the timeout, in milliseconds.
         */
        setFindTimeout(ms: number): Promise<void>;

        /**
         * Gets the timeout for {@link module:leadfoot/Session#get} calls.
         */
        getPageLoadTimeout(): Promise<number>;

        /**
         * Sets the timeout for {@link module:leadfoot/Session#get} calls.
         *
         * @param ms The length of the timeout, in milliseconds.
         */
        setPageLoadTimeout(ms: number): Promise<void>;
    }

    export = Session;
}
