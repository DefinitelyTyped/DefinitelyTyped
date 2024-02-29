/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            containSubsetInOrder(expected: unknown): Assertion;
        }
        interface Assert {
            containSubsetInOrder(val: unknown, exp: unknown, msg?: string): void;
        }
    }
}

declare const chaiSubsetInOrder: Chai.ChaiPlugin;
export = chaiSubsetInOrder;
