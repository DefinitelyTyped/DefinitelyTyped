/// <reference types='ojs/ojvalidation-base'/>
declare namespace oj {  
  class DateRestrictionValidator extends Validator<string> {
    constructor(options?: oj.DateRestrictionValidator.ValidatorOptions);
    getHint(): string|null;
    validate(value: string): void;
  }
  namespace DateRestrictionValidator {
    type DayFormatterInput =
    {
      fullYear: number, month: number, date: number
    }
  }
  namespace DateRestrictionValidator {
    type DayFormatterOutput =
    {
      disabled?: boolean, className?: string, tooltip?: string
    }
  }
  namespace DateRestrictionValidator {
    type ValidatorOptions =
    {
      dayFormatter?: ((param0: oj.DateRestrictionValidator.DayFormatterInput)=> oj.DateRestrictionValidator.DayFormatterOutput|null|'all'), messageSummary?: string, messageDetail?: string
    }
  }

}
declare namespace oj {  
  class DateRestrictionValidatorFactory {
    createValidator(options?: oj.DateRestrictionValidator.ValidatorOptions): oj.DateRestrictionValidator;
  }

}
declare namespace oj {  
  abstract class DateTimeConverter extends Converter<string> {
    abstract calculateWeek(value: string): number|undefined;
    compareISODates(isoStr: string, isoStr2: string): number;
    format(value: string): string|null;
    getAvailableTimeZones(): Array<any>;
    abstract isDayNameSet():boolean
    abstract isDaySet():boolean
    abstract isHourInAMPMSet():boolean
    abstract isHourInDaySet():boolean
    abstract isMilliSecondSet():boolean
    abstract isMinuteSet():boolean
    abstract isMonthSet():boolean
    abstract isSecondSet():boolean
    abstract isYearSet():boolean
    parse(value: string): string;
  }

}
declare namespace oj {  
  class DateTimeConverterFactory {
    createConverter(options?: oj.IntlDateTimeConverter.ConverterOptions): oj.IntlDateTimeConverter;
  }

}
declare namespace oj {  
  class DateTimeRangeValidator extends Validator<string> {
    constructor(options?: oj.DateTimeRangeValidator.ValidatorOptions);
    getHint(): string|null;
    validate(value: string): void;
  }
  namespace DateTimeRangeValidator {
    type ValidatorOptions =
    {
      converter: oj.DateTimeConverter, min?: string, max?: string, hint?: {max?: string, min?: string, inRange?: string}, translationKey?: string, messageDetail?: {rangeUnderflow?: string, rangeOverflow?: string}, messageSummary?: {rangeUnderflow?: string, rangeOverflow?: string}
    }
  }

}
declare namespace oj {  
  class DateTimeRangeValidatorFactory {
    createValidator(options?: oj.DateTimeRangeValidator.ValidatorOptions): oj.DateTimeRangeValidator;
  }

}
declare namespace oj {  
  class IntlDateTimeConverter extends DateTimeConverter {
    constructor(options?: oj.IntlDateTimeConverter.ConverterOptions);
    calculateWeek(value: string): number;
    compareISODates(isoStr: string, isoStr2: string): number;
    format(value: string): string|null;
    formatRelative(value: string, relativeOptions?: {formatUsing?: string, dateField?: string, relativeTime?: string, dateOnly?: boolean, timeZone?: string}): string|null;
    getAvailableTimeZones(): Array<any>;
    getHint(): null;
    getOptions(): oj.IntlDateTimeConverter.ConverterOptions;
    isDayNameSet(): boolean;
    isDaySet(): boolean;
    isHourInAMPMSet(): boolean;
    isHourInDaySet(): boolean;
    isMilliSecondSet(): boolean;
    isMinuteSet(): boolean;
    isMonthSet(): boolean;
    isSecondSet(): boolean;
    isYearSet(): boolean;
    parse(value: string): string|null;
    resolvedOptions(): oj.IntlDateTimeConverter.ConverterOptions;
  }
  namespace IntlDateTimeConverter {
    type ConverterOptions =
    {
      year?: '2-digit'|'numeric', 'two-digit-year-start'?: number, month?: '2-digit'|'numeric'|'narrow'|'short'|'long', day?: '2-digit'|'numeric', hour?: '2-digit'|'numeric', minute?: '2-digit'|'numeric', second?: '2-digit'|'numeric', millisecond?: 'numeric', weekday?: 'narrow'|'short'|'long', era?: 'narrow'|'short'|'long', timeZoneName?: 'short'|'long', timeZone?: string, isoStrFormat?: 'offset'|'zulu'|'local'|'auto', dst?: boolean, hour12?: boolean, pattern?: string, formatType?: 'date'|'time'|'datetime', dateFormat?: 'short'|'medium'|'long'|'full', timeFormat?: 'short'|'medium'|'long'|'full', lenientParse?: 'full'|'none'
    }
  }

}
