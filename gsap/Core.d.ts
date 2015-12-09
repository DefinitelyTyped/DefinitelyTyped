// Type definitions for GSAP v1.16.0
// Project: http://greensock.com/
// Definitions by: VILIC VANE <https://vilic.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Animation {
    /** Base class for all TweenLite, TweenMax, TimelineLite, and TimelineMax classes, providing core methods/properties/functionality, but there is no reason to create an instance of this class directly. */
    constructor(duration?: number, vars?: any);

    /** A place to store any data you want (initially populated with vars.data if it exists). */
    data: any;
    
    /** [Read-only] Parent timeline. */
    timeline: SimpleTimeLine;

    /** The vars object passed into the constructor which stores configuration variables like onComplete, onUpdate, etc. */
    vars: any;

    /** Gets or sets the animation's initial delay which is the length of time in seconds (or frames for frames-based tweens) before the animation should begin. */
    delay(): number;
    delay(value: number): Animation;

    /** Gets or sets the animation's duration, not including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
    duration(): number;
    duration(value: number): Animation;

    /** Gets or sets an event callback like "onComplete", "onUpdate", "onStart", "onReverseComplete" or "onRepeat" (onRepeat only applies to TweenMax or TimelineMax instances) along with any parameters that should be passed to that callback. */
    eventCallback(type: string): Function;
    eventCallback(type: string, callback: Function, params?: any[], scope?: any): Animation;

    /** Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. */
    invalidate(): Animation;

    /** Indicates whether or not the animation is currently active (meaning the virtual playhead is actively moving across this instance's time span and it is not paused, nor are any of its ancestor timelines). */
    isActive(): boolean;

    /** Kills the animation entirely or in part depending on the parameters. */
    kill(vars?: any, target?: any): Animation;

    /** Pauses the instance, optionally jumping to a specific time. */
    pause(atTime?: any, suppressEvents?: boolean): Animation;

    /** Gets or sets the animation's paused state which indicates whether or not the animation is currently paused. */
    paused(): boolean;
    paused(value: boolean): Animation;

    /** Begins playing forward, optionally from a specific time (by default playback begins from wherever the playhead currently is). */
    play(from?: any, suppressEvents?: boolean): Animation;

    /** Gets or sets the animations's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). */
    progress(): number;
    progress(value: number, suppressEvents?: boolean): Animation;

    /** Restarts and begins playing forward from the beginning. */
    restart(includeDelay?: boolean, suppressEvents?: boolean): Animation;

    /** Resumes playing without altering direction (forward or reversed), optionally jumping to a specific time first. */
    resume(from?: any, suppressEvents?: boolean): Animation;

    /** Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease. */
    reverse(from?: any, suppressEvents?: boolean): Animation;

    /** Gets or sets the animation's reversed state which indicates whether or not the animation should be played backwards. */
    reversed(): boolean;
    reversed(value: boolean): Animation;

    /** Jumps to a specific time without affecting whether or not the instance is paused or reversed. */
    seek(time: any, suppressEvents?: boolean): Animation;

    /** Gets or sets the time at which the animation begins on its parent timeline (after any delay that was defined). */
    startTime(): number;
    startTime(value: number): Animation;

    /** Gets or sets the local position of the playhead (essentially the current time), described in seconds (or frames for frames-based animations) which will never be less than 0 or greater than the animation's duration. */
    time(): number;
    time(value: number, suppressEvents?: boolean): Animation;

    /** Factor that's used to scale time in the animation where 1 = normal speed (the default), 0.5 = half speed, 2 = double speed, etc. */
    timeScale(): number;
    timeScale(value: number): Animation;

    /** Gets or sets the animation's total duration including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
    totalDuration(): number;
    totalDuration(value: number): Animation;

    /** Gets or sets the animation's total progress which is a value between 0 and 1 indicating the position of the virtual playhead (including repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). */
    totalProgress(): number;
    totalProgress(value: number, suppressEvents?: boolean): Animation;

    /** Gets or sets the position of the playhead according to the totalDuration which includes any repeats and repeatDelays (only available in TweenMax and TimelineMax). */
    totalTime(): number;
    totalTime(time: number, suppressEvents?: boolean): Animation;
}

declare class SimpleTimeLine extends Animation {
    /** SimpleTimeline is the base class for TimelineLite and TimelineMax, providing the most basic timeline functionality and it is used for the root timelines in TweenLite but is only intended for internal use in the GreenSock tweening platform. It is meant to be very fast and lightweight. */
    constructor(vars?: any);

