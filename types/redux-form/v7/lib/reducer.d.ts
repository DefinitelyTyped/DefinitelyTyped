import { Reducer } from "redux";
import { FieldType } from "../index";

export interface FormReducer extends Reducer<FormStateMap> {
    plugin(reducers: FormReducerMapObject): Reducer<FormStateMap>;
}

export const reducer: FormReducer;

export interface FormReducerMapObject {
    // and `<any>` to make it compatible with redux@3
    // tslint:disable-next-line use-default-type-parameter
    [formName: string]: Reducer<any>;
}

export interface FormStateMap {
    [formName: string]: FormState;
}

export interface FormState {
    registeredFields: RegisteredFieldState[];
    fields?: { [name: string]: FieldState } | undefined;
    values?: { [fieldName: string]: any } | undefined;
    active?: string | undefined;
    anyTouched?: boolean | undefined;
    submitting?: boolean | undefined;
    submitErrors?: { [fieldName: string]: string } | undefined;
    submitFailed?: boolean | undefined;
}

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}

export interface FieldState {
    active?: boolean | undefined;
    touched?: boolean | undefined;
    visited?: boolean | undefined;
}

export default reducer;
