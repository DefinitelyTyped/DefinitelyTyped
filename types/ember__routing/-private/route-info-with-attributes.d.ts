import RouteInfo from './route-info';

// https://api.emberjs.com/ember/3.6/classes/RouteInfoWithAttributes
/**
 * A `RouteInfoWithAttributes` is an object that contains
 * metadata, including the resolved value from the routes
 * `model` hook. Like `RouteInfo`, a `RouteInfoWithAttributes`
 * represents a specific route within a Transition.
 * It is read-only and internally immutable. It is also not
 * observable, because a Transition instance is never
 * changed after creation.
 */
export default interface RouteInfoWithAttributes extends RouteInfo {
    /**
     * This is the resolved return value from the
     * route's model hook.
     */
    readonly attributes: unknown;
}
