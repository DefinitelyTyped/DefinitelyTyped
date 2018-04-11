// Type definitions for @feathersjs/errors 3.2
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

export class FeathersError extends Error {
    constructor(msg: string | Error, name: string, code: number, className: string, data: any)
}

export class BadRequest extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class NotAuthenticated extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class PaymentError extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class Forbidden extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class NotFound extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class MethodNotAllowed extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class NotAcceptable extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class Timeout extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class Conflict extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class LengthRequired extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class Unprocessable extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class TooManyRequests extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class GeneralError extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class NotImplemented extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class BadGateway extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export class Unavailable extends FeathersError {
    constructor(msg: string | Error, data?: any);
}

export interface Errors {
    FeathersError: FeathersError;
    BadRequest: BadRequest;
    NotAuthenticated: NotAuthenticated;
    PaymentError: PaymentError;
    Forbidden: Forbidden;
    NotFound: NotFound;
    MethodNotAllowed: MethodNotAllowed;
    NotAcceptable: NotAcceptable;
    Timeout: Timeout;
    Conflict: Conflict;
    LengthRequired: LengthRequired;
    Unprocessable: Unprocessable;
    TooManyRequests: TooManyRequests;
    GeneralError: GeneralError;
    NotImplemented: NotImplemented;
    BadGateway: BadGateway;
    Unavailable: Unavailable;
}

export function convert(error: any): FeathersError;

export const types: Errors;
export const errors: Errors;
