import { persistReducer, persistStore } from 'redux-persist';

import { createStore } from 'redux';

import expireReducer = require('redux-persist-expire');
const rootReducer = {};
const persistedReducers = persistReducer(
    {
        transforms: [
            expireReducer('preference', {
                persistedAtKey: '__persisted_at',
                expireSeconds: null,
                expiredState: {},
                autoExpire: false,
            }),
        ],
    },
    rootReducer,
);

export const store = createStore(persistedReducers);
export const persist = persistStore(store);
