// Type definitions for Jasmine-JQuery 1.5.8
// Project: https://github.com/velesin/jasmine-jquery
// Definitions by: Gregor Stamac <https://github.com/gstamac/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare function readFixtures(...uls: string[]): string;
declare function preloadFixtures(...uls: string[]);
declare function loadFixtures(...uls: string[]);
declare function appendLoadFixtures(...uls: string[]);
declare function setFixtures(html: string): string;
declare function appendSetFixtures();
declare function sandbox(attributes): JQuery;
declare function spyOnEvent(selector: JQuery, eventName: string): any;
declare function preloadStyleFixtures();
declare function loadStyleFixtures();
declare function appendLoadStyleFixtures();
declare function setStyleFixtures(html: string);
declare function appendSetStyleFixtures(html: string);
declare function loadJSONFixtures(): jasmine.JSONFixtures;
declare function getJSONFixture(url: string): any;

declare module jasmine {
    function spiedEventsKey(selector: JQuery, eventName: string): string;

    function getFixtures(): Fixtures;
    function getStyleFixtures(): StyleFixtures;
    function getJSONFixtures(): JSONFixtures;

    interface Fixtures {
        fixturesPath: string;
        set(html: string): string;
        appendSet(html: string);
        preload(...uls: string[]);
        load(...uls: string[]);
        appendLoad(...uls: string[]);
        read(...uls: string[]): string;
        clearCache();
        cleanUp();
        sandbox(attributes): JQuery;
        createContainer_(html: string);
        addToContainer_(html: string);
        getFixtureHtml_(url: string): string;
        loadFixtureIntoCache_(relativeUrl: string);
        makeFixtureUrl_(relativeUrl: string): string;
        proxyCallTo_(methodName, passedArguments): any;
    }

    interface StyleFixtures {
        set(html: string): string;
        appendSet(html: string);
        preload(...uls: string[]);
        load(...uls: string[]);
        appendLoad(...uls: string[]);
        read_(...uls: string[]): string;
        clearCache();
        cleanUp();
        createStyle_(html: string);
        getFixtureHtml_(url: string): string;
        loadFixtureIntoCache_(relativeUrl: string);
        makeFixtureUrl_(relativeUrl: string): string;
        proxyCallTo_(methodName, passedArguments): any;
    }

    interface JSONFixtures {
        load(...uls: string[]);
        read(...uls: string[]): string;
        clearCache();
        getFixtureData_(url: string): any;
        loadFixtureIntoCache_(relativeUrl: string);
        proxyCallTo_(methodName, passedArguments): any;
    }

    var Fixtures: Fixtures;
    var StyleFixtures: StyleFixtures;
    var JSONFixtures: JSONFixtures;

    interface Matchers {
        toHaveClass(className: string): boolean;
        toHaveCss(css): boolean;
        toBeVisible(): boolean;
        toBeHidden(): boolean;
        toBeSelected(): boolean;
        toBeChecked(): boolean;
        toBeEmpty(): boolean;
        toExist(): boolean;
        toHaveLength(length: number): boolean;
        toHaveAttr(attributeName: string, expectedAttributeValue): boolean;
        toHaveProp(propertyName: string, expectedPropertyValue): boolean;
        toHaveId(id: string): boolean;
        toHaveHtml(html: string): boolean;
        //toContainHtml(html: string): boolean;
        toHaveText(text: string): boolean;
        //toContainText(text: string): boolean;
        toHaveValue(value): boolean;
        toHaveData(key, expectedValue): boolean;
        toBe(selector: JQuery): boolean;
        toContain(selector: JQuery): boolean;
        toBeMatchedBy(selector: JQuery): boolean;
        toBeDisabled(selector: JQuery): boolean;
        toBeFocused(selector: JQuery): boolean;
        toHandle(event): boolean;
        toHandleWith(eventName: string, eventHandler): boolean;

        toHaveBeenTriggeredOn(selector: JQuery): boolean;
        toHaveBeenTriggered(): boolean;
        toHaveBeenTriggeredOnAndWith(...args: any[]): boolean;
        toHaveBeenPreventedOn(selector: JQuery): boolean;
        toHaveBeenPrevented(): boolean;
        toHaveBeenStoppedOn(selector: JQuery): boolean;
        toHaveBeenStopped(): boolean;
    }

    interface JasmineJQuery {
        browserTagCaseIndependentHtml(html: string): string;
        elementToString(element: JQuery): string;
        matchersClass: any;
    }

    var JQuery: JasmineJQuery;
}
