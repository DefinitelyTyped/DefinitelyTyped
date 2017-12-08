// Type definitions for mirrorjs 
// Project: http://facebook.github.io/react/
// Definitions by: Aaronphy <https://github.com/aaronphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import * as H from 'history';
import {
  ReactInstance, Component, ComponentState,
  ReactElement, SFCElement, CElement,
  DOMAttributes, DOMElement, ReactNode, ReactPortal
} from 'react';
import {
  History,
  Location,
  Path,
  LocationState,
  LocationDescriptor
} from 'history';
import { Connect } from 'react-redux';
import { match } from "react-router";


export = mirror;
export as namespace mirror;

declare namespace mirror {


  type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T]; 
  type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

  interface model {
      name:string,
      initialState?:any,
      reducers?:any,
      effects?:any
  } 

  interface _model {
    name:string,
    reducers:any
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
    type:'@@router/CALL_HISTORY_METHOD',
    payload: LocationActionPayload;
  }
  
  interface routeActions {
    push(location:any,state?:any):RouterAction,
    replace(location:any,state?:any):RouterAction,
    go(n:number):RouterAction,
    goBack(): RouterAction,
    goForward(): RouterAction
  }

  export interface ConnectedRouterProps<State> {
    store?: any;
    history?: History;
}

  interface Actions {
    routing:routeActions,
    [propName: string]: any
  }

  interface defaultOptions {
    initialState?:{},
    historyMode?:string,
    middlewares:[any],
    reducers:{},
    addEffect(name:string,handler:()=>any):any
  }

  interface Renderer {
    // Deprecated(render): The return value is deprecated.
    // In future releases the render function's return type will be void.

    <T extends Element>(
        element: DOMElement<DOMAttributes<T>, T>,
        container: Element | null,
        callback?: () => void
    ): T;

    (
        element: Array<DOMElement<DOMAttributes<any>, any>>,
        container: Element | null,
        callback?: () => void
    ): Element;

    (
        element: SFCElement<any> | Array<SFCElement<any>>,
        container: Element | null,
        callback?: () => void
    ): void;

    <P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        container: Element | null,
        callback?: () => void
    ): T;

    (
        element: Array<CElement<any, Component<any, ComponentState>>>,
        container: Element | null,
        callback?: () => void
    ): Component<any, ComponentState>;

    <P>(
        element: ReactElement<P>,
        container: Element | null,
        callback?: () => void
    ): Component<P, ComponentState> | Element | void;

    (
        element: Array<ReactElement<any>>,
        container: Element | null,
        callback?: () => void
    ): Component<any, ComponentState> | Element | void;

    (
        parentComponent: Component<any> | Array<Component<any>>,
        element: SFCElement<any>,
        container: Element,
        callback?: () => void
    ): void;
}

  /**
   * This method is used to create and inject a model.
   * @param options 
   */
  function model(options:model):_model
  /**
   * connect connects your React component to your Redux store
   */
  const connect:Connect
  //The actions object contains both your Redux actions and reducers.
  const actions:Actions
  //Add a hook to monitor actions that have been dispatched.
  const hook:(subscriber:()=>any)=>any
  //mirror.defaults is a pretty intuitive API, you use it to configure your Mirror app.
  const defaults:(options:defaultOptions)=>void
  //render is an enhanced ReactDOM.render, it starts your Mirror app.
  const render: Renderer;
  // Mirror uses react-router@4.x, so if you're from react-router 2.x/3.x, you should checkout the Migrating from v2/v3 to v4 Guide.
  class Router<State> extends React.Component<ConnectedRouterProps<State>> {}

  class Link extends React.Component<LinkProps, any> {}
  
  class NavLink extends React.Component<NavLinkProps, any> {}
  
  class Redirect extends React.Component<RedirectProps, any> { }

  class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> { }

  class Prompt extends React.Component<PromptProps, any> { }
  
  function withRouter<P extends RouteComponentProps<any>>(component: React.ComponentType<P>): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>>>;
  
  function withRouter<P, TFunction extends React.ComponentClass<P>>(target: TFunction): TFunction;
}