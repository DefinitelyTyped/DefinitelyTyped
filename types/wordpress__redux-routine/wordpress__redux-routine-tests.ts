import { createStore, applyMiddleware } from 'redux';
import createMiddleware from '@wordpress/redux-routine';

const middleware = createMiddleware({
    FOO: action => action.foo,
    BAR(action) {
        return action.bar;
    },
});

const store = createStore(state => state, applyMiddleware(middleware));
