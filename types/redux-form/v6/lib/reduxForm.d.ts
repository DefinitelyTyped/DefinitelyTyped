import {
    Component,
    ComponentClass,
    ReactElement,
    SyntheticEvent,
    ReactEventHandler,
    FunctionComponent
} from "react";
import { Dispatch } from "redux";
import { DataShape, FieldValue, FormErrors, FormWarnings, RegisteredFieldState, ComponentConstructor } from "../index";

export function reduxForm<FormData extends DataShape, P, S>(
    config: Config<FormData, P, S>
): FormDecorator<FormData, P, S>;

export function reduxForm<FormData extends DataShape, P>(
    config: Config<FormData, P, any>
): FormDecorator<FormData, P, any>;

export function reduxForm(
    config: Config<any, any, any>
): FormDecorator<any, any, any>;

/**
 * This is not entirely correct but Typescript expect input and output for decorators to be the same type.
 * Because of that, React HoCs can't be fully defined. https://www.typescriptlang.org/docs/handbook/decorators.html
 */
export interface FormDecorator<FormData extends DataShape, P, S> {
    <T extends ComponentConstructor<P & FormProps<FormData, P, S>>>(component: T): T;
}

export interface Config<FormData extends DataShape, P, S> {
    /**
     * the name of your form and the key to where your form's state will be
     * mounted under the redux-form reducer
     */
    form?: string | undefined;

    /**
     * field names for which onBlur should trigger a call to the asyncValidate
     * function. Defaults to [].
     *
     * See Asynchronous Blur Validation Example for more details.
     */
    asyncBlurFields?: string[] | undefined;

    /**
     * a function that takes all the form values, the dispatch function, and
     * the props given to your component, and returns a Promise that will
     * resolve if the validation is passed, or will reject with an object of
     * validation errors in the form { field1: <String>, field2: <String> }.
     *
     * See Asynchronous Blur Validation Example for more details.
     */
    asyncValidate?(values: FormData, dispatch: Dispatch<S>, props: P, blurredField: string): Promise<any>;

    /**
     * Whether or not to automatically destroy your form's state in the Redux
     * store when your component is unmounted. Defaults to true.
     */
    destroyOnUnmount?: boolean | undefined;

    /**
     * Reinitialize the form every time the initialValues prop changes.
     * Defaults to false.
     */
    enableReinitialize?: boolean | undefined;

    /**
     * Whether or not to force unregistration of fields -- use in conjunction
     * with destroyOnUnmount. Useful for wizard-type forms where you want to destroy
     * fields as they unmount, but not the form's state. Defaults to false, as forms
     * are normally unregistered on unmount.
     */
    forceUnregisterOnUnmount?: boolean | undefined;

    /**
     * A function that takes the entire Redux state and returns the state slice
     * which corresponds to where the redux-form reducer was mounted. This
     * functionality is rarely needed, and defaults to assuming that the reducer
     * is mounted under the "form" key.
     */
    getFormState?(state: S): any;

    /**
     * When set to true and enableReinitialize is also set, the form will retain the value of dirty fields when
     * reinitializing. When this option is not set (the default), reinitializing the form replaces all field values.
     * This option is useful in situations where the form has live updates or continues to be editable after
     * form submission; it prevents reinitialization from overwriting user changes. Defaults to false.
     */
    keepDirtyOnReinitialize?: boolean | undefined;

    /**
     * The values with which to initialize your form in componentWillMount().
     * Particularly useful when Editing Multiple Records, but can also be used
     * with single-record forms. The values should be in the form
     * { field1: 'value1', field2: 'value2' }.
     */
    initialValues?: Partial<FormData> | undefined;

    /**
     * A callback function that will be called with all the form values any time
     * any of the form values change.
     */
    onChange?(values: any): void;

    /**
     * The function to call with the form data when the handleSubmit() is fired
     * from within the form component. If you do not specify it as a prop here,
     * you must pass it as a parameter to handleSubmit() inside your form
     * component.
     */
    onSubmit?: SubmitHandler<FormData, P, S> | undefined;

