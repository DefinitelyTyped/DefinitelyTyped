import { FormErrors, GetFormState } from "../index";

export type DataSelector<FormData = {}, State = {}> = (formName: string, getFormState?: GetFormState) => (state: State) => FormData;
export type ErrorSelector<FormData = {}, State = {}, ErrorType = string> = (formName: string, getFormState?: GetFormState) => (state: State) => FormErrors<FormData, ErrorType>;
export type BooleanSelector<State = {}> = (formName: string, getFormState?: GetFormState) => (state: State) => boolean;
export type NamesSelector<State = {}> = (getFormState?: GetFormState) => (state: State) => string[];
export type FormOrFieldsBooleanSelector<State = {}> = (formName: string, getFormState?: GetFormState) => (state: State, ...fields: string[]) => boolean;

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
