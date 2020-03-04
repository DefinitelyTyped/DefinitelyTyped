import {
    Component,
    ComponentClass,
    ComponentType,
    ReactElement,
    SyntheticEvent,
    StatelessComponent,
    FormEventHandler
} from "react";
import { Dispatch } from "redux";
import {
    FormErrors,
    ErrorOther,
    FormWarnings,
    WarningOther,
    RegisteredFieldState,
    FormStateMap
} from "../index";

export type FormSubmitHandler<FormData = {}, P = {}, ErrorType = string> =
    (values: FormData, dispatch: Dispatch<any>, props: P) => void | FormErrors<FormData, ErrorType> | Promise<any>;

export type GetFormState = (state: any) => FormStateMap;
export interface SubmitHandler<FormData = {}, P = {}, ErrorType = string> {
    (
        submit: FormSubmitHandler<FormData, P, ErrorType>,
        props?: InjectedFormProps<FormData, P, ErrorType>,
        valid?: boolean,
        asyncValidate?: any,
        fields?: string[]
    ): any;
    (event: SyntheticEvent<any>): void;
}

export interface ValidateCallback<FormData, P, ErrorType> {
    values: FormData;
    nextProps: P & InjectedFormProps<FormData, P, ErrorType>;
    props: P & InjectedFormProps<FormData, P, ErrorType>;
    initialRender: boolean;
    lastFieldValidatorKeys: string[];
    fieldValidatorKeys: string[];
    structure: any;
}

export interface AsyncValidateCallback<FormData, ErrorType> {
    asyncErrors?: FormErrors<FormData, ErrorType>;
    initialized: boolean;
    trigger: "blur" | "submit";
    blurredField?: string;
    pristine: boolean;
    syncValidationPasses: boolean;
}

export interface InjectedArrayProps {
    insert(field: string, index: number, value: any): void;
    move(field: string, from: number, to: number): void;
    pop(field: string): void;
    push(field: string, value: any): void;
    remove(field: string, index: number): void;
    removeAll(field: string): void;
    shift(field: string): void;
    splice(field: string, index: number, removeNum: number, value: any): void;
    swap(field: string, indexA: number, indexB: number): void;
    unshift(field: string, value: any): void;
}

export interface RegisteredField {
    count: number;
    name: string;
    type: "Field" | "FieldArray";
}

export interface InjectedFormProps<FormData = {}, P = {}, ErrorType = string> {
    anyTouched: boolean;
    array: InjectedArrayProps;
    asyncValidate(): void;
    asyncValidating: string | boolean;
    autofill(field: string, value: any): void;
    blur(field: string, value: any): void;
    change(field: string, value: any): void;
    clearAsyncError(field: string): void;
    destroy(): void;
    dirty: boolean;
    error: ErrorType;
    form: string;
    handleSubmit: SubmitHandler<FormData, P, ErrorType>;
    initialize(data: Partial<FormData>): void;
    initialized: boolean;
    initialValues: Partial<FormData>;
    invalid: boolean;
    pristine: boolean;
    reset(): void;
    submitFailed: boolean;
    submitSucceeded: boolean;
    submitting: boolean;
    touch(...field: string[]): void;
    untouch(...field: string[]): void;
    valid: boolean;
    warning: any;
    registeredFields: { [name: string]: RegisteredField };
}

export interface ConfigProps<FormData = {}, P = {}, ErrorType = string> {
    form: string;
    asyncBlurFields?: string[];
    asyncChangeFields?: string[];
    asyncValidate?(values: FormData, dispatch: Dispatch<any>, props: P & InjectedFormProps<FormData, P, ErrorType>, blurredField: string): Promise<any>;
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    forceUnregisterOnUnmount?: boolean;
    getFormState?: GetFormState;
    immutableProps?: string[];
    initialValues?: Partial<FormData>;
    keepDirtyOnReinitialize?: boolean;
    updateUnregisteredFields?: boolean;
    onChange?(values: Partial<FormData>, dispatch: Dispatch<any>, props: P & InjectedFormProps<FormData, P, ErrorType>, previousValues: Partial<FormData>): void;
    onSubmit?: FormSubmitHandler<FormData, P & InjectedFormProps<FormData, P, ErrorType>, ErrorType> | SubmitHandler<FormData, P & InjectedFormProps<FormData, P, ErrorType>, ErrorType>;
    onSubmitFail?(
        errors: FormErrors<FormData, ErrorType> | undefined,
        dispatch: Dispatch<any>,
        submitError: any,
        props: P & InjectedFormProps<FormData, P, ErrorType>
    ): void;
    onSubmitSuccess?(result: any, dispatch: Dispatch<any>, props: P & InjectedFormProps<FormData, P, ErrorType>): void;
    propNamespace?: string;
    pure?: boolean;
    shouldValidate?(params: ValidateCallback<FormData, P, ErrorType>): boolean;
    shouldError?(params: ValidateCallback<FormData, P, ErrorType>): boolean;
    shouldWarn?(params: ValidateCallback<FormData, P, ErrorType>): boolean;
    shouldAsyncValidate?(params: AsyncValidateCallback<FormData, ErrorType>): boolean;
    submitAsSideEffect?: boolean;
    touchOnBlur?: boolean;
    touchOnChange?: boolean;
    persistentSubmitErrors?: boolean;
    validate?(values: FormData, props: P & InjectedFormProps<FormData, P, ErrorType>): FormErrors<FormData, ErrorType>;
    warn?(values: FormData, props: P & InjectedFormProps<FormData, P, ErrorType>): FormWarnings<FormData>;
}

export interface FormInstance<FormData, P, ErrorType> extends Component<P> {
    dirty: boolean;
    invalid: boolean;
    pristine: boolean;
    registeredFields: RegisteredFieldState[];
    reset(): void;
    resetSection(...sections: string[]): void;
    submit(): Promise<any>;
    valid: boolean;
    values: Partial<FormData>;
    wrappedInstance: ReactElement<P & InjectedFormProps<FormData, P, ErrorType>>;
}

export interface DecoratedComponentClass<FormData, P, ErrorType> {
    new(props?: P, context?: any): FormInstance<FormData, P, ErrorType>;
}

export type FormDecorator<FormData, P, Config, ErrorType = string> =
    (component: ComponentType<P & InjectedFormProps<FormData, P, ErrorType>>) => DecoratedComponentClass<FormData, P & Config, ErrorType>;

export declare function reduxForm<FormData = {}, P = {}, ErrorType = string>(
    config: ConfigProps<FormData, P, ErrorType>
): FormDecorator<FormData, P, Partial<ConfigProps<FormData, P, ErrorType>>, ErrorType>;

export declare function reduxForm<FormData = {}, P = {}, ErrorType = string>(
    config: Partial<ConfigProps<FormData, P, ErrorType>>
): FormDecorator<FormData, P, ConfigProps<FormData, P, ErrorType>, ErrorType>;

export default reduxForm;
