/// <reference path="./react-router-redux.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react-router/react-router.d.ts" />



import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware, push, replace, go, goForward, goBack } from 'react-router-redux';

const reducer = combineReducers({ routing: routerReducer });

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory);
const store = createStore(
    reducer,
    applyMiddleware(middleware)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => console.log(location) );
history.unsubscribe();

// Dispatch from anywhere like normal.
store.dispatch(push('/foo'));
store.dispatch(replace('/foo'));
store.dispatch(go(1));
store.dispatch(goForward());
store.dispatch(goBack());
