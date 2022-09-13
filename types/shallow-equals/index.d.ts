// Type definitions for shallow-equals 1.0
// Project: https://github.com/hughsk/shallow-equals
// Definitions by: Ross Solomon <https://github.com/rsolomon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = shallow_equals;

declare function shallow_equals<A, B>(
  a?: A,
  b?: B,
  compare?: (objA: A, objB: B) => boolean,
): boolean;
