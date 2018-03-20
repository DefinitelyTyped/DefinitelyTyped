// Type definitions for Jasmine-JQuery 1.5.8
// Project: https://github.com/velesin/jasmine-jquery
// Definitions by: Gregor Stamac <https://github.com/gstamac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jasmine"/>
/// <reference types="jquery"/>

declare function sandbox(attributes?: any): string;

declare function readFixtures(...uls: string[]): string;
declare function preloadFixtures(...uls: string[]) : void;
declare function loadFixtures(...uls: string[]): void;
declare function appendLoadFixtures(...uls: string[]): void;
declare function setFixtures(html: string): string;
declare function appendSetFixtures(html: string) : void;

declare function preloadStyleFixtures(...uls: string[]) : void;
declare function loadStyleFixtures(...uls: string[]) : void;
declare function appendLoadStyleFixtures(...uls: string[]) : void;
declare function setStyleFixtures(html: string) : void;
declare function appendSetStyleFixtures(html: string) : void;

declare function loadJSONFixtures(...uls: string[]): jasmine.JSONFixtures;
declare function getJSONFixture(url: string): any;

declare function spyOnEvent(selector: string, eventName: string): jasmine.JQueryEventSpy;

declare namespace jasmine {
    function spiedEventsKey(selector: JQuery, eventName: string): string;

    function getFixtures(): Fixtures;
    function getStyleFixtures(): StyleFixtures;
    function getJSONFixtures(): JSONFixtures;

    interface Fixtures {
        fixturesPath: string;
        containerId: string;
        set(html: string): string;
        appendSet(html: string): void;
        preload(...uls: string[]): void;
        load(...uls: string[]): void;
        appendLoad(...uls: string[]): void;
        read(...uls: string[]): string;
        clearCache(): void;
        cleanUp(): void;
        sandbox(attributes?: any): string;
        createContainer_(html: string) : string;
        addToContainer_(html: string): void;
        getFixtureHtml_(url: string): string;
        loadFixtureIntoCache_(relativeUrl: string): void;
        makeFixtureUrl_(relativeUrl: string): string;
        proxyCallTo_(methodName: string, passedArguments: any): any;
    }

    interface StyleFixtures {
        fixturesPath: string;
        set(html: string): string;
        appendSet(html: string): void;
        preload(...uls: string[]) : void;
        load(...uls: string[]) : void;
        appendLoad(...uls: string[]) : void;
        read_(...uls: string[]): string;
        clearCache() : void;
        cleanUp() : void;
        createStyle_(html: string) : void;
        getFixtureHtml_(url: string): string;
        loadFixtureIntoCache_(relativeUrl: string) : void;
        makeFixtureUrl_(relativeUrl: string): string;
        proxyCallTo_(methodName: string, passedArguments: any): any;
    }

    interface JSONFixtures {
        fixturesPath: string;
        load(...uls: string[]): void;
        read(...uls: string[]): string;
        clearCache(): void;
        getFixtureData_(url: string): any;
        loadFixtureIntoCache_(relativeUrl: string): void;
        proxyCallTo_(methodName: string, passedArguments: any): any;
    }

    interface Matchers<T> {
        /**
         * Check if DOM element has class.
         *
         * @param className Name of the class to check.
         *
         * @example
         * // returns true
         * expect($('<div class="some-class"></div>')).toHaveClass("some-class")
         */
        toHaveClass(className: string): boolean;

        /**
         * Check if DOM element has the given CSS properties.
         *
         * @param css Object containing the properties (and values) to check.
         *
         * @example
         * // returns true
         * expect($('<div style="display: none; margin: 10px;"></div>')).toHaveCss({display: "none", margin: "10px"})
         *
         * @example
         * // returns true
         * expect($('<div style="display: none; margin: 10px;"></div>')).toHaveCss({margin: "10px"})
         */
        toHaveCss(css: any): boolean;

