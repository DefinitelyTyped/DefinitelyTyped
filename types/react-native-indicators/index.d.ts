// Type definitions for react-native-indicators 0.16
// Project: https://github.com/n4kz/react-native-indicators#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';
import { Animated, EasingFunction, StyleProp, ViewStyle } from 'react-native';
export interface BaseIndicatorProps {
    /**
     * Animation easing function
     * @default Easing.linear
     */
    animationEasing?: EasingFunction | undefined;

    /**
     * Animation duration in ms
     * @default 1200
     */
    animationDuration?: number | undefined;

    /**
     * Animation toggle
     * @default true
     */
    animating?: boolean | undefined;

    /**
     * Animation is interaction
     * @default true
     */
    interaction?: boolean | undefined;

    /**
     * Style is proxied to the underlying View
     * @default undefined
     */
    style?: StyleProp<ViewStyle> | undefined;

    /**
     * Hide when not animating
     * @default true
     */
    hidesWhenStopped?: boolean | undefined;
}

export interface UIActivityIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;
    /**
     * Component count
     * @default 12
     */
    count?: number | undefined;
    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;
}

export class UIActivityIndicator extends Component<UIActivityIndicatorProps> {}

export interface BallIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;
    /**
     * Component count
     * @default 8
     */
    count?: number | undefined;
    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;
}

export class BallIndicator extends Component<BallIndicatorProps> {}

export interface BarIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;
    /**
     * Component count
     * @default 3
     */
    count?: number | undefined;
    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;
}

export class BarIndicator extends Component<BarIndicatorProps> {}

export interface DotIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;
    /**
     * Component count
     * @default 4
     */
    count?: number | undefined;
    /**
     * Base component size
     * @default 16
     */
    size?: number | undefined;
}

export class DotIndicator extends Component<DotIndicatorProps> {}

export interface MaterialIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;

    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;

    /**
     * Indicator track width
     * @default 'size / 10'
     */
    trackWidth?: number | undefined;
}

export class MaterialIndicator extends Component<MaterialIndicatorProps> {}

export interface PulseIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;

    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;
}

export class PulseIndicator extends Component<PulseIndicatorProps> {}

export interface PacmanIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;

    /**
     * Base component size
     * @default 48
     */
    size?: number | undefined;
}

export class PacmanIndicator extends Component<PacmanIndicatorProps> {}

export interface SkypeIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;
    /**
     * Component count
     * @default 5
     */
    count?: number | undefined;
    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;
    /**
     * Minimum component scale
     * @default 0.2
     */
    minScale?: number | undefined;
    /**
     * Maximum component scale
     * @default 1.0
     */
    maxScale?: number | undefined;
}

export class SkypeIndicator extends Component<SkypeIndicatorProps> {}

export interface WaveIndicatorProps extends BaseIndicatorProps {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string | undefined;
    /**
     * Component count
     * @default 4
     */
    count?: number | undefined;
    /**
     * Base component size
     * @default 40
     */
    size?: number | undefined;
    /**
     * Minimum component scale
     * @default 0.54
     */
    waveFactor?: number | undefined;
    /**
     * Maximum component scale
     * @default 'fill'
     */
    waveMode?: 'fill' | 'outline' | undefined;
}

export class WaveIndicator extends Component<WaveIndicatorProps> {}
