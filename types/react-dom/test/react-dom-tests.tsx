import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import * as ReactDOMServer from 'react-dom/server';
import * as ReactTestUtils from 'react-dom/test-utils';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

class TestComponent extends React.Component<{ x: string }> {}

describe('ReactDOM', () => {
    it('render', () => {
        const rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.render(React.createElement('div'), document.createDocumentFragment());
        ReactDOM.render(React.createElement('div'), document);
    });

    it('hydrate', () => {
        const rootElement = document.createElement('div');
        ReactDOM.hydrate(React.createElement('div'), rootElement);
        ReactDOM.hydrate(React.createElement('div'), document.createDocumentFragment());
        ReactDOM.hydrate(React.createElement('div'), document);
    });

    it('unmounts', () => {
        const rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.unmountComponentAtNode(rootElement);
    });

    it('works with document fragments', () => {
        const fragment = document.createDocumentFragment();
        ReactDOM.render(React.createElement('div'), fragment);
        ReactDOM.unmountComponentAtNode(fragment);
    });

    it('find dom node', () => {
        const rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.findDOMNode(rootElement);
        ReactDOM.findDOMNode(null);
        ReactDOM.findDOMNode(undefined);
    });

    it('createPortal', () => {
        const rootElement = document.createElement('div');
        const portalTarget = document.createElement('div');

        class ClassComponent extends React.Component {
            render() {
                return ReactDOM.createPortal(<div />, portalTarget);
            }
        }

        ReactDOM.createPortal(<div />, document.createElement('div'));
        ReactDOM.createPortal(<div />, document.createElement('div'), null);
        ReactDOM.createPortal(<div />, document.createElement('div'), 'key');

        ReactDOM.createPortal(React.createElement('div'), document.createElement('div'));
        ReactDOM.createPortal(React.createElement('div'), document.createElement('div'), null);
        ReactDOM.createPortal(React.createElement('div'), document.createElement('div'), 'key');
        ReactDOM.createPortal(React.createElement('div'), document.createDocumentFragment());

        ReactDOM.render(<ClassComponent />, rootElement);
    });

    it('flushSync', () => {
        // $ExpectType void
        ReactDOM.flushSync(() => {});
        // $ExpectType number
        ReactDOM.flushSync(() => 42);
        // $ExpectType number
        ReactDOM.flushSync(() => 42, 'not used');
        // $ExpectType number
        ReactDOM.flushSync((a: string) => 42, 'not used');
        // @ts-expect-error
        ReactDOM.flushSync((a: string) => 42);
        // @ts-expect-error
        ReactDOM.flushSync((a: string) => 42, 100);
    });
});

describe('ReactDOMServer', () => {
    it('renderToString', () => {
        const content: string = ReactDOMServer.renderToString(React.createElement('div'));
    });

    it('renderToStaticMarkup', () => {
        const content: string = ReactDOMServer.renderToStaticMarkup(React.createElement('div'));
    });
});

