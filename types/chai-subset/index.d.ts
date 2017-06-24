// Type definitions for chai-subset 1.3
// Project: https://github.com/e-conomic/chai-subset
// Definitions by: Sam Noedel <https://github.com/delta62/>, Andrew Brown <https://github.com/AGBrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            containSubset(expected: any): Assertion;
        }
        interface Assert {
            containSubset(val: any, exp: any, msg?: string): void;
        }
    }
}

declare function chaiSubset(chai: any, utils: any): void;
export = chaiSubset;
