// Type definitions for React Router 4.0
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
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 Huy Nguyen <https://github.com/huy-nguyen>
//                 Jérémy Fauvel <https://github.com/grmiade>
//                 Daniel Roth <https://github.com/DaIgeb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import * as H from 'history';

// This is the type of the context object that will be passed down to all children of
// a `Router` component:
export interface RouterChildContext<P> {
  router: {
    history: H.History
    route: {
      location: H.Location
      match: match<P>
    }
  };
}
export interface MemoryRouterProps {
  initialEntries?: H.LocationDescriptor[];
  initialIndex?: number;
  getUserConfirmation?: (() => void);
  keyLength?: number;
}

export class MemoryRouter extends React.Component<MemoryRouterProps> { }

export interface PromptProps {
  message: string | ((location: H.Location) => void);
  when?: boolean;
}
export class Prompt extends React.Component<PromptProps> { }

export interface RedirectProps {
  to: H.LocationDescriptor;
  push?: boolean;
  from?: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}
export class Redirect extends React.Component<RedirectProps> { }

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface RouteProps {
  location?: H.Location;
  component?: React.SFC<RouteComponentProps<any> | undefined> | React.ComponentClass<RouteComponentProps<any> | undefined>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  children?: ((props: RouteComponentProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}
export class Route extends React.Component<RouteProps> { }

export interface RouterProps {
  history: any;
}
export class Router extends React.Component<RouterProps> { }

export interface StaticRouterProps {
  basename?: string;
  location?: string | object;
  context?: object;
}

export class StaticRouter extends React.Component<StaticRouterProps> { }
export interface SwitchProps {
  children?: React.ReactNode;
  location?: H.Location;
}
export class Switch extends React.Component<SwitchProps> { }

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export function matchPath<P>(pathname: string, props: RouteProps): match<P> | null;
export function withRouter<P>(component: React.SFC<RouteComponentProps<any> & P> | React.ComponentClass<RouteComponentProps<any> & P>): React.ComponentClass<P>;
