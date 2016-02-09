// Type definitions for create-error.js 0.3.1
// Project: https://github.com/tgriesser/create-error
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'create-error' {
  // FIXME See Global type references https://github.com/Microsoft/TypeScript/issues/983
  type Err = Error;

  namespace createError {
    interface Error<T extends Err> extends Err {
      new (message?: string, obj?: any): T;
    }
  }

  function createError(): createError.Error<Error>;
  function createError<T extends createError.Error<Error>>(name: string, properties?: any): T;
  function createError<T extends createError.Error<Error>>(Target: createError.Error<Error>, name?: string, properties?: any): T;

  export = createError;
}
