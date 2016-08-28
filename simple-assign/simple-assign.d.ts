// Type definitions for simple-assign 0.1.0
// Project: https://github.com/newoga/simple-assign
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "simple-assign" {
  function simpleAssign<T, U>(target: T, source: U): T & U;
  function simpleAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
  function simpleAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
  function simpleAssign<T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
  function simpleAssign<T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;
  function simpleAssign(target: any, ...sources: any[]): any;
  export = simpleAssign;
}
