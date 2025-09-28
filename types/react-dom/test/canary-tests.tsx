/// <reference types="../canary"/>
import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");
import ReactDOMServer = require("react-dom/server");
import ReactDOMStatic = require("react-dom/static");

function cacheSignalTest() {
    const cacheSignal = React.cacheSignal;

    const signal = cacheSignal();
    if (signal !== null) {
        // $ExpectType CacheSignal
        signal;
        if (signal.aborted) {
            console.error(signal.reason);
        }
    }
}

async function resumeTest(children: React.ReactNode) {
    const prerenderController = new AbortController();
    setTimeout(prerenderController.abort, 1);
    const { prelude, postponed } = await ReactDOMStatic.prerender(children, { signal: prerenderController.signal });

    let stream: ReadableStream<Uint8Array>;
    if (postponed !== null) {
        const resumeController = new AbortController();
        const reactStream = await ReactDOMServer.resume(children, postponed, {
            nonce: "nonce",
            signal: resumeController.signal,
            onError(error) {
                return (error as { digest?: string | undefined }).digest;
            },
        });
        await reactStream.allReady;
        // In a real app you'd also have to flush the prelude first
        stream = reactStream;
    } else {
        stream = prelude;
    }

    await ReactDOMServer.resume(
        children,
        // @ts-expect-error Requires the opaque postponed state
        {},
    );
}