describe('React dom test utils', () => {
    it('Simulate', () => {
        const element = document.createElement('div');
        const dom = ReactDOM.render(React.createElement('input', { type: 'text' }), element) as Element;
        const node = ReactDOM.findDOMNode(dom) as HTMLInputElement;

        node.value = 'giraffe';
        ReactTestUtils.Simulate.change(node);
        ReactTestUtils.Simulate.keyDown(node, { key: 'Enter', keyCode: 13, which: 13 });
    });

    it('renderIntoDocument', () => {
        const element = React.createElement('input', { type: 'text' });
        ReactTestUtils.renderIntoDocument(element);
    });

    it('mockComponent', () => {
        ReactTestUtils.mockComponent(TestComponent, 'div');
    });

    it('isElement', () => {
        const element = React.createElement(TestComponent);
        const isReactElement: boolean = ReactTestUtils.isElement(element);
    });

    it('isElementOfType', () => {
        const element = React.createElement(TestComponent);
        const isReactElement: boolean = ReactTestUtils.isElementOfType(element, TestComponent);
    });

    it('isDOMComponent', () => {
        const element = React.createElement('div');
        const instance = ReactTestUtils.renderIntoDocument(element) as HTMLDivElement;
        const isDOMElement: boolean = ReactTestUtils.isDOMComponent(instance);
    });

    it('isCompositeComponent', () => {
        const element = React.createElement(TestComponent);
        const instance: TestComponent = ReactTestUtils.renderIntoDocument(element);
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponent(instance);
    });

    it('isCompositeComponentWithType', () => {
        const element = React.createElement(TestComponent);
        const instance: TestComponent = ReactTestUtils.renderIntoDocument(element);
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponentWithType(instance, TestComponent);
    });

    it('findAllInRenderedTree', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findAllInRenderedTree(component, (i: React.ReactInstance) => true);
    });

    it('scryRenderedDOMComponentsWithClass', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'class');
    });

    it('findRenderedDOMComponentWithClass', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findRenderedDOMComponentWithClass(component, 'class');
    });

    it('scryRenderedDOMComponentsWithTag', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
    });

    it('findRenderedDOMComponentWithTag', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findRenderedDOMComponentWithTag(component, 'tag');
    });

    it('scryRenderedComponentsWithType', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.scryRenderedComponentsWithType(component, TestComponent);
    });

    it('findRenderedComponentWithType', () => {
        const component = ReactTestUtils.renderIntoDocument(React.createElement(TestComponent));
        ReactTestUtils.findRenderedComponentWithType(component, TestComponent);
    });

    describe('Shallow Rendering', () => {
        it('createRenderer', () => {
            const component = React.createElement(TestComponent);
            const shallowRenderer = ReactTestUtils.createRenderer();
        });

        it('shallowRenderer.render', () => {
            const component = React.createElement(TestComponent);
            const shallowRenderer = ReactTestUtils.createRenderer();
            shallowRenderer.render(component);
        });

        it('shallowRenderer.getRenderOutput', () => {
            const component = React.createElement(TestComponent);
            const shallowRenderer = ReactTestUtils.createRenderer();
            shallowRenderer.getRenderOutput();
        });
    });

    describe('act', () => {
        describe('with sync callback', () => {
            it('accepts a callback that is void', () => {
                ReactTestUtils.act(() => {});
            });
            it('rejects a callback that returns null', () => {
                // @ts-expect-error
                ReactTestUtils.act(() => null);
            });
            it('returns a type that is not Promise-like', () => {
                // tslint:disable-next-line no-void-expression
                const result = ReactTestUtils.act(() => {});
                // @ts-expect-error
                result.then(x => {});
            });
        });
        describe('with async callback', () => {
            it('accepts a callback that is void', async () => {
                await ReactTestUtils.act(async () => {});
            });
            it('rejects a callback that returns a value', async () => {
                // @ts-expect-error
                await ReactTestUtils.act(async () => null);
            });
            it('returns a Promise-like', () => {
                const result = ReactTestUtils.act(async () => {});
                result.then(x => {});
            });
        });
    });
});

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
        identifierPrefix: 'react-18-app',
        onRecoverableError: error => {
            console.error(error);
        },
    });
    hydrateable.render(<div>render update</div>);
    ReactDOMClient.hydrateRoot(document, {
        // Forgot `initialChildren`
        // @ts-expect-error
        identifierPrefix: 'react-18-app',
    });

    ReactDOMClient.hydrateRoot(document.getElementById('root')!, false);
}

/**
 * source:
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
    const res: Response = {} as any;
    const stream = ReactDOMServer.renderToPipeableStream(<App />, {
        onShellReady() {
            res.statusCode = didError ? 500 : 200;
            res.setHeader('Content-type', 'text/html');
            stream.pipe(res);
        },
        onShellError(error) {
            res.statusCode = 500;
            res.send('<!doctype html><p>Loading...</p><script src="clientrender.js"></script>');
        },
        onAllReady() {},
        onError(err) {
            didError = true;
            console.error(err);
        },
    });
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
            headers: { 'Content-Type': 'text/html' },
        });
    } catch (error) {
        return new Response('<!doctype html><p>Loading...</p><script src="clientrender.js"></script>', {
            status: 500,
            headers: { 'Content-Type': 'text/html' },
        });
    }
}
