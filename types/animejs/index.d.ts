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
        begin?: AnimeCallbackFunction | undefined;
        change?: AnimeCallbackFunction | undefined;
        update?: AnimeCallbackFunction | undefined;
        complete?: AnimeCallbackFunction | undefined;
        loopBegin?: AnimeCallbackFunction | undefined;
        loopComplete?: AnimeCallbackFunction | undefined;
        changeBegin?: AnimeCallbackFunction | undefined;
        changeComplete?: AnimeCallbackFunction | undefined;
    }

    interface AnimeInstanceParams extends AnimeCallBack {
        loop?: number | boolean | undefined;
        autoplay?: boolean | undefined;
        direction?: DirectionOptions | string | undefined;
    }

    interface AnimeAnimParams extends AnimeCallBack {
        targets?: AnimeTarget | ReadonlyArray<AnimeTarget> | undefined;

        duration?: number | FunctionBasedParameter | undefined;
        delay?: number | FunctionBasedParameter | undefined;
        endDelay?: number | FunctionBasedParameter | undefined;
        elasticity?: number | FunctionBasedParameter | undefined;
        round?: number | boolean | FunctionBasedParameter | undefined;
        keyframes?: ReadonlyArray<AnimeAnimParams> | undefined;

        easing?: EasingOptions | string | CustomEasingFunction | ((el: HTMLElement) => string) | undefined;

        [AnyAnimatedProperty: string]: any;
    }

    interface AnimeParams extends AnimeInstanceParams, AnimeAnimParams {
        // Just need this to merge both Params interfaces.
    }

    interface Animatable {
        id: number;
        target: HTMLElement;
        total: number;
        transforms: object;
    }

    interface Animation {
        animatable: Animatable;
        currentValue: string;
        delay: number;
        duration: number;
        endDelay: number;
        property: string;
        tweens: ReadonlyArray<object>;
        type: string;
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

        animatables: ReadonlyArray<Animatable>;
        animations: ReadonlyArray<Animation>;
    }

    interface AnimeTimelineAnimParams extends AnimeAnimParams {
        timelineOffset: number | string | FunctionBasedParameter;
    }

    interface AnimeTimelineInstance extends AnimeInstance {
        add(params: AnimeAnimParams, timelineOffset?: string | number): AnimeTimelineInstance;
    }

    interface StaggerOptions {
        start?: number | string | undefined;
        direction?: 'normal' | 'reverse' | undefined;
        easing?: CustomEasingFunction | string | EasingOptions | undefined;
        grid?: ReadonlyArray<number> | undefined;
        axis?: 'x' | 'y' | undefined;
        from?: 'first' | 'last' | 'center' | number | undefined;
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
