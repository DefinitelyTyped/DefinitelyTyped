import * as utils from "snapdragon-util";

const node: { type: string; value: string; nodes?: Array<{ type: string; value: string; [key: string]: any }> } = {
    type: "brace",
    value: "{",
    nodes: [
        { type: "brace.open", value: "{" },
        { type: "text", value: "abc" },
        { type: "brace.close", value: "}" },
    ],
};

// isNode
const isNodeResult: boolean = utils.isNode(node);
utils.isNode("not a node");

// isType
const isTypeStr: boolean = utils.isType(node, "brace");
const isTypeRe: boolean = utils.isType(node, /brace/);
const isTypeArr: boolean = utils.isType(node, ["brace", "bracket"]);

// hasType
const hasType: boolean = utils.hasType(node, "text");

// isOpen / isClose / isBlock
const open = { type: "brace.open", value: "{" };
const close = { type: "brace.close", value: "}" };
const isOpen: boolean = utils.isOpen(open);
const isClose: boolean = utils.isClose(close);
const isBlock: boolean = utils.isBlock(node);

// value
const val: string | undefined = utils.value(node);

// isEmpty
const empty: boolean = utils.isEmpty(node);
const emptyFn: boolean = utils.isEmpty(node, n => n.type === "text");

// noop / identity
utils.noop(node);
utils.identity(node);

// append
const appendFn: (n: { type: string; value: string; [key: string]: any }) => void = utils.append("test");

// toNoop
utils.toNoop(node);
utils.toNoop(node, []);

// visit / mapVisit
utils.visit(node, n => {
    const t: string = n.type;
});
utils.mapVisit(node, n => {
    const t: string = n.type;
});

// firstOfType / findNode / lastNode
const firstText = utils.firstOfType(node.nodes!, "text");
const foundByType = utils.findNode(node.nodes!, "text");
const foundByIdx = utils.findNode(node.nodes!, 1);
const lastChild = utils.lastNode(node);

// last
const lastEl: any = utils.last([1, 2, 3]);
const lastN: any = utils.last([1, 2, 3], 2);

// addOpen / addClose / wrapNodes
class MockNode {
    type: string;
    value: string;
    [key: string]: any;
    constructor(type: string, value?: string) {
        this.type = type;
        this.value = value || "";
    }
}

const blockNode: { type: string; value: string; nodes: Array<{ type: string; value: string; [key: string]: any }> } = {
    type: "paren",
    value: "",
    nodes: [{ type: "text", value: "abc" }],
};
utils.addOpen(blockNode, MockNode, "(");
utils.addClose(blockNode, MockNode, ")");
utils.wrapNodes(blockNode, MockNode);
utils.addOpen(blockNode, MockNode, "(", n => n.type === "paren");

// pushNode / unshiftNode
utils.pushNode(node, { type: "text", value: "new" });
utils.unshiftNode(node, { type: "text", value: "first" });

// popNode / shiftNode / removeNode
const popped = utils.popNode(node);
const shifted = utils.shiftNode(node);
const childNode = { type: "text", value: "abc" };
const removed = utils.removeNode(node, childNode);

// hasNode / hasOpen / hasClose / hasOpenAndClose
const hasNode: boolean = utils.hasNode(node, childNode);
const hasOpen: boolean = utils.hasOpen(node);
const hasClose: boolean = utils.hasClose(node);
const hasOpenAndClose: boolean = utils.hasOpenAndClose(node);

// State management
const state: { inside: { [type: string]: Array<{ type: string; [key: string]: any }> } } = { inside: {} };
utils.addType(state, node);
utils.removeType(state, node);
const insideType: boolean = utils.isInsideType(state, "brace");
const insideNode: boolean = utils.isInside(state, node, "brace");

// Utility functions
const arr: any[] = utils.arrayify("hello");
const arrFromArr: any[] = utils.arrayify(["a", "b"]);
const str: string = utils.stringify(["a", "b", "c"]);
const strSingle: string = utils.stringify("hello");
const trimmed: string = utils.trim("  hello  ");
