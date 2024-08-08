type FunctionBasedParameter = (element: HTMLElement, index: number, length: number) => number;
type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;
type CustomEasingFunction = (el: HTMLElement, index: number, length: number) => (time: number) => number;
// Allowing null is necessary because DOM queries may not return anything.
type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;

declare namespace anime {
    type UseAsFunction2<T extends string> = `${T}(${number},${number})`;
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
        | "easeInOutBounce"
        | "easeOutBounce"
        | "easeOutInQuad"
        | "easeOutInCubic"
        | "easeOutInQuart"
        | "easeOutInQuint"
        | "easeOutInSine"
        | "easeOutInExpo"
        | "easeOutInCirc"
        | "easeOutInBack"
        | "easeOutInBounce"
        | `cubicBezier(${number},${number},${number},${number})`
        | `spring(${number},${number},${number},${number})`
        | "spring"
        | `steps(${number})`
        | "steps"
        | UseAsFunction2<
            | "easeInElastic"
            | "easeOutElastic"
            | "easeInOutElastic"
            | "easeOutInElastic"
        >;
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
        direction?: DirectionOptions | undefined;
    }

    /**
     * The control parameters for a specific property.
     */
    interface AnimePropertyParams extends AnimeCallBack {
        duration?: number | FunctionBasedParameter | undefined;
        delay?: number | FunctionBasedParameter | undefined;
        endDelay?: number | FunctionBasedParameter | undefined;
        elasticity?: number | FunctionBasedParameter | undefined;
        round?: number | boolean | FunctionBasedParameter | undefined;
        keyframes?: readonly KeyframeParameter[] | undefined;
        easing?:
            | EasingOptions
            | CustomEasingFunction
            | ((el: HTMLElement) => string)
            | undefined;
    }
    interface KeyframeParameter extends Exclude<AnimePropertyParams, "keyframes">, CssProperty, CssTransform {
        [AnyAnimatedProperty: string]: any;
    }

    interface AnimeAnimParams extends AnimePropertyParams, CssProperty, CssTransform {
        targets?: AnimeTarget | readonly AnimeTarget[] | undefined;

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
        tweens: readonly object[];
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

        animatables: readonly Animatable[];
        animations: readonly Animation[];
    }

    interface AnimeTimelineAnimParams extends AnimeAnimParams {
        timelineOffset: number | string | FunctionBasedParameter;
    }

    interface AnimeTimelineInstance extends AnimeInstance {
        add(params: AnimeAnimParams, timelineOffset?: string | number): AnimeTimelineInstance;
    }

    interface StaggerOptions {
        start?: number | string | undefined;
        direction?: "normal" | "reverse" | undefined;
        easing?: CustomEasingFunction | EasingOptions | undefined;
        grid?: readonly number[] | undefined;
        axis?: "x" | "y" | undefined;
        from?: "first" | "last" | "center" | number | undefined;
    }

    // Helpers
    const version: string;
    const speed: number;
    const running: AnimeInstance[];
    const easings: { [EasingFunction: string]: (t: number) => any };
    /** @default true */
    const suspendWhenDocumentHidden: boolean;
    function remove(targets: AnimeTarget | readonly AnimeTarget[]): void;
    function get(targets: AnimeTarget, prop: string, unit?: string): string | number;
    function path(
        path: string | HTMLElement | SVGElement | null,
        percent?: number,
    ): (prop: "x" | "y" | "angle") => MotionPath;
    function setDashoffset(el: HTMLElement | SVGElement | null): number;
    function bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number;
    function stagger(
        value: number | string | ReadonlyArray<number | string>,
        options?: StaggerOptions,
    ): FunctionBasedParameter;
    function set(targets: AnimeTarget, value: { [AnyAnimatedProperty: string]: any }): void;
    // Timeline
    function timeline(params?: AnimeParams | readonly AnimeInstance[]): AnimeTimelineInstance;
    function random(min: number, max: number): number;

    interface MotionPath {
        el: HTMLElement | SVGElement;
        property: string;
        svg: {
            el: HTMLElement;
            h: number;
            vH: number;
            vW: number;
            viewBox: [number, number, number, number];
            w: number;
            x: number;
            y: number;
        };
        totalLength: number;
    }
    type PrimitivePropertyParameter = number | string | FunctionBasedParameter | MotionPath;
    type BasicPropertyParameter = PrimitivePropertyParameter | [PrimitivePropertyParameter, PrimitivePropertyParameter];
    type SpecificPropertyParameter = AnimePropertyParams & { value: BasicPropertyParameter };
    type PropertyParameter = BasicPropertyParameter | SpecificPropertyParameter | readonly SpecificPropertyParameter[];
    type CssProperty = Partial<Record<Exclude<keyof CSSStyleDeclaration, "direction">, PropertyParameter>>;
    type CssTransform = Partial<
        Record<
            | "translateX"
            | "translateY"
            | "translateZ"
            | "rotate"
            | "rotateX"
            | "rotateY"
            | "rotateZ"
            | "scale"
            | "scaleX"
            | "scaleY"
            | "scaleZ"
            | "skew"
            | "skewX"
            | "skewY"
            | "perspective",
            PropertyParameter
        >
    >;
}

declare function anime(params: anime.AnimeParams): anime.AnimeInstance;

export = anime;
export as namespace anime;
