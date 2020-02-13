import { Converter, Validator, Validation } from '../ojvalidation-base';
export class DateRestrictionValidator implements Validator<string> {
    constructor(options?: DateRestrictionValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string): void;
}
export namespace DateRestrictionValidator {
    // tslint:disable-next-line interface-over-type-literal
    type DayFormatterInput = {
        fullYear: number;
        month: number;
        date: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DayFormatterOutput = {
        disabled?: boolean;
        className?: string;
        tooltip?: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        dayFormatter?: ((param0: DayFormatterInput) => DayFormatterOutput | null | 'all');
        messageSummary?: string;
        messageDetail?: string;
    };
}
export interface DateRestrictionValidatorFactory {
    createValidator(options?: DateRestrictionValidator.ValidatorOptions): DateRestrictionValidator;
}
export abstract class DateTimeConverter implements Converter<string> {
    abstract calculateWeek(value: string): number | undefined;
    compareISODates(isoStr: string, isoStr2: string): number;
    format(value: string): string | null;
    getAvailableTimeZones(): any[];
    abstract isDayNameSet(): boolean;
    abstract isDaySet(): boolean;
    abstract isHourInAMPMSet(): boolean;
    abstract isHourInDaySet(): boolean;
    abstract isMilliSecondSet(): boolean;
    abstract isMinuteSet(): boolean;
    abstract isMonthSet(): boolean;
    abstract isSecondSet(): boolean;
    abstract isYearSet(): boolean;
    parse(value: string): string | null;
}
export interface DateTimeConverterFactory {
    createConverter(options?: IntlDateTimeConverter.ConverterOptions): IntlDateTimeConverter;
}
export class DateTimeRangeValidator implements Validator<string> {
    constructor(options?: DateTimeRangeValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string): void;
}
export namespace DateTimeRangeValidator {
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        converter: DateTimeConverter;
        min?: string;
        max?: string;
        hint?: {
            max?: string;
            min?: string;
            inRange?: string;
        };
        translationKey?: string;
        messageDetail?: {
            rangeUnderflow?: string;
            rangeOverflow?: string;
        };
        messageSummary?: {
            rangeUnderflow?: string;
            rangeOverflow?: string;
        };
    };
}
export interface DateTimeRangeValidatorFactory {
    createValidator(options?: DateTimeRangeValidator.ValidatorOptions): DateTimeRangeValidator;
}
export class IntlDateTimeConverter extends DateTimeConverter {
    constructor(options?: IntlDateTimeConverter.ConverterOptions);
    calculateWeek(value: string): number;
    compareISODates(isoStr: string, isoStr2: string): number;
    format(value: string): string | null;
    formatRelative(value: string, relativeOptions?: {
        formatUsing?: string;
        dateField?: string;
        relativeTime?: string;
        dateOnly?: boolean;
        timeZone?: string;
    }): string | null;
    getAvailableTimeZones(): any[];
    getHint(): null;
    getOptions(): IntlDateTimeConverter.ConverterOptions;
    isDayNameSet(): boolean;
    isDaySet(): boolean;
    isHourInAMPMSet(): boolean;
    isHourInDaySet(): boolean;
    isMilliSecondSet(): boolean;
    isMinuteSet(): boolean;
    isMonthSet(): boolean;
    isSecondSet(): boolean;
    isYearSet(): boolean;
    parse(value: string): string | null;
    resolvedOptions(): IntlDateTimeConverter.ConverterOptions;
}
export namespace IntlDateTimeConverter {
    // tslint:disable-next-line interface-over-type-literal
    type ConverterOptions = {
        year?: '2-digit' | 'numeric';
        'two-digit-year-start'?: number;
        month?: '2-digit' | 'numeric' | 'narrow' | 'short' | 'long';
        day?: '2-digit' | 'numeric';
        hour?: '2-digit' | 'numeric';
        minute?: '2-digit' | 'numeric';
        second?: '2-digit' | 'numeric';
        millisecond?: 'numeric';
        weekday?: 'narrow' | 'short' | 'long';
        era?: 'narrow' | 'short' | 'long';
        timeZoneName?: 'short' | 'long';
        timeZone?: string;
        isoStrFormat?: 'offset' | 'zulu' | 'local' | 'auto';
        dst?: boolean;
        hour12?: boolean;
        pattern?: string;
        formatType?: 'date' | 'time' | 'datetime';
        dateFormat?: 'short' | 'medium' | 'long' | 'full';
        timeFormat?: 'short' | 'medium' | 'long' | 'full';
        lenientParse?: 'full' | 'none';
    };
}
