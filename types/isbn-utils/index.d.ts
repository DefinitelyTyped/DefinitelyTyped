// Type definitions for isbn-utils 1.1
// Project: https://github.com/GitbookIO/isbn-utils
// Definitions by: Jørgen Elgaard Larsen <https://github.com/elhaard/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type IGroups = any;

export class ISBNcodes {
    readonly source: string;
    readonly prefix: string;
    readonly group: string;
    readonly publisher: string;
    readonly article: string;
    readonly check: string;
    readonly check10: string;
    readonly check13: string;
    readonly groupname: string;
}

export class ISBN {
    constructor(val: string, groups: IGroups);
    asIsbn10(hyphenate?: boolean): string;
    asIsbn13(hyphenate?: boolean): string;
    codes: ISBNcodes;
    isIsbn10(): boolean;
    isIsbn13(): boolean;
    isValid(): boolean;
}

export function asIsbn10(isbn: string, hyphenate?: boolean): string;
export function asIsbn13(isbn: string, hyphenate?: boolean): string;
export function parse(isbn: string, groups?: IGroups): ISBN|null;
export function hyphenate(isbn: string): string;
export function isValid(isbn: string, groups?: IGroups): boolean;
