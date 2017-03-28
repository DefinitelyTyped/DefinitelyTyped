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
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'react-router' {
  import * as React from 'react';
  import * as H from 'history';

	// This is the type of the context object that will be passed down to all children of
	// a `Router` component:
	interface RouterChildContext<P> {
		router: {
			history: H.History
			route: {
				location: H.Location,
				match: match<P>
			}
		}
	}
  interface MemoryRouterProps {
    initialEntries?: H.Location[];
    initialIndex?: number;
    getUserConfirmation?: () => void;
    keyLength?: number;
  }
  class MemoryRouter extends React.Component<MemoryRouterProps, void> {}


  interface PromptProps {
    message: string | ((location: H.Location) => void);
    when?: boolean;
  }
  class Prompt extends React.Component<PromptProps, void> {}


  interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean;
    from?: string;
  }
  class Redirect extends React.Component<RedirectProps, void> {}


  interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
  }

  interface RouteProps {
    location?: H.Location;
    component?: React.SFC<RouteComponentProps<any> | void> | React.ComponentClass<RouteComponentProps<any> | void>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: (props: RouteComponentProps<any>) => React.ReactNode | React.ReactNode;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }
  class Route extends React.Component<RouteProps, void> {}


  interface RouterProps {
    history: any;
  }
  class Router extends React.Component<RouterProps, void> {}


  interface StaticRouterProps {
    basename?: string;
    location?: string | object;
    context?: object;
  }
  class StaticRouter extends React.Component<StaticRouterProps, void> {}


  interface SwitchProps extends RouteProps {
  }
  class Switch extends React.Component<SwitchProps, void> {}


  interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
  }


  function matchPath<P>(pathname: string, props: RouteProps): match<P> | null;


  function withRouter(component: React.SFC<RouteComponentProps<any>> | React.ComponentClass<RouteComponentProps<any>>): React.ComponentClass<any>;


  export {
    MemoryRouter,
    Prompt,
    Redirect,
    RouteComponentProps, // TypeScript specific, not from React Router itself
    RouteProps, // TypeScript specific, not from React Router itself
    Route,
    Router,
    StaticRouter,
    Switch,
    match, // TypeScript specific, not from React Router itself
    matchPath,
		withRouter,
		RouterChildContext
  }
}
