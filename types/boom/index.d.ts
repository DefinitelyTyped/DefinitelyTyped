// Type definitions for boom 4.3
// Project: http://github.com/hapijs/boom
// Definitions by: Igor Rogatty <http://github.com/rogatty>, AJP <http://github.com/AJamesPhillips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Boom;

declare namespace Boom {

    /**
     * boom provides a set of utilities for returning HTTP errors. Each utility returns a Boom error response object (instance of Error) which includes the following properties:
     * @see {@link https://github.com/hapijs/boom#boom}
     */
    export interface BoomError extends Error {
        /** isBoom - if true, indicates this is a Boom object instance. */
        isBoom: boolean;
        /** isServer - convenience bool indicating status code >= 500. */
        isServer: boolean;
        /** message - the error message. */
        message: string;
        /** output - the formatted response. Can be directly manipulated after object construction to return a custom error response. Allowed root keys: */
        output: Output;
        /** reformat() - rebuilds error.output using the other object properties. */
        reformat: () => string;
        /** "If message is unset, the 'error' segment of the header will not be present and isMissing will be true on the error object." mentioned in @see {@link https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes} */
        isMissing?: boolean;
    }

    export interface Output {
        /** statusCode - the HTTP status code (typically 4xx or 5xx). */
        statusCode: number;
        /** headers - an object containing any HTTP headers where each key is a header name and value is the header content. (Limited value type to string https://github.com/hapijs/boom/issues/151 ) */
        headers: {[index: string]: string};
        /** payload - the formatted object used as the response payload (stringified). Can be directly manipulated but any changes will be lost if reformat() is called. Any content allowed and by default includes the following content: */
        payload: Payload;
    }
    export interface Payload {
        /** statusCode - the HTTP status code, derived from error.output.statusCode. */
        statusCode: number;
        /** error - the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from statusCode. */
        error: string;
        /** message - the error message derived from error.message. */
        message: string;
        // Excluded this to aid typing of the other values.  See tests for example casting to a custom interface to manipulate the payload
        // [anyContent: string]: any;
    }

    /**
     * Decorates an error with the boom properties
     * @param error the error object to wrap. If error is already a boom object, returns back the same object.
     * @param statusCode optional HTTP status code. Defaults to 500.
     * @param message optional message string. If the error already has a message, it adds the message as a prefix. Defaults to no message.
     * @see {@link https://github.com/hapijs/boom#wraperror-statuscode-message}
     */
    export function wrap(error: Error, statusCode?: number, message?: string): BoomError;

    /**
     * Generates an Error object with the boom decorations
     * @param statusCode an HTTP error code number. Must be greater or equal 400.
     * @param message optional message string.
     * @param data additional error data set to error.data property.
     * @see {@link https://github.com/hapijs/boom#createstatuscode-message-data}
     */
    export function create(statusCode: number, message?: string, data?: any): BoomError;

    // 4xx
    /**
     * Returns a 400 Bad Request error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boombadrequestmessage-data}
     */
    export function badRequest(message?: string, data?: any): BoomError;

    /**
     * Returns a 401 Unauthorized error
     * @param message optional message.
     * @param scheme can be one of the following:
     *      * an authentication scheme name
     *      * an array of string values. These values will be separated by ', ' and set to the 'WWW-Authenticate' header.
     * @param attributes an object of values to use while setting the 'WWW-Authenticate' header. This value is only used when scheme is a string, otherwise it is ignored. Every key/value pair will be included in the 'WWW-Authenticate' in the format of 'key="value"' as well as in the response payload under the attributes key. Alternatively value can be a string which is use to set the value of the scheme, for example setting the token value for negotiate header. If string is used message parameter must be null. null and undefined will be replaced with an empty string. If attributes is set, message will be used as the 'error' segment of the 'WWW-Authenticate' header. If message is unset, the 'error' segment of the header will not be present and isMissing will be true on the error object.
     * @see {@link https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes}
     */
    export function unauthorized(message?: string, scheme?: string | string[], attributes?: {[index: string]: string}): BoomError;
    export function unauthorized(message?: null, scheme?: string | string[], attributes?: string): BoomError;

    /**
     * Returns a 402 Payment Required error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boompaymentrequiredmessage-data}
     */
    export function paymentRequired(message?: string, data?: any): BoomError;

    /**
     * Returns a 403 Forbidden error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomforbiddenmessage-data}
     */
    export function forbidden(message?: string, data?: any): BoomError;

    /**
     * Returns a 404 Not Found error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomnotfoundmessage-data}
     */
    export function notFound(message?: string, data?: any): BoomError;

