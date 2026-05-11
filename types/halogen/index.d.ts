import * as react from "react";

export type VerticalAlign =
    | "baseline"
    | "length"
    | "sub"
    | "super"
    | "top"
    | "text-top"
    | "middle"
    | "bottom"
    | "text-bottom"
    | "initial"
    | "inherit";

export interface HalogenCommonProps {
    loading?: boolean | undefined;
    color?: string | undefined;
    id?: string | undefined;
    className?: string | undefined;
    verticalAlign?: VerticalAlign | undefined;
}

export interface SizeLoaderProps extends HalogenCommonProps {
    size?: string | undefined;
}

export interface MarginLoaderProps<T> extends HalogenCommonProps {
    margin?: T | undefined;
    size?: T | undefined;
}

export interface RadiusLoaderProps extends MarginLoaderProps<string> {
    height?: string | undefined;
    width?: string | undefined;
    radius?: string | undefined;
}

/**
 * React components
 */
export type PulseLoader = react.Component<MarginLoaderProps<string>>;
export const PulseLoader: react.ComponentClass<MarginLoaderProps<string>>;

export type RotateLoader = react.Component<MarginLoaderProps<string>>;
export const RotateLoader: react.ComponentClass<MarginLoaderProps<string>>;

export type BeatLoader = react.Component<MarginLoaderProps<string>>;
export const BeatLoader: react.ComponentClass<MarginLoaderProps<string>>;

export type RiseLoader = react.Component<MarginLoaderProps<string>>;
export const RiseLoader: react.ComponentClass<MarginLoaderProps<string>>;

export type SyncLoader = react.Component<MarginLoaderProps<string>>;
export const SyncLoader: react.ComponentClass<MarginLoaderProps<string>>;

export type GridLoader = react.Component<MarginLoaderProps<string>>;
export const GridLoader: react.ComponentClass<MarginLoaderProps<string>>;

export type ClipLoader = react.Component<SizeLoaderProps>;
export const ClipLoader: react.ComponentClass<SizeLoaderProps>;

export type SquareLoader = react.Component<SizeLoaderProps>;
export const SquareLoader: react.ComponentClass<SizeLoaderProps>;

export type DotLoader = react.Component<SizeLoaderProps>;
export const DotLoader: react.ComponentClass<SizeLoaderProps>;

export type PacmanLoader = react.Component<MarginLoaderProps<number>>;
export const PacmanLoader: react.ComponentClass<MarginLoaderProps<number>>;

export type MoonLoader = react.Component<SizeLoaderProps>;
export const MoonLoader: react.ComponentClass<SizeLoaderProps>;

export type RingLoader = react.Component<SizeLoaderProps>;
export const RingLoader: react.ComponentClass<SizeLoaderProps>;

export type BounceLoader = react.Component<SizeLoaderProps>;
export const BounceLoader: react.ComponentClass<SizeLoaderProps>;

export type SkewLoader = react.Component<SizeLoaderProps>;
export const SkewLoader: react.ComponentClass<SizeLoaderProps>;

export type FadeLoader = react.Component<RadiusLoaderProps>;
export const FadeLoader: react.ComponentClass<RadiusLoaderProps>;

export type ScaleLoader = react.Component<RadiusLoaderProps>;
export const ScaleLoader: react.ComponentClass<RadiusLoaderProps>;
