import rp = require(".");

export interface RequestError extends Error {
    cause: any;
    error: any;
    options: rp.Options;
    response: rp.FullResponse;
}
export interface RequestErrorConstructor {
    new(cause: any, options: rp.Options, response: rp.FullResponse): RequestError;
    (cause: any, options: rp.Options, response: rp.FullResponse): RequestError;
    prototype: RequestError;
}
export const RequestError: RequestErrorConstructor;

export interface StatusCodeError extends Error {
    statusCode: number;
    error: any;
    options: rp.Options;
    response: rp.FullResponse;
}
export interface StatusCodeErrorConstructor extends Error {
    new(statusCode: number, body: any, options: rp.Options, response: rp.FullResponse): StatusCodeError;
    (statusCode: number, body: any, options: rp.Options, response: rp.FullResponse): StatusCodeError;
    prototype: StatusCodeError;
}
export const StatusCodeError: StatusCodeErrorConstructor;

export interface TransformError extends Error {
    cause: any;
    error: any;
    options: rp.Options;
    response: rp.FullResponse;
}
export interface TransformErrorConstructor extends Error {
    new(cause: any, options: rp.Options, response: rp.FullResponse): TransformError;
    (cause: any, options: rp.Options, response: rp.FullResponse): TransformError;
    prototype: TransformError;
}
export const TransformError: TransformErrorConstructor;
