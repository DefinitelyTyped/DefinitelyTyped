import * as React from "react";
import { ActionCreator, Dispatch, Reducer } from "redux";

export const actionTypes: { [actionName: string]: string };

export type FieldValue = any;

export interface FormData {
    [fieldName: string]: FieldValue;
}

export interface FieldProp<T> {
    /**
     * true if this field currently has focus. It will only work if you are
     * passing onFocus to your input element.
     */
    active: boolean;

    /**
     * An alias for value only when value is a boolean. Provided for
     * convenience of destructuring the whole field object into the props of a
     * form element.
     */
    checked?: boolean | undefined;

    /**
     * true if the field value has changed from its initialized value.
     * Opposite of pristine.
     */
    dirty: boolean;

    /**
     * The error for this field if its value is not passing validation. Both
     * synchronous and asynchronous validation errors will be reported here.
     */
    error?: any;

    /**
     * The value for this field as supplied in initialValues to the form.
     */
    initialValue: FieldValue;

    /**
     * true if the field value fails validation (has a validation error).
     * Opposite of valid.
     */
    invalid: boolean;

    /**
     * The name of the field. It will be the same as the key in the fields
     * Object, but useful if bundling up a field to send down to a specialized
     * input component.
     */
    name: string;

    /**
     * A function to call when the form field loses focus. It expects to
     * either receive the React SyntheticEvent or the current value of the
     * field.
     */
    onBlur(eventOrValue: React.SyntheticEvent<T> | FieldValue): void;

    /**
     * A function to call when the form field is changed. It expects to either
     * receive the React SyntheticEvent or the new value of the field.
     * @param eventOrValue
     */
    onChange(eventOrValue: React.SyntheticEvent<T> | FieldValue): void;

    /**
     * A function to call when the form field receives a 'dragStart' event.
     * Saves the field value in the event for giving the field it is dropped
     * into.
     */
    onDragStart(): void;

    /**
     * A function to call when the form field receives a drop event.
     */
    onDrop(): void;

    /**
     * A function to call when the form field receives focus.
     */
    onFocus(): void;

    /**
     * An alias for onChange. Provided for convenience of destructuring the
     * whole field object into the props of a form element. Added to provide
     * out-of-the-box support for Belle components' onUpdate API.
     */
    onUpdate(): void;

    /**
     * true if the field value is the same as its initialized value. Opposite
     * of dirty.
     */
    pristine: boolean;

    /**
     * true if the field has been touched. By default this will be set when
     * the field is blurred.
     */
    touched: boolean;

    /**
     * true if the field value passes validation (has no validation errors).
     * Opposite of invalid.
     */
    valid: boolean;

    /**
     * The value of this form field. It will be a boolean for checkboxes, and
     * a string for all other input types.
     */
    value: FieldValue;

    /**
     * true if this field has ever had focus. It will only work if you are
     * passing onFocus to your input element.
     */
    visited: boolean;
}

export interface ReduxFormProps<T> {
    /**
     * The name of the currently active (with focus) field.
     */
    active?: string | undefined;

    /**
     * A function that may be called to initiate asynchronous validation if
     * asynchronous validation is enabled.
     */
    asyncValidate?(): void;

    /**
     * true if the asynchronous validation function has been called but has not
     * yet returned.
     */
    asyncValidating?: boolean | undefined;

    /**
     * Destroys the form state in the Redux store. By default, this will be
     * called for you in componentWillUnmount().
     */
    destroyForm?(): void;

    /**
     * true if the form data has changed from its initialized values. Opposite
     * of pristine.
     */
    dirty?: boolean | undefined;

    /**
     * A generic error for the entire form given by the _error key in the
     * result from the synchronous validation function, the asynchronous
     * validation, or the rejected promise from onSubmit.
     */
    error?: any;

    /**
     * The form data, in the form { field1: <Object>, field2: <Object> }. The
     * field objects are meant to be destructured into your input component as
     * props, e.g. <input type="text" {...field.name}/>. Each field Object has
     * the following properties:
     */
    fields?: { [field: string]: FieldProp<T> } | undefined;

