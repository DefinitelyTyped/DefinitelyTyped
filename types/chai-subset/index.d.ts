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

declare const chaiSubset: Chai.ChaiPlugin;
export = chaiSubset;
