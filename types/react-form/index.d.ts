import * as React from "react";

// Hooks
// Documentation: https://github.com/tannerlinsley/react-form/blob/a4c951622b623edbe95884eb277fae5f637fd481/docs/api.md

export type UseFormValues<ValueType> = Record<string, ValueType>;
export type ValidateResult = string | false | undefined;

export interface FieldScopeSpecificMethods<
    ValueType,
    ErrorType,
    EventType,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType>,
> {
    setFieldValue(
        fieldPath: string,
        updater: ((prev: ValueType) => ValueType) | ValueType,
        options: { isTouched: boolean },
    ): void;

    setFieldMeta(fieldPath: string, updater: ((prev: FieldMetaType) => FieldMetaType) | Partial<FieldMetaType>): void;

    pushFieldValue(fieldPath: string, newValue: ValueType): void;

    insertFieldValue(fieldPath: string, insertIndex: number, value: ValueType): void;

    removeFieldValue(fieldPath: string, removalIndex: number): void;

    swapFieldValues(fieldPath: string, firstIndex: number, secondIndex: number): void;
}

export interface UseFormOptions<
    ValueType,
    ErrorType,
    EventType,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType>,
    FormMetaType extends UseFormInstanceMeta<ErrorType>,
> {
    defaultValues?: UseFormValues<ValueType> | undefined;

    onSubmit?(
        values: UseFormValues<ValueType>,
        instance: UseFormInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType>,
    ): Promise<void> | void;

    validate?(
        values: UseFormValues<ValueType>,
        instance: UseFormInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType>,
    ): Promise<ValidateResult> | ValidateResult | void;

    validatePristine?: boolean | undefined;
    debugForm?: boolean | undefined;
}

export interface UseFormInstanceMeta<ErrorType> {
    error: ErrorType;
    isSubmitting: boolean;
    isTouched: boolean;
    isSubmitted: boolean;
    submissionAttempts: number;
    fieldsAreValidating: boolean;
    fieldsAreValid: boolean;
    isValid: boolean;
    canSubmit: boolean;
}

export interface UseFormInstance<
    ValueType,
    ErrorType,
    EventType,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType>,
    FormMetaType extends UseFormInstanceMeta<ErrorType>,
> extends FieldScopeSpecificMethods<ValueType, ErrorType, EventType, FieldMetaType> {
    Form: typeof React.Component;
    values: UseFormValues<ValueType>;
    meta: FormMetaType;
    formContext: UseFormInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType>;

    reset(): void;

    setMeta(updater: ((prev: FormMetaType) => FormMetaType) | Partial<FormMetaType>): void;

    handleSubmit(event: React.SyntheticEvent<EventType>): void;

    debounce(f: () => void, wait: number): Promise<void> | void;

    setValues(
        updater: ((previousValues: UseFormValues<ValueType>) => UseFormValues<ValueType>) | UseFormValues<ValueType>,
    ): void;

    runValidation(): void;

    getFieldValue(fieldPath: string): ValueType;

    getFieldMeta(fieldPath: string): FieldMetaType;
}

export interface UseFieldOptions<
    ValueType,
    ErrorType,
    EventType,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType>,
    FormMetaType extends UseFormInstanceMeta<ErrorType>,
    InputPropsType extends UseFieldInstancePropsType<ValueType>,
> {
    defaultValue?: ValueType | undefined;
    defaultError?: ErrorType | undefined;
    defaultIsTouched?: boolean | undefined;
    defaultMeta?: FieldMetaType | undefined;

    validate?(
        value: ValueType,
        instance: UseFieldInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType, InputPropsType>,
    ): Promise<ValidateResult> | ValidateResult | void;

    filterValue?(
        value: ValueType,
        instance: UseFieldInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType, InputPropsType>,
    ): ValueType;

    validatePristine?: boolean | undefined;
}

export interface UseFieldInstanceMeta<ErrorType> {
    error: ErrorType | null;
    isTouched: boolean;
    isValidating: boolean;
}

export interface UseFieldInstancePropsType<ValueType> {
    value: ValueType;
    onChange: React.ChangeEventHandler;
    onBlur: React.FormEventHandler;
}

export interface UseFieldInstance<
    ValueType,
    ErrorType,
    EventType,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType>,
    FormMetaType extends UseFormInstanceMeta<ErrorType>,
    InputPropsType extends UseFieldInstancePropsType<ValueType>,
> extends FieldScopeSpecificMethods<ValueType, ErrorType, EventType, FieldMetaType> {
    form: UseFormInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType>;
    fieldName: string;
    value: ValueType;
    meta: FieldMetaType;
    FieldScope: typeof React.Component;

    debounce(f: () => void, wait: number): Promise<void> | void;

    runValidation(): void;

    getInputProps(props?: Partial<InputPropsType>): InputPropsType;

    setValue(updater: ((prev: ValueType) => ValueType) | ValueType, options?: { isTouched: boolean }): void;

    setMeta(updater: ((prev: FieldMetaType) => FieldMetaType) | Partial<FieldMetaType>): void;

    pushValue(newValue: ValueType): void;

    insertValue(insertIndex: number, value: ValueType): void;

    removeValue(removalIndex: number): void;

    swapValues(firstIndex: number, secondIndex: number): void;
}

export function useForm<
    ValueType = string,
    ErrorType = string,
    EventType = unknown,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType> = UseFieldInstanceMeta<ErrorType>,
    FormMetaType extends UseFormInstanceMeta<ErrorType> = UseFormInstanceMeta<ErrorType>,
>(
    props: UseFormOptions<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType>,
): UseFormInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType>;

export function useField<
    ValueType = string,
    ErrorType = string,
    EventType = unknown,
    FieldMetaType extends UseFieldInstanceMeta<ErrorType> = UseFieldInstanceMeta<ErrorType>,
    FormMetaType extends UseFormInstanceMeta<ErrorType> = UseFormInstanceMeta<ErrorType>,
    InputPropsType extends UseFieldInstancePropsType<ValueType> = UseFieldInstancePropsType<ValueType>,
>(
    fieldPath: string,
    props: UseFieldOptions<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType, InputPropsType>,
): UseFieldInstance<ValueType, ErrorType, EventType, FieldMetaType, FormMetaType, InputPropsType>;

export function splitFormProps(props: any): [string, UseFieldOptions<any, any, any, any, any, any>, any];

export function useFormContext(): UseFormInstance<any, any, any, any, any>;
