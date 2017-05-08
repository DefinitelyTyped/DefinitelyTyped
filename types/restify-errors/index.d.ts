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

export namespace HttpErrors {
    class DefinedHttpError extends HttpError {
        constructor();

        // tslint:disable-next-line unified-signatures
        constructor(printf: string, ...args: any[]);

        // tslint:disable-next-line unified-signatures
        constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

        // tslint:disable-next-line unified-signatures
        constructor(priorErr: any, printf?: string, ...args: any[]);

        constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);
    }

    class BadRequestError extends DefinedHttpError { }
    class UnauthorizedError extends DefinedHttpError { }
    class PaymentRequiredError extends DefinedHttpError { }
    class ForbiddenError extends DefinedHttpError { }
    class NotFoundError extends DefinedHttpError { }
    class MethodNotAllowedError extends DefinedHttpError { }
    class NotAcceptableError extends DefinedHttpError { }
    class ProxyAuthenticationRequiredError extends DefinedHttpError { }
    class RequestTimeoutError extends DefinedHttpError { }
    class ConflictError extends DefinedHttpError { }
    class GoneError extends DefinedHttpError { }
    class LengthRequiredError extends DefinedHttpError { }
    class PreconditionFailedError extends DefinedHttpError { }
    class RequestEntityTooLargeError extends DefinedHttpError { }
    class RequesturiTooLargeError extends DefinedHttpError { }
    class UnsupportedMediaTypeError extends DefinedHttpError { }
    class RangeNotSatisfiableError extends DefinedHttpError { }
    class ExpectationFailedError extends DefinedHttpError { }
    class ImATeapotError extends DefinedHttpError { }
    class UnprocessableEntityError extends DefinedHttpError { }
    class LockedError extends DefinedHttpError { }
    class FailedDependencyError extends DefinedHttpError { }
    class UnorderedCollectionError extends DefinedHttpError { }
    class UpgradeRequiredError extends DefinedHttpError { }
    class PreconditionRequiredError extends DefinedHttpError { }
    class TooManyRequestsError extends DefinedHttpError { }
    class RequestHeaderFieldsTooLargeError extends DefinedHttpError { }
    class InternalServerError extends DefinedHttpError { }
    class NotImplementedError extends DefinedHttpError { }
    class BadGatewayError extends DefinedHttpError { }
    class ServiceUnavailableError extends DefinedHttpError { }
    class GatewayTimeoutError extends DefinedHttpError { }
    class HttpVersionNotSupportedError extends DefinedHttpError { }
    class VariantAlsoNegotiatesError extends DefinedHttpError { }
    class InsufficientStorageError extends DefinedHttpError { }
    class BandwidthLimitExceededError extends DefinedHttpError { }
    class NotExtendedError extends DefinedHttpError { }
    class NetworkAuthenticationRequiredError extends DefinedHttpError { }
}

export namespace RestErrors {
    class DefinedRestError extends RestError {
        constructor();

        // tslint:disable-next-line unified-signatures
        constructor(printf: string, ...args: any[]);

        // tslint:disable-next-line unified-signatures
        constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);

        // tslint:disable-next-line unified-signatures
        constructor(priorErr: any, printf?: string, ...args: any[]);

        constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]);
    }

    class BadDigestError extends DefinedRestError { }
    class BadMethodError extends DefinedRestError { }
    class InternalError extends DefinedRestError { }
    class InvalidArgumentError extends DefinedRestError { }
    class InvalidContentError extends DefinedRestError { }
    class InvalidCredentialsError extends DefinedRestError { }
    class InvalidHeaderError extends DefinedRestError { }
    class InvalidVersionError extends DefinedRestError { }
    class MissingParameterError extends DefinedRestError { }
    class NotAuthorizedError extends DefinedRestError { }
    class PreconditionFailedError extends DefinedRestError { }
    class RequestExpiredError extends DefinedRestError { }
    class RequestThrottledError extends DefinedRestError { }
    class ResourceNotFoundError extends DefinedRestError { }
    class WrongAcceptError extends DefinedRestError { }
}
