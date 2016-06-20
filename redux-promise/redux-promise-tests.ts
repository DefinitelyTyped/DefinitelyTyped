
/// <reference types="redux" />
/// <reference types="redux-actions" />

import {createAction} from 'redux-actions';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

declare var userReducer: any;

const appStore = createStore(userReducer, applyMiddleware(
    promise
));


appStore.dispatch(
    listUsers()
);

function listUsers() {
    return createAction('LIST_USERS',
        () => {
            return Promise.resolve([{ email: 'me@definitely.typed' }]);
        });
}


