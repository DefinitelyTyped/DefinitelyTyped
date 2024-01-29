/// <reference types="node"/>

import { IncomingMessage } from "http";

export interface FieldObjectChoice {
    [key: string]: string | FieldObjectChoice;
}

export interface FieldArrayChoice extends Array<[string, string | FieldArrayChoice]> {}

export interface FieldParameters {
    /** Optional label text which overrides the default. */
    label?: string | undefined;

    /** Boolean describing whether the field is mandatory. */
    required?: boolean | ValidatorFunction | undefined;

    /** An array of functions which validate the field data. */
    validators?: ValidatorFunction[] | undefined;

    /** A widget object to use when rendering the field. */
    widget?: Widget | undefined;

    /** An optional id to override the default. */
    id?: string | undefined;

    /** A list of options, used for multiple choice fields. */
    choices?: FieldObjectChoice | FieldArrayChoice | undefined;

    /** A list of CSS classes for label and field wrapper. */
    cssClasses?: {
        field?: string[] | undefined;
        label?: string[] | undefined;
    } | undefined;

    /** If true, errors won't be rendered automatically. */
    hideError?: boolean | undefined;

    /** If true, the label text will be displayed after the field, rather than before. */
    labelAfterField?: boolean | undefined;

    /** If true, the error message will be displayed after the field, rather than before. */
    errorAfterField?: boolean | undefined;

    /** For widgets with a fieldset (multipleRadio and multipleCheckbox), set classes for the fieldset. */
    fieldsetClasses?: string[] | undefined;

    /** For widgets with a fieldset (multipleRadio and multipleCheckbox), set classes for the fieldset's legend. */
    legendClasses?: string[] | undefined;
}

export type FieldIterator = (name: string, field: FieldBound) => string;

export type Field<Data = unknown> = FieldParameters & {
    /** A widget object to use when rendering the field. */
    widget: Widget;

    /** Coerces the raw data from the request into the correct format for the field, returning the result, e.g. '123' becomes 123 for the number field. */
    parse: (rawData: unknown) => Data;

    /** Returns a new bound field object. Calls parse on the data and stores in the bound field's data attribute, stores the raw value in the value attribute. */
    bind: <RawData = unknown>(rawData: RawData) => FieldBound<Data, RawData>;

    /** Returns a string containing a HTML element containing the fields error message, or an empty string if there is no error associated with the field. */
    errorHTML: () => string;

    /** Returns a string containing the label text from field.label, or defaults to using the field name with underscores replaced with spaces and the first letter capitalised. */
    labelText: (name?: string) => string;

    /** Returns a string containing a label element with the correct 'for' attribute containing the text from field.labelText(name). */
    labelHTML: (name: string, id?: string | boolean) => string;

    /** Returns an array of default CSS classes considering the field's attributes, e.g. ['field', 'required', 'error'] for a required field with an error message. */
    classes: () => string[];

    /**
     * Calls the iterator with the name and field object as arguments. Defaults to using forms.render.div as the iterator,
     * which returns a HTML representation of the field label, error message and widget wrapped in a div.
     */
    toHTML: (name?: string, iterator?: FieldIterator) => string;
};

export type FieldBound<Data = unknown, RawData = unknown> = Field<Data> & {
    /** The raw value from the request data. */
    value: RawData;

    /** The request data coerced to the correct format for this field. */
    data: Data;

    /** An error message if the field fails validation. */
    error: string;

    /**
     * Checks if the field is required and whether it is empty. Then runs the validator functions in order until one fails or they all pass.
     * If a validator fails, the resulting message is stored in the field's error attribute.
     */
    validate: (form: Form, callback: (err: string, field: Field) => void) => void;
};

export interface Widget extends WidgetParameters {
    formatValue: (value: any) => any;

    /** Returns a string containing a HTML representation of the widget for the given field. */
    toHTML: (name: string, field?: Field) => string;
}

export interface WidgetParameters {
    /** Custom classes to add to the rendered widget. */
    classes?: string[] | undefined;

    /** Custom classes to add to the choices label when applicable (multipleRadio and multipleCheckbox) */
    labelClasses?: string[] | undefined;

    /** A string representing the widget type, e.g. 'text' or 'checkbox' */
    type?: string | undefined;
}

/**
 * A function that accepts a bound form, bound field and a callback as arguments.
 * It should apply a test to the field to assert its validity.
 * Once processing has completed it must call the callback with no arguments if the field is valid or with an error message if the field is invalid.
 */
export type ValidatorFunction = (form: FormBound, field: FieldBound, callback: (err?: string) => void) => void;

export interface FormFields {
    [key: string]: Field | FormFields;
}

export type FormHandleCallback<
    Fields extends FormFields = FormFields,
    Data extends (IncomingMessage | (Partial<FormData<Fields>> & { [key: string]: unknown })) = FormData<Fields>,
> = (form: FormBound<Fields, Data extends IncomingMessage ? FormData<Fields> : Data>) => void;

