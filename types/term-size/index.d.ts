// Type definitions for term-size 1.2
// Project: https://github.com/sindresorhus/term-size#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = termSize;

declare function termSize(): termSize.TermSize;

declare namespace termSize {
    interface TermSize {
        columns: number;
        rows: number;
    }
}
