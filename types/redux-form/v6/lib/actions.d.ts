import { Action } from "redux";
import { FormErrors, FormWarnings, FieldType } from "../index";

export interface FormAction extends Action {
    meta?: any;
    payload?: any;
    error?: any;
}

/**
 * Inserts an item into a field array at the specified index
 */
export function arrayInsert(form: string, field: string, index: number, value: any): FormAction;

/**
 * Moves an item from one index in the array to another. In effect, it performs a remove and an
 * insert, so the item already at the `to` position will be bumped to a higher index, not overwritten.
 */
export function arrayMove(form: string, field: string, from: number, to: number): FormAction;

/**
 * Removes an item from the end of a field array
 */
export function arrayPop(form: string, field: string): FormAction;

/**
 * Appends an item to the end of a field array
 */
export function arrayPush(form: string, field: string, value: any): FormAction;

/**
 * Removes an item at the specified index from a field array
 */
export function arrayRemove(form: string, field: string, index: number): FormAction;

/**
 * Removes all items from a field array
 */
export function arrayRemoveAll(form: string, field: string): FormAction;

/**
 * Removes an item from the beginning of a field array
 */
export function arrayShift(form: string, field: string): FormAction;

/**
 * ADVANCED USAGE - Inserts and/or removes items from a field array. Works similarly to Array.splice.
 */
export function arraySplice(form: string, field: string, index: number, removeNum: number, value: any): FormAction;

/**
 * Swaps two items at the specified indexes in a field array
 */
export function arraySwap(form: string, field: string, indexA: number, indexB: number): FormAction;

/**
 * Inserts an item at the beginning of a field array
 */
export function arrayUnshift(form: string, field: string, value: any): FormAction;

/**
 * Saves the value to the field and sets its `autofilled` property to `true`.
 */
export function autofill(form: string, field: string, value: any): FormAction;

/**
 * Saves the value to the field
 */
export function blur(form: string, field: string, value: any): FormAction;

/**
 * Saves the value to the field
 */
export function change(form: string, field: string, value: any): FormAction;

/**
 * Destroys the form, removing all it's state
 */
export function destroy(...form: string[]): FormAction;

/**
 * Marks the given field as active and visited
 */
export function focus(form: string, field: string): FormAction;

/**
 * Sets the initial values in the form with which future data values will be compared to calculate dirty and pristine.
 * The data parameter may contain deep nested array and object values that match the shape of your form fields.
 * If the keepDirty parameter is true, the values of the currently dirty fields will be retained to avoid overwriting
 * user edits.
 */
interface InitializeOptions {
    keepDirty: boolean;
    keepSubmitSucceeded: boolean;
}

export function initialize(form: string, data: any, keepDirty?: boolean | InitializeOptions, options?: InitializeOptions): FormAction;

/**
 * Registers a field with the form.
 */
export function registerField(form: string, name: string, type: FieldType): FormAction;

/**
 * Resets the values in the form back to the values past in with the most recent initialize action.
 */
export function reset(form: string): FormAction;

/**
 * Flips the asyncValidating flag true
 */
export function startAsyncValidation(form: string): FormAction;

/**
 * Flips the asyncValidating flag false and populates asyncError for each field.
 */
export function stopAsyncValidation(form: string, errors?: any): FormAction;

export function setSubmitFailed(form: string, ...fields: string[]): FormAction;

export function setSubmitSucceeded(form: string, ...fields: string[]): FormAction;

/**
 * Flips the submitting flag true.
 */
export function startSubmit(form: string): FormAction;

/**
 * Flips the submitting flag false and populates submitError for each field.
 */
export function stopSubmit(form: string, errors?: any): FormAction;

/**
 * Flips the asyncValidating flag false and populates asyncError for each field.
 */
export function stopAsyncValidation(form: string, errors?: any): FormAction;

/**
 * Triggers a submission of the specified form.
 */
export function submit(form: string): FormAction;

/**
 * Marks all the fields passed in as touched.
 */
export function touch(form: string, ...fields: string[]): FormAction;

/**
 * Unregisters a field with the form.
 */
export function unregisterField(form: string, name: string): FormAction;

/**
 * Resets the 'touched' flag for all the fields passed in.
 */
export function untouch(form: string, ...fields: string[]): FormAction;

export function updateSyncErrors(from: string, syncErrors: FormErrors<FormData>, error: any): FormAction;

export function updateSyncWarnings(form: string, syncWarnings: FormWarnings<FormData>, warning: any): FormAction;
