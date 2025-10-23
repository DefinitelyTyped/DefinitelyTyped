import * as Q from "q";

export interface IErrorCustomMessage {
    (config: any, args: any): string;
}
export interface IPropertyValidator {
    isAcceptable(s: any): boolean;
    customMessage?: IErrorCustomMessage | undefined;
    tagName?: string | undefined;
}
export interface IStringValidator extends IPropertyValidator {
    isAcceptable(s: string): boolean;
}
export interface IAsyncPropertyValidator {
    isAcceptable(s: any): Q.Promise<boolean>;
    customMessage?: IErrorCustomMessage | undefined;
    isAsync: boolean;
    tagName?: string | undefined;
}
export interface IAsyncStringPropertyValidator extends IAsyncPropertyValidator {
    isAcceptable(s: string): Q.Promise<boolean>;
}
export enum CompareOperator {
    LessThan = 0,
    LessThanEqual = 1,
    Equal = 2,
    NotEqual = 3,
    GreaterThanEqual = 4,
    GreaterThan = 5,
}
export interface IError {
    HasError: boolean;
    ErrorMessage: string;
    TranslateArgs?: IErrorTranslateArgs | undefined;
}
export interface IErrorTranslateArgs {
    TranslateId: string;
    MessageArgs: any;
    CustomMessage?: IErrorCustomMessage | undefined;
}
export interface IOptional {
    (): boolean;
}
export interface IValidationFailure extends IError {
    IsAsync: boolean;
    Error: IError;
}
export interface IValidationResult {
    Name: string;
    Add(validationResult: IValidationResult): void;
    Remove(index: number): void;
    Children: IValidationResult[];
    HasErrors: boolean;
    HasErrorsDirty: boolean;
    ErrorMessage: string;
    ErrorCount: number;
    Optional?: IOptional | undefined;
    TranslateArgs?: IErrorTranslateArgs[] | undefined;
}
export interface IValidate {
    (args: IError): void;
}
export interface IAsyncValidate {
    (args: IError): Q.Promise<any>;
}
export interface IValidatorFce {
    Name: string;
    ValidationFce?: IValidate | undefined;
    AsyncValidationFce?: IAsyncValidate | undefined;
}
export interface IValidator {
    Validate(context: any): IValidationFailure;
    ValidateAsync(context: any): Q.Promise<IValidationFailure>;
    Error: IError;
}
export interface IAbstractValidator<T> {
    RuleFor(prop: string, validator: IPropertyValidator): any;
    ValidationFor(prop: string, validatorFce: IValidatorFce): any;
    Validation(validatorFce: IValidatorFce): any;
    ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>): any;
    CreateRule(name: string): IAbstractValidationRule<any>;
    CreateAbstractRule(name: string): IAbstractValidationRule<any>;
    CreateAbstractListRule(name: string): IAbstractValidationRule<any>;
    ForList: boolean;
}
export interface IAbstractValidationRule<T> {
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
export interface IPropertyValidationRule<T> {
    Validators: {
        [name: string]: any;
    };
    Validate(context: IValidationContext<T>): IValidationFailure[];
    ValidateAsync(context: IValidationContext<T>): Q.Promise<IValidationFailure[]>;
}
export interface IValidationContext<T> {
    Value: string;
    Key: string;
    Data: T;
}
export class Error implements IError {
    public HasError: boolean;
    public ErrorMessage: string;
    constructor();
}
export class ValidationFailure implements IError {
    public Error: IError;
    public IsAsync: boolean;
    constructor(Error: IError, IsAsync: boolean);
    public HasError: boolean;
    public ErrorMessage: string;
    public TranslateArgs: IErrorTranslateArgs;
}
export class ValidationResult implements IValidationResult {
    public Name: string;
    constructor(Name: string);
    public IsDirty: boolean;
    public Children: IValidationResult[];
    public Add(error: IValidationResult): void;
    public Remove(index: number): void;
    public Optional: IOptional;
    public TranslateArgs: IErrorTranslateArgs[];
    public HasErrorsDirty: boolean;
    public HasErrors: boolean;
    public ErrorCount: number;
    public ErrorMessage: string;
}
export class CompositeValidationResult implements IValidationResult {
    public Name: string;
    public Children: IValidationResult[];
    constructor(Name: string);
    public Optional: IOptional;
    public AddFirst(error: IValidationResult): void;
    public Add(error: IValidationResult): void;
    public Remove(index: number): void;
    public HasErrorsDirty: boolean;
    public HasErrors: boolean;
    public ErrorCount: number;
    public ErrorMessage: string;
    public TranslateArgs: IErrorTranslateArgs[];
    public LogErrors(headerMessage?: string): void;
    public Errors: {
        [name: string]: IValidationResult;
    };
    private FlattenErros;
    public SetDirty(): void;
    public SetPristine(): void;
    private SetDirtyEx(node, dirty);
    private flattenErrors(node, errorCollection);
    private traverse(node, indent);
}
export class AbstractValidator<T> implements IAbstractValidator<T> {
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
export class MessageLocalization {
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
export as namespace Validation;
