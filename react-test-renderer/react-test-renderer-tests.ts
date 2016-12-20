import React = require("react");
import { create } from ".";

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