    /**
     * A callback function that will be called when a submission fails for whatever reason.
     *
     * @param errors      The errors that caused the submission to fail.
     * @param dispatch    The Redux `dispatch` function.
     * @param submitError The error object that caused the submission to fail. If `errors` is set this will be most
     *                    likely a `SubmissionError`, otherwise it can be any error or null.
     * @param props       The props passed into your decorated component.
     */
    onSubmitFail?(errors: FormErrors<FormData>, dispatch: Dispatch<S>, submitError: any, props: P): void;

    /**
     * A callback function that will be called when a submission succeeds.
     *
     * @param result      Any result that onSubmit has returned
     * @param dispatch    The Redux dispatch function
     * @param props       The props passed into your decorated component
     */
    onSubmitSuccess?(result: any, dispatch: Dispatch<S>, props: P): void;

    /**
     * If specified, all the props normally passed into your decorated
     * component directly will be passed under the key specified. Useful if
     * using other decorator libraries on the same component to avoid prop
     * namespace collisions.
     */
    propNamespace?: string | undefined;

    /**
     * If true, implements `shouldComponentUpdate` and shallowly compares _only_
     * the Redux-connected props that are needed to manage the form state. This
     * prevents unnecessary updates, but assumes the component is a "pure"
     * component and does not rely on any input or state other than its props and
     * the selected Redux store's state. Defaults to true.
     */
    pure?: boolean | undefined;

    /**
     * An optional function you may provide to have full control over when sync validation happens.
     */
    shouldValidate?(params: ValidateCallback<FormData>): boolean;

    /**
     * An optional function you may provide to have full control over when async
     * validation happens.
     */
    shouldAsyncValidate?(params: AsyncValidateCallback<FormData>): boolean;

    /**
     * marks fields as touched when the blur action is fired. Defaults to true.
     */
    touchOnBlur?: boolean | undefined;

    /**
     * marks fields as touched when the change action is fired. Defaults to
     * false.
     */
    touchOnChange?: boolean | undefined;

    /**
     * Do not remove submit errors when the change action is fired. Defaults to false.
     */
    persistentSubmitErrors?: boolean | undefined;

    /**
     * a synchronous validation function that takes the form values and props
     * passed into your component. If validation passes, it should return {}.
     * If validation fails, it should return the validation errors in the form
     * { field1: <String>, field2: <String> }.
     * Defaults to (values, props) => ({}).
     */
    validate?(values: FormData, props: FormProps<FormData, P, S> & P): FormErrors<FormData>;

    /**
     * A synchronous warning function that takes the form values and props passed into your component.
     * Warnings work the same as validations, but do not mark a form as invalid. If the warning check passes,
     * it should return {}. If the check fails, it should return the warnings in the form
     * { field1: <String>, field2: <String> }. Defaults to (values, props) => ({}).
     */
    warn?(values: FormData, props: FormProps<FormData, P, S> & P): FormWarnings<FormData>;
}

/**
 * If your onSubmit function returns a promise, the submitting property will be set to true
 * until the promise has been resolved or rejected. If it is rejected with a redux-form
 * SubmissionError containing errors in the form { field1: 'error', field2: 'error' } then
 * the submission errors will be added to each field (to the error prop) just like async
 * validation errors are. If there is an error that is not specific to any field, but applicable
 * to the entire form, you may pass that as if it were the error for a field called _error,
 * and it will be given as the error prop.
 */
export interface SubmitHandler<FormData extends DataShape, P, S> {
    (values: FormData, dispatch: Dispatch<S>, props: FormProps<FormData, P, S> & P): void | FormErrors<FormData> | Promise<any>;
}

interface ValidateCallback<FormData extends DataShape> {
    /**
     * The values.
     */
    values: FormData;

    /**
     * The next props.
     */
    nextProps: any;

    /**
     * The current props.
     */
    props: any;

    /**
     * true if the form is being initially rendered.
     */
    initialRender: boolean;

    /**
     * The structure object being used internally for values. You may wish to use 'deepEqual' from the structure.
     */
    structure: any;
}

interface AsyncValidateCallback<FormData extends DataShape> {
    /**
     * Any existing asynchronous validation errors
     */
    asyncErrors?: FormErrors<FormData> | undefined;

    /**
     * true if the form has ever been initialized with initial values
     */
    initialized: boolean;

