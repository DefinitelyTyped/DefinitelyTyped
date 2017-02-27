import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createHistory } from 'history';
import {
    syncHistoryWithStore,
    routerReducer,
    routerMiddleware,
    push,
    replace,
    go,
    goForward,
    goBack,
    routerActions
} from 'react-router-redux';

const reducer = combineReducers({ routing: routerReducer });

// Apply the middleware to the store
const browserHistory = createHistory();
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
store.dispatch(routerActions.push('/foo'));
store.dispatch(routerActions.replace('/foo'));
store.dispatch(routerActions.go(1));
store.dispatch(routerActions.goForward());
store.dispatch(routerActions.goBack());
