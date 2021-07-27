export = NumberFormat;
declare function NumberFormat(pattern: number | string): void;
declare class NumberFormat {
    constructor(pattern: number | string);
    intlCurrencyCode_: string;
    maximumIntegerDigits_: number;
    minimumIntegerDigits_: number;
    maximumFractionDigits_: number;
    minimumFractionDigits_: number;
    minExponentDigits_: number;
    useSignForPositiveExponent_: boolean;
    positivePrefix_: string;
    positiveSuffix_: string;
    negativePrefix_: string;
    negativeSuffix_: string;
    multiplier_: number;
    groupingSize_: number;
    decimalSeparatorAlwaysShown_: boolean;
    useExponentialNotation_: boolean;
    private applyPattern_;
    private applyStandardPattern_;
    parse(text: string, opt_pos?: number[]): number;
    private parseNumber_;
    format(number: number): string;
    private subformatFixed_;
    private addExponentPart_;
    private subformatExponential_;
    private getDigit_;
    private parseAffix_;
    private parseTrunk_;
}
declare namespace NumberFormat {
    namespace Format {
        const DECIMAL: number;
        const SCIENTIFIC: number;
        const PERCENT: number;
        const CURRENCY: number;
        const INTEGER: number;
    }
    type Format = number;
    const PATTERN_ZERO_DIGIT_: string;
    const PATTERN_GROUPING_SEPARATOR_: string;
    const PATTERN_DECIMAL_SEPARATOR_: string;
    const PATTERN_PER_MILLE_: string;
    const PATTERN_PERCENT_: string;
    const PATTERN_DIGIT_: string;
    const PATTERN_SEPARATOR_: string;
    const PATTERN_EXPONENT_: string;
    const PATTERN_PLUS_: string;
    const PATTERN_MINUS_: string;
    const PATTERN_CURRENCY_SIGN_: string;
    const QUOTE_: string;
}
