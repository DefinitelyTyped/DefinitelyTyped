// Type definitions for currency-formatter 1.5
// Project: https://github.com/smirzaei/currency-formatter#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 David Paz <https://github.com/davidmpaz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const currencies: Currency[];
export const defaultCurrency: Omit<Currency, "code">;
export function findCurrency(currencyCode: string): Currency | undefined;
export function format(value: number, options: FormatOptions): string;
export function unformat(value: string, options: FormatOptions): number;

export interface Currency {
    code: string;
    /**
     * @default 2
     */
    decimalDigits: number;
    /**
     * @default '.'
     */
    decimalSeparator: string;
    /**
     * @default false
     */
    spaceBetweenAmountAndSymbol: boolean;
    /**
     * @default ''
     */
    symbol: string;
    /**
     * @default false
     */
    symbolOnLeft: boolean;
    /**
     * @default ','
     */
    thousandsSeparator: string;
}

export interface FormatOptions {
    code?: string;
    locale?: string;
    symbol?: string;
    decimal?: string;
    thousand?: string;
    precision?: number;
    format?:
        | string
        | {
              pos: string;
              neg: string;
              zero: string;
          };
}
