import { AST, Property, TreeNode, Node } from "idyll-compiler";

import {
    appendNode,
    getNodesByName,
    appendNodes,
    prependNode,
    prependNodes,
    createNode,
    getChildren,
    walkNodes,
    findNodes,
    modifyChildren,
    filterChildren,
    filterNodes,
    modifyNodesByName,
    getProperty,
    getProperties,
    getPropertiesByType,
    removeNodesByName,
    setProperty,
    setProperties,
    removeProperty
} from "idyll-ast";

const ast: AST = [
    ["h2", [], []],
    "world",
    ["h1", [], ["child1", ["child2", [], []]]]
];
const prop: Property = ["className", ["value", "hello"]];

// $ExpectType Node[]
appendNode(ast, "hello");

// $ExpectType Node[]
appendNode(getNodesByName(ast, "div"), "test");

// $ExpectType Node[]
appendNodes(ast, [["strong", [], ["div", ["pre", [], []]]], "test"]);

// $ExpectType Node[]
prependNode(getNodesByName(ast, "div"), "test");

// $ExpectType Node[]
prependNodes(ast, [["strong", [], ["div", ["pre", [], []]]], "test"]);

// $ExpectType TreeNode
createNode("div", { prop1: "prop1", prop2: ["expression", "x=2"] }, []);

// $ExpectType Node[]
getChildren(ast[0]);

// $ExpectType void
walkNodes(ast, (n: Node) => {
    (n as TreeNode)[0] = "funky-name";
});

// $ExpectType Node[]
findNodes(ast, n => n instanceof Array);

// $ExpectType Node
modifyChildren(ast[0], (n: Node) => {
    if (typeof n === "object") {
        n[0] = "somename";
    }
});
// $ExpectType Node[]
getNodesByName(ast, "h1");

// $ExpectType Node
filterChildren(ast[1], n => n === "world");

// $ExpectType Node[]
filterNodes(ast, n => (n instanceof Object ? n[0] === "h1" : false));

// $ExpectType Node[]
modifyNodesByName(ast, "h2", n => {
    typeof n === "object" ? (n[1] = []) : undefined;
});

// $ExpectType [PropType, PropData] | null
getProperty(ast[1], "someProp");
// $ExpectType [string, [PropType, PropData]]
getProperties(ast[1])[0];
// $ExpectType [string, [PropType, PropData]][]
getPropertiesByType(["h1", [], []], "variable");

// $ExpectType Node[]
removeNodesByName(ast, "h1");

// $ExpectType Node
setProperty(ast[0], "prop", 9);

// $ExpectType Node
setProperties(ast[1], { prop1: ["expression", "x"], prop2: 3 });

// $ExpectType Node
removeProperty(ast[0], "prop1");
