// Type definitions for react-svg-morph 0.2
// Project: https://github.com/gorangajic/react-svg-morph#readme
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface MorphReplaceProps {
    children: React.ReactElement;
    width?: number;
    height?: number;
    viewBox?: string;
    duration?: number;
    rotation?: string;
    preserveAspectRatio?: string;
    easing?: (props: any) => number;
}

export interface MorphTransitionProps {
    width?: number;
    height?: number;
    viewBox?: string;
    propgress?: number;
    rotation?: string;
    children: {
        from: React.ReactElement;
        to: React.ReactElement;
    };
}

export const MorphReplace: React.ComponentClass<MorphReplaceProps>;

export const MorphReplaceResize: React.ComponentClass<MorphReplaceProps>;

export const MorphTransition: React.ComponentClass<MorphTransitionProps>;

export const MorphTransitionResize: React.ComponentClass<MorphTransitionProps>;
