export class SymbolTable {
    num2sym: readonly string[];
    sym2num: Map<string, number>;
    maxBase: number;
    isPrefixCode: boolean;

    constructor(symbols: string | readonly string[], map?: Record<string, number> | Map<string, number>);

    numberToDigits(num: number, base?: number): number[];
    digitsToString(digits: readonly number[]): string;
    stringToDigits(string: string | readonly string[]): number[];
    digitsToNumber(digits: readonly number[], base?: number): number;
    numberToString(num: number, base?: number): string;
    stringToNumber(num: string | readonly string[], base?: number): number;
    roundFraction(num: number, den: number, base?: number): number[];

    mudder(num: number): string[];
    mudder(
        a?: string | readonly string[],
        b?: string | readonly string[],
        numStrings?: number,
        base?: number,
        numDivisions?: number,
        placesToKeep?: number,
    ): string[];
}

export function longLinspace(
    a: readonly number[],
    b: readonly number[],
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
