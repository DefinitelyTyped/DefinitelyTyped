import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import * as ReactDOMServer from "react-dom/server";
import * as ReactTestUtils from "react-dom/test-utils";

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

describe("ReactDOM", () => {
    it("createPortal", () => {
        const rootElement = document.createElement("div");
        const portalTarget = document.createElement("div");

        class ClassComponent extends React.Component {
            render() {
                return ReactDOM.createPortal(<div />, portalTarget);
            }
        }

        ReactDOM.createPortal(<div />, document.createElement("div"));
        ReactDOM.createPortal(<div />, document.createElement("div"), null);
        ReactDOM.createPortal(<div />, document.createElement("div"), "key");

        ReactDOM.createPortal(React.createElement("div"), document.createElement("div"));
        ReactDOM.createPortal(React.createElement("div"), document.createElement("div"), null);
        ReactDOM.createPortal(React.createElement("div"), document.createElement("div"), "key");
        ReactDOM.createPortal(React.createElement("div"), document.createDocumentFragment());
    });

    it("flushSync", () => {
        // $ExpectType void
        ReactDOM.flushSync(() => {});
        // $ExpectType number
        ReactDOM.flushSync(() => 42);
        // @ts-expect-error
        ReactDOM.flushSync(() => 42, "not used");
        // @ts-expect-error
        ReactDOM.flushSync((a: string) => 42, "not used");
        // @ts-expect-error
        ReactDOM.flushSync((a: string) => 42);
        // @ts-expect-error
        ReactDOM.flushSync((a: string) => 42, 100);
    });
});

describe("ReactDOMServer", () => {
    it("renderToString", () => {
        const content: string = ReactDOMServer.renderToString(React.createElement("div"));
        ReactDOMServer.renderToString(React.createElement("div"), { identifierPrefix: "react-18-app" });
    });

    it("renderToStaticMarkup", () => {
        const content: string = ReactDOMServer.renderToStaticMarkup(React.createElement("div"));
        ReactDOMServer.renderToStaticMarkup(React.createElement("div"), { identifierPrefix: "react-18-app" });
    });
});

describe("React dom test utils", () => {
    describe("act", () => {
        describe("with sync callback", () => {
            it("accepts a callback that is void", () => {
                ReactTestUtils.act(() => {});
            });
            it("accepts a callback that returns a value", () => {
                const result = ReactTestUtils.act(() => "value");
                result.then(x => {});
            });
            it("returns void", () => {
                // tslint:disable-next-line no-void-expression
                const result = ReactTestUtils.act(() => {});
                // @ts-expect-error
                result.then;
            });
        });
        describe("with async callback", () => {
            it("accepts a callback that is void", async () => {
                await ReactTestUtils.act(async () => {});
            });
            it("a callback that returns null", async () => {
                await ReactTestUtils.act(async () => null);
            });
            it("a callback that returns a value", async () => {
                await ReactTestUtils.act(async () => "value");
            });
            it("returns a Promise-like", () => {
                const result = ReactTestUtils.act(async () => {});
                result.then(x => {});
            });
        });
    });
});

async function batchTests() {
    // $ExpectType string
    const output1 = ReactDOM.unstable_batchedUpdates(input => {
        // $ExpectType number
        input;
        return "hi";
    }, 1);
}

function createRoot() {
    const root = ReactDOMClient.createRoot(document.documentElement);

    root.render(<div>initial render</div>);
    root.render(false);

    // Will not type-check in a real project but accepted in DT tests since experimental.d.ts is part of compilation.
    ReactDOMClient.createRoot(document);
}

function hydrateRoot() {
    const hydrateable = ReactDOMClient.hydrateRoot(document, <div>initial render</div>, {
        identifierPrefix: "react-18-app",
        onRecoverableError: (error, errorInfo) => {
            console.error(error);
            console.info(errorInfo.componentStack);
        },
    });
    hydrateable.render(<div>render update</div>);
    ReactDOMClient.hydrateRoot(document, {
        // Forgot `initialChildren`
        // @ts-expect-error
        identifierPrefix: "react-18-app",
    });

    ReactDOMClient.hydrateRoot(document.getElementById("root")!, false);
}

