// Type definitions for http-errors 1.8
// Project: https://github.com/jshttp/http-errors
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = createHttpError;

declare const createHttpError: createHttpError.CreateHttpError & createHttpError.NamedConstructors & {
    isHttpError: createHttpError.IsHttpError
};

declare namespace createHttpError {
    interface HttpError extends Error {
        status: number;
        statusCode: number;
        expose: boolean;
        headers?: {
            [key: string]: string;
        };
        [key: string]: any;
    }

    type UnknownError = Error | string | number | { [key: string]: any };

    type HttpErrorConstructor = new (msg?: string) => HttpError;

    type CreateHttpError = (...args: UnknownError[]) => HttpError;

    type IsHttpError = (error: unknown) => error is HttpError;

    type NamedConstructors = {
        [code: string]: HttpErrorConstructor;
        HttpError: HttpErrorConstructor;
    } & Record<'BadRequest' |
        'Unauthorized' |
        'PaymentRequired' |
        'Forbidden' |
        'NotFound' |
        'MethodNotAllowed' |
        'NotAcceptable' |
        'ProxyAuthenticationRequired' |
        'RequestTimeout' |
        'Conflict' |
        'Gone' |
        'LengthRequired' |
        'PreconditionFailed' |
        'PayloadTooLarge' |
        'URITooLong' |
        'UnsupportedMediaType' |
        'RangeNotSatisfiable' |
        'ExpectationFailed' |
        'ImATeapot' |
        'MisdirectedRequest' |
        'UnprocessableEntity' |
        'Locked' |
        'FailedDependency' |
        'UnorderedCollection' |
        'UpgradeRequired' |
        'PreconditionRequired' |
        'TooManyRequests' |
        'RequestHeaderFieldsTooLarge' |
        'UnavailableForLegalReasons' |
        'InternalServerError' |
        'NotImplemented' |
        'BadGateway' |
        'ServiceUnavailable' |
        'GatewayTimeout' |
        'HTTPVersionNotSupported' |
        'VariantAlsoNegotiates' |
        'InsufficientStorage' |
        'LoopDetected' |
        'BandwidthLimitExceeded' |
        'NotExtended' |
        'NetworkAuthenticationRequire' |
        '400' |
        '401' |
        '402' |
        '403' |
        '404' |
        '405' |
        '406' |
        '407' |
        '408' |
        '409' |
        '410' |
        '411' |
        '412' |
        '413' |
        '414' |
        '415' |
        '416' |
        '417' |
        '418' |
        '421' |
        '422' |
        '423' |
        '424' |
        '425' |
        '426' |
        '428' |
        '429' |
        '431' |
        '451' |
        '500' |
        '501' |
        '502' |
        '503' |
        '504' |
        '505' |
        '506' |
        '507' |
        '508' |
        '509' |
        '510' |
        '511', HttpErrorConstructor>;
}
