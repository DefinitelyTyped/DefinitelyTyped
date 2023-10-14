// Type definitions for diff3 0.0
// Project: https://github.com/axosoft/diff3#readme
// Definitions by: Alex Titarenko <https://github.com/alex-titarenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace diff3Merge {
    interface Conflict {
        a: string[];
        aIndex: number;
        o: string[];
        oIndex: number;
        b: string[];
        bIndex: number;
    }

    interface DiffResult {
        ok?: string[];
        conflict?: Conflict;
    }
}

/** Given three files, A, O, and B, where both A and B are independently derived from O, returns a fairly complicated internal representation of merge decisions it's taken. */
declare function diff3Merge(a: string[], o: string[], b: string[]): diff3Merge.DiffResult[];
export = diff3Merge;
