// Type definitions for react-motion
// Project: https://github.com/chenglou/react-motion
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
//                 Dimitar Nestorov <https://github.com/dimitarnestorov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
    stiffness?: number | undefined;
    /**
     * Specifies damping
     * @defaults 26
     */
    damping?: number | undefined;
    /**
        * Specifies both the rounding of the interpolated value and the speed (internal).
         * @defaults 0.01
        */
    precision?: number | undefined;
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
    defaultStyle?: PlainStyle | undefined;
    /**
     * Object that maps to either number or opaque config returned by spring().
     * Must keep same keys throughout component's existence
     */
    style: Style;
    /**
     * Callback with your interpolated styles. Must return one react element to render
     * @param interpolatedStyle
     */
    children?: ((interpolatedStyle: PlainStyle) => JSX.Element) | undefined;
    /**
     * The callback that fires when the animation comes to a rest.
     */
    onRest?: (() => void) | undefined;
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
    key: string;
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
    defaultStyles?: Array<TransitionPlainStyle> | undefined;
    /**
     * Styles to interpolate. Accepts array of TransitionStyle objects or interpolated function similar as for
     * <StaggeredMotion/>
     */
    styles: Array<TransitionStyle> | InterpolateFunction;
    children?: ((interpolatedStyles: Array<TransitionPlainStyle>) => JSX.Element) | undefined;
    /**
     * Triggers when a new element will appear
     * @param styleThatEntered
     */
    willEnter?: ((styleThatEntered: TransitionStyle) => PlainStyle) | undefined;
    /**
     * Triggers when an element will disappear
     * @param styleThatLeft
     */
    willLeave?: ((styleThatLeft: TransitionStyle) => Style | void) | undefined;
    /**
     * Triggers when an element has disappeared
     * @param styleThatLeft
     */
    didLeave?: ((styleThatLeft: TransitionStyle) => void) | undefined;
}
export class TransitionMotion extends Component<TransitionProps> { }


interface StaggeredMotionProps {
    children: (interpolatedStyles: any) => React.ReactElement;
    /**
     * Default styles
     */
    defaultStyles?: Array<PlainStyle> | undefined;
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
