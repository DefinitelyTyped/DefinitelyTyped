// Type definitions for node-form v1.0.13
// Project: https://github.com/rsamec/form
// Definitions by: Roman Samec <https://github.com/rsamec>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../underscore/underscore.d.ts" />
/// <reference path="../q/Q.d.ts" />
/// <reference path="../moment/moment.d.ts" />
declare module Validation {
    /**
    * Custom message functions.
    */
    interface IErrorCustomMessage {
        (config: any, args: any): string;
    }
    /**
    * It represents a property validator for atomic object.
    */
    interface IPropertyValidator {
        isAcceptable(s: any): boolean;
        customMessage?: IErrorCustomMessage;
        tagName?: string;
    }
    /**
    * It represents a property validator for simple string value.
    */
    interface IStringValidator extends IPropertyValidator {
        isAcceptable(s: string): boolean;
    }
    /**
    * It represents an async property validator for atomic object.
    */
    interface IAsyncPropertyValidator {
        isAcceptable(s: any): Q.Promise<boolean>;
        customMessage?: IErrorCustomMessage;
        isAsync: boolean;
        tagName?: string;
    }
    /**
    * It represents an async property validator for simple string value.
    */
    interface IAsyncStringPropertyValidator extends IAsyncPropertyValidator {
        isAcceptable(s: string): Q.Promise<boolean>;
    }
    /**
    * It defines compare operators.
    */
    enum CompareOperator {
        LessThan = 0,
        LessThanEqual = 1,
        Equal = 2,
        NotEqual = 3,
        GreaterThanEqual = 4,
        GreaterThan = 5,
    }
    class StringFce {
        static format(s: string, args: any): string;
    }
    class NumberFce {
        static GetNegDigits(value: string): number;
    }
    class LettersOnlyValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class ZipCodeValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class EmailValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class UrlValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class RequiredValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class DateValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class DateISOValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class NumberValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class DigitValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class SignedDigitValidator implements IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class MinLengthValidator implements IStringValidator {
        public MinLength: number;
        constructor(MinLength?: number);
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class MaxLengthValidator implements IStringValidator {
        public MaxLength: number;
        constructor(MaxLength?: number);
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class RangeLengthValidator implements IStringValidator {
        public RangeLength: number[];
        constructor(RangeLength?: number[]);
        public isAcceptable(s: string): boolean;
        public MinLength : number;
        public MaxLength : number;
        public tagName: string;
    }
    class MinValidator implements IPropertyValidator {
        public Min: number;
        constructor(Min?: number);
        public isAcceptable(s: any): boolean;
        public tagName: string;
    }
    class MaxValidator implements IPropertyValidator {
        public Max: number;
        constructor(Max?: number);
        public isAcceptable(s: any): boolean;
        public tagName: string;
    }
    class RangeValidator implements IPropertyValidator {
        public Range: number[];
        constructor(Range?: number[]);
        public isAcceptable(s: any): boolean;
        public Min : number;
        public Max : number;
        public tagName: string;
    }
    class StepValidator implements IPropertyValidator {
        public Step: string;
        constructor(Step?: string);
        public isAcceptable(s: any): boolean;
        public tagName: string;
    }
    class PatternValidator implements IStringValidator {
        public Pattern: string;
        constructor(Pattern?: string);
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class ContainsValidator implements IAsyncPropertyValidator {
        public Options: Q.Promise<any[]>;
        constructor(Options: Q.Promise<any[]>);
        public isAcceptable(s: string): Q.Promise<boolean>;
        public isAsync: boolean;
        public tagName: string;
    }
}
declare module Validation {
    /**
    * basic error structure
    */
    interface IError {
        HasError: boolean;
        ErrorMessage: string;
        TranslateArgs?: IErrorTranslateArgs;
    }
    /**
    *  support for localization of error messages
    */
    interface IErrorTranslateArgs {
        TranslateId: string;
        MessageArgs: any;
        CustomMessage?: IErrorCustomMessage;
    }
    /**
    * It defines conditional function.
    */
    interface IOptional {
        (): boolean;
    }
    /**
    * It represents the validation result.
    */
    interface IValidationFailure extends IError {
        IsAsync: boolean;
        Error: IError;
    }
    /**
    * This class provides unit of information about error.
    * Implements composite design pattern to enable nesting of error information.
    */
    interface IValidationResult {
        /**
        * The name of error collection.
        */
        Name: string;
        /**
        * Add error information to child collection of errors.
        * @param validationResult - error information to be added.
        */
        Add(validationResult: IValidationResult): void;
        /**
        * Remove error information from child collection of errors.
        * @param index - index of error information to be removed.
        */
        Remove(index: number): void;
        /**
        * Return collections of child errors information.
        */
        Children: IValidationResult[];
        /**
        * Return true if there is any error.
        */
        HasErrors: boolean;
        /**
        * Return true if there is any error and hasw dirty state.
        */
        HasErrorsDirty: boolean;
        /**
        * Return error message, if there is no error, return empty string.
        */
        ErrorMessage: string;
        /**
        * Return number of errors.
        */
        ErrorCount: number;
        /**
        * It enables to have errors optional.
        */
        Optional?: IOptional;
        /**
        * It enables support for localization of error messages.
        */
        TranslateArgs?: IErrorTranslateArgs[];
    }
    /**
    *
    * @ngdoc object
    * @name  Error
    * @module Validation
    *
    *
    * @description
    * It represents basic error structure.
    */
    class Error implements IError {
        public HasError: boolean;
        public ErrorMessage: string;
        constructor();
    }
    /**
    *
    * @ngdoc object
    * @name  ValidationFailure
    * @module Validation
    *
    *
    * @description
    * It represents validation failure.
    */
    class ValidationFailure implements IError {
        public Error: IError;
        public IsAsync: boolean;
        constructor(Error: IError, IsAsync: boolean);
        public HasError : boolean;
        public ErrorMessage : string;
        public TranslateArgs : IErrorTranslateArgs;
    }
    /**
    *
    * @ngdoc object
    * @name  ValidationResult
    * @module Validation
    *
    *
    * @description
    * It represents simple abstract error object.
    */
    class ValidationResult implements IValidationResult {
        public Name: string;
        constructor(Name: string);
        public IsDirty: boolean;
        public Children : IValidationResult[];
        public Add(error: IValidationResult): void;
        public Remove(index: number): void;
        public Optional: IOptional;
        public TranslateArgs: IErrorTranslateArgs[];
        public HasErrorsDirty : boolean;
        public HasErrors : boolean;
        public ErrorCount : number;
        public ErrorMessage : string;
    }
    /**
    *
    * @ngdoc object
    * @name  CompositeValidationResult
    * @module Validation
    *
    *
    * @description
    * It represents composite error object.
    */
    class CompositeValidationResult implements IValidationResult {
        public Name: string;
        public Children: IValidationResult[];
        constructor(Name: string);
        public Optional: IOptional;
        public AddFirst(error: IValidationResult): void;
        public Add(error: IValidationResult): void;
        public Remove(index: number): void;
        public HasErrorsDirty : boolean;
        public HasErrors : boolean;
        public ErrorCount : number;
        public ErrorMessage : string;
        public TranslateArgs : IErrorTranslateArgs[];
        public LogErrors(headerMessage?: string): void;
        public Errors : {
            [name: string]: IValidationResult;
        };
        private FlattenErros;
        public SetDirty(): void;
        public SetPristine(): void;
        private SetDirtyEx(node, dirty);
        private flattenErrors(node, errorCollection);
        private traverse(node, indent);
    }
}
declare module Validation {
    /**
    * @ngdoc module
    * @name Validation
    *
    *
    * @description
    * # Validation (core module)
    * The module itself contains the essential components for an validation engine to function. The table below
    * lists a high level breakdown of each of the components (object, functions) available within this core module.
    *
    * <div doc-module-components="Validation"></div>
    */
    /**
    * It defines validation function.
    */
    interface IValidate {
        (args: IError): void;
    }
    /**
    * It defines async validation function.
    */
    interface IAsyncValidate {
        (args: IError): Q.Promise<any>;
    }
    /**
    * It represents named validation function.
    */
    interface IValidatorFce {
        Name: string;
        ValidationFce?: IValidate;
        AsyncValidationFce?: IAsyncValidate;
    }
    /**
    * This class represents custom validator.
    */
    interface IValidator {
        Validate(context: any): IValidationFailure;
        ValidateAsync(context: any): Q.Promise<IValidationFailure>;
        Error: IError;
    }
    /**
    * It represents abstract validator for type of <T>.
    */
    interface IAbstractValidator<T> {
        RuleFor(prop: string, validator: IPropertyValidator): any;
        ValidationFor(prop: string, validator: IValidatorFce): any;
        ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>): any;
        /**
        * It creates new concrete validation rule and assigned data context to this rule.
        * @param name of the rule
        * @constructor
        */
        CreateRule(name: string): IAbstractValidationRule<any>;
        CreateAbstractRule(name: string): IAbstractValidationRule<any>;
        CreateAbstractListRule(name: string): IAbstractValidationRule<any>;
        /**
        * return true if this validation rule is intended for list of items, otherwise true
        */
        ForList: boolean;
    }
    /**
    * It represents concrete validation rule for type of <T>.
    */
    interface IAbstractValidationRule<T> {
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures.
        */
        Validate(context: T): IValidationResult;
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
        */
        ValidateAsync(context: T): Q.Promise<IValidationResult>;
        /**
        * Performs validation and async validation using a validation context.
        */
        ValidateAll(context: T): void;
        /**
        * Performs validation and async validation using a validation context for a passed field.
        */
        ValidateField(context: T, propName: string): void;
        /**
        * Return validation results.
        */
        ValidationResult: IValidationResult;
        Rules: {
            [name: string]: IPropertyValidationRule<T>;
        };
        Validators: {
            [name: string]: IValidator;
        };
        Children: {
            [name: string]: AbstractValidationRule<any>;
        };
    }
    /**
    * It represents property validation rule for type of <T>.
    */
    interface IPropertyValidationRule<T> {
        /**
        *The validators that are grouped under this rule.
        */
        Validators: {
            [name: string]: any;
        };
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures.
        */
        Validate(context: IValidationContext<T>): IValidationFailure[];
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
        */
        ValidateAsync(context: IValidationContext<T>): Q.Promise<IValidationFailure[]>;
    }
    /**
    *  It represents a data context for validation rule.
    */
    interface IValidationContext<T> {
        /**
        * Return current value.
        */
        Value: string;
        /**
        * Return property name for current data context.
        */
        Key: string;
        /**
        * Data context for validation rule.
        */
        Data: T;
    }
    /**
    *
    * @ngdoc object
    * @name  AbstractValidator
    * @module Validation
    *
    *
    * @description
    * It enables to create custom validator for your own abstract object (class) and to assign validation rules to its properties.
    * You can assigned these rules
    *
    * +  property validation rules - use _RuleFor_ property
    * +  property async validation rules - use _RuleFor_ property
    * +  shared validation rules - use _ValidationFor_ property
    * +  custom object validator - use _ValidatorFor_ property - enables composition of child custom validators
    */
    class AbstractValidator<T> implements IAbstractValidator<T> {
        public Validators: {
            [name: string]: IPropertyValidator[];
        };
        public AbstractValidators: {
            [name: string]: IAbstractValidator<any>;
        };
        public ValidationFunctions: {
            [name: string]: IValidatorFce[];
        };
        public RuleFor(prop: string, validator: IPropertyValidator): void;
        public ValidationFor(prop: string, fce: IValidatorFce): void;
        public ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>, forList?: boolean): void;
        public CreateAbstractRule(name: string): AbstractValidationRule<T>;
        public CreateAbstractListRule(name: string): AbstractListValidationRule<T>;
        public CreateRule(name: string): AbstractValidationRule<T>;
        /**
        * Return true if this validation rule is intended for list of items, otherwise true.
        */
        public ForList: boolean;
    }
    /**
    *
    * @ngdoc object
    * @name  AbstractValidationRule
    * @module Validation
    *
    *
    * @description
    * It represents concreate validator for custom object. It enables to assign validation rules to custom object properties.
    */
    class AbstractValidationRule<T> implements IAbstractValidationRule<T> {
        public Name: string;
        public validator: AbstractValidator<T>;
        public ValidationResult: IValidationResult;
        public Rules: {
            [name: string]: IPropertyValidationRule<T>;
        };
        public Validators: {
            [name: string]: IValidator;
        };
        public Children: {
            [name: string]: AbstractValidationRule<any>;
        };
        /**
        * Return true if this validation rule is intended for list of items, otherwise true.
        */
        public ForList: boolean;
        constructor(Name: string, validator: AbstractValidator<T>, forList?: boolean);
        public addChildren(): void;
        public SetOptional(fce: IOptional): void;
        private createRuleFor(prop);
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures.
        */
        public Validate(context: T): IValidationResult;
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
        */
        public ValidateAsync(context: T): Q.Promise<IValidationResult>;
        public ValidateAll(context: T): void;
        public ValidateField(context: T, propName: string): void;
    }
    /**
    *
    * @ngdoc object
    * @name  AbstractListValidationRule
    * @module Validation
    *
    *
    * @description
    * It represents an validator for custom object. It enables to assign rules to custom object properties.
    */
    class AbstractListValidationRule<T> extends AbstractValidationRule<T> {
        public Name: string;
        public validator: AbstractValidator<T>;
        constructor(Name: string, validator: AbstractValidator<T>);
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures.
        */
        public Validate(context: any): IValidationResult;
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
        */
        public ValidateAsync(context: any): Q.Promise<IValidationResult>;
        private getValidationRule(i);
        private getIndexedKey(i);
        public NotifyListChanged(list: any[]): void;
    }
    /**
    *
    * @ngdoc object
    * @name  ValidationContext
    * @module Validation
    *
    *
    * @description
    * It represents a data context for validation rule.
    */
    class ValidationContext<T> implements IValidationContext<T> {
        public Key: string;
        public Data: T;
        constructor(Key: string, Data: T);
        public Value : any;
    }
    class MessageLocalization {
        static customMsg: string;
        static defaultMessages: {
            "required": string;
            "remote": string;
            "email": string;
            "url": string;
            "date": string;
            "dateISO": string;
            "number": string;
            "digits": string;
            "signedDigits": string;
            "creditcard": string;
            "equalTo": string;
            "maxlength": string;
            "minlength": string;
            "rangelength": string;
            "range": string;
            "max": string;
            "min": string;
            "step": string;
            "contains": string;
            "mask": string;
            "custom": string;
        };
        static ValidationMessages: {
            "required": string;
            "remote": string;
            "email": string;
            "url": string;
            "date": string;
            "dateISO": string;
            "number": string;
            "digits": string;
            "signedDigits": string;
            "creditcard": string;
            "equalTo": string;
            "maxlength": string;
            "minlength": string;
            "rangelength": string;
            "range": string;
            "max": string;
            "min": string;
            "step": string;
            "contains": string;
            "mask": string;
            "custom": string;
        };
        static GetValidationMessage(validator: any): string;
    }
    /**
    *
    * @ngdoc object
    * @name  PropertyValidationRule
    * @module Validation
    *
    *
    * @description
    * It represents a property validation rule. The property has assigned collection of property validators.
    */
    class PropertyValidationRule<T> extends ValidationResult implements IPropertyValidationRule<T> {
        public Name: string;
        public Validators: {
            [name: string]: any;
        };
        public ValidationFailures: {
            [name: string]: IValidationFailure;
        };
        constructor(Name: string, validatorsToAdd?: IPropertyValidator[]);
        public AddValidator(validator: any): void;
        public Errors : {
            [name: string]: IValidationFailure;
        };
        public HasErrors : boolean;
        public ErrorCount : number;
        public ErrorMessage : string;
        public TranslateArgs : IErrorTranslateArgs[];
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures.
        */
        public Validate(context: IValidationContext<T>): IValidationFailure[];
        public ValidateEx(value: any): IValidationFailure[];
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
        */
        public ValidateAsync(context: IValidationContext<T>): Q.Promise<IValidationFailure[]>;
        /**
        * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
        */
        public ValidateAsyncEx(value: string): Q.Promise<IValidationFailure[]>;
    }
    /**
    *
    * @ngdoc object
    * @name  Validator
    * @module Validation
    *
    *
    * @description
    * It represents a custom validator. It enables to define your own shared validation rules
    */
    class Validator extends ValidationResult implements IValidator {
        public Name: string;
        private ValidateFce;
        private AsyncValidationFce;
        public Error: IError;
        public ValidationFailures: {
            [name: string]: IValidationFailure;
        };
        constructor(Name: string, ValidateFce?: IValidate, AsyncValidationFce?: IAsyncValidate);
        public Optional: IOptional;
        public Validate(context: any): IValidationFailure;
        public ValidateAsync(context: any): Q.Promise<IValidationFailure>;
        public HasError : boolean;
        public Errors : {
            [name: string]: IValidationFailure;
        };
        public HasErrors : boolean;
        public ErrorCount : number;
        public ErrorMessage : string;
        public TranslateArgs : IErrorTranslateArgs[];
    }
}

declare module "node-form"{
    export = Validation;
}