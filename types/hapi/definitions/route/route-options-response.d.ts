import {Lifecycle, Util} from "hapi";
import {ValidationOptions} from "joi";

export type RouteOptionsResponseSchema = boolean | ValidationOptions | ((value: object | Buffer | string, options: ValidationOptions) => Promise<any>);

/**
 * Processing rules for the outgoing response.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponse)
 */
export interface RouteOptionsResponse {

    /**
     * Default value: 200.
     * The default HTTP status code when the payload is considered empty. Value can be 200 or 204. Note that a 200 status code is converted to a 204 only at the time of response transmission (the response status code will remain 200 throughout the request lifecycle unless manually set).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseemptystatuscode)
     */
    emptyStatusCode?: 200 | 204;

    /**
     * Default value: 'error' (return an Internal Server Error (500) error response).
     * A failAction value which defines what to do when a response fails payload validation.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsefailaction)
     */
    failAction?: Lifecycle.FailAction;

    /**
     * Default value: false.
     * If true, applies the validation rule changes to the response payload.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsemodify)
     */
    modify?: boolean;

    /**
     * Default value: none.
     * [joi](http://github.com/hapijs/joi) options object pass to the validation function. Useful to set global options such as stripUnknown or abortEarly (the complete list is available here). If a custom validation function is defined via schema or status then options can an arbitrary object that will be passed to this function as the second argument.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseoptions)
     */
    options?: ValidationOptions; // TODO needs validation

    /**
     * Default value: true.
     * If false, payload range support is disabled.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseranges)
     */
    ranges?: boolean;

    /**
     * Default value: 100 (all responses).
     * The percent of response payloads validated (0 - 100). Set to 0 to disable all validation.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsesample)
     */
    sample?: number;

    /**
     * Default value: true (no validation).
     * The default response payload validation rules (for all non-error responses) expressed as one of:
     * * true - any payload allowed (no validation).
     * * false - no payload allowed.
     * * a joi validation object. The options along with the request context ({ headers, params, query, payload, app, auth }) are passed to the validation function.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the pending response payload.
     * * * options - The options along with the request context ({ headers, params, query, payload, app, auth }).
     * * * if the function returns a value and modify is true, the value is used as the new response. If the original response is an error, the return value is used to override the original error output.payload. If an error is thrown, the error is processed according to failAction.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseschema)
     */
    schema?: RouteOptionsResponseSchema;

    /**
     * Default value: none.
     * Validation schemas for specific HTTP status codes. Responses (excluding errors) not matching the listed status codes are validated using the default schema.
     * status is set to an object where each key is a 3 digit HTTP status code and the value has the same definition as schema.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsestatus)
     */
    status?: Util.Dictionary<RouteOptionsResponseSchema>;

}
