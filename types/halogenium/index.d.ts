// Type definitions for halogenium 2.3
// Project: https://github.com/kirillDanshin/halogenium#readme
// Definitions by: Weslley Nascimento Rocha <https://github.com/WeslleyNasRocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type VerticalAlign =
  | 'baseline'
  | 'length'
  | 'sub'
  | 'super'
  | 'top'
  | 'text-top'
  | 'middle'
  | 'bottom'
  | 'text-bottom'
  | 'initial'
  | 'inherit';

export interface HalogenCommonProps {
  loading?: boolean;
  color?: string;
  id?: string;
  className?: string;
  verticalAlign?: VerticalAlign;
}

export interface SizeLoaderProps extends HalogenCommonProps {
  size?: number | string;
}

export interface MarginLoaderProps extends HalogenCommonProps {
  margin?: number | string;
  size?: number | string;
}

export interface RadiusLoaderProps extends MarginLoaderProps {
  height?: number | string;
  width?: number | string;
  radius?: number | string;
}

/**
 * React components
 */
export class PulseLoader extends React.Component<MarginLoaderProps> { }

export class RotateLoader extends React.Component<MarginLoaderProps> { }

export class BeatLoader extends React.Component<MarginLoaderProps> { }

export class RiseLoader extends React.Component<MarginLoaderProps> { }

export class SyncLoader extends React.Component<MarginLoaderProps> { }

export class GridLoader extends React.Component<MarginLoaderProps> { }

export class ClipLoader extends React.Component<SizeLoaderProps> { }

export class SquareLoader extends React.Component<SizeLoaderProps> { }

export class DotLoader extends React.Component<SizeLoaderProps> { }

export class PacmanLoader extends React.Component<MarginLoaderProps> { }

export class MoonLoader extends React.Component<SizeLoaderProps> { }

export class RingLoader extends React.Component<SizeLoaderProps> { }

export class BounceLoader extends React.Component<SizeLoaderProps> { }

export class SkewLoader extends React.Component<SizeLoaderProps> { }

export class FadeLoader extends React.Component<RadiusLoaderProps> { }

export class ScaleLoader extends React.Component<RadiusLoaderProps> { }
