declare function commaNumber(
    inputNumber: number | string,
    optionalSeparator?: string,
    optionalDecimalChar?: string,
): string;

declare namespace commaNumber {
    function bindWith(separator: string, decimalChar: string): (num: number | string) => string;
}

export = commaNumber;
