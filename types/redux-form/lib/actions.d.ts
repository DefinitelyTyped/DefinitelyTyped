import { Action } from "redux";
import { FormErrors, FormWarnings, FieldType } from "redux-form";

export interface FormAction extends Action {
    meta: {
        form: string;
    };
}

declare function arrayInsert(form: string, field: string, index: number, value: any): FormAction;
declare function arrayMove(form: string, field: string, from: number, to: number): FormAction;
declare function arrayPop(form: string, field: string): FormAction;
declare function arrayPush(form: string, field: string, value: any): FormAction;
declare function arrayRemove(form: string, field: string, index: number): FormAction;
declare function arrayRemoveAll(form: string, field: string): FormAction;
declare function arrayShift(form: string, field: string): FormAction;
declare function arraySplice(form: string, field: string, index: number, removeNum: number, value: any): FormAction;
declare function arraySwap(form: string, field: string, indexA: number, indexB: number): FormAction;
declare function arrayUnshift(form: string, field: string, value: any): FormAction;
declare function autofill(form: string, field: string, value: any): FormAction;
declare function blur(form: string, field: string, value: any): FormAction;
declare function change(form: string, field: string, value: any): FormAction;
declare function destroy(...form: string[]): FormAction;
declare function focus(form: string, field: string): FormAction;

interface InitializeOptions {
    keepDirty : boolean;
    keepSubmitSucceeded: boolean;
}

declare function initialize(form: string, data: any, keepDirty?: boolean | InitializeOptions, options?: InitializeOptions): FormAction;
declare function registerField(form: string, name: string, type: FieldType): FormAction;
declare function reset(form: string): FormAction;
declare function startAsyncValidation(form: string): FormAction;
declare function stopAsyncValidation(form: string, errors?: any): FormAction;
declare function setSubmitFailed(form: string, ...fields: string[]): FormAction;
declare function setSubmitSucceeded(form: string, ...fields: string[]): FormAction;
declare function startSubmit(form: string): FormAction;
declare function stopSubmit(form: string, errors?: any): FormAction;
declare function stopAsyncValidation(form: string, errors?: any): FormAction;
declare function submit(form: string): FormAction;
declare function touch(form: string, ...fields: string[]): FormAction;
declare function unregisterField(form: string, name: string): FormAction;
declare function untouch(form: string, ...fields: string[]): FormAction;
declare function updateSyncErrors(from: string, syncErrors: FormErrors<FormData>, error: any): FormAction;
declare function updateSyncWarnings(form: string, syncWarnings: FormWarnings<FormData>, warning: any): FormAction;
