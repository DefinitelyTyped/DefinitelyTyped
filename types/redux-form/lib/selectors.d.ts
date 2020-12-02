import { FormErrors, GetFormState } from "../index";

export type DataSelector = <FormData = {}>(formName: string, getFormState?: GetFormState) => (state: Record<string, unknown>) => FormData;
export type ErrorSelector = <FormData = {}, ErrorType = string>(formName: string, getFormState?: GetFormState) => (state: Record<string, unknown>) => FormErrors<FormData, ErrorType>;
export type BooleanSelector = (formName: string, getFormState?: GetFormState) => (state: Record<string, unknown>) => boolean;
export type NamesSelector = (getFormState?: GetFormState) => (state: Record<string, unknown>) => string[];
export type FormOrFieldsBooleanSelector = (formName: string, getFormState?: GetFormState) => (state: Record<string, unknown>, ...fields: string[]) => boolean;

export const getFormValues: DataSelector;
export const getFormInitialValues: DataSelector;
export const getFormSyncErrors: ErrorSelector;
export const getFormMeta: DataSelector;
export const getFormAsyncErrors: ErrorSelector;
export const getFormSyncWarnings: ErrorSelector;
export const getFormSubmitErrors: ErrorSelector;
export const getFormError: ErrorSelector;
export const getFormNames: NamesSelector;
export const isDirty: FormOrFieldsBooleanSelector;
export const isPristine: FormOrFieldsBooleanSelector;
export const isValid: BooleanSelector;
export const isInvalid: BooleanSelector;
export const isSubmitting: BooleanSelector;
export const isAsyncValidating: BooleanSelector;
export const hasSubmitSucceeded: BooleanSelector;
export const hasSubmitFailed: BooleanSelector;
