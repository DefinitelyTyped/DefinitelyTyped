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
    code?: string | undefined;
    locale?: string | undefined;
    symbol?: string | undefined;
    decimal?: string | undefined;
    thousand?: string | undefined;
    precision?: number | undefined;
    format?:
        | string
        | {
            pos: string;
            neg: string;
            zero: string;
        }
        | undefined;
}
