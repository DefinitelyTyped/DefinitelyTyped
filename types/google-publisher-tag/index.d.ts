// Type definitions for non-npm package Google Publisher Tag 1.20220822
// Project: https://developers.google.com/publisher-tag/
// Definitions by: Jonathon Imperiosi <https://github.com/jimper>
//                 Khoi Doan <https://github.com/zombifier>
//                 Taymon A. Beal <https://github.com/taymonbeal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The global namespace the Google Publisher Tag uses for its API.
 */
declare namespace googletag {
    /**
     * Returns a reference to the <code><a
     * href="#googletag.PubAdsService">PubAdsService</a></code>.
     *
     * @return The Publisher Ads service.
     */
    function pubads(): PubAdsService;

    /**
     * Returns a reference to the <code><a
     * href="#googletag.CompanionAdsService">CompanionAdsService</a></code>.
     *
     * @return The Companion Ads service.
     */
    function companionAds(): CompanionAdsService;

    /**
     * Reference to the global command queue for asynchronous execution of
     * GPT-related calls.
     * <br><br>
     * The <code>googletag.cmd</code> variable is initialized to an empty
     * JavaScript array by the GPT tag syntax on the page, and
     * <code>cmd.push</code> is the standard <code>Array.push</code> method that
     * adds an element to the end of the array. When the GPT JavaScript is loaded,
     * it looks through the array and executes all the functions in order. The
     * script then replaces <code>cmd</code> with a <code><a
     * href="#googletag.CommandArray">CommandArray</a></code> object whose push
     * method is defined to execute the function argument passed to it. This
     * mechanism allows GPT to reduce perceived latency by fetching the JavaScript
     * asynchronously while allowing the browser to continue rendering the page.
     *
     * @example
     *   googletag.cmd.push(function() {
     *     googletag.defineSlot('/1234567/sports', [160, 600])
     *              .addService(googletag.pubads());
     *   });
     */
    const cmd: Array<(this: typeof globalThis) => void> | CommandArray;

    /**
     * Returns the current version of GPT.
     *
     * @see <a href="https://developers.google.com/publisher-tag/versions">
     *     GPT version history</a>
     * @return The currently executing GPT version string.
     */
    function getVersion(): string;

    /**
     * Constructs an ad slot with a given ad unit path and size and associates it
     * with the ID of a div element on the page that will contain the ad.
     *
     * @example
     *   googletag.defineSlot('/1234567/sports', [728, 90], 'div-1');
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/get-started">
     *     Get Started with Google Publisher Tags</a>
     * @param adUnitPath Full <a href=
     *     "https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path">
     *     ad unit path</a> with the network code and unit code.
     * @param  size Width and height of the added slot.
     *     This is the size that is used in the ad request if no responsive size
     *     mapping is provided or the size of the viewport is smaller than the
     *     smallest size provided in the mapping.
     * @param div ID of the div that will contain this ad unit.
     * @return The newly created slot, or <code>null</code> if a slot cannot be
     *     created.
     */
    function defineSlot(adUnitPath: string, size: GeneralSize, div?: string): Slot | null;

    /**
     * Constructs an out-of-page ad slot with the given ad unit path.
     * <br><br>
     * For custom out-of-page ads, <code>div</code> is the ID
     * of the div element that will contain the ad. See the article on <a
     * href="https://support.google.com/admanager/answer/6088046">out-of-page
     * creatives</a> for more details.
     * <br><br>
     * For GPT managed out-of-page ads, <code>div</code> is a supported <code>
     * <a href="#googletag.enums_OutOfPageFormat">OutOfPageFormat</a></code>.
     *
     * @example
     *   // Define a custom out-of-page ad slot.
     *   googletag.defineOutOfPageSlot('/1234567/sports', 'div-1');
     *
     *   // Define a GPT managed web interstitial ad slot.
     *   googletag.defineOutOfPageSlot('/1234567/sports',
     *                                 googletag.enums.OutOfPageFormat.INTERSTITIAL);
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/display-rewarded-ad">
     *     Display a rewarded ad</a>
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/display-web-interstitial-ad">
     *     Display a web interstitial ad</a>
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/display-anchor-ad">
     *     Display an anchor ad</a>
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/display-out-of-page-ad">
     *     Display an out-of-page ad</a>
     * @param adUnitPath Full <a href=
     *     "https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path">
     *     ad unit path</a> with the network code and ad unit code.
     * @param div ID of the div that  will contain this ad unit or
     *     OutOfPageFormat.
     * @return The newly created slot, or <code>null</code> if a slot cannot be
     *     created.
     */
    function defineOutOfPageSlot(adUnitPath: string, div?: string | enums.OutOfPageFormat): Slot | null;

    /**
     * Instructs slot services to render the slot. Each ad slot should only be
     * displayed once per page. All slots must be defined and have a service
     * associated with them before being displayed. The display call must not
     * happen until the element is present in the DOM. The usual way to achieve
     * that is to place it within a script block within the div element named in
     * the method call.
     * <br><br>
     * If single request architecture (SRA) is being used, all unfetched
     * ad slots at the time this method is called will be fetched at once. To
     * force an ad slot not to display, the entire div must be removed.
     *
     * @example
     *   &lt;div id="div-1" style="width: 728px; height: 90px"&gt;
     *     &lt;script type="text/javascript"&gt;
     *       googletag.cmd.push(function() {
     *         googletag.display('div-1');
     *       });
     *     &lt;/script&gt;
     *   &lt;/div&gt;
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/get-started">
     *     Get Started with Google Publisher Tags</a>
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/display-test-ad">
     *     Display a test ad</a>
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/control-ad-loading">
     *     Control ad loading and refresh</a>
     * @param  divOrSlot Either the ID of the div element containing the ad slot
     *     or the div element, or the slot object. If a div element is provided,
     *     it must have an 'id' attribute which matches the ID passed into <code>
     *     <a href="#googletag.defineSlot">googletag.defineSlot()</a></code>.
     */
    function display(divOrSlot: string | Element | Slot): void;

    /**
     * Enables all GPT services that have been defined for ad slots
     * on the page.
     */
    function enableServices(): void;

    /**
     * Disables the Google Publisher Console.
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/publisher-console">
     *     Google Publisher Console</a>
     */
    function disablePublisherConsole(): void;

    /**
     * Destroys the given slots, removing all related objects and references of
     * those slots from GPT. This API does not support passback slots and
     * companion slots.
     * <br><br>
     * Calling this API on a slot clears the ad and removes the slot object from
     * the internal state maintained by GPT. Calling any more functions on the
     * slot object will result in undefined behavior. Note the browser may still
     * not free the memory associated with that slot if a reference to it is
     * maintained by the publisher page. Calling this API makes the div associated
     * with that slot available for reuse.
     * <br><br>
     * In particular, destroying a slot removes the ad from GPT's <a
     * href="https://support.google.com/admanager/answer/183281">long-lived
     * pageview</a>, so future requests will not be influenced by roadblocks or
     * competitive exclusions involving this ad. Failure to call this function
     * before removing a slot's div from the page will result in undefined
     * behavior.
     *
     * @example
     *   // The calls to construct an ad and display contents.
     *   var slot1 =
     *       googletag.defineSlot('/1234567/sports', [728, 90], 'div-1');
     *   googletag.display('div-1');
     *   var slot2 =
     *       googletag.defineSlot('/1234567/news', [160, 600], 'div-2');
     *   googletag.display('div-2');
     *   var slot3 =
     *       googletag.defineSlot('/1234567/weather', [160, 600], 'div-3');
     *   googletag.display('div-3');
     *
     *   // This call to destroy only slot1.
     *   googletag.destroySlots([slot1]);
     *
     *   // This call to destroy both slot1 and slot2.
     *   googletag.destroySlots([slot1, slot2]);
     *
     *   // This call to destroy all slots.
     *   googletag.destroySlots();
     *
     * @param slots The array of slots to destroy. Array is optional; all slots
     *     will be destroyed if it is unspecified.
     * @return <code>true</code> if slots have been destroyed, <code>false</code>
     *     otherwise.
     */
    function destroySlots(slots?: Slot[]): boolean;

    /**
     * Creates a new <code>
     * <a href="#googletag.SizeMappingBuilder">SizeMappingBuilder</a></code>.
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/ad-sizes#responsive_ads">
     *     Ad sizes: Responsive ads</a>
     * @return A new builder.
     */
    function sizeMapping(): SizeMappingBuilder;

    /**
     * Flag indicating that the GPT API is loaded and ready to be called.
     * This property will be simply <code>undefined</code> until the API is ready.
     *
     * <p>Note that the recommended way of handling async is to use
     * <code><a href="#googletag.cmd">googletag.cmd</a></code>
     * to queue callbacks for when GPT is ready. These callbacks do not have to
     * check googletag.apiReady as they are guaranteed to execute once the API is
     * set up.
     *
     * @example
     *  &lt;script&gt;
     *    if (window.googletag && googletag.apiReady) {
     *      // GPT API can be called safely.
     *    }
     *  &lt;/script&gt;
     */
    const apiReady: boolean | undefined;

    /**
     * Flag indicating that
     * <code><a href="#googletag.PubAdsService">PubAdsService</a></code> is
     * enabled, loaded and fully operational. This property will be simply
     * <code>undefined</code> until
     * <code>
     * <a href="#googletag.enableServices">googletag.enableServices()</a></code>
     * is called and
     * <code><a href="#googletag.PubAdsService">PubAdsService</a></code> is loaded
     * and initialized.
     */
    const pubadsReady: boolean | undefined;

