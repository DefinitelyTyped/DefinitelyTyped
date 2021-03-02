// Type definitions for tsv 0.2
// Project: https://github.com/ricardobeat/TSV
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Parser {
    header: boolean;
    sep: string;

    constructor(sep: string, options?: { header?: boolean });

    stringify(data: ReadonlyArray<any>): string;
    parse(tsv: string): any[];
}

export const CSV: Parser;
export const TSV: Parser;

export function stringify(data: any[]): string;
export function parse(tsv: string): any[];
