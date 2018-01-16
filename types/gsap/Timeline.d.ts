declare namespace gsap {
    export type Timeline = SimpleTimeline | TimelineLite | TimelineMax;

    export class SimpleTimeline extends Animation {
        /** SimpleTimeline is the base class for TimelineLite and TimelineMax, providing the most basic timeline () => voidality and it is used for the root timelines in TweenLite but is only intended for internal use in the GreenSock tweening platform. It is meant to be very fast and lightweight. */
        constructor(vars?: any);

        /** If true, child tweens/timelines will be removed as soon as they complete. */
        autoRemoveChildren: boolean;

        /** Controls whether or not child tweens/timelines are repositioned automatically (changing their startTime) in order to maintain smooth playback when properties are changed on-the-fly. */
        smoothChildTiming: boolean;

        /** Adds a TweenLite, TweenMax, TimelineLite, or TimelineMax instance to the timeline at a specific time. */
        add(child: any, position?: any, align?: string, stagger?: number): SimpleTimeline;

        /** renders */
        render(time: number, suppressEvents?: boolean, force?: boolean): SimpleTimeline;
    }

    export class TimelineLite extends SimpleTimeline {
        constructor(vars?: {});

        /** Adds a tween, timeline, callback, or label (or an array of them) to the timeline. */
        add(value: any, position?: any, align?: string, stagger?: number): TimelineLite;

        /** Adds a label to the timeline, making it easy to mark important positions/times. */
        addLabel(label: string, position: any): TimelineLite;

        /** Inserts a special callback that pauses playback of the timeline at a particular time or label. */
        addPause(position?: any, callback?: () => void, params?: any[], scope?: any): TimelineLite;

        /** Adds a callback to the end of the timeline (or elsewhere using the "position" parameter) - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.delayedCall(...) ) but with less code. */
        call(callback: () => void, params?: any[], scope?: any, position?: any): TimelineLite;

        /** Empties the timeline of all tweens, timelines, and callbacks (and optionally labels too). */
        clear(labels?: boolean): TimelineLite;

        /** Returns the time at which the animation will finish according to the parent timeline's local time. */
        endTime(includeRepeats?: boolean): number;

        /** Seamlessly transfers all tweens, timelines, and [optionally] delayed calls from the root timeline into a new TimelineLite so that you can perform advanced tasks on a seemingly global basis without affecting tweens/timelines that you create after the export. */
        static exportRoot(vars?: {}, omitDelayedCalls?: boolean): TimelineLite;

        /** Adds a TweenLite.from() tween to the end of the timeline (or elsewhere using the "position" parameter) - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.from(...) ) but with less code. */
        from(target: {}, duration: number, vars: {}, position?: any): TimelineLite;

        /** Adds a TweenLite.fromTo() tween to the end of the timeline - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.fromTo(...) ) but with less code. */
        fromTo(target: {}, duration: number, fromVars: {}, toVars: {}, position?: any): TimelineLite;

        /** Returns an array containing all the tweens and/or timelines nested in this timeline. */
        getChildren(nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number): Array<Tween | Timeline>;

        /** Returns the time associated with a particular label. */
        getLabelTime(label: string): number;

        /** Returns the tweens of a particular object that are inside this timeline. */
        getTweensOf(target: {}, nested?: boolean): Tween[];

        /** Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. */
        invalidate(): TimelineLite;

        /** Returns the most recently added child tween/timeline/callback regardless of its position in the timeline. */
        recent(): Animation;

        /** Removes a tween, timeline, callback, or label (or array of them) from the timeline. */
        remove(value: any): TimelineLite;

        /** Removes a label from the timeline and returns the time of that label. */
        removeLabel(label: string): any;

        /** Jumps to a specific time (or label) without affecting whether or not the instance is paused or reversed. */
        seek(position: string | number, supressEvents: boolean): TimelineLite;

        /** Adds a zero-duration tween to the end of the timeline (or elsewhere using the "position" parameter) that sets values immediately (when the virtual playhead reaches that position on the timeline) - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.to(target, 0, {...}) ) but with less code. */
        set(target: {}, vars: {}, position?: any): TimelineLite;

        /** Shifts the startTime of the timeline's children by a certain amount and optionally adjusts labels too. */
        shiftChildren(amount: number, adjustLabels?: boolean, ignoreBeforeTime?: number): TimelineLite;

        /** Tweens an array of targets from a common set of destination values (using the current values as the destination), but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly small amount of code. */
        staggerFrom(targets: any, duration: number, vars: {}, stagger?: number, position?: any, onCompleteAll?: () => void, onCompleteAllParams?: any[], onCompleteScope?: any): TimelineLite;

        /** Tweens an array of targets from and to a common set of values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly small amount of code. */
        staggerFromTo(targets: any, duration: number, fromVars: {}, toVars: {}, stagger?: number, position?: any, onCompleteAll?: () => void, onCompleteAllParams?: any[], onCompleteAllScope?: any): TimelineLite;

        /** Tweens an array of targets to a common set of destination values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly small amount of code. */
        staggerTo(targets: any, duration: number, vars: {}, stagger: number, position?: any, onCompleteAll?: () => void, onCompleteAllParams?: any[], onCompleteAllScope?: any): TimelineLite;

        /** Adds a TweenLite.to() tween to the end of the timeline (or elsewhere using the "position" parameter) - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.to(...) ) but with less code. */
        to(target: {}, duration: number, vars: {}, position?: any): TimelineLite;
        usesFrames(): boolean;

        /** If true, the timeline's timing mode is frames-based instead of seconds. */
        useFrames(): boolean;
    }

    export class TimelineMax extends TimelineLite {
        constructor(vars?: {});

        addCallback(callback: () => void, position: any, params?: any[], scope?: any): TimelineMax;
        currentLabel(): string;
        currentLabel(value: string): TimelineMax;
        getActive(nested?: boolean, tweens?: boolean, timelines?: boolean): Tween | Timeline[];
        getLabelAfter(time: number): string;
        getLabelBefore(time: number): string;
        getLabelsArray(): Array<{ name: string; time: number; }>;
        removeCallback(callback: () => void, timeOrLabel?: any): TimelineMax;
        removePause(position: any): TimelineMax;
        repeat(): number;
        repeat(value: number): TimelineMax;
        repeatDelay(): number;
        repeatDelay(value: number): TimelineMax;
        tweenFromTo(fromPosition: any, toPosition: any, vars?: {}): TweenLite;
        tweenTo(position: any, vars?: {}): TweenLite;
        yoyo(): boolean;
        yoyo(value: boolean): TimelineMax;
    }
}
