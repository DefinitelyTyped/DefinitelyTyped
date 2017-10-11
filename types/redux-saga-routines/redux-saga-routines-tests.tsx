import * as React from "react";
import { reduxForm } from "redux-form";
import createSagaMiddleware from "redux-saga";
import {
    bindRoutineToReduxForm,
    createRoutine,
    routinePromiseWatcherSaga,
    ROUTINE_PROMISE_ACTION
} from "redux-saga-routines";

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(routinePromiseWatcherSaga);

const submitFormRoutine = createRoutine("SUBMIT_MY_FORM");
const submitFormHandler = bindRoutineToReduxForm(submitFormRoutine);

const Test = reduxForm({
    form : "test"
})(
    ({ handleSubmit }) => {
        return (
            <form onSubmit={ handleSubmit(submitFormHandler) }>
                <input type="hidden" name="test" />
            </form>
        );
    }
);
