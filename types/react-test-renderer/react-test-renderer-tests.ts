import * as React from "react";
import { create } from "react-test-renderer";
import { createRenderer } from 'react-test-renderer/shallow';

const tree = create(React.createElement("div"), {
    createNodeMock: (el: React.ReactElement<any>) => {
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
