import * as React from "react";

export type FormValue = any;
export type FormError = string | undefined;
export interface Nested<T> {
    [key: string]: T | Nested<T>;
}
export type FormValues = Nested<FormValue>;
export type Touched = Nested<boolean>;
export type FormErrors = { [key: string]: FormError } | [{ [key: string]: FormError }];
export type NestedErrors = Nested<FormErrors>;
export type RenderReturn = JSX.Element | false | null;

export interface FormProps {
    loadState?(props: FormProps, self: Form): FormState | undefined;
    defaultValues?: FormValues | undefined;
    preValidate?(values: FormValues, state: FormState, props: FormProps, self: Form): FormValues;
    validate?(values: FormValues, state: FormState, props: FormProps): FormErrors;
    onValidationFail?(values: FormValues, state: FormState, props: FormProps, self: Form): void;
    onChange?(state: FormState, props: FormProps, initial: boolean | FormProps, self: Form): void;
    saveState?(state: FormState, props: FormProps, self: Form): void;
    willUnmount?(state: FormState, props: FormProps, self: Form): void;
    preSubmit?(values: FormValues, state: FormState, props: FormProps, self: Form): FormValues;
    onSubmit?(values: FormValues, state: FormState, props: FormProps, self: Form): void;
    postSubmit?(values: FormValues, state: FormState, props: FormProps, self: Form): void;
}

export interface FormState {
    values: FormValues;
    touched: Touched;
    errors: FormErrors;
    nestedErrors: NestedErrors;
    dirty?: boolean | undefined;
}

export const FormDefaultProps: FormProps;

export interface FormApi {
    setAllValues(values: FormValues, noTouch?: boolean): void;
    setValue(field: string, value: any, noTouch?: boolean): void;
    getValue(field: string, fallback?: any): any;
    setNestedError(field: string, value?: boolean): void;
    getError(field: string): FormError;
    setTouched(field: string, value?: boolean): void;
    getTouched(field: string): boolean;
    addValue(field: string, value: any): void;
    removeValue(field: string, index: number): void;
    swapValues(field: string, index: number, destIndex: number): void;
    setAllTouched(dirty?: boolean, state?: Partial<FormState>): void;
    resetForm(): void;
    submitForm(e?: Pick<React.SyntheticEvent<any>, "preventDefault">): void;
}

export interface FormFunctionProps extends FormProps, FormState, FormApi {}

export interface FormContext {
    formApi: FormApi;
}

export class Form extends React.Component<
    FormProps & { children?: ((props: FormFunctionProps) => RenderReturn) | RenderReturn | undefined },
    FormState
> implements FormApi, React.ChildContextProvider<FormContext> {
    static defaultProps: FormProps;
    static childContextTypes: {
        formApi: React.Validator<any>;
    };

    getDefaultState(): FormState;
    getChildContext(): FormContext;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Readonly<Partial<FormProps>>, nextContext: any): void;
    componentWillUmount(): void;

    // API
    setAllValues(values: FormValues, noTouch?: boolean): void;
    setValue(field: string, value: any, noTouch?: boolean): void;
    getValue(field: string, fallback?: any): any;
    setNestedError(field: string, value?: boolean): void;
    getError(field: string): FormError;
    setTouched(field: string, value?: boolean): void;
    getTouched(field: string): boolean;
    addValue(field: string, value: any): void;
    removeValue(field: string, index: number): void;
    swapValues(field: string, index: number, destIndex: number): void;
    setAllTouched(dirty?: boolean, state?: Partial<FormState>): void;
    resetForm(): void;
    submitForm(e?: Pick<React.SyntheticEvent<any>, "preventDefault">): void;

    // Utils
    getAPI(): FormApi;
    setFormState(newState: Partial<FormState>, silent?: boolean): void;
    emitChange(state: FormState, initial?: boolean): void;
    validate(values: FormValues, state: FormState, props: FormProps): FormErrors;
    render(): RenderReturn;
}

export interface FormFieldApi {
    setAllValues(values: FormValues, noTouch?: boolean): void;
    setValue(value: any, noTouch?: boolean): void;
    getValue(fallback?: any): any;
    setNestedError(value?: boolean): void;
    getError(): FormError;
    setTouched(value?: boolean): void;
    getTouched(): boolean;
    addValue(value: any): void;
    removeValue(index: number): void;
    swapValues(index: number, destIndex: number): void;
    setAllTouched(dirty?: boolean, state?: Partial<FormState>): void;
    resetForm(): void;
    submitForm(e?: Pick<React.SyntheticEvent<any>, "preventDefault">): void;
}

export interface FormFieldPropsWithField {
    field?: string | undefined;
    children(api: FormFieldApi): React.ReactElement | null;
}
export interface FormFieldPropsWithoutField {
    children(api: FormApi): RenderReturn;
}
export type FormFieldProps = FormFieldPropsWithField | FormFieldPropsWithoutField;
export const FormField: React.FC<FormFieldProps>;

// FormError
export interface FormErrorProps {
    field?: FormFieldPropsWithField["field"] | undefined;
    className?: string | undefined;
    style?: React.HTMLAttributes<HTMLElement>["style"] | undefined;
}
export const FormError: React.FC<FormErrorProps>;

export interface FormInputProps {
    field?: FormFieldPropsWithField["field"] | undefined;
    showErrors?: boolean | undefined;
    errorBefore?: boolean | undefined;
    isForm?: boolean | undefined;
    className?: string | undefined;
    errorProps?: FormErrorProps | undefined;
}

export interface FormInputPropsWithChildren extends FormInputProps {
    children(api: FormFieldApi): React.ReactElement | null;
}
export const FormInput: React.FC<FormInputPropsWithChildren>;