    /**
     * Opens the Google Publisher Console.
     *
     * @example
     *   // Calling with div ID.
     *   googletag.openConsole('div-1');
     *
     *   // Calling without div ID.
     *   googletag.openConsole();
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/publisher-console">
     *     Google Publisher Console</a>
     * @param div An ad slot div ID. This value is optional. When provided, the
     * Publisher Console will attempt to open with details of the specified ad
     * slot in view.
     */
    function openConsole(div?: string): void;

    /**
     * Sets the title for all ad container iframes created by
     * <code><a href="#googletag.PubAdsService">PubAdsService</a></code>,
     * from this point onwards.
     *
     * @example
     *   googletag.setAdIframeTitle('title');
     *
     * @param title The new title for all ad container iframes.
     */
    function setAdIframeTitle(title: string): void;

    /**
     * The command array accepts a sequence of functions and invokes them in
     * order. It is intended to replace a standard array that is used to enqueue
     * functions to be invoked once GPT is loaded.
     */
    interface CommandArray {
        /**
         * Executes the sequence of functions specified in the arguments in order.
         * @example
         *   googletag.cmd.push(function() {
         *     googletag.defineSlot('/1234567/sports', [160, 600])
         *              .addService(googletag.pubads());
         *   });
         *  @param f A JavaScript function to be executed. The runtime binding will
         * always be <a
         * href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis"><code>globalThis</code></a>.
         * Consider passing an arrow function to retain the <code>this</code> value
         * of the enclosing lexical context.
         *  @return The number of commands processed so far. This is compatible with
         * <code>Array.push</code>'s return value (the current length of the array).
         */
        push(...f: Array<(this: typeof globalThis) => void>): number;
    }

    /**
     * Companion Ads service. This service is used by video ads to show companion
     * ads.
     *
     * @see <a href="https://support.google.com/admanager/answer/1191131">
     *     Companion ads for video and audio</a>
     */
    interface CompanionAdsService extends Service {
        /**
         * Sets whether companion slots that have not been filled will be
         * automatically backfilled.
         * <br><br>
         * This method can be called multiple times during the page's lifetime to
         * turn backfill on and off.
         * Only slots that are also registered with the
         * <code><a href="#googletag.PubAdsService">PubAdsService</a></code> will be
         * backfilled.
         * Due to policy restrictions, this method is not designed to fill empty
         * companion slots when an Ad Exchange video is served.
         *
         * @example
         *   googletag.companionAds().setRefreshUnfilledSlots(true);
         *
         * @param value <code>true</code> to automatically backfill unfilled slots,
         *     <code>false</code> to leave them unchanged.
         */
        setRefreshUnfilledSlots(value: boolean): void;
    }

    /**
     * Configuration object for privacy settings.
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/configure-privacy">
     *     Configure privacy settings</a>
     */
    interface PrivacySettingsConfig {
        /**
         * Enables serving to run in
         * <a href="https://support.google.com/admanager/answer/9598414">restricted
         * processing mode</a> to aid in publisher regulatory compliance needs.
         */
        restrictDataProcessing?: boolean;

        /**
         * Indicates whether the page should be
         * <a href="https://support.google.com/admanager/answer/3671211">treated as
         * child-directed</a>. Set to <code>null</code> to clear the configuration.
         */
        childDirectedTreatment?: boolean | null;

        /**
         * Indicates whether to mark ad requests as coming from users
         * <a href="https://support.google.com/admanager/answer/9004919">under the
         * age of consent</a>. Set to <code>null</code> to clear the configuration.
         */
        underAgeOfConsent?: boolean | null;

        /**
         * Enables serving to run in
         * <a href="https://support.google.com/admanager/answer/9882911">limited
         * ads</a> mode to aid in publisher regulatory compliance needs. When
         * enabled, the GPT library itself may optionally be requested from a
         * cookie-less, <a
         * href="https://developers.google.com/publisher-tag/guides/general-best-practices#load_from_an_official_source">
         * limited ads URL</a>.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-limited-ad">
         *     Display a limited ad</a>
         */
        limitedAds?: boolean;

        /**
         * Enables serving to run in
         * <a href="https://support.google.com/admanager/answer/9005435">
         * non-personalized ads</a> mode to aid in publisher regulatory compliance
         * needs.
         */
        nonPersonalizedAds?: boolean;

        /**
         * Indicates whether requests represent purchased or organic traffic.
         * This value populates the <a
         * href="https://support.google.com/admanager/answer/11233407">Traffic source
         * </a> dimension in Ad Manager reporting. If not set, traffic source defaults
         * to <code>Undefined</code> in reporting.
         *
         * @example
         *   // Indicate requests represent organic traffic.
         *   googletag.pubads().setPrivacySettings({
         *     trafficSource: googletag.enums.TrafficSource.ORGANIC
         *   });
         *
         *   // Indicate requests represent purchased traffic.
         *   googletag.pubads().setPrivacySettings({
         *     trafficSource: googletag.enums.TrafficSource.PURCHASED
         *   });
         */
        trafficSource?: enums.TrafficSource;
    }

    /**
     * Publisher Ads service. This service is used to fetch and show ads from your
     * Google Ad Manager account.
     */
    interface PubAdsService extends Service {
        /**
         * Sets custom targeting parameters for a given key that apply to all
         * Publisher Ads service ad slots. Calling this multiple times for the same
         * key will overwrite old values. These keys are defined in your Google Ad
         * Manager account.
         *
         * @example
         *   // Example with a single value for a key.
         *   googletag.pubads().setTargeting('interests', 'sports');
         *
         *   // Example with multiple values for a key inside in an array.
         *   googletag.pubads().setTargeting('interests', ['sports', 'music']);
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/key-value-targeting">
         *     Key-value targeting</a>
         * @param key Targeting parameter key.
         * @param value Targeting parameter value or array of values.
         * @return The service object on which the method was called.
         */
        setTargeting(key: string, value: string | string[]): PubAdsService;

        /**
         * Clears custom targeting parameters for a specific key or for all keys.
         *
         * @example
         *   googletag.pubads().setTargeting('interests', 'sports');
         *   googletag.pubads().setTargeting('colors', 'blue');
         *   googletag.pubads().setTargeting('fruits', 'apple');
         *
         *   googletag.pubads().clearTargeting('interests');
         *   // Targeting 'colors' and 'fruits' are still present, while 'interests'
         *   // was cleared.
         *
         *   googletag.pubads().clearTargeting();
         *   // All targeting has been cleared.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/key-value-targeting">
         *     Key-value targeting</a>
         * @param key Targeting parameter key. The key is optional; all targeting
         *     parameters will be cleared if it is unspecified.
         * @return The service object on which the method was called.
         */
        clearTargeting(key?: string): PubAdsService;

        /**
         * Returns a specific custom service-level targeting parameter that has been
         * set.
         *
         * @example
         *   googletag.pubads().setTargeting('interests', 'sports');
         *
         *   var param = googletag.pubads().getTargeting('interests');
         *   // param is ['sports']
         *
         *   var param = googletag.pubads().getTargeting('age');
         *   // param is [] (empty array)
         *
         * @param key The targeting key to look for.
         * @return The values associated with this key, or an empty array if there
         *     is no such key.
         */
        getTargeting(key: string): string[];

        /**
         * Returns the list of all custom service-level targeting keys that have
         * been set.
         *
         * @example
         *   googletag.pubads().setTargeting('interests', 'sports');
         *   googletag.pubads().setTargeting('colors', 'blue');
         *
         *   var keys = googletag.pubads().getTargetingKeys();
         *   // keys are ['interests', 'colors'].
         *
         * @return Array of targeting keys. Ordering is undefined.
         */
        getTargetingKeys(): string[];

        /**
         * Sets a page-level ad category exclusion for the given label name.
         *
         * @example
         *   // Label = AirlineAd.
         *   googletag.pubads().setCategoryExclusion('AirlineAd');
         *
         * @see <a href="https://support.google.com/admanager/answer/3238504">
         *     Custom labels to block ads</a>
         * @param categoryExclusion The ad category exclusion label to add.
         * @return The service object on which the method was called.
         */
        setCategoryExclusion(categoryExclusion: string): PubAdsService;

        /**
         * Clears all page-level ad category exclusion labels. This is useful if you
         * want to refresh the slot.
         *
         * @example
         *   // Set category exclusion to exclude ads with 'AirlineAd' labels.
         *   googletag.pubads().setCategoryExclusion('AirlineAd');
         *
         *   // Make ad requests. No ad with 'AirlineAd' label will be returned.
         *
         *   // Clear category exclusions so all ads can be returned.
         *   googletag.pubads().clearCategoryExclusions();
         *
         *   // Make ad requests. Any ad can be returned.
         *
         * @see <a href="https://support.google.com/admanager/answer/3238504">
         *     Custom labels to block ads</a>
         * @return The service object on which the method was called.
         */
        clearCategoryExclusions(): PubAdsService;

        /**
         * Disables requests for ads on page load, but allows ads to be requested
         * with a <code><a
         * href="#googletag.googletag.PubAdsService_refresh">googletag.pubads().refresh()</a></code>
         * call. This should be set prior to enabling the service. Async mode must
         * be used; otherwise it will be impossible to request ads using
         * <code>refresh</code>.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/control-ad-loading">
         *     Control ad loading and refresh</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/control-sra-batching">
         *     Control SRA batching</a>
         */
        disableInitialLoad(): void;

