import {
    Component,
    ReactElement,
    DragEventHandler,
    FocusEventHandler,
    FormEventHandler,
} from "react";
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
    component?: ComponentConstructor | "input" | "select" | "textarea",
    // component?: ComponentClass<P> | SFC<P> | "input" | "select" | "textarea",

    /**
     * A value to be used if the current value for this field is undefined in the
     * Redux Store. Defaults to '' to ensure that the input is controlled.
     */
    defaultValue?: FieldValue;

    /**
     * If true, the rendered component will be available with the
     * getRenderedComponent() method. Defaults to false. Cannot be used if your
     * component is a stateless function component.
     */
    withRef?: boolean;

    /**
     * Formats the value from the Redux store to be displayed in the field input.
     * Common use cases are to format Numbers into currencies or Dates into a
     * localized date format.
     */
    format?: Formatter;

    /**
     * A function to convert whatever value the user has entered into the value that you
     * want stored in the Redux store for the field.
     *
     * For instance, if you want the value to be in all uppercase, you would pass
     *   value => value.toUpperCase()
     */
    normalize?: Normalizer;

    props?: Object;

    /**
     * Parses the value given from the field input component to the type that you want
     * stored in the Redux store. Common use cases are to parse currencies into Numbers into
     * currencies or localized date formats into Dates.
     */
    parse?: Parser;
}

interface Normalizer {
    /**
     * @param value             The value entered by the user.
     * @param previousValue     The previous value for the field.
     * @param allValues         All the values in the entire form with the new value.
     *                          This will be an Immutable Map if you are using Immutable JS.
     * @param previousAllValues All the values in the entire form before the current change.
     *                          This will be an Immutable Map if you are using Immutable JS.
     */
    (value: FieldValue, previousValue?: FieldValue, allValues?: Object, previousAllValues?: Object): FieldValue;
}

interface Formatter {
    (value: FieldValue): FieldValue;
}

interface Parser {
    (value: FieldValue): FieldValue;
}

/**
 * Declare Field as this interface to specify the generic.
 */
export interface GenericField<FieldCustomProps> extends Component<BaseFieldProps & FieldCustomProps, {}> {
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
    getRenderedComponent(): Component<WrappedFieldProps & FieldCustomProps, any>;
}

/**
 * The Field Instance API.
 */
export class Field extends Component<any, {}> implements GenericField<any> {
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
    getRenderedComponent(): Component<any, any>;
}

/**
 * These are props that `Field` will pass to your wrapped component (not including custom props).
 */
interface WrappedFieldProps {
    /**
     * An object containing all the props that you will normally want to pass to
     * your input component.
     */
    input: WrappedFieldInputProps;

    /**
     * An object containing all the metadata props.
     */
    meta: WrappedFieldMetaProps;
}

/**
 * These props are meant to be destructured into your <input/> component.
 */
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
    onBlur: FocusEventHandler<any>;

    /**
     * A function to call when the form field is changed.
     */
    onChange: FormEventHandler<any>;

    /**
     * A function to call when the form field receives a 'dragStart' event.
     * Saves the field value in the event for giving the field it is dropped
     * into.
     */
    onDragStart: DragEventHandler<any>;

    /**
     * A function to call when the form field receives a drop event.
     */
    onDrop: DragEventHandler<any>;

    /**
     * A function to call when the form field receives focus.
     */
    onFocus: FocusEventHandler<any>;

    /**
     * The value of this form field. It will be a boolean for checkboxes, and
     * a string for all other input types. If there is no value in the Redux
     * state for this field, it will default to the defaultValue prop given to
     * Field. If no such defaultValue is specified, it will be ''. This is to
     * ensure that the input is controlled.
     */
    value: FieldValue;
}

/**
 * These props are metadata about the state of this field that redux-form is tracking for you.
 */
interface WrappedFieldMetaProps {

    /**
     * true if this field currently has focus. It will only work if you are
     * passing onFocus to your input element.
     */
    active?: boolean;

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
     * The error for this field if its value is not passing validation. Both
     * synchronous, asynchronous, and submit validation errors will be reported here.
     */
    error?: string;

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
}
