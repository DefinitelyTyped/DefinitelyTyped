// Type definitions for detect-pointer 1.0
// Project: https://github.com/rafrex/detect-pointer#readme
// Definitions by: Thomas Tilkema <https://github.com/thomastilkema>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface detectPointer {
    anyCoarse: boolean;
    anyFine: boolean;
    anyNone: boolean;

    coarse: boolean;
    fine: boolean;
    none: boolean;

    update(): void;
}

declare const detectPointer: detectPointer;
export default detectPointer;
