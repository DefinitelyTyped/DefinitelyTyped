// Type definitions for @gatsbyjs/reach-router 2.0
// Project: https://github.com/gatsbyjs/reach-router#readme
// Definitions by: Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

import * as React from 'react';
import { WindowLocation } from '@reach/router';

export {
  HLocation,
  WindowLocation,
  HistoryActionType,
  HistoryLocation,
  HistoryListener,
  HistoryUnsubscribe,
  History,

  Router,
  RouterProps,
  RouteComponentProps,

  AnchorProps,
  LinkProps,
  LinkGetProps,
  Link,

  RedirectProps,
  Redirect,
  RedirectRequest,
  isRedirect,
  redirectTo,

  MatchProps,
  MatchRenderFn,
  MatchRenderProps,
  Match,

  NavigateFn,
  NavigateOptions,

  ServerLocation,
  ServerLocationProps,

  HistorySource,
  createHistory,
  createMemorySource,
  globalHistory,

  // Looking for useNavigate? It was removed from @gatsbyjs/reach-router
  // Use import { navigate } from 'gatsby' instead
  useLocation,
  useParams,
  useMatch,
} from '@reach/router';

// Override location to remove navigate function for React 18 server components compatibility
// https://github.com/gatsbyjs/reach-router/pull/4

export interface LocationProps {
  children: LocationProviderRenderFn;
}

export class Location extends React.Component<LocationProps> {}

export interface LocationProviderProps {
  history?: History | undefined;
  children?: React.ReactNode | LocationProviderRenderFn | undefined;
}

export type LocationProviderRenderFn = (context: LocationContext) => React.ReactNode;

export interface LocationContext {
  location: WindowLocation;
}

export class LocationProvider extends React.Component<LocationProviderProps> {}
