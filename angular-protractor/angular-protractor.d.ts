// Type definitions for Angular Protractor 1.0.0-rc4
// Project: https://github.com/angular/protractor
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../selenium-webdriver/selenium-webdriver.d.ts" />

declare module protractor {
    //region Wrapped webdriver Items

    class AbstractBuilder extends webdriver.AbstractBuilder {}
    class ActionSequence extends webdriver.ActionSequence {}
    class Alert extends webdriver.Alert {}
    class Builder extends webdriver.Builder {}
    class Button extends webdriver.Button {}
    class Capabilities extends webdriver.Capabilities {}
    class Command extends webdriver.Command {}
    class EventEmitter extends webdriver.EventEmitter {}
    class FirefoxDomExecutor extends webdriver.FirefoxDomExecutor {}
    class Locator extends webdriver.Locator {}
    class Session extends webdriver.Session {}
    class WebDriver extends webdriver.WebDriver {}
    class Browser extends webdriver.Browser {}
    class Capability extends webdriver.Capability {}
    class CommandName extends webdriver.CommandName {}
    class Key extends webdriver.Key {}
    class UnhandledAlertError extends webdriver.UnhandledAlertError {}
    class WebElement extends webdriver.WebElement {}

    module command {
        class Command extends webdriver.Command {}
        class CommandName extends webdriver.CommandName {}
    }

    module error {
        class Error extends webdriver.error.Error {}
        class ErrorCode extends webdriver.error.ErrorCode {}
    }

    module events {
        class EventEmitter extends webdriver.EventEmitter {}
    }

    module logging {
        var Preferences: any;

        class LevelName extends webdriver.logging.LevelName {}
        class Type extends webdriver.logging.Type {}
        class Level extends webdriver.logging.Level {}
        class Entry extends webdriver.logging.Entry {}

        function getLevel(nameOrValue: string): webdriver.logging.Level;
        function getLevel(nameOrValue: number): webdriver.logging.Level;
    }

    module promise {
        class Promise extends webdriver.promise.Promise {}
        class Deferred extends webdriver.promise.Deferred {}
        class ControlFlow extends webdriver.promise.ControlFlow {}

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
        function createFlow(callback: (flow: webdriver.promise.ControlFlow) => any): webdriver.promise.Promise;

        /**
         * Determines whether a {@code value} should be treated as a promise.
         * Any object whose "then" property is a function will be considered a promise.
         *
         * @param {*} value The value to test.
         * @return {boolean} Whether the value is a promise.
         */
        function isPromise(value: any): boolean;

        /**
         * Creates a promise that will be resolved at a set time in the future.
         * @param {number} ms The amount of time, in milliseconds, to wait before
         *     resolving the promise.
         * @return {!webdriver.promise.Promise} The promise.
         */
        function delayed(ms: number): webdriver.promise.Promise;

        /**
         * Creates a new deferred object.
         * @param {Function=} opt_canceller Function to call when cancelling the
         *     computation of this instance's value.
         * @return {!webdriver.promise.Deferred} The new deferred object.
         */
        function defer(opt_canceller?: any): webdriver.promise.Deferred;

        /**
         * Creates a promise that has been resolved with the given value.
         * @param {*=} opt_value The resolved value.
         * @return {!webdriver.promise.Promise} The resolved promise.
         */
        function fulfilled(opt_value?: any): webdriver.promise.Promise;

        /**
         * Creates a promise that has been rejected with the given reason.
         * @param {*=} opt_reason The rejection reason; may be any value, but is
         *     usually an Error or a string.
         * @return {!webdriver.promise.Promise} The rejected promise.
         */
        function rejected(opt_reason?: any): webdriver.promise.Promise;

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
        function checkedNodeCall(fn: (error: any, value: any) => any): webdriver.promise.Promise;

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
        function when(value: any, opt_callback?: (value: any) => any, opt_errback?: (error: any) => any): webdriver.promise.Promise;

