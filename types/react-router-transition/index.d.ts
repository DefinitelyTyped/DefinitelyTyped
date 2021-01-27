import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, TransitionStyle } from 'react-motion';
import {RouteProps} from "react-router-dom";

interface _Styles extends React.CSSProperties {
    [x: string]: any;
}

interface CommonProps {
    /**
     * Objects with numerical values, expressing the interpolatable states a component will have when mounted.
     */
    atActive: _Styles | OpaqueConfig;
    /**
     * Objects with numerical values, expressing the interpolatable states a component will have when mounting.
     */
    atEnter: _Styles;
    /**
     * Objects with numerical values, expressing the interpolatable states a component will have when unmounting.
     */
    atLeave: _Styles | OpaqueConfig;
    /**
     * A class name to apply to the root node of the transition.
     */
    className?: string;
    /**
     * Triggers when an element has disappeared.
     * @param styleThatLeft
     */
    didLeave?: (styleThatLeft: TransitionStyle) => void;
    /**
     * An optional function for transforming values that don't map 1:1 with styles
     * (e.g. `translateX` or other values of the `transform` style property).
     *
     * Converts the style object to a strict CSSProperties object
     * @param originalStylesObject
     */
    mapStyles?: (originalStylesObject: _Styles) => React.CSSProperties;
    /**
     * A boolean flag to signal whether or not to apply a transition to the child component while mounting the parent.
     * @default false
     */
    runOnMount?: boolean;
    /**
     * The element type (`'div'`, `'span'`, etc.) to wrap the transitioning routes with.
     * Use `false` to transition child components themselves, though <u>this requires
     * consuming a `style` prop that gets injected into your component</u>.
     */
    wrapperComponent?: false | keyof HTMLElementTagNameMap | React.Component;
}

declare module "react-router-transition"
{
    /**
     * Object containing styles
     */
    export interface Styles extends _Styles {}

    /**
     * AnimatedRoute's props. Extends RouteProps except `location`.
     * @see http://maisano.github.io/react-router-transition/animated-route/props
     */
    export interface AnimatedRouteProps extends CommonProps, Pick<RouteProps,"children"|"component"|"exact"|"path"|"render"|"sensitive"|"strict"> {}
    /**
     * A <Route />, but with mounting & unmounting transitions.
     * @see http://maisano.github.io/react-router-transition/animated-route
     * @see https://reactrouter.com/web/api/Route
     */
    export const AnimatedRoute: React.ComponentClass<AnimatedRouteProps>;

    /**
     * AnimatedSwitch's props
     * @see http://maisano.github.io/react-router-transition/animated-switch/props
     */
    export interface AnimatedSwitchProps extends CommonProps {
        children: React.ReactNode|React.ReactNodeArray|React.ReactChildren
    }

    /**
     * A <Switch />, but with transitions when the child route changes.
     * Allows for animating sibling routes with a mounting and unmounting transition.
     * @see http://maisano.github.io/react-router-transition/animated-switch
     * @see https://reactrouter.com/web/api/Switch
     */
    export const AnimatedSwitch: React.ComponentClass<AnimatedSwitchProps>;

    /**
     * RouteTransition's props. Similar to AnimatedSwitchProps.
     * @see http://maisano.github.io/react-router-transition/animated-switch/props
     */
    export interface RouteTransitionProps extends AnimatedSwitchProps {}
    /**
     * Internally used to create the transitions.
     */
    export const RouteTransition: React.ComponentClass<RouteTransitionProps>;

    export function spring(val: number, config?: SpringHelperConfig): OpaqueConfig;
    export function ensureSpring(originalStylesObject: Styles): {
        [K in keyof Styles]: Styles[K] extends number ? OpaqueConfig : Styles[K];
    };
}
