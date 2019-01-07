// Type definitions for styled-anime 0.1
// Project: https://github.com/geni429/styled-anime
// Definitions by: geni429 <https://github.com/geni429>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="react" />

import { CSSObject, SimpleInterpolation } from "styled-components";
import { AnimeAnimParams } from "animejs";

export interface AnimeFunction {
    (config: StyledAnimeParams): React.ComponentClass<
        StyledAnimeComponentProps
    >;
}

export interface StyledFunction {
    (
        style: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
    ): AnimeFunction;
}

export type Value = {
    value?: string | number;
} & StyledAnimeParams;

export type VaildTransformsValue =
    | string
    | number
    | Value
    | ReadonlyArray<string | number | Value>;

export interface AnimatedProperties {
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
}

export interface StyledAnimeComponentProps {
    children?: React.ReactNode;
    played?: boolean;
}

export type StyledAnimeParams = Partial<AnimeAnimParams> & AnimatedProperties;

export function styledAnime(
    TargetComponent: keyof JSX.IntrinsicElements | React.ComponentType<any>
): StyledFunction;
