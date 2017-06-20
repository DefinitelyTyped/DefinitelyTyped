// Type definitions for restify-errors 4.3
// Project: http://www.restify.com
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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

export class DefinedHttpError extends HttpError {
    constructor();

    // tslint:disable-next-line unified-signatures
    constructor(printf: string, ...args: any[]);

    // tslint:disable-next-line unified-signatures
    constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

    // tslint:disable-next-line unified-signatures
    constructor(priorErr: any, printf?: string, ...args: any[]);

    constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);
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

export class DefinedRestError extends RestError {
    constructor();

    // tslint:disable-next-line unified-signatures
    constructor(printf: string, ...args: any[]);

    // tslint:disable-next-line unified-signatures
    constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

    // tslint:disable-next-line unified-signatures
    constructor(priorErr: any, printf?: string, ...args: any[]);

    constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);
}

export function makeConstructor(name: string, defaults?: any): void;

export function makeErrFromCode(statusCode: number, ...args: any[]): HttpError;

export function bunyanSerializer(err: any): any;

export class BadRequestError extends DefinedHttpError { }
export class UnauthorizedError extends DefinedHttpError { }
export class PaymentRequiredError extends DefinedHttpError { }
export class ForbiddenError extends DefinedHttpError { }
export class NotFoundError extends DefinedHttpError { }
export class MethodNotAllowedError extends DefinedHttpError { }
export class NotAcceptableError extends DefinedHttpError { }
export class ProxyAuthenticationRequiredError extends DefinedHttpError { }
export class RequestTimeoutError extends DefinedHttpError { }
export class ConflictError extends DefinedHttpError { }
export class GoneError extends DefinedHttpError { }
export class LengthRequiredError extends DefinedHttpError { }
export class PreconditionFailedError extends DefinedHttpError { }
export class RequestEntityTooLargeError extends DefinedHttpError { }
export class RequesturiTooLargeError extends DefinedHttpError { }
export class UnsupportedMediaTypeError extends DefinedHttpError { }
export class RangeNotSatisfiableError extends DefinedHttpError { }
export class ExpectationFailedError extends DefinedHttpError { }
export class ImATeapotError extends DefinedHttpError { }
export class UnprocessableEntityError extends DefinedHttpError { }
export class LockedError extends DefinedHttpError { }
export class FailedDependencyError extends DefinedHttpError { }
export class UnorderedCollectionError extends DefinedHttpError { }
export class UpgradeRequiredError extends DefinedHttpError { }
export class PreconditionRequiredError extends DefinedHttpError { }
export class TooManyRequestsError extends DefinedHttpError { }
export class RequestHeaderFieldsTooLargeError extends DefinedHttpError { }
export class InternalServerError extends DefinedHttpError { }
export class NotImplementedError extends DefinedHttpError { }
export class BadGatewayError extends DefinedHttpError { }
export class ServiceUnavailableError extends DefinedHttpError { }
export class GatewayTimeoutError extends DefinedHttpError { }
export class HttpVersionNotSupportedError extends DefinedHttpError { }
export class VariantAlsoNegotiatesError extends DefinedHttpError { }
export class InsufficientStorageError extends DefinedHttpError { }
export class BandwidthLimitExceededError extends DefinedHttpError { }
export class NotExtendedError extends DefinedHttpError { }
export class NetworkAuthenticationRequiredError extends DefinedHttpError { }

export class BadDigestError extends DefinedRestError { }
export class BadMethodError extends DefinedRestError { }
export class InternalError extends DefinedRestError { }
export class InvalidArgumentError extends DefinedRestError { }
export class InvalidContentError extends DefinedRestError { }
export class InvalidCredentialsError extends DefinedRestError { }
export class InvalidHeaderError extends DefinedRestError { }
export class InvalidVersionError extends DefinedRestError { }
export class MissingParameterError extends DefinedRestError { }
export class NotAuthorizedError extends DefinedRestError { }
export class RequestExpiredError extends DefinedRestError { }
export class RequestThrottledError extends DefinedRestError { }
export class ResourceNotFoundError extends DefinedRestError { }
export class WrongAcceptError extends DefinedRestError { }
