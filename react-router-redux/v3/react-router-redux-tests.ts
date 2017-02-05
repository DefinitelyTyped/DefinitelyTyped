import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistory, routeReducer } from 'react-router-redux';

const reducer = combineReducers({ routing: routeReducer });

// Sync dispatched route actions to the history
const browserHistory = createBrowserHistory()
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to
reduxRouterMiddleware.listenForReplays(store);
