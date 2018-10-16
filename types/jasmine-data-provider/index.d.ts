// Type definitions for jasmine-data-provider 2.2
// Project: https://github.com/MortalFlesh/jasmine-data-provider
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = using;

declare function using<T>(values: using.ValueType<T[]>, func: (data: T) => any): void;
declare function using<T, K extends keyof T>(values: using.ValueType<T>, func: (data: T[K], description: K) => any): void;

declare namespace using {
    export type ValueType<T> = T | (() => T);
}
