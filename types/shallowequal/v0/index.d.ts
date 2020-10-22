// Type definitions for shallowequal 0.2
// Project: https://github.com/dashed/shallowequal
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function shallowEqual(objA: any, objB: any, compare?: (objA: any, objB: any, indexOrKey?: number | string) => (boolean | undefined), compareContext?: any): boolean;

declare namespace shallowEqual { }

export = shallowEqual;
