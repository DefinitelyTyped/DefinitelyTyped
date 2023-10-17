import * as H from "history";

import * as React from "react";

import { Connect } from "react-redux";
import { match } from "react-router";

export type Omit<T, K extends keyof T> = Pick<
    T,
    ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;

export interface model {
    name: string;
    initialState?: any;
    reducers?: any;
    effects?: any;
}

export interface _model {
    name: string;
    reducers: any;
}
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: H.LocationDescriptor;
    replace?: boolean | undefined;
}
export interface NavLinkProps extends LinkProps {
    activeClassName?: string | undefined;
    activeStyle?: React.CSSProperties | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    isActive?(match: match<any>, location: H.Location): boolean;
    location?: H.Location | undefined;
}

export interface SwitchProps {
    children?: React.ReactNode | undefined;
    location?: H.Location | undefined;
}

export interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean | undefined;
    from?: string | undefined;
    path?: string | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
}

export interface RouteComponentProps<Params extends { [K in keyof Params]?: string }> {
    match: match<Params>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

export interface RouteProps {
    location?: H.Location | undefined;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
    render?: ((props: RouteComponentProps<any>) => React.ReactNode) | undefined;
    children?: ((props: RouteComponentProps<any>) => React.ReactNode) | React.ReactNode | undefined;
    path?: string | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
}

export interface PromptProps {
    message: string | ((location: H.Location) => string | boolean);
    when?: boolean | undefined;
}

export interface LocationActionPayload {
    method: string;
    args?: any[] | undefined;
}

export interface RouterAction {
    type: "@@router/CALL_HISTORY_METHOD";
    payload: LocationActionPayload;
}

export interface routeActions {
    push(location: any, state?: any): RouterAction;
    replace(location: any, state?: any): RouterAction;
    go(n: number): RouterAction;
    goBack(): RouterAction;
    goForward(): RouterAction;
}

export interface ConnectedRouterProps<State> {
    store?: any;
    history?: H.History | undefined;
}

export interface Actions {
    routing: routeActions;
    [propName: string]: any;
}

export interface defaultOptions {
    initialState?: {} | undefined;
    historyMode?: string | undefined;
    middlewares: any[];
    reducers: {};
    addEffect(name: string, handler: () => any): any;
}

export interface Renderer {
    <T extends Element>(
        element: React.DOMElement<React.DOMAttributes<T>, T>,
        container: Element | null,
        callback?: () => void,
    ): T;

    (
        element: Array<React.DOMElement<React.DOMAttributes<any>, any>>,
        container: Element | null,
        callback?: () => void,
    ): Element;

    (
        element: React.FunctionComponentElement<any> | Array<React.FunctionComponentElement<any>>,
        container: Element | null,
        callback?: () => void,
    ): void;

    <P, T extends React.Component<P, React.ComponentState>>(
        element: React.CElement<P, T>,
        container: Element | null,
        callback?: () => void,
    ): T;

    (
        element: Array<React.CElement<any, React.Component<any, React.ComponentState>>>,
        container: Element | null,
        callback?: () => void,
    ): React.Component<any, React.ComponentState>;

    <P>(
        element: React.ReactElement<P>,
        container: Element | null,
        callback?: () => void,
    ): React.Component<P, React.ComponentState> | Element | void;

    (
        element: React.ReactElement[],
        container: Element | null,
        callback?: () => void,
    ): React.Component<any, React.ComponentState> | Element | void;

    (
        parentComponent: React.Component<any> | Array<React.Component<any>>,
        element: React.FunctionComponentElement<any>,
        container: Element,
        callback?: () => void,
    ): void;
}

/**
 * This method is used to create and inject a model.
 */
export function model(options: model): _model;
/**
 * connect connects your React component to your Redux store
 */
export const connect: Connect;
export const actions: Actions;
export function hook(): (subscriber: () => any) => any;
export function defaults(): (options: defaultOptions) => void;
export const render: Renderer;
export class Router<State> extends React.Component<ConnectedRouterProps<State>> {}
export class Link extends React.Component<LinkProps, any> {}
export class NavLink extends React.Component<NavLinkProps, any> {}
export class Redirect extends React.Component<RedirectProps, any> {}
export class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> {}
export class Prompt extends React.Component<PromptProps, any> {}
export function withRouter<P extends RouteComponentProps<any>>(
    component: React.ComponentType<P>,
): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>>>;
export function withRouter<TFunction extends React.ComponentClass<any>>(target: TFunction): TFunction;
