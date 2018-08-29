/// <reference types='ojs/ojcolor'/>
/// <reference types='ojs/ojmessaging'/>
declare namespace oj {  
  interface AsyncValidator<V> {
    hint: Promise<string>;
    validate(value: V): Promise<boolean>
  }

}
declare namespace oj {  
  class ColorConverter extends Converter<oj.Color> {
    constructor(options?: oj.ColorConverter.ConverterOptions);
    format(color: oj.Color): string|null;
    getHint(): string;
    parse(value: string): oj.Color;
    resolvedOptions(): oj.ColorConverter.ConverterOptions;
  }
  namespace ColorConverter {
    type ConverterOptions =
    {
      format?: 'rgb'|'hsl'|'hsv'|'hex'|'hex3'
    }
  }

}
declare namespace oj {  
  class ColorConverterFactory {
    createConverter(options?: oj.ColorConverter.ConverterOptions): oj.ColorConverter;
  }

}
declare namespace oj {  
  class Converter<V> {
    format(value: V): string|null;
    getHint?(): string|null
    getOptions?(): object
    parse(value: string): V;
    resolvedOptions?(): object
  }

}
declare namespace oj {  
  class ConverterError {
    constructor(summary: string, detail: string);
    getMessage(): oj.Message;
  }

}
declare namespace oj {  
  class ConverterFactory<V> {
    static CONVERTER_TYPE_COLOR: string;
    static CONVERTER_TYPE_DATETIME: string;
    static CONVERTER_TYPE_NUMBER: string;
    createConverter(options: object|null): oj.Converter<V>;
  }

}
declare namespace oj {  
  class IntlConverterUtils {
    static dateToLocalIso(date: Date): string;
    static getConverterInstance<T>(converterOption: string|oj.Validation.RegisteredConverter|oj.Converter<T>): oj.Converter<T>|null
    static getInitials(firstName?: string, lastName?: string): string|undefined;
    static getLocalTimeZoneOffset(): string;
    static isoToDate(isoString: string): Date;
    static isoToLocalDate(isoString: string): Date;
  }

}
declare namespace oj {  
  class LengthValidator extends Validator<number|string> {
    static defaults: {countBy: string};
    constructor(options?: oj.LengthValidator.ValidatorOptions);
    getHint(): string|null;
    validate(value: string|number): void;
  }
  namespace LengthValidator {
    type ValidatorOptions =
    {
      countBy?: 'codeUnit'|'codePoint', min?: number, max?: number, hint?: {max?: string, min?: string, inRange?: string, exact?: string}, messageDetail?: {tooLong?: string, tooShort?: string}, messageSummary?: {tooLong?: string, tooShort?: string}
    }
  }

}
declare namespace oj {  
  class LengthValidatorFactory {
    createValidator(options?: oj.LengthValidator.ValidatorOptions): oj.LengthValidator;
  }

}
declare namespace oj {  
  class LocaleData {
    static getDayNames(type?: 'abbreviated'|'narrow'|'wide'): Array<string>;
    static getFirstDayOfWeek(): number;
    static getMonthNames(type?: 'abbreviated'|'narrow'|'wide'): Array<string>;
    static getWeekendEnd(): number;
    static getWeekendStart(): number;
    static isMonthPriorToYear(): boolean;
    static setBundle(bundle: object): void;
  }

}
declare namespace oj {  
  class RegExpValidator extends Validator<string|number> {
    constructor(options?: oj.RegExpValidator.ValidatorOptions);
    getHint(): string|null;
    validate(value: string|number): void;
  }
  namespace RegExpValidator {
    type ValidatorOptions =
    {
      pattern?: string, hint?: string, messageSummary?: string, messageDetail?: string
    }
  }

}
declare namespace oj {  
  class RegExpValidatorFactory {
    createValidator(options: oj.RegExpValidator.ValidatorOptions): oj.RegExpValidator;
  }

}
declare namespace oj {  
  class RequiredValidator extends Validator<Object|string|number> {
    constructor(options?: oj.RequiredValidator.ValidatorOptions);
    getHint(): string|null;
    validate(value: object|string|number): void;
  }
  namespace RequiredValidator {
    type ValidatorOptions =
    {
      hint?: string, messageSummary?: string, messageDetail?: string
    }
  }

}
declare namespace oj {  
  class RequiredValidatorFactory {
    createValidator(options?: oj.RequiredValidator.ValidatorOptions): oj.RequiredValidator;
  }

}
declare namespace oj {  
  class Validation {
    static converterFactory<V, CF extends oj.ConverterFactory<V>>(type:'number'|'color'|'datetime'|string, instance?:CF): CF|null
    static getDefaultConverterFactory<V>(type: 'number'|'color'|'datetime'): oj.ConverterFactory<V>|null
    static getDefaultValidatorFactory<V>(type: 'required'|'regexp'|'numberRange'|'length'|'dateTimeRange'|'dateRestriction'): oj.ValidatorFactory<V>|null
    static validatorFactory<V, VF extends oj.ValidatorFactory<V>>(type:'required'|'regexp'|'numberRange'|'length'|'dateTimeRange'|'dateRestriction'|string, instance?:VF): VF|null
  }
  namespace Validation {
    type RegisteredConverter =
    {
      type: string, options?: object
    }
  }
  namespace Validation {
    type RegisteredValidator =
    {
      type: string, options?: object
    }
  }

}
declare namespace oj {  
  class Validator<V> {
    getHint?(): string|null
    validate(value: V): void;
  }

}
declare namespace oj {  
  class ValidatorError {
    constructor(summary: string, detail: string);
    getMessage(): oj.Message;
  }

}
declare namespace oj {  
  class ValidatorFactory<V> {
    static VALIDATOR_TYPE_DATERESTRICTION: string;
    static VALIDATOR_TYPE_DATETIMERANGE: string;
    static VALIDATOR_TYPE_LENGTH: string;
    static VALIDATOR_TYPE_NUMBERRANGE: string;
    static VALIDATOR_TYPE_REGEXP: string;
    static VALIDATOR_TYPE_REQUIRED: string;
    createValidator(options: object|null): oj.Validator<V>;
  }

}
