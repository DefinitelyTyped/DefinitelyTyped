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

function RetrieveCurrentURL(Analytics: angular.google.analytics.AnalyticsService) {
    var test = Analytics.getUrl();
}

function ManualScriptTagInjection(Analytics: angular.google.analytics.AnalyticsService) {
  Analytics.registerScriptTags();
  Analytics.registerTrackers();
}

function SetCustomDimensions(Analytics: angular.google.analytics.AnalyticsService) {
  Analytics.set('&uid', 1234);
  Analytics.set('dimension1', 'Paid');
  Analytics.set('dimension2', 'Paid', 'accountName');
}

function PageTracking(Analytics: angular.google.analytics.AnalyticsService) {
  Analytics.trackPage('/video/detail/XXX');
  Analytics.trackPage('/video/detail/XXX', 'Video XXX');
  Analytics.trackPage('/video/detail/XXX', 'Video XXX', { dimension15: 'My Custom Dimension', metric18: 8000 });
}

function EventTracking(Analytics: angular.google.analytics.AnalyticsService) {
   Analytics.trackEvent('video', 'play', 'django.mp4');
   Analytics.trackEvent('video', 'play', 'django.mp4', 4);
   Analytics.trackEvent('video', 'play', 'django.mp4', 4, true);
   Analytics.trackEvent('video', 'play', 'django.mp4', 4, true, { dimension15: 'My Custom Dimension', metric18: 8000 });
}

function ExceptionTracking(Analytics: angular.google.analytics.AnalyticsService) {
  Analytics.trackException('Function "foo" is undefined on object "bar"', true);
}

function OfflineMode(Analytics: angular.google.analytics.AnalyticsService) {
  Analytics.offline(true);
  Analytics.offline(false);
  Analytics.offlineQueue;
}
