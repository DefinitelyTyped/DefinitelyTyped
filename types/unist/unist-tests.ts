import { Literal, Node, Parent, Point, Position } from "unist";

const point: Point = {
    line: 1,
    column: 1,
    offset: 0,
};

const position: Position = {
    start: point,
    end: point,
};

const node: Node = {
    type: "node",
    position,
};

const text: Literal = {
    type: "text",
    position,
    value: "value",
};

const parent: Parent = {
    type: "parent",
    position,
    children: [node, text],
};

const noExtraKeysInNode: Node = {
    type: "noExtraKeysInNode",
    // @ts-expect-error: `extra` does not exist on the abstract `Node` type: extend `Node` to add it.
    extra: "extra",
};

const noChildrenInNode: Node = {
    type: "noChildrenInNode",
    // @ts-expect-error: `children` does not exist on the abstract `Node` type: use `Parent` to get it.
    children: [],
};

const stringLiteral: Literal = {
    type: "text",
    position,
    value: "value",
};

const literalParent: Parent = {
    type: "literalParent",
    position,
    children: [stringLiteral],
};

// Register a field on `Data`, which will be available on all nodes.
declare module "unist" {
    interface Data {
        someField?: string | undefined;
    }
}

const nodeDataKeyOk: Node = {
    type: "nodeData",
    data: { someField: "value" },
};

const nodeDataKeyNok: Node = {
    type: "nodeData",
    data: {
        // @ts-expect-error: `someField` is supposed to be `string | undefined`.
        someField: 123,
    },
};

function exampleNodeUtil(node: Node) {}

exampleNodeUtil({ type: "example" });
// @ts-expect-error: `type` is needed by the abstract `Node` interface.
exampleNodeUtil({ notType: "whoops" });

function exampleLiteralUtil(node: Literal) {}

exampleLiteralUtil({ type: "example", value: "value" });
// @ts-expect-error: `value` is needed by the abstract `Literal` interface.
exampleLiteralUtil({ type: "example" });

function exampleParentUtil(node: Parent) {}

exampleParentUtil({ type: "example", children: [{ type: "example" }] });
// @ts-expect-error: `children` is needed by the abstract `Parent` interface.
exampleParentUtil({ type: "example" });
