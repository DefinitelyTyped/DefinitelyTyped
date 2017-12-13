// Type definitions for redux-saga-routines 2.0
// Project: https://github.com/afitiskin/redux-saga-routines#readme
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Action } from "redux";
import { FormSubmitHandler } from "redux-form";

export const ROUTINE_PROMISE_ACTION: string;

export interface RoutineAction<T> extends Action {
    payload?: T;
}

export type RoutineActionCreator<T> = (payload?: T) => RoutineAction<T>;

export interface ReduxRoutine {
    TRIGGER: string;
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    FULFILL: string;
    trigger: RoutineActionCreator<any>;
    request: RoutineActionCreator<any>;
    success: RoutineActionCreator<any>;
    failure: RoutineActionCreator<any>;
    fulfill: RoutineActionCreator<any>;
}

export function createRoutine(prefix: string): ReduxRoutine;

export function routinePromiseWatcherSaga(): Iterator<any>;

export function bindRoutineToReduxForm(routine: ReduxRoutine): FormSubmitHandler;
