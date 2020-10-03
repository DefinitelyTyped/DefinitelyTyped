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
    gridRef?: () => void;
    component?: string;
    itemComponent?: string;
    gutterWidth?: number;
    gutterHeight?: number;
    duration?: number;
    easing?: string;
    appearDelay?: number;
    appear?: () => void;
    appeared?: () => void;
    enter?: () => void;
    entered?: () => void;
    leaved?: () => void;
    units?: Units;
    monitorImagesLoaded?: boolean;
    vendorPrefix?: boolean;
    userAgent?: string;
    enableSSR?: boolean;
    onLayout?: () => void;
    horizontal?: boolean;
    rtl?: boolean;
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
