import {
    Component,
    ReactElement,
    ChangeEvent,
    DragEvent,
    FocusEvent
} from "react";
import { Dispatch } from "redux";
import { ComponentConstructor, DataShape, FieldValue } from "../index";

/**
 * These are the props to give to `Field`.
 * Any others will be passed through to your component.
 */
interface BaseFieldProps {
    /**
     * A string path, in dot-and-bracket notation, corresponding to a value
     * in the form values. It may be as simple as 'firstName' or as complicated
     * as contact.billing.address[2].phones[1].areaCode.
     *
     * Required but made optional so interface can be used on decorated components.
     */
    name?: string;

    /**
     * A Component, stateless function, or string corresponding to a default
     * JSX element.
     *
     * Required but made optional so interface can be used on decorated components.
     */
    component?: ComponentConstructor<any> | "input" | "select" | "textarea",

    /**
     * Formats the value from the Redux store to be displayed in the field input.
     * Common use cases are to format Numbers into currencies or Dates into a
     * localized date format.
     */
    format?: Formatter | null;

    /**
     * A function to convert whatever value the user has entered into the value that you
     * want stored in the Redux store for the field.
     *
     * For instance, if you want the value to be in all uppercase, you would pass
     *   value => value.toUpperCase()
     */
    normalize?: Normalizer;

    /**
     * Don't use.
     */
    props?: any;

    /**
     * Parses the value given from the field input component to the type that you want
     * stored in the Redux store. Common use cases are to parse currencies into Numbers into
     * currencies or localized date formats into Dates.
     */
    parse?: Parser;

    /**
     * Allows you to to provide a field-level validation rule. The function will be given the
     * current value of the field and all the other form values. If the field is valid, it
     * should return `undefined`, if the field is invalid, it should return an error
     * (usually, but not necessarily, a `String`).
     */
    validate?: Validator | Validator[];

    /**
     * Allows you to to provide a field-level warning rule. The function will be given the
     * current value of the field and all the other form values. If the field needs a warning,
     * it should return the warning (usually, but not necessarily, a `String`). If the field
     * does not need a warning, it should return `undefined`.
     */
    warn?: Validator | Validator[];

    /**
     * If true, the rendered component will be available with the
     * getRenderedComponent() method. Defaults to false. Cannot be used if your
     * component is a stateless function component.
     */
    withRef?: boolean;
}

/**
 * @param value             The value entered by the user.
 * @param previousValue     The previous value for the field.
 * @param allValues         All the values in the entire form with the new value.
 *                          This will be an Immutable Map if you are using Immutable JS.
 * @param previousAllValues All the values in the entire form before the current change.
 *                          This will be an Immutable Map if you are using Immutable JS.
 */
export type Normalizer = (value: FieldValue, previousValue?: FieldValue, allValues?: any, previousAllValues?: any) => FieldValue;

export type Formatter = (value: FieldValue, name: string) => FieldValue;

export type Parser = (value: FieldValue, name: string) => FieldValue;

export type Validator = (value: FieldValue, allValues?: any, props?: any) => any;

/**
 * Declare Field as this interface to specify the generic.
 */
export interface GenericField<FieldCustomProps, S> extends Component<BaseFieldProps & FieldCustomProps> {
    /**
     * true if the current value is different from the initialized value,
     * false otherwise.
     */
    dirty: boolean;

    /**
     * The name prop that you passed in.
     */
    name: string;

    /**
     * true if the current value is the same as the initialized value,
     * false otherwise.
     */
    pristine: boolean;

    /**
     * The current value of the field.
     */
    value: FieldValue;

    /**
     * Returns the instance of the rendered component. For this to work, you must
     * provide a withRef prop, and your component must not be a stateless function
     * component.
     */
    getRenderedComponent(): Component<WrappedFieldProps<S> & FieldCustomProps>;
}

/**
 * The Field Instance API.
 */
export class Field extends Component<any> implements GenericField<any, any> {
    /**
     * true if the current value is different from the initialized value,
     * false otherwise.
     */
    dirty: boolean;

