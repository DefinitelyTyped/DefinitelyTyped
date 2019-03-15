// Type definitions for react-native-indicators 0.13
// Project: https://github.com/n4kz/react-native-indicators#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';
import { Animated, EasingFunction } from 'react-native';
export interface BaseIndicatorProps {
    /**
     * Animation easing function
     * @default Easing.linear
     */
    animationEasing?: EasingFunction;

    /**
     * Animation duration in ms
     * @default1200
     */
    animationDuration?: number;
}

export interface UIActivityIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;
    /**
     * Component count
     * @default 12
     */
    count?: number;
    /**
     * Base component size
     * @default 40
     */
    size?: number;
}

export class UIActivityIndicator extends Component<
    UIActivityIndicatorProps
> {}

export interface BallIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;
    /**
     * Component count
     * @default 8
     */
    count?: number;
    /**
     * Base component size
     * @default 40
     */
    size?: number;
}

export class BallIndicator extends Component<BallIndicatorProps> {}

export interface BarIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;
    /**
     * Component count
     * @default 3
     */
    count?: number;
    /**
     * Base component size
     * @default 40
     */
    size?: number;
}

export class BarIndicator extends Component<BarIndicatorProps> {}

export interface DotIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;
    /**
     * Component count
     * @default 4
     */
    count?: number;
    /**
     * Base component size
     * @default 16
     */
    size?: number;
}

export class DotIndicator extends Component<DotIndicatorProps> {}

export interface MaterialIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;

    /**
     * Base component size
     * @default 40
     */
    size?: number;
}

export class MaterialIndicator extends Component<MaterialIndicatorProps> {}

export interface PulseIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;

    /**
     * Base component size
     * @default 40
     */
    size?: number;
}

export class PulseIndicator extends Component<PulseIndicatorProps> {}

export interface PacmanIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;

    /**
     * Base component size
     * @default 48
     */
    size?: number;
}

export class PacmanIndicator extends Component<PacmanIndicatorProps> {}

export interface SkypeIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;
    /**
     * Component count
     * @default 5
     */
    count?: number;
    /**
     * Base component size
     * @default 40
     */
    size?: number;
    /**
     * Minimum component scale
     * @default 0.2
     */
    minScale?: number;
    /**
     * Maximum component scale
     * @default 1.0
     */
    maxScale?: number;
}

export class SkypeIndicator extends Component<SkypeIndicatorProps> {}

export interface WaveIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string;
    /**
     * Component count
     * @default 4
     */
    count?: number;
    /**
     * Base component size
     * @default 40
     */
    size?: number;
    /**
     * Minimum component scale
     * @default 0.54
     */
    waveFactor?: number;
    /**
     * Maximum component scale
     * @default 'fill'
     */
    waveMode?: 'fill' | 'outline';
}

export class WaveIndicator extends Component<WaveIndicatorProps> {}