        /**
         * Invokes the appropriate callback function as soon as a promised
         * {@code value} is resolved. This function is similar to
         * {@code webdriver.promise.when}, except it does not return a new promise.
         * @param {*} value The value to observe.
         * @param {Function} callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         */
        function asap(value: any, callback: (value: any) => any, opt_errback?: (error: any) => any): void;

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
        function fullyResolved(value: any): webdriver.promise.Promise;

        /**
         * Changes the default flow to use when no others are active.
         * @param {!webdriver.promise.ControlFlow} flow The new default flow.
         * @throws {Error} If the default flow is not currently active.
         */
        function setDefaultFlow(flow: webdriver.promise.ControlFlow): void;

    }

    module process {

        /**
         * Queries for a named environment variable.
         * @param {string} name The name of the environment variable to look up.
         * @param {string=} opt_default The default value if the named variable is not
         *     defined.
         * @return {string} The queried environment variable.
         */
        function getEnv(name: string, opt_default?: string): string;

        /**
         * @return {boolean} Whether the current process is Node's native process
         *     object.
         */
        function isNative(): boolean;

        /**
         * Sets an environment value. If the new value is either null or undefined, the
         *     environment variable will be cleared.
         * @param {string} name The value to set.
         * @param {*} value The new value; will be coerced to a string.
         */
        function setEnv(name: string, value: any): void;

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

    interface ElementFinder {
        /**
         * Use as: element(locator).element(locator)
         * Calls to element may be chained to find elements within a parent.
         *
         * @param {webdriver.Locator} locator The locator that will be used to find descendents.
         *
         * @return {protractor.ElementFinder} The descendent element found by the locator
         */
        element(locator: webdriver.Locator): protractor.ElementFinder;

        /**
         * Use as: element(locator).all(locator)
         * Calls to element may be chained to find an array of elements within a parent.
         *
         * @param {webdriver.Locator} locator The locator that will be used to find descendents.
         *
         * @return {protractor.ElementArrayFinder} The descendent elements found by the locator
         */
        all(locator: webdriver.Locator): protractor.ElementArrayFinder;

        /**
         * Shortcut for querying the document directly with css.
         *
         * @param {string} selector a css selector
         * @see webdriver.WebElement.findElement
         * @return {!protractor.WebElement}
         */
        $(selector: string): protractor.WebElement;

        /**
         * Shortcut for querying the document directly with css.
         *
         * @param {string} selector a css selector
         * @see webdriver.WebElement.findElements
         * @return {!webdriver.promise.Promise} A promise that will be resolved to an
         *     array of the located {@link webdriver.WebElement}s.
         */
        $$(selector: string): webdriver.promise.Promise;

        /**
         * Use as: element(locator).isPresent()
         * Determine whether the element is present on the page.
         *
         * @return {protractor.ElementFinder} Which resolves to whether the element is present on the page.
         */
        isPresent(): webdriver.promise.Promise;

        /**
         * Override for WebElement.prototype.isElementPresent so that protractor waits
         * for Angular to settle before making the check.
         *
         * @see ElementFinder.isPresent
         * @return {!webdriver.promise.Promise} which resolves to whether the element is present on the page.
         */
        isElementPresent(locator: webdriver.Locator): webdriver.promise.Promise;

        /**
         * Return this ElementFinder's locator.
         *
         * @return {webdriver.Locator}
         */
        locator(): webdriver.Locator;

        /**
         * Use as: element(locator).getWebElement()
         * Returns the WebElement represented by this ElementFinder.
         * Throws the WebDriver error if the element doesn't exist.
         * If index is null, it makes sure that there is only one underlying WebElement
         * described by the chain of locators and issues a warning otherwise.
         * If index is not null, it retrieves the WebElement specified by the index..
         * @return {webdriver.WebElement} The WebElement represented by the ElementFinder.
         */
        getWebElement(): webdriver.WebElement;

        /**
         * Evalates the input as if it were on the scope of the current element.
         * @param {string} expression
         *
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *     evaluated expression. The result will be resolved as in
         *     {@link webdriver.WebDriver.executeScript}. In summary - primitives will
         *     be resolved as is, functions will be converted to string, and elements
         *     will be returned as a WebElement.
         */
        evaluate(expression: string): webdriver.promise.Promise;

