// $ExpectType void
ineum('key', 'key');
// $ExpectType void
ineum('page', 'pageName');
// $ExpectType void
ineum('reportingUrl', 'reportingUrl');
// $ExpectType void
ineum('traceId', 'traceId');

// $ExpectType void
ineum('user');
// $ExpectType void
ineum('user', 'userId');
// $ExpectType void
ineum('user', undefined, undefined, 'userEmail');
// $ExpectType void
ineum('user', 'userId', 'userName', 'userEmail');

// $ExpectType void
ineum('meta', 'key', 'value');
// $ExpectType void
ineum('meta', 'key', 1);
// $ExpectType void
ineum('meta', 'key', true);

// $ExpectType void
ineum('ignorePings', true);
// $ExpectType void
ineum('wrapEventHandlers', true);
// $ExpectType void
ineum('wrapTimers', true);

// $ExpectType void
ineum('trackSessions');
// $ExpectType void
ineum('trackSessions', 1000, 1000);

// $ExpectType void
ineum('terminateSession');

// $ExpectType string | undefined
ineum('getPageLoadId');

// $ExpectType void
ineum('beaconBatchingTime', 123);
// $ExpectType void
ineum('maxMaitForPageLoadMetricsMillis', 123);
// $ExpectType void
ineum('maxWaitForResourceTimingsMillis', 123);
// $ExpectType void
ineum('xhrTransmissionTimeout', 123);

// $ExpectType void
ineum('reportError', 'error');
// $ExpectType void
ineum('reportError', new Error('error'));
// $ExpectType void
ineum('reportError', 'error', {
    componentStack: 'stack',
    meta: {
        key: 'value',
    },
});

// $ExpectType void
ineum('reportEvent', 'log');
// $ExpectType void
ineum('reportEvent', 'log', {
    duration: 42,
    timestamp: 42,
    backendTraceId: 'abc',
    error: new Error(),
    componentStack: 'AppComponent\nButtonComponent',
    meta: {
        itemsInCart: 5,
    },
});

// $ExpectType void
ineum('allowedOrigins', [/regex/]);
// $ExpectType void
ineum('ignoreErrorMessages', [/regex/]);
// $ExpectType void
ineum('ignoreUrls', [/regex/]);
// $ExpectType void
ineum('ignoreUserTimings', [/regex/]);
// $ExpectType void
ineum('captureHeaders', [/regex/]);
// $ExpectType void
ineum('secrets', [/regex/]);

// $ExpectType void
ineum('apiKey', 'deprecated');

// $ExpectType void
ineum('whitelistedOrigins', [/regex/]);
