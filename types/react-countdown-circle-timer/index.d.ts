// Type definitions for react-countdown-circle-timer 1.0
// Project: https://github.com/vydimitrov/react-countdown-circle-timer
// Definitions by: Tim Ittermann <https://github.com/timia2109>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Component, ReactNode } from 'react';

export type ColorType = ReadonlyArray<[ string, number? ]>;
export type StrokeLinecapType = "round" | "square";
export type RenderTimeFunctionType = (remainingTime: number, elapsedTime: number, isPlaying: boolean) => ReactNode;
export type OnCompleteFunctionType = () => [boolean, number] | undefined | void;

export class CountdownCircleTimer extends Component<Props> {}

export interface Props {
    durationSeconds: number;
    colors: ColorType;
    size?: number;
    strokeWidth?: number;
    strokeLinecap?: StrokeLinecapType;
    trailColor?: string;
    isPlaying?: boolean;
    isLinearGradient?: boolean;
    gradientUniqueKey?: string;
    renderTime?: RenderTimeFunctionType;
    onComplete?: OnCompleteFunctionType;
}