        /**
         * Determine if animation is allowed on the current element.
         * @param {string} value
         *
         * @return {ElementFinder} which resolves to whether animation is allowed.
         */
        allowAnimations(value: string): webdriver.promise.Promise;

        /**
         * Access the underlying actionResult of ElementFinder. Implementation allows ElementFinder to be used as a webdriver.promise.Promise.
         * @param {function(webdriver.promise.Promise)} fn Function which takes the value of the underlying actionResult.
         *
         * @return {webdriver.promise.Promise} Promise which contains the results of evaluating fn.
         */
        then(fn: IThenFunction): webdriver.promise.Promise;

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the click command has completed.
         */
        click(): webdriver.promise.Promise;

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
        sendKeys(...var_args: string[]): webdriver.promise.Promise;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's tag name.
         */
        getTagName(): webdriver.promise.Promise;

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
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise;

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
        getAttribute(attributeName: string): webdriver.promise.Promise;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's visible text.
         */
        getText(): webdriver.promise.Promise;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's size as a {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     element's location as a {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the form has been submitted.
         */
        submit(): webdriver.promise.Promise;

        /**
         * Schedules a command to clear the {@code value} of this element. This command
         * has no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the element has been cleared.
         */
        clear(): webdriver.promise.Promise;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise;

        /**
         * @return {!webdriver.promise.Promise.<webdriver.WebElement.Id>} A promise
         * that resolves to this element's JSON representation as defined by the
         * WebDriver wire protocol.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
         */
        toWireValue(): webdriver.promise.Promise;
    }

    interface IThenFunction {
        (promiseResult: any): any;
    }


    interface ElementArrayFinder {
        /**
         * Use as: element.all(locator).getWebElements()
         * Returns the array of WebElements represented by this ElementArrayFinder.
         *
         * @return {Array.<webdriver.WebElement>} Array of WebElements represented by this ElementArrayFinder
         */
        getWebElements(): webdriver.WebElement[];

        /**
         * Use as: element.all(locator).get(index)
         * Get an element found by the locator by index. The index starts at 0. This does not actually retrieve the underlying element.
         *
         * @param {number} index Element index.
         *
         * @return {protractor.ElementFinder} Finder representing element at the given index
         */
        get(index: number): protractor.ElementFinder;


        /**
         * Use as: element.all(locator).first()
         * Get the first matching element for the locator. This does not actually retrieve the underlying element.
         *
         * @return {Protractor.ElementFinder} Finder representing the first matching element
         */
        first(): protractor.ElementFinder;

        /**
         * Use as: element.all(locator).last()
         * Get the last matching element for the locator. This does not actually retrieve the underlying element.
         *
         * @return {Protractor.ElementFinder} Finder representing the last matching element
         */
        last(): protractor.ElementFinder;

        /**
         * Use as: element.all(locator).getWebElements()
         * Returns the array of WebElements represented by this ElementArrayFinder.
         *
         * @return {!webdriver.promise.Promise} The array of WebElements represented by this ElementArrayFinder
         */
        count(): webdriver.promise.Promise;

        /**
         * Use as: element.all(locator).each(eachFunction)
         * Calls the input function on each ElementFinder found by the locator.
         *
         * @param {function(ElementFinder)} fn Input function.
         */
        each(fn: IEachFunction): void;

        /**
         * Use as: element.all(locator).map(mapFunction)
         * Apply a map function to each element found using the locator. The callback receives the ElementFinder as the first argument and the index as a second arg.
         *
         * @param {function(ElementFinder, number)} mapFn Map function that will be applied to each element.
         *
         * @return {!webdriver.promise.Promise} A promise that resolves to an array of values returned by the map function.
         */
        map(mapFn: IMapFunction): webdriver.promise.Promise;

        /**
         * Use as: element.all(locator).filter(filterFn)
         * Apply a filter function to each element found using the locator. Returns promise of a new array with all elements that pass the filter function. The filter function receives the ElementFinder as the first argument and the index as a second arg.
         *
         * @param {function(ElementFinder, number): webdriver.promise.Promise} filterFn Filter function that will test if an element should be returned. filterFn should return a promise that resolves to a boolean.
         *
         * @return {!webdriver.promise.Promise} A promise that resolves to an array of ElementFinders that satisfy the filter function.
         */
        filter(func: IFilterFunction): webdriver.promise.Promise;