        /**
         * Checks if DOM element is visible.
         * Elements are considered visible if they consume space in the document. Visible elements have a width or height that is greater than zero.
         */
        toBeVisible(): boolean;
        /**
         * Check if DOM element is hidden.
         * Elements can be hidden for several reasons:
         * - They have a CSS display value of none ;
         * - They are form elements with type equal to hidden.
         * - Their width and height are explicitly set to 0.
         * - An ancestor element is hidden, so the element is not shown on the page.
         */
        toBeHidden(): boolean;

        /**
         * Only for tags that have checked attribute
         *
         * @example
         * // returns true
         * expect($('<option selected="selected"></option>')).toBeSelected()
         */
        toBeSelected(): boolean;

        /**
         * Only for tags that have checked attribute
         * @example
         * // returns true
         * expect($('<input type="checkbox" checked="checked"/>')).toBeChecked()
         */
        toBeChecked(): boolean;

        /**
         * Checks for child DOM elements or text
         */
        toBeEmpty(): boolean;

        /**
         * Checks if element exists in or out the DOM.
         */
        toExist(): boolean;

        /**
         * Checks if array has the given length.
         *
         * @param length Expected length
         */
        toHaveLength(length: number): boolean;

        /**
         * Check if DOM element contains an attribute and, optionally, if the value of the attribute is equal to the expected one.
         *
         * @param attributeName Name of the attribute to check
         * @param expectedAttributeValue Expected attribute value
         */
        toHaveAttr(attributeName: string, expectedAttributeValue? : any): boolean;

        /**
         * Check if DOM element contains a property and, optionally, if the value of the property is equal to the expected one.
         *
         * @param propertyName Property name to check
         * @param expectedPropertyValue Expected property value
         */
        toHaveProp(propertyName: string, expectedPropertyValue? : any): boolean;

        /**
         * Check if DOM element has the given Id
         *
         * @param Id Expected identifier
         */
        toHaveId(id: string): boolean;

        /**
         * Check if DOM element has the specified HTML.
         *
         * @example
         * // returns true
         * expect($('<div><span></span></div>')).toHaveHtml('<span></span>')
         */
        toHaveHtml(html: string): boolean;

        /**
         * Check if DOM element contains the specified HTML.
         *
         * @example
         * // returns true
         * expect($('<div><ul></ul><h1>header</h1></div>')).toContainHtml('<ul></ul>')
         */
        toContainHtml(html: string): boolean;

        /**
         * Check if DOM element has the given Text.
         * @param text Accepts a string or regular expression
         *
         * @example
         * // returns true
         * expect($('<div>some text</div>')).toHaveText('some text')
         */
        toHaveText(text: string): boolean;
        /**
         * Check if DOM element contains the specified text.
         *
         * @example
         * // returns true
         * expect($('<div><ul></ul><h1>header</h1></div>')).toContainText('header')
         */
        toContainText(text: string): boolean;

        /**
         * Check if DOM element has the given value.
         * This can only be applied for element on with jQuery val() can be called.
         *
         * @example
         * // returns true
         * expect($('<input type="text" value="some text"/>')).toHaveValue('some text')
         */
        toHaveValue(value : string): boolean;

        /**
         * Check if DOM element has the given data.
         * This can only be applied for element on with jQuery data(key) can be called.
         *
         */
        toHaveData(key : string, expectedValue : string): boolean;
        toBe(selector: T): boolean;

        /**
         * Check if DOM element is matched by the given selector.
         *
         * @example
         * // returns true
         * expect($('<div><span class="some-class"></span></div>')).toContain('some-class')
         */
        toContain(selector: any): boolean;

        /**
         * Check if DOM element exists inside the given parent element.
         *
         * @example
         * // returns true
         * expect($('<div><span class="some-class"></span></div>')).toContainElement('span.some-class')
         */
        toContainElement(selector: string): boolean;

