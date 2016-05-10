// Type definitions for TweenJS 0.6.0
// Project: http://www.createjs.com/#!/TweenJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>, Chris Smith <https://github.com/evilangelist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Library documentation : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html

/// <reference types="createjs-lib" />

declare namespace createjs {
    export class CSSPlugin {
        constructor();

        // properties
        static cssSuffixMap: Object;

        // methods
        static install(): void;
    }

    export class Ease {
        // methods
        static backIn: (amount: number) => number;
        static backInOut: (amount: number) => number;
        static backOut: (amount: number) => number;
        static bounceIn: (amount: number) => number;
        static bounceInOut: (amount: number) => number;
        static bounceOut: (amount: number) => number;
        static circIn: (amount: number) => number;
        static circInOut: (amount: number) => number;
        static circOut: (amount: number) => number;
        static cubicIn: (amount: number) => number;
        static cubicInOut: (amount: number) => number;
        static cubicOut: (amount: number) => number;
        static elasticIn: (amount: number) => number;
        static elasticInOut: (amount: number) => number;
        static elasticOut: (amount: number) => number;
        static get(amount: number): (amount: number) => number;
        static getBackIn(amount: number): (amount: number) => number;
        static getBackInOut(amount: number): (amount: number) => number;
        static getBackOut(amount: number): (amount: number) => number;
        static getElasticIn(amplitude: number, period: number): (amount: number) => number;
        static getElasticInOut(amplitude: number, period: number): (amount: number) => number;
        static getElasticOut(amplitude: number, period: number): (amount: number) => number;
        static getPowIn(pow: number): (amount: number) => number;
        static getPowInOut(pow: number): (amount: number) => number;
        static getPowOut(pow: number): (amount: number) => number;
        static linear: (amount: number) => number;
        static none: (amount: number) => number;    // same as linear
        static quadIn: (amount: number) => number;
        static quadInOut: (amount: number) => number;
        static quadOut: (amount: number) => number;
        static quartIn: (amount: number) => number;
        static quartInOut: (amount: number) => number;
        static quartOut: (amount: number) => number;
        static quintIn: (amount: number) => number;
        static quintInOut: (amount: number) => number;
        static quintOut: (amount: number) => number;
        static sineIn: (amount: number) => number;
        static sineInOut: (amount: number) => number;
        static sineOut: (amount: number) => number;
    }

    export class MotionGuidePlugin {
        constructor();

        //methods
        static install(): Object;
    }

    /*
        NOTE: It is commented out because it conflicts with SamplePlugin Class of PreloadJS.
              this class is mainly for documentation purposes.
        http://www.createjs.com/Docs/TweenJS/classes/SamplePlugin.html
    */
    /*
    export class SamplePlugin {
        constructor();

        // properties
        static priority: any;

        //methods
        static init(tween: Tween, prop: string, value: any): any;
        static step(tween: Tween, prop: string, startValue: any, injectProps: Object, endValue: any): void;
        static install(): void;
        static tween(tween: Tween, prop: string, value: any, startValues: Object, endValues: Object, ratio: number, wait: boolean, end: boolean): any;
    }
    */

    export class Timeline extends EventDispatcher {
        constructor (tweens: Tween[], labels: Object, props: Object);

        // properties
        duration: number;
        ignoreGlobalPause: boolean;
        loop: boolean;
        position: Object;

        // methods
        addLabel(label: string, position: number): void;
        addTween(...tween: Tween[]): void;
        getCurrentLabel(): string;
        getLabels(): Object[];
        gotoAndPlay(positionOrLabel: string | number): void;
        gotoAndStop(positionOrLabel: string | number): void;
        removeTween(...tween: Tween[]): void;
        resolve(positionOrLabel: string | number): number;
        setLabels(o: Object): void;
        setPaused(value: boolean): void;
        setPosition(value: number, actionsMode?: number): boolean;
        tick(delta: number): void;
        updateDuration(): void;
    }


    export class Tween extends EventDispatcher {
        constructor(target: Object, props?: Object, pluginData?: Object);

        // properties
        duration: number;
        static IGNORE: Object;
        ignoreGlobalPause: boolean;
        static LOOP: number;
        loop: boolean;
        static NONE: number;
        onChange: Function; // deprecated
        passive: boolean;
        pluginData: Object;
        position: number;
        static REVERSE: number;
        target: Object;

        // methods
        call(callback: (tweenObject: Tween) => any, params?: any[], scope?: Object): Tween;    // when 'params' isn't given, the callback receives a tweenObject
        call(callback: (...params: any[]) => any, params?: any[], scope?: Object): Tween; // otherwise, it receives the params only
        static get(target: Object, props?: Object, pluginData?: Object, override?: boolean): Tween;
        static hasActiveTweens(target?: Object): boolean;
        static installPlugin(plugin: Object, properties: any[]): void;
        pause(tween: Tween): Tween;
        play(tween: Tween): Tween;
        static removeAllTweens(): void;
        static removeTweens(target: Object): void;
        set(props: Object, target?: Object): Tween;
        setPaused(value: boolean): Tween;
        setPosition(value: number, actionsMode: number): boolean;
        static tick(delta: number, paused: boolean): void;
        tick(delta: number): void;
        to(props: Object, duration?: number, ease?: (t: number) => number): Tween;
        wait(duration: number, passive?: boolean): Tween;

    }

    export class TweenJS {
        // properties
        static buildDate: string;
        static version: string;
    }
}
