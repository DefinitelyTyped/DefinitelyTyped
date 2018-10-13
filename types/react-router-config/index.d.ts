// Type definitions for react-router-config 1.0
// Project: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// Definitions by: François Nguyen <https://github.com/lith-light-g>
//                 John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { RouteComponentProps, SwitchProps, match } from "react-router";
import { Location } from "history";

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}> extends RouteComponentProps<Params> {
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

export interface MatchedRoute<Params extends { [K in keyof Params]?: string }> {
    route: RouteConfig;
    match: match<Params>;
}

export function matchRoutes<Params extends { [K in keyof Params]?: string }>(routes: RouteConfig[], pathname: string): Array<MatchedRoute<Params>>;

export function renderRoutes(
    routes: RouteConfig[] | undefined,
    extraProps?: any,
    switchProps?: SwitchProps,
): JSX.Element;
