// Type definitions for web-animations-js v2.2.2
// Project: https://github.com/web-animations/web-animations-js
// Definitions by: Kristian Moerch <https://github.com/kritollm/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type FillMode = "none" | "forwards" | "backwards" | "both" | "auto";
declare type PlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
declare type AnimationPlayState = "idle" | "pending" | "running" | "paused" | "finished";

interface AnimationPlaybackEvent extends Event {
    currentTime: number;
    timelineTime: number;
}

interface AnimationKeyFrame {
    easing?: string;
    offset?: number;
    [key: string]: string | number | number[] | string[];
}

interface AnimationTimeline {
    currentTime: number;
    getAnimations(): any;
    play(a: any): any;
}
interface AnimationEffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number;
    easing?: string;
    endDelay?: number;
    fill?: FillMode |  string;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}
declare class KeyframeEffect {
    constructor(target: HTMLElement, effect: AnimationKeyFrame | AnimationKeyFrame[], timing: number | AnimationEffectTiming);
    activeDuration: number;
    onsample: any;
    parent: any;
    target: any;
    timing: AnimationEffectTiming;
    getFrames(): AnimationKeyFrame[];
}

interface Animation extends Element {
    currentTime: number;
    id: string;
    oncancel: EventListener;
    onfinish: EventListener;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    startTime: number;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    effect: KeyframeEffect;
    readonly finished: Promise<Animation>;
    readonly ready: Promise<Animation>;
    timeline: AnimationTimeline;
}
declare class Animation extends Element {
    currentTime: number;
    id: string;
    oncancel: EventListener;
    onfinish: EventListener;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    startTime: number;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    effect: KeyframeEffect;
    readonly finished: Promise<Animation>;
    readonly ready: Promise<Animation>;
    timeline: AnimationTimeline;
}

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