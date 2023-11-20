export as namespace branch;

export interface InitOptions {
    branch_match_id?: string | undefined;
    branch_view_id?: string | undefined;
    no_journeys?: boolean | undefined;
    disable_entry_animation?: boolean | undefined;
    disable_exit_animation?: boolean | undefined;
    retries?: number | undefined;
    retry_delay?: number | undefined;
    timeout?: number | undefined;
    metadata?: {} | undefined;
    nonce?: string | undefined;
    tracking_disabled?: boolean | undefined;
}

export interface SessionData {
    data_parsed: {};
    referring_identity?: string | undefined;
    has_app: boolean;
    identity: string;
    "~referring_link"?: string | undefined;
}

export interface IdentityCallbackData {
    identity_id: string;
    link: string;
    referring_data_parsed?: {} | undefined;
    referring_identity?: string | undefined;
}

export type BranchError = string | null;

export type FingerprintResponse = string | null;

export type CustomLinkData = string | number | boolean;

export enum UriRedirectMode {
    /**
     * This is the default value that yields the standard behavior where we don't try to open the app if the user can see an error.
     */
    Default = 0,
    /**
     * Smart redirect mode. Same behavior as Default until we know the user has the app installed through Branch persona data. In that case, force URI schemes to open the app.
     */
    Smart = 1,
    /**
     * Forceful redirect mode. Always try to force open the app, even if it risks showing an error message when the app is not installed.
     */
    Forceful = 2,
}

export interface DeepLinkData {
    // Analytical labels
    /**
     * Use channel to tag the route that your link reaches users. For example, tag links with 'Facebook' or 'LinkedIn' to help track clicks and installs through those paths separately
     */
    channel?: string | undefined;

