/// <reference types="../canary"/>

function preloadTest() {
    function Component() {
        ReactDOM.preload("foo", { as: "style", integrity: "sad" });
        ReactDOM.preload("bar", { as: "font" });
        ReactDOM.preload("baz", { as: "script", crossOrigin: "use-credentials" });
        ReactDOM.preload("baz", {
            // @ts-expect-error
            as: "title",
        });
        ReactDOM.preload("bar", {
            as: "font",
            // @ts-expect-error -- Only allowed in preinit
            nonce: "0xeac1",
        });

        ReactDOM.preinit("foo", {
            as: "style",
            crossOrigin: "anonymous",
            precedence: "high",
            integrity: "sad",
        });
        ReactDOM.preinit("bar", {
            // @ts-expect-error Only available in preload
            as: "font",
        });
        ReactDOM.preinit("baz", {
            as: "script",
        });
        ReactDOM.preinit("baz", {
            // @ts-expect-error
            as: "title",
        });
        ReactDOM.preinit("baz", {
            as: "script",
            nonce: "0xeac1",
        });

        // @ts-expect-error
        ReactDOM.preconnect();
        ReactDOM.preconnect("foo");
        ReactDOM.preconnect("bar", { crossOrigin: "anonymous" });

        // @ts-expect-error
        ReactDOM.prefetchDNS();
        ReactDOM.prefetchDNS("foo");
        ReactDOM.prefetchDNS(
            "bar", // @ts-expect-error prefetchDNS does not accept any options at the moment
            {},
        );

        // @ts-expect-error
        ReactDOM.preloadModule();
        ReactDOM.preloadModule("browserdefault");
        ReactDOM.preloadModule("browserdefault", { as: "script", crossOrigin: "use-credentials", integrity: "0xeac1" });
        ReactDOM.preloadModule("worker", { as: "worker" });
        ReactDOM.preloadModule("worker", {
            // @ts-expect-error Unknown request destination
            as: "serviceworker",
        });

        // @ts-expect-error
        ReactDOM.preinitModule();
        ReactDOM.preinitModule("browserdefault");
        ReactDOM.preinitModule("browserdefault", { as: "script", crossOrigin: "use-credentials", integrity: "0xeac1" });
        ReactDOM.preinitModule("data", {
            // @ts-expect-error Not supported (yet)
            as: "json",
        });
    }
}
