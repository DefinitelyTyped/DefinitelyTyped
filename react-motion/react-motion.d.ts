// Type definitions for react-motion
// Project: https://github.com/chenglou/react-motion
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-motion" {
    import { Component } from 'react';

    // your typical style object given in props. Maps to a number or a spring config
    export type Style = { [key: string]: number | OpaqueConfig };
    // the interpolating style object, with the same keys as the above Style object,
    // with the values mapped to numbers, naturally
    export type PlainStyle = { [key: string]: number };
    // internal velocity object. Similar to PlainStyle, but whose numbers represent
    // speed. Might be exposed one day.
    export type Velocity = { [key: string]: number };
    interface SpringHelperConfig {
        stiffness: number;
        damping: number;
        /**
        * Specifies both the rounding of the interpolated value and the speed (internal).
        */
        precision?: number;
        // TODO: add onRest. Not public yet
    }

    export interface OpaqueConfig {
        val: number;
        stiffness: number;
        damping: number;
        precision: number;
        // TODO: add onRest. Not public yet
    }

    interface MotionProps {
        defaultStyle?: any;
        style: any;
    }

    export class Motion extends Component<MotionProps, any> { }

    // === TransitionMotion ===
    interface TransitionStyle {
        key: any; // unique ID to identify component across render animations
        data?: any; // optional data you want to carry along the style, e.g. itemText
        style: Style; // actual style you're passing
    }
    interface TransitionPlainStyle {
        key: any;
        data?: any;
        // same as TransitionStyle, passed as argument to style/children function
        style: PlainStyle;
    }
    type InterpolateFunction = (previousInterpolatedStyles?: Array<TransitionPlainStyle>) => Array<TransitionStyle>;
    type Styles = Array<TransitionStyle> | InterpolateFunction;
    interface TransitionProps {
        defaultStyles?: Array<TransitionPlainStyle>;
        styles: Styles;
        children: (interpolatedStyles: Array<TransitionPlainStyle>) => __React.ReactElement<any>;
        willEnter?: (styleThatEntered: TransitionStyle) => PlainStyle;
        willLeave?: (styleThatLeft: TransitionStyle) => Style;
    }
    export class TransitionMotion extends Component<any, any> { }

    interface StaggeredMotionProps {
        defaultStyles?: Array<PlainStyle>;
        styles: (previousInterpolatedStyles?: Array<PlainStyle>) => Array<Style>;
    }
    export class StaggeredMotion extends Component<StaggeredMotionProps, any> { }


    /**
    * Used in conjunction with the components below. Specifies the how to animate to the destination value, e.g. spring(10, {stiffness: 120, damping: 17}) means "animate to value 10, with a spring of stiffness 120 and damping 17".
    */
    export function spring(val: number, config?: SpringHelperConfig): OpaqueConfig;

    export class Presets {
        noWobble: OpaqueConfig; // the default, if nothing provided
        gentle: OpaqueConfig;
        wobbly: OpaqueConfig;
        stiff: OpaqueConfig;
    }

    export const presets: Presets;
}