        /**
         * Returns whether or not initial requests for ads was successfully disabled
         * by a previous <code><a
         * href="#googletag.PubAdsService_disableInitialLoad">disableInitialLoad</a></code>
         * call.
         *
         * @return Returns <code>true</code> if a previous call to
         *     <code><a href="#googletag.PubAdsService_disableInitialLoad">
         *     disableInitialLoad</a></code> was successful, <code>false</code>
         *     otherwise.
         */
        isInitialLoadDisabled(): boolean;

        /**
         * Enables single request mode for fetching multiple ads at the same time.
         * This requires all Publisher Ads slots to be defined and added to the
         * PubAdsService prior to enabling the service. Single request mode must be
         * set before the service is enabled.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/ad-best-practices#use_single_request_architecture_correctly">
         *     Ads best practices: Use Single Request Architecture correctly</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/control-sra-batching">
         *     Control SRA batching</a>
         * @return Returns <code>true</code> if single request mode was enabled and
         *     <code>false</code> if it is impossible to enable single request mode
         *     because the method was called after the service was enabled.
         */
        enableSingleRequest(): boolean;

        /**
         * Enables and disables horizontal centering of ads. Centering is disabled
         * by default. In legacy gpt_mobile.js, centering is enabled by default.
         *
         * This method should be invoked before calling <code>display</code> or
         * <code>refresh</code> because only ads that are requested after calling
         * this method will be centered.
         *
         * @example
         *   // Make ads centered.
         *   googletag.pubads().setCentering(true);
         *
         * @param centerAds <code>true</code> to center ads, <code>false</code> to
         *     left-align them.
         */
        setCentering(centerAds: boolean): void;

        /**
         * Fetches and displays new ads for specific or all slots on the page. Works
         * only in asynchronous rendering mode.
         * <br><br>
         * For proper behavior across all browsers, calling <code>refresh</code>
         * must be preceded by a call to <code>display</code> the ad slot. If the
         * call to <code>display</code> is omitted, refresh may behave unexpectedly.
         * If desired, the
         * <code><a
         * href="#googletag.PubAdsService_disableInitialLoad">disableInitialLoad</a></code>
         * method can be used to stop <code>display</code> from fetching an ad.
         * <br><br>
         * Refreshing a slot removes the old ad from GPT's
         * <a href="https://support.google.com/admanager/answer/183281">long-lived
         * pageview</a>, so future requests will not be influenced by roadblocks or
         * competitive exclusions involving that ad.
         *
         * @example
         *
         *   // This call to refresh fetches a new ad for slot1 only.
         *   googletag.pubads().refresh([slot1]);
         *
         *   // This call to refresh fetches a new ad for both slot1 and slot2.
         *   googletag.pubads().refresh([slot1, slot2]);
         *
         *   // This call to refresh fetches a new ad for each slot.
         *   googletag.pubads().refresh();
         *
         *   // This call to refresh fetches a new ad for slot1, without changing
         *   // the correlator.
         *   googletag.pubads().refresh([slot1], {changeCorrelator: false});
         *
         *   // This call to refresh fetches a new ad for each slot, without
         *   // changing the correlator.
         *   googletag.pubads().refresh(null, {changeCorrelator: false});
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/control-ad-loading">
         *     Control ad loading and refresh</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/refresh">
         *     Refresh ad slots</a>
         * @param  slots The slots to refresh. Array is  optional; all slots
         *     will be refreshed if it is unspecified.
         * @param options Configuration options associated with this refresh
         *     call.
         *     <dl>
         *       <dt>changeCorrelator</dt>
         *       <dd>
         *         Specifies whether or not a new correlator is to be generated for
         *         fetching ads. Our ad servers maintain this correlator value
         *         briefly (currently for 30 seconds, but subject to change), such
         *         that requests with the same correlator received close together
         *         will be considered a single page view. By default a new
         *         correlator is generated for every refresh.
         *         <br><br>
         *         <b>Note:</b> this option has no effect on GPT's
         *         <a href="https://support.google.com/admanager/answer/183281">
         *         long-lived pageview</a>, which automatically reflects the ads
         *         currently on the page and has no expiration time.
         *       </dd>
         *     </dl>
         */
        refresh(
            slots?: Slot[] | null,
            options?: {
                changeCorrelator: boolean;
            },
        ): void;

        /**
         * Signals to GPT that video ads will be present on the page. This enables
         * competitive exclusion constraints on display and video ads. If the video
         * content is known, call
         * <code><a
         * href="#googletag.PubAdsService_setVideoContent">setVideoContent</a></code>
         * in order to be able to use content exclusion for display ads.
         */
        enableVideoAds(): void;

        /**
         * Sets the video content information to be sent along with the ad requests
         * for targeting and content exclusion purposes. Video ads will be
         * automatically enabled when this method is called. For
         * <code>videoContentId</code> and <code>videoCmsId</code>, use the values
         * that are provided to the Google Ad Manager content ingestion service.
         *
         * @see <a href="https://support.google.com/admanager/answer/1068325">
         *     VAST ad tag URL parameters</a>
         * @param videoContentId The video content ID.
         * @param videoCmsId The video CMS ID.
         */
        setVideoContent(videoContentId: string, videoCmsId: string): void;

        /**
         * Enables collapsing of slot divs so that they don't take up any space on
         * the page when there is no ad content to display. This mode must be set
         * before the service is enabled.
         *
         * @see <a href="
         *     evelopers.google.com/publisher-tag/samples/collapse-empty-ad-slots">
         *     Collapse empty ad slots</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/minimize-layout-shift">
         *     Minimize layout shift</a>
         * @param collapseBeforeAdFetch Whether to collapse the slots even before
         *     the ads are fetched. This parameter is optional; if not provided,
         *     <code>false</code> will be used as the default value.
         * @return Returns <code>true</code> if div collapse mode was enabled and
         *     <code>false</code> if it is impossible to enable collapse mode
         *     because the method was called after the service was enabled.
         */
        collapseEmptyDivs(collapseBeforeAdFetch?: boolean): boolean;

        /**
         * Removes the ads from the given slots and replaces them with blank
         * content. The slots will be marked as unfetched.
         * <br><br>
         * In particular, clearing a slot removes the ad from GPT's <a
         * href="https://support.google.com/admanager/answer/183281">long-lived
         * pageview</a>, so future requests will not be influenced by roadblocks or
         * competitive exclusions involving this ad.
         *
         * @example
         *
         *   // This call to clear only slot1.
         *   googletag.pubads().clear([slot1]);
         *
         *   // This call to clear both slot1 and slot2.
         *   googletag.pubads().clear([slot1, slot2]);
         *
         *   // This call to clear all slots.
         *   googletag.pubads().clear();
         *
         * @param slots The array of slots to clear. Array is optional; all slots
         *     will be cleared if it is unspecified.
         * @return Returns <code>true</code> if slots have been cleared,
         *     <code>false</code> otherwise.
         */
        clear(slots?: Slot[]): boolean;

        /**
         * Passes location information from websites so you can geo-target line
         * items to specific locations.
         *
         * @example
         *   // Postal code:
         *   googletag.pubads().setLocation("10001,US")
         *
         * @param address Freeform address.
         * @return The service object on which the method was called.
         */
        setLocation(address: string): PubAdsService;

        /**
         * Sets the value for the publisher-provided ID.
         *
         * @example
         *   googletag.pubads()
         *            .setPublisherProvidedId('12JD92JD8078S8J29SDOAKC0EF230337');
         *
         * @see <a href="https://support.google.com/admanager/answer/2880055">
         *     About publisher provided identifiers</a>
         * @param ppid An alphanumeric ID provided by the publisher. Must be between
         *     32 and 150 characters.
         * @return The service object on which the method was called.
         */
        setPublisherProvidedId(ppid: string): PubAdsService;

        /**
         * Sets values for AdSense attributes that apply to all ad slots under the
         * Publisher Ads service.
         * <br><br>
         * Calling this more than once for the same key will override previously set
         * values for that key. All values must be set before calling
         * <code>display</code> or <code>refresh</code>.
         *
         * @example
         *   googletag.pubads().set('adsense_background_color', '#FFFFFF');
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/adsense_attributes">
         *     AdSense Attributes</a>
         * @param key The name of the attribute.
         * @param value Attribute value.
         * @return The service object on which the method was called.
         */
        set(key: string, value: string): PubAdsService;

        /**
         * Returns the value for the AdSense attribute associated with the given
         * key.
         *
         * @example
         *   googletag.pubads().set('adsense_background_color', '#FFFFFF');
         *   var color = googletag.pubads().get('adsense_background_color');
         *   // color == '#FFFFFF'.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/adsense_attributes">
         *     AdSense Attributes</a>
         * @param key Name of the attribute to look for.
         * @return Current value for the attribute key, or <code>null</code> if the
         *     key is not present.
         */
        get(key: string): string | null;

        /**
         * Returns the attribute keys that have been set on this service.
         *
         * @example
         *   googletag.pubads().set('adsense_background_color', '#FFFFFF');
         *   googletag.pubads().set('adsense_border_color', '#AABBCC');
         *   var keys = googletag.pubads().getAttributeKeys();
         *   // Keys are ['adsense_background_color', 'adsense_border_color'].
         *
         * @return Array of attribute keys set on this service. Ordering is
         *     undefined.
         */
        getAttributeKeys(): string[];

