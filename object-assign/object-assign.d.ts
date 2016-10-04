// Type definitions for object-assign 4.0.1
// Project: https://github.com/sindresorhus/object-assign
// Definitions by: Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "object-assign" {
  function objectAssign<T, U>(target: T, source: U): T & U;
  function objectAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
  function objectAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
  function objectAssign<T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
  function objectAssign<T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;
  function objectAssign(target: any, ...sources: any[]): any;
  namespace objectAssign { }
  export = objectAssign;
}
