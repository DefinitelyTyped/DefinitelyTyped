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

type TypeOrResolver<Arg, Type> = Type | ((arg: Arg) => Type);

/**
 * This module is also a UMD module that exposes a global variable 'ReduxApiMiddleware'
 * when loaded outside a module loader environment.
 */
export as namespace ReduxApiMiddleware;

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

export function apiMiddleware(api: MiddlewareAPI): ReturnType<Middleware>;

export interface CreateMiddlewareOptions {
    ok?: (res: Response) => boolean;
    fetch?: typeof fetch;
}

export function createMiddleware(options?: CreateMiddlewareOptions): Middleware;

export interface RSAARequestTypeDescriptor<State = any, Payload = any, Meta = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: State) => Payload) | Payload;
    meta?: ((action: RSAAAction, state: State) => Meta) | Meta;
}

export interface RSAASuccessTypeDescriptor<State = any, Payload = any, Meta = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: State, res: Response) => Payload) | Payload;
    meta?: ((action: RSAAAction, state: State, res: any) => Meta) | Meta;
}

export interface RSAAFailureTypeDescriptor<State = any, Payload = any, Meta = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: State, res: Response) => Payload) | Payload;
    meta?: ((action: RSAAAction, state: State, res: any) => Meta) | Meta;
}

export interface RSAACall<State = any, Payload = any, Meta = any> {
    endpoint: TypeOrResolver<State, string>;
    method: string;
    types: [
        string | symbol | RSAARequestTypeDescriptor<State, Payload, Meta>,
        string | symbol | RSAASuccessTypeDescriptor<State, Payload, Meta>,
        string | symbol | RSAAFailureTypeDescriptor<State, Payload, Meta>
    ];
    body?: TypeOrResolver<State, BodyInit | null>;
    headers?: TypeOrResolver<State, HeadersInit>;
    options?: TypeOrResolver<State, RequestInit>;
    credentials?: RequestCredentials;
    bailout?: TypeOrResolver<State, boolean>;
    fetch?: typeof fetch;
    ok?: (res: Response) => boolean;
}

export interface RSAAAction<State = any, Payload = any, Meta = any> {
    [RSAA]: RSAACall<State, Payload, Meta>;
}

/**
 * Redux behaviour changed by middleware, so overloads here
 */
declare module 'redux' {
    /*
     * Overload to add api middleware support to Redux's dispatch() function.
     * Useful for react-redux or any other library which could use this type.
     */
    interface Dispatch {
        (action: RSAAAction): Promise<any>;
    }
}

export {};
