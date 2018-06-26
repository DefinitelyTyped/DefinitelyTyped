// Type definitions for web-animations-js 2.2
// Project: https://github.com/web-animations/web-animations-js
// Definitions by: Kristian Moerch <https://github.com/kritollm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type AnimationEffectTimingFillMode = "none" | "forwards" | "backwards" | "both" | "auto";
type AnimationEffectTimingPlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
type AnimationPlayState = "idle" | "running" | "paused" | "finished";

interface AnimationPlaybackEvent {
    target: Animation;
    readonly currentTime: number | null;
    readonly timelineTime: number |  null;
    type: string;
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: Animation;
    defaultPrevented: boolean;
    eventPhase: number;
    timeStamp: number;
}

interface AnimationPlaybackEventInit extends EventInit {
    currentTime?: number | null;
    timelineTime?: number | null;
}

declare var AnimationPlaybackEvent: {
    prototype: AnimationPlaybackEvent;
    new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
};

interface AnimationKeyFrame {
    easing?: string | string[];
    offset?: number | Array<number | null> | null;
    opacity?: number | number[];
    transform?: string |  string[];
    // [key: string]: string | number | [string | number, string | number] | undefined; (duplicate string indexer in TypeScript 2.7+)
}

interface AnimationTimeline {
    readonly currentTime: number | null;
    getAnimations(): Animation[];
    play(effect: KeyframeEffect): Animation;
}
interface AnimationEffectTiming {
    delay?: number;
    direction?: AnimationEffectTimingPlaybackDirection;
    duration?: number;
    easing?: string;
    endDelay?: number;
    fill?: AnimationEffectTimingFillMode;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}

interface AnimationEffectReadOnly {
    readonly timing: number;
    getComputedTiming(): ComputedTimingProperties;
}

interface ComputedTimingProperties {
    endTime: number;
    activeDuration: number;
    localTime: number | null;
    progress: number | null;
    currentIteration: number | null;
}

declare class KeyframeEffect implements AnimationEffectReadOnly {
    constructor(target: HTMLElement, effect: AnimationKeyFrame | AnimationKeyFrame[], timing: number | AnimationEffectTiming, id?: string);
    activeDuration: number;
    onsample: (timeFraction: number | null, effect: KeyframeEffect, animation: Animation) => void | undefined;
    parent: KeyframeEffect | null;
    target: HTMLElement;
    timing: number;
    getComputedTiming(): ComputedTimingProperties;
    getFrames(): AnimationKeyFrame[];
    remove(): void;
}
type AnimationEventListener = (this: Animation, evt: AnimationPlaybackEvent) => any;

interface Animation extends EventTarget {
    currentTime: number | null;
    id: string;
    oncancel: AnimationEventListener;
    onfinish: AnimationEventListener;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    startTime: number;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    addEventListener(type: "finish" | "cancel", handler: EventListener): void;
    removeEventListener(type: "finish" | "cancel", handler: EventListener): void;
    effect: AnimationEffectReadOnly;
    readonly finished: Promise<Animation>;
    readonly ready: Promise<Animation>;
    timeline: AnimationTimeline;
}

declare var Animation: {
    prototype: Animation;
    new(effect?: AnimationEffectReadOnly, timeline?: AnimationTimeline): Animation;
};

declare class SequenceEffect extends KeyframeEffect {
    constructor(effects: KeyframeEffect[]);
}
declare class GroupEffect extends KeyframeEffect {
    constructor(effects: KeyframeEffect[]);
}
interface Element {
    animate(effect: AnimationKeyFrame | AnimationKeyFrame[], timing: number | AnimationEffectTiming): Animation;
    getAnimations(): Animation[];
}
interface Document {
    timeline: AnimationTimeline;
}
