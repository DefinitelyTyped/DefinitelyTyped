// Type definitions for branch-sdk 2.53
// Project: https://github.com/BranchMetrics/web-branch-deep-linking-attribution
// Definitions by: Jonas Daniels <https://github.com/jnsdls>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

export as namespace branch;

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

export type BranchError = string | null;

export type FingerprintResponse = string | null;

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

export interface DeepViewOptions {
    make_new_link?: boolean;
    open_app?: boolean;
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

export type CreditHistoryCallbackResponse = ReadonlyArray<CreditHistoryTransaction> | null;

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
/**
 * `Branch.init` must be called prior to calling any other Branch functions.
 *
 * @param branch_key Your Branch live key, or (deprecated) your app id.
 * @param [options]
 * @param [callback] callback to read the session data.
 */
export function init(
    branch_key: string,
    options?: InitOptions,
    callback?: (err: BranchError, data: SessionData | null) => void,
): void;

/**
 * Returns the same session information and any referring data, as
 * `Branch.init`, but does not require the `app_id`. This is meant to be called
 * after `Branch.init` has been called if you need the session information at a
 * later point.
 * If the Branch session has already been initialized, the callback will return
 * immediately, otherwise, it will return once Branch has been initialized.
 *
 * @param [callback]
 */
export function data(callback?: (err: BranchError, data: SessionData | null) => void): void;

/**
 * Returns the same session information and any referring data, as
 * `Branch.init` did when the app was first installed. This is meant to be called
 * after `Branch.init` has been called if you need the first session information at a
 * later point.
 * If the Branch session has already been initialized, the callback will return
 * immediately, otherwise, it will return once Branch has been initialized.
 *
 * @param [callback]
 */
export function first(callback?: (err: BranchError, data: SessionData | null) => void): void;

/**
 * Sets the identity of a user and returns the data. To use this function, pass
 * a unique string that identifies the user - this could be an email address,
 * UUID, Facebook ID, etc.
 *
 * @param identity a string uniquely identifying the user - often a user ID or email address.
 * @param [callback] callback that returns the user's Branch identity id and unique link.
 */
export function setIdentity(
    identity: string,
    callback?: (err: BranchError, data: IdentityCallbackData | null) => void,
): void;

/**
 * Logs out the current session, replaces session IDs and identity IDs.
 *
 * @param [callback]
 */
export function logout(callback?: (err: BranchError) => void): void;

/**
 * Returns the current user's browser-fingerprint-id. If tracking is disabled then `null` is returned.
 *
 * @param callback callback to read a user's browser-fingerprint-id
 */
export function getBrowserFingerprint(
    callback: (err: BranchError, browser_fingerprint: FingerprintResponse) => void,
): void;

/**
 * Returns CPIDs for current user.
 *
 * @param callback callback to read CPIDs
 */
export function crossPlatformIds(callback: (err: BranchError, data: any) => void): void;

/**
 * Returns last attributed touch data for current user. Last attributed touch data has the information associated with that user's last viewed impression or clicked link.
 *
 * @param attribution_window the number of days to look up attribution data for
 * @param [callback] callback to read last attributed touch data
 */
export function lastAttributedTouchData(
    attribution_window: number,
    callback?: (err: BranchError, data: any) => void,
): void;

/**
 * This function allows you to track any event with supporting metadata.
 * The `metadata` parameter is a formatted JSON object that can contain
 * any data and has limitless hierarchy
 *
 * @param event name of the event to be tracked
 * @param [metadata] object of event metadata
 * @param [callback]
 */
export function track(event: string, metadata?: {}, callback?: (err: BranchError) => void): void;

/**
 * Register commerce events, content events, user lifecycle events and custom events via `logEvent()`
 *
 * @param event
 * @param [event_data_and_custom_data]
 * @param [content_items]
 * @param [customer_event_alias]
 * @param [callback]
 */
export function logEvent(
    event: string,
    event_data_and_custom_data?: {},
    content_items?: Array<{}>,
    customer_event_alias?: string,
    callback?: (err: BranchError) => void,
): void;

/**
 * Creates and returns a deep linking URL. The `data` parameter can include an
 * object with optional data you would like to store, including Facebook Open Graph data.
 *
 * @param link_data link data and metadata.
 * @param callback returns a string of the Branch deep linking URL.
 */
export function link(link_data: DeepLinkData, callback: (err: BranchError, link: string | null) => void): void;

/**
 * A robust function to give your users the ability to share links via SMS. If
 * the user navigated to this page via a Branch link, `sendSMS` will send that
 * same link. Otherwise, it will create a new link with the data provided in
 * the `params` argument. `sendSMS` also registers a click event with the
 * `channel` pre-filled with `'sms'` before sending an sms to the provided
 * `phone` parameter. This way the entire link click event is recorded starting
 * with the user sending an sms.
 *
 * @param phone phone number to send SMS to
 * @param link_data object of link data
 * @param [options] options: `make_new_link`, which forces the creation of a new link even if one already exists
 * @param [callback] Returns an error if unsuccessful
 */
export function sendSMS(
    phone: string,
    link_data: DeepLinkData,
    options?: { make_new_link?: boolean },
    callback?: (err: BranchError) => void,
): void;

/**
 * Turns the current page into a "deepview" – a preview of app content. This gives the page two
 * special behaviors: (1) when the page is viewed on a mobile browser, if the user has the app
 * installed on their phone, we will try to open the app automaticaly and deeplink them to this
 * content (this can be toggled off by turning open_app to false, but this is not recommended),
 * and (2) provides a callback to open the app directly, accessible as `branch.deepviewCta();`
 * you'll want to have a button on your web page that says something like "View in app", which
 * calls this function.
 *
 * @param deepview_data object of all link data, same as branch.link().
 * @param [options] make_new_link: whether to create a new link even if one already exists.
 * open_app, whether to try to open the app passively (as opposed to opening it upon user clicking); defaults to true
 * @param [callback] returns an error if the API call is unsuccessful
 */
export function deepview(
    deepview_data: DeepLinkData,
    options?: DeepViewOptions,
    callback?: (err: BranchError) => void,
): void;

/**
 * Perform the branch deepview CTA (call to action) on mobile after `branch.deepview()` call is
 * finished. If the `branch.deepview()` call is finished with no error, when `branch.deepviewCta()` is called,
 * an attempt is made to open the app and deeplink the end user into it; if the end user does not
 * have the app installed, they will be redirected to the platform-appropriate app stores. If on the
 * other hand, `branch.deepview()` returns with an error, `branch.deepviewCta()` will fall back to
 * redirect the user using
 * Branch dynamic links.
 *
 * If `branch.deepview()` has not been called, an error will arise with a reminder to call
 * `branch.deepview()` first.
 *
 */
export function deepviewCta(): void;

/**
 * This call will retrieve the entire history of credits and redemptions from the individual user.
 *
 * @param callback returns an object with credit data.
 */
export function credits(callback: (err: BranchError, data: Record<string, number>) => void): void;

/**
 * This call will retrieve the entire history of credits and redemptions from the individual user.
 *
 * @param options options controlling the returned history
 * @param callback returns an array with credit history
 */
export function creditHistory(
    options: CreditHistoryOptions,
    callback: (err: BranchError, data: CreditHistoryCallbackResponse) => void,
): void;

/**
 * Credits are stored in `buckets`, which you can define as points, currency, whatever makes sense
 * for your app. When you want to redeem credits, call this method with the number of points to be
 * redeemed, and the bucket to redeem them from.
 *
 * @param amount an `amount` (int) of number of credits to redeem
 * @param bucket the name of the `bucket` (string) of which bucket to redeem the credits from
 * @param [callback]
 */
export function redeem(amount: number, bucket: string, callback?: (err: BranchError) => void): void;

/**
 * The Branch Web SDK includes a simple event listener, that currently only publishes events for Journeys events.
 *
 * @param event Specify which events you would like to listen for. If not defined, the observer will recieve all events.
 * @param listener  Listening function that will recieves an event as a string and optional data as an object.
 */
export function addListener(event: JourneyEvent | undefined, listener: (event: JourneyEvent, data: {}) => void): void;

/**
 * Remove the listener from observations, if it is present. Not that this function must be
 * passed a referrence to the same function that was passed to `branch.addListener()`, not
 * just an identical clone of the function.
 *
 * @param listener Reference to the listening function you
 * would like to remove. note: this must be the same reference that was passed to
 * `branch.addListener()`, not an identical clone of the function.
 */
export function removeListener(listener: (event: JourneyEvent, data: {}) => void): void;

/**
 * This function lets you set the deep link data dynamically for a given mobile web Journey. For
 * example, if you desgin a full page interstitial, and want the deep link data to be custom for each
 * page, you'd need to use this function to dynamically set the deep link params on page load. Then,
 * any Journey loaded on that page will inherit these deep link params.
 *
 * @param view_data object of all link data, same as Branch.link()
 */
export function setBranchViewData(view_data: DeepLinkData): void;

/**
 * Journeys include a close button the user can click, but you may want to close the
 * Journey with a timeout, or via some other user interaction with your web app. In this case,
 * closing the Journey is very simple by calling `Branch.closeJourney()`.
 *
 * @param [callback]
 */
export function closeJourney(callback?: (err: BranchError) => void): void;

/**
 * This function generates and inserts Firebase App Indexing tags between the `<head></head>` section of your webpage.
 * Once inserted, these tags will help Google index and surface content from your App in Google Search.
 *
 * Note: If optional parameters above are not specified, Branch will try to build Firebase App Indexing tags using your page's App Links tags.
 *
 * @param data Information on how to build your App Indexing tags for your webpage
 * @param [callback] Returns an error string if unsuccessful
 */
export function autoAppIndex(data: AutoAppIndexData, callback?: (err: BranchError) => void): void;

/**
 * Sends a user commerce event to the server
 *
 * Use commerce events to track when a user purchases an item in your online store,
 * makes an in-app purchase, or buys a subscription. The commerce events are tracked in
 * the Branch dashboard along with your other events so you can judge the effectiveness of
 * campaigns and other analytics.
 *
 * @param event Name of the commerce event to be tracked. We currently support 'purchase' events
 * @param commerce_data Data that describes the commerce event
 * @param [metadata] metadata you may want add to the event
 * @param [callback] Returns an error if unsuccessful
 */
export function trackCommerceEvent(
    event: 'purchase',
    commerce_data: {},
    metadata?: {},
    callback?: (err: BranchError) => void,
): void;

/**
 * Allows User to Remain Private
 *
 * This will prevent any Branch requests from being sent across the network, except for the case of deep linking.
 * If someone clicks a Branch link, but has expressed not to be tracked, we will return deep linking data back to the
 * client but without tracking information.
 *
 * In do-not-track mode, you will still be able to create links and display Journeys however, they will not have identifiable
 * information associated to them. You can change this behavior at any time, by calling the aforementioned function.
 * The do-not-track mode state is persistent: it is saved for the user across browser sessions for the web site.
 *
 * @param [disable] true disables tracking and false re-enables tracking.
 */
export function disableTracking(disable?: boolean): void;