    /**
     * A function meant to be passed to <form onSubmit={handleSubmit}> or to
     * <button onClick={handleSubmit}>. It will run validation, both sync and
     * async, and, if the form is valid, it will call
     * this.props.onSubmit(data) with the contents of the form data.
     * Optionally, you may also pass your onSubmit function to handleSubmit
     * which will take the place of the onSubmit prop. For example: <form
     * onSubmit={handleSubmit(this.save.bind(this))}> If your onSubmit
     * function returns a promise, the submitting property will be set to true
     * until the promise has been resolved or rejected. If it is rejected with
     * an object matching { field1: 'error', field2: 'error' } then the
     * submission errors will be added to each field (to the error prop) just
     * like async validation errors are. If there is an error that is not
     * specific to any field, but applicable to the entire form, you may pass
     * that as if it were the error for a field called _error, and it will be
     * given as the error prop.
     */
    handleSubmit?(event: React.SyntheticEvent<T>): void;
    handleSubmit?(event: React.MouseEvent<HTMLButtonElement>): void;
    handleSubmit?(submit: (data: FormData, dispatch?: Dispatch<any>) => Promise<any> | void): React.FormEventHandler<T>;

    /**
     * Initializes the form data to the given values. All dirty and pristine
     * state will be determined by comparing the current data with these
     * initialized values.
     * @param data
     */
    initializeForm?(data: FormData): void;

    /**
     * true if the form has validation errors. Opposite of valid.
     */
    invalid?: boolean | undefined;

    /**
     * true if the form data is the same as its initialized values. Opposite
     * of dirty.
     */
    pristine?: boolean | undefined;

    /**
     * Resets all the values in the form to the initialized state, making it
     * pristine again.
     */
    resetForm?(): void;

    /**
     * The same formKey prop that was passed in. See Editing Multiple Records.
     */
    formKey?: string | undefined;

    /**
     * Whether or not your form is currently submitting. This prop will only
     * work if you have passed an onSubmit function that returns a promise. It
     * will be true until the promise is resolved or rejected.
     */
    submitting?: boolean | undefined;

    /**
     * Starts as false. If onSubmit is called, and fails to submit for any
     * reason, submitFailed will be set to true. A subsequent successful
     * submit will set it back to false.
     */
    submitFailed?: boolean | undefined;

    /**
     * Marks the given fields as "touched" to show errors.
     * @param field
     */
    touch?(...field: string[]): void;

    /**
     * Marks all fields as "touched" to show errors. This will automatically
     * happen on form submission.
     */
    touchAll?(): void;

    /**
     * Clears the "touched" flag for the given fields
     * @param field
     */
    untouch?(...field: string[]): void;

    /**
     * Clears the "touched" flag for the all fields
     */
    untouchAll?(): void;

    /**
     * true if the form passes validation (has no validation errors). Opposite
     * of invalid.
     */
    valid?: boolean | undefined;

    /**
     * All of your values in the form { field1: <string>, field2: <string> }.
     */
    values?: FormData | undefined;
}

declare class ElementClass extends React.Component<any> {
}
interface ClassDecorator {
    <T extends (typeof ElementClass)>(component: T): T;
}

interface MapStateToProps {
    (state: any, ownProps?: any): any;
}

interface MapDispatchToPropsFunction {
    (dispatch: Dispatch<any>, ownProps?: any): any;
}

interface MapDispatchToPropsObject {
    [name: string]: ActionCreator<any>;
}

export declare function reduxForm(
    config: ReduxFormConfig,
    mapStateToProps?: MapStateToProps,
    mapDispatchToProps?: MapDispatchToPropsFunction | MapDispatchToPropsObject,
): ClassDecorator;

export interface ReduxFormConfig {
    /**
     * a list of all your fields in your form. You may change these dynamically
     * at runtime.
     */
    fields: string[];

    /**
     * the name of your form and the key to where your form's state will be
     * mounted under the redux-form reducer
     */
    form: string;

    /**
     * By default, async blur validation is only triggered if synchronous
     * validation passes, and the form is dirty or was never initialized (or if
     * submitting). Sometimes it may be desirable to trigger asynchronous
     * validation even in these cases, for example if all validation is performed
     * asynchronously and you want to display validation messages if a user does
     * not change a field, but does touch and blur it. Setting
     * alwaysAsyncValidate to true will always run asynchronous validation on
     * blur, even if the form is pristine or sync validation fails.
     */
    alwaysAsyncValidate?: boolean | undefined;

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
    asyncValidate?(values: FormData, dispatch: Dispatch<any>, props: {}): Promise<any>;

