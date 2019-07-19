// Type definitions for calidation 1.16
// Project: https://github.com/selbekk/calidation#readme
// Definitions by: Ray Knight <https://github.com/ArrayKnight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Dictionary<T = any> {
    [key: string]: T;
}

export interface Dirty extends Dictionary<boolean> {}

export interface Errors extends Dictionary<string | null> {}

export interface Fields extends Dictionary {}

export interface Transforms extends Dictionary<(value: any) => any> {}

export interface ValidatorContext {
    errors: Errors;
    fields: Fields;
    isDirty: boolean;
}

export interface SimpleValidatorConfig {
    message: string;
    validateIf?: ((context: ValidatorContext) => boolean) | boolean;
}

export type SimpleValidator = string | SimpleValidatorConfig | ((context: ValidatorContext) => SimpleValidatorConfig);

export interface BlacklistValidatorConfig extends SimpleValidatorConfig {
    blacklist: string[];
}

export type BlacklistValidator = BlacklistValidatorConfig | ((context: ValidatorContext) => BlacklistValidatorConfig);

export interface ValueValidatorConfig<T> extends SimpleValidatorConfig {
    value: T;
}

export type ValueValidator<T> = ValueValidatorConfig<T> | ((context: ValidatorContext) => ValueValidatorConfig<T>);

export interface RegexValidatorConfig extends SimpleValidatorConfig {
    regex: RegExp;
}

export type RegexValidator = RegexValidatorConfig | ((context: ValidatorContext) => RegexValidatorConfig);

export interface WhitelistValidatorConfig extends SimpleValidatorConfig {
    whitelist: string[];
}

export type WhitelistValidator = WhitelistValidatorConfig | ((context: ValidatorContext) => RegexValidatorConfig);

export interface LengthValidatorConfig extends SimpleValidatorConfig {
    length: number;
}

export type LengthValidator = LengthValidatorConfig | ((context: ValidatorContext) => LengthValidatorConfig);

export type Validator =
    | SimpleValidator
    | BlacklistValidator
    | ValueValidator<any>
    | RegexValidator
    | WhitelistValidator
    | LengthValidator;

export interface FieldConfig {
    isBlacklisted?: BlacklistValidator;
    isEmail?: SimpleValidator;
    isEqual?: ValueValidator<any>;
    isGreaterThan?: ValueValidator<number>;
    isLessThan?: ValueValidator<number>;
    isRequired?: SimpleValidator;
    isNumber?: SimpleValidator;
    isRegexMatch?: RegexValidator;
    isWhitelisted?: WhitelistValidator;
    isMinLength?: LengthValidator;
    isMaxLength?: LengthValidator;
    isExactLength?: LengthValidator;
}

export interface FieldsConfig extends Dictionary<FieldConfig> {}

export interface FormContext {
    dirty: Dirty;
    errors: Errors;
    fields: Fields;
    isValid: boolean;
    resetAll: () => void;
    setError: (delta: Errors) => void;
    setField: (delta: Fields) => void;
    submit: () => void;
    submitted: boolean;
}

export interface FormProps
    extends Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    onChange?: (event: React.ChangeEvent<HTMLFormElement>) => void;
    onReset?: () => void;
    onSubmit?: (context: FormContext) => void;
    onUpdate?: (context: FormContext) => void;
}

export class Form extends React.Component<FormProps> {}

export interface ValidationContext extends FormContext {}

export interface ValidationProps {
    children: (context: ValidationContext) => React.ReactNode;
    config: FieldsConfig;
    initialValues?: Dictionary;
    transforms?: Transforms;
}

export class Validation extends React.Component<ValidationProps> {}

export interface FormValidationProps extends FormProps, ValidationProps {
    children: (context: ValidationContext) => React.ReactNode;
}

export class FormValidation extends React.Component<FormValidationProps> {}

export interface ValidatorsProviderProps {
    validators: Dictionary<(config: SimpleValidatorConfig) => (value: any) => string | null>;
}

export class ValidatorsProvider extends React.Component<ValidatorsProviderProps> {}
