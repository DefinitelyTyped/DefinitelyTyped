// Type definitions for TweenJS 0.4
// Project: http://www.createjs.com/#!/TweenJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

module createjs {

	export class TweenJS {
    	// properties
    	version: string;
    	buildDate: string;
    }


    export class CSSPlugin {
        // properties
        static cssSuffixMap: Object;

        // methods
        static install(): void;
    }


    export class Ease {
        // methods
        static backIn(): number;
        static backInOut(): number;
        static backOut(): number;
        static bounceIn(amount: number): number;
        static bounceInOut(amount: number): number;
        static bounceOut(amount: number): number;
        static circIn(amount: number): number;
        static circInOut(amount: number): number;
        static circOut(amount: number): number;
        static cubicIn(): number;
        static cubicInOut(): number;
        static cubicOut(): number;
        static elasticIn(): number;
        static elasticInOut(): number;
        static elasticOut(): number;
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
        static linear(amount: number): number;
        static none(amount: number): number;    // same as linear
        static quadIn(): (amount: number) => number;
        static quadInOut(): (amount: number) => number;
        static quadOut(): (amount: number) => number;
        static quartIn(): (amount: number) => number;
        static quartInOut(): (amount: number) => number;
        static quartOut(): (amount: number) => number;
        static quintIn(): (amount: number) => number;
        static quintInOut(): (amount: number) => number;
        static quintOut(): (amount: number) => number;
        static sineIn(amount: number): number;
        static sineInOut(amount: number): number;
        static sineOut(amount: number): number;
    }


    export class Timeline {
        constructor (tweens: Tween[], labels: Object, props: Object);

        // properties
        duration: number;
        ignoreGlobalPause: bool;
        loop: bool;
        position: number;

        // methods
        addLabel(label: string, position: number): void;
        addTween(...tween: Tween[]): void;
        gotoAndPlay(positionOrLabel: string): void;
        gotoAndPlay(positionOrLabel: number): void;
        gotoAndStop(positionOrLabel: string): void;
        gotoAndStop(positionOrLabel: number): void;
        removeTween(...tween: Tween[]): void;
        resolve(positionOrLabel: string): number;
        resolve(positionOrLabel: number): number;
        setPaused(value: bool): void;
        setPosition(value: number, actionsMode?: number): void;
        tick(delta: number): void;
        toString(): string;
        updateDuration(): void;

        // events
        onChange: (instance: Timeline) => any;
    }


    export class Tween {
        constructor (target: Object, props: Object);

        // properties
        duration: number;
        static IGNORE: Object;
        ignoreGlobalPause: bool;
        loop: bool;
        static LOOP: number;
        static NONE: number;
        pluginData: Object;
        position: number;
        static REVERSE: number;
        target: Object;

        // methods
        call(callback: (tweenObject: Tween) => any, params?: any[], scope?: Object);    // when 'params' isn't given, the callback receives a tweenObject
        call(callback: (...params: any[]) => any, params?: any[], scope?: Object); // otherwise, it receives the params only
        static get(target, props: Object): Tween;
        static hasActiveTweens(target? ): void;
        static installPlugin(plugin: Object, properties: Object): void;
        pause(tween: Tween): void;
        play(tween: Tween): void;
        static removeTweens(target): void;
        set(props: Object, target? ): void;
        setPaused(value: bool): void;
        setPosition(value: number, actionsMode: number): void;
        static tick(delta: number, paused: bool): void;
        to(props: Object, duration?: number, ease?: (amount: number) => number): Tween;
        toString(): string;
        wait(duration: number): void;

        // events
        change: (event) => any;

		// EventDispatcher mixins
		addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
		addEventListener(type: string, listener: (eventObj: Object) => bool): Object;
		removeEventListener(type: string, listener: (eventObj: Function) => bool): void;
		removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
		removeAllEventListeners(type: string): void;
		dispatchEvent(eventObj: string, target: Object): bool;
		dispatchEvent(eventObj: Object, target: Object): bool;
		hasEventListener(type: string): bool;
    }


	export class MotionGuidePlugin {
		// properties
		static priority: number;

		//methods
		static install(): Object;

	}
}
