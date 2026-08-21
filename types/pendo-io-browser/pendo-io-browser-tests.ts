// Examples from: https://developers.pendo.io/docs/?bash#agent-api

pendo.initialize();

pendo.initialize({});

pendo.initialize({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike",
    },
    account: {
        id: "PUT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp",
        tags: ["t-1", "t-2"],
    },
});

pendo.initialize({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike",
    },
    account: {
        id: "PUT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp",
    },
    parentAccount: {
        id: "PUT_PARENT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp",
    },
    disableCookies: true,
});

// $ExpectType string | null
pendo.getAccountId();

pendo.initialize({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike",
    },
    guides: {
        disabled: true,
    },
});

pendo.initialize({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike",
    },
    account: {
        id: "PUT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp",
    },
    cookieDomain: ".example.com",
});

pendo.setGuidesDisabled(true);
pendo.stopGuides();

pendo.setGuidesDisabled(false);
pendo.startGuides();

pendo.identify(
    "PUT_VISITOR_ID_HERE",
    "PUT_ACCOUNT_ID_HERE",
);

pendo.identify({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike",
        nullField: null,
    },
    account: {
        id: "PUT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp",
        nullField: null,
    },
});

pendo.updateOptions({
    visitor: {
        id: "foo",
    },
    account: {
        id: "bar",
        TypeOfBusiness: "brokers",
        dollarPerStop: "true",
    },
});

pendo.debugging.getEventCache();

pendo.events
    .ready(() => {
        // Do something once `pendo.isReady()` would return `true`
    })
    .guidesLoaded(() => {
        // Do something when Guides load
    })
    .guidesFailed(() => {
        // Do something when Guides fail to load
    });

pendo.initialize({
    apiKey: "YOUR_API_KEY",
    visitor: { id: "" },
    account: { id: "" },
    events: {
        ready() {
            // Do something when pendo is initialized
        },
    },
});

pendo.initialize({
    apiKey: "YOUR_API_KEY",
    visitor: { id: "" },
    account: { id: "" },
    sanitizeUrl: (url) => url.replace("sensitiveData", ""),
});

pendo.track("User Registered", {
    userId: "user.id",
    plan: "user.plan",
    accountType: "Facebook",
});

try {
    throw new Error();
} catch (error: any) {
    pendo.track("JIRA-12345--error-tripped", {
        message: error.message,
        stack: error.stack,
    });
}

pendo.dom("").closest("._pendo-guide-next_");

pendo.onGuideAdvanced();
pendo.onGuideAdvanced({ steps: 2 });
pendo.onGuideDismissed();

pendo.feedback.loginAndRedirect();
const a = document.createElement("a");
pendo.feedback.loginAndRedirect({ anchor: a });

pendo.additionalApiKeys.forEach(console.log);
console.log(pendo.apiKey);

// $ExpectType void
pendo.teardown();

// $ExpectType void
pendo.clearSession();

// Test trackAgent method
pendo.trackAgent("customEvent");
pendo.trackAgent("customEvent", { action: "click", value: 123 });

// Test identity methods with aliases
// $ExpectType string
pendo.getVisitorId();
// $ExpectType string
pendo.get_visitor_id();

pendo.set_visitor_id("new-visitor-id-2");

// $ExpectType string | null
pendo.getAccountId();
// $ExpectType string | null
pendo.get_account_id();

pendo.set_account_id("new-account-id-2");

// $ExpectType string
pendo.generate_unique_id();
// $ExpectType string
pendo.generate_unique_id("prefix-");

// Test anonymous visitor check
// $ExpectType boolean
pendo.isAnonymousVisitor();
// $ExpectType boolean
pendo.isAnonymousVisitor("_PENDO_T_123");

// Test guide management methods
const guide = pendo.findGuideByName("My Guide");
const guideById = pendo.findGuideById("guide-123");
const guideByField = pendo.findGuideBy("state", "published");
const module = pendo.findModuleByName("My Module");

if (guide) {
    const step = pendo.findStepInGuide(guide, "step-123");
}

// $ExpectType boolean
pendo.isGuideShown();

// $ExpectType Guide[]
pendo.getActiveGuides();

const activeGuide = pendo.getActiveGuide();

pendo.hideGuides();
pendo.hideGuides({ stayHidden: true });

pendo.showLauncher();
pendo.hideLauncher();
pendo.removeLauncher();

