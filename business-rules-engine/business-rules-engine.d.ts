// Type definitions for business-rules-engine - v1.0.20
// Project: https://github.com/rsamec/form
// Definitions by: Roman Samec <https://github.com/rsamec>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Source: typings/business-rules-engine/Validation.d.ts
/// <reference path="../q/Q.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />
declare module Validation {
    interface IErrorCustomMessage {
        (config: any, args: any): string;
    }
    interface IPropertyValidator {
        isAcceptable(s: any): boolean;
        customMessage?: IErrorCustomMessage;
        tagName?: string;
    }
    interface IStringValidator extends IPropertyValidator {
        isAcceptable(s: string): boolean;
    }
    interface IAsyncPropertyValidator {
        isAcceptable(s: any): Q.Promise<boolean>;
        customMessage?: IErrorCustomMessage;
        isAsync: boolean;
        tagName?: string;
    }
    interface IAsyncStringPropertyValidator extends IAsyncPropertyValidator {
        isAcceptable(s: string): Q.Promise<boolean>;
    }
    enum CompareOperator {
        LessThan = 0,
        LessThanEqual = 1,
        Equal = 2,
        NotEqual = 3,
        GreaterThanEqual = 4,
        GreaterThan = 5,
    }
    interface IError {
        HasError: boolean;
        ErrorMessage: string;
        TranslateArgs?: IErrorTranslateArgs;
    }
    interface IErrorTranslateArgs {
        TranslateId: string;
        MessageArgs: any;
        CustomMessage?: IErrorCustomMessage;
    }
    interface IOptional {
        (): boolean;
    }
    interface IValidationFailure extends IError {
        IsAsync: boolean;
        Error: IError;
    }
    interface IValidationResult {
        Name: string;
        Add(validationResult: IValidationResult): void;
        Remove(index: number): void;
        Children: IValidationResult[];
        HasErrors: boolean;
        HasErrorsDirty: boolean;
        ErrorMessage: string;
        ErrorCount: number;
        Optional?: IOptional;
        TranslateArgs?: IErrorTranslateArgs[];
    }
    interface IValidate {
        (args: IError): void;
    }
    interface IAsyncValidate {
        (args: IError): Q.Promise<any>;
    }
    interface IValidatorFce {
        Name: string;
        ValidationFce?: IValidate;
        AsyncValidationFce?: IAsyncValidate;
    }
    interface IValidator {
        Validate(context: any): IValidationFailure;
        ValidateAsync(context: any): Q.Promise<IValidationFailure>;
        Error: IError;
    }
    interface IAbstractValidator<T> {
        RuleFor(prop: string, validator: IPropertyValidator): any;
        ValidationFor(prop: string, validatorFce: IValidatorFce): any;
        Validation(validatorFce: IValidatorFce): any;
        ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>): any;
        CreateRule(name: string): IAbstractValidationRule<any>;
        CreateAbstractRule(name: string): IAbstractValidationRule<any>;
        CreateAbstractListRule(name: string): IAbstractValidationRule<any>;
        ForList: boolean;
    }
    interface IAbstractValidationRule<T> {
        Validate(context: T): IValidationResult;
        ValidateAsync(context: T): Q.Promise<IValidationResult>;
        ValidateAll(context: T): Q.Promise<IValidationResult>;
        ValidateProperty(context: T, propName: string): void;
        ValidationResult: IValidationResult;
        Rules: {
            [name: string]: IPropertyValidationRule<T>;
        };
        Validators: {
            [name: string]: IValidator;
        };
        Children: {
            [name: string]: IAbstractValidationRule<any>;
        };
    }
    interface IPropertyValidationRule<T> {
        Validators: {
            [name: string]: any;
        };
        Validate(context: IValidationContext<T>): IValidationFailure[];
        ValidateAsync(context: IValidationContext<T>): Q.Promise<IValidationFailure[]>;
    }
    interface IValidationContext<T> {
        Value: string;
        Key: string;
        Data: T;
    }
    class Error implements IError {
        public HasError: boolean;
        public ErrorMessage: string;
        constructor();
    }
    class ValidationFailure implements IError {
        public Error: IError;
        public IsAsync: boolean;
        constructor(Error: IError, IsAsync: boolean);
        public HasError : boolean;
        public ErrorMessage : string;
        public TranslateArgs : IErrorTranslateArgs;
    }
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
        public Validation(fce: IValidatorFce): void;
        public ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>, forList?: boolean): void;
        public CreateAbstractRule(name: string): IAbstractValidationRule<T>;
        public CreateAbstractListRule(name: string): IAbstractValidationRule<T>;
        public CreateRule(name: string): IAbstractValidationRule<T>;
        public ForList: boolean;
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
}
declare module "business-rule-engine" {export = Validation;}
