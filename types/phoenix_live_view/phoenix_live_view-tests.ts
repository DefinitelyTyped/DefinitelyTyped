import { Socket } from "phoenix";
import { DomOptions, EventMetadata, Hook, LiveSocket, SocketOptions, UploadEntry, Uploader } from "phoenix_live_view";

function test_socket() {
    // Hook
    const testHook: Hook = {
        mounted() {
            const hook = this;
            console.log("TestHook mounted", { element: this.el });
            hook.pushEvent("hook-mounted", { name: "testHook" }, (reply: any, ref: number) => {
                console.log(`Got hook-mounted reply ${JSON.stringify(reply)} ref ${ref}`);
            });
        },
    };

    // Hook with click handler
    const testHookWithExtendedPrototype: Hook<{ handleClick: (event: MouseEvent) => void }> = {
        mounted() {
            this.handleClick = (event: MouseEvent) => {
                console.log("click", event);
                this.pushEvent("click", { x: event.clientX, y: event.clientY });
            };
            document.addEventListener("click", this.handleClick);
        },
        destroyed() {
            document.removeEventListener("click", this.handleClick);
        },
    };

    // Uploaders
    const testUploader: Uploader = (entries: UploadEntry[], onViewError: (cb: () => void) => void) => {
        onViewError(() => console.log("uploader view error"));

        entries.forEach((entry) => {
            console.log(`file: ${entry.file.name}`);
            console.log(`meta: ${JSON.stringify(entry.meta)}`);
        });
    };

    // Metadata
    const metadata: Partial<EventMetadata> = {
        click: (e: PointerEvent, el: HTMLElement) => {
            return {
                ctrlKey: e.ctrlKey,
                metaKey: e.metaKey,
                detail: e.detail || 1,
            };
        },
    };

    // DOM
    const dom: Partial<DomOptions> = {
        onBeforeElUpdated(from: HTMLElement, to: HTMLElement) {
            for (const attr of from.attributes) {
                if (attr.name.startsWith("data-js-")) {
                    to.setAttribute(attr.name, attr.value);
                }
            }
        },
    };

    const opts: Partial<SocketOptions> = {
        longPollFallbackMs: 2500,
        reconnectAfterMs: (tries: number) => tries * tries,
        params: {
            _csrf_token: "1234",
        },
        hooks: {
            test: testHook,
            testWithExtendedPrototype: testHookWithExtendedPrototype,
        },
        uploaders: {
            test: testUploader,
        },
        metadata: metadata,
        dom: dom,
    };

    const liveSocket = new LiveSocket("/live", Socket, opts);
    window.liveSocket = liveSocket;

    liveSocket.enableDebug();
    liveSocket.enableProfiling();
    liveSocket.connect();

    const element = "dummyElement" as unknown as HTMLElement;
    // $ExpectType void
    liveSocket.execJS(element, "[[\"patch\",{\"href\":\"/\",\"replace\":false}]]");
    liveSocket.execJS(element, "[[\"navigate\",{\"href\":\"/\",\"replace\":false}]]", "submit");
}
