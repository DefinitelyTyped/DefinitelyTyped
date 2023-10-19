export class SymbolTable {
    num2sym: ReadonlyArray<string>;
    sym2num: Map<string, number>;
    maxBase: number;
    isPrefixCode: boolean;

    constructor(symbols: string | ReadonlyArray<string>, map?: Record<string, number> | Map<string, number>);

    numberToDigits(num: number, base?: number): number[];
    digitsToString(digits: ReadonlyArray<number>): string;
    stringToDigits(string: string | ReadonlyArray<string>): number[];
    digitsToNumber(digits: ReadonlyArray<number>, base?: number): number;
    numberToString(num: number, base?: number): string;
    stringToNumber(num: string | ReadonlyArray<string>, base?: number): number;
    roundFraction(num: number, den: number, base?: number): number[];

    mudder(num: number): string[];
    mudder(
        a?: string | ReadonlyArray<string>,
        b?: string | ReadonlyArray<string>,
        numStrings?: number,
        base?: number,
        numDivisions?: number,
        placesToKeep?: number,
    ): string[];
}

export function longLinspace(
    a: ReadonlyArray<number>,
    b: ReadonlyArray<number>,
    base: number,
    N: number,
    M: number,
): Array<{
    res: number[];
    carry: boolean;
    rem: number;
    den: number;
}>;

export const base36: SymbolTable;
export const base62: SymbolTable;
export const alphabet: SymbolTable;
