// Type definitions for react-router-config 1.0
// Project: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// Definitions by: François Nguyen <https://github.com/lith-light-g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";
import { RouteComponentProps, match } from "react-router";
import { Location } from "history";

export interface RouteConfigComponentProps<T> extends RouteComponentProps<T> {
    route?: RouteConfig;
}

export interface RouteConfig {
    location?: Location;
    component?: React.ComponentType<RouteConfigComponentProps<any> | {}>;
    path?: string;
    exact?: boolean;
    strict?: boolean;
    routes?: RouteConfig[];
}

export interface MatchedRoute<T> {
    route: RouteConfig;
    match: match<T>;
}

export function matchRoutes<T>(routes: RouteConfig[], pathname: string): Array<MatchedRoute<T>>;

export function renderRoutes(routes: RouteConfig[] | undefined, extraProps?: any): JSX.Element;
