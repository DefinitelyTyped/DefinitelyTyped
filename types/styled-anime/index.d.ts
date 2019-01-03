// Type definitions for styled-anime
// Project: https://github.com/geni429/styled-anime
// Definitions by: geni429 <https://github.com/geni429>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="../react" />
/// <reference types="../animejs" />

import { CSSObject, SimpleInterpolation } from "../styled-components";

export as namespace styledAnime;

export namespace styledAnime {
    export type EasingOptions =
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
        | "easeOutQuad"
        | "easeOutCubic"
        | "easeOutQuart"
        | "easeOutQuint"
        | "easeOutSine"
        | "easeOutExpo"
        | "easeOutCirc"
        | "easeOutBack"
        | "easeOutElastic"
        | "easeInOutQuad"
        | "easeInOutCubic"
        | "easeInOutQuart"
        | "easeInOutQuint"
        | "easeInOutSine"
        | "easeInOutExpo"
        | "easeInOutCirc"
        | "easeInOutBack"
        | "easeInOutElastic";

    export type DirectionOptions = "reverse" | "alternate" | "normal";

    export type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

    export type FunctionBasedParameter = (
        element: HTMLElement,
        index: number,
        length: number
    ) => number;

    export type Value = {
        value: string | number;
    };

    export type VaildTransformsValue =
        | string
        | number
        | Value
        | Array<string>
        | Array<number>
        | Array<Value>;

    export type AnimatedProperties = {
        translateX?: VaildTransformsValue;
        translateY?: VaildTransformsValue;
        translateZ?: VaildTransformsValue;
        rotate?: VaildTransformsValue;
        rotateX?: VaildTransformsValue;
        rotateY?: VaildTransformsValue;
        rotateZ?: VaildTransformsValue;
        scale?: VaildTransformsValue;
        scaleX?: VaildTransformsValue;
        scaleY?: VaildTransformsValue;
        scaleZ?: VaildTransformsValue;
        skewX?: VaildTransformsValue;
        skewY?: VaildTransformsValue;
        perspective?: VaildTransformsValue;
        offset?: number;
    };

    export interface StyledAnimeComponentProps {
        children?: React.ReactNode;
        played?: boolean;
    }

    export interface StyledAnimeParams extends AnimatedProperties {
        loop?: number | boolean;
        autoplay?: boolean;
        direction?: DirectionOptions | string;

        duration?: number | FunctionBasedParameter;
        delay?: number | FunctionBasedParameter;
        elasticity?: number | FunctionBasedParameter;
        round?: number | boolean | FunctionBasedParameter;

        easing?: EasingOptions | string | ReadonlyArray<number>;

        begin?: AnimeCallbackFunction;
        run?: AnimeCallbackFunction;
        update?: AnimeCallbackFunction;
        complete?: AnimeCallbackFunction;
    }

    export interface AnimeFunction {
        (config: StyledAnimeParams): React.PureComponent<
            StyledAnimeComponentProps
        >;
    }

    export interface StyledFunction {
        (
            style: TemplateStringsArray | CSSObject,
            ...interpolations: SimpleInterpolation[]
        ): AnimeFunction;
    }

    export function styledAnime(
        TargetComponent: keyof JSX.IntrinsicElements | React.ComponentType<any>
    ): StyledFunction;
}
