import { Action, Reducer } from "redux";
import { FieldType, FieldState } from "../index";

export interface FormReducer extends Reducer<FormStateMap> {
    /**
     * Returns a form reducer that will also pass each action through
     * additional reducers specified. The parameter should be an object mapping
     * from formName to a (state, action) => nextState reducer. The state
     * passed to each reducer will only be the slice that pertains to that
     * form.
     */
    plugin(reducers: FormReducerMapObject): Reducer<FormStateMap>;
}

export const reducer: FormReducer;

export interface FormReducerMapObject {
    [formName: string]: Reducer<any>;
}

/**
 * Store state
 */

export interface FormStateMap {
    [formName: string]: FormState;
}

export interface FormState {
    registeredFields: RegisteredFieldState[];
    fields?: {[name: string]: FieldState};
    values?: { [fieldName: string]: any };
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
