import expireReducer = require('redux-persist-expire');

const reducers = expireReducer('preference', {
    persistedAtKey: '__persisted_at',
    expireSeconds: null,
    expiredState: {},
    autoExpire: false,
});
