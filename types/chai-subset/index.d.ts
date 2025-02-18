/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            // @ts-expect-error 230 this is a duplicate on chai >= 5.2.0
            containSubset(expected: any): Assertion;
        }
        interface Assert {
            containSubset(val: any, exp: any, msg?: string): void;
        }
    }
}

declare const chaiSubset: Chai.ChaiPlugin;
export = chaiSubset;
