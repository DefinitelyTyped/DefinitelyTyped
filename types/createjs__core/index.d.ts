// Type definitions for @createjs/core 2.0.0-beta1
// Project: https://github.com/CreateJS/Core (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Yusuke Sakurai <https://github.com/keroxp>, Pedro Ferreira <https://bitbucket.org/drk4>, Chris Smith <https://github.com/evilangelist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export class Event {
    constructor(type: string, bubbles: boolean, cancelable: boolean);

    // properties
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: any; // It is 'Object' type officially, but 'any' is easier to use.
    defaultPrevented: boolean;
    eventPhase: number;
    immediatePropagationStopped: boolean;
    propagationStopped: boolean;
    removed: boolean;
    target: any; // It is 'Object' type officially, but 'any' is easier to use.
    timeStamp: number;
    type: string;

    // other event payloads
    data: any;
    delta: number;
    error: string;
    id: string;
    item: any;
    loaded: number;
    name: string;
    next: string;
    params: any;
    paused: boolean;
    progress: number;
    rawResult: any;
    result: any;
    runTime: number;
    src: string;
    time: number;
    total: number;

    // methods
    clone(): Event;

    preventDefault(): void;

    remove(): void;

    set(props: Object): Event;

    stopImmediatePropagation(): void;

    stopPropagation(): void;

    toString(): string;
}

export class EventDispatcher {
    constructor();

    // methods
    addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
    addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
    addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
    addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;

    dispatchEvent(eventObj: Object, target?: Object): boolean;
    dispatchEvent(eventObj: string, target?: Object): boolean;
    dispatchEvent(eventObj: Event, target?: Object): boolean;

    hasEventListener(type: string): boolean;

    static initialize(target: Object): void;

    off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
    off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    off(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
    off(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
    off(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
    on(type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
    on(type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
    on(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
    on(type: string, listener: { handleEvent: (eventObj: Object) => void; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;

    removeAllEventListeners(type?: string): void;

    removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
    removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
    removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
    toString(): string;

    willTrigger(type: string): boolean;
}

export function extend(subclass: () => any, superclass: () => any): () => any;     // returns the subclass prototype
export function indexOf(array: any[], searchElement: Object): number;

export function promote(subclass: () => any, prefix: string): () => any;

export function proxy(method: (eventObj: Object) => boolean, scope: Object, ...arg: any[]): (eventObj: Object) => any;
export function proxy(method: (eventObj: Object) => void, scope: Object, ...arg: any[]): (eventObj: Object) => any;
export function proxy(method: { handleEvent: (eventObj: Object) => boolean; }, scope: Object, ...arg: any[]): (eventObj: Object) => any;
export function proxy(method: { handleEvent: (eventObj: Object) => void; }, scope: Object, ...arg: any[]): (eventObj: Object) => any;