export type FormData<Fields extends FormFields = FormFields> = {
    [Key in keyof Fields]: Fields[Key] extends Field ? ReturnType<Fields[Key]["parse"]>
        : never;
};

export interface Form<Fields extends FormFields = FormFields> {
    /** Field objects this form was created with */
    fields: Fields;

    /** Inspects a request or object literal and binds any data to the correct fields. */
    handle: <Data extends IncomingMessage | (Partial<FormData<Fields>> & { [key: string]: unknown })>(
        req: Data | undefined,
        callbacks: {
            success?: FormHandleCallback<Fields, Data> | undefined;
            error?: FormHandleCallback<Fields, Data> | undefined;
            empty?: FormHandleCallback<Fields, Data> | undefined;
        },
    ) => void;

    /** Binds data to correct fields, returning a new bound form object. */
    bind: <Data extends Partial<FormData<Fields>>>(
        data: (Data & { [key: string]: unknown }) | null | undefined,
    ) => FormBound<Fields, Data>;

    /**
     * Runs toHTML on each field returning the result.
     * If an iterator is specified, it is called for each field with the field name and object as it's arguments,
     * the iterator's results are concatenated to create the HTML output, allowing for highly customised markup.
     */
    toHTML: (iterator?: FieldIterator) => string;
}

export interface FormBound<Fields extends FormFields = any, Data extends Partial<FormData<Fields>> = FormData<Fields>> {
    /** Object containing all the parsed data keyed by field name. */
    data: FormData<Fields> & Data;

    /** Calls validate on each field in the bound form and returns the resulting form object to the callback. */
    validate: (callback: (err: string, form: FormBound<Fields, Data>) => void) => void;

    /** Checks all fields for an error attribute. Returns false if any exist, otherwise returns true. */
    isValid: () => boolean;
}

/** Converts a form definition (an object literal containing field objects) into a form object. */
export function create<Fields extends FormFields = FormFields>(fields: Fields, options?: {
    /** If false, the first validation error will halt form validation, otherwise all fields will be validated. */
    validatePastFirstError?: boolean | undefined;
}): Form<Fields>;

export namespace fields {
    function array(params?: FieldParameters): Field<unknown[]>;
    function boolean(params?: FieldParameters): Field<boolean>;
    function date(params?: FieldParameters): Field<string>;
    function email(params?: FieldParameters): Field<string>;
    function number(params?: FieldParameters): Field<number>;
    function password(params?: FieldParameters): Field<string>;
    function string(params?: FieldParameters): Field<string>;
    function tel(params?: FieldParameters): Field<string>;
    function url(params?: FieldParameters): Field<string>;
}

export namespace validators {
    function alphanumeric(errorMessage?: string): ValidatorFunction;
    function color(errorMessage?: string): ValidatorFunction;
    function date(errorMessage?: string): ValidatorFunction;
    function digits(errorMessage?: string): ValidatorFunction;
    function integer(errorMessage?: string): ValidatorFunction;
    function email(errorMessage?: string): ValidatorFunction;
    function matchField(matchedField: string, errorMessage?: string): ValidatorFunction;
    function matchValue(valueGetter: () => any, errorMessage?: string): ValidatorFunction;
    function max(value: number, errorMessage?: string): ValidatorFunction;
    function maxlength(value: number, errorMessage?: string): ValidatorFunction;
    function min(value: number, errorMessage?: string): ValidatorFunction;
    function minlength(value: number, errorMessage?: string): ValidatorFunction;
    function range(min: number, max: number, errorMessage?: string): ValidatorFunction;
    function rangelength(min: number, max: number, errorMessage?: string): ValidatorFunction;
    function regexp(regexp: RegExp, errorMessage?: string): ValidatorFunction;
    function required(errorMessage?: string): ValidatorFunction;
    function requiresFieldIfEmpty(alternateField: string, errorMessage?: string): ValidatorFunction;
    function url(errorMessage?: string): ValidatorFunction;
}

export namespace widgets {
    function checkbox(params?: WidgetParameters): Widget;
    function color(params?: WidgetParameters): Widget;
    function date(params?: WidgetParameters): Widget;
    function email(params?: WidgetParameters): Widget;
    function hidden(params?: WidgetParameters): Widget;
    function number(params?: WidgetParameters): Widget;
    function label(params?: WidgetParameters): Widget;
    function multipleCheckbox(params?: WidgetParameters): Widget;
    function multipleRadio(params?: WidgetParameters): Widget;
    function multipleSelect(params?: WidgetParameters): Widget;
    function password(params?: WidgetParameters): Widget;
    function select(params?: WidgetParameters): Widget;
    function tel(params?: WidgetParameters): Widget;
    function text(params?: WidgetParameters): Widget;
    function textarea(params?: WidgetParameters & { rows?: number | undefined; cols?: number | undefined }): Widget;
}

/** A function which accepts a name and field as arguments and returns a string containing a HTML representation of the field. */
export type RenderFunction = (name: string, field: Field) => string;

export namespace render {
    const div: RenderFunction;
    const p: RenderFunction;
    const li: RenderFunction;
    const table: RenderFunction;
}
