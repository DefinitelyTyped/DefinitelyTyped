// Type definitions for react-router-config 5.0
// Project: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config, https://github.com/reacttraining/react-router
// Definitions by: John Reilly <https://github.com/johnnyreilly>
//                 Mathieu TUDISCO <https://github.com/mathieutu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Location } from "history";
import * as React from "react";
import { match, RouteComponentProps, SwitchProps } from "react-router";

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}>
    extends RouteComponentProps<Params>
{
    route?: RouteConfig | undefined;
}

export interface RouteConfig {
    key?: React.Key | undefined;
    location?: Location | undefined;
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | undefined;
    path?: string | string[] | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    routes?: RouteConfig[] | undefined;
    render?: ((props: RouteConfigComponentProps<any>) => React.ReactNode) | undefined;
    [propName: string]: any;
}

export interface MatchedRoute<
    Params extends { [K in keyof Params]?: string },
    TRouteConfig extends RouteConfig = RouteConfig,
> {
    route: TRouteConfig;
    match: match<Params>;
}

export function matchRoutes<
    Params extends { [K in keyof Params]?: string },
    TRouteConfig extends RouteConfig = RouteConfig,
>(routes: TRouteConfig[], pathname: string): Array<MatchedRoute<Params, TRouteConfig>>;

export function renderRoutes(
    routes: RouteConfig[] | undefined,
    extraProps?: any,
    switchProps?: SwitchProps,
): JSX.Element;
