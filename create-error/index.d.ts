// Type definitions for create-error.js 0.3.1
// Project: https://github.com/tgriesser/create-error
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// FIXME See Global type references https://github.com/Microsoft/TypeScript/issues/983
type Err = Error;

declare namespace createError {
    interface Error<T extends Err> extends Err {
        new (message?: string, obj?: any): T;
    }
}

declare function createError(): createError.Error<Error>;
declare function createError<T extends createError.Error<Error>>(name: string, properties?: any): T;
declare function createError<T extends createError.Error<Error>>(Target: createError.Error<Error>, name?: string, properties?: any): T;

export = createError;
