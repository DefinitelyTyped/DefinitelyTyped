// Type definitions for react-motion
// Project: https://github.com/chenglou/react-motion
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>, Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, ReactElement } from 'react';


// your typical style object given in props. Maps to a number or a spring config
export type Style = { [key: string]: number | OpaqueConfig };
// the interpolating style object, with the same keys as the above Style object,
// with the values mapped to numbers, naturally
export type PlainStyle = { [key: string]: number };
// internal velocity object. Similar to PlainStyle, but whose numbers represent
// speed. Might be exposed one day.
export type Velocity = { [key: string]: number };

/**
 * Spring additional configuration
 */
interface SpringHelperConfig {
    /**
     * Specified stiffness
     * @defaults 170
     */
    stiffness?: number;
    /**
     * Specifies damping
     * @defaults 26
     */
    damping?: number;
    /**
        * Specifies both the rounding of the interpolated value and the speed (internal).
         * @defaults 0.01
        */
    precision?: number;
}


export interface OpaqueConfig {
    val: number;
    stiffness: number;
    damping: number;
    precision: number;
}

/**
 * <Motion/> properties
 */
interface MotionProps {
    /**
     * The default style. Being ignored on subsequent renders
     * @default Object with same keys as in style whose values are the initial numbers you're interpolating on
     */
    defaultStyle?: PlainStyle;
    /**
     * Object that maps to either number or opaque config returned by spring().
     * Must keep same keys throughout component's existence
     */
    style: Style;
    /**
     * Callback with your interpolated styles. Must return one react element to render
     * @param interpolatedStyle
     */
    children?: (interpolatedStyle: PlainStyle) => ReactElement<any>;
    /**
     * The callback that fires when the animation comes to a rest.
     */
    onRest?: () => void;
}

export declare class Motion extends Component<MotionProps> { }

// === TransitionMotion ===
interface TransitionStyle {
    /**
     * The ID that TransitionMotion uses to track which configuration is which across renders, even when things are reordered.
     * Typically reused as the component key when you map over the interpolated styles.
     */
    key: string;
    /**
     * Anything you'd like to carry along. Will be preserved on re-renders until key off
     */
    data?: any;
    /**
     * Actual starting style configuration
     */
    style: Style; // actual style you're passing
}
/**
 * Default style for transition
 */
interface TransitionPlainStyle {
    key: any;
    data?: any;
    // same as TransitionStyle, passed as argument to style/children function
    style: PlainStyle;
}
type InterpolateFunction = (previousInterpolatedStyles?: Array<TransitionPlainStyle>) => Array<TransitionStyle>;
/**
 * Transition properties
 */
interface TransitionProps {
    /**
     * Default styles on first render
     */
    defaultStyles?: Array<TransitionPlainStyle>;
    /**
     * Styles to interpolate. Accepts array of TransitionStyle objects or interpolated function similar as for
     * <StaggeredMotion/>
     */
    styles: Array<TransitionStyle> | InterpolateFunction;
    children?: (interpolatedStyles: Array<TransitionPlainStyle>) => ReactElement<any>;
    /**
     * Triggers when new elements appears
     * @param styleThatEntered
     */
    willEnter?: (styleThatEntered: TransitionStyle) => PlainStyle;
    /**
     * Triggers when new element disappears
     * @param styleThatLeft
     */
    willLeave?: (styleThatLeft: TransitionStyle) => Style | void;
}
export class TransitionMotion extends Component<TransitionProps> { }


interface StaggeredMotionProps {
    /**
     * Default styles
     */
    defaultStyles?: Array<PlainStyle>;
    /**
     * Styles to interpolate
     * @param previousInterpolatedStyles The previously interpolating (array of) styles (undefined at first render, unless defaultStyles is provided).
     */
    styles: (previousInterpolatedStyles?: Array<PlainStyle>) => Array<Style>;
}
export declare class StaggeredMotion extends Component<StaggeredMotionProps> { }


/**
* Used in conjunction with the components below. Specifies the how to animate to the destination value, e.g. spring(10, {stiffness: 120, damping: 17}) means "animate to value 10, with a spring of stiffness 120 and damping 17".
*/
export declare function spring(val: number, config?: SpringHelperConfig): OpaqueConfig;

export declare class Presets {
    noWobble: OpaqueConfig; // the default, if nothing provided
    gentle: OpaqueConfig;
    wobbly: OpaqueConfig;
    stiff: OpaqueConfig;
}

export declare const presets: Presets;
