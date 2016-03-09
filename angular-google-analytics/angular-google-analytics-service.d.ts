// Type definitions for angular-google-analytics v1.1.0
// Project: https://github.com/revolunet/angular-google-analytics
// Definitions by: Matt Wheatley <https://github.com/terrawheat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module angular.google.analytics {
  interface AnalyticsService {
    /**
     * @summary If logging is enabled then all outbound calls are accessible via an in-memory array.
     * This is useful for troubleshooting and seeing the order of outbound calls with parameters.
     */
    log: Array<Object>;

    /**
     * @summary If in offline mode then all calls are queued to an in-memory array for future processing.
     * All calls queued to the offlineQueue are not outbound calls yet and hence do not show up in the log.
     */
    offlineQueue: Array<Object>;

    /**
     * @summary Returns the current URL that would be sent if a `trackPage` call was made.
     * @return {string} The URL
     */
    getUrl: () => string;

    /**
     * @summary Manually create classic analytics (ga.js) script tag
     */
    createScriptTag: () => void;

    /**
     * @summary Manually create universal analytics (analytics.js) script tag
     */
    createAnalyticsScriptTag: () => void;

    /**
     * @summary Allows for advanced configuration and definitions in univeral analytics only. This is a no-op when using classic analytics.
     */
    set: (key: string, value: any, accountName?: string) => void;

    /**
     * @summary Creates a new page view event
     * @param  {string} pageURL URL of page view
     * @param  {string} title Page Title
     * @param  {Object}  dimensions Additional dimensions and metrics
     */
    trackPage: (pageURL: string, title?: string, dimensions?: { [expr: string]: any }) => void;

    /**
     * @summary Create a new event
     */
    trackEvent: (category: string, action: string, label: string, value?: any, nonInteractionFlag?: boolean, dimensions?: { [expr: string]: any }) => void;

    trackException: (descrption: string, isFatal: boolean) => void;

    /**
     * @summary While in offline mode, no calls to the ga function or pushes to the gaq array are made.
     * This will queue all calls for later sending once offline mode is reset to false.
     */
    offline: (offlineMode: boolean) => void;
  }
}
