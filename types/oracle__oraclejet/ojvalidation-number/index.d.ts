import { Converter, Validator, Validation } from '../ojvalidation-base';
export class IntlNumberConverter extends NumberConverter {
    constructor(options?: IntlNumberConverter.ConverterOptions);
    format(value: number): string;
    getHint(): null;
    getOptions(): IntlNumberConverter.ConverterOptions;
    parse(value: string): number | null;
    resolvedOptions(): IntlNumberConverter.ConverterOptions;
}
export namespace IntlNumberConverter {
    // tslint:disable-next-line interface-over-type-literal
    type ConverterOptions = {
        style?: 'decimal' | 'currency' | 'percent' | 'unit';
        currency?: string;
        unit?: 'byte' | 'bit';
        currencyDisplay?: 'code' | 'symbol' | 'name';
        decimalFormat?: 'standard' | 'short' | 'long';
        currencyFormat?: 'standard' | 'short' | 'long';
        minimumIntegerDigits?: number;
        minimumFractionDigits?: number;
        maximumFractionDigits?: number;
        useGrouping?: boolean;
        pattern?: string;
        roundingMode?: 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN';
        roundDuringParse?: boolean;
        separators?: object;
        lenientParse?: 'full' | 'none';
    };
}
export class NumberConverter implements Converter<number> {
    format(value: number): string | null;
    parse(value: string): number | null;
}
export interface NumberConverterFactory {
    createConverter(options?: IntlNumberConverter.ConverterOptions): IntlNumberConverter;
}
export class NumberRangeValidator implements Validator<string | number> {
    constructor(options?: NumberRangeValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string | number): void;
}
export namespace NumberRangeValidator {
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        converter?: NumberConverter;
        min?: number;
        max?: number;
        hint?: {
            max?: string;
            min?: string;
            inRange?: string;
            exact?: string;
        };
        messageDetail?: {
            rangeUnderflow?: string;
            rangeOverflow?: string;
            exact?: string;
        };
        messageSummary?: {
            rangeUnderflow?: string;
            rangeOverflow?: string;
        };
    };
}
export interface NumberRangeValidatorFactory {
    createValidator(options?: NumberRangeValidator.ValidatorOptions): NumberRangeValidator;
}
