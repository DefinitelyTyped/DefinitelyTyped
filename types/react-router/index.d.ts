// Type definitions for React Router 5.1
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
//                 Duong Tran <https://github.com/t49tran>
//                 Ben Smith <https://github.com/8enSmith>
//                 Wesley Tsai <https://github.com/wezleytsai>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Nicholas Hehr <https://github.com/HipsterBrown>
//                 Pawel Fajfer <https://github.com/pawfa>
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
    children?: React.ReactNode;
    initialEntries?: H.LocationDescriptor[] | undefined;
    initialIndex?: number | undefined;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void) | undefined;
    keyLength?: number | undefined;
}

export class MemoryRouter extends React.Component<MemoryRouterProps, any> {}

export interface PromptProps {
    message: string | ((location: H.Location, action: H.Action) => string | boolean);
    when?: boolean | undefined;
}
export class Prompt extends React.Component<PromptProps, any> {}

export interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean | undefined;
    from?: string | undefined;
    path?: string | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
}
export class Redirect extends React.Component<RedirectProps, any> {}

export interface StaticContext {
    statusCode?: number | undefined;
}

export interface RouteComponentProps<
    Params extends { [K in keyof Params]?: string } = {},
    C extends StaticContext = StaticContext,
    S = H.LocationState,
> {
    history: H.History<S>;
    location: H.Location<S>;
    match: match<Params>;
    staticContext?: C | undefined;
}

export interface RouteChildrenProps<Params extends { [K in keyof Params]?: string } = {}, S = H.LocationState> {
    history: H.History;
    location: H.Location<S>;
    match: match<Params> | null;
}

export interface RouteProps<
    Path extends string = string,
    Params extends { [K: string]: string | undefined } = ExtractRouteParams<Path, string>,
> {
    location?: H.Location | undefined;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
    render?: ((props: RouteComponentProps<Params>) => React.ReactNode) | undefined;
    children?: ((props: RouteChildrenProps<Params>) => React.ReactNode) | React.ReactNode | undefined;
    path?: Path | readonly Path[] | undefined;
    exact?: boolean | undefined;
    sensitive?: boolean | undefined;
    strict?: boolean | undefined;
}
export class Route<T extends {} = {}, Path extends string = string> extends React.Component<
    RouteProps<Path> & OmitNative<T, keyof RouteProps>,
    any
> {}

export interface RouterProps {
    children?: React.ReactNode;
    history: H.History;
}
export class Router extends React.Component<RouterProps, any> {}

export interface StaticRouterContext extends StaticContext {
    url?: string | undefined;
    action?: 'PUSH' | 'REPLACE' | undefined;
    location?: object | undefined;
}
export interface StaticRouterProps {
    basename?: string | undefined;
    children?: React.ReactNode;
    location?: string | object | undefined;
    context?: StaticRouterContext | undefined;
}

export class StaticRouter extends React.Component<StaticRouterProps, any> {}
export interface SwitchProps {
    children?: React.ReactNode | undefined;
    location?: H.Location | undefined;
}
export class Switch extends React.Component<SwitchProps, any> {}

export interface match<Params extends { [K in keyof Params]?: string } = {}> {
    params: Params;
    isExact: boolean;
    path: string;
    url: string;
}

// Omit taken from https://github.com/Microsoft/TypeScript/issues/28339#issuecomment-467220238
export type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

// Newer Omit type: as the previous one is being exported, removing it would be a breaking change
export type OmitNative<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P] };

export function matchPath<Params extends { [K in keyof Params]?: string }>(
    pathname: string,
    props: string | string[] | RouteProps,
    parent?: match<Params> | null,
): match<Params> | null;

export type ExtractRouteOptionalParam<T extends string, U = string | number | boolean> = T extends `${infer Param}?`
    ? { [k in Param]?: U }
    : T extends `${infer Param}*`
    ? { [k in Param]?: U }
    : T extends `${infer Param}+`
    ? { [k in Param]: U }
    : { [k in T]: U };

export type ExtractRouteParams<T extends string, U = string | number | boolean> = string extends T
    ? { [k in string]?: U }
    : T extends `${infer _Start}:${infer ParamWithOptionalRegExp}/${infer Rest}`
    ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})${infer Modifier extends '?' | '+' | '*' | ''}`
        ? ExtractRouteOptionalParam<`${Param}${Modifier}`, U> & ExtractRouteParams<Rest, U>
        : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U> & ExtractRouteParams<Rest, U>
    : T extends `${infer _Start}:${infer ParamWithOptionalRegExp}`
    ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})${infer Modifier extends '?' | '+' | '*' | ''}`
        ? ExtractRouteOptionalParam<`${Param}${Modifier}`, U>
        : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U>
    : {};

export function generatePath<S extends string>(path: S, params?: ExtractRouteParams<S>): string;

export type WithRouterProps<C extends React.ComponentType<any>> = C extends React.ComponentClass
    ? { wrappedComponentRef?: React.Ref<InstanceType<C>> | undefined }
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

export function useHistory<HistoryLocationState = H.LocationState>(): H.History<HistoryLocationState>;

export function useLocation<S = H.LocationState>(): H.Location<S>;

export function useParams<Params extends { [K in keyof Params]?: string } = {}>(): Params;

export function useRouteMatch<Params extends { [K in keyof Params]?: string } = {}>(): match<Params>;
export function useRouteMatch<Params extends { [K in keyof Params]?: string } = {}>(
    path: string | string[] | RouteProps,
): match<Params> | null;