    /** If true, child tweens/timelines will be removed as soon as they complete. */
    autoRemoveChildren: boolean;
    
    /** Controls whether or not child tweens/timelines are repositioned automatically (changing their startTime) in order to maintain smooth playback when properties are changed on-the-fly. */
    smoothChildTiming: boolean;

    /** Adds a TweenLite, TweenMax, TimelineLite, or TimelineMax instance to the timeline at a specific time. */
    add(child: any, position?: any, align?: string, stagger?: number): SimpleTimeLine;

    /** renders */
    render(time: number, suppressEvents?: boolean, force?: boolean): SimpleTimeLine;

    // INHERITANCE FROM ANIMATION

    /** Gets or sets the animation's initial delay which is the length of time in seconds (or frames for frames-based tweens) before the animation should begin. */
    delay(): number;
    delay(value: number): SimpleTimeLine;

    /** Gets or sets the animation's duration, not including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
    duration(): number;
    duration(value: number): SimpleTimeLine;

    /** Gets or sets an event callback like "onComplete", "onUpdate", "onStart", "onReverseComplete" or "onRepeat" (onRepeat only applies to TweenMax or TimelineMax instances) along with any parameters that should be passed to that callback. */
    eventCallback(type: string): Function;
    eventCallback(type: string, callback: Function, params?: any[], scope?: any): SimpleTimeLine;

    /** Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. */
    invalidate(): SimpleTimeLine;
    
    /** Kills the animation entirely or in part depending on the parameters. */
    kill(vars?: any, target?: any): SimpleTimeLine;

    /** Pauses the instance, optionally jumping to a specific time. */
    pause(atTime?: any, suppressEvents?: boolean): SimpleTimeLine;

    /** Gets or sets the animation's paused state which indicates whether or not the animation is currently paused. */
    paused(): boolean;
    paused(value: boolean): SimpleTimeLine;

    /** Begins playing forward, optionally from a specific time (by default playback begins from wherever the playhead currently is). */
    play(from?: any, suppressEvents?: boolean): SimpleTimeLine;

    /** Gets or sets the animations's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). */
    progress(): number;
    progress(value: number, suppressEvents?: boolean): SimpleTimeLine;

    /** Restarts and begins playing forward from the beginning. */
    restart(includeDelay?: boolean, suppressEvents?: boolean): SimpleTimeLine;

    /** Resumes playing without altering direction (forward or reversed), optionally jumping to a specific time first. */
    resume(from?: any, suppressEvents?: boolean): SimpleTimeLine;

    /** Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease. */
    reverse(from?: any, suppressEvents?: boolean): SimpleTimeLine;

    /** Gets or sets the animation's reversed state which indicates whether or not the animation should be played backwards. */
    reversed(): boolean;
    reversed(value: boolean): SimpleTimeLine;

    /** Jumps to a specific time without affecting whether or not the instance is paused or reversed. */
    seek(time: any, suppressEvents?: boolean): SimpleTimeLine;

    /** Gets or sets the time at which the animation begins on its parent timeline (after any delay that was defined). */
    startTime(): number;
    startTime(value: number): SimpleTimeLine;

    /** Gets or sets the local position of the playhead (essentially the current time), described in seconds (or frames for frames-based animations) which will never be less than 0 or greater than the animation's duration. */
    time(): number;
    time(value: number, suppressEvents?: boolean): SimpleTimeLine;

    /** Factor that's used to scale time in the animation where 1 = normal speed (the default), 0.5 = half speed, 2 = double speed, etc. */
    timeScale(): number;
    timeScale(value: number): SimpleTimeLine;

    /** Gets or sets the animation's total duration including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
    totalDuration(): number;
    totalDuration(value: number): SimpleTimeLine;

    /** Gets or sets the animation's total progress which is a value between 0 and 1 indicating the position of the virtual playhead (including repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). */
    totalProgress(): number;
    totalProgress(value: number, suppressEvents?: boolean): SimpleTimeLine;

    /** Gets or sets the position of the playhead according to the totalDuration which includes any repeats and repeatDelays (only available in TweenMax and TimelineMax). */
    totalTime(): number;
    totalTime(time: number, suppressEvents?: boolean): SimpleTimeLine;
}