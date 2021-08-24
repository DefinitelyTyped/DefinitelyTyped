export = NumberFormat;
declare function NumberFormat(pattern: number | string): void;
declare class NumberFormat {
    constructor(pattern: number | string);
    private intlCurrencyCode_;
    private maximumIntegerDigits_;
    private minimumIntegerDigits_;
    private maximumFractionDigits_;
    private minimumFractionDigits_;
    private minExponentDigits_;
    private useSignForPositiveExponent_;
    private positivePrefix_;
    private positiveSuffix_;
    private negativePrefix_;
    private negativeSuffix_;
    private multiplier_;
    private groupingSize_;
    private decimalSeparatorAlwaysShown_;
    private useExponentialNotation_;
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
}
