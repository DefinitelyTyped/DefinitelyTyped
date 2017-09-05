// Type definitions for react-native-google-analytics-bridge 5.2
// Project: https://github.com/idehub/react-native-google-analytics-bridge
// Definitions by: Huhuanming <https://github.com/huhuanming>,
//                 Nathan Brooker Perry <https://github.com/nbperry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TimeTrackingOptionalValues {
    name: string;
    label?: string;
}

export interface EventOptionalValues {
    label?: string;
    value?: number;
}

export interface EventPurchaseProduct {
    id: string;
    name: string;
    category?: string;
    brand?: string;
    variant?: string;
    price?: number;
    quantity?: number;
    couponCode?: string;
}
export interface EventPurchaseTransaction {
    id: string;
    /**
     * an entity with which the transaction should be affiliated (e.g. a particular store)
     */
    affiliation: string;
    revenue?: number;
    tax?: number;
    shipping?: number;
    couponCode?: string;
}

export class GoogleAnalyticsTracker {
    /**
     * Save all tracker related data that is needed to call native methods with proper data.
     * @param trackerId {String}
     * @param customDimensionsFieldsIndexMap {{fieldName: fieldIndex}} Custom dimensions field/index pairs
     */
    constructor(trackerId: string, customDimensionsFieldsIndexMap?: { [s: string]: number })

    /**
     * If Tracker has customDimensionsFieldsIndexMap, it will transform
     * customDimensions map pairs {field: value} to {fieldIndex: value}.
     * Otherwise customDimensions are passed trough untouched.
     * Underlay native methods will transform provided customDimensions map to expected format.
     * Google analytics expect dimensions to be tracker with 'dimension{index}' keys,
     * not dimension field names.
     * @param customDimensions {Object}
     * @returns {Object}
     */
    transformCustomDimensionsFieldsToIndexes(customDimensions: {}): void;

    /**
     * Track the current screen/view Important: Calling this will also set the "current view" for
     * other calls. So events tracked will be tagged as having occured on the current view.
     * @param  {String} screenName The name of the current screen
     */
    trackScreenView(screenName: string): void;

    /**
     * Track an event that has occured
     * @param  {String} category       The event category
     * @param  {String} action         The event action
     * @param  {EventOptionalValues} optionalValues An object containing optional label and value
     */
    trackEvent(category: string, action: string, optionalValues?: EventOptionalValues): void;

    /**
     * Track the current screen/view with custom dimension values
     * @param  {String} screenName The name of the current screen
     * @param  {Object} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackScreenViewWithCustomDimensionValues(screenName: string, customDimensionValues: {}): void;

    /**
     * Track an event that has occured with custom dimension values
     * @param  {String} category       The event category
     * @param  {String} action         The event action
     * @param  {EventOptionalValues} optionalValues An object containing optional label and value
     * @param  {Object} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackEventWithCustomDimensionValues(
      category: string,
      action: string,
      optionalValues: EventOptionalValues,
      customDimensionValues: {},
    ): void;

    /**
     * Track an event that has occured
     * @param  {String} category       The event category
     * @param  {Number} value         	The timing measurement in milliseconds
     * @param  {TimeTrackingOptionalValues} optionalValues An object containing optional name and label
     */
    trackTiming(category: string, value: number, optionalValues?: TimeTrackingOptionalValues): void;

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  {EventPurchaseProduct} product       An object with product values
     * @param  {EventPurchaseTransaction} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     */
    trackPurchaseEvent(
      product: EventPurchaseProduct,
      transaction: EventPurchaseTransaction,
      eventCategory?: string,
      eventAction?: string,
    ): void;

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  {EventPurchaseProduct[]} products       An array with products
     * @param  {EventPurchaseTransaction} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     */
    trackMultiProductsPurchaseEvent(
      products: EventPurchaseProduct[],
      transaction: EventPurchaseTransaction,
      eventCategory?: string,
      eventAction?: string
    ): void;

    /**
     * Track a purchase event with custom dimensions. This uses the Enhanced Ecommerce GA feature.
     * @param  {EventPurchaseProduct[]} products       An array with products
     * @param  {EventPurchaseTransaction} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     * @param  {Object} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackMultiProductsPurchaseEventWithCustomDimensionValues(
      products: EventPurchaseProduct[],
      transaction: EventPurchaseTransaction,
      eventCategory?: string,
      eventAction?: string,
      customDimensions?: {},
    ): void;

    /**
     * Track an exception
     * @param  {String} error The description of the error
     * @param  {Boolean} fatal A value indiciating if the error was fatal, defaults to false
     */
    trackException(error: string, fatal?: boolean): void;

