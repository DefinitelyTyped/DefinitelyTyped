import { Socket } from "phoenix";
import { HooksOptions, LiveSocket, SocketOptions, UploadEntry, ViewHook } from "phoenix_live_view";

function test_socket() {
    // Hooks
    const testHook: ViewHook = {
        mounted() {
            const hook = this;
            console.log("TestHook mounted", { element: this.el, viewName: this.viewName });
            hook.pushEvent("hook-mounted", { name: "testHook" }, (reply, ref) => {
                console.log(`Got hook-mounted reply ${JSON.stringify(reply)} ref ${ref}`);
            });
        },
    };

    const testHookWithExtendedPrototype: ViewHook<{ handleClick: (event: MouseEvent) => void }> = {
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
    function testUploader(entries: UploadEntry[], _onViewError: any) {
        entries.forEach((entry) => {
            console.log(`file: ${entry.file.name}`);
            console.log(`meta: ${JSON.stringify(entry.meta)}`);
        });
    }

    const MyHooks: HooksOptions = {
        test: testHook,
        testWithExtendedPrototype: testHookWithExtendedPrototype,
    };

    const MyUploaders = {
        test: testUploader,
    };

    const opts: SocketOptions = {
        params: {
            _csrf_token: "1234",
        },
        hooks: MyHooks,
        uploaders: MyUploaders,
    };

    const liveSocket = new LiveSocket("/live", Socket, opts);
    liveSocket.enableDebug();
    liveSocket.enableProfiling();
    liveSocket.connect();

    const element = "dummyElement" as unknown as HTMLElement;
    // $ExpectType void
    liveSocket.execJS(element, "[[\"patch\",{\"href\":\"/\",\"replace\":false}]]");
    liveSocket.execJS(element, "[[\"navigate\",{\"href\":\"/\",\"replace\":false}]]", "submit");
}
