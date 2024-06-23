import { Converter, Validation, Validator } from "../ojvalidation-base";
export class IntlNumberConverter extends NumberConverter {
    constructor(options?: IntlNumberConverter.ConverterOptions);
    format(value: number): string;
    getHint(): null;
    getOptions(): IntlNumberConverter.ConverterOptions;
    parse(value: string): number | null;
    resolvedOptions(): IntlNumberConverter.ConverterOptions;
}
export namespace IntlNumberConverter {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ConverterOptions = {
        style?: "decimal" | "currency" | "percent" | "unit" | undefined;
        currency?: string | undefined;
        unit?: "byte" | "bit" | undefined;
        currencyDisplay?: "code" | "symbol" | "name" | undefined;
        decimalFormat?: "standard" | "short" | "long" | undefined;
        currencyFormat?: "standard" | "short" | "long" | undefined;
        minimumIntegerDigits?: number | undefined;
        minimumFractionDigits?: number | undefined;
        maximumFractionDigits?: number | undefined;
        useGrouping?: boolean | undefined;
        pattern?: string | undefined;
        roundingMode?: "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined;
        roundDuringParse?: boolean | undefined;
        separators?: Separators | undefined;
        lenientParse?: "full" | "none" | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Separators = {
        decimal?: string | undefined;
        group?: string | undefined;
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
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ValidatorOptions = {
        converter?: NumberConverter | undefined;
        min?: number | undefined;
        max?: number | undefined;
        hint?: {
            max?: string | undefined;
            min?: string | undefined;
            inRange?: string | undefined;
            exact?: string | undefined;
        } | undefined;
        messageDetail?: {
            rangeUnderflow?: string | undefined;
            rangeOverflow?: string | undefined;
            exact?: string | undefined;
        } | undefined;
        messageSummary?: {
            rangeUnderflow?: string | undefined;
            rangeOverflow?: string | undefined;
        } | undefined;
    };
}
export interface NumberRangeValidatorFactory {
    createValidator(options?: NumberRangeValidator.ValidatorOptions): NumberRangeValidator;
}
