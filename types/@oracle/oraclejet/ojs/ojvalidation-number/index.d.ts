/// <reference types='ojs/ojvalidation-base'/>
declare namespace oj {  
  class IntlNumberConverter extends NumberConverter {
    constructor(options?: oj.IntlNumberConverter.ConverterOptions);
    format(value: number): string;
    getHint(): null;
    getOptions(): oj.IntlNumberConverter.ConverterOptions;
    parse(value: string): number|null;
    resolvedOptions(): oj.IntlNumberConverter.ConverterOptions;
  }
  namespace IntlNumberConverter {
    type ConverterOptions =
    {
      style?: 'decimal'|'currency'|'percent'|'unit', currency?: string, unit?: 'byte'|'bit', currencyDisplay?: 'code'|'symbol'|'name', decimalFormat?: 'standard'|'short'|'long', currencyFormat?: 'standard'|'short'|'long', minimumIntegerDigits?: number, minimumFractionDigits?: number, maximumFractionDigits?: number, useGrouping?: boolean, pattern?: string, roundingMode?: 'HALF_UP'|'HALF_DOWN'|'HALF_EVEN', roundDuringParse?: boolean, separators?: object, lenientParse?: 'full'|'none'
    }
  }

}
declare namespace oj {  
  class NumberConverter extends Converter<number> {
    format(value: number): string|null;
    parse(value: string): number;
  }

}
declare namespace oj {  
  class NumberConverterFactory {
    createConverter(options?: oj.IntlNumberConverter.ConverterOptions): oj.IntlNumberConverter;
  }

}
declare namespace oj {  
  class NumberRangeValidator extends Validator<string|number> {
    constructor(options?: oj.NumberRangeValidator.ValidatorOptions);
    getHint(): string|null;
    validate(value: string|number): void;
  }
  namespace NumberRangeValidator {
    type ValidatorOptions =
    {
      converter?: oj.NumberConverter, min?: number, max?: number, hint?: {max?: string, min?: string, inRange?: string, exact?: string}, messageDetail?: {rangeUnderflow?: string, rangeOverflow?: string, exact?: string}, messageSummary?: {rangeUnderflow?: string, rangeOverflow?: string}
    }
  }

}
declare namespace oj {  
  class NumberRangeValidatorFactory {
    createValidator(options?: oj.NumberRangeValidator.ValidatorOptions): oj.NumberRangeValidator;
  }

}
