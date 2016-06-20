// Type definitions for Angular Protractor 1.5.0
// Project: https://github.com/angular/protractor
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="selenium-webdriver" />

declare namespace protractor {
    //region Wrapped webdriver Items

    class ActionSequence extends webdriver.ActionSequence {}
    class Builder extends webdriver.Builder {}
    class Capabilities extends webdriver.Capabilities {}
    class Command extends webdriver.Command {}
    class EventEmitter extends webdriver.EventEmitter {}
    class Session extends webdriver.Session {}
    class WebDriver extends webdriver.WebDriver {}
    class WebElement extends webdriver.WebElement {}
    class WebElementPromise extends webdriver.WebElementPromise { }

    var Browser: webdriver.IBrowser;
    var Button: webdriver.IButton;
    var Capability: webdriver.ICapability;
    var CommandName: webdriver.ICommandName;
    var Key: webdriver.IKey;

    namespace error {
        class Error extends webdriver.error.Error {}
        var ErrorCode: webdriver.error.IErrorCode;
    }

    namespace logging {
        class Preferences extends webdriver.logging.Preferences { }
        class Entry extends webdriver.logging.Entry { }

        var Type: webdriver.logging.IType;
        var Level: webdriver.logging.ILevelValues;

        function getLevel(nameOrValue: string): webdriver.logging.ILevel;
        function getLevel(nameOrValue: number): webdriver.logging.ILevel;
    }

    namespace promise {
        class Thenable<T> extends webdriver.promise.Thenable<T> { }
        class Promise<T> extends webdriver.promise.Promise<T> { }
        class Deferred<T> extends webdriver.promise.Deferred<T> { }
        class ControlFlow extends webdriver.promise.ControlFlow { }
        class CancellationError extends webdriver.promise.CancellationError { }

        /**
         * Given an array of promises, will return a promise that will be fulfilled
         * with the fulfillment values of the input array's values. If any of the
         * input array's promises are rejected, the returned promise will be rejected
         * with the same reason.
         *
         * @param {!Array.<(T|!webdriver.promise.Promise.<T>)>} arr An array of
         *     promises to wait on.
         * @return {!webdriver.promise.Promise.<!Array.<T>>} A promise that is
         *     fulfilled with an array containing the fulfilled values of the
         *     input array, or rejected with the same reason as the first
         *     rejected value.
         * @template T
         */
        function all(arr: webdriver.promise.Promise<any>[]): webdriver.promise.Promise<any[]>;

        /**
         * Invokes the appropriate callback function as soon as a promised
         * {@code value} is resolved. This function is similar to
         * {@link webdriver.promise.when}, except it does not return a new promise.
         * @param {*} value The value to observe.
         * @param {Function} callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         */
        function asap(value: any, callback: Function, opt_errback?: Function): void;

        /**
         * @return {!webdriver.promise.ControlFlow} The currently active control flow.
         */
        function controlFlow(): webdriver.promise.ControlFlow;

        /**
         * Creates a new control flow. The provided callback will be invoked as the
         * first task within the new flow, with the flow as its sole argument. Returns
         * a promise that resolves to the callback result.
         * @param {function(!webdriver.promise.ControlFlow)} callback The entry point
         *     to the newly created flow.
         * @return {!webdriver.promise.Promise} A promise that resolves to the callback
         *     result.
         */
        function createFlow<R>(callback: (flow: webdriver.promise.ControlFlow) => R): webdriver.promise.Promise<R>;

        /**
         * Determines whether a {@code value} should be treated as a promise.
         * Any object whose "then" property is a function will be considered a promise.
         *
         * @param {*} value The value to test.
         * @return {boolean} Whether the value is a promise.
         */
        function isPromise(value: any): boolean;

        /**
         * Tests is a function is a generator.
         * @param {!Function} fn The function to test.
         * @return {boolean} Whether the function is a generator.
         */
        function isGenerator(fn: Function): boolean;

        /**
         * Creates a promise that will be resolved at a set time in the future.
         * @param {number} ms The amount of time, in milliseconds, to wait before
         *     resolving the promise.
         * @return {!webdriver.promise.Promise} The promise.
         */
        function delayed(ms: number): webdriver.promise.Promise<void>;

        /**
         * Calls a function for each element in an array, and if the function returns
         * true adds the element to a new array.
         *
         * <p>If the return value of the filter function is a promise, this function
         * will wait for it to be fulfilled before determining whether to insert the
         * element into the new array.
         *
         * <p>If the filter function throws or returns a rejected promise, the promise
         * returned by this function will be rejected with the same reason. Only the
         * first failure will be reported; all subsequent errors will be silently
         * ignored.
         *
         * @param {!(Array.<TYPE>|webdriver.promise.Promise.<!Array.<TYPE>>)} arr The
         *     array to iterator over, or a promise that will resolve to said array.
         * @param {function(this: SELF, TYPE, number, !Array.<TYPE>): (
         *             boolean|webdriver.promise.Promise.<boolean>)} fn The function
         *     to call for each element in the array.
         * @param {SELF=} opt_self The object to be used as the value of 'this' within
         *     {@code fn}.
         * @template TYPE, SELF
         */
        function filter<T>(arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any): webdriver.promise.Promise<T[]>;
        function filter<T>(arr: webdriver.promise.Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any): webdriver.promise.Promise<T[]>

        /**
         * Creates a new deferred object.
         * @return {!webdriver.promise.Deferred} The new deferred object.
         */
        function defer<T>(): webdriver.promise.Deferred<T>;

        /**
         * Creates a promise that has been resolved with the given value.
         * @param {*=} opt_value The resolved value.
         * @return {!webdriver.promise.Promise} The resolved promise.
         */
        function fulfilled<T>(opt_value?: T): webdriver.promise.Promise<T>;

        /**
         * Calls a function for each element in an array and inserts the result into a
         * new array, which is used as the fulfillment value of the promise returned
         * by this function.
         *
         * <p>If the return value of the mapping function is a promise, this function
         * will wait for it to be fulfilled before inserting it into the new array.
         *
         * <p>If the mapping function throws or returns a rejected promise, the
         * promise returned by this function will be rejected with the same reason.
         * Only the first failure will be reported; all subsequent errors will be
         * silently ignored.
         *
         * @param {!(Array.<TYPE>|webdriver.promise.Promise.<!Array.<TYPE>>)} arr The
         *     array to iterator over, or a promise that will resolve to said array.
         * @param {function(this: SELF, TYPE, number, !Array.<TYPE>): ?} fn The
         *     function to call for each element in the array. This function should
         *     expect three arguments (the element, the index, and the array itself.
         * @param {SELF=} opt_self The object to be used as the value of 'this' within
         *     {@code fn}.
         * @template TYPE, SELF
         */
        function map<T>(arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any): webdriver.promise.Promise<T[]>
        function map<T>(arr: webdriver.promise.Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any): webdriver.promise.Promise<T[]>