/**
 * source: https://react.dev/reference/react-dom/server/renderToPipeableStream
 */
function pipeableStreamDocumentedExample() {
    function App() {
        return null;
    }

    interface Response extends NodeJS.WritableStream {
        send(content: string): void;
        setHeader(key: string, value: unknown): void;
        statusCode: number;
    }

    let didError = false;
    const response: Response = {} as any;
    const { pipe, abort } = ReactDOMServer.renderToPipeableStream(<App />, {
        bootstrapScripts: ["/main.js"],
        onShellReady() {
            response.statusCode = didError ? 500 : 200;
            response.setHeader("content-type", "text/html");
            pipe(response);
        },
        onShellError(error) {
            response.statusCode = 500;
            response.setHeader("content-type", "text/html");
            response.send("<h1>Something went wrong</h1>");
        },
        onAllReady() {},
        onError(err) {
            didError = true;
            console.error(err);
        },
    });

    setTimeout(() => {
        // $ExpectType void
        abort();
    }, 1000);

    setTimeout(() => {
        // $ExpectType void
        abort("timeout");
    }, 1000);
}

/**
 * source: https://react.dev/reference/react-dom/server/renderToPipeableStream
 */
function pipeableStreamDocumentedStringExample() {
    function App() {
        return null;
    }

    interface Response extends NodeJS.WritableStream {
        send(content: string): void;
        setHeader(key: string, value: unknown): void;
        statusCode: number;
    }

    let didError = false;
    const response: Response = {} as any;
    const { pipe, abort } = ReactDOMServer.renderToPipeableStream("app", {
        bootstrapScripts: ["/main.js"],
        onShellReady() {
            response.statusCode = didError ? 500 : 200;
            response.setHeader("content-type", "text/html");
            pipe(response);
        },
        onShellError(error) {
            response.statusCode = 500;
            response.setHeader("content-type", "text/html");
            response.send("<h1>Something went wrong</h1>");
        },
        onAllReady() {},
        onError(err) {
            didError = true;
            console.error(err);
        },
    });

    setTimeout(() => {
        // $ExpectType void
        abort();
    }, 1000);

    setTimeout(() => {
        // $ExpectType void
        abort("timeout");
    }, 1000);
}

/**
 * source: https://reactjs.org/docs/react-dom-server.html#rendertoreadablestream
 */
async function readableStreamDocumentedExample() {
    const controller = new AbortController();
    let didError = false;
    try {
        const stream = await ReactDOMServer.renderToReadableStream(
            <html>
                <body>Success</body>
            </html>,
            {
                signal: controller.signal,
                onError(error) {
                    didError = true;
                    console.error(error);
                },
            },
        );

        await stream.allReady;

        return new Response(stream, {
            status: didError ? 500 : 200,
            headers: { "Content-Type": "text/html" },
        });
    } catch (error) {
        return new Response("<!doctype html><p>Loading...</p><script src=\"clientrender.js\"></script>", {
            status: 500,
            headers: { "Content-Type": "text/html" },
        });
    }
}

/**
 * source: https://reactjs.org/docs/react-dom-server.html#rendertoreadablestream
 */
async function readableStreamDocumentedStringExample() {
    const controller = new AbortController();
    let didError = false;
    try {
        const stream = await ReactDOMServer.renderToReadableStream(
            "app",
            {
                signal: controller.signal,
                onError(error) {
                    didError = true;
                    console.error(error);
                },
            },
        );

        await stream.allReady;

        return new Response(stream, {
            status: didError ? 500 : 200,
            headers: { "Content-Type": "text/html" },
        });
    } catch (error) {
        return new Response("<!doctype html><p>Loading...</p><script src=\"clientrender.js\"></script>", {
            status: 500,
            headers: { "Content-Type": "text/html" },
        });
    }
}
