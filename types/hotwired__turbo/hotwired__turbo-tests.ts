import {
    cache,
    config,
    connectStreamSource,
    disconnectStreamSource,
    navigator,
    renderStreamMessage,
    session,
    start,
    StreamActions,
    StreamMessage,
    StreamSource,
    visit,
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

// Test start() function
start();
Turbo.start();

// Test session.adapter
// $ExpectType BrowserAdapter
session.adapter;
session.adapter.formSubmissionStarted();
session.adapter.formSubmissionFinished();
Turbo.session.adapter.formSubmissionStarted();
Turbo.session.adapter.formSubmissionFinished();

// Test navigator.submitForm
const form = document.querySelector("form")!;
navigator.submitForm(form);
navigator.submitForm(form, document.querySelector("button")!);
Turbo.navigator.submitForm(form);
Turbo.navigator.submitForm(form, document.querySelector("button")!);

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
