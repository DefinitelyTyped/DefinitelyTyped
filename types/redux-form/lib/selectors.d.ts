import { FormErrors } from "redux-form";

export type DataSelector<FormData = {}, State = {}> = (formName: string) => (state: State) => FormData;
export type ErrorSelector<FormData = {}, State = {}> = (formName: string) => (state: State) => FormErrors<FormData>;
export type BooleanSelector<State = {}> = (formName: string) => (state: State) => boolean;

declare const getFormValues: DataSelector;
declare const getFormInitialValues: DataSelector;
declare const getFormSyncErrors: ErrorSelector;
declare const getFormMeta: DataSelector;
declare const getFormAsyncErrors: ErrorSelector;
declare const getFormSyncWarnings: ErrorSelector;
declare const getFormSubmitErrors: ErrorSelector;
declare function getFormNames<State>(state: State): string[];
declare const isDirty: BooleanSelector;
declare const isPristine: BooleanSelector;
declare const isValid: BooleanSelector;
declare const isInvalid: BooleanSelector;
declare const isSubmitting: BooleanSelector;
declare const hasSubmitSucceeded: BooleanSelector;
declare const hasSubmitFailed: BooleanSelector;
