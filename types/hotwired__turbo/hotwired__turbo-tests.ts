import {
    Adapter,
    BrowserAdapter,
    cache,
    config,
    connectStreamSource,
    disconnectStreamSource,
    navigator,
    NavigatorDelegate,
    PageSnapshot,
    PageView,
    ProgressBar,
    registerAdapter,
    renderStreamMessage,
    session,
    SnapshotCache,
    start,
    StreamActions,
    StreamMessage,
    StreamSource,
    TurboHistory,
    TurboStreamAction,
    TurboStreamActions,
    Visit,
    visit,
    VisitOptions,
} from "@hotwired/turbo";

const turboFrame = document.querySelector("turbo-frame")!;

// $ExpectType FrameElement
turboFrame;

// @ts-expect-error
turboFrame.complete = true;
// @ts-expect-error
turboFrame.isActive = true;
// @ts-expect-error
turboFrame.isPreview = true;

turboFrame.loading = "eager";
turboFrame.loading = "lazy";
// @ts-expect-error
turboFrame.loading = "slow";

turboFrame.reload().catch(console.error);

// $ExpectType string | null
turboFrame.src;
turboFrame.src = "/messages";
turboFrame.src = null;

// $ExpectType "morph" | null
turboFrame.refresh;
turboFrame.refresh = "morph";
turboFrame.refresh = null;

const turboStream = document.querySelector("turbo-stream")!;

// $ExpectType StreamElement
turboStream;

// @ts-expect-error
turboStream.action = "123";
// @ts-expect-error
turboStream.target = "123";
// @ts-expect-error
turboStream.targets = "123";
// @ts-expect-error
turboStream.requestId = "123";

// $ExpectType Promise<void>
turboStream.render();

visit("my-location");
visit("my-location", {});
visit("my-location", { action: "advance" });
visit("my-location", { action: "replace" });

visit("my-location", {
    // @ts-expect-error
    action: "fight",
});

visit("my-location", { frame: "mine" });

// $ExpectType TurboGlobal
Turbo;

// @ts-expect-error
Turbo.setConfirmMethod(() => {});

Turbo.setConfirmMethod(window.confirm);
Turbo.setConfirmMethod(() => true);

Turbo.visit("my-location");
Turbo.visit("my-location", {});
Turbo.visit("my-location", { action: "advance" });
Turbo.visit("my-location", { action: "replace" });
// @ts-expect-error
Turbo.visit("my-location", { action: "magic" });

Turbo.visit("my-location", {
    // @ts-expect-error
    action: "fight",
});

Turbo.visit("my-location", { frame: "mine" });

// $ExpectType TurboSession
Turbo.session;
Turbo.session.drive = false;

StreamActions.log = function() {
    // $ExpectType StreamElement
    this;
    console.log(this.getAttribute("message"));
};

// Test TurboStreamActions / TurboStreamAction exports
// $ExpectType TurboStreamActions
StreamActions;

const customStreamAction: TurboStreamAction = function() {
    // $ExpectType StreamElement
    this;
};
StreamActions.custom = customStreamAction;

const allStreamActions: TurboStreamActions = StreamActions;
allStreamActions.log;

document.addEventListener("turbo:before-fetch-request", function(event) {
    // $ExpectType FetchRequestHeaders
    const headers = event.detail.fetchOptions.headers;
    headers["Turbo-Referrer"] = window.location.href;
    // $ExpectType string | undefined
    headers.Accept;
});

document.addEventListener("turbo:before-fetch-response", function(e) {
    let { fetchResponse } = e.detail;
    fetchResponse.header("foo");
});

document.addEventListener("turbo:before-render", function(e) {
    e.detail.render = (currentElement, newElement) => {
        // $ExpectType HTMLBodyElement
        currentElement;
        // $ExpectType HTMLBodyElement
        newElement;
    };
    // $ExpectType (value?: unknown) => void
    e.detail.resume;
});

document.addEventListener("turbo:before-frame-render", function(e) {
    // $ExpectType (value?: unknown) => void
    e.detail.resume;
});

