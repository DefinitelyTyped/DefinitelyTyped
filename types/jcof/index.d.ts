// Type definitions for jcof 1.0
// Project: https://github.com/mortie/jcof
// Definitions by: MatyiFKBT <https://github.com/MatyiFKBT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(str: string): object;
export function stringify(value: object): string;
export class ParseError extends Error {
    constructor(message: string);
}
export as namespace jcof;
