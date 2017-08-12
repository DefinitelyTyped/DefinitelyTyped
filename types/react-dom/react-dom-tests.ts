import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as ReactDOMNodeStream from 'react-dom/node-stream';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as stream from 'stream';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

class TestComponent extends React.Component { }

describe('ReactDOM', () => {
    it('render', () => {
        let rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
    });

    it('unmounts', () => {
        let rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.unmountComponentAtNode(rootElement);
    });

    it('find dom node', () => {
        let rootElement = document.createElement('div');
        ReactDOM.render(React.createElement('div'), rootElement);
        ReactDOM.findDOMNode(rootElement);
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

describe('ReactDOMNodeStream', () => {
    it('renderToStream', () => {
        const content: stream.Readable = ReactDOMNodeStream.renderToStream(React.createElement('div'));
    });

    it('renderToStaticStream', () => {
        const content: stream.Readable = ReactDOMNodeStream.renderToStaticStream(React.createElement('div'));
    });
});

describe('React dom test utils', () => {
    it('Simulate', () => {
        const element = document.createElement('div');
        const dom = ReactDOM.render(
            React.createElement('input', { type: 'text' }),
            element
        ) as Element;
        const node = ReactDOM.findDOMNode(dom) as HTMLInputElement;

        node.value = 'giraffe';
        ReactTestUtils.Simulate.change(node);
        ReactTestUtils.Simulate.keyDown(node, { key: "Enter", keyCode: 13, which: 13 });
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
        const instance = ReactTestUtils.renderIntoDocument(element) as TestComponent;
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponent(instance);
    });

    it('isCompositeComponentWithType', () => {
        const element = React.createElement(TestComponent);
        const instance = ReactTestUtils.renderIntoDocument(element) as TestComponent;
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
});
