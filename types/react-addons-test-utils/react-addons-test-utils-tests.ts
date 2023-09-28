import * as React from "react";
import * as TestUtils from "react-addons-test-utils";

declare const container: Element;

interface Props {
    hello: string;
    world?: string | null | undefined;
    foo: number;
}
declare class ModernComponent extends React.Component<Props> {}

interface SCProps {
    foo?: number | undefined;
}
function FunctionComponent(props: SCProps) {
    return props.foo ? DOM.div(null, props.foo) : null;
}

const props: Props & React.ClassAttributes<any> = {
    key: 42,
    ref: "myComponent42",
    hello: "world",
    foo: 42,
};
declare const div: React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const element: React.CElement<Props, ModernComponent> = React.createElement(ModernComponent, props);
const inst: ModernComponent = TestUtils.renderIntoDocument<ModernComponent>(element);
const node: Element = TestUtils.renderIntoDocument(div);

TestUtils.Simulate.click(node);
TestUtils.Simulate.change(node);
TestUtils.Simulate.keyDown(node, { key: "Enter", cancelable: false });

const renderer: TestUtils.ShallowRenderer = TestUtils.createRenderer();
renderer.render(React.createElement(ModernComponent));
const output: React.ReactElement<Props> = renderer.getRenderOutput();

const foundComponent: ModernComponent = TestUtils.findRenderedComponentWithType(inst, ModernComponent);
const foundComponents: ModernComponent[] = TestUtils.scryRenderedComponentsWithType(inst, ModernComponent);

// ReactTestUtils custom type guards

const emptyElement1: React.ReactElement<Props> = React.createElement(ModernComponent);
if (TestUtils.isElementOfType(emptyElement1, FunctionComponent)) {
    emptyElement1.props.foo;
}
const emptyElement2: React.ReactElement<SCProps> = React.createElement(FunctionComponent);
if (TestUtils.isElementOfType(emptyElement2, FunctionComponent)) {
    emptyElement2.props.foo;
}

if (TestUtils.isDOMComponent(container)) {
    const reassignedContainer: Element = container;
} else if (TestUtils.isCompositeComponent(new ModernComponent({ hello: "hi", foo: 3 }))) {
    new ModernComponent({ hello: "hi", foo: 3 }).props;
}
