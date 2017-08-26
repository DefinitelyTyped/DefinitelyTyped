// Type definitions for currency-formatter 1.0
// Project: https://github.com/smirzaei/currency-formatter#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Currency {
    code: string;
    decimalDigits: number;
    decimalSeparator: string;
    spaceBetweenAmountAndSymbol: boolean;
    symbol: string;
    symbolOnLeft: boolean;
    thousandsSeparator: string;
}

export const currencies: Currency[];
export const defaultCurrency: Currency;
export function findCurrency(currencyCode: string): Currency;
export function format(value: number, options: {
    code?: string,
    symbol?: string,
    decimal?: string,
    thousand?: string,
    precision?: number,
    format?: string | {
        pos: string,
        neg: string,
        zero: string
    }
}): string;
