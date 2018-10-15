// Type definitions for react-circular-progressbar 1.0
// Project: https://github.com/iqnivek/react-circular-progressbar#readme
// Definitions by: Lee Standen <https://github.com/lstanden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, CSSProperties } from 'react';

export default class CircularProgressbar extends Component<Props> {}

export interface Props {
    percentage: number;
    className?: string;
    classes?: ProgressbarClasses;
    styles?: ProgressbarStyles;
    strokeWidth?: number;
    background?: boolean;
    backgroundPadding?: number;
    initialAnimation?: boolean;
    counterClockwise?: boolean;
    text?: string;
}

export interface GroupOverride<T> {
    root?: T;
    trail?: T;
    path?: T;
    text?: T;
    background?: T;
}

export interface ProgressbarClasses extends GroupOverride<string> {}

export interface ProgressbarStyles extends GroupOverride<CSSProperties> {}
