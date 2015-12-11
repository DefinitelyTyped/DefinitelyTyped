// Type definitions for angular-google-analytics v1.1.0
// Project: https://github.com/revolunet/angular-google-analytics
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.google.analytics {
    /**
     * @summary Interface for {@link AnalysticsProvider}.
     * @interface
     */
    interface AnalyticsProvider {
        /**
         * @summary Use Delay Script Tag Insertion.
         * @param {boolean} val If true, the delay script tag is inserted.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        delayScriptTag(val: boolean): AnalyticsProvider;

        /**
         * @summary Activates the test mode.
         */
        enterTestMode(): void;

        /**
         * @summary Gets the global cookie configuration.
         * @return {Object} The global cookie configuration.
         */
        getCookieConfig(): Object;

        /**
         * @summary Ignore first page view.
         * @param {boolean} val If true, the first page view is ignored.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        ignoreFirstPageLoad(val: boolean): AnalyticsProvider;

        /**
         * @summary Enable Service Logging.
         * @param {boolean} val If true, log all outbound calls to an in-memory array accessible.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        logAllCalls(val: boolean): AnalyticsProvider;

        /**
         * @summary Set Google Analytics Accounts.
         * @param {Object} tracker The account identifier(s).
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        setAccount(tracker: string|Object|Array<Object>): AnalyticsProvider;

        /**
         * @summary Set Cookie Configuration.
         * @param {Object} config The custom cookie parameters.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         * @deprecated
         */
        setCookieConfig(config: Object): AnalyticsProvider;

        /**
         * @summary Set cross-linked domains.
         * @param {Array<string>} domains The domains.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        setCrossLinkDomains(domains: Array<string>): AnalyticsProvider;

        /**
         * @summary Set currency.
         * @param {string} currencyCode The currency code.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        setCurrency(currencyCode: string): AnalyticsProvider;

        /**
         * @summary Set Domain Name.
         * @param {string} domain The domain name.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        setDomainName(domain: string): AnalyticsProvider;

        /**
         * @summary Enable Experiment (universal analytics only).
         * @param {string} id The experiment identifier.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        setExperimentId(id: string): AnalyticsProvider;

        /**
         * @summary Support Hybrid Mobile Applications.
         * @param {boolean} val If true, each account object will disable protocol checking and all injected scripts will use the HTTPS protocol.
         */
        setHybridMobileSupport(val: boolean): AnalyticsProvider;

        /**
         * @summary Set the default page event name.
         * @param {string} name The default page event name.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        setPageEvent(name: string): AnalyticsProvider;

        /**
         * @summary Sets the regex to scrub location before sending to analytics.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         * @param {RegExp} regex The regex.
         */
        setRemoveRegExp(regex: RegExp): AnalyticsProvider;

        /**
         * @summary Starts the offline mode.
         * @param {boolean} val If true, the offline mode is started.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        startOffline(val: boolean): AnalyticsProvider;

        /**
         * @summary Track all routes.
         * @param {boolean} val If true, all routes are tracked.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        trackPages(doTrack: boolean): AnalyticsProvider;

        /**
         * @summary Sets the URL prefix.
         * @param {string} prefix The URL prefix.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        trackPrefix(prefix: string): AnalyticsProvider;

        /**
         * @summary Track all URL query parameters.
         * @param {boolean} val If true, all URL query parameters are tracked.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        trackUrlParams(val: boolean): AnalyticsProvider;

        /**
         * @summary Use Classic Analytics.
         * @param {boolean} val If true, use classic analytics.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        useAnalytics(val: boolean): AnalyticsProvider;

        /**
         * @summary Use Cross Domain Linking.
         * @param {boolean} val If true, the cross-linked domains are registered with Google Analytics.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        useCrossDomainLinker(val: boolean): AnalyticsProvider;

        /**
         * @summary Use Display Features.
         * @param {boolean} val If true, the display features module is loaded with Google Analytics.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        useDisplayFeatures(val: boolean): AnalyticsProvider;

        /**
         * @summary Enable enhanced e-commerce module.
         * @param {boolean} val If true, the enhanced e-commerce module is enabled.
         * @param {boolean} enhanced If true, the "ec.js" file is used, otherwises, the "ecommerce.js" is used.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        useECommerce(val: boolean, enhanced: boolean): AnalyticsProvider;

        /**
         * @summary Use Enhanced Link Attribution.
         * @param {boolean} val If true, the enhanced link attribution module is loaded with Google Analytics.
         * @return {angular.google.analytics.IAnalyticsProvider} The object instance.
         */
        useEnhancedLinkAttribution(val: boolean): AnalyticsProvider;
    }
}
