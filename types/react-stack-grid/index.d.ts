// Type definitions for react-stack-grid 0.7
// Project: https://github.com/tsuyoshiwada/react-stack-grid#readme
// Definitions by: Naveen DA <https://github.com/NaveenDA>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

interface Units {
    length: string;
    angle: string;
}
export interface StackGridProps {
    columnWidth: number | string;
    className?: string;
    style?: React.CSSProperties;
    gridRef?: Function;
    component?: string;
    itemComponent?: string;
    gutterWidth?: number;
    gutterHeight?: number;
    duration?: number;
    easing?: string;
    appearDelay?: number;
    appear?: Function;
    appeared?: Function;
    enter?: Function;
    entered?: Function;
    leaved?: Function;
    units?: Units;
    monitorImagesLoaded?: boolean;
    vendorPrefix?: boolean;
    userAgent?: string;
    enableSSR?: boolean;
    onLayout?: Function;
    horizontal?: boolean;
    rtl?: boolean;
}

declare class StackGrid extends React.Component<StackGridProps, any> {}

export default StackGrid;

interface transitionsProps {
    fade: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
    fadeDown: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
    fadeUp: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
    scaleDown: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
    scaleUp: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
    flip: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
    helix: {
        appear: Function;
        appeared: Function;
        enter: Function;
        entered: Function;
        leaved: Function;
    };
}

export const transitions: transitionsProps;
