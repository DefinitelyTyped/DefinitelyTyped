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
} from "redux-form";

export type FormSubmitHandler<FormData = {}, P = {}> =
    (values: Partial<FormData>, dispatch: Dispatch<any>, props: P) => void | FormErrors<FormData> | Promise<any>;

export interface SubmitHandler<FormData = {}, P = {}> {
    (handler: FormSubmitHandler<FormData, P>): FormEventHandler<any>;
    (event: SyntheticEvent<any>): void;
}

export interface ValidateCallback<FormData, P> {
    values: FormData;
    nextProps: P & InjectedFormProps<FormData, P>;
    props: P & InjectedFormProps<FormData, P>;
    initialRender: boolean;
    structure: any;
}

export interface AsyncValidateCallback<FormData> {
    asyncErrors?: FormErrors<FormData>;
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

export interface InjectedFormProps<FormData = {}, P = {}> {
    anyTouched: boolean;
    array: InjectedArrayProps;
    asyncValidate: () => void;
    asyncValidating: string | boolean;
    autofill(field: string, value: any): void;
    blur(field: string, value: any): void;
    change(field: string, value: any): void;
    clearAsyncError(field: string): void;
    destroy(): void;
    dirty: boolean;
    error: string;
    form: string;
    handleSubmit: SubmitHandler<FormData, P>;
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
    registeredFields: { [name: string]: RegisteredField }
}

export interface ConfigProps<FormData = {}, P = {}> {
    form: string;
    asyncBlurFields?: string[];
    asyncValidate?(values: FormData, dispatch: Dispatch<any>, props: P & InjectedFormProps<FormData, P>, blurredField: string): Promise<any>;
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    forceUnregisterOnUnmount?: boolean;
    getFormState?(state: any): FormStateMap;
    immutableProps?: string[];
    initialValues?: Partial<FormData>;
    keepDirtyOnReinitialize?: boolean;
    onChange?: (values: Partial<FormData>, dispatch: Dispatch<any>, props: P & InjectedFormProps<FormData, P>) => void;
    onSubmit?: FormSubmitHandler<FormData, P & InjectedFormProps<FormData, P>>;
    onSubmitFail?(errors: FormErrors<FormData>, dispatch: Dispatch<any>, submitError: any, props: P & InjectedFormProps<FormData, P>): void;
    onSubmitSuccess?(result: any, dispatch: Dispatch<any>, props: P & InjectedFormProps<FormData, P>): void;
    propNamespace?: string;
    pure?: boolean;
    shouldValidate?(params: ValidateCallback<FormData, P>): boolean;
    shouldAsyncValidate?(params: AsyncValidateCallback<FormData>): boolean;
    touchOnBlur?: boolean;
    touchOnChange?: boolean;
    persistentSubmitErrors?: boolean;
    validate?(values: FormData, props: P & InjectedFormProps<FormData, P>): FormErrors<FormData>;
    warn?(values: FormData, props: P & InjectedFormProps<FormData, P>): FormWarnings<FormData>;
}

export interface FormInstance<FormData, P> extends Component<P> {
    dirty: boolean;
    invalid: boolean;
    pristine: boolean;
    registeredFields: RegisteredFieldState[];
    reset(): void;
    submit(): Promise<any>;
    valid: boolean;
    values: Partial<FormData>;
    wrappedInstance: ReactElement<P & InjectedFormProps<FormData, P>>;
}

export interface DecoratedComponentClass<FormData, P> {
    new(props?: P, context?: any): FormInstance<FormData, P>;
}

export type FormDecorator<FormData, P, Config> =
    (component: ComponentType<P & InjectedFormProps<FormData, P>>) => DecoratedComponentClass<FormData, P & Config>;

export declare function reduxForm<FormData = {}, P = {}>(
    config: ConfigProps<FormData, P>
): FormDecorator<FormData, P, Partial<ConfigProps<FormData, P>>>;

export declare function reduxForm<FormData = {}, P = {}>(
    config: Partial<ConfigProps<FormData, P>>
): FormDecorator<FormData, P, ConfigProps<FormData, P>>;

export default reduxForm;
