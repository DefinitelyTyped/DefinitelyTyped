// GreenSock Animation Platform (GSAP) - http://www.greensock.com/get-started-js/
// JavaScript Docs http://api.greensock.com/js/
// Version 1.0

//com.greensock.core
interface Animation {
    data:any;
    ticker:any;
    timeline:SimpleTimeline;
    vars:Object;

    Animation(duration:number, vars?:Object);
    delay(value:number):any;
    duration(value:number):any;
    eventCallback(type:string, callback?:Function, params?:any[], scope?:any):any;
    invalidate():any;
    kill(vars?:Object, target?:Object):any;
    pause(atTime?:any, suppressEvents?:bool):any;
    paused(value?:bool):any;
    play(from?:any, suppressEvents?:bool):any;
    restart(includeDelay?:bool, suppressEvents?:bool):any;
    resume(from?:any, suppressEvents?:bool):any;
    reverse(from?:any, suppressEvents?:bool):any;
    reversed(value?:bool):any;
    seek(time:any, suppressEvents?:bool):any;
    startTime(value:number):any;
    time(value:number, suppressEvents?:bool):any;
    timeScale(value:number):any;
    totalDuration(value:number):any;
    totalTime(time:number, suppressEvents?:bool):any;
}

interface SimpleTimeline extends Animation {
    autoRemoveChildren:bool;
    smoothChildTiming:bool;

    insert(tween:any, time:any):any;
    render(time:number, suppressEvents?:bool, force?:bool):void;
}

