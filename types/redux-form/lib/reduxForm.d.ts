import {
    Component,
    ComponentType,
    SyntheticEvent
} from "react";
import { Dispatch } from "redux";
import {
    FieldType,
    FormErrors,
    FormStateMap,
    FormWarnings,
    RegisteredFieldState
} from "../index";
import { FormState } from "./reducer";
import { Validator } from "./Field";

export type FormSubmitHandler<FormData = {}, P = {}, ErrorType = string> =
    (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, P, ErrorType>) => void | FormErrors<FormData, ErrorType> | Promise<any>;

export type GetFormState = (state: any) => FormStateMap;
export interface SubmitHandler<FormData = {}, P = {}, ErrorType = string> {
    (
        submit: FormSubmitHandler<FormData, P, ErrorType>,
        props?: DecoratedFormProps<FormData, P, ErrorType>,
        valid?: boolean,
        asyncValidate?: any,
        fields?: string[]
    ): any;
    (event: SyntheticEvent<any>): void;
}

export interface ValidateCallback<FormData, P, ErrorType> {
    values: FormData;
    nextProps: DecoratedFormProps<FormData, P, ErrorType>;
    props: DecoratedFormProps<FormData, P, ErrorType>;
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
    clearSubmit(): void;
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
}

export interface ConfigProps<FormData = {}, P = {}, ErrorType = string> {
    form: string;
    asyncBlurFields?: string[];
    asyncChangeFields?: string[];
    asyncValidate?(values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, P, ErrorType>, blurredField: string): Promise<any>;
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    forceUnregisterOnUnmount?: boolean;
    getFormState?: GetFormState;
    immutableProps?: string[];
    initialValues?: Partial<FormData>;
    keepDirtyOnReinitialize?: boolean;
    updateUnregisteredFields?: boolean;
    keepValues?: boolean;
    onChange?(values: Partial<FormData>, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, P, ErrorType>, previousValues: Partial<FormData>): void;
    onSubmit?: FormSubmitHandler<FormData, P, ErrorType> | SubmitHandler<FormData, P, ErrorType>;
    onSubmitFail?(
        errors: FormErrors<FormData, ErrorType> | undefined,
        dispatch: Dispatch<any>,
        submitError: any,
        props: DecoratedFormProps<FormData, P, ErrorType>
    ): void;
    onSubmitSuccess?(result: any, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, P, ErrorType>): void;
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
    validate?(values: FormData, props: DecoratedFormProps<FormData, P, ErrorType>): FormErrors<FormData, ErrorType>;
    warn?(values: FormData, props: DecoratedFormProps<FormData, P, ErrorType>): FormWarnings<FormData>;
}

export interface ReduxFormContext {
    form: string;
    getFormState: GetFormState;
    asyncValidate: {
        (name?: string, value?: any, trigger?: 'blur' | 'change'): Promise<any>;
    };
    getValues: { (): any };
    sectionPrefix?: string;
    prefixName?: string;
    register: (
        name: string,
        type: string,
        getValidator?: () => (Validator | Validator[]),
        getWarner?: () => (Validator | Validator[])
    ) => void;
    unregister: (name: string) => void;
    registerInnerOnSubmit: (innerOnSubmit: () => void) => void;
    focus: (name: string) => void;
    change: (name: string, value: any) => void;
    blur: (name: string, value: any) => void;
}

export interface WrappedReduxFormContext {
    _reduxForm: ReduxFormContext;
}

export interface FormInstance<FormData, P> extends Component<P> {
    dirty: boolean;
    invalid: boolean;
    pristine: boolean;
    registeredFields: RegisteredFieldState[];
    reset(): void;
    resetSection(...sections: string[]): void;
    submit(): Promise<any>;
    valid: boolean;
    values: Partial<FormData>;
    wrappedInstance?: HTMLElement;
}

