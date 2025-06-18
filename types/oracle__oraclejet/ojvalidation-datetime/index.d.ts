import { Converter, Validation, Validator } from "../ojvalidation-base";
export class DateRestrictionValidator implements Validator<string> {
    constructor(options?: DateRestrictionValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string): void;
}
export namespace DateRestrictionValidator {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DayFormatterInput = {
        fullYear: number;
        month: number;
        date: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DayFormatterOutput = {
        disabled?: boolean | undefined;
        className?: string | undefined;
        tooltip?: string | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ValidatorOptions = {
        dayFormatter?: ((param0: DayFormatterInput) => DayFormatterOutput | null | "all") | undefined;
        messageSummary?: string | undefined;
        messageDetail?: string | undefined;
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
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ValidatorOptions = {
        converter: DateTimeConverter;
        min?: string | undefined;
        max?: string | undefined;
        hint?: {
            max?: string | undefined;
            min?: string | undefined;
            inRange?: string | undefined;
        } | undefined;
        translationKey?: string | undefined;
        messageDetail?: {
            rangeUnderflow?: string | undefined;
            rangeOverflow?: string | undefined;
        } | undefined;
        messageSummary?: {
            rangeUnderflow?: string | undefined;
            rangeOverflow?: string | undefined;
        } | undefined;
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
        formatUsing?: string | undefined;
        dateField?: string | undefined;
        relativeTime?: string | undefined;
        dateOnly?: boolean | undefined;
        timeZone?: string | undefined;
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
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ConverterOptions = {
        year?: "2-digit" | "numeric" | undefined;
        "two-digit-year-start"?: number | undefined;
        month?: "2-digit" | "numeric" | "narrow" | "short" | "long" | undefined;
        day?: "2-digit" | "numeric" | undefined;
        hour?: "2-digit" | "numeric" | undefined;
        minute?: "2-digit" | "numeric" | undefined;
        second?: "2-digit" | "numeric" | undefined;
        millisecond?: "numeric" | undefined;
        weekday?: "narrow" | "short" | "long" | undefined;
        era?: "narrow" | "short" | "long" | undefined;
        timeZoneName?: "short" | "long" | undefined;
        timeZone?: string | undefined;
        isoStrFormat?: "offset" | "zulu" | "local" | "auto" | undefined;
        dst?: boolean | undefined;
        hour12?: boolean | undefined;
        pattern?: string | undefined;
        formatType?: "date" | "time" | "datetime" | undefined;
        dateFormat?: "short" | "medium" | "long" | "full" | undefined;
        timeFormat?: "short" | "medium" | "long" | "full" | undefined;
        lenientParse?: "full" | "none" | undefined;
    };
}
