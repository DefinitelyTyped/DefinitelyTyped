// Type definitions for halogen 0.2
// Project: https://github.com/yuanyan/halogen
// Definitions by: Vincent Rouffiat <https://github.com/steller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as react from "react";

type VerticalAlign = "baseline" | "length" | "sub" | "super" | "top" | "text-top" | "middle" | "bottom" | "text-bottom" | "initial" | "inherit";

interface HalogenCommonProps {
  loading?: boolean;
  color?: string;
  id?: string;
  className?: string;
  verticalAlign?: VerticalAlign;
}

interface SizeLoaderProps extends HalogenCommonProps {
  size?: string;
}

interface MarginLoaderProps<T> extends HalogenCommonProps {
  margin?: T;
  size?: T;
}

interface RadiusLoaderProps extends MarginLoaderProps<string> {
  height?: string;
  width?: string;
  radius?: string;
}

/**
 * React components
 */
type PulseLoader = react.Component<MarginLoaderProps<string>, {}>;
export const PulseLoader: react.ComponentClass<MarginLoaderProps<string>>;

type RotateLoader = react.Component<MarginLoaderProps<string>, {}>;
export const RotateLoader: react.ComponentClass<MarginLoaderProps<string>>;

type BeatLoader = react.Component<MarginLoaderProps<string>, {}>;
export const BeatLoader: react.ComponentClass<MarginLoaderProps<string>>;

type RiseLoader = react.Component<MarginLoaderProps<string>, {}>;
export const RiseLoader: react.ComponentClass<MarginLoaderProps<string>>;

type SyncLoader = react.Component<MarginLoaderProps<string>, {}>;
export const SyncLoader: react.ComponentClass<MarginLoaderProps<string>>;

type GridLoader = react.Component<MarginLoaderProps<string>, {}>;
export const GridLoader: react.ComponentClass<MarginLoaderProps<string>>;

type ClipLoader = react.Component<SizeLoaderProps, {}>;
export const ClipLoader: react.ComponentClass<SizeLoaderProps>;

type SquareLoader = react.Component<SizeLoaderProps, {}>;
export const SquareLoader: react.ComponentClass<SizeLoaderProps>;

type DotLoader = react.Component<SizeLoaderProps, {}>;
export const DotLoader: react.ComponentClass<SizeLoaderProps>;

type PacmanLoader = react.Component<MarginLoaderProps<number>, {}>;
export const PacmanLoader: react.ComponentClass<MarginLoaderProps<number>>;

type MoonLoader = react.Component<SizeLoaderProps, {}>;
export const MoonLoader: react.ComponentClass<SizeLoaderProps>;

type RingLoader = react.Component<SizeLoaderProps, {}>;
export const RingLoader: react.ComponentClass<SizeLoaderProps>;

type BounceLoader = react.Component<SizeLoaderProps, {}>;
export const BounceLoader: react.ComponentClass<SizeLoaderProps>;

type SkewLoader = react.Component<SizeLoaderProps, {}>;
export const SkewLoader: react.ComponentClass<SizeLoaderProps>;

type FadeLoader = react.Component<RadiusLoaderProps, {}>;
export const FadeLoader: react.ComponentClass<RadiusLoaderProps>;

type ScaleLoader = react.Component<RadiusLoaderProps, {}>;
export const ScaleLoader: react.ComponentClass<RadiusLoaderProps>;
