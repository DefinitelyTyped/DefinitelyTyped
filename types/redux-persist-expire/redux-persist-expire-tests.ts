import expireReducer = require('redux-persist-expire');

expireReducer('preference', {
    persistedAtKey: '__persisted_at',
    expireSeconds: null,
    expiredState: {},
    autoExpire: false,
});
