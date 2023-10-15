// Type definitions for chai-sorted 0.2
// Project: https://github.com/johntimothybailey/chai-sorted#readme
// Definitions by: Reinert Lemmens <https://github.com/reilem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            sorted(options?: { descending: boolean }): Assertion;
            sortedBy(key: string, options?: { descending: boolean }): Assertion;
            ascendingBy(key: string): Assertion;
            descendingBy(key: string): Assertion;
            ascending: Assertion;
            descending: Assertion;
        }
    }
}

declare const chaiSorted: Chai.ChaiPlugin;
declare namespace chaiSorted {}
export = chaiSorted;
