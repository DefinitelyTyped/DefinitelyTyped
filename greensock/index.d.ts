// Type definitions for GreenSock Animation Platform 1.15.1
// Project: http://www.greensock.com/get-started-js/
// Definitions by: Robert S <https://github.com/codebelt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JavaScript Docs http://api.greensock.com/js/
// Version 1.15.1 (TypeScript 1.4)

interface IDispatcher {
    addEventListener(type:string, callback:Function, scope?:Object, useParam?:boolean, priority?:number):void;
    removeEventListener(type:string, callback:Function):void;
}

declare type Tween = TweenLite | TweenMax;
declare type Timeline = SimpleTimeline | TimelineLite | TimelineMax;
declare type TweenConfig = {
    [tweenProp: string]: any;
    delay?: number;
    ease?: Ease;
    repeat?: number;
    repeatDelay?: number;
    yoyo?: boolean;
    paused?: boolean;
    overwrite?: string|number;
    onComplete?: Function;
    immediateRender?: boolean;
    onCompleteParams?: any[];
    onCompleteScope?: Object;
    onRepeat?: Function;
    onRepeatScope?: Object;
    onReverseComplete?: Function;
    onReverseCompleteParams?: any[];
    onReverseCompleteScope?: Object;
    onStart?: Function;
    onStartParams?: any[];
    onStartScope?: Object;
    onUpdate?: Function;
    onUpdateParams?: any[];
    onUpdateScope?: Object;
    startAt?: Object;
    useFrames?: boolean;
    lazy?: boolean;
    onOverwrite?: Function;
    autoCSS?: boolean;
    callbackScope?: Object;
}
    
//com.greensock.core
declare class Animation {
    static ticker: IDispatcher;
    data: any;
    timeline: SimpleTimeline;
    vars: Object;

    constructor(duration?: number, vars?: Object);

    delay(): number;
    delay(value: number): Animation;
    duration(): number;
    duration(value: number): Animation;
    eventCallback(type: string): Function;
    eventCallback(type: string, callback: Function, params?: any[], scope?: any): Animation;
    invalidate(): Animation;
    isActive(): boolean;
    kill(vars?: Object, target?: Object): Animation;
    pause(atTime?: any, suppressEvents?: boolean): Animation;
    paused(): boolean;
    paused(value: boolean): Animation;
    play(from?: any, suppressEvents?: boolean): Animation;
    progress(): number;
    progress(value: number, supressEvents?: boolean): Animation;
    restart(includeDelay?: boolean, suppressEvents?: boolean): Animation;
    resume(from?: any, suppressEvents?: boolean): Animation;
    reverse(from?: any, suppressEvents?: boolean): Animation;
    reversed(): boolean;
    reversed(value: boolean): Animation;
    seek(time: any, suppressEvents?: boolean): Animation;
    startTime(): number;
    startTime(value: number): Animation;
    time(): number;
    time(value: number, suppressEvents?: boolean): Animation;
    timeScale(): number;
    timeScale(value: number): Animation;
    totalDuration(): number;
    totalDuration(value: number): Animation;
    totalProgress(): number;
    totalProgress(value: number): Animation;
    totalTime(): number;
    totalTime(time: number, suppressEvents?: boolean): Animation;
}

declare class SimpleTimeline extends Animation {
    autoRemoveChildren: boolean;
    smoothChildTiming: boolean;

    constructor(vars?: Object);

    add(value: any, position?: any, align?: string, stagger?: number): SimpleTimeline;
    render(time: number, suppressEvents?: boolean, force?: boolean): void;
}

//com.greensock
declare class TweenLite extends Animation {
    static defaultEase: Ease;
    static defaultOverwrite: string;
    static selector: any;
    target: Object;

    constructor(target: Object, duration: number, vars: Object);

    static delayedCall(delay: number, callback: Function, params?: any[], scope?: any, useFrames?: boolean): TweenLite;
    endTime(includeRepeats?: boolean): number;
    static from(target: Object | Object[], duration: number, vars: Object): TweenLite;
    static fromTo(target: Object | Object[], duration: number, fromVars: Object, toVars: Object): TweenLite;
    static getTweensOf(target: Object, onlyActive: boolean): Tween[];
    static killDelayedCallsTo(func: Function): void;
    static killTweensOf(target: Object, onlyActive?: boolean, vars?: Object): void;
    static lagSmoothing(threshold: number, adjustedLag: number): void;
    static set(target: Object, vars: Object): TweenLite;
    static to(target: Object, duration: number, vars: TweenConfig): TweenLite;
}

