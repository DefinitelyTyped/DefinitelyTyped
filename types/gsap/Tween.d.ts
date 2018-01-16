declare namespace gsap {
    export type Tween = TweenLite | TweenMax;
    export class TweenLite extends Animation {
        constructor(target: any, duration: number, vars: any);

        /** Provides An easy way to change the default easing equation. */
        static defaultEase: Ease;

        /** Provides An easy way to change the default overwrite mode. */
        static defaultOverwrite: string;

        /** The selector engine (like jQuery) that should be used when a tween receives a string as its target, like TweenLite.to("#myID", 1, {x:"100px"}). */
        static selector: (query: string) => any;

        /** Target object (or array of objects) whose properties the tween affects. */
        readonly target: any;

        /** The object that dispatches a "tick" event each time the engine updates, making it easy for you to add your own listener(s) to run custom logic after each update (great for game developers). */
        static ticker: any;

        /** Provides a simple way to call a () => void after a set amount of time (or frames). */
        static delayedCall(delay: number, callback: () => void, params?: any[], scope?: any, useFrames?: boolean): TweenLite;

        /** Static method for creating a TweenLite instance that tweens backwards - you define the BEGINNING values and the current values are used as the destination values which is great for doing things like animating objects onto the screen because you can set them up initially the way you want them to look at the end of the tween and then animate in from elsewhere. */
        static from(target: any, duration: number, vars: any): TweenLite;

        /** Static method for creating a TweenLite instance that allows you to define both the starting and ending values (as opposed to to() and from() tweens which are based on the target's current values at one end or the other). */
        static fromTo(target: any, duration: number, fromVars: any, toVars: any): TweenLite;

        /** Returns an array containing all the tweens of a particular target (or group of targets) that have not been released for garbage collection yet which typically happens within a few seconds after the tween completes. */
        static getTweensOf(target: any, onlyActive?: boolean): TweenLite[];

        /** [override] Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. */
        invalidate(): TweenLite;

        /** Immediately kills all of the delayedCalls to a particular () => void. */
        static killDelayedCallsTo(func: () => void): void;

        /** Kills all the tweens (or specific tweening properties) of a particular object or delayedCalls to a particular () => void. */
        static killTweensOf(target: any, onlyActive?: boolean, vars?: any): void;

        /** Permits you to control what happens when too much time elapses between two ticks (updates) of the engine, adjusting the core timing mechanism to compensate and avoid "jumps". */
        static lagSmoothing(threshold: number, adjustedLag: number): void;

        /** Forces a render of all active tweens which can be useful if, for example, you set up a bunch of from() tweens and then you need to force an immediate render (even of "lazy" tweens) to avoid a brief delay before things render on the very next tick. */
        static render(): void;

        /** Immediately sets properties of the target accordingly - essentially a zero-duration to() tween with a more intuitive name. */
        static set(target: any, vars: any): TweenLite;

        /** Static method for creating a TweenLite instance that animates to the specified destination values (from the current values). */
        static to(target: any, duration: number, vars: any): TweenLite;
    }

    export class TweenMax extends TweenLite {
        constructor(target: {}, duration: number, vars: {});

        /** Provides a simple way to call a () => void after a set amount of time (or frames). */
        static delayedCall(delay: number, callback: () => void, params?: any[], scope?: {}, useFrames?: boolean): TweenMax;

        /** Static method for creating a TweenMax instance that tweens backwards - you define the BEGINNING values and the current values are used as the destination values which is great for doing things like animating objects onto the screen because you can set them up initially the way you want them to look at the end of the tween and then animate in from elsewhere. */
        static from(target: {}, duration: number, vars: {}): TweenMax;

        /** Static method for creating a TweenMax instance that allows you to define both the starting and ending values (as opposed to to() and from() tweens which are based on the target's current values at one end or the other). */
        static fromTo(target: {}, duration: number, fromVars: {}, toVars: {}): TweenMax;

        /** Returns an array containing all tweens (and optionally timelines too, excluding the root timelines). */
        static getAllTweens(includeTimelines?: boolean): Tween[];

        /** Returns an array containing all the tweens of a particular target (or group of targets) that have not been released for garbage collection yet which typically happens within a few seconds after the tween completes. */
        static getTweensOf(target: {}): Tween[];

        /** Gets or sets the global timeScale which is a multiplier that affects ALL animations equally. This is a great way to globally speed up or slow down all animations at once. */
        static globalTimeScale(value: number): void;

        /** Reports whether or not a particular object is actively tweening. */
        static isTweening(target: {}): boolean;

        /** Kills all tweens and/or delayedCalls/callbacks, and/or timelines, optionally forcing them to completion first. */
        static killAll(complete?: boolean, tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;

        /** Kills all tweens of the children of a particular DOM element, optionally forcing them to completion first. */
        static killChildTweensOf(parent: any, complete?: boolean): void;

        /** Immediately kills all of the delayedCalls to a particular () => void. */
        static killDelayedCallsTo(func: () => void): void;

        /** Kills all the tweens (or specific tweening properties) of a particular object or the delayedCalls to a particular () => void. */
        static killTweensOf(target: {}, vars?: {}): void;

        /** Pauses all tweens and/or delayedCalls/callbacks and/or timelines. */
        static pauseAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;

        /**  Gets or sets the tween's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is halfway complete, and 1 is complete. */
        repeat(): number;
        repeat(value: number): TweenMax;

        /** Gets or sets the amount of time in seconds (or frames for frames-based tweens) between repeats. */
        repeatDelay(): number;
        repeatDelay(value: number): TweenMax;

        /** Resumes all paused tweens and/or delayedCalls/callbacks and/or timelines. */
        static resumeAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;

        /** Immediately sets properties of the target accordingly - essentially a zero-duration to() tween with a more intuitive name. */
        static set(target: {}, vars: {}): TweenMax;

        /** Tweens an array of targets from a common set of destination values (using the current values as the destination), but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly small amount of code. */
        static staggerFrom(targets: any, duration: number, vars: {}, stagger: number, onCompleteAll?: () => void, onCompleteAllParams?: any[], onCompleteAllScope?: any): any[];

        /** Tweens an array of targets from a common set of destination values to a common set of destination values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly small amount of code. */
        static staggerFromTo(targets: any, duration: number, fromVars: {}, toVars: {}, stagger: number, onCompleteAll?: () => void, onCompleteAllParams?: any[], onCompleteAllScope?: any): any[];

        /** Tweens an array of targets to a common set of destination values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly small amount of code. */
        static staggerTo(targets: any, duration: number, vars: {}, stagger: number, onCompleteAll?: () => void, onCompleteAllParams?: any[], onCompleteAllScope?: any): any[];

        /** Static method for creating a TweenMax instance that animates to the specified destination values (from the current values). */
        static to(target: {}, duration: number, vars: TweenConfig): TweenMax;

        /** Updates tweening values on the fly so that they appear to seamlessly change course even if the tween is in-progress. */
        updateTo(vars: {}, resetDuration?: boolean): TweenMax;

        /** Gets or sets the tween's yoyo state, where true causes the tween to go back and forth, alternating backward and forward on each repeat. */
        yoyo(): boolean;
        yoyo(value?: boolean): TweenMax;
    }
}
