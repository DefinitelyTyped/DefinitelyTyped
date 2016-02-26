// Type definitions for GreenSock Animation Platform 1.15.1
// Project: http://www.greensock.com/get-started-js/
// Definitions by: Robert S <https://github.com/codebelt>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// JavaScript Docs http://api.greensock.com/js/
// Version 1.15.1 (TypeScript 1.4)

interface IDispatcher {
    addEventListener(type:string, callback:Function, scope?:Object, useParam?:boolean, priority?:number):void;
    removeEventListener(type:string, callback:Function):void;
}

declare type Tween = TweenLite | TweenMax;
declare type Timeline = SimpleTimeline | TimelineLite | TimelineMax;

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
    static to(target: Object, duration: number, vars: Object): TweenLite;
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
    static to(target:Object, duration:number, vars:Object):TweenMax;
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
    getChildren(nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number): Tween | Timeline[];
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
interface Back {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Bounce {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Circ {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Cubic {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Ease {
    getRatio(p:number):number;
}
interface EaseLookup {
    find(name:string):Ease;
}
interface Elastic {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Expo {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Linear {
    ease:Linear;
    easeIn:Linear;
    easeInOut:Linear;
    easeNone:Linear;
    easeOut:Linear;
}
interface Power0 {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Power1 {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Power2 {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Power3 {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Power4 {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Quad {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Quart {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Quint {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface Sine {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
}
interface SlowMo {
    ease:SlowMo;

    new (linearRatio:number, power:number, yoyoMode:boolean):SlowMo;
    config(linearRatio:number, power:number, yoyoMode:boolean):SlowMo;
    getRatio(p:number):number;
}
interface SteppedEase {
    config(steps:number):SteppedEase;
    getRatio(p:number):number;
}
interface Strong {
    easeIn:Ease;
    easeInOut:Ease;
    easeOut:Ease;
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
declare var Back:Back;
declare var Bounce:Bounce;
declare var Circ:Circ;
declare var Cubic:Cubic;
declare var Ease:Ease;
declare var EaseLookup:EaseLookup;
declare var Elastic:Elastic;
declare var Expo:Expo;
declare var Linear:Linear;
declare var Power0:Power0;
declare var Power1:Power1;
declare var Power2:Power2;
declare var Power3:Power3;
declare var Power4:Power4;
declare var Quad:Quad;
declare var Quart:Quart;
declare var Quint:Quint;
declare var Sine:Sine;
declare var SlowMo:SlowMo;
declare var SteppedEase:SteppedEase;
declare var Strong:Strong;

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
