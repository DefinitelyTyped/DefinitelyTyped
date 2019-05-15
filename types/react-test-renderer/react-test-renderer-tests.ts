import React = require("react");
import { act, create, ReactTestInstance } from "react-test-renderer";
import { createRenderer } from 'react-test-renderer/shallow';

class TestComponent extends React.Component { }

const renderer = create(React.createElement("div"), {
    createNodeMock: (el: React.ReactElement) => {
        return {};
    }
});

const json = renderer.toJSON();
if (json) {
    json.type = "t";
    json.props = {
        prop1: "p",
    };
    json.children = [json];
}

const tree = renderer.toTree();
if (tree) {
    tree.type = "t";
    tree.props = {
        prop1: "p",
    };
    tree.children = [tree];
    tree.rendered = tree;
    tree.nodeType = "component";
    tree.nodeType = "host";
}

renderer.update(React.createElement(TestComponent));

renderer.unmount();
renderer.unmount(React.createElement(TestComponent));

function testInstance(inst: ReactTestInstance) {
    inst.children = [inst, "a"];
    inst.parent = instance;
    inst.parent = null;
    inst.props = {
        prop1: "p",
    };
    inst.type = "a";
    testInstance(inst.find(n => n.type === "a"));
    testInstance(inst.findByProps({ prop1: "p" }));
    testInstance(inst.findByType("a"));
    testInstance(inst.findByType(TestComponent));
    inst.findAll(n => n.type === "div", { deep: true }).map(testInstance);
    inst.findAllByProps({ prop1: "p" }, { deep: true }).map(testInstance);
    inst.findAllByType("a", { deep: true }).map(testInstance);
    inst.findAllByType(TestComponent, { deep: true }).map(testInstance);
}

const instance = renderer.getInstance();
if (instance) {
    testInstance(instance);
}

testInstance(renderer.root);

const component = React.createElement(TestComponent);
const shallowRenderer = createRenderer();
shallowRenderer.render(component);
shallowRenderer.getRenderOutput();
shallowRenderer.getMountedInstance();

// Only synchronous, void callbacks are acceptable for act()
act(() => {});
// $ExpectError
act(async () => {});
// $ExpectError
act(() => null);
// $ExpectError
Promise.resolve(act(() => {}));
