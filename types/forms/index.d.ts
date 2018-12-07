// Type definitions for forms 1.3
// Project: https://github.com/caolan/forms
// Definitions by: suXin <https://github.com/suXinjke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface FieldObjectChoice {
    [key: string]: string | FieldObjectChoice;
}

export interface FieldArrayChoice extends Array<[string, string | FieldArrayChoice]> {}

export interface FieldParameters {
    /** Optional label text which overrides the default. */
    label?: string;

    /** Boolean describing whether the field is mandatory. */
    required?: boolean | ValidatorFunction;

    /** An array of functions which validate the field data. */
    validators?: ValidatorFunction[];

    /** A widget object to use when rendering the field. */
    widget?: Widget;

    /** An optional id to override the default. */
    id?: string;

    /** A list of options, used for multiple choice fields. */
    choices?: FieldObjectChoice | FieldArrayChoice;

    /** A list of CSS classes for label and field wrapper. */
    cssClasses?: {
        field?: string[]
        label?: string[]
    };

    /** If true, errors won't be rendered automatically. */
    hideError?: boolean;

    /** If true, the label text will be displayed after the field, rather than before. */
    labelAfterField?: boolean;

    /** If true, the error message will be displayed after the field, rather than before. */
    errorAfterField?: boolean;

    /** For widgets with a fieldset (multipleRadio and multipleCheckbox), set classes for the fieldset. */
    fieldsetClasses?: string[];

    /** For widgets with a fieldset (multipleRadio and multipleCheckbox), set classes for the fieldset's legend. */
    legendClasses?: string[];
}

export type FieldIterator = (name: string, field: FieldBound) => string;

export interface Field extends FieldParameters {
    /** A widget object to use when rendering the field. */
    widget: Widget;

    /** Coerces the raw data from the request into the correct format for the field, returning the result, e.g. '123' becomes 123 for the number field. */
    parse: (rawData: any) => any;

    /** Returns a new bound field object. Calls parse on the data and stores in the bound field's data attribute, stores the raw value in the value attribute. */
    bind: (rawData: any) => FieldBound;

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
}

export interface FieldBound extends Field {
    /** The raw value from the request data. */
    value: any;

    /** The request data coerced to the correct format for this field. */
    data: any;

    /** An error message if the field fails validation. */
    error: string;

    /**
     * Checks if the field is required and whether it is empty. Then runs the validator functions in order until one fails or they all pass.
     * If a validator fails, the resulting message is stored in the field's error attribute.
     */
    validate: (form: Form, callback: (err: string, field: Field) => void) => void;
}

export interface Widget extends WidgetParameters {
    formatValue: (value: any) => any;

    /** Returns a string containing a HTML representation of the widget for the given field. */
    toHTML: (name: string, field?: Field) => string;
}

export interface WidgetParameters {
    /** Custom classes to add to the rendered widget. */
    classes?: string[];

    /** Custom classes to add to the choices label when applicable (multipleRadio and multipleCheckbox) */
    labelClasses?: string[];

    /** A string representing the widget type, e.g. 'text' or 'checkbox' */
    type?: string;
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

export type FormHandleCallback = (form: Form) => void;

export interface Form {
    /** Field objects this form was created with */
    fields: FormFields;

    /** Inspects a request or object literal and binds any data to the correct fields. */
    handle: (
        req: {
            method: string,
            url: string
            body: string
        },
        callbacks: {
            success?: FormHandleCallback
            error?: FormHandleCallback
            empty?: FormHandleCallback
            other?: FormHandleCallback
        }
    ) => void;

    /** Binds data to correct fields, returning a new bound form object. */
    bind: (data: any) => FormBound;

    /**
     * Runs toHTML on each field returning the result.
     * If an iterator is specified, it is called for each field with the field name and object as it's arguments,
     * the iterator's results are concatenated to create the HTML output, allowing for highly customised markup.
     */
    toHTML: (iterator?: FieldIterator) => string;
}

export interface FormBound extends Form {
    /** Object containing all the parsed data keyed by field name. */
    data: any;

    /** Calls validate on each field in the bound form and returns the resulting form object to the callback. */
    validate: (callback: (err: string, form: FormBound) => void) => void;

    /** Checks all fields for an error attribute. Returns false if any exist, otherwise returns true. */
    isValid: () => boolean;
}

/** Converts a form definition (an object literal containing field objects) into a form object. */
export function create(fields: FormFields, options?: {
    /** If false, the first validation error will halt form validation, otherwise all fields will be validated. */
    validatePastFirstError?: boolean
}): Form;

export namespace fields {
    function array(params?: FieldParameters): Field;
    function boolean(params?: FieldParameters): Field;
    function date(params?: FieldParameters): Field;
    function email(params?: FieldParameters): Field;
    function number(params?: FieldParameters): Field;
    function password(params?: FieldParameters): Field;
    function string(params?: FieldParameters): Field;
    function tel(params?: FieldParameters): Field;
    function url(params?: FieldParameters): Field;
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
    function textarea(params?: WidgetParameters & { rows?: number, cols?: number }): Widget;
}

/** A function which accepts a name and field as arguments and returns a string containing a HTML representation of the field. */
export type RenderFunction = (name: string, field: Field) => string;

export namespace render {
    const div: RenderFunction;
    const p: RenderFunction;
    const li: RenderFunction;
    const table: RenderFunction;
}