// Test troubleshooting methods
// $ExpectType boolean
pendo.areGuidesDisabled();

pendo.showPreview();
pendo.pageLoad();

// Test event tracking methods
// $ExpectType boolean
pendo.isSendingEvents();

pendo.startSendingEvents();
pendo.stopSendingEvents();

// $ExpectType any[]
pendo.getEventCache();

pendo.flushEventCache();

// Test guide event handlers
const guideStep = pendo.guides[0]?.steps[0];
pendo.onGuideSnoozed({}, guideStep, 3600000);

// Test extended Events interface
pendo.events.on("customEvent", (data) => {
    console.log(data);
});

pendo.events.off("customEvent");

pendo.events.once("oneTimeEvent", () => {
    console.log("fired once");
});

pendo.events.one("anotherOneTime", () => {
    console.log("also fired once");
});

pendo.events.trigger("myEvent", { data: "test" });

pendo.events.addEventListener("domEvent", (e) => {
    console.log(e);
});

pendo.events.removeEventListener("domEvent");

pendo.events.onClickCaptured((event) => {
    console.log(event);
});

pendo.events.deliverablesLoaded(() => {
    console.log("deliverables loaded");
});

// Test debugging interface extensions
// $ExpectType any[]
pendo.debugging.getEventHistory();

// $ExpectType any
pendo.debugging.getMetadata();

// $ExpectType boolean
pendo.debugging.areGuidesDelayed();

// $ExpectType boolean
pendo.debugging.isLeader();

// $ExpectType any
pendo.debugging.getState();

// Test utility methods
// $ExpectType boolean
pendo.doesExist(null);
// $ExpectType boolean
pendo.doesExist("value");

// $ExpectType boolean
pendo.isURLValid("https://example.com");

// $ExpectType string | undefined
pendo.getMode();

// $ExpectType string
pendo.getNormalizedUrl();

// $ExpectType string
pendo.getUA();

// $ExpectType string
pendo.getURL();

// $ExpectType Metadata
pendo.getSerializedMetadata();

pendo.log("message", "context1", "context2");

pendo.validateInstall();
pendo.validateInstall(true);

pendo.validateEnvironment();
pendo.validateEnvironment(true);

// Test URL Manager
// $ExpectType string
pendo.url.get();
// $ExpectType string
pendo.url.get("https://example.com");

pendo.url.watch((url) => {
    console.log(url);
});

pendo.url.clear();

// $ExpectType Location
pendo.url.getWindowLocation();

// $ExpectType boolean
pendo.url.isElectron();

// $ExpectType string | undefined
pendo.url.electronAppName();

// $ExpectType string | undefined
pendo.url.electronUserDirectory();

// $ExpectType string | undefined
pendo.url.electronUserHomeDirectory();

// $ExpectType string | undefined
pendo.url.electronResourcesPath();

// $ExpectType string
pendo.url.externalizeURL("https://example.com");

pendo.url.startPoller();

// Test Location Manager
pendo.location();
pendo.location("getHref");

// $ExpectType string
pendo.location.getHref();

pendo.location.clearTransforms();

pendo.location.addTransforms([{ match: "test", replace: "replaced" }]);

pendo.location.setUrl("https://example.com");
pendo.location.setUrl(() => "https://example.com");

pendo.location.useBrowserUrl();

// Test AJAX Helper
pendo.ajax({ url: "https://api.example.com" });

pendo.ajax.get("https://api.example.com").then((response) => {
    console.log(response);
});

pendo.ajax.get("https://api.example.com", { Authorization: "Bearer token" }).then((response) => {
    console.log(response);
});

pendo.ajax.post("https://api.example.com", { data: "test" }).then((response) => {
    console.log(response);
});

pendo.ajax.postJSON("https://api.example.com", { data: "test" }).then((response) => {
    console.log(response);
});

// $ExpectType string
pendo.ajax.urlFor("https://api.example.com", { param: "value" }, "fragment");

// $ExpectType boolean
pendo.ajax.supported();

