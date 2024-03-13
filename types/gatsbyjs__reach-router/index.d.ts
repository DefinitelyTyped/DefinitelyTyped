import { WindowLocation } from "@reach/router";
import * as React from "react";

export {
    AnchorProps,
    createHistory,
    createMemorySource,
    globalHistory,
    History,
    HistoryActionType,
    HistoryListener,
    HistoryLocation,
    HistorySource,
    HistoryUnsubscribe,
    HLocation,
    isRedirect,
    Link,
    LinkGetProps,
    LinkProps,
    Match,
    MatchProps,
    MatchRenderFn,
    MatchRenderProps,
    NavigateFn,
    NavigateOptions,
    Redirect,
    RedirectProps,
    RedirectRequest,
    redirectTo,
    RouteComponentProps,
    Router,
    RouterProps,
    ServerLocation,
    ServerLocationProps,
    // Looking for useNavigate? It was removed from @gatsbyjs/reach-router
    // Use import { navigate } from 'gatsby' instead
    useLocation,
    useMatch,
    useParams,
    WindowLocation,
} from "@reach/router";

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
