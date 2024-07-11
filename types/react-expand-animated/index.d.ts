import * as CSS from "csstype";
import * as React from "react";

export interface ExpandProps {
    /**
     * The expanded or collapsed content
     */
    children: React.ReactNode;

    /**
     * When set to true expand the children component otherwise collapse it
     */
    open?: boolean;

    /**
     * Animation duration in ms
     */
    duration?: number;

    /**
     * Css3 Animation's type
     */
    easing?: CSS.Property.TransitionTimingFunction;

    /**
     * Wrapper's className
     */
    className?: string;

    /**
     * Wrapper's tag
     */
    tag?: React.ElementType;

    /**
     * Transition attributes
     */
    transitions?: Array<keyof React.CSSProperties>;

    /**
     * Additional inline-styles on open or close phase
     *
     * @example { open: { marginTop: 100 }, close: { marginTop: 0 } }
     */
    styles?: {
        open?: React.CSSProperties;
        close?: React.CSSProperties;
    };
}

declare const Expand: React.ComponentType<ExpandProps>;
export default Expand;
