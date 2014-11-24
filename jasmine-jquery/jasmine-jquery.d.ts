// Type definitions for Jasmine-JQuery 1.5.8
// Project: https://github.com/velesin/jasmine-jquery
// Definitions by: Gregor Stamac <https://github.com/gstamac/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jasmine/jasmine.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>

declare function sandbox(attributes?: any): string;

declare function readFixtures(...uls: string[]): string;
declare function preloadFixtures(...uls: string[]);
declare function loadFixtures(...uls: string[]);
declare function appendLoadFixtures(...uls: string[]);
declare function setFixtures(html: string): string;
declare function appendSetFixtures(html: string);

declare function preloadStyleFixtures(...uls: string[]);
declare function loadStyleFixtures(...uls: string[]);
declare function appendLoadStyleFixtures(...uls: string[]);
declare function setStyleFixtures(html: string);
declare function appendSetStyleFixtures(html: string);

declare function loadJSONFixtures(...uls: string[]): jasmine.JSONFixtures;
declare function getJSONFixture(url: string): any;

declare function spyOnEvent(selector: string, eventName: string): jasmine.JQueryEventSpy;

declare module jasmine {
    function spiedEventsKey(selector: JQuery, eventName: string): string;

    function getFixtures(): Fixtures;
    function getStyleFixtures(): StyleFixtures;
    function getJSONFixtures(): JSONFixtures;

    interface Fixtures {
        fixturesPath: string;
        containerId: string;
        set(html: string): string;
        appendSet(html: string);
        preload(...uls: string[]);
        load(...uls: string[]);
        appendLoad(...uls: string[]);
        read(...uls: string[]): string;
        clearCache();
        cleanUp();
        sandbox(attributes?: any): string;
        createContainer_(html: string);
        addToContainer_(html: string);
        getFixtureHtml_(url: string): string;
        loadFixtureIntoCache_(relativeUrl: string);
        makeFixtureUrl_(relativeUrl: string): string;
        proxyCallTo_(methodName: string, passedArguments): any;
    }

    interface StyleFixtures {
        fixturesPath: string;
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
        proxyCallTo_(methodName: string, passedArguments): any;
    }

    interface JSONFixtures {
        fixturesPath: string;
        load(...uls: string[]);
        read(...uls: string[]): string;
        clearCache();
        getFixtureData_(url: string): any;
        loadFixtureIntoCache_(relativeUrl: string);
        proxyCallTo_(methodName: string, passedArguments): any;
    }

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
        toHaveAttr(attributeName: string, expectedAttributeValue?): boolean;
        toHaveProp(propertyName: string, expectedPropertyValue?): boolean;
        toHaveId(id: string): boolean;
        toHaveHtml(html: string): boolean;
        //toContainHtml(html: string): boolean;
        toHaveText(text: string): boolean;
        //toContainText(text: string): boolean;
        toHaveValue(value): boolean;
        toHaveData(key, expectedValue): boolean;
        toBe(selector: JQuery): boolean;
        toContain(selector: JQuery): boolean;
        toBeMatchedBy(selector: string): boolean;
        toBeDisabled(): boolean;
        toBeFocused(): boolean;
        toHandle(event): boolean;
        toHandleWith(eventName: string, eventHandler): boolean;

        toHaveBeenTriggered(): boolean;
        toHaveBeenTriggeredOn(selector: string): boolean;
        toHaveBeenTriggeredOnAndWith(selector: string, ...args: any[]): boolean;
        toHaveBeenPrevented(): boolean;
        toHaveBeenPreventedOn(selector: string): boolean;
        toHaveBeenStopped(): boolean;
        toHaveBeenStoppedOn(selector: string): boolean;
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
        cleanUp();
    }

    var JQuery: JasmineJQuery;
}