declare class TweenMax extends TweenLite {
    constructor(target: Object, duration: number, vars: Object);

    static delayedCall(delay: number, callback: Function, params?: any[], scope?: Object, useFrames?: boolean): TweenMax;
    static from(target: Object, duration: number, vars: Object): TweenMax;
    static fromTo(target: Object, duration: number, fromVars: Object, toVars: Object): TweenMax;
    static getAllTweens(includeTimelines?: boolean): Tween[];
    static getTweensOf(target: Object): Tween[];
    static isTweening(target: Object): boolean;
    static killAll(complete?: boolean, tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;
    static killChildTweensOf(parent: any, complete?: boolean): void;
    static killDelayedCallsTo(func: Function): void;
    static killTweensOf(target: Object, vars?: Object): void;
    static pauseAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;
    repeat(): number;
    repeat(value: number): TweenMax;
    repeatDelay(): number;
    repeatDelay(value: number): TweenMax;
    static resumeAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;
    static set(target: Object, vars: Object): TweenMax;
    static staggerFrom(targets: any, duration: number, vars: Object, stagger: number, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any): any[];
    static staggerFromTo(targets: any, duration: number, fromVars: Object, toVars: Object, stagger: number, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any): any[];
    static staggerTo(targets: any, duration: number, vars: Object, stagger: number, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any): any[];
    static to(target:Object, duration:number, vars:TweenConfig):TweenMax;
    updateTo(vars: Object, resetDuration?: boolean): TweenMax;
    yoyo(): boolean;
    yoyo(value?: boolean): TweenMax;
}

declare class TimelineLite extends SimpleTimeline {
    constructor(vars?: Object);

    add(value: any, position?: any, align?: string, stagger?: number): TimelineLite;
    addLabel(label: string, position: any): TimelineLite;
    addPause(position?: any, callback?: Function, params?: any[], scope?: any): TimelineLite;
    call(callback: Function, params?: any[], scope?: any, position?: any): TimelineLite;
    clear(labels?: boolean): TimelineLite;
    endTime(includeRepeats?: boolean): number;
    static exportRoot(vars?: Object, omitDelayedCalls?: boolean): TimelineLite;
    from(target: Object, duration: number, vars: Object, position?: any): TimelineLite;
    fromTo(target: Object, duration: number, fromVars: Object, toVars: Object, position?: any): TimelineLite;
    getChildren(nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number): (Tween | Timeline)[];
    getLabelTime(label: string): number;
    getTweensOf(target: Object, nested?: boolean): Tween[];
    recent(): Animation;
    remove(value: any): TimelineLite;
    removeLabel(label: string): any;
    set(target: Object, vars: Object, position?: any): TimelineLite;
    shiftChildren(amount: number, adjustLabels?: boolean, ignoreBeforeTime?: number): TimelineLite;
    staggerFrom(targets: any, duration: number, vars: Object, stagger?: number, position?: any, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteScope?: any): TimelineLite;
    staggerFromTo(targets: any, duration: number, fromVars: Object, toVars: Object, stagger?: number, position?: any, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any): TimelineLite;
    staggerTo(targets: any, duration: number, vars: Object, stagger: number, position?: any, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any): TimelineLite;
    to(target: Object, duration: number, vars: Object, position?: any): TimelineLite;
    usesFrames(): boolean;
}

declare class TimelineMax extends TimelineLite {
    constructor(vars?: Object);

