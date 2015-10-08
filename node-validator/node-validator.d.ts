// Type definitions for node-validator
// Project: https://www.npmjs.com/package/node-validator
// Definitions by: Ken Gorab <https://github.com/kengorab>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ValidatorOptions {
    interface IsStringOptions {
        regex?: RegExp,
        message?: String
    }

    interface IsNumberOptions {
        min?: Number,
        max?: Number
    }

    interface IsDateOptions {
        format?: String,
        message?: String
    }

    type Options = IsStringOptions | IsNumberOptions | IsDateOptions;
}

declare module Validator {
    type ValidateFn = (value: any, onError: (message: String, childName: String, childValie: any) => void) => void;

    interface Validatable {
        validate: ValidateFn
    }

    interface IsObjectValidator extends Validatable {
        withRequired: (name: String, validator: Validatable) => IsObjectValidator,
        withOptional: (name: String, validator: Validatable) => IsObjectValidator,
        custom: (customValidator: Validatable) => IsObjectValidator,
        validate: ValidateFn
    }

    function express(validator: Validatable): any;
    function bodyValidator(validator: Validatable): any;
    function expressParams(validator: Validatable): any;
    function paramsValidator(validator: Validatable): any;
    function expressQuery(validator: Validatable): any;
    function queryValidator(validator: Validatable): any;

    function run(validator: Validatable, value: any, callback: (errorCount: Number, errors: Array<any>) => void): void;

    function isObject(): IsObjectValidator;
    function isString(options?: ValidatorOptions.IsStringOptions): Validatable;
    function isStringOrNull(options?: ValidatorOptions.IsStringOptions): Validatable;
    function isBoolean(): Validatable;
    function isNumber(options?: ValidatorOptions.IsNumberOptions): Validatable;
    function isInteger(options?: ValidatorOptions.IsNumberOptions): Validatable;
    function isDate(options?: ValidatorOptions.IsDateOptions): Validatable;
    function isIsoDate(options?: ValidatorOptions.IsDateOptions): Validatable;
    function isIsoDateTime(options?: ValidatorOptions.IsDateOptions): Validatable;

    function isArray(validator?: Validatable, options?: ValidatorOptions.Options): Validatable;
    function isAnyObject(): IsObjectValidator;
}

declare module 'node-validator' {
    export = Validator;
}
