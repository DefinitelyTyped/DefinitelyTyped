// Type definitions for EaselJS 0.7.0, TweenJS 0.5.0, SoundJS 0.5.0, PreloadJS 0.4.0
// Project: http://www.createjs.com/#!/EaselJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// Common class and methods for CreateJS.
// Library documentation : http://www.createjs.com/Docs/EaselJS/modules/EaselJS.html
// Library documentation : http://www.createjs.com/Docs/PreloadJS/modules/PreloadJS.html
// Library documentation : http://www.createjs.com/Docs/SoundJS/modules/SoundJS.html
// Library documentation : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html


declare module createjs {
    export class Event {
        constructor(type: string, bubbles: boolean, cancelable: boolean);

        // properties
        bubbles: boolean;
        cancelable: boolean;
        currentTarget: Object;
        defaultPrevented: boolean;
        eventPhase: number;
        immediatePropagationStopped: boolean;
        propagationStopped: boolean;
        removed: boolean;
        target: Object;
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
        params: any[];
        paused: boolean;
        progress: number;
        rawResult: Object;
        result: Object;
        runTime: number;
        src: string;
        time: number;
        total: number;
		
        // methods
        clone(): Event;
        preventDefault(): void;
        remove(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        toString(): string;
    }

    export class EventDispatcher {
        constructor();

        // methods
        addEventListener(type: string, listener: (eventObj: Object) => any, useCapture?: boolean): any;
        addEventListener(type: string, listener: Object, useCapture?: boolean): any;
        dispatchEvent(eventObj: Object, target?: Object): boolean;
        dispatchEvent(eventObj: string, target?: Object): boolean;
        dispatchEvent(eventObj: Event, target?: Object): boolean;
        hasEventListener(type: string): boolean;
        static initialize(target: Object): void;
        off(type: string, listener: (eventObj: Object) => any, useCapture?: boolean): void;
        off(type: string, listener: Object, useCapture?: boolean): void;
        on(type: string, listener: (eventObj: Object) => any, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        on(type: string, listener: Object, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        removeAllEventListeners(type?: string): void;
        removeEventListener(type: string, listener: (eventObj: Object) => any, useCapture?: boolean): void;
        removeEventListener(type: string, listener: Object, useCapture?: boolean): void;
        toString(): string;
    }
    
    export function indexOf(array: Array, searchElement: Object): number;
    export function proxy(method: Function, scope: Object, ...arg: any[]): Function;
}
