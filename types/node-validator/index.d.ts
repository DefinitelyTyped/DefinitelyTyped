declare namespace ValidatorOptions {
    interface IsStringOptions {
        regex?: RegExp | undefined;
        message?: String | undefined;
    }

    interface IsNumberOptions {
        min?: Number | undefined;
        max?: Number | undefined;
    }

    interface IsDateOptions {
        format?: String | undefined;
        message?: String | undefined;
    }

    type Options = IsStringOptions | IsNumberOptions | IsDateOptions;
}

declare namespace Validator {
    type ValidateFn = (value: any, onError: (message: String, childName: String, childValie: any) => void) => void;

    interface Validatable {
        validate: ValidateFn;
    }

    interface IsObjectValidator extends Validatable {
        withRequired: (name: String, validator: Validatable) => IsObjectValidator;
        withOptional: (name: String, validator: Validatable) => IsObjectValidator;
        withCustom: (customValidator: ValidateFn) => IsObjectValidator;
        validate: ValidateFn;
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

declare module "node-validator" {
    export = Validator;
}
