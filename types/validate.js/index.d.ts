// Type definitions for Validate.js
// Project: https://github.com/ansman/validate.js
// Definitions by: Travis Hill <https://github.com/HillTravis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ValidateJS {

  export interface Validator {
    message?: string | ((value: any, attribute: any, validatorOptions: any, attributes: any, globalOptions: any) => string);
  }

  namespace Validator {

    export interface Date extends Validator {
      earliest?: string;
      latest?: string;

      notValid?: string;
      tooEarly?: string;
      tooLate?: string;
    }

    export interface DateTime extends Date {
      dateOnly?: boolean;
    }

    export interface Email extends Validator {}

    export interface Equality extends Validator {
      attribute?: string;
      comparator?: (v1: any, v2: any) => boolean;
    }

    export interface Exclusion extends Validator {
      within: any[] | {[key: string]: any};
    }

    export interface Format extends Validator {
      pattern: string | RegExp;
      flags?: string;
    }

    export interface Inclusion extends Validator {
      within: any[] | {[key: string]: any};
    }

    export interface Length extends Validator {
      is?: number;
      minimum?: number;
      maximum?: number;

      notValid?: string;
      tooLong?: string;
      tooShort?: string;
      wrongLength?: string;

      tokenizer?: (value: string | any[]) => string | any[];
    }

    export interface Numericality extends Validator {
      onlyInteger?: boolean;
      strict?: boolean;
      greaterThan?: number;
      greaterThanOrEqualTo?: number;
      equalTo?: number;
      lessThanOrEqualTo?: number;
      lessThan?: number;
      divisibleBy?: number;
      odd?: boolean;
      even?: boolean;

      notValid?: string;
      notInteger?: string;
      notGreaterThan?: string;
      notGreaterThanOrEqualTo?: string;
      notEqualTo?: string;
      notLessThanOrEqualTo?: string;
      notLessThan?: string;
      notDivisibleBy?: string;
      notOdd?: string;
      notEven?: string;
    }

    export interface Presence extends Validator {}

    export interface Url extends Validator {
      schemes?: [string | RegExp];
      allowLocal?: boolean;
    }
  }

  export interface Field {
    date?: Validator.Date | boolean | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Date);
    datetime?: Validator.DateTime | boolean | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.DateTime);
    email?: Validator.Email | boolean | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Email);
    equality?: Validator.Equality | string | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Equality);
    exclusion?: Validator.Exclusion | any[] | {[key: string]: any} | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Exclusion);
    format?: Validator.Format | string | RegExp | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Format);
    inclusion?: Validator.Inclusion | any[] | {[key: string]: any} | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Inclusion);
    length?: Validator.Length | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Length);
    numericality?: Validator.Numericality | boolean | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Numericality);
    presence?: Validator.Presence | boolean | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Presence);
    url?: Validator.Url | boolean | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Validator.Url);
  }

  export interface Constraints {
    [attribute: string]: Field | ((value: any, attributes: any, attributeName: any, options: any, constraints: any) => Field);
  }
}