        /**
         * Use as: element.all(locator).reduce(reduceFn)
         * Apply a reduce function against an accumulator and every element found using the locator (from left-to-right).
         * The reduce function has to reduce every element into a single value (the accumulator).
         * Returns promise of the accumulator.
         * The reduce function receives the accumulator, current ElementFinder, the index, and the entire array of ElementFinders, respectively.
         *
         * @param {function(number, ElementFinder, number, Array.<ElementFinder>): webdriver.promise.Promise} reduceFn Reduce function that reduces every element into a single value.
         * @param {*} initialValue Initial value of the accumulator.
         *
         * @return {!webdriver.promise.Promise} A promise that resolves to the final value of the accumulator.
         */
        reduce(func: IReductionFunction, initialValue: any): webdriver.promise.Promise;

        /**
         * Represents the ElementArrayFinder as an array of ElementFinders.
         *
         * @return {!webdriver.promise.Promise} Return a promise, which resolves to a list (array)
         *     of ElementFinders specified by the locator.
         */
         asElementFinders_(): webdriver.promise.Promise;


        /**
         * Find the elements specified by the locator. The input function is passed
         * to the resulting promise, which resolves to an array of ElementFinders.
         *
         * Use as: element.all(locator).then(thenFunction)
         * <ul class="items">
         *   <li>First</li>
         *   <li>Second</li>
         *   <li>Third</li>
         * </ul>
         *
         * element.all(by.css('.items li')).then(function(arr) {
         *   expect(arr.length).toEqual(3);
         * });
         *
         * @param {function(Array.<ElementFinder>)} fn
         *
         * @type {webdriver.promise.Promise} a promise which will resolve to
         *     an array of ElementFinders matching the locator.
         */
         then(fn: IElementArrayFinderThenFunction): webdriver.promise.Promise;
    }

    interface IEachFunction {
        (element: protractor.ElementFinder): void;
    }

    interface IMapFunction {
        (element: ElementFinder, index: number): any;
    }

    interface IFilterFunction {
        (element: ElementFinder, index: number): webdriver.promise.Promise;
    }

    interface IReductionFunction {
        (accumulator: any, element: protractor.ElementFinder, index?: number, array?: protractor.ElementFinder[]): webdriver.promise.Promise;
    }

    interface IElementArrayFinderThenFunction {
        (promiseResult: ElementFinder[]): any;
    }

    class LocatorWithColumn extends webdriver.Locator {
        column(index: number): webdriver.Locator;
    }

    class RepeaterLocator extends LocatorWithColumn {
        row(index: number): LocatorWithColumn;
    }

    interface IProtractorLocatorStrategy extends webdriver.ILocatorStrategy {
        /**
         * Add a locator to this instance of ProtractorBy. This locator can then be
         * used with element(by.<name>(<args>)).
         *
         * @param {string} name
         * @param {function|string} script A script to be run in the context of
         *     the browser. This script will be passed an array of arguments
         *     that begins with the element scoping the search, and then
         *     contains any args passed into the locator. It should return
         *     an array of elements.
         */
        addLocator(name: string, script: any): void;

        /**
         * Usage:
         *   <span>{{status}}</span>
         *   var status = element(by.binding('{{status}}'));
         *
         * @param {string} bindingDescriptor
         * @return {webdriver.Locator}
         */
        binding(bindingDescriptor: string): webdriver.Locator;

        /**
         * Find an element by exact binding.
         *
         * <span>{{ person.name }}</span>
         * <span ng-bind="person-email"></span>
         * <span>{{person_phone|uppercase}}</span>
         *
         * expect(element(by.exactBinding('person.name')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('person-email')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('person')).isPresent()).toBe(false);
         * expect(element(by.exactBinding('person_phone')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('person_phone|uppercase')).isPresent()).toBe(true);
         * expect(element(by.exactBinding('phone')).isPresent()).toBe(false);
         *
         * @param {string} bindingDescriptor
         * @return {webdriver.Locator}
         */
        exactBinding(bindingDescriptor: string): webdriver.Locator;

