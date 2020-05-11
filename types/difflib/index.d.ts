// Type definitions for difflib 0.2
// Project: https://github.com/qiao/difflib.js
// Definitions by: majames <https://github.com/majames>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export class SequenceMatcher<T> {
    constructor(
        isjunk: (() => boolean) | null,
        left: T,
        right: T,
        autojunk?: boolean
    );
    getOpcodes(): Array<
        [
            "replace" | "delete" | "insert" | "equal",
            number,
            number,
            number,
            number
        ]
    >;
}
