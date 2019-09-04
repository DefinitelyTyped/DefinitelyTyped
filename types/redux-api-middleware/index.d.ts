// Type definitions for redux-api-middleware 3.0
// Project: https://github.com/agraboso/redux-api-middleware
// Definitions by:  Andrew Luca <https://github.com/iamandrewluca>
//                  Craig S <https://github.com/Mrman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    Middleware,
    MiddlewareAPI,
    Dispatch,
    AnyAction,
    applyMiddleware
} from 'redux';

/**
 * This module is also a UMD module that exposes a global variable 'ReduxApiMiddleware'
 * when loaded outside a module loader environment.
 */
export as namespace ReduxApiMiddleware;

export type RSAA = '@@redux-api-middleware/RSAA';
export const RSAA = '@@redux-api-middleware/RSAA';

export function isRSAA(action: object): boolean;
export function validateRSAA(action: object): string[];
export function isValidRSAA(action: object): boolean;

export class InvalidRSAA extends Error {
    name: 'InvalidRSAA';
    message: 'Invalid RSAA';
    validationErrors: string[];
    constructor(validationErrors: string[]);
}

export class InternalError extends Error {
    name: 'InternalError';
    message: string;
    constructor(message: string);
}

export class RequestError extends Error {
    name: 'RequestError';
    message: string;
    constructor(message: string);
}

export class ApiError<T extends object = any> extends Error {
    name: 'ApiError';
    status: number;
    statusText: string;
    response: T;
    message: string;
    constructor(status: number, statusText: string, response: T);
}

export function getJSON(res: Response): Promise<any> | Promise<void>;

export const apiMiddleware: Middleware;

export interface CreateMiddlewareOptions {
    ok?: (res: Response) => boolean;
    fetch?: typeof fetch;
}

export function createMiddleware(options?: CreateMiddlewareOptions): Middleware;

export interface RSAARequestTypeDescriptor<S = any, P = any, M = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: S) => P) | P;
    meta?: ((action: RSAAAction, state: S) => M) | M;
}

export interface RSAASuccessTypeDescriptor<S = any, P = any, M = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: S, res: any) => P) | P;
    meta?: ((action: RSAAAction, state: S, res: any) => M) | M;
}

export interface RSAAFailureTypeDescriptor<S = any, P = any, M = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: S) => P) | P;
    meta?: ((action: RSAAAction, state: S, res: any) => M) | M;
}

export interface RSAACall<S = any, P = any, M = any> {
    endpoint: ((state: S) => string) | string;
    method: string;
    types: [
        string | symbol | RSAARequestTypeDescriptor<S, P, M>,
        string | symbol | RSAASuccessTypeDescriptor<S, P, M>,
        string | symbol | RSAAFailureTypeDescriptor<S, P, M>
    ];
    body?: ((state: S) => BodyInit | null) | BodyInit | null;
    headers?: ((state: S) => HeadersInit) | HeadersInit;
    options?: ((state: S) => RequestInit) | RequestInit;
    credentials?: RequestCredentials;
    bailout?: ((state: S) => boolean) | boolean;
    fetch?: typeof fetch;
    ok?: (res: Response) => boolean;
}

export interface RSAAAction<S = any, P = any, M = any> {
    [RSAA]: RSAACall<S, P, M>;
}
