// Type definitions for chai-arrays 1.0
// Project: https://github.com/GaneshSPatil/chai-arrays
// Definitions by: Clément Prévot <https://github.com/clementprevot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            array(): Assertion;
            ofSize(size: number): Assertion;
            equalTo(arr: any[]): Assertion;
            containing(value: any): Assertion;
            containingAllOf(values: any[]): Assertion;
            containingAnyOf(values: any[]): Assertion;
            sorted(): Assertion;
        }

        interface Assert {
            array(val: any[], msg?: string): void;
            ofSize(val: any[], size: number, msg?: string): void;
            equalTo(val: any[], array: any[], msg?: string): void;
            containing(val: any[], value: any, msg?: string): void;
            containingAllOf(val: any[], values: any[], msg?: string): void;
            containingAnyOf(val: any[], values: any[], msg?: string): void;
            sorted(val: any[], msg?: string): void;
        }
    }
}

declare const chaiArrays: Chai.ChaiPlugin;
export = chaiArrays;
