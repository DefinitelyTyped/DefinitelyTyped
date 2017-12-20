import {Request, RouteOptions, ServerRealm, Util} from "hapi";

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
    method: Util.HTTP_METHODS_PARTIAL;

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

    auth: {
        /**
         * Validates a request against the route's authentication access configuration, where:
         * @param request - the request object.
         * @return Return value: true if the request would have passed the route's access requirements.
         * Note that the route's authentication mode and strategies are ignored. The only match is made between the request.auth.credentials scope and entity information and the route access configuration.
         * If the route uses dynamic scopes, the scopes are constructed against the request.query, request.params, request.payload, and request.auth.credentials which may or may not match between the route and the request's route. If this method is called using a request that has not been authenticated (yet or not at all), it will return false if the route requires any authentication.
         * [See docs](https://hapijs.com/api/17.0.1#-requestrouteauthaccessrequest)
         */
        access(request: Request): boolean;
    }

}
