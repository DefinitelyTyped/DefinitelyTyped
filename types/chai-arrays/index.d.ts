/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            array(): Assertion;
            Uint8Array(): Assertion;
            Uint16Array(): Assertion;
            Uint32Array(): Assertion;
            Uint8ClampedArray(): Assertion;
            ofSize(size: number): Assertion;
            equalTo(arr: any[]): Assertion;
            containing(value: any): Assertion;
            containingAllOf(values: any[]): Assertion;
            containingAnyOf(values: any[]): Assertion;
            sorted(): Assertion;
            sorted<TElement = any>(comparefn: (a: TElement, b: TElement) => number): Assertion;
        }

        interface Assert {
            array(val: any[], msg?: string): void;
            Uint8Array(val: any, msg?: string): void;
            Uint16Array(val: any, msg?: string): void;
            Uint32Array(val: any, msg?: string): void;
            Uint8ClampedArray(val: any, msg?: string): void;
            ofSize(val: any[], size: number, msg?: string): void;
            equalTo(val: any[], array: any[], msg?: string): void;
            containing(val: any[], value: any, msg?: string): void;
            containingAllOf(val: any[], values: any[], msg?: string): void;
            containingAnyOf(val: any[], values: any[], msg?: string): void;
            sorted(val: any[], msg?: string): void;
            sorted<TElement>(val: TElement[], comparefn: (a: TElement, b: TElement) => number, msg?: string): void;
        }
    }
}

declare const chaiArrays: Chai.ChaiPlugin;
export = chaiArrays;
