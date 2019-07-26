import { createFormAction, formActionSaga } from 'redux-form-saga';
import { delay, put, take, takeLatest } from 'redux-saga/effects';

import createSagaMiddleware from 'redux-saga';

const action = createFormAction('test-form');

function* submitEditPresetSaga() {
    yield takeLatest(action.REQUEST, function*() {
        yield;
    });
}

const sagaMiddleware = createSagaMiddleware();

export const runSagas = () => {
    sagaMiddleware.run(formActionSaga);
};

runSagas();
