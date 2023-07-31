// Type definitions for abbrev 1.1
// Project: https://github.com/isaacs/abbrev-js#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = abbrev;

declare function abbrev(words: ReadonlyArray<abbrev.Abbreviable>): { [abbreviation: string]: string };
declare function abbrev(...words: ReadonlyArray<abbrev.Abbreviable>): { [abbreviation: string]: string };

declare namespace abbrev {
    function monkeyPatch(): void;

    type Abbreviable = string | { toString(): string };
}

declare global {
    interface Array<T> {
        abbrev(): { [abbreviation: string]: string };
    }

    interface ReadonlyArray<T> {
        abbrev(): { [abbreviation: string]: string };
    }

    interface Object {
        abbrev(): { [abbreviation: string]: string };
    }
}
