import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, TransitionStyle } from 'react-motion';
import { RouteProps } from "react-router-dom";

declare module "react-router-transition" {
    /**
     * Object containing styles
     */
    interface Styles extends React.CSSProperties {
        [x: string]: any;
    }
    /**
     * Object containing animated styles
     */
    type AnimatableStyles = {
        [x in keyof React.CSSProperties]: React.CSSProperties[x] | OpaqueConfig;
    } & {
        [x: string]: any;
    };

    /**
     * AnimatedSwitch's props
     * @see {@link http://maisano.github.io/react-router-transition/animated-switch/props}
     */
    interface AnimatedSwitchProps {
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
        mapStyles?: (originalStylesObject: Styles) => React.CSSProperties;
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
        children: React.ReactNode|React.ReactNodeArray|React.ReactChildren;
    }

    /**
     * A <Switch />, but with transitions when the child route changes.
     * Allows for animating sibling routes with a mounting and unmounting transition.
     * @see {@link http://maisano.github.io/react-router-transition/animated-switch}
     * @see {@link https://reactrouter.com/web/api/Switch}
     */
    const AnimatedSwitch: React.ComponentClass<AnimatedSwitchProps>;

    /**
     * RouteTransition's props. Similar to AnimatedSwitchProps.
     * @see {@link http://maisano.github.io/react-router-transition/animated-switch/props|}
     */
    type RouteTransitionProps = AnimatedSwitchProps;
    /**
     * Internally used to create the transitions.
     */
    const RouteTransition: React.ComponentClass<RouteTransitionProps>;

    /**
     * AnimatedRoute's props. Extends RouteProps except `location`.
     * @see {@link http://maisano.github.io/react-router-transition/animated-route/props|AnimatedRouteProps}
     */
    interface AnimatedRouteProps extends
        Pick<AnimatedSwitchProps, Exclude<keyof AnimatedSwitchProps, "children">>,
        Pick<RouteProps, "children"|"component"|"exact"|"path"|"render"|"sensitive"|"strict"> {}
    /**
     * A <Route />, but with mounting & unmounting transitions.
     * @see {@link http://maisano.github.io/react-router-transition/animated-route|AnimatedRoute}
     * @see {@link https://reactrouter.com/web/api/Route|Route}
     */
    const AnimatedRoute: React.ComponentClass<AnimatedRouteProps>;

    function spring(val: number, config?: SpringHelperConfig): OpaqueConfig;
    function ensureSpring(originalStylesObject: Styles): {
        [K in keyof Styles]: Styles[K] extends number ? OpaqueConfig : Styles[K];
    };
}
