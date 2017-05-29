// Type definitions for http-errors v1.5.0
// Project: https://github.com/jshttp/http-errors
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'http-errors' {
    namespace createHttpError {

        // See https://github.com/jshttp/http-errors/blob/1.3.1/index.js#L42
        interface HttpError extends Error {
            status: number;
            statusCode: number;
            expose: boolean;
            headers?: {
                [key: string]: string
            };
        }

        type HttpErrorConstructor = new(msg?: string) => HttpError;

        interface CreateHttpError {
            // See https://github.com/Microsoft/TypeScript/issues/227#issuecomment-50092674
            [code: string]: new (msg?: string) => HttpError;

            (...args: Array<Error | string | number | Object>): HttpError;
            
            HttpError: HttpErrorConstructor;

            Continue: HttpErrorConstructor;
            SwitchingProtocols: HttpErrorConstructor;
            Processing: HttpErrorConstructor;
            OK: HttpErrorConstructor;
            Created: HttpErrorConstructor;
            Accepted: HttpErrorConstructor;
            NonAuthoritativeInformation: HttpErrorConstructor;
            NoContent: HttpErrorConstructor;
            ResetContent: HttpErrorConstructor;
            PartialContent: HttpErrorConstructor;
            MultiStatus: HttpErrorConstructor;
            AlreadyReported: HttpErrorConstructor;
            IMUsed: HttpErrorConstructor;
            MultipleChoices: HttpErrorConstructor;
            MovedPermanently: HttpErrorConstructor;
            Found: HttpErrorConstructor;
            SeeOther: HttpErrorConstructor;
            NotModified: HttpErrorConstructor;
            UseProxy: HttpErrorConstructor;
            Unused: HttpErrorConstructor;
            TemporaryRedirect: HttpErrorConstructor;
            PermanentRedirect: HttpErrorConstructor;
            BadRequest: HttpErrorConstructor;
            Unauthorized: HttpErrorConstructor;
            PaymentRequired: HttpErrorConstructor;
            Forbidden: HttpErrorConstructor;
            NotFound: HttpErrorConstructor;
            MethodNotAllowed: HttpErrorConstructor;
            NotAcceptable: HttpErrorConstructor;
            ProxyAuthenticationRequired: HttpErrorConstructor;
            RequestTimeout: HttpErrorConstructor;
            Conflict: HttpErrorConstructor;
            Gone: HttpErrorConstructor;
            LengthRequired: HttpErrorConstructor;
            PreconditionFailed: HttpErrorConstructor;
            PayloadTooLarge: HttpErrorConstructor;
            URITooLong: HttpErrorConstructor;
            UnsupportedMediaType: HttpErrorConstructor;
            RangeNotSatisfiable: HttpErrorConstructor;
            ExpectationFailed: HttpErrorConstructor;
            ImATeapot: HttpErrorConstructor;
            MisdirectedRequest: HttpErrorConstructor;
            UnprocessableEntity: HttpErrorConstructor;
            Locked: HttpErrorConstructor;
            FailedDependency: HttpErrorConstructor;
            UnorderedCollection: HttpErrorConstructor;
            UpgradeRequired: HttpErrorConstructor;
            PreconditionRequired: HttpErrorConstructor;
            TooManyRequests: HttpErrorConstructor;
            RequestHeaderFieldsTooLarge: HttpErrorConstructor;
            UnavailableForLegalReasons: HttpErrorConstructor;
            InternalServerError: HttpErrorConstructor;
            NotImplemented: HttpErrorConstructor;
            BadGateway: HttpErrorConstructor;
            ServiceUnavailable: HttpErrorConstructor;
            GatewayTimeout: HttpErrorConstructor;
            HTTPVersionNotSupported: HttpErrorConstructor;
            VariantAlsoNegotiates: HttpErrorConstructor;
            InsufficientStorage: HttpErrorConstructor;
            LoopDetected: HttpErrorConstructor;
            BandwidthLimitExceeded: HttpErrorConstructor;
            NotExtended: HttpErrorConstructor;
            NetworkAuthenticationRequired: HttpErrorConstructor;
        }
    }

    var createHttpError: createHttpError.CreateHttpError;
    export = createHttpError;
}