// ==============================
//             Inputs
// ==============================

export type EventHandler<T, E> = (e: E, cb: () => void) => void;
export type ChangeHandler<T> = EventHandler<T, React.ChangeEvent<T>>;
export type FocusHandler<T> = EventHandler<T, React.FocusEvent<T>>;
export type ClickHandler<T> = EventHandler<T, React.MouseEvent<T>>;

// Prop interfaces are intermediate interfaces to "redefine" the type of some events
// onChange:React.EventHandler => onChange:any => onChange:CustomEventHandler

export interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean | undefined;
}
export interface SelectAttrs extends React.SelectHTMLAttributes<HTMLSelectElement> {
    onChange?: any;
    onBlur?: any;
}
export interface SelectProps extends SelectAttrs {
    options: ReadonlyArray<SelectOption>;
    field?: FormInputProps["field"] | undefined;
    showErrors?: FormInputProps["showErrors"] | undefined;
    errorBefore?: FormInputProps["errorBefore"] | undefined;
    onChange?: ChangeHandler<HTMLSelectElement> | undefined;
    onBlur?: FocusHandler<HTMLSelectElement> | undefined;
    isForm?: FormInputProps["isForm"] | undefined;
    noTouch?: boolean | undefined;
    errorProps?: FormInputProps["errorProps"] | undefined;
    placeholder?: string | undefined;
}
export const Select: React.FC<SelectProps>;

export interface InputAttrs extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: any;
    onBlur?: any;
}
export interface CheckboxProps extends InputAttrs {
    field?: FormInputProps["field"] | undefined;
    showErrors?: FormInputProps["showErrors"] | undefined;
    errorBefore?: FormInputProps["errorBefore"] | undefined;
    onChange?: ChangeHandler<HTMLInputElement> | undefined;
    onBlur?: FocusHandler<HTMLInputElement> | undefined;
    isForm?: FormInputProps["isForm"] | undefined;
    noTouch?: boolean | undefined;
    errorProps?: FormInputProps["errorProps"] | undefined;
}
export const Checkbox: React.FC<CheckboxProps>;

export interface TextareaAttrs extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onChange?: any;
    onBlur?: any;
}
export interface TextareaProps extends TextareaAttrs {
    field?: FormInputProps["field"] | undefined;
    showErrors?: FormInputProps["showErrors"] | undefined;
    errorBefore?: FormInputProps["errorBefore"] | undefined;
    onChange?: ChangeHandler<HTMLTextAreaElement> | undefined;
    onBlur?: FocusHandler<HTMLTextAreaElement> | undefined;
    isForm?: FormInputProps["isForm"] | undefined;
    noTouch?: boolean | undefined;
    errorProps?: FormInputProps["errorProps"] | undefined;
}
export const Textarea: React.FC<TextareaProps>;

export interface NestedFormProps extends FormProps {
    field?: FormInputProps["field"] | undefined;
    children?: React.ReactElement<FormProps> | [React.ReactElement<FormProps>] | undefined;
    errorProps?: FormInputProps["errorProps"] | undefined;
}
export const NestedForm: React.FC<NestedFormProps>;

export interface TextProps extends InputAttrs {
    field?: FormInputProps["field"] | undefined;
    showErrors?: FormInputProps["showErrors"] | undefined;
    errorBefore?: FormInputProps["errorBefore"] | undefined;
    onChange?: ChangeHandler<HTMLInputElement> | undefined;
    onBlur?: FocusHandler<HTMLInputElement> | undefined;
    isForm?: FormInputProps["isForm"] | undefined;
    noTouch?: boolean | undefined;
    errorProps?: FormInputProps["errorProps"] | undefined;
}
export const Text: React.FC<TextProps>;

export interface RadioGroupProps {
    children?: React.ReactNode;
    field?: FormInputProps["field"] | undefined;
    showErrors?: FormInputProps["showErrors"] | undefined;
    errorBefore?: FormInputProps["errorBefore"] | undefined;
    isForm?: FormInputProps["isForm"] | undefined;
    errorProps?: FormInputProps["errorProps"] | undefined;
}
export interface RadioGroupContext {
    formRadioGroup: RadioGroup;
}
export class RadioGroup extends React.Component<RadioGroupProps> implements FormFieldApi {
    static childContextTypes: {
        formRadioGroup: React.Validator<any>;
    };

    setAllValues: FormFieldApi["setAllValues"];
    setValue: FormFieldApi["setValue"];
    getValue: FormFieldApi["getValue"];
    setNestedError: FormFieldApi["setNestedError"];
    getError: FormFieldApi["getError"];
    setTouched: FormFieldApi["setTouched"];
    getTouched: FormFieldApi["getTouched"];
    addValue: FormFieldApi["addValue"];
    removeValue: FormFieldApi["removeValue"];
    swapValues: FormFieldApi["swapValues"];
    setAllTouched: FormFieldApi["setAllTouched"];
    resetForm: FormFieldApi["resetForm"];
    submitForm: FormFieldApi["submitForm"];

    getChildContext(): RadioGroupContext;
}

export interface InputWIthoutClick extends InputAttrs {
    onClick?: any;
}
export interface RadioProps extends InputWIthoutClick {
    onClick?: ClickHandler<HTMLInputElement> | undefined;
    onChange?: ChangeHandler<HTMLInputElement> | undefined;
    onBlur?: FocusHandler<HTMLInputElement> | undefined;
}
export class Radio extends React.Component<RadioProps> {
    static contextTypes: {
        formRadioGroup: React.Validator<any>;
    };

    context: RadioGroupContext;
}
