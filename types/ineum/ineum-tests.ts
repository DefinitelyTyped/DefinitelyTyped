// $ExpectType void
ineum("key", "key");
// $ExpectType void
ineum("reportingUrl", "reportingUrl");
// $ExpectType void
ineum("page", "pageName");
// $ExpectType void
ineum("user", "userId", "userName", "userEmail");
// $ExpectType void
ineum("meta", "key", "value");
// $ExpectType void
ineum("traceId", "traceId");
// $ExpectType void
ineum("ignoreUrls", [/regex/]);
// $ExpectType void
ineum("autoClearResourceTimings", true);
// $ExpectType void
ineum("reportError", "error");
// $ExpectType void
ineum("reportError", "error", {
    componentStack: "stack"
});
// $ExpectType void
ineum("ignoreErrorMessages", [/regex/]);
// $ExpectType void
ineum("wrapEventHandlers", true);
// $ExpectType void
ineum("wrapTimers", true);
// $ExpectType void
ineum("whitelistedOrigins", [/regex/]);
// $ExpectType string | undefined
ineum("getPageLoadId");
// $ExpectType void
ineum("ignoreUserTimings", [/regex/]);
// $ExpectType void
ineum("reportEvent", "log");
// $ExpectType void
ineum("reportEvent", "log", {
    duration: 42,
    backendTraceId: 'abc',
    error: new Error(),
    componentStack: 'AppComponent\nButtonComponent',
    meta: {
        itemsInCart: 5
    }
});
