// Type definitions for mixpanel-browser 2.23
// Project: https://github.com/mixpanel/mixpanel-js
// Definitions by: Carlos López <https://github.com/karlos1337>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Persistence = 'cookie' | 'localStorage';

export type PushItem = Array<string | Dict>;

export interface Dict {[key: string]: any; }

export interface XhrHeadersDef {[header: string]: any; }

export interface HasOptedInOutOptions {
  persistence_type: Persistence;
  cookie_prefix: string;
}

export interface ClearOptOutInOutOptions extends HasOptedInOutOptions {
  cookie_expiration: number;
  cross_subdomain_cookie: boolean;
  secure_cookie: boolean;
}

export interface InTrackingOptions extends ClearOptOutInOutOptions {
  track: () => void;
  track_event_name: string;
  track_event_properties: Dict;
}

export interface OutTrackingOptions extends ClearOptOutInOutOptions {
  delete_user: boolean;
}

export interface Config {
  api_host: string;
  app_host: string;
  autrotrack: boolean;
  cdn: string;
  cross_subdomain_cookie: boolean;
  persistence: Persistence;
  persistence_name: string;
  cookie_name: string;
  loaded: (mixpanel: MixPanel) => void;
  store_google: boolean;
  save_referrer: boolean;
  test: boolean;
  verbose: boolean;
  img: boolean;
  track_pageview: boolean;
  debug: boolean;
  track_links_timeout: number;
  cookie_expiration: number;
  upgrade: boolean;
  disable_persistence: boolean;
  disable_cookie: boolean;
  secure_cookie: boolean;
  ip: boolean;
  property_blacklist: string[];
  xhr_headers: XhrHeadersDef;
  opt_out_tracking_by_default: boolean;
  opt_out_tracking_persistence_type: Persistence;
  opt_out_tracking_cookie_prefix: string;
}

export interface People {
  set(prop: Dict | string, to?: any, callback?: () => void): void;
  set_once(prop: Dict | string, to?: any, callback?: () => void): void;
  unset(prop: string[] | string, callback?: () => void): void;
  increment(prop: Dict | string, by?: number, callback?: () => void): void;
  append(prop: Dict | string, value?: any, callback?: () => void): void;
  union(prop: Dict | string, value?: any, callback?: () => void): void;
  track_charge(amount: number, properties?: Dict, callback?: () => void): void;
  clear_charges(callback?: () => void): void;
  delete_user(): void;
}

export interface MixPanel {
  alias(alias: string, original?: string): void;
  clear_opt_in_out_tracking(options?: Partial<ClearOptOutInOutOptions>): void;
  disable(events?: string[]): void;
  get_config(prop_name?: string): any;
  get_distinct_id(): any;
  get_property(property_name: string): any;
  has_opted_in_tracking(options?: Partial<HasOptedInOutOptions>): boolean;
  has_opted_out_tracking(options?: Partial<HasOptedInOutOptions>): boolean;
  identify(unique_id?: string): any;
  init(token: string, config?: Partial<Config>, name?: string): MixPanel;
  opt_in_tracking(options?: Partial<InTrackingOptions>): void;
  opt_out_tracking(options?: Partial<OutTrackingOptions>): void;
  push(item: PushItem): void;
  register(props: Dict, days?: number): void;
  register_once(props: Dict, default_value?: any, days?: number): void;
  reset(): void;
  set_config(config: Partial<Config>): void;
  time_event(event_name: string): void;
  track(event_name: string, properties?: Dict, callback?: () => void): void;
  track_forms(query: string, event_name: string, properties?: Dict | (() => void)): void;
  track_links(query: string, event_name: string, properties?: Dict | (() => void)): void;
  unregister(property: string): void;
  people: People;
}

export const mixpanel: MixPanel;
