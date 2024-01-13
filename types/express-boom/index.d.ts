/**
 * Type definition for the middleware itself
 */

import express = require("express");
declare namespace e {}
declare function e(): express.RequestHandler;
export = e;

/**
 * Type augmentation for express
 */

/**
 * Based on Sandeep K Nair gist: https://gist.github.com/sandeepsuvit/2486c99c0346db87de24539472f34451
 * And https://github.com/hapijs/boom
 */
declare global {
    namespace Express {
        interface Boom {
            // Add boom's properties in here
            wrap(error: Error, statusCode?: number, message?: string): BoomError<null>;
            create<Data = null>(statusCode: number, message?: string, data?: Data): BoomError<Data>;

            /**
             * Decorates an error with the boom properties
             * @param error the error object to wrap. If error is already a boom object, it defaults to overriding the object with the new status code and message.
             * @param options optional additional options
             * @see {@link https://github.com/hapijs/boom#boomifyerror-options}
             */
            boomify(
                error: Error,
                options?: {
                    statusCode?: number | undefined;
                    message?: string | undefined;
                    override?: boolean | undefined;
                },
            ): BoomError<null>;

            // 4xx
            /**
             * Respond a 400 Bad Request error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boombadrequestmessage-data}
             */
            badRequest<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 401 Unauthorized error
             * @param message optional message.
             * @param scheme can be one of the following:
             *      * an authentication scheme name
             *      * an array of string values. These values will be separated by ', ' and set to the 'WWW-Authenticate' header.
             * @param attributes an object of values to use while setting the 'WWW-Authenticate' header.
             * This value is only used when scheme is a string, otherwise it is ignored.
             * Every key/value pair will be included in the 'WWW-Authenticate' in the format of
             * 'key="value"' as well as in the response payload under the attributes key.
             * Alternatively value can be a string which is use to set the value of the scheme,
             * for example setting the token value for negotiate header.
             * If string is used message parameter must be null.
             * null and undefined will be replaced with an empty string. If attributes is set,
             * message will be used as the 'error' segment of the 'WWW-Authenticate' header.
             * If message is unset, the 'error' segment of the header will not be present and isMissing will be true on the error object.
             * @see {@link https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes}
             */
            unauthorized(message?: string, scheme?: string, attributes?: { [index: string]: string }): BoomError<null>;
            unauthorized(message?: string, scheme?: string[]): BoomError<null>;
            unauthorized(
                message?: null,
                scheme?: string,
                attributes?: { [index: string]: string } | string,
            ): BoomError<null>;

            /**
             * Respond a 402 Payment Required error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boompaymentrequiredmessage-data}
             */
            paymentRequired<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 403 Forbidden error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomforbiddenmessage-data}
             */
            forbidden<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 404 Not Found error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomnotfoundmessage-data}
             */
            notFound<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 405 Method Not Allowed error
             * @param message optional message.
             * @param data optional additional error data.
             * @param allow optional string or array of strings (to be combined and separated by ', ') which is set to the 'Allow' header.
             * @see {@link https://github.com/hapijs/boom#boommethodnotallowedmessage-data-allow}
             */
            methodNotAllowed<Data = null>(message?: string, data?: Data, allow?: string | string[]): BoomError<Data>;

            /**
             * Respond a 406 Not Acceptable error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomnotacceptablemessage-data}
             */
            notAcceptable<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 407 Proxy Authentication Required error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomproxyauthrequiredmessage-data}
             */
            proxyAuthRequired<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 408 Request Time-out error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomclienttimeoutmessage-data}
             */
            clientTimeout<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 409 Conflict error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomconflictmessage-data}
             */
            conflict<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 410 Gone error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomresourcegonemessage-data}
             */
            resourceGone<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 411 Length Required error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomlengthrequiredmessage-data}
             */
            lengthRequired<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 412 Precondition Failed error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boompreconditionfailedmessage-data}
             */
            preconditionFailed<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 413 Request Entity Too Large error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomentitytoolargemessage-data}
             */
            entityTooLarge<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 414 Request-URI Too Large error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomuritoolongmessage-data}
             */
            uriTooLong<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 415 Unsupported Media Type error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomunsupportedmediatypemessage-data}
             */
            unsupportedMediaType<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 416 Requested Range Not Satisfiable error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomrangenotsatisfiablemessage-data}
             */
            rangeNotSatisfiable<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 417 Expectation Failed error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomexpectationfailedmessage-data}
             */
            expectationFailed<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 418 I'm a Teapot error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomteapotmessage-data}
             */
            teapot<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 422 Unprocessable Entity error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boombaddatamessage-data}
             */
            badData<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 423 Locked error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomlockedmessage-data}
             */
            locked<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 424 Failed Dependency error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomfaileddependencymessage-data}
             */
            failedDependency<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 428 Precondition Required error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boompreconditionrequiredmessage-data}
             */
            preconditionRequired<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 429 Too Many Requests error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomtoomanyrequestsmessage-data}
             */
            tooManyRequests<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 451 Unavailable For Legal Reasons error
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomillegalmessage-data}
             */
            illegal<Data = null>(message?: string, data?: Data): BoomError<Data>;

            // 5xx
            /**
             * Respond a 500 Internal Server Error error
             * Only 500 errors will hide your message from the end user. Your message is recorded in the server log.
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boombadimplementationmessage-data---alias-internal}
             */
            badImplementation<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 500 Internal Server Error error
             * Only 500 errors will hide your message from the end user. Your message is recorded in the server log.
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boombadimplementationmessage-data---alias-internal}
             */
            internal<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 501 Not Implemented error with your error message to the user
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomnotimplementedmessage-data}
             */
            notImplemented<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 502 Bad Gateway error with your error message to the user
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boombadgatewaymessage-data}
             */
            badGateway<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 503 Service Unavailable error with your error message to the user
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomserverunavailablemessage-data}
             */
            serverUnavailable<Data = null>(message?: string, data?: Data): BoomError<Data>;

            /**
             * Respond a 504 Gateway Time-out error with your error message to the user
             * @param message optional message.
             * @param data optional additional error data.
             * @see {@link https://github.com/hapijs/boom#boomgatewaytimeoutmessage-data}
             */
            gatewayTimeout<Data = null>(message?: string, data?: Data): BoomError<Data>;
        }

        interface BoomError<Data> {
            data: Data;
            reformat: () => void;
            isBoom: boolean;
            isServer: boolean;
            message: string;
            output: Output;
        }

        interface Output {
            /** statusCode - the HTTP status code (typically 4xx or 5xx). */
            statusCode: number;
            /**
             * headers - an object containing any HTTP headers where each key is a header name and
             * value is the header content. (Limited value type to string
             * https://github.com/hapijs/boom/issues/151 )
             */
            headers: { [index: string]: string };
            /**
             * payload - the formatted object used as the response payload (stringified).
             * Can be directly manipulated but any changes will be lost if reformat() is called.
             * Any content allowed and by default includes the following content:
             */
            payload: Payload;
        }

        interface Payload {
            /** statusCode - the HTTP status code, derived from error.output.statusCode. */
            statusCode: number;
            /** error - the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from statusCode. */
            error: string;
            /** message - the error message derived from error.message. */
            message: string;
            /**
             * "Every key/value pair will be included ... in the response payload under the attributes key."
             * [see docs](https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes)
             */
            attributes?: any;
            // Excluded this to aid typing of the other values. Use payload as to define precise typing
            // [anyContent: string]: any;
        }

        interface Response {
            boom: Boom;
        }
    }
}
