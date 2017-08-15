import { Component } from "react";
import { ComponentConstructor, Validator } from "../index";

/**
 * These are the props to give to `FieldArray`.
 * Any others will be passed through to your component.
 */
interface BaseFieldArrayProps {
    /**
     * A string path, in dot-and-bracket notation, corresponding to a value
     * in the form values. It may be as simple as 'firstName' or as complicated
     * as contact.billing.address[2].phones[1].areaCode.
     *
     * Required but made optional so interface can be used on decorated components.
     */
    name?: string;

    /**
     * A Component or stateless function to render the field array.
     *
     * Required but made optional so interface can be used on decorated components.
     */
    component?: ComponentConstructor<any>,

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

    props?: any;
}

/**
 * Declare FieldArray as this interface to specify the generics.
 */
export interface GenericFieldArray<T, FieldCustomProps> extends Component<BaseFieldArrayProps & FieldCustomProps> {

    /**
     * The name prop that you passed in.
     */
    name: string;

    /**
     * true if this field passes validation, false otherwise.
     */
    valid: boolean;

    /**
     * Returns the instance of the rendered component. For this to work, you must
     * provide a withRef prop, and your component must not be a stateless function
     * component.
     */
    getRenderedComponent(): Component<WrappedFieldArrayProps<T> & FieldCustomProps>;
}

/**
 * The FieldArray Instance API.
 */
export class FieldArray extends Component<any> implements GenericFieldArray<any, any> {

    /**
     * The name prop that you passed in.
     */
    name: string;

    /**
     * true if this field passes validation, false otherwise.
     */
    valid: boolean;

    /**
     * Returns the instance of the rendered component. For this to work, you must
     * provide a withRef prop, and your component must not be a stateless function
     * component.
     */
    getRenderedComponent(): Component<any>;
}

/**
 * These are props that `FieldArray` will pass to your wrapped component.
 */
interface WrappedFieldArrayProps<T> {
    fields: FieldsProps<T>;
    meta: FieldArrayMetaProps;
}

interface FieldsProps<T> {
    /**
     * A method to iterate over each value of the array.
     */
    forEach(callback: (name: string, index: number, fields: FieldsProps<T>) => void): void;

    /**
     * A method to get a single value from the array value.
     */
    get(index: number): T;

    /**
     * A method to get all the values in the array.
     */
    getAll(): T[];

    /**
     * A function to insert a new value into the array at any arbitrary index.
     */
    insert(index: number, value: T): void;

    /**
     * The current length of the array.
     */
    length: number;

    /**
     * A method to iterate over each value of the array. Returns an array of the
     * results of each call to the callback.
     */
    map(callback: (name: string, index: number, fields: FieldsProps<T>) => any): any;

    /**
     * Removes an item from the end of the array. Returns the item removed.
     */
    pop(): T;

    /**
     * Adds a value to the end of the array.
     */
    push(value: T): void;

    /**
     * Removes an item from the array at an arbitrary index.
     */
    remove(index: number): void;

    /**
     * Removes an item from beginning of the array. Returns the item removed.
     */
    shift(): T;

    /**
     * Swaps two items in the array at the given indexes.
     */
    swap(indexA: number, indexB: number): void;

    /**
     * Adds an item to the beginning of the array.
     */
    unshift(value: T): void;
}

interface FieldArrayMetaProps {
    /**
     * true if the any of the fields in the field array have changed from their
     * initialized value. Opposite of pristine.
     */
    dirty: boolean;

    /**
     * The error for this field array if its value is not passing validation. Both
     * synchronous, asynchronous, and submit validation errors will be reported here.
     * Array-specific errors should be returned from the validation function as an
     * _error key on the array.
     */
    error?: string;

    /**
     * Name of your form provided to `reduxForm()` as the `form` config property.
     */
    form: string;

    /**
     * true if the field array value fails validation (has a validation error).
     * Opposite of valid.
     */
    invalid: boolean;

    /**
     * true if the all of the fields in the field array are the same as their
     * initialized value. Opposite of dirty.
     */
    pristine: boolean;

    /**
     * true if any of the fields have been touched.
     */
    touched: boolean;

    /**
     * true if the field value passes validation (has no validation errors).
     * Opposite of invalid.
     */
    valid: boolean;

    /**
     * The warning for this field array if its values are not passing warning validation.
     * Array-specific errors should be returned from the validation function as an
     * `_warning` key on the array.
     */
    warning?: string;
}