    /**
     * Returns a 405 Method Not Allowed error
     * @param message optional message.
     * @param data optional additional error data.
     * @param allow optional string or array of strings (to be combined and separated by ', ') which is set to the 'Allow' header.
     * @see {@link https://github.com/hapijs/boom#boommethodnotallowedmessage-data-allow}
     */
    export function methodNotAllowed(message?: string, data?: any, allow?: string | string[]): BoomError;

    /**
     * Returns a 406 Not Acceptable error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomnotacceptablemessage-data}
     */
    export function notAcceptable(message?: string, data?: any): BoomError;

    /**
     * Returns a 407 Proxy Authentication Required error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomproxyauthrequiredmessage-data}
     */
    export function proxyAuthRequired(message?: string, data?: any): BoomError;

    /**
     * Returns a 408 Request Time-out error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomclienttimeoutmessage-data}
     */
    export function clientTimeout(message?: string, data?: any): BoomError;

    /**
     * Returns a 409 Conflict error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomconflictmessage-data}
     */
    export function conflict(message?: string, data?: any): BoomError;

    /**
     * Returns a 410 Gone error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomresourcegonemessage-data}
     */
    export function resourceGone(message?: string, data?: any): BoomError;

    /**
     * Returns a 411 Length Required error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomlengthrequiredmessage-data}
     */
    export function lengthRequired(message?: string, data?: any): BoomError;

    /**
     * Returns a 412 Precondition Failed error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boompreconditionfailedmessage-data}
     */
    export function preconditionFailed(message?: string, data?: any): BoomError;

    /**
     * Returns a 413 Request Entity Too Large error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomentitytoolargemessage-data}
     */
    export function entityTooLarge(message?: string, data?: any): BoomError;

    /**
     * Returns a 414 Request-URI Too Large error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomuritoolongmessage-data}
     */
    export function uriTooLong(message?: string, data?: any): BoomError;

    /**
     * Returns a 415 Unsupported Media Type error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomunsupportedmediatypemessage-data}
     */
    export function unsupportedMediaType(message?: string, data?: any): BoomError;

    /**
     * Returns a 416 Requested Range Not Satisfiable error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomrangenotsatisfiablemessage-data}
     */
    export function rangeNotSatisfiable(message?: string, data?: any): BoomError;

    /**
     * Returns a 417 Expectation Failed error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomexpectationfailedmessage-data}
     */
    export function expectationFailed(message?: string, data?: any): BoomError;

    /**
     * Returns a 418 I'm a Teapot error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomteapotmessage-data}
     */
    export function teapot(message?: string, data?: any): BoomError;

    /**
     * Returns a 422 Unprocessable Entity error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boombaddatamessage-data}
     */
    export function badData(message?: string, data?: any): BoomError;

    /**
     * Returns a 423 Locked error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomlockedmessage-data}
     */
    export function locked(message?: string, data?: any): BoomError;

    /**
     * Returns a 428 Precondition Required error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boompreconditionrequiredmessage-data}
     */
    export function preconditionRequired(message?: string, data?: any): BoomError;

    /**
     * Returns a 429 Too Many Requests error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomtoomanyrequestsmessage-data}
     */
    export function tooManyRequests(message?: string, data?: any): BoomError;

    /**
     * Returns a 451 Unavailable For Legal Reasons error
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomillegalmessage-data}
     */
    export function illegal(message?: string, data?: any): BoomError;

    // 5xx
    /**
     * Returns a 500 Internal Server Error error
     * Only 500 errors will hide your message from the end user. Your message is recorded in the server log.
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boombadimplementationmessage-data---alias-internal}
     */
    export function badImplementation(message?: string, data?: any): BoomError;

    /**
     * Returns a 501 Not Implemented error with your error message to the user
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomnotimplementedmessage-data}
     */
    export function notImplemented(message?: string, data?: any): BoomError;

    /**
     * Returns a 502 Bad Gateway error with your error message to the user
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boombadgatewaymessage-data}
     */
    export function badGateway(message?: string, data?: any): BoomError;

    /**
     * Returns a 503 Service Unavailable error with your error message to the user
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomserverunavailablemessage-data}
     */
    export function serverUnavailable(message?: string, data?: any): BoomError;

    /**
     * Returns a 504 Gateway Time-out error with your error message to the user
     * @param message optional message.
     * @param data optional additional error data.
     * @see {@link https://github.com/hapijs/boom#boomgatewaytimeoutmessage-data}
     */
    export function gatewayTimeout(message?: string, data?: any): BoomError;
}
