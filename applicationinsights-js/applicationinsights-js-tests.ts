///<reference path='applicationinsights-js.d.ts' />
// More samples on: https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md 

var config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: "<your iKey>",
    endpointUrl: "endpointUrl",
    emitLineDelimitedJson: false,
    accountId: "accountId",
    sessionRenewalMs: 30,
    sessionExpirationMs: 24 * 60 * 60 * 1000,
    maxBatchSizeInBytes: 100 * 1024,
    maxBatchInterval: 15,
    enableDebug: false,
    disableTelemetry: false,
    verboseLogging: false,
    diagnosticLogInterval: 10,
    samplingPercentage: 100,
    autoTrackPageVisitTime: true,
    disableExceptionTracking: false,
    disableAjaxTracking: false,
    overridePageViewDuration: false,
    maxAjaxCallsPerView: -1,
    disableDataLossAnalysis: true,
    disableCorrelationHeaders: true,
    disableFlushOnBeforeUnload: false,
    enableSessionStorageBuffer: false,
    cookieDomain: ""
};

var appInsights = new Microsoft.ApplicationInsights.AppInsights(config);

// trackPageView
appInsights.trackPageView("page1");
appInsights.trackPageView("page2", "http://example.com", null, null, 1000);

// startTrackPage
appInsights.startTrackPage("page");

// stopTrackPage
appInsights.stopTrackPage("page");
appInsights.stopTrackPage("page", "http://example.com", null, null);

// trackEvent
appInsights.trackEvent("page1");
appInsights.trackEvent("page1", null, null);

// trackMetric
appInsights.trackMetric("page1", 999);
appInsights.trackMetric("page1", 999, 1, 1, 2, null);

// trackException
appInsights.trackException(new Error("sample error"));
appInsights.trackException(new Error("sample error"), "handledAt", null, null);

// trackTrace
appInsights.trackTrace("message");
appInsights.trackTrace("message", null);

// flush
appInsights.flush();

// setAuthenticatedUserContext
appInsights.setAuthenticatedUserContext("userId");
appInsights.setAuthenticatedUserContext("userId", "accountId");

// set config dynamically
appInsights.config.instrumentationKey = "<new key>";


// TelementryContext
var context = appInsights.context;

context.application.ver = "v0.0.0";
context.application.build = "1.1.1";

context.device.type = "sampleDevice";
context.device.locale = "en-US";

context.user.id = "userId";
context.user.authenticatedId = "authId";

context.session.id = "sessionId";
context.session.isFirst = true;

context.location.ip = "127.0.0.1";

context.operation.id = "1";
context.operation.syntheticSource = "testAgent";

// track
var data = new Microsoft.Telemetry.Base();
var envelope = new Microsoft.ApplicationInsights.Telemetry.Common.Envelope(data, "name");

context.track(envelope);

context.addTelemetryInitializer((envelope) => false);