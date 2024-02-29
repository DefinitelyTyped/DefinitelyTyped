import rp = require(".");
import http = require("http");

export interface RequestError extends Error {
    name: "RequestError";
    cause: any;
    error: any;
    options: rp.Options;
    response: http.IncomingMessage;
}
export interface RequestErrorConstructor {
    new(cause: any, options: rp.Options, response: http.IncomingMessage): RequestError;
    (cause: any, options: rp.Options, response: http.IncomingMessage): RequestError;
    prototype: RequestError;
}
export const RequestError: RequestErrorConstructor;

export interface StatusCodeError extends Error {
    name: "StatusCodeError";
    statusCode: number;
    error: any;
    options: rp.Options;
    response: http.IncomingMessage;
}
export interface StatusCodeErrorConstructor extends Error {
    new(statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError;
    (statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError;
    prototype: StatusCodeError;
}
export const StatusCodeError: StatusCodeErrorConstructor;

export interface TransformError extends Error {
    name: "TransformError";
    cause: any;
    error: any;
    options: rp.Options;
    response: http.IncomingMessage;
}
export interface TransformErrorConstructor extends Error {
    new(cause: any, options: rp.Options, response: http.IncomingMessage): TransformError;
    (cause: any, options: rp.Options, response: http.IncomingMessage): TransformError;
    prototype: TransformError;
}
export const TransformError: TransformErrorConstructor;
