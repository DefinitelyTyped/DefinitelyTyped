// Type definitions for deep-equal-in-any-order 1.0
// Project: https://github.com/oprogramador/deep-equal-in-any-order#readme
// Definitions by: Bastien Caudan <https://github.com/bcaudan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    namespace Chai {
        interface Deep {
            equalInAnyOrder: Equal;
        }
    }
}

declare function deepEqualInAnyOrder(chai: any, utils: any): void;
export = deepEqualInAnyOrder;