    /**
     * This is the feature of your app that the link might be associated with. For example, if you had built a referral program, you would label links with the feature 'referral'
     */
    feature?: string | undefined;
    /**
     * Use this field to organize the links by actual campaign. For example, if you launched a new feature or product and want to run a campaign around that
     */
    campaign?: string | undefined;
    /**
     * Use this to categorize the progress or category of a user when the link was generated.
     * For example, if you had an invite system accessible on level 1, level 3 and 5, you could differentiate links generated at each level with this parameter.
     */
    stage?: string | undefined;
    /**
     * This is a free form entry with unlimited values ['string']. Use it to organize your link data with labels that don't fit within the bounds of the above
     */
    tags?: string[] | undefined;
    data?: {
        // Attribution windows

        /**
         * Time between a click or a web to app auto redirect and an install or reinstall.
         */
        $click_install_window_days?: number | undefined;
        /**
         * Time between a click or a web to app auto redirect and an open or web session start.
         */
        $click_session_start_window_days?: number | undefined;
        /**
         * Time between a click or a web to app auto redirect and a conversion event.
         * Conversion events include commerce events (e.g. purchase, add to cart), all custom events, and all view events like pageviews & content views.
         */
        $click_conversion_window_days?: number | undefined;
        /**
         * Time between an ad impression and an install or reinstall.
         */
        $impression_install_window_days?: number | undefined;
        /**
         * Time between an ad impression and an open or web session start.
         */
        $impression_session_start_window_days?: number | undefined;
        /**
         * Time between an ad impression and a conversion event.
         * Conversion events include commerce events (e.g. purchase, add to cart), all custom events, and all view events like pageviews & content views.
         */
        $impression_conversion_window_days?: number | undefined;

        // Custom data

        [custom_key: string]: any;

        // Redirections

        /**
         * Change the redirect endpoint for all platforms - so you don't have to enable it by platform.
         * Note that Branch will forward all robots to this URL, which overrides any OG tags entered in the link.
         */
        $fallback_url?: string | undefined;
        /**
         * Change the redirect endpoint on desktops
         */
        $desktop_url?: string | undefined;
        /**
         * Change the redirect endpoint for iOS App Store page for your app
         */
        $ios_url?: string | undefined;
        /**
         * Change the redirect endpoint for iPads $ios_url value
         */
        $ipad_url?: string | undefined;
        /**
         * Change the redirect endpoint for Android Play Store page for your app
         */
        $android_url?: string | undefined;
        /**
         * Redirect to Samsung Galaxy Store on Samsung devices. Only link level control. Format should be http://www.samsungapps.com/appquery/appDetail.as?appId=YOUR.PACKAGE.NAME
         */
        $samsung_url?: string | undefined;
        /**
         * Change the redirect endpoint for Windows OS Windows Phone default URL
         */
        $windows_phone_url?: string | undefined;
        /**
         * Change the redirect endpoint for Blackberry OS BlackBerry default URL
         */
        $blackberry_url?: string | undefined;
        /**
         * Change the redirect endpoint for Amazon Fire OS Fire default URL
         */
        $fire_url?: string | undefined;
        /*
         * Change the redirect endpoint for WeChat on iOS devices $ios_url value
         */
        $ios_wechat_url?: string | undefined;
        /**
         * Change the redirect endpoint for WeChat on Android devices $android_url value
         */
        $android_wechat_url?: string | undefined;
        /**
         * Force to open the $fallback_url instead of the app
         */
        $web_only?: boolean | undefined;

        // Forced redirections

        /**
         * Prevent error messages from other apps when Branch deep links are clicked
         */
        $uri_redirect_mode?: UriRedirectMode | undefined;

        // Deep linking

        /**
         * Set the deep link path for all platforms - so you don't have to enable it by platform.
         * When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
         */
        $deeplink_path?: string | undefined;
        /**
         * Set the deep link path for Android apps. When the Branch SDK receives a link with this parameter set, it will automatically load the custom Android URI path contained within
         */
        $android_deeplink_path?: string | undefined;
        /**
         * Set the deep link path for iOS apps. When the Branch SDK receives a link with this parameter set, it will automatically load the custom iOS URI path contained within
         */
        $ios_deeplink_path?: string | undefined;
        /**
         * Set the deep link path for Desktop apps. You will have to fetch this parameter and route the user accordingly
         */
        $desktop_deeplink_path?: string | undefined;
        /**
         * Lets you control the snapshotting match timeout (the time that a click will wait for an app open to match) also known as attribution window. Specified in seconds
         */
        $match_duration?: number | undefined;
        /**
         * Set to false to make links always fall back to your mobile site. Does not apply to Universal Links or Android App Links.
         */
        $always_deeplink?: boolean | undefined;
        /**
         * Control the timeout that the client-side JS waits after trying to open up the app before redirecting to the App Store. Specified in milliseconds
         */
        $ios_redirect_timeout?: number | undefined;
        /**
         * Control the timeout that the client side JS waits after trying to open up the app before redirecting to the Play Store. Specified in milliseconds
         */
        $android_redirect_timeout?: number | undefined;
        /**
         * Text for SMS link sent for desktop clicks to this link. Must contain {{ link }} Value of Text me the app page in Settings
         */
        $custom_sms_text?: string | undefined;
        /**
         * Set the marketing title for the deep link.
         */
        $marketing_title?: string | undefined;
        /**
         * Set to true for the links to only support deep linking without any attribution for that link.
         */
        $deeplink_no_attribution?: boolean | undefined;
        /**
         * When a user returns to the browser after going to the app, take them to this URL. iOS only; Android coming soon
         */
        $after_click_url?: string | undefined;

        // Content

        /**
         * Keywords for which this content should be discovered by. Just assign an array of strings with the keywords you'd like to use
         */
        "~keyword"?: string[] | undefined;
        /**
         * This is the unique identifier for content that will help Branch dedupe across many instances of the same thing.
         * Suitable options: a website with pathing, or a database with identifiers for entities
         */
        $canonical_identifier?: string | undefined;
        /**
         * This is a label for the type of content present.
         */
        $content_type?: string | undefined;
        /**
         * This will prevent click tracking and storage of link analytics. Deep link data will still flow into the app from link click to app open.
         */
        $do_not_process?: boolean | undefined;

        // Deepview

        /**
         * The name of the deepview template to use for iOS
         */
        $ios_deepview?: string | undefined;
        /**
         * The name of the deepview template to use for Android
         */
        $android_deepview?: string | undefined;
        /**
         * The name of the deepview template to use for the Desktop
         */
        $desktop_deepview?: string | undefined;
        /**
         * The name of the template to use for iOS.
         */
        $ios_passive_deepview?: string | undefined;
        /**
         * The name of the template to use for Android.
         */
        $android_passive_deepview?: string | undefined;

        // Link appearance

        /**
         * Specify a link alias to replace of the standard encoded short URL (e.g. https://example.app.link/aQXXDHaxKF -> https://example.app.link/october-campaign).
         * Link aliases must be unique per app (a 409 error will occur if you create an alias already taken)
         */
        alias?: string | undefined;

        // Open Graph

        /**
         * Set the title of the link as it will be seen in social media displays
         */
        $og_title?: string | undefined;
        /**
         * Set the description of the link as it will be seen in social media displays
         */
        $og_description?: string | undefined;
        /**
         * Set the image of the link as it will be seen in social media displays
         */
        $og_image_url?: string | undefined;
        /**
         * Set the image's width in pixels for social media displays
         */
        $og_image_width?: number | undefined;
        /**
         * Set the image's height in pixels for social media displays
         */
        $og_image_height?: number | undefined;
        /**
         * Set a video as it will be seen in social media displays
         */
        $og_video?: string | undefined;
        /**
         * Set the base URL of the link as it will be seen in social media displays
         */
        $og_url?: string | undefined;
        /**
         * Set the type of custom card format link as it will be seen in social media displays. Don't set this property when sharing deep links on Facebook
         */
        $og_type?: string | undefined;
        /**
         * (Advanced, not recommended) Set a custom URL that we redirect the social media robots to in order to retrieve all the appropriate tags
         */
        $og_redirect?: string | undefined;
        /**
         * (Rarely used) Sets the app id tag
         */
        $og_app_id?: string | undefined;

        // Twitter

        /**
         * Set the Twitter card type of the link (e.g. player) (you must whitelist your deep link with the Twitter Card Validator)
         */
        $twitter_card?: string | undefined;
        /**
         * Set the title of the Twitter card
         */
        $twitter_title?: string | undefined;
        /**
         * Set the description of the Twitter card
         */
        $twitter_description?: string | undefined;
        /**
         * Set the image URL for the Twitter card
         */
        twitter_image_url?: string | undefined;
        /**
         * Set the site for Twitter
         */
        $twitter_site?: string | undefined;
        /**
         * Set the app country for the app card
         */
        $twitter_app_country?: string | undefined;
        /**
         * Set the video player's URL. Defaults to the value of $og_video.
         */
        $twitter_player?: string | undefined;
        /**
         * Set the player's width in pixels
         */
        $twitter_player_width?: number | undefined;
        /**
         * Set the player's height in pixels
         */
        $twitter_player_height?: number | undefined;

        // Custom Tags

        /**
         * Valid stringified JSON dictionary of the tags’ keys and values
         */
        $custom_meta_tags?: string | undefined;
    } | undefined;
}

export interface DeepViewOptions {
    make_new_link?: boolean | undefined;
    open_app?: boolean | undefined;
}

export interface CreditHistoryOptions {
    bucket?: string | undefined;
    begin_after_id?: string | undefined;
    length?: number | undefined;
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
    androidPackageName?: string | undefined;
    androidURL?: string | undefined;
    iosAppId?: string | undefined;
    iosURL?: string | undefined;
    data?: { [custom_key: string]: CustomLinkData } | undefined;
}

export enum JourneyEvent {
    willShowJourney = "willShowJourney",
    didShowJourney = "didShowJourney",
    willNotShowJourney = "willNotShowJourney",
    didClickJourneyCTA = "didClickJourneyCTA",
    didClickJourneyClose = "didClickJourneyClose",
    willCloseJourney = "willCloseJourney",
    didCloseJourney = "didCloseJourney",
    didCallJourneyClose = "didCallJourneyClose",
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
export function getBrowserFingerprintId(
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
    options?: { make_new_link?: boolean | undefined },
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
    event: "purchase",
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
