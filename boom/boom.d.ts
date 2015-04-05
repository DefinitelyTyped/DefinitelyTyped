// Type definitions for boom
// Project: http://github.com/hapijs/boom
// Definitions by: Igor Rogatty <http://github.com/rogatty>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module Boom {
    interface BoomError {
        data: any;
        reformat: () => void;
        isBoom: boolean;
        isServer: boolean;
        message: string;
        output: Output;
    }

    export interface Output {
        statusCode: number;
        headers: any;
        payload: any;
    }

    export function wrap(error: Error, statusCode?: number, message?: string): BoomError;
    export function create(statusCode: number, message?: string, data?: any): BoomError;

    // 4xx
    export function badRequest(message?: string, data?: any): BoomError;
    export function unauthorized(message?: string, scheme?: any, attributes?: any): BoomError;
    export function forbidden(message?: string, data?: any): BoomError;
    export function notFound(message?: string, data?: any): BoomError;
    export function methodNotAllowed(message?: string, data?: any): BoomError;
    export function notAcceptable(message?: string, data?: any): BoomError;
    export function proxyAuthRequired(message?: string, data?: any): BoomError;
    export function clientTimeout(message?: string, data?: any): BoomError;
    export function conflict(message?: string, data?: any): BoomError;
    export function resourceGone(message?: string, data?: any): BoomError;
    export function lengthRequired(message?: string, data?: any): BoomError;
    export function preconditionFailed(message?: string, data?: any): BoomError;
    export function entityTooLarge(message?: string, data?: any): BoomError;
    export function uriTooLong(message?: string, data?: any): BoomError;
    export function unsupportedMediaType(message?: string, data?: any): BoomError;
    export function rangeNotSatisfiable(message?: string, data?: any): BoomError;
    export function expectationFailed(message?: string, data?: any): BoomError;
    export function badData(message?: string, data?: any): BoomError;
    export function tooManyRequests(message?: string, data?: any): BoomError;

    // 5xx
    export function notImplemented(message?: string, data?: any): BoomError;
    export function badGateway(message?: string, data?: any): BoomError;
    export function serverTimeout(message?: string, data?: any): BoomError;
    export function gatewayTimeout(message?: string, data?: any): BoomError;
    export function badImplementation(message?: string, data?: any): BoomError;
}

declare module "boom" {
    export = Boom;
}
