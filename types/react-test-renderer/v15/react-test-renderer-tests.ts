import * as React from "react";
import { create } from "react-test-renderer";
import { createRenderer } from 'react-test-renderer/shallow';

const tree = create(React.createElement("div"), {
    createNodeMock: (el: React.ReactElement) => {
        return {};
    }
}).toJSON();

tree.type = "t";
tree.props = {
    prop1: "p",
};
tree.children = [tree];
tree.$$typeof = "t";

class TestComponent extends React.Component { }

const component = React.createElement(TestComponent);
const shallowRenderer = createRenderer();
shallowRenderer.render(component);
shallowRenderer.getRenderOutput();

[undefined, null, true, false, 0, 1, "", "test"].forEach((children) => {
    const renderer = create(React.createElement("div", { children }), {
        createNodeMock: (el: React.ReactElement) => {
            return {};
        }
    });
    const json = renderer.toJSON();

    if (!json || typeof json !== "object" || Array.isArray(json) || json.children !== children) {
        throw(new Error(`Type of children ${children} doesn't match!`));
    }
});
