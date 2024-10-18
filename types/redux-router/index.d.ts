import * as H from "history";
import * as React from "react";
import * as ReactRouter from "react-router";
import * as Redux from "redux";

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
