/// <reference path="../d3.d.ts" />

declare namespace d3 {
    export function superformula<T>(): Superformula<T>;

    namespace superformula {
        interface Type {
            m: number;
            n1: number;
            n2: number;
            n3: number;
            a: number;
            b: number;
        }
    }

    interface Superformula<T> {
        (datum: T, index: number): string;

        type(): (datum: T, index: number) => string;
        type(type: string): Superformula<T>;
        type(type: (datum: T, index: number) => string): Superformula<T>;

        size(): (datum: T, index: number) => number;
        size(size: number): Superformula<T>;
        size(size: (datum: T, index: number) => number): Superformula<T>;

        segments(): (datum: T, index: number) => number;
        segments(segments: number): Superformula<T>;
        segments(segments: (datum: T, index: number) => number): Superformula<T>;

        param(name: string): number;
        param(name: string, value: number): Superformula<T>;
    }

    export var superformulaTypes: string[];
}