        /**
         * Constructs and displays an ad slot with the given ad unit path and size.
         * This method does not work with single request mode.
         * <br><br>
         * <b>Note:</b> When this method is called, a snapshot of the slot and page
         * state is created to ensure consistency when sending the ad request and
         * rendering the response. Any changes that are made to the slot or page
         * state after this method is called (including targeting, privacy settings,
         * force SafeFrame, etc.) will only apply to subsequent
         * <code>display()</code> or <code>refresh()</code> requests.
         *
         * @example
         *   googletag.pubads().display('/1234567/sports', [728, 90], 'div-1');
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-test-ad">
         *     Display a test ad</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/control-ad-loading">
         *     Control ad loading and refresh</a>
         * @param adUnitPath The <a href=
         *     "https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path">
         *     ad unit path</a> of slot to be rendered.
         * @param size Width and height of the slot.
         * @param div Either the ID of the div containing the slot or the div
         *     element itself.
         * @param clickUrl The click URL to use on this slot.
         */
        display(adUnitPath: string, size: GeneralSize, div?: string | Element, clickUrl?: string): void;

        /**
         * Changes the correlator that is sent with ad requests, effectively
         * starting a new page view. The correlator is the same for all the ad
         * requests coming from one page view, and unique across page views. Only
         * applies to async mode.
         *
         * <b>Note:</b> this has no effect on GPT's <a
         * href="https://support.google.com/admanager/answer/183281">long-lived
         * pageview</a>, which automatically reflects the ads actually on the page
         * and has no expiration time.
         *
         * @example
         *   // Assume that the correlator is currently 12345. All ad requests made
         *   // by this page will currently use that value.
         *
         *   // Replace the current correlator with a new correlator.
         *   googletag.pubads().updateCorrelator();
         *
         *   // The correlator will now be a new randomly selected value, different
         *   // from 12345. All subsequent ad requests made by this page will use
         *   // the new value.
         *
         * @return The service object on which the function was called.
         */
        updateCorrelator(): PubAdsService;

        /**
         * Configures whether all ads on the page should be forced to be rendered
         * using a SafeFrame container.
         * <br><br>
         * Please keep the following things in mind while using this API:
         * <ul>
         *   <li>
         *     This setting will only take effect for <b>subsequent</b> ad requests
         *     made for the respective slots.
         *   </li>
         *   <li>
         *     The slot level setting, if specified, will always override the page
         *     level setting.
         *   </li>
         *   <li>
         *     If set to <code>true</code> (at slot-level or page level), the ad
         *     will always be rendered using a SafeFrame container independent of
         *     the choice made in the Google Ad Manager UI.
         *   </li>
         *   <li>
         *     However, if set to <code>false</code> or left unspecified, the ad
         *     will be rendered using a SafeFrame container depending on the type of
         *     creative and the selection made in the Google Ad Manager UI.
         *   </li>
         *   <li>
         *     This API should be used with caution as it could impact the behaviour
         *     of creatives that attempt to break out of their iFrames or rely on
         *     them being rendered directly in a publishers page.
         *   </li>
         * </ul>
         *
         * @example
         *   googletag.pubads().setForceSafeFrame(true);
         *
         *   // The following slot will be opted-out of the page-level force
         *   // SafeFrame instruction.
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setForceSafeFrame(false)
         *            .addService(googletag.pubads());
         *
         *   // The following slot will have SafeFrame forced.
         *   googletag.defineSlot('/1234567/news', [160, 600], 'div-2')
         *            .addService(googletag.pubads());
         *
         *   googletag.display('div-1');
         *   googletag.display('div-2');
         *
         * @see <a href="https://support.google.com/admanager/answer/6023110">
         *     Render creatives using SafeFrame</a>
         * @param forceSafeFrame <code>true</code> to force all ads on the page to
         *     be rendered in SafeFrames and <code>false</code> to change the
         *     previous setting to false. Setting this to <code>false</code> when
         *     unspecified earlier, won't change anything.
         * @return The service object on which the function was called.
         */
        setForceSafeFrame(forceSafeFrame: boolean): PubAdsService;

        /**
         * Sets the page-level preferences for SafeFrame configuration. Any
         * unrecognized keys in the config object will be ignored. The entire config
         * will be ignored if an invalid value is passed for a recognized key.
         *
         * These page-level preferences will be overridden by slot-level
         * preferences, if specified.
         *
         * @example
         *   googletag.pubads().setForceSafeFrame(true);
         *
         *   var pageConfig = {
         *     allowOverlayExpansion: true,
         *     allowPushExpansion: true,
         *     sandbox: true,
         *     useUniqueDomain: true
         *   };
         *
         *   var slotConfig = {allowOverlayExpansion: false};
         *
         *   googletag.pubads().setSafeFrameConfig(pageConfig);
         *
         *   // The following slot will not allow for expansion by overlay.
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setSafeFrameConfig(slotConfig)
         *            .addService(googletag.pubads());
         *
         *   // The following slot will inherit the page level settings, and hence
         *   // would allow for expansion by overlay.
         *   googletag.defineSlot('/1234567/news', [160, 600], 'div-2')
         *            .addService(googletag.pubads());
         *
         *   googletag.display('div-1');
         *   googletag.display('div-2');
         *
         * @see <a href="https://support.google.com/admanager/answer/6023110">
         *     Render creatives using SafeFrame</a>
         * @param config The configuration object.
         * @return The service object on which the method was called.
         */
        setSafeFrameConfig(config: SafeFrameConfig): PubAdsService;

        /**
         * Enables lazy loading in GPT as defined by the config object. For more
         * detailed examples, see the
         * <a
         * href="https://developers.google.com/publisher-tag/samples/lazy-loading">
         * Lazy loading</a> sample.
         * <br><br>
         * <b>Notes:</b>
         * <ul>
         *   <li>Lazy fetching in SRA only works if all slots are outside the
         *   fetching margin.</li>
         * </ul>
         *
         * @example
         *   googletag.pubads().enableLazyLoad({
         *     fetchMarginPercent: 500,  // Fetch slots within 5 viewports.
         *     renderMarginPercent: 200,  // Render slots within 2 viewports.
         *     mobileScaling: 2.0  // Double the above values on mobile.
         *   });
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/ad-best-practices#prioritize_important_ad_slots">
         *     Ads best practices: Prioritize &quot;important&quot; ad slots</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/lazy-loading">
         *     Lazy loading</a>
         * @param config Configuration object allows customization of lazy behavior.
         *     Any omitted configurations will use a default set by Google
         *     that will be tuned over time. To disable a particular setting, such
         *     as a fetching margin, set the value to <code>-1</code>.
         *     <dl>
         *       <dt><code>fetchMarginPercent</code></dt>
         *       <dd>
         *         The minimum distance from the current viewport a slot must be
         *         before we fetch the ad as a percentage of viewport size. A value
         *         of 0 means "when the slot enters the viewport", 100 means "when
         *         the ad is 1 viewport away", and so on.
         *       </dd>
         *       <dt><code>renderMarginPercent</code></dt>
         *       <dd>
         *         The minimum distance from the current viewport a slot must be
         *         before we render an ad. This allows for prefetching the ad, but
         *         waiting to render and download other subresources. The value
         *         works just like <code>fetchMarginPercent</code> as a percentage
         *         of viewport.
         *       </dd>
         *       <dt><code>mobileScaling</code></dt>
         *       <dd>
         *         A multiplier applied to margins on mobile devices. This allows
         *         varying margins on mobile vs. desktop. For example, a value of
         *         2.0 will multiply all margins by 2 on mobile devices, increasing
         *         the minimum distance a slot can be before fetching and rendering.
         *       </dd>
         *     </dl>
         */
        enableLazyLoad(config?: {
            fetchMarginPercent?: number;
            renderMarginPercent?: number;
            mobileScaling?: number;
        }): void;

        /**
         * Allows configuration of all privacy settings from a single API using a
         * config object.
         *
         * @example
         *   googletag.pubads().setPrivacySettings({
         *     restrictDataProcessing: true,
         *   });
         *
         *   // Set multiple privacy settings at the same time.
         *   googletag.pubads().setPrivacySettings({
         *     childDirectedTreatment: true,
         *     underAgeOfConsent: true
         *   });
         *
         *   // Clear the configuration for childDirectedTreatment.
         *   googletag.pubads().setPrivacySettings({
         *     childDirectedTreatment: null
         *   });
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/configure-privacy">
         *     Configure privacy settings</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-limited-ad">
         *     Display a limited ad</a>
         * @param privacySettings Object containing privacy settings config.
         * @return The service object on which the function was called.
         */
        setPrivacySettings(privacySettings: PrivacySettingsConfig): PubAdsService;
    }

    /**
     * An object representing a single ad response.
     *
     * @see <a href="#googletag.Slot_getResponseInformation">
     *     <code>Slot.getResponseInformation</code></a>
     */
    interface ResponseInformation {
        /** The ID of the advertiser. */
        advertiserId: number | null;

        /** The ID of the campaign. */
        campaignId: number | null;

        /** The ID of the creative. */
        creativeId: number | null;

        /** The ID of the line item. */
        lineItemId: number | null;

        /** The template ID of the ad. */
        creativeTemplateId: number | null;
    }

    /**
     * An object representing the reward associated with a <a
     * href="https://support.google.com/admanager/answer/9116812">rewarded ad</a>.
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/samples/display-rewarded-ad">
     *     Display a rewarded ad</a>
     */
    interface RewardedPayload {
        /** The type of item included in the reward (for example, "coin"). */
        type: string;

        /** The number of items included in the reward. */
        amount: number;
    }

    /**
     * Configuration object for
     * <a href="https://support.google.com/admanager/answer/6023110">SafeFrame</a>
     * containers.
     *
     * @see <a href="#googletag.PubAdsService_setSafeFrameConfig">
     *     <code>PubAdsService.setSafeFrameConfig</code></a>
     */
    interface SafeFrameConfig {
        /**
         * Whether SafeFrame should allow ad content to expand by overlaying page
         * content.
         */
        allowOverlayExpansion?: boolean;

