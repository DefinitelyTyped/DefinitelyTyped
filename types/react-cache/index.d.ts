// Type definitions for react-cache 2.0.0-alpha.1
// Project: https://github.com/facebook/react/tree/master/packages/react-cache
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Thenable<Value> = {
  then(resolve: (value: Value) => any, reject: (reason: any) => any): any;
};

type Resource<Input, Value> = {
  read(key: Input): Value;
  preload(key: Input): void;
};

export function unstable_createResource<Input, Key extends string | number, Value>(
  fetch: (input: Input) => Thenable<Value>,
  maybeHashInput?: (input: Input) => Key
): Resource<Input, Value>;