// Type definitions for shallowequal 1.1
// Project: https://github.com/dashed/shallowequal
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
//                 BendingBender <https://github.com/BendingBender>
//                 Arnd Issler <https://github.com/arndissler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function shallowEqual<TCtx = any>(
    objA: any,
    objB: any,
    customizer?: shallowEqual.Customizer<TCtx>,
    compareContext?: TCtx
): boolean;

declare namespace shallowEqual {
    type Customizer<T = any> = (
        this: T,
        objA: any,
        objB: any,
        indexOrKey?: number | string
    ) => boolean | void;
}

export = shallowEqual;