        /**
         * Whether SafeFrame should allow ad content to expand by pushing page
         * content.
         */
        allowPushExpansion?: boolean;

        /**
         * Whether SafeFrame should use the HTML5 sandbox attribute to prevent top
         * level navigation without user interaction. The only valid value is
         * <code>true</code> (cannot be forced to <code>false</code>). Note that the
         * sandbox attribute disables plugins (e.g. Flash).
         */
        sandbox?: boolean;

        /**
         * Whether SafeFrame should use randomized subdomains for
         * Reservation creatives. Pass in <code>null</code> to clear the stored
         * value.
         *
         * Note: this feature is enabled by default.
         *
         * @deprecated It is no longer possible to disable this feature. Setting
         * <code>useUniqueDomain</code> has no effect.
         * @see <a href="https://support.google.com/admanager/answer/9999596">
         *     Render creatives using SafeFrame</a>
         */
        useUniqueDomain?: boolean | null;
    }

    /** Base service class that contains methods common for all services. */
    interface Service {
        /**
         * Registers a listener that allows you to set up and call a JavaScript
         * function when a specific GPT event happens on the page. The following
         * events are supported: <ul> <li><code><a
         * href="#googletag.events.ImpressionViewableEvent">googletag.events.ImpressionViewableEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.RewardedSlotClosedEvent">googletag.events.RewardedSlotClosedEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.RewardedSlotGrantedEvent">googletag.events.RewardedSlotGrantedEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.RewardedSlotReadyEvent">googletag.events.RewardedSlotReadyEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.SlotOnloadEvent">googletag.events.SlotOnloadEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.SlotRenderEndedEvent">googletag.events.SlotRenderEndedEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.SlotRequestedEvent">googletag.events.SlotRequestedEvent</a></code></li>
         * <li><code><a
         * href="#googletag.events.SlotResponseReceived">googletag.events.SlotResponseReceived</a></code></li>
         * <li><code><a
         * href="#googletag.events.SlotVisibilityChangedEvent">googletag.events.SlotVisibilityChangedEvent</a></code></li>
         * </ul>
         *
         * An object of the appropriate event type is passed to the listener when it
         * is called.
         *
         * @example
         *   // 1. Adding an event listener for the PubAdsService.
         *   googletag.pubads().addEventListener('slotOnload', function(event) {
         *     console.log('Slot has been loaded:');
         *     console.log(event);
         *   });
         *
         *   // 2. Adding an event listener with slot specific logic.
         *   // Listeners operate at service level, which means that you cannot add
         *   // a listener for an event for a specific slot only. You can, however,
         *   // programmatically filter a listener to respond only to a certain ad
         *   // slot, using this pattern:
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('slotOnload', function(event) {
         *     if (event.slot === targetSlot) {
         *       // Slot specific logic.
         *     }
         *   });
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         * @param eventType A string representing the type of event generated by
         *     GPT. Event types are case sensitive.
         * @param listener Function that takes a single event object argument.
         * @return The service object on which the method was called.
         */
        addEventListener<K extends keyof events.EventTypeMap>(
            eventType: K,
            listener: (arg: events.EventTypeMap[K]) => void,
        ): Service;

        /**
         * Removes a previously registered listener.
         *
         * @example
         * googletag.cmd.push(function() {
         *   // Define a new ad slot.
         *   googletag.defineSlot('/6355419/Travel', [728, 90], 'div-for-slot')
         *            .addService(googletag.pubads());
         *
         *   // Define a new function that removes itself via removeEventListener
         *   // after the impressionViewable event fires.
         *   var onViewableListener = function(event) {
         *     googletag.pubads().removeEventListener('impressionViewable',
         *                                            onViewableListener);
         *     setTimeout(function() {
         *       googletag.pubads().refresh([event.slot]);
         *     }, 30000);
         *   };
         *
         *   // Add onViewableListener as a listener for impressionViewable events.
         *   googletag.pubads().addEventListener('impressionViewable',
         *                                       onViewableListener);
         *   googletag.enableServices();
         * });
         * @param eventType A string representing the type of event generated by
         *     GPT. Event types are case sensitive.
         * @param listener Function that takes a single event object argument.
         */
        removeEventListener<K extends keyof events.EventTypeMap>(
            eventType: K,
            listener: (event: events.EventTypeMap[K]) => void,
        ): void;

        /**
         * Get the list of slots associated with this service.
         * @return Slots in the order in which they were added to the service.
         */
        getSlots(): Slot[];
    }

    /**
     * Builder for size mapping specification objects. This builder is provided
     * to help easily construct size specifications.
     *
     * @see <a href="
     *     https://developers.google.com/publisher-tag/guides/ad-sizes#responsive_ads">
     *     Ad sizes: Responsive ads</a>
     */
    interface SizeMappingBuilder {
        /**
         * Adds a mapping from a single-size array (representing the viewport) to
         * a single- or multi-size array representing the slot.
         *
         * @example
         *   var mapping1 =
         *       googletag.sizeMapping()
         *                .addSize([1024, 768], [970, 250])
         *                .addSize([980, 690], [728, 90])
         *                .addSize([640, 480], 'fluid')
         *                .addSize([0, 0], [88, 31]) // All viewports &lt; 640x480
         *                .build();
         *
         *   var mapping2 =
         *       googletag.sizeMapping()
         *                .addSize([1024, 768], [970, 250])
         *                .addSize([980, 690], [])
         *                .addSize([640, 480], [120, 60])
         *                .addSize([0, 0], [])
         *                .build();
         *
         *   // mapping2 will not show any ads for the following viewport sizes:
         *   // [1024, 768] > size >= [980, 690] and
         *   // [640, 480] > size >= [0, 0]
         *
         * @param viewportSize The size of the viewport for this mapping entry.
         * @param slotSize The sizes of the slot for this mapping entry.
         * @return A reference to this builder.
         */
        addSize(viewportSize: SingleSizeArray, slotSize: GeneralSize): SizeMappingBuilder;

        /**
         * Builds a size map specification from the mappings added to this builder.
         * <br><br>
         * If any invalid mappings have been supplied, this method will return
         * <code>null</code>. Otherwise it returns a specification in the correct
         * format to pass to <code><a
         * href="#googletag.Slot_defineSizeMapping">googletag.Slot.defineSizeMapping()</a></code>.
         * <br><br>
         * Note: the behavior of the builder after calling this method is undefined.
         *
         * @return The result built by this builder. Can be null if invalid size
         *     mappings were supplied.
         */
        build(): SizeMappingArray | null;
    }

    /** Slot is an object representing a single ad slot on a page. */
    interface Slot {
        /**
         * Sets a value for an AdSense attribute on this ad slot. This will override
         * any values set at the service level for this key.
         * <br><br>
         * Calling this method more than
         * once for the same key will override previously set values for that key.
         * All values must be set before calling <code>display</code> or
         * <code>refresh</code>.
         *
         * @example
         *   // Setting an attribute on a single ad slot.
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .set('adsense_background_color', '#FFFFFF')
         *            .addService(googletag.pubads());
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/adsense_attributes">
         *     AdSense Attributes</a>
         * @param key The name of the attribute.
         * @param value Attribute value.
         * @return The slot object on which the method was called.
         */
        set(key: string, value: string): Slot;

        /**
         * Returns the value for the AdSense attribute associated with the given
         * key for this slot. To see service-level attributes inherited by
         * this slot, use <code><a
         * href="#googletag.PubAdsService_get">PubAdsService.get()</a></code>.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .set('adsense_background_color', '#FFFFFF')
         *                       .addService(googletag.pubads());
         *
         *   var color = slot.get('adsense_background_color');
         *   // color == '#FFFFFF'.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/adsense_attributes">
         *     AdSense Attributes</a>
         * @param key Name of the attribute to look for.
         * @return Current value for the attribute key, or <code>null</code> if the
         *     key is not present.
         */
        get(key: string): string | null;

        /**
         * Returns the list of attribute keys set on this slot. To see the keys of
         * service-level attributes inherited by this slot, use <code><a
         * href="#googletag.PubAdsService_getAttributeKeys">
         * PubAdsService.getAttributeKeys()</a></code>.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .set('adsense_background_color', '#FFFFFF')
         *                       .set('adsense_border_color', '#AABBCC')
         *                       .addService(googletag.pubads());
         *
         *   var keys = slot.getAttributeKeys();
         *   // Keys are ['adsense_background_color', 'adsense_border_color'].
         *
         * @return Array of attribute keys. Ordering is undefined.
         */
        getAttributeKeys(): string[];

        /**
         * Adds a <code><a href="#googletag.Service">Service</a></code> to this
         * slot.
         *
         * @example
         *   googletag.defineSlot('/1234567/sports', [160, 600])
         *            .addService(googletag.pubads());
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/get-started">
         *     Get Started with Google Publisher Tags</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-test-ad">
         *     Display a test ad</a>
         * @param service The service to be added.
         * @return The slot object on which the method was called.
         */
        addService(service: Service): Slot;

        /**
         * Sets an array of mappings from a minimum viewport size to slot size
         * for this slot.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .addService(googletag.pubads());
         *
         *   var mapping = googletag.sizeMapping()
         *                          .addSize([100, 100], [88, 31])
         *                          .addSize([320, 400], [[320, 50], [300, 50]])
         *                          .build();
         *
         *   slot.defineSizeMapping(mapping);
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/ad-sizes#responsive_ads">
         *     Ad sizes: Responsive ads</a>
         * @param sizeMapping Array of size mappings. You can use <code><a
         *     href="#googletag.SizeMappingBuilder">SizeMappingBuilder</a></code>
         *     to create it. Each size mapping is an array of two elements:
         *     <code><a href="#googletag.SingleSizeArray">SingleSizeArray</a></code>
         *     and <code><a href="#googletag.GeneralSize">GeneralSize</a></code>.
         * @return The slot object on which the method was called.
         */
        defineSizeMapping(sizeMapping: SizeMappingArray): Slot;

