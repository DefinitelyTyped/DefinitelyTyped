import * as React from "react";

export default Radium;

// @Radium decorator
declare function Radium<TElement extends Function>(component: TElement): TElement;
declare function Radium(config: Radium.RadiumConfig): (component?: any) => any;
declare namespace Radium {
    interface StyleRules {
        [index: string]: React.CSSProperties | StyleRules;
    }

    /**
     * Style component properties
     */
    export interface StyleProps {
        /**
         * An object of styles, or an object of CSS rules to render. Each key of the rules object is a CSS
         * selector and the value is an object of styles. If rules is empty, the component will render nothing.
         */
        rules: React.CSSProperties | StyleRules;
        /**
         * A string that any included selectors in rules will be appended to.
         * Use to scope styles in the component to a particular element. A good use case might be to generate a unique
         * ID for a component to scope any styles to the particular component that owns the <Style> component instance.
         */
        scopeSelector?: string | undefined;
    }

    /**
     * <Style />
     */
    export class Style extends React.Component<StyleProps> {
    }

    /**
     * StyleRoot component properties
     */
    export interface StyleRootProps extends React.HTMLProps<StyleRoot> {
        radiumConfig?: RadiumConfig | undefined;
    }
    /**
     * <StyleRoot />
     */
    export class StyleRoot extends React.Component<StyleRootProps> {
    }

    /**
     * Radium configuration
     */
    export interface RadiumConfig {
        /**
         * Allow to replace matchMedia function that Radium uses. The default one is window.matchMedia
         * @param mediaQuery
         */
        matchMedia?: ((mediaQuery: string) => MediaQueryList) | undefined;
        /**
         * Set the user agent passed to inline-style-prefixer to perform prefixing on style objects.
         * Mainly used during server rendering
         */
        userAgent?: string | undefined;
        /**
         * List of plugins
         */
        plugins?: Array<any> | undefined;
    }

    /**
     * Query Radium's knowledge of the browser state for a given element key.
     * This is particularly useful if you would like to set styles for one element when another element is in a particular state,
     * e.g. show a message when a button is hovered.
     *
     * Note that the target element specified by elementKey must have the state you'd like to check defined in
     * its style object so that Radium knows to add the handlers. It can be empty, e.g. ':hover': {}.
     * @param state you'll usually pass this.state, but sometimes you may want to pass a previous state, like in shouldComponentUpdate, componentWillUpdate, and componentDidUpdate
     * @param elementKey if you used multiple elements, pass the same key="" or ref="". If you only have one element, you can leave it blank ('main' will be inferred)
     * @param value one of the following: :active, :focus, and :hover
     */
    export function getState(state: any, elementKey: string | void, value: ":active" | ":focus" | ":hover"): boolean;

    /**
     * Create a keyframes animation for use in an inline style.
     * @param keyframes
     * @param name
     */
    export function keyframes(keyframes: StyleRules, name?: string): Object;

    // Radium 0.17 Test mode
    /**
     * Used to control internal Radium state and behavior during tests. It is only available in non-production builds.
     */
    interface RadiumTestMode {
        /**
         * Clears the global Radium state, currently only the cache of media query listeners.
         */
        clearState(): void;
        /**
         * Enables "test mode", which doesn’t throw or warn as much. Currently it just doesn’t throw when using addCSS without StyleRoot.
         */
        enable(): void;
        /**
         * Disables "test mode"
         */
        disable(): void;
    }

    var TestMode: RadiumTestMode;
}
