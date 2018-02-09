import {Request, ResponseObject, ServerRealm, ServerStateCookieOptions} from "hapi";

/**
 * See more about Lifecycle
 * https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle
 *
 */

export type ResponseValue = string | object;

export interface AuthenticationData {
    credentials: object;
    artifacts?: object;
}

/**
 * The response toolkit is a collection of properties and utilities passed to every [lifecycle method](https://github.com/hapijs/hapi/blob/master/API.md#lifecycle-methods)
 * It is somewhat hard to define as it provides both utilities for manipulating responses as well as other information. Since the
 * toolkit is passed as a function argument, developers can name it whatever they want. For the purpose of this
 * document the h notation is used. It is named in the spirit of the RethinkDB r method, with h for hapi.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#response-toolkit)
 */
export interface ResponseToolkit {

    /**
     * A response symbol. When returned by a lifecycle method, the request lifecycle skips to the finalizing step
     * without further interaction with the node response stream. It is the developer's responsibility to write
     * and end the response directly via [request.raw.res](https://github.com/hapijs/hapi/blob/master/API.md#request.raw).
     */
    readonly abandon: symbol;

    /**
     * A response symbol. When returned by a lifecycle method, the request lifecycle skips to the finalizing step after
     * calling request.raw.res.end()) to close the the node response stream.
     */
    readonly close: symbol;

    /**
     * A response symbol. Provides access to the route or server context set via the route [bind](https://github.com/hapijs/hapi/blob/master/API.md#route.options.bind)
     * option or [server.bind()](https://github.com/hapijs/hapi/blob/master/API.md#server.bind()).
     */
    readonly context: any;

    /**
     * A response symbol. When returned by a lifecycle method, the request lifecycle continues without changing the response.
     */
    readonly continue: symbol;

    /**
     * The [server realm](https://github.com/hapijs/hapi/blob/master/API.md#server.realm) associated with the matching
     * route. Defaults to the root server realm in the onRequest step.
     */
    readonly realm: ServerRealm;

    /**
     * Access: read only and public request interface.
     * The [request] object. This is a duplication of the request lifecycle method argument used by
     * [toolkit decorations](https://github.com/hapijs/hapi/blob/master/API.md#server.decorate()) to access the current request.
     */
    request: Readonly<Request>

    /**
     * Used by the [authentication] method to pass back valid credentials where:
     * @param data - an object with:
     * * credentials - (required) object representing the authenticated entity.
     * * artifacts - (optional) authentication artifacts object specific to the authentication scheme.
     * @return Return value: an internal authentication object.
     */
    authenticated(data: AuthenticationData): object;

    /**
     * Sets the response 'ETag' and 'Last-Modified' headers and checks for any conditional request headers to decide if
     * the response is going to qualify for an HTTP 304 (Not Modified). If the entity values match the request
     * conditions, h.entity() returns a response object for the lifecycle method to return as its value which will
     * set a 304 response. Otherwise, it sets the provided entity headers and returns undefined.
     * The method argumetns are:
     * @param options - a required configuration object with:
     * * etag - the ETag string. Required if modified is not present. Defaults to no header.
     * * modified - the Last-Modified header value. Required if etag is not present. Defaults to no header.
     * * vary - same as the response.etag() option. Defaults to true.
     * @return Return value: - a response object if the response is unmodified. - undefined if the response has changed.
     * If undefined is returned, the developer must return a valid lifecycle method value. If a response is returned,
     * it should be used as the return value (but may be customize using the response methods).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hentityoptions)
     */
    entity(options?: {etag?: string, modified?: string, vary?: boolean}): ResponseObject | undefined;

    /**
     * Redirects the client to the specified uri. Same as calling h.response().redirect(uri).
     * @param url
     * @return Returns a response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hredirecturi)
     */
    redirect(uri?: string): ResponseObject;

    /**
     * Wraps the provided value and returns a response object which allows customizing the response
     * (e.g. setting the HTTP status code, custom headers, etc.), where:
     * @param value - (optional) return value. Defaults to null.
     * @return Returns a response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hresponsevalue)
     */
    response(value?: ResponseValue): ResponseObject;

    /**
     * Sets a response cookie using the same arguments as response.state().
     * @param name of the cookie
     * @param value of the cookie
     * @param (optional) ServerStateCookieOptions object.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hstatename-value-options)
     */
    state(name: string, value: string, options?: ServerStateCookieOptions): void;

    /**
     * Used by the [authentication] method to indicate authentication failed and pass back the credentials received where:
     * @param error - (required) the authentication error.
     * @param data - (optional) an object with:
     * * credentials - (required) object representing the authenticated entity.
     * * artifacts - (optional) authentication artifacts object specific to the authentication scheme.
     * @return void.
     * The method is used to pass both the authentication error and the credentials. For example, if a request included
     * expired credentials, it allows the method to pass back the user information (combined with a 'try'
     * authentication mode) for error customization.
     * There is no difference between throwing the error or passing it with the h.unauthenticated() method is no credentials are passed, but it might still be helpful for code clarity.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hunauthenticatederror-data)
     */
    unauthenticated(error: Error, data?: AuthenticationData): void;

    /**
     * Clears a response cookie using the same arguments as
     * @param name of the cookie
     * @param options (optional) ServerStateCookieOptions object.
     * @return void.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hunstatename-options)
     */
    unstate(name: string, options?: ServerStateCookieOptions): void;

}
