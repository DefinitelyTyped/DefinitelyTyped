import * as React from "react";

export type UserInfo = {
    uid?: string;
    cid?: string;
    urlref?: string;
    lang?: string;
    ua?: string;
    _idvc?: string;
    new_visit?: number;
    _viewts?: number;
    _idts?: number;
    res?: `${number}x${number}`;
    h?: number;
    m?: number;
    s?: number;
    cookie?: 0 | 1;
    uadata?: object;
} & Partial<Record<`dimension${number}`, string>>;

export interface AppStart {
    userInfo?: UserInfo;
}

export interface Action {
    name: string;
    url?: string;
    userInfo?: UserInfo;
}

export interface Event {
    category: string;
    action: string;
    name?: string;
    value?: number;
    campaign?: string;
    url?: string;
    userInfo?: UserInfo;
}

export interface Content {
    name: string;
    piece?: string;
    target?: string;
    interaction?: string;
    url?: string;
    userInfo?: UserInfo;
}

export interface SiteSearch {
    keyword: string;
    category?: string;
    count?: number;
    url?: string;
    userInfo?: UserInfo;
}

export interface Link {
    link: string;
    url?: string;
    userInfo?: UserInfo;
}

export interface Download {
    download: string;
    url?: string;
    userInfo?: UserInfo;
}

export function useMatomo(): {
    trackAppStart: (params: AppStart) => undefined | Promise<Response>;
    trackScreenView: (params: Action) => undefined | Promise<Response>;
    trackAction: (params: Action) => undefined | Promise<Response>;
    trackEvent: (params: Event) => undefined | Promise<Response>;
    trackContent: (params: Content) => undefined | Promise<Response>;
    trackSiteSearch: (params: SiteSearch) => undefined | Promise<Response>;
    trackLink: (params: Link) => undefined | Promise<Response>;
    trackDownload: (params: Download) => undefined | Promise<Response>;
    updateUserInfo: (params: UserInfo) => void;
    removeUserInfo: () => void;
};

export interface MatomoProviderProps {
    instance: MatomoTracker;
    children: React.ReactElement;
}

export function MatomoProvider(props: MatomoProviderProps): React.JSX.Element;

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
    trackContent(params: Content): Promise<Response>;
    trackSiteSearch(params: SiteSearch): Promise<Response>;
    trackLink(params: Link): Promise<Response>;
    trackDownload(params: Download): Promise<Response>;
    updateUserInfo(params: UserInfo): void;
    removeUserInfo(): void;
    track(params: any): Promise<Response>;
}
