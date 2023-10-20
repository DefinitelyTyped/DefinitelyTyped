import * as React from "react";

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
    size?: number | string | undefined;
}

export interface MarginLoaderProps extends HalogenCommonProps {
    margin?: number | string | undefined;
    size?: number | string | undefined;
}

export interface RadiusLoaderProps extends MarginLoaderProps {
    height?: number | string | undefined;
    width?: number | string | undefined;
    radius?: number | string | undefined;
}

/**
 * React components
 */
export class PulseLoader extends React.Component<MarginLoaderProps> {}

export class RotateLoader extends React.Component<MarginLoaderProps> {}

export class BeatLoader extends React.Component<MarginLoaderProps> {}

export class RiseLoader extends React.Component<MarginLoaderProps> {}

export class SyncLoader extends React.Component<MarginLoaderProps> {}

export class GridLoader extends React.Component<MarginLoaderProps> {}

export class ClipLoader extends React.Component<SizeLoaderProps> {}

export class SquareLoader extends React.Component<SizeLoaderProps> {}

export class DotLoader extends React.Component<SizeLoaderProps> {}

export class PacmanLoader extends React.Component<MarginLoaderProps> {}

export class MoonLoader extends React.Component<SizeLoaderProps> {}

export class RingLoader extends React.Component<SizeLoaderProps> {}

export class BounceLoader extends React.Component<SizeLoaderProps> {}

export class SkewLoader extends React.Component<SizeLoaderProps> {}

export class FadeLoader extends React.Component<RadiusLoaderProps> {}

export class ScaleLoader extends React.Component<RadiusLoaderProps> {}
