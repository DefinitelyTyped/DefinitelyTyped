// Type definitions for http-errors v1.3.1
// Project: https://github.com/jshttp/http-errors
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'http-errors' {
    namespace createHttpError {

      // See https://github.com/jshttp/http-errors/blob/1.3.1/index.js#L42
      interface HttpError extends Error {
          status: number;
          statusCode: number;
          expose: boolean;
      }

      interface CreateHttpError {
          // See https://github.com/Microsoft/TypeScript/issues/227#issuecomment-50092674
          [code: string]: new() => HttpError;

          (...args: Array<Error | string | number | Object>): HttpError;

          Continue: new() => HttpError;
          SwitchingProtocols: new() => HttpError;
          Processing: new() => HttpError;
          OK: new() => HttpError;
          Created: new() => HttpError;
          Accepted: new() => HttpError;
          NonAuthoritativeInformation: new() => HttpError;
          NoContent: new() => HttpError;
          ResetContent: new() => HttpError;
          PartialContent: new() => HttpError;
          MultiStatus: new() => HttpError;
          AlreadyReported: new() => HttpError;
          IMUsed: new() => HttpError;
          MultipleChoices: new() => HttpError;
          MovedPermanently: new() => HttpError;
          Found: new() => HttpError;
          SeeOther: new() => HttpError;
          NotModified: new() => HttpError;
          UseProxy: new() => HttpError;
          Unused: new() => HttpError;
          TemporaryRedirect: new() => HttpError;
          PermanentRedirect: new() => HttpError;
          BadRequest: new() => HttpError;
          Unauthorized: new() => HttpError;
          PaymentRequired: new() => HttpError;
          Forbidden: new() => HttpError;
          NotFound: new() => HttpError;
          MethodNotAllowed: new() => HttpError;
          NotAcceptable: new() => HttpError;
          ProxyAuthenticationRequired: new() => HttpError;
          RequestTimeout: new() => HttpError;
          Conflict: new() => HttpError;
          Gone: new() => HttpError;
          LengthRequired: new() => HttpError;
          PreconditionFailed: new() => HttpError;
          PayloadTooLarge: new() => HttpError;
          URITooLong: new() => HttpError;
          UnsupportedMediaType: new() => HttpError;
          RangeNotSatisfiable: new() => HttpError;
          ExpectationFailed: new() => HttpError;
          ImATeapot: new() => HttpError;
          UnprocessableEntity: new() => HttpError;
          Locked: new() => HttpError;
          FailedDependency: new() => HttpError;
          UnorderedCollection: new() => HttpError;
          UpgradeRequired: new() => HttpError;
          PreconditionRequired: new() => HttpError;
          TooManyRequests: new() => HttpError;
          RequestHeaderFieldsTooLarge: new() => HttpError;
          UnavailableForLegalReasons: new() => HttpError;
          InternalServerError: new() => HttpError;
          NotImplemented: new() => HttpError;
          BadGateway: new() => HttpError;
          ServiceUnavailable: new() => HttpError;
          GatewayTimeout: new() => HttpError;
          HTTPVersionNotSupported: new() => HttpError;
          VariantAlsoNegotiates: new() => HttpError;
          InsufficientStorage: new() => HttpError;
          LoopDetected: new() => HttpError;
          BandwidthLimitExceeded: new() => HttpError;
          NotExtended: new() => HttpError;
          NetworkAuthenticationRequired: new() => HttpError;
      }
    }

    var createHttpError: createHttpError.CreateHttpError;
    export = createHttpError;
}