export type SubmitAction = () => void;
export type InitializeAction<FormData> = (
    initialValues: Partial<FormData>,
    keepDirty: boolean,
    otherMeta?: any
) => void;
export type AutoFillAction = (field: string, value: any) => void;
export type BlurAction = (field: string, value: any) => void;
export type ChangeAction = (field: string, value: any) => void;
export type FocusAction = (field: string) => void;
export type ArrayUnshiftAction = (field: string, value: any) => void;
export type ArrayShiftAction = (field: string) => void;
export type ArraySpliceAction = (
    field: string,
    index: number,
    removeNum: number,
    value: any
) => void;
export type ArrayInsertAction = (field: string, index: number, value: any) => void;
export type ArrayMoveAction = (field: string, from: number, to: number) => void;
export type ArrayPopAction = (field: string) => void;
export type ArrayPushAction = (field: string, value: any) => void;
export type ArrayRemoveAction = (field: string, index: number) => void;
export type ArrayRemoveAllAction = (field: string) => void;
export type ArraySwapAction = (field: string, indexA: number, indexB: number) => void;
export type ClearSubmitAction = () => void;
export type ClearSubmitErrorsAction = () => void;
export type ClearAsyncErrorAction = (field: string) => void;
export type ClearFieldsAction = (keepTouched: boolean, persistentSubmitErrors: boolean, ...fields: string[]) => void;
export type DestroyAction = () => void;
export type RegisterFieldAction = (name: string, type: FieldType) => void;
export type UnregisterFieldAction = (name: string, destroyOnUnmount?: boolean) => void;
export type ResetAction = () => void;
export type ResetSectionAction = () => void;
export type SetSubmitFailedAction = (...fields: string[]) => void;
export type SetSubmitSucceededAction = (...fields: string[]) => void;
export type StartAsyncValidationAction = (field: string) => void;
export type StopAsyncValidationAction<ErrorType> = (errors?: FormErrors<ErrorType>) => void;
export type StopSubmitAction<ErrorType> = (errors?: FormErrors<ErrorType>) => void;
export type StartSubmitAction = () => void;
export type TouchAction = (...fields: string[]) => void;
export type UntouchAction = (...fields: string[]) => void;
export type UpdateSyncErrorsAction<ErrorType> = (syncErrors?: FormErrors<ErrorType>, error?: any) => void;
export type UpdateSyncWarningsAction<ErrorType> = (syncErrors?: FormErrors<ErrorType>, error?: any) => void;

export type DecoratedFormState<FormData, ErrorType> = FormState & {
    asyncErrors?: FormErrors<FormData, ErrorType>;
    asyncValidating: boolean;
    dirty: boolean;
    error?: any;
    initialized: boolean;
    invalid: boolean;
    pristine: boolean;
    submitSucceeded: boolean;
    syncErrors?: FormErrors<FormData, ErrorType>;
    syncWarnings?: FormWarnings<any, any>,
    triggerSubmit?: boolean;
    valid: boolean;
    validExceptSubmit: boolean;
    warning?: any;
};

export interface DecoratedFormActions<ErrorType> {
    arrayInsert: ArrayInsertAction;
    arrayMove: ArrayMoveAction;
    arrayPop: ArrayPopAction;
    arrayPush: ArrayPushAction;
    arrayRemove: ArrayRemoveAction;
    arrayRemoveAll: ArrayRemoveAllAction;
    arrayShift: ArrayShiftAction;
    arraySplice: ArraySpliceAction;
    arraySwap: ArraySwapAction;
    arrayUnshift: ArrayUnshiftAction;
    autofill: AutoFillAction;
    clearSubmit: ClearSubmitAction;
    clearSubmitErrors: ClearSubmitErrorsAction;
    clearAsyncError: ClearAsyncErrorAction;
    clearFields: ClearFieldsAction;
    destroy: DestroyAction;
    initialize: InitializeAction<ErrorType>;
    registerField: RegisterFieldAction;
    reset: ResetAction;
    resetSection: ResetSectionAction;
    startAsyncValidation: StartAsyncValidationAction;
    startSubmit: StartSubmitAction;
    stopAsyncValidation: StopAsyncValidationAction<ErrorType>;
    stopSubmit: StopSubmitAction<ErrorType>;
    submit: SubmitAction;
    setSubmitFailed: SetSubmitFailedAction;
    setSubmitSucceeded: SetSubmitSucceededAction;
    touch: TouchAction;
    unregisterField: UnregisterFieldAction;
    untouch: UntouchAction;
    updateSyncErrors: UpdateSyncErrorsAction<ErrorType>;
    updateSyncWarnings: UpdateSyncWarningsAction<ErrorType>;
    blur: BlurAction;
    change: ChangeAction;
    focus: FocusAction;
    array: InjectedArrayProps;
    dispatch: Dispatch;
}

export type DecoratedFormProps<FormData = {}, P = {}, ErrorType = string> =
    P
    & Partial<ConfigProps<FormData, P, ErrorType>>
    & Partial<DecoratedFormState<FormData, ErrorType>>
    & Partial<DecoratedFormActions<ErrorType>>
    & { _reduxForm?: WrappedReduxFormContext };

export interface DecoratedComponentClass<FormData, P> {
    new(props?: P, context?: any): FormInstance<FormData, P>;
}

export type FormDecorator<FormData, P, ErrorType = string> =
    (component: ComponentType<P & InjectedFormProps<FormData, P, ErrorType>>) =>
        DecoratedComponentClass<FormData, DecoratedFormProps<FormData, P, ErrorType>>;

export declare function reduxForm<FormData = {}, P = {}, ErrorType = string>(
    config:
        | ConfigProps<FormData, P, ErrorType>
        | Partial<ConfigProps<FormData, P, ErrorType>>,
): FormDecorator<FormData, P, ErrorType>;

export default reduxForm;