    /**
     * The reason to possibly run async validation. It will either be: 'blur' or
     * 'submit', depending on whether an async blur field had triggered the async
     * validation or if submitting the form has triggered it, respectively.
     */
    trigger: "blur" | "submit";

    /**
     * The name of the field that has triggered the async validation. May be undefined.
     */
    blurredField?: string | undefined;

    /**
     * true if the form is pristine, false if it is dirty
     */
    pristine: boolean;

    /**
     * true if synchronous validation is passing, false if it is failing.
     */
    syncValidationPasses: boolean;
}

/**
 * A throwable error that is used to return submit validation errors from onSubmit.
 * The purpose being to distinguish promise rejection because of validation errors
 * from promise rejection because of AJAX I/O problems or other server errors.
 */
export class SubmissionError<FormData extends DataShape> extends Error {
    errors: FormErrors<FormData>;

    constructor(errors?: FormErrors<FormData>);
}

/**
 * The following are methods or properties that you can access on an instance
 * of your decorated form component (outermost component named "ReduxForm").
 */
export interface FormComponent<FormData extends DataShape, P, S> extends ComponentClass<P> {
    /**
     * true if the form data has changed from its initialized values. Opposite
     * of pristine.
     */
    dirty: boolean;

    /**
     * true if the form has validation errors. Opposite of valid.
     */
    invalid: boolean;

    /**
     * true if the form data is the same as its initialized values. Opposite
     * of dirty.
     */
    pristine: boolean;

    /**
     * An array of objects with fields `name` and `type` for each field
     * representing all the fields in the form. Mainly useful for testing.
     */
    registeredFields: RegisteredFieldState[];

    /**
     * Resets all the values in the form to the initialized state, making it
     * pristine again.
     */
    reset(): void;

    /**
     * Submits the form. Returns a promise that will be resolved when the form
     * is submitted successfully, or rejected if the submission fails.
     */
    submit(): Promise<any>;

    /**
     * true if the form passes validation (has no validation errors). Opposite
     * of invalid.
     */
    valid: boolean;

    /**
     * The current values of all the fields in the form.
     */
    values: FormData;

    /**
     * A reference to the instance of the component you decorated with reduxForm().
     * Mainly useful for testing.
     */
    wrappedInstance: ReactElement<P & FormProps<FormData, P, S>>;
}

/**
 * These are the props that will be passed to your form component.
 * Your form component's props can extend this interface if you want
 * to use strict checks.
 */
export interface StrictFormProps<FormData extends DataShape, P, S> {
    /**
     * true if any of the fields have been marked as touched, false otherwise.
     */
    anyTouched: boolean;

    /**
     * A set of pre-bound action creators for you to operate on array fields in your form.
     */
    array: {
        /**
         * Inserts a value into the given array field in your form.
         */
        insert(field: string, index: number, value: FieldValue): void;

        /**
         * Moves a value at the given from index to the given to index in
         * the given array field in your form.
         */
        move(field: string, from: number, to: number): void;

        /**
         * Pops a value off of the end of a given array field in your form.
         */
        pop(field: string): void;

        /**
         * Pushes the given value onto the end of the given array field in your form.
         */
        push(field: string, value: FieldValue): void;

        /**
         * Removes a value at the given index from the given array field in your form.
         */
        remove(field: string, index: number): void;

        /**
         * Removes all the values from the given array field in your form.
         */
        removeAll(field: string): void;

        /**
         * Shifts a value out of the beginning of the given array in your form.
         */
        shift(field: string): void;

        /**
         * Performs an Array.splice operation on the given array in your form.
         */
        splice(field: string, index: number, removeNum: number, value: FieldValue): void;

        /**
         * Swaps two values at the given indexes of the given array field in your form.
         */
        swap(field: string, indexA: number, indexB: number): void;

        /**
         * Unshifts the given value into the beginning of the given array field in your form.
         */
        unshift(field: string, value: FieldValue): void;
    };

    /**
     * A function that may be called to initiate asynchronous validation if
     * asynchronous validation is enabled.
     */
    asyncValidate(): void;

    /**
     * This value will be either:
     * - false - No asynchronous validation is currently happening
     * - true - Asynchronous validation is currently running in preparation to submit a form
     * - a string - The name of the field that just blurred to trigger asynchronous validation
     */
    asyncValidating: string | boolean;

