// Type definitions for accounting.js 0.4
// Project: http://openexchangerates.github.io/accounting.js/
// Definitions by: Sergey Gerasimov <https://github.com/gerich-home>
//                 Christopher Eck <https://github.com/chrisleck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace accounting {
    interface CurrencyFormat {
        pos: string;         // for positive values, eg. "$ 1.00"
        neg?: string;        // for negative values, eg. "$ (1.00)"
        zero?: string;       // for zero values, eg. "$  --"
    }

    interface CurrencySettings<TFormat> {
        symbol?: string;     // default currency symbol is '$'
        format?: TFormat;    // controls output: %s = symbol, %v = value/number
        decimal?: string;    // decimal point separator
        thousand?: string;   // thousands separator
        precision?: number;   // decimal places
    }

    interface NumberSettings {
        precision?: number;  // default precision on numbers is 0
        thousand?: string;
        decimal?: string;
    }

    interface Settings {
        currency: CurrencySettings<any>; // IAccountingCurrencySettings<string> or IAccountingCurrencySettings<IAccountingCurrencyFormat>
        number: NumberSettings;
    }

    interface Static {
        // format any number or stringified number into currency
        formatMoney(number: number | string, symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string;
        formatMoney(number: number | string, options: CurrencySettings<string> | CurrencySettings<CurrencyFormat>): string;

        formatMoney(numbers: number[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string[];
        formatMoney(numbers: number[], options: CurrencySettings<string> | CurrencySettings<CurrencyFormat>): string[];

        // generic case (any array of numbers)
        formatMoney(numbers: any[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): any[];
        formatMoney(numbers: any[], options: CurrencySettings<string> | CurrencySettings<CurrencyFormat>): any[];

        // format a list of values for column-display
        formatColumn(numbers: number[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string[];
        formatColumn(numbers: number[], options: CurrencySettings<string> | CurrencySettings<CurrencyFormat>): string[];

        formatColumn(numbers: number[][], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string[][];
        formatColumn(numbers: number[][], options: CurrencySettings<string> | CurrencySettings<CurrencyFormat>): string[][];

        // format a number with custom precision and localisation
        formatNumber(number: number, precision?: number, thousand?: string, decimal?: string): string;
        formatNumber(number: number, options: NumberSettings): string;

        formatNumber(number: number[], precision?: number, thousand?: string, decimal?: string): string[];
        formatNumber(number: number[], options: NumberSettings): string[];

        formatNumber(number: any[], precision?: number, thousand?: string, decimal?: string): any[];
        formatNumber(number: any[], options: NumberSettings): any[];

        // better rounding for floating point numbers
        toFixed(number: number, precision?: number): string;

        // get a value from any formatted number/currency string
        unformat(string: string, decimal?: string): number;

        // settings object that controls default parameters for library methods
        settings: Settings;
    }
}

declare var accounting: accounting.Static;
export = accounting;
export as namespace accounting;
