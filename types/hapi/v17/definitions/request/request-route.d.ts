import {RouteOptions, ServerRealm, HTTP_METHODS_PARTIAL} from "hapi";

/**
 * The request route information object, where:
 * * method - the route HTTP method.
 * * path - the route path.
 * * vhost - the route vhost option if configured.
 * * realm - the active realm associated with the route.
 * * settings - the route options object with all defaults applied.
 * * fingerprint - the route internal normalized string representing the normalized path.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestroute)
 */
export interface RequestRoute {
    /** the route HTTP method. */
    method: HTTP_METHODS_PARTIAL;
    /** the route path. */
    path: string;
    /** the route vhost option if configured. */
    vhost?: string | string[];
    /** the active realm associated with the route.*/
    realm: ServerRealm;
    /** the route options object with all defaults applied. */
    settings: RouteOptions;
    /** the route internal normalized string representing the normalized path. */
    fingerprint: string;
}