    /**
     * Sets the Google Analytics User-ID for the current user for tracking.
     * The userId should be an anonymous identifier that complies with Google Analytic's User-ID policy.
     * @param {String} userId The current userId,
     */
    setUser(userId: string): void;

    /**
     * Sets if IDFA (identifier for advertisers) collection should be enabled.
     *
     * Enabled by default.
     *
     * Important: For iOS you can only use this method if you have done the optional step 6 from the installation
     * guide. Only enable this (and link the appropriate libraries) if you plan to use advertising features
     * in your app, or else your app may get rejected from the AppStore.
     * @param  {Boolean} enabled Defaults to true
     */
    allowIDFA(enabled?: boolean): void;

    /**
     * Track a social interaction, Facebook, Twitter, etc.
     * @param  {String} network
     * @param  {String} action
     * @param  {String} targetUrl
     */
    trackSocialInteraction(network: string, action: string, targetUrl: string): void;

    /**
     * Sets if uncaught exceptions should be tracked
     * @param {Boolean} enabled
     */
    setTrackUncaughtExceptions(enabled: boolean): void;

    /**
     * Sets the trackers appName
     * The Bundle name is used by default
     * @param {String} appName
     */
    setAppName(appName: string): void;

    /**
     * Sets the trackers appVersion
     * @param {String} appVersion
     */
    setAppVersion(appVersion: string): void;

    /**
     * Sets if AnonymizeIp is enabled
     * If enabled the last octet of the IP address will be removed
     * @param {Boolean} enabled disabled by default
     */
    setAnonymizeIp(enabled: string): void;

    /**
     * Sets the tracker currency property. See accepted currency codes here
     * https://developers.google.com/analytics/devguides/platform/features/currencies
     * @param {string} currencyCode  ISO 4217 currency code
     */
    setCurrency(currencyCode: string): void;

    /**
     * Sets tracker sampling rate.
     * @param {Float} sampleRatio Percentage 0 - 100
     */
    setSamplingRate(sampleRatio: number): void;
}

export interface GAEvent<T> {
    event: string;
    payload: T;
}

export class GoogleTagManager {
    /**
     * Call once to open the container for all subsequent static calls.
     * @param {String} containerId
     */
    static openContainerWithId(containerId: string): Promise<void>;

    /**
     * Retrieves a boolean value with the given key from the opened container.
     * @param {String} key
     */
    static boolForKey(key: string): Promise<boolean>;

    /**
     * Retrieves a string with the given key from the opened container.
     * @param {String} key
     */
    static stringForKey(key: string): Promise<string>;

    /**
     * Retrieves a number with the given key from the opened container.
     * @param {String} key
     */
    static doubleForKey(key: string): Promise<number>;

    /**
     * push a datalayer event for Google Analytics through Google Tag Manager.
     * @param {Object} dictionary An Map<String, Object> containing key and value pairs.
     * it must have at least one key "event" with event name
     *         example: {event: "eventName", pageId: "/home"}
     */
    static pushDataLayerEvent<E>(dictionary: GAEvent<E>): Promise<boolean>;
}

export class GoogleAnalyticsSettings {
    /**
     * Sets if OptOut is active and disables Google Analytics
     * This has to be set each time the App starts
     *
     * Disabled by default.
     * @param {Boolean} enabled
     */
    static setOptOut(enabled: boolean): void;

    /**
     * Sets the trackers dispatch interval
     * This will influence how often batches of events, screen views, etc
     * are sent to your tracker.
     *
     * Events, screen views, etc, are sent in batches to the tracker. This function allows you to configure
     * how often (in seconds) the batches are sent to your tracker. Recommended to keep this around
     * 20-120 seconds to preserve battery and network traffic.
     *
     * This is set to 20 seconds by default.
     *
     * @param {Number} intervalInSeconds
     */
    static setDispatchInterval(intervalInSeconds: number): void;

    /**
     * When enabled the native library prevents any data from being sent to Google Analytics.
     * This allows you to test or debug the implementation, without your test data appearing in
     * your Google Analytics reports.
     *
     * @param {Boolean} enabled
     */
    static setDryRun(enabled: boolean): void;
}
