// Type definitions for indent-string 3.2
// Project: https://github.com/sindresorhus/indent-string#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = indentString;

declare function indentString(
    str: string,
    count?: number,
    indent?: string | indentString.Options
): string;

declare namespace indentString {
    interface Options {
        indent?: string;
        includeEmptyLines?: boolean;
    }
}
