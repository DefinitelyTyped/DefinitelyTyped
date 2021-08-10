// Type definitions for parsecurrency 1.0
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

declare function parsecurrency(currency: string): ParsedCurrency | null;

export = parsecurrency;
