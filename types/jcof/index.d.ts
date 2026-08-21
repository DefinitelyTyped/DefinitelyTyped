export function parse(str: string): object;
export function stringify(value: object): string;
export class ParseError extends Error {
    constructor(message: string);
}
export as namespace jcof;
