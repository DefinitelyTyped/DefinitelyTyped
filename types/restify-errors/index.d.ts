// Type definitions for restify-errors 4.3
// Project: http://www.restify.com
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { VError, Options as vErrorOptions } from "verror";

export interface RestifyHttpErrorOptions extends vErrorOptions {
    statusCode?: number;

    message?: string;

    code?: string;

    context?: any;
}

export class HttpError extends VError {
    constructor(printf: string, ...args: any[]);

    constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

    // tslint:disable-next-line unified-signatures
    constructor(priorErr: any, printf?: string, ...args: any[]);

    constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

    message: string;

    statusCode: number;

    code: string;

    body: any;

    displayName: string;
}

export interface RestifyRestErrorOptions extends RestifyHttpErrorOptions {
    restCode?: string;
}

export class RestError extends HttpError {
    constructor(printf: string, ...args: any[]);

    constructor(options: RestifyRestErrorOptions, printf?: string, ...args: any[]);

    // tslint:disable-next-line unified-signatures
    constructor(priorErr: any, printf?: string, ...args: any[]);

    constructor(priorErr: any, options: RestifyRestErrorOptions, printf?: string, ...args: any[]);

    restCode: string;
}

export function makeConstructor(name: string, defaults?: any): void;

export function makeErrFromCode(statusCode: number, ...args: any[]): HttpError;

export function bunyanSerializer(err: any): any;

export const HttpErrors: {
    BadRequestError: HttpError;
    UnauthorizedError: HttpError;
    PaymentRequiredError: HttpError;
    ForbiddenError: HttpError;
    NotFoundError: HttpError;
    MethodNotAllowedError: HttpError;
    NotAcceptableError: HttpError;
    ProxyAuthenticationRequiredError: HttpError;
    RequestTimeoutError: HttpError;
    ConflictError: HttpError;
    GoneError: HttpError;
    LengthRequiredError: HttpError;
    PreconditionFailedError: HttpError;
    RequestEntityTooLargeError: HttpError;
    RequesturiTooLargeError: HttpError;
    UnsupportedMediaTypeError: HttpError;
    RangeNotSatisfiableError: HttpError;
    ExpectationFailedError: HttpError;
    ImATeapotError: HttpError;
    UnprocessableEntityError: HttpError;
    LockedError: HttpError;
    FailedDependencyError: HttpError;
    UnorderedCollectionError: HttpError;
    UpgradeRequiredError: HttpError;
    PreconditionRequiredError: HttpError;
    TooManyRequestsError: HttpError;
    RequestHeaderFieldsTooLargeError: HttpError;
    InternalServerError: HttpError;
    NotImplementedError: HttpError;
    BadGatewayError: HttpError;
    ServiceUnavailableError: HttpError;
    GatewayTimeoutError: HttpError;
    HttpVersionNotSupportedError: HttpError;
    VariantAlsoNegotiatesError: HttpError;
    InsufficientStorageError: HttpError;
    BandwidthLimitExceededError: HttpError;
    NotExtendedError: HttpError;
    NetworkAuthenticationRequiredError: HttpError;
};

export const RestErrors: {
    BadDigestError: RestError;
    BadMethodError: RestError;
    InternalError: RestError;
    InvalidArgumentError: RestError;
    InvalidContentError: RestError;
    InvalidCredentialsError: RestError;
    InvalidHeaderError: RestError;
    InvalidVersionError: RestError;
    MissingParameterError: RestError;
    NotAuthorizedError: RestError;
    PreconditionFailedError: RestError;
    RequestExpiredError: RestError;
    RequestThrottledError: RestError;
    ResourceNotFoundError: RestError;
    WrongAcceptError: RestError;
};
