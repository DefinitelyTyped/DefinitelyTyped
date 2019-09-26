// Type definitions for react-router-config 5.0
// Project: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config, https://github.com/reacttraining/react-router
// Definitions by: François Nguyen <https://github.com/lith-light-g>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Phoenix He <https://github.com/NullMDR>
//                 Mathieu TUDISCO <https://github.com/mathieutu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { RouteComponentProps, SwitchProps, match } from "react-router";
import { Location } from "history";

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}> extends RouteComponentProps<Params> {
    route?: RouteConfig;
}

export interface RouteConfig {
    key?: React.Key;
    location?: Location;
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType;
    path?: string | string[];
    exact?: boolean;
    strict?: boolean;
    routes?: RouteConfig[];
    render?: (props: RouteConfigComponentProps<any>) => React.ReactNode;
    [propName: string]: any;
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
