import { ComponentType } from '@wordpress/element';

/**
 * Higher-order component creator, creating a new component which renders if
 * the viewport query is satisfied.
 *
 * @param query - Viewport query.
 *
 * @example
 * ```jsx
 * function MyMobileComponent() {
 * 	return <div>I'm only rendered on mobile viewports!</div>;
 * }
 *
 * MyMobileComponent = ifViewportMatches( '< small' )( MyMobileComponent );
 * ```
 */
// prettier-ignore
declare function ifViewportMatches(query: string):
    <T extends ComponentType<any>>(component: T) =>
        T extends ComponentType<infer U> ? ComponentType<U> :
        never;

export default ifViewportMatches;
