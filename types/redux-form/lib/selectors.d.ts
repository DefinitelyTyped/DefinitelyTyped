import { FormErrors, GetFormState } from "../index";

export type DataSelector<FormData = {}, State = {}> = (formName: string, getFormState?: GetFormState) => (state: State) => FormData;
export type ErrorSelector<FormData = {}, State = {}> = (formName: string, getFormState?: GetFormState) => (state: State) => FormErrors<FormData>;
export type BooleanSelector<State = {}> = (formName: string, getFormState?: GetFormState) => (state: State) => boolean;

export const getFormValues: DataSelector;
export const getFormInitialValues: DataSelector;
export const getFormSyncErrors: ErrorSelector;
export const getFormMeta: DataSelector;
export const getFormAsyncErrors: ErrorSelector;
export const getFormSyncWarnings: ErrorSelector;
export const getFormSubmitErrors: ErrorSelector;
export const getFormError: ErrorSelector;
export function getFormNames(state: any): string[];
export const isDirty: BooleanSelector;
export const isPristine: BooleanSelector;
export const isValid: BooleanSelector;
export const isInvalid: BooleanSelector;
export const isSubmitting: BooleanSelector;
export const hasSubmitSucceeded: BooleanSelector;
export const hasSubmitFailed: BooleanSelector;
