import {Request, RouteOptionsAccess, ServerAuthScheme, Util} from "hapi";

/**
 * An authentication configuration object using the same format as the route auth handler options.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions)
 */
export interface ServerAuthConfig extends RouteOptionsAccess {

}

export interface ServerAuth {

    /**
     * An object where each key is an authentication strategy name and the value is the exposed strategy API.
     * Available only when the authentication scheme exposes an API by returning an api key in the object
     * returned from its implementation function.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthapi)
     */
    api: Util.Dictionary<any>;

    /**
     * Contains the default authentication configuration is a default strategy was set via
     * [server.auth.default()](https://github.com/hapijs/hapi/blob/master/API.md#server.auth.default()).
     */
    readonly settings: {
        default: ServerAuthConfig;
    }

    /**
     * Sets a default strategy which is applied to every route where:
     * @param options - one of:
     * * a string with the default strategy name
     * * an authentication configuration object using the same format as the route auth handler options.
     * @return void.
     * The default does not apply when a route config specifies auth as false, or has an authentication strategy
     * configured (contains the strategy or strategies authentication settings). Otherwise, the route authentication
     * config is applied to the defaults.
     * Note that if the route has authentication configured, the default only applies at the time of adding the route,
     * not at runtime. This means that calling server.auth.default() after adding a route with some authentication
     * config will have no impact on the routes added prior. However, the default will apply to routes added
     * before server.auth.default() is called if those routes lack any authentication config.
     * The default auth strategy configuration can be accessed via server.auth.settings.default. To obtain the active
     * authentication configuration of a route, use server.auth.lookup(request.route).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions)
     */
    default(options: string | ServerAuthConfig): void;

    /**
     * Registers an authentication scheme where:
     * @param name the scheme name.
     * @param scheme - the method implementing the scheme with signature function(server, options) where:
     * * server - a reference to the server object the scheme is added to.
     * * options - (optional) the scheme options argument passed to server.auth.strategy() when instantiation a strategy.
     * @return void.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme)
     */
    scheme(name: string, scheme: ServerAuthScheme): void;

    /**
     * Registers an authentication strategy where:
     * @param name - the strategy name.
     * @param scheme - the scheme name (must be previously registered using server.auth.scheme()).
     * @param options - scheme options based on the scheme requirements.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthstrategyname-scheme-options)
     */
    strategy(name: string, scheme: string, options?: object): void;

    /**
     * Tests a request against an authentication strategy where:
     * @param strategy - the strategy name registered with server.auth.strategy().
     * @param request - the request object.
     * @return Return value: the authentication credentials object if authentication was successful, otherwise throws an error.
     * Note that the test() method does not take into account the route authentication configuration. It also does not
     * perform payload authentication. It is limited to the basic strategy authentication execution. It does not
     * include verifying scope, entity, or other route properties.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverauthteststrategy-request)
     */
    test(strategy: string, request: Request): any;

}

