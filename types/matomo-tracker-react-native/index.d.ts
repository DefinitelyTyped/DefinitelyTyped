import * as React from "react";

export interface AppStart {
    userInfo?: {
        uid?: string;
        cid?: string;
        urlref?: string;
        lang?: string;
        ua?: string;
        _idvc?: string;
        new_visit?: number;
        _viewts?: number;
        _idts?: number;
        res?: number;
        h?: number;
        m?: number;
        s?: number;
        cookie?: number;
        uadata?: object;
        dimension?: number;
    };
}

export interface Action {
    name: string;
    userInfo?: {
        uid?: string;
    };
}

export interface Event {
    category: string;
    action: string;
    name?: string;
    value?: number;
    userInfo?: {
        uid?: string;
    };
}

export interface SiteSearch {
    keyword: string;
    category?: string;
    count?: number;
    userInfo?: {
        uid?: string;
    };
}

export interface Link {
    link: string;
    url?: string;
    userInfo?: {
        uid?: string;
    };
}

export interface Download {
    download: string;
    url?: string;
    userInfo?: {
        uid?: string;
    };
}

export function useMatomo(): {
    trackAppStart: (params: AppStart) => undefined | Promise<Response>;
    trackScreenView: (params: Action) => undefined | Promise<Response>;
    trackAction: (params: Action) => undefined | Promise<Response>;
    trackEvent: (params: Event) => undefined | Promise<Response>;
    trackSiteSearch: (params: SiteSearch) => undefined | Promise<Response>;
    trackLink: (params: Link) => undefined | Promise<Response>;
    trackDownload: (params: Download) => undefined | Promise<Response>;
};

export interface MatomoProviderProps {
    instance: MatomoTracker;
    children: React.ReactElement;
}

export function MatomoProvider(props: MatomoProviderProps): JSX.Element;

export const MatomoContext: React.Context<{}>;
export interface InstanceProps {
    urlBase: string;
    siteId: number;
    trackerUrl?: string;
    userId?: string;
    disabled?: boolean;
    log?: boolean;
}

export default class MatomoTracker {
    constructor(props: InstanceProps);
    trackAppStart(params: AppStart): Promise<Response>;
    trackScreenView(params: Action): Promise<Response>;
    trackAction(params: Action): Promise<Response>;
    trackEvent(params: Event): Promise<Response>;
    trackSiteSearch(params: SiteSearch): Promise<Response>;
    trackLink(params: Link): Promise<Response>;
    trackDownload(params: Download): Promise<Response>;
}