        /**
         * Sets the click URL to which users will be redirected after clicking on
         * the ad.
         * <br><br>
         * The Google Ad Manager servers still record a click even if the
         * click URL is replaced. Any landing page URL associated with the creative
         * that is served is appended to the provided value. Subsequent calls
         * overwrite the value. This works only for non-SRA requests.
         *
         * @example
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setClickUrl('http://www.example.com?original_click_url=')
         *            .addService(googletag.pubads());
         *
         * @param value The click URL to set.
         * @return The slot object on which the method was called.
         */
        setClickUrl(value: string): Slot;

        /**
         * Sets a slot-level ad category exclusion label on this slot.
         *
         * @example
         *   // Label = AirlineAd
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setCategoryExclusion('AirlineAd')
         *            .addService(googletag.pubads());
         *
         * @see <a href="https://support.google.com/admanager/answer/3238504">
         *     Custom labels to block ads</a>
         * @param categoryExclusion The ad category exclusion label to add.
         * @return The slot object on which the method was called.
         */
        setCategoryExclusion(categoryExclusion: string): Slot;

        /**
         * Clears all slot-level ad category exclusion labels for this slot.
         *
         * @example
         *   // Set category exclusion to exclude ads with 'AirlineAd' labels.
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .setCategoryExclusion('AirlineAd')
         *                       .addService(googletag.pubads());
         *
         *   // Make an ad request. No ad with 'AirlineAd' label will be returned
         *   // for the slot.
         *
         *   // Clear category exclusions so all ads can be returned.
         *   slot.clearCategoryExclusions();
         *
         *   // Make an ad request. Any ad can be returned for the slot.
         *
         * @return The slot object on which the method was called.
         */
        clearCategoryExclusions(): Slot;

        /**
         * Returns the ad category exclusion labels for this slot.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .setCategoryExclusion('AirlineAd')
         *                       .setCategoryExclusion('TrainAd')
         *                       .addService(googletag.pubads());
         *
         *   var exclusions = slot.getCategoryExclusions();
         *   // exclusions are ['AirlineAd', 'TrainAd']
         *
         * @return The ad category exclusion labels for this slot, or an empty array
         *     if none have been set.
         */
        getCategoryExclusions(): string[];

        /**
         * Sets a custom targeting parameter for this slot. Calling this method
         * multiple times for the same key will overwrite old values. Values set
         * here will overwrite targeting parameters set at the service-level. These
         * keys are defined in your Google Ad Manager account.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .addService(googletag.pubads());
         *
         *   // Example with a single value for a key.
         *   slot.setTargeting('allow_expandable', 'true');
         *
         *   // Example with multiple values for a key inside in an array.
         *   slot.setTargeting('interests', ['sports', 'music']);
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/key-value-targeting">
         *     Key-value targeting</a>
         * @param key Targeting parameter key.
         * @param value Targeting parameter value or array of values.
         * @return The slot object on which the method was called.
         */
        setTargeting(key: string, value: string | string[]): Slot;

        /**
         * Clears specific or all custom slot-level targeting parameters for this
         * slot.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .setTargeting('allow_expandable', 'true')
         *                       .setTargeting('interests', ['sports', 'music'])
         *                       .setTargeting('color', 'red')
         *                       .addService(googletag.pubads());
         *
         *   slot.clearTargeting('color');
         *   // Targeting 'allow_expandable' and 'interests' are still present,
         *   // while 'color' was cleared.
         *
         *   slot.clearTargeting();
         *   // All targeting has been cleared.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/key-value-targeting">
         *     Key-value targeting</a>
         * @param key Targeting parameter key. The key is optional; all
         *     targeting parameters will be cleared if it is unspecified.
         * @return The slot object on which the method was called.
         */
        clearTargeting(key?: string): Slot;

        /**
         * Returns a specific custom targeting parameter set on this slot.
         * Service-level targeting parameters are not included.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .setTargeting('allow_expandable', 'true')
         *                       .addService(googletag.pubads());
         *
         *   var param = slot.getTargeting('allow_expandable');
         *   // param is ['true']
         *
         *   var param = slot.getTargeting('age');
         *   // param is [] (empty array)
         *
         * @param key The targeting key to look for.
         * @return The values associated with this key, or an empty array if there
         *     is no such key.
         */
        getTargeting(key: string): string[];

        /**
         * Returns the list of all custom targeting keys set on this slot.
         * Service-level targeting keys are not included.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .setTargeting('allow_expandable', 'true')
         *                       .setTargeting('interests', ['sports', 'music'])
         *                       .addService(googletag.pubads());
         *
         *   var keys = slot.getTargetingKeys();
         *   // keys are ['interests', 'allow_expandable'].
         *
         * @return Array of targeting keys. Ordering is undefined.
         */
        getTargetingKeys(): string[];

        /**
         * Sets whether the slot <code>div</code> should be hidden when there is no
         * ad in the slot. This overrides the service-level settings.
         *
         * @example
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setCollapseEmptyDiv(true, true)
         *            .addService(googletag.pubads());
         *   // The above will cause the div for this slot to be collapsed
         *   // when the page is loaded, before ads are requested.
         *
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-2')
         *            .setCollapseEmptyDiv(true)
         *            .addService(googletag.pubads());
         *   // The above will cause the div for this slot to be collapsed
         *   // only after GPT detects that no ads are available for the slot.
         *
         * @see <a href="
         *     evelopers.google.com/publisher-tag/samples/collapse-empty-ad-slots">
         *     Collapse empty ad slots</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/guides/minimize-layout-shift">
         *     Minimize layout shift</a>
         * @param collapse Whether to collapse the slot if no ad is returned.
         * @param collapseBeforeAdFetch Whether to collapse the slot even before an
         *     ad is fetched. Ignored if collapse is not <code>true</code>.
         * @return The slot object on which the method was called.
         */
        setCollapseEmptyDiv(collapse: boolean, collapseBeforeAdFetch?: boolean): Slot;

        /**
         * Returns the full path of the ad unit, with the network code and ad unit
         * path.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .addService(googletag.pubads());
         *
         *   var path = slot.getAdUnitPath();
         *   // path is '/1234567/sports'
         *
         * @return Ad unit path.
         */
        getAdUnitPath(): string;

        /**
         * Returns the ID of the slot <code>div</code> provided when the slot was
         * defined.
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                       .addService(googletag.pubads());
         *
         *   var slotElementId = slot.getSlotElementId();
         *   // slotElementId is 'div-1'
         *
         * @return Slot <code>div</code> ID.
         */
        getSlotElementId(): string;

        /**
         * Configures whether ads in this slot should be forced to be rendered using
         * a SafeFrame container.
         * <br><br>
         * Please keep the following things in mind while using this API:
         * <ul>
         *   <li>
         *     This setting will only take effect for <b>subsequent</b> ad requests
         *     made for the respective slots.
         *   </li>
         *   <li>
         *     The slot level setting, if specified, will always override the page
         *     level setting.
         *   </li>
         *   <li>
         *     If set to <code>true</code> (at slot-level or page level), the ad
         *     will always be rendered using a SafeFrame container independent of
         *     the choice made in the Google Ad Manager UI.
         *   </li>
         *   <li>
         *     However, if set to <code>false</code> or left unspecified, the ad
         *     will be rendered using a SafeFrame container depending on the type of
         *     creative and the selection made in the Google Ad Manager UI.
         *   </li>
         *   <li>
         *     This API should be used with caution as it could impact the behaviour
         *     of creatives that attempt to break out of their iFrames or rely on
         *     them being rendered directly in a publishers page.
         *   </li>
         * </ul>
         *
         *
         * @example
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setForceSafeFrame(true)
         *            .addService(googletag.pubads());
         *
         * @see <a href="https://support.google.com/admanager/answer/6023110">
         *     Render creatives using SafeFrame</a>
         * @param forceSafeFrame <code>true</code> to force all ads in this slot to
         *     be rendered in SafeFrames and <code>false</code> to opt-out of a
         *     page-level setting (if present). Setting this to <code>false</code>
         *     when not specified at the page-level won't change anything.
         * @return The slot object on which the method was called.
         */
        setForceSafeFrame(forceSafeFrame: boolean): Slot;

        /**
         * Sets the slot-level preferences for SafeFrame configuration. Any
         * unrecognized keys in the config object will be ignored. The entire config
         * will be ignored if an invalid value is passed for a recognized key.
         *
         * These slot-level preferences, if specified, will override any page-level
         * preferences.
         *
         * @example
         *   googletag.pubads().setForceSafeFrame(true);
         *
         *   // The following slot will have a sandboxed safeframe that only
         *   // disallows top-level navigation.
         *   googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *            .setSafeFrameConfig({sandbox: true})
         *            .addService(googletag.pubads());
         *
         *   // The following slot will inherit page-level settings.
         *   googletag.defineSlot('/1234567/news', [160, 600], 'div-2')
         *            .addService(googletag.pubads());
         *
         *   googletag.display('div-1');
         *   googletag.display('div-2');
         *
         * @see <a href="https://support.google.com/admanager/answer/6023110">
         *     Render creatives using SafeFrame</a>
         * @param config The configuration object.
         * @return The slot object on which the method was called.
         */
        setSafeFrameConfig(config: SafeFrameConfig | null): Slot;

