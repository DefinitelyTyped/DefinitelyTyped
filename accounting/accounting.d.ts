// Type definitions for accounting.js 0.3.2
// Project: http://josscrowcroft.github.io/accounting.js/
// Definitions by: Sergey Gerasimov <https://github.com/gerich-home/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IAccountingCurrencyFormat {
    pos: string;         // for positive values, eg. "$ 1.00"
	neg?: string;        // for negative values, eg. "$ (1.00)"
	zero?: string;       // for zero values, eg. "$  --"
}

interface IAccountingCurrencySettings<TFormat> {
    symbol?: string;     // default currency symbol is '$'
    format?: TFormat;    // controls output: %s = symbol, %v = value/number
    decimal?: string;    // decimal point separator
    thousand?: string;   // thousands separator
    precision?: number   // decimal places
}

interface IAccountingNumberSettings {
    precision?: number;  // default precision on numbers is 0
    thousand?: string;
    decimal?: string;
}

interface IAccountingSettings {
    currency: IAccountingCurrencySettings<any>; // IAccountingCurrencySettings<string> or IAccountingCurrencySettings<IAccountingCurrencyFormat>
    number: IAccountingNumberSettings;
}

interface IAccountingStatic {
    // format any number into currency
    formatMoney(number: number, symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string;
    formatMoney(number: number, options: IAccountingCurrencySettings<string>): string;
    formatMoney(number: number, options: IAccountingCurrencySettings<IAccountingCurrencyFormat>): string;

    formatMoney(numbers: number[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string[];
    formatMoney(numbers: number[], options: IAccountingCurrencySettings<string>): string[];
    formatMoney(numbers: number[], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>): string[];

    // generic case (any array of numbers)
    formatMoney(numbers: any[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): any[];
    formatMoney(numbers: any[], options: IAccountingCurrencySettings<string>): any[];
    formatMoney(numbers: any[], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>): any[];

    // format a list of values for column-display
    formatColumn(numbers: number[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string[];
    formatColumn(numbers: number[], options: IAccountingCurrencySettings<string>): string[];
    formatColumn(numbers: number[], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>): string[];

    formatColumn(numbers: number[][], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string): string[][];
    formatColumn(numbers: number[][], options: IAccountingCurrencySettings<string>): string[][];
    formatColumn(numbers: number[][], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>): string[][];

    // format a number with custom precision and localisation
    formatNumber(number: number, precision?: number, thousand?: string, decimal?: string): string;
    formatNumber(number: number, options: IAccountingNumberSettings): string;

    formatNumber(number: number[], precision?: number, thousand?: string, decimal?: string): string[];
    formatNumber(number: number[], options: IAccountingNumberSettings): string[];

    formatNumber(number: any[], precision?: number, thousand?: string, decimal?: string): any[];
    formatNumber(number: any[], options: IAccountingNumberSettings): any[];

    // better rounding for floating point numbers
    toFixed(number: number, precision?: number): string;

    // get a value from any formatted number/currency string
    unformat(string: string, decimal?: string): number;

    // settings object that controls default parameters for library methods
    settings: IAccountingSettings;
}

declare var accounting: IAccountingStatic;

declare module "accounting" {
    export = accounting;
}