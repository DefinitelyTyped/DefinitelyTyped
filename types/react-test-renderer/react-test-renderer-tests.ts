import React = require("react");
import { create } from "react-test-renderer";
import * as ReactTestUtils from './shallow';

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

class TestComponent extends React.Component<{}, {}> { }

const component = React.createElement(TestComponent);
const shallowRenderer = ReactTestUtils.createRenderer();
shallowRenderer.render(component);
shallowRenderer.getRenderOutput();
