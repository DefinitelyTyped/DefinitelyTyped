import {Lifecycle, Request, ResponseToolkit, Server} from "hapi";

/**
 * The scheme options argument passed to server.auth.strategy() when instantiation a strategy.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme)
 */
export type ServerAuthSchemeOptions = object;

/**
 * the method implementing the scheme with signature function(server, options) where:
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme)
 * @param server - a reference to the server object the scheme is added to.
 * @param options - (optional) the scheme options argument passed to server.auth.strategy() when instantiation a strategy.
 */
export interface ServerAuthScheme {
    (server: Server, options?: ServerAuthSchemeOptions): ServerAuthSchemeObject;
}

export interface ServerAuthSchemeObjectApi {
}

/**
 * The scheme method must return an object with the following
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#authentication-scheme)
 */
export interface ServerAuthSchemeObject {

    /**
     * optional object which is exposed via the [server.auth.api](https://github.com/hapijs/hapi/blob/master/API.md#server.auth.api) object.
     */
    api?: ServerAuthSchemeObjectApi;

    /**
     * A lifecycle method function called for each incoming request configured with the authentication scheme. The
     * method is provided with two special toolkit methods for returning an authenticated or an unauthenticate result:
     * * h.authenticated() - indicate request authenticated successfully.
     * * h.unauthenticated() - indicate request failed to authenticate.
     * @param request the request object.
     * @param h the ResponseToolkit
     * @return the Lifecycle.ReturnValue
     */
    authenticate(request: Request, h: ResponseToolkit): Lifecycle.ReturnValue;

    /**
     * A lifecycle method to authenticate the request payload.
     * When the scheme payload() method returns an error with a message, it means payload validation failed due to bad
     * payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')),
     * authentication may still be successful if the route auth.payload configuration is set to 'optional'.
     * @param request the request object.
     * @param h the ResponseToolkit
     * @return the Lifecycle.ReturnValue
     */
    payload?(request: Request, h: ResponseToolkit): Lifecycle.ReturnValue;

    /**
     * A lifecycle method to decorate the response with authentication headers before the response headers or payload is written.
     * @param request the request object.
     * @param h the ResponseToolkit
     * @return the Lifecycle.ReturnValue
     */
    response?(request: Request, h: ResponseToolkit): Lifecycle.ReturnValue;

    /**
     * An object with the following keys:
     * * payload
     */
    options?: {
        /**
         * if true, requires payload validation as part of the scheme and forbids routes from disabling payload auth validation. Defaults to false.
         */
        payload?: boolean;
    };

}
