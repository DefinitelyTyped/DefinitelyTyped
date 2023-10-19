export function decode(input: string): string;
export function encode(input: string): string;
export function toUnicode(input: string): string;
export function toASCII(input: string): string;

export namespace ucs2 {
    function decode(string: string): number[];
    function encode(array: ReadonlyArray<number>): string;
}

export const version: string;
