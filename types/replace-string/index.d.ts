// Type definitions for replace-string 2.0
// Project: https://github.com/sindresorhus/replace-string#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = replaceString;

declare function replaceString(
    input: string,
    needle: string,
    replacement: string | replaceString.ReplacementFn,
    options?: replaceString.Options
): string;

declare namespace replaceString {
    type ReplacementFn = (
        needle: string,
        matchCount: number,
        input: string,
        matchIndex: number
    ) => string;

    interface Options {
        fromIndex?: number;
    }
}
