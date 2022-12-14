// Type definitions for chai-subset-in-order 3.1
// Project: https://github.com/oprogramador/chai-subset-in-order
// Definitions by: Mario Ramundo <https://github.com/ramundomario>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
