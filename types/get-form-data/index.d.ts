export interface Options {
    /**
     * if `true`, disabled inputs will not be ignored.
     *
     * @default false
     */
    includeDisabled?: boolean | undefined;

    /**
     * if `true`, leading and trailing whitespace will be trimmed from user input in text entry form
     * inputs.
     *
     * @default false
     */
    trim?: boolean | undefined;
}

export type Value = boolean | string | string[] | File | File[];

/**
 * Extracts data from a `<form>`'s `.elements` collection - in order to use `.elements`, form inputs
 * must have `name` or `id` attributes. Since multiple inputs can't have the same `id` and a `name`
 * allows an input to qualify as a successful control for form submission, `name` attributes are
 * preferred and will be given priority if both are present.
 *
 * @returns
 *   Properties in the returned data object are mostly consistent with what would have been sent as
 *   request parameters if the form had been submitted:
 *
 *   * Disabled inputs are ignored by default.
 *   * Text inputs will always contribute a value, which will be `''` if they are empty.
 *   * Checkbox inputs will only contribute a value if they are checked, in which case their `value`
 *     attribute will be used.
 *   * Form elements which represent multiple values (select-multiple, or multiple inputs with the
 *     same name, file inputs with `multiple`) will only contribute a value if they have at least one
 *     value to submit. Their values will always be held in an `Array`, even if there is only one.
 *
 *   Exceptions to this are:
 *
 *   * If a checked checkbox doesn't have a `value` attribute, its value will be `true`. Normally it
 *     would default to `'on'` when submitted, but this isn't as useful a default on the client.
 *   * Buttons are completely ignored, as it's only possible to determine which button counts as
 *     successful after it's been used to submit the form.
 */
declare function getFormData(form: HTMLFormElement, options?: Options): Record<string, Value>;
declare namespace getFormData {
    export { getFieldData };
}
export default getFormData;

/**
 * Extracts data for a named field from a  `<form>`'s `.elements` collection.
 *
 * Options are as documented for {@link getFormData}.
 *
 * @returns
 *   This function is used by {@link getFormData}, so the documentation for individual return values
 *   above also applies.
 *
 *   `null` will be returned if the field is non-existent, disabled, or shouldn't contribute a value
 *   (e.g. unchecked checkboxes, multiple selects with no selections, file inputs with no selections).
 */
export function getFieldData(form: HTMLFormElement, fieldName: string, options?: Options): Value | null;
