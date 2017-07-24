import { DataShape, FormErrors } from "../index";

/**
 * A "selector" API to make it easier to connect() to form values. Creates a selector
 * function for your form that can be used with your field names.
 */
export function formValueSelector<State>(form: string, getFormState?: () => State): Selector<State>;

export interface Selector<State> {
    (state: State, ...field: string[]): any;
}

/**
 * Gets form data.
 */
export interface DataSelector {
    <FormData extends DataShape, State>(formName: string): (state: State) => FormData;
    <FormData extends DataShape>(formName: string): (state: any) => FormData;
}

/**
 * Gets form errors.
 */
export interface ErrorSelector {
    <FormData extends DataShape, State>(formName: string): (state: State) => FormErrors<FormData>;
    <FormData extends DataShape>(formName: string): (state: any) => FormErrors<FormData>;
}

/**
 * Gets boolean info from form.
 */
export interface BooleanSelector {
    <State>(formName: string): (state: State) => boolean;
    (formName: string): (state: any) => boolean;
}

/**
 * Gets the form values. Shocking, right?
 */
export const getFormValues: DataSelector;

/**
 * Returns the form's fields meta data, namely touched and visited.
 */
export const getFormMeta: DataSelector;

/**
 * Gets the form's initial values.
 */
export const getFormInitialValues: DataSelector;

/**
 * Returns the form synchronous validation errors.
 */
export const getFormSyncErrors: ErrorSelector;

/**
 * Returns the form asynchronous validation errors.
 */
export const getFormAsyncErrors: ErrorSelector;

/**
 * Returns the form synchronous warnings.
 */
export const getFormSyncWarnings: ErrorSelector;

/**
 * Returns the form submit validation errors.
 */
export const getFormSubmitErrors: ErrorSelector;

/**
 * Gets the names of all the forms currently managed by Redux-Form.
 *
 * The reason that this is a function that returns a function is twofold:
 *   1. symmetry with the other selectors
 *   2. to allow for the getFormState parameter described at the top of this page.
 *
 * If you are using ImmutableJS, it will return a List.
 */
export const getFormNames: <State>(state: State) => string[];

/**
 * Returns true if the form is dirty, i.e. the values have been altered
 * from the original initialValues provided. The opposite of isPristine.
 */
export const isDirty: BooleanSelector;

/**
 * Returns true if the form is pristine, i.e. the values have NOT been altered
 * from the original initialValues provided. The opposite of isDirty.
 */
export const isPristine: BooleanSelector;

/**
 * Returns true if the form is valid, i.e. has no sync, async, or submission
 * errors. The opposite of isInvalid.
 */
export const isValid: BooleanSelector;

/**
 * Returns true if the form is invalid, i.e. has sync, async, or submission
 * errors. The opposite of isValid.
 */
export const isInvalid: BooleanSelector;

/**
 * Returns true if the form is submitting.
 */
export const isSubmitting: BooleanSelector;

/**
 * Returns true if the form has previously been successfully submitted.
 */
export const hasSubmitSucceeded: BooleanSelector;

/**
 * Returns true if the form has previously fail to submit.
 */
export const hasSubmitFailed: BooleanSelector;
