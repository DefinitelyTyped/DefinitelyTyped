// Type definitions for animejs 3.1
// Project: http://animejs.com
// Definitions by: Andrew Babin     <https://github.com/A-Babin>
//                 supaiku0         <https://github.com/supaiku0>
//                 southrock         <https://github.com/southrock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

type FunctionBasedParameter = (element: HTMLElement, index: number, length: number) => number;
type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;
type CustomEasingFunction = (el: HTMLElement, index: number, length: number) => ((time: number) => number);
// Allowing null is necessary because DOM queries may not return anything.
type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;

declare namespace anime {
    type EasingOptions =
        | "linear"
        | "easeInQuad"
        | "easeInCubic"
        | "easeInQuart"
        | "easeInQuint"
        | "easeInSine"
        | "easeInExpo"
        | "easeInCirc"
        | "easeInBack"
        | "easeInElastic"
        | "easeInBounce"
        | "easeOutQuad"
        | "easeOutCubic"
        | "easeOutQuart"
        | "easeOutQuint"
        | "easeOutSine"
        | "easeOutExpo"
        | "easeOutCirc"
        | "easeOutBack"
        | "easeOutElastic"
        | "easeOutBounce"
        | "easeInOutQuad"
        | "easeInOutCubic"
        | "easeInOutQuart"
        | "easeInOutQuint"
        | "easeInOutSine"
        | "easeInOutExpo"
        | "easeInOutCirc"
        | "easeInOutBack"
        | "easeInOutElastic"
        | "easeInOutBounce";
    type DirectionOptions = "reverse" | "alternate" | "normal";

    interface AnimeCallBack {
        begin?: AnimeCallbackFunction;
        change?: AnimeCallbackFunction;
        update?: AnimeCallbackFunction;
        complete?: AnimeCallbackFunction;
        loopBegin?: AnimeCallbackFunction;
        loopComplete?: AnimeCallbackFunction;
        changeBegin?: AnimeCallbackFunction;
        changeComplete?: AnimeCallbackFunction;
    }

    interface AnimeInstanceParams extends AnimeCallBack {
        loop?: number | boolean;
        autoplay?: boolean;
        direction?: DirectionOptions | string;
    }

    interface AnimeAnimParams extends AnimeCallBack {
        targets?: AnimeTarget | ReadonlyArray<AnimeTarget>;

        duration?: number | FunctionBasedParameter;
        delay?: number | FunctionBasedParameter;
        endDelay?: number | FunctionBasedParameter;
        elasticity?: number | FunctionBasedParameter;
        round?: number | boolean | FunctionBasedParameter;
        keyframes?: ReadonlyArray<AnimeAnimParams>;

        easing?: EasingOptions | string | CustomEasingFunction | ((el: HTMLElement) => string);

        [AnyAnimatedProperty: string]: any;
    }

    interface AnimeParams extends AnimeInstanceParams, AnimeAnimParams {
        // Just need this to merge both Params interfaces.
    }

    interface AnimeInstance extends AnimeCallBack {
        play(): void;
        pause(): void;
        restart(): void;
        reverse(): void;
        seek(time: number): void;
        tick(time: number): void;

        began: boolean;
        paused: boolean;
        completed: boolean;
        finished: Promise<void>;

        autoplay: boolean;
        currentTime: number;
        delay: number;
        direction: string;
        duration: number;
        loop: number | boolean;
        timelineOffset: number;
        progress: number;
        remaining: number;
        reversed: boolean;

        animatables: ReadonlyArray<object>;
        animations: ReadonlyArray<object>;
    }

    interface AnimeTimelineAnimParams extends AnimeAnimParams {
        timelineOffset: number | string | FunctionBasedParameter;
    }

    interface AnimeTimelineInstance extends AnimeInstance {
        add(params: AnimeAnimParams, timelineOffset?: string | number): AnimeTimelineInstance;
    }

    interface StaggerOptions {
        start?: number | string;
        direction?: 'normal' | 'reverse';
        easing?: CustomEasingFunction | string | EasingOptions;
        grid?: ReadonlyArray<number>;
        axis?: 'x' | 'y';
        from?: 'first' | 'last' | 'center' | number;
    }

    // Helpers
    const version: string;
    const speed: number;
    const running: AnimeInstance[];
    const easings: { [EasingFunction: string]: (t: number) => any };
    function remove(targets: AnimeTarget | ReadonlyArray<AnimeTarget>): void;
    function get(targets: AnimeTarget, prop: string): string | number;
    function path(path: string | HTMLElement | SVGElement | null, percent?: number): (prop: string) => {
        el: HTMLElement | SVGElement,
        property: string,
        totalLength: number
    };
    function setDashoffset(el: HTMLElement | SVGElement | null): number;
    function bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number;
    function stagger(value: number | string | ReadonlyArray<number | string>, options?: StaggerOptions): FunctionBasedParameter;
    function set(targets: AnimeTarget, value: {[AnyAnimatedProperty: string]: any}): void;
    // Timeline
    function timeline(params?: AnimeParams | ReadonlyArray<AnimeInstance>): AnimeTimelineInstance;
    function random(min: number, max: number): number;
}

declare function anime(params: anime.AnimeParams): anime.AnimeInstance;

export = anime;
export as namespace anime;
