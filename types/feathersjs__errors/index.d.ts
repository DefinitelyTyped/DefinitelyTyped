// Type definitions for @feathersjs/errors 3.3
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
//                 RazzM13 <https://github.com/RazzM13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface FeathersErrorJSON {
    readonly name: string;
    readonly message: string;
    readonly code: number;
    readonly className: string;
    readonly data: any;
    readonly errors: any;
}

export class FeathersError extends Error {
    readonly code: number;
    readonly className: string;
    readonly data: any;
    readonly errors: any;
    constructor(msg: string | Error, name: string, code: number, className: string, data: any);
    toJSON(): FeathersErrorJSON;
}

export class BadRequest extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class NotAuthenticated extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class PaymentError extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class Forbidden extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class NotFound extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class MethodNotAllowed extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class NotAcceptable extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class Timeout extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class Conflict extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class LengthRequired extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class Unprocessable extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class TooManyRequests extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class GeneralError extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class NotImplemented extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class BadGateway extends FeathersError {
    constructor(msg?: string | Error, data?: any);
}

export class Unavailable extends FeathersError {
    constructor(msg?: string | Error, data?: any);
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
