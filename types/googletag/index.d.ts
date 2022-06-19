// Type definitions for non-npm package Google Publisher Tag (DoubleClick GPT 2022-05-26) 2.1
// Project: https://developers.google.com/publisher-tag/reference
// Definitions by: Wei Wang <https://github.com/atwwei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * The global namespace the [Google Publisher Tag](https://developers.google.com/publisher-tag) uses for its API.
 *
 * The [Google Publisher Tag (GPT)](https://developers.google.com/publisher-tag) is an ad tagging library for Google Ad Manager which is used to dynamically build ad requests.
 * It takes key details from you (such as ad unit code, ad size, and custom targeting), builds the request, and displays the ad on web pages.
 *
 * For a brief overview of GPT, including it's benefits, basic functionality and features, visit the [Ad Manager help center](https://support.google.com/admanager/answer/181073).
 *
 * **Note**: Firstly, [load GPT from the official source](https://developers.google.com/publisher-tag/guides/general-best-practices#load_from_an_official_source) and initialize `googletag`.
 *
 * **Example**
 * ```
 * <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
 * <script>window.googletag = window.googletag || { cmd: [] };</script>
 * <script>
 *   googletag.cmd.push(function() {
 *     // GPT API can be called safely.
 *   });
 * </script>
 * ```
 */
declare namespace googletag {
    /**
     * A valid size configuration for a slot, which can be one or multiple sizes.
     */
    type GeneralSize = SingleSize | MultiSize;
    /**
     * A list of single valid sizes.
     */
    type MultiSize = SingleSize[];
    /**
     * Named sizes that a slot can have.
     * In most cases size is a fixed-size rectangle but there are some cases when we need other kinds of size specifications.
     * Only the following are valid named sizes:
     * - `'fluid'`: the ad container takes 100% width of parent div and then resizes its height to fit creative content.
     * Similar to how regular block elements on a page behave.
     * Used for native ads (see [related article](https://support.google.com/admanager/answer/6366845)).
     * Note that both 'fluid' and ['fluid'] are acceptable forms to declare a slot size as fluid.
     */
    type NamedSize = 'fluid' | ['fluid'];
    /**
     * A single valid size for a slot.
     */
    type SingleSize = SingleSizeArray | NamedSize;
    /**
     * Array of two numbers representing [width, height].
     */
    type SingleSizeArray = [number, number];
    /**
     * A mapping of viewport size to ad sizes. Used for responsive ads.
     */
    type SizeMapping = [SingleSizeArray, GeneralSize];
    /**
     * A list of size mappings.
     */
    type SizeMappingArray = SizeMapping[];
    /**
     * Flag indicating that GPT API is loaded and ready to be called.
     * This property will be simply `undefined` until the API is ready.
     *
     * Note that the recommended way of handling async is to use {@link googletag.cmd} to queue callbacks for when GPT is ready.
     * These callbacks do not have to check googletag.apiReady as they are guaranteed to execute once the API is set up.
     *
     * **Example**
     * ```
     * <script>
     *   if (window.googletag && googletag.apiReady) {
     *     // GPT API can be called safely.
     *   }
     * </script>
     * ```
     */
    let apiReady: boolean | undefined;
    /**
     * Reference to the global command queue for asynchronous execution of GPT-related calls.
     *
     * The {@link googletag.cmd} variable is initialized to an empty JavaScript array by the GPT tag syntax on the page,
     * and {@link cmd.push} is the standard {@link Array.push} method that adds an element to the end of the array.
     * When the GPT JavaScript is loaded, it looks through the array and executes all the functions in order.
     * The script then replaces {@link cmd} with a {@link CommandArray} object whose push method is defined to execute the function argument passed to it.
     * This mechanism allows GPT to reduce perceived latency by fetching the JavaScript asynchronously while allowing the browser to continue rendering the page.
     *
     * **Example**
     * ```
     * googletag.cmd.push(function() {
     *   googletag.defineSlot('/1234567/sports', [160, 600])
     *            .addService(googletag.pubads());
     * });
     * ```
     */
    let cmd: CommandArray | Array<(this: typeof globalThis) => void>;
    /**
     * Flag indicating that {@link PubAdsService} is enabled, loaded and fully operational.
     * This property will be simply `undefined` until {@link googletag.enableServices()} is called and {@link PubAdsService} is loaded and initialized.
     *
     * **Note**: Checking {@link googletag.pubadsReady} is discouraged. Please use {@link googletag.cmd.push} instead.
     */
    let pubadsReady: boolean;
    /**
     * Returns a reference to the {@link CompanionAdsService}.
     * @returns The Companion Ads service.
     */
    function companionAds(): CompanionAdsService;
    /**
     * Constructs an out-of-page (interstitial) ad slot with the given ad unit path.
     *
     * For custom out-of-page ads, `div` is the ID of the div element that will contain the ad.
     * See the article on [out-of-page creatives](https://support.google.com/admanager/answer/6088046) for more details.
     *
     * For GPT managed out-of-page ads, `div` is a supported {@link googletag.enums.OutOfPageFormat OutOfPageFormat}.
     * See the article on [web interstitials](https://support.google.com/admanager/answer/9840201) for more details.
     *
     * **Example**
     * ```
     * // Define a custom out-of-page ad slot.
     * googletag.defineOutOfPageSlot('/1234567/sports', 'div-1');
     * // Define a GPT managed web interstitial ad slot.
     * googletag.defineOutOfPageSlot('/1234567/sports',
     *                               googletag.enums.OutOfPageFormat.INTERSTITIAL);
     * ```
     *
     * @param adUnitPath Full [ad unit path](https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path) with the network code and ad unit code.
     * @param div ID of the div that will contain this ad unit or OutOfPageFormat.
     * @returns The newly created slot, or `null` if a slot cannot be created.
     */
    function defineOutOfPageSlot(adUnitPath: string, div: string | enums.OutOfPageFormat): Slot | null;
    function defineOutOfPageSlot(adUnitPath: string): Slot;
    /**
     * Constructs an ad slot with a given ad unit path and size and associates it with the ID of a div element on the page that will contain the ad.
     *
     * **Example**
     * ```
     * googletag.defineSlot('/1234567/sports', [728, 90], 'div-1');
     * ```
     *
     * @param adUnitPath Full [ad unit path](https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path) with the network code and unit code.
     * @param size Width and height of the added slot.
     * This is the size that is used in the ad request if no responsive size mapping is provided or the size of the viewport is smaller than the smallest size provided in the mapping.
     * @param div ID of the div that will contain this ad unit.
     * @returns The newly created slot, or `null` if a slot cannot be created.
     */
    function defineSlot(adUnitPath: string, size: GeneralSize, div: string): Slot | null;
    function defineSlot(adUnitPath: string, size: GeneralSize): Slot;
    /**
     * @see googletag.defineSlot
     */
    function defineUnit(adUnitPath: string, size: GeneralSize, div: string): Slot | null;
    function defineUnit(adUnitPath: string, size: GeneralSize): Slot;
    /**
     * Destroys the given slots, removing all related objects and references of those slots from GPT.
     * This API does not support passback slots and companion slots.
     *
     * Calling this API on a slot clears the ad and removes the slot object from the internal state maintained by GPT.
     * Calling any more functions on the slot object will result in undefined behaviour.
     * Note the browser may still not free the memory associated with that slot if a reference to it is maintained by the publisher page.
     * Calling this API makes the div associated with that slot available for reuse.
     *
     * In particular, destroying a slot removes the ad from GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
     * so future requests will not be influenced by roadblocks or competitive exclusions involving this ad.
     * Failure to call this function before removing a slot's div from the page will result in undefined behavior.
     *
     * **Example**
     * ```
     * // The calls to construct an ad and display contents.
     * var slot1 = googletag.defineSlot('/1234567/sports', [728, 90], 'div-1');
     * var slot2 = googletag.defineSlot('/1234567/news', [160, 600], 'div-2');
     * var slot3 = googletag.defineSlot('/1234567/weather', [160, 600], 'div-3');
     * // This call to destroy only slot1.
     * googletag.destroySlots([slot1]);
     * // This call to destroy both slot1 and slot2.
     * googletag.destroySlots([slot1, slot2]);
     * // This call to destroy all slots.
     * googletag.destroySlots();
     * ```
     *
     * @param slots The array of slots to destroy. Array is optional; all slots will be destroyed if it is unspecified.
     * @returns `true` if slots have been destroyed, `false` otherwise.
     */
    function destroySlots(slots?: Slot[]): boolean;
    /**
     * Disables the Google Publisher Console. See the [Google Publisher Console](https://developers.google.com/publisher-tag/guides/publisher-console) guide for more details.
     *
     * **Note**: Can only be called after the document is loaded.
     */
    function disablePublisherConsole(): void;
    /**
     * Instructs slot services to render the slot.
     * Each ad slot should only be displayed once per page.
     * All slots must be defined and have a service associated with them before being displayed.
     * The display call must not happen until the element is present in the DOM.
     * The usual way to achieve that is to place it within a script block within the div element named in the method call.
     *
     * If single request architecture (SRA) is being used, all unfetched ad slots at the time this method is called will be fetched at once.
     * To force an ad slot not to display, the entire div must be removed.
     *
     * **Example**
     * ```
     * <div id="div-1" style="width: 728px; height: 90px">
     *   <script type="text/javascript">
     *     googletag.cmd.push(function() {
     *       googletag.display('div-1');
     *     });
     *   </script>
     * </div>
     * ```
     *
     * @param divOrSlot Either the ID of the div element containing the ad slot or the div element, or the slot object.
     * If a div element is provided, it must have an 'id' attribute which matches the ID passed into {@link googletag.defineSlot()}.
     */
    function display(divOrSlot: string | Slot | Element): void;
    /**
     * Enables all GPT services that have been defined for ad slots on the page.
     */
    function enableServices(): void;
    /**
     * Returns the current version of GPT.
     *
     * Learn more about GPT versions in the [GPT version history](https://developers.google.com/publisher-tag/versions).
     *
     * @returns The currently executing GPT version string.
     */
    function getVersion(): string;
    /**
     * Opens the Google Publisher Console. See the [Google Publisher Console](https://developers.google.com/publisher-tag/guides/publisher-console) guide for more details.
     *
     * **Note**: Can only be called after the document is loaded.
     *
     * **Example**
     * ```
     * // Calling with div ID.
     * googletag.openConsole('div-1');
     * // Calling without div ID.
     * googletag.openConsole();
     * ```
     *
     * @param div An ad slot div ID. This value is optional. When provided, the Publisher Console will attempt to open with details of the specified ad slot in view.
     */
    function openConsole(div?: string): void;
    /**
     * Returns a reference to the {@link PubAdsService}.
     * @returns The Publisher Ads service..
     */
    function pubads(): PubAdsService;
    /**
     * Sets the title for all ad container iframes created by {@link PubAdsService}, from this point onwards.
     *
     * **Example**
     * ```
     * googletag.setAdIframeTitle('title');
     * ```
     *
     * @param title The title to set.
     */
    function setAdIframeTitle(title: string): void;
    /**
     * Creates a new {@link SizeMappingBuilder}. See the [Ad Sizes](https://developers.google.com/publisher-tag/guides/ad-sizes#responsive_ads) guide for more details.
     * @returns A new builder.
     */
    function sizeMapping(): SizeMappingBuilder;
    /**
     * The command array accepts a sequence of functions and invokes them in order. It is intended to replace a standard array that is used to enqueue functions to be invoked once GPT is loaded.
     */
    interface CommandArray {
        /**
         * Executes the sequence of functions specified in the arguments in order.
         *
         * **Example**
         * ```
         * googletag.cmd.push(function() {
         *   googletag.defineSlot('/1234567/sports', [160, 600])
         *            .addService(googletag.pubads());
         * });
         * ```
         *
         * @param ...f A JavaScript function to be executed.
         * The runtime binding will always be [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis).
         * Consider passing an arrow function to retain the this value of the enclosing lexical context.
         * @returns The number of commands processed so far. This is compatible with {@link Array.push}'s return value (the current length of the array).
         */
        push(...f: Array<(this: typeof globalThis) => void>): number;
    }
    /**
     * Companion Ads service.
     * This service is used by video ads to show companion ads.
     * See the article on [companion ads for video](https://support.google.com/admanager/answer/1191131) for more details.
     */
    interface CompanionAdsService extends Service {
        getName(): 'companion_ads';
        /**
         * Sets whether companion slots that have not been filled will be automatically backfilled.
         *
         * This method can be called multiple times during the page's lifetime to turn backfill on and off.
         * Only slots that are also registered with the {@link PubAdsService} will be backfilled.
         * Due to policy restrictions, this method is not designed to fill empty companion slots when an Ad Exchange video is served.
         *
         * **Example**
         * ```
         * googletag.companionAds().setRefreshUnfilledSlots(true);
         * ```
         *
         * @param value `true` to automatically backfill unfilled slots, `false` to leave them unchanged.
         */
        setRefreshUnfilledSlots(value: boolean): void;
    }
    /**
     * Configuration object for privacy settings.
     */
    interface PrivacySettingsConfig {
        /**
         * Indicates whether the page should be [treated as child-directed](https://support.google.com/admanager/answer/3671211). Set to `null` to clear the configuration.
         */
        childDirectedTreatment?: boolean | null;
        /**
         * Enables serving to run in [limited ads](https://support.google.com/admanager/answer/9882911) mode to aid in publisher regulatory compliance needs.
         * When enabled, the GPT library itself may optionally be requested from a cookie-less,
         * [limited ads URL](https://developers.google.com/publisher-tag/guides/general-best-practices#load_from_an_official_source).
         */
        limitedAds?: boolean;
        /**
         * Enables serving to run in [non-personalized ads](https://support.google.com/admanager/answer/9005435) mode to aid in publisher regulatory compliance needs.
         */
        nonPersonalizedAds?: boolean;
        /**
         * Enables serving to run in [restricted processing mode](https://support.google.com/admanager/answer/9598414) to aid in publisher regulatory compliance needs.
         */
        restrictDataProcessing?: boolean;
        /**
         * Indicates whether requests represent purchased or organic traffic.
         * This value populates the [Traffic source](https://support.google.com/admanager/answer/11233407) dimension in Ad Manager reporting.
         * If not set, traffic source defaults to `undefined` in reporting.
         *
         * **Example**
         * ```
         * // Indicate requests represent organic traffic.
         * googletag.pubads().setPrivacySettings({
         *   trafficSource: googletag.enums.TrafficSource.ORGANIC
         * });
         * // Indicate requests represent purchased traffic.
         * googletag.pubads().setPrivacySettings({
         *   trafficSource: googletag.enums.TrafficSource.PURCHASED
         * });
         * ```
         */
        trafficSource?: enums.TrafficSource;
        /**
         * Indicates whether to mark ad requests as coming from users [under the age of consent](https://support.google.com/admanager/answer/9004919). Set to `null` to clear the configuration.
         */
        underAgeOfConsent?: boolean | null;
    }
    /**
     * Publisher Ads service. This service is used to fetch and show ads from your Google Ad Manager account.
     */
    interface PubAdsService extends Service {
        /**
         * Removes the ads from the given slots and replaces them with blank content.
         * The slots will be marked as unfetched.
         *
         * In particular, clearing a slot removes the ad from GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * so future requests will not be influenced by roadblocks or competitive exclusions involving this ad.
         *
         * **Example**
         * ```
         * // This call to clear only slot1.
         * googletag.pubads().clear([slot1]);
         * // This call to clear both slot1 and slot2.
         * googletag.pubads().clear([slot1, slot2]);
         * // This call to clear all slots.
         * googletag.pubads().clear();
         * ```
         *
         * @param slots The array of slots to clear. Array is optional; all slots will be cleared if it is unspecified.
         * @returns Returns `true` if slots have been cleared, `false` otherwise.
         */
        clear(slots?: Slot[]): boolean;
        /**
         * Clears all page-level ad category exclusion labels. This is useful if you want to refresh the slot.
         *
         * ****
         * ```
         * // Set category exclusion to exclude ads with 'AirlineAd' labels.
         * googletag.pubads().setCategoryExclusion('AirlineAd');
         * // Make ad requests. No ad with 'AirlineAd' label will be returned.
         * // Clear category exclusions so all ads can be returned.
         * googletag.pubads().clearCategoryExclusions();
         * // Make ad requests. Any ad can be returned.
         * ```
         *
         * @returns The service object on which the method was called.
         */
        clearCategoryExclusions(): PubAdsService;
        clearTagForChildDirectedTreatment(): PubAdsService;
        /**
         * Clears custom targeting parameters for a specific key or for all keys.
         *
         * ****
         * ```
         * googletag.pubads().setTargeting('interests', 'sports');
         * googletag.pubads().setTargeting('colors', 'blue');
         * googletag.pubads().setTargeting('fruits', 'apple');
         * googletag.pubads().clearTargeting('interests');
         * // Targeting 'colors' and 'fruits' are still present, while 'interests' was cleared.
         * googletag.pubads().clearTargeting();
         * // All targeting has been cleared.
         * ```
         *
         * @param key Targeting parameter key. The key is optional; all targeting parameters will be cleared if it is unspecified.
         * @returns The service object on which the method was called.
         */
        clearTargeting(key?: string): PubAdsService;
        /**
         * Enables collapsing of slot divs so that they don't take up any space on the page when there is no ad content to display.
         * This mode must be set before the service is enabled. See the [collapse empty ad slots](https://developers.google.com/publisher-tag/samples/collapse-empty-ad-slots) sample for more details.
         * @param collapseBeforeAdFetch Whether to collapse the slots even before the ads are fetched. This parameter is optional; if not provided, `false` will be used as the default value.
         * @returns Returns `true` if div collapse mode was enabled and `false` if it is impossible to enable collapse mode because the method was called after the service was enabled.
         */
        collapseEmptyDivs(collapseBeforeAdFetch?: boolean): boolean;
        /**
         * Disables requests for ads on page load, but allows ads to be requested with a {@link refresh googletag.pubads().refresh()} call.
         * This should be set prior to enabling the service.
         * Async mode must be used; otherwise it will be impossible to request ads using `refresh`.
         */
        disableInitialLoad(): void;
        /**
         * Constructs and displays an ad slot with the given ad unit path and size. This method does not work with single request mode.
         *
         * **Note**: When this method is called, a snapshot of the slot and page state is created to ensure consistency when sending the ad request and rendering the response.
         * Any changes that are made to the slot or page state after this method is called (including targeting, privacy settings, force SafeFrame, etc.)
         * will only apply to subsequent `display()` or `refresh()` requests.
         *
         * **Example**
         * ```
         * googletag.pubads().display('/1234567/sports', [728, 90], 'div-1');
         * ```
         *
         * @param adUnitPath The [ad unit path](https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path) of slot to be rendered.
         * @param size Width and height of the slot.
         * @param div Either the ID of the div containing the slot or the div element itself.
         * @param clickUrl The click URL to use on this slot.
         */
        display(adUnitPath: string, size: GeneralSize, div?: string | Element, clickUrl?: string): void;
        /**
         * Enables lazy loading in GPT as defined by the config object.
         * For more detailed examples, see the [Lazy loading](https://developers.google.com/publisher-tag/samples/lazy-loading) sample.
         *
         * **Notes:**
         * - Lazy fetching in SRA only works if all slots are outside the fetching margin.
         *
         * **Example**
         * ```
         * googletag.pubads().enableLazyLoad({
         *   fetchMarginPercent: 500,  // Fetch slots within 5 viewports.
         *   renderMarginPercent: 200,  // Render slots within 2 viewports.
         *   mobileScaling: 2.0  // Double the above values on mobile.
         * });
         * ```
         *
         * @param config Configuration object allows customization of lazy behavior.
         * Any omitted configurations will use a default set by Google that will be tuned over time.
         * To disable a particular setting, such as a fetching margin, set the value to `-1`.
         *
         * **fetchMarginPercent**
         * >The minimum distance from the current viewport a slot must be before we fetch the ad as a percentage of viewport size.
         * A value of 0 means "when the slot enters the viewport", 100 means "when the ad is 1 viewport away", and so on.
         *
         * **renderMarginPercent**
         * >The minimum distance from the current viewport a slot must be before we render an ad.
         * This allows for prefetching the ad, but waiting to render and download other subresources.
         * The value works just like `fetchMarginPercent` as a percentage of viewport.
         *
         * **mobileScaling**
         * >A multiplier applied to margins on mobile devices. This allows varying margins on mobile vs. desktop.
         * For example, a value of 2.0 will multiply all margins by 2 on mobile devices, increasing the minimum distance a slot can be before fetching and rendering.
         */
        enableLazyLoad(config?: {
            fetchMarginPercent?: number;
            renderMarginPercent?: number;
            mobileScaling?: number;
        }): void;
        /**
         * Enables single request mode for fetching multiple ads at the same time.
         * This requires all Publisher Ads slots to be defined and added to the PubAdsService prior to enabling the service.
         * Single request mode must be set before the service is enabled.
         * @returns Returns `true` if single request mode was enabled and `false` if it is impossible to enable single request mode because the method was called after the service was enabled.
         */
        enableSingleRequest(): boolean;
        /**
         * Signals to GPT that video ads will be present on the page.
         * This enables competitive exclusion constraints on display and video ads.
         * If the video content is known, call {@link setVideoContent} in order to be able to use content exclusion for display ads.
         */
        enableVideoAds(): void;
        /**
         * Returns the value for the AdSense attribute associated with the given key.
         *
         * **Example**
         * ```
         * googletag.pubads().set('adsense_background_color', '#FFFFFF');
         * var color = googletag.pubads().get('adsense_background_color');
         * // color == '#FFFFFF'.
         * ```
         *
         * @param key Name of the attribute to look for.
         * @returns Current value for the attribute key, or `null` if the key is not present.
         */
        get(key: adsense.AttributeName): string | null;
        /**
         * Returns the attribute keys that have been set on this service.
         *
         * **Example**
         * ```
         * googletag.pubads().set('adsense_background_color', '#FFFFFF');
         * googletag.pubads().set('adsense_border_color', '#AABBCC');
         * var keys = googletag.pubads().getAttributeKeys();
         * // Keys are ['adsense_background_color', 'adsense_border_color'].
         * ```
         *
         * @returns Array of attribute keys set on this service. Ordering is undefined.
         */
        getAttributeKeys(): string[];
        getCorrelator(): string;
        getImaContent(): Record<'vid' | 'cmsid', string>;
        getName(): 'publisher_ads';
        getTagSessionCorrelator(): number;
        getVersion(): string;
        getVideoContent(): Record<'vid' | 'cmsid', string>;
        /**
         * Returns a specific custom service-level targeting parameter that has been set.
         *
         * ****
         * ```
         * googletag.pubads().setTargeting('interests', 'sports');
         * var param = googletag.pubads().getTargeting('interests');
         * // param is ['sports']
         * var param = googletag.pubads().getTargeting('age');
         * // param is [] (empty array)
         * ```
         *
         * @param key The targeting key to look for.
         * @returns The values associated with this key, or an empty array if there is no such key.
         */
        getTargeting(key: string): string[];
        /**
         * Returns the list of all custom service-level targeting keys that have been set.
         *
         * **Example**
         * ```
         * googletag.pubads().setTargeting('interests', 'sports');
         * googletag.pubads().setTargeting('colors', 'blue');
         * var keys = googletag.pubads().getTargetingKeys();
         * // keys are ['interests', 'colors'].
         * ```
         *
         * @returns Array of targeting keys. Ordering is undefined.
         */
        getTargetingKeys(): string[];
        /**
         * Returns whether or not initial requests for ads was successfully disabled by a previous {@link disableInitialLoad} call.
         * @returns Returns `true` if a previous call to {@link disableInitialLoad} was successful, `false` otherwise.
         */
        isInitialLoadDisabled(): boolean;
        /**
         * Whether or not enable single request mode for fetching multiple ads at the same time.
         */
        isSRA(): boolean;
        /**
         * Fetches and displays new ads for specific or all slots on the page.
         * Works only in asynchronous rendering mode.
         *
         * For proper behavior across all browsers, calling `refresh` must be preceded by a call to `display` the ad slot.
         * If the call to `display` is omitted, refresh may behave unexpectedly.
         * If desired, the {@link disableInitialLoad} method can be used to stop `display` from fetching an ad.
         *
         * Refreshing a slot removes the old ad from GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * so future requests will not be influenced by roadblocks or competitive exclusions involving that ad.
         *
         * **Example**
         * ```
         * // This call to refresh fetches a new ad for slot1 only.
         * googletag.pubads().refresh([slot1]);
         * // This call to refresh fetches a new ad for both slot1 and slot2.
         * googletag.pubads().refresh([slot1, slot2]);
         * // This call to refresh fetches a new ad for each slot.
         * googletag.pubads().refresh();
         * // This call to refresh fetches a new ad for slot1, without changing
         * // the correlator.
         * googletag.pubads().refresh([slot1], {changeCorrelator: false});
         * // This call to refresh fetches a new ad for each slot, without
         * // changing the correlator.
         * googletag.pubads().refresh(null, {changeCorrelator: false});
         * ```
         *
         * @param slots The slots to refresh. Array is optional; all slots will be refreshed if it is unspecified.
         * @param options Configuration options associated with this refresh call.
         *
         * **changeCorrelator**
         * >Specifies whether or not a new correlator is to be generated for fetching ads.
         * Our ad servers maintain this correlator value briefly (currently for 30 seconds, but subject to change),
         * such that requests with the same correlator received close together will be considered a single page view. By default a new correlator is generated for every refresh.
         *
         * >**Note**: this option has no effect on GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * which automatically reflects the ads currently on the page and has no expiration time.
         */
        refresh(slots?: Slot[], options?: { changeCorrelator: boolean }): void;
        /**
         * Sets values for AdSense attributes that apply to all ad slots under the Publisher Ads service.
         *
         * See {@link adsense.AttributeName AdSense Attributes} for a list of available keys and values.
         * Calling this more than once for the same key will override previously set values for that key.
         * All values must be set before calling `display` or `refresh`.
         *
         * **Example**
         * ```
         * googletag.pubads().set('adsense_background_color', '#FFFFFF');
         * ```
         *
         * @param key The name of the attribute.
         * @param value Attribute value.
         * @returns The service object on which the method was called.
         */
        set(key: adsense.AttributeName, value: string): PubAdsService;
        /**
         * Sets a page-level ad category exclusion for the given label name.
         *
         * See the article on [ad exclusion](https://support.google.com/admanager/answer/3238504) for more details.
         *
         * **Example**
         * ```
         * // Label = AirlineAd.
         * googletag.pubads().setCategoryExclusion('AirlineAd');
         * ```
         *
         * @param categoryExclusion The ad category exclusion label to add.
         * @returns The service object on which the method was called.
         */
        setCategoryExclusion(categoryExclusion: string): PubAdsService;
        /**
         * Enables and disables horizontal centering of ads. Centering is disabled by default. In legacy gpt_mobile.js, centering is enabled by default.
         *
         * This method should be invoked before calling `display` or `refresh` because only ads that are requested after calling this method will be centered.
         *
         * **Example**
         * ```
         * // Make ads centered.
         * googletag.pubads().setCentering(true);
         * ```
         *
         * @param centerAds `true` to center ads, `false` to left-align them.
         */
        setCentering(centerAds: boolean): void;
        /**
         * Configures whether all ads on the page should be forced to be rendered using a SafeFrame container.
         * For more details, please see the article on [rendering creatives using SafeFrame](https://support.google.com/admanager/answer/6023110).
         *
         * Please keep the following things in mind while using this API:
         * - This setting will only take effect for **subsequent** ad requests made for the respective slots.
         * - The slot level setting, if specified, will always override the page level setting.
         * - If set to `true` (at slot-level or page level), the ad will always be rendered using a SafeFrame container independent of the choice made in the Google Ad Manager UI.
         * - However, if set to `false` or left unspecified, the ad will be rendered using a SafeFrame container depending on the type of creative and the selection made in the Google Ad Manager UI
         * (see [related article](https://support.google.com/admanager/answer/6023110)).
         * - This API should be used with caution as it could impact the behaviour of creatives that attempt to break out of their iFrames or rely on them being rendered directly in a publishers page.
         *
         * **Example**
         * ```
         * googletag.pubads().setForceSafeFrame(true);
         * // The following slot will be opted-out of the page-level force
         * // SafeFrame instruction.
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setForceSafeFrame(false)
         *          .addService(googletag.pubads());
         * // The following slot will have SafeFrame forced.
         * googletag.defineSlot('/1234567/news', [160, 600], 'div-2')
         *          .addService(googletag.pubads());
         * googletag.display();
         * ```
         *
         * @param forceSafeFrame `true` to force all ads on the page to be rendered in SafeFrames and `false` to change the previous setting to false.
         * Setting this to `false` when unspecified earlier, won't change anything.
         * @returns The service object on which the function was called.
         */
        setForceSafeFrame(forceSafeFrame: boolean): PubAdsService;
        setImaContent(imaContentId: string, imaCmsId: string): void;
        /**
         * Passes location information from websites so you can geo-target line items to specific locations.
         *
         * **Example**
         * ```
         * // Postal code:
         * googletag.pubads().setLocation("10001,US")
         * ```
         *
         * @param address Freeform address.
         * @returns The service object on which the method was called.
         */
        setLocation(address: string): PubAdsService;
        /**
         * Allows configuration of all privacy settings from a single API using a config object.
         *
         * **Example**
         * ```
         * googletag.pubads().setPrivacySettings({
         *   restrictDataProcessing: true,
         * });
         * // Set multiple privacy settings at the same time.
         * googletag.pubads().setPrivacySettings({
         *   childDirectedTreatment: true,
         *   underAgeOfConsent: true
         * });
         * // Clear the configuration for childDirectedTreatment.
         * googletag.pubads().setPrivacySettings({
         *   childDirectedTreatment: null
         * });
         * ```
         *
         * @param privacySettings Object containing privacy settings config.
         * @returns The service object on which the function was called.
         */
        setPrivacySettings(privacySettings: PrivacySettingsConfig): PubAdsService;
        /**
         * Sets the value for the publisher-provided ID. See the article on [PPID](https://support.google.com/admanager/answer/2880055) for more details.
         *
         * **Example**
         * ```
         * googletag.pubads().setPublisherProvidedId('AB123456789');
         * ```
         *
         * @param ppid An alphanumeric ID provided by the publisher with a recommended maximum of 150 characters.
         * @returns The service object on which the method was called.
         */
        setPublisherProvidedId(ppid: string): PubAdsService;
        /**
         * Configures whether the page should request personalized or non-personalized ads. Personalized ads served by default.
         *
         * **Example**
         * ```
         * // Mark ad requests to request non-personalized ads.
         * googletag.pubads().setRequestNonPersonalizedAds(1);
         * ```
         *
         * @param nonPersonalizedAds `0` for personalized ads, `1` for non-personalized ads.
         * @returns The service object on which the method was called.
         */
        setRequestNonPersonalizedAds(nonPersonalizedAds: number): PubAdsService;
        /**
         * Sets the page-level preferences for SafeFrame configuration.
         * Any unrecognized keys in the config object will be ignored.
         * The entire config will be ignored if an invalid value is passed for a recognized key.
         *
         * These page-level preferences will be overridden by slot-level preferences, if specified.
         * For more details, please see the article on [rendering creatives using SafeFrame](https://support.google.com/admanager/answer/6023110).
         *
         * **Example**
         * ```
         * googletag.pubads().setForceSafeFrame(true);
         * var pageConfig = {
         *   allowOverlayExpansion: true,
         *   allowPushExpansion: true,
         *   sandbox: true,
         *   useUniqueDomain: true
         * };
         * var slotConfig = {allowOverlayExpansion: false};
         * googletag.pubads().setSafeFrameConfig(pageConfig);
         * // The following slot will not allow for expansion by overlay.
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setSafeFrameConfig(slotConfig)
         *          .addService(googletag.pubads());
         * // The following slot will inherit the page level settings, and hence
         * // would allow for expansion by overlay.
         * googletag.defineSlot('/1234567/news', [160, 600], 'div-2')
         *          .addService(googletag.pubads());
         * googletag.display();
         * ```
         *
         * @param config The configuration object.
         * @returns The service object on which the method was called.
         */
        setSafeFrameConfig(config: SafeFrameConfig): PubAdsService;
        setTagForChildDirectedTreatment(childDirectedTreatment: 0 | 1): PubAdsService;
        setTagForUnderAgeOfConsent(underAgeOfConsent: 2 | 0 | 1): PubAdsService;
        /**
         * Sets custom targeting parameters for a given key that apply to all pubads service ad slots.
         * Calling this multiple times for the same key will overwrite old values.
         * These keys are defined in your Google Ad Manager account.
         *
         * **Example**
         * ```
         * // Example with a single value for a key.
         * googletag.pubads().setTargeting('interests', 'sports');
         * // Example with multiple values for a key inside in an array.
         * googletag.pubads().setTargeting('interests', ['sports', 'music']);
         * ```
         *
         * @param key Targeting parameter key.
         * @param value Targeting parameter value or array of values.
         * @returns The service object on which the method was called.
         */
        setTargeting(key: string, value: string | string[]): PubAdsService;
        /**
         * Sets the video content information to be sent along with the ad requests for targeting and content exclusion purposes.
         * Video ads will be automatically enabled when this method is called.
         * For `videoContentId` and `videoCmsId`, use the values that are provided to the Google Ad Manager content ingestion service.
         *
         * See the article on [video content](https://support.google.com/admanager/answer/1068325) for more details.
         *
         * @param videoContentId The video content ID.
         * @param videoCmsId The video CMS ID.
         */
        setVideoContent(videoContentId: string, videoCmsId: string): void;
    }
    /**
     * Public interface for ResponseInformation.
     */
    interface ResponseInformation {
        /**
         * The ID of the advertiser.
         */
        advertiserId: number | null;
        /**
         * The ID of the campaign.
         */
        campaignId: number | null;
        /**
         * The ID of the creative.
         */
        creativeId: number | null;
        /**
         * The template id of the ad.
         */
        creativeTemplateId: number | null;
        /**
         * The ID of the line item.
         */
        lineItemId: number | null;
    }
    /**
     * An object representing the reward associated with a [rewarded ad](https://support.google.com/admanager/answer/9116812).
     */
    interface RewardedPayload {
        /**
         * The number of items included in the reward.
         */
        amount: number;
        /**
         * The type of item included in the reward (for example, "coin").
         */
        type: string;
    }
    /**
     * Configuration object for [SafeFrame](https://support.google.com/admanager/answer/6023110) containers.
     */
    interface SafeFrameConfig {
        /**
         * Whether SafeFrame should allow ad content to expand by overlaying page content.
         */
        allowOverlayExpansion?: boolean;
        /**
         * Whether SafeFrame should allow ad content to expand by pushing page content.
         */
        allowPushExpansion?: boolean;
        /**
         * Whether SafeFrame should use the HTML5 sandbox attribute to prevent top level navigation without user interaction.
         * The only valid value is `true` (cannot be forced to `false`). Note that the sandbox attribute disables plugins (e.g. Flash).
         */
        sandbox?: boolean;
    }
    /**
     * Base service class that contains methods common for all services.
     */
    interface Service {
        /**
         * Registers a listener that allows you to set up and call a JavaScript function when a specific GPT event happens on the page. The following events are supported:
         * - {@link googletag.events.ImpressionViewableEvent}
         * - {@link googletag.events.RewardedSlotClosedEvent}
         * - {@link googletag.events.RewardedSlotGrantedEvent}
         * - {@link googletag.events.RewardedSlotReadyEvent}
         * - {@link googletag.events.SlotOnloadEvent}
         * - {@link googletag.events.SlotRenderEndedEvent}
         * - {@link googletag.events.SlotRequestedEvent}
         * - {@link googletag.events.SlotResponseReceived}
         * - {@link googletag.events.SlotVisibilityChangedEvent}
         *
         * An object of the appropriate event type is passed to the listener when it is called.
         *
         * **Example**
         * ```
         * // 1. Adding an event listener for the PubAdsService.
         * googletag.pubads().addEventListener('slotOnload', function(event) {
         *   console.log('Slot has been loaded:');
         *   console.log(event);
         * });
         * // 2. Adding an event listener with slot specific logic.
         * // Listeners operate at service level, which means that you cannot add
         * // a listener for an event for a specific slot only. You can, however,
         * // programmatically filter a listener to respond only to a certain ad
         * // slot, using this pattern:
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('slotOnload', function(event) {
         *   if (event.slot === targetSlot) {
         *     // Slot specific logic.
         *   }
         * });
         * ```
         *
         * @param eventType A string representing the type of event generated by GPT. Event types are case sensitive.
         * @param listener Function that takes a single event object argument.
         * @returns The service object on which the method was called.
         */
        addEventListener(eventType: events.EventType, listener: (event: events.Event) => void): Service;
        addEventListener(
            eventType: 'rewardedSlotGranted',
            listener: (event: events.RewardedSlotGrantedEvent) => void,
        ): Service;
        addEventListener(
            eventType: 'rewardedSlotReady',
            listener: (event: events.RewardedSlotReadyEvent) => void,
        ): Service;
        addEventListener(eventType: 'slotRenderEnded', listener: (event: events.SlotRenderEndedEvent) => void): Service;
        addEventListener(
            eventType: 'slotVisibilityChanged',
            listener: (event: events.SlotVisibilityChangedEvent) => void,
        ): Service;
        /**
         * Get the name of this service.
         */
        getName(): string;
        /**
         * Get the key:value map of slots associated with this service.
         */
        getSlotIdMap(): Record<string, Slot>;
        /**
         * Get the list of slots associated with this service.
         * @returns Slots in the order in which they were added to the service.
         */
        getSlots(): Slot[];
        /**
         * Removes a previously registered listener.
         *
         * **Example**
         * ```
         * googletag.cmd.push(function() {
         *   // Define a new ad slot.
         *   googletag.defineSlot('/6355419/Travel', [728, 90], 'div-for-slot')
         *            .addService(googletag.pubads());
         *   // Define a new function that removes itself via removeEventListener
         *   // after the impressionViewable event fires.
         *   var onViewableListener = function(event) {
         *     googletag.pubads().removeEventListener('impressionViewable', onViewableListener);
         *     setTimeout(function() {
         *       googletag.pubads().refresh([event.slot]);
         *     }, 30000);
         *   };
         *   // Add onViewableListener as a listener for impressionViewable events.
         *   googletag.pubads().addEventListener('impressionViewable', onViewableListener);
         *   googletag.enableServices();
         * });
         * ```
         *
         * @param eventType A string representing the type of event generated by GPT. Event types are case sensitive.
         * @param listener Function that takes a single event object argument.
         * @returns Whether existing event listener was removed.
         */
        removeEventListener(eventType: events.EventType, listener: (event: events.Event) => void): boolean;
        removeEventListener(
            eventType: 'rewardedSlotGranted',
            listener: (event: events.RewardedSlotGrantedEvent) => void,
        ): boolean;
        removeEventListener(
            eventType: 'rewardedSlotReady',
            listener: (event: events.RewardedSlotReadyEvent) => void,
        ): boolean;
        removeEventListener(
            eventType: 'slotRenderEnded',
            listener: (event: events.SlotRenderEndedEvent) => void,
        ): boolean;
        removeEventListener(
            eventType: 'slotVisibilityChanged',
            listener: (event: events.SlotVisibilityChangedEvent) => void,
        ): boolean;
    }
    interface Size {
        height: number;
        width: number;
        getHeight(): number;
        getWidth(): number;
    }
    /**
     * Builder for size mapping specification objects.
     * This builder is provided to help easily construct size specifications.
     * See the article on [responsive design](https://support.google.com/admanager/answer/3423562) for more details.
     */
    interface SizeMappingBuilder {
        /**
         * Adds a mapping from a single-size array (representing the viewport) to a single- or multi-size array representing the slot.
         *
         * **Example**
         * ```
         * var mapping1 =
         *     googletag.sizeMapping()
         *              .addSize([1024, 768], [970, 250])
         *              .addSize([980, 690], [728, 90])
         *              .addSize([640, 480], 'fluid')
         *              .addSize([0, 0], [88, 31]) // All viewports < 640x480
         *              .build();
         * var mapping2 =
         *     googletag.sizeMapping()
         *              .addSize([1024, 768], [970, 250])
         *              .addSize([980, 690], [])
         *              .addSize([640, 480], [120, 60])
         *              .addSize([0, 0], [])
         *              .build();
         * // mapping2 will not show any ads for the following viewport sizes:
         * // [1024, 768] > size >= [980, 690] and
         * // [640, 480] > size >= [0, 0]
         * ```
         *
         * @param viewportSize The size of the viewport for this mapping entry.
         * @param slotSize The sizes of the slot for this mapping entry.
         * @returns A reference to this builder.
         */
        addSize(viewportSize: SingleSizeArray, slotSize: GeneralSize): SizeMappingBuilder;
        /**
         * Builds a size map specification from the mappings added to this builder.
         *
         * If any invalid mappings have been supplied, this method will return `null`.
         * Otherwise it returns a specification in the correct format to pass to {@link googletag.Slot.defineSizeMapping()}.
         *
         * Note: the behavior of the builder after calling this method is undefined.
         *
         * @returns The result built by this builder. Can be null if invalid size mappings were supplied.
         */
        build(): SizeMappingArray;
    }
    /**
     * Slot is an object representing single ad slot on a page.
     */
    interface Slot {
        /**
         * Adds a {@link Service} to this slot.
         *
         * **Example**
         * ```
         * googletag.defineSlot('/1234567/sports', [160, 600])
         *          .addService(googletag.pubads());
         * ```
         *
         * @param service The service to be added.
         * @returns The slot object on which the method was called.
         */
        addService(service: Service): Slot;
        /**
         * Clears all slot-level ad category exclusion labels for this slot.
         *
         * **Example**
         * ```
         * // Set category exclusion to exclude ads with 'AirlineAd' labels.
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .setCategoryExclusion('AirlineAd')
         *                     .addService(googletag.pubads());
         * // Make an ad request. No ad with 'AirlineAd' label will be returned
         * // for the slot.
         * // Clear category exclusions so all ads can be returned.
         * slot.clearCategoryExclusions();
         * // Make an ad request. Any ad can be returned for the slot.
         * ```
         *
         * @returns The slot object on which the method was called.
         */
        clearCategoryExclusions(): Slot;
        /**
         * Clears specific or all custom slot-level targeting parameters for this slot.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .setTargeting('allow_expandable', 'true')
         *                     .setTargeting('interests', ['sports', 'music'])
         *                     .setTargeting('color', 'red')
         *                     .addService(googletag.pubads());
         * slot.clearTargeting('color');
         * // Targeting 'allow_expandable' and 'interests' are still present,
         * // while 'color' was cleared.
         * slot.clearTargeting();
         * // All targeting has been cleared.
         * ```
         *
         * @param key Targeting parameter key. The key is optional; all targeting parameters will be cleared if it is unspecified.
         * @returns The slot object on which the method was called.
         */
        clearTargeting(key?: string): Slot;
        /**
         * Sets an array of mappings from a minimum viewport size to slot size for this slot.
         *
         * See the [Ad sizes](https://developers.google.com/publisher-tag/guides/ad-sizes#responsive_ads) guide for more details.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .addService(googletag.pubads());
         * var mapping = googletag.sizeMapping()
         *                        .addSize([100, 100], [88, 31])
         *                        .addSize([320, 400], [[320, 50], [300, 50]])
         *                        .build();
         * slot.defineSizeMapping(mapping);
         * ```
         *
         * @param sizeMapping Array of size mappings.
         * You can use {@link googletag.SizeMappingBuilder} to create it.
         * Each size mapping is an array of two elements: {@link googletag.SingleSizeArray} and {@link googletag.GeneralSize}.
         * @returns The slot object on which the method was called.
         */
        defineSizeMapping(sizeMapping: SizeMappingArray): Slot;
        /**
         * Returns the value for the AdSense attribute associated with the given key for this slot.
         * To see service-level attributes inherited by this slot, use {@link PubAdsService.get googletag.pubads().get()}.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .set('adsense_background_color', '#FFFFFF')
         *                     .addService(googletag.pubads());
         * var color = slot.get('adsense_background_color');
         * // color == '#FFFFFF'.
         * ```
         *
         * @param key Name of the attribute to look for.
         * @returns Current value for the attribute key, or `null` if the key is not present.
         */
        get(key: adsense.AttributeName): string | null;
        /**
         * Returns the full path of the ad unit, with the network code and ad unit path.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .addService(googletag.pubads());
         * var path = slot.getAdUnitPath();
         * // path is '/1234567/sports'
         * ```
         *
         * @returns Ad unit path.
         */
        getAdUnitPath(): string;
        /**
         * Returns the list of attribute keys set on this slot.
         * To see the keys of service-level attributes inherited by this slot, use {@link PubAdsService.getAttributeKeys googletag.pubads().getAttributeKeys()}.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .set('adsense_background_color', '#FFFFFF')
         *                     .set('adsense_border_color', '#AABBCC')
         *                     .addService(googletag.pubads());
         * var keys = slot.getAttributeKeys();
         * // Keys are ['adsense_background_color', 'adsense_border_color'].
         * ```
         *
         * @returns Array of attribute keys. Ordering is undefined.
         */
        getAttributeKeys(): string[];
        /**
         * Returns the ad category exclusion labels for this slot.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .setCategoryExclusion('AirlineAd')
         *                     .setCategoryExclusion('TrainAd')
         *                     .addService(googletag.pubads());
         * var exclusions = slot.getCategoryExclusions();
         * // exclusions are ['AirlineAd', 'TrainAd']
         * ```
         *
         * @returns The ad category exclusion labels for this slot, or an empty array if none have been set.
         */
        getCategoryExclusions(): string[];
        getClickUrl(): string;
        getCollapseEmptyDiv(): boolean | null;
        getContentUrl(): string;
        getDivStartsCollapsed(): boolean | null;
        getEscapedQemQueryId(): string;
        getHtml(): string;
        /**
         * Whether or not constructs an out-of-page ad slot with {@link defineOutOfPageSlot}.
         */
        getOutOfPage(): boolean;
        /**
         * Returns the ad response information. This is based on the last ad response for the slot. If this is called when the slot has no ad, `null` will be returned.
         * @returns The latest ad response information, or `null` if the slot has no ad.
         */
        getResponseInformation(): ResponseInformation | null;
        getServices(): Service[];
        getSizes(): Array<Size | 'fluid'>;
        /**
         * Returns the ID of the slot `div` provided when the slot was defined.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .addService(googletag.pubads());
         * var slotElementId = slot.getSlotElementId();
         * // slotElementId is 'div-1'
         * ```
         *
         * @returns Slot element id.
         */
        getSlotElementId(): string;
        getSlotId(): SlotId;
        /**
         * Returns a specific custom targeting parameter set on this slot. Service-level targeting parameters are not included.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .setTargeting('allow_expandable', 'true')
         *                     .addService(googletag.pubads());
         * var param = slot.getTargeting('allow_expandable');
         * // param is ['true']
         * var param = slot.getTargeting('age');
         * // param is [] (empty array)
         * ```
         *
         * @param key The targeting key to look for.
         * @returns The values associated with this key, or an empty array if there is no such key.
         */
        getTargeting(key: string): string[];
        /**
         * Returns the list of all custom targeting keys set on this slot. Service-level targeting keys are not included.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .setTargeting('allow_expandable', 'true')
         *                     .setTargeting('interests', ['sports', 'music'])
         *                     .addService(googletag.pubads());
         * var keys = slot.getTargetingKeys();
         * // keys are ['interests', 'allow_expandable'].
         * ```
         *
         * @returns Array of targeting keys. Ordering is undefined.
         */
        getTargetingKeys(): string[];
        getTargetingMap(): Record<string, string | string[]>;
        /**
         * Sets a value for an AdSense attribute on this ad slot.
         * This will override any values set at the service level for this key.
         *
         * See the [AdSense Attributes](https://developers.google.com/publisher-tag/adsense_attributes) for a list of available keys and values.
         * Calling this method more than once for the same key will override previously set values for that key.
         * All values must be set before calling `display` or `refresh`.
         *
         * **Example**
         * ```
         * // Setting an attribute on a single ad slot.
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .set('adsense_background_color', '#FFFFFF')
         *          .addService(googletag.pubads());
         * ```
         *
         * @param key The name of the attribute.
         * @param value Attribute value.
         * @returns The slot object on which the method was called.
         */
        set(key: adsense.AttributeName, value: string): Slot;
        /**
         * Sets a slot-level ad category exclusion label on this slot.
         *
         * See the article on [ad exclusion](https://support.google.com/admanager/answer/3238504) for more details.
         *
         * **Example**
         * ```
         * // Label = AirlineAd
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setCategoryExclusion('AirlineAd')
         *          .addService(googletag.pubads());
         * ```
         *
         * @param categoryExclusion The ad category exclusion label to add.
         * @returns The slot object on which the method was called.
         */
        setCategoryExclusion(categoryExclusion: string): Slot;
        /**
         * Sets the click URL to which users will be redirected after clicking on the ad.
         *
         * The Google Ad Manager servers still record a click even if the click URL is replaced.
         * Any landing page URL associated with the creative that is served is appended to the provided value.
         * Subsequent calls overwrite the value. This works only for non-SRA requests.
         *
         * **Example**
         * ```
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setClickUrl('http://www.example.com?original_click_url=')
         *          .addService(googletag.pubads());
         * ```
         *
         * @param value The click URL to set.
         * @returns The slot object on which the method was called.
         */
        setClickUrl(value: string): Slot;
        /**
         * Sets whether the slot `div` should be hidden when there is no ad in the slot. This overrides the service-level settings.
         *
         * **Example**
         * ```
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setCollapseEmptyDiv(true, true)
         *          .addService(googletag.pubads());
         * // The above will cause the div for this slot to be collapsed
         * // when the page is loaded, before ads are requested.
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-2')
         *          .setCollapseEmptyDiv(true)
         *          .addService(googletag.pubads());
         * // The above will cause the div for this slot to be collapsed
         * // only after GPT detects that no ads are available for the slot.
         * ```
         *
         * @param collapse Whether to collapse the slot if no ad is returned.
         * @param collapseBeforeAdFetch Whether to collapse the slot even before an ad is fetched. Ignored if collapse is not `true`.
         * @returns The slot object on which the method was called.
         */
        setCollapseEmptyDiv(collapse: boolean, collapseBeforeAdFetch?: boolean): Slot;
        /**
         * Configures whether ads in this slot should be forced to be rendered using a SafeFrame container.
         * For more details, please see the article on [rendering creatives using SafeFrame](https://support.google.com/admanager/answer/6023110).
         *
         * Please keep the following things in mind while using this API:
         * - This setting will only take effect for **subsequent** ad requests made for the respective slots.
         * - The slot level setting, if specified, will always override the page level setting.
         * - If set to `true` (at slot-level or page level), the ad will always be rendered using a SafeFrame container independent of the choice made in the Google Ad Manager UI.
         * - However, if set to `false` or left unspecified, the ad will be rendered using a SafeFrame container depending on the type of creative and the selection made in the Google Ad Manager UI
         * (see [related article](https://support.google.com/admanager/answer/6023110)).
         * - This API should be used with caution as it could impact the behaviour of creatives that attempt to break out of their iFrames or rely on them being rendered directly in a publishers page.
         *
         * **Example**
         * ```
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setForceSafeFrame(true)
         *          .addService(googletag.pubads());
         * ```
         *
         * @param forceSafeFrame `true` to force all ads in this slot to be rendered in SafeFrames and `false` to opt-out of a page-level setting (if present).
         * Setting this to `false` when not specified at the page-level won't change anything.
         * @returns The slot object on which the method was called.
         */
        setForceSafeFrame(forceSafeFrame: boolean): Slot;
        /**
         * Sets the slot-level preferences for SafeFrame configuration.
         * Any unrecognized keys in the config object will be ignored.
         * The entire config will be ignored if an invalid value is passed for a recognized key.
         *
         * These slot-level preferences, if specified, will override any page-level preferences.
         * For more details, please see the article on [rendering creatives using SafeFrame](https://support.google.com/admanager/answer/6023110).
         *
         * **Example**
         * ```
         * googletag.pubads().setForceSafeFrame(true);
         * // The following slot will have a sandboxed safeframe that only
         * // disallows top-level navigation.
         * googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *          .setSafeFrameConfig({sandbox: true})
         *          .addService(googletag.pubads());
         * // The following slot will inherit page-level settings.
         * googletag.defineSlot('/1234567/news', [160, 600], 'div-2')
         *          .addService(googletag.pubads());
         * googletag.display();
         * ```
         *
         * @param config The configuration object.
         * @returns The slot object on which the method was called.
         */
        setSafeFrameConfig(config: SafeFrameConfig): Slot;
        /**
         * Sets a custom targeting parameter for this slot.
         * Calling this method multiple times for the same key will overwrite old values.
         * Values set here will overwrite targeting parameters set at the service-level.
         * These keys are defined in your Google Ad Manager account.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1')
         *                     .addService(googletag.pubads());
         * // Example with a single value for a key.
         * slot.setTargeting('allow_expandable', 'true');
         * // Example with multiple values for a key inside in an array.
         * slot.setTargeting('interests', ['sports', 'music']);
         * ```
         * @param key Targeting parameter key.
         * @param value Targeting parameter value or array of values.
         * @returns The slot object on which the method was called.
         */
        setTargeting(key: string, value: string | string[]): Slot;
        /**
         * Sets custom targeting parameters for this slot, from a key:value map in a JSON object.
         * This is the same as calling {@link setTargeting setTargeting(key,value)} for all the key values of the object.
         * These keys are defined in your Google Ad Manager account.
         *
         * **Notes:**
         * - In case of overwriting, only the last value will be kept.
         * - If the value is an array, any previous value will be overwritten, not merged.
         * - Values set here will overwrite targeting parameters set at the service-level.
         *
         * **Example**
         * ```
         * var slot = googletag.defineSlot('/1234567/sports', [160, 600],
         *                                 'div-1');
         * slot.updateTargetingFromMap({
         *   'color': 'red',
         *   'interests': ['sports','music','movies']
         * });
         * ```
         * @param map Targeting parameter key:value map.
         * @returns The slot object on which the method was called.
         */
        updateTargetingFromMap(map: Record<string, string | string[]>): Slot;
    }
    /**
     * An object of slot id information.
     */
    interface SlotId {
        getAdUnitPath(): string;
        getDomId(): string;
        getId(): string;
        getName(): string;
    }
    /**
     * This is the namespace that GPT uses for `Adsense`.
     */
    namespace adsense {
        /**
         * Attribute name for all [AdSense Attributes](https://developers.google.com/publisher-tag/adsense_attributes).
         *
         * | Attribute name           | Legacy attribute    | Example             | Allowed values                                                                                             |
         * | :----------------------- | :------------------ | :------------------ | :--------------------------------------------------------------------------------------------------------- |
         * | adsense_channel_ids      | google_ad_channel   | 271828183+314159265 | valid AdSense channel IDs, separated by `+`                                                                |
         * | adsense_ad_types         | google_ad_type      | text_image          | text, image, text_image                                                                                    |
         * | adsense_ad_format        | google_ad_format    | 250x250_as          | 160x600_as, 300x250_as, 336x280_as, 728x90_as, ...                                                         |
         * | adsense_background_color | google_color_bg     | #000000             | hexadecimal colors                                                                                         |
         * | adsense_border_color     | google_color_border | #000000             | hexadecimal colors                                                                                         |
         * | adsense_link_color       | google_color_link   | #000000             | hexadecimal colors                                                                                         |
         * | adsense_test_mode        | N/A                 | on                  | on                                                                                                         |
         * | adsense_text_color       | google_color_text   | #000000             | hexadecimal colors                                                                                         |
         * | adsense_url_color        | google_color_url    | #000000             | hexadecimal colors                                                                                         |
         * | adsense_ui_features      | google_ui_features  | rc:10               | `rc:10` for very rounded corners, `rc:6` for slightly rounded corners, `rc:0` for square corners (default) |
         * | page_url                 | N/A                 | www.mysite.com      | valid URLs                                                                                                 |
         */
        type AttributeName =
            | 'adsense_channel_ids'
            | 'adsense_ad_types'
            | 'adsense_ad_format'
            | 'adsense_background_color'
            | 'adsense_border_color'
            | 'adsense_link_color'
            | 'adsense_test_mode'
            | 'adsense_text_color'
            | 'adsense_url_color'
            | 'adsense_ui_features'
            | 'page_url';
    }
    /**
     * This is the namespace that GPT uses for `enum types`.
     */
    namespace enums {
        /**
         * Out of page formats supported by GPT.
         */
        enum OutOfPageFormat {
            /**
             * Anchor format where slot sticks to the bottom of the viewport.
             */
            BOTTOM_ANCHOR,
            /**
             * Web interstitial creative format.
             */
            INTERSTITIAL,
            /**
             * Rewarded format.
             */
            REWARDED,
            /**
             * Anchor format where slot sticks to the top of the viewport.
             */
            TOP_ANCHOR,
        }
        /**
         * [Traffic sources](https://support.google.com/admanager/answer/11233407) supported by GPT.
         */
        enum TrafficSource {
            /**
             * Direct URL entry, site search, or app download.
             */
            ORGANIC,
            /**
             * Traffic redirected from properties other than owned (acquired or otherwise incentivized activity).
             */
            PURCHASED,
        }
    }
    /**
     * This is the namespace that GPT uses for `Events`. Your code can react to these events using {@link Service.addEventListener}.
     */
    namespace events {
        /**
         * Event type for all GPT events.
         */
        type EventType =
            | 'impressionViewable'
            | 'rewardedSlotClosed'
            | 'rewardedSlotGranted'
            | 'rewardedSlotReady'
            | 'slotRequested'
            | 'slotResponseReceived'
            | 'slotRenderEnded'
            | 'slotOnload'
            | 'slotVisibilityChanged';
        /**
         * Base Interface for all GPT events. All GPT events below will have the following fields.
         */
        interface Event {
            /**
             * Name of the service that triggered the event.
             */
            serviceName: string;
            /**
             * The slot that triggered the event.
             */
            slot: Slot;
        }
        /**
         * This event is fired when an impression becomes viewable, according to the [Active View criteria](https://support.google.com/admanager/answer/4524488).
         *
         * **Example**
         * ```
         * // This listener is called when an impression becomes viewable.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('impressionViewable',
         *     function(event) {
         *       var slot = event.slot;
         *       console.log('Impression for slot', slot.getSlotElementId(),
         *                   'became viewable.');
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        // tslint:disable-next-line:no-empty-interface
        interface ImpressionViewableEvent extends Event {}
        /**
         * This event is fired when a rewarded ad slot is closed by the user.
         * It may fire either before or after a reward has been granted.
         * To determine whether a reward has been granted, use {@link RewardedSlotGrantedEvent} instead.
         *
         * **Example**
         * ```
         * // This listener is called when the user closes a rewarded ad slot.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('rewardedSlotClosed',
         *     function(event) {
         *       var slot = event.slot;
         *       console.log('Rewarded ad slot', slot.getSlotElementId(),
         *                   'has been closed.');
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        // tslint:disable-next-line:no-empty-interface
        interface RewardedSlotClosedEvent extends Event {}
        /**
         * This event is fired when a reward is granted for viewing a [rewarded ad](https://support.google.com/admanager/answer/9116812).
         * If the ad is closed before the criteria for granting a reward is met, this event will not fire.
         *
         * **Example**
         * ```
         * // This listener is called whenever a reward is granted for a rewarded ad.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('rewardedSlotGranted',
         *     function(event) {
         *       var slot = event.slot;
         *       console.group(
         *           'Reward granted for slot', slot.getSlotElementId(), '.');
         *       // Log details of the reward.
         *       console.log('Reward type:', event.payload.type);
         *       console.log('Reward amount:', event.payload.amount);
         *       console.groupEnd();
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        interface RewardedSlotGrantedEvent extends Event {
            /**
             * An object containing information about the reward that was granted.
             */
            payload: null | RewardedPayload;
        }
        /**
         * This event is fired when a [rewarded ad](https://support.google.com/admanager/answer/9116812) is ready to be displayed.
         * The publisher is responsible for presenting the user an option to view the ad before displaying it.
         *
         * **Example**
         * ```
         * // This listener is called when a rewarded ad slot becomes ready to be
         * // displayed.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('rewardedSlotReady',
         *     function(event) {
         *       var slot = event.slot;
         *       console.log('Rewarded ad slot', slot.getSlotElementId(),
         *                   'is ready to be displayed.');
         *       if(<!--User consents to viewing the ad.-->) {
         *         // Display the ad.
         *         event.makeRewardedVisible();
         *       }
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        interface RewardedSlotReadyEvent extends Event {
            /**
             * Displays the rewarded ad. This method should not be called until the user has consented to view the ad.
             */
            makeRewardedVisible(): void;
        }
        /**
         * This event is fired when the creative's iframe fires its load event. When rendering rich media ads in sync rendering mode, no iframe is used so no `SlotOnloadEvent` will be fired.
         *
         * **Example**
         * ```
         * // This listener is called when a creative iframe load event fires.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('slotOnload', function(event) {
         *   var slot = event.slot;
         *   console.log('Creative iframe for slot', slot.getSlotElementId(),
         *               'has loaded.');
         *   if (slot === targetSlot) {
         *     // Slot specific logic.
         *   }
         * });
         * ```
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotOnloadEvent extends Event {}
        /**
         * This event is fired when the creative code is injected into a slot.
         * This event will occur before the creative's resources are fetched, so the creative may not be visible yet.
         * If you need to know when all creative resources for a slot have finished loading, consider the {@link SlotOnloadEvent} instead.
         *
         * **Example**
         * ```
         * // This listener is called when a slot has finished rendering.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('slotRenderEnded',
         *     function(event) {
         *       var slot = event.slot;
         *       console.group(
         *           'Slot', slot.getSlotElementId(), 'finished rendering.');
         *       // Log details of the rendered ad.
         *       console.log('Advertiser ID:', event.advertiserId);
         *       console.log('Campaign ID: ', event.campaignId);
         *       console.log('Creative ID: ', event.creativeId);
         *       console.log('Is empty?:', event.isEmpty);
         *       console.log('Line Item ID:', event.lineItemId);
         *       console.log('Size:', event.size);
         *       console.log('Source Agnostic Creative ID:',
         *                   event.sourceAgnosticCreativeId);
         *       console.log('Source Agnostic Line Item ID:',
         *                   event.sourceAgnosticLineItemId);
         *       console.groupEnd();
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        interface SlotRenderEndedEvent extends Event {
            /**
             * Advertiser ID of the rendered ad. Value is `null` for empty slots, backfill ads, and creatives rendered by services other than {@link PubAdsService}.
             */
            advertiserId: number | null;
            /**
             * Campaign ID of the rendered ad. Value is `null` for empty slots, backfill ads, and creatives rendered by services other than {@link PubAdsService}.
             */
            campaignId: number | null;
            /**
             * Creative ID of the rendered reservation ad. Value is `null` for empty slots, backfill ads, and creatives rendered by services other than {@link PubAdsService}.
             */
            creativeId: number | null;
            /**
             * Whether an ad was returned for the slot. Value is `true` if no ad was returned, `false` otherwise.
             */
            isEmpty: boolean;
            /**
             * Line item ID of the rendered reservation ad. Value is `null` for empty slots, backfill ads, and creatives rendered by services other than {@link PubAdsService}.
             */
            lineItemId: number | null;
            /**
             * Indicates the pixel size of the rendered creative. Example: `[728, 90]`. Value is `null` for empty ad slots.
             */
            size: number[] | string | null;
            /**
             * Creative ID of the rendered reservation or backfill ad.
             * Value is `null` if the ad is not a reservation or line item backfill, or the creative is rendered by services other than {@link PubAdsService}.
             */
            sourceAgnosticCreativeId: number | null;
            /**
             * Line item ID of the rendered reservation or backfill ad.
             * Value is `null` if the ad is not a reservation or line item backfill, or the creative is rendered by services other than {@link PubAdsService}.
             */
            sourceAgnosticLineItemId: number | null;
        }
        /**
         * This event is fired when an ad has been requested for a particular slot.
         *
         * **Example**
         * ```
         * // This listener is called when the specified service issues an ad
         * // request for a slot. Each slot will fire this event, even though they
         * // may be batched together in a single request if single request
         * // architecture (SRA) is enabled.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('slotRequested', function(event) {
         *   var slot = event.slot;
         *   console.log('Slot', slot.getSlotElementId(), 'has been requested.');
         *   if (slot === targetSlot) {
         *     // Slot specific logic.
         *   }
         * });
         * ```
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotRequestedEvent extends Event {}
        /**
         * This event is fired when an ad response has been received for a particular slot.
         *
         * **Example**
         * ```
         * // This listener is called when an ad response has been received
         * // for a slot.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('slotResponseReceived',
         *     function(event) {
         *       var slot = event.slot;
         *       console.log('Ad response for slot', slot.getSlotElementId(),
         *                   'received.');
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotResponseReceived extends Event {}
        /**
         * This event is fired whenever the on-screen percentage of an ad slot's area changes. The event is throttled and will not fire more often than once every 200ms.
         *
         * **Example**
         * ```
         * // This listener is called whenever the on-screen percentage of an
         * // ad slot's area changes.
         * var targetSlot = ...;
         * googletag.pubads().addEventListener('slotVisibilityChanged',
         *     function(event) {
         *       var slot = event.slot;
         *       console.group(
         *           'Visibility of slot', slot.getSlotElementId(), 'changed.');
         *       // Log details of the event.
         *       console.log('Visible area:', event.inViewPercentage + '%');
         *       console.groupEnd();
         *       if (slot === targetSlot) {
         *         // Slot specific logic.
         *       }
         *     }
         * );
         * ```
         */
        interface SlotVisibilityChangedEvent extends Event {
            /**
             * The percentage of the ad's area that is visible. Value is a number between 0 and 100.
             */
            inViewPercentage: number;
        }
    }
}
