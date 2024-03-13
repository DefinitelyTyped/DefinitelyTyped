import * as React from "react";

// Disable automatic exports.
export {};

/**
 * The built-in Omit doesn't error out if omitted key doesn't exist on the main type.
 */
type StrictOmit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

// Function that returns getters, which are turned into injected props.
interface MapStateToProps<TInjectedPropNames extends string | number | symbol> {
    (props?: any): {
        // mapStateToProps doesn't actually return the injected props.
        // Instead, it returns the Nuclear.js getter. So the type
        // definition here maps the prop key/name to "any" (since getters
        // can't be statically typed).
        [propName in TInjectedPropNames]: any;
    };
}

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render. Also adds new prop requirements from TNeedsProps.
interface ComponentConnector<TInjectedPropNames extends string | number | symbol> {
    // Use "= any" so that if component prop type cannot be inferred (e.g.
    // if using "createReactClass", then we'll end up with
    // ComponentClass<any>, instead of ComponentClass<{}>.
    <P extends { [keyName in TInjectedPropNames]?: any } = any>(
        component: React.ComponentType<P>,
    ): React.ComponentClass<StrictOmit<P, TInjectedPropNames>>;
}

/**
 * Connects a React component to a Nuclear.js store.
 *
 * `connect()` provides its connected component with the pieces of the data
 * it needs from the store. This data is supplied via props, which are
 * configured in the passed-in `mapStateToProps` function.
 *
 * `connect()` does not modify the component passed to it; instead, it
 * returns a new, connected component class that wraps the component you
 * passed in.
 *
 * @template TInjectedPropNames Names of props injected by `mapStateToProps`.
 */
declare function connect<TInjectedPropNames extends string | number | symbol>(
    mapStateToProps: MapStateToProps<TInjectedPropNames>,
): ComponentConnector<TInjectedPropNames>;

/**
 * Container component allowing a reactor to be exposed via context.
 */
declare const Provider: any;

/**
 * Mixin expecting a context.reactor on the component
 *
 * Should be used if a higher level component has been
 * wrapped with provideReactor
 */
declare const nuclearMixin: any;

/**
 * Provides reactor prop to all children as React context
 *
 * Example:
 *   var WrappedComponent = provideReactor(Component, {
 *     foo: React.PropTypes.string
 *   });
 *
 * Also supports the decorator pattern:
 * ```ts
 *   @provideReactor({
 *     foo: React.PropTypes.string
 *   })
 *   class BaseComponent extends React.Component {
 *     render() {
 *       return <div/>;
 *     }
 *   }
 * ```
 *
 * @param [Component] Component to wrap
 * @param [additionalContextTypes] Additional contextTypes to add
 * @returns Returns function if using decorator pattern
 */
declare const provideReactor: any;

/**
 * Provides dataBindings + reactor as props to wrapped component.
 *
 * Example:
 * ```
 * var WrappedComponent = nuclearComponent(Component, function(props) {
 *   return { counter: 'counter' };
 * );
 * ```
 *
 * Also supports the decorator pattern:
 *
 * ```js
 * @nuclearComponent((props) => {
 *   return { counter: 'counter' }
 * })
 * class BaseComponent extends React.Component {
 *   render() {
 *     const { counter, reactor } = this.props;
 *     return <div/>;
 *   }
 * }
 * ```
 *
 * @param [Component] Component to wrap
 * @param [getDataBindings] Function which returns dataBindings to listen for data change
 * @returns Returns function if using decorator pattern
 */
declare const nuclearComponent: any;

export { connect, nuclearComponent, nuclearMixin, Provider, provideReactor };
