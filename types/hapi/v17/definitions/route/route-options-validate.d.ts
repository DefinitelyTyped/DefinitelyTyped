import {Lifecycle, RouteOptionsResponseSchema} from "hapi";
import {ValidationOptions} from "joi";

/**
 * Default value: { headers: true, params: true, query: true, payload: true, failAction: 'error' }.
 * Request input validation rules for various request components.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidate)
 */
export interface RouteOptionsValidate {

    /**
     * Default value: none.
     * An optional object with error fields copied into every validation error response.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateerrorfields)
     */
    errorFields?: object;

    /**
     * Default value: 'error' (return a Bad Request (400) error response).
     * A failAction value which determines how to handle failed validations. When set to a function, the err argument includes the type of validation error under err.output.payload.validation.source.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidatefailaction)
     */
    failAction?: Lifecycle.FailAction;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request headers:
     * * true - any headers allowed (no validation performed).
     * * a joi validation object.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.headers object containing the request headers.
     * * * options - options.
     * * * if a value is returned, the value is used as the new request.headers value and the original value is stored in request.orig.headers. Otherwise, the headers are left unchanged. If an error is thrown, the error is handled according to failAction.
     * Note that all header field names must be in lowercase to match the headers normalized by node.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateheaders)
     */
    headers?: RouteOptionsResponseSchema;

    /**
     * Default value: none.
     * An options object passed to the joi rules or the custom validation methods. Used for setting global options such as stripUnknown or abortEarly (the complete list is available here).
     * If a custom validation function (see headers, params, query, or payload above) is defined then options can an arbitrary object that will be passed to this function as the second parameter.
     * The values of the other inputs (i.e. headers, query, params, payload, app, and auth) are added to the options object under the validation context (accessible in rules as Joi.ref('$query.key')).
     * Note that validation is performed in order (i.e. headers, params, query, and payload) and if type casting is used (e.g. converting a string to a number), the value of inputs not yet validated will reflect the raw, unvalidated and unmodified values.
     * If the validation rules for headers, params, query, and payload are defined at both the server routes level and at the route level, the individual route settings override the routes defaults (the rules are not merged).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateparams)
     */
    options?: ValidationOptions | object;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request path parameters, after matching the path against the route, extracting any parameters, and storing them in request.params, where:
     * * true - any path parameter value allowed (no validation performed).
     * * a joi validation object.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.params object containing the request path parameters.
     * * * options - options.
     * if a value is returned, the value is used as the new request.params value and the original value is stored in request.orig.params. Otherwise, the path parameters are left unchanged. If an error is thrown, the error is handled according to failAction.
     * Note that failing to match the validation rules to the route path parameters definition will cause all requests to fail.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateparams)
     */
    params?: RouteOptionsResponseSchema;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request payload (request body), where:
     * * true - any payload allowed (no validation performed). false - no payload allowed.
     * * a joi validation object. Note that empty payloads are represented by a null value. If a validation schema is provided and empty payload are allowed, the schema must be explicitly defined by setting the rule to a joi schema with null allowed (e.g. Joi.object({  keys here  }).allow(null)).
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.query object containing the request query parameters.
     * * * options - options.
     * if a value is returned, the value is used as the new request.payload value and the original value is stored in request.orig.payload. Otherwise, the payload is left unchanged. If an error is thrown, the error is handled according to failAction.
     * Note that validating large payloads and modifying them will cause memory duplication of the payload (since the original is kept), as well as the significant performance cost of validating large amounts of data.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidatepayload)
     */
    payload?: RouteOptionsResponseSchema;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request URI query component (the key-value part of the URI between '?' and '#'). The query is parsed into its individual key-value pairs, decoded, and stored in request.query prior to validation. Where:
     * * true - any query parameter value allowed (no validation performed). false - no query parameter value allowed.
     * * a joi validation object.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.query object containing the request query parameters.
     * * * options - options.
     * if a value is returned, the value is used as the new request.query value and the original value is stored in request.orig.query. Otherwise, the query parameters are left unchanged. If an error is thrown, the error is handled according to failAction.
     * Note that changes to the query parameters will not be reflected in request.url.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidatequery)
     */
    query?: RouteOptionsResponseSchema;

}
