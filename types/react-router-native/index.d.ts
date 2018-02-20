// Type definitions for React Router Native 4.0
// Project: https://github.com/ReactTraining/react-router-native
// Definitions by: Eduard Zintz <https://github.com/ezintz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export {
  match,
  matchPath,
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  Router,
  RouterChildContext,
  StaticRouter,
  Switch,
  withRouter
} from 'react-router';
import * as React from 'react';
import * as H from 'history';

export interface AndroidBackButtonProps {
  children: React.Component[];
}

export class AndroidBackButton extends React.Component<AndroidBackButtonProps> {}

export class DeepLinking extends React.Component {}

export interface LinkProps {
  component?: React.Component | React.ComponentClass;
  replace?: boolean;
  style?: any;
  to: H.LocationDescriptor;
}

/**
 * Disable the "no-any-union" rule here as the Link component can accept any property.
 * It will feed them to the given component. However if we just use any we will lose
 * autocomplete on known properties. So it is better to disable this rule in this one
 * instance.
 */
// tslint:disable-next-line:no-any-union
export class Link extends React.Component<LinkProps | any> {}

export interface NativeRouterProps {
  initialEntries?: string[];
  initialIndex?: number;
  getUserConfirmation?: Function;
  keyLength?: number;
}

export class NativeRouter extends React.Component<NativeRouterProps> {}
