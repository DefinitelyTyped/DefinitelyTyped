declare namespace _exports {
    export { FormatOptions, LocaleConfig, NumberParts };
}
declare function _exports(value: number, options: FormatOptions): string;
export = _exports;
interface FormatOptions {
    format: number;
    locale?: 'pt-br' | 'en-us';
    minPrecision?: number;
    maxPrecision?: number;
}
interface LocaleConfig {
    thousandSeparator: string;
    decimalSeparator: string;
}
interface NumberParts {
    integerPart: string;
    fractionPart: string;
    isNegative: boolean;
}
