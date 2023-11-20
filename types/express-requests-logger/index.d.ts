import { NextFunction, Request } from "express-serve-static-core";

/**
 * Middleware for logging request/responses in Express apps
 */
declare function audit(options?: audit.Options): NextFunction;

declare namespace audit {
    interface CommonOptions {
        /**
         * `true` - include request in audit, `false` - don't.
         * {@link https://github.com/PayU/express-request-logger#audit}
         */
        audit?: boolean | undefined;

        /**
         * pass the fields you wish to exclude in the body of the requests (sensitive data like passwords, credit cards numbers etc..). * field - exclude all body
         * {@link https://github.com/PayU/express-request-logger#excludebody}
         */
        excludeBody?: string[] | undefined;

        /**
         * pass the fields you wish to mask in the body of the requests (sensitive data like passwords, credit cards numbers etc..).
         * {@link https://github.com/PayU/express-request-logger#maskbody}
         */
        maskBody?: string[] | undefined;

        /**
         * pass the fields you wish to mask in the query of the requests (sensitive data like passwords, credit cards numbers etc..).
         * {@link https://github.com/PayU/express-request-logger#maskquery}
         */
        maskQuery?: string[] | undefined;

        /**
         * pass the header names you wish to exclude from the audit (senstitive data like authorization headers etc..). * field - exclude all headers
         * {@link https://github.com/PayU/express-request-logger#excludeheaders}
         */
        excludeHeaders?: string[] | undefined;

        /**
         * pass the fields you wish to mask in the headers of the requests (senstitive data like authorization headers etc..).
         * {@link https://github.com/PayU/express-request-logger#maskheaders}
         */
        maskHeaders?: string[] | undefined;

        /**
         * Restrict request body's logged content length (inputs other than positive integers will be ignored).
         * {@link https://github.com/PayU/express-request-logger#maxbodylength}
         */
        maxBodyLength?: number | undefined;
    }

    /**
     * {@link https://github.com/PayU/express-request-logger#options}
     */
    interface Options extends CommonOptions {
        /**
         * The logger to use for logging the request/response.
         * Package tested only with `bunyan` logger, but should work with any logger which has a info method which takes an object.
         * {@link https://github.com/PayU/express-request-logger#logger}
         */
        logger?: Logger | undefined;

        /**
         * `true` - log once the request arrives (request details), and log after response is sent (both request and response).
         * Useful if there is a concern that the server will crash during the request and there is a need to log the request before it's processed.
         * `false` - log only after the response is sent.
         * {@link https://github.com/PayU/express-request-logger#doubleaudit}
         */
        doubleAudit?: boolean | undefined;

        /**
         * if the request url matches one of the values in the array, the request/response won't be logged.
         * {@link https://github.com/PayU/express-request-logger#excludeurls}
         */
        excludeURLs?: string[] | undefined;

        /**
         * Specific configuration for requests
         * {@link https://github.com/PayU/express-request-logger#request}
         */
        request?: any;

        /**
         * Additional to mask options, you can add your own functionality to mask request body.
         * This function will execute as a masking function before the package functions.
         * The custom function gets the full express request and should return the masked body.
         * {@link https://github.com/PayU/express-request-logger#custommaskbodyfunc}
         */
        customMaskBodyFunc?: ((req: Request) => string) | undefined;

        /**
         * Specific configuration for responses
         * {@link https://github.com/PayU/express-request-logger#response}
         */
        response?: ResponseOptions | undefined;
    }

    interface ResponseOptions extends CommonOptions {
        /**
         * Map of statusCodes to log levels.
         * By default the audit is logged with level 'info'.
         * It is possible to override it by configuration according to the statusCode of the response
         */
        levels?: StatusCodeMap | undefined;
    }

    type StatusCodeMap = Record<string, "trace" | "debug" | "info" | "warn" | "error">;

    interface Logger {
        info(obj: object, ...params: any[]): void;
    }
}

declare global {
    namespace Express {
        interface Request {
            readonly maxBodyLength: number;
        }
        interface Response {
            readonly timestamp: Date;
            readonly maxBodyLength: number;
        }
    }
}

export = audit;
