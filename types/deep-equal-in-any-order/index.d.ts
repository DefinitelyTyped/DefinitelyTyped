// Type definitions for deep-equal-in-any-order 1.0
// Project: https://github.com/oprogramador/deep-equal-in-any-order#readme
// Definitions by: Bastien Caudan <https://github.com/bcaudan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare global {
    namespace Chai {
        interface Deep {
            equalInAnyOrder: Equal;
        }
    }
}

declare const deepEqualInAnyOrder: Chai.ChaiPlugin;
export = deepEqualInAnyOrder;
