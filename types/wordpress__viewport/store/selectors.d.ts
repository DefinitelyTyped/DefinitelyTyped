/**
 * Returns `true` if the viewport matches the given query, or `false` otherwise.
 *
 * @param query - Query string. Includes operator and breakpoint name, space separated.
 *                Operator defaults to `>=`.
 *
 * @example
 * ```js
 * isViewportMatch( '< huge' );
 * isViewPortMatch( 'medium' );
 * ```
 */
export function isViewportMatch(query: string): boolean;
