// Type definitions for parsecurrency 0.2
// Project: https://github.com/mktj/parsecurrency#readme
// Definitions by: Cristian Greco <https://github.com/cristianrgreco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ParsedCurrency {
    raw: string;
    value: number;
    integer: string;
    decimals: string;
    currency: string;
    symbol: string;
    decimalSeparator: string;
    groupSeparator: string;
}

declare function parsecurrency(currency: string): ParsedCurrency;

export = parsecurrency;
