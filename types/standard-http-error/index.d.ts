// Type definitions for standard-http-error 2.0
// Project: https://github.com/moll/js-standard-http-error
// Definitions by: Labat Robin <https://github.com/roblabat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="standard-error" />

declare module 'standard-http-error' {
    import * as StandardError from 'standard-error';

    const HttpError: HttpError.constructor;

    namespace HttpError {
        interface constructor {
            new (code: number | string, message?: string, props?: object): error;
            new (code: number | string, props?: object): error;
            [key: string]: number | undefined;
        }

        interface error extends StandardError.error {
            code: number;
        }
    }

    export = HttpError;
}