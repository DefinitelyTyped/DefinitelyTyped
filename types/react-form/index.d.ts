// Type definitions for react-form 2.16
// Project: https://github.com/tannerlinsley/react-form#readme
// Definitions by: Cameron McAteer <https://github.com/cameron-mcateer>
//                 Mathieu Masy <https://github.com/TiuSh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

// Helper Types
export type FormValue = any;
export type FormError = string | undefined;
export interface Nested<T> {
    [key: string]: T | Nested<T>;
}
export type FormValues = Nested<FormValue>;
export type Touched = Nested<boolean>;
export interface FormErrors {
    [key: string]: FormError;
}
export type NestedErrors = Nested<FormErrors>;
export type RenderReturn = JSX.Element | false | null | never[];

export interface FormState {
    values: FormValues;
    touched: Touched;
    errors: FormErrors;
    nestedErrors: NestedErrors;
    dirty?: boolean;
}

export interface FormProps {
    component?: React.ReactType<{ formApi: FormApi }>;
    render?: (formApi: FormApi) => RenderReturn;
    dontValidateOnMount?: boolean;
    validateOnSubmit?: boolean;
    defaultValues?: FormValues;
    onSubmit?(values: FormValues, submissionEvent: React.SyntheticEvent<any>, formApi: FormApi): void;
    preSubmit?(values: FormValues, formApi: FormApi): FormValues;
    onSubmitFailure?(errors: FormErrors, formApi: FormApi): void;
    formDidUpdate?(formState: FormState): void;
    preValidate?(values: FormValues): FormValues;
    validateError?: ValidateValuesFunction;
    validateWarning?: ValidateValuesFunction;
    validateSuccess?: (values: FormValues, errors: FormErrors) => FormErrors;
    asyncValidators?: {
        [field: string]: (value: FormValue) => Promise<any>
    };
    dontPreventDefault?: boolean;
    getApi?: (formApi: FormApi) => void;
}

export interface FormApi {
    // State
    values: FormValues;
    touched: Touched;
    errors: FormErrors;
    warnings: FormErrors;
    successes: FormErrors;
    submits: number;
    submitted: boolean;
    asyncValidations: number;
    validating: {[field: string]: boolean};
    validationFailures: number;
    validationFailed: {[field: string]: boolean};

    // Methods
    submitForm(event: React.SyntheticEvent<any>): void;
    setValue(fieldName: string, value: any): void;
    setAllValues(values: FormValues): void;
    setError(field: string, error: string): void;
    setWarning(field: string, warning: string): void;
    setSuccess(field: string, success: string): void;
    setTouched(field: string, touched: boolean): void;
    setAllTouched(touches: {[field: string]: boolean}): void;
    addValue(name: string, value: any): void;
    removeValue(name: string, index: number): void;
    swapValues(name: string, index1: number, index2: number): void;
    resetAll(): void;
    getFormState(): FormState;
    setFormState(state: FormState): void;
}

export type ValidateValuesFunction = (values: FormValues) => FormErrors;

export interface FormFunctionProps extends FormProps, FormState, FormApi {}

export interface FormContext {
    formApi: FormApi;
}

export class Form
    extends React.Component<
        FormProps & { children?: ((props: FormFunctionProps) => RenderReturn) | RenderReturn }
    >
    implements React.ChildContextProvider<FormContext> {
        static defaultProps: FormProps;
        static childContextTypes: {
            formApi: React.Validator<any>
        };

        getDefaultState(): FormState;
        getChildContext(): FormContext;
        componentWillMount(): void;
        componentWillReceiveProps(nextProps: Readonly<Partial<FormProps>>, nextContext: any): void;
        componentWillUmount(): void;

        render(): RenderReturn;
    }

export const NestedForm: React.StatelessComponent<FieldProps>;

export function FormField(component: React.ComponentType<any>): React.ComponentClass<any>;

// Fields

export interface FieldApi {
    getValue(): FormValue;
    getError(): FormError;
    getWarning(): FormError;
    getSuccess(): FormError;
    getTouched(): boolean;
    getFieldName(): string;
    setValue(value: FormValue): void;
    setError(error: FormError): void;
    setWarning(warning: FormError): void;
    setSuccess(success: FormError): void;
    setTouched(touched: boolean): void;
}

export interface FieldProps {
    field?: string | string[] | React.ReactText[] | Array<(string | React.ReactText[])>;
    showErrors?: boolean;
    errorBefore?: boolean;
    isForm?: boolean;
}

export type SelectOptions = Array<{
    value: FormValue
    label: string
}>;

export interface SelectProps extends FieldProps, React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOptions;
}

export const Select: React.StatelessComponent<SelectProps>;

export const Text: React.StatelessComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;
export const TextArea: React.StatelessComponent<FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;

export interface RadioGroupContext {
    group: FieldApi;
}

export class RadioGroup
    extends React.Component<
        FieldProps & { children?: ((props: FieldApi) => RenderReturn) | RenderReturn }
    >
    implements React.ChildContextProvider<RadioGroupContext> {
    getChildContext(): {
        group: FieldApi;
    };
}

export const Radio: React.StatelessComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement> & {group: FieldApi}>;
export const Checkbox: React.StatelessComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;

// Styled Fields

export interface StyledProps extends FieldProps {
    noMessage?: boolean;
    messageBefore?: boolean;
    touchValidation?: boolean;
}

export const StyledCheckbox: React.StatelessComponent<StyledProps & React.InputHTMLAttributes<HTMLInputElement> & {label: string}>;
export const StyledTextArea: React.StatelessComponent<StyledProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
export const StyledSelect: React.StatelessComponent<StyledProps & SelectProps & React.InputHTMLAttributes<HTMLSelectElement>>;
export const StyledText: React.StatelessComponent<StyledProps & React.InputHTMLAttributes<HTMLInputElement>>;
export const StyledRadio: React.StatelessComponent<StyledProps & React.InputHTMLAttributes<HTMLInputElement> & {group: FieldApi, label: string}>;

export class StyledRadioGroup
    extends React.Component<
        StyledProps & { children?: ((props: FieldApi) => RenderReturn) | RenderReturn }
    >
    implements React.ChildContextProvider<RadioGroupContext> {
    getChildContext(): {
        group: FieldApi
    };
}