document.addEventListener("turbo:frame-missing", function(event) {
    event.detail.visit(event.detail.response, {});
});

document.addEventListener("turbo:submit-start", function(event) {
    event.detail.formSubmission.stop();
});

document.addEventListener("turbo:submit-end", function(event) {
    if (event.detail.success) {
        // $ExpectType FetchResponse
        event.detail.fetchResponse;
    } else {
        // $ExpectType Error|undefined
        event.detail.error;
        // $ExpectType FetchResponse|undefined
        event.detail.fetchResponse;
    }
});

document.addEventListener("turbo:before-morph-attribute", function(event) {
    // $ExpectType string
    event.detail.attributeName;
    // $ExpectType "update" | "remove"
    event.detail.mutationType;
});

// Test start() function
start();

const customAdapter: Adapter = {
    visitProposedToLocation(_location: URL, _options?: VisitOptions): void {},
    visitStarted(_visit: Visit): void {},
    visitCompleted(_visit: Visit): void {},
    visitFailed(_visit: Visit): void {},
    visitRequestStarted(_visit: Visit): void {},
    visitRequestCompleted(_visit: Visit): void {},
    visitRequestFailedWithStatusCode(_visit: Visit, _statusCode: number): void {},
    visitRequestFinished(_visit: Visit): void {},
    visitRendered(_visit: Visit): void {},
    pageInvalidated(_reason: { reason: string }): void {},
};
registerAdapter(customAdapter);
Turbo.registerAdapter(customAdapter);

Turbo.start();

// Test session.adapter
// $ExpectType Adapter
session.adapter;
// $ExpectType Adapter
Turbo.session.adapter;

// Test navigator.submitForm
const form = document.querySelector("form")!;
navigator.submitForm(form);
navigator.submitForm(form, document.querySelector("button")!);
Turbo.navigator.submitForm(form);
Turbo.navigator.submitForm(form, document.querySelector("button")!);

// Test navigator.delegate
// $ExpectType NavigatorDelegate
navigator.delegate;
// $ExpectType Adapter
navigator.delegate.adapter;

// Test ProgressBar via BrowserAdapter cast
const browserAdapter = navigator.delegate.adapter as BrowserAdapter;
// $ExpectType ProgressBar
browserAdapter.progressBar;
browserAdapter.progressBar.setValue(0);
browserAdapter.progressBar.show();
browserAdapter.progressBar.hide();
// $ExpectType number
browserAdapter.progressBar.value;
// $ExpectType boolean
browserAdapter.progressBar.visible;
// $ExpectType boolean
browserAdapter.progressBar.hiding;

// Test cache methods
cache.clear();
cache.resetCacheControl();
cache.exemptPageFromCache();
cache.exemptPageFromPreview();
Turbo.cache.clear();
Turbo.cache.resetCacheControl();
Turbo.cache.exemptPageFromCache();
Turbo.cache.exemptPageFromPreview();

// Test config.drive
// $ExpectType boolean
config.drive.enabled;
// $ExpectType number
config.drive.progressBarDelay;
config.drive.progressBarDelay = 1000;
// $ExpectType Set<string>
config.drive.unvisitableExtensions;

// Test config.drive.enabled assignment
config.drive.enabled = false;
config.drive.enabled = true;

// Test config.drive.unvisitableExtensions Set modification
config.drive.unvisitableExtensions.add(".custom");
config.drive.unvisitableExtensions.delete(".pdf");

// Test config.forms
// $ExpectType "on" | "off" | "optin"
config.forms.mode;
config.forms.mode = "optin";
config.forms.mode = "on";
config.forms.mode = "off";
// @ts-expect-error
config.forms.mode = "invalid";

// Test Turbo.config
Turbo.config.drive.progressBarDelay = 300;
Turbo.config.forms.mode = "optin";

// Test config.forms.confirm is optional (undefined by default, can be set to undefined)
// $ExpectType ((message: string, element: HTMLFormElement, submitter: HTMLElement | null) => Promise<boolean>) | undefined
config.forms.confirm;
config.forms.confirm = undefined;

