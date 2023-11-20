import * as React from "react";

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
    validateIf?: ((context: ValidatorContext<T>) => boolean) | boolean | undefined;
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
    isBlacklisted?: BlacklistValidator<T> | undefined;
    isEmail?: SimpleValidator<T> | undefined;
    isEqual?: ValueValidator<any, T> | undefined;
    isGreaterThan?: ValueValidator<number, T> | undefined;
    isLessThan?: ValueValidator<number, T> | undefined;
    isRequired?: SimpleValidator<T> | undefined;
    isNumber?: SimpleValidator<T> | undefined;
    isRegexMatch?: RegexValidator<T> | undefined;
    isWhitelisted?: WhitelistValidator<T> | undefined;
    isMinLength?: LengthValidator<T> | undefined;
    isMaxLength?: LengthValidator<T> | undefined;
    isExactLength?: LengthValidator<T> | undefined;
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
    extends Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "onSubmit">
{
    onChange?: ((event: React.ChangeEvent<HTMLFormElement>) => void) | undefined;
    onReset?: (() => void) | undefined;
    onSubmit?: ((context: FormContext<T>) => void) | undefined;
    onUpdate?: ((context: FormContext<T>) => void) | undefined;
}

export class Form<T extends object> extends React.Component<FormProps<T>> {}

export type ValidationContext<T extends object> = Omit<FormContext<T>, "register" | "unregister">;

export interface ValidationProps<T extends object> {
    children: (context: ValidationContext<T>) => React.ReactNode;
    config: FieldsConfig<T>;
    initialValues?: T | undefined;
    transforms?: Transforms<T> | undefined;
}

export class Validation<T extends object> extends React.Component<ValidationProps<T>> {}

export interface FormValidationProps<T extends object> extends Omit<FormProps<T>, "children">, ValidationProps<T> {
    children: (context: ValidationContext<T>) => React.ReactNode;
}

export class FormValidation<T extends object> extends React.Component<FormValidationProps<T>> {}

export type CustomValidatorFunction<T extends object> = (
    config: SimpleValidatorConfig<T>,
    context: ValidatorContext<T>,
) => (value: T[keyof T]) => string | null;

export interface ValidatorsProviderProps<T extends object> {
    children?: React.ReactNode;
    validators: Record<string, CustomValidatorFunction<T>>;
}

export class ValidatorsProvider<T extends object> extends React.Component<ValidatorsProviderProps<T>> {}