        /**
         * Returns the ad response information. This is based on the last ad
         * response for the slot. If this is called when the slot has no ad,
         * <code>null</code> will be returned.
         *
         * @return The latest ad response information, or <code>null</code> if the
         *     slot has no ad.
         */
        getResponseInformation(): ResponseInformation | null;

        /**
         * Sets custom targeting parameters for this slot, from a key:value map
         * in a JSON object. This is the same as calling <code><a
         * href="#googletag.Slot_setTargeting">setTargeting(key,value)</a></code>
         * for all the key values of the object. These keys are defined in your
         * Google Ad Manager account.
         * <br><br>
         * <b>Notes:</b>
         * <ul>
         *   <li>
         *     In case of overwriting, only the last value will be kept.
         *   </li>
         *   <li>
         *     If the value is an array, any previous value will be overwritten,
         *     not merged.
         *   </li>
         *   <li>
         *     Values set here will overwrite targeting parameters set at the
         *     service-level.
         *   </li>
         * </ul>
         *
         * @example
         *   var slot = googletag.defineSlot('/1234567/sports', [160, 600],
         *                                   'div-1');
         *
         *   slot.updateTargetingFromMap({
         *     'color': 'red',
         *     'interests': ['sports','music','movies']
         *   });
         *
         * @param map Targeting parameter key:value map.
         * @return The slot object on which the method was called.
         */
        updateTargetingFromMap(map: { [adUnitPath: string]: string | string[] }): Slot;

        /**
         * Sets general configuration options for this slot.
         *
         * @param slotConfig The configuration object.
         */
        setConfig(slotConfig: config.SlotSettingsConfig): void;
    }

    /** Array of two numbers representing [width, height]. */
    type SingleSizeArray = [number, number];

    /**
     * Named sizes that a slot can have. In most cases size is a fixed-size
     * rectangle but there are some cases when we need other kinds of size
     * specifications. Only the following are valid named sizes:
     *  <ul>
     *   <li><b>'fluid'</b>: the ad container takes 100% width of parent div and
     *       then resizes its height to fit creative content. Similar to how
     * regular block elements on a page behave. Used for native ads (see <a
     * href="https://support.google.com/admanager/answer/6366845">related
     *       article</a>). Note that both 'fluid' and ['fluid'] are acceptable
     * forms to declare a slot size as fluid.
     *   </li>
     * </ul>
     */
    type NamedSize = string | string[];

    /**
     * A single valid size for a slot.
     */
    type SingleSize = SingleSizeArray | NamedSize;

    /**
     * A list of single valid sizes.
     */
    type MultiSize = SingleSize[];

    /**
     * A valid size configuration for a slot, which can be one or multiple sizes.
     */
    type GeneralSize = SingleSize | MultiSize;

    /**
     * A mapping of viewport size to ad sizes. Used for responsive ads.
     */
    type SizeMapping = [SingleSizeArray, GeneralSize];

    /**
     * A list of size mappings.
     */
    type SizeMappingArray = SizeMapping[];

    /**
     * This is the namespace that GPT uses for <a href="#enumtypes">enum types</a>.
     */
    namespace enums {
        /**
         * Out-of-page formats supported by GPT.
         *
         * @see <a href="#googletag.defineOutOfPageSlot">
         *     <code>googletag.defineOutOfPageSlot</code></a>
         */
        enum OutOfPageFormat {
            /** Anchor format where slot sticks to the top of the viewport. */
            TOP_ANCHOR,
            /** Anchor format where slot sticks to the bottom of the viewport. */
            BOTTOM_ANCHOR,
            /** Web interstitial creative format. */
            INTERSTITIAL,
            /** Rewarded format. */
            REWARDED,
        }

        /**
         * <a href="https://support.google.com/admanager/answer/11233407">
         * Traffic sources</a> supported by GPT.
         *
         * @see <a href="#googletag.PrivacySettingsConfig_trafficSource">
         *     <code>PrivacySettingsConfig.trafficSource</code></a>
         */
        enum TrafficSource {
            /**
             * Traffic redirected from properties other than owned (acquired or otherwise
             * incentivized activity).
             */
            PURCHASED,
            /** Direct URL entry, site search, or app download. */
            ORGANIC,
        }
    }

    /**
     * This is the namespace that GPT uses for
     * <a href="#googletag.events.Event">Events</a>. Your code can react to these
     * events using
     * <a href="#googletag.Service_addEventListener">Service.addEventListener</a>.
     */
    namespace events {
        /**
         * Base Interface for all GPT events. All GPT events below will have the
         * following fields.
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        interface Event {
            /** The slot that triggered the event. */
            slot: Slot;

            /** Name of the service that triggered the event. */
            serviceName: string;
        }

