// Type definitions for Browser Harness
// Project: https://github.com/scriby/browser-harness
// Definitions by: Chris Scribner <https://github.com/scriby>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "browser-harness" {
    import _events = require('events');

    interface HarnessEvents extends _events.EventEmitter {
        once(event: string, listener: (driver: Driver) => void): _events.EventEmitter;
        once(event: 'ready', listener: (driver: Driver) => void): _events.EventEmitter;

        on(event: string, listener: (driver: Driver) => void): _events.EventEmitter;
        on(event: 'ready', listener: (driver: Driver) => void): _events.EventEmitter;
    }

    interface DriverEvents extends _events.EventEmitter {
        once(event: string, listener: (text: string) => void): _events.EventEmitter;
        once(event: 'console.log', listener: (text: string) => void): _events.EventEmitter;
        once(event: 'console.warn', listener: (text: string) => void): _events.EventEmitter;
        once(event: 'console.error', listener: (text: string) => void): _events.EventEmitter;
        once(event: 'window.onerror', listener: (text: string) => void): _events.EventEmitter;

        on(event: string, listener: (text: string) => void): _events.EventEmitter;
        on(event: 'console.log', listener: (text: string) => void): _events.EventEmitter;
        on(event: 'console.warn', listener: (text: string) => void): _events.EventEmitter;
        on(event: 'console.error', listener: (text: string) => void): _events.EventEmitter;
        on(event: 'window.onerror', listener: (text: string) => void): _events.EventEmitter;
    }

    export interface Driver {
        exec(args: { func: Function; args?: any[]}, callback?: Function) : any;
        exec(func: Function, callback?: Function) : any;

        setUrl(url: string, callback?: Function);

        waitFor(args: { condition: Function; exec?: Function; timeoutMS?: number }, callback?: Function);
        waitFor(condition: Function, callback?: Function);

        findElement(selector: string, callback?: (err: Error, element: ElementProxy) => void): ElementProxy;
        findElements(selector: string, callback?: (err: Error, elements: ElementProxy) => void): ElementProxy;

        findVisible(selector: string, callback?: (err: Error, element: ElementProxy) => void): ElementProxy;
        findVisibles(selector: string, callback?: (err: Error, elements: ElementProxy) => void): ElementProxy;
        find(selector: string, callback?: (err: Error, elements: ElementProxy) => void): ElementProxy;

        events: DriverEvents;
    }

    export interface ElementProxy {
        click(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        focus(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        blur(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        val(value?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        attr(name: string, value?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        removeAttr(name: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        prop(name: string, value?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        removeProp(name: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        html(value?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        text(value?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        hasClass(className: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        addClass(className: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        removeClass(className: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        toggleClass(className: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy

        trigger(event: string, extraParameters?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        triggerHandler(event: string, extraParameters?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy

        css(name: string, value?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        height(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        innerHeight(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        outerHeight(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        width(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        innerWidth(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        outerWidth(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        offset(value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        position(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        scrollLeft(value?: number, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        scrollTop(value?: number, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy

        hide(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        show(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        toggle(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy

        children(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        closest(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        contents(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        find(selector: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        findElements(selector: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        findElement(selector: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        findVisible(selector: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        findVisibles(selector: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        isActionable(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        first(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        has(arg: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        is(arg: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        last(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        next(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        nextAll(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        nextUntil(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        offsetParent(callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        parent(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        parents(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        parentsUntil(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        prev(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        prevAll(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        prevUntil(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        siblings(selector?: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy


        data(name: string, value?: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
        removeData(name: string, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy

        filter(selector: any, callback?: (err: Error, element: ElementProxy) => void) : ElementProxy
    }

    export class Browser {
        //constructor(args: { type: string; location?: string; args?: string[] });
        constructor(args: { type: string; location?: string; args?: any; });

        open(harnessUrl: string, serverUrl?: string);
        close();
    }

    export function listen(port: number, callback?: Function)
    export var events: HarnessEvents;
    export var config: {
        timeoutMS: number;
        retryMS: number;
    };
}