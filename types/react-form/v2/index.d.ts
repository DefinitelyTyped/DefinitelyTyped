import * as React from "react";

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
    dirty?: boolean | undefined;
}

export interface FormProps {
    component?: React.ElementType<{ formApi: FormApi }> | undefined;
    render?: ((formApi: FormApi) => RenderReturn) | undefined;
    dontValidateOnMount?: boolean | undefined;
    validateOnSubmit?: boolean | undefined;
    defaultValues?: FormValues | undefined;
    onSubmit?(values: FormValues, submissionEvent: React.SyntheticEvent<any>, formApi: FormApi): void;
    preSubmit?(values: FormValues, formApi: FormApi): FormValues;
    onSubmitFailure?(errors: FormErrors, formApi: FormApi): void;
    formDidUpdate?(formState: FormState): void;
    preValidate?(values: FormValues): FormValues;
    validateError?: ValidateValuesFunction | undefined;
    validateWarning?: ValidateValuesFunction | undefined;
    validateSuccess?: ((values: FormValues, errors: FormErrors) => FormErrors) | undefined;
    asyncValidators?: {
        [field: string]: (value: FormValue) => Promise<any>;
    } | undefined;
    dontPreventDefault?: boolean | undefined;
    getApi?: ((formApi: FormApi) => void) | undefined;
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
    validating: { [field: string]: boolean };
    validationFailures: number;
    validationFailed: { [field: string]: boolean };

    // Methods
    submitForm(event: React.SyntheticEvent<any>): void;
    setValue(fieldName: string, value: any): void;
    setAllValues(values: FormValues): void;
    setError(field: string, error: string): void;
    setWarning(field: string, warning: string): void;
    setSuccess(field: string, success: string): void;
    setTouched(field: string, touched: boolean): void;
    setAllTouched(touches: { [field: string]: boolean }): void;
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

export class Form extends React.Component<
    FormProps & { children?: ((props: FormFunctionProps) => RenderReturn) | RenderReturn | undefined }
> implements React.ChildContextProvider<FormContext> {
    static defaultProps: FormProps;
    static childContextTypes: {
        formApi: React.Validator<any>;
    };

    getDefaultState(): FormState;
    getChildContext(): FormContext;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Readonly<Partial<FormProps>>, nextContext: any): void;
    componentWillUmount(): void;

    render(): RenderReturn;
}

export const NestedForm: React.FunctionComponent<FieldProps>;

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
    children?: React.ReactNode;
    field?: string | string[] | Array<string | number> | Array<(string | Array<string | number>)> | undefined;
    showErrors?: boolean | undefined;
    errorBefore?: boolean | undefined;
    isForm?: boolean | undefined;
}

export type SelectOptions = Array<{
    value: FormValue;
    label: string;
}>;

export interface SelectProps extends FieldProps, React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOptions;
    placeholder?: string | undefined;
}

export const Select: React.FunctionComponent<SelectProps>;

export const Text: React.FunctionComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;
export const TextArea: React.FunctionComponent<FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;

export interface RadioGroupContext {
    group: FieldApi;
}

export class RadioGroup extends React.Component<
    Omit<FieldProps, "children"> & { children?: ((props: FieldApi) => RenderReturn) | RenderReturn | undefined }
> implements React.ChildContextProvider<RadioGroupContext> {
    getChildContext(): {
        group: FieldApi;
    };
}

export const Radio: React.FunctionComponent<
    FieldProps & React.InputHTMLAttributes<HTMLInputElement> & { group: FieldApi }
>;
export const Checkbox: React.FunctionComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;

// Styled Fields

export interface StyledProps extends FieldProps {
    noMessage?: boolean | undefined;
    messageBefore?: boolean | undefined;
    touchValidation?: boolean | undefined;
}

export const StyledCheckbox: React.FunctionComponent<
    StyledProps & React.InputHTMLAttributes<HTMLInputElement> & { label: string }
>;
export const StyledTextArea: React.FunctionComponent<StyledProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
export const StyledSelect: React.FunctionComponent<
    StyledProps & SelectProps & React.InputHTMLAttributes<HTMLSelectElement>
>;
export const StyledText: React.FunctionComponent<StyledProps & React.InputHTMLAttributes<HTMLInputElement>>;
export const StyledRadio: React.FunctionComponent<
    StyledProps & React.InputHTMLAttributes<HTMLInputElement> & { group: FieldApi; label: string }
>;

export class StyledRadioGroup extends React.Component<
    Omit<StyledProps, "children"> & { children?: ((props: FieldApi) => RenderReturn) | RenderReturn | undefined }
> implements React.ChildContextProvider<RadioGroupContext> {
    getChildContext(): {
        group: FieldApi;
    };
}
