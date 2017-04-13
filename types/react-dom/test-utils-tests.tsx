import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

class TestComponent extends React.Component<{}, {}> { }

describe('React dom test utils', () => {
    it('Simulate', () => {
        const element = document.createElement('div');
        const dom = ReactDOM.render(<input type="text" />, element) as Element;
        const node = ReactDOM.findDOMNode(dom) as HTMLInputElement;

        node.value = 'giraffe';
        ReactTestUtils.Simulate.change(node);
        ReactTestUtils.Simulate.keyDown(node, { key: "Enter", keyCode: 13, which: 13 });
    });

    it('renderIntoDocument', () => {
        const element = <input type="text" />;
        ReactTestUtils.renderIntoDocument(element);
    });

    it('mockComponent', () => {
        ReactTestUtils.mockComponent(TestComponent, 'div');
    });

    it('isElement', () => {
        const element = <TestComponent />;
        const isReactElement: boolean = ReactTestUtils.isElement(element);
    });

    it('isElementOfType', () => {
        const element = <TestComponent />;
        const isReactElement: boolean = ReactTestUtils.isElementOfType(element, TestComponent);
    });

    it('isDOMComponent', () => {
        const element = <div></div>;
        const instance = ReactTestUtils.renderIntoDocument(element) as HTMLDivElement;
        const isDOMElement: boolean = ReactTestUtils.isDOMComponent(instance);
    });

    it('isCompositeComponent', () => {
        const element = <TestComponent />;
        const instance = ReactTestUtils.renderIntoDocument(element) as TestComponent;
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponent(instance);
    });

    it('isCompositeComponentWithType', () => {
        const element = <TestComponent />;
        const instance = ReactTestUtils.renderIntoDocument(element) as TestComponent;
        const isCompositeComponent: boolean = ReactTestUtils.isCompositeComponentWithType(instance, TestComponent);
    });

    it('findAllInRenderedTree', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.findAllInRenderedTree(component, (i: React.ReactInstance) => true);
    });

    it('scryRenderedDOMComponentsWithClass', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'class');
    });

    it('findRenderedDOMComponentWithClass', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.findRenderedDOMComponentWithClass(component, 'class');
    });

    it('scryRenderedDOMComponentsWithTag', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
    });

    it('findRenderedDOMComponentWithTag', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.findRenderedDOMComponentWithTag(component, 'tag');
    });

    it('scryRenderedComponentsWithType', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.scryRenderedComponentsWithType(component, TestComponent);
    });

    it('findRenderedComponentWithType', () => {
        const component = ReactTestUtils.renderIntoDocument(<TestComponent />) as React.Component<any, any>;
        ReactTestUtils.findRenderedComponentWithType(component, TestComponent);
    });

    describe('Shallow Rendering', () => {
        it('createRenderer', () => {
            const component = <TestComponent />;
            const shallowRenderer = ReactTestUtils.createRenderer();
        });

        it('shallowRenderer.render', () => {
            const component = <TestComponent />;
            const shallowRenderer = ReactTestUtils.createRenderer();
            shallowRenderer.render(component);
        });

        it('shallowRenderer.getRenderOutput', () => {
            const component = <TestComponent />;
            const shallowRenderer = ReactTestUtils.createRenderer();
            shallowRenderer.getRenderOutput();
        });
    });
});
