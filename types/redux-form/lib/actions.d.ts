import { Action } from "redux";
import { FormErrors, FormWarnings, FieldType } from "redux-form";

export interface FormAction extends Action {
    meta: {
        form: string;
    };
}

export declare function arrayInsert(form: string, field: string, index: number, value: any): FormAction;
export declare function arrayMove(form: string, field: string, from: number, to: number): FormAction;
export declare function arrayPop(form: string, field: string): FormAction;
export declare function arrayPush(form: string, field: string, value: any): FormAction;
export declare function arrayRemove(form: string, field: string, index: number): FormAction;
export declare function arrayRemoveAll(form: string, field: string): FormAction;
export declare function arrayShift(form: string, field: string): FormAction;
export declare function arraySplice(form: string, field: string, index: number, removeNum: number, value: any): FormAction;
export declare function arraySwap(form: string, field: string, indexA: number, indexB: number): FormAction;
export declare function arrayUnshift(form: string, field: string, value: any): FormAction;
export declare function autofill(form: string, field: string, value: any): FormAction;
export declare function blur(form: string, field: string, value: any): FormAction;
export declare function change(form: string, field: string, value: any): FormAction;
export declare function destroy(...form: string[]): FormAction;
export declare function focus(form: string, field: string): FormAction;

export interface InitializeOptions {
    keepDirty : boolean;
    keepSubmitSucceeded: boolean;
}

export declare function initialize(form: string, data: any, keepDirty?: boolean | InitializeOptions, options?: InitializeOptions): FormAction;
export declare function registerField(form: string, name: string, type: FieldType): FormAction;
export declare function reset(form: string): FormAction;
export declare function startAsyncValidation(form: string): FormAction;
export declare function stopAsyncValidation(form: string, errors?: any): FormAction;
export declare function setSubmitFailed(form: string, ...fields: string[]): FormAction;
export declare function setSubmitSucceeded(form: string, ...fields: string[]): FormAction;
export declare function startSubmit(form: string): FormAction;
export declare function stopSubmit(form: string, errors?: any): FormAction;
export declare function submit(form: string): FormAction;
export declare function clearSubmit(form: string): FormAction;
export declare function clearSubmitErrors(form: string): FormAction;
export declare function clearAsyncError(form: string, field: string): FormAction;
export declare function touch(form: string, ...fields: string[]): FormAction;
export declare function unregisterField(form: string, name: string): FormAction;
export declare function untouch(form: string, ...fields: string[]): FormAction;
export declare function updateSyncErrors(from: string, syncErrors: FormErrors<FormData>, error: any): FormAction;
export declare function updateSyncWarnings(form: string, syncWarnings: FormWarnings<FormData>, warning: any): FormAction;

declare const actions: {
    arrayInsert: typeof arrayInsert,
    arrayMove: typeof arrayMove,
    arrayPop: typeof arrayPop,
    arrayPush: typeof arrayPush,
    arrayRemove: typeof arrayRemove,
    arrayRemoveAll: typeof arrayRemoveAll,
    arrayShift: typeof arrayShift,
    arraySplice: typeof arraySplice,
    arraySwap: typeof arraySwap,
    arrayUnshift: typeof arrayUnshift,
    autofill: typeof autofill,
    blur: typeof blur,
    change: typeof change,
    clearSubmit: typeof clearSubmit,
    clearSubmitErrors: typeof clearSubmitErrors,
    clearAsyncError: typeof clearAsyncError,
    destroy: typeof destroy,
    focus: typeof focus,
    initialize: typeof initialize,
    registerField: typeof registerField,
    reset: typeof reset,
    startAsyncValidation: typeof startAsyncValidation,
    startSubmit: typeof startSubmit,
    stopAsyncValidation: typeof stopAsyncValidation,
    stopSubmit: typeof stopSubmit,
    submit: typeof submit,
    setSubmitFailed: typeof setSubmitFailed,
    setSubmitSucceeded: typeof setSubmitSucceeded,
    touch: typeof touch,
    unregisterField: typeof unregisterField,
    untouch: typeof untouch,
    updateSyncErrors: typeof updateSyncErrors,
    updateSyncWarnings: typeof updateSyncWarnings
};

export default actions;
