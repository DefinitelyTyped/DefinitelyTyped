// Type definitions for @giusto/ink-router 2.4
// Project: https://github.com/lujiajing1126/ink-router
// Definitions by: omjadas <https://github.com/omjadas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { History, Location } from "history";
import { Component, ComponentType } from "react";

export interface RouterProps {
    initialEntries?: Array<(string | {
        pathname: string;
        search?: string;
        hash?: string;
        state?: any;
        key?: string;
    })>;
    initialIndex?: number;
    keyLength?: number;
    getUserConfirmation?: () => void;
}
export class Router extends Component<RouterProps> { }

export interface CommandLineRouterProps {
    args?: string[];
    options?: Record<string, any>;
    initialEntries?: string[];
    initialIndex?: number;
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
    exact?: boolean;
    location?: {
        key?: string,
        pathname?: string,
    };
    component: React.ComponentType<any>;
}
export class Route extends Component<RouteProps> { }

export interface SwitchProps {
    children?: React.ReactElement<RouteProps> | Array<React.ReactElement<RouteProps>>;
    notFound?: (() => any) | React.ComponentType<any>;
}
export class Switch extends Component<SwitchProps> { }

export function withRouter(component: ComponentType<any>): (props: any) => JSX.Element;
