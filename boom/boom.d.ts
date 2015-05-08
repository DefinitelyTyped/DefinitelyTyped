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

    export function badRequest(message?: string, data?: any): BoomError;
}

declare module "boom" {
    export = Boom;
}
