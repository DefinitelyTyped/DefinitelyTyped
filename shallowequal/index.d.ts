// Type definitions for shallowequal v0.2.2
// Project: https://github.com/dashed/shallowequal
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'shallowequal' {
  function shallowEqual(objA: any, objB: any, compare?: (objA: any, objB: any, indexOrKey?: number | string) => boolean, compareContext?: any): boolean;
  export = shallowEqual;
}
