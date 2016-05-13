// Type definitions for react-router v2.0.0
// Project: https://github.com/rackt/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Yuichi Murata <https://github.com/mrk21>, Václav Ostrožlík <https://github.com/vasek17>, Nathan Brown <https://github.com/ngbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ReactRouter;

import * as React from 'react';

import Router from "./lib/Router";
import Link from "./lib/Link";
import IndexLink from "./lib/IndexLink";
import IndexRedirect from "./lib/IndexRedirect";
import IndexRoute from "./lib/IndexRoute";
import Redirect from "./lib/Redirect";
import Route from "./lib/Route";
import * as History from "./lib/History";
import Lifecycle from "./lib/Lifecycle";
import RouteContext from "./lib/RouteContext";
import browserHistory from "./lib/browserHistory";
import hashHistory from "./lib/hashHistory";
import useRoutes from "./lib/useRoutes";
import { createRoutes } from "./lib/RouteUtils";
import { formatPattern } from "./lib/PatternUtils";
import RouterContext from "./lib/RouterContext";
import PropTypes from "./lib/PropTypes";
import match from "./lib/match";
import useRouterHistory from "./lib/useRouterHistory";
import createMemoryHistory from "./lib/createMemoryHistory";

// PlainRoute is defined in the API documented at:
// https://github.com/rackt/react-router/blob/master/docs/API.md
// but not included in any of the .../lib modules above.
export type PlainRoute = Router.PlainRoute;

// The following definitions are also very useful to export
// because by using these types lots of potential type errors
// can be exposed:
export type EnterHook = Router.EnterHook;
export type LeaveHook = Router.LeaveHook;
export type ParseQueryString = Router.ParseQueryString;
export type RedirectFunction = Router.RedirectFunction;
export type RouteComponentProps<P,R> = Router.RouteComponentProps<P,R>;
export type RouteHook = Router.RouteHook;
export type StringifyQuery = Router.StringifyQuery;
export type RouterListener = Router.RouterListener;
export type RouterState = Router.RouterState;
export type HistoryBase = History.HistoryBase;
export type RouterOnContext = Router.RouterOnContext;
export type LinkProps = Link.LinkProps;

export {
    Router,
    Link,
    IndexLink,
    IndexRedirect,
    IndexRoute,
    Redirect,
    Route,
    History,
    browserHistory,
    hashHistory,
    Lifecycle,
    RouteContext,
    useRoutes,
    createRoutes,
    formatPattern,
    RouterContext,
    PropTypes,
    match,
    useRouterHistory,
    createMemoryHistory
};

export default Router;
