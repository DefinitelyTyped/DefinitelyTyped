/// <reference path="angular-google-analytics.d.ts" />

function ConfigurationMethodChaining(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider
        .logAllCalls(true)
        .startOffline(true)
        .useECommerce(true, true);
}

function EnableECommerce(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.useECommerce(true, false);
    AnalyticsProvider.useECommerce(true, true);
    AnalyticsProvider.setCurrency("CDN");
}

function SetGoogleAnalyticsAccounts(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.setAccount("UA-XXXXX-xx");
    AnalyticsProvider.setAccount([
        { tracker: "UA-12345-12", name: "tracker1" },
        { tracker: "UA-12345-34", name: "tracker2" }
    ]);
}

function UseClassicAnalytics(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.useAnalytics(false);
}

function UseDisplayFeatures(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.useDisplayFeatures(true);
}

function UseEnhancedLinkAttribution(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.useEnhancedLinkAttribution(true);
}

function UseCrossDomainLinking(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.useCrossDomainLinker(true);
    AnalyticsProvider.setCrossLinkDomains(["domain-1.com", "domain-2.com"]);
}

function SetCookieConfiguration(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.setCookieConfig({
        cookieDomain: "foo.example.com",
        cookieName: "myNewName",
        cookieExpires: 20000
    });
}

function SetRouteTrackingBehaviors(AnalyticsProvider: angular.google.analytics.AnalyticsProvider) {
    AnalyticsProvider.trackPages(true);
    AnalyticsProvider.trackUrlParams(true);
    AnalyticsProvider.ignoreFirstPageLoad(true);
    AnalyticsProvider.trackPrefix("my-application");
    AnalyticsProvider.setPageEvent("$stateChangeSuccess");
    AnalyticsProvider.setRemoveRegExp(/\/\d+?$/);
}
