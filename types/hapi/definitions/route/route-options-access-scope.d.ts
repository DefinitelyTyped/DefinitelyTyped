import {RouteOptionsAccessEntity} from "hapi";

/**
 * Each rule is evaluated against an incoming request and access is granted if at least one of the rules matches.
 * Each rule object must include at least one of [scope](https://github.com/hapijs/hapi/blob/master/API.md#route.options.auth.access.scope) or [entity](https://github.com/hapijs/hapi/blob/master/API.md#route.options.auth.access.entity).
 */
export interface RouteOptionsAccessObject {

    /**
     * Default value: false (no scope requirements).
     * The application scope required to access the route. Value can be a scope string or an array of scope strings. When authenticated, the credentials object scope property must contain at least one of the scopes defined to access the route.
     * If a scope string begins with a + character, that scope is required. If a scope string begins with a ! character, that scope is forbidden. For example, the scope ['!a', '+b', 'c', 'd'] means the incoming request credentials' scope must not include 'a', must include 'b', and must include one of 'c' or 'd'.
     * You may also access properties on the request object (query, params, payload, and credentials) to populate a dynamic scope by using the '{' and '}' characters around the property name, such as 'user-{params.id}'.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthaccessscope)
     */
    scope?: false | string | string[];

    /**
     * Default value: 'any'.
     * The required authenticated entity type. If set, must match the entity value of the request authenticated credentials. Available values:
     * * 'any' - the authentication can be on behalf of a user or application.
     * * 'user' - the authentication must be on behalf of a user which is identified by the presence of a 'user' attribute in the credentials object returned by the authentication strategy.
     * * 'app' - the authentication must be on behalf of an application which is identified by the lack of presence of a user attribute in the credentials object returned by the authentication strategy.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthaccessentity)
     */
    entity?: RouteOptionsAccessEntity;

}