    /**
     * Whether or not to automatically destroy your form's state in the Redux
     * store when your component is unmounted. Defaults to true.
     */
    destroyOnUnmount?: boolean | undefined;

    /**
     * The key for your sub-form.
     *
     * See Multirecord Example for more details.
     */
    formKey?: string | undefined;

    /**
     * A function that takes the entire Redux state and the reduxMountPoint
     * (which defaults to "form"). It defaults to:
     * (state, reduxMountPoint) => state[reduxMountPoint].
     * The only reason you should provide this is if you are keeping your Redux
     * state as something other than plain javascript objects, e.g. an
     * Immutable.Map.
     */
    getFormState?(state: any, reduxMountPoint: string): any;

    /**
     * The values with which to initialize your form in componentWillMount().
     * Particularly useful when Editing Multiple Records, but can also be used
     * with single-record forms. The values should be in the form
     * { field1: 'value1', field2: 'value2' }.
     */
    initialValues?: { [field: string]: FieldValue } | undefined;

    /**
     * The function to call with the form data when the handleSubmit() is fired
     * from within the form component. If you do not specify it as a prop here,
     * you must pass it as a parameter to handleSubmit() inside your form
     * component.
     */
    onSubmit?(values: FormData, dispatch?: Dispatch<any>): any;

    /**
     * If true, the form values will be overwritten whenever the initialValues
     * prop changes. If false, the values will not be overwritten if the form has
     * previously been initialized. Defaults to true.
     */
    overwriteOnInitialValuesChange?: boolean | undefined;

    /**
     * If specified, all the props normally passed into your decorated
     * component directly will be passed under the key specified. Useful if
     * using other decorator libraries on the same component to avoid prop
     * namespace collisions.
     */
    propNamespace?: string | undefined;

    /**
     * if true, the decorated component will not be passed any of the onX
     * functions as props that will allow it to mutate the state. Useful for
     * decorating another component that is not your form, but that needs to
     * know about the state of your form.
     */
    readonly?: boolean | undefined;

    /**
     * The use of this property is highly discouraged, but if you absolutely
     * need to mount your redux-form reducer at somewhere other than form in
     * your Redux state, you will need to specify the key you mounted it under
     * with this property. Defaults to 'form'.
     *
     * See Alternate Mount Point Example for more details.
     */
    reduxMountPoint?: string | undefined;

    /**
     * If set to true, a failed submit will return a rejected promise. Defaults
     * to false. Only use this if you need to detect submit failures and run
     * some code when a submit fails.
     */
    returnRejectedSubmitPromise?: boolean | undefined;

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
     * a synchronous validation function that takes the form values and props
     * passed into your component. If validation passes, it should return {}.
     * If validation fails, it should return the validation errors in the form
     * { field1: <String>, field2: <String> }.
     * Defaults to (values, props) => ({}).
     */
    validate?(values: FormData, props: { [fieldName: string]: FieldProp<any> }): {};
}

/**
 * @param value The current value of the field.
 * @param previousValue The previous value of the field before the current
 * action was dispatched.
 * @param allValues All the values of the current form.
 * @param previousAllValues All the values of the form before the current
 * change. Useful to change one field based on a change in another.
 */
export type Normalizer = (
    value: FieldValue,
    previousValue: FieldValue,
    allValues: FormData,
    previousAllValues: FormData,
) => any;

export declare const reducer: {
    (state: any, action: any): any;

    /**
     * Returns a form reducer that will also pass each form value through the
     * normalizing functions provided. The parameter is an object mapping from
     * formName to an object mapping from fieldName to a normalizer function.
     * The normalizer function is given four parameters and expected to return
     * the normalized value of the field.
     */
    normalize(normalizers: {
        [formName: string]: {
            [fieldName: string]: Normalizer;
        };
    }): Reducer<any>;

    /**
     * Returns a form reducer that will also pass each action through
     * additional reducers specified. The parameter should be an object mapping
     * from formName to a (state, action) => nextState reducer. The state
     * passed to each reducer will only be the slice that pertains to that
     * form.
     */
    plugin(reducers: { [formName: string]: Reducer<any> }): Reducer<any>;
};
