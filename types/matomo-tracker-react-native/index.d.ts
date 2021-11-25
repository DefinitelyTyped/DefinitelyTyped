// Type definitions for matomo-tracker-react-native 0.3
// Project: https://github.com/donni106/matomo-tracker-react-native
// Definitions by: Zeynep Ece Ergin <https://github.com/zecergin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

import * as React from 'react';

export type AppStart = {
  userInfo?: { uid?: string }
}

export type Action = {
  name: string,
  userInfo?: { uid?: string }
}

export type Event = {
  category: string,
  action: string,
  name?: string,
  value?: number,
  userInfo?: { uid?: string }
}

export type SiteSearch = {
  keyword: string,
  category?: string,
  count?: number,
  userInfo?: { uid?: string }
}

export type Link = {
  link: string,
  url?: string,
  userInfo?: { uid?: string }
}

export type Download = {
  download: string,
  url?: string,
  userInfo?: { uid?: string }
}


export function useMatomo(): {
  trackAppStart: (params: AppStart) => undefined | Promise<Response>,
  trackScreenView: (params: Action) => undefined | Promise<Response>,
  trackAction: (params: Action) => undefined | Promise<Response>,
  trackEvent: (params: Event) => undefined | Promise<Response>,
  trackSiteSearch: (params: SiteSearch) => undefined | Promise<Response>,
  trackLink: (params: Link) => undefined | Promise<Response>,
  trackDownload: (params: Download) => undefined | Promise<Response>
};

type MatomoProviderProps = {
  instance: MatomoTracker,
  children: React.ReactElement
}

export const MatomoProvider: (props: MatomoProviderProps) => JSX.Element

type InstanceProps = {
  urlBase: string,
  siteId: number,
  trackerUrl?: string,
  userId?: string,
  disabled?: boolean,
  log?: boolean
};

export default class MatomoTracker {
  constructor(props: InstanceProps);
  trackAppStart(params: AppStart): Promise<Response>
  trackScreenView(params: Action): Promise<Response>
  trackAction(params: Action): Promise<Response>
  trackEvent(params: Event): Promise<Response>
  trackSiteSearch(params: SiteSearch): Promise<Response>
  trackLink(params: Link): Promise<Response>
  trackDownload(params: Download): Promise<Response>
}
