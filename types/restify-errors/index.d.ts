// Type definitions for restify-errors 4.3
// Project: http://www.restify.com
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { VError, Options as vErrorOptions } from "verror";

interface HttpErrors {
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
}

interface RestErrors {
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
}

export interface RestifyHttpErrorOptions extends vErrorOptions {
    statusCode?: number;

    message?: string;

    code?: string;

    context?: object;
}

export class HttpError extends VError {
    constructor(message: string);

    constructor(printf: string, ...args: any[]);

    constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

    constructor(priorErr: object, message: string);

    constructor(priorErr: object, printf?: string, ...args: any[]);

    constructor(priorErr: object, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

    message: string;

    statusCode: number;

    code: string;

    body: object;

    displayName: string;
}

export interface RestifyRestErrorOptions extends RestifyHttpErrorOptions {
    restCode?: string
}

export class RestError extends HttpError {
    constructor(message: string);

    constructor(printf: string, ...args: any[]);

    constructor(options: RestifyRestErrorOptions, printf?: string, ...args: any[]);

    constructor(priorErr: object, message: string);

    constructor(priorErr: object, printf?: string, ...args: any[]);

    constructor(priorErr: object, options: RestifyRestErrorOptions, printf?: string, ...args: any[]);


    restCode: string;
}

export function makeConstructor(name: string, defaults?: object): void;

export function makeErrFromCode(statusCode: number, ...args: any[]): HttpError;

export const bunyanSerializer: (err: object) => object;

export const httpErrors: HttpErrors;

export const restErrors: RestErrors;
