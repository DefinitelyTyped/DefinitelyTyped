// Type definitions for halogenium 2.3
// Project: https://github.com/kirillDanshin/halogenium#readme
// Definitions by: Weslley Nascimento Rocha <https://github.com/WeslleyNasRocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import * as React from "react";

export type VerticalAlign = "baseline" | "length" | "sub" | "super" | "top" | "text-top" | "middle" | "bottom" | "text-bottom" | "initial" | "inherit";

export interface HalogenCommonProps {
  loading?: boolean;
  color?: string;
  id?: string;
  className?: string;
  verticalAlign?: VerticalAlign;
}

export interface SizeLoaderProps extends HalogenCommonProps {
  size?: string;
}

export interface MarginLoaderProps<T> extends HalogenCommonProps {
  margin?: T;
  size?: T;
}

export interface RadiusLoaderProps extends MarginLoaderProps<string> {
  height?: string;
  width?: string;
  radius?: string;
}

/**
 * React components
 */
export type PulseLoader = React.Component<MarginLoaderProps<string>>;
export const PulseLoader: React.ComponentClass<MarginLoaderProps<string>>;

export type RotateLoader = React.Component<MarginLoaderProps<string>>;
export const RotateLoader: React.ComponentClass<MarginLoaderProps<string>>;

export type BeatLoader = React.Component<MarginLoaderProps<string>>;
export const BeatLoader: React.ComponentClass<MarginLoaderProps<string>>;

export type RiseLoader = React.Component<MarginLoaderProps<string>>;
export const RiseLoader: React.ComponentClass<MarginLoaderProps<string>>;

export type SyncLoader = React.Component<MarginLoaderProps<string>>;
export const SyncLoader: React.ComponentClass<MarginLoaderProps<string>>;

export type GridLoader = React.Component<MarginLoaderProps<string>>;
export const GridLoader: React.ComponentClass<MarginLoaderProps<string>>;

export type ClipLoader = React.Component<SizeLoaderProps>;
export const ClipLoader: React.ComponentClass<SizeLoaderProps>;

export type SquareLoader = React.Component<SizeLoaderProps>;
export const SquareLoader: React.ComponentClass<SizeLoaderProps>;

export type DotLoader = React.Component<SizeLoaderProps>;
export const DotLoader: React.ComponentClass<SizeLoaderProps>;

export type PacmanLoader = React.Component<MarginLoaderProps<number>>;
export const PacmanLoader: React.ComponentClass<MarginLoaderProps<number>>;

export type MoonLoader = React.Component<SizeLoaderProps>;
export const MoonLoader: React.ComponentClass<SizeLoaderProps>;

export type RingLoader = React.Component<SizeLoaderProps>;
export const RingLoader: React.ComponentClass<SizeLoaderProps>;

export type BounceLoader = React.Component<SizeLoaderProps>;
export const BounceLoader: React.ComponentClass<SizeLoaderProps>;

export type SkewLoader = React.Component<SizeLoaderProps>;
export const SkewLoader: React.ComponentClass<SizeLoaderProps>;

export type FadeLoader = React.Component<RadiusLoaderProps>;
export const FadeLoader: React.ComponentClass<RadiusLoaderProps>;

export type ScaleLoader = React.Component<RadiusLoaderProps>;
export const ScaleLoader: React.ComponentClass<RadiusLoaderProps>;
