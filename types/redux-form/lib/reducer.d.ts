import { Action, Reducer } from "redux";
import { FieldType } from "../index";

export interface FormReducer extends Reducer<FormStateMap> {
    plugin(reducers: FormReducerMapObject): Reducer<FormStateMap>;
}

export const reducer: FormReducer;

export interface FormReducerMapObject {
    [formName: string]: Reducer<any>;
}

export interface FormStateMap {
    [formName: string]: FormState;
}

export interface FormState {
    registeredFields: RegisteredFieldState[];
    fields?: {[name: string]: FieldState};
    values?: { [fieldName: string]: string };
    active?: string;
    anyTouched?: boolean;
    submitting?: boolean;
    submitErrors?: { [fieldName: string]: string };
    submitFailed?: boolean;
}

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}

export interface FieldState {
    active?: boolean;
    touched?: boolean;
    visited?: boolean;
}

export default reducer;
