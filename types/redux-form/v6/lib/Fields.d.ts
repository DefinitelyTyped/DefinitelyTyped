import { Component } from "react";
import { ComponentConstructor, Formatter, Parser, FieldValue, WrappedFieldProps } from "../index";

/**
 * These are the props to give to `Field`.
 * Any others will be passed through to your component.
 */
interface BaseFieldsProps {
    /**
     * An array of strings (or the pseudo-array fields provided by FieldArray),
     * in dot-and-bracket notation, corresponding to form values.
     * They may be as simple as 'firstName' or as complicated as
     * 'contact.billing.address[2].phones[1].areaCode'.
     */
    names: string[];

    /**
     * A Component or stateless function that will be given all the props necessary
     * to render the field inputs.
     */
    component?: ComponentConstructor<any>;

    /**
     * Formats the value from the Redux store to be displayed in the field input.
     * Common use cases are to format Numbers into currencies or Dates into a localized date format.
     *
     * format is called with the field value and name as arguments and should return the new formatted
     * value to be displayed in the field input.
     *
     * To respect React 15 input behavior there is defaultFormat = value => value == null ? '' : value
     * internally used. To disable that you can pass null as format prop.
     */
    format?: Formatter | null;

    /**
     * Don't use.
     */
    props?: any;

    /**
     * Parses the value given from the field input component to the type that you want stored in the Redux store.
     * Common use cases are to parse currencies into Numbers into currencies or localized date formats into Dates.
     *
     * parse is called with the field value and name as arguments and should return the new parsed value to be
     * stored in the Redux store.
     */
    parse?: Parser;

    /**
     * If true, the rendered component will be available with the getRenderedComponent() method.
     * Defaults to false. Cannot be used if your component is a stateless function component.
     */
    withRef?: boolean;
}

/**
 * Declare Fields as this interface to specify the generics.
 */
export interface GenericFields<T, FieldsCustomProps> extends Component<BaseFieldsProps & FieldsCustomProps> {
    /**
     * true if the current value of any of the fields is different from the initialized value, false otherwise.
     */
    dirty: boolean;

    /**
     * The names prop that you passed in.
     */
    names: string[];

    /**
     * true if the all of the current values are the same as the initialized values, false otherwise.
     */
    pristine: boolean;

    /**
     * The current values of the fields. If they are nested, the values will duplicate the structure.
     * For example, if your names are [ 'name.first', 'name.last', 'email' ], the values will be
     * { name: { first: 'John', last: 'Smith' }, email: 'john@email.com' }
     */
    values: { [name: string]: FieldValue };

    getRenderedComponent(): Component<BaseFieldsProps & FieldsCustomProps>;
}

/**
 * The Fields Instance API.
 */
export class Fields extends Component<any> implements GenericFields<any, any> {
    /**
     * true if the current value of any of the fields is different from the initialized value, false otherwise.
     */
    dirty: boolean;

    /**
     * The names prop that you passed in.
     */
    names: string[];

    /**
     * true if the all of the current values are the same as the initialized values, false otherwise.
     */
    pristine: boolean;

    /**
     * The current values of the fields. If they are nested, the values will duplicate the structure.
     * For example, if your names are [ 'name.first', 'name.last', 'email' ], the values will be
     * { name: { first: 'John', last: 'Smith' }, email: 'john@email.com' }
     */
    values: { [name: string]: FieldValue };

    getRenderedComponent(): Component<any>;
}

interface WrappedFieldsProps<S> {
    [name: string]: WrappedFieldsProps<S> & WrappedFieldProps<S>;
}
