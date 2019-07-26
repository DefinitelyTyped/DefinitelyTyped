// Type definitions for redux-form-saga 0.2
// Project: https://github.com/mhssmnn/redux-form-saga
// Definitions by: Sergey Zwezdin <https://github.com/sergeyzwezdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AnyAction } from 'redux';
import { Saga } from 'redux-saga';

export const PROMISE: string;

export function createFormAction(
    requestAction: string,
    types?: string[],
    payloadCreator?: (i: {}) => {}
): Promise<{}> & {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    request: (payload: {}) => AnyAction;
    success: (payload: {}) => AnyAction;
    failure: (payload: {}) => AnyAction;
};

export const handlePromiseSaga: Saga;

export const formActionSaga: Saga;
export default formActionSaga;