// Test Browser Sniffer
if (pendo.sniffer) {
    // $ExpectType boolean
    pendo.sniffer.MutationObserver;

    // $ExpectType boolean
    pendo.sniffer.addEventListener;

    // $ExpectType number
    pendo.sniffer.android;

    // $ExpectType boolean
    pendo.sniffer.animations;

    // $ExpectType number
    pendo.sniffer.msie;

    // $ExpectType number | undefined
    pendo.sniffer.msieDocumentMode;

    // $ExpectType boolean
    pendo.sniffer.safari;

    // $ExpectType string
    pendo.sniffer.vendorPrefix;

    // $ExpectType boolean
    pendo.sniffer.hasEvent("click");

    // $ExpectType boolean
    pendo.sniffer.isMinimumIEVersion(11);

    // $ExpectType boolean
    pendo.sniffer.isMobileUserAgent();

    // $ExpectType boolean
    pendo.sniffer.supportsHashChange();

    // $ExpectType boolean
    pendo.sniffer.supportsHistoryApi();
}

// Test extended InitOptions configuration
pendo.initialize({
    // Core Configuration
    apiKey: "test-key",
    publicAppId: "test-app-id",
    additionalPublicAppIds: ["app-1", "app-2"],
    disablePendo: false,
    initializeImmediately: true,

    // URL and Location Configuration
    annotateUrl: (url) => url + "?annotated=true",
    queryStringWhitelist: ["param1", "param2"],
    ignoreHashRouting: true,
    location: {
        pushState: true,
    },

    // Hosting and Delivery
    assetHost: "https://assets.example.com",
    contentHost: "https://content.example.com",
    dataHost: "https://data.example.com",
    selfHostedWebSDKUrl: "https://sdk.example.com/pendo.js",

    // Frame and Cross-Origin Configuration
    allowCrossOriginFrames: true,
    autoFrameInstall: true,
    frameIdentitySync: true,
    frameIdentityTopDownOnly: false,
    forcedLeader: true,
    preferBroadcastChannel: true,
    enableCrossOriginIsolation: true,

    // Identity and Persistence
    forceAnonymous: false,
    identityStorageSuffix: "custom",
    crossAppGuideStorageSuffix: "shared",
    localStorageOnly: false,
    dropAnonymous: false,

    // Analytics Configuration
    allowedText: ["Button", "Link"],
    analytics: {
        excludeEvents: ["click", "focus"],
        localStorageUnload: true,
    },
    enableDebugEvents: true,
    eventPropertyMatchParents: true,
    excludeNonGuideAnalytics: false,
    interceptPreventDefault: true,
    interceptStopPropagation: true,
    syntheticClicks: {
        elementRemoval: true,
        targetChanged: true,
    },

    // Guide Configuration
    appAutoOrdering: ["app-1", "app-2"],
    blockAgentMetadata: false,
    cacheGuides: true,
    cacheGuidesTimeout: 600000,
    disableDesigner: false,
    disableDesignerKeyboardShortcut: false,
    disableGlobalCSS: false,
    disableGuidePseudoStyles: false,
    disablePrefetch: false,
    enableAllEmbeddedGuideEvents: true,
    enableDesignerKeyboardShortcut: true,
    enableGuideTimeout: true,
    guideSeenTimeoutLength: 10000,
    guideValidation: true,
    inlineStyleNonce: "nonce-12345",
    leaderApplication: ["app-1"],
    preventCodeInjection: false,
    preventUnloadListener: false,
    observeShadowRoots: true,
    preferMutationObserver: true,

    guides: {
        attachPoint: "#guide-container",
        delay: false,
        disabled: false,
        ejectOnTimeout: true,
        globalScripts: [{ test: () => true }],
        timeout: 5000,
        tooltip: {
            arrowSize: 20,
        },
    },

    // Feedback Configuration
    disableFeedback: false,
    disableFeedbackAutoInit: false,
    pendoFeedback: true,

    // Performance and Monitoring
    environmentName: "production",
    errorClickLogging: true,
    formValidation: true,
    performanceMetricsEnabled: true,
    performanceMetricsSampleRate: 0.1,
    recording: {
        enabled: true,
    },
    stagingServers: ["https://staging.example.com", /test\.example\.com/],
    vocPortal: true,

    visitor: {
        id: "visitor-123",
    },
    account: {
        id: "account-456",
    },
});

// Test properties
// $ExpectType string[]
pendo.additionalApiKeys;

// $ExpectType string
pendo.apiKey;

// $ExpectType string
pendo.visitorId;

// $ExpectType string
pendo.accountId;

// $ExpectType Guide[]
pendo.guides;

// $ExpectType boolean
pendo.designerEnabled;

// $ExpectType string
pendo.VERSION;

// $ExpectType string
pendo.ENV;