//com.greensock
interface TimelineLite {
    addLabel(label:string, time:number):any;
    append(value:any, offset:number):any;
    appendMultiple(tweens:any[], offset:number, align:string, stagger:number):any;
    call(callback:Function, params?:any[], scope?:any, offset?:number, baseTimeOrLabel?:any):any;
    clear(labels?:bool):any;
    duration(value:number):any;
    exportRoot(vars?:Object, omitDelayedCalls?:bool):TimelineLite;
    from(target:Object, duration:number, vars:Object, offset:number, baseTimeOrLabel?:any):any;
    fromTo(target:Object, duration:number, fromVars:Object, toVars:Object, offset:number, baseTimeOrLabel?:any):any;
    getChildren(nested?:bool, tweens?:bool, timelines?:bool, ignoreBeforeTime?:number):any[];
    getLabelTime(label:string):number;
    getTweensOf(target:Object, nested?:bool):any[];
    insert(value:any, timeOrLabel:any):any;
    insertMultiple(tweens:any[], timeOrLabel:any, align:string, stagger:number):any;
    invalidate():any;
    progress(value:number):any;
    remove(value:any):any;
    removeLabel(label:string):any;
    seek(timeOrLabel:any, suppressEvents?:bool):any;
    set(target:Object, vars:Object, offset:number, baseTimeOrLabel?:any):any;
    shiftChildren(amount:number, adjustLabels?:bool, ignoreBeforeTime?:number):any;
    staggerFrom(targets:Object[], duration:number, vars:Object, stagger:number, offset:number, baseTimeOrLabel?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    staggerFromTo(targets:Object[], duration:number, fromVars:Object, toVars:Object, stagger:number, offset:number, baseTimeOrLabel?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    staggerTo(targets:Object[], duration:number, vars:Object, stagger:number, offset:number, baseTimeOrLabel?:any, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any;
    stop():any;
    to(target:Object, duration:number, vars:Object, offset:number, baseTimeOrLabel?:any):any;
    totalDuration(value:number):any;
    usesFrames():bool;
}

interface TimelineMax {
    addCallback(callback:Function, timeOrLabel:any, params?:any[], scope?:any):TimelineMax;
    currentLabel(value?:string):any;
    getActive(nested?:bool, tweens?:bool, timelines?:bool):any[];
    getLabelAfter(time:number):string;
    getLabelBefore(time:number):string;
    getLabelsArray():any[];
    invalidate():any;
    progress(value:number):any;
    removeCallback(callback:Function, timeOrLabel?:any):TimelineMax;
    repeat(value:number):any;
    repeatDelay(value:number):any;
    time(value:number, suppressEvents?:bool):any;
    totalDuration(value:number):any;
    totalProgress(value:number):any;
    tweenFromTo(fromTimeOrLabel:any, toTimeOrLabel:any, vars?:Object):TweenLite;
    tweenTo(timeOrLabel:any, vars?:Object):TweenLite;
    yoyo(value?:bool):any;
}

interface TweenLite extends Animation {
    defaultEase:Ease;
    defaultOverwrite:string;
    target:Object;
    ticker:any;

    delayedCall(delay:number, callback:Function, params?:any[], scope?:any, useFrames?:bool):TweenLite;
    from(target:Object, duration:number, vars:Object):TweenLite;
    fromTo(target:Object, duration:number, fromVars:Object, toVars:Object):TweenLite;
    getTweensOf(target:Object):any[];
    invalidate():any;
    killDelayedCallsTo(func:Function):void;
    killTweensOf(target:Object, vars?:Object):void;
    set(target:Object, vars:Object):TweenLite;
    to(target:Object, duration:number, vars:Object):TweenLite;
}

interface TweenMax extends TweenLite {
    delayedCall(delay:number, callback:Function, params?:any[], scope?:any, useFrames?:bool):TweenMax;
    from(target:Object, duration:number, vars:Object):TweenMax;
    fromTo(target:Object, duration:number, fromVars:Object, toVars:Object):TweenMax;
    getAllTweens(includeTimelines?:bool):any[];
    getTweensOf(target:Object):any[];
    invalidate():any;
    isTweening(target:Object):bool;
    killAll(complete?:bool, tweens?:bool, delayedCalls?:bool, timelines?:bool):void;
    killChildTweensOf(parent:any, complete?:bool):void;
    killDelayedCallsTo(func:Function):void;
    killTweensOf(target:Object, vars?:Object):void;
    pauseAll(tweens?:bool, delayedCalls?:bool, timelines?:bool):void;
    progress(value:number):any;
    repeat(value:number):any;
    repeatDelay(value:number):any;
    resumeAll(tweens?:bool, delayedCalls?:bool, timelines?:bool):void;
    set(target:Object, vars:Object):TweenMax;
    staggerFrom(targets:Object[], duration:number, vars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    staggerFromTo(targets:Object[], duration:number, fromVars:Object, toVars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    staggerTo(targets:Object[], duration:number, vars:Object, stagger:number, onCompleteAll?:Function, onCompleteAllParams?:any[], onCompleteAllScope?:any):any[];
    time(value:number, suppressEvents?:bool):any;
    to(target:Object, duration:number, vars:Object):TweenMax;
    totalDuration(value:number):any;
    totalProgress(value:number):any;
    updateTo(vars:Object, resetDuration?:bool):any;
    yoyo(value?:bool):any;
}

//com.greensock.easing
interface Back {
    easeIn;
    easeInOut;
    easeOut;
}
interface Bounce {
    easeIn;
    easeInOut;
    easeOut;
}
interface Circ {
    easeIn;
    easeInOut;
    easeOut;
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
    easeIn;
    easeInOut;
    easeOut;
}
interface Expo {
    easeIn;
    easeInOut;
    easeOut;
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
    easeIn;
    easeInOut;
    easeOut;
}
interface SlowMo {
    ease:SlowMo;

    SlowMo(linearRatio:number, power:number, yoyoMode:bool);
    config(linearRatio:number, power:number, yoyoMode:bool):SlowMo;
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
    bezierThrough(values:any[], curviness?:number, quadratic?:bool, correlate?:string, prepend?:Object, calcDifs?:bool):Object;
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
    activate(plugins:any[]):bool;
}


//com.greensock.core
declare var Animation:Animation;
declare var SimpleTimeline:SimpleTimeline;

//com.greensock
declare var TimelineLite:TimelineLite;
declare var TimelineMax:TimelineMax;
declare var TweenLite:TweenLite;
declare var TweenMax:TweenMax;

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