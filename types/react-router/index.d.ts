// Type definitions for React Router 6.0
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>
//                 Yuichi Murata <https://github.com/mrk21>
//                 Václav Ostrožlík <https://github.com/vasek17>
//                 Nathan Brown <https://github.com/ngbrown>
//                 Alex Wendland <https://github.com/awendland>
//                 Kostya Esmukov <https://github.com/KostyaEsmukov>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Karol Janyst <https://github.com/LKay>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Huy Nguyen <https://github.com/huy-nguyen>
//                 Jérémy Fauvel <https://github.com/grmiade>
//                 Daniel Roth <https://github.com/DaIgeb>
//                 Egor Shulga <https://github.com/egorshulga>
//                 Rahul Raina <https://github.com/rraina>
//                 Maksim Sharipov <https://github.com/pret-a-porter>
//                 Duong Tran <https://github.com/t49tran>
//                 Ben Smith <https://github.com/8enSmith>
//                 Wesley Tsai <https://github.com/wezleytsai>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Nicholas Hehr <https://github.com/HipsterBrown>
//                 Pawel Fajfer <https://github.com/pawfa>
//                 Marek Urbanowicz <https://github.com/murbanowicz>
//                 Aaron Ross <https://github.com/superhawk610>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as H from 'history';

// This is the type of the context object that will be passed down to all children of
// a `Router` component:
export interface RouterChildContext<Params extends { [K in keyof Params]?: string } = {}> {
    router: {
        history: H.History;
        route: {
            location: H.Location;
            match: match<Params>;
        };
    };
}
export interface MemoryRouterProps {
    initialEntries?: H.LocationDescriptor[];
    initialIndex?: number;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    keyLength?: number;
}

export class MemoryRouter extends React.Component<MemoryRouterProps, any> {}

export interface PromptProps {
    message: string | ((location: H.Location) => string | boolean);
    when?: boolean;
}
export class Prompt extends React.Component<PromptProps, any> {}

export interface StaticContext {
    statusCode?: number;
}

export interface RouteComponentProps<
    Params extends { [K in keyof Params]?: string } = {},
    C extends StaticContext = StaticContext,
    S = H.LocationState
> {
    history: H.History<S>;
    location: H.Location<S>;
    match: match<Params>;
    staticContext?: C;
}

export interface RouteChildrenProps<Params extends { [K in keyof Params]?: string } = {}, S = H.LocationState> {
    history: H.History;
    location: H.Location<S>;
    match: match<Params> | null;
}

export interface RouteProps {
    location?: H.Location;
    element?:
        | ((props: RouteChildrenProps<any>) => React.ReactNode)
        | React.ReactNode;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}
export class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> {}

export interface RouterProps {
    history: H.History;
}
export class Router extends React.Component<RouterProps, any> {}

export class Routes extends React.Component<RoutesProps, any> {}
export interface RoutesProps {
    children?: React.ReactNode;
}

export interface StaticRouterContext extends StaticContext {
    url?: string;
    action?: 'PUSH' | 'REPLACE';
    location?: object;
}
export interface StaticRouterProps {
    basename?: string;
    location?: string | object;
    context?: StaticRouterContext;
}

export class StaticRouter extends React.Component<StaticRouterProps, any> {}


export interface match<Params extends { [K in keyof Params]?: string } = {}> {
    params: Params;
    isExact: boolean;
    path: string;
    url: string;
}

// Omit taken from https://github.com/Microsoft/TypeScript/issues/28339#issuecomment-467220238
export type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

export function matchPath<Params extends { [K in keyof Params]?: string }>(
    pathname: string,
    props: string | string[] | RouteProps,
    parent?: match<Params> | null,
): match<Params> | null;

export function generatePath(
    pattern: string,
    params?: { [paramName: string]: string | number | boolean | undefined },
): string;

export type WithRouterProps<C extends React.ComponentType<any>> = C extends React.ComponentClass
    ? { wrappedComponentRef?: React.Ref<InstanceType<C>> }
    : {};

export interface WithRouterStatics<C extends React.ComponentType<any>> {
    WrappedComponent: C;
}

// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @withRouter decorator in your code,
// you will see a bunch of errors from TypeScript. The current workaround is to use withRouter() as a function call
// on a separate line instead of as a decorator.
export function withRouter<P extends RouteComponentProps<any>, C extends React.ComponentType<P>>(
    component: C & React.ComponentType<P>,
): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>> & WithRouterProps<C>> & WithRouterStatics<C>;

export const __RouterContext: React.Context<RouteComponentProps>;

export function useLocation<S = H.LocationState>(): H.Location<S>;

export type Destination =
| string
| number
| Partial<{
    pathname: String;
    search: String;
    hash: String;
  }>;

export function useNavigate(): (
    path: Destination,
    config?: Partial<{ replace: boolean; state: object }>
) => void;

export function useParams<Params extends { [K in keyof Params]?: string } = {}>(): { [p in keyof Params]: keyof Params[p] extends undefined ? string | undefined : string  };

export function useRouteMatch<Params extends { [K in keyof Params]?: string } = {}>(): match<Params>;
export function useRouteMatch<Params extends { [K in keyof Params]?: string } = {}>(
    path: string | string[] | RouteProps,
): match<Params> | null;

export interface BaseRouteConfig {
    path: string;
}

export interface RouteRenderConfig extends BaseRouteConfig {
    element?: React.ReactNode;
    children: RouteConfig[];
}

export interface RouteRenderWithChildrenConfig extends BaseRouteConfig {
    element: React.ReactNode;
}

export interface RouteRedirectConfig extends BaseRouteConfig {
    redirectTo: string;
}

export type RouteConfig = RouteRenderConfig | RouteRenderWithChildrenConfig | RouteRedirectConfig;

export function useRoutes(routes: RouteConfig[], basename?: string, caseSensitive?: boolean): React.ReactNode;

export function useMatch(to: Destination): boolean;