// Test config.forms.confirm assignment
config.forms.confirm = async (message, element, submitter) => {
    return window.confirm(message);
};

// Test StreamElement.templateElement and templateContent
// $ExpectType HTMLTemplateElement
turboStream.templateElement;
// $ExpectType DocumentFragment
turboStream.templateContent;

// @ts-expect-error - templateElement is readonly
turboStream.templateElement = document.createElement("template");
// @ts-expect-error - templateContent is readonly
turboStream.templateContent = document.createDocumentFragment();

// Test StreamElement.targetElements
// $ExpectType Element[]
turboStream.targetElements;
// @ts-expect-error - targetElements is readonly
turboStream.targetElements = [];

const eventSource = new EventSource("https://example.com/stream");
const webSocket = new WebSocket("wss://example.com/stream");

const streamSource: StreamSource = eventSource;
connectStreamSource(streamSource);
disconnectStreamSource(streamSource);
connectStreamSource(eventSource);
disconnectStreamSource(eventSource);
connectStreamSource(webSocket);
disconnectStreamSource(webSocket);

// @ts-expect-error
connectStreamSource({});

const streamMessage = new StreamMessage(document.createDocumentFragment());
renderStreamMessage("<turbo-stream></turbo-stream>");
renderStreamMessage(streamMessage);
Turbo.renderStreamMessage("<turbo-stream></turbo-stream>");
Turbo.renderStreamMessage(streamMessage);

// $ExpectType "text/vnd.turbo-stream.html"
StreamMessage.contentType;

// $ExpectType StreamMessage
StreamMessage.wrap("<turbo-stream></turbo-stream>");

// Test TurboHistory via session.history
// $ExpectType TurboHistory
session.history;
// $ExpectType TurboHistory
Turbo.session.history;

session.history.push(new URL("https://example.com"));
session.history.push(new URL("https://example.com"), "abc-123");
session.history.replace(new URL("https://example.com"));
session.history.replace(new URL("https://example.com"), "abc-123");

// $ExpectType URL
session.history.location;
// $ExpectType string
session.history.restorationIdentifier;

// Test session getters
// $ExpectType URL
session.location;
// $ExpectType string
session.restorationIdentifier;
// $ExpectType boolean
session.started;
// $ExpectType boolean
session.enabled;

// Test PageView via session.view
// PageView and SnapshotCache are not runtime exports of @hotwired/turbo, only types
// @ts-expect-error
new PageView(session, document.documentElement);
// @ts-expect-error
new SnapshotCache(10);
// $ExpectType PageView
session.view;
// $ExpectType PageView
Turbo.session.view;
// @ts-expect-error - view cannot be reassigned
session.view = session.view;
// $ExpectType URL
session.view.lastRenderedLocation;
session.view.lastRenderedLocation = new URL("https://example.com");
// $ExpectType HTMLElement
session.view.element;
// $ExpectType boolean
session.view.forceReloaded;
// $ExpectType PageSnapshot
session.view.snapshot;
// $ExpectType Promise<PageSnapshot | undefined>
session.view.cacheSnapshot();
session.view.cacheSnapshot(PageSnapshot.fromHTMLString("<html><body></body></html>"));
// $ExpectType PageSnapshot | undefined
session.view.getCachedSnapshotForLocation(new URL("https://example.com"));
session.view.clearSnapshotCache();

// Test SnapshotCache via session.view.snapshotCache
// $ExpectType SnapshotCache
session.view.snapshotCache;
// $ExpectType boolean
session.view.snapshotCache.has(new URL("https://example.com"));
// $ExpectType PageSnapshot | undefined
session.view.snapshotCache.get(new URL("https://example.com"));
// $ExpectType PageSnapshot
session.view.snapshotCache.put(
    new URL("https://example.com"),
    PageSnapshot.fromHTMLString("<html><body></body></html>"),
);
session.view.snapshotCache.clear();
