// Type definitions for react-cache 2.0
// Project: https://github.com/facebook/react/tree/master/packages/react-cache, https://github.com/facebook/react
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Resource<Input, Value> {
  read(key: Input): Value;
  preload(key: Input): void;
}

export function unstable_createResource<Input, Value>(
  fetch: (input: Input) => PromiseLike<Value>,
  maybeHashInput?: (input: Input) => string | number
): Resource<Input, Value>;
