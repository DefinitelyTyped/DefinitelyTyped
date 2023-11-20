import * as React from "react";

declare const Progress: React.FunctionComponent<ProgressProps>;

export default Progress;

export interface ProgressProps {
    children?: React.ReactNode;
    size?: number;
    borderWidth?: number | string;
    borderBgWidth?: number | string;
    fillColor?: string;
    emptyColor?: string;
    background?: string;
    className?: string;
    percent?: number;
    linecap?: string;
    isGradient?: boolean;
    transition?: number;
    gradient?: Gradient;
    isShadow?: boolean;
    shadow?: Shadow;
    isBgShadow?: boolean;
    bgShadow?: Shadow;
    viewport?: boolean;
    onViewport?: (element: React.ReactElement) => void | null;
}

export interface Gradient {
    angle?: number;
    startColor?: string;
    stopColor?: string;
}

export interface Shadow {
    inset?: boolean;
    vertical?: number;
    horizontal?: number;
    blur?: number;
    opacity?: number;
    color?: string;
}
