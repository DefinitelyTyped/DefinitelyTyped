import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import * as ReactDOMServer from "react-dom/server";
import * as ReactTestUtils from "react-dom/test-utils";

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

class TestComponent extends React.Component<{ x: string }> {
    someInstanceMethod() {
        return 42;
    }
}

describe("ReactDOM", () => {
    it("render", () => {
        const rootElement = document.createElement("div");
        ReactDOM.render(React.createElement("div"), rootElement);
        ReactDOM.render(React.createElement("div"), document.createDocumentFragment());
        ReactDOM.render(React.createElement("div"), document);

        const instance = ReactDOM.render(React.createElement(TestComponent), rootElement);
        instance.someInstanceMethod();
    });

    it("hydrate", () => {
        const rootElement = document.createElement("div");
        ReactDOM.hydrate(React.createElement("div"), rootElement);
        ReactDOM.hydrate(React.createElement("div"), document.createDocumentFragment());
        ReactDOM.hydrate(React.createElement("div"), document);
    });

    it("unmounts", () => {
        const rootElement = document.createElement("div");
        ReactDOM.render(React.createElement("div"), rootElement);
        ReactDOM.unmountComponentAtNode(rootElement);
    });

    it("works with document fragments", () => {
        const fragment = document.createDocumentFragment();
        ReactDOM.render(React.createElement("div"), fragment);
        ReactDOM.unmountComponentAtNode(fragment);
    });

    it("find dom node", () => {
        const rootElement = document.createElement("div");
        ReactDOM.render(React.createElement("div"), rootElement);
        ReactDOM.findDOMNode(rootElement);
        ReactDOM.findDOMNode(null);
        ReactDOM.findDOMNode(undefined);
    });

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

        ReactDOM.render(<ClassComponent />, rootElement);
    });

    it("flushSync", () => {
        // $ExpectType void
        ReactDOM.flushSync(() => {});
        // $ExpectType number
        ReactDOM.flushSync(() => 42);
        // $ExpectType number
        ReactDOM.flushSync(() => 42, "not used");
        // $ExpectType number
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
    it("Simulate", () => {
        const element = document.createElement("div");
        const dom = ReactDOM.render(React.createElement("input", { type: "text" }), element) as Element;
        const node = ReactDOM.findDOMNode(dom) as HTMLInputElement;

        node.value = "giraffe";
        ReactTestUtils.Simulate.change(node);
        ReactTestUtils.Simulate.keyDown(node, { key: "Enter", keyCode: 13, which: 13 });
    });

    it("Simulate all event types", () => {
        const element = document.createElement("div");
        const dom = ReactDOM.render(
            React.createElement("input", { type: "text" }),
            element,
        ) as Element;
        const node = ReactDOM.findDOMNode(dom) as HTMLInputElement;
        // @see: https://github.com/facebook/react/blob/v18.2.0/packages/react-dom/src/test-utils/ReactTestUtils.js#L620
        const simulatedEventTypes = [
            "blur",
            "cancel",
            "click",
            "close",
            "contextMenu",
            "copy",
            "cut",
            "auxClick",
            "doubleClick",
            "dragEnd",
            "dragStart",
            "drop",
            "focus",
            "input",
            "invalid",
            "keyDown",
            "keyPress",
            "keyUp",
            "mouseDown",
            "mouseUp",
            "paste",
            "pause",
            "play",
            "pointerCancel",
            "pointerDown",
            "pointerUp",
            "rateChange",
            "reset",
            "resize",
            "seeked",
            "submit",
            "touchCancel",
            "touchEnd",
            "touchStart",
            "volumeChange",
            "drag",
            "dragEnter",
            "dragExit",
            "dragLeave",
            "dragOver",
            "mouseMove",
            "mouseOut",
            "mouseOver",
            "pointerMove",
            "pointerOut",
            "pointerOver",
            "scroll",
            "toggle",
            "touchMove",
            "wheel",
            "abort",
            "animationEnd",
            "animationIteration",
            "animationStart",
            "canPlay",
            "canPlayThrough",
            "durationChange",
            "emptied",
            "encrypted",
            "ended",
            "error",
            "gotPointerCapture",
            "load",
            "loadedData",
            "loadedMetadata",
            "loadStart",
            "lostPointerCapture",
            "playing",
            "progress",
            "seeking",
            "stalled",
            "suspend",
            "timeUpdate",
            "transitionEnd",
            "waiting",
            "mouseEnter",
            "mouseLeave",
            "pointerEnter",
            "pointerLeave",
            "change",
            "select",
            "beforeInput",
            "compositionEnd",
            "compositionStart",
            "compositionUpdate",
        ] as const;

        simulatedEventTypes.forEach((eventType) => {
            ReactTestUtils.Simulate[eventType](node);
        });
    });

    it("renderIntoDocument", () => {
        const element = React.createElement("input", { type: "text" });
        ReactTestUtils.renderIntoDocument(element);
    });

    it("mockComponent", () => {
        ReactTestUtils.mockComponent(TestComponent, "div");
    });

    it("isElement", () => {
        const element = React.createElement(TestComponent);
        const isReactElement: boolean = ReactTestUtils.isElement(element);
    });

    it("isElementOfType", () => {
        const element = React.createElement(TestComponent);
        const isReactElement: boolean = ReactTestUtils.isElementOfType(element, TestComponent);
    });

    it("isDOMComponent", () => {
        const element = React.createElement("div");
        const instance = ReactTestUtils.renderIntoDocument(element) as HTMLDivElement;
        const isDOMElement: boolean = ReactTestUtils.isDOMComponent(instance);
    });

    it("isCompositeComponent", () => {
        const element = React.createElement(TestComponent);
        const instance: TestComponent = ReactTestUtils.renderIntoDocument(element);
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponent(instance);
    });

    it("isCompositeComponentWithType", () => {
        const element = React.createElement(TestComponent);
        const instance: TestComponent = ReactTestUtils.renderIntoDocument(element);
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponentWithType(instance, TestComponent);
    });

    it("findAllInRenderedTree", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findAllInRenderedTree(component, (i: React.ReactInstance) => true);
    });

    it("scryRenderedDOMComponentsWithClass", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.scryRenderedDOMComponentsWithClass(component, "class");
    });

    it("findRenderedDOMComponentWithClass", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findRenderedDOMComponentWithClass(component, "class");
    });

    it("scryRenderedDOMComponentsWithTag", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
    });

    it("findRenderedDOMComponentWithTag", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findRenderedDOMComponentWithTag(component, "tag");
    });

    it("scryRenderedComponentsWithType", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.scryRenderedComponentsWithType(component, TestComponent);
    });

    it("findRenderedComponentWithType", () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findRenderedComponentWithType(component, TestComponent);
    });

    describe("Shallow Rendering", () => {
        it("createRenderer", () => {
            const component = React.createElement(TestComponent);
            const shallowRenderer = ReactTestUtils.createRenderer();
        });

        it("shallowRenderer.render", () => {
            const component = React.createElement(TestComponent);
            const shallowRenderer = ReactTestUtils.createRenderer();
            shallowRenderer.render(component);
        });

        it("shallowRenderer.getRenderOutput", () => {
            const component = React.createElement(TestComponent);
            const shallowRenderer = ReactTestUtils.createRenderer();
            shallowRenderer.getRenderOutput();
        });
    });

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

    // only makes sense for `hydrateRoot`
    // @ts-expect-error
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
