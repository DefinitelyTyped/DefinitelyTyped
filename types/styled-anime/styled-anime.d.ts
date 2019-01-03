// Type definitions for styled-anime
// Project: https://github.com/geni429/styled-anime
// Definitions by: geni429 <https://github.com/geni429>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="../react" />
/// <reference types="../animejs" />

import { CSSObject, SimpleInterpolation } from "../styled-components";

export = styledAnime;
export as namespace styledAnime;

declare namespace styledAnime {
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

    type DirectionOptions = "reverse" | "alternate" | "normal";

    type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

    type FunctionBasedParameter = (
        element: HTMLElement,
        index: number,
        length: number
    ) => number;

    type Value = {
        value: string | number;
    };

    type VaildTransformsValue =
        | string
        | number
        | Value
        | Array<string>
        | Array<number>
        | Array<Value>;

    type AnimatedProperties = {
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

    interface StyledAnimeComponentProps {
        children?: React.ReactNode;
        played?: boolean;
    }

    interface StyledAnimeParams extends AnimatedProperties {
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

    interface AnimeFunction {
        (config: StyledAnimeParams): React.PureComponent<
            StyledAnimeComponentProps
        >;
    }

    interface StyledFunction {
        (
            style: TemplateStringsArray | CSSObject,
            ...interpolations: SimpleInterpolation[]
        ): AnimeFunction;
    }

    function styledAnime(
        TargetComponent: keyof JSX.IntrinsicElements | React.ComponentType<any>
    ): StyledFunction;
}
