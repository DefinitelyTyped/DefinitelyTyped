/**
 * This is the global namespace that the Google Publisher Tag uses for its API.
 */
declare namespace googletag {
    type GeneralSize = SingleSize | MultiSize;
    type MultiSize = SingleSize[];
    /**
     * Named sizes that a slot can have.
     * In most cases size is a fixed-size rectangle but there are some cases when we need other kinds of size specifications.
     * Only the following are valid named sizes:
     * 'fluid': the ad container takes 100% width of parent div and then resizes its height to fit creative content.
     * Similar to how regular block elements on a page behave.
     * Used for native ads (see related article).
     * Note that both 'fluid' and ['fluid'] are acceptable forms to declare a slot size as fluid.
     */
    type NamedSize = string | string[];
    type SingleSize = SingleSizeArray | NamedSize;
    /**
     * Array of two numbers representing [width, height].
     */
    type SingleSizeArray = number[];
    type SizeMapping = GeneralSize[];
    type SizeMappingArray = SizeMapping[];
    /**
     * Flag indicating that GPT API is loaded and ready to be called.
     * This property will be simply undefined until the API is ready.
     * Note that the recommended way of handling async is to use `googletag.cmd` to queue callbacks for when GPT is ready.
     * These callbacks do not have to check googletag.apiReady as they are guaranteed to execute once the API is set up.
     */
    let apiReady: boolean | undefined;
    /**
     * Reference to the global command queue for asynchronous execution of GPT-related calls.
     * The googletag.cmd variable is initialized to an empty JavaScript array by the GPT tag syntax on the page,
     * and cmd.push is the standard Array.push method that adds an element to the end of the array.
     * When the GPT JavaScript is loaded, it looks through the array and executes all the functions in order.
     * The script then replaces cmd with a `googletag.CommandArray` object whose push method is defined to execute the function argument passed to it.
     * This mechanism allows GPT to reduce perceived latency by fetching the JavaScript asynchronously while allowing the browser to continue rendering the page.
     */
    let cmd: Array<() => void> | CommandArray;
    /**
     * This is the namespace that GPT uses for `enum types`.
     */
    namespace enums {
        /**
         * Out of page formats supported by GPT.
         */
        enum OutOfPageFormat {
            REWARDED = 4,
            TOP_ANCHOR = 2,
            BOTTOM_ANCHOR = 3,
            /**
             * Web interstitial creative format.
             */
            INTERSTITIAL = 5,
        }
    }
    /**
     * This is the namespace that GPT uses for `Events`. Your code can react to these events using `Service.addEventListener`.
     */
    namespace events {
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
         */
        // tslint:disable-next-line:no-empty-interface
        interface ImpressionViewableEvent extends Event {}
        /**
         * This event is fired when the creative's iframe fires its load event. When rendering rich media ads in sync rendering mode, no iframe is used so no SlotOnloadEvent will be fired.
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotOnloadEvent extends Event {}
        /**
         * This event is fired when the creative code is injected into a slot.
         * This event will occur before the creative's resources are fetched, so the creative may not be visible yet.
         * If you need to know when all creative resources for a slot have finished loading, consider the `SlotOnloadEvent` instead.
         */
        interface SlotRenderEndedEvent extends Event {
            /**
             * Advertiser ID of the rendered ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service.
             */
            advertiserId: number | null;
            /**
             * Campaign ID of the rendered ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service.
             */
            campaignId: number | null;
            /**
             * Creative ID of the rendered reservation ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service.
             */
            creativeId: number | null;
            /**
             * true if no ad was returned for the slot, false otherwise.
             */
            isEmpty: boolean;
            /**
             * Line item ID of the rendered reservation ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service.
             */
            lineItemId: number | null;
            /**
             * Indicates the pixel size of the rendered creative. Example: [728, 90]. Value is null for empty ad slots.
             */
            size: number[] | string;
            /**
             * Creative ID of the rendered reservation or backfill ad. Value is null if the ad is not a reservation or line item backfill or a creative rendered by services other than pubads service.
             */
            sourceAgnosticCreativeId: number | null;
            /**
             * Line item ID of the rendered reservation or backfill ad.
             * Value is null if the ad is not a reservation or line item backfill or a creative rendered by services other than pubads service.
             */
            sourceAgnosticLineItemId: number | null;
        }
        /**
         * This event is fired when an ad has been requested for a particular slot.
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotRequestedEvent extends Event {}
        /**
         * This event is fired when an ad response has been received for a particular slot.
         */
        // tslint:disable-next-line:no-empty-interface
        interface SlotResponseReceived extends Event {}
        /**
         * This event is fired whenever the on-screen percentage of an ad slot's area changes. The event is throttled and will not fire more often than once every 200ms.
         */
        interface SlotVisibilityChangedEvent extends Event {
            /**
             * The percentage (0-100) of the ad's area that is visible.
             */
            inViewPercentage: number;
        }
    }
    /**
     * Flag indicating that Pubads service is enabled, loaded and fully operational.
     * This property will be simply undefined until `googletag.enableServices()`  is called and Pubads service is loaded and initialized.
     */
    let pubadsReady: boolean | undefined;
    /**
     * Returns a reference to the companion ads service.
     * @returns Instance of the companion ads service.
     */
    function companionAds(): CompanionAdsService;
    /**
     * Returns a reference to the content service.
     * @returns Instance of the content service.
     */
    function content(): ContentService;
    /**
     * Constructs an out-of-page (interstitial) ad slot with the given ad unit path.
     * For custom out-of-page ads, opt_div is the ID of the div element that will contain the ad.
     * See the article on [out-of-page creatives](https://support.google.com/admanager/answer/6088046) for more details.
     * For GPT managed out-of-page ads, opt_div is a supported `OutOfPageFormat`.
     * See the article on [web interstitials](https://support.google.com/admanager/answer/9840201) for more details.
     * @param adUnitPath Full [ad unit path](https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path) with the network code and ad unit code.
     * @param opt_div ID of the div that will contain this ad unit or OutOfPageFormat.
     * @returns The newly created slot.
     */
    function defineOutOfPageSlot(adUnitPath: string, opt_div: string | enums.OutOfPageFormat): Slot | null;
    function defineOutOfPageSlot(adUnitPath: string): Slot;
    /**
     * Constructs an ad slot with a given ad unit path and size and associates it with the ID of a div element on the page that will contain the ad.
     * @param adUnitPath Full [ad unit path](https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path) with the network code and unit code.
     * @param size Width and height of the added slot.
     * This is the size that is used in the ad request if no responsive size mapping is provided or the size of the viewport is smaller than the smallest size provided in the mapping.
     * @param opt_div ID of the div that will contain this ad unit.
     * @returns The newly created slot.
     */
    function defineSlot(adUnitPath: string, size: GeneralSize, opt_div?: string): Slot;
    /**
     * Same as `googletag.defineSlot`
     */
    function defineUnit(adUnitPath: string, size: GeneralSize, opt_div?: string): Slot;
    /**
     * Destroys the given slots, removing all related objects and references of those slots from GPT.
     * This API does not support passback slots and companion slots.
     * Calling this API on a slot clears the ad and removes the slot object from the internal state maintained by GPT.
     * Calling any more functions on the slot object will result in undefined behaviour.
     * Note the browser may still not free the memory associated with that slot if a reference to it is maintained by the publisher page.
     * Calling this API makes the div associated with that slot available for reuse.
     * In particular, destroying a slot removes the ad from GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
     * so future requests will not be influenced by roadblocks or competitive exclusions involving this ad.
     * Failure to call this function before removing a slot's div from the page will result in undefined behavior.
     * @param opt_slots The array of slots to destroy. Array is optional; all slots will be destroyed if it is unspecified.
     * @returns true if slots have been destroyed, false otherwise.
     */
    function destroySlots(opt_slots?: Slot[]): boolean;
    /**
     * Disables the Google Publisher Console.  See the article on [Publisher Console](https://support.google.com/admanager/answer/2462712) for more details.
     */
    function disablePublisherConsole(): void;
    /**
     * Instructs slot services to render the slot.
     * Each ad slot should only be displayed once per page.
     * All slots must be defined and have a service associated with them before being displayed.
     * The display call must not happen until the element is present in the DOM.
     * The usual way to achieve that is to place it within a script block within the div element named in the method call.
     * If single request architecture (SRA) is being used, all unfetched ad slots at the moment display is called will be fetched in a single instance of googletag.display().
     * To force an ad slot not to display, the entire div must be removed.
     * @param divOrSlot Either the ID of the div element containing the ad slot or the div element, or the slot object.
     * If a div element is provided, it must have an 'id' attribute which matches the ID passed into googletag.defineSlot().
     */
    function display(divOrSlot: string | Element | Slot): void;
    /**
     * Enables all GPT services that have been defined for ad slots on the page.
     */
    function enableServices(): void;
    /**
     * Returns the current version of GPT.
     * @returns Version string.
     */
    function getVersion(): string;
    /**
     * Opens the Google Publisher Console.
     * @param opt_div ID of the div element containing the ad slot.
     */
    function openConsole(opt_div?: string): void;
    /**
     * Returns a reference to the pubads service.
     * @returns Instance of the pubads service.
     */
    function pubads(): PubAdsService;
    /**
     * Sets that title for all ad container iframes created by pubads service, from this point onwards.
     * @param title The title to set.
     */
    function setAdIframeTitle(title: string): void;
    /**
     * Creates a new SizeMappingBuilder.  See the article on [responsive design](https://support.google.com/admanager/answer/3423562) for more details.
     * @returns A new builder.
     */
    function sizeMapping(): SizeMappingBuilder;
    /**
     * The command array accepts a sequence of functions and invokes them in order. It is intended to replace a standard array that is used to enqueue functions to be invoked once GPT is loaded.
     */
    interface CommandArray {
        /**
         * Executes the sequence of functions specified in the arguments in order.
         * @param f A JavaScript function to be executed.
         * @returns The number of commands processed so far. This is compatible with Array.push's return value (the current length of the array).
         */
        push(f: () => void): number;
    }
    /**
     * Companion Ads service.
     * This service is used by video ads to show companion ads.
     * See the article on [companion ads for video](https://support.google.com/admanager/answer/1191131) for more details.
     */
    interface CompanionAdsService extends Service {
        /**
         * Sets whether companion slots that have not been filled will be automatically backfilled.
         * This method can be called multiple times during the page's lifetime to turn backfill on and off.
         * Only slots that are also registered with the pubads service will be backfilled.
         * Due to policy restrictions, this method is not designed to fill empty companion slots when an Ad Exchange video is served.
         * @param value true to automatically backfill unfilled slots, false to leave them unchanged.
         */
        setRefreshUnfilledSlots(value: boolean): void;
    }
    /**
     * The content service. This service is used to set the content of a slot manually.
     */
    interface ContentService extends Service {
        /**
         * Fills a slot with the given content. If services are not yet enabled, stores the content and fills it in when services are enabled.
         * @param slot The slot to be filled.
         * @param content The HTML content for the slot.
         */
        setContent(slot: Slot, content: string): void;
    }
    interface PassbackSlot {
        display(): void;
        get(key: string): string;
        set(key: string, value: string): PassbackSlot;
        setClickUrl(url: string): PassbackSlot;
        setForceSafeFrame(forceSafeFrame: boolean): PassbackSlot;
        setTagForChildDirectedTreatment(value: number): PassbackSlot;
        setTagForUnderAgeOfConsent(value: number): PassbackSlot;
        setTargeting(key: string, value: string | string[]): PassbackSlot;
        updateTargetingFromMap(map: Record<string, string | string[]>): PassbackSlot;
    }
    /**
     * Configuration object for privacy settings.
     */
    interface PrivacySettingsConfig {
        /**
         * childDirectedTreatment configuration indicates whether the page should be treated as child-directed. Set to null to clear the configuration.
         */
        childDirectedTreatment?: boolean | null | undefined;
        /**
         * limitedAds configuration enables serving to run in [limited ads](https://support.google.com/admanager/answer/9882911) mode to aid in publisher regulatory compliance needs.
         * When enabled, the GPT library itself may optionally be requested from a cookie-less,
         * [limited ads URL](https://developers.google.com/publisher-tag/guides/general-best-practices#load_from_an_official_source).
         */
        limitedAds?: boolean | undefined;
        /**
         * restrictDataProcessing configuration enables serving to run in restricted processing mode to aid in publisher regulatory compliance needs.
         */
        restrictDataProcessing?: boolean | undefined;
        /**
         * underAgeOfConsent configuration indicates whether to mark ad requests as coming from users under the age of consent. Set to null to clear the configuration.
         */
        underAgeOfConsent?: boolean | null | undefined;
    }
    /**
     * Publisher Ads service. This service is used to fetch and show ads from your Google Ad Manager account.
     */
    interface PubAdsService extends Service {
        /**
         * Removes the ads from the given slots and replaces them with blank content.
         * The slots will be marked as unfetched.
         * In particular, clearing a slot removes the ad from GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * so future requests will not be influenced by roadblocks or competitive exclusions involving this ad.
         * @param opt_slots The array of slots to clear. Array is optional; all slots will be cleared if it is unspecified.
         * @returns Returns true if slots have been cleared, false otherwise.
         */
        clear(opt_slots?: Slot[]): boolean;
        /**
         * Clears all page-level ad category exclusion labels. This is useful if you want to refresh the slot.
         * @returns The service object on which the method was called.
         */
        clearCategoryExclusions(): PubAdsService;
        clearTagForChildDirectedTreatment(): PubAdsService;
        /**
         * Clears custom targeting parameters for a specific key or for all keys.
         * @param opt_key Targeting parameter key. The key is optional; all targeting parameters will be cleared if it is unspecified.
         * @returns The service object on which the method was called.
         */
        clearTargeting(opt_key?: string): PubAdsService;
        /**
         * Enables collapsing of slot divs so that they don't take up any space on the page when there is no ad content to display.
         * This mode must be set before the service is enabled.
         * See the article on [collapsing empty divs](https://support.google.com/admanager/answer/3072674) for more details.
         * @param opt_collapseBeforeAdFetch Whether to collapse the slots even before the ads are fetched. This parameter is optional; if not provided, false will be used as the default value.
         * @returns Returns true if div collapse mode was enabled and false if it is impossible to enable collapse mode because the method was called after the service was enabled.
         */
        collapseEmptyDivs(opt_collapseBeforeAdFetch?: boolean): boolean;
        /**
         * @deprecated Deprecated definePassback() and defineOutOfPagePassback().
         * See [passback docs](https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags) for how to correctly create a passback.
         */
        defineOutOfPagePassback(adUnitPath: string): PassbackSlot;
        /**
         * @deprecated Deprecated definePassback() and defineOutOfPagePassback().
         * See [passback docs](https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags) for how to correctly create a passback.
         */
        definePassback(adUnitPath: string, size: GeneralSize): PassbackSlot;
        /**
         * Disables requests for ads on page load, but allows ads to be requested with a `googletag.pubads().refresh()` call.
         * This should be set prior to enabling the service.
         * Async mode must be used; otherwise it will be impossible to request ads using refresh.
         */
        disableInitialLoad(): void;
        /**
         * Constructs and displays an ad slot with the given ad unit path and size. This method does not work with single request mode.
         * @param adUnitPath The [ad unit path](https://developers.google.com/publisher-tag/guides/get-started#ad-unit-path) of slot to be rendered.
         * @param size Width and height of the slot.
         * @param opt_div Either the ID of the div containing the slot or the div element itself.
         * @param opt_clickUrl The click URL to use on this slot.
         */
        display(adUnitPath: string, size: GeneralSize, opt_div?: string | Element, opt_clickUrl?: string): void;
        /**
         * Asynchronous rendering is enabled by default.
         * GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously.
         */
        enableAsyncRendering(): boolean;
        /**
         * Enables lazy loading in GPT as defined by the config object.
         * For more detailed examples, see the Lazy Loading example [here](https://developers.google.com/publisher-tag/samples/lazy-loading).**Notes:**
         * - Lazy fetching in SRA only works if all slots are outside the fetching margin.
         * @param opt_config Configuration object allows customization of lazy loading behavior.
         * Any omitted configurations will use a default set by Google that will be tuned over time.
         * To disable a particular setting, such as a fetching margin, set the value to -1.
         * fetchMarginPercent is the minimum distance from the current viewport a slot must be before we fetch the ad as a percentage of viewport size.
         * 0 means "when the slot enters the viewport", 100 means "when the ad is 1 viewport away", and so on.
         * renderMarginPercent is the minimum distance from the current viewport a slot must be before we render an ad.
         * This allows for prefetching the ad, but waiting to render and download other subresources.
         * The value works just like fetchMarginPercent as a percentage of viewport.
         * mobileScaling is a multiplier applied to margins on mobile devices.
         * This allows varying margins on mobile vs.
         * desktop.
         * For example, a mobileScaling of 2.0 will multiply all margins by 2 on mobile devices, increasing the minimum distance a slot can be before fetching and rendering.
         */
        enableLazyLoad(opt_config?: {
            fetchMarginPercent?: number | undefined;
            renderMarginPercent?: number | undefined;
            mobileScaling?: number | undefined;
        }): void;
        /**
         * Enables single request mode for fetching multiple ads at the same time.
         * This requires all pubads slots to be defined and added to the pubads service prior to enabling the service.
         * Single request mode must be set before the service is enabled.
         * @returns Returns true if single request mode was enabled and false if it is impossible to enable single request mode because the method was called after the service was enabled.
         */
        enableSingleRequest(): boolean;
        /**
         * @deprecated GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously.
         */
        enableSyncRendering(): boolean;
        /**
         * Signals to GPT that video ads will be present on the page.
         * This enables competitive exclusion constraints on display and video ads.
         * If the video content is known, call `setVideoContent` in order to be able to use content exclusion for display ads.
         */
        enableVideoAds(): void;
        /**
         * Returns the value for the AdSense attribute associated with the given key.
         * @param key Name of the attribute to look for.
         * @returns Current value for the attribute key, or null if the key is not present.
         */
        get(key: string): string | null;
        /**
         * Returns the attribute keys that have been set on this service.
         * @returns Array of attribute keys set on this service. Ordering is undefined.
         */
        getAttributeKeys(): string[];
        getCorrelator(): string;
        getImaContent(): Record<'vid' | 'cmsid', string>;
        getName(): string;
        getSlotIdMap(): Record<string, Slot>;
        getSlots(): Slot[];
        getTagSessionCorrelator(): number;
        getVersion(): string;
        getVideoContent(): Record<'vid' | 'cmsid', string>;
        /**
         * Returns a specific custom service-level targeting parameter that has been set.
         * @param key The targeting key to look for.
         * @returns The values associated with this key, or an empty array if there is no such key.
         */
        getTargeting(key: string): string[];
        /**
         * Returns the list of all custom service-level targeting keys that have been set.
         * @returns Array of targeting keys. Ordering is undefined.
         */
        getTargetingKeys(): string[];
        /**
         * Returns whether or not initial requests for ads was successfully disabled by a previous `disableInitialLoad` call.
         * @returns
         */
        isInitialLoadDisabled(): boolean;
        /**
         * Whether or not enable single request mode for fetching multiple ads at the same time.
         */
        isSRA(): boolean;
        /**
         * @deprecated Deprecated and ignored.
         */
        markAsAmp(): void;
        /**
         * Fetches and displays new ads for specific or all slots on the page.
         * Works only in asynchronous rendering mode.
         * For proper behavior across all browsers, calling refresh must be preceded by a call to display the ad slot.
         * If the call to display is omitted, refresh may behave unexpectedly.
         * If desired, the `disableInitialLoad` method can be used to stop display from fetching an ad.
         * Refreshing a slot removes the old ad from GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * so future requests will not be influenced by roadblocks or competitive exclusions involving that ad.
         * @param opt_slots The slots to refresh. Array is optional; all slots will be refreshed if it is unspecified.
         * @param opt_options Configuration options associated with this refresh call.
         * changeCorrelator specifies whether or not a new correlator is to be generated for fetching ads.
         * Our ad servers maintain this correlator value briefly (currently for 30 seconds, but subject to change),
         * such that requests with the same correlator received close together will be considered a single page view.
         * By default a new correlator is generated for every refresh.
         * Note that this option has no effect on GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * which automatically reflects the ads currently on the page and has no expiration time.
         */
        refresh(opt_slots?: Slot[], opt_options?: { changeCorrelator: boolean }): void;
        /**
         * Sets values for AdSense attributes that apply to all ad slots under the publisher ads service.
         * See AdSense Attributes for a list of available keys and values.
         * Calling this more than once for the same key will override previously set values for that key.
         * All values must be set before calling display or refresh.
         * @param key The name of the attribute.
         * @param value Attribute value.
         * @returns The service object on which the method was called.
         */
        set(key: string, value: string): PubAdsService;
        /**
         * Sets a page-level ad category exclusion for the given label name.  See the article on [ad exclusion](https://support.google.com/admanager/answer/3238504) for more details.
         * @param categoryExclusion The ad category exclusion label to add.
         * @returns The service object on which the method was called.
         */
        setCategoryExclusion(categoryExclusion: string): PubAdsService;
        /**
         * Enables and disables horizontal centering of ads.
         * Centering is disabled by default.
         * In legacy gpt_mobile.js, centering is enabled by default.
         * This method should be invoked before calling display or refresh because only ads that are requested after calling this method will be centered.
         * @param centerAds true to center ads, false to left-align them.
         */
        setCentering(centerAds: boolean): void;
        /**
         * Sets options for ignoring Google Ad Manager cookies on the current page.
         * @param options The cookie options to set. Possible values are:
         * - **0:** Enables Google Ad Manager cookies on ad requests on the page. This option is set by default.
         * - **1:** Ignores Google Ad Manager cookies on subsequent ad requests and prevents cookies from being created on the page.
         * Note that cookies will not be ignored on certain pingbacks and that this option will disable features that rely on cookies, such as dynamic allocation.
         * See the article about [cookie options](https://support.google.com/admanager/answer/3202794) for more details.
         * @returns The service object on which the method was called.
         */
        setCookieOptions(options: number): PubAdsService;
        /**
         * Configures whether all ads on the page should be forced to be rendered using a SafeFrame container.
         * For more details, please see the article on [rendering creatives using safeframe](https://support.google.com/admanager/answer/6023110).
         * Please keep the following things in mind while using this API:
         * - Note that this setting will only take effect for**subsequent** ad requests made for the respective slots.
         * - The slot level setting, if specified, will always override the page level setting.
         * - If set to true (at slot-level or page level), the ad will always be rendered using a SafeFrame container independent of the choice made in the Google Ad Manager UI.
         * - However, if set to false or left unspecified, the ad will be rendered using a SafeFrame container depending on the type of creative and the selection made in the Google Ad Manager UI
         * (see [related article](https://support.google.com/admanager/answer/6023110)).
         * - This API should be used with caution as it could impact the behaviour of creatives that attempt to break out of their iFrames or rely on them being rendered directly in a publishers page.
         * @param forceSafeFrame true to force all ads on the page to be rendered in SafeFrames and false to change the previous setting to false.
         * Setting this to false when unspecified earlier, won't change anything.
         * @returns The service object on which the function was called.
         */
        setForceSafeFrame(forceSafeFrame: boolean): PubAdsService;
        setImaContent(imaContentId: string, imaCmsId: string): void;
        /**
         * Passes location information from websites so you can geo-target line items to specific locations.
         * @param address Freeform address.
         * @returns The service object on which the method was called.
         */
        setLocation(address: string): PubAdsService;
        /**
         * Allows configuration of all privacy settings from a single API using a config object.
         * @param privacySettings Object containing privacy settings config.
         * @returns The service object on which the function was called.
         */
        setPrivacySettings(privacySettings: PrivacySettingsConfig): PubAdsService;
        /**
         * Sets the value for the publisher-provided ID. See the article on [PPID](https://support.google.com/admanager/answer/2880055) for more details.
         * @param ppid An alphanumeric ID provided by the publisher with a recommended maximum of 150 characters.
         * @returns The service object on which the method was called.
         */
        setPublisherProvidedId(ppid: string): PubAdsService;
        /**
         * Configures whether the page should request personalized or non-personalized ads. Personalized ads served by default.
         * @param nonPersonalizedAds 0 for personalized ads, 1 for non-personalized ads.
         * @returns The service object on which the method was called.
         */
        setRequestNonPersonalizedAds(nonPersonalizedAds: number): PubAdsService;
        /**
         * Sets the page-level preferences for SafeFrame configuration.
         * Any unrecognized keys in the config object will be ignored.
         * The entire config will be ignored if an invalid value is passed for a recognized key.
         * These page level preferences will be overridden by slot level preferences, if specified.
         * For more details, please refer to the [help center article](https://support.google.com/admanager/answer/6023110).
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
         * @param key Targeting parameter key.
         * @param value Targeting parameter value or array of values.
         * @returns The service object on which the method was called.
         */
        setTargeting(key: string, value: string | string[]): PubAdsService;
        /**
         * Sets the video content information to be sent along with the ad requests for targeting and content exclusion purposes.
         * Video ads will be automatically enabled when this method is called.
         * For videoContentId and videoCmsId, use the values that are provided to the Google Ad Manager content ingestion service.
         * See the article on [video content](https://support.google.com/admanager/answer/1068325) for more details.
         * @param videoContentId The video content ID.
         * @param videoCmsId The video CMS ID.
         */
        setVideoContent(videoContentId: string, videoCmsId: string): void;
        /**
         * Changes the correlator that is sent with ad requests, effectively starting a new page view.
         * The correlator is the same for all the ad requests coming from one page view, and unique across page views.
         * Only applies to async mode.
         * Note: this has no effect on GPT's [long-lived pageview](https://support.google.com/admanager/answer/183281),
         * which automatically reflects the ads actually on the page and has no expiration time.
         * @returns The service object on which the function was called.
         */
        updateCorrelator(): PubAdsService;
    }
    /**
     * Public interface for ResponseInformation.
     */
    interface ResponseInformation {
        /**
         * The ID of the advertiser.
         */
        advertiserId: number;
        /**
         * The ID of the campaign.
         */
        campaignId: number;
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
     * Configuration object for SafeFrame containers.
     */
    interface SafeFrameConfig {
        /**
         * true to allow expansion by overlay and false otherwise.
         */
        allowOverlayExpansion?: boolean | undefined;
        /**
         * true to allow expansion by push and false otherwise.
         */
        allowPushExpansion?: boolean | undefined;
        /**
         * true if SafeFrame should use the HTML5 sandbox attribute to prevent top level navigation.
         * The only valid value is true (cannot be forced to false).
         * Note that the sandbox attribute disables plugins (e.g.
         * Flash) and creatives that attempt to navigate the top level page instead of opening in a new window.
         */
        sandbox?: boolean | undefined;
        /**
         * Whether to use a unique subdomain for SafeFrame for Reservation creatives. Pass in null to clear the stored value.
         */
        useUniqueDomain?: boolean | null | undefined;
    }
    /**
     * Base service class that contains methods common for all services.
     */
    interface Service {
        /**
         * Registers a listener that allows you to set up and call a JavaScript function when a specific GPT event happens on the page. The following events are supported:
         * - `googletag.events.ImpressionViewableEvent`
         * - `googletag.events.SlotOnloadEvent`
         * - `googletag.events.SlotRenderEndedEvent`
         * - `googletag.events.SlotRequestedEvent`
         * - `googletag.events.SlotResponseReceived`
         * - `googletag.events.SlotVisibilityChangedEvent`
         * An object of the appropriate event type is passed to the listener when it is called.
         * @param eventType A string representing the type of event generated by GPT. Event types are case sensitive.
         * @param listener Function that takes a single event object argument.
         * @returns The service object on which the method was called.
         */
        addEventListener(
            eventType: 'impressionViewable',
            listener: (event: events.ImpressionViewableEvent) => void,
        ): Service;
        addEventListener(eventType: 'slotOnload', listener: (event: events.SlotOnloadEvent) => void): Service;
        addEventListener(eventType: 'slotRenderEnded', listener: (event: events.SlotRenderEndedEvent) => void): Service;
        addEventListener(eventType: 'slotRequested', listener: (event: events.SlotRequestedEvent) => void): Service;
        addEventListener(
            eventType: 'slotResponseReceived',
            listener: (event: events.SlotResponseReceived) => void,
        ): Service;
        addEventListener(
            eventType: 'slotVisibilityChanged',
            listener: (event: events.SlotVisibilityChangedEvent) => void,
        ): Service;
        /**
         * Get the list of slots associated with this service.
         * @returns Slots in the order in which they were added to the service.
         */
        getSlots(): Slot[];
        /**
         * Removes a listener that was previously added by calling `addEventListener`.
         * @param eventType A string representing the type of event generated by GPT. Event types are case sensitive.
         * @param listener Function that takes a single event object argument.
         * @returns True if removeEventListener was successful in removing the listener. False if it failed to remove the listener.
         */
        removeEventListener(
            eventType: 'impressionViewable',
            listener: (event: events.ImpressionViewableEvent) => void,
        ): boolean;
        removeEventListener(eventType: 'slotOnload', listener: (event: events.SlotOnloadEvent) => void): boolean;
        removeEventListener(
            eventType: 'slotRenderEnded',
            listener: (event: events.SlotRenderEndedEvent) => void,
        ): boolean;
        removeEventListener(eventType: 'slotRequested', listener: (event: events.SlotRequestedEvent) => void): boolean;
        removeEventListener(
            eventType: 'slotResponseReceived',
            listener: (event: events.SlotResponseReceived) => void,
        ): boolean;
        removeEventListener(
            eventType: 'slotVisibilityChanged',
            listener: (event: events.SlotVisibilityChangedEvent) => void,
        ): boolean;
    }
    interface Size {
        getWidth(): number;
        getHieght(): number;
    }
    /**
     * Builder for size mapping specification objects.
     * This builder is provided to help easily construct size specifications.
     * See the article on [responsive design](https://support.google.com/admanager/answer/3423562) for more details.
     */
    interface SizeMappingBuilder {
        /**
         * Adds a mapping from a single-size array representing the viewport to either a single-size array or a multi-size array representing the slot.
         * @param viewportSize The size of the viewport for this mapping entry.
         * @param slotSize The sizes of the slot for this mapping entry.
         * @returns A reference to this builder.
         */
        addSize(viewportSize: SingleSizeArray, slotSize: GeneralSize): SizeMappingBuilder;
        /**
         * Builds a size map specification from the mappings added to this builder.
         * If any invalid mappings have been supplied, this method will return null.
         * Otherwise it returns a specification in the correct format to pass to `googletag.Slot.defineSizeMapping()`.
         * The behavior of the builder after calling build() is undefined.
         * @returns The result built by this builder. Can be null if invalid size mappings were supplied.
         */
        build(): SizeMappingArray;
    }
    /**
     * Slot is an object representing single ad slot on a page.
     */
    interface Slot {
        /**
         * Adds a service to this slot.
         * @param service The service to be added.
         * @returns The slot object on which the method was called.
         */
        addService(service: Service): Slot;
        /**
         * Clears all slot-level ad category exclusion labels for this slot.
         * @returns The slot object on which the method was called.
         */
        clearCategoryExclusions(): Slot;
        /**
         * Clears specific or all custom slot-level targeting parameters for this slot.
         * @param opt_key Targeting parameter key. The key is optional; all targeting parameters will be cleared if it is unspecified.
         * @returns The slot object on which the method was called.
         */
        clearTargeting(opt_key?: string): Slot;
        /**
         * Sets an array of mappings from a minimum viewport size to slot size for this slot.
         * See the article on [responsive design](https://support.google.com/admanager/answer/3423562) for more details.
         * @param sizeMapping Array of size mappings.
         * You can use  `googletag.SizeMappingBuilder`  to create it.
         * Each size mapping is an array of two elements: `googletag.SingleSizeArray`  and `googletag.GeneralSize`.
         * @returns The slot object on which the method was called.
         */
        defineSizeMapping(sizeMapping: SizeMappingArray): Slot;
        /**
         * Returns the value for the AdSense attribute associated with the given key.
         * Note that if you intend to see service-level attributes inherited by this slot, you have to use the `googletag.PubAdsService.get(key)` API.
         * @param key Name of the attribute to look for.
         * @returns Current value for the attribute key, or null if the key is not present.
         */
        get(key: string): string | null;
        /**
         * Returns the full path of the ad unit, with the network code and ad unit path.
         * @returns Ad unit path.
         */
        getAdUnitPath(): string;
        /**
         * Returns the list of attribute keys set on this slot.
         * If you intend to see the keys of service-level attributes inherited by this slot, you have to use the `googletag.PubAdsService.getAttributeKeys()` API.
         * @returns Array of attribute keys. Ordering is undefined.
         */
        getAttributeKeys(): string[];
        /**
         * Returns the ad category exclusion labels for this slot.
         * @returns The ad category exclusion labels for this slot.
         */
        getCategoryExclusions(): string[];
        getClickUrl(): string;
        getCollapseEmptyDiv(): boolean | null;
        getContentUrl(): string;
        getDivStartsCollapsed(): boolean | null;
        getEscapedQemQueryId(): string;
        /**
         * @deprecated The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.
         */
        getFirstLook(): number;
        getHtml(): string;
        /**
         * @deprecated getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.
         */
        getName(): string;
        /**
         * Whether or not constructs an out-of-page ad slot with defineOutOfPageSlot.
         */
        getOutOfPage(): boolean;
        /**
         * Returns the ad response information. This is based on the last ad response for the slot. If this is called when the slot has no ad, null will be returned.
         * @returns
         */
        getResponseInformation(): ResponseInformation | null;
        getServices(): Service[];
        getSizes(): Size[] | ['fluid'];
        /**
         * Returns the id of the slot element provided when the slot was defined.
         * @returns Slot element id.
         */
        getSlotElementId(): string;
        getSlotId(): SlotId;
        /**
         * Returns a specific custom targeting parameter set on this slot. Service-level targeting parameters are not included.
         * @param key The targeting key to look for.
         * @returns The values associated with this key, or an empty array if there is no such key.
         */
        getTargeting(key: string): string[];
        /**
         * Returns the list of all custom targeting keys set on this slot. Service-level targeting keys are not included.
         * @returns Array of targeting keys. Ordering is undefined.
         */
        getTargetingKeys(): string[];
        getTargetingMap(): Record<string, string | string[]>;
        /**
         * Sets a value for an AdSense attribute on a particular ad slot.
         * This will override any values set at the service level for this key.
         * See the AdSense Attributes for a list of available keys and values.
         * Calling this method more than once for the same key will override previously set values for that key.
         * All values must be set before calling display or refresh.
         * @param key The name of the attribute.
         * @param value Attribute value.
         * @returns The slot object on which the method was called.
         */
        set(key: string, value: string): Slot;
        /**
         * Sets a slot-level ad category exclusion label on this slot.  See the article on [ad exclusion](https://support.google.com/admanager/answer/3238504) for more details.
         * @param categoryExclusion The ad category exclusion label to add.
         * @returns The slot object on which the method was called.
         */
        setCategoryExclusion(categoryExclusion: string): Slot;
        /**
         * Sets the click URL to which users will be redirected after clicking on the ad.
         * The Google Ad Manager servers still record a click even if the click URL is replaced.
         * Any landing page URL associated with the creative that is served is appended to the provided value.
         * Subsequent calls overwrite the value.
         * This works only for non-SRA requests.
         * @param value The click URL to set.
         * @returns The slot object on which the method was called.
         */
        setClickUrl(value: string): Slot;
        /**
         * Sets whether the slot div should be hidden when there is no ad in the slot. This overrides the service-level settings.
         * @param collapse Whether to collapse the slot if no ad is returned.
         * @param opt_collapseBeforeAdFetch Whether to collapse the slot even before an ad is fetched. Ignored if collapse is not true.
         * @returns The slot object on which the method was called.
         */
        setCollapseEmptyDiv(collapse: boolean, opt_collapseBeforeAdFetch?: boolean): Slot;
        /**
         * Configures whether ads in this slot should be forced to be rendered using a SafeFrame container.
         * For more details, please see the article on [rendering creatives using safeframe](https://support.google.com/admanager/answer/6023110).
         * Please keep the following things in mind while using this API:
         * - Note that this setting will only take effect for**subsequent** ad requests made for the given slot.
         * - The slot level setting, if specified, will always override the page level setting.
         * - If set to true(at slot-level or page level), the ad will always be rendered using a SafeFrame container independent of the choice made in the Google Ad Manager UI.
         * - However, if set to false or left unspecified, the ad will be rendered using a SafeFrame container depending on the type of creative and the selection made in the Google Ad Manager UI
         * (see [related article](https://support.google.com/admanager/answer/6023110)).
         * - This API should be used with caution as it could impact the behaviour of creatives that attempt to break out of their iFrames or rely on them being rendered directly in your page.
         * @param forceSafeFrame true to force all ads in this slot to be rendered in SafeFrames and false to opt-out of a page-level setting (if present).
         * Setting this to false when not specified at page-level, won't change anything.
         * @returns The slot object on which the method was called.
         */
        setForceSafeFrame(forceSafeFrame: boolean): Slot;
        /**
         * Sets the slot-level preferences for SafeFrame configuration.
         * Any unrecognized keys in the config object will be ignored.
         * The entire config will be ignored if an invalid value is passed for a recognized key.
         * These slot level preferences, if specified, will override any page level preferences.
         * For more details, please refer to the [help center article](https://support.google.com/admanager/answer/4578089).
         * @param config The configuration object.
         * @returns The slot object on which the method was called.
         */
        setSafeFrameConfig(config: SafeFrameConfig): Slot;
        /**
         * Sets a custom targeting parameter for this slot.
         * Calling this method multiple times for the same key will overwrite old values.
         * Values set here will overwrite targeting parameters set on service level.
         * These keys are defined in your Google Ad Manager account.
         * @param key Targeting parameter key.
         * @param value Targeting parameter value or array of values.
         * @returns The slot object on which the method was called.
         */
        setTargeting(key: string, value: string | string[]): Slot;
        /**
         * Sets custom targeting parameters for this slot, from a key:value map in a JSON object.
         * A badly formatted input will be rejected.
         * This is the same as calling slot.setTargeting(key,value) for all the key values of the object.
         * In case of overwriting, only the last value will be kept.
         * If the value is an array, any previous value will be overwritten, not merged.
         * Values set here will overwrite targeting parameters set on service level.
         * These keys are defined in your Google Ad Manager account.
         * @param map Targeting parameter key:value map.
         * @returns The slot object on which the method was called.
         */
        updateTargetingFromMap(map: Record<string, string | string[]>): Slot;
    }
    interface SlotId {
        getAdUnitPath(): string;
        getDomId(): string;
        getId(): string;
        getName(): string;
    }
}
