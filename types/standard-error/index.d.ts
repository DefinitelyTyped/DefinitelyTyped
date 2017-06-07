// Type definitions for standard-error 1.1
// Project: https://github.com/moll/js-standard-error
// Definitions by: Labat Robin <https://github.com/roblabat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'standard-error' {
    const StandardError: StandardError.constructor;

    namespace StandardError {
        interface constructor {
            new (message: string, props?: object): error;
            new (props: object): error;
        }

        interface error extends Error {
            [key: string]: any;
        }
    }

    export = StandardError;
}