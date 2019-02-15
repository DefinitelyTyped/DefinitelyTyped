// Type definitions for natural-compare-lite 1.4.0
// Project: https://github.com/litejs/natural-compare-lite
// Definitions by: Doniyor Aliyev <https://github.com/doniyor2109>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function naturalCompare(a: string, b: string): number;

declare global {
    interface StringConstructor {
        naturalCompare: typeof naturalCompare;
    }
}

export = naturalCompare;
