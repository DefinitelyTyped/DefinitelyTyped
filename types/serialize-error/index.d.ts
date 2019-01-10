// Type definitions for serialize-error 2.1
// Project: https://github.com/sindresorhus/serialize-error
// Definitions by: Thomas Thiebaud <https://github.com/thomasthiebaud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function SerializeError(error: any): SerializeError.ErrorObject;

declare namespace SerializeError {
    interface ErrorObject {
        name: string;
        stack: string;
        message: string;
        [keyof: string]: string;
    }
}

export = SerializeError;
