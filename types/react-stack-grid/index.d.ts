import * as React from "react";

interface Units {
    length: string;
    angle: string;
}
export interface Grid {
    updateLayout: () => void;
}
export interface StackGridProps {
    children?: React.ReactNode;
    columnWidth: number | string;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    gridRef?: ((grid: Grid) => void) | undefined;
    component?: string | undefined;
    itemComponent?: string | undefined;
    gutterWidth?: number | undefined;
    gutterHeight?: number | undefined;
    duration?: number | undefined;
    easing?: string | undefined;
    appearDelay?: number | undefined;
    appear?: (() => void) | undefined;
    appeared?: (() => void) | undefined;
    enter?: (() => void) | undefined;
    entered?: (() => void) | undefined;
    leaved?: (() => void) | undefined;
    units?: Units | undefined;
    monitorImagesLoaded?: boolean | undefined;
    vendorPrefix?: boolean | undefined;
    userAgent?: string | undefined;
    enableSSR?: boolean | undefined;
    onLayout?: (() => void) | undefined;
    horizontal?: boolean | undefined;
    rtl?: boolean | undefined;
}

declare class StackGrid extends React.Component<StackGridProps, any> {}

export default StackGrid;

interface transitionsProps {
    fade: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
    fadeDown: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
    fadeUp: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
    scaleDown: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
    scaleUp: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
    flip: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
    helix: {
        appear: () => void;
        appeared: () => void;
        enter: () => void;
        entered: () => void;
        leaved: () => void;
    };
}

export const transitions: transitionsProps;

interface easingProps {
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    sineIn: string;
    sineOut: string;
    sineInOut: string;
    quadIn: string;
    quadOut: string;
    quadInOut: string;
    cubicIn: string;
    cubicOut: string;
    cubicInOut: string;
    quartIn: string;
    quartOut: string;
    quartInOut: string;
    quintIn: string;
    quintOut: string;
    quintInOut: string;
    expoIn: string;
    expoOut: string;
    expoInOut: string;
    circIn: string;
    circOut: string;
    circInOut: string;
    backIn: string;
    backOut: string;
    backInOut: string;
}
export const easings: easingProps;
