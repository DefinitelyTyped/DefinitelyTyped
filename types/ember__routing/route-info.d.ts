// https://api.emberjs.com/ember/4.0/classes/RouteInfo
/**
 * A `RouteInfo` is an object that contains metadata about a specific route within a `Transition`.
 * It is read-only and internally immutable.
 * It is also not observable, because a `Transition` instance is never changed after creation.
 */
export default interface RouteInfo {
    /**
     * A reference to the childe route's `RouteInfo`.
     * This can be used to traverse downward to the leafmost `RouteInfo`.
     */
    readonly child: RouteInfo | null;
    /**
     * The final segment of the fully-qualified name of the route, like "index".
     */
    readonly localName: string;
    /**
     * The dot-separated, fully-qualified name of the route, like "people.index".
     */
    readonly name: string;
    /**
     * The ordered list of the names of the params required for this route.
     * It will contain the same strings as `Object.keys(params)`, but here the order is significant.
     * This allows users to correctly pass params into routes programmatically.
     */
    readonly paramNames: string[];
    /**
     * The values of the route's parameters.
     * These are the same params that are received as arguments to the route's `model` hook.
     * Contains only the parameters valid for this route, if any (params for parent or child routes are not merged).
     */
    readonly params: { [key: string]: string | undefined };
    /**
     * A reference to the parent route's `RouteInfo`.
     * This can be used to traverse upward to the topmost `RouteInfo`.
     */
    readonly parent: RouteInfo | null;
    /**
     * The values of any query params on this route.
     */
    readonly queryParams: { [key: string]: string | undefined };
    /**
     * Will contain the result `Route#buildRouteInfoMetadata`
     * for the corresponding Route.
     */
    readonly metadata: unknown;
    /**
     * Allows you to traverse through the linked list of `RouteInfo`s from the topmost to leafmost.
     * Returns the first `RouteInfo` in the linked list for which the callback returns true.
     *
     * @param callback the callback to execute.
     */
    find(callback: (item: RouteInfo) => boolean): RouteInfo | undefined;
}

// https://api.emberjs.com/ember/4.0/classes/RouteInfoWithAttributes
/**
 * A `RouteInfoWithAttributes` is an object that contains
 * metadata, including the resolved value from the routes
 * `model` hook. Like `RouteInfo`, a `RouteInfoWithAttributes`
 * represents a specific route within a Transition.
 * It is read-only and internally immutable. It is also not
 * observable, because a Transition instance is never
 * changed after creation.
 */
export interface RouteInfoWithAttributes extends RouteInfo {
    /**
     * This is the resolved return value from the
     * route's model hook.
     */
    readonly attributes: unknown;
}
