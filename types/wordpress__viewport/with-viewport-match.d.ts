import { ComponentType } from '@wordpress/element';

/**
 * Higher-order component creator, creating a new component which renders with the given prop names,
 * where the value passed to the underlying component is the result of the query assigned as the
 * object's value.
 *
 * @param queries - Object of prop name to viewport query.
 *
 * @example
 *
 * ```jsx
 * function MyComponent( { isMobile } ) {
 * 	return (
 * 		<div>Currently: { isMobile ? 'Mobile' : 'Not Mobile' }</div>
 * 	);
 * }
 *
 * MyComponent = withViewportMatch( { isMobile: '< small' } )( MyComponent );
 * ```
 */
// prettier-ignore
declare function withViewportMatch<T extends Record<string, string>>(queries: T):
    <U extends ComponentType<any>>(component: U) => U extends ComponentType<infer V> ?
        ComponentType<Omit<V, keyof T>> :
        never;

export default withViewportMatch;
