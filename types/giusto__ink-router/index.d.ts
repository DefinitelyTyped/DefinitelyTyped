// Type definitions for @giusto/ink-router 2.4
// Project: https://github.com/lujiajing1126/ink-router
// Definitions by: omjadas <https://github.com/omjadas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { History, Location } from "history";
import { Component, ComponentType, ReactNode } from "react";

export interface RouterProps {
    children: NonNullable<ReactNode>;
    initialEntries?: Array<(string | {
        pathname: string;
        search?: string | undefined;
        hash?: string | undefined;
        state?: any;
        key?: string | undefined;
    })> | undefined;
    initialIndex?: number | undefined;
    keyLength?: number | undefined;
    getUserConfirmation?: (() => void) | undefined;
}
export class Router extends Component<RouterProps> { }

export interface CommandLineRouterProps {
    children: NonNullable<ReactNode>;
    args?: string[] | undefined;
    options?: Record<string, any> | undefined;
    initialEntries?: string[] | undefined;
    initialIndex?: number | undefined;
}
export class CommandLineRouter extends Component<CommandLineRouterProps> { }

export interface RouteComponentProps<T extends Record<string, any> = {}> {
    match: {
        path: string;
        params: T;
    };
    location: Location<{}>;
    history: History<{}>;
}

export interface RouteProps {
    path: string;
    exact?: boolean | undefined;
    location?: {
        key?: string | undefined,
        pathname?: string | undefined,
    } | undefined;
    component: React.ComponentType<any>;
}
export class Route extends Component<RouteProps> { }

export interface SwitchProps {
    children?: React.ReactElement<RouteProps> | Array<React.ReactElement<RouteProps>> | undefined;
    notFound?: (() => any) | React.ComponentType<any> | undefined;
}
export class Switch extends Component<SwitchProps> { }

export function withRouter(component: ComponentType<any>): (props: any) => JSX.Element;
