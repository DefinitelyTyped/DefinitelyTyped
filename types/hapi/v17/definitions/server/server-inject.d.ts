import {PluginsStates, Request} from "hapi";
import * as Shot from "shot";

/**
 * An object with:
 * * method - (optional) the request HTTP method (e.g. 'POST'). Defaults to 'GET'.
 * * url - (required) the request URL. If the URI includes an authority (e.g. 'example.com:8080'), it is used to automatically set an HTTP 'Host' header, unless one was specified in headers.
 * * headers - (optional) an object with optional request headers where each key is the header name and the value is the header content. Defaults to no additions to the default shot headers.
 * * payload - (optional) an string, buffer or object containing the request payload. In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload processing defaults to 'application/json' if no 'Content-Type' header provided.
 * * credentials - (optional) an credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Defaults to no credentials.
 * * artifacts - (optional) an artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.
 * * app - (optional) sets the initial value of request.app, defaults to {}.
 * * plugins - (optional) sets the initial value of request.plugins, defaults to {}.
 * * allowInternals - (optional) allows access to routes with config.isInternal set to true. Defaults to false.
 * * remoteAddress - (optional) sets the remote address for the incoming connection.
 * * simulate - (optional) an object with options used to simulate client request stream conditions for testing:
 * * error - if true, emits an 'error' event after payload transmission (if any). Defaults to false.
 * * close - if true, emits a 'close' event after payload transmission (if any). Defaults to false.
 * * end - if false, does not end the stream. Defaults to true.
 * * split - indicates whether the request payload will be split into chunks. Defaults to undefined, meaning payload will not be chunked.
 * * validate - (optional) if false, the options inputs are not validated. This is recommended for run-time usage of inject() to make it perform faster where input validation can be tested separately.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions)
 * For context [Shot module](https://github.com/hapijs/shot)
 */
export interface ServerInjectOptions extends Shot.RequestOptions {
    credentials?: any;
    artifacts?: object;
    app?: any;
    plugins?: PluginsStates;
    allowInternals?: boolean;
}

/**
 * A response object with the following properties:
 * * statusCode - the HTTP status code.
 * * headers - an object containing the headers set.
 * * payload - the response payload string.
 * * rawPayload - the raw response payload buffer.
 * * raw - an object with the injection request and response objects:
 * * req - the simulated node request object.
 * * res - the simulated node response object.
 * * result - the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of the internal objects returned (instead of parsing the response string).
 * * request - the request object.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions)
 * For context [Shot module](https://github.com/hapijs/shot)
 */
export interface ServerInjectResponse extends Shot.ResponseObject {
    result: object | undefined;
    request: Request;
}
