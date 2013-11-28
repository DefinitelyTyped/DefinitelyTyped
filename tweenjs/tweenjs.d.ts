// Type definitions for TweenJS 0.5.0
// Project: http://www.createjs.com/#!/TweenJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Library documentation : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html

/// <reference path="../createjs/createjs.d.ts" />

declare module createjs {
    export class CSSPlugin {
        constructor();

        // properties
        static cssSuffixMap: Object;

        // methods
        static install(): void;
    }

    export class Ease {
        // methods
        static backIn(t: number): number;
        static backInOut(t: number): number;
        static backOut(t: number): number;
        static bounceIn(t: number): number;
        static bounceInOut(t: number): number;
        static bounceOut(t: number): number;
        static circIn(t: number): number;
        static circInOut(t: number): number;
        static circOut(t: number): number;
        static cubicIn(t: number): number;
        static cubicInOut(t: number): number;
        static cubicOut(t: number): number;
        static elasticIn(t: number): number;
        static elasticInOut(t: number): number;
        static elasticOut(t: number): number;
        static get(amount: number): (t: number) => number;
        static getBackIn(amount: number): (t: number) => number;
        static getBackInOut(amount: number): (t: number) => number;
        static getBackOut(amount: number): (t: number) => number;
        static getElasticIn(amplitude: number, period: number): (t: number) => number;
        static getElasticInOut(amplitude: number, period: number): (t: number) => number;
        static getElasticOut(amplitude: number, period: number): (t: number) => number;
        static getPowIn(pow: number): (t: number) => number;
        static getPowInOut(pow: number): (t: number) => number;
        static getPowOut(pow: number): (t: number) => number;
        static linear(t: number): number;
        static none(t: number): number;    // same as linear
        static quadIn(t: number): number;
        static quadInOut(t: number): number;
        static quadOut(t: number): number;
        static quartIn(t: number): number;
        static quartInOut(t: number): number;
        static quartOut(t: number): number;
        static quintIn(t: number): number;
        static quintInOut(t: number): number;
        static quintOut(t: number): number;
        static sineIn(t: number): number;
        static sineInOut(t: number): number;
        static sineOut(t: number): number;
    }
    
    export class MotionGuidePlugin {
        constructor();

        //methods
        static install(): Object;
    }

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

    export class Timeline extends EventDispatcher {
        constructor (tweens: Tween[], labels: Object, props: Object);

        // properties
        duration: number;
        ignoreGlobalPause: boolean;
        loop: boolean;
        onChange: Function; // deprecated
        position: Object;

        // methods
        addLabel(label: string, position: number): void;
        addTween(...tween: Tween[]): void;
		getCurrentLabel(): string;
		getLabels(): Object[];
        gotoAndPlay(positionOrLabel: string): void;
        gotoAndPlay(positionOrLabel: number): void;
        gotoAndStop(positionOrLabel: string): void;
        gotoAndStop(positionOrLabel: number): void;
        removeTween(...tween: Tween[]): void;
        resolve(positionOrLabel: string): number;
        resolve(positionOrLabel: number): number;
        setLabels(o: Object): void;
        setPaused(value: boolean): void;
        setPosition(value: number, actionsMode?: number): boolean;
        tick(delta: number): void;
        toString(): string;
        updateDuration(): void;

        // events
        /*
        change: (instance: Timeline) => any;
        */
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
        position: Object;
        static REVERSE: number;
        target: Object;

        // methods
        call(callback: (...params: any[]) => any, params?: any[], scope?: Object): Tween;
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
        toString(): string;
        wait(duration: number, passive?: boolean): Tween;

        // events
        /*
        change: (event: any) => any;
        */
    }

    export class TweenJS {
        // properties
        static buildDate: string;
        static version: string;
    }
}
