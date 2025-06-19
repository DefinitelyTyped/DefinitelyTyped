export type Persistence = "cookie" | "localStorage";

export type ApiPayloadFormat = "base64" | "json";

export type PushItem = Array<string | Dict>;

export type Query = string | Element | Element[];

export interface Dict {
    [key: string]: any;
}

export interface RequestOptions {
    transport?: "xhr" | "sendBeacon" | undefined;
    send_immediately?: boolean | undefined;
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
    track_properties: Dict;
}

export interface OutTrackingOptions extends ClearOptOutInOutOptions {
    delete_user: boolean;
}

export interface RegisterOptions {
    persistent: boolean;
}

export type TrackPageView =
    | boolean
    | "url-with-path"
    | "url-with-path-and-query-string"
    | "full-url";

export interface AutocaptureConfig {
    /**
     * When set to `true`, Mixpanel will track element clicks. It will not track textContent unless `capture_text_content` is also set to `true`.
     * @default true
     */
    click?: boolean;
    /**
     * When set to `true`, Mixpanel will track when an input is provided. It will not capture input content.
     * @default true
     */
    input?: boolean;
    /**
     * When set, Mixpanel will collect pageviews when some components of the URL change — including UTM parameters.
     * @default 'full-url'
     */
    pageview?: TrackPageView;
    /**
     * When set, Mixpanel will collect page scrolls at specified scroll intervals.
     * @default true
     */
    scroll?: boolean;
    /**
     * When set to `true`, Mixpanel will track form submissions (but not submission content).
     * @default true
     */
    submit?: boolean;
    /**
     * When set to `true`, Mixpanel will capture the textContent of any element.
     * @default false
     */
    capture_text_content?: boolean;
    /** Enables specification of additional attributes to track. */
    capture_extra_attrs?: string[];
    /**
     * Establishes the scroll depth intervals which trigger `Page Scroll` event.
     * @default [25, 50, 75, 100]
     */
    scroll_depth_percent_checkpoints?: number[];
    /**
     * When set to true, overrides `scroll_depth_percentage_checkpoints` and captures all scroll events.
     * @default false
     */
    scroll_capture_all?: boolean;
    /** Opts out specific pages from Autocapture. */
    block_url_regexes?: RegExp[];
    /** Opts in specific pages to Autocapture. */
    allow_url_regexes?: RegExp[];
    /** Opts out specific classes from Autocapture. */
    block_selectors?: string[];
    /** Opts in specific classes to Autocapture. */
    allow_selectors?: string[];
    /** Opts out specific attributes from Autocapture. */
    block_attrs?: string[];
    /**
     * A user-provided function that determines whether a specific element should be
     * tracked via Autocapture or not. The function receives the element as its first
     * argument, and the DOM event as its second argument, and should return `true` if
     * the element should be tracked (otherwise the element will NOT be tracked).
     */
    allow_element_callback?: (element: Element, event: Event) => boolean;
    /**
     * A user-provided function that determines whether a specific element should be
     * blocked from tracking via Autocapture or not. The function receives the element
     * as its first argument, and the DOM event as its second argument, and should
     * return `true` if the element should be blocked.
     */
    block_element_callback?: (element: Element, event: Event) => boolean;
}

export interface Config {
    api_host: string;
    api_routes: {
        track?: string;
        engage?: string;
        groups?: string;
    };
    api_method: string;
    api_transport: string;
    app_host: string;
    api_payload_format: ApiPayloadFormat;
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
    stop_utm_persistence: boolean;
    save_referrer: boolean;
    test: boolean;
    verbose: boolean;
    img: boolean;
    /**
     * @default false
     * @see https://github.com/mixpanel/mixpanel-js/blob/master/doc/readme.io/javascript-full-api-reference.md#mixpanelset_config
     */
    debug: boolean;
    track_links_timeout: number;
    track_pageview: TrackPageView;
    autocapture: boolean | AutocaptureConfig;
    skip_first_touch_marketing: boolean;
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
    record_block_class: string;
    record_block_selector: string;
    record_collect_fonts: boolean;
    record_idle_timeout_ms: number;
    record_inline_images: boolean;
    record_mask_text_class: string;
    record_mask_text_selector: string;
    record_max_ms: number;
    record_sessions_percent: number;
    record_canvas: boolean;
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
    set_once<Prop extends string | Dict>(
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
    init(token: string, config: Partial<Config>, name: string): Mixpanel;
    opt_in_tracking(options?: Partial<InTrackingOptions>): void;
    opt_out_tracking(options?: Partial<OutTrackingOptions>): void;
    push(item: PushItem): void;
    register(props: Dict, days_or_options?: number | Partial<RegisterOptions>): void;
    register_once(props: Dict, default_value?: any, days_or_options?: number | Partial<RegisterOptions>): void;
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
    track_pageview(properties?: Dict, options?: { event_name?: string | undefined }): void;
    track_with_groups(event_name: string, properties: Dict, groups: Dict, callback?: Callback): void;
    unregister(property: string, options?: Partial<RegisterOptions>): void;
    people: People;
    start_session_recording(): void;
    stop_session_recording(): void;
    get_session_recording_properties(): { $mp_replay_id?: string } | {};
}

export interface OverridedMixpanel extends Mixpanel {
    init(token: string, config: Partial<Config>, name: string): Mixpanel;
    init(token: string, config?: Partial<Config>): undefined;
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
export function init(token: string, config: Partial<Config>, name: string): Mixpanel;
export function init(token: string, config?: Partial<Config>): undefined;
export function opt_in_tracking(options?: Partial<InTrackingOptions>): void;
export function opt_out_tracking(options?: Partial<OutTrackingOptions>): void;
export function push(item: PushItem): void;
export function register(props: Dict, days_or_options?: number | Partial<RegisterOptions>): void;
export function register_once(
    props: Dict,
    default_value?: any,
    days_or_options?: number | Partial<RegisterOptions>,
): void;
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
export function unregister(property: string, options?: Partial<RegisterOptions>): void;
export const people: People;
export function get_session_recording_properties(): { $mp_replay_id?: string } | {};

declare const mixpanel: OverridedMixpanel;
export default mixpanel;
