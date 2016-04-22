// Type definitions for type-detect v0.1.2
// Project: https://github.com/chaijs/type-detect
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function type(val: any): string;

declare namespace type {
    export class Library {
        of(val: any): string;
        define(type: string, test: RegExp): void;
        define(type: string, test: (val: any) => boolean): void;
        test(val: any, type: string): boolean;
    }
}
export = type;
