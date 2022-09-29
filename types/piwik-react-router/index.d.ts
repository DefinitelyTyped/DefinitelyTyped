// Type definitions for piwik-react-router 0.12
// Project: https://github.com/joernroeder/piwik-react-router
// Definitions by: Can Serkan UREN <https://github.com/canserkanuren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PiwikReactRouterHistory {
    location: string;
    listen?: (location: string) => void;
}

interface PiwikReactRouterTrack {
    path: string;
    basename: string;
    pathname: string;
    search: string;
}

interface PiwikReactRouterTrackErrorEvent {
    message: string;
    filename: string;
    lineno: string;
}

interface PiwikReactRouter {
    _isShim: boolean;
    track: (opts: PiwikReactRouterTrack) => void;
    push: (args: any) => void;
    setUserId: (userId: string) => void;
    trackError: (e: PiwikReactRouterTrackErrorEvent, eventName: string) => void;
    connectToHistory: (
        history: PiwikReactRouterHistory,
        modifier: (history: PiwikReactRouterHistory) => void,
    ) => PiwikReactRouterHistory;
    disconnectFromHistory: () => boolean;
}

interface PiwikReactRouterOptions {
    url: string;
    siteId: string;
    enableLinkTracking?: boolean;
    updateDocumentTitle?: boolean;
    trackErrors?: boolean;
    trackErrorHandler?: boolean;
    ignoreInitialVisit?: boolean;
    injectScript?: boolean;
    clientTrackerName?: string;
    serverTrackerName?: string;
}

declare function piwik(option: PiwikReactRouterOptions): PiwikReactRouter;

export = piwik;
