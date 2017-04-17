// Type definitions for react-native-google-analytics-bridge 5.0
// Project: https://github.com/idehub/react-native-google-analytics-bridge
// Definitions by: Huhuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class GoogleAnalyticsTracker {
    /**
     * Save all tracker related data that is needed to call native methods with proper data.
     * @param trackerId {String}
     * @param customDimensionsFieldsIndexMap {{fieldName: fieldIndex}} Custom dimensions field/index pairs
     */
    constructor(trackerId: string, customDimensionsFieldsIndexMap?: {})

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
     * Track the current screen/view
     * @param  {String} screenName The name of the current screen
     */
    trackScreenView(screenName: string): void;

    /**
     * Track an event that has occured
     * @param  {String} category       The event category
     * @param  {String} action         The event action
     * @param  {Object} optionalValues An object containing optional label and value
     */
    trackEvent(category: string, action: string, optionalValues?: {}): void;

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
     * @param  {Object} optionalValues An object containing optional label and value
     * @param  {Object} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackEventWithCustomDimensionValues(
      category: string,
      action: string,
      optionalValues: {},
      customDimensionValues: {},
    ): void;

    /**
     * Track an event that has occured
     * @param  {String} category       The event category
     * @param  {Number} value         	The timing measurement in milliseconds
     * @param  {Object} optionalValues An object containing optional name and label
     */
    trackTiming(category: string, value: number, optionalValues: {}): void;

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  {Object} product       An object with product values
     * @param  {Object} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     */
    trackPurchaseEvent(
      product: {},
      transaction: {},
      eventCategory?: string,
      eventAction?: string,
    ): void;

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  {Array} products       An array with products
     * @param  {Object} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     */
    trackMultiProductsPurchaseEvent(
      products: Array<{}>,
      ransaction: {},
      eventCategory?: string,
      eventAction?: string
    ): void;

    /**
     * Track a purchase event with custom dimensions. This uses the Enhanced Ecommerce GA feature.
     * @param  {Array} products       An array with products
     * @param  {Object} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     * @param  {Object} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackMultiProductsPurchaseEventWithCustomDimensionValues(
      products: Array<{}>,
      transaction: {},
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
     * Sets the current userId for tracking.
     * @param {String} userId The current userId
     */
    setUser(userId: string): void;

    /**
     * Sets if IDFA (identifier for advertisers) collection should be enabled
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
     * @param {Boolean} enabled
     */
    setAnonymizeIp(enabled: string): void;

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
    static openContainerWithId(containerId: string): void;

    /**
     * Retrieves a boolean value with the given key from the opened container.
     * @param {String} key
     */
    static boolForKey(key: string): boolean;

    /**
     * Retrieves a string with the given key from the opened container.
     * @param {String} key
     */
    static stringForKey(key: string): string;

    /**
     * Retrieves a number with the given key from the opened container.
     * @param {String} key
     */
    static doubleForKey(key: string): number;

    /**
     * push a datalayer event for Google Analytics through Google Tag Manager.
     * @param {Object} dictionary An Map<String, Object> containing key and value pairs.
     * it must have at least one key "event" with event name
     *         example: {event: "eventName", pageId: "/home"}
     */
    static pushDataLayerEvent<E>(dictionary: GAEvent<E>): void;
}

export class GoogleAnalyticsSettings {
    /**
     * Sets if OptOut is active and disables Google Analytics
     * This has to be set each time the App starts
     * @param {Boolean} enabled
     */
    static setOptOut(enabled: boolean): void;

    /**
     * Sets the trackers dispatch interval
     * This will influence how often batches of events, screen views, etc
     * are sent to your tracker.
     * @param {Number} intervalInSeconds
     */
    static setDispatchInterval(intervalInSeconds: number): void;

    /**
     * Sets if the tracker should have dry run enabled.
     * If dry run is enabled, no analytics data will be sent to your tracker.
     * @param {Boolean} enabled
     */
    static setDryRun(enabled: boolean): void;
}
