// Type definitions for shallowequal 1.1
// Project: https://github.com/dashed/shallowequal
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function shallowEqual<TCtx = any>(
    objA: any,
    objB: any,
    compare?: (this: TCtx, objA: any, objB: any, indexOrKey?: number | string) => boolean | void,
    compareContext?: TCtx
): boolean;

export = shallowEqual;
