import { createHistory } from "history";
import { routeReducer, syncHistory } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";

const reducer = combineReducers({ routing: routeReducer });

// Sync dispatched route actions to the history
const browserHistory = createHistory();
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to
reduxRouterMiddleware.listenForReplays(store);
