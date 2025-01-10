import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import * as ReactDOMServer from "react-dom/server";
import * as ReactDOMStatic from "react-dom/static";
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

describe("ReactDOMStatic", () => {
    it("prerender", async () => {
        const prelude: ReadableStream<Uint8Array> =
            (await ReactDOMStatic.prerender(React.createElement("div"))).prelude;
        ReactDOMStatic.prerender(React.createElement("div"), { bootstrapScripts: ["./my-script.js"] });
    });

    it("prerenderToNodeStream", async () => {
        const prelude: NodeJS.ReadableStream =
            (await ReactDOMStatic.prerenderToNodeStream(React.createElement("div"))).prelude;
        ReactDOMStatic.prerenderToNodeStream(React.createElement("div"), { bootstrapScripts: ["./my-script.js"] });
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

function createRoot(validContainer: Element | DocumentFragment | Document) {
    const root = ReactDOMClient.createRoot(document.documentElement);

    root.render(<div>initial render</div>);
    root.render(false);

    ReactDOMClient.createRoot(document, {
        onUncaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // @ts-expect-error -- only on onCaughtError
            errorInfo.errorBoundary;
        },
        onCaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // $ExpectType Component<unknown, {}, any> | undefined
            errorInfo.errorBoundary;
        },
    });

    ReactDOMClient.createRoot(document);
    ReactDOMClient.createRoot(validContainer);
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

    ReactDOMClient.hydrateRoot(document.body, null, {
        onUncaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // @ts-expect-error -- only on onCaughtError
            errorInfo.errorBoundary;
        },
        onCaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // $ExpectType Component<unknown, {}, any> | undefined
            errorInfo.errorBoundary;
        },
    });
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

const useFormState = ReactDOM.useFormState;
const useFormStatus = ReactDOM.useFormStatus;

function Status() {
    const status = useFormStatus();
    if (!status.pending) {
        return <div>No pending action</div>;
    } else {
        const { action, data, method } = status;
        const foo = data.get("foo");
        return (
            <div>
                {`Pending action ${
                    typeof action === "string" ? action : action.name
                }: foo is ${foo}, method is ${method}`}
            </div>
        );
    }
}

// Keep in sync with React.useActionState tests
function formTest() {
    function Page1() {
        async function action(state: number) {
            return state + 1;
        }

        const [
            // $ExpectType number
            state,
            dispatch,
            // $ExpectType boolean
            isPending,
        ] = useFormState(action, 1);

        function actionExpectingPromiseState(state: Promise<number>) {
            return state.then((s) => s + 1);
        }

        useFormState(
            // @ts-expect-error
            actionExpectingPromiseState,
            Promise.resolve(1),
        );
        useFormState(
            action,
            // @ts-expect-error
            Promise.resolve(1),
        );
        // $ExpectType number
        useFormState<Promise<number>>(action, 1)[0];

        useFormState(
            async (
                prevState: // only needed in TypeScript 4.9
                    // 5.0 infers `number` whereas 4.9 infers `0`
                    number,
            ) => prevState + 1,
            0,
        )[0];
        // $ExpectType number
        useFormState(
            async (prevState) => prevState + 1,
            // @ts-expect-error
            Promise.resolve(0),
        )[0];

        const [
            state2,
            action2,
            // $ExpectType boolean
            isPending2,
        ] = useFormState(
            async (state: React.ReactNode, payload: FormData): Promise<React.ReactNode> => {
                return state;
            },
            (
                <button>
                    New Project
                </button>
            ),
        );

        return (
            <button
                onClick={() => {
                    dispatch();
                }}
            >
                count: {state}
            </button>
        );
    }

    function Page2() {
        async function action(state: number) {
            return state + 1;
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(action, 1, "/permalink");
        return (
            <form action={dispatch}>
                <span>Count: {state}</span>
                <input type="text" name="incrementAmount" defaultValue="5" />
            </form>
        );
    }

    function Page3() {
        function actionSync(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(actionSync, 1, "/permalink");
        return (
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                count: {state}
            </button>
        );
    }

    function Page4() {
        async function action(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(action, 1, "/permalink");
        return (
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                count: {state}
            </button>
        );
    }

    const formState = [1, "", "", 0] as unknown as ReactDOMClient.ReactFormState;
    ReactDOMClient.hydrateRoot(document.body, <Page1 />, { formState });
}

function preloadTest() {
    function Component() {
        ReactDOM.preload("foo", { as: "style", fetchPriority: "high", integrity: "sad" });
        ReactDOM.preload("bar", {
            as: "font",
            type: "font/woff2",
            // @ts-expect-error Unknown fetch priority
            fetchPriority: "unknown",
        });
        ReactDOM.preload("baz", { as: "script", crossOrigin: "use-credentials" });
        ReactDOM.preload("baz", {
            // @ts-expect-error
            as: "title",
        });
        ReactDOM.preload("bar", {
            as: "font",
            nonce: "0xeac1",
        });
        ReactDOM.preload("foo", {
            as: "image",
            imageSrcSet: "fooset",
            imageSizes: "foosizes",
            referrerPolicy: "no-referrer",
        });
        ReactDOM.preload("foo", {
            as: "image",
            // @ts-expect-error Not specified in https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
            referrerPolicy: "unknown-policy",
        });
        ReactDOM.preload("foo", {
            as: "script",
            // Undesired. Should not typecheck.
            imageSrcSet: "fooset",
            imageSizes: "foosizes",
        });

        ReactDOM.preinit("foo", {
            as: "style",
            crossOrigin: "anonymous",
            fetchPriority: "high",
            precedence: "high",
            integrity: "sad",
            nonce: "0xeac1",
        });
        ReactDOM.preinit("bar", {
            // @ts-expect-error Only available in preload
            as: "font",
        });
        ReactDOM.preinit("baz", {
            as: "script",
            // @ts-expect-error Unknown fetch priority
            fetchPriority: "unknown",
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
        ReactDOM.preloadModule("browserdefault", {
            as: "script",
            crossOrigin: "use-credentials",
            integrity: "0xeac1",
            nonce: "secret",
        });
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

function requestFormResetTest(form: HTMLFormElement, button: HTMLButtonElement) {
    ReactDOM.requestFormReset(form);
    // @ts-expect-error
    ReactDOM.requestFormReset(button);
    // @ts-expect-error
    ReactDOM.requestFormReset(null);
}
