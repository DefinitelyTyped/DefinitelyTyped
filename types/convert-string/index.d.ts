// Type definitions for convert-string 0.1
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace convertString {
    export function stringToBytes(str: string): number[];
    export function bytesToString(bytes: number[]): string;
}

export namespace UTF8 {
    export function stringToBytes(str: string): number[];
    export function bytesToString(bytes: number[]): string;
}

export default convertString;