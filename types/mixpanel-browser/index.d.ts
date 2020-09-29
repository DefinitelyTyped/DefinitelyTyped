// Type definitions for mixpanel-browser 2.35
// Project: https://github.com/mixpanel/mixpanel-js
// Definitions by: Carlos López <https://github.com/karlos1337>
//                 Ricardo Rodrigues <https://github.com/RicardoRodrigues>
//                 Kristian Randall <https://github.com/randak>
//                 Dan Wilt <https://github.com/dwilt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Persistence = 'cookie' | 'localStorage';

export type PushItem = Array<string | Dict>;

export type Query = string | Element | Element[];

export interface Dict {
    [key: string]: any;
}

export interface RequestOptions {
    transport?: 'xhr' | 'sendBeacon';
}

export interface XhrHeadersDef {
    [header: string]: any;
}

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
    api_method: string;
    api_transport: string;
    app_host: string;
    autotrack: boolean;
    cdn: string;
    cookie_domain: string;
    cross_site_cookie: boolean;
    cross_subdomain_cookie: boolean;
    persistence: Persistence;
    persistence_name: string;
    cookie_name: string;
    loaded: (mixpanel: Mixpanel) => void;
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
    disable_notifications: boolean;
    secure_cookie: boolean;
    ip: boolean;
    property_blacklist: string[];
    xhr_headers: XhrHeadersDef;
    opt_out_tracking_by_default: boolean;
    opt_out_persistence_by_default: boolean;
    opt_out_tracking_persistence_type: Persistence;
    opt_out_tracking_cookie_prefix: string;
    inapp_protocol: string;
    inapp_link_new_window: boolean;
    ignore_dnt: boolean;
    batch_requests: boolean;
    batch_size: number;
    batch_flush_interval_ms: number;
    batch_request_timeout_ms: number;
}

export type VerboseResponse =
    | {
          status: 1;
          error: null;
      }
    | {
          status: 0;
          error: string;
      };

export type NormalResponse = 1 | 0;

export type Response = VerboseResponse | NormalResponse;

export type Callback = (response: Response) => void;

export interface People {
    set(prop: string, to: any, callback?: Callback): void;
    set(prop: Dict, callback?: Callback): void;
    set_once(prop: string, to: any, callback?: Callback): void;
    set_once(prop: Dict, callback?: Callback): void;
    unset(prop: string[] | string, callback?: Callback): void;
    increment(prop: string | Dict, callback?: Callback): void;
    increment(prop: string, by: number, callback?: Callback): void;
    remove(prop: string, value: any, callback?: Callback): void;
    remove(prop: Dict, callback?: Callback): void;
    append(prop: string, value: any, callback?: Callback): void;
    append(prop: Dict, callback?: Callback): void;
    union(prop: string, value: any, callback?: Callback): void;
    union(prop: Dict, callback?: Callback): void;
    track_charge(amount: number, propertiesOrCallback?: Dict | Callback, callback?: Callback): void;
    clear_charges(callback?: Callback): void;
    delete_user(): void;
}

export interface Group {
    remove(list_name: string, value: string, callback?: Callback): Group;
    set<Prop extends string | Dict>(
        prop: Prop,
        to?: Prop extends string ? string : undefined,
        callback?: Callback,
    ): Group;
    setOnce<Prop extends string | Dict>(
        prop: Prop,
        to?: Prop extends string ? string : undefined,
        callback?: Callback,
    ): Group;
    union(list_name: string, values: Array<string | number>, callback?: Callback): Group;
    unset(prop: string, callback?: Callback): void;
}

export interface Mixpanel {
    add_group(group_key: string, group_id: string, callback?: Callback): void;
    alias(alias: string, original?: string): void;
    clear_opt_in_out_tracking(options?: Partial<ClearOptOutInOutOptions>): void;
    disable(events?: string[]): void;
    get_config(prop_name?: string): any;
    get_distinct_id(): any;
    get_group(group_key: string, group_id: string): Group;
    get_property(property_name: string): any;
    has_opted_in_tracking(options?: Partial<HasOptedInOutOptions>): boolean;
    has_opted_out_tracking(options?: Partial<HasOptedInOutOptions>): boolean;
    identify(unique_id?: string): any;
    init(token: string, config?: Partial<Config>, name?: string): Mixpanel;
    opt_in_tracking(options?: Partial<InTrackingOptions>): void;
    opt_out_tracking(options?: Partial<OutTrackingOptions>): void;
    push(item: PushItem): void;
    register(props: Dict, days?: number): void;
    register_once(props: Dict, default_value?: any, days?: number): void;
    remove_group(group_key: string, group_ids: string | string[] | number | number[], callback?: Callback): void;
    reset(): void;
    set_config(config: Partial<Config>): void;
    set_group(group_key: string, group_ids: string | string[] | number | number[], callback?: Callback): void;
    time_event(event_name: string): void;
    track(
        event_name: string,
        properties?: Dict,
        optionsOrCallback?: RequestOptions | Callback,
        callback?: Callback,
    ): void;
    track_forms(query: Query, event_name: string, properties?: Dict | (() => void)): void;
    track_links(query: Query, event_name: string, properties?: Dict | (() => void)): void;
    track_with_groups(event_name: string, properties: Dict, groups: Dict, callback?: Callback): void;
    unregister(property: string): void;
    people: People;
}

export function add_group(group_key: string, group_id: string, callback?: Callback): void;
export function alias(alias: string, original?: string): void;
export function clear_opt_in_out_tracking(options?: Partial<ClearOptOutInOutOptions>): void;
export function disable(events?: string[]): void;
export function get_config(prop_name?: string): any;
export function get_distinct_id(): any;
export function get_group(group_key: string, group_id: string): Group;
export function get_property(property_name: string): any;
export function has_opted_in_tracking(options?: Partial<HasOptedInOutOptions>): boolean;
export function has_opted_out_tracking(options?: Partial<HasOptedInOutOptions>): boolean;
export function identify(unique_id?: string): any;
export function init(token: string, config?: Partial<Config>, name?: string): Mixpanel;
export function opt_in_tracking(options?: Partial<InTrackingOptions>): void;
export function opt_out_tracking(options?: Partial<OutTrackingOptions>): void;
export function push(item: PushItem): void;
export function register(props: Dict, days?: number): void;
export function register_once(props: Dict, default_value?: any, days?: number): void;
export function remove_group(
    group_key: string,
    group_ids: string | string[] | number | number[],
    callback?: Callback,
): void;
export function reset(): void;
export function set_config(config: Partial<Config>): void;
export function set_group(
    group_key: string,
    group_ids: string | string[] | number | number[],
    callback?: Callback,
): void;
export function time_event(event_name: string): void;
export function track(
    event_name: string,
    properties?: Dict,
    optionsOrCallback?: RequestOptions | Callback,
    callback?: Callback,
): void;
export function track_forms(query: Query, event_name: string, properties?: Dict | (() => void)): void;
export function track_links(query: Query, event_name: string, properties?: Dict | (() => void)): void;
export function track_with_groups(event_name: string, properties: Dict, groups: Dict, callback?: Callback): void;
export function unregister(property: string): void;
export const people: People;

declare const mixpanel: Mixpanel;
export default mixpanel;
