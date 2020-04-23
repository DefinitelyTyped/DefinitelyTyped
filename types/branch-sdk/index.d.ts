// Type definitions for branch-sdk 2.53
// Project: https://github.com/BranchMetrics/web-branch-deep-linking-attribution
// Definitions by: Jonas Daniels <https://github.com/jnsdls>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

export interface InitOptions {
    branch_match_id?: string;
    branch_view_id?: string;
    no_journeys?: boolean;
    disable_entry_animation?: boolean;
    disable_exit_animation?: boolean;
    retries?: number;
    retry_delay?: number;
    timeout?: number;
    metadata?: {};
    nonce?: string;
    tracking_disabled?: boolean;
}

export interface SessionData {
    data_parsed: {};
    referring_identity?: string;
    has_app: boolean;
    identity: string;
    '~referring_link'?: string;
}

export interface IdentityCallbackData {
    identity_id: string;
    link: string;
    referring_data_parsed?: {};
    referring_identity?: string;
}

export type ErrorMessage = string | null;

export type CustomLinkData = string | number | boolean;

export interface DeepLinkData {
    tags?: string[];
    channel?: string;
    feature?: string;
    stage?: string;
    data?: {
        $desktop_url?: string;

        $android_url?: string;

        $ios_url?: string;

        $ipad_url?: string;

        $fire_url?: string;

        $blackberry_url?: string;

        $windows_phone_url?: string;

        $after_click_url?: string;

        $deeplink_path?: string;

        $always_deeplink?: boolean;

        $og_app_id?: string;
        $og_title?: string;
        $og_description?: string;
        $og_image_url?: string;
        $og_video?: string;

        $og_redirect?: string;

        [custom_key: string]: any;
    };
}

export interface CreditHistoryOptions {
    bucket?: string;
    begin_after_id?: string;
    length?: number;
}

export interface CreditHistoryTransaction {
    transaction: {
        date: string;
        id: string;
        bucket: string;
        type: number;
        amount: number;
    };
    referrer: string;
    referree: string;
}

export type CreditHistoryCallbackResponse = CreditHistoryTransaction[] | null;

export interface AutoAppIndexData {
    androidPackageName?: string;

    androidURL?: string;

    iosAppId?: string;

    iosURL?: string;

    data?: { [custom_key: string]: CustomLinkData };
}

export enum JourneyEvent {
    willShowJourney = 'willShowJourney',
    didShowJourney = 'didShowJourney',
    willNotShowJourney = 'willNotShowJourney',
    didClickJourneyCTA = 'didClickJourneyCTA',
    didClickJourneyClose = 'didClickJourneyClose',
    willCloseJourney = 'willCloseJourney',
    didCloseJourney = 'didCloseJourney',
    didCallJourneyClose = 'didCallJourneyClose',
}

export function init(
    branch_key: string,
    options?: InitOptions,
    callback?: (err: ErrorMessage, data: SessionData | null) => void,
): void;

export function data(callback?: (err: ErrorMessage, data: SessionData | null) => void): void;

export function first(callback?: (err: ErrorMessage, data: SessionData | null) => void): void;

export function setIdentity(
    identity: string,
    callback?: (err: ErrorMessage, data: IdentityCallbackData | null) => void,
): void;

export function logout(callback?: (err: ErrorMessage) => void): void;

export function crossPlatformIds(callback: (err: ErrorMessage, data: unknown) => void): void;

export function lastAttributedTouchData(
    attribution_window: number,
    callback?: (err: ErrorMessage, data: any) => void,
): void;

export function link(link_data: DeepLinkData, callback: (err: ErrorMessage, link: string | null) => void): void;

export function sendSMS(
    phone: string,
    link_data: DeepLinkData,
    options?: { make_new_link?: boolean },
    callback?: (err: ErrorMessage) => void,
): void;

export function deepview(
    deepview_data: DeepLinkData,
    options?: { make_new_link?: boolean; open_app?: boolean },
    callback?: (err: ErrorMessage) => void,
): void;

export function deepviewCta(): void;

export function credits(callback: (err: ErrorMessage, data: Record<string, number>) => void): void;

export function creditHistory(
    options: CreditHistoryOptions,
    callback: (err: ErrorMessage, data: CreditHistoryCallbackResponse) => void,
): void;

export function redeem(amount: number, bucket: string, callback?: (err: ErrorMessage) => void): void;

export function addListener(event: JourneyEvent | undefined, listener: (event: JourneyEvent, data: {}) => void): void;

export function removeListener(listener: (event: JourneyEvent, data: {}) => void): void;

export function setBranchViewData(view_data: DeepLinkData): void;

export function closeJourney(callback?: (err: ErrorMessage) => void): void;

export function getBrowserFingerprint(callback: (err: ErrorMessage, browser_fingerprint: string) => void): void;

export function track(event: string, metadata?: {}, callback?: (err: ErrorMessage) => void): void;

export function logEvent(
    event: string,
    event_data_and_custom_data?: {},
    content_items?: Array<{}>,
    customer_event_alias?: string,
    callback?: (err: ErrorMessage) => void,
): void;

export function trackCommerceEvent(
    event: string,
    commerce_data: {},
    metadata?: {},
    callback?: (err: ErrorMessage) => void,
): void;

export function disableTracking(disable?: boolean): void;

export function autoAppIndex(app_index_data: AutoAppIndexData, callback?: (err: ErrorMessage) => void): void;
