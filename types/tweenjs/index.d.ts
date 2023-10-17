/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Library documentation : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html

/// <reference types="createjs-lib" />

declare namespace createjs {
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
        static none: (amount: number) => number; // same as linear
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

    export type TweenProps = {
        useTicks?: boolean | undefined;
        ignoreGlobalPause?: boolean | undefined;
        loop?: number | undefined;
        reversed?: boolean | undefined;
        bounce?: boolean | undefined;
        timeScale?: number | undefined;
        pluginData?: any;
        paused?: boolean | undefined;
        position?: number | undefined;
        onChange?: ((e: Event) => void) | undefined;
        onComplete?: ((e: Event) => void) | undefined;
        override?: boolean | undefined;
    };

    export type TimelineProps = {
        useTicks?: boolean | undefined;
        ignoreGlobalPause?: boolean | undefined;
        loop?: number | undefined;
        reversed?: boolean | undefined;
        bounce?: boolean | undefined;
        timeScale?: number | undefined;
        paused?: boolean | undefined;
        position?: number | undefined;
        onChange?: ((e: Event) => void) | undefined;
        onComplete?: ((e: Event) => void) | undefined;
    };

    export class TweenStep {
        constructor(prev: TweenStep, t: number, d: number, props: TweenProps, ease: Function, passive: boolean);

        next: TweenStep;
        prev: TweenStep;
        t: number;
        d: number;
        props: TweenProps;
        ease: Function;
        passive: boolean;
        index: number;
    }

    export class TweenAction {
        constructor(prev: TweenAction, t: number, scope: any, funct: Function, params: any[]);

        next: TweenAction;
        prev: TweenAction;
        t: number;
        d: number;
        scope: any;
        funct: Function;
        params: any[];
    }

    export class MotionGuidePlugin {
        // properties
        static priority: number;
        static ID: string;

        // methods
        static install(): Object;
        static init(tween: Tween, prop: string, value: any): void;
        static step(tween: Tween, step: TweenStep, props: TweenProps): void;
        static change(tween: Tween, step: TweenStep, prop: string, value: any, ratio: number, end: boolean): void;
        static debug(guideData: any, ctx: any, higlight: number[]): void;
    }

    export class Timeline extends AbstractTween {
        constructor(props?: TimelineProps);

        // properties
        tweens: Tween[];

        // method
        addTween(tween: Tween): Tween;
        removeTween(tween: Tween): boolean;
        updateDuration(): void;
    }

    export class AbstractTween extends EventDispatcher {
        constructor(props?: TweenProps);

        // properties
        ignoreGlobalPause: boolean;
        loop: number;
        useTicks: boolean;
        reversed: boolean;
        bounce: boolean;
        timeScale: number;
        duration: number;
        position: number;
        rawPosition: number;

        paused: boolean;
        readonly currentLabel: string;

        // methods
        advance(delta: number, ignoreActions?: boolean): void;
        setPosition(
            rawPosition: number,
            ignoreActions?: boolean,
            jump?: boolean,
            callback?: (tween: AbstractTween) => void,
        ): void;
        calculatePosition(rawPosition: number): void;
        getLabels(): string[];
        setLabels(labels: { [labelName: string]: number }[]): void;
        addLabel(label: string, position: number): void;
        gotoAndPlay(positionOrLabel: string | number): void;
        gotoAndStop(positionOrLabel: string | number): void;
        resolve(positionOrLabel: string | number): number;
        toString(): string;
    }

    export class Tween extends AbstractTween {
        constructor(target: any, props?: TweenProps);

        static IGNORE: any;

        // properties
        target: any;
        pluginData: any;
        passive: boolean;

        // methods
        static get(target: any, props?: TweenProps): Tween;
        static tick(delta: number, paused: boolean): void;
        static handleEvent(e: Event): void;
        static removeTweens(target: any): void;
        static removeAllTweens(): void;
        static hasActiveTweens(target: any): boolean;

        wait(duration: number, passive?: boolean): Tween;
        to(props: any, duration?: number, ease?: Function): Tween;
        label(name: string): Tween;
        call(callback: (...params: any[]) => void, params?: any[], scope?: any): Tween;
        set(props: any, target?: any): Tween;
        play(tween?: Tween): Tween;
        pause(tween?: Tween): Tween;
    }

    export class TweenJS {
        // properties
        static buildDate: string;
        static version: string;
    }
}
