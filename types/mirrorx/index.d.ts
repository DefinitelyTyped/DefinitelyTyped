// Type definitions for mirrorx 0.2
// Project: https://github.com/mirrorjs/mirror
// Definitions by: Aaronphy <https://github.com/aaronphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as H from 'history';

import * as React from 'react';

import { Connect } from 'react-redux';
import { match } from "react-router";

export type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

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
  replace?: boolean;
}
export interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  exact?: boolean;
  strict?: boolean;
  isActive?(match: match<any>, location: H.Location): boolean;
  location?: H.Location;
}

export interface SwitchProps {
  children?: React.ReactNode;
  location?: H.Location;
}

export interface RedirectProps {
  to: H.LocationDescriptor;
  push?: boolean;
  from?: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface RouteProps {
  location?: H.Location;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  children?: ((props: RouteComponentProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}

export interface PromptProps {
  message: string | ((location: H.Location) => string | boolean);
  when?: boolean;
}

export interface LocationActionPayload {
  method: string;
  args?: any[];
}

export interface RouterAction {
  type: '@@router/CALL_HISTORY_METHOD';
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
  history?: H.History;
}

export interface Actions {
  routing: routeActions;
  [propName: string]: any;
}

export interface defaultOptions {
  initialState?: {};
  historyMode?: string;
  middlewares: any[];
  reducers: {};
  addEffect(name: string, handler: () => any): any;
}

export interface Renderer {
  <T extends Element>(
    element: React.DOMElement<React.DOMAttributes<T>, T>,
    container: Element | null,
    callback?: () => void
  ): T;

  (
    element: Array<React.DOMElement<React.DOMAttributes<any>, any>>,
    container: Element | null,
    callback?: () => void
  ): Element;

  (
    element: React.SFCElement<any> | Array<React.SFCElement<any>>,
    container: Element | null,
    callback?: () => void
  ): void;

  <P, T extends React.Component<P, React.ComponentState>>(
    element: React.CElement<P, T>,
    container: Element | null,
    callback?: () => void
  ): T;

  (
    element: Array<React.CElement<any, React.Component<any, React.ComponentState>>>,
    container: Element | null,
    callback?: () => void
  ): React.Component<any, React.ComponentState>;

  <P>(
    element: React.ReactElement<P>,
    container: Element | null,
    callback?: () => void
  ): React.Component<P, React.ComponentState> | Element | void;

  (
    element: Array<React.ReactElement<any>>,
    container: Element | null,
    callback?: () => void
  ): React.Component<any, React.ComponentState> | Element | void;

  (
    parentComponent: React.Component<any> | Array<React.Component<any>>,
    element: React.SFCElement<any>,
    container: Element,
    callback?: () => void
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
export class Router<State> extends React.Component<ConnectedRouterProps<State>> { }
export class Link extends React.Component<LinkProps, any> { }
export class NavLink extends React.Component<NavLinkProps, any> { }
export class Redirect extends React.Component<RedirectProps, any> { }
export class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> { }
export class Prompt extends React.Component<PromptProps, any> { }
export function withRouter<P extends RouteComponentProps<any>>(component: React.ComponentType<P>): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>>>;
export function withRouter<TFunction extends React.ComponentClass<any>>(target: TFunction): TFunction;
