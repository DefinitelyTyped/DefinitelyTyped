// Type definitions for GreenSock Animation Platform 1.1
// Project: http://www.greensock.com/get-started-js/
// Definitions by: Robert S <https://github.com/codebelt>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// JavaScript Docs http://api.greensock.com/js/
// Version 1.1 (TypeScript 0.9)

interface IDispatcher {
    addEventListener(type:string, callback:Function, scope?:Object, useParam?:boolean, priority?:number):void;
    removeEventListener(type:string, callback:Function):void;
}

//com.greensock.core
declare class Animation {
    data:any;
    static ticker:IDispatcher;
    timeline:SimpleTimeline;
    vars:Object;

    constructor(duration?:number, vars?:Object);

    delay(value:number):any;
    duration(value:number):any;
    eventCallback(type:string, callback?:Function, params?:any[], scope?:any):any;
    invalidate():any;
    isActive():boolean;
    kill(vars?:Object, target?:Object):any;
    pause(atTime?:any, suppressEvents?:boolean):any;
    paused(value?:boolean):any;
    play(from?:any, suppressEvents?:boolean):any;
    restart(includeDelay?:boolean, suppressEvents?:boolean):any;
    resume(from?:any, suppressEvents?:boolean):any;
    reverse(from?:any, suppressEvents?:boolean):any;
    reversed(value?:boolean):any;
    seek(time:any, suppressEvents?:boolean):any;
    startTime(value:number):any;
    time(value:number, suppressEvents?:boolean):any;
    timeScale(value:number):any;
    totalDuration(value:number):any;
    totalTime(time:number, suppressEvents?:boolean):any;
}

declare class SimpleTimeline extends Animation {
    autoRemoveChildren:boolean;
    smoothChildTiming:boolean;

    constructor(vars?:Object);

    add(value:any, position?:any, align?:string, stagger?:number):any;
    insert(tween:any, time:any):any;
    render(time:number, suppressEvents?:boolean, force?:boolean):void;
}

//com.greensock
declare class TweenLite extends Animation {
    static defaultEase:Ease;
    static defaultOverwrite:string;
    static selector:any;
    target:Object;
    static ticker:IDispatcher;
    timeline:SimpleTimeline;
    vars:Object;

    constructor(target:Object, duration:number, vars:Object);

    static delayedCall(delay:number, callback:Function, params?:any[], scope?:any, useFrames?:boolean):TweenLite;
    static from(target:Object, duration:number, vars:Object):TweenLite;
    static fromTo(target:Object, duration:number, fromVars:Object, toVars:Object):TweenLite;
    static getTweensOf(target:Object):any[];
    invalidate():any;
    static killDelayedCallsTo(func:Function):void;
    static killTweensOf(target:Object, vars?:Object):void;
    static set(target:Object, vars:Object):TweenLite;
    static to(target:Object, duration:number, vars:Object):TweenLite;
}

declare class TweenMax extends TweenLite {
    static ticker:IDispatcher;

    constructor(target:Object, duration:number, vars:Object);

    static delayedCall(delay:number, callback:Function, params?:any[], scope?:any, useFrames?:boolean):TweenMax;
    static from(target:Object, duration:number, vars:Object):TweenMax;
    static fromTo(target:Object, duration:number, fromVars:Object, toVars:Object):TweenMax;
    static getAllTweens(includeTimelines?:boolean):any[];
    static getTweensOf(target:Object):any[];
    invalidate():any;
    static isTweening(target:Object):boolean;
    static killAll(complete?:boolean, tweens?:boolean, delayedCalls?:boolean, timelines?:boolean):void;
    static killChildTweensOf(parent:any, complete?:boolean):void;
    static killDelayedCallsTo(func:Function):void;
    static killTweensOf(target:Object, vars?:Object):void;
    static pauseAll(tweens?:boolean, delayedCalls?:boolean, timelines?:boolean):void;
    progress(value:number):any;
    repeat(value:number):any;
    repeatDelay(value:number):any;
    static resumeAll(tweens?:boolean, delayedCalls?:boolean, timelines?:boolean):void;
    static set(target:Object, vars:Object):TweenMax;
    static staggerFrom(targets:any, duration:number, vars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    static staggerFromTo(targets:any, duration:number, fromVars:Object, toVars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    static staggerTo(targets:any, duration:number, vars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    time(value:number, suppressEvents?:boolean):any;
    static to(target:Object, duration:number, vars:Object):TweenMax;
    totalDuration(value:number):any;
    totalProgress(value:number):any;
    updateTo(vars:Object, resetDuration?:boolean):any;
    yoyo(value?:boolean):any;
}

declare class TimelineLite extends SimpleTimeline {
    constructor(vars?:Object);

    add(value:any, position?:any, align?:string, stagger?:number):any;
    addLabel(label:string, position:any):any;
    addPause(position?:any, callback?:Function, params?:any[], scope?:any):any;
    append(value:any, offsetOrLabel?:any):any;
    appendMultiple(tweens:any[], offsetOrLabel?:any, align?:string, stagger?:number):any;
    call(callback:Function, params?:any[], scope?:any, position?:any):any;
    clear(labels?:boolean):any;
    duration(value:number):any;
    exportRoot(vars?:Object, omitDelayedCalls?:boolean):TimelineLite;
    from(target:Object, duration:number, vars:Object, position?:any):any;
    fromTo(target:Object, duration:number, fromVars:Object, toVars:Object, position?:any):any;
    getChildren(nested?:boolean, tweens?:boolean, timelines?:boolean, ignoreBeforeTime?:number):any[];
    getLabelTime(label:string):number;
    getTweensOf(target:Object, nested?:boolean):any[];
    insert(value:any, timeOrLabel?:any):any;
    insertMultiple(tweens:any[], timeOrLabel?:any, align?:string, stagger?:number):any;
    invalidate():any;
    progress(value:number):any;
    remove(value:any):any;
    removeLabel(label:string):any;
    set(target: Object, vars: Object, position?:any):any;
    seek(position:any, suppressEvents?:boolean):any;
    shiftChildren(amount:number, adjustLabels?:boolean, ignoreBeforeTime?:number):any;
    staggerFrom(targets:any, duration:number, vars:Object, stagger?:number, position?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteScope?:any):any;
    staggerFromTo(targets:any, duration:number, fromVars:Object, toVars:Object, stagger?:number, position?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    staggerTo(targets:any, duration:number, vars:Object, stagger:number, position?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    stop():any;
    to(target:Object, duration:number, vars:Object, position?:any):any;
    usesFrames():Boolean;
}

declare class TimelineMax extends TimelineLite {
    constructor(vars?:Object);

    addCallback(callback:Function, position:any, params?:any[], scope?:any):TimelineMax;
    currentLabel(value?:string):any;
    getActive(nested?:boolean, tweens?:boolean, timelines?:boolean):any[];
    getLabelAfter(time:number):string;
    getLabelBefore(time:number):string;
    getLabelsArray():any[];
    invalidate():any;
    progress(value:number):any;
    removeCallback(callback:Function, timeOrLabel?:any):TimelineMax;
    repeat(value?:number):any;
    repeatDelay(value?:number):any;
    time(value:number, suppressEvents?:boolean):any;
    totalDuration(value:number):any;
    totalProgress(value:number):any;
    tweenFromTo(fromPosition:any, toPosition:any, vars?:Object):TweenLite;
    tweenTo(position:any, vars?:Object):TweenLite;
    yoyo(value?:boolean):any;
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
