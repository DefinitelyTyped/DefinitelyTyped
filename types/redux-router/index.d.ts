import H = require("history");
import React = require("react");
import ReactRouter = require("react-router");
import Redux = require("redux");

import {
    go,
    goBack,
    goForward,
    historyAPI,
    push,
    pushState,
    replace,
    replaceState,
    setState,
} from "./lib/actionCreators";
import reduxReactRouter from "./lib/client";
import isActive from "./lib/isActive";
import ReduxRouter from "./lib/ReduxRouter";
import routerStateReducer from "./lib/routerStateReducer";

export {
    go,
    goBack,
    goForward,
    historyAPI,
    isActive,
    push,
    pushState,
    reduxReactRouter,
    ReduxRouter,
    replace,
    replaceState,
    routerStateReducer,
    setState,
};
