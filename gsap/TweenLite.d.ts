// Type definitions for GSAP v1.16.0
// Project: http://greensock.com/
// Definitions by: VILIC VANE <https://vilic.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="Core.d.ts" />
/// <reference path="Ease.d.ts" />

declare class TweenLite {
    constructor(target: any, duration: number, vars: any);

    /** Provides An easy way to change the default easing equation. */
    static defaultEase: Ease;

    /** Provides An easy way to change the default overwrite mode. */
    static defaultOverwrite: string;

    /** The selector engine (like jQuery) that should be used when a tween receives a string as its target, like TweenLite.to("#myID", 1, {x:"100px"}). */
    static selector: (query: string) => any;

    /** [READ-ONLY] Target object (or array of objects) whose properties the tween affects. */
    target: any;

    /** The object that dispatches a "tick" event each time the engine updates, making it easy for you to add your own listener(s) to run custom logic after each update (great for game developers). */
    static ticker: any;

    /** Provides a simple way to call a function after a set amount of time (or frames). */
    static delayedCall(delay: number, callback: Function, params?: any[], scope?: any, useFrames?: boolean): TweenLite;

    /** Static method for creating a TweenLite instance that tweens backwards - you define the BEGINNING values and the current values are used as the destination values which is great for doing things like animating objects onto the screen because you can set them up initially the way you want them to look at the end of the tween and then animate in from elsewhere. */
    static from(target: any, duration: number, vars: any): TweenLite;

    /** Static method for creating a TweenLite instance that allows you to define both the starting and ending values (as opposed to to() and from() tweens which are based on the target's current values at one end or the other). */
    static fromTo(target: any, duration: number, fromVars: any, toVars: any): TweenLite;

    /** Returns an array containing all the tweens of a particular target (or group of targets) that have not been released for garbage collection yet which typically happens within a few seconds after the tween completes. */
    static getTweensOf(target: any, onlyActive?: boolean): TweenLite[];

    /** [override] Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. */
    invalidate(): TweenLite;

    /** Immediately kills all of the delayedCalls to a particular function. */
    static killDelayedCallsTo(func: Function): void;

    /** Kills all the tweens (or specific tweening properties) of a particular object or delayedCalls to a particular function. */
    static killTweensOf(target: any, onlyActive?: boolean, vars?: any): void;

    /** Permits you to control what happens when too much time elapses between two ticks (updates) of the engine, adjusting the core timing mechanism to compensate and avoid "jumps". */
    static lagSmoothing(threshold: number, adjustedLag: number): void;

    /** Forces a render of all active tweens which can be useful if, for example, you set up a bunch of from() tweens and then you need to force an immediate render (even of "lazy" tweens) to avoid a brief delay before things render on the very next tick. */
    static render(): void;

    /** Immediately sets properties of the target accordingly - essentially a zero-duration to() tween with a more intuitive name. */
    static set(target: any, vars: any): TweenLite;

    /** Static method for creating a TweenLite instance that animates to the specified destination values (from the current values). */
    static to(target: any, duration: number, vars: any): TweenLite;

    // INHERITANCE FROM ANIMATION

    /** Gets or sets the animation's initial delay which is the length of time in seconds (or frames for frames-based tweens) before the animation should begin. */
    delay(): number;
    delay(value: number): TweenLite;

    /** Gets or sets the animation's duration, not including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
    duration(): number;
    duration(value: number): TweenLite;

    /** Gets or sets an event callback like "onComplete", "onUpdate", "onStart", "onReverseComplete" or "onRepeat" (onRepeat only applies to TweenMax or TimelineMax instances) along with any parameters that should be passed to that callback. */
    eventCallback(type: string): Function;
    eventCallback(type: string, callback: Function, params?: any[], scope?: any): TweenLite;
    
    /** Kills the animation entirely or in part depending on the parameters. */
    kill(vars?: any, target?: any): TweenLite;

    /** Pauses the instance, optionally jumping to a specific time. */
    pause(atTime?: any, suppressEvents?: boolean): TweenLite;

    /** Gets or sets the animation's paused state which indicates whether or not the animation is currently paused. */
    paused(): boolean;
    paused(value: boolean): TweenLite;

    /** Begins playing forward, optionally from a specific time (by default playback begins from wherever the playhead currently is). */
    play(from?: any, suppressEvents?: boolean): TweenLite;

    /** Gets or sets the animations's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). */
    progress(): number;
    progress(value: number, suppressEvents?: boolean): TweenLite;

    /** Restarts and begins playing forward from the beginning. */
    restart(includeDelay?: boolean, suppressEvents?: boolean): TweenLite;

    /** Resumes playing without altering direction (forward or reversed), optionally jumping to a specific time first. */
    resume(from?: any, suppressEvents?: boolean): TweenLite;

    /** Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease. */
    reverse(from?: any, suppressEvents?: boolean): TweenLite;

    /** Gets or sets the animation's reversed state which indicates whether or not the animation should be played backwards. */
    reversed(): boolean;
    reversed(value: boolean): TweenLite;

    /** Jumps to a specific time without affecting whether or not the instance is paused or reversed. */
    seek(time: any, suppressEvents?: boolean): TweenLite;

    /** Gets or sets the time at which the animation begins on its parent timeline (after any delay that was defined). */
    startTime(): number;
    startTime(value: number): TweenLite;

    /** Gets or sets the local position of the playhead (essentially the current time), described in seconds (or frames for frames-based animations) which will never be less than 0 or greater than the animation's duration. */
    time(): number;
    time(value: number, suppressEvents?: boolean): TweenLite;

    /** Factor that's used to scale time in the animation where 1 = normal speed (the default), 0.5 = half speed, 2 = double speed, etc. */
    timeScale(): number;
    timeScale(value: number): TweenLite;

    /** Gets or sets the animation's total duration including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
    totalDuration(): number;
    totalDuration(value: number): TweenLite;

    /** Gets or sets the animation's total progress which is a value between 0 and 1 indicating the position of the virtual playhead (including repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). */
    totalProgress(): number;
    totalProgress(value: number, suppressEvents?: boolean): TweenLite;

    /** Gets or sets the position of the playhead according to the totalDuration which includes any repeats and repeatDelays (only available in TweenMax and TimelineMax). */
    totalTime(): number;
    totalTime(time: number, suppressEvents?: boolean): TweenLite;
}