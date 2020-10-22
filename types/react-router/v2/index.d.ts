// Type definitions for react-router 2.0
// Project: https://github.com/rackt/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>
//                 Yuichi Murata <https://github.com/mrk21>
//                 Václav Ostrožlík <https://github.com/vasek17>
//                 Nathan Brown <https://github.com/ngbrown>
//                 Alex Wendland <https://github.com/awendland>
//                 Kostya Esmukov <https://github.com/KostyaEsmukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace ReactRouter;

import * as React from 'react';

export const routerShape: React.Requireable<any>;

export const locationShape: React.Requireable<any>;

import Router from "./lib/Router";
import Link from "./lib/Link";
import IndexLink from "./lib/IndexLink";
import IndexRedirect from "./lib/IndexRedirect";
import IndexRoute from "./lib/IndexRoute";
import Redirect from "./lib/Redirect";
import Route from "./lib/Route";
import * as History from "./lib/routerHistory";
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
import withRouter from "./lib/withRouter";
import applyRouterMiddleware from "./lib/applyRouterMiddleware";

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
export type LocationDescriptor = Router.LocationDescriptor;
export type RedirectFunction = Router.RedirectFunction;
export type RouteComponent = Router.RouteComponent;
export type RouteComponentProps<P, R> = Router.RouteComponentProps<P, R>;
export type RouteConfig = Router.RouteConfig;
export type RouteHook = Router.RouteHook;
export type StringifyQuery = Router.StringifyQuery;
export type RouterListener = Router.RouterListener;
export type RouterState = Router.RouterState;
export type InjectedRouter = Router.InjectedRouter;

export type HistoryBase = History.HistoryBase;
export type RouterOnContext = Router.RouterOnContext;
export type RouteProps = Route.RouteProps;
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
    createMemoryHistory,
    withRouter,
    applyRouterMiddleware
};

export default Router;