        /**
         * Creates a promise that has been rejected with the given reason.
         * @param {*=} opt_reason The rejection reason; may be any value, but is
         *     usually an Error or a string.
         * @return {!webdriver.promise.Promise} The rejected promise.
         */
        function rejected(opt_reason?: any): webdriver.promise.Promise<void>;

        /**
         * Wraps a function that is assumed to be a node-style callback as its final
         * argument. This callback takes two arguments: an error value (which will be
         * null if the call succeeded), and the success value as the second argument.
         * If the call fails, the returned promise will be rejected, otherwise it will
         * be resolved with the result.
         * @param {!Function} fn The function to wrap.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     result of the provided function's callback.
         */
        function checkedNodeCall<T>(fn: Function, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Consumes a {@code GeneratorFunction}. Each time the generator yields a
         * promise, this function will wait for it to be fulfilled before feeding the
         * fulfilled value back into {@code next}. Likewise, if a yielded promise is
         * rejected, the rejection error will be passed to {@code throw}.
         *
         * <p>Example 1: the Fibonacci Sequence.
         * <pre><code>
         * webdriver.promise.consume(function* fibonacci() {
         *   var n1 = 1, n2 = 1;
         *   for (var i = 0; i < 4; ++i) {
         *     var tmp = yield n1 + n2;
         *     n1 = n2;
         *     n2 = tmp;
         *   }
         *   return n1 + n2;
         * }).then(function(result) {
         *   console.log(result);  // 13
         * });
         * </code></pre>
         *
         * <p>Example 2: a generator that throws.
         * <pre><code>
         * webdriver.promise.consume(function* () {
         *   yield webdriver.promise.delayed(250).then(function() {
         *     throw Error('boom');
         *   });
         * }).thenCatch(function(e) {
         *   console.log(e.toString());  // Error: boom
         * });
         * </code></pre>
         *
         * @param {!Function} generatorFn The generator function to execute.
         * @param {Object=} opt_self The object to use as "this" when invoking the
         *     initial generator.
         * @param {...*} var_args Any arguments to pass to the initial generator.
         * @return {!webdriver.promise.Promise.<?>} A promise that will resolve to the
         *     generator's final result.
         * @throws {TypeError} If the given function is not a generator.
         */
        function consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Registers an observer on a promised {@code value}, returning a new promise
         * that will be resolved when the value is. If {@code value} is not a promise,
         * then the return promise will be immediately resolved.
         * @param {*} value The value to observe.
         * @param {Function=} opt_callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         * @return {!webdriver.promise.Promise} A new promise.
         */
        function when<T, R>(value: T, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;
        function when<T, R>(value: webdriver.promise.Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;

        /**
         * Returns a promise that will be resolved with the input value in a
         * fully-resolved state. If the value is an array, each element will be fully
         * resolved. Likewise, if the value is an object, all keys will be fully
         * resolved. In both cases, all nested arrays and objects will also be
         * fully resolved.  All fields are resolved in place; the returned promise will
         * resolve on {@code value} and not a copy.
         *
         * Warning: This function makes no checks against objects that contain
         * cyclical references:
         *
         *   var value = {};
         *   value['self'] = value;
         *   webdriver.promise.fullyResolved(value);  // Stack overflow.
         *
         * @param {*} value The value to fully resolve.
         * @return {!webdriver.promise.Promise} A promise for a fully resolved version
         *     of the input value.
         */
        function fullyResolved<T>(value: any): webdriver.promise.Promise<T>;

        /**
         * Changes the default flow to use when no others are active.
         * @param {!webdriver.promise.ControlFlow} flow The new default flow.
         * @throws {Error} If the default flow is not currently active.
         */
        function setDefaultFlow(flow: webdriver.promise.ControlFlow): void;
    }

    namespace stacktrace {
        class Frame extends webdriver.stacktrace.Frame { }
        class Snapshot extends webdriver.stacktrace.Snapshot { }

        /**
         * Formats an error's stack trace.
         * @param {!(Error|goog.testing.JsUnitException)} error The error to format.
         * @return {!(Error|goog.testing.JsUnitException)} The formatted error.
         */
        function format(error: any): any;

        /**
         * Gets the native stack trace if available otherwise follows the call chain.
         * The generated trace will exclude all frames up to and including the call to
         * this function.
         * @return {!Array.<!webdriver.stacktrace.Frame>} The frames of the stack trace.
         */
        function get(): webdriver.stacktrace.Frame[];

        /**
         * Whether the current browser supports stack traces.
         *
         * @type {boolean}
         * @const
         */
        var BROWSER_SUPPORTED: boolean;
    }

    namespace until {
        class Condition<T> extends webdriver.until.Condition<T> { }

        /**
         * Creates a condition that will wait until the input driver is able to switch
         * to the designated frame. The target frame may be specified as:
         * <ol>
         *   <li>A numeric index into {@code window.frames} for the currently selected
         *       frame.
         *   <li>A {@link webdriver.WebElement}, which must reference a FRAME or IFRAME
         *       element on the current page.
         *   <li>A locator which may be used to first locate a FRAME or IFRAME on the
         *       current page before attempting to switch to it.
         * </ol>
         *
         * <p>Upon successful resolution of this condition, the driver will be left
         * focused on the new frame.
         *
         * @param {!(number|webdriver.WebElement|
         *           webdriver.Locator|webdriver.By.Hash|
         *           function(!webdriver.WebDriver): !webdriver.WebElement)} frame
         *     The frame identifier.
         * @return {!until.Condition.<boolean>} A new condition.
         */
        function ableToSwitchToFrame(frame: number): webdriver.until.Condition<boolean>;
        function ableToSwitchToFrame(frame: webdriver.IWebElement): webdriver.until.Condition<boolean>;
        function ableToSwitchToFrame(frame: webdriver.Locator): webdriver.until.Condition<boolean>;
        function ableToSwitchToFrame(frame: (webdriver: webdriver.WebDriver) => webdriver.IWebElement): webdriver.until.Condition<boolean>;
        function ableToSwitchToFrame(frame: any): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that waits for an alert to be opened. Upon success, the
         * returned promise will be fulfilled with the handle for the opened alert.
         *
         * @return {!until.Condition.<!webdriver.Alert>} The new condition.
         */
        function alertIsPresent(): webdriver.until.Condition<webdriver.Alert>;

        /**
         * Creates a condition that will wait for the given element to be disabled.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isEnabled
         */
        function elementIsDisabled(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be enabled.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isEnabled
         */
        function elementIsEnabled(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be deselected.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isSelected
         */
        function elementIsNotSelected(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be in the DOM,
         * yet not visible to the user.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isDisplayed
         */
        function elementIsNotVisible(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be selected.
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isSelected
         */
        function elementIsSelected(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to become visible.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isDisplayed
         */
        function elementIsVisible(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will loop until an element is
         * {@link webdriver.WebDriver#findElement found} with the given locator.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The locator
         *     to use.
         * @return {!until.Condition.<!webdriver.WebElement>} The new condition.
         */
        function elementLocated(locator: webdriver.Locator): webdriver.until.Condition<webdriver.IWebElement>;
        function elementLocated(locator: any): webdriver.until.Condition<webdriver.IWebElement>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to contain the given
         * substring.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {string} substr The substring to search for.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextContains(element: webdriver.IWebElement, substr: string): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to match the given
         * {@code text} exactly.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {string} text The expected text.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextIs(element: webdriver.IWebElement, text: string): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to match a regular
         * expression.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {!RegExp} regex The regular expression to test against.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextMatches(element: webdriver.IWebElement, regex: RegExp): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will loop until at least one element is
         * {@link webdriver.WebDriver#findElement found} with the given locator.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The locator
         *     to use.
         * @return {!until.Condition.<!Array.<!webdriver.WebElement>>} The new
         *     condition.
         */
        function elementsLocated(locator: webdriver.Locator): webdriver.until.Condition<webdriver.IWebElement[]>;
        function elementsLocated(locator: any): webdriver.until.Condition<webdriver.IWebElement[]>;

        /**
         * Creates a condition that will wait for the given element to become stale. An
         * element is considered stale once it is removed from the DOM, or a new page
         * has loaded.
         *
         * @param {!webdriver.WebElement} element The element that should become stale.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function stalenessOf(element: webdriver.IWebElement): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to contain
         * the given substring.
         *
         * @param {string} substr The substring that should be present in the page
         *     title.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleContains(substr: string): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to match the
         * given value.
         *
         * @param {string} title The expected page title.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleIs(title: string): webdriver.until.Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to match the
         * given regular expression.
         *
         * @param {!RegExp} regex The regular expression to test against.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleMatches(regex: RegExp): webdriver.until.Condition<boolean>;
    }

    namespace ExpectedConditions {
        /**
         * Negates the result of a promise.
         *
         * @param {webdriver.until.Condition<boolean>} expectedCondition
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns the negated value.
         */
        function not<T>(expectedCondition: webdriver.until.Condition<T>): webdriver.until.Condition<T>;

        /**
         * Chain a number of expected conditions using logical_and, short circuiting at the
         * first expected condition that evaluates to false.
         *
         * @param {...webdriver.until.Condition<boolean>[]} fns An array of expected conditions to 'and' together.
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise which evaluates
         * to the result of the logical and.
         */
        function and<T>(...fns: webdriver.until.Condition<T>[]): webdriver.until.Condition<T>;

        /**
         * Chain a number of expected conditions using logical_or, short circuiting at the
         * first expected condition that evaluates to true.
         *
         * @param {...webdriver.until.Condition<boolean>[]} fns An array of expected conditions to 'or' together.
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise which
         * evaluates to the result of the logical or.
         */
        function or<T>(...fns: webdriver.until.Condition<T>[]): webdriver.until.Condition<T>;

        /**
         * Expect an alert to be present.
         *
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether an alert is present.
         */
        function alertIsPresent<T>(): webdriver.until.Condition<T>;

        /**
         * An Expectation for checking an element is visible and enabled such that you can click it.
         *
         * @param {ElementFinder} element The element to check
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the element is clickable.
         */
        function elementToBeClickable<T>(element: ElementFinder): webdriver.until.Condition<T>;

        /**
         * An expectation for checking if the given text is present in the element.
         * Returns false if the elementFinder does not find an element.
         *
         * @param {ElementFinder} element The element to check
         * @param {string} text The text to verify against
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the text is present in the element.
         */
        function textToBePresentInElement<T>(element: ElementFinder, text: string): webdriver.until.Condition<T>;

        /**
         * An expectation for checking if the given text is present in the element’s value.
         * Returns false if the elementFinder does not find an element.
         *
         * @param {ElementFinder} element The element to check
         * @param {string} text The text to verify against
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the text is present in the element's value.
         */
        function textToBePresentInElementValue<T>(
          element: ElementFinder, text: string
        ): webdriver.until.Condition<T>;

        /**
         * An expectation for checking that the title contains a case-sensitive substring.
         *
         * @param {string} title The fragment of title expected
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the title contains the string.
         */
        function titleContains<T>(title: string): webdriver.until.Condition<T>;

        /**
         * An expectation for checking the title of a page.
         *
         * @param {string} title The expected title, which must be an exact match.
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the title equals the string.
         */
        function titleIs<T>(title: string): webdriver.until.Condition<T>;

        /**
         * An expectation for checking that an element is present on the DOM of a page. This does not necessarily
         * mean that the element is visible. This is the opposite of 'stalenessOf'.
         *
         * @param {ElementFinder} elementFinder The element to check
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise
         * representing whether the element is present.
         */
        function presenceOf<T>(element: ElementFinder): webdriver.until.Condition<T>;

        /**
         * An expectation for checking that an element is not attached to the DOM of a page.
         * This is the opposite of 'presenceOf'.
         *
         * @param {ElementFinder} elementFinder The element to check
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the element is stale.
         */
        function stalenessOf<T>(element: ElementFinder): webdriver.until.Condition<T>;

        /**
         * An expectation for checking that an element is present on the DOM of a page and visible.
         * Visibility means that the element is not only displayed but also has a height and width that is
         * greater than 0. This is the opposite of 'invisibilityOf'.
         *
         * @param {ElementFinder} elementFinder The element to check
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the element is visible.
         */
        function visibilityOf<T>(element: ElementFinder): webdriver.until.Condition<T>;

        /**
         * An expectation for checking that an element is present on the DOM of a page. This does not necessarily
         * mean that the element is visible. This is the opposite of 'stalenessOf'.
         *
         * @param {ElementFinder} elementFinder The element to check
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the element is invisible.
         */
        function invisibilityOf<T>(element: ElementFinder): webdriver.until.Condition<T>;

        /**
         * An expectation for checking the selection is selected.
         *
         * @param {ElementFinder} elementFinder The element to check
         * @return {!webdriver.until.Condition<boolean>} An expected condition that returns a promise representing
         * whether the element is selected.
         */
        function elementToBeSelected<T>(element: ElementFinder): webdriver.until.Condition<T>;
    }

    //endregion

    /**
    * Use as: element(locator)
    *
    * The ElementFinder can be treated as a WebElement for most purposes, in
    * particular, you may perform actions (i.e. click, getText) on them as you
    * would a WebElement. ElementFinders extend Promise, and once an action
    * is performed on an ElementFinder, the latest result from the chain can be
    * accessed using then. Unlike a WebElement, an ElementFinder will wait for
    * angular to settle before performing finds or actions.
    *
    * ElementFinder can be used to build a chain of locators that is used to find
    * an element. An ElementFinder does not actually attempt to find the element
    * until an action is called, which means they can be set up in helper files
    * before the page is available.
    *
    * @param {webdriver.Locator} locator An element locator.
    * @return {ElementFinder}
    */
    interface Element {
        (locator: webdriver.Locator): ElementFinder;

         /**
          * ElementArrayFinder is used for operations on an array of elements (as opposed
          * to a single element).
          *
          * @param {webdriver.Locator} locator An element locator.
          * @return {ElementArrayFinder}
          */
        all(locator: webdriver.Locator): ElementArrayFinder;
    }

    interface ElementFinder extends webdriver.IWebElement, webdriver.promise.IThenable<any> {
        /**
        * Calls to element may be chained to find elements within a parent.
        *
        * @alias element(locator).element(locator)
        * @view
        * <div class="parent">
        *   <div class="child">
        *     Child text
        *     <div>{{person.phone}}</div>
        *   </div>
        * </div>
        *
        * @example
        * // Chain 2 element calls.
        * var child = element(by.css('.parent')).
        *     element(by.css('.child'));
        * expect(child.getText()).toBe('Child text\n555-123-4567');
        *
        * // Chain 3 element calls.
        * var triple = element(by.css('.parent')).
        *     element(by.css('.child')).
        *     element(by.binding('person.phone'));
        * expect(triple.getText()).toBe('555-123-4567');
        *
        * @param {webdriver.Locator} subLocator
        * @return {ElementFinder}
        */
        element(subLocator: webdriver.Locator): ElementFinder;

        /**
        * Calls to element may be chained to find an array of elements within a parent.
        *
        * @alias element(locator).all(locator)
        * @view
        * <div class="parent">
        *   <ul>
        *     <li class="one">First</li>
        *     <li class="two">Second</li>
        *     <li class="three">Third</li>
        *   </ul>
        * </div>
        *
        * @example
        * var items = element(by.css('.parent')).all(by.tagName('li'))
        *
        * @param {webdriver.Locator} subLocator
        * @return {ElementArrayFinder}
        */
        all(subLocator: webdriver.Locator): ElementArrayFinder;

        /**
        * Shortcut for querying the document directly with css.
        *
        * @alias $(cssSelector)
        * @view
        * <div class="count">
        *   <span class="one">First</span>
        *   <span class="two">Second</span>
        * </div>
        *
        * @example
        * var item = $('.count .two');
        * expect(item.getText()).toBe('Second');
        *
        * @param {string} selector A css selector
        * @return {ElementFinder} which identifies the located
        *     {@link webdriver.WebElement}
        */
        $(selector: string): ElementFinder;

        /**
        * Shortcut for querying the document directly with css.
        *
        * @alias $$(cssSelector)
        * @view
        * <div class="count">
        *   <span class="one">First</span>
        *   <span class="two">Second</span>
        * </div>
        *
        * @example
        * // The following protractor expressions are equivalent.
        * var list = element.all(by.css('.count span'));
        * expect(list.count()).toBe(2);
        *
        * list = $$('.count span');
        * expect(list.count()).toBe(2);
        * expect(list.get(0).getText()).toBe('First');
        * expect(list.get(1).getText()).toBe('Second');
        *
        * @param {string} selector a css selector
        * @return {ElementArrayFinder} which identifies the
        *     array of the located {@link webdriver.WebElement}s.
        */
        $$(selector: string): ElementArrayFinder;

        /**
        * Determine whether the element is present on the page.
        *
        * @view
        * <span>{{person.name}}</span>
        *
        * @example
        * // Element exists.
        * expect(element(by.binding('person.name')).isPresent()).toBe(true);
        *
        * // Element not present.
        * expect(element(by.binding('notPresent')).isPresent()).toBe(false);
        *
        * @return {ElementFinder} which resolves to whether
        *     the element is present on the page.
        */
        isPresent(): webdriver.promise.Promise<boolean>;

        /**
        * Override for WebElement.prototype.isElementPresent so that protractor waits
        * for Angular to settle before making the check.
        *
        * @see ElementFinder.isPresent
        *
        * @param {webdriver.Locator} subLocator Locator for element to look for.
        * @return {ElementFinder} which resolves to whether
        *     the element is present on the page.
        */
        isElementPresent(subLocator: webdriver.Locator): webdriver.promise.Promise<boolean>;

        /**
        * @see ElementArrayFinder.prototype.locator
        *
        * @return {webdriver.Locator}
        */
        locator(): webdriver.Locator;

        /**
        * Returns the WebElement represented by this ElementFinder.
        * Throws the WebDriver error if the element doesn't exist.
        *
        * @example
        *  The following three expressions are equivalent.
        *  element(by.css('.parent')).getWebElement();
        *  browser.waitForAngular(); browser.driver.findElement(by.css('.parent'));
        *  browser.findElement(by.css('.parent'));
        *
        * @alias element(locator).getWebElement()
        * @return {webdriver.WebElement}
        */
        getWebElement(): webdriver.WebElement;

        /**
        * Evaluates the input as if it were on the scope of the current element.
        * @see ElementArrayFinder.evaluate
        *
        * @param {string} expression
        *
        * @return {ElementFinder} which resolves to the evaluated expression.
        */
        evaluate(expression: string): ElementFinder;

        /**
        * @see ElementArrayFinder.prototype.allowAnimations.
        * @param {string} value
        *
        * @return {ElementFinder} which resolves to whether animation is allowed.
        */
        allowAnimations(value: string): ElementFinder;

        /**
        * Create a shallow copy of ElementFinder.
        *
        * @return {!ElementFinder} A shallow copy of this.
        */
        clone(): ElementFinder;
    }

    interface ElementArrayFinder extends webdriver.promise.IThenable<ElementFinder[]> {
        /**
         * Returns the elements as an array of WebElements.
         */
        getWebElements(): webdriver.WebElement[];


        /**
        * Get an element within the ElementArrayFinder by index. The index starts at 0.
        * Negative indices are wrapped (i.e. -i means ith element from last)
        * This does not actually retrieve the underlying element.
        *
        * @alias element.all(locator).get(index)
        * @view
        * <ul class="items">
        *   <li>First</li>
        *   <li>Second</li>
        *   <li>Third</li>
        * </ul>
        *
        * @example
        * var list = element.all(by.css('.items li'));
        * expect(list.get(0).getText()).toBe('First');
        * expect(list.get(1).getText()).toBe('Second');
        *
        * @param {number} index Element index.
        * @return {ElementFinder} finder representing element at the given index.
        */
        get(index: number): ElementFinder;

        /**
        * Get the first matching element for the ElementArrayFinder. This does not
        * actually retrieve the underlying element.
        *
        * @alias element.all(locator).first()
        * @view
        * <ul class="items">
        *   <li>First</li>
        *   <li>Second</li>
        *   <li>Third</li>
        * </ul>
        *
        * @example
        * var first = element.all(by.css('.items li')).first();
        * expect(first.getText()).toBe('First');
        *
        * @return {ElementFinder} finder representing the first matching element
        */
        first(): ElementFinder;

        /**
        * Get the last matching element for the ElementArrayFinder. This does not
        * actually retrieve the underlying element.
        *
        * @alias element.all(locator).last()
        * @view
        * <ul class="items">
        *   <li>First</li>
        *   <li>Second</li>
        *   <li>Third</li>
        * </ul>
        *
        * @example
        * var last = element.all(by.css('.items li')).last();
        * expect(last.getText()).toBe('Third');
        *
        * @return {ElementFinder} finder representing the last matching element
        */
        last(): ElementFinder;

        /**
        * Count the number of elements represented by the ElementArrayFinder.
        *
        * @alias element.all(locator).count()
        * @view
        * <ul class="items">
        *   <li>First</li>
        *   <li>Second</li>
        *   <li>Third</li>
        * </ul>
        *
        * @example
        * var list = element.all(by.css('.items li'));
        * expect(list.count()).toBe(3);
        *
        * @return {!webdriver.promise.Promise} A promise which resolves to the
        *     number of elements matching the locator.
        */
        count(): webdriver.promise.Promise<number>;

        /**
        * Calls the input function on each ElementFinder represented by the ElementArrayFinder.
        *
        * @alias element.all(locator).each(eachFunction)
        * @view
        * <ul class="items">
        *   <li>First</li>
        *   <li>Second</li>
        *   <li>Third</li>
        * </ul>
        *
        * @example
        * element.all(by.css('.items li')).each(function(element) {
        *   // Will print First, Second, Third.
        *   element.getText().then(console.log);
        * });
        *
        * @param {function(ElementFinder)} fn Input function
        */
        each(fn: (element: ElementFinder, index: number) => void): void;

        /**
        * Apply a map function to each element within the ElementArrayFinder. The
        * callback receives the ElementFinder as the first argument and the index as
        * a second arg.
        *
        * @alias element.all(locator).map(mapFunction)
        * @view
        * <ul class="items">
        *   <li class="one">First</li>
        *   <li class="two">Second</li>
        *   <li class="three">Third</li>
        * </ul>
        *
        * @example
        * var items = element.all(by.css('.items li')).map(function(elm, index) {
        *   return {
        *     index: index,
        *     text: elm.getText(),
        *     class: elm.getAttribute('class')
        *   };
        * });
        * expect(items).toEqual([
        *   {index: 0, text: 'First', class: 'one'},
        *   {index: 1, text: 'Second', class: 'two'},
        *   {index: 2, text: 'Third', class: 'three'}
        * ]);
        *
        * @param {function(ElementFinder, number)} mapFn Map function that
        *     will be applied to each element.
        * @return {!webdriver.promise.Promise} A promise that resolves to an array
        *     of values returned by the map function.
        */
        map<T>(mapFn: (element: ElementFinder, index: number) => T): webdriver.promise.Promise<T[]>;
        map<T, T2>(mapFn: (element: ElementFinder, index: number) => T2): webdriver.promise.Promise<T[]>;

        /**
        * Apply a filter function to each element within the ElementArrayFinder. Returns
        * a new ElementArrayFinder with all elements that pass the filter function. The
        * filter function receives the ElementFinder as the first argument
        * and the index as a second arg.
        * This does not actually retrieve the underlying list of elements, so it can
        * be used in page objects.
        *
        * @alias element.all(locator).filter(filterFn)
        * @view
        * <ul class="items">
        *   <li class="one">First</li>
        *   <li class="two">Second</li>
        *   <li class="three">Third</li>
        * </ul>
        *
        * @example
        * element.all(by.css('.items li')).filter(function(elem, index) {
        *   return elem.getText().then(function(text) {
        *     return text === 'Third';
        *   });
        * }).then(function(filteredElements) {
        *   filteredElements[0].click();
        * });
        *
        * @param {function(ElementFinder, number): webdriver.WebElement.Promise} filterFn
        *     Filter function that will test if an element should be returned.
        *     filterFn can either return a boolean or a promise that resolves to a boolean.
        * @return {!ElementArrayFinder} A ElementArrayFinder that represents an array
        *     of element that satisfy the filter function.
        */
        filter(filterFn: (element: ElementFinder, index: number) => any): ElementArrayFinder;

        /**
        * Apply a reduce function against an accumulator and every element found
        * using the locator (from left-to-right). The reduce function has to reduce
        * every element into a single value (the accumulator). Returns promise of
        * the accumulator. The reduce function receives the accumulator, current
        * ElementFinder, the index, and the entire array of ElementFinders,
        * respectively.
        *
        * @alias element.all(locator).reduce(reduceFn)
        * @view
        * <ul class="items">
        *   <li class="one">First</li>
        *   <li class="two">Second</li>
        *   <li class="three">Third</li>
        * </ul>
        *
        * @example
        * var value = element.all(by.css('.items li')).reduce(function(acc, elem) {
        *   return elem.getText().then(function(text) {
        *     return acc + text + ' ';
        *   });
        * });
        *
        * expect(value).toEqual('First Second Third ');
        *
        * @param {function(number, ElementFinder, number, Array.<ElementFinder>)}
        *     reduceFn Reduce function that reduces every element into a single value.
        * @param {*} initialValue Initial value of the accumulator.
        * @return {!webdriver.promise.Promise} A promise that resolves to the final
        *     value of the accumulator.
        */
        reduce<T>(reduceFn: (acc: T, element: ElementFinder, index: number, arr: ElementFinder[]) => webdriver.promise.Promise<T>, initialValue: T): webdriver.promise.Promise<T>;
        reduce<T>(reduceFn: (acc: T, element: ElementFinder, index: number, arr: ElementFinder[]) => T, initialValue: T): webdriver.promise.Promise<T>;

        /**
        * Represents the ElementArrayFinder as an array of ElementFinders.
        *
        * @return {Array.<ElementFinder>} Return a promise, which resolves to a list
        *     of ElementFinders specified by the locator.
        */
        asElementFinders_(): webdriver.promise.Promise<ElementFinder[]>;

        /**
        * Create a shallow copy of ElementArrayFinder.
        *
        * @return {!ElementArrayFinder} A shallow copy of this.
        */
        clone(): ElementArrayFinder;

        /**
        * Calls to ElementArrayFinder may be chained to find an array of elements
        * using the current elements in this ElementArrayFinder as the starting point.
        * This function returns a new ElementArrayFinder which would contain the
        * children elements found (and could also be empty).
        *
        * @alias element.all(locator).all(locator)
        * @view
        * <div id='id1' class="parent">
        *   <ul>
        *     <li class="foo">1a</li>
        *     <li class="baz">1b</li>
        *   </ul>
        * </div>
        * <div id='id2' class="parent">
        *   <ul>
        *     <li class="foo">2a</li>
        *     <li class="bar">2b</li>
        *   </ul>
        * </div>
        *
        * @example
        * var foo = element.all(by.css('.parent')).all(by.css('.foo'))
        * expect(foo.getText()).toEqual(['1a', '2a'])
        * var baz = element.all(by.css('.parent')).all(by.css('.baz'))
        * expect(baz.getText()).toEqual(['1b'])
        * var nonexistent = element.all(by.css('.parent')).all(by.css('.NONEXISTENT'))
        * expect(nonexistent.getText()).toEqual([''])
        *
        * @param {webdriver.Locator} subLocator
        * @return {ElementArrayFinder}
        */
        all(locator: webdriver.Locator): ElementArrayFinder;

        /**
        * Shorthand function for finding arrays of elements by css.
        *
        * @type {function(string): ElementArrayFinder}
        */
        $$(selector: string): ElementArrayFinder;

        /**
        * Returns an ElementFinder representation of ElementArrayFinder. It ensures
        * that the ElementArrayFinder resolves to one and only one underlying element.
        *
        * @return {ElementFinder} An ElementFinder representation
        * @private
        */
        toElementFinder_(): ElementFinder;

        /**
        * Returns the most relevant locator.
        *
        * @example
        * $('#ID1').locator() // returns by.css('#ID1')
        * $('#ID1').$('#ID2').locator() // returns by.css('#ID2')
        * $$('#ID1').filter(filterFn).get(0).click().locator() // returns by.css('#ID1')
        *
        * @return {webdriver.Locator}
        */
        locator(): webdriver.Locator;

        /**
         * Evaluates the input as if it were on the scope of the current underlying
         * elements.
         *
         * @view
         * <span id="foo">{{variableInScope}}</span>
         *
         * @example
         * var value = element(by.id('foo')).evaluate('variableInScope');
         *
         * @param {string} expression
         *
         * @return {ElementArrayFinder} which resolves to the
         *     evaluated expression for each underlying element.
         *     The result will be resolved as in
         *     {@link webdriver.WebDriver.executeScript}. In summary - primitives will
         *     be resolved as is, functions will be converted to string, and elements
         *     will be returned as a WebElement.
         */
        evaluate(expression: string): ElementArrayFinder;

        /**
         * Determine if animation is allowed on the current underlying elements.
         * @param {string} value
         *
         * @example
         * // Turns off ng-animate animations for all elements in the <body>
         * element(by.css('body')).allowAnimations(false);
         *
         * @return {ElementArrayFinder} which resolves to whether animation is allowed.
         */
        allowAnimations(value: boolean): ElementArrayFinder;

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the click command has completed.
         */
        click(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to type a sequence on the DOM element represented by this
         * instance.
         * <p/>
         * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
         * processed in the keysequence, that key state is toggled until one of the
         * following occurs:
         * <ul>
         * <li>The modifier key is encountered again in the sequence. At this point the
         * state of the key is toggled (along with the appropriate keyup/down events).
         * </li>
         * <li>The {@code webdriver.Key.NULL} key is encountered in the sequence. When
         * this key is encountered, all modifier keys current in the down state are
         * released (with accompanying keyup events). The NULL key can be used to
         * simulate common keyboard shortcuts:
         * <code>
         *     element.sendKeys("text was",
         *                      webdriver.Key.CONTROL, "a", webdriver.Key.NULL,
         *                      "now text is");
         *     // Alternatively:
         *     element.sendKeys("text was",
         *                      webdriver.Key.chord(webdriver.Key.CONTROL, "a"),
         *                      "now text is");
         * </code></li>
         * <li>The end of the keysequence is encountered. When there are no more keys
         * to type, all depressed modifier keys are released (with accompanying keyup
         * events).
         * </li>
         * </ul>
         * <strong>Note:</strong> On browsers where native keyboard events are not yet
         * supported (e.g. Firefox on OS X), key events will be synthesized. Special
         * punctionation keys will be synthesized according to a standard QWERTY en-us
         * keyboard layout.
         *
         * @param {...string} var_args The sequence of keys to
         *     type. All arguments will be joined into a single sequence (var_args is
         *     permitted for convenience).
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     keys have been typed.
         */
        sendKeys(...var_args: string[]): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's tag name.
         */
        getTagName(): webdriver.promise.Promise<string[]>;

        /**
         * Schedules a command to query for the computed style of the element
         * represented by this instance. If the element inherits the named style from
         * its parent, the parent will be queried for its value.  Where possible, color
         * values will be converted to their hex representation (e.g. #00ff00 instead of
         * rgb(0, 255, 0)).
         * <p/>
         * <em>Warning:</em> the value returned will be as the browser interprets it, so
         * it may be tricky to form a proper assertion.
         *
         * @param {string} cssStyleProperty The name of the CSS style property to look
         *     up.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     requested CSS value.
         */
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string[]>;

        /**
         * Schedules a command to query for the value of the given attribute of the
         * element. Will return the current value even if it has been modified after the
         * page has been loaded. More exactly, this method will return the value of the
         * given attribute, unless that attribute is not present, in which case the
         * value of the property with the same name is returned. If neither value is
         * set, null is returned. The "style" attribute is converted as best can be to a
         * text representation with a trailing semi-colon. The following are deemed to
         * be "boolean" attributes and will be returned as thus:
         *
         * <p>async, autofocus, autoplay, checked, compact, complete, controls, declare,
         * defaultchecked, defaultselected, defer, disabled, draggable, ended,
         * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
         * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
         * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
         * selected, spellcheck, truespeed, willvalidate
         *
         * <p>Finally, the following commonly mis-capitalized attribute/property names
         * are evaluated as expected:
         * <ul>
         *   <li>"class"
         *   <li>"readonly"
         * </ul>
         * @param {string} attributeName The name of the attribute to query.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     attribute's value.
         */
        getAttribute(attributeName: string): webdriver.promise.Promise<string[]>;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's visible text.
         */
        getText(): webdriver.promise.Promise<string[]>;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's size as a {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise<webdriver.ISize[]>;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     element's location as a {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise<webdriver.ILocation[]>;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise<boolean[]>;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise<boolean[]>;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the form has been submitted.
         */
        submit(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to clear the {@code value} of this element. This command
         * has no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the element has been cleared.
         */
        clear(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise<boolean[]>;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise<string[]>;

        /**
         * @return {!webdriver.promise.Promise.<webdriver.WebElement.Id>} A promise
         *     that resolves to this element's JSON representation as defined by the
         *     WebDriver wire protocol.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
         */
        getId(): webdriver.promise.Promise<webdriver.IWebElementId[]>

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise<string[]>;
    }

    interface LocatorWithColumn extends webdriver.Locator {
        column(index: number): webdriver.Locator;
        column(name: string): webdriver.Locator;
    }

    interface RepeaterLocator extends LocatorWithColumn {
        row(index: number): LocatorWithColumn;
    }

    interface IProtractorLocatorStrategy {
        /**
         * webdriver's By is an enum of locator functions, so we must set it to
         * a prototype before inheriting from it.
         */
        className: typeof webdriver.By.className;
        css: typeof webdriver.By.css;
        id: typeof webdriver.By.id;
        linkText: typeof webdriver.By.linkText;
        js: typeof webdriver.By.js;
        name: typeof webdriver.By.name;
        partialLinkText: typeof webdriver.By.partialLinkText;
        tagName: typeof webdriver.By.tagName;
        xpath: typeof webdriver.By.xpath;

        /**
         * Add a locator to this instance of ProtractorBy. This locator can then be
         * used with element(by.locatorName(args)).
         *
         * @view
         * <button ng-click="doAddition()">Go!</button>
         *
         * @example
         * // Add the custom locator.
         * by.addLocator('buttonTextSimple',
         *     function(buttonText, opt_parentElement, opt_rootSelector) {
         *   // This function will be serialized as a string and will execute in the
         *   // browser. The first argument is the text for the button. The second
         *   // argument is the parent element, if any.
         *   var using = opt_parentElement,
         *       buttons = using.querySelectorAll('button');
         *
         *   // Return an array of buttons with the text.
         *   return Array.prototype.filter.call(buttons, function(button) {
         *     return button.textContent === buttonText;
         *   });
         * });
         *
         * // Use the custom locator.
         * element(by.buttonTextSimple('Go!')).click();
         *
         * @alias by.addLocator(locatorName, functionOrScript)
         * @param {string} name The name of the new locator.
         * @param {Function|string} script A script to be run in the context of
         *     the browser. This script will be passed an array of arguments
         *     that contains any args passed into the locator followed by the
         *     element scoping the search and the css selector for the root angular
         *     element. It should return an array of elements.
         */
        addLocator(name: string, script: string): void;
        addLocator(name: string, script: Function): void;

        /**
         * Find an element by binding.
         *
         * @view
         * <span>{{person.name}}</span>
         * <span ng-bind="person.email"></span>
         *
         * @example
         * var span1 = element(by.binding('person.name'));
         * expect(span1.getText()).toBe('Foo');
         *
         * var span2 = element(by.binding('person.email'));
         * expect(span2.getText()).toBe('foo@bar.com');
         *
         * @param {string} bindingDescriptor
         * @return {{findElementsOverride: findElementsOverride, toString: Function|string}}
         */
        binding(bindingDescriptor: string): webdriver.Locator;

        /**
         * Find an element by exact binding.
         *
         * @view
         * <span>{{ person.name }}</span>
         * <span ng-bind="person-email"></span>
         * <span>{{person_phone|uppercase}}</span>
         *
         * @example
         * expect(element(by.exactBinding('person.name')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('person-email')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('person')).isPresent()).toBe(false);
         * expect(element(by.exactBinding('person_phone')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('person_phone|uppercase')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('phone')).isPresent()).toBe(false);
         *
         * @param {string} bindingDescriptor
         * @return {{findElementsOverride: findElementsOverride, toString: Function|string}}
         */
        exactBinding(bindingDescriptor: string): webdriver.Locator;

        /**
         * Find an element by ng-model expression.
         *
         * @alias by.model(modelName)
         * @view
         * <input type="text" ng-model="person.name"/>
         *
         * @example
         * var input = element(by.model('person.name'));
         * input.sendKeys('123');
         * expect(input.getAttribute('value')).toBe('Foo123');
         *
         * @param {string} model ng-model expression.
         */
        model(model: string): webdriver.Locator;

        /**
         * Find a button by text.
         *
         * @view
         * <button>Save</button>
         *
         * @example
         * element(by.buttonText('Save'));
         *
         * @param {string} searchText
         * @return {{findElementsOverride: findElementsOverride, toString: Function|string}}
         */
        buttonText(searchText: string): webdriver.Locator;

        /**
         * Find a button by partial text.
         *
         * @view
         * <button>Save my file</button>
         *
         * @example
         * element(by.partialButtonText('Save'));
         *
         * @param {string} searchText
         * @return {{findElementsOverride: findElementsOverride, toString: Function|string}}
         */
        partialButtonText(searchText: string): webdriver.Locator;


        /**
         * Find elements inside an ng-repeat.
         *
         * @view
         * <div ng-repeat="cat in pets">
         *   <span>{{cat.name}}</span>
         *   <span>{{cat.age}}</span>
         * </div>
         *
         * <div class="book-img" ng-repeat-start="book in library">
         *   <span>{{$index}}</span>
         * </div>
         * <div class="book-info" ng-repeat-end>
         *   <h4>{{book.name}}</h4>
         *   <p>{{book.blurb}}</p>
         * </div>
         *
         * @example
         * // Returns the DIV for the second cat.
         * var secondCat = element(by.repeater('cat in pets').row(1));
         *
         * // Returns the SPAN for the first cat's name.
         * var firstCatName = element(by.repeater('cat in pets').
         *     row(0).column('{{cat.name}}'));
         *
         * // Returns a promise that resolves to an array of WebElements from a column
         * var ages = element.all(
         *     by.repeater('cat in pets').column('{{cat.age}}'));
         *
         * // Returns a promise that resolves to an array of WebElements containing
         * // all top level elements repeated by the repeater. For 2 pets rows resolves
         * // to an array of 2 elements.
         * var rows = element.all(by.repeater('cat in pets'));
         *
         * // Returns a promise that resolves to an array of WebElements containing all
         * // the elements with a binding to the book's name.
         * var divs = element.all(by.repeater('book in library').column('book.name'));
         *
         * // Returns a promise that resolves to an array of WebElements containing
         * // the DIVs for the second book.
         * var bookInfo = element.all(by.repeater('book in library').row(1));
         *
         * // Returns the H4 for the first book's name.
         * var firstBookName = element(by.repeater('book in library').
         *     row(0).column('{{book.name}}'));
         *
         * // Returns a promise that resolves to an array of WebElements containing
         * // all top level elements repeated by the repeater. For 2 books divs
         * // resolves to an array of 4 elements.
         * var divs = element.all(by.repeater('book in library'));
         */
        repeater(repeatDescriptor: string): RepeaterLocator;

        /**
         * Find elements by CSS which contain a certain string.
         *
         * @view
         * <ul>
         *   <li class="pet">Dog</li>
         *   <li class="pet">Cat</li>
         * </ul>
         *
         * @example
         * // Returns the DIV for the dog, but not cat.
         * var dog = element(by.cssContainingText('.pet', 'Dog'));
         */
        cssContainingText(cssSelector: string, searchText: string): webdriver.Locator;

        /**
         * Find an element by ng-options expression.
         *
         * @alias by.options(optionsDescriptor)
         * @view
         * <select ng-model="color" ng-options="c for c in colors">
         *   <option value="0" selected="selected">red</option>
         *   <option value="1">green</option>
         * </select>
         *
         * @example
         * var allOptions = element.all(by.options('c for c in colors'));
         * expect(allOptions.count()).toEqual(2);
         * var firstOption = allOptions.first();
         * expect(firstOption.getText()).toEqual('red');
         *
         * @param {string} optionsDescriptor ng-options expression.
         */
        options(optionsDescriptor: string): webdriver.Locator;
    }

    var By: IProtractorLocatorStrategy;

    interface Protractor extends webdriver.WebDriver {

        /**
        * The wrapped webdriver instance. Use this to interact with pages that do
        * not contain Angular (such as a log-in screen).
        *
        * @type {webdriver.WebDriver}
        */
        driver: webdriver.WebDriver;

        /**
        * Helper function for finding elements.
        *
        * @type {function(webdriver.Locator): ElementFinder}
        */
        element(locator: webdriver.Locator): ElementFinder;

        /**
        * Shorthand function for finding elements by css.
        *
        * @type {function(string): ElementFinder}
        */
        $(selector: string): ElementFinder;

        /**
        * Shorthand function for finding arrays of elements by css.
        *
        * @type {function(string): ElementArrayFinder}
        */
        $$(selector: string): ElementArrayFinder;

        /**
        * All get methods will be resolved against this base URL. Relative URLs are =
        * resolved the way anchor tags resolve.
        *
        * @type {string}
        */
        baseUrl: string;

        /**
        * The css selector for an element on which to find Angular. This is usually
        * 'body' but if your ng-app is on a subsection of the page it may be
        * a subelement.
        *
        * @type {string}
        */
        rootEl: string;

        /**
        * If true, Protractor will not attempt to synchronize with the page before
        * performing actions. This can be harmful because Protractor will not wait
        * until $timeouts and $http calls have been processed, which can cause
        * tests to become flaky. This should be used only when necessary, such as
        * when a page continuously polls an API using $timeout.
        *
        * @type {boolean}
        */
        ignoreSynchronization: boolean;

        /**
        * Timeout in milliseconds to wait for pages to load when calling `get`.
        *
        * @type {number}
        */
        getPageTimeout: number;

        /**
        * An object that holds custom test parameters.
        *
        * @type {Object}
        */
        params: any;

        /**
        * The reset URL to use between page loads.
        *
        * @type {string}
        */
        resetUrl: string;

        /**
         * Instruct webdriver to wait until Angular has finished rendering and has
         * no outstanding $http calls before continuing.
         *
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *    scripts return value.
         */
        waitForAngular(): webdriver.promise.Promise<any>;

        /**
         * Add a module to load before Angular whenever Protractor.get is called.
         * Modules will be registered after existing modules already on the page,
         * so any module registered here will override preexisting modules with the same
         * name.
         *
         * @example
         * browser.addMockModule('modName', function() {
         *   angular.module('modName', []).value('foo', 'bar');
         * });
         *
         * @param {!string} name The name of the module to load or override.
         * @param {!string|Function} script The JavaScript to load the module.
         * @param {...*} varArgs Any additional arguments will be provided to
         *     the script and may be referenced using the `arguments` object.
         */
        addMockModule(name: string, script: string, ...varArgs: any[]): void;
        addMockModule(name: string, script: Function, ...varArgs: any[]): void;

        /**
         * Clear the list of registered mock modules.
         */
        clearMockModules(): void;

        /**
         * Remove a registered mock module.
         *
         * @example
         * browser.removeMockModule('modName');
         *
         * @param {!string} name The name of the module to remove.
         */
        removeMockModule(name: string): void;

        /**
         * @see webdriver.WebDriver.get
         *
         * Navigate to the given destination and loads mock modules before
         * Angular. Assumes that the page being loaded uses Angular.
         * If you need to access a page which does not have Angular on load, use
         * the wrapped webdriver directly.
         *
         * @param {string} destination Destination URL.
         * @param {number=} opt_timeout Number of milliseconds to wait for Angular to
         *     start.
         */
        get(destination: string, opt_timeout?: number): webdriver.promise.Promise<void>;

        /**
         * See webdriver.WebDriver.refresh
         *
         * Makes a full reload of the current page and loads mock modules before
         * Angular. Assumes that the page being loaded uses Angular.
         * If you need to access a page which does not have Angular on load, use
         * the wrapped webdriver directly.
         *
         * @param {number=} opt_timeout Number of seconds to wait for Angular to start.
         */
        refresh(opt_timeout?: number): webdriver.promise.Promise<void>;

        /**
         * Browse to another page using in-page navigation.
         *
         * @param {string} url In page URL using the same syntax as $location.url()
         * @returns {!webdriver.promise.Promise} A promise that will resolve once
         *    page has been changed.
         */
        setLocation(url: string): webdriver.promise.Promise<void>;

        /**
         * Returns the current absolute url from AngularJS.
         */
        getLocationAbsUrl(): webdriver.promise.Promise<string>;

        /**
         * Pauses the test and injects some helper functions into the browser, so that
         * debugging may be done in the browser console.
         *
         * This should be used under node in debug mode, i.e. with
         * protractor debug <configuration.js>
         *
         * @example
         * While in the debugger, commands can be scheduled through webdriver by
         * entering the repl:
         *   debug> repl
         *   Press Ctrl + C to leave rdebug repl
         *   > ptor.findElement(protractor.By.input('user').sendKeys('Laura'));
         *   > ptor.debugger();
         *   debug> c
         *
         * This will run the sendKeys command as the next task, then re-enter the
         * debugger.
         */
        debugger(): void;

        /**
         * Beta (unstable) pause function for debugging webdriver tests. Use
         * browser.pause() in your test to enter the protractor debugger from that
         * point in the control flow.
         * Does not require changes to the command line (no need to add 'debug').
         *
         * @example
         * element(by.id('foo')).click();
         * browser.pause();
         * // Execution will stop before the next click action.
         * element(by.id('bar')).click();
         *
         * @param {number=} opt_debugPort Optional port to use for the debugging process
         */
        pause(opt_debugPort?: number): void;
    }

    // Interface for the global browser object.
    interface IBrowser extends Protractor {
        /**
        * Fork another instance of protractor for use in interactive tests.
        *
        * @param {boolean} opt_useSameUrl Whether to navigate to current url on creation
        * @param {boolean} opt_copyMockModules Whether to apply same mock modules on creation
        * @return {Protractor} a protractor instance.
        */
        forkNewDriverInstance(opt_useSameUrl?: boolean, opt_copyMockModules?: boolean): Protractor;

        /**
        * Get the processed configuration object that is currently being run. This will contain
        * the specs and capabilities properties of the current runner instance.
        *
        * Set by the runner.
        *
        * @return {webdriver.promise.Promise<any>} A promise which resolves to the capabilities object.
        */
        getProcessedConfig(): webdriver.promise.Promise<any>;
    }

    /**
     * Create a new instance of Protractor by wrapping a webdriver instance.
     *
     * @param {webdriver.WebDriver} webdriver The configured webdriver instance.
     * @param {string=} opt_baseUrl A URL to prepend to relative gets.
     * @return {Protractor}
     */
    function wrapDriver(webdriver: webdriver.WebDriver, opt_baseUrl?: string, opt_rootElement?: string): Protractor;
}

interface cssSelectorHelper {
    (cssLocator: string): protractor.ElementFinder;
}

interface cssArraySelectorHelper {
    (cssLocator: string): protractor.ElementArrayFinder;
}

declare var browser: protractor.IBrowser;
declare var by: protractor.IProtractorLocatorStrategy;
declare var By: protractor.IProtractorLocatorStrategy;
declare var element: protractor.Element;
declare var $: cssSelectorHelper;
declare var $$: cssArraySelectorHelper;

declare module 'protractor' {
    export = protractor;
}
