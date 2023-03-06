// Type definitions for difflib 0.2
// Project: https://github.com/qiao/difflib.js
// Definitions by: majames <https://github.com/majames>, Hugues Le Gendre <https://github.com/hlegendre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export class SequenceMatcher<T> {
    constructor(isjunk: (() => boolean) | null, left: T, right: T, autojunk?: boolean);
    getOpcodes(): Array<['replace' | 'delete' | 'insert' | 'equal', number, number, number, number]>;
}

export class Differ {
    constructor(linejunk?: (s: string) => boolean, charjunk?: (s: string) => boolean);
    compare(a: ReadonlyArray<string>, b: ReadonlyArray<string>): string[];
}

export function unifiedDiff(
    from: ReadonlyArray<string>,
    to: ReadonlyArray<string>,
    args: {
        fromfile?: string;
        tofile?: string;
        fromfiledate?: string;
        tofiledate?: string;
        lineterm?: string;
    },
): string[];

export function contextDiff(
    from: ReadonlyArray<string>,
    to: ReadonlyArray<string>,
    args: {
        fromfile?: string;
        tofile?: string;
        fromfiledate?: string;
        tofiledate?: string;
        lineterm?: string;
    },
): string[];

export function ndiff(
    from: ReadonlyArray<string>,
    to: ReadonlyArray<string>,
    linejunk?: (s: string) => boolean,
    charjunk?: (s: string) => boolean,
): string[];

export function restore(delta: string[], which: 1 | 2): string[];

export function getCloseMatches(word: string, possibilities: string[], n?: number, cutoff?: number): string[];