    /**
     * Sets the value and marks the field as autofilled in the Redux Store. This is useful when a field
     * needs to be set programmatically, but in a way that lets the user know (via a styling change using
     * the autofilled prop in Field) that it has been autofilled for them programmatically.
     */
    autofill(field: string, value: FieldValue): void;

    /**
     * Marks a field as blurred in the Redux store.
     */
    blur(field: string, value: FieldValue): void;

    /**
     * Changes the value of a field in the Redux store.
     */
    change(field: string, value: FieldValue): void;

    /**
     * Clear async error of a field in the Redux store.
     */
    clearAsyncError(field: string): void;

    /**
     * Destroys the form state in the Redux store. By default, this will be
     * called for you in componentWillUnmount().
     */
    destroy(): void;

    /**
     * true if the form data has changed from its initialized values. Opposite
     * of pristine.
     */
    dirty: boolean;

    /**
     * A generic error for the entire form given by the _error key in the
     * result from the synchronous validation function, the asynchronous
     * validation, or the rejected promise from onSubmit.
     */
    error: string;

    /**
     * The form name that you gave to the reduxForm() decorator or the prop you
     * passed in to your decorated form component.
     */
    form: string;

    /**
     * A function meant to be passed to <form onSubmit={handleSubmit}> or to
     * <button onClick={handleSubmit}>. It will run validation, both sync and
     * async, and, if the form is valid, it will call
     * this.props.onSubmit(data) with the contents of the form data.
     *
     * Optionally, you may also pass your onSubmit function to handleSubmit
     * which will take the place of the onSubmit prop. For example: <form
     * onSubmit={handleSubmit(this.save.bind(this))}>
     *
     * If your onSubmit function returns a promise, the submitting property
     * will be set to true until the promise has been resolved or rejected.
     * If it is rejected with an object like
     * new SubmissionError({ field1: 'error', field2: 'error' })
     * then the submission errors will be added to each field (to the error
     * prop) just like async validation errors are. If there is an error that
     * is not specific to any field, but applicable to the entire form, you
     * may pass that as if it were the error for a field called _error, and
     * it will be given as the error prop.
     */
    handleSubmit(event: SyntheticEvent<any>): void; // same as ReactEventHandler

    handleSubmit(submit: SubmitHandler<FormData, P, S>): ReactEventHandler<any>;

    /**
     * Initializes the form data to the given values. All dirty and pristine
     * state will be determined by comparing the current data with these
     * initialized values.
     */
    initialize(data: FormData): void;

    /**
     * The same initialValues object passed to reduxForm to initialize the form data.
     */
    initialValues: Partial<FormData>;

    /**
     * true if the form has validation errors. Opposite of valid.
     */
    invalid: boolean;

    /**
     * true if the form data is the same as its initialized values. Opposite
     * of dirty.
     */
    pristine: boolean;

    /**
     * Resets all the values in the form to the initialized state, making it
     * pristine again.
     */
    reset(): void;

    /**
     * Whether or not your form is currently submitting. This prop will only
     * work if you have passed an onSubmit function that returns a promise. It
     * will be true until the promise is resolved or rejected.
     */
    submitting: boolean;

    /**
     * Starts as false. If onSubmit is called, and fails to submit for any
     * reason, submitFailed will be set to true. A subsequent successful
     * submit will set it back to false.
     */
    submitFailed: boolean;

    /**
     * Starts as false. If onSubmit is called, and succeed to submit,
     * submitSucceeded will be set to true. A subsequent unsuccessful
     * submit will set it back to false.
     */
    submitSucceeded: boolean;

    /**
     * Marks the given fields as "touched" to show errors.
     */
    touch(...field: string[]): void;

    /**
     * Clears the "touched" flag for the given fields
     */
    untouch(...field: string[]): void;

    /**
     * true if the form passes validation (has no validation errors). Opposite
     * of invalid.
     */
    valid: boolean;

    /**
     * A generic warning for the entire form given by the `_warning` key in the result from the
     * synchronous warning function.
     */
    warning: string;
}

/**
 * These are the props that will be passed to your form component.
 * Your form component's props can extend this interface.
 */
export interface FormProps<FormData extends DataShape, P, S> extends Partial<StrictFormProps<FormData, P, S>> {}