        /**
         * This event is fired when an ad has been requested for a particular slot.
         *
         * @example
         *   // This listener is called when the specified service issues an ad
         *   // request for a slot. Each slot will fire this event, even though they
         *   // may be batched together in a single request if single request
         *   // architecture (SRA) is enabled.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('slotRequested', function(event) {
         *     var slot = event.slot;
         *     console.log('Slot', slot.getSlotElementId(), 'has been requested.');
         *
         *     if (slot === targetSlot) {
         *       // Slot specific logic.
         *     }
         *   });
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotRequestedEvent extends Event {}

        /**
         * This event is fired when the creative code is injected into a slot. This
         * event will occur before the creative's resources are fetched, so the
         * creative may not be visible yet. If you need to know when all creative
         * resources for a slot have finished loading, consider the <a
         * href="#googletag.events_SlotOnloadEvent">SlotOnloadEvent</a> instead.
         *
         * @example
         *   // This listener is called when a slot has finished rendering.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('slotRenderEnded',
         *       function(event) {
         *         var slot = event.slot;
         *         console.group(
         *             'Slot', slot.getSlotElementId(), 'finished rendering.');
         *
         *         // Log details of the rendered ad.
         *         console.log('Advertiser ID:', event.advertiserId);
         *         console.log('Campaign ID: ', event.campaignId);
         *         console.log('Creative ID: ', event.creativeId);
         *         console.log('Is empty?:', event.isEmpty);
         *         console.log('Line Item ID:', event.lineItemId);
         *         console.log('Size:', event.size);
         *         console.log('Source Agnostic Creative ID:',
         *                     event.sourceAgnosticCreativeId);
         *         console.log('Source Agnostic Line Item ID:',
         *                     event.sourceAgnosticLineItemId);
         *         console.groupEnd();
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        interface SlotRenderEndedEvent extends Event {
            /**
             * Whether an ad was returned for the slot. Value is <code>true</code> if
             * no ad was returned, <code>false</code> otherwise.
             */
            isEmpty: boolean;
            /**
             * Indicates the pixel size of the rendered creative. Example:
             * <code>[728, 90]</code>. Value is <code>null</code> for empty ad slots.
             */
            size: number[] | string | null;
            /**
             * Advertiser ID of the rendered ad. Value is <code>null</code> for empty
             * slots, backfill ads, and creatives rendered by services other than
             * <code><a href="#googletag.PubAdsService">PubAdsService</a></code>.
             */
            advertiserId: number | null;
            /**
             * Campaign ID of the rendered ad. Value is <code>null</code> for empty
             * slots, backfill ads, and creatives rendered by services other than
             * <code><a href="#googletag.PubAdsService">PubAdsService</a></code>.
             */
            campaignId: number | null;
            /**
             * Creative ID of the rendered reservation ad. Value is <code>null</code>
             * for empty slots, backfill ads, and creatives rendered by services other
             * than <code><a href="#googletag.PubAdsService">PubAdsService</a></code>.
             */
            creativeId: number | null;
            /**
             * Line item ID of the rendered reservation ad. Value is <code>null</code>
             * for empty slots, backfill ads, and creatives rendered by services other
             * than <code><a href="#googletag.PubAdsService">PubAdsService</a></code>.
             */
            lineItemId: number | null;
            /**
             * Creative ID of the rendered reservation or backfill ad. Value is
             * <code>null</code> if the ad is not a reservation or line item backfill,
             * or the creative is rendered by services other than
             * <code><a href="#googletag.PubAdsService">PubAdsService</a></code>.
             */
            sourceAgnosticCreativeId: number | null;
            /**
             * Line item ID of the rendered reservation or backfill ad. Value is
             * <code>null</code> if the ad is not a reservation or line item backfill,
             * or the creative is rendered by services other than
             * <code><a href="#googletag.PubAdsService">PubAdsService</a></code>.
             */
            sourceAgnosticLineItemId: number | null;
        }

        /**
         * This event is fired when an impression becomes viewable, according to the
         * <a href="https://support.google.com/admanager/answer/4524488">Active
         * View criteria</a>.
         *
         * @example
         *   // This listener is called when an impression becomes viewable.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('impressionViewable',
         *       function(event) {
         *         var slot = event.slot;
         *         console.log('Impression for slot', slot.getSlotElementId(),
         *                     'became viewable.');
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        // tslint:disable-next-line:no-empty-interface
        interface ImpressionViewableEvent extends Event {}

        /**
         * This event is fired when the creative's iframe fires its load event. When
         * rendering rich media ads in sync rendering mode, no iframe is used so no
         * <code>SlotOnloadEvent</code> will be fired.
         *
         * @example
         *   // This listener is called when a creative iframe load event fires.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('slotOnload', function(event) {
         *     var slot = event.slot;
         *     console.log('Creative iframe for slot', slot.getSlotElementId(),
         *                 'has loaded.');
         *
         *     if (slot === targetSlot) {
         *       // Slot specific logic.
         *     }
         *   });
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotOnloadEvent extends Event {}

        /**
         * This event is fired whenever the on-screen percentage of an ad slot's
         * area changes. The event is throttled and will not fire more often than
         * once every 200ms.
         *
         * @example
         *   // This listener is called whenever the on-screen percentage of an
         *   // ad slot's area changes.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('slotVisibilityChanged',
         *       function(event) {
         *         var slot = event.slot;
         *         console.group(
         *             'Visibility of slot', slot.getSlotElementId(), 'changed.');
         *
         *         // Log details of the event.
         *         console.log('Visible area:', event.inViewPercentage + '%');
         *         console.groupEnd();
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        interface SlotVisibilityChangedEvent extends Event {
            /**
             * The percentage of the ad's area that is visible. Value is a number
             * between 0 and 100.
             */
            inViewPercentage: number;
        }

        /**
         * This event is fired when an ad response has been received for a
         * particular slot.
         *
         * @example
         *   // This listener is called when an ad response has been received
         *   // for a slot.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('slotResponseReceived',
         *       function(event) {
         *         var slot = event.slot;
         *         console.log('Ad response for slot', slot.getSlotElementId(),
         *                     'received.');
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotResponseReceived extends Event {}

        /**
         * This event is fired when a reward is granted for viewing a <a
         * href="https://support.google.com/admanager/answer/9116812">rewarded ad</a>.
         * If the ad is closed before the criteria for granting a reward is met, this
         * event will not fire.
         * @example
         *   // This listener is called whenever a reward is granted for a
         *   // rewarded ad.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('rewardedSlotGranted',
         *       function(event) {
         *         var slot = event.slot;
         *         console.group(
         *             'Reward granted for slot', slot.getSlotElementId(), '.');
         *
         *         // Log details of the reward.
         *         console.log('Reward type:', event.payload?.type);
         *         console.log('Reward amount:', event.payload?.amount);
         *         console.groupEnd();
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-rewarded-ad">
         *     Display a rewarded ad</a>
         */
        interface RewardedSlotGrantedEvent extends Event {
            /** An object containing information about the reward that was granted. */
            payload: RewardedPayload | null;
        }

        /**
         * This event is fired when a rewarded ad slot is closed by the user. It may
         * fire either before or after a reward has been granted. To determine whether a
         * reward has been granted, use <code><a
         * href="#googletag.events_RewardedSlotGrantedEvent">RewardedSlotGrantedEvent</a></code>
         * instead.
         * @example
         *   // This listener is called when the user closes a rewarded ad slot.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('rewardedSlotClosed',
         *       function(event) {
         *         var slot = event.slot;
         *         console.log('Rewarded ad slot', slot.getSlotElementId(),
         *                     'has been closed.');
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-rewarded-ad">
         *     Display a rewarded ad</a>
         */

        // tslint:disable-next-line:no-empty-interface
        interface RewardedSlotClosedEvent extends Event {}

        /**
         * This event is fired when a <a
         * href="https://support.google.com/admanager/answer/9116812">rewarded ad</a> is
         * ready to be displayed. The publisher is responsible for presenting the user
         * an option to view the ad before displaying it.
         * @example
         *   // This listener is called when a rewarded ad slot becomes ready to be
         *   // displayed.
         *   var targetSlot = googletag.defineSlot('/1234567/example', [160, 600]);
         *   googletag.pubads().addEventListener('rewardedSlotReady',
         *       function(event) {
         *         var slot = event.slot;
         *         console.log('Rewarded ad slot', slot.getSlotElementId(),
         *                     'is ready to be displayed.');
         *
         *         if('User consents to viewing the ad.') {
         *           // Display the ad.
         *           event.makeRewardedVisible();
         *         }
         *
         *         if (slot === targetSlot) {
         *           // Slot specific logic.
         *         }
         *       }
         *   );
         *
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/ad-event-listeners">
         *     Ad event listeners</a>
         * @see <a href="
         *     https://developers.google.com/publisher-tag/samples/display-rewarded-ad">
         *     Display a rewarded ad</a>
         */
        interface RewardedSlotReadyEvent extends Event {
            /**
             * Displays the rewarded ad. This method should not be called until the user
             * has consented to view the ad.
             */
            makeRewardedVisible(): void;
        }

        /**
         * This is a pseudo-type that maps an event name to its corresponding event
         * object type for <code><a href="#googletag.Service_addEventListener">
         * Service.addEventListener</a></code> and
         * <code><a href="#googletag.Service_removeEventListener">
         * Service.removeEventListener</a></code>. It is documented for reference and
         * type safety purposes only.
         */
        interface EventTypeMap {
            /**
             * Alias for <code><a href="#googletag.events_SlotRequestedEvent">
             * SlotRequestedEvent</a></code>.
             */
            slotRequested: SlotRequestedEvent;

            /**
             * Alias for <code><a href="#googletag.events_SlotRenderEndedEvent">
             * SlotRenderEndedEvent</a></code>.
             */
            slotRenderEnded: SlotRenderEndedEvent;

            /**
             * Alias for <code><a href="#googletag.events_ImpressionViewableEvent">
             * ImpressionViewableEvent</a></code>.
             */
            impressionViewable: ImpressionViewableEvent;

            /**
             * Alias for <code><a href="#googletag.events_SlotOnloadEvent">
             * SlotOnloadEvent</a></code>.
             */
            slotOnload: SlotOnloadEvent;

            /**
             * Alias for <code><a href="#googletag.events_SlotVisibilityChangedEvent">
             * SlotVisibilityChangedEvent</a></code>.
             */
            slotVisibilityChanged: SlotVisibilityChangedEvent;

            /**
             * Alias for <code><a href="#googletag.events_SlotResponseReceived">
             * SlotResponseReceived</a></code>.
             */
            slotResponseReceived: SlotResponseReceived;

            /**
             * Alias for <code><a href="#googletag.events_RewardedSlotGrantedEvent">
             * RewardedSlotGrantedEvent</a></code>.
             */
            rewardedSlotGranted: RewardedSlotGrantedEvent;

            /**
             * Alias for <code><a href="#googletag.events_RewardedSlotClosedEvent">
             * RewardedSlotClosedEvent</a></code>.
             */
            rewardedSlotClosed: RewardedSlotClosedEvent;

            /**
             * Alias for <code><a href="#googletag.events_RewardedSlotReadyEvent">
             * RewardedSlotReadyEvent</a></code>.
             */
            rewardedSlotReady: RewardedSlotReadyEvent;
        }
    }

    /**
     * Main configuration interface for slot-level settings.
     */
    namespace config {
        interface SlotSettingsConfig {
            /**
             * An array of component auctions to be included in an on-device ad auction.
             *
             * @experimental
             */
            componentAuction?: ComponentAuctionConfig[];
        }

        /**
         * An object representing a single component auction in a on-device ad auction.
         *
         * @experimental
         * @see <a href="https://github.com/WICG/turtledove/blob/main/FLEDGE.md#2-sellers-run-on-device-auctions">FLEDGE: Sellers Run On-Device Auctions</a>
         */
        interface ComponentAuctionConfig {
            /**
             * The configuration key associated with this component auction.
             *
             * This value must be non-empty and should be unique. If two
             * <code>ComponentAuctionConfig</code> objects share the same configKey value,
             * the last to be set will overwrite prior configurations.
             */
            configKey: string;

            /**
             * An auction configuration object for this component auction.
             *
             * If this value is set to <code>null</code>, any existing configuration for
             * the specified <code>configKey</code> will be deleted.
             *
             * @example
             *
             * var componentAuctionConfig = {
             *   seller: 'https://testSeller.com', // should be https and the same as
             *                                     // decisionLogicUrl's origin
             *   decisionLogicUrl: 'https://testSeller.com/ssp/decision-logic.js',
             *   interestGroupBuyers: [
             *     'https://example-buyer.com',
             *   ],
             *   auctionSignals: {auction_signals: 'auction_signals'},
             *   sellerSignals: {seller_signals: 'seller_signals'},
             *   perBuyerSignals: {
             *     // listed on interestGroupBuyers
             *     'https://example-buyer.com': {
             *       per_buyer_signals: 'per_buyer_signals',
             *     },
             *   },
             * };
             *
             * var auctionSlot = googletag.defineSlot('/1234567/example', [160, 600]);
             *
             * // To add configKey to the component auction:
             * auctionSlot.setConfig({
             *   componentAuction: [{
             *      configKey: 'https://testSeller.com',
             *      auctionConfig: componentAuctionConfig
             *   }]
             * });
             *
             * // To remove configKey from the component auction:
             * auctionSlot.setConfig({
             *   componentAuction: [{
             *      configKey: 'https://testSeller.com',
             *      auctionConfig: null
             *   }]
             * });
             *
             * @see <a
             * href="https://github.com/WICG/turtledove/blob/main/FLEDGE.md#21-initiating-an-on-device-auction">FLEDGE:
             * Initiating an On-Device Auction</a>
             */
            auctionConfig: {
                seller: string;
                decisionLogicUrl: string;
                trustedScoringSignalsUrl?: string;
                interestGroupBuyers?: string[];
                auctionSignals?: unknown;
                sellerSignals?: unknown;
                sellerTimeout?: number;
                sellerExperimentGroupId?: number;
                perBuyerSignals?: { [buyer: string]: unknown };
                perBuyerTimeouts?: { [buyer: string]: number };
                perBuyerGroupLimits?: { [buyer: string]: number };
                perBuyerExperimentGroupIds?: { [buyer: string]: number };
            } | null;
        }
    }
}
