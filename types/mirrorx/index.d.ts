// Type definitions for mirrorjs 0.2.10
// Project: https://github.com/mirrorjs/mirror
// Definitions by: Aaronphy <https://github.com/aaronphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as H from 'history';

import * as React from 'react';

import { Connect } from 'react-redux';
import { match } from "react-router";

export = mirror;
export as namespace mirror;

declare namespace mirror {

  type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
  type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

  interface model {
    name: string;
    initialState?: any;
    reducers?: any;
    effects?: any;
  }

  interface _model {
    name: string;
    reducers: any;
  }
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: H.LocationDescriptor;
    replace?: boolean;
  }
  interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<P>(match: match<P>, location: H.Location): boolean;
    location?: H.Location;
  }

  interface SwitchProps {
    children?: React.ReactNode;
    location?: H.Location;
  }

  interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean;
    from?: string;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }

  interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
  }

  interface RouteProps {
    location?: H.Location;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: ((props: RouteComponentProps<any>) => React.ReactNode);
    children?: ((props: RouteComponentProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }

  interface PromptProps {
    message: string | ((location: H.Location) => string | boolean);
    when?: boolean;
  }

  interface LocationActionPayload {
    method: string;
    args?: any[];
  }

  interface RouterAction {
    type: '@@router/CALL_HISTORY_METHOD';
    payload: LocationActionPayload;
  }

  interface routeActions {
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

  interface Actions {
    routing: routeActions;
    [propName: string]: any;
  }

  interface defaultOptions {
    initialState?: {};
    historyMode?: string;
    middlewares: any[];
    reducers: {};
    addEffect(name: string, handler: () => any): any;
  }

  interface Renderer {
    // Deprecated(render): The return value is deprecated.
    // In future releases the render function's return type will be void.
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
   * @param options
   */
  function model(options: model): _model;
  /**
   * connect connects your React component to your Redux store
   */
  const connect: Connect;
  const actions: Actions;
  const hook: (subscriber: () => any) => any;
  const defaults: (options: defaultOptions) => void;
  const render: Renderer;

  class Router<State> extends React.Component<ConnectedRouterProps<State>> { }
  class Link extends React.Component<LinkProps, any> { }
  class NavLink extends React.Component<NavLinkProps, any> { }
  class Redirect extends React.Component<RedirectProps, any> { }
  class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> { }
  class Prompt extends React.Component<PromptProps, any> { }
  function withRouter<P extends RouteComponentProps<any>>(component: React.ComponentType<P>): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>>>;
  function withRouter<P, TFunction extends React.ComponentClass<P>>(target: TFunction): TFunction;
}
