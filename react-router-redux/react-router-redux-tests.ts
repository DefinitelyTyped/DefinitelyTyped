///<reference path="./react-router-redux.d.ts"/>
///<reference path="../react-router/react-router.d.ts"/>

import { createStore, combineReducers, applyMiddleware } from "redux";
import { syncHistory, routeReducer, routeActions } from "react-router-redux";
import { browserHistory } from "react-router";

const reducer = combineReducers({ routing: routeReducer });

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store);

routeActions.push("/foo");
routeActions.replace("/blah");
routeActions.go(5);
routeActions.goForward();
routeActions.goBack();
