// Type definitions for react-cache 2.0
// Project: https://github.com/facebook/react/tree/master/packages/react-cache
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Thenable<Value> {
  then(resolve: (value: Value) => any, reject: (reason: any) => any): any;
}

export interface Resource<Input, Value> {
  read(key: Input): Value;
  preload(key: Input): void;
}

export function unstable_createResource<Input, Value>(
  fetch: (input: Input) => Thenable<Value>,
  maybeHashInput?: (input: Input) => string | number
): Resource<Input, Value>;
