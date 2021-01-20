// Type definitions for redux-api-middleware 3.2
// Project: https://github.com/agraboso/redux-api-middleware
// Definitions by:  Andrew Luca <https://github.com/iamandrewluca>
//                  Craig S <https://github.com/Mrman>
//                  Arturs Vonda <https://github.com/artursvonda>
//                  Matthew M <https://github.com/magoogli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

type TypeOrResolver<Arg, Type> = Type | ((arg: Arg) => Type | Promise<Type>);

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

export class ApiError<T = any> extends Error {
    name: 'ApiError';
    status: number;
    statusText: string;
    response: T;
    message: string;
    constructor(status: number, statusText: string, response: T);
}

export function getJSON(res: Response): Promise<any>;

export function apiMiddleware(api: MiddlewareAPI): ReturnType<Middleware>;

export interface CreateMiddlewareOptions {
    ok?: (res: Response) => boolean;
    fetch?: typeof fetch;
}

export function createMiddleware(options?: CreateMiddlewareOptions): Middleware;

export interface RSAARequestTypeDescriptor<State = any, Payload = any, Meta = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: State) => Payload | Promise<Payload>) | Payload;
    meta?: ((action: RSAAAction, state: State) => Meta | Promise<Meta>) | Meta;
}

export interface RSAASuccessTypeDescriptor<State = any, Payload = any, Meta = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: State, res: Response) => Payload | Promise<Payload>) | Payload;
    meta?: ((action: RSAAAction, state: State, res: Response) => Meta | Promise<Meta>) | Meta;
}

export interface RSAAFailureTypeDescriptor<State = any, Payload = any, Meta = any> {
    type: string | symbol;
    payload?: ((action: RSAAAction, state: State, res: Response) => Payload | Promise<Payload>) | Payload;
    meta?: ((action: RSAAAction, state: State, res: Response) => Meta | Promise<Meta>) | Meta;
}

export type RSAARequestType<State = any, Payload = any, Meta = any> =
    | string
    | symbol
    | RSAARequestTypeDescriptor<State, Payload, Meta>;

export type RSAASuccessType<State = any, Payload = any, Meta = any> =
    | string
    | symbol
    | RSAASuccessTypeDescriptor<State, Payload, Meta>;

export type RSAAFailureType<State = any, Payload = any, Meta = any> =
    | string
    | symbol
    | RSAAFailureTypeDescriptor<State, Payload, Meta>;

export interface RSAACall<State = any, Payload = any, Meta = any> {
    endpoint: TypeOrResolver<State, string>;
    // `redux-api-middleware` strictly allows only this methods
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
    types: [
        RSAARequestType<State, Payload, Meta>,
        RSAASuccessType<State, Payload, Meta>,
        RSAAFailureType<State, Payload, Meta>
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

type ValidAction<Payload = never, Meta = never> =
    { type: string | symbol; error?: false }
    // The `[Payload] extends [never]` is required to check if generic type is never.
    // Can't do it with just `Payload extends never`.
    & ([Payload] extends [never] ? {} : { payload: Payload })
    & ([Meta] extends [never] ? {} : { meta: Meta });

interface InvalidAction<Payload> {
    type: string | symbol;
    payload: Payload;
    error: true;
}

/**
 * `Promise<RSAARequestAction>` is not returned from dispatch like other actions
 * Is only dispatched through redux
 */
export type RSAARequestAction<Payload = never, Meta = never> = ValidAction<Payload, Meta> | InvalidAction<InvalidRSAA>;

// @deprecated Use RSAAResultAction
export type RSAASuccessAction<Payload = any, Meta = any> = RSAAResultAction<Payload, Meta>;

// @deprecated Use RSAAResultAction
export type RSAAFailureAction<Payload = any, Meta = any> = RSAAResultAction<Payload, Meta>;

export type RSAAResultAction<Payload = never, Meta = never> =
    | ValidAction<Payload, Meta>
    | InvalidAction<InternalError | RequestError | ApiError<Payload>>;

export type RSAAActions = RSAARequestAction | RSAAResultAction;

export function createAction<State, Payload, Meta>(
    clientCall: RSAACall<State, Payload, Meta>
): RSAAAction<State, Payload, Meta>;

/**
 * Redux behaviour changed by middleware, so overloads here
 */
declare module 'redux' {
    /*
     * Overload to add api middleware support to Redux's dispatch() function.
     * Useful for react-redux or any other library which could use this type.
     */
    interface Dispatch {
        <Payload, Meta>(action: RSAAAction<any, Payload, Meta>): Promise<RSAAResultAction<Payload, Meta>>;
        // `Promise<undefined> is returned in case of RSAA validation errors or user bails out
        (action: RSAAAction): Promise<undefined>;
    }
}

export { };