        /**
         *
         * Find an element by ng-model expression.
         *
         * Usage:
         *   <input type="text" ng-model="person.name"/>
         *   var input = element(by.model('person.name'));
         *   input.sendKeys('123');
         *   expect(input.getAttribute('value')).toBe('Foo123');
         *
         * @param {string} model ng-model expression.
         * @return {webdriver.Locator}
         */
        model(model: string): webdriver.Locator;

        /**
         * Find a button by text.
         *
         * Usage:
         *  <button>Save</button>
         *  element(by.buttonText('Save'));
         *
         * @param {string} searchText
         * @return {webdriver.Locator}
         */
        buttonText(searchText: string): webdriver.Locator;


        /**
         * Find a button by partial text.
         *
         * Usage:
         *  <button>Save my file</button>
         *  element(by.partialButtonText('Save'));
         *
         * @param {string} searchText
         * @return {webdriver.Locator}
         */
        partialButtonText(searchText: string): webdriver.Locator;

        /**
         * Find elements inside an ng-repeat.
         *
         * Usage:
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
         *
         * @param cssSelector {string}
         * @param searchText {string}
         * @return {webdriver.Locator}
         */
        cssContainingText(cssSelector: string, searchText: string): webdriver.Locator;

        /**
         * Find an element by ng-options expression.
         *
         * Usage:
         * <select ng-model="color" ng-options="c for c in colors">
         *   <option value="0" selected="selected">red</option>
         *   <option value="1">green</option>
         * </select>
         *
         * var allOptions = element.all(by.options('c for c in colors'));
         * expect(allOptions.count()).toEqual(2);
         * var firstOption = allOptions.first();
         * expect(firstOption.getText()).toEqual('red');
         *
         * @param {string} optionsDescriptor ng-options expression.
         * @return {webdriver.Locator}
         */
        options(optionsDescriptor: string): webdriver.Locator;
    }

    var By: IProtractorLocatorStrategy;

    class Protractor extends webdriver.WebDriver {

        //region Constructors

        /**
         * @param {webdriver.WebDriver} webdriver
         * @param {string=} opt_baseUrl A base URL to run get requests against.
         * @param {string=body} opt_rootElement  Selector element that has an ng-app in
         *     scope.
         * @constructor
         */
        constructor(webdriver: webdriver.WebDriver, opt_baseUrl?: string, opt_rootElement?: string);

        //endregion

        //region Properties

        /**
         * The wrapped webdriver instance. Use this to interact with pages that do
         * not contain Angular (such as a log-in screen).
         *
         * @type {webdriver.WebDriver}
         */
        driver: webdriver.WebDriver;

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
         * An object that holds custom test parameters.
         *
         * @type {Object}
         */
        params: any;

        //endregion

        //region Methods

        /**
         * Instruct webdriver to wait until Angular has finished rendering and has
         * no outstanding $http calls before continuing.
         *
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *    scripts return value.
         */
        waitForAngular(): webdriver.promise.Promise;

        /**
         * Waits for Angular to finish rendering before searching for elements.
         * @see webdriver.WebDriver.findElement
         *
         * @param {webdriver.Locator} locator The locator used to find the element.
         * @return {!webdriver.WebElement}
         */
        findElement(locator: webdriver.Locator): protractor.WebElement;

        /**
         * Waits for Angular to finish rendering before searching for elements.
         * @see webdriver.WebDriver.findElements
         *
         * @param {webdriver.Locator} locator The locator used to find the elements.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to an
         *     array of the located {@link webdriver.WebElement}s.
         */
        findElements(locator: webdriver.Locator): webdriver.promise.Promise;

        /**
         * Tests if an element is present on the page.
         * @see webdriver.WebDriver.isElementPresent
         * @return {!webdriver.promise.Promise} A promise that will resolve to whether
         *     the element is present on the page.
         */
        isElementPresent(locatorOrElement: webdriver.Locator): webdriver.promise.Promise;
        isElementPresent(locatorOrElement: any): webdriver.promise.Promise;