    addCallback(callback: Function, position: any, params?: any[], scope?: any): TimelineMax;
    currentLabel(): string;
    currentLabel(value: string): TimelineMax;
    getActive(nested?: boolean, tweens?: boolean, timelines?: boolean): Tween | Timeline[];
    getLabelAfter(time: number): string;
    getLabelBefore(time: number): string;
    getLabelsArray(): any[];
    removeCallback(callback: Function, timeOrLabel?: any): TimelineMax;
    repeat(): number;
    repeat(value: number): TimelineMax;
    repeatDelay(): number;
    repeatDelay(value: number): TimelineMax;
    tweenFromTo(fromPosition: any, toPosition: any, vars?: Object): TweenLite;
    tweenTo(position: any, vars?: Object): TweenLite;
    yoyo(): boolean;
    yoyo(value: boolean): TimelineMax;
}

//com.greensock.easing
declare class Ease {
    constructor(func:Function, extraParams:any[], type:number, power:number);
    public getRatio(p: number): number;
}

declare class EaseLookup {
    public static find(name: string): Ease;
}

declare class Back extends Ease {
    public static easeIn: Back;
    public static easeInOut: Back;
    public static easeOut: Back;
    public config(overshoot: number): Elastic;

}
declare class Bounce extends Ease {
    public static easeIn: Bounce;
    public static easeInOut: Bounce;
    public static easeOut: Bounce;
}
declare class Circ extends Ease {
    public static easeIn: Circ;
    public static easeInOut: Circ;
    public static easeOut: Circ;
}
declare class Cubic extends Ease {
    public static easeIn: Cubic;
    public static easeInOut: Cubic;
    public static easeOut: Cubic;
}

declare class Elastic extends Ease {
    public static easeIn: Elastic;
    public static easeInOut: Elastic;
    public static easeOut: Elastic;
    public config(amplitude: number, period: number): Elastic;
}

declare class Expo extends Ease {
    public static easeIn: Expo;
    public static easeInOut: Expo;
    public static easeOut: Expo;
}

declare class Linear extends Ease {
    public static ease: Linear;
    public static easeIn: Linear;
    public static easeInOut: Linear;
    public static easeNone: Linear;
    public static easeOut: Linear;
}

declare class Quad extends Ease {
    public static easeIn: Quad;
    public static easeInOut: Quad;
    public static easeOut: Quad;
}

declare class Quart extends Ease {
    public static easeIn: Quart;
    public static easeInOut: Quart;
    public static easeOut: Quart;
}

declare class Quint extends Ease {
    public static easeIn: Quint;
    public static easeInOut: Quint;
    public static easeOut: Quint;
}

declare class Sine extends Ease {
    public static easeIn: Sine;
    public static easeInOut: Sine;
    public static easeOut: Sine;
}

declare class SlowMo extends Ease {
    public static ease: SlowMo;
    public config(linearRatio: number, power: number, yoyoMode: boolean): SlowMo;
}

declare class SteppedEase extends Ease {
    constructor(staps: number);
    public config(steps: number): SteppedEase;
}

declare type RoughEaseConfig = {
    clamp?: boolean;
    points?: number;
    randomize?: boolean;
    strength?: number;
    taper?: string; /* one of "in" | "out" | "both" | "none" */
    template?: Ease;
}

declare class RoughEase extends Ease {
    public static ease: RoughEase;
    constructor(vars: RoughEaseConfig);
    public config(steps: number): SteppedEase;
}

//com.greensock.plugins
interface BezierPlugin extends TweenPlugin {
    bezierThrough(values:any[], curviness?:number, quadratic?:boolean, correlate?:string, prepend?:Object, calcDifs?:boolean):Object;
    cubicToQuadratic(a:number, b:number, c:number, d:number):any[];
    quadraticToCubic(a:number, b:number, c:number):Object;
}
interface ColorPropsPlugin extends TweenPlugin {

}
interface CSSPlugin extends TweenPlugin {

}
interface CSSRulePlugin extends TweenPlugin {
    getRule(selector:string):Object;
}
interface EaselPlugin extends TweenPlugin {

}
interface RaphaelPlugin extends TweenPlugin {

}
interface RoundPropsPlugin extends TweenPlugin {

}
interface ScrollToPlugin extends TweenPlugin {

}
interface TweenPlugin {
    activate(plugins:any[]):boolean;
}

//com.greensock.easing
declare var Power0: typeof Linear;
declare var Power1: typeof Quad;
declare var Power2: typeof Cubic;
declare var Power3: typeof Quart;
declare var Power4: typeof Quint;
declare var Strong: typeof Quint;

//com.greensock.plugins
declare var BezierPlugin:BezierPlugin;
declare var ColorPropsPlugin:ColorPropsPlugin;
declare var CSSPlugin:CSSPlugin;
declare var CSSRulePlugin:CSSRulePlugin;
declare var EaselPlugin:EaselPlugin;
declare var RaphaelPlugin:RaphaelPlugin;
declare var RoundPropsPlugin:RoundPropsPlugin;
declare var ScrollToPlugin:ScrollToPlugin;
declare var TweenPlugin:TweenPlugin;
