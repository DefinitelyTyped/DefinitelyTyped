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
     * @param customDimensionsFieldsIndexMap Custom dimensions field/index pairs
     */
    constructor(trackerId: string, customDimensionsFieldsIndexMap?: { [s: string]: number })

    /**
     * If Tracker has customDimensionsFieldsIndexMap, it will transform
     * customDimensions map pairs {field: value} to {fieldIndex: value}.
     * Otherwise customDimensions are passed trough untouched.
     * Underlay native methods will transform provided customDimensions map to expected format.
     * Google analytics expect dimensions to be tracker with 'dimension{index}' keys,
     * not dimension field names.
     */
    transformCustomDimensionsFieldsToIndexes(customDimensions: {}): void;

    /**
     * Track the current screen/view Important: Calling this will also set the "current view" for
     * other calls. So events tracked will be tagged as having occured on the current view.
     * @param  screenName The name of the current screen
     */
    trackScreenView(screenName: string): void;

    /**
     * Track an event that has occured
     * @param  category       The event category
     * @param  action         The event action
     * @param  optionalValues An object containing optional label and value
     */
    trackEvent(category: string, action: string, optionalValues?: EventOptionalValues): void;

    /**
     * Track the current screen/view with custom dimension values
     * @param  screenName The name of the current screen
     * @param  customDimensionValues An object containing custom dimension key/value pairs
     */
    trackScreenViewWithCustomDimensionValues(screenName: string, customDimensionValues: {}): void;

    /**
     * Track an event that has occured with custom dimension values
     * @param  category       The event category
     * @param  action         The event action
     * @param  optionalValues An object containing optional label and value
     * @param  customDimensionValues An object containing custom dimension key/value pairs
     */
    trackEventWithCustomDimensionValues(
      category: string,
      action: string,
      optionalValues: EventOptionalValues,
      customDimensionValues: {},
    ): void;

    /**
     * Track an event that has occured
     * @param  category       The event category
     * @param  value         	The timing measurement in milliseconds
     * @param  optionalValues An object containing optional name and label
     */
    trackTiming(category: string, value: number, optionalValues?: TimeTrackingOptionalValues): void;

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  product       An object with product values
     * @param  transaction   An object with transaction values
     * @param  eventCategory The event category, defaults to Ecommerce
     * @param  eventAction   The event action, defaults to Purchase
     */
    trackPurchaseEvent(
      product: EventPurchaseProduct,
      transaction: EventPurchaseTransaction,
      eventCategory?: string,
      eventAction?: string,
    ): void;

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  products       An array with products
     * @param  transaction   An object with transaction values
     * @param  eventCategory The event category, defaults to Ecommerce
     * @param  eventAction   The event action, defaults to Purchase
     */
    trackMultiProductsPurchaseEvent(
      products: EventPurchaseProduct[],
      transaction: EventPurchaseTransaction,
      eventCategory?: string,
      eventAction?: string
    ): void;

    /**
     * Track a purchase event with custom dimensions. This uses the Enhanced Ecommerce GA feature.
     * @param  products       An array with products
     * @param  transaction   An object with transaction values
     * @param  eventCategory The event category, defaults to Ecommerce
     * @param  eventAction   The event action, defaults to Purchase
     * @param  customDimensionValues An object containing custom dimension key/value pairs
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
     * @param  error The description of the error
     * @param  fatal A value indiciating if the error was fatal, defaults to false
     */
    trackException(error: string, fatal?: boolean): void;

    /**
     * Sets the Google Analytics User-ID for the current user for tracking.
     * The userId should be an anonymous identifier that complies with Google Analytic's User-ID policy.
     * @param userId The current userId,
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
     * @param  enabled Defaults to true
     */
    allowIDFA(enabled?: boolean): void;

    /**
     * Track a social interaction, Facebook, Twitter, etc.
     */
    trackSocialInteraction(network: string, action: string, targetUrl: string): void;

    /**
     * Sets if uncaught exceptions should be tracked
     */
    setTrackUncaughtExceptions(enabled: boolean): void;

    /**
     * Sets the trackers appName
     * The Bundle name is used by default
     */
    setAppName(appName: string): void;

    /**
     * Sets the trackers appVersion
     */
    setAppVersion(appVersion: string): void;

    /**
     * Sets if AnonymizeIp is enabled
     * If enabled the last octet of the IP address will be removed
     * @param enabled disabled by default
     */
    setAnonymizeIp(enabled: string): void;

    /**
     * Sets the tracker currency property. See accepted currency codes here
     * https://developers.google.com/analytics/devguides/platform/features/currencies
     * @param currencyCode  ISO 4217 currency code
     */
    setCurrency(currencyCode: string): void;

    /**
     * Sets tracker sampling rate.
     * @param sampleRatio Percentage 0 - 100
     */
    setSamplingRate(sampleRatio: number): void;
}

export interface GAEvent<T> {
    event: string;
    payload: T;
}

export namespace GoogleTagManager {
    /**
     * Call once to open the container for all subsequent static calls.
     */
    function openContainerWithId(containerId: string): Promise<void>;

    /**
     * Retrieves a boolean value with the given key from the opened container.
     */
    function boolForKey(key: string): Promise<boolean>;

    /**
     * Retrieves a string with the given key from the opened container.
     */
    function stringForKey(key: string): Promise<string>;

    /**
     * Retrieves a number with the given key from the opened container.
     */
    function doubleForKey(key: string): Promise<number>;

    /**
     * push a datalayer event for Google Analytics through Google Tag Manager.
     * @param dictionary An Map<String, Object> containing key and value pairs.
     * it must have at least one key "event" with event name
     *         example: {event: "eventName", pageId: "/home"}
     */
    function pushDataLayerEvent<E>(dictionary: GAEvent<E>): Promise<boolean>;
}

export namespace GoogleAnalyticsSettings {
    /**
     * Sets if OptOut is active and disables Google Analytics
     * This has to be set each time the App starts
     *
     * Disabled by default.
     */
    function setOptOut(enabled: boolean): void;

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
     */
    function setDispatchInterval(intervalInSeconds: number): void;

    /**
     * When enabled the native library prevents any data from being sent to Google Analytics.
     * This allows you to test or debug the implementation, without your test data appearing in
     * your Google Analytics reports.
     *
     */
    function setDryRun(enabled: boolean): void;
}
