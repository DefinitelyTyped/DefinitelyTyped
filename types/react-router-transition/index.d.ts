// Type definitions for react-router-transition 2.1
// Project: https://github.com/maisano/react-router-transition, https://www.npmjs.com/package/react-router-transition
// Definitions by: TheDSCPL <https://github.com/TheDSCPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, TransitionStyle } from 'react-motion';
import { RouteProps } from "react-router-dom";

/**
 * Object containing styles
 */
export interface Styles extends React.CSSProperties {
    [x: string]: any;
}
/**
 * Object containing animated styles
 */
export type AnimatableStyles = {
    [x in keyof React.CSSProperties]: React.CSSProperties[x] | OpaqueConfig;
} & {
    [x: string]: any;
};

// I don't want to export CommonProps because it's here for DRY reasons
export {};
interface CommonProps {
    /**
     * Objects with numerical values, expressing the interpolatable states a component will have when mounted.
     */
    atActive: AnimatableStyles;
    /**
     * Objects with numerical values, expressing the interpolatable states a component will have when mounting.
     */
    atEnter: Styles;
    /**
     * Objects with numerical values, expressing the interpolatable states a component will have when unmounting.
     */
    atLeave: AnimatableStyles;
    /**
     * A class name to apply to the root node of the transition.
     */
    className?: string | undefined;
    /**
     * Triggers when an element has disappeared.
     */
    didLeave?: ((styleThatLeft: TransitionStyle) => void) | undefined;
    /**
     * An optional function for transforming values that don't map 1:1 with styles
     * (e.g. `translateX` or other values of the `transform` style property).
     *
     * Converts the style object to a strict CSSProperties object
     * @param originalStylesObject styles object to be mapped to an actual styles object
     */
    mapStyles?: ((originalStylesObject: any) => AnimatableStyles) | undefined;
    /**
     * A boolean flag to signal whether or not to apply a transition to the child component while mounting the parent.
     * Default: false
     */
    runOnMount?: boolean | undefined;
    /**
     * The element type (`'div'`, `'span'`, etc.) to wrap the transitioning routes with.
     * Use `false` to transition child components themselves, though <u>this requires
     * consuming a `style` prop that gets injected into your component</u>.
     */
    wrapperComponent?: false | keyof HTMLElementTagNameMap | React.Component | undefined;
}

/**
 * AnimatedSwitch's props
 * http://maisano.github.io/react-router-transition/animated-switch/props
 */
export interface AnimatedSwitchProps extends CommonProps {
    children: React.ReactNode;
}

/**
 * A <Switch />, but with transitions when the child route changes.
 * Allows for animating sibling routes with a mounting and unmounting transition.
 * http://maisano.github.io/react-router-transition/animated-switch
 */
export const AnimatedSwitch: React.ComponentClass<AnimatedSwitchProps>;

/**
 * RouteTransition's props. Similar to AnimatedSwitchProps.
 * http://maisano.github.io/react-router-transition/animated-switch/props
 */
export type RouteTransitionProps = AnimatedSwitchProps;
/**
 * Internally used to create the transitions.
 */
export const RouteTransition: React.ComponentClass<RouteTransitionProps>;

/**
 * AnimatedRoute's props. Extends RouteProps except `location`.
 * http://maisano.github.io/react-router-transition/animated-route/props
 */
export interface AnimatedRouteProps extends
    CommonProps,
    Pick<RouteProps, "children"|"component"|"exact"|"path"|"render"|"sensitive"|"strict"> {}
/**
 * A <Route />, but with mounting & unmounting transitions.
 * http://maisano.github.io/react-router-transition/animated-route
 */
export const AnimatedRoute: React.ComponentClass<AnimatedRouteProps>;

export function spring(val: number, config?: SpringHelperConfig): OpaqueConfig;
export function ensureSpring(originalStylesObject: Styles): {
    [K in keyof Styles]: Styles[K] extends number ? OpaqueConfig : Styles[K];
};
