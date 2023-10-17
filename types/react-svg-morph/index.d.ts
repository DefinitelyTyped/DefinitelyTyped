import * as React from "react";

export interface MorphReplaceProps {
    children: React.ReactElement;
    width?: number | undefined;
    height?: number | undefined;
    viewBox?: string | undefined;
    duration?: number | undefined;
    rotation?: string | undefined;
    preserveAspectRatio?: string | undefined;
    easing?: ((props: any) => number) | undefined;
}

export interface MorphTransitionProps {
    width?: number | undefined;
    height?: number | undefined;
    viewBox?: string | undefined;
    propgress?: number | undefined;
    rotation?: string | undefined;
    children: {
        from: React.ReactElement;
        to: React.ReactElement;
    };
}

export const MorphReplace: React.ComponentClass<MorphReplaceProps>;

export const MorphReplaceResize: React.ComponentClass<MorphReplaceProps>;

export const MorphTransition: React.ComponentClass<MorphTransitionProps>;

export const MorphTransitionResize: React.ComponentClass<MorphTransitionProps>;
