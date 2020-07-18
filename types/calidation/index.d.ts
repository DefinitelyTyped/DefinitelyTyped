// Type definitions for calidation 1.16
// Project: https://github.com/selbekk/calidation#readme
// Definitions by: Ray Knight <https://github.com/ArrayKnight>
//                 Lisa Tassone <https://github.com/lisatassone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';

export type Dirty<T extends object> = Record<keyof T, boolean>;

export type Errors<T extends object> = Record<keyof T, string | null>;

export type Fields<T extends object> = T;

export type Transform<T extends object> = Record<keyof T, (value: any) => T[keyof T]>;

export type Transforms<T extends object> = Partial<Transform<T>>;

export interface ValidatorContext<T extends object> {
    errors: Errors<T>;
    fields: Fields<T>;
    isDirty: boolean;
}

export interface SimpleValidatorConfig<T extends object> {
    message: string;
    validateIf?: ((context: ValidatorContext<T>) => boolean) | boolean;
}

export type SimpleValidator<T extends object> =
    | string
    | SimpleValidatorConfig<T>
    | ((context: ValidatorContext<T>) => SimpleValidatorConfig<T>);

export interface BlacklistValidatorConfig<T extends object> extends SimpleValidatorConfig<T> {
    blacklist: string[];
}

export type BlacklistValidator<T extends object> =
    | BlacklistValidatorConfig<T>
    | ((context: ValidatorContext<T>) => BlacklistValidatorConfig<T>);

export interface ValueValidatorConfig<P, T extends object> extends SimpleValidatorConfig<T> {
    value: P;
}

export type ValueValidator<P, T extends object> =
    | ValueValidatorConfig<P, T>
    | ((context: ValidatorContext<T>) => ValueValidatorConfig<P, T>);

export interface RegexValidatorConfig<T extends object> extends SimpleValidatorConfig<T> {
    regex: RegExp;
}

export type RegexValidator<T extends object> =
    | RegexValidatorConfig<T>
    | ((context: ValidatorContext<T>) => RegexValidatorConfig<T>);

export interface WhitelistValidatorConfig<T extends object> extends SimpleValidatorConfig<T> {
    whitelist: string[];
}

export type WhitelistValidator<T extends object> =
    | WhitelistValidatorConfig<T>
    | ((context: ValidatorContext<T>) => RegexValidatorConfig<T>);

export interface LengthValidatorConfig<T extends object> extends SimpleValidatorConfig<T> {
    length: number;
}

export type LengthValidator<T extends object> =
    | LengthValidatorConfig<T>
    | ((context: ValidatorContext<T>) => LengthValidatorConfig<T>);

export type Validator<T extends object> =
    | SimpleValidator<T>
    | BlacklistValidator<T>
    | ValueValidator<any, T>
    | RegexValidator<T>
    | WhitelistValidator<T>
    | LengthValidator<T>;

export interface FieldConfig<T extends object> {
    isBlacklisted?: BlacklistValidator<T>;
    isEmail?: SimpleValidator<T>;
    isEqual?: ValueValidator<any, T>;
    isGreaterThan?: ValueValidator<number, T>;
    isLessThan?: ValueValidator<number, T>;
    isRequired?: SimpleValidator<T>;
    isNumber?: SimpleValidator<T>;
    isRegexMatch?: RegexValidator<T>;
    isWhitelisted?: WhitelistValidator<T>;
    isMinLength?: LengthValidator<T>;
    isMaxLength?: LengthValidator<T>;
    isExactLength?: LengthValidator<T>;
}

export type FieldsConfig<T extends object> = Record<
    string,
    FieldConfig<T> | Record<string, SimpleValidator<T>> | Record<string, ValueValidator<any, T>>
>;

export interface FormContext<T extends object> {
    dirty: Dirty<T>;
    errors: Errors<T>;
    fields: Fields<T>;
    isValid: boolean;
    resetAll: () => void;
    register: (config: FieldsConfig<T>, transforms: Transforms<T>, initialValues: T) => void;
    unregister: (config: FieldsConfig<T>) => void;
    setError: (delta: Errors<T>) => void;
    setField: (delta: Partial<T>) => void;
    submit: () => void;
    submitted: boolean;
}

export interface FormProps<T extends object>
    extends Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    onChange?: (event: React.ChangeEvent<HTMLFormElement>) => void;
    onReset?: () => void;
    onSubmit?: (context: FormContext<T>) => void;
    onUpdate?: (context: FormContext<T>) => void;
}

export class Form<T extends object> extends React.Component<FormProps<T>> {}

export type ValidationContext<T extends object> = Omit<FormContext<T>, 'register' | 'unregister'>;

export interface ValidationProps<T extends object> {
    children: (context: ValidationContext<T>) => React.ReactNode;
    config: FieldsConfig<T>;
    initialValues?: T;
    transforms?: Transforms<T>;
}

export class Validation<T extends object> extends React.Component<ValidationProps<T>> {}

export interface FormValidationProps<T extends object> extends FormProps<T>, ValidationProps<T> {
    children: (context: ValidationContext<T>) => React.ReactNode;
}

export class FormValidation<T extends object> extends React.Component<FormValidationProps<T>> {}

export type CustomValidatorFunction<T extends object> = (
    config: SimpleValidatorConfig<T>,
    context: ValidatorContext<T>,
) => (value: T[keyof T]) => string | null;

export interface ValidatorsProviderProps<T extends object> {
    validators: Record<string, CustomValidatorFunction<T>>;
}

export class ValidatorsProvider<T extends object> extends React.Component<ValidatorsProviderProps<T>> {}