        /**
         * Check to see if the set of matched elements matches the given selector
         *
         * @example
         * expect($('<span></span>').addClass('js-something')).toBeMatchedBy('.js-something')
         *
         * @returns {Boolean} true if DOM contains the element
         */
        toBeMatchedBy(selector: string): boolean;

        /**
         * Only for tags that have disabled attribute
         * @example
         * // returns true
         * expect('<input type="submit" disabled="disabled"/>').toBeDisabled()
         */
        toBeDisabled(): boolean;

        /**
         * Check if DOM element is focused
         * @example
         * // returns true
         * expect($('<input type="text" />').focus()).toBeFocused()
         */
        toBeFocused(): boolean;

        /**
         * Checks if DOM element handles event.
         *
         * @example
         * // returns true
         * expect($form).toHandle("submit")
         */
        toHandle(eventName: string): boolean;

        /**
         * Assigns a callback to an event of the DOM element.
         *
         * @param eventName Name of the event to assign the callback to.
         * @param eventHandler Callback function to be assigned.
         *
         * @example
         * expect($form).toHandleWith("submit", yourSubmitCallback)
         */
        toHandleWith(eventName: string, eventHandler : JQueryCallback): boolean;

        /**
         * Checks if event was triggered.
         */
        toHaveBeenTriggered(): boolean;

        /**
         * Checks if the event has been triggered on selector.
         * @param selector Selector that should have triggered the event.
         */
        toHaveBeenTriggeredOn(selector: string): boolean;

        /**
         * Checks if the event has been triggered on selector.
         * @param selector Selector that should have triggered the event.
         * @param args Extra arguments to be passed to jQuery events functions.
         */
        toHaveBeenTriggeredOnAndWith(selector: string, ...args: any[]): boolean;

        /**
         * Checks if event propagation has been prevented.
         */
        toHaveBeenPrevented(): boolean;

        /**
         * Checks if event propagation has been prevented on element with selector.
         *
         * @param selector Selector that should have prevented the event.
         */
        toHaveBeenPreventedOn(selector: string): boolean;

        /**
         * Checks if event propagation has been stopped.
         *
         * @example
         * // returns true
         * var spyEvent = spyOnEvent('#some_element', 'click')
         * $('#some_element').click(function (event){event.stopPropagation();})
         * $('#some_element').click()
         * expect(spyEvent).toHaveBeenStopped()
         */
        toHaveBeenStopped(): boolean;

        /**
         * Checks if event propagation has been stopped by an element with the given selector.
         * @param selector Selector of the element that should have stopped the event propagation.
         *
         * @example
         * // returns true
         * $('#some_element').click(function (event){event.stopPropagation();})
         * $('#some_element').click()
         * expect('click').toHaveBeenStoppedOn('#some_element')
         */
        toHaveBeenStoppedOn(selector: string): boolean;

        /**
         * Checks to see if the matched element is attached to the DOM.
         * @example
         * expect($('#id-name')[0]).toBeInDOM()
         */
        toBeInDOM(): boolean;

    }

    interface JQueryEventSpy {
        selector: string;
        eventName: string;
        handler(eventObject: JQueryEventObject): any;
        reset(): any;
    }

    interface JasmineJQuery {
        browserTagCaseIndependentHtml(html: string): string;
        elementToString(element: JQuery): string;
        matchersClass: any;
        events: JasmineJQueryEvents;
    }

    interface JasmineJQueryEvents {
        spyOn(selector: string, eventName: string): JQueryEventSpy;
        args(selector: string, eventName: string): any;
        wasTriggered(selector: string, eventName: string): boolean;
        wasTriggeredWith(selector: string, eventName: string, expectedArgs: any, env: jasmine.Env): boolean;
        wasPrevented(selector: string, eventName: string): boolean;
        wasStopped(selector: string, eventName: string): boolean;
        cleanUp() : void;
    }

    var JQuery: JasmineJQuery;
}
