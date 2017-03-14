declare namespace gsap {
    export class Animation {
        /** Base class for all TweenLite, TweenMax, TimelineLite, and TimelineMax classes, providing core methods/properties/() => voidality, but there is no reason to create an instance of this class directly. */
        constructor(duration?: number, vars?: any);

        /** A place to store any data you want (initially populated with vars.data if it exists). */
        data: any;

        /** [Read-only] Parent timeline. */
        timeline: SimpleTimeline;

        /** The vars object passed into the constructor which stores configuration variables like onComplete, onUpdate, etc. */
        vars: {};

        /** Gets or sets the animation's initial delay which is the length of time in seconds (or frames for frames-based tweens) before the animation should begin. */
        delay(): number;
        delay(value: number): Animation;

        /** Gets or sets the animation's duration, not including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
        duration(): number;
        duration(value: number): Animation;

        /** Gets or sets an event callback like "onComplete", "onUpdate", "onStart", "onReverseComplete" or "onRepeat" (onRepeat only applies to TweenMax or TimelineMax instances) along with any parameters that should be passed to that callback. */
        eventCallback(type: string): () => void;
        eventCallback(type: string, callback: () => void, params?: any[], scope?: any): Animation;

        /** Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. */
        invalidate(): Animation;

        /** Indicates whether or not the animation is currently active (meaning the virtual playhead is actively moving across this instance's time span and it is not paused, nor are any of its ancestor timelines). */
        isActive(): boolean;

        /** Kills the animation entirely or in part depending on the parameters. */
        kill(vars?: {}, target?: {}): Animation;

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
}
