import { FrameElement, StreamActions, StreamElement, visit } from "@hotwired/turbo";

const turboFrame = document.querySelector<FrameElement>("turbo-frame")!;

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

const turboStream = document.querySelector<StreamElement>("turbo-stream")!;

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