        /**
         * Helper function for finding elements.
         *
         * @type {function(webdriver.Locator): ElementFinder}
         */
        element(locator: webdriver.Locator): ElementFinder;

        /**
         * Helper function for finding elements by css.
         *
         * @type {function(string): ElementFinder}
         */
        $(cssLocator: string): ElementFinder;

        /**
         * Helper function for finding arrays of elements by css.
         *
         * @type {function(string): ElementArrayFinder}
         */
        $$(cssLocator: string): ElementArrayFinder;

        /**
         * Add a module to load before Angular whenever Protractor.get is called.
         * Modules will be registered after existing modules already on the page,
         * so any module registered here will override preexisting modules with the same
         * name.
         *
         * @param {string} name The name of the module to load or override.
         * @param {string|Function} script The JavaScript to load the module.
         * @param {...*} varArgs Any additional arguments will be provided to
         *     the script and may be referenced using the `arguments` object.
         */
        addMockModule(name: string, script: string, ...varArgs: any[]): void;
        addMockModule(name: string, script: any, ...varArgs: any[]): void;

        /**
         * Clear the list of registered mock modules.
         */
        clearMockModules(): void;

        /**
         * Remove a registered mock module.
         * @param {!string} name The name of the module to remove.
         */
        removeMockModule(name: string): void;

        /**
         * See webdriver.WebDriver.get
         *
         * Navigate to the given destination and loads mock modules before
         * Angular. Assumes that the page being loaded uses Angular.
         * If you need to access a page which does not have Angular on load, use
         * the wrapped webdriver directly.
         *
         * @param {string} destination Destination URL.
         * @param {number=} opt_timeout Number of seconds to wait for Angular to start.
         */
         get(destination: string, opt_timeout?: number): webdriver.promise.Promise;

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
        refresh(opt_timeout?: number): void;

        /**
         * Mixin navigation methods back into the navigation object so that
         * they are invoked as before, i.e. driver.navigate().refresh()
         */
        navigate(): webdriver.WebDriverNavigation;

        /**
         * Browse to another page using in-page navigation.
         *
         * @param {string} url In page URL using the same syntax as $location.url()
         * @returns {!webdriver.promise.Promise} A promise that will resolve once
         *    page has been changed.
         */
        setLocation(url: string): webdriver.promise.Promise;

        /**
         * Returns the current absolute url from AngularJS.
         */
        getLocationAbsUrl(): webdriver.promise.Promise;

        /**
         * Pauses the test and injects some helper functions into the browser, so that
         * debugging may be done in the browser console.
         *
         * This should be used under node in debug mode, i.e. with
         * protractor debug <configuration.js>
         *
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
         * @param {=number} opt_debugPort Optional port to use for the debugging process
         */
        pause(opt_debugPort?: number): void;

        //endregion
    }

    /**
     * Create a new instance of Protractor by wrapping a webdriver instance.
     *
     * @param {webdriver.WebDriver} webdriver The configured webdriver instance.
     * @param {string=} opt_baseUrl A URL to prepend to relative gets.
     * @return {Protractor}
     */
    function wrapDriver(webdriver: webdriver.WebDriver, opt_baseUrl?: string, opt_rootElement?: string): Protractor;

    /**
     * Set a singleton instance of protractor.
     * @param {Protractor} ptor
     */
    function setInstance(ptor: Protractor): void;

    /**
     * Get the singleton instance.
     * @return {Protractor}
     */
    function getInstance(): Protractor;

}

interface cssSelectorHelper {
    (cssLocator: string): protractor.ElementFinder;
}

interface cssArraySelectorHelper {
    (cssLocator: string): protractor.ElementArrayFinder;
}

declare var browser: protractor.Protractor;
declare var by: protractor.IProtractorLocatorStrategy;
declare var element: protractor.Element;
declare var $: cssSelectorHelper;
declare var $$: cssArraySelectorHelper;

declare module 'protractor' {
    export = protractor;
}
