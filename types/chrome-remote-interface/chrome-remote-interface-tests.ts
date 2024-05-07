import CDP = require("chrome-remote-interface");
import Protocol from "devtools-protocol";

function assertType<T>(value: T): T {
    return value;
}

(async () => {
    let client: CDP.Client | undefined;
    try {
        const cdpPort = { port: 9223 };
        client = await CDP(cdpPort);
        client.on("disconnect", () => {});
        client.on("Network.requestWillBeSent", (params) => {
            params.documentURL;
        });
        client.on("Debugger.resumed", () => {});
        client.on("Network.requestWillBeSent.123", (params) => {});
        client.on("event", (message) => {
            if (message.method === "Network.requestWillBeSent") {}
        });
        const { Network, Page, Runtime } = client;
        await Network.enable();
        await Network.enable({});
        await Network.enable({}, "sessionId"); // Should be Network.enable('sessionId')
        // @ts-expect-error
        await Network.setAcceptedEncodings();
        await Network.setAcceptedEncodings({ encodings: [] });
        await Page.enable();
        await Page.navigate({ url: "https://github.com" });
        await client.Runtime.runIfWaitingForDebugger("sessionId");
        await client.Fetch.enable({ patterns: [] }, "sessionId");
        let loadEvent = await Page.loadEventFired();
        loadEvent = await client["Page.loadEventFired"]();
        loadEvent.timestamp;
        await Page.interstitialHidden();
        await client["Page.interstitialHidden"]();
        const unsubscribe = Network.requestWillBeSent((params, sessionId) => {
            params.request.url;
            unsubscribe();
        });
        const unsubscribeAlt = client["Network.requestWillBeSent"]((params, sessionId) => {
            params.request.url;
            unsubscribeAlt();
        });
        const unsubscribe2 = Network.requestWillBeSent((params) => {
            params.request.url;
            unsubscribe2();
        });
        const unsubscribeAlt2 = client["Network.requestWillBeSent"]((params) => {
            params.request.url;
            unsubscribeAlt2();
        });
        const unsubscribe3 = Page.frameResized(() => {
            unsubscribe3();
        });
        const unsubscribeAlt3 = client["Page.frameResized"](() => {
            unsubscribeAlt3();
        });
        await Runtime.enable();
        const loc = await Runtime.evaluate({ expression: "window.location.toString()" });
        const targets = await CDP.List(cdpPort);
        for (const target of targets) {
            if (target.url.startsWith("https://github.com")) {
                await CDP.Close({ ...cdpPort, id: target.id });
            }
        }

        assertType<Promise<void>>(client.send("Network.enable"));
        assertType<Promise<Protocol.Page.NavigateResponse>>(
            client.send("Page.navigate", { url: "https://github.com" }),
        );
        assertType<Promise<Protocol.Page.NavigateResponse>>(
            client.send("Page.navigate", { url: "https://github.com" }, "sessionId"),
        );
        client.send(
            "Page.navigate",
            (error: boolean | Error, response: Protocol.Page.NavigateResponse | CDP.SendError | undefined) => {},
        );
        client.send(
            "Page.navigate",
            { url: "https://github.com" },
            (error: boolean | Error, response: Protocol.Page.NavigateResponse | CDP.SendError | undefined) => {},
        );
        client.send(
            "Page.navigate",
            { url: "https://github.com" },
            "sessionId",
            (error: boolean | Error, response: Protocol.Page.NavigateResponse | CDP.SendError | undefined) => {},
        );
        // @ts-expect-error
        client.send("Page.navigate", (error: boolean, response: CDP.SendError) => {});
        // @ts-expect-error
        client.send("Page.navigate", (error: boolean, response: Protocol.Page.NavigateResponse) => {});
    } finally {
        if (client) {
            await client.close();
        }
    }
})();

CDP.Activate({ id: "CC46FBFA-3BDA-493B-B2E4-2BE6EB0D97EC" }, (err) => {
    if (!err) {}
});

(() => {
    const cdpPort = { port: 9223 };
    CDP(cdpPort, client => {
        CDP.List(cdpPort, (err, targets) => {
            if (!err) {
                for (const target of targets) {
                    if (target.url.startsWith("https://github.com")) {
                        CDP.Close({ id: target.id }, err => {});
                    }
                }
            }
        });
        client.close();
    });
})();

(() => {
    CDP(client => {
        CDP.List((err, targets) => {
            if (!err) {
                for (const target of targets) {
                    if (target.url.startsWith("https://github.com")) {
                        CDP.Close({ id: target.id }, err => {});
                    }
                }
            }
        });
        client.close();
    });
})();

(async () => {
    CDP.New((err, target) => {
        if (!err && target.url.startsWith("https://github.com")) {
            CDP.Close({ id: target.id }, err => {});
        }
    });

    CDP.New({ url: "https://github.com" }, (err, target) => {
        if (!err && target.url.startsWith("https://github.com")) {
            CDP.Close({ id: target.id }, err => {});
        }
    });

    const target: CDP.Target | undefined = await CDP.New({ url: "https://github.com" });
})();

(() => {
    CDP.Protocol((err, protocol) => {
        if (!err) {
            CDP({ protocol });
        }
    });
})();

CDP.Version((err, info) => {
    if (!err) {}
});