    /**
     * The name prop that you passed in.
     */
    name: string;

    /**
     * true if the current value is the same as the initialized value,
     * false otherwise.
     */
    pristine: boolean;

    /**
     * The current value of the field.
     */
    value: FieldValue;

    /**
     * Returns the instance of the rendered component. For this to work, you must
     * provide a withRef prop, and your component must not be a stateless function
     * component.
     */
    getRenderedComponent(): Component<any>;
}

/**
 * These are props that `Field` will pass to your wrapped component (not including custom props).
 */
interface WrappedFieldProps<S> {
    /**
     * An object containing all the props that you will normally want to pass to
     * your input component.
     */
    input?: WrappedFieldInputProps;

    /**
     * An object containing all the metadata props.
     */
    meta: WrappedFieldMetaProps<S>;
}

/**
 * These props are meant to be destructured into your <input/> component.
 */
interface EventOrValueHandler<Event> {
    (event: Event): void;
    (value: FieldValue, newValue: FieldValue, previousValue: FieldValue): void;
}

interface WrappedFieldInputProps {
    /**
     * An alias for value only when value is a boolean. Provided for
     * convenience of destructuring the whole field object into the props of a
     * form element.
     */
    checked?: boolean;

    /**
     * The name prop passed in.
     */
    name: string;

    /**
     * A function to call when the form field loses focus.
     */
    onBlur: EventOrValueHandler<FocusEvent<any>>;

    /**
     * A function to call when the form field is changed.
     */
    onChange: EventOrValueHandler<ChangeEvent<any>>;

    /**
     * A function to call when the form field receives a 'dragStart' event.
     * Saves the field value in the event for giving the field it is dropped
     * into.
     */
    onDragStart: EventOrValueHandler<DragEvent<any>>;

    /**
     * A function to call when the form field receives a drop event.
     */
    onDrop: EventOrValueHandler<DragEvent<any>>;

    /**
     * A function to call when the form field receives focus.
     */
    onFocus: EventOrValueHandler<FocusEvent<any>>;

    /**
     * The value of this form field. It will be a boolean for checkboxes, and
     * a string for all other input types. If there is no value in the Redux
     * state for this field, it will default to ''. This is to
     * ensure that the input is controlled.
     */
    value: FieldValue;
}

/**
 * These props are metadata about the state of this field that redux-form is tracking for you.
 */
interface WrappedFieldMetaProps<S> {

    /**
     * true if this field currently has focus. It will only work if you are
     * passing onFocus to your input element.
     */
    active?: boolean;

    /**
     * true if this field has been set with the AUTOFILL action and has not since been changed
     * with a CHANGE action. This is useful to render the field in a way that the user can tell
     * that the value was autofilled for them.
     */
    autofilled: boolean;

    /**
     * true if the form is currently running asynchronous validation because this
     * field was blurred.
     */
    asyncValidating: boolean;

    /**
     * true if the field value has changed from its initialized value.
     * Opposite of pristine.
     */
    dirty: boolean;

    /**
     * The Redux dispatch function.
     */
    dispatch: Dispatch<S>;

    /**
     * The error for this field if its value is not passing validation. Both
     * synchronous, asynchronous, and submit validation errors will be reported here.
     */
    error?: string;

    /**
     * The name of the form. Could be useful if you want to manually dispatch actions.
     */
    form?: string;

    /**
     * true if the field value fails validation (has a validation error).
     * Opposite of valid.
     */
    invalid: boolean;

    /**
     * true if the field value is the same as its initialized value. Opposite
     * of dirty.
     */
    pristine: boolean;

    /**
     * true if the field is currently being submitted
     */
    submitting?: boolean;

    /**
     * true if the form had onSubmit called and failed to submit for any reason.
     * A subsequent successful submit will set it back to false.
     */
    submitFailed?: boolean;

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
     * true if this field has ever had focus. It will only work if you are
     * passing onFocus to your input element.
     */
    visited?: boolean;

    /**
     * The warning for this field if its value is not passing warning validation.
     */
    warning?: string;
}
