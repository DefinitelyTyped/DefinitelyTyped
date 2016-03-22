/// <reference path="redux-promise.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../redux-actions/redux-actions.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

import {Promise} from 'es6-promise';
import {createAction} from 'redux-actions';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import PromiseInterface = ReduxPromise.PromiseInterface;

declare var userReducer: any;

const appStore = createStore(userReducer, applyMiddleware(
    promise
));


appStore.dispatch(
    listUsers()
);

function listUsers(): PromiseInterface {
    return createAction('LIST_USERS',
        () => {
            return Promise.resolve([{ email: 'me@definitely.typed' }]);
        });
}


